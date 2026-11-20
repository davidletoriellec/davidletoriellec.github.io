// Tests du solveur de LaboSim (Node >= 16, sans dépendance) : `npm test`
const fs = require('fs'), path = require('path');
global.LaboArduino = require('../js/arduino.js');
const code = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8').replace(/example\(\);\s*$/, '');
const el = () => ({ style: {}, dataset: {}, classList: { toggle() {}, remove() {}, add() {} }, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, set innerHTML(v) { this._h = v }, get innerHTML() { return this._h }, set textContent(v) {}, value: '', onclick: null, createSVGPoint: () => ({}), setAttribute() {}, getBoundingClientRect: () => ({ left: 0, top: 0, width: 900, height: 600 }), clientWidth: 900, clientHeight: 600 });
const store = {};
global.document = { getElementById: id => store[id] || (store[id] = el()), querySelectorAll: () => [] };
global.window = { addEventListener() {} };
const L = new Function(code + `;return{T,reading,traces,add,wire,connect,render,mkWave,bz,tp,wsamples,buildPdf,pdfWrap,serializeMontage,loadMontage,buildMenu,setFilter(v){tagFilter=v},get TAGS(){return TAGS},get tranMode(){return tranMode},startCapture,capPick,get capt(){return capt},trFreq,bbEnc,bbDec,bbHash,bbParse,BBT,pv,get view(){return view},fitView,zoomAt,contentBounds,menuHtml(){return menuEl.innerHTML},reset(){comps=[];wires=[];notes=[];uid=1;sel=selW=selN=pend=null},get err(){return err},get wires(){return wires},get comps(){return comps},get solve(){return solve},geo,BX0,BP,BROW,BC,nearHole,snapPlug,plugSet(){return plugSet},DK,LC,gbfHarm,gbfWave,bridges,mergeTags,tagSlug,ldrR,liveStart,liveStop,liveAdvance,liveDrop,liveSync,liveResetAll,get live(){return live},engOf,UNO,tranModel,dockUpload,exUno}`)();

let fail = 0;
const near = (name, got, want, tol) => { const ok = Math.abs(got - want) <= tol * Math.max(1, Math.abs(want)); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + ' → ' + got.toPrecision(5) + ' (attendu ' + want + ')'); };
const yes = (name, c) => { if (!c) fail++; console.log((c ? 'ok   ' : 'FAIL ') + name); };
const place = (c, w, t) => { const p = L.bz(L.tp(w.a), L.tp(w.b), w, t); c.x = p.x; c.y = p.y };

