// Tests du solveur de LaboSim (Node >= 16, sans dépendance) : `npm test`
const fs = require('fs'), path = require('path');
const code = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8').replace(/example\(\);\s*$/, '');
const el = () => ({ style: {}, dataset: {}, classList: { toggle() {}, remove() {} }, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, set innerHTML(v) { this._h = v }, get innerHTML() { return this._h }, set textContent(v) {}, value: '', onclick: null, createSVGPoint: () => ({}) });
const store = {};
global.document = { getElementById: id => store[id] || (store[id] = el()), querySelectorAll: () => [] };
global.window = { addEventListener() {} };
const L = new Function(code + `;return{add,wire,connect,render,mkWave,bz,tp,wsamples,buildPdf,pdfWrap,serializeMontage,loadMontage,buildMenu,setFilter(v){tagFilter=v},get TAGS(){return TAGS},menuHtml(){return menuEl.innerHTML},reset(){comps=[];wires=[];notes=[];uid=1;sel=selW=selN=pend=null},get err(){return err},get wires(){return wires},get comps(){return comps},get solve(){return solve}}`)();

let fail = 0;
const near = (name, got, want, tol) => { const ok = Math.abs(got - want) <= tol * Math.max(1, Math.abs(want)); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + ' → ' + got.toPrecision(5) + ' (attendu ' + want + ')'); };
const yes = (name, c) => { if (!c) fail++; console.log((c ? 'ok   ' : 'FAIL ') + name); };
const place = (c, w, t) => { const p = L.bz(L.tp(w.a), L.tp(w.b), w, t); c.x = p.x; c.y = p.y };

// 1. Loi d'Ohm
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'); b.val = 10; r.val = 100;
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render(); near('I = U/R (A)', -a.I, 0.1, 0.01); }
// 2. Court-circuit
L.reset(); { const b = L.add('bat'); L.wire(b.id + ':1', b.id + ':0'); L.render(); yes('court-circuit signalé', L.err !== ''); }
// 3. Filtre RC avec GBF + oscilloscope
L.reset(); { const g = L.add('gbf'), r = L.add('res'), c = L.add('cap'), o = L.add('scope'); r.val = 1000; c.val = 0.1; g.amp = 5;
  L.wire(g.id + ':1', r.id + ':0'); L.wire(r.id + ':1', c.id + ':0'); L.wire(c.id + ':1', g.id + ':0'); L.wire(o.id + ':1', r.id + ':0'); L.wire(o.id + ':0', g.id + ':0'); L.wire(o.id + ':3', c.id + ':0'); L.render();
  near('CH1 crête (V)', L.mkWave(o, 0)(0), 5, 0.01); near('CH2 efficace (V)', Math.hypot(...o.sig[1][1]), 5 / Math.SQRT2 / Math.hypot(1, 2 * Math.PI * 1000 * 1000 * 1e-7), 0.01); }
// 4. ISW8000 en câblage 4 fils : P, Q, S, PF
L.reset(); { const s = L.add('ac'), w = L.add('watt'), r = L.add('res'), l = L.add('ind'); s.val = 24; r.val = 22; l.val = 200; l.r = 10;
  L.wire(s.id + ':1', w.id + ':1'); L.wire(w.id + ':3', r.id + ':0'); L.wire(r.id + ':1', l.id + ':0'); L.wire(l.id + ':1', w.id + ':2'); L.wire(w.id + ':0', s.id + ':0'); L.render();
  const X = 2 * Math.PI * 50 * 0.2, Z = Math.hypot(32, X), I = 24 / Z;
  near('P (W)', w.P, I * I * 32, 0.01); near('Q (VAr)', w.Q, I * I * X, 0.01); near('S (VA)', w.Ur * w.Ir, 24 * I, 0.01); near('PF', w.P / (w.Ur * w.Ir), 32 / Z, 0.01); }
