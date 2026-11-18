// Tests du solveur de LaboSim (Node >= 16, sans dépendance) : `npm test`
const fs = require('fs'), path = require('path');
const code = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8').replace(/example\(\);\s*$/, '');
const el = () => ({ style: {}, dataset: {}, classList: { toggle() {}, remove() {} }, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, set innerHTML(v) { this._h = v }, get innerHTML() { return this._h }, set textContent(v) {}, value: '', onclick: null, createSVGPoint: () => ({}), setAttribute() {}, getBoundingClientRect: () => ({ left: 0, top: 0, width: 900, height: 600 }), clientWidth: 900, clientHeight: 600 });
const store = {};
global.document = { getElementById: id => store[id] || (store[id] = el()), querySelectorAll: () => [] };
global.window = { addEventListener() {} };
const L = new Function(code + `;return{add,wire,connect,render,mkWave,bz,tp,wsamples,buildPdf,pdfWrap,serializeMontage,loadMontage,buildMenu,setFilter(v){tagFilter=v},get TAGS(){return TAGS},get tranMode(){return tranMode},startCapture,capPick,get capt(){return capt},trFreq,bbEnc,bbDec,bbHash,bbParse,BBT,pv,get view(){return view},fitView,zoomAt,contentBounds,menuHtml(){return menuEl.innerHTML},reset(){comps=[];wires=[];notes=[];uid=1;sel=selW=selN=pend=null},get err(){return err},get wires(){return wires},get comps(){return comps},get solve(){return solve},geo,BX0,BP,BROW,BC,nearHole,snapPlug,plugSet(){return plugSet},DK,LC,gbfHarm,gbfWave,bridges}`)();

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
// 11k. Zone de travail : bornes du contenu, ajustement et zoom
L.reset(); { yes('zone vide : vue par défaut', L.contentBounds().w === 900);
  L.add('bat', 2000, 1500); L.add('res', 2400, 1500); const b = L.contentBounds(); yes('contenu éloigné : bornes englobantes', b.x < 2000 && b.x + b.w > 2400 && b.y < 1500 && b.y + b.h > 1500);
  L.fitView(); yes('ajuster : le montage est dans la vue', L.view.x <= b.x + 1 && L.view.x + 900 / L.view.z >= b.x + b.w - 1);
  const z0 = L.view.z; L.zoomAt(1.25, 450, 300); near('zoom avant', L.view.z, z0 * 1.25, 0.01); L.zoomAt(100, 450, 300); near('zoom limité à 300 %', L.view.z, 3, 0.01); }
// 11l. Étiquettes colorées : points de couleur dans le menu
L.reset(); { L.TAGS.map.res = ['TP1', 'Projet']; L.setFilter('*'); L.buildMenu(); const h = L.menuHtml();
  yes('points de couleur dans le menu', h.includes('class="dots"') && h.includes(L.TAGS.colors['TP1']) && h.includes(L.TAGS.colors['Projet'])); delete L.TAGS.map.res; }