// 1. Loi d'Ohm
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'); b.val = 10; r.val = 100;
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render(); near('I = U/R (A)', -a.I, 0.1, 0.01); }
// 2. Court-circuit
L.reset(); { const g = L.add('ac'); L.wire(g.id + ':1', g.id + ':0'); L.render(); yes('court-circuit signalé', L.err !== ''); }
L.reset(); { const b = L.add('bat'), a = L.add('amp'); b.val = 10; b.il = 2; L.wire(b.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render(); yes('court-circuit d’une alim : pas d’erreur (limitée)', L.err === ''); near('court-circuit : courant = limite (A)', -a.I, 2, 0.01); yes('court-circuit : voyant CC', b.cc === true); }
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
// 18. Étiquettes : fichiers multiples fusionnés, noms de fichiers
yes('nom de fichier d’après l’étiquette', L.tagSlug('TP ELEN') === 'tp-elen' && L.tagSlug('Projet été') === 'projet-ete');
{ const m = L.mergeTags([{ tags: ['TP1'], map: { res: ['TP1'] }, colors: { TP1: '#ff0000' } }, { tags: ['TP2', 'TP1'], map: { res: ['TP2'], bat: ['TP2'] }, colors: { TP2: '#00ff00', TP1: '#0000ff' } }]);
  yes('fusion : étiquettes réunies', m.tags.join() === 'TP1,TP2'); yes('fusion : appareils additionnés', m.map.res.join() === 'TP1,TP2' && m.map.bat.join() === 'TP2'); yes('fusion : première couleur conservée', m.colors.TP1 === '#ff0000' && m.colors.TP2 === '#00ff00'); }

// 19. Capteurs : photorésistance, infrarouge, ultrason
L.reset(); { const b = L.add('bat'), r = L.add('res'), l = L.add('ldr'), v = L.add('volt'); b.val = 5; r.val = 10000; l.lux = 10;
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', l.id + ':0'); L.wire(l.id + ':1', b.id + ':0'); L.wire(v.id + ':1', l.id + ':0'); L.wire(v.id + ':0', l.id + ':1'); L.render();
  near('LDR 10 lx : résistance (Ω)', L.ldrR(l), 16000, 0.001); near('LDR 10 lx : tension du pont (V)', -v.U, 5 * 16000 / 26000, 0.01);
  l.lux = 1000; L.render(); yes('LDR : plus de lumière → tension plus faible', -v.U < 1.5); l.lux = 0.1; L.render(); yes('LDR très faiblement éclairée : > 300 kΩ', L.ldrR(l) > 3e5); }
const irSetup = (dx) => { L.reset(); const b = L.add('bat'), r1 = L.add('res'), d = L.add('dled', 600, 300), r2 = L.add('res'), t = L.add('irrx', 600 + dx, 300), v = L.add('volt'); b.val = 5; r1.val = 220; r2.val = 4700; d.lc = 'ir';
  L.wire(b.id + ':1', r1.id + ':0'); L.wire(r1.id + ':1', d.id + ':0'); L.wire(d.id + ':1', b.id + ':0'); L.wire(b.id + ':1', r2.id + ':0'); L.wire(r2.id + ':1', t.id + ':0'); L.wire(t.id + ':1', b.id + ':0'); L.wire(v.id + ':1', t.id + ':0'); L.wire(v.id + ':0', t.id + ':1'); L.render(); return { d, t, v } };
{ const { d, t, v } = irSetup(120); const Ie = (5 - 1.15) / (220 + 8); near('LED IR : courant (mA)', d.I * 1000, Ie * 1000, 0.03);
  const g = 0.05 / (1 + (120 / 250) ** 2); near('phototransistor : photocourant (mA)', t.iph * 1000, g * Ie * 1000, 0.03); near('récepteur : tension de sortie (V)', -v.U, 5 - g * Ie * 4700, 0.04);
  t.blk = true; L.render(); yes('obstacle sur le faisceau : sortie haute', -v.U > 4.5); t.blk = false; t.x = 600 + 600; L.render(); yes('plus loin : photocourant plus faible', t.iph < g * Ie * .5); }
L.reset(); { const b = L.add('bat'), g = L.add('gbf'), h = L.add('hcsr'), o = L.add('scope'); b.val = 5; g.wave = 'sq'; g.f = 20; g.amp = 2.5; g.off = 2.5; g.duty = .1; o.td = 2e-3; h.dist = 100;
  L.wire(h.id + ':0', b.id + ':1'); L.wire(h.id + ':3', b.id + ':0'); L.wire(h.id + ':1', g.id + ':1'); L.wire(g.id + ':0', b.id + ':0'); L.wire(o.id + ':1', g.id + ':1'); L.wire(o.id + ':3', h.id + ':2'); L.wire(o.id + ':0', b.id + ':0'); L.wire(o.id + ':2', b.id + ':0'); L.render();
  const width = () => { const y = o.tr.y[1], dt = o.tr.dt; let u = -1; for (let k = 1; k < y.length; k++) { if (u < 0 && y[k] > 2.5 && y[k - 1] <= 2.5) u = k; else if (u >= 0 && y[k] <= 2.5) return (k - u) * dt * 1000 } return 0 };
  near('ultrason 100 cm : durée de l’écho (ms)', width(), 2 * 100 / 34300 * 1000, 0.03); h.dist = 200; L.render(); near('ultrason 200 cm : durée de l’écho (ms)', width(), 2 * 200 / 34300 * 1000, 0.03); let hi = 0;
  b.val = 0; L.render(); hi = 0; for (const v of o.tr.y[1]) if (v > 2.5) hi++; yes('ultrason non alimenté : pas d’écho', hi === 0); }
// 12. Dessin de tous les appareils
L.reset(); ['bat', 'ac', 'gbf', 'res', 'bulb', 'cap', 'ind', 'sw', 'com', 'rel', 'ctc', 'mdc', 'mac', 'led', 'cfl', 'a3', 'm3', 'cch', 'sv', 'sc', 'tach', 'cpm', 'amp', 'volt', 'watt', 'pince', 'scope', 'bb', 'ne555', 'aop', 'cmp', 'dio', 'dled', 'bread', 'ldr', 'irrx', 'hcsr', 'bat2', 'tsop', 'dmm'].forEach(t => L.add(t));
// 12c. Alimentations : limite de courant (CV / CC) et double alim
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'); r.val = 100; b.il = 0.05;
  L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0');
  b.val = 12; L.render(); near('CC : courant plafonné (A)', -a.I, 0.05, 0.01); yes('CC : voyant allumé', b.cc === true); near('CC : tension de sortie (V)', b.U, 5, 0.01); near('CC : tension aux bornes de R (V)', 100 * -a.I, 5, 0.01);
  b.val = 4; L.render(); near('CV : courant I = U/R (A)', -a.I, 0.04, 0.01); yes('CV : voyant éteint', b.cc === false); near('CV : tension de sortie (V)', b.U, 4, 0.01);
  b.val = 12; L.render(); near('CC de nouveau après remontée de la tension', -a.I, 0.05, 0.01); }
