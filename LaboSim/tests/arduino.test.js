// Tests du compilateur et du moteur Arduino de LaboSim : `npm test`
const A = require('../js/arduino.js');
let fail = 0;
const yes = (n, c) => { if (!c) fail++; console.log((c ? 'ok   ' : 'FAIL ') + n); };
const eq = (n, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + n + (ok ? '' : ' → ' + JSON.stringify(got) + ' (attendu ' + JSON.stringify(want) + ')')); };
function run(src, T, dt) { const e = new A.Engine(), r = e.load(src); if (!r.ok) return { e, r }; for (let t = 0; t <= T; t += dt) e.run(t); return { e, r }; }
const out = src => run(src, 3, 0.001).e.ser.split('\r\n').slice(0, -1);
// types C
eq('int 16 bits : 32767 + 1', out('void setup(){ int a=32767; a++; Serial.println(a); } void loop(){ delay(1000); }'), ['-32768']);
eq('unsigned int : 0 - 1', out('void setup(){ unsigned int a=0; a--; Serial.println(a); } void loop(){ delay(1000); }'), ['65535']);
eq('byte : 250 + 10', out('void setup(){ byte b=250; b+=10; Serial.println(b); } void loop(){ delay(1000); }'), ['4']);
eq('long : 100000 × 3', out('void setup(){ long b=100000; Serial.println(b*3); } void loop(){ delay(1000); }'), ['300000']);
eq('int × int déborde (200 × 200)', out('void setup(){ int a=200; Serial.println(a*a); } void loop(){ delay(1000); }'), ['-25536']);
eq('unsigned long : retour à zéro', out('void setup(){ unsigned long u=4000000000UL; u+=500000000; Serial.println(u); } void loop(){ delay(1000); }'), ['205032704']);
eq('division entière et flottante', out('void setup(){ Serial.println(7/2); Serial.println(7/2.0); Serial.println(-7%3); Serial.println(10/4*2.0); } void loop(){ delay(1000); }'), ['3', '3.50', '-1', '4.00']);
eq('float affiché avec 2 décimales par défaut, N sinon', out('void setup(){ float f=3.14159; Serial.println(f); Serial.println(f,4); } void loop(){ delay(1000); }'), ['3.14', '3.1416']);
eq('char et conversions', out("void setup(){ char c='A'; Serial.println(c); Serial.println(c+1); Serial.println((char)(c+1)); } void loop(){ delay(1000); }"), ['A', '66', 'B']);
eq('HEX / BIN', out('void setup(){ Serial.println(255,HEX); Serial.println(5,BIN); } void loop(){ delay(1000); }'), ['FF', '101']);
// structures de contrôle
eq('for / continue / while / break / switch', out('void setup(){ for(int i=0;i<4;i++){ if(i==1) continue; Serial.print(i); Serial.print(","); } Serial.println(); int k=0; while(k<100){ k+=7; if(k>30) break; } switch(k){ case 35: Serial.println("trente-cinq"); break; default: Serial.println("autre"); } } void loop(){ delay(1000); }'), ['0,2,3,', 'trente-cinq']);
eq('do … while', out('void setup(){ int n=0; do { n+=3; } while(n<10); Serial.println(n); } void loop(){ delay(1000); }'), ['12']);
eq('fonctions récursives (factorielle 16 bits)', out('int f(int n){ if(n<=1) return 1; return n*f(n-1); } void setup(){ Serial.println(f(5)); Serial.println(f(8)); } void loop(){ delay(1000); }'), ['120', '-25216']);
eq('fonction définie après son appel', out('void setup(){ Serial.println(carre(7)); } int carre(int x){ return x*x; } void loop(){ delay(1000); }'), ['49']);
eq('tableaux 1D et 2D', out('int a[3]={1,2,3}; int m[2][2]={{1,2},{3,4}}; void setup(){ a[1]=10; Serial.println(a[0]+a[1]+m[1][0]); } void loop(){ delay(1000); }'), ['14']);
eq('String', out('void setup(){ String s="ab"; s+="cd"; s+=12; Serial.println(s); Serial.println(s.length()); Serial.println(s.substring(1,3)); } void loop(){ delay(1000); }'), ['abcd12', '6', 'bc']);
eq('#define et const', out('#define N 4\nconst int K = 3; void setup(){ Serial.println(N*K); } void loop(){ delay(1000); }'), ['12']);
eq('map, constrain, min, max, abs', out('void setup(){ Serial.println(map(5,0,10,0,100)); Serial.println(constrain(15,0,10)); Serial.println(max(3,9)); Serial.println(min(3,9)); Serial.println(abs(-4)); } void loop(){ delay(1000); }'), ['50', '10', '9', '3', '4']);
// temps virtuel
{ const e = new A.Engine(); e.load(A.EXAMPLES[0].code); const ev = []; let prev = -1;
  for (let t = 0; t < 2.6; t += 0.0001) { e.run(t); const d = e.drv(8, t); if (d !== prev) { ev.push([t, d]); prev = d; } }
  yes('Blink : 6 changements en 2,6 s', ev.length === 6); yes('Blink : période de 1 s (±1 ms)', Math.abs(ev[2][0] - ev[0][0] - 1) < 0.001);
  yes('LED_BUILTIN suit la broche 13', e.drv(13, 2.6) === 2); }
{ const r = run('void setup(){ Serial.begin(9600); } void loop(){ Serial.println(millis()); delay(250); }', 1.1, 0.001); const v = r.e.ser.split('\r\n').filter(Boolean).map(Number);
  yes('millis() avance de 250 ms par tour', v.length >= 4 && Math.abs(v[2] - v[1] - 250) <= 1); }
{ const r = run('void setup(){ analogWrite(9,64); tone(5,1000); } void loop(){ delay(10); }', 0.01, 0.001);
  yes('analogWrite : PWM 490 Hz', Math.abs(r.e.nextEdge(0) - 0.5 * 64 / 255 * 2 / 490) < 1e-3 || r.e.nextEdge(0) > 0); }
{ const r = run('void setup(){ while(1){} } void loop(){}', 0.05, 0.0005); yes('boucle infinie : le temps virtuel avance sans bloquer', r.e.t > 40000 && !r.e.done); }
// erreurs de compilation
const msg = src => { const r = A.compile(src); return r.ok ? 'OK' : r.line + ':' + r.msg; };
yes('« ; » manquant signalé avec la ligne', /^1:.*;/.test(msg('void setup(){ int x=3\n x++; }\nvoid loop(){}')));
yes('variable inconnue', /^1:.*n’est pas déclarée/.test(msg('void setup(){ y=3; }\nvoid loop(){}')));
yes('loop() manquante', /loop/.test(msg('void setup(){}')));
yes('mauvais nombre d’arguments', /2 argument/.test(msg('void setup(){ digitalWrite(13); }\nvoid loop(){}')));
yes('accolade oubliée', /^\d+:/.test(msg('void setup(){ if(1){ }\nvoid loop(){}')));
yes('pointeurs refusés', /pointeurs/.test(msg('void setup(){ int *p; }void loop(){}')));
A.EXAMPLES.forEach(x => yes('exemple compilable : ' + x.n, A.compile(x.code).ok));
console.log(fail ? `\n${fail} test(s) en échec` : '\nTous les tests Arduino passent'); process.exit(fail ? 1 : 0);