// 5. ISW8000 en câblage 3 fils (phase source et charge sur la rouge LOAD)
L.reset(); { const s = L.add('ac'), w = L.add('watt'), r = L.add('res'); s.val = 24; r.val = 100;
  L.wire(s.id + ':1', w.id + ':3'); L.wire(w.id + ':3', r.id + ':0'); L.wire(r.id + ':1', w.id + ':2'); L.wire(w.id + ':0', s.id + ':0'); L.render();
  near('3 fils : P (W)', w.P, 24 * 24 / 100, 0.01); }
// 6. Pince unique : courant (A) puis puissance avec cordons tension
L.reset(); { const b = L.add('bat'), r = L.add('res'), p = L.add('pince'), q = L.add('pince'); b.val = 10; r.val = 100; p.mode = 'DC'; q.disp = 'W';
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.wire(q.id + ':1', b.id + ':1'); L.wire(q.id + ':0', b.id + ':0');
  place(p, L.wires[0], .5); place(q, L.wires[1], .5); L.render();
  near('pince A (A)', Math.abs(p.I), 0.1, 0.01); near('pince W (W)', q.P, 1, 0.02);
  q.rev = true; L.render(); near('pince inversée (W)', q.P, -1, 0.02); }
// 7. Commutateur 2 voies
L.reset(); { const b = L.add('bat'), k = L.add('com'), r1 = L.add('res'), r2 = L.add('res'), a = L.add('amp'); b.val = 10; r1.val = 100; r2.val = 200;
  L.wire(b.id + ':1', k.id + ':1'); L.wire(k.id + ':0', r1.id + ':0'); L.wire(k.id + ':2', r2.id + ':0'); L.wire(r1.id + ':1', a.id + ':1'); L.wire(r2.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0');
  k.pos = 0; L.render(); near('voie A (A)', -a.I, 0.1, 0.01); k.pos = 1; L.render(); near('voie B (A)', -a.I, 0.05, 0.01); }
// 8. Relais : la bobine commande le contact (hystérésis)
L.reset(); { const b = L.add('bat'), k = L.add('sw'), r = L.add('rel'), b2 = L.add('bat'), res = L.add('res'), a = L.add('amp'); b.val = 12; b2.val = 10; res.val = 100;
  L.wire(b.id + ':1', k.id + ':0'); L.wire(k.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0');
  L.wire(b2.id + ':1', r.id + ':2'); L.wire(r.id + ':3', res.id + ':0'); L.wire(res.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b2.id + ':0');
  k.closed = false; L.render(); near('relais au repos (A)', Math.abs(a.I), 0, 0.01);
  k.closed = true; L.render(); yes('relais collé', r.on); near('contact fermé (A)', -a.I, 0.1, 0.01);
  k.closed = false; L.render(); yes('relais relâché', !r.on); }
// 9. Contacteur 2 NO
L.reset(); { const b = L.add('bat'), c = L.add('ctc'), b2 = L.add('bat'), r1 = L.add('res'), r2 = L.add('res'); b.val = 24; b2.val = 10; r1.val = 100; r2.val = 100;
  L.wire(b.id + ':1', c.id + ':0'); L.wire(c.id + ':1', b.id + ':0');
  L.wire(b2.id + ':1', c.id + ':2'); L.wire(c.id + ':3', r1.id + ':0'); L.wire(r1.id + ':1', b2.id + ':0'); L.wire(b2.id + ':1', c.id + ':4'); L.wire(c.id + ':5', r2.id + ':0'); L.wire(r2.id + ':1', b2.id + ':0'); L.render();
  yes('contacteur collé', c.on); near('2 contacts : courant de la source 2 (A)', Math.abs(b2.I), 0.2, 0.02); }
// 10. Tracés de câbles : câble à points, droit, orthogonal
L.reset(); { const b = L.add('bat', 200, 300), r = L.add('res', 500, 300); L.wire(b.id + ':1', r.id + ':0'); const w = L.wires[0], a = L.tp(w.a), c = L.tp(w.b), d0 = L.bz(a, c, w, .5);
  w.pts = [{ x: 350, y: 480 }]; const S = L.wsamples(w, a, c); yes('câble : passe par le point', Math.min(...S.map(p => Math.hypot(p.x - 350, p.y - 480))) < 3);
  w.mode = 'line'; const m = L.bz(a, c, w, .5); near('droit : milieu x', m.x, (a.x + c.x) / 2, 0.01); near('droit : milieu y', m.y, (a.y + c.y) / 2, 0.01);
  w.mode = 'ortho'; const P = L.wsamples(w, a, c); yes('orthogonal : segments horizontaux ou verticaux', P.every((p, i) => i === 0 || Math.abs(p.x - P[i - 1].x) < 1e-6 || Math.abs(p.y - P[i - 1].y) < 1e-6));
  w.os = { y1: 420, x2: 350, y3: 420 }; yes('orthogonal : segment déplacé', L.wsamples(w, a, c).some(p => Math.abs(p.y - 420) < 1e-6)); }
// 10b. Moteur à courant continu, moteur monophasé, lampes
L.reset(); { const b = L.add('bat'), m = L.add('mdc'), a = L.add('amp'); b.val = 12;
  L.wire(b.id + ':1', m.id + ':1'); L.wire(m.id + ':0', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  near('MCC à vide : courant (A)', -a.I, 0.15, 0.1); near('MCC à vide : vitesse (tr/min)', m.rpm, 3000, 0.03);
  m.load = 100; L.render(); near('MCC en charge : courant (A)', -a.I, 1.5, 0.1); yes('MCC en charge : plus lent', m.rpm < 2600 && m.rpm > 1800);
  b.val = 1; L.render(); yes('MCC : ne démarre pas sous 1 V en charge', m.rpm === 0); }
L.reset(); { const s = L.add('ac'), w = L.add('watt'), m = L.add('mac'); s.val = 230;
  L.wire(s.id + ':1', w.id + ':1'); L.wire(w.id + ':3', m.id + ':1'); L.wire(m.id + ':0', w.id + ':2'); L.wire(w.id + ':0', s.id + ':0'); L.render();
  near('moteur monophasé : cos φ', w.P / (w.Ur * w.Ir), 0.82, 0.01); near('moteur monophasé : P absorbée (W)', w.P, 370 / 0.7, 0.01); yes('moteur monophasé : tourne', m.rpm > 2500); yes('moteur monophasé : Q > 0', w.Q > 0); }
L.reset(); { const s = L.add('ac'), w = L.add('watt'), l = L.add('led'); s.val = 230;
  L.wire(s.id + ':1', w.id + ':1'); L.wire(w.id + ':3', l.id + ':1'); L.wire(l.id + ':0', w.id + ':2'); L.wire(w.id + ':0', s.id + ':0'); L.render();
  near('LED : P (W)', w.P, 8, 0.02); near('LED : cos φ', w.P / (w.Ur * w.Ir), 0.6, 0.02); yes('LED : courant en avance (Q < 0)', w.Q < 0); }
// 11. Notes de repérage, PDF
L.reset(); L.add('bat'); const pdf = L.buildPdf([{ ops: 'BT /F1 12 Tf 40 500 Td (Test) Tj ET\n', img: null }], null);
yes('PDF construit', pdf.size > 300); yes('retour à la ligne', L.pdfWrap('un deux trois quatre', 9).length === 3);
// 11b. Le moteur CC s'arrête quand il n'est plus alimenté
L.reset(); { const b = L.add('bat'), k = L.add('sw'), m = L.add('mdc'); b.val = 12; k.closed = true;
  L.wire(b.id + ':1', k.id + ':0'); L.wire(k.id + ':1', m.id + ':1'); L.wire(m.id + ':0', b.id + ':0'); L.render(); yes('MCC alimenté : tourne', m.rpm > 2500);
  k.closed = false; L.render(); yes('MCC non alimenté : arrêté', m.rpm === 0 && m.run === 0); k.closed = true; L.render(); yes('MCC ré-alimenté : retourne', m.rpm > 2500);
  b.val = 12; m.load = 100; k.closed = false; L.render(); yes('MCC en charge coupé : arrêté', m.rpm === 0); }
// 11c. Alimentation triphasée + moteur 1,5 kW (étoile / triangle) + couple-mètre et compte-tours
L.reset(); { const a = L.add('a3', 190, 300), m = L.add('m3', 640, 150), t = L.add('tach', 730, 190), q = L.add('cpm', 580, 220); a.val = 400;
  L.wire(a.id + ':1', m.id + ':0'); L.wire(a.id + ':2', m.id + ':1'); L.wire(a.id + ':3', m.id + ':2'); L.render();
  near('moteur 3~ étoile : P (W)', m.P, 1500 / 0.8, 0.02); near('moteur 3~ : Q (VAr)', m.Q, 1500 / 0.8 * Math.tan(Math.acos(0.84)), 0.02); near('moteur 3~ : vitesse (tr/min)', m.rpm, 1440, 0.01);
  near('compte-tours', t.tv, 1440, 0.01); near('couple-mètre (N·m)', q.tv, 0.8 * 1500 / 0.8 / (2 * Math.PI * 1440 / 60), 0.02);
  m.cpl = 'D'; L.render(); near('mauvais couplage (triangle sur 400 V) : P × 3', m.P, 3 * (400 / 230) ** 2 / 3 * 1500 / 0.8, 0.03); }
// 11d. Caisse de charge mono et tri
L.reset(); { const s = L.add('ac'), c = L.add('cch'); s.val = 230; c.val = 1000;
  L.wire(s.id + ':1', c.id + ':1'); L.wire(c.id + ':0', s.id + ':0'); L.render(); near('caisse mono : P (W)', c.P, 1000, 0.01);
  c.val = 0; L.render(); near('caisse à 0 W', c.P, 0, 0.01); }
L.reset(); { const a = L.add('a3'), c = L.add('cch'); c.cm = 'tri'; c.un = 400; c.val = 4000;
  L.wire(a.id + ':1', c.id + ':2'); L.wire(a.id + ':2', c.id + ':3'); L.wire(a.id + ':3', c.id + ':4'); L.render(); near('caisse tri : P (W)', c.P, 4000, 0.01);
  c.cm = 'mono'; L.render(); near('caisse en mono sur bornes tri : hors circuit (W)', c.P, 0, 0.01); }
// 11e. Sondes : tension (÷10) et courant (÷100) vers l'oscilloscope
L.reset(); { const s = L.add('ac'), sv = L.add('sv'), o = L.add('scope'); s.val = 230; sv.ratio = 10;
  L.wire(sv.id + ':3', s.id + ':1'); L.wire(sv.id + ':2', s.id + ':0'); L.connect(sv.id + ':1', o.id + ':1'); L.render();
  near('sonde de tension ÷10 (V eff.)', Math.hypot(...o.sig[0][1]), 23, 0.01); sv.ratio = 100; L.render(); near('sonde de tension ÷100 (V eff.)', Math.hypot(...o.sig[0][1]), 2.3, 0.01); }
L.reset(); { const s = L.add('ac'), r = L.add('res'), sc = L.add('sc'), o = L.add('scope'); s.val = 24; r.val = 24; sc.ratio = 10;
  L.wire(s.id + ':1', r.id + ':0'); L.wire(r.id + ':1', s.id + ':0'); place(sc, L.wires[0], .5); L.connect(sc.id + ':1', o.id + ':1'); L.render();
  near('sonde de courant ÷10 : 1 A -> 0,1 V', Math.hypot(...o.sig[0][1]), 0.1, 0.02); sc.ratio = 100; L.render(); near('sonde de courant ÷100 : 1 A -> 0,01 V', Math.hypot(...o.sig[0][1]), 0.01, 0.02); }
// 11f. Mode XY : cercle de Lissajous (CH1 = sinus, CH2 déphasé de 90° par un condensateur à la fréquence de coupure)
L.reset(); { const g = L.add('gbf'), r = L.add('res'), c = L.add('cap'), o = L.add('scope'); g.amp = 5; r.val = 1591.55; c.val = 0.1; o.xy = true;
  L.wire(g.id + ':1', r.id + ':0'); L.wire(r.id + ':1', c.id + ':0'); L.wire(c.id + ':1', g.id + ':0'); L.wire(o.id + ':1', r.id + ':0'); L.wire(o.id + ':0', g.id + ':0'); L.wire(o.id + ':3', c.id + ':0'); L.render(); yes('mode XY : rendu', true); }
// 11g. Sauvegarde / ouverture
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'); b.val = 10; r.val = 100; L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  const txt = L.serializeMontage(); yes('montage : JSON valide', JSON.parse(txt).comps.length === 3); L.reset(); yes('montage : rechargé', L.loadMontage(txt) === true);
  near('montage rechargé : I (A)', Math.abs(L.comps.find(c => c.type === 'amp').I), 0.1, 0.01); yes('montage invalide refusé', L.loadMontage('{pas du json') === false); }
// 11h. Caisse de charge : bornes mono (M1, M2) et tri (L1, L2, L3) dédiées, sélecteur de branchement
L.reset(); { const s = L.add('ac'), c = L.add('cch'), a3 = L.add('a3'); s.val = 230; c.val = 800; c.cm = 'mono';
  L.wire(s.id + ':1', c.id + ':0'); L.wire(c.id + ':1', s.id + ':0'); L.wire(a3.id + ':1', c.id + ':2'); L.wire(a3.id + ':2', c.id + ':3'); L.wire(a3.id + ':3', c.id + ':4'); L.render();
  near('mono actif : P (W)', c.P, 800, 0.01); c.cm = 'tri'; c.un = 400; L.render(); near('tri actif : P (W)', c.P, 800, 0.01); }
// 11i. Migration d'un ancien montage (caisse tri sur bornes 0-2 -> 2-4)
L.reset(); { const old = { version: '1.4', comps: [{ id: 1, type: 'a3', x: 190, y: 300, val: 400, f: 50 }, { id: 2, type: 'cch', x: 500, y: 300, cm: 'tri', un: 400, val: 2000 }], wires: [{ a: '1:1', b: '2:0', col: '#d32f2f' }, { a: '1:2', b: '2:1', col: '#d32f2f' }, { a: '1:3', b: '2:2', col: '#d32f2f' }], notes: [] };
  yes('ancien montage chargé', L.loadMontage(JSON.stringify(old))); near('ancien montage migré : P (W)', L.comps.find(c => c.type === 'cch').P, 2000, 0.02); }
// 11j. Étiquettes et filtre du matériel
L.reset(); { L.TAGS.map.res = ['TP1']; L.TAGS.map.bat = ['TP1', 'Projet']; L.setFilter('TP1'); L.buildMenu(); let h = L.menuHtml();
  yes('filtre TP1 : résistance et alimentation visibles', h.includes('Résistance') && h.includes('Alimentation continue')); yes('filtre TP1 : ampoule masquée', !h.includes('Ampoule'));
  L.setFilter('Projet'); L.buildMenu(); h = L.menuHtml(); yes('filtre Projet : résistance masquée', !h.includes('Résistance') && h.includes('Alimentation continue'));
  L.setFilter('-'); L.buildMenu(); h = L.menuHtml(); yes('sans étiquette : ampoule visible, résistance masquée', h.includes('Ampoule') && !h.includes('Résistance'));
  L.setFilter('*'); L.buildMenu(); h = L.menuHtml(); yes('tout : tout visible', h.includes('Ampoule') && h.includes('Résistance')); yes('repérage toujours visible', h.includes('Rectangle pointillé')); }
// 12. Dessin de tous les appareils
L.reset(); ['bat', 'ac', 'gbf', 'res', 'bulb', 'cap', 'ind', 'sw', 'com', 'rel', 'ctc', 'mdc', 'mac', 'led', 'cfl', 'a3', 'm3', 'cch', 'sv', 'sc', 'tach', 'cpm', 'amp', 'volt', 'watt', 'pince', 'scope'].forEach(t => L.add(t));
L.add('volt').ana = 1; L.add('amp').ana = 1; L.render(); yes('rendu complet', true);
console.log(fail ? `\n${fail} test(s) en échec` : '\nTous les tests passent'); process.exit(fail ? 1 : 0);