L.reset(); { const b = L.add('bat2'), r1 = L.add('res'), r2 = L.add('res'), a1 = L.add('amp'), a2 = L.add('amp'); b.val = 5; b.val2 = 12; r1.val = 100; r2.val = 1000; b.il2 = 0.005;
  L.wire(b.id + ':1', r1.id + ':0'); L.wire(r1.id + ':1', a1.id + ':1'); L.wire(a1.id + ':0', b.id + ':0');
  L.wire(b.id + ':3', r2.id + ':0'); L.wire(r2.id + ':1', a2.id + ':1'); L.wire(a2.id + ':0', b.id + ':2'); L.render();
  near('double alim CH1 : I (A)', -a1.I, 0.05, 0.01); yes('double alim CH1 : CV', !b.cc); near('double alim CH1 : U (V)', b.U, 5, 0.01);
  near('double alim CH2 : I limité (A)', -a2.I, 0.005, 0.01); yes('double alim CH2 : CC', b.cc2 === true); near('double alim CH2 : U (V)', b.U2, 5, 0.01); }
L.reset(); { const b = L.add('bat2'), r = L.add('res'), a = L.add('amp'); b.val = 15; b.val2 = 15; r.val = 300;
  L.wire(b.id + ':1', b.id + ':2'); L.wire(b.id + ':3', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  near('double alim en série : 30 V → I (A)', -a.I, 0.1, 0.01); }
L.reset(); { const b = L.add('bat2'), r = L.add('res'), a = L.add('amp'); b.val = 15; b.val2 = 15; r.val = 300;
  L.wire(b.id + ':0', b.id + ':3'); L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  near('double alim symétrique : +15 V → I (A)', -a.I, 0.05, 0.01); }
// CC en simulation temporelle (un bouton fermé impose le mode temporel)
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'), p = L.add('pb'); p.closed = true; r.val = 100; b.val = 12; b.il = 0.05;
  L.wire(b.id + ':1', p.id + ':0'); L.wire(p.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  yes('CC temporel : mode temporel', L.tranMode); near('CC temporel : courant (A)', -a.I, 0.05, 0.02); yes('CC temporel : voyant', b.cc === true); }
// TSOP : détection de la porteuse seulement
const tsopRig = (fGen, wave, fc, opt = {}) => { L.reset();
  const b = L.add('bat'), g = L.add('gbf', 100, 300), r = L.add('res'), d = L.add('dled', 100, 100), t = L.add('tsop', 200, 100), v = L.add('volt'), o = L.add('scope');
  b.val = 5; g.wave = wave; g.f = fGen; g.amp = wave === 'dc' ? 0 : 2.5; g.off = 2.5; g.duty = .5; if (wave === 'dc') g.wave = 'sin'; r.val = 220; d.lc = 'ir'; t.fc = fc; t.amb = opt.amb || 0; t.blk = !!opt.blk; o.td = 5e-4;
  L.wire(g.id + ':1', r.id + ':0'); L.wire(r.id + ':1', d.id + ':0'); L.wire(d.id + ':1', g.id + ':0'); L.wire(g.id + ':0', b.id + ':0');
  L.wire(t.id + ':2', b.id + ':1'); L.wire(t.id + ':1', b.id + ':0'); L.wire(t.id + ':0', v.id + ':0'); L.wire(v.id + ':1', b.id + ':0'); L.wire(o.id + ':0', b.id + ':0'); L.wire(o.id + ':1', t.id + ':0'); L.render(); return { t, v, o }; };
{ const R = tsopRig(38000, 'sq', 38000); yes('TSOP : mode temporel', L.tranMode); yes('TSOP : porteuse détectée', R.t.det === true); yes('TSOP : sortie basse', R.v.U < 0.5); }
{ const R = tsopRig(56000, 'sq', 38000); yes('TSOP : autre fréquence ignorée', R.t.det === false); yes('TSOP : sortie haute', R.v.U > 4.5); }
{ const R = tsopRig(1000, 'sq', 38000); yes('TSOP : signal lent (1 kHz) ignoré', R.t.det === false); }
{ const R = tsopRig(38000, 'dc', 38000); yes('TSOP : lumière continue ignorée', R.t.det === false && R.v.U > 4.5); }
{ const R = tsopRig(38000, 'sq', 38000, { amb: 100 }); yes('TSOP : détecte malgré une forte lumière ambiante', R.t.det === true); }
{ const R = tsopRig(38000, 'sq', 38000, { blk: true }); yes('TSOP : obstacle sur le faisceau', R.t.det === false); }
{ const R = tsopRig(40000, 'sq', 40000); yes('TSOP : fréquence réglée à 40 kHz', R.t.det === true); }
{ const R = tsopRig(30000, 'sq', 38000); yes('TSOP : 30 kHz ignoré par un 38 kHz', R.t.det === false); }
// Exemples fournis
store['ex25'].onclick(); { const t = L.comps.find(c => c.type === 'tsop'); yes('exemple TSOP + GBF : porteuse détectée', t.det === true && !L.err); }
store['ex26'].onclick(); { const b = L.comps.find(c => c.type === 'bat2'), a = L.comps.find(c => c.type === 'amp'); yes('exemple alim limitée : CH1 en CC', b.cc === true && !L.err); near('exemple alim limitée : I (A)', -a.I, 0.02, 0.02); yes('exemple alim limitée : CH2 en CV', b.cc2 === false); near('exemple alim limitée : I CH2 (A)', b.I2, 0.05, 0.02); }
// Rotation des composants
L.reset(); { const r = L.add('res', 100, 100); const p0 = L.T(r, 0); r.rot = 90; const p1 = L.T(r, 0); near('rotation 90° : x', p1.x - 100, -(p0.y - 100), 0.001); near('rotation 90° : y', p1.y - 100, p0.x - 100, 0.001); r.rot = 180; near('rotation 180°', L.T(r, 0).x - 100, -(p0.x - 100), 0.001); }
// Multimètre universel (dmm) : V, A, Ω ; bornes COM(0) V/Ω(1) 3A(2) 16A(3)
const rigDmm = (fn, mode, jack = 2) => { L.reset(); const b = L.add('bat'), r = L.add('res'), d = L.add('dmm'); b.val = 10; r.val = 100; d.fn = fn; d.mode = mode || 'DC';
  if (fn === 'V') { L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.wire(d.id + ':1', r.id + ':0'); L.wire(d.id + ':0', r.id + ':1'); }
  else if (fn === 'I') { L.wire(b.id + ':1', d.id + ':' + jack); L.wire(d.id + ':0', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); }
  else { L.wire(d.id + ':1', r.id + ':0'); L.wire(d.id + ':0', r.id + ':1'); b.val = 0; L.comps.splice(L.comps.indexOf(b), 1); }
  L.render(); return { d, r, b }; };
{ const { d } = rigDmm('V'); yes('DMM tension DC', /^10\.0\d+ V$/.test(L.reading(d)) || /^9\.99/.test(L.reading(d))); }
{ const { d } = rigDmm('I'); near('DMM courant DC (jack 3 A) (A)', -d.I, 0.1, 0.01); yes('DMM courant : affichage', /^0\.0999|^0\.1000/.test(L.reading(d)) || /m?A$/.test(L.reading(d))); }
{ const { d } = rigDmm('I', 'DC', 3); near('DMM courant DC (jack 16 A) (A)', -d.I, 0.1, 0.01); }
{ const { d, r } = rigDmm('R'); near('DMM ohmmètre (Ω)', -1 / d.I, 100, 0.001); yes('DMM ohmmètre : affichage', /^100\.\d+ Ω$/.test(L.reading(d))); r.tol = true; r.eps = 0.03; L.render(); near('DMM ohmmètre avec tolérance 5 % (Ω)', -1 / d.I, 103, 0.001); r.tol = false; L.render(); near('DMM ohmmètre sans tolérance (Ω)', -1 / d.I, 100, 0.001); }
{ L.reset(); const r = L.add('res'), d = L.add('dmm'); d.fn = 'R'; L.wire(d.id + ':1', r.id + ':0'); L.render(); yes('DMM ohmmètre : circuit ouvert = OL', L.reading(d) === 'OL'); }
{ L.reset(); const s = L.add('ac'), r = L.add('res'), d = L.add('dmm'); s.val = 24; r.val = 100; d.fn = 'V'; d.mode = 'AC'; L.wire(s.id + ':1', r.id + ':0'); L.wire(r.id + ':1', s.id + ':0'); L.wire(d.id + ':1', r.id + ':0'); L.wire(d.id + ':0', r.id + ':1'); L.render(); near('DMM tension AC (V)', d.Ua, 24, 0.001); }
{ L.reset(); const b = L.add('bat'), r = L.add('res'), d = L.add('dmm'), p = L.add('pb'); p.closed = true; b.val = 10; r.val = 100; d.fn = 'V';
  L.wire(b.id + ':1', p.id + ':0'); L.wire(p.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.wire(d.id + ':1', r.id + ':0'); L.wire(d.id + ':0', r.id + ':1'); L.render(); yes('DMM en mode temporel', L.tranMode); near('DMM tension en mode temporel (V)', -d.U, 10, 0.01); }
{ L.reset(); const b = L.add('bat'), r = L.add('res'), d = L.add('dmm'), p = L.add('pb'); p.closed = true; b.val = 10; r.val = 100; d.fn = 'I';
  L.wire(b.id + ':1', d.id + ':2'); L.wire(d.id + ':0', p.id + ':0'); L.wire(p.id + ':1', r.id + ':0'); L.wire(r.id + ':1', b.id + ':0'); L.render(); near('DMM courant en mode temporel (A)', -d.I, 0.1, 0.01); }
// Résistance à tolérance 5 %
L.reset(); { const b = L.add('bat'), r = L.add('res'), a = L.add('amp'); b.val = 10; r.val = 100; L.wire(b.id + ':1', r.id + ':0'); L.wire(r.id + ':1', a.id + ':1'); L.wire(a.id + ':0', b.id + ':0'); L.render();
  near('R sans tolérance : I (A)', -a.I, 0.1, 0.001); r.tol = true; r.eps = 0.05; L.render(); near('R +5 % : I (A)', -a.I, 10 / 105, 0.001); r.eps = -0.05; L.render(); near('R −5 % : I (A)', -a.I, 10 / 95, 0.001);
  r.tol = true; r.eps = undefined; L.render(); yes('R tolérance : écart tiré dans ±5 %', Math.abs(r.eps) <= 0.05 + 1e-9 && r.eps !== undefined); }
// Oscilloscope : niveau de déclenchement
L.reset(); { const g = L.add('gbf'), o = L.add('scope'); g.amp = 2; g.f = 1000; o.td = 5e-4; L.wire(g.id + ':1', o.id + ':1'); L.wire(g.id + ':0', o.id + ':0'); L.wire(o.id + ':0', o.id + ':2'); L.render();
  yes('Trigger auto : pas de marqueur', L.traces(o, 30).indexOf('stroke-dasharray="4 5"') < 0); o.tla = false; o.tl = 1; o.v1 = 1; yes('Trigger manuel : marqueur de niveau', L.traces(o, 30).indexOf('stroke-dasharray="4 5"') >= 0);
  o.tl = 3.9; const f1 = L.traces(o, 30); yes('Trigger hors signal : pas de plantage', typeof f1 === 'string'); yes('Trigger hors signal : défilement', o.free === true);
  const t0 = Date.now(); while (Date.now() - t0 < 40); yes('Trigger hors signal : la courbe défile', L.traces(o, 30) !== f1);
  o.tl = 1; const g1 = L.traces(o, 30); const t1 = Date.now(); while (Date.now() - t1 < 40); yes('Trigger dans le signal : courbe stable', L.traces(o, 30) === g1 && o.free === false); }
// 13. Arduino Uno : exécution en temps réel couplée au solveur temporel
{ const run = (T, dt = 0.05) => { const t1 = L.live.vt + T; while (L.live.vt < t1 - 1e-9) L.liveAdvance(L.live.vt + dt, 1e9); L.render(); };
  const find = t => L.comps.filter(c => c.type === t), ser = () => L.engOf(find('uno')[0]).ser, last = () => ser().trim().split('\r\n').pop();
  // Blink : LED + 220 Ω sur D8
  store['ex18'].onclick(); { const d = find('dled')[0]; const I = []; for (let k = 0; k < 24; k++) { run(0.1); I.push(d.I * 1000); }
    near('Blink : courant LED allumée (mA)', I[2], (5 - 1.88) / 245 * 1000, 0.03); yes('Blink : LED allumée 0–0,5 s', I[0] > 10 && I[3] > 10 && I[4] > 10); yes('Blink : LED éteinte 0,5–1 s', I[6] < 0.1 && I[8] < 0.1); yes('Blink : rallumée à 1 s', I[11] > 10 && I[12] > 10); }
  // Veilleuse LDR → analogRead
  store['ex19'].onclick(); { run(0.6); const ldr = find('ldr')[0], led = find('dled')[0], expect = lux => Math.floor(5 * 10000 / (10000 + L.ldrR({ lux })) / 5 * 1024);
    near('analogRead (100 lx)', +last().split(':')[1], expect(100), 0.01); yes('LED éteinte de jour', led.I < 1e-4); ldr.lux = 1; L.render(); run(0.6);
    near('analogRead (1 lx)', +last().split(':')[1], expect(1), 0.01); yes('LED allumée de nuit', led.I > 0.01); }
  // Radar HC-SR04 : pulseIn
  store['ex20'].onclick(); { run(1); const h = find('hcsr')[0]; near('pulseIn → distance 100 cm', +last().match(/[\d.]+/)[0], 100, 0.01); h.dist = 15; L.render(); run(1);
    near('pulseIn → distance 15 cm', +last().match(/[\d.]+/)[0], 15, 0.02); yes('alerte < 20 cm', find('dled')[0].I > 0.01); h.dist = 300; L.render(); run(1); near('pulseIn → distance 300 cm', +last().match(/[\d.]+/)[0], 300, 0.01); }
  // PWM + potentiomètre + oscilloscope
  store['ex21'].onclick(); { run(0.4); const sc = find('scope')[0], pot = find('pot')[0], led = find('dled')[0];
    near('analogRead potentiomètre à 50 %', +last().split(' ')[0], 511, 0.01); near('fréquence PWM (Hz)', L.trFreq(sc, 0), 490, 0.02);
    pot.pos = 1; L.render(); run(0.3); yes('PWM ≈ 100 % : sortie presque toujours haute', Array.from(sc.tr.y[0]).filter(v => v > 2.5).length / sc.tr.y[0].length > 0.95); near('courant LED à 100 %', led.I * 1000, (4.68 - 1.88) / 220 * 1000, 0.12);
    pot.pos = 0.25; L.render(); run(0.4); const y = sc.tr.y[0], hi = Array.from(y).filter(v => v > 2.5).length / y.length; near('rapport cyclique PWM (0,25)', hi, 0.25, 0.1); }
  // Bouton poussoir + INPUT_PULLUP + Serial
  store['ex22'].onclick(); { run(0.5); const b = find('pb')[0]; yes('pas d’appui fantôme au démarrage', ser().indexOf('Appuis') < 0);
    b.closed = true; L.render(); run(0.3); b.closed = false; L.render(); run(0.3); b.closed = true; L.render(); run(0.3); near('compteur d’appuis', +last().split(':')[1], 2, 0.01); }
  // Feu tricolore : fonctions, long, delay
  store['ex23'].onclick(); { run(0.5); let I = find('dled').map(d => d.I); yes('feu : rouge', I[0] > 0.01 && I[1] < 1e-4 && I[2] < 1e-4); run(3); I = find('dled').map(d => d.I); yes('feu : vert à 3,5 s', I[2] > 0.01 && I[0] < 1e-4); run(3); I = find('dled').map(d => d.I); yes('feu : orange à 6,5 s', I[1] > 0.01 && I[0] < 1e-4 && I[2] < 1e-4); }
  // Pause / reprise / reset
  { const t = L.live.vt; L.liveStop(); yes('pause : temps figé', L.live.vt === t && !L.live.on); L.liveStart(); run(0.2); yes('reprise', L.live.vt > t); L.liveResetAll(); run(0.5); yes('reset : redémarre à zéro', L.live.vt < 0.6 && find('dled')[0].I > 0.01); }
  // Télécommande IR : tone() 38 kHz + TSOP
  store['ex24'].onclick(); { const tt = find('tsop')[0], t0 = Date.now(); run(1.2); yes('IR : salve détectée, rien sans porteuse', /avec porteuse : détecté {3}sans : rien/.test(last())); const dtm = Date.now() - t0;
    yes('IR : LED de réception allumée', find('dled').some(d => d.lc !== 'ir' && d.I > 0.01) || last().indexOf('détecté') > 0);
    tt.fc = 56000; L.render(); run(1.2); yes('IR : TSOP réglé sur une autre fréquence : rien', /avec porteuse : rien {3}sans : rien/.test(last()));
    tt.fc = 38000; tt.blk = true; L.render(); run(1.2); yes('IR : obstacle : rien', /avec porteuse : rien/.test(last()));
    tt.blk = false; L.render(); run(1.2); yes('IR : retour à la détection', /avec porteuse : détecté {3}sans : rien/.test(last())); console.log('     (durée du test IR : ' + dtm + ' ms)'); }
  // Erreur de compilation signalée
  { const u = find('uno')[0]; u.code = 'void setup(){ int x = ; }\nvoid loop(){}'; L.liveDrop(); yes('erreur de compilation : démarrage refusé', L.liveStart() === false); }
  // sauvegarde / chargement du code
  { const u = find('uno')[0]; u.code = LaboArduino.EXAMPLES[1].code; const js = L.serializeMontage(); yes('le code est sauvegardé', js.indexOf('analogRead') > 0); L.loadMontage(js); yes('le code est rechargé', find('uno')[0].code === LaboArduino.EXAMPLES[1].code); }
}
// 12 bis. Sans Uno : le mode temps réel s'arrête
L.reset(); L.liveDrop(); L.add('bat'); L.render(); yes('pas de Uno : pas de temps réel', !L.live);
L.add('volt').ana = 1; L.add('amp').ana = 1; L.render(); yes('rendu complet', true);
console.log(fail ? `\n${fail} test(s) en échec` : '\nTous les tests passent'); process.exit(fail ? 1 : 0);
