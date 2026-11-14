// Tests du solveur de LaboSim (Node >= 16, sans dépendance) : `npm test`
const fs = require('fs'), path = require('path');
const code = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8').replace(/example\(\);\s*$/, '');
const el = () => ({ style: {}, dataset: {}, classList: { toggle() {}, remove() {} }, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, set innerHTML(v) { this._h = v }, get innerHTML() { return this._h }, set textContent(v) {}, value: '', onclick: null, createSVGPoint: () => ({}) });
const store = {};
global.document = { getElementById: id => store[id] || (store[id] = el()), querySelectorAll: () => [] };
global.window = { addEventListener() {} };
const L = new Function(code + `;return{add,wire,connect,render,mkWave,bz,tp,buildPdf,pdfWrap,reset(){comps=[];wires=[];notes=[];uid=1;sel=selW=selN=pend=null},get err(){return err},get wires(){return wires},get comps(){return comps}}`)();

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
// 10. Poignées de déformation : la forme du câble change, pas l'électrique
L.reset(); { const b = L.add('bat', 200, 300), r = L.add('res', 500, 300); L.wire(b.id + ':1', r.id + ':0'); const w = L.wires[0], a = L.tp(w.a), c = L.tp(w.b), p0 = L.bz(a, c, w, 1 / 3);
  w.o1 = [40, -60]; const p1 = L.bz(a, c, w, 1 / 3); yes('poignée 1 déplace le câble', Math.hypot(p1.x - p0.x, p1.y - p0.y) > 10); }
// 11. Notes de repérage, PDF
L.reset(); L.add('bat'); const pdf = L.buildPdf([{ ops: 'BT /F1 12 Tf 40 500 Td (Test) Tj ET\n', img: null }], null);
yes('PDF construit', pdf.size > 300); yes('retour à la ligne', L.pdfWrap('un deux trois quatre', 9).length === 3);
// 12. Dessin de tous les appareils
L.reset(); ['bat', 'ac', 'gbf', 'res', 'bulb', 'cap', 'ind', 'sw', 'com', 'rel', 'ctc', 'amp', 'volt', 'watt', 'pince', 'scope'].forEach(t => L.add(t));
L.add('volt').ana = 1; L.add('amp').ana = 1; L.render(); yes('rendu complet', true);
console.log(fail ? `\n${fail} test(s) en échec` : '\nTous les tests passent'); process.exit(fail ? 1 : 0);