// 11m. ISW8000 sans trait entre les bornes de droite ; appareils à aiguille à deux échelles
L.reset(); { L.add('watt'); const v = L.add('volt'); v.ana = 1; v.rng = 10; L.render(); const svg = document.getElementById('cv')._h;
  yes('ISW : plus de trait entre les bornes de droite', !svg.includes('M127 -26V16')); yes('ISW : fusible conservé', svg.includes('mesure I'));
  yes('aiguille : échelle 30 grisée (calibre 10)', svg.includes('#8c8c80')); const g1 = (svg.match(/#8c8c80/g) || []).length; v.rng = 3; L.render(); const g2 = (document.getElementById('cv')._h.match(/#8c8c80/g) || []).length;
  yes('aiguille : deux échelles tracées, l\'active change avec le calibre', g1 > 20 && g2 > 20); }
// 13a. Moteurs : curseur de charge (à vide -> 1,2 In)
L.reset(); { const s = L.add('ac'), w = L.add('watt'), m = L.add('mac'); s.val = 230;
  L.wire(s.id + ':1', w.id + ':1'); L.wire(w.id + ':3', m.id + ':1'); L.wire(m.id + ':0', w.id + ':2'); L.wire(w.id + ':0', s.id + ':0');
  const pf = () => w.P / (w.Ur * w.Ir), In = 370 / 0.7 / (230 * 0.82);
  m.ml = 0; L.render(); near('mono à vide : courant (A)', w.Ir, 0.55 * In, 0.03); near('mono à vide : cos φ', pf(), 0.25, 0.04);
  m.ml = 1; L.render(); near('mono nominal : courant (A)', w.Ir, In, 0.03); near('mono nominal : cos φ', pf(), 0.82, 0.03);
  m.ml = 1.2; L.render(); yes('mono 1,2 : courant entre 1,1 et 1,3 In', w.Ir > 1.1 * In && w.Ir < 1.3 * In); }
L.reset(); { const a = L.add('a3'), m = L.add('m3'); a.val = 400; L.wire(a.id + ':1', m.id + ':0'); L.wire(a.id + ':2', m.id + ':1'); L.wire(a.id + ':3', m.id + ':2');
  m.ml = 0; L.render(); const pf0 = m.P / Math.hypot(m.P, m.Q), r0 = m.rpm; m.ml = 1.2; L.render(); const pf1 = m.P / Math.hypot(m.P, m.Q);
  near('tri à vide : cos φ', pf0, 0.2, 0.05); yes('tri : cos φ augmente avec la charge', pf1 > 0.8); yes('tri : vitesse décroît avec la charge', m.rpm < r0 && r0 > 1450); }
// 13b. Boîtes noires : netlist, masquage, phaseurs
L.reset(); { const e = L.bbEnc('R1 A B 1k\nC1 A B 100n'); yes('netlist masquée (non lisible)', !e.includes('R1') && L.bbDec(e) === 'R1 A B 1k\nC1 A B 100n');
  yes('code : même code, même empreinte', L.bbHash('prof') === L.bbHash('prof') && L.bbHash('prof') !== L.bbHash('autre'));
  near('valeur 4.7k', L.pv('4.7k'), 4700, 1e-9); near('valeur 100n', L.pv('100n'), 1e-7, 1e-9); near('valeur 2meg', L.pv('2meg'), 2e6, 1e-9); near('valeur 10m', L.pv('10m'), 0.01, 1e-9); near('valeur 1M', L.pv('1M'), 1e6, 1e-9);
  yes('netlist invalide signalée', L.bbParse('R1 A B', 'd').er !== '' && L.bbParse('Z1 A B 1', 'd').er !== '' && L.bbParse('', 'd').er !== ''); }
L.reset(); { const b = L.add('bat'), bb = L.add('bb'), a = L.add('amp'); b.val = 10; bb.kind = 'd'; bb.name = 'BN2'; bb.net = L.bbEnc(L.BBT.d['R // C (1 kΩ ∥ 100 nF)']);
  L.wire(b.id + ':1', bb.id + ':0'); L.wire(bb.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render(); near('boîte noire R // C en continu : I (A)', -a.I, 0.01, 0.01); }
L.reset(); { const g = L.add('gbf'), bb = L.add('bb'), o = L.add('scope'); g.amp = 5; bb.kind = 'q'; bb.name = 'BN1'; bb.net = L.bbEnc(L.BBT.q['Passe-bas RC (fc ≈ 1,6 kHz)']);
  L.wire(g.id + ':1', bb.id + ':0'); L.wire(g.id + ':0', bb.id + ':1'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':0', g.id + ':0'); L.wire(o.id + ':3', bb.id + ':2'); L.render();
  near('quadripôle passe-bas : |H(1 kHz)|', Math.hypot(...o.sig[1][1]) / Math.hypot(...o.sig[0][1]), 1 / Math.hypot(1, 2 * Math.PI * 1000 * 1e-4), 0.02); }
L.reset(); { const g = L.add('gbf'), bb = L.add('bb'), o = L.add('scope'); g.amp = 1; bb.kind = 'q'; bb.net = L.bbEnc(L.BBT.q['Amplificateur idéal ×10']);
  L.wire(g.id + ':1', bb.id + ':0'); L.wire(g.id + ':0', bb.id + ':1'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':0', g.id + ':0'); L.wire(o.id + ':3', bb.id + ':2'); L.wire(bb.id + ':3', g.id + ':0'); L.render();
  near('quadripôle amplificateur idéal : gain', Math.hypot(...o.sig[1][1]) / Math.hypot(...o.sig[0][1]), 10, 0.02); }
// 13c. Simulation temporelle : NE555, AOP, comparateur
L.reset(); { const b = L.add('bat'), ic = L.add('ne555'), r1 = L.add('res'), r2 = L.add('res'), cc = L.add('cap'), o = L.add('scope'); b.val = 12; r1.val = 1000; r2.val = 10000; cc.val = 0.1; o.td = 5e-4;
  L.wire(b.id + ':1', ic.id + ':7'); L.wire(b.id + ':1', ic.id + ':3'); L.wire(b.id + ':1', r1.id + ':0'); L.wire(r1.id + ':1', ic.id + ':6'); L.wire(r1.id + ':1', r2.id + ':0'); L.wire(r2.id + ':1', ic.id + ':5'); L.wire(ic.id + ':5', ic.id + ':1'); L.wire(ic.id + ':5', cc.id + ':0'); L.wire(cc.id + ':1', b.id + ':0'); L.wire(ic.id + ':0', b.id + ':0');
  L.wire(ic.id + ':2', o.id + ':1'); L.wire(o.id + ':0', b.id + ':0'); L.wire(o.id + ':3', ic.id + ':5'); L.render();
  yes('mode temporel actif', L.tranMode); near('NE555 astable : fréquence (Hz)', L.trFreq(o, 0), 1.44 / ((1000 + 2 * 10000) * 1e-7), 0.06);
  const y = o.tr.y[0], hi = y.filter(v => v > 6).length / y.length; near('NE555 astable : rapport cyclique', hi, 11 / 21, 0.1); yes('NE555 : sortie haute ≈ Vcc − 1,7 V', Math.max(...y) > 9.8 && Math.max(...y) < 10.8);
  const yc = o.tr.y[1]; yes('condensateur oscille entre 1/3 et 2/3 Vcc', Math.min(...yc) > 3.7 && Math.min(...yc) < 4.4 && Math.max(...yc) > 7.6 && Math.max(...yc) < 8.3); }
L.reset(); { const b1 = L.add('bat'), b2 = L.add('bat'), g = L.add('gbf'), r1 = L.add('res'), rf = L.add('res'), ic = L.add('aop'), o = L.add('scope'); b1.val = 15; b2.val = 15; g.amp = 1; r1.val = 1000; rf.val = 10000; o.td = 2e-4;
  L.wire(b1.id + ':1', ic.id + ':6'); L.wire(b1.id + ':0', b2.id + ':1'); L.wire(b2.id + ':0', ic.id + ':3'); L.wire(g.id + ':1', r1.id + ':0'); L.wire(g.id + ':0', b1.id + ':0'); L.wire(r1.id + ':1', ic.id + ':1'); L.wire(rf.id + ':0', ic.id + ':1'); L.wire(rf.id + ':1', ic.id + ':5'); L.wire(ic.id + ':2', b1.id + ':0');
  L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':3', ic.id + ':5'); L.wire(o.id + ':0', b1.id + ':0'); L.render();
  const amp = a => (Math.max(...a) - Math.min(...a)) / 2; near('AOP inverseur : amplitude de sortie (V)', amp(o.tr.y[1]), 10, 0.03); near('AOP inverseur : fréquence conservée (Hz)', L.trFreq(o, 1), 1000, 0.03);
  const y0 = o.tr.y[0], y1 = o.tr.y[1]; let ph = 0; for (let i = 0; i < y0.length; i++) ph += y0[i] * y1[i]; yes('AOP inverseur : sortie en opposition de phase', ph < 0);
  g.amp = 2; L.render(); yes('AOP saturé à ≈ ±13,5 V', Math.max(...o.tr.y[1]) > 13 && Math.max(...o.tr.y[1]) < 13.8 && Math.min(...o.tr.y[1]) < -13 && Math.min(...o.tr.y[1]) > -13.8); }
L.reset(); { const b = L.add('bat'), g = L.add('gbf'), ic = L.add('cmp'), o = L.add('scope'); b.val = 5; g.amp = 1; o.td = 2e-4;
  L.wire(b.id + ':1', ic.id + ':7'); L.wire(b.id + ':0', ic.id + ':3'); L.wire(g.id + ':1', ic.id + ':1'); L.wire(g.id + ':0', b.id + ':0'); L.wire(ic.id + ':2', b.id + ':0'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':3', ic.id + ':6'); L.wire(o.id + ':0', b.id + ':0'); L.render();
  const y = o.tr.y[1]; yes('comparateur : sortie 0 / ≈ 5 V', Math.max(...y) > 4.4 && Math.min(...y) < 0.3); near('comparateur : fréquence (Hz)', L.trFreq(o, 1), 1000, 0.03); }
// 13d. Boîte noire construite à partir de vrais composants
L.reset(); { const r = L.add('res', 300, 300), c = L.add('cap', 500, 300); r.val = 1000; c.val = 0.1; L.wire(r.id + ':1', c.id + ':0');
  L.startCapture('q'); yes('capture démarrée', L.capt !== null); L.capPick(r.id + ':0'); L.capPick(c.id + ':1'); L.capPick(r.id + ':1'); L.capPick(c.id + ':1');
  const bb = L.comps.find(x => x.type === 'bb'); yes('composants remplacés par une boîte noire', L.comps.length === 1 && bb && bb.kind === 'q' && L.capt === null);
  const P = L.bbParse(L.bbDec(bb.net), 'q'); yes('netlist valide (R, C, W)', P.er === '' && P.els.length === 3);
  const g = L.add('gbf'), o = L.add('scope'); g.amp = 5; L.wire(g.id + ':1', bb.id + ':0'); L.wire(g.id + ':0', bb.id + ':1'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':0', g.id + ':0'); L.wire(o.id + ':3', bb.id + ':2'); L.render();
  near('quadripôle capturé : |H(1 kHz)|', Math.hypot(...o.sig[1][1]) / Math.hypot(...o.sig[0][1]), 1 / Math.hypot(1, 2 * Math.PI * 1000 * 1e-4), 0.02); }
L.reset(); { const r = L.add('res', 300, 300), l = L.add('ind', 500, 300), b = L.add('bat'), a = L.add('amp'); r.val = 100; l.val = 10; l.r = 5; L.wire(r.id + ':1', l.id + ':0');
  L.startCapture('d'); L.capPick(r.id + ':0'); L.capPick(l.id + ':1'); const bb = L.comps.find(x => x.type === 'bb'); yes('dipôle capturé', bb && bb.kind === 'd' && L.bbParse(L.bbDec(bb.net), 'd').er === '');
  b.val = 10; L.wire(b.id + ':1', bb.id + ':0'); L.wire(bb.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render(); near('dipôle R + (L, r) : courant continu (A)', -a.I, 10 / 105, 0.01); }
L.reset(); { const b = L.add('bat'); L.startCapture('d'); L.capPick(b.id + ':0'); L.capPick(b.id + ':1'); yes('capture sur un composant non convertible : refus', L.comps.every(x => x.type !== 'bb')); }

// 14. Diodes, LED, Zener (simulation temporelle)
L.reset(); { const b = L.add('bat'), r = L.add('res'), d = L.add('dled'), a = L.add('amp'); b.val = 5; r.val = 330; d.lc = 'rouge';
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', d.id + ':0'); L.wire(d.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  yes('LED : mode temporel actif', L.tranMode); near('LED rouge + 330 Ω sous 5 V : courant (mA)', d.I * 1000, (5 - 1.75) / (330 + 10) * 1000, 0.03);
  near('LED rouge : tension aux bornes (V)', d.U, 1.75 + 10 * (5 - 1.75) / 340, 0.03);
  d.lc = 'bleu'; L.render(); near('LED bleue : courant plus faible (mA)', d.I * 1000, (5 - 2.9) / 340 * 1000, 0.03);
  d.lc = 'rouge'; r.val = 10; L.render(); yes('LED sans résistance suffisante : surintensité (> 35 mA)', d.I > 0.035);
  const x = L.wires.pop(); L.wires.pop(); b.val = 0; L.render(); }
L.reset(); { const b = L.add('bat'), d = L.add('dio'), r = L.add('res'); b.val = 5; r.val = 1000; d.dk = 'd4007';
  L.wire(b.id + ':1', d.id + ':1'); L.wire(d.id + ':0', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.render();   /* diode polarisée en inverse */
  near('diode en inverse : courant ≈ 0 (µA)', Math.abs(d.I) * 1e6, 0, 0.5); }
L.reset(); { const b = L.add('bat'), d = L.add('dio'), r = L.add('res'); b.val = 5; r.val = 1000; d.dk = 'd4007';
  L.wire(b.id + ':1', d.id + ':0'); L.wire(d.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.render();
  near('diode 1N4007 en direct : courant (mA)', d.I * 1000, (5 - .65) / 1000.25 * 1000, 0.01); near('diode 1N4007 : chute (V)', d.U, .65 + .25 * 4.35 / 1000.25, 0.01); }
L.reset(); { const b = L.add('bat'), d = L.add('dio'), r = L.add('res'); b.val = 12; r.val = 1000; d.dk = 'z51';
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', d.id + ':1'); L.wire(d.id + ':0', b.id + ':0'); L.render();   /* Zener en inverse : régulation */
  near('Zener 5,1 V : tension régulée (V)', -d.U, 5.1 + 8 * 6.9 / 1008, 0.02); }
L.reset(); { const a = L.add('ac'), d = L.add('dio'), r = L.add('res'), o = L.add('scope'); a.val = 8; r.val = 1000; d.dk = 'd4007'; o.td = 5e-3; o.v1 = 5;
  L.wire(a.id + ':1', d.id + ':0'); L.wire(d.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':0'); L.wire(o.id + ':1', d.id + ':1'); L.wire(o.id + ':0', a.id + ':0'); L.render();
  const y = o.tr.y[0], mx = Math.max(...y), mn = Math.min(...y); near('redressement simple alternance : crête (V)', mx, 8 * Math.SQRT2 - .66, 0.04); yes('redressement : alternance négative supprimée', mn > -0.05);
  near('redressement : valeur moyenne (V)', mean(y), (8 * Math.SQRT2 - .66) / Math.PI, 0.06); }
function mean(a) { let t = 0; for (const v of a) t += v; return t / a.length; }
// 15. GBF : rapport cyclique (phaseurs = forme temporelle)
L.reset(); { const g = L.add('gbf'), r = L.add('res'), o = L.add('scope'); g.f = 1000; g.amp = 5; r.val = 1000; o.td = 2e-4;
  L.wire(g.id + ':1', r.id + ':0'); L.wire(r.id + ':1', g.id + ':0'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':0', g.id + ':0');
  const cmp = (name, tol) => { L.render(); const H = L.gbfHarm(g); let worst = 0; const N = 4000;
    for (let k = 1; k <= 8; k++) { let a = 0, b = 0; for (let n = 0; n < N; n++) { const t = (n + .5) / N * 1e-3, v = L.gbfWave(g, t) - g.off; a += 2 * v * Math.cos(2 * Math.PI * k * 1000 * t) / N; b += -2 * v * Math.sin(2 * Math.PI * k * 1000 * t) / N }
      const h = H.find(x => x[0] === k) || [k, 0, 0]; worst = Math.max(worst, Math.abs(a - 5 * h[1]), Math.abs(b - 5 * h[2])) }
    near(name + ' : harmoniques 1-8 = projection de la forme d’onde (écart max, V)', worst, 0, tol) };
  g.wave = 'sq'; g.duty = .5; cmp('carré 50 %', .01); near('carré 50 % : composante continue nulle', o.sig[0][0][0], 0, 0.001);
  g.duty = .2; L.render(); near('carré 20 % : composante continue (V)', o.sig[0][0][0], 5 * (2 * .2 - 1), 0.001); cmp('carré 20 %', .01);
  let hi = 0; for (let k = 0; k < 1000; k++) if (L.gbfWave(g, k / 1000 * 1e-3) > 0) hi++; near('carré 20 % : temps à l’état haut', hi / 1000, .2, 0.01);
  g.wave = 'tri'; g.duty = .5; cmp('triangle symétrique', .01); g.duty = .8; cmp('triangle 80 %', .01); near('triangle : valeur moyenne nulle', o.sig[0][0][0], 0, 0.001);
  near('triangle 80 % : minimum au début de la montée (V)', L.gbfWave(g, .5e-3), -5, 0.001); near('triangle 80 % : sommet après 80 % de la période (V)', L.gbfWave(g, .3e-3), 5, 0.001); }
// 16. Platine d'essai et boîtier DIP-8
L.reset(); { const bd = L.add('bread', 600, 400), r = L.add('res', 0, 0), r2 = L.add('res', 0, 0), b = L.add('bat'), a = L.add('amp');
  const plugOn = (c, ci, ri, t) => { const q = L.geo(c).t[t || 0]; c.x = bd.x + L.BX0 + ci * L.BP - q[0]; c.y = bd.y + L.BROW[ri] - q[1] };
  plugOn(r, 3, 6); plugOn(r2, 7, 6); b.val = 10; r.val = 100; r2.val = 100;               /* R (col 3→7), R2 (col 7→11) : en série par la colonne 7 */
  L.wire(b.id + ':1', bd.id + ':' + (3 * 10 + 9)); L.wire(a.id + ':1', bd.id + ':' + (11 * 10 + 9)); L.wire(a.id + ':0', b.id + ':0'); L.render();
  yes('platine : composants enfichés détectés', L.plugSet().has(r.id) && L.plugSet().has(r2.id)); near('platine : deux résistances en série (A)', -a.I, 10 / 200, 0.01);
  r2.x += 13; r2.y += 7; L.render(); yes('composant décalé : non enfiché', !L.plugSet().has(r2.id));
  r2.x += 3; L.snapPlug(r2); const q = L.geo(r2).t[0]; yes('accrochage : la borne retombe sur un trou', L.nearHole(bd, r2.x + q[0], r2.y + q[1], 1e-6) !== null || L.nearHole(bd, r2.x + q[0], r2.y + q[1], .01) !== null); }
L.reset(); { const bd = L.add('bread', 600, 400), ic = L.add('aop'), b1 = L.add('bat'), b2 = L.add('bat'), g = L.add('gbf'), r1 = L.add('res'), rf = L.add('res'), o = L.add('scope'), q = L.geo(ic).t[0];
  ic.x = bd.x + L.BX0 + 8 * L.BP - q[0]; ic.y = bd.y + L.BROW[5] - q[1]; b1.val = 15; b2.val = 15; g.amp = 1; r1.val = 1000; rf.val = 10000; o.td = 2e-4;
  const H = (c, r) => bd.id + ':' + (c * 10 + r), p = (c, t) => { const z = L.geo(c).t[t]; c.x = bd.x + 0; return z };
  /* AOP LF356 sur platine : broche 2 (−) col 9 bas, 3 (+) col 10 bas, 4 (V−) col 11 bas, 6 (OUT) col 10 haut, 7 (V+) col 9 haut */
  L.wire(b1.id + ':1', H(9, 0)); L.wire(b1.id + ':0', b2.id + ':1'); L.wire(b2.id + ':0', H(11, 9)); L.wire(g.id + ':1', r1.id + ':0'); L.wire(g.id + ':0', b1.id + ':0'); L.wire(r1.id + ':1', H(9, 9)); L.wire(rf.id + ':0', H(9, 8)); L.wire(rf.id + ':1', H(10, 0)); L.wire(H(10, 8), b1.id + ':0');
  L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':3', H(10, 1)); L.wire(o.id + ':0', b1.id + ':0'); L.render();
  const amp = a => (Math.max(...a) - Math.min(...a)) / 2; yes('AOP sur platine : simulation temporelle', L.tranMode); near('AOP sur platine : gain inverseur (sortie, V)', amp(o.tr.y[1]), 10, 0.04); }
// 17. Ouverture d'un ancien montage (AOP à 5 bornes)
L.reset(); { const old = { app: 'LaboSim', version: '1.8', comps: [{ id: 1, type: 'bat', x: 100, y: 100 }, { id: 2, type: 'aop', x: 300, y: 300 }], wires: [{ a: '1:1', b: '2:3', col: '#d32f2f' }, { a: '1:0', b: '2:4', col: '#111' }, { a: '1:0', b: '2:0', col: '#111' }, { a: '2:2', b: '1:0', col: '#111' }], notes: [] };
  L.loadMontage(JSON.stringify(old)); const w = L.wires.map(x => x.a + '>' + x.b); yes('migration AOP : V+ → broche 7, V− → broche 4, + → 3, S → 6', w[0] === '1:1>2:6' && w[1] === '1:0>2:3' && w[2] === '1:0>2:2' && w[3] === '2:5>1:0'); }
// 12. Dessin de tous les appareils
L.reset(); ['bat', 'ac', 'gbf', 'res', 'bulb', 'cap', 'ind', 'sw', 'com', 'rel', 'ctc', 'mdc', 'mac', 'led', 'cfl', 'a3', 'm3', 'cch', 'sv', 'sc', 'tach', 'cpm', 'amp', 'volt', 'watt', 'pince', 'scope', 'bb', 'ne555', 'aop', 'cmp', 'dio', 'dled', 'bread'].forEach(t => L.add(t));
L.add('volt').ana = 1; L.add('amp').ana = 1; L.render(); yes('rendu complet', true);
console.log(fail ? `\n${fail} test(s) en échec` : '\nTous les tests passent'); process.exit(fail ? 1 : 0);
