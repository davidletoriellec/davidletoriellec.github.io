const INFO={bat:{n:'Alimentation continue 0–30 V',v:9,u:'V',max:30},bat2:{n:'Alimentation continue double 2×(0–30 V)',v:9,u:'V',max:30},tsop:{n:'Récepteur infrarouge TSOP (porteuse filtrée)'},ac:{n:'Alimentation alternative 0–230 V~',v:12,max:230},res:{n:'Résistance',v:100,u:'Ω'},bulb:{n:'Ampoule',v:5,u:'W',lab:'Puissance nominale'},cap:{n:'Condensateur',v:10,u:'µF',lab:'Capacité'},ind:{n:'Bobine',v:100,u:'mH',lab:'Inductance'},watt:{n:'Wattmètre POWER8000'},pince:{n:'Pince ampèremétrique (PROVA 21)'},plc:{n:'Automate programmable compact'},plct:{n:'Module d’extension TOR (6 E / 4 S relais)'},plca:{n:'Module d’extension ANALOG (2 E / 2 S 0–10 V)'},cem:{n:'Compteur d’énergie monophasé'},cet:{n:'Compteur d’énergie triphasé'},cwm:{n:'Commutateur de wattmètre (méthode des 2 wattmètres)'},rel:{n:'Relais'},ctc:{n:'Contacteur 2 NO'},mdc:{n:'Moteur à courant continu'},mac:{n:'Moteur asynchrone monophasé'},led:{n:'Lampe à LED'},cfl:{n:'Lampe fluocompacte'},a3:{n:'Alimentation triphasée',v:400},four:{n:'Four électrique (thermostat TOR)',v:0},enc:{n:'Enceinte isolée chauffée',v:0},rtor:{n:'Régulateur de température TOR',v:0},rpid:{n:'Régulateur de température PID',v:0},tr1:{n:'Transformateur monophasé',v:0},tr3:{n:'Transformateur triphasé',v:0},smps:{n:'Alimentation à découpage',v:12,u:'V',max:15},cch:{n:'Caisse de charge',v:1000},m3:{n:'Moteur asynchrone triphasé'},sv:{n:'Sonde de tension'},sc:{n:'Sonde de courant'},tach:{n:'Compte-tours'},cpm:{n:'Couple-mètre'},bb:{n:'Boîte noire'},dio:{n:'Diode'},ldr:{n:'Photorésistance (LDR)'},irrx:{n:'Récepteur infrarouge (phototransistor)'},hcsr:{n:'Capteur ultrason HC-SR04'},uno:{n:'Arduino Uno'},pot:{n:'Potentiomètre',v:10000,u:'Ω'},pb:{n:'Bouton poussoir'},dled:{n:'LED'},bread:{n:'Platine d’essai (breadboard)'},ne555:{n:'NE555'},aop:{n:'AOP LF356'},cmp:{n:'Comparateur LM311'},com:{n:'Commutateur 2 voies (3 bornes)'},gbf:{n:'GBF (générateur de fonctions)'},scope:{n:'Oscilloscope 2 voies'},sw:{n:'Interrupteur'},amp:{n:'Multimètre (ampèremètre)'},volt:{n:'Multimètre (voltmètre)'},dmm:{n:'Multimètre numérique 5½ digits (V, A, Ω)'},ohm:{n:'Ohmmètre (calibres + BIP)'},lev:{n:'Système de levage (treuil + charge)'},reg:{n:'Régulateur de tension réglable (Un)'},bjt:{n:'Transistor bipolaire'},fet:{n:'Transistor MOSFET / HEMT'},triac:{n:'Triac'},otri:{n:'Optotriac (MOC3021)'},spk:{n:'Haut-parleur'},mic:{n:'Microphone'},dec:{n:'Boîte à décades (R, C, L)'}};
const DIP8={t:[[-39,39],[-13,39],[13,39],[39,39],[39,-39],[13,-39],[-13,-39],[-39,-39]],b:[-62,-62,124,124]};
const GEO={gbf:{t:[[62,43,'b'],[62,28,'b']],b:[-100,-55,200,110]},scope:{t:[[-90,103,'b'],[-90,88,'b'],[-30,103,'b'],[-30,88,'b']],b:[-150,-110,300,220]},cap:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},ind:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},watt:{t:[[75,16],[75,-26],[115,16],[115,-26]],b:[-130,-60,260,120]},pince:{t:[[194,18],[194,-16]],b:[-45,-45,257,90]},rel:{t:[[-60,44],[-30,44],[20,44],[50,44],[80,44]],b:[-90,-60,180,120]},ctc:{t:[[-90,44],[-60,44],[-20,44],[10,44],[45,44],[75,44]],b:[-110,-60,220,120]},mdc:{t:[[-25,37],[25,37]],b:[-50,-50,100,100]},mac:{t:[[-25,37],[25,37]],b:[-50,-50,100,100]},led:{t:[[-26,40],[26,40]],b:[-45,-70,90,125]},cfl:{t:[[-26,40],[26,40]],b:[-45,-70,90,125]},a3:{t:[[-75,36],[-25,36],[25,36],[75,36]],b:[-110,-55,220,110]},cch:{t:[[-70,38],[-40,38],[10,38],[40,38],[70,38]],b:[-90,-50,180,100]},m3:{t:[[-40,37],[0,37],[40,37]],b:[-60,-52,120,102]},four:{t:[[-40,60],[40,60]],b:[-90,-70,180,140]},enc:{t:[[-90,64],[-50,64],[50,64],[90,64]],b:[-120,-80,240,150]},rtor:{t:[[-75,36],[-35,36],[35,36],[75,36]],b:[-100,-55,200,110]},rpid:{t:[[-75,36],[-35,36],[35,36],[75,36]],b:[-100,-55,200,110]},tr1:{t:[[-75,36],[-35,36],[35,36],[75,36]],b:[-100,-55,200,110]},tr3:{t:[[-105,36],[-75,36],[-45,36],[-15,36],[15,36],[45,36],[75,36],[105,36]],b:[-130,-55,260,110]},smps:{t:[[-75,36],[-35,36],[35,36],[75,36]],b:[-100,-55,200,110]},
 sv:{t:[[45,7,'b'],[45,-8,'b'],[-50,16],[-50,-16]],b:[-75,-35,150,70]},sc:{t:[[100,9,'b'],[100,-6,'b']],b:[-45,-45,175,90]},tach:{t:[],b:[-48,-40,96,78]},cpm:{t:[],b:[-72,-44,144,72]},bb:{t:[[-25,36],[25,36]],b:[-60,-34,120,82]},bbQ:{t:[[-92,-30],[-92,30],[92,-30],[92,30]],b:[-112,-58,224,116]},ne555:DIP8,aop:DIP8,cmp:DIP8,dio:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},ldr:{t:[[-13,46],[13,46]],b:[-40,-50,80,116]},irrx:{t:[[-13,46],[13,46]],b:[-40,-50,80,116]},hcsr:{t:[[-39,64],[-13,64],[13,64],[39,64]],b:[-90,-62,180,148]},dled:{t:[[-13,46],[13,46]],b:[-40,-44,80,112]},com:{t:[[-45,24],[0,24],[45,24]],b:[-65,-32,130,66]},plc:{t:[[-165,-52],[-135,-52],[-90,-52],[-60,-52],[-30,-52],[0,-52],[30,-52],[60,-52],[90,-52],[120,-52],[-150,52],[-120,52],[-80,52],[-50,52],[-10,52],[20,52],[60,52],[90,52]],b:[-195,-82,375,164]},plct:{t:[[-110,-52],[-80,-52],[-50,-52],[-20,-52],[10,-52],[40,-52],[70,-52],[-110,52],[-80,52],[-50,52],[-20,52],[10,52],[40,52],[70,52],[100,52]],b:[-135,-82,260,164]},plca:{t:[[-60,-52],[-20,-52],[20,-52],[-20,52],[20,52],[-60,52]],b:[-95,-82,190,164]},cem:{t:[[-60,52],[30,52],[-30,52],[60,52]],b:[-95,-62,190,126]},cet:{t:[[-105,52],[15,52],[-75,52],[45,52],[-45,52],[75,52],[-15,52],[105,52]],b:[-135,-62,270,126]},cwm:{t:[[-105,-50],[-105,50],[-70,-50],[-70,50],[-35,-50],[-35,50],[50,50],[85,50],[120,50]],b:[-135,-82,285,164]},ac:{t:[[-40,34],[40,34]],b:[-95,-50,190,100]},bat:{t:[[35,34],[-35,34]],b:[-85,-50,170,100]},bat2:{t:[[-26,34],[-70,34],[70,34],[26,34]],b:[-100,-50,200,100]},dmm:{t:[[92,2],[92,-26],[74,32],[106,32]],b:[-124,-60,248,122]},tsop:{t:[[-26,46],[0,46],[26,46]],b:[-60,-52,90,122]},res:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},bulb:{t:[[-26,40],[26,40]],b:[-45,-55,90,110]},sw:{t:[[-42,22],[42,22]],b:[-60,-30,120,64]},amp:{t:[[-24,62],[24,62]],b:[-48,-75,96,150]}};/* platine d'essai : 20 colonnes x (5+5) trous + 4 rails ; trou = [x,y,'h',bande] */
const BP=26,BC=20,BROW=[-143,-117,-91,-65,-39,39,65,91,117,143],BRAIL=[-221,-195,195,221],BX0=-(BC-1)/2*BP;
GEO.bread=(()=>{const t=[];for(let ci=0;ci<BC;ci++)BROW.forEach((y,ri)=>t.push([BX0+ci*BP,y,'h',(ri<5?0:BC)+ci]));
 BRAIL.forEach((y,r)=>{for(let ci=0;ci<BC;ci++)t.push([BX0+ci*BP,y,'h',2*BC+r])});return{t,b:[-275,-247,550,494]}})();
GEO.uno=(()=>{const X={};for(let n=0;n<8;n++)X[n]=[150-20*n,-80];for(let n=8;n<14;n++)X[n]=[-30-20*(n-8),-80];for(let i=0;i<6;i++)X[14+i]=[30+20*i,80];X[20]=[-130,80];X[21]=[-150,80];X[22]=[-110,80];X[23]=[-150,-80];
 return{t:Array.from({length:24},(_,i)=>[X[i][0],X[i][1],'h']),b:[-205,-115,410,230]}})();
GEO.pot={t:[[-30,40],[0,40],[30,40]],b:[-50,-50,100,110]};GEO.pb={t:[[-26,40],[26,40]],b:[-45,-45,90,100]};
const UNOL=['D0','D1','D2','D3~','D4','D5~','D6~','D7','D8','D9~','D10~','D11~','D12','D13','A0','A1','A2','A3','A4','A5','5V','3V3','GND','GND'];
const PLUG=new Set(['res','cap','ind','dio','dled','ldr','irrx','hcsr','ne555','aop','cmp','bjt','fet','triac','otri','mic']);
function nearHole(b,x,y,tol){const rx=x-b.x,ry=y-b.y;let ci=Math.round((rx-BX0)/BP);if(ci<0||ci>=BC)return null;let best=null;
 const t=geo(b).t,test=(idx,yy)=>{const dx=BX0+ci*BP-rx,dy=yy-ry,d=Math.hypot(dx,dy);if(d<=tol&&(!best||d<best.d))best={d,i:idx,x:b.x+BX0+ci*BP,y:b.y+yy}};
 BROW.forEach((yy,ri)=>test(ci*10+ri,yy));BRAIL.forEach((yy,r)=>test(2*BC*5+r*BC+ci,yy));return best}
let plugSet=new Set();
/* liaisons implicites : bornes enfichées dans la platine + bandes conductrices (trous d'une même bande reliés) */
function bridges(){const P=[];plugSet=new Set();const bs=comps.filter(c=>c.type==='bread');if(!bs.length)return P;
 bs.forEach(b=>{const t=geo(b).t,sk=h=>b.id+':s'+t[h][3];
  comps.forEach(c=>{if(!PLUG.has(c.type))return;geo(c).t.forEach((_,i)=>{const p=T(c,i),h=nearHole(b,p.x,p.y,4);if(h){P.push([c.id+':'+i,sk(h.i)]);plugSet.add(c.id)}})});
  wires.forEach(w=>[w.a,w.b].forEach(e=>{const q=e.split(':');if(+q[0]===b.id)P.push([e,sk(+q[1])])}))});
 return P}
function snapPlug(c){if(!PLUG.has(c.type))return;const bs=comps.filter(b=>b.type==='bread');let best=null;
 bs.forEach(b=>geo(c).t.forEach((_,i)=>{const p=T(c,i),h=nearHole(b,p.x,p.y,15);if(h&&(!best||h.d<best.d))best={d:h.d,dx:h.x-p.x,dy:h.y-p.y}}));if(best){c.x+=best.dx;c.y+=best.dy}}
Object.assign(GEO,{bjt:{t:[[-22,46],[0,46],[22,46]],b:[-46,-62,92,130]},fet:{t:[[-22,46],[0,46],[22,46]],b:[-46,-62,92,130]},triac:{t:[[-22,46],[0,46],[22,46]],b:[-46,-62,92,130]},otri:{t:[[-30,46],[-10,46],[10,46],[30,46]],b:[-50,-44,100,112]},spk:{t:[[-14,60],[14,60]],b:[-58,-58,116,130]},mic:{t:[[-13,46],[13,46]],b:[-34,-48,68,112]},dec:{t:[[-120,86],[120,86]],b:[-146,-54,292,150]}});
GEO.lev={t:[],b:[-80,-78,160,196]};GEO.ohm={t:[[-30,52],[30,52]],b:[-80,-50,160,118]};GEO.reg={t:[[-30,44],[0,44],[30,44]],b:[-45,-34,90,88]};GEO.volt=GEO.amp;GEO.voltA={t:[[-25,98],[25,98]],b:[-95,-100,190,215]};GEO.ampA={t:[[-40,98],[0,98],[40,98]],b:[-95,-100,190,215]};const geo=c=>GEO[c.type+(c.ana?'A':c.type==='bb'&&c.kind==='q'?'Q':'')]||GEO[c.type];
const TD=[];for(let e=-7;e<=-1;e++)[1,2,5].forEach(m=>TD.push(+(m+'e'+e)));
const VD=[0.005,0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20];let pairId=1;const RV=[0.1,1,3,10,30,100,300,1000],RA=[0.001,0.01,0.1,0.3,1,3,10];
const UNITS={kg:[['kg',1]],lux:[['lx',1]],cm:[['cm',1]],V:[['mV',1e-3],['V',1],['kV',1e3]],Om:[['mΩ',1e-3],['Ω',1],['kΩ',1e3],['MΩ',1e6]],uF:[['pF',1e-6],['nF',1e-3],['µF',1],['mF',1e3]],mH:[['µH',1e-3],['mH',1],['H',1e3]],W:[['mW',1e-3],['W',1],['kW',1e3]],Hz:[['Hz',1],['kHz',1e3],['MHz',1e6]],A:[['mA',1e-3],['A',1]],rpm:[['tr/min',1]],pct:[['%',1]],NU:[['',1]],PCT:[['%',0.01]]};
const FIELDS={lev:[['mass','Masse de la charge',UNITS.kg,{min:0,max:500,sl:[0,50,.5]}],['dr','Rayon du tambour',UNITS.cm,{min:1,max:30,sl:[1,30,.5]}],['gr','Réduction du réducteur (1:n)',UNITS.NU,{min:1,max:500,sl:[1,200,1]}]],reg:[['ur','Tension de sortie Un',UNITS.V,{min:1.25,max:30,sl:[1.25,30,.05]}],['rvd','Tension de déchet (dropout)',UNITS.V,{min:.1,max:5,sl:[.1,5,.1]}],['rim','Limite de courant',UNITS.A,{min:.05,max:5,sl:[.05,5,.05]}]],bjt:[['beta','Gain en courant β',UNITS.NU,{min:10,max:500,sl:[10,500,1]}]],fet:[['vt','Tension de seuil Vth',UNITS.V,{min:-3,max:6,sl:[-3,6,0.1]}],['kp','Facteur K (A/V²)',UNITS.NU,{min:.001,max:20,sl:'log'}]],triac:[['igt','Courant de gâchette Igt',UNITS.A,{min:.001,max:.1,sl:[.001,.1,.001]}],['ih','Courant de maintien Ih',UNITS.A,{min:.001,max:.1,sl:[.001,.1,.001]}]],otri:[['ift','Courant LED de déclenchement',UNITS.A,{min:.001,max:.05,sl:[.001,.05,.001]}]],spk:[['re','Résistance de bobine',UNITS.Om,{min:2,max:32,sl:[2,32,1]}]],mic:[['mf','Fréquence du son',UNITS.Hz,{min:20,max:8000,sl:'log'}],['ma','Niveau sonore',UNITS.PCT,{min:0,max:1,sl:[0,1,.01]}]],bat:[['val','Tension',UNITS.V,{min:0,max:30,sl:[0,30,0.5]}],['il','Limite de courant',UNITS.A,{min:.01,max:10,sl:[.01,10,.01]}]],bat2:[['val','CH1 – tension',UNITS.V,{min:0,max:30,sl:[0,30,0.5]}],['il','CH1 – limite de courant',UNITS.A,{min:.01,max:10,sl:[.01,10,.01]}],['val2','CH2 – tension',UNITS.V,{min:0,max:30,sl:[0,30,0.5]}],['il2','CH2 – limite de courant',UNITS.A,{min:.01,max:10,sl:[.01,10,.01]}]],tsop:[['fc','Fréquence de la porteuse',UNITS.Hz,{min:20000,max:70000,sl:[20000,70000,100]}],['amb','Lumière ambiante parasite',UNITS.pct,{min:0,max:100,sl:[0,100,1]}]],irrx:[['amb','Lumière ambiante parasite',UNITS.pct,{min:0,max:100,sl:[0,100,1]}]],
 ac:[['val','Tension efficace',UNITS.V,{min:0,max:230,sl:[0,230,1]}],['f','Fréquence',UNITS.Hz,{min:1,max:1e6,sl:'log'}]],
 gbf:[['amp','Amplitude crête',UNITS.V,{min:0,max:12,sl:[0,12,0.1]}],['f','Fréquence',UNITS.Hz,{min:10,max:1e6,sl:'log'}],['off','Offset',UNITS.V,{min:-12,max:12}],['duty','Rapport cyclique',UNITS.PCT,{min:.05,max:.95,sl:[.05,.95,.01]}]],
 ldr:[['lux','Éclairement',UNITS.lux,{min:0.1,max:1e4,sl:'log'}]],pot:[['pos','Position du curseur',UNITS.PCT,{min:0,max:1,sl:[0,1,.01]}],['val','Résistance totale',UNITS.Om,{min:100}]],hcsr:[['dist','Distance de l’obstacle',UNITS.cm,{min:2,max:400,sl:[2,400,1]}]],
 res:[['val','Résistance',UNITS.Om,{min:1e-3}]],bulb:[['val','Puissance nominale',UNITS.W,{min:1e-3}],['un','Tension nominale',UNITS.V,{min:1e-3}]],
 cap:[['val','Capacité',UNITS.uF,{min:1e-6}]],ind:[['val','Inductance',UNITS.mH,{min:1e-3}],['r','Résistance interne',UNITS.Om,{min:1e-3}]],
 rel:[['un','Tension bobine',UNITS.V,{min:0.1}],['rc','Résistance bobine',UNITS.Om,{min:1}]],ctc:[['un','Tension bobine',UNITS.V,{min:0.1}],['rc','Résistance bobine',UNITS.Om,{min:1}]],
 mdc:[['un','Tension nominale',UNITS.V,{min:1}],['ra','Résistance d’induit',UNITS.Om,{min:0.01}],['la','Inductance d’induit',UNITS.mH,{min:0.01}],['i0','Courant à vide',UNITS.A,{min:0.001}],['n0','Vitesse à vide',UNITS.rpm,{min:10}],['inom','Courant nominal',UNITS.A,{min:0.01}],['load','Couple résistant (% du nominal)',UNITS.pct,{min:0,max:150,sl:[0,150,1]}]],
 mac:[['ml','Charge (0 = à vide · 1 = nominale · 1,2 max)',UNITS.NU,{min:0,max:1.2,sl:[0,1.2,0.01]}],['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance utile',UNITS.W,{min:1}],['i0r','Courant à vide (% de In)',UNITS.PCT,{min:0.05,max:1}],['cos0','cos φ à vide',UNITS.NU,{min:0.05,max:0.9}],['cosphi','cos φ',UNITS.NU,{min:0.1,max:1}],['eta','Rendement',UNITS.PCT,{min:0.1,max:1}]],
 led:[['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance',UNITS.W,{min:0.1}],['cosphi','cos φ (capacitif)',UNITS.NU,{min:0.1,max:1}]],
 cfl:[['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance',UNITS.W,{min:0.1}],['cosphi','cos φ (capacitif)',UNITS.NU,{min:0.1,max:1}]],
 tr1:[['u1','Tension primaire nominale U1n',UNITS.V,{min:1,max:1000,sl:[1,500,1]}],['u2','Tension secondaire à vide U2',UNITS.V,{min:.1,max:1000,sl:[1,500,1]}],['sn','Puissance apparente Sn',[['VA',1],['kVA',1e3]],{min:1,max:1e5,sl:'log'}],['pfe','Pertes fer Pfer (à U1n)',UNITS.W,{min:0,max:5000}],['q0','Puissance réactive de magnétisation Q0',[['var',1],['kvar',1e3]],{min:0,max:20000}],['pj','Pertes cuivre Pj (à courant nominal)',UNITS.W,{min:0,max:5000}],['ucc','Tension de court-circuit ucc (flux de fuite)',[['%',1]],{min:.5,max:20,sl:[.5,15,.1]}],['f','Fréquence nominale',UNITS.Hz,{min:1,max:1e4,sl:'log'}]],tr3:[['u1','Tension primaire nominale U1n',UNITS.V,{min:1,max:1000,sl:[1,500,1]}],['u2','Tension secondaire à vide U2',UNITS.V,{min:.1,max:1000,sl:[1,500,1]}],['sn','Puissance apparente Sn',[['VA',1],['kVA',1e3]],{min:1,max:1e5,sl:'log'}],['pfe','Pertes fer Pfer (à U1n)',UNITS.W,{min:0,max:5000}],['q0','Puissance réactive de magnétisation Q0',[['var',1],['kvar',1e3]],{min:0,max:20000}],['pj','Pertes cuivre Pj (à courant nominal)',UNITS.W,{min:0,max:5000}],['ucc','Tension de court-circuit ucc (flux de fuite)',[['%',1]],{min:.5,max:20,sl:[.5,15,.1]}],['f','Fréquence nominale',UNITS.Hz,{min:1,max:1e4,sl:'log'}]],smps:[['val','Tension de sortie',UNITS.V,{min:3.3,max:15,sl:[3.3,15,.1]}],['pmax','Puissance maximale',UNITS.W,{min:30,max:300,sl:[30,300,10]}],['eta','Rendement',UNITS.PCT,{min:.5,max:.97,sl:[.5,.97,.01]}]],four:[['pn','Puissance de chauffe',UNITS.W,{min:100,max:4000,sl:[200,3000,50]}],['un','Tension nominale',UNITS.V,{min:1}],['cons','Consigne du thermostat',[['°C',1]],{min:30,max:300,sl:[30,300,5]}],['hy','Hystérésis (±)',[['K',1]],{min:.2,max:30,sl:[.5,20,.5]}],['tamb','Température ambiante',[['°C',1]],{min:-20,max:50,sl:[-10,40,1]}],['cth','Capacité thermique',[['kJ/K',1]],{min:1,max:500,sl:'log'}],['rth','Résistance thermique (isolation)',[['K/W',1]],{min:.005,max:2,sl:'log'}],['dly','Retard de la sonde',[['s',1]],{min:0,max:300,sl:[0,300,5]}],['tpr','Inertie de la sonde',[['s',1]],{min:.5,max:300,sl:[1,200,1]}]],
 enc:[['pn','Puissance de la résistance chauffante',UNITS.W,{min:50,max:5000,sl:'log'}],['un','Tension nominale',UNITS.V,{min:1}],['tamb','Température ambiante',[['°C',1]],{min:-20,max:50,sl:[-10,40,1]}],['cth','Capacité thermique (enceinte + contenu)',[['kJ/K',1]],{min:1,max:2000,sl:'log'}],['rth','Résistance thermique (isolation)',[['K/W',1]],{min:.005,max:2,sl:'log'}],['dly','Retard de la sonde',[['s',1]],{min:0,max:300,sl:[0,300,5]}],['tpr','Inertie de la sonde',[['s',1]],{min:.5,max:300,sl:[1,200,1]}]],
 rtor:[['cons','Consigne',[['°C',1]],{min:0,max:300,sl:[0,300,1]}],['hy','Hystérésis (±)',[['K',1]],{min:0,max:30,sl:[0,10,.1]}],['ks','Sensibilité de la sonde',[['mV/°C',1]],{min:1,max:100}]],
 rpid:[['cons','Consigne',[['°C',1]],{min:0,max:300,sl:[0,300,1]}],['ks','Sensibilité de la sonde',[['mV/°C',1]],{min:1,max:100}],['kp','Gain proportionnel Kp',[['%/K',1]],{min:0,max:100,sl:[0,50,.5]}],['ti','Temps d’intégration Ti',[['s',1]],{min:1,max:5000,sl:'log'}],['tdv','Temps de dérivation Td',[['s',1]],{min:0,max:1000,sl:[0,300,1]}],['tc','Période de la sortie (MLI lente)',[['s',1]],{min:1,max:120,sl:[1,60,1]}]],
 a3:[['val','Tension entre phases',UNITS.V,{min:0,max:400,sl:[0,400,5]}],['f','Fréquence',UNITS.Hz,{min:1,max:1e6,sl:'log'}]],
 cch:[['val','Puissance',UNITS.W,{min:0,max:4000,sl:[0,4000,200]}],['un','Tension nominale',UNITS.V,{min:1}]],
 m3:[['ml','Charge (0 = à vide · 1 = nominale · 1,2 max)',UNITS.NU,{min:0,max:1.2,sl:[0,1.2,0.01]}],['pn','Puissance utile',UNITS.W,{min:1}],['un','Tension d’enroulement',UNITS.V,{min:1}],['i0r','Courant à vide (% de In)',UNITS.PCT,{min:0.05,max:1}],['cos0','cos φ à vide',UNITS.NU,{min:0.05,max:0.9}],['cosphi','cos φ',UNITS.NU,{min:0.1,max:1}],['eta','Rendement',UNITS.PCT,{min:0.1,max:1}]],
 aop:[['vm','Marge de saturation (V)',UNITS.V,{min:0,max:5}]],cmp:[['vm','Marge de saturation (V)',UNITS.V,{min:0,max:5}]]};
const selH=(p,o,v)=>`<select data-p="${p}">${o.map(([a,l])=>`<option value="${a}"${String(a)===String(v)?' selected':''}>${l}</option>`).join('')}</select>`;
const COLS=['#d32f2f','#1b1b1b','#1976d2','#2e7d32','#f9a825','#fb8c00','#8e24aa','#6d4c41','#9e9e9e'];const VERSION='3.12.0';
let wBack=(()=>{try{return localStorage.getItem('labosim_wback')!=='0'}catch(e){return true}})(),comps=[],wires=[],sel=null,selW=null,pend=null,mouse={x:0,y:0},drag=null,wd=null,notes=[],selN=null,uid=1,err='',theory=false;
const cv=document.getElementById('cv'),st=document.getElementById('st'),pn=document.getElementById('pn');
const NOROT=new Set(['bread','pince','sc']);
const T=(c,i)=>{const t=geo(c).t[i],r=(c.rot||0)*Math.PI/180,co=Math.round(Math.cos(r)),si=Math.round(Math.sin(r));return{x:c.x+t[0]*co-t[1]*si,y:c.y+t[0]*si+t[1]*co}};
const tp=k=>{const[id,i]=k.split(':');const c=comps.find(c=>c.id==id);return c?T(c,+i):null};
function Rv(c){if(!c.tol)return c.val;if(c.eps===undefined)c.eps=Math.round((Math.random()*2-1)*50)/1000;return c.val*(1+c.eps)}
const DEC={R:{m:[1e5,1e4,1e3,100,10,1],l:['×100k','×10k','×1k','×100','×10','×1']},C:{m:[100,10,1,.1,.01,.001],l:['100µ','10µ','1µ','0,1µ','10n','1n']},L:{m:[100,10,1,.1,.01,.001],l:['100m','10m','1m','0,1m','10µ','1µ']}};
const decVal=c=>(c.dg||[0,0,0,0,0,0]).reduce((t,d,i)=>t+d*DEC[c.dkind||'R'].m[i],0);
function decSet(c,x){const kd=c.dkind||'R',base=kd==='R'?1:kd==='C'?1e6:1e3,n=Math.max(0,Math.min(999999,Math.round(x*base/DEC[kd].m[5])));c.dg=[0,1,2,3,4,5].map(i=>Math.floor(n/Math.pow(10,5-i))%10)}
const bjtP=c=>{c.beta=c.pw?30:100};
const fetP=c=>{const P={nmos:c.pw?[3,2]:[2.1,.05],pmos:c.pw?[3,1]:[2,.04],hemt:[-.8,.1],gan:[1.4,15]}[c.fk]||[2,.05];c.vt=P[0];c.kp=P[1]};
const SEMI={plc:c=>{c.sup='24dc';c.prg=PLC_PRG;c.run=true},plct:c=>{},plca:c=>{},cem:c=>{c.E=0;c.eacc=60},cet:c=>{c.E=0;c.eacc=60},cwm:c=>{c.cwp=0},pince:c=>{c.E=0;c.eacc=1},watt:c=>{c.E=0;c.eacc=1},four:c=>{c.pn=2000;c.un=230;c.cons=180;c.hy=2;c.tamb=20;c.cth=15;c.rth=.2;c.acc=60;c.hon=false;c.dly=15;c.tpr=60},enc:c=>{c.pn=1000;c.un=230;c.tamb=20;c.cth=30;c.rth=.1;c.acc=60;c.dly=15;c.tpr=30},rtor:c=>{c.cons=50;c.hy=1;c.ks=10;c.ron=false},rpid:c=>{c.cons=50;c.ks=10;c.kp=10;c.ti=200;c.tdv=30;c.tc=10;c.pe=true;c.ie=true;c.de=false;c.ron=false},tr1:c=>{c.u1=230;c.u2=24;c.sn=100;c.pfe=3;c.q0=8;c.pj=6;c.ucc=8},tr3:c=>{c.u1=400;c.u2=230;c.sn=5000;c.pfe=60;c.q0=250;c.pj=150;c.ucc=4;c.cp='Dy11'},smps:c=>{c.val=12;c.pmax=100;c.eta=.88;c.smon=false},lev:c=>{c.mot=0;c.mass=5;c.dr=5;c.gr=40;c.lh=0},ohm:c=>{c.orng=2000;c.bip=false},reg:c=>{c.ur=5;c.rvd=2;c.rim=1.5},bjt:c=>{c.kd='npn';c.pw=false;bjtP(c)},fet:c=>{c.fk='nmos';c.pw=false;fetP(c)},triac:c=>{c.igt=.025;c.ih=.03},otri:c=>{c.ift=.015;c.zc=false},spk:c=>{c.re=8;c.mute=false},dec:c=>{c.dkind='R';c.dg=[0,0,1,0,0,0]},mic:c=>{c.mk='dyn';c.mf=440;c.ma=.5;c.mr=false}};
function setSemi(c,k,v){if(k==='pw'){c.pw=v==='1'}else c[k]=v;if(c.type==='bjt')bjtP(c);else if(c.type==='fet'&&(k==='pw'||k==='fk'))fetP(c)}
function add(type,x,y){const c={id:uid++,type,x:x??450,y:y??300,val:INFO[type].v,f:type==='gbf'?1000:50,un:({rel:12,ctc:24,mdc:12,mac:230,led:230,cfl:230,m3:230,cch:230})[type]||6,cm:'mono',cpl:'Y',ratio:type==='sc'?100:10,xy:false,ml:1,i0r:({mac:.55,m3:.4})[type]||.5,cos0:({mac:.25,m3:.2})[type]||.2,vm:type==='cmp'?.3:1.5,oc:false,name:'',kind:'d',net:'',lk:'',rc:type==='ctc'?100:120,on:false,run:0,ra:2,la:5,i0:.15,n0:3000,inom:1.5,load:0,pn:({led:8,cfl:11,mac:370,m3:1500})[type]||0,cosphi:({led:.6,cfl:.55,mac:.82,m3:.84})[type]||1,eta:({m3:.8})[type]||.7,r:5,mode:type==='pince'?'AC':'DC',lux:100,dist:100,blk:false,wave:'sin',duty:.5,dk:'d4148',lc:'rouge',amp:5,off:0,td:1e-3,v1:1,v2:1,cp1:'DC',cp2:'DC',on1:true,on2:true,trig:1,tla:true,tl:0,pos1:0,pos2:0,cur:{x1:2,x2:6,y1:2,y2:-2},cch:1,rng:type==='amp'?1:10,disp:type==='pince'?'A':'W',fn:'V',rev:false,il:10,val2:9,il2:10,fc:38000,amb:0,pos:type==='pot'?.5:0,code:type==='uno'?LaboArduino.EXAMPLES[0].code:'',closed:type==='sw'?false:undefined};if(SEMI[type])SEMI[type](c);comps.push(c);sel=c.id;selW=null;panel();render();return c}
function defCol(a,b){for(const k of[a,b]){const c=comps.find(c=>c.id==k.split(':')[0]),i=k.split(':')[1];if(c&&c.type==='ac')return i==='1'?COLS[0]:COLS[2];if(c&&c.type==='watt')return[COLS[2],COLS[0],COLS[1],COLS[0]][+i];if(c&&c.type==='bb')return[COLS[0],COLS[1],COLS[0],COLS[1]][+i];if(c&&c.type==='a3')return[COLS[2],COLS[4],COLS[3],COLS[0]][+i];if(c&&['bat','amp','volt','pince','gbf','scope','sv','sc'].includes(c.type))return(+i)%2?COLS[0]:COLS[1]}return COLS[2]}
function wire(a,b){wires.push({a,b,col:defCol(a,b)})}
const kindOf=k=>{const[id,i]=k.split(':'),c=comps.find(c=>c.id==id);return c?geo(c).t[+i][2]:0};
function connect(a,b){if(kindOf(a)==='b'&&kindOf(b)==='b'){const[ia,sa]=a.split(':'),[ib,sb]=b.split(':');if(ia===ib)return;const A=((+sa)>>1)*2,B=((+sb)>>1)*2,x=ia+':'+(A+1),y=ib+':'+(B+1);
 if(wires.some(w=>w.coax&&((w.a===x&&w.b===y)||(w.a===y&&w.b===x))))return;const p=pairId++;
 wires.push({a:x,b:y,col:'#37474f',coax:1,pair:p},{a:ia+':'+A,b:ib+':'+B,col:'#37474f',hide:1,pair:p})}else wire(a,b)}
function fmt(x,u){if(x===undefined||isNaN(x))return'–';const a=Math.abs(x);if(a<1e-9)return'0 '+u;for(const[f,s]of[[1e6,'M'],[1e3,'k'],[1,''],[1e-3,'m'],[1e-6,'µ']])if(a>=f*0.9995)return(+(x/f).toPrecision(3))+' '+s+u;return x.toExponential(1)+' '+u}
/* ---- Simulation (analyse nodale modifiée) ---- */
function mdcP(c){const w0=c.n0*Math.PI/30,k=Math.max(c.un-c.ra*c.i0,.01)/w0,b=.7*k*c.i0/w0,Tf=.3*k*c.i0,TL=c.load/100*k*Math.max(c.inom-c.i0,0),D=c.ra*b/k+k,U0=c.ra*(Tf+TL)/k;return{k,D,U0,TL,Tf,G:(1-k/D)/c.ra,Ic:(Tf+TL)/D}}
function cchY(c){return c.val<=0?0:c.cm==='tri'?c.val/(3*c.un*c.un):c.val/(c.un*c.un)}
function m3Y(c,w){const y=acMotorY(c,w,true),f=c.cpl==='D'?1:3;return[y[0]/f,y[1]/f]}
function acMotorY(c,w,tri){const Un=c.un,In=tri?c.pn/c.eta/(3*Un*c.cosphi):c.pn/c.eta/(Un*c.cosphi),I0=c.i0r*In,cl=v=>Math.min(1,Math.max(.05,v)),ph=Math.acos(cl(c.cosphi)),p0=Math.acos(cl(c.cos0)),
 Gn=In*Math.cos(ph)/Un,Bn=-In*Math.sin(ph)/Un,G0=I0*Math.cos(p0)/Un,B0=-I0*Math.sin(p0)/Un,x=c.ml,G=G0+x*(Gn-G0),B=B0+x*(Bn-B0);const f=c.kst===undefined?1:Math.pow(c.kst,3),Is=6*In,sp=Math.acos(.65),Gs=Is*.65/Un,Bs=-Is*Math.sin(sp)/Un,G1=Gs+(G-Gs)*f,B1=Bs+(B-Bs)*f;return w===0?[4*In/Un,0]:[G1,B1*2*Math.PI*50/w]}
const torque=m=>{if(m.type==='mdc')return m.run?mdcP(m).TL:0;if(!(m.rps>0))return 0;const mac=m.type==='mac',rN=m.rps*(mac?.95:.96)/(1-(mac?.05:.04)*m.ml),Uw=mac||m.cpl==='D'?m.Ur:m.Ur/Math.sqrt(3);return m.ml*m.pn/(2*Math.PI*rN)*Math.min(1.5,(Uw/m.un)**2)};
function macZ(c){const S=c.pn/c.eta/c.cosphi,Z=c.un*c.un/S,ph=Math.acos(Math.min(1,Math.max(.05,c.cosphi)));return{R:Z*Math.cos(ph),X:Z*Math.sin(ph)}}
let AC_=null,soundOn=true,VOL=.36;try{const v=localStorage.getItem('labosim_vol');if(v!==null)VOL=Math.pow(Math.min(1,Math.max(0,+v/100)),2)}catch(e){}
function dest(A){if(!A._m){const g=A.createGain();g.connect(A.destination);A._m=g}A._m.gain.value=soundOn?VOL:0;return A._m}
function clac(heavy){if(!soundOn)return;try{const A=AC_=AC_||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();
 const hit=(delay,g)=>{const n=Math.floor(A.sampleRate*.09),buf=A.createBuffer(1,n,A.sampleRate),d=buf.getChannelData(0),tau=A.sampleRate*(heavy?.016:.008);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/tau)+(i<A.sampleRate*.003?.8*Math.sin(i/6):0);
  const s=A.createBufferSource();s.buffer=buf;const f=A.createBiquadFilter();f.type='bandpass';f.frequency.value=heavy?700:1800;f.Q.value=.9;const gn=A.createGain();gn.gain.value=g;s.connect(f);f.connect(gn);gn.connect(dest(A));s.start(A.currentTime+delay)};
 hit(0,heavy?1:.7);hit(.045,heavy?.55:.4)}catch(e){}}
/* GBF : harmoniques [rang, a, b] (amplitude crête unitaire, v = Σ a·cos − b·sin) pour un rapport cyclique D
   carré : +1 pendant D·T centré sur t=0 ; triangle : montée pendant D·T, descente pendant (1−D)·T, sommet à t=0 si D=0,5 */
/* photorésistance (type GL5528) : 16 kΩ à 10 lx, ≈ 1 MΩ dans le noir, R ∝ E^-0,7 */
const ldrR=c=>Math.min(1e6,Math.max(80,16000*Math.pow(10/Math.max(c.lux,.05),.7)));
function gbfHarm(c){if(c.wave!=='sq'&&c.wave!=='tri')return[[1,1,0]];const D=Math.min(.95,Math.max(.05,c.duty)),r=[];
 if(c.wave==='sq'){for(let k=1;k<=39;k++){const a=4*Math.sin(Math.PI*k*D)/(Math.PI*k);if(Math.abs(a)>1e-9)r.push([k,a,0])}return r}
 for(let k=1;k<=24;k++){const th=2*Math.PI*k,q=-2/(D*(1-D)*th*th),sg=k%2?-1:1,re=2*q*(1-Math.cos(th*D))*sg,im=2*q*Math.sin(th*D)*sg;if(Math.hypot(re,im)>1e-7)r.push([k,re,im])}return r}
function gbfWave(c,t){const x=c.f*t,y=((x+.5)%1+1)%1,D=Math.min(.95,Math.max(.05,c.duty));
 const sh=c.wave==='sq'?(Math.abs(y-.5)<D/2?1:-1):c.wave==='tri'?(y<D?-1+2*y/D:1-2*(y-D)/(1-D)):Math.cos(2*Math.PI*x);return c.off+c.amp*sh}
/* ---- Transformateurs réalistes (mono / tri) : inductances couplées + Rfe, fuites, Pj ---- */
const CPL={Yy0:['Y','y',0],Yy6:['Y','y',1],Yd1:['Y','d',0],Yd11:['Y','d',1],Dy11:['D','y',0],Dy1:['D','y',1],Dd0:['D','d',0],Dd6:['D','d',1]};
function trP(c){const tri=c.type==='tr3',cp=tri?(CPL[c.cp]||CPL.Dy11):['Y','y',0],n=tri?3:1,Y1=tri&&cp[0]==='Y',Y2=tri&&cp[1]==='y',
 U1=Math.max(.1,+c.u1||230),U2=Math.max(.01,+c.u2||24),Sn=Math.max(1,+c.sn||100),f0=Math.max(1,+c.f||50),
 Vw1=Y1?U1/Math.sqrt(3):U1,Vw2=Y2?U2/Math.sqrt(3):U2,m=Vw2/Vw1,I1n=Sn/n/Vw1,Pj=Math.max(1e-4*Sn,+c.pj||0),Pf=Math.max(0,+c.pfe||0)/n,Q0=Math.max(0,+c.q0||0)/n,
 ur=Pj/Sn,uk=Math.max((+c.ucc||5)/100,ur*1.05),ux=Math.sqrt(uk*uk-ur*ur),w0=2*Math.PI*f0,R1=Pj/n/(2*I1n*I1n),Ll1=ux*Vw1/I1n/2/w0,Lm=Q0>0?Vw1*Vw1/Q0/w0:1e3,Rfe=Pf>0?Vw1*Vw1/Pf:1e12,W=[];
 for(let k=0;k<n;k++){const id=c.id+':';if(!tri)W.push({a1:id+0,b1:id+1,a2:id+2,b2:id+3});else{const a1=id+k,b1=Y1?id+3:id+((k+1)%3),a2=id+(4+k),b2=Y2?id+7:id+(4+(k+1)%3);W.push(cp[2]?{a1,b1,a2:b2,b2:a2}:{a1,b1,a2,b2})}}
 return{c,n,W,m,w0,R1,R2:R1*m*m,Ll1,Ll2:Ll1*m*m,Lm,L1:Lm+Ll1,L2:m*m*Lm+Ll1*m*m,M:m*Lm,Rfe,Sn,u2:U2,k1:Y1?Math.sqrt(3):1,j1:tri&&!Y1?Math.sqrt(3):1,k2:Y2?Math.sqrt(3):1,j2:tri&&!Y2?Math.sqrt(3):1}}
const cmul_=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]];
function trY(p,w){const z11=[p.R1,w*p.L1],z12=[0,w*p.M],z22=[p.R2,w*p.L2],d=cmul_(z11,z22),e=cmul_(z12,z12),dt=[d[0]-e[0],d[1]-e[1]],q=dt[0]*dt[0]+dt[1]*dt[1],inv=z=>{const r=cmul_(z,[dt[0],-dt[1]]);return[r[0]/q,r[1]/q]};return[inv(z22),inv([-z12[0],-z12[1]]),inv(z11)]}
function trFin(p,o){const sq=Math.sqrt,U1=sq(o.U1)*p.k1,U2=sq(o.U2)*p.k2,I1=sq(o.I1)*p.j1,I2=sq(o.I2)*p.j2,S2=o.Q2===undefined?Math.abs(o.P2):Math.hypot(o.P2,o.Q2);
 return{U1,U2,I1,I2,P1:o.P1,Q1:o.Q1,P2:o.P2,Q2:o.Q2,Pfe:o.Pfe,Pj:o.Pj,Qm:o.Qm,Qf:o.Qf,eta:o.P1>1e-6&&o.P2>0?Math.min(1,o.P2/o.P1):0,dU:p.u2>0?(p.u2-U2)/p.u2*100:0,ch:S2/p.Sn*100}}
function trStatsPh(c,X,ws,Vc){const p=trP(c),n=p.W.length,n2=z=>z[0]*z[0]+z[1]*z[1];let U1=0,U2=0,I1=0,I2=0,P1=0,Q1=0,P2=0,Q2=0,Pf=0,Pj=0,Qm=0,Qf=0;
 p.W.forEach(W=>X.forEach((_,q)=>{const w=ws[q],a=Vc(W.a1,q),b=Vc(W.b1,q),a2=Vc(W.a2,q),b2=Vc(W.b2,q),v1=[a[0]-b[0],a[1]-b[1]],v2=[a2[0]-b2[0],a2[1]-b2[1]],Y=trY(p,w),
  c1=cmul_(Y[0],v1),c2=cmul_(Y[1],v2),c3=cmul_(Y[1],v1),c4=cmul_(Y[2],v2),i1=[c1[0]+c2[0],c1[1]+c2[1]],i2=[c3[0]+c4[0],c3[1]+c4[1]],it=[i1[0]+v1[0]/p.Rfe,i1[1]+v1[1]/p.Rfe],im=[i1[0]+p.m*i2[0],i1[1]+p.m*i2[1]];
  U1+=n2(v1);U2+=n2(v2);I1+=n2(it);I2+=n2(i2);P1+=v1[0]*it[0]+v1[1]*it[1];Q1+=v1[1]*it[0]-v1[0]*it[1];P2-=v2[0]*i2[0]+v2[1]*i2[1];Q2-=v2[1]*i2[0]-v2[0]*i2[1];
  Pf+=n2(v1)/p.Rfe;Pj+=p.R1*n2([i1[0],i1[1]])+p.R2*n2(i2);Qm+=w*p.Lm*n2(im);Qf+=w*(p.Ll1*n2(i1)+p.Ll2*n2(i2))}));
 return trFin(p,{U1:U1/n,U2:U2/n,I1:I1/n,I2:I2/n,P1,Q1,P2,Q2,Pfe:Pf,Pj,Qm,Qf})}
function trStatsTr(p,L){const n=L.length,av=k=>L.reduce((t,s)=>t+s[k]/s.n,0)/n,Qm=n*p.w0*p.Lm*av('im'),Qf=n*p.w0*(p.Ll1*av('i1')+p.Ll2*av('i2'));
 return trFin(p,{U1:av('v1'),U2:av('v2'),I1:av('it'),I2:av('i2'),P1:n*av('p1'),Q1:Qm+Qf,P2:n*av('p2'),Q2:undefined,Pfe:n*av('v1')/p.Rfe,Pj:n*(p.R1*av('i1')+p.R2*av('i2')),Qm,Qf})}
const trTyp=c=>{const S=Math.max(1,+c.sn||100),r=100/S,rd=x=>+x.toPrecision(2);c.pfe=rd(S*.03*Math.pow(r,.25));c.q0=rd(S*.08*Math.pow(r,.2));c.pj=rd(S*.06*Math.pow(r,.2));c.ucc=rd(8*Math.pow(r,.15))};
/* ---- Thermique : four, enceinte chauffée, régulateurs TOR / PID (temps virtuel accéléré) ---- */
const TH={},thOf=c=>{let t=TH[c.id];if(!t||t.c!==c){const a=c.tamb===undefined?20:c.tamb;t=TH[c.id]={c,T1:a,T2:a,Ts:a,Tp:a,Td:a,q:[[0,a]],hist:[],dts:0,lh:-1e9,ig:0,ph:0,u:0,ts:0}}return t};
const isTherm=c=>c.type==='four'||c.type==='enc',isReg=c=>c.type==='rtor'||c.type==='rpid';
function thStep(c,t,h,P){const C1=.3*c.cth*1000,C2=.7*c.cth*1000,R12=.1*c.rth,R2=.9*c.rth,hs=Math.max(.05,Math.min(3,.3*C1*R12));let r=h;
 while(r>1e-9){const d=Math.min(hs,r),q=(t.T1-t.T2)/R12;t.T1+=d*(P-q)/C1;t.T2+=d*(q-(t.T2-c.tamb)/R2)/C2;r-=d}
 t.Ts+=(t.T1-t.Ts)*(1-Math.exp(-h/(c.type==='enc'?8:2)))}
function thermAdvance(hsim){const therm=comps.filter(isTherm),regs=comps.filter(isReg);if(!therm.length||err)return false;
 let hmax=3;regs.forEach(r=>{if(r.type==='rpid')hmax=Math.min(hmax,Math.max(.2,(r.tc||10)/10))});
 const n=Math.max(1,Math.min(tranMode?4:30,Math.ceil(hsim/hmax))),h=hsim/n;
 for(let i=0;i<n;i++){let ch=false;
  regs.forEach(r=>{const t=thOf(r),Tm=(+r.U||0)*1000/Math.max(.1,r.ks||10);t.Tm=Tm;t.ts=(t.ts||0)+h;
   if(r.type==='rtor'){const hy=Math.max(0,r.hy||0);let on=!!r.ron;if(Tm<r.cons-hy)on=true;else if(Tm>r.cons+hy)on=false;if(on!==!!r.ron){r.ron=on;ch=true}t.u=on?1:0}
   else{const e=r.cons-Tm,kp=r.kp||0,ti=Math.max(1,r.ti||1),tc=Math.max(1,r.tc||10);if(t.pm===undefined)t.pm=Tm;let D=0;
    if(r.de){const raw=-(Tm-t.pm)/h;t.df=t.df===undefined?raw:t.df+(raw-t.df)*h/(h+Math.max((r.tdv||0)/8,.1));D=(r.tdv||0)*t.df}t.pm=Tm;
    if(r.ie){t.ig+=e*h/ti;t.ig=Math.max(0,Math.min(100/Math.max(kp,1e-6),t.ig))}else t.ig=0;
    const u=Math.max(0,Math.min(100,kp*((r.pe?e:0)+(r.ie?t.ig:0)+(r.de?D:0))))/100;t.u=u;t.ph=(t.ph+h)%tc;
    const on=u>=1||(u>0&&t.ph<u*tc);if(on!==!!r.ron){r.ron=on;ch=true}}});
  therm.forEach(c=>{if(c.type!=='four')return;const t=thOf(c),hy=Math.max(0,c.hy||0);let on=!!c.hon;if(t.Td<c.cons-hy)on=true;else if(t.Td>c.cons+hy)on=false;if(on!==!!c.hon){c.hon=on;ch=true}});
  if(ch)solve();
  therm.forEach(c=>{const t=thOf(c),P=!err&&c.P>0?c.P:0;t.Pw=P;thStep(c,t,h,P);t.ts+=h;if(c.type==='four'||c.type==='enc'){t.Tp+=(t.T1-t.Tp)*(1-Math.exp(-h/Math.max(.5,c.tpr||25)));t.q.push([t.ts,t.Tp]);const lim=t.ts-(c.dly||0);while(t.q.length>1&&t.q[1][0]<=lim)t.q.shift();t.Td=t.q[0][1];if(c.type==='enc')t.Ts=t.Td}});
  if(regs.length)solve()}
 const hp=(t,v,f)=>{if(t.ts-t.lh<t.dts)return;t.lh=t.ts;t.hist.push([v,f,t.ts]);if(t.hist.length>700){t.hist=t.hist.filter((_,i)=>i%2===0);t.dts=Math.max(t.dts*2,hsim*2)}};
 therm.forEach(c=>{const t=thOf(c);c.Tq=Math.round(t.Ts*10)/10;hp(t,t.Td,c.type==='four'?(c.hon?1:0):(t.Pw>0?1:0))});
 regs.forEach(r=>{const t=thOf(r);hp(t,t.Tm||0,t.u||0)});return true}
let thLast=0;
function thermTick(){const now=performance.now(),dt=thLast?Math.min(.5,(now-thLast)/1000):.1;thLast=now;const th=comps.filter(isTherm);if(!th.length)return;
 if(thermAdvance(dt*Math.max(1,...th.map(c=>c.acc||60)))){render();thPanelRefresh();if(typeof ovId!=='undefined'&&ovId!=null)renderOv()}}
let thView=null,thAuto={x1:600,lo:0,hi:100};
function thPlot(c,W,H){const t=TH[c.id]&&TH[c.id].c===c?TH[c.id]:null,hs=t?t.hist:[],reg=isReg(c),sp=c.type==='four'||reg?c.cons:null,big=W>200;
 const noS=c.type!=='four'&&!reg,ml=big?40:3,mr=big?8:3,mt=big?8:3,mb=big?20:2,gap=noS?0:big?16:2,hl=noS?0:Math.round(H*(big?.2:.22)),hu=H-mt-mb-hl-gap,pw=W-ml-mr;
 let lo=Math.min(...hs.map(x=>x[0]),sp===null?1e9:sp,c.tamb===undefined?1e9:c.tamb),hi=Math.max(...hs.map(x=>x[0]),sp===null?-1e9:sp,(c.tamb===undefined?0:c.tamb)+10);if(!isFinite(lo)){lo=0;hi=100}
 const ys=[1,2,5,10,20,50,100,200],ysz=ys.find(v=>(hi-lo)/v<=(big?9:5))||200;lo=Math.floor(lo/ysz+1e-9)*ysz;hi=Math.ceil(hi/ysz-1e-9)*ysz;if(hi-lo<ysz)hi=lo+ysz;
 const last=hs.length?hs[hs.length-1][2]:0,xs=[10,30,60,120,300,600,900,1800,3600,7200,14400,28800,86400],xsz=xs.find(v=>Math.max(last,120)/v<=(big?8:4))||86400,xmax=Math.max(xsz,Math.ceil(Math.max(last,1)/xsz)*xsz);
 thAuto={hu,x1:xmax,lo,hi,lt:last,lv:hs.length?hs[hs.length-1][0]:(lo+hi)/2};let x0=0,xe=xmax,ysz2=ysz,xsz2=xsz;const V=big&&thView&&thView.id===c.id&&!thView.auto?thView:null;
 if(V){x0=V.x0;xe=V.x1;lo=V.y0;hi=V.y1;const YS=[.1,.2,.5,1,2,5,10,20,50,100,200,500],XS=[1,2,5,10,30,60,120,300,600,900,1800,3600,7200,14400,28800,86400];ysz2=YS.find(v=>(hi-lo)/v<=9)||500;xsz2=XS.find(v=>(xe-x0)/v<=8)||86400}
 const X=ts=>ml+(ts-x0)/(xe-x0)*pw,Y=v=>mt+hu-(v-lo)/(hi-lo)*hu,Yl=f=>mt+hu+gap+hl-f*hl,cid='thc'+(big?'b':'s');
 let g=`<rect width="${W}" height="${H}" fill="#0b1a12"/>`;
 for(let v=Math.ceil(lo/ysz2-1e-9)*ysz2;v<=hi+1e-9;v=+(v+ysz2).toFixed(6)){const y=Y(v).toFixed(1);g+=`<path d="M${ml} ${y}H${W-mr}" stroke="#2f5a43" stroke-width="${big?.9:.5}" stroke-dasharray="1.5 3"/>`;if(big)g+=`<text x="${ml-4}" y="${(+y+3.5).toFixed(1)}" font-size="10" text-anchor="end" fill="#9fb3a8">${+v.toFixed(2)}</text>`}
 for(let v=Math.ceil(x0/xsz2-1e-9)*xsz2;v<=xe+1e-9;v+=xsz2){const x=X(v).toFixed(1);g+=`<path d="M${x} ${mt}V${H-mb}" stroke="#2f5a43" stroke-width="${big?.9:.5}" stroke-dasharray="1.5 3"/>`;if(big)g+=`<text x="${x}" y="${H-6}" font-size="10" text-anchor="middle" fill="#9fb3a8">${xsz2<60?+v.toFixed(1)+' s':+(v/60).toFixed(2)}</text>`}
 g+=`<rect x="${ml}" y="${mt}" width="${pw}" height="${hu}" fill="none" stroke="#4a6a58" stroke-width="${big?1:.7}"/>${noS?'':`<rect x="${ml}" y="${mt+hu+gap}" width="${pw}" height="${hl}" fill="none" stroke="#4a6a58" stroke-width="${big?1:.7}"/>`}`;
 if(big)g+=`<text x="12" y="${mt+8}" font-size="10" fill="#9fb3a8" transform="rotate(-90 12 ${mt+hu/2})" text-anchor="middle">°C</text><text x="14" y="${H-6}" font-size="10" text-anchor="middle" fill="#9fb3a8">mn</text>${noS?'':`<text x="${ml-4}" y="${Yl(1)+9}" font-size="9" text-anchor="end" fill="#9fb3a8">100%</text><text x="${ml-4}" y="${Yl(0)}" font-size="9" text-anchor="end" fill="#9fb3a8">0</text><text x="${W-mr}" y="${mt+hu+gap-4}" font-size="9" text-anchor="end" fill="#7fa08c">${reg?'sortie du régulateur':'sortie du thermostat'}</text>`}`;
 g+=`<clipPath id="${cid}"><rect x="${ml}" y="0" width="${pw}" height="${H}"/></clipPath><g clip-path="url(#${cid})">`;
 if(sp!==null)g+=`<path d="M${ml} ${Y(sp).toFixed(1)}H${W-mr}" stroke="#ff9800" stroke-width="${big?1.1:.8}" stroke-dasharray="5 3"/>`;
 if(hs.length>1){const P=hs.map(x=>[X(x[2]),Y(x[0])]);let dc='M'+P[0][0].toFixed(1)+' '+P[0][1].toFixed(1);for(let i=0;i<P.length-1;i++){const a=P[Math.max(0,i-1)],b=P[i],c2=P[i+1],e=P[Math.min(P.length-1,i+2)];dc+=`C${(b[0]+(c2[0]-a[0])/6).toFixed(1)} ${(b[1]+(c2[1]-a[1])/6).toFixed(1)} ${(c2[0]-(e[0]-b[0])/6).toFixed(1)} ${(c2[1]-(e[1]-b[1])/6).toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}`}
  g+=`<path d="${dc}" stroke="#46e07a" stroke-width="${big?2:1.4}" fill="none" stroke-linejoin="round"/>`;
  if(!noS){let d='';hs.forEach((x,i)=>{const px=X(x[2]).toFixed(1);d+=(i?'L'+px+' '+Yl(hs[i-1][1]).toFixed(1):'M'+px+' '+Yl(x[1]).toFixed(1))+'L'+px+' '+Yl(x[1]).toFixed(1)});
  g+=`<path d="${d}" stroke="${reg?'#4fc3f7':'#ef5350'}" stroke-width="${big?1.5:1}" fill="none"/>`}}
 g+='</g>';return g}
const thTemp=c=>{const t=TH[c.id]&&TH[c.id].c===c?TH[c.id]:null;return t?t.Td:(c.tamb===undefined?20:c.tamb)};
function thPanelRefresh(){const c=comps.find(x=>x.id===sel);if(!c||!(isTherm(c)||isReg(c)))return;const x=document.getElementById('thx');if(x)x.innerHTML=thInfo(c)}
function thInfo(c){const t=TH[c.id]&&TH[c.id].c===c?TH[c.id]:null;
 if(isReg(c)){const Tm=t&&t.Tm!==undefined?t.Tm:0;return`Mesure <b>${Tm.toFixed(1)} °C</b> · consigne <b>${(+c.cons).toFixed(1)} °C</b> · sortie <b>${c.type==='rtor'?(c.ron?'ON':'OFF'):Math.round((t?t.u:0)*100)+' %'}</b>${c.type==='rpid'?' (contact '+(c.ron?'fermé':'ouvert')+')':''}`}
 return`Température <b>${thTemp(c).toFixed(1)} °C</b>${c.type==='four'?' · consigne <b>'+(+c.cons).toFixed(0)+' °C</b> · chauffage <b>'+(c.hon?'ON':'OFF')+'</b>':''} · puissance <b>${fmt(c.P,'W')}</b> · durée simulée <b>${t?(t.ts>=3600?(t.ts/3600).toFixed(2)+' h':Math.round(t.ts/60)+' min'):'0 min'}</b>`}
const thCol=T=>{const f=Math.max(0,Math.min(1,(T-20)/280));return`rgb(${Math.round(120+135*f)},${Math.round(150-60*f)},${Math.round(170-140*f)})`};
/* ===== API (automate programmable) : base + modules TOR / ANALOG — essai ===== */
const PLC_PRG='Q1 = I1 & !I2          // marche directe\nM1 = (I3 | M1) & !I4   // auto-maintien\nQ2 = M1\nQ3 = TON(I5, 3)        // temporisation 3 s\nQ4 = RISE(I6) | M1 & I7';
const isPlc=c=>c.type==='plc'||c.type==='plct'||c.type==='plca';
function plcCompile(src){const lines=String(src||'').split('\n'),prog=[];let nf=0;
 for(let ln=0;ln<lines.length;ln++){let t=lines[ln].replace(/(\/\/|;).*$/,'').trim();if(!t)continue;
  const m=t.match(/^([A-Za-z]+)(\d+)\s*=\s*(.+)$/);if(!m)throw new Error('ligne '+(ln+1)+' : écris « Q1 = expression »');
  const dst=m[1].toUpperCase(),idx=+m[2];if(!['Q','M','AO','T'].includes(dst)||idx<1)throw new Error('ligne '+(ln+1)+' : sortie « '+m[1]+m[2]+' » inconnue (Q, M, T ou AO)');
  const tk=m[3].match(/\d+\.?\d*(?:[eE][+-]?\d+)?|\.\d+|[A-Za-z_][A-Za-z0-9_]*|<=|>=|==|!=|[-+*\/()&|^!<>,]|\S/g);let p=0;
  const peek=()=>tk[p],next=()=>tk[p++],fail=s=>{throw new Error('ligne '+(ln+1)+' : '+s)};
  const prim=()=>{const x=next();if(x===undefined)fail('expression incomplète');
   if(/^[\d.]/.test(x)){const v=parseFloat(x);return()=>v}
   if(x==='('){const e=or();if(next()!==')')fail('parenthèse « ) » manquante');return e}
   if(x==='!'){const e=prim();return s=>e(s)?0:1}
   if(x==='-'){const e=prim();return s=>-e(s)}
   if(/^[A-Za-z_]/.test(x)){const U=x.toUpperCase();
    if(peek()==='('){next();const a=[];if(peek()!==')'){do{a.push(or())}while(peek()===','&&next())}if(next()!==')')fail('parenthèse « ) » manquante après '+U);
     const id=nf++;
     if(U==='TON'||U==='TOF'){if(a.length!==2)fail(U+'(entrée, secondes)');return s=>{const st=s.T[id]||(s.T[id]={t:U==='TOF'?Infinity:0}),x=a[0](s)?1:0,pt=Math.max(0,a[1](s));
       if(U==='TON'){st.t=x?st.t+s.dt:0;return x&&st.t>=pt?1:0}st.t=x?0:st.t+s.dt;return x||st.t<pt?1:0}}
     if(U==='RISE'||U==='FALL'){if(a.length!==1)fail(U+'(entrée)');return s=>{const st=s.T[id]||(s.T[id]={p:0}),x=a[0](s)?1:0,r=U==='RISE'?(x&&!st.p):(!x&&st.p);st.p=x;return r?1:0}}
     if(U==='MIN'||U==='MAX'){if(a.length<2)fail(U+'(a, b…)');return s=>Math[U==='MIN'?'min':'max'](...a.map(f=>f(s)))}
     if(U==='ABS'){if(a.length!==1)fail('ABS(x)');return s=>Math.abs(a[0](s))}
     fail('fonction « '+U+' » inconnue (TON, TOF, RISE, FALL, MIN, MAX, ABS)')}
    const r=U.match(/^(I|Q|M|T|AI|AO)(\d+)$/);if(!r)fail('« '+x+' » inconnu');const k=+r[2]-1,kind=r[1];
    return s=>kind==='I'?(s.I[k]?1:0):kind==='AI'?(s.AI[k]||0):kind==='Q'?(s.Q[k]?1:0):kind==='M'?(s.M[k]?1:0):kind==='T'?(s.Tv[k]?1:0):(s.AO[k]||0)}
   fail('« '+x+' » inattendu')},
   mul=()=>{let a=prim();while(peek()==='*'||peek()==='/'){const o=next(),b=prim(),l=a;a=o==='*'?s=>l(s)*b(s):s=>{const d=b(s);return d?l(s)/d:0}}return a},
   add=()=>{let a=mul();while(peek()==='+'||peek()==='-'){const o=next(),b=mul(),l=a;a=o==='+'?s=>l(s)+b(s):s=>l(s)-b(s)}return a},
   cmp=()=>{let a=add();while(['<','>','<=','>=','==','!='].includes(peek())){const o=next(),b=add(),l=a;a=s=>{const x=l(s),y=b(s);return(o==='<'?x<y:o==='>'?x>y:o==='<='?x<=y:o==='>='?x>=y:o==='=='?x===y:x!==y)?1:0}}return a},
   and=()=>{let a=cmp();while(peek()==='&'){next();const b=cmp(),l=a;a=s=>l(s)&&b(s)?1:0}return a},
   xor=()=>{let a=and();while(peek()==='^'){next();const b=and(),l=a;a=s=>(l(s)?1:0)^(b(s)?1:0)}return a},
   or=()=>{let a=xor();while(peek()==='|'){next();const b=xor(),l=a;a=s=>l(s)||b(s)?1:0}return a};
  const e=or();if(p<tk.length)fail('« '+tk[p]+' » inattendu');prog.push({dst,idx:idx-1,e})}
 return prog}
/* ---- API : éditeur ladder (grille d'échelons) → programme texte ---- */
const LADV=(b)=>{const n=b&&b.plN||{I:8,Q:4,AI:0,AO:0},o=[];for(let k=1;k<=n.I;k++)o.push('I'+k);for(let k=1;k<=n.Q;k++)o.push('Q'+k);for(let k=1;k<=16;k++)o.push('M'+k);for(let k=1;k<=8;k++)o.push('T'+k);for(let k=1;k<=n.AI;k++)o.push('AI'+k);return o};
const ladNew=()=>({cols:Array.from({length:6},()=>[null,null,null]),coil:{k:'Q',n:1,t:1}});
function ladCellX(c){if(!c)return null;const v=c.v||'I1';return c.k==='NC'?'!'+v:c.k==='RE'?'RISE('+v+')':c.k==='FE'?'FALL('+v+')':c.k==='CMP'?'('+v+' '+(c.op||'>')+' '+(+c.x||0)+')':v}
function ladColX(col){const p=col.map(ladCellX).filter(Boolean);return p.length?(p.length>1?'('+p.join(' | ')+')':p[0]):null}
function ladToText(lad){const L=[];(lad||[]).forEach((r,i)=>{const ps=r.cols.map(ladColX).filter(Boolean),ex=ps.length?ps.join(' & '):'1',k=r.coil.k,n=+r.coil.n||1,t=+r.coil.t||0;
 L.push('// Échelon '+(i+1));
 L.push(k==='Q'?'Q'+n+' = '+ex:k==='M'?'M'+n+' = '+ex:k==='S'?'Q'+n+' = ('+ex+') | Q'+n:k==='R'?'Q'+n+' = Q'+n+' & !('+ex+')':k==='TON'?'T'+n+' = TON('+ex+', '+t+')':'T'+n+' = TOF('+ex+', '+t+')')});return L.join('\n')}
function ladTruth(b,c){if(!c||!b||!b.plS)return false;const S=b.plS,m=(c.v||'I1').match(/^(I|Q|M|T|AI)(\d+)$/);if(!m)return false;const k=+m[2]-1;
 const v=m[1]==='I'?(b.plI||[])[k]:m[1]==='Q'?S.Q[k]:m[1]==='M'?S.M[k]:m[1]==='T'?S.Tv[k]:(b.plAIv||[])[k];
 if(c.k==='CMP'){const x=+c.x||0,o=c.op||'>',a=+v||0;return o==='<'?a<x:o==='>'?a>x:o==='<='?a<=x:o==='>='?a>=x:o==='=='?a===x:a!==x}
 return c.k==='NC'?!v:!!v}
const ladRung=(b,r)=>{let all=true;const colT=r.cols.map(col=>{const ce=col.filter(Boolean);if(!ce.length)return null;return ce.some(c=>ladTruth(b,c))});colT.forEach(t=>{if(t===false)all=false});return{colT,on:all}};
let ladId=null,ladSel=null,ladZ=1;
function ladModal(){let m=document.getElementById('ladm');if(m)return m;m=document.createElement('div');m.id='ladm';m.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:60;display:none;align-items:center;justify-content:center;padding:10px';
 m.innerHTML='<div style="background:var(--bg,#fff);color:var(--ink,#222);border-radius:12px;max-width:900px;width:100%;max-height:96vh;overflow:auto;padding:12px 14px;box-shadow:0 8px 40px #0006"><div style="display:flex;gap:8px;align-items:center;margin-bottom:6px"><b id="ladt" style="flex:1">Éditeur ladder</b><button id="ladzm" title="Zoom −">−</button><span id="ladzp" style="min-width:42px;text-align:center">100 %</span><button id="ladzpl" title="Zoom +">+</button><button id="ladadd">+ Échelon</button><button id="ladx">Fermer</button></div><div id="ladsvg"></div><div id="ladf" style="margin-top:8px"></div><pre id="ladp" style="background:#0b1a12;color:#9fe5b4;padding:8px;border-radius:6px;font-size:11px;max-height:130px;overflow:auto;margin:8px 0 0"></pre></div>';
 document.body.appendChild(m);m.onclick=e=>{if(e.target===m)ladClose()};m.querySelector('#ladx').onclick=ladClose;const zz=d=>{ladZ=Math.min(3,Math.max(.5,Math.round((ladZ+d)*10)/10));m._sig=null;ladDraw()};m.querySelector('#ladzm').onclick=()=>zz(-.2);m.querySelector('#ladzpl').onclick=()=>zz(.2);m.querySelector('#ladadd').onclick=()=>{const b=ladBase();if(!b||b.lad.length>=16)return;b.lad.push(ladNew());ladApply(b)};return m}
const ladBase=()=>comps.find(c=>c.id===ladId&&c.type==='plc')||null;
function ladClose(){const m=document.getElementById('ladm');if(m)m.style.display='none';ladId=null;ladSel=null;if(typeof panel==='function')panel()}
function ladApply(b){const mm=document.getElementById('ladm');if(mm)mm._sig=null;b.prg=ladToText(b.lad);b.plS=null;plcScan(b,.05);render();ladDraw()}
function openLad(b){if(!b.lad||!b.lad.length)b.lad=[ladNew()];b.lang='ladder';ladId=b.id;ladSel={r:0,col:0,row:0};const m=ladModal();m.style.display='flex';ladApply(b)}
function ladDraw(){const b=ladBase(),m=document.getElementById('ladm');if(!b||!m)return;const W=800,CW=96,RH=54,X0=44,hh=3*RH+30;let g='';
 b.lad.forEach((r,ri)=>{const y0=ri*(hh+14),T=ladRung(b,r),on=T.on,gc=a=>a?'#2e7d32':'#8a929c';
  g+=`<g transform="translate(0 ${y0})"><rect x="0" y="0" width="${W}" height="${hh}" rx="8" fill="${ladSel&&ladSel.r===ri&&ladSel.coil?'#fff8e1':'#f6f8fa'}" stroke="#d0d7de"/><text x="8" y="14" font-size="11" fill="#57606a">Échelon ${ri+1}</text><path d="M${X0-20} 24V${hh-8}M${W-26} 24V${hh-8}" stroke="#37474f" stroke-width="3"/>`;
  r.cols.forEach((col,ci)=>{const x=X0+ci*CW,cx=x+CW/2,ne=col.map((c,k)=>c?k:-1).filter(k=>k>=0),mx=ne.length?Math.max(...ne):-1,ct=T.colT[ci],lit=ct!==false;
   if(!ne.length){g+=`<path d="M${x} ${24+RH/2}H${x+CW}" stroke="${gc(true)}" stroke-width="2"/>`}
   else{const top=24+RH/2,bot=24+mx*RH+RH/2;g+=`<path d="M${x} ${top}V${bot}M${x+CW} ${top}V${bot}" stroke="${gc(lit)}" stroke-width="2"/>`;}
   col.forEach((c,k)=>{const y=24+k*RH,sel=ladSel&&ladSel.r===ri&&!ladSel.coil&&ladSel.col===ci&&ladSel.row===k,cy=y+RH/2,t=c&&ladTruth(b,c);
    g+=`<g data-lc="${ri},${ci},${k}" style="cursor:pointer"><rect x="${x+4}" y="${y+4}" width="${CW-8}" height="${RH-8}" rx="6" fill="${sel?'#e3f2fd':'transparent'}" stroke="${sel?'#1976d2':c?'transparent':'#c9d1d9'}" stroke-dasharray="${c?'':'3 3'}"/>`;
    if(!c)g+=`<text x="${cx}" y="${cy+4}" font-size="14" fill="#b0b8c0" text-anchor="middle">+</text>`;
    else{const col2=gc(t&&!0);g+=`<path d="M${x} ${cy}H${cx-9}M${cx+9} ${cy}H${x+CW}" stroke="${gc(t)}" stroke-width="2"/><path d="M${cx-9} ${cy-12}V${cy+12}M${cx+9} ${cy-12}V${cy+12}" stroke="${t?'#2e7d32':'#37474f'}" stroke-width="3"/>${c.k==='NC'?`<path d="M${cx-14} ${cy+13}L${cx+14} ${cy-13}" stroke="#c62828" stroke-width="2"/>`:''}${c.k==='RE'?`<text x="${cx}" y="${cy+4}" font-size="11" fill="#1976d2" text-anchor="middle">↑</text>`:c.k==='FE'?`<text x="${cx}" y="${cy+4}" font-size="11" fill="#1976d2" text-anchor="middle">↓</text>`:''}<text x="${cx}" y="${cy-16}" font-size="11" font-weight="700" fill="#24292f" text-anchor="middle">${c.k==='CMP'?esc_(c.v+' '+c.op+' '+c.x):esc_(c.v||'I1')}</text>`}
    g+='</g>'})});
  const cx0=X0+6*CW,cl=r.coil,sel=ladSel&&ladSel.r===ri&&ladSel.coil,lab=cl.k==='TON'||cl.k==='TOF'?cl.k+' T'+cl.n+' · '+cl.t+' s':(cl.k==='S'?'S ':cl.k==='R'?'R ':'')+(cl.k==='M'?'M':'Q')+cl.n;
  g+=`<g data-lk="${ri}" style="cursor:pointer"><path d="M${cx0} ${24+RH/2}H${cx0+30}M${cx0+60} ${24+RH/2}H${W-26}" stroke="${gc(on)}" stroke-width="2"/><circle cx="${cx0+45}" cy="${24+RH/2}" r="15" fill="${on?'#ffe082':'#fff'}" stroke="${sel?'#1976d2':'#37474f'}" stroke-width="${sel?3:2}"/><text x="${cx0+45}" y="${24+RH/2+4}" font-size="11" font-weight="700" text-anchor="middle" fill="#24292f">${cl.k==='S'?'S':cl.k==='R'?'R':cl.k==='TON'||cl.k==='TOF'?'T':''}</text><text x="${cx0+45}" y="${24+RH/2-22}" font-size="11" font-weight="700" fill="#24292f" text-anchor="middle">${esc_(lab)}</text></g></g>`});
 const H=b.lad.length*(hh+14);const sv=m.querySelector('#ladsvg');const sig=ladZ+'|'+H+g+(b.prg||'');m.querySelector('#ladzp').textContent=Math.round(ladZ*100)+' %';if(m._sig===sig)return;m._sig=sig;sv.innerHTML=`<div style="overflow:auto;max-height:62vh"><svg viewBox="0 0 ${W} ${H}" style="display:block;width:${ladZ*100}%;min-width:${ladZ*100}%">${g}</svg></div>`;
 m.querySelector('#ladt').textContent='Éditeur ladder — automate n° '+b.id+(b.plOn?'':' (hors tension)');m.querySelector('#ladp').textContent=b.prg||'';
 sv.querySelectorAll('[data-lc]').forEach(e=>e.onclick=()=>{const[r,c,k]=e.dataset.lc.split(',').map(Number);ladSel={r,col:c,row:k};ladDraw();ladForm()});
 sv.querySelectorAll('[data-lk]').forEach(e=>e.onclick=()=>{ladSel={r:+e.dataset.lk,coil:true};ladDraw();ladForm()});
 if(!m.dataset.f){m.dataset.f=1;ladForm()}}
function ladForm(){const b=ladBase(),f=document.getElementById('ladf');if(!b||!f||!ladSel||!b.lad[ladSel.r]){if(f)f.innerHTML='';return}const r=b.lad[ladSel.r],V=LADV(b),sl=(id,o,v)=>`<select id="${id}">${o.map(([a,l])=>`<option value="${a}"${String(a)===String(v)?' selected':''}>${l}</option>`).join('')}</select>`;
 let h=`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">`;
 if(ladSel.coil){const c=r.coil;h+=`<b>Bobine de l’échelon ${ladSel.r+1}</b>${sl('lk',[['Q','Q (sortie)'],['M','M (mémoire)'],['S','S : enclenche Q'],['R','R : déclenche Q'],['TON','Tempo montée TON'],['TOF','Tempo retombée TOF']],c.k)}<label>n° <input id="ln" type="number" min="1" max="${c.k==='M'?16:c.k==='TON'||c.k==='TOF'?8:(b.plN||{Q:4}).Q}" value="${c.n}" style="width:60px"></label>${c.k==='TON'||c.k==='TOF'?`<label>durée (s) <input id="lt" type="number" min="0" step="0.1" value="${c.t}" style="width:70px"></label>`:''}`}
 else{const c=r.cols[ladSel.col][ladSel.row];h+=`<b>Contact (échelon ${ladSel.r+1}, colonne ${ladSel.col+1}, ligne ${ladSel.row+1})</b>${sl('lc',[['','— vide —'],['NO','Contact NO'],['NC','Contact NC'],['RE','Front montant'],['FE','Front descendant'],['CMP','Comparaison']],c?c.k:'')}${c?sl('lv',V.map(x=>[x,x]),c.v):''}${c&&c.k==='CMP'?sl('lo',['<','>','<=','>=','==','!='].map(x=>[x,x]),c.op)+`<input id="lx" type="number" step="any" value="${c.x}" style="width:80px">`:''}`}
 h+=`<span style="flex:1"></span><button id="lup">↑</button><button id="ldn">↓</button><button id="ldel">Supprimer l’échelon</button></div><div class="mut" style="margin-top:4px">Une colonne : jusqu’à 3 contacts en parallèle (OU) ; les colonnes se suivent en série (ET). Les contacts passent au vert quand ils conduisent.</div>`;f.innerHTML=h;
 const $=id=>f.querySelector('#'+id),up=()=>ladApply(b);
 if(ladSel.coil){const c=r.coil;$('lk').onchange=e=>{c.k=e.target.value;if(c.k==='TON'||c.k==='TOF'){c.n=Math.min(c.n,8);c.t=c.t||1}up();ladForm()};$('ln').onchange=e=>{c.n=Math.max(1,+e.target.value||1);up()};if($('lt'))$('lt').onchange=e=>{c.t=Math.max(0,+e.target.value||0);up()}}
 else{const col=r.cols[ladSel.col];$('lc').onchange=e=>{const k=e.target.value;if(!k)col[ladSel.row]=null;else col[ladSel.row]=Object.assign(col[ladSel.row]||{v:'I1',op:'>',x:5},{k});up();ladForm()};if($('lv'))$('lv').onchange=e=>{col[ladSel.row].v=e.target.value;up()};if($('lo'))$('lo').onchange=e=>{col[ladSel.row].op=e.target.value;up()};if($('lx'))$('lx').onchange=e=>{col[ladSel.row].x=+e.target.value||0;up()}}
 $('lup').onclick=()=>{const i=ladSel.r;if(i>0){[b.lad[i-1],b.lad[i]]=[b.lad[i],b.lad[i-1]];ladSel.r--;up();ladForm()}};$('ldn').onclick=()=>{const i=ladSel.r;if(i<b.lad.length-1){[b.lad[i+1],b.lad[i]]=[b.lad[i],b.lad[i+1]];ladSel.r++;up();ladForm()}};
 $('ldel').onclick=()=>{if(b.lad.length>1){b.lad.splice(ladSel.r,1);ladSel={r:Math.max(0,ladSel.r-1),col:0,row:0}}else b.lad=[ladNew()];up();ladForm()}}
/* association des modules à la base la plus proche (≤ 420 px), numérotation des adresses E/S */
function plcMap(){const bases=comps.filter(c=>c.type==='plc');bases.forEach(b=>{b.plN={I:8,Q:4,AI:0,AO:0};b.plM=[]});
 const mods=comps.filter(c=>c.type==='plct'||c.type==='plca').sort((a,b)=>a.x-b.x||a.id-b.id);
 mods.forEach(m=>{let best=null,bd=420;bases.forEach(b=>{const d=Math.hypot(b.x-m.x,b.y-m.y);if(d<bd){bd=d;best=b}});m.plB=best?best.id:null;
  if(best){best.plM.push(m);if(m.type==='plct'){m.plI0=best.plN.I;m.plQ0=best.plN.Q;best.plN.I+=6;best.plN.Q+=4}else{m.plA0=best.plN.AI;m.plO0=best.plN.AO;best.plN.AI+=2;best.plN.AO+=2}}})}
const plcBase=m=>comps.find(c=>c.id===m.plB&&c.type==='plc')||null;
function plcScan(b,dt){if(b.type!=='plc')return false;plcMap();
 const mods=b.plM||[],nI=b.plN.I,nQ=b.plN.Q,nA=b.plN.AI,nO=b.plN.AO,pon=!!b.plOn,was=JSON.stringify([b.plQ,mods.map(m=>[m.plQ,m.plAO]),b.plPP]);
 if(b.plP!==b.prg||b.plC===undefined){b.plP=b.prg;b.plS=null;try{b.plC=plcCompile(b.prg);b.plE=''}catch(e){b.plC=[];b.plE=e.message}}
 const run=pon&&b.run!==false&&!b.plE;
 if(!run){b.plS=null;b.plQ=[0,0,0,0];mods.forEach(m=>{m.plQ=[0,0,0,0];m.plAO=[0,0]})}
 else{const I=Array(nI).fill(0),AI=Array(nA).fill(0);
  (b.plV||[]).forEach((v,k)=>{I[k]=v})  ;mods.forEach(m=>{if(m.type==='plct')(m.plV||[]).forEach((v,k)=>{I[m.plI0+k]=v});else(m.plA||[]).forEach((v,k)=>{AI[m.plA0+k]=v})});
  const S=b.plS||(b.plS={Q:Array(nQ).fill(0),M:Array(64).fill(0),Tv:Array(64).fill(0),AO:Array(nO).fill(0),T:{}});S.I=I;S.AI=AI;S.dt=dt;
  for(const st of b.plC){const v=st.e(S);if(st.dst==='Q'){if(st.idx<nQ)S.Q[st.idx]=v?1:0}else if(st.dst==='M')S.M[st.idx]=v?1:0;else if(st.dst==='T')S.Tv[st.idx]=v?1:0;else if(st.idx<nO)S.AO[st.idx]=Math.max(0,Math.min(10,v))}
  b.plQ=S.Q.slice(0,4);mods.forEach(m=>{if(m.type==='plct')m.plQ=S.Q.slice(m.plQ0,m.plQ0+4);else m.plAO=S.AO.slice(m.plO0,m.plO0+2)});
  mods.forEach(m=>{if(m.type==='plct'&&!m.plQ)m.plQ=[0,0,0,0]});b.plI=I.slice();b.plAIv=AI.slice()}
 b.plPP=pon;return was!==JSON.stringify([b.plQ,mods.map(m=>[m.plQ,m.plAO]),b.plPP])}
let plLast=0;function plcTick(){if(!comps.some(c=>c.type==='plc'))return;const now=performance.now(),dt=plLast?Math.min(.5,(now-plLast)/1000):.05;plLast=now;let ch=false;comps.forEach(c=>{if(c.type==='plc'&&plcScan(c,dt))ch=true});if(ch)render();if(ladId!==null)ladDraw()}
if(typeof setInterval==='function')setInterval(plcTick,50);

function solveOnce(){
 plcMap();err='';comps.forEach(c=>{c.shunt=false;c.U=c.I=c.P=c.Q=c.Ur=c.Ir=c.Ua=c.Ia=undefined;c.sig=null;c.cl=null});if(!comps.length)return;
 const par={};const f=k=>{if(par[k]===undefined)par[k]=k;return par[k]===k?k:(par[k]=f(par[k]))};
 comps.forEach(c=>{if(c.type!=='bread')geo(c).t.forEach((_,i)=>f(c.id+':'+i))});wires.forEach(x=>{f(x.a);f(x.b)});bridges().forEach(([a,b])=>{par[f(a)]=f(b)});
 comps.forEach(c=>{if(c.type==='bb')bbP(c).els.forEach(e=>bbNodes(e).forEach(n=>{if(n)f(bbKey(c,n))}))});
 comps.forEach(c=>{if(c.type==='scope')par[f(c.id+':0')]=f(c.id+':2');if(c.type==='watt')par[f(c.id+':1')]=f(c.id+':3');if(c.type==='dmm')par[f(c.id+':3')]=f(c.id+':2');if(c.type==='amp'&&c.ana)par[f(c.id+':2')]=f(c.id+':1')});  /* masses reliées (oscilloscope, wattmètre) */
 const wp={},wf=k=>{if(wp[k]===undefined)wp[k]=k;return wp[k]===k?k:(wp[k]=wf(wp[k]))};wires.forEach(x=>{wp[wf(x.a)]=wf(x.b)});bridges().forEach(([a,b])=>{wp[wf(a)]=wf(b)});comps.forEach(c=>{if(c.type==='dmm')wp[wf(c.id+':3')]=wf(c.id+':2');if(c.type==='amp'&&c.ana)wp[wf(c.id+':2')]=wf(c.id+':1')});
 const isS=c=>c.type==='bat'||c.type==='bat2'||c.type==='ac'||c.type==='gbf'||c.type==='a3',b0=comps.find(isS),g=f(b0?b0.id+':0':bbGnd()||comps[0].id+':0');
 const map={};let m=0;Object.keys(par).forEach(k=>{const r=f(k);if(r!==g&&map[r]===undefined)map[r]=m++});
 const ix=k=>{const r=f(k);return r===g?-1:map[r]};
 /* colonne 0 = continu ; colonnes q>0 = phaseurs efficaces (réf. cosinus) à chaque fréquence/harmonique ; sources de même fréquence supposées en phase */
 const F=[];const col=fq=>{fq=+fq.toPrecision(9);let i=F.indexOf(fq);if(i<0){F.push(fq);i=F.length-1}return i+1};
 const gh=gbfHarm;
 const src=[];comps.forEach(c=>{if(c.type==='a3'){const Vp=c.val/Math.sqrt(3),fq=col(c.f);[[1,0],[2,-120],[3,120]].forEach(([k,d])=>{const ev={};if(Vp>0)ev[fq]=[Vp*Math.cos(d*Math.PI/180),Vp*Math.sin(d*Math.PI/180)];src.push({c,p:c.id+':'+k,n:c.id+':0',ev})})}
  else if(isS(c)){const ev={};
   if(c.type==='bat'||c.type==='bat2')ev[0]=c.val;else if(c.type==='ac'){if(c.val>0)ev[col(c.f)]=c.val}
   else{ev[0]=c.off+(c.wave==='sq'?c.amp*(2*c.duty-1):0);if(c.amp>0)gh(c).forEach(([k,a,b])=>{const q=col(c.f*k);ev[q]=[c.amp*a/Math.SQRT2,c.amp*b/Math.SQRT2]})}
   src.push({c,p:c.id+':1',n:c.id+':0',ev,ch:1,lim:c.type==='bat'||c.type==='bat2'?(c.il>0?c.il:10):0});if(c.type==='bat2')src.push({c,p:c.id+':3',n:c.id+':2',ev:{0:c.val2},ch:2,lim:c.il2>0?c.il2:10})}
  else if(c.type==='enc')src.push({c,p:c.id+':2',n:c.id+':3',ev:{0:.01*thOf(c).Ts}});
  else if(c.type==='smps'){if(c.smon)src.push({c,p:c.id+':2',n:c.id+':3',ev:{0:c.val},ch:1,lim:Math.max(.05,c.pmax/Math.max(c.val,.1))})}
  else if(c.type==='amp'&&!fuseBlown(c)){c.shunt=wf(c.id+':0')===wf(c.id+':1');if(!c.shunt)src.push({c,p:c.id+':0',n:c.id+':1',ev:{}})}
  else if(c.type==='sw'&&c.closed)src.push({c,p:c.id+':0',n:c.id+':1',ev:{}});
  else if(c.type==='ohm')src.push({c,p:c.id+':1',n:c.id+':0',ev:{0:1},ohm:true});
  else if(c.type==='dmm'){if(c.fn==='I'){if(!fuseBlown(c)){c.shunt=wf(c.id+':0')===wf(c.id+':2');if(!c.shunt)src.push({c,p:c.id+':0',n:c.id+':2',ev:{}})}}else if(c.fn==='R')src.push({c,p:c.id+':1',n:c.id+':0',ev:{0:1},ohm:true})}
  else if(c.type==='watt'&&!fuseBlown(c))src.push({c,p:c.id+':2',n:c.id+':0',ev:{}});
  else if(c.type==='cem'){c.shunt=wf(c.id+':0')===wf(c.id+':1');if(!c.shunt)src.push({c,p:c.id+':0',n:c.id+':1',ev:{}})}
  else if(c.type==='cet'){c.sh3=[0,1,2].map(j=>wf(c.id+':'+2*j)===wf(c.id+':'+(2*j+1)));[0,1,2].forEach(j=>{if(!c.sh3[j])src.push({c,p:c.id+':'+2*j,n:c.id+':'+(2*j+1),ev:{},ph:j})})}
  else if(c.type==='plca'){const B=plcBase(c),on=B&&B.plOn,ao=c.plAO||[0,0];[0,1].forEach(k=>src.push({c,p:c.id+':'+(3+k),n:c.id+':5',ev:{0:on?ao[k]:0},plao:1}))}
  else if(c.type==='sv')src.push({c,p:c.id+':1',n:c.id+':0',ev:{},ctl:[[c.id+':3',1/c.ratio],[c.id+':2',-1/c.ratio]]});
  else if(c.type==='sc'){const cl=clampOf(c);c.cl=cl;const sg=(c.rev?-1:1)/(c.ratio*0.005),ctl=[];if(cl)wires.forEach(x=>{if(x===cl.w||(cl.w.pair&&x.pair===cl.w.pair)){ctl.push([x.a,sg],[x.b,-sg])}});src.push({c,p:c.id+':1',n:c.id+':0',ev:{},ctl})}
  else if(c.type==='bb'){bbP(c).els.forEach(e=>{if(e.t==='E')src.push({c,p:bbKey(c,e.a),n:bbKey(c,e.b),ev:{},ctl:[[bbKey(c,e.c),e.v],[bbKey(c,e.d),-e.v]]});else if(e.t==='V'){const ev={};if(e.ac){if(e.v>0)ev[col(e.fq)]=e.ph?[e.v*Math.cos(e.ph*Math.PI/180),e.v*Math.sin(e.ph*Math.PI/180)]:e.v}else ev[0]=e.v;src.push({c,p:bbKey(c,e.a),n:bbKey(c,e.b),ev,bbv:1})}else if(e.t==='G'){const g=e.g,ev={};ev[0]=g.off+(g.wave==='sq'?g.amp*(2*Math.min(.95,Math.max(.05,g.duty))-1):0);if(g.amp>0)gh(g).forEach(([k,a,b])=>{const q=col(g.f*k);ev[q]=[g.amp*a/Math.SQRT2,g.amp*b/Math.SQRT2]});src.push({c,p:bbKey(c,e.a),n:bbKey(c,e.b),ev,bbv:1})}})}});
 const K=1+F.length,ws=[0,...F.map(x=>2*Math.PI*x)],Rw=0.005;   /* chaque câble = 5 mΩ */
 const Rb=c=>c.un*c.un/Math.max(c.val,1e-6);
 const Yof=(c,w)=>{if(c.type==='plc')return[1/(c.sup==='230'?17600:192),0];if(c.type==='ldr')return[1/ldrR(c),0];if(c.type==='mdc'){if(w===0)return[c.run?mdcP(c).G:1/c.ra,0];const L=w*c.la*1e-3,d=c.ra*c.ra+L*L;return[c.ra/d,-L/d]}
  if(c.type==='mac')return acMotorY(c,w,false);
  if(c.type==='four')return[c.hon?c.pn/(c.un*c.un):1e-9,0];if(c.type==='enc')return[c.pn/(c.un*c.un),0];if(c.type==='rtor'||c.type==='rpid')return[1e-7,0];
  if(c.type==='smps'){const g=Math.max(c.gin||0,1e-6);return[g,w*g*.484/314.16]}
  if(c.type==='led'||c.type==='cfl'){const R=c.un*c.un/Math.max(c.pn,1e-6),Q=c.pn*Math.tan(Math.acos(Math.min(1,Math.max(.05,c.cosphi)))),C=Q/(2*Math.PI*50*c.un*c.un);return[1/R,w*C]}
  if(c.type==='res')return[1/Math.max(Rv(c),1e-6),0];if(c.type==='bulb')return[1/Rb(c),0];if(c.type==='volt'||(c.type==='dmm'&&c.fn==='V'))return[1e-7,0];
  if(c.type==='dec'){const v=decVal(c),kd=c.dkind||'R';if(kd==='R')return[1/Math.max(v,1e-3),0];if(kd==='C')return[0,w*v*1e-6];const L=w*v*1e-3,r=1e-3,d=r*r+L*L;return[r/d,-L/d]}
  if(c.type==='cap')return[0,w*c.val*1e-6];if(c.type==='ind'){const L=w*c.val*1e-3,r=Math.max(c.r,1e-3),d=r*r+L*L;return[r/d,-L/d]}return null};
 const n=m+src.length;let X;const run=()=>{X=[];
 for(let q=0;q<K;q++){const w=ws[q],Ar=Array.from({length:n},()=>new Array(n+1).fill(0)),Ai=Array.from({length:n},()=>new Array(n+1).fill(0));
  for(let i=0;i<m;i++)Ar[i][i]+=1e-9;
  const G=(a,b,gr,gi)=>{const i=ix(a),j=ix(b);if(i>=0){Ar[i][i]+=gr;Ai[i][i]+=gi}if(j>=0){Ar[j][j]+=gr;Ai[j][j]+=gi}if(i>=0&&j>=0){Ar[i][j]-=gr;Ai[i][j]-=gi;Ar[j][i]-=gr;Ai[j][i]-=gi}};
  comps.forEach(c=>{const y=Yof(c,w);if(y)G(c.id+':0',c.id+':1',y[0],y[1]);if(c.type==='scope'){G(c.id+':0',c.id+':1',1e-6,0);G(c.id+':2',c.id+':3',1e-6,0)}if(c.type==='com')G(c.id+':1',c.id+':'+(c.pos?2:0),200,0);if(c.type==='plc'||c.type==='plct'||c.type==='plca'){const B=c.type==='plc'?c:plcBase(c),yi=1/(B&&B.sup==='230'?68000:4700),q=c.plQ||[0,0,0,0];
   if(c.type==='plc'){for(let k=0;k<8;k++)G(c.id+':'+(2+k),c.id+':1',yi,0);for(let k=0;k<4;k++)G(c.id+':'+(10+2*k),c.id+':'+(11+2*k),q[k]?200:1e-9,0)}
   else if(c.type==='plct'){for(let k=0;k<6;k++)G(c.id+':'+(1+k),c.id+':0',yi,0);for(let k=0;k<4;k++)G(c.id+':'+(7+2*k),c.id+':'+(8+2*k),q[k]?200:1e-9,0)}
   else{G(c.id+':1',c.id+':0',1e-5,0);G(c.id+':2',c.id+':0',1e-5,0);G(c.id+':5',c.id+':0',200,0)}}
  if(c.type==='cem')G(c.id+':2',c.id+':3',200,0);if(c.type==='cet')G(c.id+':6',c.id+':7',200,0);if(c.type==='cwm'){[0,1].forEach(j=>{if(j===(c.cwp?1:0)){G(c.id+':'+2*j,c.id+':6',200,0);G(c.id+':7',c.id+':'+(2*j+1),200,0)}else G(c.id+':'+2*j,c.id+':'+(2*j+1),200,0)});G(c.id+':4',c.id+':5',200,0);G(c.id+':4',c.id+':8',200,0)}
   if(c.type==='sv')G(c.id+':2',c.id+':3',1/4e6,0);
   if(c.type==='rtor'||c.type==='rpid')G(c.id+':2',c.id+':3',c.ron?200:1e-9,0);
   if(c.type==='tr1'||c.type==='tr3'){const P=trP(c),Y=trY(P,w);P.W.forEach(W=>{const P1=[[W.a1,1],[W.b1,-1]],P2=[[W.a2,1],[W.b2,-1]];[[P1,P1,Y[0]],[P1,P2,Y[1]],[P2,P1,Y[1]],[P2,P2,Y[2]]].forEach(([R,C,y])=>R.forEach(([r,sg])=>C.forEach(([k,t])=>{const i=ix(r),j=ix(k);if(i>=0&&j>=0){Ar[i][j]+=sg*t*y[0];Ai[i][j]+=sg*t*y[1]}})));if(P.Rfe<1e11)G(W.a1,W.b1,1/P.Rfe,0)})}
   if(c.type==='bb')bbP(c).els.forEach(e=>{if(e.t==='E'||e.t==='V'||e.t==='G'||e.n)return;const ka=bbKey(c,e.a),kb=bbKey(c,e.b);if(e.t==='R')G(ka,kb,1/e.v,0);else if(e.t==='C')G(ka,kb,0,w*e.v);else if(w===0)G(ka,kb,1e3,0);else G(ka,kb,0,-1/(w*e.v))});
   if(c.type==='cch'){const Y=cchY(c);if(Y>0){if(c.cm==='tri'){G(c.id+':2',c.id+':3',Y,0);G(c.id+':3',c.id+':4',Y,0);G(c.id+':4',c.id+':2',Y,0)}else G(c.id+':0',c.id+':1',Y,0)}}
   if(c.type==='m3'){const y=m3Y(c,w);[[0,1],[1,2],[2,0]].forEach(([i,j])=>G(c.id+':'+i,c.id+':'+j,y[0],y[1]))}if(c.type==='rel'){G(c.id+':0',c.id+':1',1/Math.max(c.rc,1),0);G(c.id+':2',c.id+(c.on?':3':':4'),200,0)}if(c.type==='ctc'){G(c.id+':0',c.id+':1',1/Math.max(c.rc,1),0);if(c.on){G(c.id+':2',c.id+':3',200,0);G(c.id+':4',c.id+':5',200,0)}}});
  wires.forEach(x=>G(x.a,x.b,1/wR(x),0));
  if(q===0)comps.forEach(c=>{if(c.type==='mdc'&&c.run){const I=c.run*mdcP(c).Ic,i1=ix(c.id+':1'),i0=ix(c.id+':0');if(i1>=0)Ar[i1][n]-=I;if(i0>=0)Ar[i0][n]+=I}});
  src.forEach((s,k)=>{const r=m+k,p=ix(s.p),o=ix(s.n);if(p>=0){Ar[p][r]+=1;Ar[r][p]+=1}if(o>=0){Ar[o][r]-=1;Ar[r][o]-=1}const e=s.ev[q]||0;Ar[r][n]=Array.isArray(e)?e[0]:e;Ai[r][n]=Array.isArray(e)?e[1]:0;if(s.ctl)s.ctl.forEach(([kk,cf])=>{const j=ix(kk);if(j>=0)Ar[r][j]-=cf});if(s.cc){for(let j=0;j<=n;j++){Ar[r][j]=0;Ai[r][j]=0}Ar[r][r]=1;Ar[r][n]=q===0?-s.lim:0}});
  for(let c=0;c<n;c++){let p=c,best=-1;for(let r=c;r<n;r++){const v=Ar[r][c]**2+Ai[r][c]**2;if(v>best){best=v;p=r}}
   if(best<1e-24){err='Court-circuit détecté : vérifie ton câblage (ampèremètre en dérivation ?).';return}
   [Ar[c],Ar[p]]=[Ar[p],Ar[c]];[Ai[c],Ai[p]]=[Ai[p],Ai[c]];const pr=Ar[c][c],pi=Ai[c][c],den=pr*pr+pi*pi;
   for(let r=0;r<n;r++)if(r!==c){const kr=(Ar[r][c]*pr+Ai[r][c]*pi)/den,ki=(Ai[r][c]*pr-Ar[r][c]*pi)/den;if(kr||ki)for(let j=c;j<=n;j++){const a=Ar[c][j],b=Ai[c][j];Ar[r][j]-=kr*a-ki*b;Ai[r][j]-=kr*b+ki*a}}}
  const xr=[],xi=[];for(let i=0;i<n;i++){const pr=Ar[i][i],pi=Ai[i][i],den=pr*pr+pi*pi;xr.push((Ar[i][n]*pr+Ai[i][n]*pi)/den);xi.push((Ai[i][n]*pr-Ar[i][n]*pi)/den)}X[q]={r:xr,i:xi}}
 return true};
 if(!run())return;
 for(let pass=0;pass<8;pass++){let chg=false;
  src.forEach((s,k)=>{if(!(s.lim>0))return;const ir=X[0].r[m+k];
   if(!s.cc){if(-ir>s.lim*(1+1e-9)+1e-12){s.cc=true;chg=true}}
   else{const gv=z=>{const i=ix(z);return i<0?0:X[0].r[i]};if(gv(s.p)-gv(s.n)>=s.ev[0]-1e-9){s.cc=false;chg=true}}});
  if(!chg)break;if(!run())return}
 src.forEach(s=>{if(s.lim>0){if(s.ch===2)s.c.cc2=!!s.cc;else s.c.cc=!!s.cc}});
 for(let k=0;k<src.length;k++){let t=0;X.forEach(x=>{t+=x.r[m+k]**2+x.i[m+k]**2});if(Math.sqrt(t)>100&&!src[k].ohm){err='Court-circuit détecté : courant excessif (> 100 A).';return}}
 const Vc=(k,q)=>{const i=ix(k);return i<0?[0,0]:[X[q].r[i],X[q].i[i]]};
 const WI=wires.map(x=>X.map((_,q)=>{const a=Vc(x.a,q),b=Vc(x.b,q);const rw=wR(x);return[(a[0]-b[0])/rw,(a[1]-b[1])/rw]}));
 wires.forEach((x,wi)=>{if(wRes(x)){const W=WI[wi];x.Iw=Math.hypot(W[0][0],Math.hypot(...W.slice(1).map(v=>Math.hypot(v[0],v[1]))))}else x.Iw=undefined});   /* courant a→b dans chaque câble */
 comps.forEach(c=>{if(c.type==='bread')return;const k=src.findIndex(s=>s.c===c);let CI=null;
  if(c.type==='pince'){c.cl=clampOf(c);const sg=c.rev?-1:1;
   CI=X.map((_,q)=>{let r=0,im=0;if(c.cl)wires.forEach((x,wi)=>{if(x===c.cl.w||(c.cl.w.pair&&x.pair===c.cl.w.pair)){r+=WI[wi][q][0];im+=WI[wi][q][1]}});return[sg*r,sg*im]})}
  const cols=X.map((_,q)=>{const a=Vc(c.id+':0',q),b=Vc(c.id+':1',q),y=Yof(c,ws[q]);let u=[a[0]-b[0],a[1]-b[1]],i;
   if(y)i=[u[0]*y[0]-u[1]*y[1],u[0]*y[1]+u[1]*y[0]];else i=k<0?[0,0]:[X[q].r[m+k],X[q].i[m+k]];
   if(c.type==='mdc'&&q===0)i=[i[0]-c.run*mdcP(c).Ic,i[1]];if(isS(c)||c.type==='mdc'||c.type==='mac'){u=[-u[0],-u[1]];i=[-i[0],-i[1]]}
   if(c.type==='watt'){const a1=Vc(c.id+':3',q),b1=Vc(c.id+':2',q);u=[a1[0]-b1[0],a1[1]-b1[1]]}
   if(c.type==='cem'){const a1=Vc(c.id+':0',q),b1=Vc(c.id+':2',q);u=[a1[0]-b1[0],a1[1]-b1[1]]}
   if(CI){if(c.type==='pince'){const a1=Vc(c.id+':1',q),b1=Vc(c.id+':0',q);u=[a1[0]-b1[0],a1[1]-b1[1]]}else u=[0,0];i=CI[q]}
   return[u[0],u[1],i[0],i[1]]});
  c.U=cols[0][0];c.I=cols[0][2];const ac=cols.slice(1);
  c.Ua=Math.hypot(...ac.map(x=>Math.hypot(x[0],x[1])));c.Ia=Math.hypot(...ac.map(x=>Math.hypot(x[2],x[3])));
  c.Ur=Math.hypot(c.U,c.Ua);c.Ir=Math.hypot(c.I,c.Ia);
  c.P=cols.reduce((t,x)=>t+x[0]*x[2]+x[1]*x[3],0);c.Q=cols.reduce((t,x)=>t+x[1]*x[2]-x[0]*x[3],0);
  if(c.type==='mdc'){const Pm=mdcP(c);c.rps=c.run?Math.max(0,(Math.abs(c.U)-Pm.U0)/Pm.D)/(2*Math.PI):0;c.rpm=c.rps*60}
  if(c.type==='mac'){let bb=-1,f=0;ac.forEach((x,k)=>{const m=Math.hypot(x[0],x[1]);if(m>bb){bb=m;f=ws[k+1]/(2*Math.PI)}});c.rps=c.Ur>=.6*c.un&&f>0?f*(1-.05*c.ml)*(c.kst===undefined?1:c.kst)*(c.rmul||1):0;c.rpm=c.rps*60}
  if(c.type==='cch'||c.type==='m3'){let P=0,Q=0;const pr=c.type==='m3'?[[0,1],[1,2],[2,0]]:c.cm==='tri'?[[2,3],[3,4],[4,2]]:[[0,1]];
   X.forEach((_,q)=>pr.forEach(([i,j])=>{const a=Vc(c.id+':'+i,q),b=Vc(c.id+':'+j,q),u=[a[0]-b[0],a[1]-b[1]],y=c.type==='cch'?[cchY(c),0]:m3Y(c,ws[q]),cu=[u[0]*y[0]-u[1]*y[1],u[0]*y[1]+u[1]*y[0]];P+=u[0]*cu[0]+u[1]*cu[1];Q+=u[1]*cu[0]-u[0]*cu[1]}));c.P=P;c.Q=Q;
   if(c.type==='m3'){let bb=-1,f=0;ac.forEach((x,k)=>{const m=Math.hypot(x[0],x[1]);if(m>bb){bb=m;f=ws[k+1]/(2*Math.PI)}});const Uw=c.cpl==='D'?c.Ur:c.Ur/Math.sqrt(3);c.rps=Uw>=.6*c.un&&f>0?f/2*(1-.04*c.ml):0;c.rpm=c.rps*60}}
  if(c.type==='cet'){let P=0,Q=0,Us=0,Is=0;X.forEach((_,q)=>[0,1,2].forEach(j=>{const kj=src.findIndex(s=>s.c===c&&s.ph===j);if(kj<0)return;const a=Vc(c.id+':'+2*j,q),b=Vc(c.id+':6',q),u=[a[0]-b[0],a[1]-b[1]],i=[X[q].r[m+kj],X[q].i[m+kj]];P+=u[0]*i[0]+u[1]*i[1];Q+=u[1]*i[0]-u[0]*i[1];if(q===0||true){Us+=u[0]*u[0]+u[1]*u[1];Is+=i[0]*i[0]+i[1]*i[1]}}));c.P=P;c.Q=Q;c.Ur=Math.sqrt(Us/3);c.Ir=Math.sqrt(Is/3);c.U=c.Ur;c.I=c.Ir;c.Ua=0;c.Ia=0}
  if(c.type==='scope'){c.ws=ws;c.sig=[0,2].map(o=>X.map((_,q)=>{const a=Vc(c.id+':'+(o+1),q),b=Vc(c.id+':'+o,q);return[a[0]-b[0],a[1]-b[1]]}))}});
 comps.forEach(c=>{if(c.shunt){c.U=c.I=c.P=c.Ur=c.Ir=c.Ua=c.Ia=0}});
 comps.forEach(c=>{if(c.type==='tr1'||c.type==='tr3'){const T=c.tx=trStatsPh(c,X,ws,Vc);c.U=T.U1;c.Ur=T.U1;c.I=T.I1;c.Ir=T.I1;c.P=T.P1;c.Q=T.Q1}
  else if(c.type==='smps'){const k=src.findIndex(s=>s.c===c),a=Vc(c.id+':2',0),b=Vc(c.id+':3',0);c.Uo=k<0?0:a[0]-b[0];c.Io=k<0?0:-X[0].r[m+k];if(k<0)c.cc=false}});
 const plV=(a,b)=>{let d=0,ac=0;X.forEach((_,q)=>{const A=Vc(a,q),B=Vc(b,q),u=[A[0]-B[0],A[1]-B[1]];if(q===0)d=u[0];else ac+=u[0]*u[0]+u[1]*u[1]});return[d,Math.hypot(d,Math.sqrt(ac))]};
 comps.forEach(c=>{if(c.type==='plc'){const nom=c.sup==='230'?230:24;c.plOn=(c.Ur||0)>=.85*nom;const th=.6*nom;c.plV=[0,1,2,3,4,5,6,7].map(k=>plV(c.id+':'+(2+k),c.id+':1')[1]>th?1:0)}});
 comps.forEach(c=>{if(c.type==='plct'){const B=plcBase(c),nom=B&&B.sup==='230'?230:24;c.plV=[0,1,2,3,4,5].map(k=>plV(c.id+':'+(1+k),c.id+':0')[1]>.6*nom?1:0)}else if(c.type==='plca'){c.plA=[1,2].map(k=>Math.max(0,Math.min(10,plV(c.id+':'+k,c.id+':0')[0])))}});
 comps.forEach(c=>{if(c.type==='bat2'){const k2=src.findIndex(s=>s.c===c&&s.ch===2),a=Vc(c.id+':3',0),b=Vc(c.id+':2',0);c.U2=a[0]-b[0];c.I2=-X[0].r[m+k2];c.P=(c.P||0)+c.U2*c.I2}});
 comps.forEach(c=>{if(c.type==='tach'||c.type==='cpm'){let best=null,bd=110;comps.forEach(m=>{if(m.type==='mdc'||m.type==='mac'||m.type==='m3'){const d=Math.hypot(m.x-c.x,m.y-c.y);if(d<bd){bd=d;best=m}}});c.tgt=best?best.id:null;c.tv=best?(c.type==='tach'?(best.rpm||0):torque(best)):undefined}});
}
/* relais / contacteurs : l'état dépend de la tension efficace de la bobine (hystérésis 80 % / 30 %) -> itération */
const HMAX=2;
const levMotor=c=>{const L=comps.filter(m=>m.type==='mdc'||m.type==='mac'||m.type==='m3');if(c.mot){const m=L.find(m=>m.id==+c.mot);if(m)return m}let best=null,bd=1e9;L.forEach(m=>{const d=Math.hypot(m.x-c.x,m.y-c.y);if(d<bd&&d<400){bd=d;best=m}});return best};
const motTn=m=>m.type==='mdc'?mdcP(m).k*Math.max(m.inom-m.i0,.01):m.pn/(2*Math.PI*(m.type==='mac'?47.5*(m.rmul||1):24));
function applyLoads(){comps.forEach(m=>{m.hext=0});comps.forEach(c=>{if(c.type!=='lev')return;const m=levMotor(c);c.lm=m?m.id:0;c.stall=false;if(!m)return;m.hext=c.id;const T=Math.max(0,c.mass)*9.81*(c.dr/100)/Math.max(1,c.gr)/.9,Tn=motTn(m),r=T/Tn;c.lT=T;c.lr=r;
  if(m.type==='mdc'){m.load=Math.min(100,r*100);c.stall=r>1.001}else{m.ml=Math.min(1.2,r);c.stall=r>1.2}}) }
function solve(){applyLoads();wires.forEach(w=>{w.Iw=undefined});if(comps.some(c=>ACTIVE.has(c.type)||bbNL(c))){tranMode=true;err='';relayN=0;solveTran();return}tranMode=false;tranNote='';comps.forEach(c=>{c.tr=null});const was=comps.map(c=>c.on);comps.forEach(c=>{if(c.type==='mdc')c.run=0});let ok=false;
 for(let it=0;it<10;it++){solveOnce();if(err)break;let ch=false;comps.forEach(c=>{
  if(c.type==='rel'||c.type==='ctc'){const on=c.Ur>=.8*c.un?true:c.Ur<.3*c.un?false:c.on;if(on!==c.on){c.on=on;ch=true}}
  if(c.type==='mdc'){const r=Math.abs(c.U)>mdcP(c).U0?Math.sign(c.U):0;if(r!==c.run){c.run=r;ch=true}}
  if(c.type==='smps'){const U=c.Ur||0,on=c.smon?(U>=21&&U<=400):(U>=24&&U<=400);if(on!==!!c.smon){c.smon=on;ch=true}
   const Po=on?Math.max(0,(c.Uo||0)*(c.Io||0)):0,g=(Po/Math.max(.05,c.eta||.88)+.5)/Math.max(U*U,25);if(Math.abs(g-(c.gin||0))>.01*g+1e-9){c.gin=g;ch=true}}});if(!ch){ok=true;break}}
 if(!ok&&!err){comps.forEach(c=>{if(c.type==='mdc')c.run=0});solveOnce()}
 comps.forEach((c,i)=>{if((c.type==='rel'||c.type==='ctc')&&c.on&&!was[i])clac(c.type==='ctc')});if(!err&&fuseCheck()){clac(true);solve()}}
/* ---- Boîtes noires : netlist (R, C, L, W, E) masquée à l'élève ---- */
function pv(x){x=String(x).trim();const k47=x.match(/^(\d+)([pnuµmkKMGT])(\d+)\b/);if(k47)x=k47[1]+'.'+k47[3]+k47[2];const m=String(x).trim().match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)\s*(meg|MEG|Meg|[fpnuµmkKMGT])?/);if(!m)return NaN;let v=parseFloat(m[1]);const u=m[2];if(u){if(/^meg$/i.test(u))v*=1e6;else v*={f:1e-15,p:1e-12,n:1e-9,u:1e-6,'µ':1e-6,m:1e-3,k:1e3,K:1e3,M:1e6,G:1e9,T:1e12}[u]}return v}
const BBN={d:['A','B'],q:['E+','E-','S+','S-']},BBK='LaboSimBN';
function bbEnc(t){const b=new TextEncoder().encode(String(t)).map((x,i)=>x^BBK.charCodeAt(i%BBK.length));let r='';b.forEach(x=>{r+=String.fromCharCode(x)});return btoa(r)}
function bbDec(e){try{return new TextDecoder().decode(Uint8Array.from(atob(e),ch=>ch.charCodeAt(0)).map((x,i)=>x^BBK.charCodeAt(i%BBK.length)))}catch(x){return''}}
function bbHash(c){let h=2166136261;for(const ch of 'LSBN'+c){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return(h>>>0).toString(16)}
function bbParse(text,kind){const els=[],ext=BBN[kind]||BBN.d,nm=x=>x.replace(/[−–]/g,'-').toUpperCase();let er='';
 String(text||'').split(/\r?\n/).forEach((ln,li)=>{ln=ln.replace(/[;*#].*$/,'').trim();if(!ln||er)return;const tk=ln.split(/\s+/),ty=tk[0][0].toUpperCase(),L='Ligne '+(li+1)+' : ';
  if('RCLW'.includes(ty)){const need=ty==='W'?3:4;if(tk.length<need){er=L+tk[0]+' attend '+(need-1)+' champs';return}const v=ty==='W'?1e-3:pv(tk[3]);if(!(v>0)){er=L+'valeur invalide « '+tk[3]+' »';return}els.push({t:ty==='W'?'R':ty,a:nm(tk[1]),b:nm(tk[2]),v})}
  else if(ty==='E'){const v=tk.length>=6?pv(tk[5]):NaN;if(isNaN(v)){er=L+'E attend 5 champs : E nom n+ n- nc+ nc- gain';return}els.push({t:'E',a:nm(tk[1]),b:nm(tk[2]),c:nm(tk[3]),d:nm(tk[4]),v})}
  else if(ty==='V'){const v=tk.length>=4?pv(tk[3]):NaN;if(isNaN(v)){er=L+'V attend : V nom + - valeur [AC fréquence]';return}const ac=/^AC$/i.test(tk[4]||''),fq=ac?(tk[5]?pv(tk[5]):50):0;if(ac&&!(fq>0)){er=L+'fréquence invalide';return}const ph=ac&&tk[6]?pv(tk[6]):0;els.push({t:'V',a:nm(tk[1]),b:nm(tk[2]),v,ac,fq,ph:isNaN(ph)?0:ph})}
  else if(ty==='G'){if(tk.length<5){er=L+'G attend : G nom + - amplitude fréquence [sin|sq|tri] [offset] [rapport cyclique]';return}const am=pv(tk[3]),fq=pv(tk[4]),of=pv(tk[6]),du=pv(tk[7]);if(isNaN(am)||!(fq>0)){er=L+'G : amplitude ou fréquence invalide';return}els.push({t:'G',a:nm(tk[1]),b:nm(tk[2]),g:{amp:am,f:fq,wave:/^(sq|tri)$/i.test(tk[5]||'')?tk[5].toLowerCase():'sin',off:isNaN(of)?0:of,duty:isNaN(du)?.5:du}})}
  else if(ty==='U'){if(tk.length<5){er=L+'U attend : U nom entrée sortie masse Un [dropout] [Imax]';return}const un=pv(tk[4]),vd=pv(tk[5]),im=pv(tk[6]);els.push({t:'U',n:[nm(tk[1]),nm(tk[2]),nm(tk[3])],un:Math.max(1.25,isNaN(un)?5:un),vd:isNaN(vd)?2:vd,im:isNaN(im)?1.5:Math.max(.05,im)})}
  else if(ty==='A'||ty==='K'){if(tk.length<6){er=L+tk[0]+' attend : '+tk[0]+' nom in+ in- sortie alim+ alim- [vm]'+(ty==='K'?' [OC]':'');return}const vm=pv(tk[6]);els.push({t:ty,n:tk.slice(1,6).map(nm),vm:isNaN(vm)?1.5:vm,oc:ty==='K'&&tk.slice(6).some(x=>/^OC$/i.test(x))})}
  else if(ty==='O'){if(tk.length<5){er=L+'O attend : O nom A K T2 T1 [ift] [ZC]';return}const it=pv(tk[5]);els.push({t:'O',n:tk.slice(1,5).map(nm),ift:isNaN(it)?.015:it,zc:tk.slice(5).some(x=>/^ZC$/i.test(x))})}
  else if(ty==='N'){if(tk.length<9){er=L+'N (NE555) attend : N nom gnd trg out rst ctl thr dis vcc';return}els.push({t:'N',n:tk.slice(1,9).map(nm)})}
  else if(ty==='D'){if(tk.length<3){er=L+'D attend : D nom anode cathode [v0 rd [vz rz]]';return}const q=tk.slice(3).map(pv);els.push({t:'D',n:[nm(tk[1]),nm(tk[2])],v0:isNaN(q[0])?.7:q[0],rd:isNaN(q[1])?1:Math.max(q[1],1e-3),vz:isNaN(q[2])?0:q[2],rz:isNaN(q[3])?10:q[3]})}
  else if(ty==='Q'){if(tk.length<5){er=L+'Q attend : Q nom base collecteur émetteur NPN|PNP [bêta] [P]';return}const be=pv(tk[5]);els.push({t:'Q',n:[nm(tk[1]),nm(tk[2]),nm(tk[3])],s:/^PNP$/i.test(tk[4])?-1:1,beta:isNaN(be)?100:be,pw:tk.slice(5).some(x=>/^P$/i.test(x))})}
  else if(ty==='M'){if(tk.length<5){er=L+'M attend : M nom grille drain source N|P [vt] [kp] [P]';return}const vt=pv(tk[5]),kp=pv(tk[6]);els.push({t:'M',n:[nm(tk[1]),nm(tk[2]),nm(tk[3])],pol:/^P$/i.test(tk[4])?-1:1,fk:/^H$/i.test(tk[4])?'hemt':/^G$/i.test(tk[4])?'gan':'',vt:isNaN(vt)?2:vt,kp:isNaN(kp)?.05:kp,pw:tk.slice(5).some(x=>/^P$/i.test(x))})}
  else if(ty==='T'){if(tk.length<4){er=L+'T attend : T nom MT2 MT1 gâchette [igt] [ih]';return}const g=pv(tk[4]),h=pv(tk[5]);els.push({t:'T',n:[nm(tk[1]),nm(tk[2]),nm(tk[3])],igt:isNaN(g)?.025:g,ih:isNaN(h)?.03:h})}
  else er=L+'élément inconnu « '+tk[0]+' » (R, C, L, W, E, V, G, D, Q, M, T, U, A, K, O ou N)'});
 if(!er&&!els.length)er='Netlist vide';return{els,er,ext}}
const bbCache=new Map();
function bbGnd(){for(const c of comps){if(c.type!=='bb')continue;const e=bbP(c).els.find(x=>x.t==='V'||x.t==='G');if(e)return bbKey(c,e.b)}return null}
const bbNodes=e=>e.n||[e.a,e.b,e.c,e.d];
const bbNL=c=>c.type==='bb'&&bbP(c).els.some(e=>e.n);
function bbP(c){const k=c.kind+'|'+c.net;let r=bbCache.get(k);if(!r){r=bbParse(bbDec(c.net),c.kind);if(r.er)r={els:[],er:r.er,ext:r.ext};bbCache.set(k,r)}return r}
const bbKey=(c,n)=>{const i=(BBN[c.kind]||BBN.d).indexOf(n);return i>=0?c.id+':'+i:c.id+'#'+n};
const BBT={d:{'Batterie 12 V (Thévenin : source + 0,1 Ω)':'V1 n1 B 12\nR1 A n1 0.1','Secteur 230 V~ (source + 0,5 Ω)':'V1 n1 B 230 AC 50\nR1 A n1 0.5','RC série (1 kΩ + 100 nF)':'R1 A n1 1k\nC1 n1 B 100n','RL série (100 Ω + 10 mH)':'R1 A n1 100\nL1 n1 B 10m','RLC série (47 Ω, 10 mH, 1 µF)':'R1 A n1 47\nL1 n1 n2 10m\nC1 n2 B 1u','R // C (1 kΩ ∥ 100 nF)':'R1 A B 1k\nC1 A B 100n','R // L (1 kΩ ∥ 10 mH)':'R1 A B 1k\nL1 A B 10m','RLC parallèle':'R1 A B 1k\nL1 A B 10m\nC1 A B 1u','Résistance 470 Ω':'R1 A B 470'},
 q:{'Passe-bas RC (fc ≈ 1,6 kHz)':'R1 E+ S+ 1k\nC1 S+ E- 100n\nW1 E- S-','Passe-haut RC (fc ≈ 1,6 kHz)':'C1 E+ S+ 100n\nR1 S+ E- 1k\nW1 E- S-','Passe-bande (L-C série, sortie sur R)':'L1 E+ n1 10m\nC1 n1 S+ 1u\nR1 S+ E- 100\nW1 E- S-','Diviseur de tension 1/3':'R1 E+ S+ 2k\nR2 S+ E- 1k\nW1 E- S-','Réseau en T':'R1 E+ n1 1k\nR2 n1 S+ 1k\nR3 n1 E- 2k\nW1 E- S-','Passe-bas LC (2e ordre)':'L1 E+ S+ 10m\nC1 S+ E- 1u\nR1 S+ E- 1k\nW1 E- S-','Amplificateur idéal ×10':'E1 S+ S- E+ E- 10\nR1 E+ E- 1meg'}};
function openBB(c){const m=$('bbm'),b=$('bbb');m.style.display='block';
 const edit=()=>{const cur=bbDec(c.net)||'',tp=Object.entries(BBT[c.kind]||BBT.d);
  b.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>Boîte noire : contenu (réservé au professeur)</b><button id="bbx">Fermer</button></div>
<div class="g2"><label>Nom affiché <input id="bbn" type="text" value="${esc_(c.name)}"></label><label>Type ${selH('x',[['d','Dipôle (bornes A, B)'],['q','Quadripôle (E+, E−, S+, S−)']],c.kind).replace('data-p="x"','id="bbk"')}</label></div>
<label>Modèle <select id="bbt"><option value="">— choisir un modèle —</option>${tp.map(([n],i)=>`<option value="${i}">${esc_(n)}</option>`).join('')}</select></label>
<label>Netlist (une ligne par élément) <textarea id="bba" rows="9" style="font-family:ui-monospace,Consolas,monospace">${esc_(cur)}</textarea></label>
<div class="mut" style="font-size:12px">R nom n1 n2 valeur · C · L · W nom n1 n2 (fil) · E nom n+ n− nc+ nc− gain (source commandée). Bornes : ${(BBN[c.kind]||BBN.d).join(', ')} ; tout autre nom = nœud interne. Valeurs : 1k, 4.7k, 100n, 10u, 10m, 1meg…</div>
<label>Code professeur (vide = inchangé) <input id="bbp" type="password" autocomplete="off"></label><label><input type="checkbox" id="bbr"> Retirer le code</label><div id="bbm2" style="color:var(--bad)"></div>
<div style="display:flex;gap:8px"><button id="bbv" class="p">Valider</button><button id="bbc">Annuler</button></div>`;
  const k=()=>$('bbk').value;$('bbk').onchange=()=>{const t=Object.entries(BBT[k()]);$('bbt').innerHTML='<option value="">— choisir un modèle —</option>'+t.map(([n],i)=>`<option value="${i}">${esc_(n)}</option>`).join('')};
  $('bbt').onchange=()=>{if($('bbt').value!=='')$('bba').value=Object.values(BBT[k()])[+$('bbt').value]};
  $('bbx').onclick=$('bbc').onclick=()=>{m.style.display='none'};
  $('bbv').onclick=()=>{const kd=k(),r=bbParse($('bba').value,kd);if(r.er){$('bbm2').textContent=r.er;return}const bad=new Set(r.els.flatMap(e=>[e.a,e.b,e.c,e.d]).filter(Boolean));
   if(kd==='d'&&c.kind==='q')wires=wires.filter(w=>!/^.*:[23]$/.test(w.a)||!w.a.startsWith(c.id+':'))&&wires.filter(w=>!(w.a.startsWith(c.id+':')&&+w.a.split(':')[1]>=2)&&!(w.b.startsWith(c.id+':')&&+w.b.split(':')[1]>=2));
   c.name=$('bbn').value.trim()||c.name;c.kind=kd;c.net=bbEnc($('bba').value);if($('bbr').checked)c.lk='';else if($('bbp').value)c.lk=bbHash($('bbp').value);m.style.display='none';panel();render()}};
 if(c.lk){b.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>Code professeur</b><button id="bbx">Fermer</button></div><label>Code <input id="bbc2" type="password" autocomplete="off"></label><div id="bbm2" style="color:var(--bad)"></div><div><button id="bbo" class="p">Valider</button></div>`;
  $('bbx').onclick=()=>{m.style.display='none'};$('bbo').onclick=()=>{if(bbHash($('bbc2').value)===c.lk)edit();else $('bbm2').textContent='Code incorrect'}}
 else edit()}
/* ---- Boîte noire créée à partir d'un montage (R, C, L et fils) ---- */
let capt=null;
const capMsg=()=>'Boîte noire : clique la borne « '+BBN[capt.kind][capt.picked.length]+' » (Échap pour annuler)';
function startCapture(kind,all){capt={kind,picked:[],all:!!all};pend=null;sel=selW=selN=null;panel();render()}
function capPick(k){capt.picked.push(k);if(capt.picked.length<BBN[capt.kind].length){render();return}finishCapture()}
function finishCapture(){const kind=capt.kind,picked=capt.picked,names=BBN[kind],ALL=capt.all;capt=null;
 const par={},f=k=>{if(par[k]===undefined)par[k]=k;return par[k]===k?k:(par[k]=f(par[k]))};wires.forEach(w=>{par[f(w.a)]=f(w.b)});
 const TT={bat2:[0,1,2,3],a3:[0,1,2,3],gbf:[0,1],led:[0,1],cfl:[0,1],otri:[0,1,2,3],reg:[0,1,2],aop:[1,2,3,5,6],cmp:[1,2,3,6,7],ne555:[0,1,2,3,4,5,6,7],res:[0,1],cap:[0,1],ind:[0,1],bat:[0,1],ac:[0,1],bulb:[0,1],ldr:[0,1],dec:[0,1],sw:[0,1],dio:[0,1],dled:[0,1],bjt:[0,1,2],fet:[0,1,2],triac:[0,1,2]},BASIC=['res','cap','ind'],okC=c=>TT[c.type]&&(ALL||BASIC.includes(c.type)),roots=picked.map(f),seen=new Set(roots),queue=[...roots],S=[];
 while(queue.length){const r=queue.shift();comps.forEach(c=>{if(!okC(c)||S.includes(c))return;const ns=TT[c.type].map(i=>f(c.id+':'+i));if(c.type==='sw'&&!c.closed)return;if(ns.includes(r)){S.push(c);ns.forEach(x=>{if(!seen.has(x)){seen.add(x);queue.push(x)}})}})}
 const fail=m=>{render();st.textContent='Boîte noire : '+m};
 if(!S.length)return fail('les bornes choisies doivent appartenir à des composants (R, C, L, diodes, transistors, triac, lampes, décades…) câblés entre eux');
 const nm={};let first={};roots.forEach((r,i)=>{if(nm[r]===undefined){nm[r]=names[i];first[r]=names[i]}});let ni=0;const nameOf=r=>nm[r]!==undefined?nm[r]:(nm[r]='n'+(++ni)),L=[];
 const T=(c,k)=>nameOf(f(c.id+':'+k));let ie=0;S.forEach(c=>{const a=nameOf(f(c.id+':0')),b=nameOf(f(c.id+':1')),i=++ie,v=x=>String(+x.toPrecision(6)),t3=()=>nameOf(f(c.id+':2')),ty=c.type;
  if(ty==='bat2'){L.push(`V${i} ${b} ${a} ${v(c.val)}`);L.push(`V${i}b ${T(c,3)} ${T(c,2)} ${v(c.val2)}`)}
  else if(ty==='a3'){const Vp=c.val/Math.sqrt(3);[[1,0],[2,-120],[3,120]].forEach(([k,d])=>L.push(`V${i}${'abc'[k-1]} ${T(c,k)} ${a} ${v(Vp)} AC ${v(c.f)} ${d}`))}
  else if(ty==='gbf')L.push(`G${i} ${b} ${a} ${v(c.amp)} ${v(c.f)} ${c.wave==='sq'?'sq':c.wave==='tri'?'tri':'sin'} ${v(c.off||0)} ${v(c.duty||.5)}`);
  else if(ty==='led'||ty==='cfl'){const Q=c.pn*Math.tan(Math.acos(Math.min(1,Math.max(.05,c.cosphi))));L.push(`R${i} ${a} ${b} ${v(c.un*c.un/c.pn)}`);if(Q>0)L.push(`C${i} ${a} ${b} ${v(Q/(2*Math.PI*50*c.un*c.un))}`)}
  else if(ty==='otri')L.push(`O${i} ${a} ${b} ${T(c,3)} ${T(c,2)} ${v(+c.ift||.015)}${c.zc?' ZC':''}`);
  else if(ty==='reg')L.push(`U${i} ${a} ${b} ${T(c,2)} ${v(Math.max(1.25,+c.ur||5))} ${v(+c.rvd||2)} ${v(Math.max(.05,+c.rim||1.5))}`);
  else if(ty==='aop')L.push(`A${i} ${T(c,2)} ${T(c,1)} ${T(c,5)} ${T(c,6)} ${T(c,3)} ${v(c.vm)}`);
  else if(ty==='cmp')L.push(`K${i} ${T(c,1)} ${T(c,2)} ${T(c,6)} ${T(c,7)} ${T(c,3)} ${v(c.vm)}${c.oc?' OC':''}`);
  else if(ty==='ne555')L.push(`N${i} ${[0,1,2,3,4,5,6,7].map(k=>T(c,k)).join(' ')}`);
  else if(ty==='bat')L.push(`V${i} ${b} ${a} ${v(c.val)}`);else if(ty==='ac')L.push(`V${i} ${b} ${a} ${v(c.val)} AC ${v(c.f)}`);else if(ty==='bulb')L.push(`R${i} ${a} ${b} ${v(c.un*c.un/c.val)}`);else if(ty==='ldr')L.push(`R${i} ${a} ${b} ${v(ldrR(c))}`);else if(ty==='sw')L.push(`W${i} ${a} ${b}`);
  else if(ty==='dec'){const dv=decVal(c),kd=c.dkind||'R';if(kd==='R')L.push(`R${i} ${a} ${b} ${v(Math.max(dv,1e-3))}`);else if(kd==='C')L.push(`C${i} ${a} ${b} ${v(Math.max(dv,1e-12)*1e-6)}`);else{L.push(`R${i}b ${a} x${i} 0.001`);L.push(`L${i} x${i} ${b} ${v(Math.max(dv,1e-3)*1e-3)}`)}}
  else if(ty==='dio'||ty==='dled'){const m=dmod(c);L.push(`D${i} ${a} ${b} ${v(m.v0)} ${v(m.rd)} ${v(m.vz)} ${v(m.rz)}`)}
  else if(ty==='bjt')L.push(`Q${i} ${a} ${b} ${t3()} ${c.kd==='pnp'?'PNP':'NPN'} ${v(Math.max(5,+c.beta||100))}${c.pw?' P':''}`);
  else if(ty==='fet')L.push(`M${i} ${a} ${b} ${t3()} ${c.fk==='pmos'?'P':c.fk==='hemt'?'H':c.fk==='gan'?'G':'N'} ${v(+c.vt)} ${v(Math.max(1e-6,+c.kp||.05))}${c.pw?' P':''}`);
  else if(ty==='triac')L.push(`T${i} ${b} ${a} ${t3()} ${v(+c.igt||.025)} ${v(+c.ih||.03)}`);
  else if(c.type==='res')L.push(`R${i} ${a} ${b} ${v(Rv(c))}`);else if(c.type==='cap')L.push(`C${i} ${a} ${b} ${v(c.val*1e-6)}`);else{L.push(`R${i}b ${a} x${i} ${v(c.r)}`);L.push(`L${i} x${i} ${b} ${v(c.val*1e-3)}`)}});
 roots.forEach((r,i)=>{if(first[r]!==names[i])L.push(`W${i+1} ${first[r]} ${names[i]}`)});
 const cx=Math.round(S.reduce((t,c)=>t+c.x,0)/S.length/20)*20,cy=Math.round(S.reduce((t,c)=>t+c.y,0)/S.length/20)*20;
 wires=wires.filter(w=>!S.some(c=>w.a.startsWith(c.id+':')||w.b.startsWith(c.id+':')));comps=comps.filter(c=>!S.includes(c));
 const bb=add('bb',cx,cy);bb.kind=kind;bb.name='BN'+comps.filter(x=>x.type==='bb').length;bb.net=bbEnc(L.join('\n'));sel=bb.id;panel();render();
 st.textContent='Boîte noire '+bb.name+' créée : '+S.length+' composant(s) convertis. Reconnecte-la au montage ; « 🔒 Édition » permet de vérifier la netlist.'}
/* ---- Simulation temporelle (circuits intégrés : NE555, AOP, comparateur) ---- */
const ACTIVE=new Set(['ne555','aop','cmp','dio','dled','irrx','hcsr','uno','pot','pb','tsop','bjt','fet','triac','otri','spk','mic','reg']);
/* diodes : modèle linéaire par morceaux  (bloquée / passante V0 + rd·I / Zener -Vz + rz·I) */
const DK={d4148:['1N4148',.55,5],d4007:['1N4007',.65,.25],z33:['Zener 3,3 V',.6,2,3.3,10],z51:['Zener 5,1 V',.6,2,5.1,8],z91:['Zener 9,1 V',.6,2,9.1,10]},
 LC={ir:['Infrarouge (940 nm)',1.25,'#7b5a7b'],rouge:['Rouge',1.85,'#ff2a2a'],orange:['Orange',1.95,'#ff8a1a'],jaune:['Jaune',2.05,'#ffe100'],vert:['Vert',2.15,'#2bd34a'],bleu:['Bleu',3.0,'#2f6bff'],blanc:['Blanc',3.1,'#f4f8ff']};
function dmod(c){if(c.type==='dled'){const l=LC[c.lc]||LC.rouge;return{v0:l[1]-.1,rd:10,vz:0,rz:10}}const d=DK[c.dk]||DK.d4148;return{v0:d[1],rd:d[2],vz:d[3]||0,rz:d[4]||10}}
const dcur=(m,v)=>v>m.v0?(v-m.v0)/m.rd:(m.vz&&v<-m.vz)?(v+m.vz)/m.rz:0;let tranMode=false,tranNote='',tranCache=null;
const lookB=c=>c.look==='fan'?[0,72,144,216,288].map(a=>`<path transform="rotate(${a})" d="M0 -3C10 -8 14 -20 6 -26C-2 -22 -4 -12 0 -3Z" fill="#b8c4d0" stroke="#4a525a"/>`).join(''):c.look==='vac'?[...Array(10)].map((_,i)=>`<path transform="rotate(${i*36})" d="M0 -4L5 -23" stroke="#cfd8dc" stroke-width="3"/>`).join(''):null;
const motPreset=(c,k)=>{if(k==='fan1'){Object.assign(c,{look:'fan',pn:65,ml:.8,rmul:.5,cosphi:.9,eta:.55,i0r:.6});c.name='Ventilateur 230 V'}else if(k==='fan3'){Object.assign(c,{look:'fan',pn:1100,ml:.8,cpl:'Y',un:230});c.name='Ventilateur 400 V'}else if(k==='vac'){Object.assign(c,{look:'vac',pn:1400,eta:.7,ml:1,rmul:6,cosphi:.97,i0r:.45});c.name='Aspirateur 2000 W'}};
/* ---- Résistance des câbles (v3.10.0) : w.res = {m:'cu'|'al', s:mm², l:m} ; absent = câble idéal (5 mΩ) ---- */
const WSECS=[0.75,1,1.5,2.5,4,6,10,16,25,35],WRHO={cu:0.0172,al:0.028},WADM={0.75:6,1:10,1.5:16,2.5:20,4:25,6:32,10:40,16:63,25:80,35:100};
const wRes=w=>w&&w.res&&!w.coax&&!w.pair?w.res:null;
function wR(w){const r=wRes(w);return r?Math.max(1e-4,WRHO[r.m==='al'?'al':'cu']*Math.max(0,+r.l||0)/(+r.s||1.5)):0.005}
const wAdm=w=>{const r=wRes(w);return r?(WADM[r.s]||16)*(r.m==='al'?.8:1):0};
const wOver=w=>{const a=wAdm(w);return a>0&&w.Iw!==undefined&&w.Iw>a*1.0001};
const wKey=w=>[w.a,w.b,wRes(w)?[w.res.m,w.res.s,w.res.l]:0];
const fR=r=>r<1?(r*1000).toPrecision(3)+' mΩ':r.toPrecision(3)+' Ω';
function wInfo(w){const r=wRes(w);if(!r)return'';const R=wR(w);let h=`R = <b>${fR(R)}</b> (${r.m==='al'?'alu':'cuivre'} ${r.s} mm² · ${r.l} m)`;
 if(w.Iw!==undefined){const I=w.Iw;h+=` · I = ${I.toPrecision(3)} A · chute de tension <b>${(R*I).toPrecision(3)} V</b> · pertes ${(R*I*I).toPrecision(3)} W`;if(wOver(w))h+=`<br><b style="color:#d32f2f">⚠ Surcharge : ${I.toPrecision(3)} A pour ${wAdm(w).toPrecision(3)} A admissibles (valeur indicative)</b>`}else h+=' · courant non disponible';return h}
const selMulti=new Set();
const TSKIP=new Set(['prg','plM','plS','plV','plA','plI','plAIv','plOn','plE','plC','plP','plPP','plB','plI0','plQ0','plA0','plO0','plN','E','eacc','cwp','Iw','acc','mth','mvd','posm','refs','t0c','tx','gin','smon','Uo','Io','shunt','lh','lv','lst','rgs','zs','zt','zm','kst','mi1','mi2','mon','mst','arm','afq','acr','nv','nw','nt','ng','cc','cc2','U2','I2','det','tsA','iph','x','y','v1','v2','cp1','cp2','on1','on2','trig','pos1','pos2','cur','cch','xy','u','tgt','tv','cl','sig','tr','ws','U','I','P','Q','Ur','Ir','Ua','Ia','rps','rpm','mode','disp','rev','rng','ana','bbp']);
function gaussR(A,b,S){for(let c=0;c<S;c++){let p=c,m=Math.abs(A[c][c]);for(let r=c+1;r<S;r++){const v=Math.abs(A[r][c]);if(v>m){m=v;p=r}}if(m<1e-30)return null;if(p!==c){const t=A[c];A[c]=A[p];A[p]=t;const u=b[c];b[c]=b[p];b[p]=u}
  const d=A[c][c];for(let r=c+1;r<S;r++){const k=A[r][c]/d;if(k){for(let j=c;j<S;j++)A[r][j]-=k*A[c][j];b[r]-=k*b[c]}}}
 const x=new Float64Array(S);for(let i=S-1;i>=0;i--){let s=b[i];for(let j=i+1;j<S;j++)s-=A[i][j]*x[j];x[i]=s/A[i][i]}return x}
const micA=(mk,t)=>mk.lv()*Math.sin(2*Math.PI*(mk.f===null?mk.fn():mk.f)*t+mk.p0);
function fetEval(e,vgs,vds){const vov=vgs-e.vt,K=e.k,l=e.lam;if(vov<=0)return[0,0,0];if(vds<vov){const q=2*vov*vds-vds*vds,m=1+l*vds;return[K*q*m,2*K*vds*m,2*K*(vov-vds)*m+K*q*l]}const m=1+l*vds;return[K*vov*vov*m,2*K*vov*m,K*vov*vov*l]}
function tranModel(){const par={},f=k=>{if(par[k]===undefined)par[k]=k;return par[k]===k?k:(par[k]=f(par[k]))},EL=[],VS=[],unsup=new Set();
 comps.forEach(c=>{if(c.type!=='bread')geo(c).t.forEach((_,i)=>f(c.id+':'+i))});wires.forEach(w=>{try{if(tp(w.a)&&tp(w.b)){if(wRes(w))EL.push({t:'R',a:w.a,b:w.b,r:wR(w)});else par[f(w.a)]=f(w.b)}}catch(e){}});bridges().forEach(([a,b])=>{par[f(a)]=f(b)});
 comps.forEach(c=>{if(c.type==='scope')par[f(c.id+':0')]=f(c.id+':2');if(c.type==='dmm')par[f(c.id+':3')]=f(c.id+':2');if(c.type==='amp'&&c.ana)par[f(c.id+':2')]=f(c.id+':1')});
 const addV=(p,n,fn,lim,cid,ch)=>{const e={t:'V',p,n,f:fn,k:VS.length,lim,cid,ch};VS.push(e);EL.push(e)};
 comps.forEach(c=>{const k=i=>c.id+':'+i,R=(a,b,r)=>EL.push({t:'R',a,b,r});
  switch(c.type){
   case'rel':R(k(0),k(1),Math.max(c.rc,1));R(k(2),k(c.on?3:4),5e-3);break;case'ctc':R(k(0),k(1),Math.max(c.rc,1));if(c.on){R(k(2),k(3),5e-3);R(k(4),k(5),5e-3)}break;
   case'res':R(k(0),k(1),Rv(c));break;case'bulb':R(k(0),k(1),c.un*c.un/c.val);break;
   case'led':case'cfl':{R(k(0),k(1),c.un*c.un/c.pn);const Q=c.pn*Math.tan(Math.acos(Math.min(1,Math.max(.05,c.cosphi))));if(Q>0)EL.push({t:'C',a:k(0),b:k(1),c:Q/(2*Math.PI*50*c.un*c.un)});break}
   case'dec':{const v=decVal(c),kd=c.dkind||'R';if(kd==='R')R(k(0),k(1),Math.max(v,1e-3));else if(kd==='C'){if(v>0)EL.push({t:'C',a:k(0),b:k(1),c:v*1e-6})}else EL.push({t:'L',a:k(0),b:k(1),l:Math.max(v,1e-3)*1e-3,r:1e-3});break}
   case'cap':EL.push({t:'C',a:k(0),b:k(1),c:c.val*1e-6});break;case'ind':EL.push({t:'L',a:k(0),b:k(1),l:c.val*1e-3,r:c.r});break;
   case'sw':if(c.closed)R(k(0),k(1),1e-3);break;case'com':R(k(1),k(c.pos?2:0),1e-3);break;case'amp':if(!fuseBlown(c))R(k(0),k(1),1e-3);break;case'cem':R(k(0),k(1),1e-3);R(k(2),k(3),1e-3);break;case'cet':R(k(0),k(1),1e-3);R(k(2),k(3),1e-3);R(k(4),k(5),1e-3);R(k(6),k(7),1e-3);break;case'cwm':[0,1].forEach(j=>{if(j===(c.cwp?1:0)){R(k(2*j),k(6),5e-3);R(k(7),k(2*j+1),5e-3)}else R(k(2*j),k(2*j+1),5e-3)});R(k(4),k(5),5e-3);R(k(4),k(8),5e-3);break;case'volt':R(k(0),k(1),1e7);break;case'dmm':if(c.fn==='I'){if(!fuseBlown(c))R(k(0),k(2),1e-3)}else if(c.fn==='V')R(k(0),k(1),1e7);break;
   case'bat':addV(k(1),k(0),()=>c.val,c.il>0?c.il:10,c.id,1);break;case'bat2':addV(k(1),k(0),()=>c.val,c.il>0?c.il:10,c.id,1);addV(k(3),k(2),()=>c.val2,c.il2>0?c.il2:10,c.id,2);break;case'ac':addV(k(1),k(0),t=>Math.SQRT2*c.val*Math.cos(2*Math.PI*c.f*t));break;
   case'gbf':addV(k(1),k(0),t=>gbfWave(c,t));break;
   case'a3':[0,-120,120].forEach((d,i)=>addV(k(i+1),k(0),t=>Math.SQRT2*c.val/Math.sqrt(3)*Math.cos(2*Math.PI*c.f*t+d*Math.PI/180)));break;
   case'cch':if(c.val>0){if(c.cm==='tri'){const r=3*c.un*c.un/c.val;R(k(2),k(3),r);R(k(3),k(4),r);R(k(4),k(2),r)}else R(k(0),k(1),c.un*c.un/c.val)}break;
   case'bb':bbP(c).els.forEach(e=>{if(e.n){const N=e.n.map(x=>bbKey(c,x));N.forEach(x=>f(x));
     if(e.t==='D')EL.push({t:'D',a:N[0],b:N[1],v0:e.v0,rd:e.rd,vz:e.vz,rz:e.rz,emit:false,px:c.x,py:c.y});
     else if(e.t==='Q')EL.push({t:'BJ',b:N[0],c:N[1],e:N[2],s:e.s,beta:Math.max(5,e.beta),vsat:e.pw?.5:.15,rsat:e.pw?.05:1,rb:e.pw?2:12,von:e.pw?.85:.65});
     else if(e.t==='M'){EL.push({t:'FT',g:N[0],d:N[1],s:N[2],pol:e.pol,vt:e.vt,k:Math.max(1e-6,e.kp),lam:.02});EL.push(e.fk==='gan'?{t:'D',a:N[2],b:N[1],v0:1.8,rd:.02,vz:0,rz:10}:e.fk==='hemt'?{t:'D',a:N[0],b:N[2],v0:.6,rd:5,vz:0,rz:10}:e.pol>0?{t:'D',a:N[2],b:N[1],v0:.7,rd:e.pw?.01:1,vz:0,rz:10}:{t:'D',a:N[1],b:N[2],v0:.7,rd:e.pw?.01:1,vz:0,rz:10})}
     else if(e.t==='T')EL.push({t:'TR',a:N[0],b:N[1],g:N[2],rg:80,igt:e.igt,ih:e.ih,vt:1.2,rt:.04,mode:'g'});
     else if(e.t==='U')EL.push({t:'RG',i:N[0],o:N[1],g:N[2],un:e.un,vd:e.vd,im:e.im});
     else if(e.t==='A')EL.push({t:'AO',p:N[0],n:N[1],o:N[2],vp:N[3],vn:N[4],vm:e.vm});
     else if(e.t==='K')EL.push({t:'CP',p:N[0],n:N[1],o:N[2],vp:N[3],vn:N[4],vm:e.vm,oc:e.oc});
     else if(e.t==='O'){const led={t:'D',a:N[0],b:N[1],v0:1.15,rd:20,vz:0,rz:10};EL.push(led);EL.push({t:'TR',a:N[2],b:N[3],g:null,led,ift:e.ift,zc:e.zc,ih:.001,vt:1.3,rt:5,mode:'o'})}
     else if(e.t==='N'){const dn=bbKey(c,'d555'+(e.n.join('')));f(dn);EL.push({t:'T5',g:N[0],trg:N[1],o:N[2],rst:N[3],ct:N[4],thr:N[5],dis:N[6],vcc:N[7],d1:dn})}return}
    const a=bbKey(c,e.a),b=bbKey(c,e.b);f(a);f(b);if(e.t==='G'){const g=e.g;addV(a,b,t=>gbfWave(g,t))}else if(e.t==='V'){const w=2*Math.PI*e.fq,v=e.v,ph=e.ph*Math.PI/180;addV(a,b,e.ac?t=>Math.SQRT2*v*Math.cos(w*t+ph):()=>v)}else if(e.t==='R')R(a,b,e.v);else if(e.t==='C')EL.push({t:'C',a,b,c:e.v});else if(e.t==='L')EL.push({t:'L',a,b,l:e.v,r:1e-3});
    else{const cp=bbKey(c,e.c),cm=bbKey(c,e.d);f(cp);f(cm);const q={t:'E',p:a,n:b,cp,cm,g:e.v,k:VS.length};VS.push(q);EL.push(q)}});break;
   case'scope':R(k(1),k(0),1e6);R(k(3),k(2),1e6);break;
   case'ne555':{const d=c.id+'#d';f(d);EL.push({t:'T5',g:k(0),trg:k(1),o:k(2),rst:k(3),ct:k(4),thr:k(5),dis:k(6),vcc:k(7),d1:d});break}
   case'aop':EL.push({t:'AO',p:k(2),n:k(1),o:k(5),vp:k(6),vn:k(3),vm:c.vm});break;
   case'cmp':EL.push({t:'CP',p:k(1),n:k(2),o:k(6),vp:k(7),vn:k(3),vm:c.vm,oc:c.oc});break;
   case'dio':case'dled':{const m=dmod(c);EL.push({t:'D',a:k(0),b:k(1),v0:m.v0,rd:m.rd,vz:m.vz,rz:m.rz,emit:c.type==='dled'&&c.lc==='ir',px:c.x,py:c.y});break}
   case'ldr':R(k(0),k(1),ldrR(c));break;
   case'irrx':EL.push({t:'PT',c:k(0),e:k(1),cid:c.id,px:c.x,py:c.y,blk:c.blk,amb:c.amb||0,src:[]});break;case'tsop':EL.push({t:'TS',o:k(0),g:k(1),vcc:k(2),cid:c.id,px:c.x,py:c.y,blk:c.blk,fc:Math.max(1000,c.fc||38000),amb:c.amb||0,src:[]});break;
   case'hcsr':EL.push({t:'US',vcc:k(0),trg:k(1),o:k(2),g:k(3),dist:c.dist,cid:c.id});break;
   case'pot':{const x=Math.min(.999,Math.max(.001,c.pos));R(k(0),k(1),c.val*x);R(k(1),k(2),c.val*(1-x));break}
   case'pb':if(c.closed)R(k(0),k(1),1e-3);break;
   case'uno':{par[f(k(23))]=f(k(22));addV(k(20),k(22),()=>5);addV(k(21),k(22),()=>3.3);EL.push({t:'MCU',cid:c.id,pin:Array.from({length:20},(_,i)=>k(i)),vcc:k(20),g:k(22),eng:engOf(c)});break}
   case'bjt':{const pw=!!c.pw;EL.push({t:'BJ',b:k(0),c:k(1),e:k(2),s:c.kd==='pnp'?-1:1,beta:Math.max(5,+c.beta||100),vsat:pw?.5:.15,rsat:pw?.05:1,rb:pw?2:12,von:pw?.85:.65,cid:c.id});break}
   case'fet':{const fk=c.fk||'nmos',pol=fk==='pmos'?-1:1,rdb=c.pw?.01:1;EL.push({t:'FT',g:k(0),d:k(1),s:k(2),pol,vt:+c.vt,k:Math.max(1e-6,+c.kp||.05),lam:.02,cid:c.id});
    if(fk==='nmos')EL.push({t:'D',a:k(2),b:k(1),v0:.7,rd:rdb,vz:0,rz:10});else if(fk==='pmos')EL.push({t:'D',a:k(1),b:k(2),v0:.7,rd:rdb,vz:0,rz:10});else if(fk==='gan')EL.push({t:'D',a:k(2),b:k(1),v0:1.8,rd:.02,vz:0,rz:10});else EL.push({t:'D',a:k(0),b:k(2),v0:.6,rd:5,vz:0,rz:10});break}
   case'triac':EL.push({t:'TR',a:k(1),b:k(0),g:k(2),rg:80,igt:+c.igt||.025,ih:+c.ih||.03,vt:1.2,rt:.04,mode:'g',cid:c.id});break;
   case'otri':{const led={t:'D',a:k(0),b:k(1),v0:1.15,rd:20,vz:0,rz:10};EL.push(led);EL.push({t:'TR',a:k(3),b:k(2),g:null,led,ift:+c.ift||.015,zc:!!c.zc,ih:.001,vt:1.3,rt:5,mode:'o',cid:c.id});break}
   case'reg':EL.push({t:'RG',i:k(0),o:k(1),g:k(2),un:Math.max(1.25,+c.ur||5),vd:+c.rvd||2,im:Math.max(.05,+c.rim||1.5),cid:c.id});break;
   case'spk':{const m=c.id+'#m';f(m);const L={t:'L',a:m,b:k(1),l:5e-4,r:.01};EL.push({t:'R',a:k(0),b:m,r:Math.max(1,+c.re||8)});EL.push(L);EL.push({t:'SP',L,cid:c.id});break}
   case'mic':{const mk={t:'MK',p0:0,f:null,cid:c.id,fn:()=>c.mr&&c.rl>.02?c.rf:c.mf,lv:()=>c.mr?(c.rl||0):c.ma};EL.push(mk);if(c.mk==='ele')EL.push({t:'CS',a:k(0),b:k(1),i0:5e-4,mk});else{const m=c.id+'#m';f(m);addV(m,k(1),t=>.02*micA(mk,t));R(m,k(0),600)}break}
   case'plc':R(k(0),k(1),c.sup==='230'?17600:192);for(let j=0;j<8;j++)R(k(2+j),k(1),c.sup==='230'?68000:4700);for(let j=0;j<4;j++)R(k(10+2*j),k(11+2*j),(c.plQ||[])[j]?5e-3:1e9);break;
   case'plct':{const B=plcBase(c);for(let j=0;j<6;j++)R(k(1+j),k(0),B&&B.sup==='230'?68000:4700);for(let j=0;j<4;j++)R(k(7+2*j),k(8+2*j),(c.plQ||[])[j]?5e-3:1e9);break}
   case'plca':R(k(1),k(0),1e5);R(k(2),k(0),1e5);R(k(5),k(0),5e-3);{const B=plcBase(c);[0,1].forEach(j=>addV(k(3+j),k(5),()=>B&&B.plOn?(c.plAO||[0,0])[j]:0))}break;
   case'four':if(c.hon)R(k(0),k(1),c.un*c.un/c.pn);break;case'enc':R(k(0),k(1),c.un*c.un/c.pn);addV(k(2),k(3),()=>.01*(c.Tq===undefined?thOf(c).Ts:c.Tq));break;case'rtor':case'rpid':R(k(0),k(1),1e7);if(c.ron)R(k(2),k(3),5e-3);break;
   case'tr1':case'tr3':{const P=trP(c);P.W.forEach(W=>{[W.a1,W.b1,W.a2,W.b2].forEach(f);EL.push({t:'TX',a1:W.a1,b1:W.b1,a2:W.a2,b2:W.b2,p:P,cid:c.id});if(P.Rfe<1e11)R(W.a1,W.b1,P.Rfe)});break}
   case'smps':{const sm={t:'SM',a:k(0),b:k(1),g:c.gin>0?c.gin:(c.pmax/Math.max(.05,c.eta||.88))/52900,act:true,c,cid:c.id};EL.push(sm);addV(k(2),k(3),()=>sm.act?c.val:0,Math.max(.05,c.pmax/Math.max(c.val,.1)),c.id,1);break}
   case'tach':case'cpm':case'lev':case'bread':break;default:unsup.add(INFO[c.type].n)}});
 EL.filter(e=>e.t==='PT'||e.t==='TS').forEach(p=>{p.src=EL.filter(q=>q.t==='D'&&q.emit).map(q=>({el:q,k:.05/(1+Math.pow(Math.hypot(q.px-p.px,q.py-p.py)/250,2))*(p.blk?.02:1)}))});
 const gs=comps.find(c=>['bat','bat2','ac','gbf','a3'].includes(c.type))||comps.find(c=>c.type==='uno'),g=f(gs?gs.id+':0':bbGnd()||comps[0].id+':0'),map={};let n=0;Object.keys(par).forEach(k=>{const r=f(k);if(r!==g&&map[r]===undefined)map[r]=n++});
 return{EL,VS,n,ix:k=>{const r=f(k);return r===g?-1:map[r]},unsup:[...unsup]}}
function tranCore(M){let dt=1e-6,ts=0,rc=true;const n=M.n,S=n+M.VS.length,E=M.EL,ix=M.ix,x=new Float64Array(S),A=Array.from({length:S},()=>new Float64Array(S)),b=new Float64Array(S);
 const V=k=>{const i=ix(k);return i<0?0:x[i]},Gs=(a,c,g)=>{const i=ix(a),j=ix(c);if(i>=0)A[i][i]+=g;if(j>=0)A[j][j]+=g;if(i>=0&&j>=0){A[i][j]-=g;A[j][i]-=g}},Ib=(a,v)=>{const i=ix(a);if(i>=0)b[i]+=v},Gt=(a1,b1,a2,b2,g11,g12,g22)=>{const P1=[[a1,1],[b1,-1]],P2=[[a2,1],[b2,-1]];[[P1,P1,g11],[P1,P2,g12],[P2,P1,g12],[P2,P2,g22]].forEach(([Rr,C,y])=>Rr.forEach(([r,sg])=>C.forEach(([kk,t])=>{const i=ix(r),j=ix(kk);if(i>=0&&j>=0)A[i][j]+=sg*t*y})))};
 E.forEach(e=>{e.vc=0;e.ip=0;e.st=e.t==='CP'?-1:0;e.q=0;e.ie=0;e.ph=0;e.sm=0;e.cnt=0;e.busy=false;e.prev=false;e.tR=Infinity;e.tF=0;e.uv=0;e.tp=0;e.cc=0;e.za1=0;e.zb1=0;e.za2=0;e.zb2=0;e.det=0;e.pp=0;e.wk=0;e.amp=0;e.sI=0;e.sU=0;e.sn=0;e.f1=0;e.f2=0;e.fo=0;e.lg=0;e.ld=.1;e.sw=0;e.on=false;e.sg=1;e.per=0;e.tl=0;e.hi=0;e.pk=0;e.mn=0;e.io=0;e.ue=0;e.i1=0;e.i2=0;e.sx=null});
 const step=(t,dtv)=>{dt=dtv;ts=t-dtv;let xn=null;
  for(let it=0;it<40;it++){for(let i=0;i<S;i++){A[i].fill(0);b[i]=0}for(let i=0;i<n;i++)A[i][i]+=1e-12;
   for(const e of E){switch(e.t){
    case'R':Gs(e.a,e.b,1/e.r);break;
    case'C':{const gc=e.c/dt;Gs(e.a,e.b,gc);Ib(e.a,gc*e.vc);Ib(e.b,-gc*e.vc);break}
    case'L':{const gl=1/(e.r+e.l/dt),ih=e.l/dt*gl*e.ip;Gs(e.a,e.b,gl);Ib(e.a,-ih);Ib(e.b,ih);break}
    case'V':{const r=n+e.k,p=ix(e.p),q=ix(e.n);if(p>=0){A[p][r]+=1;A[r][p]+=1}if(q>=0){A[q][r]-=1;A[r][q]-=1}b[r]=e.f(t);if(e.cc){A[r].fill(0);A[r][r]=1;b[r]=-e.lim}break}
    case'E':{const r=n+e.k,p=ix(e.p),q=ix(e.n),a=ix(e.cp),c=ix(e.cm);if(p>=0){A[p][r]+=1;A[r][p]+=1}if(q>=0){A[q][r]-=1;A[r][q]-=1}if(a>=0)A[r][a]-=e.g;if(c>=0)A[r][c]+=e.g;break}
    case'AO':case'CP':{const o=ix(e.o),p=ix(e.p),q=ix(e.n);let vh=V(e.vp)-e.vm,vl=V(e.vn)+(e.t==='CP'?.1:e.vm);if(vh<=vl)vh=vl=(V(e.vp)+V(e.vn))/2;const go=1/75;
     if(e.t==='AO'){if(o>=0){A[o][o]+=go;if(e.st===0){if(p>=0)A[o][p]-=go*1e5;if(q>=0)A[o][q]+=go*1e5}else b[o]+=go*(e.st>0?vh:vl)}Gs(e.vp,e.vn,1/3000)}
     else{if(e.oc){if(e.st<0)Gs(e.o,e.vn,go)}else if(o>=0){A[o][o]+=go;b[o]+=go*(e.st>0?vh:vl)}Gs(e.vp,e.vn,1/3000)}break}
    case'D':{if(e.st===1){const g=1/e.rd;Gs(e.a,e.b,g);Ib(e.a,g*e.v0);Ib(e.b,-g*e.v0)}else if(e.st===2){const g=1/e.rz;Gs(e.a,e.b,g);Ib(e.a,-g*e.vz);Ib(e.b,g*e.vz)}else Gs(e.a,e.b,1e-9);break}
    case'PT':{let I=e.amb*2e-5*(1+.3*Math.cos(628.3185*t));for(const q of e.src)I+=q.k*q.el.ie;e.ph=I;if(e.st===1&&I>0)Gs(e.c,e.e,I/.2);else{Gs(e.c,e.e,1e-9);Ib(e.c,-I);Ib(e.e,I)}break}
    case'TS':{const on=V(e.vcc)-V(e.g)>2.4;Gs(e.vcc,e.g,1/12000);if(on){Gs(e.vcc,e.o,1/30000);if(e.det)Gs(e.o,e.g,1/80)}break}
    case'MCU':{const en=e.eng;for(let p=0;p<20;p++){const d=en?en.drv(p,ts):0,k=e.pin[p];if(d===1)Gs(k,e.vcc,1/25);else if(d===2)Gs(k,e.g,1/25);else if(d===3)Gs(k,e.vcc,1/35000);else Gs(k,e.g,1e-9)}break}
    case'US':{Gs(e.vcc,e.g,.003);Gs(e.trg,e.g,1e-5);if(e.busy)Gs(e.o,e.vcc,.01);else Gs(e.o,e.g,.01);break}
    case'BJ':{const a=e.s>0?e.b:e.e,bb=e.s>0?e.e:e.b,cp=e.s>0?e.c:e.e,cn=e.s>0?e.e:e.c;
     if(e.st===0){Gs(a,bb,1e-9);Gs(cp,cn,1e-9)}
     else{const g=1/e.rb;Gs(a,bb,g);Ib(a,g*e.von);Ib(bb,-g*e.von);
      if(e.st===1){const bg=e.beta*g,ic=ix(cp),jc=ix(cn),ia=ix(a),ib=ix(bb);if(ic>=0){if(ia>=0)A[ic][ia]+=bg;if(ib>=0)A[ic][ib]-=bg;b[ic]+=bg*e.von}if(jc>=0){if(ia>=0)A[jc][ia]-=bg;if(ib>=0)A[jc][ib]+=bg;b[jc]-=bg*e.von}Gs(cp,cn,1e-5)}
      else{const gs=1/e.rsat;Gs(cp,cn,gs);Ib(cp,gs*e.vsat);Ib(cn,-gs*e.vsat)}}break}
    case'FT':{const dn=e.sw?e.s:e.d,sn=e.sw?e.d:e.s,vd=Math.max(0,e.ld),r=fetEval(e,e.lg,vd),gm=r[1],gds=r[2]+1e-9,Ieq=r[0]-r[1]*e.lg-r[2]*vd,id=ix(dn),is=ix(sn),ig=ix(e.g);
     if(id>=0){if(ig>=0)A[id][ig]+=gm;A[id][id]+=gds;if(is>=0)A[id][is]-=gm+gds;b[id]-=e.pol*Ieq}
     if(is>=0){if(ig>=0)A[is][ig]-=gm;A[is][is]+=gm+gds;if(id>=0)A[is][id]-=gds;b[is]+=e.pol*Ieq}break}
    case'TR':{if(e.g)Gs(e.g,e.b,1/e.rg);if(e.on){const g=1/e.rt;Gs(e.a,e.b,g);Ib(e.a,g*e.sg*e.vt);Ib(e.b,-g*e.sg*e.vt)}else Gs(e.a,e.b,1e-9);break}
    case'RG':{const G=50;if(e.st===1){Gs(e.o,e.g,G);Ib(e.o,G*e.ue);Ib(e.g,-G*e.ue)}else if(e.st===2){Ib(e.o,e.im);Ib(e.g,-e.im);Gs(e.o,e.g,1e-6)}else Gs(e.o,e.g,1e-9);Ib(e.i,-e.io);Ib(e.g,e.io);Gs(e.i,e.g,1e-9);break}
    case'MK':case'SP':break;
    case'TX':{const p=e.p,k=1/dt,z11=p.R1+p.L1*k,z12=p.M*k,z22=p.R2+p.L2*k,d=z11*z22-z12*z12,g11=z22/d,g22=z11/d,g12=-z12/d,h1=p.L1*k*e.i1+p.M*k*e.i2,h2=p.M*k*e.i1+p.L2*k*e.i2,ih1=g11*h1+g12*h2,ih2=g12*h1+g22*h2;
     Gt(e.a1,e.b1,e.a2,e.b2,g11,g12,g22);Ib(e.a1,-ih1);Ib(e.b1,ih1);Ib(e.a2,-ih2);Ib(e.b2,ih2);break}
    case'SM':Gs(e.a,e.b,e.g);break;
    case'CS':{const I=e.i0*(1+.2*micA(e.mk,t));if(e.st===1){Ib(e.a,-I);Ib(e.b,I)}else Gs(e.a,e.b,I/.9);break}
    case'T5':{Gs(e.vcc,e.ct,1/5000);Gs(e.ct,e.d1,1/5000);Gs(e.d1,e.g,1/5000);Gs(e.vcc,e.g,1/2700);
     if(e.q){Gs(e.o,e.vcc,1/30);Ib(e.o,-1.7/30);Ib(e.vcc,1.7/30)}else{Gs(e.o,e.g,1/15);Gs(e.dis,e.g,1/15)}break}
   }}
   xn=gaussR(A,b.slice(),S);if(!xn)return false;for(let i=0;i<S;i++)x[i]=xn[i];
   let chg=false;for(const e of E){if(e.t==='AO'){let vh=V(e.vp)-e.vm,vl=V(e.vn)+e.vm;if(vh<=vl)vh=vl=(V(e.vp)+V(e.vn))/2;const lin=1e5*(V(e.p)-V(e.n)),ns=lin>vh?1:lin<vl?-1:0;if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='CP'){const d=V(e.p)-V(e.n),ns=d>1e-3?1:d<-1e-3?-1:e.st;if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='D'){const v=V(e.a)-V(e.b),ns=v>e.v0?1:(e.vz&&v<-e.vz)?2:0;if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='PT'){const ns=(V(e.c)-V(e.e)<.2&&e.ph>0)?1:0;if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='BJ'){const a=e.s>0?e.b:e.e,bb=e.s>0?e.e:e.b,cp=e.s>0?e.c:e.e,cn=e.s>0?e.e:e.c,ib=(V(a)-V(bb)-e.von)/e.rb,vce=V(cp)-V(cn);let ns=e.st;
     if(e.st===0){if(ib>0)ns=1}else if(e.st===1){if(ib<=0)ns=0;else if(vce<e.vsat)ns=2}else{if(ib<=0)ns=0;else if((vce-e.vsat)/e.rsat>e.beta*ib)ns=1}
     if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='RG'){const G=50,vo=V(e.o)-V(e.g),tg=Math.min(e.un,Math.max(0,V(e.i)-V(e.g)-e.vd));if(Math.abs(tg-e.ue)>1e-4){e.ue=tg;chg=true}
     const iot=e.st===1?G*(e.ue-vo):e.st===2?e.im:0;let ns=e.st;
     if(e.st===0){if(e.ue>0&&vo<e.ue-1e-6)ns=1}else if(e.st===1){if(iot<0)ns=0;else if(iot>e.im)ns=2}else if(vo>e.ue-e.im/G)ns=1;
     if(ns!==e.st){e.st=ns;chg=true}
     if(Math.abs(iot-e.io)>1e-6+1e-4*Math.abs(iot)){e.io=iot;chg=true}}
    else if(e.t==='CS'){const ns=(V(e.a)-V(e.b))>.9?1:0;if(ns!==e.st){e.st=ns;chg=true}}
    else if(e.t==='FT'){const p=e.pol,vg=V(e.g),vd=V(e.d),vs=V(e.s),sw=p*(vd-vs)<0?1:0,ng=sw?p*(vg-vd):p*(vg-vs),nd=sw?p*(vs-vd):p*(vd-vs),dg=ng-e.lg,dd=nd-e.ld;
     e.lg+=Math.max(-.8,Math.min(.8,dg));e.ld+=Math.max(-2,Math.min(2,dd));if(Math.abs(dg)>3e-4||Math.abs(dd)>3e-4||sw!==e.sw){chg=true}e.sw=sw}}
   if(!chg)for(const e of E)if(e.t==='V'&&e.lim>0){const ir=x[n+e.k],vo=V(e.p)-V(e.n);let ns=e.cc;if(!e.cc&&-ir>e.lim*(1+1e-9)+1e-12)ns=1;else if(e.cc&&vo>=e.f(t)-1e-9)ns=0;if(ns!==e.cc){e.cc=ns;chg=true}}
   if(!chg)break}
  const al=Math.min(1,dtv/(M.tauE||.02)),ema=(e,i1,i2,o)=>{e.f1+=(i1-e.f1)*al;e.f2+=(i2-e.f2)*al;e.fo+=(o-e.fo)*al};
  for(const e of E){if(e.t==='BJ'){const a=e.s>0?e.b:e.e,bb=e.s>0?e.e:e.b,cp=e.s>0?e.c:e.e,cn=e.s>0?e.e:e.c,ib=e.st?Math.max(0,(V(a)-V(bb)-e.von)/e.rb):0,ic=e.st===1?e.beta*ib:e.st===2?Math.max(0,(V(cp)-V(cn)-e.vsat)/e.rsat):0;ema(e,ic,ib,e.st)}
   else if(e.t==='FT'){const r=fetEval(e,e.lg,Math.max(0,e.ld));ema(e,r[0],0,r[0]>0?1:0)}
   else if(e.t==='TR'){const va=V(e.a)-V(e.b);let i=e.on?(va-e.sg*e.vt)/e.rt:0;if(e.on&&e.sg*i<e.ih){e.on=false;i=0}
    const ig=e.mode==='g'?Math.abs(V(e.g)-V(e.b))/e.rg:Math.max(0,dcur(e.led,V(e.led.a)-V(e.led.b)));
    if(!e.on&&ig>=(e.mode==='g'?e.igt:e.ift)&&(e.mode==='g'||!e.zc||Math.abs(va)<20)&&Math.abs(va)>e.vt+e.ih*e.rt+.05){e.on=true;e.sg=va>0?1:-1;i=(va-e.sg*e.vt)/e.rt}
    ema(e,Math.abs(i),ig,e.on?1:0)}
   else if(e.t==='MK'){const fn=e.fn();if(e.f===null)e.f=fn;else if(Math.abs(fn-e.f)>1e-9){e.p0+=2*Math.PI*(e.f-fn)*t;e.f=fn}}
   if(e.t==='D'&&e.emit)e.ie=Math.max(0,dcur(e,V(e.a)-V(e.b)));
   if(e.t==='PT'&&rc){e.sm+=e.ph;e.cnt++}
   if(e.t==='V'&&rc&&e.cid){e.sI-=x[n+e.k];e.sU+=V(e.p)-V(e.n);e.sn++}
   if(e.t==='US'){const pw=V(e.vcc)-V(e.g)>4,vt=V(e.trg)-V(e.g),tg=pw&&vt>2;if(e.prev&&!tg&&pw&&!(t<e.tF)){const f=Math.abs(e.uv-vt)<1e-12?1:Math.min(1,Math.max(0,(e.uv-2)/(e.uv-vt)));e.tR=e.tp+f*(t-e.tp)+2e-4;e.tF=e.tR+2*e.dist/34300}
    const bz=t>=e.tR-1e-12&&t<e.tF-1e-12;if(bz!==e.busy){e.busy=bz;if(M.hook)M.hook(e,t)}e.prev=tg;e.uv=vt;e.tp=t}
   if(e.t==='TX'){const p=e.p,k=1/dt,z11=p.R1+p.L1*k,z12=p.M*k,z22=p.R2+p.L2*k,d=z11*z22-z12*z12,g11=z22/d,g22=z11/d,g12=-z12/d,h1=p.L1*k*e.i1+p.M*k*e.i2,h2=p.M*k*e.i1+p.L2*k*e.i2,v1=V(e.a1)-V(e.b1),v2=V(e.a2)-V(e.b2),
     i1=g11*(v1+h1)+g12*(v2+h2),i2=g12*(v1+h1)+g22*(v2+h2);
    if(rc){const q=e.sx||(e.sx={n:0,v1:0,v2:0,i1:0,i2:0,it:0,p1:0,p2:0,im:0}),it=i1+v1/p.Rfe,im=i1+p.m*i2;q.n++;q.v1+=v1*v1;q.v2+=v2*v2;q.i1+=i1*i1;q.i2+=i2*i2;q.it+=it*it;q.p1+=v1*it;q.p2-=v2*i2;q.im+=im*im}
    e.i1=i1;e.i2=i2}
   if(e.t==='C')e.vc=V(e.a)-V(e.b);else if(e.t==='L'){const gl=1/(e.r+e.l/dt),ih=e.l/dt*gl*e.ip;e.ip=gl*(V(e.a)-V(e.b))+ih}
   else if(e.t==='T5'){const rl=V(e.rst)-V(e.g)<.7,tl=V(e.trg)<V(e.d1),th=V(e.thr)>V(e.ct);e.q=rl?0:tl?1:th?0:e.q}}
  for(const e of E){if(e.t!=='SP')continue;const i=e.L.ip,tau=M.tauE||.02,a1=Math.min(1,dtv/tau),a2=Math.min(1,dtv/(4*tau));e.f1+=(i*i-e.f1)*a1;e.mn+=(i-e.mn)*a2;const dv=i-e.mn,h=.25*Math.sqrt(Math.max(0,e.f1));e.pk=Math.max(Math.abs(dv),e.pk*Math.exp(-dtv/(10*tau)));
   if(!e.hi&&dv>h&&h>1e-9){e.hi=1;if(e.tl>0&&t-e.tl<.5){const per=t-e.tl;e.per=e.per?e.per*.6+per*.4:per}e.tl=t}else if(e.hi&&dv<-h)e.hi=0;if(e.tl>0&&t-e.tl>.3)e.per=0}
  for(const e of E){if(e.t!=='TS')continue;const on=V(e.vcc)-V(e.g)>2.4;
   let ph=e.amb*2e-5*(1+.3*Math.cos(628.3185*t));for(const q of e.src)ph+=q.k*q.el.ie;
   if(!on){e.za1=e.zb1=e.za2=e.zb2=0;e.det=0;e.amp=0;e.pp=ph;continue}
   const tau=6/e.fc;
   if(dt>.25/e.fc){const d=Math.exp(-dt/tau);e.za1*=d;e.zb1*=d;e.za2*=d;e.zb2*=d}
   else{const w=6.283185307*e.fc*t,al=1-Math.exp(-dt/tau);e.za1+=(2*ph*Math.cos(w)-e.za1)*al;e.zb1+=(2*ph*Math.sin(w)-e.zb1)*al;e.za2+=(e.za1-e.za2)*al;e.zb2+=(e.zb1-e.zb2)*al}
   if(Math.abs(ph-e.pp)>1e-7)e.wk=t+30/e.fc;e.pp=ph;
   const A=Math.hypot(e.za2,e.zb2),th=25e-6*(1+2*e.amb/100);if(!e.det&&A>th)e.det=1;else if(e.det&&A<.5*th)e.det=0;e.amp=A}
  return true};
 return{x,n,V,E,step,ix,rec:v=>{rc=v}}}
function devStats(M){const o={},tx={};for(const e of M.EL){if(!e.cid)continue;if(e.t==='TX'&&e.sx&&e.sx.n)(tx[e.cid]=tx[e.cid]||{p:e.p,L:[]}).L.push(e.sx);if(e.t==='BJ'||e.t==='FT'||e.t==='TR')o[e.cid]={mi1:e.f1,mi2:e.f2,mon:e.fo,mst:e.t==='TR'?(e.on?1:0):e.st};else if(e.t==='SP'){const rm=Math.sqrt(Math.max(0,e.f1));o[e.cid]={arm:rm,afq:e.per>0?1/e.per:0,acr:rm>1e-9?e.pk/rm:1.41}}}for(const id in tx){const T=trStatsTr(tx[id].p,tx[id].L);o[id]=Object.assign(o[id]||{},{tx:T,U:T.U1,Ur:T.U1,I:T.I1,Ir:T.I1,P:T.P1,Q:T.Q1})}return o}
function tranRun(M,dt,Nw,Nr){const core=tranCore(M),n=M.n,rec=Array.from({length:n},()=>new Float64Array(Nr));
 for(let st=0;st<Nw+Nr;st++){core.rec(st>=Nw);if(!core.step((st+1)*dt,dt))return null;if(st>=Nw)for(let i=0;i<n;i++)rec[i][st-Nw]=core.x[i]}
 return rec}
const mean_=a=>{let s=0;for(let i=0;i<a.length;i++)s+=a[i];return s/a.length},rmsac_=a=>{const m=mean_(a);let s=0;for(let i=0;i<a.length;i++)s+=(a[i]-m)**2;return Math.sqrt(s/a.length)};
function tranCompute(M,td){M.tauE=8*td;let dt=td/40,Nr=3000;const fm=Math.max(0,...M.EL.filter(e=>e.t==='TS').map(e=>e.fc));if(fm>0){dt=Math.min(dt,1/(24*fm));Nr=Math.min(20000,Math.ceil(75*td/dt))}
 const Nw=3000,SMs=M.EL.filter(e=>e.t==='SM'),out={unsup:M.unsup,st:{},tr:{},err:''};let rec=null;
 for(let ps=0;ps<(SMs.length?5:1);ps++){rec=tranRun(M,dt,Nw,Nr);if(!rec||!SMs.length)break;let chg=false;
  SMs.forEach(sm=>{const ia=M.ix(sm.a),ib=M.ix(sm.b);let s2=0;for(let i=0;i<Nr;i++){const v=(ia<0?0:rec[ia][i])-(ib<0?0:rec[ib][i]);s2+=v*v}const U=Math.sqrt(s2/Nr),c=sm.c,ve=M.EL.find(e=>e.t==='V'&&e.cid===sm.cid),nn=ve.sn||1,Po=sm.act?Math.max(0,(ve.sU/nn)*(ve.sI/nn)):0,act=sm.act?(U>=21&&U<=400):(U>=24&&U<=400),g=(Po/Math.max(.05,c.eta||.88)+.5)/Math.max(U*U,25);
   if(act!==sm.act||Math.abs(g-sm.g)>.02*g+1e-9)chg=true;sm.act=act;sm.g=g;c.gin=g;c.smon=act});if(!chg)break}
 if(!rec){out.err='Circuit non résoluble (court-circuit ou nœud indéterminé)';return out}
 const Z=new Float64Array(Nr),ser=k=>{const i=M.ix(k);return i<0?Z:rec[i]},sub=(a,b)=>{const o=new Float64Array(Nr);for(let i=0;i<Nr;i++)o[i]=a[i]-b[i];return o},mul=(a,b)=>{const o=new Float64Array(Nr);for(let i=0;i<Nr;i++)o[i]=a[i]*b[i];return o};
 comps.forEach(c=>{const k=i=>c.id+':'+i;
  if(['res','bulb','led','cfl','cap','amp','volt','dmm','sw','dio','dled','ldr','dec','rel','ctc','four','enc','rtor','rpid','plc'].includes(c.type)){const v=sub(ser(k(0)),ser(k(c.type==='dmm'&&c.fn==='I'?2:1)));let i=null;
   if(c.type==='res'){const rr=Rv(c);i=v.map(x=>x/rr)}else if(c.type==='rel'||c.type==='ctc')i=v.map(x=>x/Math.max(c.rc,1));else if(c.type==='ldr')i=v.map(x=>x/ldrR(c));else if(c.type==='bulb')i=v.map(x=>x/(c.un*c.un/c.val));else if(c.type==='led'||c.type==='cfl')i=v.map(x=>x/(c.un*c.un/c.pn));
   else if(c.type==='dec'){const dv=decVal(c),kk=c.dkind||'R';if(kk==='R')i=v.map(x=>x/Math.max(dv,1e-3));else if(kk==='C'){i=new Float64Array(Nr);for(let q=1;q<Nr;q++)i[q]=dv*1e-6*(v[q]-v[q-1])/dt;i[0]=i[1]}}
   else if(c.type==='four'||c.type==='enc')i=v.map(x=>x*(c.type==='enc'||c.hon?c.pn/(c.un*c.un):1e-9));else if(c.type==='dio'||c.type==='dled'){const m=dmod(c);i=v.map(x=>dcur(m,x))}
   else if(((c.type==='dmm'&&c.fn==='I')||c.type==='amp')&&fuseBlown(c))i=v.map(()=>0);else if(c.type==='amp'||(c.type==='sw'&&c.closed)||(c.type==='dmm'&&c.fn==='I'))i=v.map(x=>x/1e-3);else if(c.type==='volt'||c.type==='rtor'||c.type==='rpid'||(c.type==='dmm'&&c.fn==='V'))i=v.map(x=>x/1e7);else if(c.type==='cap'){i=new Float64Array(Nr);for(let q=1;q<Nr;q++)i[q]=c.val*1e-6*(v[q]-v[q-1])/dt;i[0]=i[1]}
   const s={U:mean_(v),Ua:rmsac_(v)};s.Ur=Math.hypot(s.U,s.Ua);if(i){s.I=mean_(i);s.Ia=rmsac_(i);s.Ir=Math.hypot(s.I,s.Ia);s.P=mean_(mul(v,i))}out.st[c.id]=s}
  if(c.type==='smps'){const sm=M.EL.find(e=>e.t==='SM'&&e.cid===c.id),ve=M.EL.find(e=>e.t==='V'&&e.cid===c.id),o=out.st[c.id]=out.st[c.id]||{},v=sub(ser(k(0)),ser(k(1))),i=v.map(x=>x*sm.g);o.U=mean_(v);o.Ua=rmsac_(v);o.Ur=Math.hypot(o.U,o.Ua);o.I=mean_(i);o.Ia=rmsac_(i);o.Ir=Math.hypot(o.I,o.Ia);o.P=mean_(mul(v,i));o.Uo=ve.sU/(ve.sn||1);o.Io=ve.sI/(ve.sn||1);o.cc=!!ve.cc;o.smon=sm.act;o.gin=sm.g}
  if(c.type==='plc'||c.type==='plct'||c.type==='plca'){const o=out.st[c.id]=out.st[c.id]||{},B=c.type==='plc'?c:plcBase(c),nom=B&&B.sup==='230'?230:24,ur=(a,b)=>{const v=sub(ser(k(a)),ser(k(b)));return[mean_(v),Math.hypot(mean_(v),rmsac_(v))]};
   if(c.type==='plc'){o.plOn=(o.Ur||0)>=.85*nom;o.plV=[0,1,2,3,4,5,6,7].map(j=>ur(2+j,1)[1]>.6*nom?1:0)}else if(c.type==='plct')o.plV=[0,1,2,3,4,5].map(j=>ur(1+j,0)[1]>.6*nom?1:0);else o.plA=[1,2].map(j=>Math.max(0,Math.min(10,ur(j,0)[0])))}
  if(c.type==='irrx'){const p=M.EL.find(e=>e.t==='PT'&&e.cid===c.id);out.st[c.id]={iph:p&&p.cnt?p.sm/p.cnt:0}}
  if(c.type==='bat'||c.type==='bat2'||c.type==='tsop'){const o=out.st[c.id]||(out.st[c.id]={});M.EL.forEach(e=>{if(e.cid!==c.id)return;if(e.t==='V'){const nn=e.sn||1;if(e.ch===2){o.cc2=!!e.cc;o.U2=e.sU/nn;o.I2=e.sI/nn}else{o.cc=!!e.cc;o.U=e.sU/nn;o.I=e.sI/nn}}else if(e.t==='TS'){o.det=!!e.det;o.tsA=e.amp}})}
  if(c.type==='scope'){const y1=sub(ser(k(1)),ser(k(0))),y2=sub(ser(k(3)),ser(k(2)));out.tr[c.id]={dt,y:[y1,y2],mean:[mean_(y1),mean_(y2)]}}});
 {const ds=devStats(M);for(const id in ds)out.st[id]=Object.assign(out.st[id]||{},ds[id])}
 out.wi={};wires.forEach((w,wi)=>{if(wRes(w)){const v=sub(ser(w.a),ser(w.b)),r=wR(w),i=v.map(x=>x/r);out.wi[wi]=Math.hypot(mean_(i),rmsac_(i))}});
 return out}
/* ---- Arduino Uno : exécution du programme en temps réel (temps virtuel couplé au solveur temporel) ---- */
const UNO={},LN=1<<18;let live=null,dockId=null,dockS='';
const engOf=c=>{const e=UNO[c.id];return e&&e.owner===c?e:null};
function engNew(c){let e=engOf(c);if(!e){e=new LaboArduino.Engine();e.owner=c;UNO[c.id]=e}return e}
const LSTAT=['dec','res','bulb','led','cfl','cap','amp','volt','dmm','sw','pb','dio','dled','ldr'];
function liveBuild(){const L=live,old=L.M?{M:L.M,core:L.core}:null,M=tranModel(),core=tranCore(M);
 if(old&&old.M.EL.length===M.EL.length&&old.M.EL.every((e,i)=>e.t===M.EL[i].t)){M.EL.forEach((e,i)=>{const o=old.M.EL[i];for(const k of['vc','ip','st','q','ie','ph','sm','cnt','busy','prev','tR','tF','uv','tp','cc','za1','zb1','za2','zb2','det','pp','wk','amp','em'])if(o[k]!==undefined)e[k]=o[k]});if(old.core.x.length===core.x.length)core.x.set(old.core.x)}
 L.M=M;L.core=core;L.xo=new Float64Array(core.x.length);let cap=5e-4;comps.forEach(c=>{if((c.type==='ac'||c.type==='gbf'||c.type==='a3')&&c.f>0)cap=Math.min(cap,1/(40*c.f))});if(M.EL.some(e=>e.t==='T5'))cap=Math.min(cap,2e-5);L.dtCap=Math.max(2e-6,cap);L.dtNow=Math.min(L.dtNow,L.dtCap);
 L.vs=M.EL.filter(e=>e.t==='V'&&e.cid);L.tss=M.EL.filter(e=>e.t==='TS');
 L.engs=M.EL.filter(e=>e.t==='MCU'&&e.eng).map(e=>({e,eng:e.eng,ix:e.pin.map(M.ix),ig:M.ix(e.g)}));L.us=M.EL.filter(e=>e.t==='US');
 M.hook=(u,t)=>{const o=M.ix(u.o);L.dtNow=2e-6;if(o<0)return;L.engs.forEach(q=>{for(let p=0;p<20;p++)if(q.ix[p]===o)q.eng.edge(p,t*1e6,u.busy?1:0)})};
 L.items=[];comps.forEach(c=>{if(LSTAT.includes(c.type)&&(c.type!=='dec'||(c.dkind||'R')==='R'))L.items.push({c,a:M.ix(c.id+':0'),b:M.ix(c.id+':'+(c.type==='dmm'&&c.fn==='I'?2:1)),m:(c.type==='dio'||c.type==='dled')?dmod(c):null});else if(c.type==='irrx'){const e=M.EL.find(q=>q.t==='PT'&&q.cid===c.id);if(e)L.items.push({c,pt:e})}});
 L.scs=comps.filter(c=>c.type==='scope').map(c=>({c,sb:L.sb[c.id]||(L.sb[c.id]={t:new Float64Array(LN),a:new Float32Array(LN),b:new Float32Array(LN),i:0,n:0}),i:[M.ix(c.id+':1'),M.ix(c.id+':0'),M.ix(c.id+':3'),M.ix(c.id+':2')]}));
 tranNote=M.unsup.length?' — non pris en charge en simulation temporelle : '+M.unsup.join(', '):''}
function iof(it,v,dt){const c=it.c;switch(c.type){case'dec':return v/Math.max(decVal(c),1e-3);case'res':return v/Rv(c);case'ldr':return v/ldrR(c);case'bulb':return v/(c.un*c.un/c.val);case'led':case'cfl':return v/(c.un*c.un/c.pn);case'dio':case'dled':return dcur(it.m,v);case'amp':return fuseBlown(c)?0:v/1e-3;case'volt':return v/1e7;case'dmm':return c.fn==='I'?(fuseBlown(c)?0:v/1e-3):c.fn==='V'?v/1e7:0;case'sw':case'pb':return c.closed?v/1e-3:0;case'cap':{const r=it.pv===undefined?0:c.val*1e-6*(v-it.pv)/dt;it.pv=v;return r}}return 0}
function liveAdvance(target,budget){const L=live,X=L.core.x,xv=i=>i<0?0:X[i],t0=performance.now(),pvA=new Float64Array(20);let k=0;
 while(L.vt<target-1e-12){if((++k&15)===0&&performance.now()-t0>budget)break;
  for(const q of L.engs){const en=q.eng;en.run(L.vt);let sg=0;for(let p=0;p<20;p++)sg=sg*4+en.drv(p,L.vt);if(en.chg||sg!==q.sg){en.chg=false;q.sg=sg;L.dtNow=2e-6}}
  let tn=Math.min(target,L.vt+L.dtNow);
  for(const q of L.engs){const en=q.eng;tn=Math.min(tn,en.nextEdge(L.vt));const tm=en.t*1e-6;if(!en.done&&tm>L.vt+1e-9)tn=Math.min(tn,tm)}
  for(const u of L.us){if(u.tR>L.vt+1e-12&&u.tR<tn)tn=u.tR;if(u.tF>L.vt+1e-12&&u.tF<tn)tn=u.tF}
  if(tn<L.vt+1e-6)tn=L.vt+1e-6;
  const dt=tn-L.vt;L.xo.set(X);
  if(!L.core.step(tn,dt)){L.err='Circuit non résoluble (court-circuit ou nœud indéterminé)';L.on=false;return}
  let dm=0;for(let i=0;i<X.length;i++){const d=Math.abs(X[i]-L.xo[i]);if(d>dm)dm=d}
  for(const q of L.engs){for(let p=0;p<20;p++)pvA[p]=xv(q.ix[p])-xv(q.ig);q.eng.feed(L.vt,tn,pvA)}
  const al=1-Math.exp(-dt/.015);for(const e of L.vs){const i=-X[L.M.n+e.k];e.em=e.em===undefined?i:e.em+(i-e.em)*al}
  for(const it of L.items){const c=it.c;if(it.pt){const em=L.em[c.id]||(L.em[c.id]={ph:it.pt.ph});em.ph+=(it.pt.ph-em.ph)*al;continue}
   const v=xv(it.a)-xv(it.b),i=iof(it,v,dt),em=L.em[c.id];if(!em){L.em[c.id]={m1:v,m2:v*v,i1:i,i2:i*i,p:v*i};continue}
   em.m1+=(v-em.m1)*al;em.m2+=(v*v-em.m2)*al;em.i1+=(i-em.i1)*al;em.i2+=(i*i-em.i2)*al;em.p+=(v*i-em.p)*al}
  for(const s of L.scs){const sb=s.sb,j=sb.i;sb.t[j]=tn;sb.a[j]=xv(s.i[0])-xv(s.i[1]);sb.b[j]=xv(s.i[2])-xv(s.i[3]);sb.i=(j+1)&(LN-1);if(sb.n<LN)sb.n++}
  L.vt=tn;L.dtNow=dm>.02?Math.max(2e-6,L.dtNow*.5):Math.min(L.dtCap,L.dtNow*1.6);for(const e of L.tss)if(e.wk>tn)L.dtNow=Math.min(L.dtNow,2e-6)}}
function liveStats(){const L=live;
 for(const e of L.vs){const c=comps.find(q=>q.id===e.cid);if(!c||e.em===undefined)continue;const u=L.core.V(e.p)-L.core.V(e.n);if(e.ch===2){c.U2=u;c.I2=e.em;c.cc2=!!e.cc}else{c.U=u;c.I=e.em;c.cc=!!e.cc}}
 {const ds=devStats(L.M);for(const id in ds){const c=comps.find(q=>q.id==id);if(c)Object.assign(c,ds[id])}}
 for(const e of L.tss){const c=comps.find(q=>q.id===e.cid);if(c){c.det=!!e.det;c.tsA=e.amp}}
 for(const it of L.items){const c=it.c,em=L.em[c.id];if(!em)continue;if(it.pt){c.iph=em.ph;continue}
  c.U=em.m1;c.Ua=Math.sqrt(Math.max(0,em.m2-em.m1*em.m1));c.Ur=Math.sqrt(Math.max(0,em.m2));c.I=em.i1;c.Ia=Math.sqrt(Math.max(0,em.i2-em.i1*em.i1));c.Ir=Math.sqrt(Math.max(0,em.i2));c.P=em.p}
 if(fuseCheck()){clac(true);L.key=null;L.fz=1}
 const N=3000;
 for(const s of L.scs){const c=s.c,sb=s.sb,W=12*c.td,mk=()=>new Float64Array(N);c.sig=null;
  if(!sb.n){c.tr={dt:W/N,y:[mk(),mk()],mean:[0,0],t0:2*c.td};continue}
  const msk=LN-1,o=(sb.i-sb.n)&msk,tt=j=>sb.t[(o+j)&msk],y=[mk(),mk()],arr=[sb.a,sb.b],tE=L.vt;
  for(let k=0;k<N;k++){const tau=tE-W+k*W/N;let lo=0,hi=sb.n-1;
   if(tau<=tt(0)){for(let h=0;h<2;h++)y[h][k]=arr[h][o&msk];continue}
   while(lo<hi){const m=(lo+hi+1)>>1;if(tt(m)<=tau)lo=m;else hi=m-1}
   const j1=Math.min(sb.n-1,lo+1),ta=tt(lo),tb=tt(j1),f=tb>ta?Math.min(1,(tau-ta)/(tb-ta)):0;
   for(let h=0;h<2;h++){const a=arr[h][(o+lo)&msk],b=arr[h][(o+j1)&msk];y[h][k]=a+(b-a)*f}}
  c.tr={dt:W/N,y,mean:[mean_(y[0]),mean_(y[1])],t0:2*c.td}}}
function liveSync(){const L=live;if(!comps.some(c=>c.type==='uno')){liveDrop();return false}
 for(const id in UNO)if(!comps.includes(UNO[id].owner))delete UNO[id];
 const key=JSON.stringify([comps,wires.map(wKey)],(k,v)=>TSKIP.has(k)?undefined:v)+'|'+JSON.stringify(bridges());
 if(key!==L.key||!L.M){L.key=key;liveBuild()}
 if(L.err){err=L.err;return true}liveStats();return true}
function liveDrop(){if(live)live.on=false;live=null}
function liveToggle(){if(live&&live.on)liveStop();else liveStart()}
function liveStop(){if(live)live.on=false;render();dockUpd()}
function liveStart(){const us=comps.filter(c=>c.type==='uno');if(!us.length)return false;
 if(us.some(c=>!engOf(c)))liveDrop();
 for(const c of us){const e=engNew(c);if(!e.prog||e.src!==c.code){const r=e.load(c.code);if(!r.ok){dockErr(c,r);return false}}}
 if(!live)live={on:false,vt:0,dtNow:2e-6,dtCap:5e-4,em:{},sb:{},key:'',M:null,speed:+($('asp').value)||1,err:'',last:0,lr:0,raf:0};
 us.forEach(c=>{const e=engOf(c);if(e.base===undefined||e.fresh!==live)alignEng(e)});
 live.on=true;live.err='';live.key='';live.last=performance.now();liveLoop();render();dockUpd();return true}
function alignEng(e){e.fresh=live;e.t=live.vt*1e6;e.base=e.t;e.txFree=e.t;e.sim=true;e.fed=false}
function liveResetAll(){const was=live&&live.on;liveDrop();comps.filter(c=>c.type==='uno').forEach(c=>{const e=engOf(c);if(e)e.reset()});if(was)liveStart();else{render();dockUpd()}}
function liveLoop(){if(live&&live.on&&!live.raf&&typeof requestAnimationFrame==='function')live.raf=requestAnimationFrame(liveFrame)}
function liveFrame(){const L=live;if(!L)return;L.raf=0;if(!L.on)return;const now=performance.now(),w=Math.min(.05,(now-L.last)/1000);L.last=now;
 if(!L.M)liveSync();liveAdvance(L.vt+w*L.speed,22);
 if(now-L.lr>80||!L.on){L.lr=now;render();dockUpd()}
 if(L.on)L.raf=requestAnimationFrame(liveFrame)}
/* éditeur de code + moniteur série (volet à droite) */
function openDock(id){const c=comps.find(x=>x.id===id);if(!c)return;dockId=id;const us=comps.filter(x=>x.type==='uno');$('adock').classList.add('open');$('acode').value=c.code;$('aht').textContent='💻 Arduino Uno'+(us.length>1?' n° '+(us.indexOf(c)+1):'');$('aerr').textContent='';dockS='\u0000';dockUpd();setTimeout(applyView,0)}
function closeDock(){$('adock').classList.remove('open');dockId=null;setTimeout(applyView,0)}
function dockErr(c,r){if(dockId!==c.id)openDock(c.id);$('aerr').textContent='Ligne '+r.line+' : '+r.msg;const ta=$('acode');if(ta.setSelectionRange&&r.line>0){const ls=ta.value.split('\n');let a=0;for(let i=0;i<r.line-1&&i<ls.length;i++)a+=ls[i].length+1;try{ta.focus();ta.setSelectionRange(a,a+(ls[r.line-1]||'').length)}catch(e){}}}
function dockUpd(){if(dockId===null)return;const c=comps.find(x=>x.id===dockId);if(!c){closeDock();return}const e=engOf(c),on=live&&live.on;
 $('atm').textContent=live?'t = '+live.vt.toFixed(2)+' s':'';$('apa').textContent=on?'⏸ Pause':'▶ Reprendre';
 if(e&&e.fault)$('aerr').textContent='Erreur d’exécution : '+e.fault;
 const ser=e?e.ser:'';if(ser!==dockS){dockS=ser;const p=$('aser');p.textContent=ser;p.scrollTop=p.scrollHeight}}
function dockUpload(){const c=comps.find(x=>x.id===dockId);if(!c)return;c.code=$('acode').value;const e=engNew(c),r=e.load(c.code);if(!r.ok){dockErr(c,r);return}
 $('aerr').textContent='';liveDrop();comps.filter(x=>x.type==='uno'&&x!==c).forEach(x=>{const o=engOf(x);if(o)o.reset()});dockS='\u0000';liveStart()}
function solveTran(){if(live&&live.on&&liveSync())return;comps.forEach(c=>{c.iph=undefined;c.U=c.I=c.P=c.Q=c.Ur=c.Ir=c.Ua=c.Ia=undefined;c.sig=null;c.tr=null;c.cl=null});if(!comps.length)return;
 const sc=comps.find(c=>c.type==='scope'),td=sc?sc.td:1e-3,key=JSON.stringify([comps,wires.map(wKey)],(k,v)=>TSKIP.has(k)?undefined:v)+'|'+td+'|'+JSON.stringify(bridges());
 let res=tranCache&&tranCache.key===key?tranCache.res:null;if(!res){res=tranCompute(tranModel(),td);tranCache={key,res}}
 tranNote=res.unsup.length?' — non pris en charge en simulation temporelle : '+res.unsup.join(', '):'';
 if(res.err){err=res.err;return}if(res.wi)for(const k in res.wi)if(wires[k])wires[k].Iw=res.wi[k];comps.forEach(c=>{const s=res.st[c.id];if(s)Object.assign(c,s);const t=res.tr[c.id];if(t)c.tr=t});
 let rch=false;comps.forEach(c=>{if((c.type==='rel'||c.type==='ctc')&&c.Ur!==undefined){const on=c.Ur>=.8*c.un?true:c.Ur<.3*c.un?false:c.on;if(on!==c.on){c.on=on;rch=true;if(on)clac(c.type==='ctc')}}});
 if(rch&&relayN++<6){solveTran();return}
 if(fuseCheck()){clac(true);solveTran()}}
let relayN=0;
function trWave(c,ch,acOnly){const cp=ch?c.cp2:c.cp1;if(cp==='GND')return()=>0;const y=c.tr.y[ch],dt=c.tr.dt,m=(acOnly||cp==='AC')?c.tr.mean[ch]:0,n=y.length;
 return t=>{const q=t/dt,i=Math.floor(q);if(i<0)return y[0]-m;if(i>=n-1)return y[n-1]-m;const f=q-i;return y[i]*(1-f)+y[i+1]*f-m}}
function trFreq(c,ch){const y=c.tr.y[ch],dt=c.tr.dt;let lo=1e99,hi=-1e99;for(let i=0;i<y.length;i++){if(y[i]<lo)lo=y[i];if(y[i]>hi)hi=y[i]}if(hi-lo<1e-6)return 0;
 const mid=(hi+lo)/2,bd=(hi-lo)*.1;let st=y[0]>mid?1:0,cnt=0,first=-1,last=-1;for(let i=1;i<y.length;i++){if(st===0&&y[i]>mid+bd){st=1;cnt++;if(first<0)first=i;last=i}else if(st===1&&y[i]<mid-bd)st=0}
 return cnt>=2?(cnt-1)/((last-first)*dt):0}
const chFreq=(c,ch)=>c.tr?trFreq(c,ch):domFreq(c.sig[ch],c.ws);
/* ---- Oscilloscope : reconstruction temporelle ---- */
function mkWave(c,ch,acOnly){if(c.tr)return trWave(c,ch,acOnly);const ph=c.sig[ch],cp=ch?c.cp2:c.cp1;if(cp==='GND')return()=>0;
 const dc=(acOnly||cp==='AC')?0:ph[0][0],T=[];for(let q=1;q<ph.length;q++)if(Math.hypot(ph[q][0],ph[q][1])>1e-9)T.push([c.ws[q],ph[q][0]*Math.SQRT2,ph[q][1]*Math.SQRT2]);
 return t=>{let y=dc;for(const[w,a,b]of T)y+=a*Math.cos(w*t)-b*Math.sin(w*t);return y}}
function domFreq(ph,ws){let b=1e-6,f=0;for(let q=1;q<ph.length;q++){const a=Math.hypot(ph[q][0],ph[q][1]);if(a>b){b=a;f=ws[q]/(2*Math.PI)}}return f}
function traces(c,S){if(err||(!c.sig&&!c.tr))return'';let s='';const tr=c.trig===2?1:0,fT=chFreq(c,tr),H=8*S,Wd=10*S;let t0=c.tr&&c.tr.t0||0;c.free=false;
 if(c.xy){const W1=mkWave(c,0),W2=mkWave(c,1),f1=chFreq(c,0),f2=chFreq(c,1),fm=Math.min(f1||1e12,f2||1e12),Ts=fm<1e12?20/fm:1,N=3000;let d='';
  for(let k=0;k<=N;k++){const t=k/N*Ts,x=Wd/2+(W1(t)/c.v1+c.pos1)*S,y=H/2-(W2(t)/c.v2+c.pos2)*S;d+=(k?'L':'M')+Math.max(0,Math.min(Wd,x)).toFixed(1)+' '+Math.max(0,Math.min(H,y)).toFixed(1)}
  return`<path d="${d}" stroke="#7cfc00" stroke-width="${S>30?2:1.5}" fill="none" stroke-linejoin="round"/>`}
 let fnd=false;if(fT){const LV=c.tla?0:(c.tl||0)*(tr?c.v2:c.v1),ref=mkWave(c,tr,!!c.tla),dt=1/(fT*600);let pv=ref(0)-LV;for(let t=dt;t<1.3/fT;t+=dt){const y=ref(t)-LV;if(pv<0&&y>=0){t0=t-dt*y/(y-pv);fnd=true;break}pv=y}if(!fnd&&!c.tla){c.free=true;t0+=((performance.now()/1000)*c.td*5)%(1/fT)}}
 c.t0c=t0;[0,1,2].forEach(ch=>{const MM=ch===2;if(MM?(!c.mth||c.mth==='off'):!(ch?c.on2:c.on1))return;const colr=MM?'#e040fb':ch?'#00e5ff':'#ffeb3b',W=MM?mathW(c):mkWave(c,ch),fd=MM?(chFreq(c,0)||chFreq(c,1)):chFreq(c,ch),vd=MM?mathV(c,W,fd):ch?c.v2:c.v1,pos=MM?(c.posm||0):ch?c.pos2:c.pos1,span=c.td*10;
  const Y=v=>Math.max(0,Math.min(H,H/2-(v/vd+pos)*S)).toFixed(1);let d='';
  if(fd&&span*fd>20){for(let px=0;px<=Wd;px++){const tx=t0+px/Wd*span;let mn=1e9,mx=-1e9;for(let j=0;j<24;j++){const y=W(tx+j/(24*fd));if(y<mn)mn=y;if(y>mx)mx=y}d+=`M${px} ${Y(mn)}V${Y(mx)}`}
   s+=`<path d="${d}" stroke="${colr}" stroke-width="1.3" fill="none"/>`}
  else{const N=Math.max(400,Wd*2);for(let k=0;k<=N;k++)d+=(k?'L':'M')+(k*Wd/N).toFixed(1)+' '+Y(W(t0+k/N*span));s+=`<path d="${d}" stroke="${colr}" stroke-width="${S>30?2.2:1.8}" fill="none" stroke-linejoin="round"/>`}
  const y0=Y(0);s+=`<path d="M0 ${y0-5}L8 ${y0}L0 ${y0+5}Z" fill="${colr}"/>`});
 (c.refs||[]).forEach(r=>{const vd=r.ch?c.v2:c.v1,pos=r.ch?c.pos2:c.pos1,span=c.td*10;let d='',ok=false;for(let px=0;px<=Wd;px+=1){const k=Math.round(px/Wd*span/r.dt);if(k>=r.v.length)break;const y=Math.max(0,Math.min(H,H/2-(r.v[k]/vd+pos)*S)).toFixed(1);d+=(ok?'L':'M')+px+' '+y;ok=true}if(d)s+=`<path d="${d}" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-dasharray="5 4" opacity=".75"/>`});
 if(!c.tla&&fT){const yl=Math.max(2,Math.min(H-2,H/2-((c.tl||0)+(tr?c.pos2:c.pos1))*S)).toFixed(1),cl=tr?'#00e5ff':'#ffeb3b';s+=`<path d="M0 ${yl}H${Wd}" stroke="${cl}" stroke-width="1" stroke-dasharray="4 5" opacity=".55"/><path d="M${Wd} ${yl}l-9 -5v10z" fill="${cl}"/>`}
 return s}
/* ---- Oscilloscope : voie mathématique (CH1 ± CH2, CH1 × CH2) et mémoire / fichier de courbe ---- */
const MTH=[['off','Math : aucune'],['add','CH1 + CH2'],['s12','CH1 − CH2'],['s21','CH2 − CH1'],['mul','CH1 × CH2']];
function mathW(c){const A=mkWave(c,0),B=mkWave(c,1);switch(c.mth){case'add':return t=>A(t)+B(t);case's12':return t=>A(t)-B(t);case's21':return t=>B(t)-A(t);default:return t=>A(t)*B(t)}}
function mathV(c,W,fd){if(c.mvd>0)return c.mvd;const T=fd>0?3/fd:c.td*10;let m=0;for(let k=0;k<=300;k++)m=Math.max(m,Math.abs(W(c.t0c+k/300*T)));const e=m/3.2,d=Math.pow(10,Math.floor(Math.log10(Math.max(e,1e-3))));for(const f of[1,2,5,10])if(f*d>=e)return f*d;return 10*d}
const MV=[0.01,0.1,0.5,1,2,5,10,20,50,100,200,500,1000];
function scSamples(c,N){const span=c.td*10,t0=c.t0c||0,W=[mkWave(c,0),mkWave(c,1)],M=c.mth&&c.mth!=='off'?mathW(c):null,rows=[];for(let k=0;k<=N;k++){const t=k/N*span,tt=t0+t;rows.push([t,W[0](tt),W[1](tt),M?M(tt):null])}return rows}
function scAct(c,a){if(err||(!c.sig&&!c.tr))return;
 if(a==='m1'||a==='m2'){const ch=a==='m2'?1:0,W=mkWave(c,ch),N=1200,span=c.td*10,v=[];for(let k=0;k<N;k++)v.push(W((c.t0c||0)+k/N*span));c.refs=(c.refs||[]).filter(r=>r.ch!==ch);c.refs.push({ch,dt:span/N,v})}
 else if(a==='cl')c.refs=[];
 else if(a==='csv'){const R=scSamples(c,2000),hd=['t (s)','CH1 (V)','CH2 (V)'];if(c.mth&&c.mth!=='off')hd.push('Math '+(MTH.find(m=>m[0]===c.mth)||[])[1]);
  const txt=hd.join(';')+'\n'+R.map(r=>r.filter((x,i)=>i<hd.length).map(x=>String(+x.toPrecision(7)).replace('.',',')).join(';')).join('\n');saveFile(new Blob(['﻿'+txt],{type:'text/csv'}),'oscillo-'+new Date().toISOString().slice(0,16).replace(/[:T]/g,'-')+'.csv')}}
function scopeCtl(c,ov){const cps=[['DC','DC'],['AC','AC'],['GND','GND']],vo=VD.map(x=>[x,fmt(x,'V')+'/div']),
 ch=n=>`<label class="scc"><input type="checkbox" data-b="on${n}" ${c['on'+n]?'checked':''}> CH${n}</label>${selH('v'+n,vo,c['v'+n])}${selH('cp'+n,cps,c['cp'+n])}<label>pos <input type="number" data-p="pos${n}" step="0.5" value="${c['pos'+n]}"></label>`;
 return`<div class="scg"><label class="sp2">Base de temps ${selH('td',TD.map(x=>[x,fmt(x,'s')+'/div']),c.td)}</label><label class="sp2">Déclenchement ${selH('trig',[[1,'CH1'],[2,'CH2']],c.trig)}</label><label class="sp2"><input type="checkbox" data-b="tla" ${c.tla?'checked':''}> Niveau auto</label><label class="sp2">Niveau (TRIGGER) <input type="range" data-p="tl" min="-4" max="4" step="0.05" value="${c.tl||0}"> <span>${fmt((c.tl||0)*(c.trig===2?c.v2:c.v1),'V')}</span></label>${ch(1)}${ch(2)}<label class="sp2"><input type="checkbox" data-b="xy" ${c.xy?'checked':''}> Mode XY (CH1 = X, CH2 = Y)</label><label class="sp2">Voie math ${selH('mth',MTH,c.mth||'off')}</label>${c.mth&&c.mth!=='off'?`<label class="sp2">Échelle math ${selH('mvd',[[0,'Auto'],...MV.map(x=>[x,fmt(x,c.mth==='mul'?'V²':'V')+'/div'])],c.mvd||0)} <label>pos <input type="number" data-p="posm" step="0.5" value="${c.posm||0}"></label></label>`:''}<span class="sp2" style="grid-column:1/-1;display:flex;flex-wrap:wrap;gap:6px;align-items:center">Enregistrer : <button data-sc="m1">Mémoriser CH1</button> <button data-sc="m2">Mémoriser CH2</button> <button data-sc="cl">Effacer mémoires</button> <button data-sc="csv">Fichier CSV</button></span>${ov?`<label class="sp2">Curseurs V sur ${selH('cch',[[1,'CH1'],[2,'CH2']],c.cch)}</label>`:''}</div>`}
function bindP(root,c,cb){root.querySelectorAll('[data-p]').forEach(el=>el.oninput=el.onchange=()=>{const p=el.dataset.p;let v=el.value;
  if(/^(off|add|s12|s21|mul|DC|AC|GND|sin|sq|tri|W|VAr|VA|PF|V|A|Y|D|mono|d4148|d4007|z33|z51|z91|ir|rouge|orange|jaune|vert|bleu|blanc)$/.test(v))c[p]=v;else{v=parseFloat(v);if(isNaN(v))return;
   if(p==='fl')c.f=+Math.pow(10,v).toPrecision(3);else if(p==='f')c.f=Math.min(1e6,Math.max(10,v));else if(p==='amp')c.amp=Math.min(12,Math.max(0,v));else if(p==='off')c.off=Math.min(12,Math.max(-12,v));else if(p==='tl'){c.tl=v;c.tla=false;const k=root.querySelector('[data-b="tla"]');if(k)k.checked=false;if(el.nextElementSibling)el.nextElementSibling.textContent=fmt(v*(c.trig===2?c.v2:c.v1),'V')}else c[p]=v}
  root.querySelectorAll('[data-p]').forEach(o=>{if(o===el)return;const q=o.dataset.p;if(q==='f'&&p==='fl')o.value=c.f;else if(q==='fl'&&p==='f')o.value=Math.log10(c.f);else if(q===p&&o.tagName==='INPUT')o.value=c[p]});cb()});
 root.querySelectorAll('[data-b]').forEach(el=>el.onchange=()=>{c[el.dataset.b]=el.checked;cb()});root.querySelectorAll('[data-sc]').forEach(b=>b.onclick=()=>{scAct(c,b.dataset.sc);cb()});const mS=root.querySelector('[data-p="mth"]');if(mS)mS.addEventListener('change',()=>{if(root===pn)panel();else{ovctl.innerHTML=scopeCtl(c,true);bindP(ovctl,c,()=>{render();renderOv()})}})}
/* ---- Dessin des appareils ---- */
const bnc=(x,y)=>`<circle cx="${x}" cy="${y}" r="16" fill="#c9ccd1" stroke="#5f646b" stroke-width="2"/><circle cx="${x}" cy="${y}" r="10" fill="#8f959d"/><circle cx="${x}" cy="${y}" r="4.5" fill="#d4af37" stroke="#7a5f00"/><rect x="${x-19}" y="${y-2.5}" width="6" height="5" fill="#5f646b"/><rect x="${x+13}" y="${y-2.5}" width="6" height="5" fill="#5f646b"/>`;
const psu=(c,ch)=>{const o=ch===2?{v:c.val2,u:c.U2,i:c.I2,cc:c.cc2,l:c.il2}:{v:c.val,u:c.U,i:c.I,cc:c.cc,l:c.il},ok=!err&&typeof o.u==='number';return{u:ok?o.u:o.v,i:ok&&typeof o.i==='number'?o.i:null,cc:!!o.cc&&ok,l:o.l>0?o.l:10}};
const jack=(x,y,col)=>`<circle cx="${x}" cy="${y}" r="9" fill="${col}" stroke="#4a4a4a" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#0c0c0c"/>`;
const BAND=['#111','#8b4513','#d32f2f','#ff9800','#fdd835','#2e7d32','#1976d2','#7b1fa2','#9e9e9e','#fff'];
function bands(v){let e=Math.floor(Math.log10(v)),m=Math.round(v/Math.pow(10,e-1));if(m>=100){m=10;e++}const x=e-1,col=k=>k===-1?'#d4af37':k===-2?'#c0c0c0':BAND[k]||'#777';return[BAND[Math.floor(m/10)],BAND[m%10],col(x)]}
const txt=(x,y,s,sz,fill,anc,fam)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${fill}" text-anchor="${anc||'middle'}" stroke="none" font-family="${fam||'system-ui'}" font-weight="600">${s}</text>`;
const isA=c=>c.type==='amp'||(c.type==='dmm'&&c.fn==='I');
const fmt5=(x,u)=>{if(x===undefined||isNaN(x))return'–';const a=Math.abs(x);if(a<1e-9)return'0.0000 '+u;for(const[f,p]of[[1e6,'M'],[1e3,'k'],[1,''],[1e-3,'m'],[1e-6,'µ']])if(a>=f*0.9995){const y=x/f;return y.toFixed(Math.max(0,Math.min(5,4-Math.floor(Math.log10(Math.abs(y))))))+' '+p+u}return x.toExponential(2)+' '+u};
/* Aiguille : équipage mobile amorti (2e ordre, ~0,4 s) : ne suit pas les variations rapides, affiche la moyenne (ou l'efficace en AC) */
const nowS=()=>(typeof performance!=='undefined'?performance.now():Date.now())/1000;
function needle(c,tg){const t=nowS();if(c.nv===undefined||c.nt===undefined||t-c.nt>5){c.nv=tg;c.nw=0;c.nt=t;c.ng=tg;return tg}
 let dt=Math.min(.5,t-c.nt);c.nt=t;c.ng=tg;const w0=2*Math.PI*1.3,z=.75;for(let h=Math.ceil(dt/.004),d=dt/h;h>0;h--){c.nw+=(w0*w0*(tg-c.nv)-2*z*w0*c.nw)*d;c.nv+=c.nw*d}return c.nv}
/* Démarrage des moteurs alternatifs : appel de courant (≈ 6 In) qui décroît pendant ~0,2 s */
let mtT=0;
function motorTick(){const t=nowS(),dt=mtT?Math.min(.2,t-mtT):0;mtT=t;let ch=false;
 comps.forEach(c=>{if((c.type!=='mac'&&c.type!=='m3')||c.Ur===undefined||err)return;const on=c.Ur>=.6*c.un,k=c.kst===undefined?(on?1:0):c.kst,n=on?Math.min(1,k+dt/.2):Math.max(0,k-dt/.6);if(n!==c.kst){c.kst=n;ch=true}});comps.forEach(c=>{if(c.type!=='lev')return;const m=comps.find(x=>x.id===c.lm);let v=0;if(m&&!err&&!c.stall&&m.rps>.01)v=m.rps*2*Math.PI*(c.dr/100)/Math.max(1,c.gr);if(c.lh>=HMAX&&v>0)v=0;const h=Math.min(HMAX,Math.max(0,(c.lh||0)+v*dt));if(h!==c.lh||v!==c.lv){c.lh=h;c.lv=v;ch=true}});
 return ch}
const needleMoving=()=>comps.some(c=>c.ana&&c.nv!==undefined&&(Math.abs(c.nv-c.ng)>2e-3*(c.rng||1)||Math.abs(c.nw)>2e-2*(c.rng||1)));
/* ---- Haut-parleur (WebAudio) et micro réel ---- */
const SPKN={};
function spkAudio(){if(typeof window==='undefined'||!(window.AudioContext||window.webkitAudioContext))return;
 const want=soundOn&&!err?comps.filter(c=>c.type==='spk'&&!c.mute&&c.arm>1e-4&&c.afq>20&&c.afq<20000):[];
 for(const id in SPKN)if(!want.some(c=>c.id==id)){const n=SPKN[id];try{n.g.gain.setTargetAtTime(0,n.A.currentTime,.03);const o=n.o;setTimeout(()=>{try{o.stop()}catch(e){}},200)}catch(e){}delete SPKN[id]}
 if(!want.length)return;try{const A=AC_=AC_||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();
  want.forEach(c=>{let n=SPKN[c.id];if(!n){const o=A.createOscillator(),g=A.createGain();g.gain.value=0;o.connect(g);g.connect(dest(A));o.start();n=SPKN[c.id]={A,o,g}}
   n.o.type=c.acr<1.27?'square':c.acr<1.57?'sine':'triangle';n.o.frequency.setTargetAtTime(c.afq,A.currentTime,.02);
   const pel=c.arm*c.arm*(c.re||8);n.g.gain.setTargetAtTime(Math.min(.3,.12*Math.sqrt(pel/.05)),A.currentTime,.03)})}catch(e){}}
const MOTN={};
const OHMB={};
function ohmAudio(){if(typeof window==='undefined'||!(window.AudioContext||window.webkitAudioContext))return;
 const want=soundOn&&!err?comps.filter(c=>c.type==='ohm'&&c.bip&&ohmR(c)<50):[];
 for(const id in OHMB)if(!want.some(c=>c.id==id)){const n=OHMB[id];try{n.g.gain.setTargetAtTime(0,n.A.currentTime,.01);const o=n.o;setTimeout(()=>{try{o.stop()}catch(e){}},120)}catch(e){}delete OHMB[id]}
 if(!want.length)return;try{const A=AC_=AC_||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();
  want.forEach(c=>{if(!OHMB[c.id]){const o=A.createOscillator(),g=A.createGain();o.type='square';o.frequency.value=2000;g.gain.value=0;o.connect(g);g.connect(dest(A));o.start();g.gain.setTargetAtTime(.1,A.currentTime,.005);OHMB[c.id]={A,o,g}}})}catch(e){}}
function motorAudio(){if(typeof window==='undefined'||!(window.AudioContext||window.webkitAudioContext))return;
 const want=soundOn&&!err?comps.filter(c=>(c.type==='mac'||c.type==='m3'||c.type==='mdc')&&c.snd&&c.rps>.05):[];
 for(const id in MOTN)if(!want.some(c=>c.id==id)){const n=MOTN[id];try{n.g.gain.setTargetAtTime(0,n.A.currentTime,.12);const o=n.o;setTimeout(()=>{try{o.stop()}catch(e){}},700)}catch(e){}delete MOTN[id]}
 if(!want.length)return;try{const A=AC_=AC_||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();
  want.forEach(c=>{let n=MOTN[c.id];if(!n){const o=A.createOscillator(),f=A.createBiquadFilter(),g=A.createGain();o.type='triangle';f.type='lowpass';f.frequency.value=200;g.gain.value=0;o.connect(f);f.connect(g);g.connect(dest(A));o.start();n=MOTN[c.id]={A,o,g}}
   const full=c.type==='mdc'?Math.max(1,c.rps):c.type==='mac'?24:24,fr=Math.min(1.15,c.rps/full);n.o.frequency.setTargetAtTime(c.type==='mdc'?35+75*fr:30+70*fr,A.currentTime,.1);n.g.gain.setTargetAtTime(.03*Math.min(1,.3+fr),A.currentTime,.1)})}catch(e){}}
const MICS={};
function micToggle(c){if(c.mr){c.mr=false;c.rl=0;const m=MICS[c.id];if(m){try{m.st.getTracks().forEach(t=>t.stop())}catch(e){}delete MICS[c.id]}panel();render();return}
 if(typeof navigator==='undefined'||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){c.mr=true;c.merr='Micro indisponible sur cet appareil : son sinusoïdal utilisé.';c.mr=false;alert(c.merr);return}
 navigator.mediaDevices.getUserMedia({audio:true}).then(st=>{const A=new(window.AudioContext||window.webkitAudioContext)(),an=A.createAnalyser();an.fftSize=4096;A.createMediaStreamSource(st).connect(an);MICS[c.id]={st,A,an,td:new Float32Array(an.fftSize),fd:new Float32Array(an.frequencyBinCount)};c.mr=true;c.merr='';c.rl=0;c.rf=c.mf;panel();render()}).catch(()=>{c.mr=false;c.merr='';alert('Accès au micro refusé : le son sinusoïdal réglable reste utilisé.')})}
function micTick(){let ch=false;for(const id in MICS){const c=comps.find(q=>q.id==id),m=MICS[id];if(!c||!c.mr){continue}
  m.an.getFloatTimeDomainData(m.td);let e=0;for(let i=0;i<m.td.length;i++)e+=m.td[i]*m.td[i];const rms=Math.sqrt(e/m.td.length);m.an.getFloatFrequencyData(m.fd);let bi=2,bv=-1e9;const sr=m.A.sampleRate,lo=Math.ceil(40*m.an.fftSize/sr),hi=Math.floor(8000*m.an.fftSize/sr);for(let i=lo;i<hi;i++)if(m.fd[i]>bv){bv=m.fd[i];bi=i}
  const f0=bi*sr/m.an.fftSize,rl=Math.min(1,Math.round(Math.min(1,rms*8)*20)/20),rf=f0<1000?Math.round(f0/5)*5:Math.round(f0/25)*25;
  if(rl>.02&&(rf!==c.rf||rl!==c.rl)){c.rf=rf;c.rl=rl;ch=true}else if(rl<=.02&&c.rl>.02){c.rl=0;ch=true}}
 if(ch)render()}
if(typeof setInterval==='function')setInterval(micTick,200);
const fuseJack=c=>wires.some(w=>w.a===c.id+':2'||w.b===c.id+':2')?3:wires.some(w=>w.a===c.id+':3'||w.b===c.id+':3')?16:3;
const ampJack=c=>wires.some(w=>w.a===c.id+':2'||w.b===c.id+':2')?10:3;
const ampRng=c=>ampJack(c)===10?10:(c.rng||3);
function fuseInfo(c){if(c.type==='dmm'&&c.fn==='I')return fuseJack(c)===16?{k:'fb16',lim:17,n:16}:{k:'fb3',lim:3.3,n:3};if(c.type==='amp')return c.ana&&ampJack(c)===3?{k:'fb3',lim:3.3,n:3}:{k:'fb10',lim:11,n:10};if(c.type==='watt')return{k:'fb16',lim:17,n:16};return null}
const fuseBlown=c=>{const f=fuseInfo(c);return!!(f&&c[f.k])};
function fuseCheck(){let ch=false;comps.forEach(c=>{const f=fuseInfo(c);if(!f||c[f.k])return;if(c.I===undefined&&c.Ir===undefined&&c.Ia===undefined)return;const I=Math.max(Math.abs(c.I||0),c.Ir||0,c.Ia||0);if(!isNaN(I)&&I>f.lim){c[f.k]=true;ch=true}});return ch}
/* Affichage numérique : intégration courte (~80 ms), quasi instantanée */
let smoothOn=true;function dsm(c){if(!smoothOn||c.ana||(c.type!=='amp'&&c.type!=='volt'&&c.type!=='dmm'))return c;const t=nowS(),K=['U','I','Ua','Ia'],z=c.zs;
 if(!z||c.zt===undefined||t-c.zt>5){c.zs={};K.forEach(k=>c.zs[k]=c[k]);c.zt=t;c.zm=false;return c}
 const dt=Math.min(1,t-c.zt),a=1-Math.exp(-dt/.08);c.zt=t;let mv=false;
 K.forEach(k=>{const v=c[k];if(v===undefined||isNaN(v)){z[k]=v;return}if(z[k]===undefined||isNaN(z[k]))z[k]=v;else{z[k]+=(v-z[k])*a;if(Math.abs(v-z[k])>1e-3*Math.max(Math.abs(v),1e-9))mv=true}});c.zm=mv;
 const q=Object.create(c);K.forEach(k=>{q[k]=z[k]});return q}
const ohmR=c=>{const i=c.I;return(i===undefined||isNaN(i)||Math.abs(i)<1e-9)?Infinity:-1/i};
const reading=c=>{if(err)return'----';if(c.type==='ohm'){const R=ohmR(c),mx=c.bip?2000:(c.orng||2000);return R>mx*1.0005?'OL':fmt(R,'Ω')}if(fuseBlown(c))return'FUSE';c=dsm(c);const F=c.type==='dmm'?fmt5:fmt;if(c.type==='dmm'&&c.fn==='R'){const i=c.I;if(i===undefined||isNaN(i)||Math.abs(i)<1e-9)return'OL';return F(-1/i,'Ω')}return c.mode==='AC'?(isA(c)?F(c.Ia,'A'):F(c.Ua,'V')):(isA(c)?F(-c.I,'A'):F(-c.U,'V'))};
function meterHits(c){if(c.type==='dec')return[0,1,2,3,4,5].map(i=>{const x=-100+40*i;return`<rect data-dg="${i}:1" x="${x-18}" y="2" width="36" height="20" fill="transparent" style="cursor:pointer"/><rect data-dg="${i}:-1" x="${x-18}" y="22" width="36" height="20" fill="transparent" style="cursor:pointer"/>`}).join('');if(c.type!=='amp'&&c.type!=='volt')return'';const r=(x,y,w,h,q)=>`<rect data-mq="${q}" x="${x}" y="${y}" width="${w}" height="${h}" fill="transparent" style="cursor:pointer"/>`;
 if(c.ana){const R=c.type==='amp'?RA:RV,ka=i=>-120+i*240/(R.length-1);return r(-68,-4,32,14,'mode')+R.map((v,i)=>r((40*Math.sin(ka(i)*Math.PI/180)-11).toFixed(1),(60-40*Math.cos(ka(i)*Math.PI/180)-8).toFixed(1),22,14,'rng:'+v)).join('')}
 const A=c.type==='amp',pos=d=>[(32*Math.sin(d*Math.PI/180)).toFixed(1),(9-32*Math.cos(d*Math.PI/180)).toFixed(1)],q=(d,m)=>{const p=pos(d);return r(p[0]-10,p[1]-10,20,14,m)};
 return r(-38,-63,26,11,'mode')+(A?q(40,'DC')+q(75,'AC'):q(-40,'DC')+q(-75,'AC'))}
const mmBtns=()=>[[-112,'V='],[-78,'V~'],[-44,'A='],[-10,'A~'],[24,'R']].map(([x,k])=>`<rect data-mm="${k}" x="${x}" y="12" width="30" height="20" fill="transparent" style="cursor:pointer"/>`).join('');
const ohmBtns=()=>[...[200,2000,20000,2e5,2e6].map((v,i)=>[-70+i*28,14,26,18,v]),[-13,34,26,18,'bip']].map(([x,y,w,h,k])=>`<rect data-or="${k}" x="${x}" y="${y}" width="${w}" height="${h}" fill="transparent" style="cursor:pointer"/>`).join('');
const setOhm=(o,k)=>{if(k==='bip')o.bip=!o.bip;else{o.bip=false;o.orng=+k}};
const setMM=(o,k)=>{o.fn=k==='R'?'R':k[0]==='V'?'V':'I';if(k!=='R')o.mode=k[1]==='~'?'AC':'DC'};
const pinH=(x,y)=>`<circle cx="${x}" cy="${y}" r="5" fill="#cfd3d8" stroke="#555" stroke-width="1.5"/>`;
const DIPL={ne555:['GND','TRG','OUT','RST','CTL','THR','DIS','VCC'],aop:['NUL','−','+','V−','NUL','OUT','V+','NC'],cmp:['GND','+','−','V−','BAL','STB','OUT','V+']};
function body(c){let s='';const pl=plugSet.has(c.id),jk=(x,y,col)=>pl?pinH(x,y):jack(x,y,col);
 if(c.type==='bat'){const ang=-135+c.val/30*270,P=psu(c,1),mo='ui-monospace,Consolas,monospace';
  s=`<rect x="-85" y="-50" width="170" height="100" rx="8" fill="#cfd6df" stroke="#6b7684" stroke-width="2"/><rect x="-75" y="-42" width="82" height="34" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-34,-27,P.u.toFixed(2)+' V',15,'#46e07a','middle',mo)}${txt(-34,-13,(P.i===null?'':P.i.toFixed(2)+' A')+(P.cc?' CC':''),11,P.cc?'#ff5252':'#46e07a','middle',mo)}${txt(-34,3,'I max '+fmt(P.l,'A'),8,P.cc?'#c62828':'#334','middle')}
  <circle cx="45" cy="-24" r="17" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-14" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(45 -24) rotate(${ang})"/>${txt(45,12,'TENSION',8,'#334','middle')}${txt(35,18,'− COM',10,'#222')}${txt(-35,18,'+ 0-30V',10,'#b71c1c')}${jack(35,34,'#1b1b1b')}${jack(-35,34,'#d32f2f')}`}
 else if(c.type==='dmm'){const fn=c.fn||'V',ac=c.mode==='AC',on=k=>k==='V='?fn==='V'&&!ac:k==='V~'?fn==='V'&&ac:k==='A='?fn==='I'&&!ac:k==='A~'?fn==='I'&&ac:fn==='R',
   btn=(x,l,k)=>`<g><rect x="${x}" y="12" width="30" height="20" rx="3" fill="${on(k)?'#4f86e8':'#eceef1'}" stroke="#5a6068" stroke-width="1.2"/>${txt(x+15,26,l,9,on(k)?'#fff':'#222')}</g>`,
   mo='ui-monospace,Consolas,monospace',tag=fn==='R'?'Ω 2 fils':(fn==='V'?(ac?'ACV':'DCV'):(ac?'ACI':'DCI'));
  s=`<rect x="-124" y="-60" width="248" height="120" rx="9" fill="#d5d8dc" stroke="#6b727b" stroke-width="2"/><rect x="-112" y="-50" width="150" height="54" rx="4" fill="#aab79a" stroke="#333" stroke-width="2"/>${txt(30,-13,reading(c),22,'#1f2a1a','end',mo)}${txt(-106,-38,tag,8,'#1f2a1a','start')}${btn(-112,'DCV','V=')}${btn(-78,'ACV','V~')}${btn(-44,'DCI','A=')}${btn(-10,'ACI','A~')}${btn(24,'Ω','R')}${txt(-112,50,'MULTIMÈTRE 5½ DIGITS',8,'#445','start')}${txt(92,-39,'V / Ω',8,'#b71c1c')}${txt(92,-10,'COM',8,'#222')}${txt(74,55,'3 A',8,'#222')}${txt(106,55,'16 A',8,'#222')}${jk(92,-26,'#d32f2f')}${jk(92,2,'#1b1b1b')}${jk(74,32,'#f4f4f4')}${jk(106,32,'#f4f4f4')}${c.fb3?txt(74,36,'✕',16,'#d32f2f'):''}${c.fb16?txt(106,36,'✕',16,'#d32f2f'):''}`}
 else if(c.type==='bat2'){const P=[psu(c,1),psu(c,2)],mo='ui-monospace,Consolas,monospace',kn=(x,a)=>`<circle cx="${x}" cy="4" r="10" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-2" x2="0" y2="-9" stroke="#fff" stroke-width="2.5" stroke-linecap="round" transform="translate(${x} 4) rotate(${a})"/>`,
   half=(x,p,v,i)=>`<rect x="${x-44}" y="-44" width="88" height="34" rx="4" fill="#0b1a12" stroke="#444"/>${txt(x,-29,p.u.toFixed(2)+' V',15,'#46e07a','middle',mo)}${txt(x,-15,(p.i===null?'':p.i.toFixed(2)+' A')+(p.cc?'  CC':''),11,p.cc?'#ff5252':'#46e07a','middle',mo)}${kn(x-22,-135+v/30*270)}${kn(x+22,-135+Math.min(1,p.l/10)*270)}${txt(x-22,21,'U',7,'#334','middle')}${txt(x+22,21,'I max',7,'#334','middle')}`;
  s=`<rect x="-100" y="-50" width="200" height="100" rx="8" fill="#cfd6df" stroke="#6b7684" stroke-width="2"/>${half(-48,P[0],c.val)}${half(48,P[1],c.val2)}${txt(-48,-47,'CH1',7,'#334','middle')}${txt(48,-47,'CH2',7,'#334','middle')}${jack(-70,34,'#d32f2f')}${jack(-26,34,'#1b1b1b')}${jack(26,34,'#d32f2f')}${jack(70,34,'#1b1b1b')}`}
 else if(c.type==='tsop'){const d=c.det&&!err;
  s=`<path d="M-26 46V18M0 46V18M26 46V18" stroke="#b9bdc3" stroke-width="3"/><rect x="-36" y="-24" width="72" height="44" rx="4" fill="#17171c" stroke="#555" stroke-width="2"/><circle cx="0" cy="-5" r="12" fill="#2a1030" stroke="#6b3a7a" stroke-width="2"/><circle cx="0" cy="-5" r="5" fill="#0d0612"/>${txt(0,14,'TSOP',8,'#9aa','middle')}<g stroke="#ab47bc" stroke-width="2.2" stroke-linecap="round" opacity="${d?1:.25}"><path d="M-58 -16L-42 -8M-58 -4L-42 4"/></g>${txt(0,-36,+(c.fc/1000).toPrecision(4)+' kHz',9,'var(--ink)','middle')}${err||c.tsA===undefined?'':d?txt(0,-48,'porteuse détectée · OUT bas',8,'#d32f2f','middle'):txt(0,-48,c.blk?'faisceau coupé':'rien détecté · OUT haut',8,'#667','middle')}${txt(-26,68,'OUT',9,'var(--ink)','middle')}${txt(0,68,'GND',9,'var(--ink)','middle')}${txt(26,68,'VS',9,'var(--ink)','middle')}${jk(-26,46,'#bdbdbd')}${jk(0,46,'#1b1b1b')}${jk(26,46,'#d32f2f')}`}
 else if(c.type==='ac'){const a1=-135+c.val/230*270,a2=-135+Math.log10(c.f)/3*270,kn=(x,a)=>`<circle cx="${x}" cy="-20" r="14" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-12" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -20) rotate(${a})"/>`;
  s=`<rect x="-95" y="-50" width="190" height="100" rx="8" fill="#b9c6d6" stroke="#4d5e73" stroke-width="2"/><rect x="-95" y="-50" width="190" height="8" rx="4" fill="#1565c0"/><rect x="-85" y="-38" width="92" height="40" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-39,-20,+c.val.toFixed(1)+' V ~',17,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-39,-5,+c.f.toPrecision(4)+' Hz',13,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${kn(38,a1)}${kn(74,a2)}${txt(38,8,'TENSION',7,'#334')}${txt(74,8,'FRÉQ.',7,'#334')}${txt(-40,18,'N',10,'#0d47a1')}${txt(40,18,'Φ 0-230V~',10,'#b71c1c')}${jack(-40,34,'#1565c0')}${jack(40,34,'#d32f2f')}`}
 else if(c.type==='gbf'){const a1=-135+c.amp/12*270,a2=-135+(Math.log10(c.f)-1)/5*270,x0=i=>-90+i*38,W=['sin','sq','tri'],
  ic=[i=>`M${x0(i)+4} 24q6.5 -14 13 0t13 0`,i=>`M${x0(i)+4} 32V18H${x0(i)+13}V32H${x0(i)+21}V18H${x0(i)+30}`,i=>`M${x0(i)+4} 29L${x0(i)+11} 17L${x0(i)+19} 29L${x0(i)+26} 17`],
  kn=(x,a)=>`<circle cx="${x}" cy="-28" r="12" fill="#263238" stroke="#101519" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-10" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -28) rotate(${a})"/>`;
  s=`<rect x="-100" y="-55" width="200" height="110" rx="8" fill="#37474f" stroke="#1c262b" stroke-width="2"/>${txt(0,-46,'GÉNÉRATEUR DE FONCTIONS',8,'#eceff1')}<rect x="-90" y="-42" width="110" height="46" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-35,-20,fmt(c.f,'Hz'),17,'#46e07a','middle','ui-monospace,Consolas,monospace')}${(()=>{const t=c.amp.toFixed(1)+' V'+(c.off?(c.off>0?' +':' ')+c.off.toFixed(1)+' V':'')+(c.wave!=='sin'&&Math.abs(c.duty-.5)>.004?' · '+Math.round(c.duty*100)+'%':'');return txt(-35,-5,t,t.length>15?8:10,'#ffb74d','middle','ui-monospace,Consolas,monospace')})()}${[0,1,2].map(i=>`<rect x="${x0(i)}" y="12" width="34" height="24" rx="4" fill="#263238" stroke="${c.wave===W[i]?'#46e07a':'#78909c'}" stroke-width="2"/><path d="${ic[i](i)}" fill="none" stroke="${c.wave===W[i]?'#46e07a':'#b0bec5'}" stroke-width="2"/>`).join('')}${kn(45,a1)}${kn(78,a2)}${txt(45,-8,'AMPL.',7,'#eceff1')}${txt(78,-8,'FRÉQ.',7,'#eceff1')}${txt(62,6,'SORTIE',7,'#eceff1')}${bnc(62,28)}`}
 else if(c.type==='scope'){const gr=[...Array(11)].map((_,i)=>`M${-140+i*20} -100V60`).join('')+[...Array(9)].map((_,j)=>`M-140 ${-100+j*20}H60`).join(''),
  kb=(x,y,idx,n,lab)=>`<circle cx="${x}" cy="${y}" r="14" fill="#3a4350" stroke="#12181b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-12" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} ${y}) rotate(${-135+Math.max(0,idx)/(n-1)*270})"/>${txt(x,y+26,lab,7,'#eceff1')}`,
  ro='1:'+fmt(c.v1,'V')+(c.cp1==='DC'?'':' '+c.cp1)+'  2:'+fmt(c.v2,'V')+(c.cp2==='DC'?'':' '+c.cp2)+(c.xy?'  XY':'  '+fmt(c.td,'s')+'/div');
  s=`<rect x="-150" y="-110" width="300" height="220" rx="10" fill="#2f3a3f" stroke="#12181b" stroke-width="2"/><rect x="-146" y="-106" width="208" height="170" rx="6" fill="#0a0f0c" stroke="#555" stroke-width="2"/><path d="${gr}" stroke="rgba(120,200,140,.28)" fill="none"/><path d="M-40 -100V60M-140 -20H60" stroke="rgba(120,200,140,.55)" fill="none"/><g transform="translate(-140 -100)">${traces(c,20)}</g>${txt(-137,57,ro,7,'#9ccc65','start','ui-monospace,Consolas,monospace')}${txt(107,-94,'OSCILLOSCOPE',8,'#eceff1')}${kb(107,-62,TD.indexOf(c.td),TD.length,'BASE TEMPS')}${kb(107,-14,VD.indexOf(c.v1),VD.length,'CH1 V/DIV')}${kb(107,34,VD.indexOf(c.v2),VD.length,'CH2 V/DIV')}${bnc(-90,88)}${bnc(-30,88)}${txt(-66,92,'CH1',9,'#ffeb3b','start')}${txt(-6,92,'CH2',9,'#00e5ff','start')}${txt(-60,70,'masses reliées',7,'#b0bec5')}`}
 else if(c.type==='cap'){
  s=`${pl?'':`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/>`}<path d="M-52 0H-26M26 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-28" y="-15" width="56" height="30" rx="6" fill="#e8a317" stroke="#8a5d00" stroke-width="1.5"/><rect x="-23" y="-11" width="46" height="4" rx="2" fill="rgba(255,255,255,.4)"/>${txt(0,9,+c.val.toPrecision(3)+' µF',11,'#3b2600')}${jk(-52,0,'#bdbdbd')}${jk(52,0,'#bdbdbd')}`}
 else if(c.type==='ind'){const tr=[-24,-16,-8,0,8,16,24].map(x=>`<path d="M${x-3} 13L${x+3} -13" stroke="#c8702a" stroke-width="5" stroke-linecap="round"/>`).join('');
  s=`${pl?'':`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/>`}<path d="M-52 0H-30M30 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-31" y="-14" width="62" height="28" rx="4" fill="#9aa3ad" stroke="#59616b"/>${tr}${txt(0,-26,+c.val.toPrecision(3)+' mH · '+c.r+' Ω',10,'var(--ink)')}${jk(-52,0,'#bdbdbd')}${jk(52,0,'#bdbdbd')}`}
 else if(c.type==='watt'){const S=c.Ur*c.Ir,D=c.disp||'W',v=err?null:D==='W'?c.P:D==='VAr'?c.Q:D==='VA'?S:D==='PF'?(S>1e-9?c.P/S:0):D==='V'?c.Ur:D==='Wh'?(c.E||0):c.Ir,
  num=fuseBlown(c)?'FUSE':v==null?'-----':Math.abs(v)<1e-9?'0.000':String(+v.toPrecision(4)),
  bt=(x,l)=>`<rect x="${x}" y="22" width="24" height="18" rx="3" fill="#2a2a2a" stroke="#111"/><circle cx="${x+12}" cy="31" r="3" fill="${D===l?'#ff3b30':'#4a2a2a'}"/>${txt(x+12,18,l,8,'#222')}`;
  s=`<rect x="-130" y="-60" width="260" height="120" rx="6" fill="#ddd9cf" stroke="#8c887c" stroke-width="2"/><rect x="-122" y="-50" width="134" height="56" rx="3" fill="#1a0a0a" stroke="#333"/>${txt(8,-10,num,28,'#ff2a1a','end','ui-monospace,Consolas,monospace')}${txt(-116,-38,D==='PF'?'':D,9,'#ff6a5a','start')}${bt(-124,'W')}${bt(-96,'VAr')}${bt(-68,'VA')}${bt(-40,'PF')}${bt(-4,'V')}${bt(24,'A')}${txt(-60,54,'POWER8000 · WATTMETER',8,'#555')}${txt(75,-44,'SOURCE',8,'#222')}${txt(115,-44,'LOAD',8,'#222')}<path d="M75 16H115" stroke="#555" stroke-width="2"/><rect x="85" y="10" width="20" height="12" rx="2" fill="#f4f0e0" stroke="#444" stroke-width="1.5"/><path d="M88 16H102" stroke="#444" stroke-width="1.2"/>${txt(95,34,'mesure I',6,'#444')}${jack(75,-26,'#d32f2f')}${jack(75,16,'#1976d2')}${jack(115,-26,'#d32f2f')}${jack(115,16,'#1b1b1b')}`}
 else if(c.type==='pince'){const S=c.Ur*c.Ir,D=c.disp||'A',cl=c.cl,
  v=err?null:D==='A'?(c.mode==='AC'?c.Ia:c.I):D==='W'?c.P:D==='VAr'?c.Q:D==='VA'?S:D==='PF'?(S>1e-9?c.P/S:0):D==='V'?c.Ur:D==='Wh'?(c.E||0):c.Ir,
  tv=v==null?'----':D==='PF'?v.toFixed(2):fmt(v,D),ang=cl?cl.ang+(c.rev?180:0):0;
  s=`<rect x="22" y="-36" width="190" height="72" rx="12" fill="#5d7a8c" stroke="#2c3e48" stroke-width="2"/><circle r="31" fill="none" stroke="#f2c200" stroke-width="20"/><circle r="41" fill="none" stroke="#8a6d00" stroke-width="1.5"/><circle r="21" fill="none" stroke="#8a6d00" stroke-width="1.5"/><path d="M0 -41V-21" stroke="#6d5600" stroke-width="2.5"/><rect x="58" y="-28" width="88" height="38" rx="4" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(142,-4,tv,15,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(62,-17,D==='A'?'I  '+(c.mode==='AC'?'AC ~':'DC ='):({W:'P  (W)',VAr:'Q  (VAr)',VA:'S  (VA)',V:'U  (V)',Wh:'E  (Wh)',PF:'PF'})[D]||D,8,'#14210c','start')}<circle cx="150" cy="22" r="10" fill="#263238" stroke="#101519" stroke-width="2"/>${txt(172,25,'MODE',6,'#eceff1')}${txt(62,31,'PROVA 21',8,'#eceff1','start')}${cl?`<g transform="rotate(${ang}) translate(0 15)"><path d="M-13 0H13M7 -4.5L13 0L7 4.5" stroke="#d32f2f" stroke-width="2.5" fill="none"/></g>`:''}${jack(194,-16,'#d32f2f')}${jack(194,18,'#1b1b1b')}`}
 else if(c.type==='com'){const x=c.pos?30:-30;
  s=`<rect x="-65" y="-32" width="130" height="66" rx="8" fill="#c9ced6" stroke="#6b7684" stroke-width="2"/><circle cx="-30" cy="-22" r="4" fill="#555"/><circle cx="30" cy="-22" r="4" fill="#555"/><circle cy="-2" r="5" fill="#555"/><line x1="0" y1="-2" x2="${x}" y2="-22" stroke="#e53935" stroke-width="8" stroke-linecap="round"/>${txt(-45,12,'A',9,'#222')}${txt(0,12,'C',9,'#222')}${txt(45,12,'B',9,'#222')}${jack(-45,24,'#bdbdbd')}${jack(0,24,'#bdbdbd')}${jack(45,24,'#bdbdbd')}`}
 else if(c.type==='ne555'||c.type==='aop'||c.type==='cmp'){const T=c.type,L=geo(c).t,labs=DIPL[T],nm=T==='ne555'?'NE555':T==='aop'?'LF356':'LM311',sub=T==='ne555'?'Timer':T==='aop'?'AOP JFET':'Comparateur'+(c.oc?' · coll. ouvert':'');
  s=`<rect x="-50" y="-30" width="100" height="60" rx="5" fill="#1f1f22" stroke="#000" stroke-width="2"/><path d="M-50 -9A9 9 0 0 1 -50 9" fill="#0b0b0c" stroke="#555"/><circle cx="-41" cy="21" r="3" fill="#666"/><rect x="-44" y="-26" width="88" height="3" rx="1.5" fill="rgba(255,255,255,.08)"/>${txt(2,-3,nm,16,'#e6e6e6')}${txt(2,11,sub,7.5,'#9e9e9e')}${L.map((t,i)=>{const b=t[1]>0;return`<path d="M${t[0]} ${b?30:-30}V${t[1]}" stroke="#b9bdc3" stroke-width="7"/>${txt(t[0],b?24:-19,i+1,6.5,'#8a8a8f')}${pinH(t[0],t[1])}${txt(t[0],b?t[1]+19:t[1]-12,labs[i],8,'var(--ink)')}`}).join('')}`}
 else if(c.type==='dio'){const D=DK[c.dk]||DK.d4148,z=!!D[3];
  s=`${pl?'':'<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/>'}<path d="M-52 0H-26M26 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-26" y="-9" width="52" height="18" rx="${z?9:4}" fill="${z?'#5d4a3a':'#1d1d1f'}" stroke="#000" stroke-width="1.5"/><rect x="14" y="-9" width="7" height="18" fill="#cfd3d8"/><rect x="-21" y="-6" width="26" height="3" rx="1.5" fill="rgba(255,255,255,.2)"/>${txt(0,-26,D[0],9,'var(--ink)')}${txt(-52,-12,'A',7,'var(--ink)')}${txt(52,-12,'K',7,'var(--ink)')}${jk(-52,0,'#bdbdbd')}${jk(52,0,'#bdbdbd')}`}
 else if(c.type==='dled'){const L=LC[c.lc]||LC.rouge,col=L[2],I=err||c.I===undefined?0:Math.max(0,c.I),ir=c.lc==='ir',b=ir?Math.min(1,I/.03)*.3:Math.min(1,I/.012),hot=I>.035;
  s=`<circle cy="-12" r="${24+b*22}" fill="${col}" fill-opacity="${(b*.4).toFixed(2)}"/><path d="M-13 14V46M13 14V46" stroke="#b9bdc3" stroke-width="3"/><path d="M-20 14V-6A20 20 0 0 1 20 -6V14Z" fill="${col}" fill-opacity="${(.3+.65*b).toFixed(2)}" stroke="${col}" stroke-opacity=".9" stroke-width="2"/><rect x="-24" y="14" width="48" height="6" rx="2" fill="${col}" fill-opacity=".5" stroke="#555"/><path d="M-6 14V-2M6 14V-8" stroke="#777" stroke-width="2"/><path d="M-8 -6L8 -12" stroke="#777" stroke-width="2"/>${b>.05?`<circle cx="-7" cy="-8" r="5" fill="#fff" fill-opacity="${(b*.7).toFixed(2)}"/>`:''}<path d="M20 -2V12" stroke="${col}" stroke-width="3" stroke-opacity=".8"/>${txt(-13,68,'+',11,'var(--ink)')}${txt(13,68,'−',11,'var(--ink)')}${txt(0,-36,ir?'LED IR 940 nm':'LED '+L[0].toLowerCase(),8,'var(--ink)')}${hot?txt(0,-46,'surintensité !',10,'#d32f2f'):ir&&I>.0005?txt(0,-46,'émet '+Math.round(I*1000)+' mA',8,'#7b1fa2'):''}${jk(-13,46,'#bdbdbd')}${jk(13,46,'#bdbdbd')}`}
 else if(c.type==='ldr'){const R=ldrR(c),k=Math.min(1,Math.max(.15,Math.log10(Math.max(c.lux,.1))/4+.2));
  s=`<path d="M-13 14V46M13 14V46" stroke="#b9bdc3" stroke-width="3"/><circle cy="-12" r="26" fill="#9a7b2f" stroke="#5a4414" stroke-width="2"/><circle cy="-12" r="21" fill="#e4cf86" stroke="#8a6d1a"/><path d="M-15 -26H15V-20H-15V-14H15V-8H-15V-2H15" fill="none" stroke="#7a3b10" stroke-width="2.6" stroke-linejoin="round"/><g stroke="#f9a825" stroke-width="2.5" stroke-linecap="round" opacity="${k.toFixed(2)}"><path d="M-40 -48L-28 -36M-30 -50L-20 -40M-48 -36L-38 -26"/></g>${txt(10,-44,fmt(c.lux,'lx'),8,'var(--ink)','start')}${txt(0,66,fmt(R,'Ω'),9,'var(--ink)')}${jk(-13,46,'#bdbdbd')}${jk(13,46,'#bdbdbd')}`}
 else if(c.type==='bjt'||c.type==='fet'||c.type==='triac'){const pw=c.type==='triac'||!!c.pw,pn_=c.type==='bjt'?(c.kd==='pnp'?'PNP':'NPN'):c.type==='fet'?({nmos:'MOSFET N',pmos:'MOSFET P',hemt:'HEMT (déplétion)',gan:'HEMT GaN'})[c.fk||'nmos']:'TRIAC',
   lb=c.type==='bjt'?['B','C','E']:c.type==='fet'?['G','D','S']:['MT1','MT2','G'],ref=c.type==='bjt'?(c.kd==='pnp'?(pw?'TIP42':'2N2907'):(pw?'TIP41':'2N2222')):c.type==='fet'?({nmos:pw?'IRF540':'2N7000',pmos:pw?'IRF9540':'BS250',hemt:'ATF-34143',gan:'EPC2001'})[c.fk||'nmos']:'BTA16',
   on=!err&&c.mst>0&&(c.mon>.05||c.mi1>1e-4),hot=!err&&(c.type==='triac'?(c.mi1>16):pw?(c.mi1>(c.type==='bjt'?5:60)):(c.mi1>(c.type==='bjt'?.8:.8))),
   body=pw?`<rect x="-36" y="-30" width="72" height="42" rx="3" fill="#2a2a2e" stroke="#000" stroke-width="1.5"/><rect x="-36" y="-52" width="72" height="22" rx="3" fill="#b9bec5" stroke="#6b727b" stroke-width="1.5"/><circle cx="0" cy="-41" r="6" fill="#eceff1" stroke="#6b727b"/><path d="M-22 12V46M0 12V46M22 12V46" stroke="#b9bdc3" stroke-width="3.5"/>`:`<path d="M-26 14V-10A26 26 0 0 1 26 -10V14Z" fill="#2a2a2e" stroke="#000" stroke-width="1.5"/><path d="M-22 14V46M0 14V46M22 14V46" stroke="#b9bdc3" stroke-width="3"/>`,
   i1=c.mi1===undefined||err?'':(c.type==='bjt'?'Ic = '+fmt(c.mi1,'A')+'  Ib = '+fmt(c.mi2,'A'):c.type==='fet'?'Id = '+fmt(c.mi1,'A'):c.mst>0?'passant  I = '+fmt(c.mi1,'A'):'bloqué'),
   stt=c.type==='bjt'&&c.mst!==undefined&&!err?['bloqué','actif (amplificateur)','saturé'][c.mst]||'':'';
  s=`${on?`<circle cy="-14" r="54" fill="#ffb300" fill-opacity=".12"/>`:''}${body}${txt(0,pw?-12:-8,ref,9,'#d9dce0')}${txt(0,-(pw?64:38),pn_+(c.type==='bjt'||c.type==='fet'?(pw?' puissance':''):' de puissance'),8,'var(--ink)')}${i1?txt(0,-(pw?76:50),i1,8,hot?'#d32f2f':'#455a64'):''}${stt?txt(0,82,stt,8,'#455a64'):''}${hot?txt(0,92,'surintensité !',9,'#d32f2f'):''}${lb.map((l,i)=>txt(-22+22*i,63,l,9,'var(--ink)')).join('')}${jk(-22,46,'#bdbdbd')}${jk(0,46,'#bdbdbd')}${jk(22,46,'#bdbdbd')}`}
 else if(c.type==='otri'){const on=!err&&c.mst>0,led=!err&&c.mi2>.002;
  s=`<rect x="-44" y="-26" width="88" height="40" rx="4" fill="#26262a" stroke="#000" stroke-width="1.5"/><path d="M-44 -14A6 6 0 0 0 -44 -2" fill="#111"/><circle cx="-34" cy="-18" r="3" fill="#555"/><path d="M-30 14V46M-10 14V46M10 14V46M30 14V46" stroke="#b9bdc3" stroke-width="3"/>${led?`<circle cx="-20" cy="-6" r="9" fill="#e53935" fill-opacity=".7"/>`:''}${on?`<circle cx="20" cy="-6" r="9" fill="#ffb300" fill-opacity=".8"/>`:''}${txt(0,-9,'MOC3021'+(c.zc?' ZC':''),9,'#d9dce0')}${txt(0,-34,'optotriac',8,'var(--ink)')}${txt(0,-46,err||c.mi1===undefined?'':(on?'passant  I = '+fmt(c.mi1,'A'):'bloqué')+(led?'  LED '+fmt(c.mi2,'A'):''),8,'#455a64')}${['A','K','T1','T2'].map((l,i)=>txt(-30+20*i,63,l,9,'var(--ink)')).join('')}${jk(-30,46,'#bdbdbd')}${jk(-10,46,'#bdbdbd')}${jk(10,46,'#bdbdbd')}${jk(30,46,'#bdbdbd')}`}


 else if(c.type==='lev'){const h=c.lh||0,yt=-6+(HMAX-h)/HMAX*(-1)*0+(1-h/HMAX)*80,ang=h/(c.dr/100)*180/Math.PI,mt=comps.find(x=>x.id===c.lm),top=!!(h>=HMAX-1e-6);
  s=`<rect x="-80" y="-78" width="160" height="196" rx="8" fill="#eceff1" stroke="#90a4ae" stroke-width="2"/><rect x="-60" y="-70" width="8" height="180" fill="#78909c"/><rect x="-60" y="-70" width="100" height="10" fill="#78909c"/>${[0,.5,1,1.5,2].map(m=>`<path d="M-52 ${(96-m/HMAX*80-0).toFixed(1)}h8" stroke="#455a64"/>${txt(-40,(99-m/HMAX*80).toFixed(1),m+' m',6,'#455a64','start')}`).join('')}<circle cx="14" cy="-45" r="16" fill="#cfd8dc" stroke="#37474f" stroke-width="2.5"/><g transform="rotate(${ang.toFixed(1)} 14 -45)"><path d="M14 -60V-30M-1 -45H29" stroke="#37474f" stroke-width="2.5"/></g><path d="M30 -45V${(-24+(1-h/HMAX)*80).toFixed(1)}" stroke="#5d4037" stroke-width="2"/><rect x="14" y="${(-24+(1-h/HMAX)*80).toFixed(1)}" width="32" height="26" rx="3" fill="${c.stall?'#c62828':'#546e7a'}" stroke="#263238" stroke-width="2"/>${txt(30,(-24+(1-h/HMAX)*80+17).toFixed(1),fmt(c.mass,'kg').replace(' ',''),9,'#fff')}${txt(0,-72,'LEVAGE',8,'var(--ink)')}${txt(0,110,mt?'moteur #'+mt.id+' · '+(h).toFixed(2)+' m'+(top?' (haut)':''):'aucun moteur à proximité',7,'#455a64')}${c.stall?txt(0,-4,'CALE !',11,'#c62828'):''}`}
 else if(c.type==='ohm'){const mx=c.bip?0:(c.orng||2000),R=err?Infinity:ohmR(c),beep=c.bip&&R<50,mo='ui-monospace,Consolas,monospace',
  bt=(x,l,k)=>{const on=k==='bip'?c.bip:(!c.bip&&mx===+k);return`<g data-or="${k}" style="cursor:pointer"><rect x="${x}" y="14" width="26" height="18" rx="3" fill="${on?'#4f86e8':'#eceef1'}" stroke="#5a6068"/>${txt(x+13,26,l,7,on?'#fff':'#222')}</g>`};
  s=`<rect x="-80" y="-50" width="160" height="118" rx="9" fill="#d5d8dc" stroke="#6b727b" stroke-width="2"/><rect x="-70" y="-42" width="140" height="48" rx="4" fill="#aab79a" stroke="#333" stroke-width="2"/>${txt(62,-12,reading(c),22,'#1f2a1a','end',mo)}${txt(-64,-30,c.bip?'BIP ·))':'Ω ≤ '+fmt(mx,'Ω'),8,'#1f2a1a','start')}${beep?txt(-64,-4,'♪ BIP',9,'#c62828','start'):''}${[['200',200],['2k',2000],['20k',20000],['200k',200000],['2M',2e6]].map(([l,v],i)=>bt(-70+i*28,l,v)).join('')}${bt(-13,'BIP','bip').replace('y="14"','y="34"').replace(/y="26"/,'y="46"')}${txt(-30,40,'COM',8,'#222')}${txt(30,40,'Ω',8,'#b71c1c')}${txt(0,-56,'OHMMÈTRE',8,'var(--ink)')}${jk(-30,52,'#1b1b1b')}${jk(30,52,'#d32f2f')}`}
 else if(c.type==='reg'){s=`<rect x="-45" y="-34" width="90" height="62" rx="5" fill="#2b2f36" stroke="#111" stroke-width="2"/><rect x="-45" y="-34" width="90" height="14" fill="#9aa3ad" stroke="#111"/><circle cx="0" cy="-27" r="4" fill="#2b2f36"/>${txt(0,-4,'RÉGULATEUR',8,'#e8eaed')}${txt(0,12,'Un = '+fmt(c.ur||5,'V'),11,'#ffd54f')}${txt(-30,28+10,'IN',8,'var(--ink)')}${txt(0,38,'OUT',8,'var(--ink)')}${txt(30,38,'GND',8,'var(--ink)')}<path d="M-30 28V44M0 28V44M30 28V44" stroke="#b9bdc3" stroke-width="3"/>${jk(-30,44,'#d32f2f')}${jk(0,44,'#f4f4f4')}${jk(30,44,'#1b1b1b')}`}
 else if(c.type==='spk'){const pel=!err&&c.arm?c.arm*c.arm*(c.re||8):0,w=pel>1e-6&&c.afq>0;
  s=`<rect x="-52" y="-52" width="104" height="104" rx="10" fill="#3b3f46" stroke="#1d2025" stroke-width="2"/><circle r="40" fill="#1f2226" stroke="#0e1013" stroke-width="3"/><circle r="30" fill="#2c3036" stroke="#4a4f57" stroke-width="2"/><circle r="12" fill="#14161a" stroke="#555"/>${[[-46,-46],[46,-46],[-46,46],[46,46]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" fill="#9aa0a8"/>`).join('')}${w?`<g fill="none" stroke="#1976d2" stroke-width="2.5" stroke-linecap="round" opacity=".75"><path d="M58 -14A20 20 0 0 1 58 14"/><path d="M66 -24A34 34 0 0 1 66 24"/></g>`:''}<path d="M-14 52V60M14 52V60" stroke="#b9bdc3" stroke-width="3"/>${txt(0,-60,'haut-parleur '+(c.re||8)+' Ω',8,'var(--ink)')}${txt(-14,80,'+',11,'var(--ink)')}${txt(14,80,'−',11,'var(--ink)')}${!err&&c.afq?txt(0,94,Math.round(c.afq)+' Hz  ·  '+fmt(pel,'W'),8,'#455a64'):''}${jk(-14,60,'#bdbdbd')}${jk(14,60,'#bdbdbd')}`}
 else if(c.type==='mic'){const el=c.mk==='ele',lv=c.mr?(c.rl||0):c.ma,fr=c.mr&&c.rl>.02?c.rf:c.mf;
  s=`<path d="M-13 14V46M13 14V46" stroke="#b9bdc3" stroke-width="3"/><rect x="-18" y="-22" width="36" height="36" rx="${el?18:4}" fill="${el?'#9aa0a8':'#4a4f57'}" stroke="#2b2f35" stroke-width="2"/><circle cy="-8" r="${el?10:12}" fill="#1e2024" stroke="#6b727b"/>${[-6,0,6].map(x=>`<path d="M${x-3} -12H${x+3}M${x-3} -6H${x+3}M${x-3} 0H${x+3}" stroke="#555" stroke-width="1"/>`).join('')}${lv>.05?`<g fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M-26 -30A16 16 0 0 1 -26 -10"/><path d="M-32 -38A26 26 0 0 1 -32 -2"/></g>`:''}${txt(0,-32,el?'micro électret':'micro dynamique',8,'var(--ink)')}${txt(0,-42,c.mr&&c.merr?c.merr:Math.round(fr)+' Hz · '+Math.round(lv*100)+' %'+(c.mr?' (réel)':''),8,'#455a64')}${txt(-13,66,el?'OUT':'+',9,'var(--ink)')}${txt(13,66,el?'GND':'−',9,'var(--ink)')}${jk(-13,46,'#bdbdbd')}${jk(13,46,'#bdbdbd')}`}
 else if(c.type==='dec'){const kd=c.dkind||'R',D=DEC[kd],tot=decVal(c),txtT=kd==='R'?fmt(tot,'Ω'):kd==='C'?fmt(tot*1e-6,'F'):fmt(tot*1e-3,'H');
  s=`<rect x="-140" y="-50" width="280" height="122" rx="8" fill="#5f7184" stroke="#2b3540" stroke-width="2"/><rect x="-124" y="-42" width="248" height="22" rx="3" fill="#aab79a" stroke="#333" stroke-width="1.5"/>${txt(116,-25,txtT,15,'#1f2a1a','end','ui-monospace,Consolas,monospace')}${txt(-118,-26,'DÉCADES '+kd,8,'#1f2a1a','start')}`+[0,1,2,3,4,5].map(i=>{const x=-100+40*i;return`<circle cx="${x}" cy="22" r="17" fill="#222" stroke="#000" stroke-width="2"/>${txt(x,28,String((c.dg||[])[i]||0),18,'#fff')}${txt(x,-1,'▲',9,'#e8eaed')}${txt(x,52,'▼',9,'#e8eaed')}${txt(x,66,D.l[i],7.5,'#e8eaed')}`}).join('')+`${txt(-120,100,kd==='R'?'Ω':'',8,'var(--ink)')}${jk(-120,86,'#1b1b1b')}${jk(120,86,'#d32f2f')}`}
 else if(c.type==='irrx'){const ip=c.iph;
  s=`<path d="M-13 14V46M13 14V46" stroke="#b9bdc3" stroke-width="3"/><path d="M-20 14V-6A20 20 0 0 1 20 -6V14Z" fill="#1d1030" fill-opacity=".82" stroke="#4a2a66" stroke-width="2"/><rect x="-24" y="14" width="48" height="6" rx="2" fill="#2b1844" stroke="#555"/><path d="M-6 14V-4M6 14V-10M-8 -4H8" stroke="#777" stroke-width="2"/><g stroke="#ab47bc" stroke-width="2.2" stroke-linecap="round" opacity="${ip>0?Math.min(1,.3+ip*400).toFixed(2):.25}"><path d="M-44 -22L-28 -12M-44 -10L-28 0"/></g>${txt(0,-34,'récepteur IR',8,'var(--ink)')}${c.blk?txt(0,-46,'faisceau coupé',8,'#d32f2f'):ip!==undefined?txt(0,-46,'Iph '+fmt(ip,'A'),8,'#7b1fa2'):''}${txt(-13,68,'C',9,'var(--ink)')}${txt(13,68,'E',9,'var(--ink)')}${jk(-13,46,'#bdbdbd')}${jk(13,46,'#bdbdbd')}`}
 else if(c.type==='hcsr'){const tr=x=>`<circle cx="${x}" cy="-12" r="24" fill="#b8bcc2" stroke="#6b7078" stroke-width="2"/><circle cx="${x}" cy="-12" r="18" fill="#8d9399" stroke="#5f656b"/><circle cx="${x}" cy="-12" r="9" fill="#74797f"/>`;
  s=`<rect x="-80" y="-50" width="160" height="82" rx="6" fill="#1565c0" stroke="#0d3c7a" stroke-width="2"/>${tr(-42)}${tr(42)}${txt(-42,-44,'T',7,'#e3f2fd')}${txt(42,-44,'R',7,'#e3f2fd')}${txt(0,-10,'HC-SR04',7,'#e3f2fd')}${txt(0,25,'d = '+c.dist+' cm',10,'#ffd54f')}<rect x="-52" y="32" width="104" height="22" rx="2" fill="#1b1b1b"/>${['VCC','TRIG','ECHO','GND'].map((l,i)=>txt(-39+i*26,47,l,6.5,'#e0e0e0')).join('')}${geo(c).t.map(t=>jk(t[0],t[1],'#bdbdbd')).join('')}`}
 else if(c.type==='uno'){const en=engOf(c),run=live&&live.on,l13=en&&en.drv(13,run?live.vt:0)===1,T=geo(c).t;
  s=`<rect x="-170" y="-100" width="340" height="200" rx="10" fill="#00838f" stroke="#005662" stroke-width="2.5"/><rect x="-205" y="-30" width="66" height="58" rx="3" fill="#aeb2b7" stroke="#6d7075" stroke-width="2"/><rect x="-199" y="-22" width="48" height="42" fill="#8e9297"/><rect x="-203" y="42" width="60" height="52" rx="3" fill="#202124" stroke="#000" stroke-width="2"/><circle cx="-173" cy="68" r="12" fill="#3a3b3e"/>
<rect x="-45" y="-26" width="140" height="50" rx="3" fill="#212121" stroke="#000" stroke-width="1.5"/><path d="${Array.from({length:14},(_,i)=>`M${-40+i*9.6} -26v-5M${-40+i*9.6} 24v5`).join('')}" stroke="#bbb" stroke-width="2"/><path d="M-45 -8A8 8 0 0 1 -45 8" fill="#0b0b0b"/>${txt(25,2,'ATMEGA328P',9,'#cfd8dc')}
<circle cx="-125" cy="-6" r="10" fill="#c62828" stroke="#7f0000" stroke-width="2"/>${txt(-125,22,'RESET',7,'#e0f7fa')}
<rect x="-98" y="-46" width="12" height="7" rx="1" fill="${l13?'#ffb300':'#5b4a1e'}"/>${l13?'<circle cx="-92" cy="-42" r="12" fill="#ffb300" opacity=".35"/>':''}${txt(-92,-27,'L',8,'#e0f7fa')}<rect x="-98" y="36" width="12" height="7" rx="1" fill="#43a047"/>${txt(-92,54,'ON',7,'#e0f7fa')}
${txt(-30,46,'ARDUINO UNO',12,'#ffffff')}${txt(0,-93,'NUMÉRIQUE  (~ = PWM)',7,'#b2ebf2')}${txt(-120,95,'ALIM.',7,'#b2ebf2')}${txt(80,95,'ANALOGIQUE',7,'#b2ebf2')}
${T.map((t,i)=>`<rect x="${t[0]-8}" y="${t[1]-8}" width="16" height="16" rx="2" fill="#111"/><circle cx="${t[0]}" cy="${t[1]}" r="3.4" fill="#d4af37"/>${txt(t[0],t[1]<0?t[1]+20:t[1]-13,UNOL[i],6.5,'#ffffff')}`).join('')}`}
 else if(c.type==='pot'){const a=(-135+c.pos*270)*Math.PI/180,kx=Math.sin(a)*17,ky=-Math.cos(a)*17;
  s=`<circle cy="-8" r="34" fill="#1565c0" stroke="#0d3c7a" stroke-width="2"/><circle cy="-8" r="22" fill="#cfd8dc" stroke="#78909c" stroke-width="2"/><path d="M0 -8L${kx.toFixed(1)} ${(ky-8).toFixed(1)}" stroke="#263238" stroke-width="5" stroke-linecap="round"/><path d="M-22 21A30 30 0 1 1 22 21" fill="none" stroke="#e3f2fd" stroke-width="1.5" stroke-dasharray="2 3"/>${txt(0,-47,'Potentiomètre '+fmt(c.val,'Ω'),8,'var(--ink)')}${txt(0,70,Math.round(c.pos*100)+' %',9,'var(--ink)')}${['1','2','3'].map((l,i)=>txt(-30+i*30,60,l,8,'var(--ink)')).join('')}${jk(-30,40,'#bdbdbd')}${jk(0,40,'#bdbdbd')}${jk(30,40,'#bdbdbd')}`}
 else if(c.type==='pb'){const d=c.closed?3:0;
  s=`<rect x="-40" y="-40" width="80" height="62" rx="6" fill="#455a64" stroke="#263238" stroke-width="2"/><circle cx="0" cy="${-9+d}" r="${c.closed?17:19}" fill="${c.closed?'#b71c1c':'#e53935'}" stroke="#7f0000" stroke-width="2"/><path d="M-26 22V40M26 22V40" stroke="#b9bdc3" stroke-width="3"/>${txt(0,-48,'Bouton poussoir',8,'var(--ink)')}${txt(0,68,c.closed?'appuyé':'maintenir pour appuyer',8,'var(--mut)')}${jk(-26,40,'#bdbdbd')}${jk(26,40,'#bdbdbd')}`}
 else if(c.type==='bread'){const g=geo(c).t,rows='jihgfedcba';let o=`<rect x="-275" y="-247" width="550" height="494" rx="12" fill="#f1eee6" stroke="#aaa597" stroke-width="2"/><rect x="-262" y="-13" width="524" height="26" rx="4" fill="#dcd8cb"/><path d="M-250 -233H250M250 233H-250" stroke="#1976d2" stroke-width="2"/><path d="M-250 -183H250M-250 183H250" stroke="#d32f2f" stroke-width="2"/>`;
  g.forEach(([x,y])=>{o+=`<rect x="${x-4}" y="${y-4}" width="8" height="8" rx="1.5" fill="#33312c"/>`});
  [0,4,9,14,19].forEach(ci=>{o+=txt(BX0+ci*BP,4,ci+1,9,'#7a766a')});BROW.forEach((y,ri)=>{o+=txt(-262,y+3,rows[ri],8,'#7a766a')+txt(262,y+3,rows[ri],8,'#7a766a')});
  [['−',-221],['+',-195],['+',195],['−',221]].forEach(([l,y])=>{o+=txt(-262,y+3,l,11,l==='+'?'#d32f2f':'#1976d2')+txt(262,y+3,l,11,l==='+'?'#d32f2f':'#1976d2')});
  s=o+txt(0,-236+4,'PLATINE D’ESSAI',8,'#7a766a')}
 else if(c.type==='bb'){const q=c.kind==='q',nm=esc_(c.name||'BN'),bp=bbP(c);
  s=q?`<rect x="-72" y="-52" width="144" height="104" rx="8" fill="#16181b" stroke="#000" stroke-width="2"/><path d="M-92 -30H-72M-92 30H-72M72 -30H92M72 30H92" stroke="#9aa0a8" stroke-width="4"/>${txt(0,4,nm,24,'#ffd54f','middle','ui-monospace,Consolas,monospace')}${txt(0,22,'QUADRIPÔLE',6.5,'#90a4ae')}${txt(-50,9,'E',26,'#eceff1')}${txt(50,9,'S',26,'#eceff1')}${txt(-62,-26,'+',10,'#ef9a9a')}${txt(-62,34,'−',10,'#90a4ae')}${txt(62,-26,'+',10,'#ef9a9a')}${txt(62,34,'−',10,'#90a4ae')}${[[-92,-30,'#d32f2f'],[-92,30,'#1b1b1b'],[92,-30,'#d32f2f'],[92,30,'#1b1b1b']].map(([x,y,cl])=>jack(x,y,cl)).join('')}`
   :`<rect x="-60" y="-34" width="120" height="56" rx="8" fill="#16181b" stroke="#000" stroke-width="2"/><rect x="-60" y="22" width="120" height="26" rx="4" fill="#2a2d31" stroke="#000" stroke-width="2"/>${txt(0,-6,nm,26,'#ffd54f','middle','ui-monospace,Consolas,monospace')}${txt(0,12,'DIPÔLE',7,'#90a4ae')}${jack(-25,36,'#d32f2f')}${jack(25,36,'#1b1b1b')}`}

 else if(c.type==='plc'){const on=!!c.plOn&&c.run!==false&&!c.plE,V=c.plV||[],Q=c.plQ||[],led=(x,y,a,col)=>`<circle cx="${x}" cy="${y}" r="4" fill="${a?col:'#3a3a3a'}" stroke="#111"/>`,mods=(c.plM||[]).length;
  s=`<rect x="-190" y="-76" width="370" height="152" rx="8" fill="#d9dde3" stroke="#6b7684" stroke-width="2"/><rect x="-190" y="-76" width="370" height="22" rx="8" fill="#37474f"/>${txt(-176,-61,'AUTOMATE PROGRAMMABLE',9,'#eceff1','start')}${txt(176,-61,c.sup==='230'?'230 V~':c.sup==='24ac'?'24 V~':'24 V ⎓',9,'#ffcc80','end')}${txt(-150,-66,'',1,'#000')}${txt(-165,-37,'+',9,'#222')}${txt(-135,-37,'−',9,'#222')}${led(-150,-26,c.plOn,'#4caf50')}${txt(-150,-12,'ALIM',6,'#333')}${led(-110,-26,on,'#4caf50')}${txt(-110,-12,'RUN',6,'#333')}${led(-70,-26,!!c.plE,'#e53935')}${txt(-70,-12,'DÉFAUT',6,'#333')}${[0,1,2,3,4,5,6,7].map(k=>txt(-90+30*k,-37,'I'+(k+1),8,'#222')+led(-90+30*k,-22,V[k]&&on,'#4caf50')).join('')}${[0,1,2,3].map(k=>txt(-135+70*k,30,'Q'+(k+1),8,'#222')+led(-135+70*k,18,Q[k],'#ff9800')).join('')}${txt(120,-37,'I8',8,'#222')}${mods?txt(120,30,mods+' module'+(mods>1?'s':''),8,'#555'):txt(120,30,'sans module',8,'#888')}${txt(0,8,c.plE?'Programme : '+c.plE:(on?'Programme en marche':(c.run===false?'Arrêt (STOP)':'Hors tension')),8,c.plE?'#c62828':'#37474f')}${geo(c).t.map(([x,y],i)=>jack(x,y,i<2?(i?'#1b1b1b':'#d32f2f'):i<10?'#1976d2':'#bdbdbd')).join('')}`}
 else if(c.type==='plct'||c.type==='plca'){const tor=c.type==='plct',B=plcBase(c),on=!!(B&&B.plOn&&B.run!==false&&!B.plE),V=c.plV||[],Q=c.plQ||[],led=(x,y,a,col)=>`<circle cx="${x}" cy="${y}" r="4" fill="${a?col:'#3a3a3a'}" stroke="#111"/>`;
  const w=tor?260:190,x0=-w/2+(tor?0:0);
  if(tor)s=`<rect x="-130" y="-76" width="260" height="152" rx="8" fill="#d9dde3" stroke="#6b7684" stroke-width="2"/><rect x="-130" y="-76" width="260" height="22" rx="8" fill="#546e7a"/>${txt(-118,-61,'MODULE TOR',9,'#eceff1','start')}${txt(118,-61,B?'I'+((c.plI0||0)+1)+'… Q'+((c.plQ0||0)+1)+'…':'non raccordé',8,'#ffcc80','end')}${txt(-110,-37,'COM',8,'#222')}${[0,1,2,3,4,5].map(k=>txt(-80+30*k,-37,'I'+((c.plI0||8)+k+1),7,'#222')+led(-80+30*k,-22,V[k]&&on,'#4caf50')).join('')}${[0,1,2,3].map(k=>txt(-95+60*k,30,'Q'+((c.plQ0||4)+k+1),7,'#222')+led(-95+60*k,18,Q[k],'#ff9800')).join('')}${geo(c).t.map(([x,y],i)=>jack(x,y,i===0?'#1b1b1b':i<7?'#1976d2':'#bdbdbd')).join('')}`;
  else{const A=c.plA||[0,0],O=c.plAO||[0,0];s=`<rect x="-95" y="-76" width="190" height="152" rx="8" fill="#d9dde3" stroke="#6b7684" stroke-width="2"/><rect x="-95" y="-76" width="190" height="22" rx="8" fill="#546e7a"/>${txt(-83,-61,'MODULE ANALOG',9,'#eceff1','start')}${txt(83,-61,B?'AI'+((c.plA0||0)+1)+' AO'+((c.plO0||0)+1):'non raccordé',8,'#ffcc80','end')}${txt(-60,-37,'COM',8,'#222')}${txt(-20,-37,'AI'+((c.plA0||0)+1),8,'#222')}${txt(20,-37,'AI'+((c.plA0||0)+2),8,'#222')}${txt(-20,-14,A[0].toFixed(2)+' V',8,'#1b5e20')}${txt(20,-14,A[1].toFixed(2)+' V',8,'#1b5e20')}${txt(-20,32,'AO'+((c.plO0||0)+1),8,'#222')}${txt(20,32,'AO'+((c.plO0||0)+2),8,'#222')}${txt(-20,14,(on?O[0]:0).toFixed(2)+' V',8,'#e65100')}${txt(20,14,(on?O[1]:0).toFixed(2)+' V',8,'#e65100')}${txt(-60,32,'COM',8,'#222')}${txt(0,-2,'0 – 10 V',8,'#555')}${geo(c).t.map(([x,y],i)=>jack(x,y,i===0||i===5?'#1b1b1b':i<3?'#1976d2':'#d32f2f')).join('')}`}}
 else if(c.type==='cem'||c.type==='cet'){const tri=c.type==='cet',hw=tri?135:95,kwh=(c.E||0)/1000,dg=(kwh<0?'-':'')+Math.abs(kwh).toFixed(2).padStart(8,'0'),Pw=err?null:c.P,lab=(x,a,b)=>txt(x,38,a,8,'#222')+(b?txt(x,28,b,6,'#555'):'');
  const L=tri?[[-105,'1'],[-75,'2'],[-45,'3'],[-15,'N'],[15,'1'],[45,'2'],[75,'3'],[105,'N']]:[[-60,'L'],[-30,'N'],[30,'L'],[60,'N']];
  s=`<rect x="${-hw}" y="-62" width="${2*hw}" height="124" rx="8" fill="#e6e2d6" stroke="#8c887c" stroke-width="2"/><rect x="${-hw+12}" y="-50" width="${2*hw-24}" height="36" rx="3" fill="#c9d3c0" stroke="#555"/>${txt(hw-40,-24,dg,24,'#1b2a1b','end','ui-monospace,Consolas,monospace')}${txt(hw-38,-24,'kWh',8,'#1b2a1b','start')}${txt(-hw+18,-38,Pw==null?'':'P = '+fmt(Pw,'W'),9,'#1b2a1b','start')}${txt(0,2,tri?'COMPTEUR D’ÉNERGIE TRIPHASÉ 400 V':'COMPTEUR D’ÉNERGIE 230 V',9,'#444')}${txt(0,14,'×'+(c.eacc||1)+' (temps accéléré)',7,'#666')}${txt(tri?-60:-45,20,'SOURCE',7,'#222')}${txt(tri?60:45,20,'CHARGE',7,'#222')}${L.map(([x,t])=>txt(x,38,t,8,'#222')+jack(x,52,t==='N'?'#1976d2':'#d32f2f')).join('')}`}
 else if(c.type==='cwm'){const k=c.cwp?1:0,ang=k?40:-40,jc=(x,y,col,t,ty)=>jack(x,y,col)+txt(x,ty,t,8,'#222');
  s=`<rect x="-130" y="-78" width="280" height="156" rx="8" fill="#c9ced6" stroke="#6b7684" stroke-width="2"/>${[0,1,2].map(j=>`<path d="M${-105+35*j} -42V42" stroke="${j===k?'#e53935':j===2?'#1976d2':'#8a929c'}" stroke-width="${j===k||j===2?4:2}"/>`).join('')}<path d="M${-105+35*k} -8H50V42M-35 12H120V42" stroke="#e53935" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${[0,1,2].map(j=>jc(-105+35*j,-50,'#d32f2f','L'+(j+1),-64)+jc(-105+35*j,50,'#d32f2f','L'+(j+1),68)).join('')}${jc(50,50,'#d32f2f','W I+',68)}${jc(85,50,'#1b1b1b','W I−',68)}${jc(120,50,'#1976d2','W U (L3)',68)}<circle cx="70" cy="-14" r="26" fill="#3a4350" stroke="#1c222b" stroke-width="3"/><line x1="0" y1="-2" x2="0" y2="-22" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="translate(70 -14) rotate(${ang})"/>${txt(40,-38,'I1·U13',8,'#222')}${txt(100,-38,'I2·U23',8,'#222')}${txt(70,28,'MÉTHODE DES 2 WATTMÈTRES',7,'#444')}${txt(70,-62,k?'Mesure : I2 et U23':'Mesure : I1 et U13',9,'#b71c1c')}`}
 else if(c.type==='a3'){const kn=(x,a)=>`<circle cx="${x}" cy="-20" r="12" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-9" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -20) rotate(${a})"/>`;
  s=`<rect x="-110" y="-55" width="220" height="110" rx="8" fill="#b9c6d6" stroke="#4d5e73" stroke-width="2"/><rect x="-110" y="-55" width="220" height="12" rx="4" fill="#c62828"/>${txt(0,-46,'ALIMENTATION TRIPHASÉE',8,'#fff')}<rect x="-100" y="-36" width="140" height="44" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-30,-16,c.val.toFixed(0)+' V',18,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-30,-2,'phase '+(c.val/Math.sqrt(3)).toFixed(0)+' V · '+fmt(c.f,'Hz'),9,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${kn(62,-135+c.val/400*270)}${kn(92,-135+Math.log10(c.f)/6*270)}${txt(62,6,'TENSION',6.5,'#334')}${txt(92,6,'FRÉQ.',6.5,'#334')}${[['N',-75,'#1976d2'],['L1',-25,'#f9a825'],['L2',25,'#2e7d32'],['L3',75,'#d32f2f']].map(([l,x,cl])=>txt(x,19,l,9,'#222')+jack(x,36,cl)).join('')}`}
  else if(c.type==='tr1'||c.type==='tr3'){const t3=c.type==='tr3',W=t3?130:100,T=c.tx,jk=(l,x,cl)=>txt(x,19,l,8.5,'#222')+jack(x,36,cl),sn=c.sn>=1000?+(c.sn/1000).toPrecision(3)+' kVA':Math.round(c.sn)+' VA',
   core=t3?`<rect x="-57" y="-36" width="114" height="52" fill="none" stroke="#455a64" stroke-width="6"/><line x1="0" y1="-36" x2="0" y2="16" stroke="#455a64" stroke-width="6"/>`+[-57,0,57].map(x=>`<rect x="${x-13}" y="-33" width="26" height="23" rx="4" fill="#d98a3d" stroke="#8a4b12"/><rect x="${x-13}" y="-8" width="26" height="21" rx="4" fill="#4f8fd9" stroke="#1d4f8a"/>`).join(''):`<rect x="-30" y="-36" width="60" height="52" fill="none" stroke="#455a64" stroke-width="6"/><line x1="0" y1="-36" x2="0" y2="16" stroke="#455a64" stroke-width="6"/><rect x="-44" y="-30" width="30" height="40" rx="5" fill="#d98a3d" stroke="#8a4b12"/><rect x="14" y="-30" width="30" height="40" rx="5" fill="#4f8fd9" stroke="#1d4f8a"/>`;
   s=`<rect x="${-W}" y="-55" width="${2*W}" height="110" rx="8" fill="#cfd8dc" stroke="#546e7a" stroke-width="2"/><rect x="${-W}" y="-55" width="${2*W}" height="12" rx="4" fill="#37474f"/>${txt(0,-46,t3?'TRANSFORMATEUR TRIPHASÉ '+(c.cp||'Dy11'):'TRANSFORMATEUR MONOPHASÉ',8,'#fff')}${core}${txt(t3?-92:-70,-30,fmt(c.u1,'V'),9,'#8a4b12','middle','ui-monospace,Consolas,monospace')}${txt(t3?92:70,-30,fmt(c.u2,'V'),9,'#1d4f8a','middle','ui-monospace,Consolas,monospace')}${txt(t3?-92:-70,-18,sn,8,'#37474f','middle')}${txt(t3?92:70,-18,'ucc '+(+c.ucc).toFixed(1)+' %',8,'#37474f','middle')}${!err&&T?txt(0,29,'η '+(T.eta*100).toFixed(1)+' %',8,'#263238','middle'):''}`
   +(t3?[['U',-105,'#f9a825'],['V',-75,'#2e7d32'],['W',-45,'#d32f2f'],['N',-15,'#1976d2'],['u',15,'#f9a825'],['v',45,'#2e7d32'],['w',75,'#d32f2f'],['n',105,'#1976d2']].map(a=>jk(...a)).join(''):[['P1',-75,'#d32f2f'],['P2',-35,'#222'],['S1',35,'#d32f2f'],['S2',75,'#222']].map(a=>jk(...a)).join(''))}
  else if(c.type==='smps'){const kn=(x,a)=>`<circle cx="${x}" cy="-20" r="11" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-2" x2="0" y2="-8" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -20) rotate(${a})"/>`,
   Uo=err||!c.smon?0:(c.Uo||0),Io=err||!c.smon?0:(c.Io||0);
   s=`<rect x="-100" y="-55" width="200" height="110" rx="8" fill="#2f3b45" stroke="#10161b" stroke-width="2"/><rect x="-100" y="-55" width="200" height="12" rx="4" fill="#00897b"/>${txt(0,-46,'ALIMENTATION À DÉCOUPAGE',8,'#fff')}<rect x="-90" y="-36" width="104" height="44" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-38,-16,Uo.toFixed(2)+' V',16,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-38,-2,Io.toFixed(2)+' A · '+(Uo*Io).toFixed(1)+' W',9,'#ffb74d','middle','ui-monospace,Consolas,monospace')}<circle cx="22" cy="-30" r="3.5" fill="${c.smon?(c.cc?'#ff9800':'#43a047'):'#555'}"/>${txt(30,-27,c.smon?(c.cc?'LIMITE':'ON'):'OFF',6.5,'#cfd8dc','start')}${kn(48,-135+(c.val-3.3)/11.7*270)}${kn(78,-135+(c.pmax-30)/270*270)}${txt(48,6,'U SORTIE',6)}${txt(78,6,'P MAX',6)}`
   +[['L',-75,'#d32f2f'],['N',-35,'#1976d2'],['+',35,'#d32f2f'],['−',75,'#222']].map(([l,x,cl])=>txt(x,19,l,9,'#eee')+jack(x,36,cl)).join('')+txt(-55,29,'ENTRÉE 24–400 V~',6,'#9fb3c0','middle')+txt(55,29,'SORTIE',6,'#9fb3c0','middle')}
  else if(c.type==='four'){const T=thTemp(c),jk=(l,x)=>jack(x,60,'#d32f2f');
   s=`<rect x="-90" y="-70" width="180" height="140" rx="10" fill="#e9eaee" stroke="#8d8f98" stroke-width="2"/><rect x="-90" y="-70" width="180" height="28" rx="8" fill="#cfd2da" stroke="#8d8f98"/>${txt(-64,-50,'FOUR',9,'#37474f','middle')}<circle cx="-40" cy="-56" r="9" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="-40" y1="-59" x2="-40" y2="-64" stroke="#fff" stroke-width="2.5" transform="rotate(${-135+(c.cons-30)/270*270} -40 -56)"/>${txt(18,-49,T.toFixed(0)+' °C',13,'#46e07a','middle','ui-monospace,Consolas,monospace')}<rect x="-6" y="-63" width="48" height="18" rx="3" fill="none" stroke="#444"/><circle cx="70" cy="-56" r="5" fill="${c.hon?'#ff5722':'#7a4a3a'}"/><rect x="-78" y="-36" width="156" height="82" rx="6" fill="#2b2b30" stroke="#555" stroke-width="2"/><g transform="translate(-70 -29)">${thPlot(c,140,66)}</g><line x1="-60" y1="52" x2="60" y2="52" stroke="#8d8f98" stroke-width="4" stroke-linecap="round"/>${txt(-40,45,'~',7,'#555','middle')}${txt(40,45,'~',7,'#555','middle')}${jack(-40,60,'#d32f2f')}${jack(40,60,'#1976d2')}`}
  else if(c.type==='enc'){const T=thTemp(c);
   s=`<rect x="-120" y="-80" width="240" height="150" rx="10" fill="#cfd8dc" stroke="#546e7a" stroke-width="2"/>${[...Array(5)].map((_,i)=>`<path d="M${-112+i*0} ${-72+i*0}" />`).join('')}<rect x="-104" y="-64" width="208" height="104" rx="6" fill="${thCol(T)}" stroke="#455a64" stroke-width="3"/>${txt(0,-52,'ENCEINTE ISOLÉE',8,'#263238','middle')}<path d="M-80 28L-68 18L-56 38L-44 18L-32 38L-20 18L-8 38L4 18L16 38L28 18L40 28" stroke="${c.P>0?'#ff3d00':'#37474f'}" stroke-width="3" fill="none"/><circle cx="70" cy="-12" r="7" fill="#37474f" stroke="#111"/><line x1="70" y1="-5" x2="70" y2="20" stroke="#37474f" stroke-width="3"/>${txt(70,-26,'sonde',7,'#263238','middle')}${txt(-36,-16,T.toFixed(1)+' °C',17,'#102a1c','middle','ui-monospace,Consolas,monospace')}${txt(-70,52,'CHAUFFAGE',7,'#37474f','middle')}${txt(70,52,'SONDE 10 mV/°C',7,'#37474f','middle')}${[['',-90,'#d32f2f'],['',-50,'#222'],['+',50,'#d32f2f'],['−',90,'#222']].map(([l,x,cl])=>jack(x,64,cl)).join('')}`}
  else if(c.type==='rtor'||c.type==='rpid'){const t=TH[c.id]&&TH[c.id].c===c?TH[c.id]:null,pv=t&&t.Tm!==undefined?t.Tm:0,pid=c.type==='rpid';
   s=`<rect x="-100" y="-55" width="200" height="110" rx="8" fill="#37474f" stroke="#10161b" stroke-width="2"/><rect x="-100" y="-55" width="200" height="12" rx="4" fill="${pid?'#6a1b9a':'#ef6c00'}"/>${txt(0,-46,pid?'RÉGULATEUR PID':'RÉGULATEUR TOR',8,'#fff')}<rect x="-90" y="-36" width="130" height="44" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-62,-14,pv.toFixed(1),17,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-62,-2,'MESURE °C',6.5,'#9fb3a8','middle')}${txt(0,-14,(+c.cons).toFixed(0),17,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${txt(0,-2,'CONSIGNE',6.5,'#9fb3a8','middle')}${txt(-62,5,pid?(c.pe?'P':'-')+(c.ie?'I':'-')+(c.de?'D':'-'):'±'+(+c.hy).toFixed(1)+' K',7,'#ffcc80','middle')}<circle cx="64" cy="-24" r="5" fill="${c.ron?'#66bb6a':'#555'}"/>${txt(76,-21,pid?Math.round((t?t.u:0)*100)+'%':(c.ron?'ON':'OFF'),8,'#cfd8dc','start')}${txt(-55,29,'ENTRÉE SONDE',6,'#9fb3c0','middle')}${txt(55,29,'SORTIE (contact)',6,'#9fb3c0','middle')}${[['+',-75,'#d32f2f'],['−',-35,'#222'],['',35,'#fbc02d'],['',75,'#fbc02d']].map(([l,x,cl])=>jack(x,36,cl)).join('')}`}
 else if(c.type==='cch'){const T3=c.cm==='tri',P=err?0:(c.P||0),h=Math.min(1,P/4000),bars=[...Array(6)].map((_,i)=>`<rect x="${-72+i*24}" y="-28" width="16" height="48" rx="3" fill="rgb(${Math.round(90+165*h)},${Math.round(60+20*h)},${Math.round(50-30*h)})" stroke="#2b2b2b"/>`).join('');
  s=`<rect x="-90" y="-50" width="180" height="100" rx="8" fill="#6d7780" stroke="#2f3a41" stroke-width="2"/><rect x="-80" y="-38" width="160" height="62" rx="4" fill="#2b3138"/>${bars}<rect x="-80" y="-38" width="160" height="62" rx="4" fill="rgba(255,120,0,${(h*.2).toFixed(2)})"/>${txt(-78,-43,'CAISSE DE CHARGE · '+(T3?'TRIPHASÉ':'MONO / DC'),7,'#eceff1','start')}${txt(86,-43,fmt(c.val,'W'),8,'#ffb74d','end')}${geo(c).t.map((t,i)=>{const act=(i<2)===!T3;return txt(t[0],30,i<2?'M'+(i+1):'L'+(i-1),7,act?'#eceff1':'#78828b')+jack(t[0],t[1],act?'#bdbdbd':'#5d666e')}).join('')}<path d="M-12 27V47" stroke="#cfd8dc" stroke-dasharray="2 2"/>`}
 else if(c.type==='m3'){const hot=!err&&c.Ur>0&&((c.cpl==='D'?c.Ur:c.Ur/Math.sqrt(3))>1.15*c.un),rps=c.rps||0,dur=rps>.02?(1/Math.min(rps,4)).toFixed(2):0,
  blades=lookB(c)||[0,60,120,180,240,300].map(a=>`<path transform="rotate(${a})" d="M-3 -4L-4 -23H4L3 -4Z" fill="#9aa3ab" stroke="#4a525a"/>`).join(''),fins=c.look?'':[...Array(16)].map((_,i)=>`<path transform="translate(0 -14) rotate(${i*22.5})" d="M0 -32V-39" stroke="#3d566e" stroke-width="3"/>`).join('');
  s=`<rect x="-60" y="24" width="120" height="26" rx="4" fill="#3b4148" stroke="#1c2024" stroke-width="2"/>${fins}<circle cx="0" cy="-14" r="31" fill="#4f7396" stroke="#2c4660" stroke-width="3"/><circle cx="0" cy="-14" r="25" fill="#222a31"/><g transform="translate(0 -14)"><g>${dur?`<animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="${dur}s" repeatCount="indefinite"/>`:''}${blades}</g><circle r="5" fill="#9aa3ab" stroke="#444"/></g>${txt(0,-56,(c.look==='fan'?'VENTILATEUR 3~ ':'3~ ')+(c.cpl==='D'?'triangle':'étoile'),8,'var(--ink)')}${hot?txt(0,-66,'surtension ! couplage ?',9,'#d32f2f'):''}${['U','V','W'].map((l,i)=>txt(-40+i*40,29,l,7,'#cfd8dc')+jack(-40+i*40,38,'#bdbdbd')).join('')}`}
 else if(c.type==='sv'){s=`<rect x="-75" y="-35" width="150" height="70" rx="8" fill="#2f3a42" stroke="#12181b" stroke-width="2"/>${txt(-8,-16,'SONDE DE TENSION',8,'#eceff1')}${txt(-8,8,'÷ '+c.ratio,22,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${txt(-8,26,'isolée · 4 MΩ',7,'#90a4ae')}${txt(-32,-12,'+',10,'#eceff1')}${txt(-32,20,'−',10,'#eceff1')}${txt(45,-26,'SORTIE',6.5,'#90a4ae')}${jack(-50,16,'#1b1b1b')}${jack(-50,-16,'#d32f2f')}${bnc(45,-8)}`}
 else if(c.type==='sc'){const cl=c.cl,ang=cl?cl.ang+(c.rev?180:0):0;s=`<rect x="22" y="-26" width="100" height="52" rx="8" fill="#2f3a42" stroke="#12181b" stroke-width="2"/><circle r="20" fill="none" stroke="#e0b100" stroke-width="12"/><circle r="26" fill="none" stroke="#7a5f00" stroke-width="1.5"/><circle r="14" fill="none" stroke="#7a5f00" stroke-width="1.5"/>${txt(28,-10,'SONDE I',8,'#eceff1','start')}${txt(28,10,'÷ '+c.ratio,14,'#ffb74d','start','ui-monospace,Consolas,monospace')}${cl?`<g transform="rotate(${ang}) translate(0 11)"><path d="M-10 0H10M5 -4L10 0L5 4" stroke="#d32f2f" stroke-width="2.5" fill="none"/></g>`:''}${bnc(100,-6)}`}
 else if(c.type==='tach'){const v=c.tv;s=`<rect x="-45" y="-36" width="90" height="70" rx="10" fill="#4a5560" stroke="#1d2328" stroke-width="2"/><rect x="-37" y="-28" width="74" height="30" rx="3" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(33,-6,v===undefined?'----':String(Math.round(v)),16,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-33,-18,'tr/min',7,'#14210c','start')}<circle cx="0" cy="17" r="8" fill="#d32f2f" stroke="#7a1111"/>${txt(0,31,'COMPTE-TOURS',6.5,'#eceff1')}`}
 else if(c.type==='cpm'){const v=c.tv;s=`<rect x="-55" y="-14" width="110" height="34" rx="4" fill="#9aa3ab" stroke="#4a525a" stroke-width="2"/><rect x="-70" y="-22" width="16" height="50" rx="3" fill="#6b7684"/><rect x="54" y="-22" width="16" height="50" rx="3" fill="#6b7684"/><rect x="-35" y="-42" width="70" height="26" rx="3" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(31,-23,v===undefined?'----':v.toFixed(2),14,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-31,-34,'N·m',7,'#14210c','start')}${txt(0,10,'COUPLEMÈTRE',7,'#222')}`}
 else if(c.type==='mdc'||c.type==='mac'){const M=c.type==='mdc',rps=c.rps||0,dur=rps>.02?(1/Math.min(rps,4)).toFixed(2):0,dir=M&&c.run<0?-1:1,hot=M&&!err&&c.Ir>2*c.inom,
  blades0=M?[0,120,240].map(a=>`<g transform="rotate(${a})"><ellipse cx="0" cy="-14" rx="6.5" ry="12" fill="#c8702a" stroke="#7a4210"/><ellipse cx="0" cy="-14" rx="3" ry="8" fill="none" stroke="#e5a15c"/></g>`).join(''):[0,60,120,180,240,300].map(a=>`<path transform="rotate(${a})" d="M-3 -4L-4 -23H4L3 -4Z" fill="#9aa3ab" stroke="#4a525a"/>`).join(''),
  fins=(M||c.look)?'':[...Array(16)].map((_,i)=>`<path transform="translate(0 -14) rotate(${i*22.5})" d="M0 -32V-39" stroke="#5f6b76" stroke-width="3"/>`).join(''),blades=lookB(c)||blades0;
  s=`<rect x="-50" y="24" width="100" height="26" rx="4" fill="#3b4148" stroke="#1c2024" stroke-width="2"/>${fins}<circle cx="0" cy="-14" r="31" fill="${M?'#cfd5db':'#8fa4b8'}" stroke="#4d5e73" stroke-width="3"/><circle cx="0" cy="-14" r="25" fill="#2b3138"/><g transform="translate(0 -14)"><g>${dur?`<animateTransform attributeName="transform" type="rotate" from="${dir>0?0:360} 0 0" to="${dir>0?360:0} 0 0" dur="${dur}s" repeatCount="indefinite"/>`:''}${blades}</g><circle r="5" fill="#9aa3ab" stroke="#444"/></g>${hot?txt(0,-56,'surintensité !',10,'#d32f2f'):c.look?txt(0,-56,c.look==='fan'?'VENTILATEUR':'ASPIRATEUR 2000 W',8,'var(--ink)'):''}${jack(-25,37,'#1b1b1b')}${jack(25,37,'#d32f2f')}`}
 else if(c.type==='led'||c.type==='cfl'){const L=c.type==='led',b=err?0:(c.Ur<(L?.4:.6)*c.un?0:Math.min(1,c.P/c.pn)),hot=!err&&c.Ur>1.3*c.un,glow=L?'235,245,255':'255,236,170',on=b>.02;
  s=`<circle cy="-26" r="${28+b*22}" fill="rgba(${glow},${(b*.45).toFixed(2)})"/><rect x="-42" y="12" width="84" height="42" rx="6" fill="#4a4f57" stroke="#22262b" stroke-width="2"/><rect x="-16" y="-2" width="32" height="14" fill="#b9bcc2" stroke="#6e7177"/><path d="M-16 3H16M-16 8H16" stroke="#6e7177"/>`+(L?`<circle cy="-26" r="26" fill="${on?`rgba(${glow},${(.35+.6*b).toFixed(2)})`:'rgba(215,230,240,.3)'}" stroke="#7b8794" stroke-width="2"/><path d="M-9 -4V-30M0 -4V-34M9 -4V-30" stroke="${on?'#fff':'#9aa5ad'}" stroke-width="3" stroke-linecap="round"/>`:`<path d="M-17 -2V-30Q-17 -50 -8 -50Q1 -50 1 -30V-2M1 -2V-30Q1 -50 10 -50Q19 -50 19 -30V-2" fill="none" stroke="${on?`rgb(255,${Math.round(250-30*(1-b))},${Math.round(215-60*(1-b))})`:'#cfd8dc'}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`)+`${txt(0,-62,L?'LED':'FLUOCOMPACTE',8,'var(--ink)')}${hot?txt(0,-72,'surtension !',11,'#d32f2f'):''}${jack(-26,40,'#bdbdbd')}${jack(26,40,'#bdbdbd')}`}
 else if(c.type==='rel'){const on=c.on,tip=on?[50,-34]:[80,-34],arm=on?-42:-52;
  s=`<rect x="-90" y="-60" width="180" height="120" rx="8" fill="rgba(160,200,225,.35)" stroke="#4f7a96" stroke-width="2"/><path d="M-60 44V4M-30 44V4M20 44V-6M50 44V-34M80 44V-34" stroke="#b87333" stroke-width="2" fill="none"/><rect x="-80" y="-36" width="56" height="40" rx="3" fill="#9aa3ab" stroke="#59616b"/>${[...Array(7)].map((_,i)=>`<path d="M${-76+i*8} 2L${-70+i*8} -34" stroke="#c8702a" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="-82" y="${arm}" width="64" height="7" rx="2" fill="#6b7684"/><path d="M-18 ${arm+3}H20V-6" stroke="#8a8a8a" stroke-dasharray="3 3" fill="none"/><circle cx="50" cy="-34" r="4" fill="#d4af37"/><circle cx="80" cy="-34" r="4" fill="#d4af37"/><line x1="20" y1="-6" x2="${tip[0]}" y2="${tip[1]}" stroke="#444" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="-6" r="4" fill="#444"/><circle cx="70" cy="-50" r="5" fill="${on?'#43d17a':'#555'}"/>${txt(-60,28,'A1',8,'#222')}${txt(-30,28,'A2',8,'#222')}${txt(20,28,'11',8,'#222')}${txt(50,28,'14',8,'#222')}${txt(80,28,'12',8,'#222')}${txt(-45,-50,'BOBINE',7,'#234')}${txt(50,-50,'CONTACT',7,'#234')}${[-60,-30,20,50,80].map(x=>jack(x,44,'#bdbdbd')).join('')}`}
 else if(c.type==='ctc'){const on=c.on,y=on?-20:-36,arm=on?-44:-54;
  s=`<rect x="-110" y="-60" width="220" height="120" rx="8" fill="#aab3bb" stroke="#59616b" stroke-width="2"/><path d="M-90 44V4M-60 44V4M-20 44V-20M10 44V-20M45 44V-20M75 44V-20" stroke="#b87333" stroke-width="2" fill="none"/><rect x="-104" y="-38" width="56" height="42" rx="3" fill="#7d8791" stroke="#434a52"/>${[...Array(7)].map((_,i)=>`<path d="M${-100+i*8} 2L${-94+i*8} -36" stroke="#c8702a" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="-106" y="${arm}" width="60" height="7" rx="2" fill="#4a525a"/><path d="M-46 ${arm+3}H-34V${y}M14 ${y}H41" stroke="#333" stroke-dasharray="3 3" fill="none"/><circle cx="-20" cy="-20" r="4" fill="#d4af37"/><circle cx="10" cy="-20" r="4" fill="#d4af37"/><circle cx="45" cy="-20" r="4" fill="#d4af37"/><circle cx="75" cy="-20" r="4" fill="#d4af37"/><rect x="-24" y="${y-4}" width="38" height="8" rx="2" fill="#dfe4e8" stroke="#59616b"/><rect x="41" y="${y-4}" width="38" height="8" rx="2" fill="#dfe4e8" stroke="#59616b"/><circle cx="95" cy="-48" r="5" fill="${on?'#43d17a':'#555'}"/>${txt(-70,-48,'CONTACTEUR · 2 NO',8,'#234')}${['A1','A2','13','14','23','24'].map((l,i)=>txt(GEO.ctc.t[i][0],28,l,8,'#222')).join('')}${GEO.ctc.t.map(t=>jack(t[0],t[1],'#bdbdbd')).join('')}`}
 else if(c.type==='res'){const b=bands(c.val);
  s=`${pl?'':`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/>`}<path d="M-52 0H-26M26 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-26" y="-11" width="52" height="22" rx="10" fill="#e6c9a0" stroke="#8a6d3b" stroke-width="1.5"/>${[[-17,b[0]],[-8,b[1]],[1,b[2]],[16,'#d4af37']].map(([x,cl])=>`<rect x="${x}" y="-11" width="5" height="22" fill="${cl}"/>`).join('')}${jk(-52,0,'#bdbdbd')}${jk(52,0,'#bdbdbd')}${txt(0,17,fmt(c.val,'Ω'),9,'#5b4f30')}`}
 else if(c.type==='bulb'){const pnom=c.val,b=Math.min(1,Math.abs(c.P||0)/pnom),hot=Math.abs(c.P||0)>pnom*2.5;
  s=`<circle cy="-26" r="${26+b*22}" fill="rgba(255,210,60,${(b*.45).toFixed(2)})"/><rect x="-42" y="12" width="84" height="42" rx="6" fill="#4a4f57" stroke="#22262b" stroke-width="2"/><rect x="-16" y="-2" width="32" height="14" fill="#b9bcc2" stroke="#6e7177"/><path d="M-16 3H16M-16 8H16" stroke="#6e7177"/><circle cy="-26" r="26" fill="${b>.02?`rgba(255,${Math.round(240-b*50)},${Math.round(170-b*90)},${(.4+.6*b).toFixed(2)})`:'rgba(205,225,240,.35)'}" stroke="#7b8794" stroke-width="2"/><path d="M-8 -4L-6 -28L0 -18L6 -28L8 -4" fill="none" stroke="${b>.02?'#fff3c4':'#8a8a8a'}" stroke-width="2"/>${jack(-26,40,'#bdbdbd')}${jack(26,40,'#bdbdbd')}${hot?txt(0,-62,'surtension !',12,'#d32f2f'):''}`}
 else if(c.type==='sw'){
  s=`<rect x="-60" y="-30" width="120" height="64" rx="8" fill="#c9ced6" stroke="#6b7684" stroke-width="2"/><rect x="-14" y="-24" width="28" height="36" rx="5" fill="#2b2f36"/><line x1="0" y1="-6" x2="0" y2="${c.closed?-18:6}" stroke="#e53935" stroke-width="10" stroke-linecap="round"/>${txt(28,-12,'ON',10,'#333')}${txt(30,10,'OFF',10,'#333')}${jack(-42,22,'#bdbdbd')}${jack(42,22,'#bdbdbd')}`}
 else if(c.ana){const A=c.type==='amp',R=A?RA:RV,u=A?'A':'V',val=needle(c,err?0:(c.mode==='AC'?(A?c.Ia:c.Ua):(A?-c.I:-c.U))||0),ER=A?ampRng(c):c.rng,ge=A?(c.ge===undefined?(c.ge=Math.random()*2-1):c.ge)*(ampJack(c)===10?.025:.008):0,fr=Math.max(-.12,Math.min(1.12,val*(1+ge)/ER)),ang=-48+fr*96,s30=[0.3,3,30,300].includes(ER),
  pol=(a,r)=>[(r*Math.sin(a*Math.PI/180)).toFixed(1),(8-r*Math.cos(a*Math.PI/180)).toFixed(1)],
  scl=(N,major,r1,rm,rM,rl,labs,act,fs)=>{const col=act?'#111':'#8c8c80',a0=pol(-48,r1),a1=pol(48,r1);let o=`<path d="M${a0[0]} ${a0[1]}A${r1} ${r1} 0 0 1 ${a1[0]} ${a1[1]}" fill="none" stroke="${col}" stroke-width=".8"/>`;
   for(let i=0;i<=N;i++){const a=-48+i*96/N,p1=pol(a,r1),p2=pol(a,i%major?rm:rM);o+=`<path d="M${p1[0]} ${p1[1]}L${p2[0]} ${p2[1]}" stroke="${col}" stroke-width="${i%major?1:1.6}"/>`}
   labs.forEach(([n,d])=>{const q=pol(-48+d*96,rl);o+=txt(q[0],+q[1]+3,n,fs,col)});return o},
  tk=scl(50,5,74,69,63,55,[0,20,40,60,80,100].map(n=>[n,n/100]),!s30,8)+scl(30,5,47,43,40,33,[0,5,10,15,20,25,30].map(n=>[n,n/30]),s30,6.5),
  ka=i=>-120+i*240/(R.length-1),
  kl=R.map((r,i)=>txt((40*Math.sin(ka(i)*Math.PI/180)).toFixed(1),(60-40*Math.cos(ka(i)*Math.PI/180)).toFixed(1),fmt(r,u).replace(' ',''),6.5,'#222')).join('');
  s=`<rect x="-95" y="-100" width="190" height="215" rx="18" fill="#f2b705" stroke="#8a6500" stroke-width="3"/><rect x="-75" y="-90" width="150" height="100" rx="6" fill="#f7f4e6" stroke="#333" stroke-width="2"/>${tk}${txt(-62,-76,'COM',9,'#111','start')}${txt(62,-76,u,9,'#111','end')}${txt(0,-6,u,14,'#111')}${txt(-64,4,c.mode==='AC'?'AC ~':'DC =',7,'#c62828','start')}${Math.abs(fr)>1.1?txt(42,4,'SURCHARGE',7,'#c62828'):''}<line x1="0" y1="0" x2="0" y2="-68" stroke="#111" stroke-width="2" transform="translate(0 8) rotate(${ang})"/><circle cx="0" cy="8" r="5" fill="#111"/><circle cx="0" cy="58" r="30" fill="#1c1c1c" stroke="#000" stroke-width="2"/>${kl}<line x1="0" y1="-4" x2="0" y2="-24" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="translate(0 58) rotate(${ka(Math.max(0,R.indexOf(ER)))})"/>${A?`${jack(-40,98,'#1b1b1b')}${jack(0,98,'#f4f4f4')}${jack(40,98,'#f4f4f4')}${txt(-40,121,'COM',7,'#111')}${txt(0,121,'3 A',7,'#111')}${txt(40,121,'10 A',7,'#111')}${c.fb3?txt(0,102,'✕',16,'#d32f2f'):''}${c.fb10?txt(40,102,'✕',16,'#d32f2f'):''}${fuseBlown(c)?txt(0,-36,'FUSE',16,'#d32f2f'):''}`:`${jack(-25,98,'#1b1b1b')}${jack(25,98,'#d32f2f')}`}`}
 else{const A=c.type==='amp';
  s=`<rect x="-48" y="-75" width="96" height="150" rx="12" fill="#f4b400" stroke="#7a5a00" stroke-width="2"/><rect x="-38" y="-65" width="76" height="34" rx="4" fill="#c9d8b6" stroke="#333" stroke-width="2"/>${txt(33,-40,reading(c),15,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-34,-55,c.mode==='AC'?'AC ~':'DC =',8,'#14210c','start')}<circle cy="6" r="21" fill="#2b2b2b" stroke="#111" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="-16" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="translate(0 6) rotate(${(A?1:-1)*(c.mode==='AC'?75:40)})"/>${[['V=',-40],['V~',-75],['A=',40],['A~',75]].map(([l,d])=>txt((32*Math.sin(d*Math.PI/180)).toFixed(1),(9-32*Math.cos(d*Math.PI/180)).toFixed(1),l,9,'#222')).join('')}${txt(-24,44,'COM',9,'#222')}${txt(24,44,A?'A':'V',10,'#b71c1c')}${jack(-24,62,'#1b1b1b')}${jack(24,62,'#d32f2f')}`}
 return s}
/* ---- géométrie des câbles : Câble (courbe par des points), Droit, Orthogonal ---- */
const wmode=w=>(w&&w.mode)||'cable',lerpP=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
const cub=(p0,c1,c2,p1,t)=>{const u=1-t;return{x:u*u*u*p0.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*p1.x,y:u*u*u*p0.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*p1.y}};
function orthPts(w,a,b){const o=w.os||{},y1=o.y1!==undefined?o.y1:a.y+20,x2=o.x2!==undefined?o.x2:(a.x+b.x)/2,y3=o.y3!==undefined?o.y3:b.y+20;return[a,{x:a.x,y:y1},{x:x2,y:y1},{x:x2,y:y3},{x:b.x,y:y3},b]}
function crSeg(P,i){const p1=P[i],p2=P[i+1],p0=P[i-1]||{x:2*p1.x-p2.x,y:2*p1.y-p2.y},p3=P[i+2]||{x:2*p2.x-p1.x,y:2*p2.y-p1.y};return[p1,{x:p1.x+(p2.x-p0.x)/6,y:p1.y+(p2.y-p0.y)/6},{x:p2.x-(p3.x-p1.x)/6,y:p2.y-(p3.y-p1.y)/6},p2]}
function segsFor(pts,a,b){if(!pts.length){const d=30+Math.hypot(b.x-a.x,b.y-a.y)*.18;return[[a,{x:a.x,y:a.y+d},{x:b.x,y:b.y+d},b]]}const P=[a,...pts,b];return P.slice(0,-1).map((_,i)=>crSeg(P,i))}
/* Contournement automatique des écrans/boutons par les câbles sans point manuel */
let ZR=[];const AUTO=new Map();
function autoPts(w,a,b){if(!wBack||!ZR.length)return[];const key=a.x+','+a.y+','+b.x+','+b.y;let r=AUTO.get(key);if(r)return r;
 const M=7,inZ=(p,m)=>ZR.findIndex(z=>p.x>z[0]-m&&p.x<z[2]+m&&p.y>z[1]-m&&p.y<z[3]+m),
 ev=pts=>{let n=0,len=0,z=-1,prev=null;segsFor(pts,a,b).forEach(S=>{for(let k=0;k<=20;k++){const q=cub(S[0],S[1],S[2],S[3],k/20);if(prev)len+=Math.hypot(q.x-prev.x,q.y-prev.y);prev=q;if(Math.hypot(q.x-a.x,q.y-a.y)<18||Math.hypot(q.x-b.x,q.y-b.y)<18)continue;const i=inZ(q,M);if(i>=0){n++;if(z<0)z=i}}});return{n,len,z}},
 ord=pts=>{const dx=b.x-a.x,dy=b.y-a.y;return[...pts].sort((p,q)=>((p.x-a.x)*dx+(p.y-a.y)*dy)-((q.x-a.x)*dx+(q.y-a.y)*dy))};
 let cur=[],sc=ev(cur);
 for(let it=0;it<4&&sc.n>0;it++){const z=ZR[sc.z],m=26,cx=(z[0]+z[2])/2,cy=(z[1]+z[3])/2,C=[[cx,z[1]-m],[cx,z[3]+m],[z[0]-m,cy],[z[2]+m,cy],[z[0]-m,z[1]-m],[z[2]+m,z[1]-m],[z[0]-m,z[3]+m],[z[2]+m,z[3]+m]];
  let best=null;C.forEach(([x,y])=>{const q={x,y};if(inZ(q,3)>=0)return;const pts=ord([...cur,q]),s=ev(pts),v=s.n*1e4+s.len;if(!best||v<best.v)best={v,pts,s}});
  if(!best||best.v>=sc.n*1e4+sc.len)break;cur=best.pts;sc=best.s}
 if(sc.n>0&&ev([]).n<=sc.n)cur=[];
 AUTO.set(key,cur);return cur}
function cableSegs(w,a,b){return segsFor(w.pts&&w.pts.length?w.pts:(wmode(w)==='cable'?autoPts(w,a,b):[]),a,b)}
function wsamples(w,a,b){const m=wmode(w),out=[];
 if(m==='line'||m==='ortho'){const P=m==='line'?[a,b]:orthPts(w,a,b);for(let i=0;i<P.length-1;i++){const n=Math.max(1,Math.ceil(Math.hypot(P[i+1].x-P[i].x,P[i+1].y-P[i].y)/6));for(let k=0;k<n;k++)out.push(lerpP(P[i],P[i+1],k/n))}out.push(P[P.length-1]);return out}
 cableSegs(w,a,b).forEach(S=>{for(let k=0;k<24;k++)out.push(cub(S[0],S[1],S[2],S[3],k/24))});out.push(b);return out}
function roundPath(P,r){P=P.filter((p,i)=>i===0||Math.hypot(p.x-P[i-1].x,p.y-P[i-1].y)>.5);if(P.length<3)return'M'+P.map(p=>p.x+' '+p.y).join('L');let d=`M${P[0].x} ${P[0].y}`;
 for(let i=1;i<P.length-1;i++){const a=P[i-1],b=P[i],c=P[i+1],l1=Math.hypot(b.x-a.x,b.y-a.y),l2=Math.hypot(c.x-b.x,c.y-b.y),k=Math.min(r,l1/2,l2/2),p1={x:b.x+(a.x-b.x)/l1*k,y:b.y+(a.y-b.y)/l1*k},p2={x:b.x+(c.x-b.x)/l2*k,y:b.y+(c.y-b.y)/l2*k};d+=`L${p1.x} ${p1.y}Q${b.x} ${b.y} ${p2.x} ${p2.y}`}
 return d+`L${P[P.length-1].x} ${P[P.length-1].y}`}
function wpath(w,a,b){const m=wmode(w);if(m==='line')return`M${a.x} ${a.y}L${b.x} ${b.y}`;if(m==='ortho')return roundPath(orthPts(w,a,b),9);
 return`M${a.x} ${a.y}`+cableSegs(w,a,b).map(S=>`C${S[1].x} ${S[1].y},${S[2].x} ${S[2].y},${S[3].x} ${S[3].y}`).join('')}
const cable=(a,b,w)=>wpath(w||{},a,b);
const bz=(a,b,w,t)=>{const S=wsamples(w||{},a,b),c=[0];let L=0;for(let i=1;i<S.length;i++){L+=Math.hypot(S[i].x-S[i-1].x,S[i].y-S[i-1].y);c.push(L)}const T=t*L;let i=1;while(i<S.length-1&&c[i]<T)i++;return lerpP(S[i-1],S[i],Math.min(1,Math.max(0,(T-c[i-1])/Math.max(c[i]-c[i-1],1e-9))))};
const segDist=(p,a,b)=>{const dx=b.x-a.x,dy=b.y-a.y,l=dx*dx+dy*dy,t=l?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/l)):0;return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)};
function clampOf(c){let best=null,bd=28;for(const w of wires){if(w.hide)continue;const a=tp(w.a),b=tp(w.b);if(!a||!b)continue;const S=wsamples(w,a,b);
 for(let k=0;k<S.length;k++){const pt=S[k],dd=Math.hypot(pt.x-c.x,pt.y-c.y);if(dd<bd){bd=dd;const n=S[Math.min(S.length-1,k+1)],q=S[Math.max(0,k-1)];best={w,pt,ang:Math.atan2(n.y-q.y,n.x-q.x)*180/Math.PI}}}}
 return best}
/* Zones « écran / boutons » : les câbles y sont masqués (découpés) pour ne pas cacher les affichages */
const SCRC=new Set(['#0b1a12','#aab79a','#1a0a0a','#c9d8b6','#b9c9b3','#0a0f0c','#f7f4e6']);
function scrZones(c,bs,Z){const r=(c.rot||0)*Math.PI/180,co=Math.cos(r),si=Math.sin(r),P=(x,y)=>(c.x+x*co-y*si).toFixed(1)+' '+(c.y+x*si+y*co).toFixed(1);
 for(const m of bs.matchAll(/<rect x="(-?[\d.]+)" y="(-?[\d.]+)" width="([\d.]+)" height="([\d.]+)"[^>]*?fill="(#[0-9a-fA-F]{6})"/g)){const x=+m[1],y=+m[2],w=+m[3],h=+m[4],f=m[5].toLowerCase();
  if(SCRC.has(f)||((f==='#eceef1'||f==='#4f86e8')&&w<=30&&h<=20)||(f==='#2a2a2a'&&w<=26&&h<=20)||(f==='#263238'&&w<=34&&h<=24)){Z.push(`M${P(x,y)}L${P(x+w,y)}L${P(x+w,y+h)}L${P(x,y+h)}Z`);const X=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([u,v])=>[c.x+u*co-v*si,c.y+u*si+v*co]);ZR.push([Math.min(...X.map(q=>q[0])),Math.min(...X.map(q=>q[1])),Math.max(...X.map(q=>q[0])),Math.max(...X.map(q=>q[1]))])}}}
function render(){
 solve();let s='<defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="var(--grid)"/></pattern></defs><rect width="'+WW+'" height="'+WH+'" fill="url(#g)"/><rect width="'+WW+'" height="'+WH+'" fill="none" stroke="var(--line)" stroke-width="3"/>'+noteSvg('r')+tgtLinks();
 const ord=[...comps].sort((a,b)=>(b.type==='bread')-(a.type==='bread'));
 ZR=[];AUTO.clear();const Z=[],cg=c=>{const[bx,by,bw,bh]=geo(c).b,on=sel===c.id,bs=body(c);if(wBack)scrZones(c,bs,Z);let lab='';
  if(theory&&c.U!==undefined&&!err&&c.type!=='amp'&&c.type!=='dmm'&&!['watt','gbf','scope','pince','com','rel','ctc','a3','rtor','rpid','sv','sc','tach','cpm','bb','ne555','aop','cmp'].includes(c.type))lab=c.type==='sw'?'':(c.type==='cch'||c.type==='m3')?fmt(c.P,'W')+(c.type==='m3'?' · '+Math.round(c.rpm||0)+' tr/min':''):`${fmt(c.Ur,'V')} · ${fmt(c.Ir,'A')}`+((c.type==='mdc'||c.type==='mac')?' · '+Math.round(c.rpm||0)+' tr/min':'');
  return`<g transform="translate(${c.x} ${c.y})${c.rot?` rotate(${c.rot})`:''}" data-c="${c.id}" style="cursor:grab">${bs}<rect x="${bx-4}" y="${by-4}" width="${bw+8}" height="${bh+8}" rx="10" fill="transparent" stroke="${on?'var(--acc)':'none'}" stroke-dasharray="5 4" stroke-width="2"/>${c.type==='ohm'?ohmBtns():''}${c.type==='dmm'?mmBtns():''}${meterHits(c)}${txt(0,by+bh+20,lab,12,'var(--ink)')}</g>`};
 const plug=(k,p,colr)=>{const[id,ii]=k.split(':'),c=comps.find(c=>c.id==id);if(c&&geo(c).t[+ii][2]==='b'){const y=(+ii)%2?p.y:p.y-15;return`<circle cx="${p.x}" cy="${y}" r="14" fill="#23272d" stroke="#9aa0a8" stroke-width="3"/><circle cx="${p.x}" cy="${y}" r="7" fill="${colr}"/>`}return`<circle cx="${p.x}" cy="${p.y}" r="7" fill="${colr}" stroke="rgba(120,120,120,.7)" stroke-width="1.5"/>`};
 let wS='',wP='',wB='';wires.forEach((w,i)=>{if(w.hide)return;const a=tp(w.a),b=tp(w.b);if(!a||!b)return;const d=cable(a,b,w),on=selW===i||(selW!==null&&selMulti.size>1&&selMulti.has(w)),sw=w.coax?7:5;
  if(wRes(w)){const r=w.res,ov=wOver(w),txt=(r.m==='al'?'Alu ':'Cu ')+r.s+' mm² · '+r.l+' m'+(ov?'  ⚠ '+w.Iw.toPrecision(3)+' A':''),sm=wsamples(w,a,b),md=sm[Math.floor(sm.length/2)]||a,tw=txt.length*5.6+12;
   if(ov)wS+=`<path d="${d}" fill="none" stroke="#ff1744" stroke-opacity=".55" stroke-width="${sw+10}" stroke-linecap="round"/>`;
   wB+=`<g pointer-events="none"><rect x="${(md.x-tw/2).toFixed(1)}" y="${(md.y-18).toFixed(1)}" width="${tw.toFixed(1)}" height="16" rx="8" fill="${ov?'#ffebee':'#fff'}" stroke="${ov?'#d32f2f':'#90a4ae'}"/><text x="${md.x.toFixed(1)}" y="${(md.y-6.5).toFixed(1)}" text-anchor="middle" font-size="10" font-family="system-ui" font-weight="700" fill="${ov?'#c62828':'#37474f'}" stroke="none">${esc_(txt)}</text></g>`}
  wS+=`<path d="${d}" fill="none" stroke="${on?'var(--acc)':'rgba(120,120,120,.55)'}" stroke-width="${sw+3}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${w.col}" stroke-width="${sw}" stroke-linecap="round"/><path d="${d}" data-w="${i}" fill="none" stroke="transparent" stroke-width="16"/>`;wP+=plug(w.a,a,w.col)+plug(w.b,b,w.col)});
 s+=ord.map(cg).join('')+(Z.length?`<clipPath id="wclip"><path clip-rule="evenodd" d="M-9999 -9999H9999V9999H-9999Z${Z.join('')}"/></clipPath><g clip-path="url(#wclip)">${wS}</g>`:wS)+wP+wB;
 s+=noteSvg('t')+clampFronts()+handlesSvg();if(pend){const a=tp(pend);if(a)s+=`<path d="M${a.x} ${a.y}L${mouse.x} ${mouse.y}" stroke="var(--acc)" stroke-dasharray="5 4" stroke-width="3"/>`}
 ord.forEach(c=>geo(c).t.forEach((tt,i)=>{const p=T(c,i),k=c.id+':'+i,cl=pend===k?'':'hj';
  if(tt[2]==='b')s+=i%2?`<circle class="${cl}" cx="${p.x}" cy="${p.y}" r="6" data-t="${k}" fill="rgba(25,118,210,.3)" stroke="#1976d2" stroke-width="2" style="cursor:crosshair"/>`:`<circle class="${cl}" cx="${p.x}" cy="${p.y-15}" r="14" data-t="${k}" fill="none" stroke="rgba(25,118,210,.35)" stroke-width="14" style="cursor:crosshair"/>`;
  else s+=`<circle class="${cl}" cx="${p.x}" cy="${p.y}" r="${tt[2]==='h'?7:12}" data-t="${k}" fill="rgba(25,118,210,.18)" stroke="#1976d2" stroke-width="2" style="cursor:crosshair"/>`}));
 cv.innerHTML=s;st.textContent=capt?capMsg():err||(comps.length?(pend?'Clique sur une autre prise pour finir le câble':('Simulation '+(tranMode?'temporelle ':'')+'en cours ✓'+tranNote+(live&&live.on?' · Arduino ▶ t = '+live.vt.toFixed(2)+' s':''))):'Ajoute des appareils pour commencer');st.className=err?'err':'';
 const o=document.getElementById('ro'),c=comps.find(c=>c.id===sel);if(o&&c)o.textContent=(theory&&!err)?`U = ${fmt(c.Ur,'V')} · I = ${fmt(c.Ir,'A')} · P = ${fmt(c.P,'W')} (valeurs efficaces)`:'';
 spkAudio();motorAudio();ohmAudio();histCheck();
}
const esc_=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
/* ---- Textes riches (v3.10) : n.r = lignes de segments {t,b,i,u,sub,sup,vec} ; n.t = texte brut ---- */
const NCTX=(typeof document!=='undefined'&&typeof document.createElement==='function')?(()=>{try{return document.createElement('canvas').getContext('2d')}catch(e){return null}})():null;
function noteRuns(n){return n.r&&n.r.length?n.r:String(n.t||'').split('\n').map(l=>[{t:l}])}
function nwb(n){return n.r?500:600}
const zf=r=>r.z==='p'?.75:r.z==='g'?1.5:1;
function runW(r,s,wb){wb=wb||600;const z=s*zf(r)*((r.sub||r.sup)?.7:1);if(NCTX){NCTX.font=(r.i?'italic ':'')+(r.b?800:wb)+' '+z+'px system-ui';return NCTX.measureText(r.t).width}return r.t.length*z*.56}
function lineMz(l){return l.length?Math.max(...l.map(zf)):1}
function lineYs(R,n){const ys=[],s=n.s;let y=n.y;R.forEach((l,j)=>{const m=lineMz(l);if(j)y+=m*s+4+(l.some(r=>r.vec)?Math.round(m*s*.3):0);else y=n.y+(m>1?(m-1)*s:0);ys.push(y)});return ys}
function noteBox(n,R){const ys=lineYs(R,n),top=ys[0]-n.s*lineMz(R[0]);return{ys,top,h:ys[ys.length-1]-top+6}}
function lineW(l,s,wb){return l.reduce((a,r)=>a+runW(r,s,wb),0)}
function noteLine(l,n,y){const s=n.s,wb=nwb(n);let x=n.x,off=0,sp='',ar='',g=null;
 const flush=()=>{if(g&&g.x1>g.x0){const h=g.h||s,ay=y-h*1.02,x0=g.x0+1,x1=g.x1-1,k=h;ar+=`<path d="M${x0.toFixed(1)} ${ay.toFixed(1)}H${x1.toFixed(1)}M${(x1-k*.22).toFixed(1)} ${(ay-k*.13).toFixed(1)}L${x1.toFixed(1)} ${ay.toFixed(1)}L${(x1-k*.22).toFixed(1)} ${(ay+k*.13).toFixed(1)}" fill="none" stroke="${n.col}" stroke-width="${Math.max(1.2,k*.08).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/>`}g=null};
 l.forEach(r=>{const w=runW(r,s,wb),zs=s*zf(r),tg=r.sup?-.38*zs:r.sub?.22*zs:0,dy=tg-off,fz=zs*((r.sub||r.sup)?.7:1);off=tg;
  if(r.vec&&w>0){if(!g)g={x0:x,x1:x,h:0};g.x1=x+w;if(!r.sub&&!r.sup)g.h=Math.max(g.h,zs)}else flush();
  sp+=`<tspan${dy?` dy="${dy.toFixed(1)}"`:''}${fz!==s?` font-size="${fz.toFixed(1)}"`:''}${r.b?' font-weight="800"':''}${r.i?' font-style="italic"':''}${r.u?' text-decoration="underline"':''}>${esc_(r.t)}</tspan>`;x+=w});flush();
 return`<text x="${n.x}" y="${y}" font-size="${s}" fill="${n.col}" font-family="system-ui" font-weight="${wb}" stroke="none" style="white-space:pre" xml:space="preserve">${sp||' '}</text>${ar}`}
let EDN=null;
function noteSvg(k){return notes.map((n,i)=>{if(n.k!==k)return'';const on=selN===i;
 if(k==='r')return`<g data-nt="${i}" style="cursor:move"><rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="6" fill="${n.col}" fill-opacity=".05" stroke="${n.col}" stroke-width="${on?3:2}" stroke-dasharray="9 6"/>${n.t?`<text x="${n.x+8}" y="${n.y+16}" font-size="13" font-weight="700" fill="${n.col}" stroke="none" font-family="system-ui">${esc_(n.t)}</text>`:''}${on?`<rect data-rz="${i}" x="${n.x+n.w-7}" y="${n.y+n.h-7}" width="14" height="14" fill="${n.col}" style="cursor:nwse-resize"/>`:''}</g>`;
 const R=noteRuns(n),W=Math.max(...R.map(l=>lineW(l,n.s,nwb(n))),n.s),ed=EDN===i,bx=noteBox(n,R);
 return`<g data-nt="${i}" style="cursor:move"><rect x="${n.x-4}" y="${bx.top}" width="${W+8}" height="${bx.h}" fill="transparent"${on&&!ed?' stroke="var(--acc)" stroke-dasharray="4 3"':' stroke="none"'}/>${ed?'':R.map((l,j)=>noteLine(l,n,bx.ys[j])).join('')}</g>`}).join('')}
function handlesSvg(){if(selW===null)return'';const w=wires[selW];if(!w||w.hide)return'';const a=tp(w.a),b=tp(w.b);if(!a||!b)return'';const m=wmode(w);let h='';
 const dot=(x,y,at)=>`<circle ${at} cx="${x}" cy="${y}" r="8" fill="#fb8c00" stroke="#fff" stroke-width="2" style="cursor:move"/>`;
 if(m==='cable')(w.pts||[]).forEach((p,i)=>{h+=dot(p.x,p.y,`data-hk="p:${i}"`)});
 else if(m==='ortho'){const P=orthPts(w,a,b);if(Math.abs(P[1].x-P[2].x)>12)h+=dot((P[1].x+P[2].x)/2,P[1].y,'data-ho="1"');if(Math.abs(P[2].y-P[3].y)>12)h+=dot(P[2].x,(P[2].y+P[3].y)/2,'data-ho="2"');if(Math.abs(P[3].x-P[4].x)>12)h+=dot((P[3].x+P[4].x)/2,P[3].y,'data-ho="3"')}
 return h}
function tgtLinks(){return comps.filter(c=>(c.type==='tach'||c.type==='cpm')&&c.tgt).map(c=>{const m=comps.find(x=>x.id===c.tgt);return m?`<path d="M${c.x} ${c.y}L${m.x} ${m.y-14}" stroke="${c.type==='tach'?'#ff3b30':'#7c4dff'}" stroke-width="2" stroke-dasharray="5 4" opacity=".8"/>`:''}).join('')+comps.filter(c=>c.type==='lev'&&c.lm).map(c=>{const m=comps.find(x=>x.id===c.lm);return m?`<path d="M${c.x} ${c.y}L${m.x} ${m.y-14}" stroke="#ff9800" stroke-width="2" stroke-dasharray="5 4" opacity=".85"/>`:''}).join('')}
function clampFronts(){return comps.filter(c=>(c.type==='pince'||c.type==='sc')&&c.cl).map(c=>{const sc=c.type==='sc',R=sc?20:31,sw=sc?12:20,th=c.cl.ang,P=(r,d)=>[(r*Math.cos((th+d)*Math.PI/180)).toFixed(1),(r*Math.sin((th+d)*Math.PI/180)).toFixed(1)],arc=r=>{const a=P(r,90),b=P(r,270);return`M${a[0]} ${a[1]}A${r} ${r} 0 0 1 ${b[0]} ${b[1]}`};
 return`<g transform="translate(${c.x} ${c.y})" data-c="${c.id}" style="cursor:grab"><path d="${arc(R)}" fill="none" stroke="${sc?'#e0b100':'#f2c200'}" stroke-width="${sw}"/><path d="${arc(R+sw/2)}" fill="none" stroke="#7a5f00" stroke-width="1.5"/><path d="${arc(R-sw/2)}" fill="none" stroke="#7a5f00" stroke-width="1.5"/></g>`}).join('')}
const PFX={V:['V',1],Om:['Ω',1],uF:['F',1e-6],mH:['H',1e-3],W:['W',1],Hz:['Hz',1],A:['A',1]};
const unitKey=U=>Object.keys(UNITS).find(k=>UNITS[k]===U);
function siStr(v){if(!v)return'0';const a=Math.abs(v),P=[[1e9,'G'],[1e6,'M'],[1e3,'k'],[1,''],[1e-3,'m'],[1e-6,'µ'],[1e-9,'n'],[1e-12,'p']],q=P.find(x=>a>=x[0]*.9995)||P[P.length-1];return(+(v/q[0]).toPrecision(6))+q[1]}
const fieldVal=(c,p,U)=>{const k=unitKey(U),f=PFX[k];return f?siStr(c[p]*f[1]):String(+(c[p]/U[0][1]).toPrecision(6))};
const fieldUnit=U=>{const f=PFX[unitKey(U)];return f?f[0]:U[0][0]};
const fieldParse=(txt,U)=>{const f=PFX[unitKey(U)];const x=pv(txt);return isNaN(x)?NaN:f?x/f[1]:x*U[0][1]};
function fieldH(c,[p,l,U,o]){const log=o.sl==='log';
 return`<label>${l} <input type="text" inputmode="decimal" data-n="${p}" title="Tape une valeur, avec ou sans préfixe : 1k, 4u7, 10m, 2M…" value="${fieldVal(c,p,U)}"> <span class="un">${fieldUnit(U)}</span></label>`+(o.sl?(log?`<input type="range" data-sl="${p}" data-log="1" min="${Math.log10(o.min)}" max="${Math.log10(o.max)}" step="0.01" value="${Math.log10(c[p])}">`:`<input type="range" data-sl="${p}" min="${o.sl[0]}" max="${o.sl[1]}" step="${o.sl[2]}" value="${c[p]}">`):'')}
function bindU(root,c,cb){const def=p=>FIELDS[c.type].find(f=>f[0]===p),
 sync=skip=>{root.querySelectorAll('[data-n]').forEach(i=>{if(i===skip)return;const p=i.dataset.n;i.value=fieldVal(c,p,def(p)[2])});root.querySelectorAll('[data-sl]').forEach(r=>{const p=r.dataset.sl;r.value=r.dataset.log?Math.log10(c[p]):c[p]})};
 root.querySelectorAll('[data-n]').forEach(i=>{const p=i.dataset.n,d=def(p),o=d[3];
  i.oninput=()=>{let x=fieldParse(i.value,d[2]);if(isNaN(x))return;if(o.min!==undefined&&x<o.min)return;if(o.max!==undefined)x=Math.min(x,o.max);c[p]=x;sync(i);cb()};
  i.onchange=()=>{let x=fieldParse(i.value,d[2]);if(isNaN(x)){i.value=fieldVal(c,p,d[2]);return}if(o.min!==undefined)x=Math.max(x,o.min);if(o.max!==undefined)x=Math.min(x,o.max);c[p]=x;i.value=fieldVal(c,p,d[2]);sync(i);cb()}});
 root.querySelectorAll('[data-sl]').forEach(r=>r.oninput=()=>{const p=r.dataset.sl,v=parseFloat(r.value);c[p]=r.dataset.log?+Math.pow(10,v).toPrecision(3):v;sync();cb()})}
const DISP=[['W','W – puissance active P'],['VAr','VAr – puissance réactive Q'],['VA','VA – puissance apparente S'],['PF','PF – facteur de puissance'],['V','V – tension efficace'],['A','A – courant'],['Wh','Wh – énergie active (P × t)']];
function wrCtl(r){return`<select id="wrM"><option value="cu"${r.m!=='al'?' selected':''}>Cuivre</option><option value="al"${r.m==='al'?' selected':''}>Aluminium</option></select><select id="wrS">${WSECS.map(s=>`<option value="${s}"${+r.s===s?' selected':''}>${String(s).replace('.',',')} mm²</option>`).join('')}</select><label>Longueur <input id="wrL" type="number" min="0" step="any" value="${r.l}" style="width:76px"> m</label>`}
const wrRead=()=>({m:document.getElementById('wrM').value,s:+document.getElementById('wrS').value,l:Math.max(0,+document.getElementById('wrL').value||0)});
function wireResUi(w){if(w.coax||w.pair)return;const $_=id=>document.getElementById(id),on=!!wRes(w),r=w.res||{m:'cu',s:1.5,l:10},box=document.createElement('div');box.className='wr';
 box.innerHTML=`<label><input type="checkbox" id="wrE"${on?' checked':''}> <b>Résistance du câble</b></label>${on?wrCtl(r):''}<span class="mut" id="wrI">${wInfo(w)}</span><span><button id="wrAll">☑ Sélectionner tous les câbles</button> <span class="mut">Maj + clic : sélection multiple</span></span>`;pn.appendChild(box);
 $_('wrE').onchange=e=>{if(e.target.checked)w.res=w.res||{m:'cu',s:1.5,l:10};else delete w.res;render();panel()};
 if(on){const u=()=>{w.res=wrRead();render();$_('wrI').innerHTML=wInfo(w)};['wrM','wrS'].forEach(i=>{$_(i).onchange=u});$_('wrL').oninput=u}
 $_('wrAll').onclick=()=>{wires.forEach(x=>{if(!x.coax&&!x.pair)selMulti.add(x)});if(selMulti.size<2)selMulti.clear();panel();render()}}
function multiWirePanel(){const $_=id=>document.getElementById(id),L=[...selMulti],n=L.length,r0=(L.find(x=>wRes(x))||{res:{m:'cu',s:1.5,l:10}}).res,ov=L.filter(wOver).length;
 pn.innerHTML=`<b>${n} câbles sélectionnés</b><div class="wr">${wrCtl(r0)}<button id="wrA" class="p">Appliquer à ces ${n} câbles</button><button id="wrX">Remettre en câbles idéaux</button><button id="wrD">Désélectionner</button>${ov?`<b style="color:#d32f2f">⚠ ${ov} câble(s) en surcharge</b>`:''}<span class="mut">Maj + clic : ajouter ou retirer un câble. Suppr : supprime les câbles choisis.</span></div>`;
 $_('wrA').onclick=()=>{const r=wrRead();L.forEach(x=>{if(!x.coax&&!x.pair)x.res={...r}});render();panel()};
 $_('wrX').onclick=()=>{L.forEach(x=>{delete x.res});render();panel()};
 $_('wrD').onclick=()=>{selMulti.clear();selW=null;panel();render()}}
function panel(){selMulti.forEach(x=>{if(!wires.includes(x))selMulti.delete(x)});if(selW===null)selMulti.clear();
 if(selN!==null&&notes[selN]){const n=notes[selN];
  pn.innerHTML=n.k==='r'?`<b>Rectangle de repérage</b><label>Titre <input id="nt" type="text" value="${esc_(n.t)}"></label><label>Couleur <input id="nc" type="color" value="${n.col}"></label><button id="dn">Supprimer</button><span class="mut">Glisse le carré en bas à droite pour redimensionner.</span>`
   :`<b>Texte</b><label><textarea id="nt" rows="2">${esc_(n.t)}</textarea></label><label>Taille <select id="ns">${[...new Set([12,16,24,n.s])].sort((a,b)=>a-b).map(x=>`<option value="${x}"${x===n.s?' selected':''}>${x===12?'Petit':x===16?'Moyen':x===24?'Grand':x}</option>`).join('')}</select></label><label>Couleur <input id="nc" type="color" value="${n.col}"></label><button id="dn">Supprimer</button><span class="mut">Double-clique sur le texte, dans le schéma, pour le mettre en forme (gras, indice, vecteur…).</span>`;
  document.getElementById('nt').oninput=e=>{n.t=e.target.value;if(n.k==='t')delete n.r;render()};document.getElementById('nc').oninput=e=>{n.col=e.target.value;render()};const ns=document.getElementById('ns');if(ns)ns.onchange=()=>{n.s=+ns.value;render()};document.getElementById('dn').onclick=delSel;return}
 const c=comps.find(c=>c.id===sel);
 if(!c){if(selW!==null&&selMulti.size>1){multiWirePanel();return}if(selW!==null){const w=wires[selW],m=wmode(w);pn.innerHTML=(w.coax?'<b>Câble coaxial BNC–BNC</b>':'<b>Câble</b>'+COLS.map((k,i)=>`<button class="sw" data-k="${i}" style="background:${k}"></button>`).join(''))+`<span>${[['cable','⌒ Câble'],['line','╱ Droit'],['ortho','⌐ Orthogonal']].map(([k,l])=>`<button data-md="${k}" class="${m===k?'p':''}">${l}</button>`).join(' ')}</span><button id="rs">Réinitialiser le tracé</button><button id="dw">Supprimer</button><span class="mut">${m==='cable'?'Glisse le câble pour créer un point orange, glisse un point pour le déplacer ; les losanges ajoutent un point (double-clic sur un point = le retirer).':m==='ortho'?'Glisse les losanges pour déplacer un segment perpendiculairement à lui-même.':'Le câble relie directement les deux bornes.'}</span>`;
   pn.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{wires[selW].col=COLS[b.dataset.k];render()});pn.querySelectorAll('[data-md]').forEach(b=>b.onclick=()=>{w.mode=b.dataset.md;panel();render()});document.getElementById('dw').onclick=delSel;document.getElementById('rs').onclick=()=>{delete w.pts;delete w.os;render()};wireResUi(w)}
  else pn.textContent='Choisis un appareil dans le menu de gauche (☰ sur téléphone). Clique une prise puis une autre pour brancher un câble (BNC : centre = âme, collerette = masse ; BNC → BNC = coaxial). Glisse un appareil ou un câble pour le déplacer.';return}
 const I=INFO[c.type];let h=`<b>${c.ana?(c.type==='amp'?'Ampèremètre à aiguille':'Voltmètre à aiguille'):(c.type==='bb'?'Boîte noire '+esc_(c.name||''):I.n)}</b>`;
 if(FIELDS[c.type])h+=FIELDS[c.type].filter(f=>f[0]!=='duty'||c.wave!=='sin').map(f=>fieldH(c,f)).join('');
 if(c.type==='gbf')h+=`<label>Forme ${selH('wave',[['sin','Sinus'],['sq','Carré'],['tri','Triangle']],c.wave)}</label>`;
  const chips=(k,o,cur)=>`<div class="chips">${o.map(([v,l])=>`<button data-sm="${k}:${v}" class="${String(cur)===String(v)?'p':''}">${l}</button>`).join('')}</div>`;
 if(c.type==='dec'){const kd=c.dkind||'R',cur=kd==='R'?decVal(c):kd==='C'?decVal(c)*1e-6:decVal(c)*1e-3;h+=chips('dkind',[['R','Résistance'],['C','Condensateur'],['L','Bobine']],kd)+`<label>Valeur (${kd==='R'?'Ω':kd==='C'?'F':'H'}) <input id="dval" type="text" value="${+cur.toPrecision(6)}" placeholder="ex. 4k7, 100u, 22m"></label><span class="mut">Clique sur le haut (▲) ou le bas (▼) d’un cadran pour changer son chiffre, ou tape la valeur avec un préfixe : p n u m k M G (1k = 1 000, 4u7 = 4,7 µ). Résolution : 1 ${kd==='R'?'Ω':kd==='C'?'nF':'µH'}, maximum 999 999.</span>`}
 if(c.type==='mac'||c.type==='m3'||c.type==='mdc')h+=`<label><input type="checkbox" data-b="snd" ${c.snd?'checked':''}> Son du moteur (vrombissement)</label>`;
 if(c.type==='bjt')h+=chips('kd',[['npn','NPN'],['pnp','PNP']],c.kd)+chips('pw',[['0','Petit signal'],['1','Puissance (TO-220)']],c.pw?'1':'0')+`<span class="mut">Jonction base-émetteur ≈ ${c.pw?'0,85':'0,65'} V ; en régime actif Ic = β·Ib ; saturation (Vce ≈ ${c.pw?'0,5':'0,15'} V) quand la charge limite Ic. Toujours placer une résistance en série avec la base. Simulation temporelle.</span>`;
 if(c.type==='fet')h+=chips('fk',[['nmos','MOSFET N'],['pmos','MOSFET P'],['hemt','HEMT'],['gan','HEMT GaN']],c.fk)+(c.fk==='nmos'||c.fk==='pmos'?chips('pw',[['0','Petit signal'],['1','Puissance']],c.pw?'1':'0'):'')+`<span class="mut">${c.fk==='hemt'?'HEMT à déplétion (Vth < 0) : conduit avec Vgs = 0, se bloque quand Vgs descend sous Vth ; diode de grille Schottky.':c.fk==='gan'?'HEMT GaN à enrichissement : Vth ≈ 1,4 V, très faible Rds(on), commande 0 / 5 V.':'MOSFET à enrichissement : bloqué sous Vth, résistance Rds(on) ≈ 1/(2K·(Vgs−Vth)) en triode, diode de corps intégrée.'} Grille isolée (aucun courant). Simulation temporelle.</span>`;
 if(c.type==='triac')h+=`<span class="mut">Triac de puissance (BTA16) : un courant de gâchette ≥ Igt (entre G et MT1, dans un sens ou l’autre) l’amorce ; il reste passant tant que le courant dépasse Ih, puis se bloque au passage par zéro. ${c.mst>0?'<b>État : passant</b>':'État : bloqué'}.</span>`;
 if(c.type==='otri')h+=`<label><input type="checkbox" data-b="zc"> Détection de passage par zéro (MOC3041)</label><span class="mut">Optotriac de commande : la LED d’entrée (A, K) amorce le triac de sortie (T1, T2) quand son courant dépasse IFT ; isolation galvanique. Ne commande directement que de faibles courants (≤ 100 mA) : pour la puissance, il pilote la gâchette d’un triac. ${c.mst>0?'<b>Sortie passante</b>':'Sortie bloquée'}.</span>`.replace('data-b="zc"',`data-b="zc" ${c.zc?'checked':''}`);
 if(c.type==='spk')h+=`<label><input type="checkbox" data-b="mute" ${c.mute?'checked':''}> Couper le son de ce haut-parleur</label><span class="mut">Le son est produit à partir du courant dans la bobine (fréquence et amplitude calculées par la simulation) ; bouton 🔊 en haut pour tout couper. ${c.afq?`Signal : ${Math.round(c.afq)} Hz, ${fmt(c.arm*c.arm*(c.re||8),'W')}.`:'Aucun signal.'}</span>`;
 if(c.type==='mic')h+=chips('mk',[['dyn','Dynamique (source 600 Ω)'],['ele','Électret (à polariser)']],c.mk)+`<button id="mrb" class="${c.mr?'p':''}">🎤 ${c.mr?'Micro réel activé':'Utiliser le micro de l’appareil'}</button><span class="mut">${c.mr?(c.merr||'Fréquence dominante et niveau captés en direct (mis à jour 5 fois par seconde).'):'Sinon, un son sinusoïdal réglable (fréquence, niveau) est utilisé.'} ${c.mk==='ele'?'Électret : capsule à courant modulé (≈ 0,5 mA) : la relier à +5 V par une résistance (≈ 2,2 kΩ) et prélever le signal à ses bornes à travers un condensateur.':'Dynamique : source de tension ≈ 20 mV crête à fond de niveau, résistance interne 600 Ω ; à amplifier (AOP, transistor).'}</span>`;
 if(c.type==='dio')h+=`<label>Référence ${selH('dk',Object.entries(DK).map(([k,v])=>[k,v[0]]),c.dk)}</label><span class="mut">Seuil ≈ ${DK[c.dk][1]} V${DK[c.dk][3]?' · tension Zener '+DK[c.dk][3]+' V':''} · simulation temporelle.</span>`;
 if(c.type==='dled')h+=`<label>Couleur ${selH('lc',Object.entries(LC).map(([k,v])=>[k,v[0]]),c.lc)}</label><span class="mut">Tension de seuil ≈ ${LC[c.lc][1]} V · courant conseillé 5–20 mA (au-delà de 35 mA : surintensité) · ajoute une résistance en série.</span>`;
 if(c.type==='scope')h+=scopeCtl(c)+'<button id="zm">Écran agrandi + curseurs</button>';
 if(c.ana)h+=`<label>Calibre ${selH('rng',(c.type==='amp'?RA:RV).map(x=>[x,fmt(x,c.type==='amp'?'A':'V')]),c.type==='amp'?ampRng(c):c.rng)}</label>`+(c.type==='amp'?`<span class="mut">Borne <b>3 A</b> (fusible 3 A) : mesure précise, ne pas dépasser 3 A. Borne <b>10 A</b> (fusible 10 A) : calibre 10 A, précision moindre. Calibre en service : <b>${fmt(ampRng(c),'A')}</b>.</span>`:'');
 if(c.type==='bb')h+=`<button id="bbs">📚 Enregistrer dans la bibliothèque</button>`;
 if(c.type==='bb')h+=`<span class="mut">${c.kind==='q'?'Quadripôle (entrée / sortie, 4 bornes)':'Dipôle (2 bornes)'} · contenu masqué</span><button id="bbe">🔒 Édition (professeur)…</button>`;
 if(c.type==='cmp')h+=`<label><input type="checkbox" data-b="oc" ${c.oc?'checked':''}> Sortie à collecteur ouvert (ajouter une résistance de rappel)</label>`;
 if(c.type==='ne555'||c.type==='aop'||c.type==='cmp')h+=`<span class="mut">Boîtier DIP-8 vu de dessus (repère = encoche à gauche, broche 1 en bas à gauche). Alimenter ${c.type==='ne555'?'VCC (8) / GND (1)':'V+ (7) / V− (4)'} ; simulation temporelle. Pose-le sur une platine d’essai : les broches s’enfichent.</span>`;

 if(c.type==='ldr')h+=`<span class="mut">Résistance ≈ ${fmt(ldrR(c),'Ω')} : 16 kΩ à 10 lx, environ 1 MΩ dans le noir. Utilise-la en pont diviseur avec une résistance fixe.</span>`;
 if(c.type==='irrx')h+=`<label><input type="checkbox" data-b="blk" ${c.blk?'checked':''}> Obstacle sur le faisceau</label><span class="mut">Phototransistor : le courant de collecteur dépend de la lumière reçue des LED infrarouges posées sur le plan, selon leur courant et leur distance (borne C = collecteur, E = émetteur). Ça marche aussi avec un signal modulé, mais la lumière ambiante (soleil, lampe) s’ajoute au signal utile : essaie le curseur « lumière ambiante parasite ».</span>`;
 if(c.type==='bat'||c.type==='bat2')h+=`<span class="mut">${c.type==='bat2'?'Deux voies indépendantes et flottantes (CH1 et CH2, chacune avec sa borne + rouge à gauche et sa borne − noire à droite). Relie la borne + d’une voie à la borne − de l’autre pour obtenir 2 × 30 V en série, ou la borne − de CH1 avec la borne + de CH2 pour une alim symétrique ± (point milieu). ':''}<b>Limite de courant</b> : tant que le circuit demande moins que I max, la voie reste en régulation de <b>tension</b> (CV) ; au-delà, elle passe en régulation de <b>courant</b> (CC, voyant rouge) : le courant est plafonné et la tension s’effondre. Cherche la valeur de I max qui protège une LED sans résistance !</span>`;
 if(c.type==='tsop')h+=`<div class="chips">${[30,33,36,38,40,56].map(k=>`<button data-fc="${k*1000}" class="${Math.abs(c.fc-k*1000)<50?'p':''}">${k} kHz</button>`).join('')}</div><label><input type="checkbox" data-b="blk" ${c.blk?'checked':''}> Obstacle sur le faisceau</label><span class="mut">Module TSOP : alimenté en VS (2,5–5,5 V) / GND. Sa sortie est à l’état <b>haut</b> au repos et passe à l’état <b>bas</b> tant qu’il reçoit une lumière infrarouge <b>modulée à sa fréquence</b> (porteuse) ; la lumière continue (soleil, ampoule) et les autres fréquences sont filtrées. Alimente une LED IR avec un GBF carré 0–5 V (ou tone() de l’Arduino) à la même fréquence que le TSOP. Une salve doit durer ≳ 15 périodes.</span>`;
 if(c.type==='hcsr')h+=`<span class="mut">Alimenter VCC (5 V) / GND. La mesure démarre à la <b>fin</b> d’une impulsion sur TRIG (&gt; 2 V, ≥ 10 µs). ECHO passe à l’état haut pendant 2·d / 340 m/s (≈ 5,8 ms pour 1 m). Pour le déclencher : GBF carré 0–5 V à 20 Hz environ (amplitude 2,5 V, offset 2,5 V).</span>`;
 if(c.type==='uno')h+=`<button id="ucode" class="p">💻 Code et moniteur série…</button><button id="urun">${live&&live.on?'⏸ Pause':'▶ Démarrer'}</button><button id="ures">↺ Reset</button><span class="mut">Alimentée par l’USB (5 V et 3,3 V disponibles). Broches D0–D13 et A0–A5 : sortie 5 V (≈ 25 Ω, 40 mA max), entrée haute impédance ; analogRead sur A0–A5 (0–5 V → 0–1023) ; PWM sur les broches ~ (3, 5, 6, 9, 10, 11). La LED « L » suit la broche 13.</span>`;
 if(c.type==='pot')h+=`<span class="mut">Bornes 1 – 2 (curseur) – 3 : relie 1 à GND et 3 à +5 V, le curseur donne alors de 0 à 5 V (0 % → borne 1, 100 % → borne 3).</span>`;
 if(c.type==='pb')h+=`<span class="mut">Maintiens le bouton enfoncé avec la souris ou le doigt : le contact est fermé tant que tu appuies.</span>`;
 if(c.type==='bread')h+=`<span class="mut">Platine d’essai : les trous d’une même colonne (a–e ou f–j) sont reliés, ainsi que chaque rail +/−. Pose résistances, condensateurs, bobines, diodes, LED ou circuits intégrés sur les trous : ils s’enfichent (la platine emporte avec elle les composants enfichés). Les trous restent câblables avec des fils.</span>`;
 if(c.type==='tr1'||c.type==='tr3'){const T=c.tx,pc=x=>(+x.toPrecision(3)).toString().replace('.',','),tri=c.type==='tr3';
  if(tri)h+=`<label>Couplage ${selH('cp',[['Yy0','Yy0 (étoile – étoile)'],['Yy6','Yy6'],['Yd1','Yd1 (étoile – triangle)'],['Yd11','Yd11'],['Dy11','Dyn11 (triangle – étoile)'],['Dy1','Dyn1'],['Dd0','Dd0 (triangle – triangle)'],['Dd6','Dd6']],c.cp)}</label>`;
  h+=`<button id="trty">Valeurs typiques pour cette puissance</button><span class="mut">Modèle : enroulements couplés avec résistances (<b>Pj</b>), inductances de fuite (<b>ucc</b>), inductance magnétisante (<b>Q0</b>) et résistance de pertes fer (<b>Pfer</b>) en parallèle sur le primaire. Rapport par défaut : ${pc(c.u2/c.u1)}${tri?' (tensions entre phases ; le décalage horaire dépend du couplage)':''}. Primaire : U1n = ${fmt(c.u1,'V')}${tri?' entre phases':''}. ${tri?'Bornes U V W N (primaire) – u v w n (secondaire) : N et n servent de point neutre si le couplage est en étoile.':'Bornes P1 P2 (primaire) – S1 S2 (secondaire), repères homologues P1/S1.'}</span>`;
  if(T&&!err)h+=`<table class="mut" style="width:100%;font-size:12px"><tr><td>Primaire</td><td><b>${fmt(T.U1,'V')}</b></td><td><b>${fmt(T.I1,'A')}</b></td><td>P = ${fmt(T.P1,'W')}</td></tr><tr><td>Secondaire</td><td><b>${fmt(T.U2,'V')}</b></td><td><b>${fmt(T.I2,'A')}</b></td><td>P = ${fmt(T.P2,'W')}</td></tr></table><span class="mut">Pertes fer <b>${fmt(T.Pfe,'W')}</b> · pertes cuivre <b>${fmt(T.Pj,'W')}</b> · Q magnétisation <b>${fmt(T.Qm,'var')}</b> · Q fuites <b>${fmt(T.Qf,'var')}</b><br>Rendement <b>${(T.eta*100).toFixed(1)} %</b> · charge <b>${T.ch.toFixed(0)} %</b> de Sn ${T.P1>1e-3?'· chute de tension <b>'+T.dU.toFixed(1)+' %</b>':''}${tri?'<br>(tensions et courants de ligne, régime équilibré)':''}</span>`}
 if(c.type==='smps')h+=`<span class="mut">Alimentation à découpage : entrée <b>24 à 400 V</b> (alternatif ou continu), sortie continue réglable <b>3,3 à 15 V</b>, limitée à la puissance maximale choisie (limitation en courant). Le courant d’entrée suit la puissance consommée : P<sub>entrée</sub> = P<sub>sortie</sub> / rendement (+ 0,5 W à vide), donc il augmente quand la tension d’entrée baisse. Hors plage d’entrée, la sortie est coupée.<br>${err?'':c.smon?`Sortie : <b>${fmt(c.Uo,'V')}</b> · <b>${fmt(c.Io,'A')}</b> · <b>${fmt((c.Uo||0)*(c.Io||0),'W')}</b>${c.cc?' · <b>limitation</b>':''}<br>Entrée : <b>${fmt(c.Ur,'V')}</b> · <b>${fmt(c.Ir,'A')}</b> · P = <b>${fmt(c.P,'W')}</b>`:'Sortie coupée (tension d’entrée hors de 24–400 V).'}</span>`;
 if(isTherm(c)||isReg(c)){const reg=isReg(c);
  if(isTherm(c))h+=`<label>Vitesse de simulation ${selH('acc',[[1,'×1 (temps réel)'],[10,'×10'],[60,'×60 (1 s = 1 min)'],[300,'×300'],[1000,'×1000']],c.acc||60)}</label><button id="thrs">Remettre à froid</button>`;
  if(c.type==='rpid')h+=`<label><input type="checkbox" data-b="pe" ${c.pe?'checked':''}> P (proportionnel)</label><label><input type="checkbox" data-b="ie" ${c.ie?'checked':''}> I (intégral)</label><label><input type="checkbox" data-b="de" ${c.de?'checked':''}> D (dérivé)</label>`;
  h+=`<span class="mut" id="thx">${thInfo(c)}</span><button id="zm" class="p">📈 Courbe agrandie + export</button><span class="mut">Astuce : double-clic sur l’appareil pour ouvrir la courbe agrandie.</span>`;
  h+=c.type==='four'?`<span class="mut">Four de ${fmt(c.pn,'W')} : thermostat tout ou rien (chauffe sous consigne − hystérésis, coupe au-dessus de consigne + hystérésis). Alimente-le en ${c.un} V~. Modèle thermique à deux capacités (air + parois). Courbe verte : température mesurée par la sonde (avec son retard et son inertie) ; ligne orange : consigne ; bandeau du bas : sortie du thermostat (0 / 100 %).</span>`
   :c.type==='enc'?`<span class="mut">Bornes de gauche : résistance chauffante (${fmt(c.pn,'W')} sous ${c.un} V~) ; bornes de droite : sonde intérieure, tension <b>10 mV par °C</b> (+ à droite). Commande la résistance par le contact d’un régulateur (menu « Régulation ») ou un interrupteur, et branche la sonde sur l’entrée du régulateur. Température maximale atteignable ≈ ambiante + P × Rth = ${(c.tamb+c.pn*c.rth).toFixed(0)} °C.</span>`
   :c.type==='rtor'?`<span class="mut">Régulateur tout ou rien : entrée = tension de la sonde (${c.ks} mV/°C) sur <b>+ / −</b> ; le contact de sortie se ferme sous consigne − hystérésis et s’ouvre au-dessus de consigne + hystérésis. Place ce contact en série avec la résistance chauffante.</span>`
   :`<span class="mut">Régulateur PID : coche les actions voulues (P, I, D) puis règle Kp, Ti et Td avec les curseurs. Sortie u = Kp·[e + (1/Ti)∫e·dt + Td·de/dt] limitée à 0–100 %, appliquée sur le contact par modulation de largeur d’impulsion lente (période réglable). Anti-saturation de l’intégrale. Règle la vitesse de simulation sur le four ou l’enceinte.</span>`}
 if(c.type==='cch')h+=`<label>Branchement ${selH('cm',[['mono','Monophasé / continu (bornes M1, M2)'],['tri','Triphasé (bornes L1, L2, L3)']],c.cm)}</label>`;
 if(c.type==='m3')h+=`<label>Couplage ${selH('cpl',[['Y','Étoile (Y)'],['D','Triangle (Δ)']],c.cpl)}</label>`;
 if(c.type==='sv')h+=`<label>Rapport ${selH('ratio',[[10,'÷ 10'],[100,'÷ 100']],c.ratio)}</label>`;
 if(c.type==='sc')h+=`<label>Rapport ${selH('ratio',[[10,'÷ 10 (100 mV/A)'],[100,'÷ 100 (10 mV/A)'],[300,'÷ 300 (3,33 mV/A)']],c.ratio)}</label><button id="rv">Inverser le sens de la pince</button><span class="mut">Pose la sonde sur un câble.</span>`;
 if(c.type==='tach'||c.type==='cpm')h+=`<span class="mut">Pose l’appareil près d’un moteur (à moins de ~100 px) : un trait pointillé le relie au moteur mesuré.</span>`;
 if(c.type==='watt'||c.type==='pince')h+=`<label>Affichage ${selH('disp',DISP,c.disp)}</label>`;

 if(c.type==='plc'){h+=`<label>Alimentation ${selH('sup',[['24dc','24 V continu'],['24ac','24 V alternatif'],['230','230 V alternatif']],c.sup||'24dc')}</label><button id="plrun">${c.run===false?'▶ Mettre en marche (RUN)':'⏹ Arrêter (STOP)'}</button><label>Langage <select id="pllang"><option value="text"${c.lang==='ladder'?'':' selected'}>Texte</option><option value="ladder"${c.lang==='ladder'?' selected':''}>Ladder (échelons)</option></select></label>${c.lang==='ladder'?'<button id="ladopen">✏ Ouvrir l’éditeur ladder</button>':''}<label style="display:block">${c.lang==='ladder'?'Programme généré par le ladder (lecture seule)':'Programme'}<br><textarea id="plprg" rows="8" spellcheck="false"${c.lang==='ladder'?' readonly':''} style="width:100%;font-family:ui-monospace,Consolas,monospace;font-size:12px">${esc_(c.prg||'')}</textarea></label>${c.lang==='ladder'?'':'<button id="plap">Appliquer le programme</button>'}<span class="mut">${c.plE?'<b style="color:#c62828">'+esc_(c.plE)+'</b><br>':''}Entrées I1–I${(c.plN||{I:8}).I} (tension d’entrée ≥ 60 % de l’alim = 1), sorties relais Q1–Q${(c.plN||{Q:4}).Q} (contacts secs), mémoires M1…, temporisations T1… (T1 = TON(x, 5)), sorties analogiques AO1…, entrées analogiques AI1… (en V, 0–10). Opérateurs : ! &amp; | ^ + − * / &lt; &gt; &lt;= &gt;= == != ; fonctions TON(x,s), TOF(x,s), RISE(x), FALL(x), MIN, MAX, ABS. Un module posé à côté (moins de 420 px) se raccorde tout seul et ses E/S prolongent la numérotation.</span>`}
 if(c.type==='plct'||c.type==='plca'){const B=plcBase(c);h+=`<span class="mut">${B?'Raccordé à l’automate n° '+B.id+(c.type==='plct'?' : entrées I'+(c.plI0+1)+'–I'+(c.plI0+6)+', sorties Q'+(c.plQ0+1)+'–Q'+(c.plQ0+4)+'.':' : entrées AI'+(c.plA0+1)+'–AI'+(c.plA0+2)+', sorties AO'+(c.plO0+1)+'–AO'+(c.plO0+2)+' (0–10 V).'):'Pas d’automate à proximité : approche le module d’un automate compact (moins de 420 px).'} Le module est alimenté par l’automate.</span>`}
 if(c.type==='cwm')h+=`<label>Position ${selH('cwp',[[0,'I1 et U13 (voie 1)'],[1,'I2 et U23 (voie 2)']],c.cwp?1:0)}</label><span class="mut">Clic sur l’appareil : change de voie. Méthode des 2 wattmètres : branche W I+ / W I− sur les bornes courant d’un seul wattmètre et W U sur sa borne tension (reliée à L3) ; P = P(I1,U13) + P(I2,U23), à lire dans les deux positions.</span>`;
 if(c.type==='cem'||c.type==='cet'||c.type==='pince'||c.type==='watt')h+=`<label>Temps accéléré ${selH('eacc',[[1,'× 1 (temps réel)'],[10,'× 10'],[60,'× 60 (1 s = 1 min)'],[600,'× 600'],[3600,'× 3600 (1 s = 1 h)'],[36000,'× 36 000']],c.eacc||1)}</label><button id="ez">Remise à zéro (énergie ${fmt(c.E||0,'Wh')})</button>${c.type==='cem'||c.type==='cet'?'<span class="mut">Compteur à afficheur : énergie active en kWh = ∫ P·dt, comptée seulement quand le courant traverse l’appareil (bornes 1 → 3 par phase).</span>':'<span class="mut">Choisis « Wh » dans Affichage pour lire l’énergie active (P × t).</span>'}`;
 if(c.type==='amp'||c.type==='watt'){const fi=fuseInfo(c);h+=`<span class="mut">Fusible ${c.type==='amp'&&c.ana?'<b>3 A</b> ('+(c.fb3?'grillé':'ok')+') et <b>10 A</b> ('+(c.fb10?'grillé':'ok')+')':'<b>'+fi.n+' A</b> ('+(c[fi.k]?'grillé':'ok')+')'} : saute au-dessus de ${fi.lim.toString().replace('.',',')} A.</span><button id="fz" class="${fuseBlown(c)?'p':''}">🔧 Changer le fusible</button>`}
 if(c.type==='lev'){const ms=comps.filter(m=>m.type==='mdc'||m.type==='mac'||m.type==='m3');h+=`<label>Moteur entraîné ${selH('mot',[[0,'Automatique (le plus proche)'],...ms.map(m=>[m.id,INFO[m.type].n+' #'+m.id])],c.mot||0)}</label><span class="mut">Couple résistant : <b>${c.lT===undefined?'–':(+c.lT.toPrecision(3))+' N·m'}</b> · charge du moteur : <b>${c.lr===undefined?'–':Math.round(c.lr*100)+' %'}</b> du couple nominal${c.stall?' — <b style="color:var(--bad)">le moteur cale (charge trop lourde)</b>':''}. Vitesse de montée : ${((c.lv||0)*100).toFixed(1)} cm/s. Le moteur lève la charge quand il tourne ; le frein la retient à l’arrêt.</span><button id="lvr">⬇ Redescendre la charge</button>`}
 if(c.type==='ohm')h+=`<div class="chips">${[[200,'200 Ω'],[2000,'2 kΩ'],[20000,'20 kΩ'],[200000,'200 kΩ'],[2e6,'2 MΩ']].map(([v,l])=>`<button data-or="${v}" class="${!c.bip&&(c.orng||2000)===v?'p':''}">${l}</button>`).join('')}<button data-or="bip" class="${c.bip?'p':''}">BIP</button></div><span class="mut">Branche l'ohmmètre <b>hors tension</b> aux bornes du composant (l'appareil applique 1 V). « OL » = au-delà du calibre. Mode <b>BIP</b> : test de continuité, bip continu sous 50 Ω.</span>`;
 if(c.type==='reg')h+=`<span class="mut">Régulateur réglable type LM317 : <b>IN</b> (entrée), <b>OUT</b> (sortie régulée à Un), <b>GND</b>. Il faut au moins Un + dropout en entrée ; sinon la sortie suit l'entrée. Limitation de courant à la valeur choisie. Place un condensateur de filtrage en entrée après le pont de diodes.</span>`;
 if((c.type==='mac'||c.type==='m3'||c.type==='mdc')&&c.hext)h+=`<span class="mut">⚙ Charge imposée par le système de levage #${c.hext} (le curseur de charge est piloté par la masse).</span>`;
 if(c.type==='dmm')h+=`<div class="chips">${[['V=','DCV'],['V~','ACV'],['A=','DCI'],['A~','ACI'],['R','Ω']].map(([k,l])=>`<button data-mm="${k}" class="${((k==='R')?c.fn==='R':(c.fn==='V'?k[0]==='V':c.fn==='I'&&k[0]==='A')&&(c.mode==='AC')===(k[1]==='~'))?'p':''}">${l}</button>`).join('')}</div><span class="mut">Bornes : <b>COM</b> (noire, commune) · <b>V/Ω</b> (rouge) pour la tension et la résistance · <b>3 A</b> et <b>16 A</b> (blanches) pour le courant. Tension : en dérivation (10 MΩ). Courant : en série. Ohmmètre : composant <b>hors tension</b>, isolé du reste du circuit (OL = circuit ouvert).</span><span class="mut">Fusibles : <b>3 A</b> (saute au-dessus de 3,3 A) et <b>16 A</b> (saute au-dessus de 17 A). Fusible : <b>${c.fb3?'3 A grillé':'3 A ok'}</b> · <b>${c.fb16?'16 A grillé':'16 A ok'}</b></span><button id="fz" class="${c.fb3||c.fb16?'p':''}">🔧 Changer le fusible</button>`;
 if(c.type==='res')h+=`<button id="tl5">Tolérance ±5 % : ${c.tol?'ACTIVE':'inactive'}</button><span class="mut">${c.tol?'La valeur réelle est tirée au hasard à ±5 % de la valeur marquée (bande or) : mesure-la à l’ohmmètre.':'Valeur exacte (la valeur marquée).'}</span>`;
 if(c.type==='amp'||c.type==='volt'||c.type==='pince')h+=`<button id="md">Mode : ${c.mode==='AC'?'AC ~ (eff.)':'DC ='}</button>`;
 if(c.type==='pince')h+=`<button id="rv">Inverser le sens de la pince</button><span class="mut">Pose la pince sur un câble.</span>`;
 if(c.type==='sw')h+=`<button id="tg">${c.closed?'Ouvrir':'Fermer'}</button>`;
 if(c.type==='com')h+=`<button id="tg">Basculer (position ${c.pos?'B':'A'})</button>`;
 if(c.type==='rel'||c.type==='ctc')h+=`<span class="mut">Contact : ${c.on?'collé (travail)':'repos'} · colle à 80 % de la tension bobine</span>`;
 h+=`<span id="ro" class="mut"></span>${NOROT.has(c.type)?'':'<button id="rt" title="Raccourci : touche R">⟳ Pivoter 90°</button>'}<button id="dl">Supprimer</button>`;pn.innerHTML=h;
 bindP(pn,c,render);bindU(pn,c,render);
 const wvS=pn.querySelector('[data-p="wave"]');if(wvS)wvS.addEventListener('change',()=>{panel();render()});const cmS=pn.querySelector('[data-p="cm"]');if(cmS)cmS.addEventListener('change',()=>{c.un=c.cm==='tri'?400:230;panel();render()});
 const md=document.getElementById('md');if(md)md.onclick=()=>{c.mode=c.mode==='AC'?'DC':'AC';panel();render()};
 const rv=document.getElementById('rv');if(rv)rv.onclick=()=>{c.rev=!c.rev;render()};
 pn.querySelectorAll('[data-fc]').forEach(b=>b.onclick=()=>{c.fc=+b.dataset.fc;panel();render()});
 const uc=document.getElementById('ucode');if(uc){uc.onclick=()=>openDock(c.id);document.getElementById('urun').onclick=()=>{liveToggle();panel()};document.getElementById('ures').onclick=()=>{liveResetAll();panel()}}
 const zm=document.getElementById('zm');if(zm)zm.onclick=()=>openOv(c);const bbe=document.getElementById('bbe');if(bbe)bbe.onclick=()=>openBB(c);
 const pll=document.getElementById('pllang');if(pll)pll.onchange=()=>{if(pll.value==='ladder'){if((!c.lad||!c.lad.length)&&(c.prg||'').trim()&&!confirm('Le ladder démarre vide : le programme texte actuel sera remplacé (il n’est pas converti automatiquement).\n\nPour l’essayer sans rien perdre, choisis plutôt l’exemple « API : programme ladder ».\n\nContinuer ?')){panel();return}c.lang='ladder';openLad(c)}else{c.lang='text';panel()}};const plo=document.getElementById('ladopen');if(plo)plo.onclick=()=>openLad(c);const plr=document.getElementById('plrun');if(plr)plr.onclick=()=>{c.run=c.run===false;plcScan(c,.05);panel();render()};const pla=document.getElementById('plap'),plt=document.getElementById('plprg');if(pla&&plt&&c.lang!=='ladder'){const ap=()=>{c.prg=plt.value;c.plS=null;plcScan(c,.05);panel();render()};pla.onclick=ap;plt.onchange=ap}
const ez=document.getElementById('ez');if(ez)ez.onclick=()=>{c.E=0;panel();render()};const tg=document.getElementById('tg');if(tg)tg.onclick=()=>{if(c.type==='com')c.pos=c.pos?0:1;else c.closed=!c.closed;panel();render()};
 document.getElementById('dl').onclick=delSel;const rt=document.getElementById('rt');if(rt)rt.onclick=()=>rotSel();const dvl=document.getElementById('dval');if(dvl)dvl.onchange=()=>{const x=pv(dvl.value);if(!isNaN(x)){decSet(c,x);panel();render()}};{const bs=document.getElementById('bbs');if(bs)bs.onclick=()=>{bbLibAdd(c);bs.textContent='✔ Enregistrée dans la bibliothèque'}}
 {const lr=document.getElementById('lvr');if(lr)lr.onclick=()=>{c.lh=0;c.lv=0;panel();render()}}
 pn.querySelectorAll('[data-or]').forEach(b=>b.onclick=()=>{setOhm(c,b.dataset.or);panel();render()});const thrs=document.getElementById('thrs');if(thrs)thrs.onclick=()=>{delete TH[c.id];c.hon=false;panel();render()};const trty=document.getElementById('trty');if(trty)trty.onclick=()=>{trTyp(c);panel();render()};const fz=document.getElementById('fz');if(fz)fz.onclick=()=>{c.fb3=false;c.fb10=false;c.fb16=false;panel();render()};pn.querySelectorAll('[data-sm]').forEach(b=>b.onclick=()=>{const[k,v]=b.dataset.sm.split(':');setSemi(c,k,v);panel();render()});const mrb=document.getElementById('mrb');if(mrb)mrb.onclick=()=>micToggle(c);const t5=document.getElementById('tl5');if(t5)t5.onclick=()=>{c.tol=!c.tol;if(c.tol)Rv(c);panel();render()};pn.querySelectorAll('[data-mm]').forEach(b=>b.onclick=()=>{setMM(c,b.dataset.mm);panel();render()});render()}
function rotSel(){const c=comps.find(o=>o.id===sel);if(!c||NOROT.has(c.type))return;c.rot=((c.rot||0)+90)%360;render()}
/* ---- Annuler / rétablir, copier / coller ---- */
let UNDO=[],REDO=[],HCUR=null,HT=0,HBUSY=false,CLIP=null,CLIPN=0;
function histCheck(){if(HBUSY)return;const s=serializeMontage();if(HCUR===null){HCUR=s;return}if(s===HCUR)return;const t=Date.now();if(t-HT>700||!UNDO.length){UNDO.push(HCUR);if(UNDO.length>100)UNDO.shift()}HT=t;HCUR=s;REDO=[]}
function histGo(from,to){histCheck();if(!from.length)return false;const s=from.pop();to.push(HCUR);HBUSY=true;const v={x:view.x,y:view.y,z:view.z};try{loadMontage(s)}finally{Object.assign(view,v);applyView();HBUSY=false}HCUR=serializeMontage();HT=0;render();return true}
const undo=()=>histGo(UNDO,REDO),redo=()=>histGo(REDO,UNDO);
function copySel(){const c=comps.find(o=>o.id===sel);if(!c)return false;CLIP=JSON.stringify(c,(k,v)=>SKIP.has(k)?undefined:v);CLIPN=0;return true}
function pasteSel(){if(!CLIP)return false;const o=JSON.parse(CLIP);CLIPN++;const c=add(o.type,o.x+40*CLIPN,o.y+40*CLIPN);const id=c.id;Object.assign(c,o,{id,x:o.x+40*CLIPN,y:o.y+40*CLIPN});if(c.tol)c.eps=undefined;sel=id;selW=null;selN=null;panel();render();return true}
function delSel(){if(sel!==null){wires=wires.filter(w=>!w.a.startsWith(sel+':')&&!w.b.startsWith(sel+':'));comps=comps.filter(c=>c.id!==sel);sel=null}
 else if(selW!==null){const w0=wires[selW],S=selMulti.size>1?[...selMulti]:[w0];wires=wires.filter(x=>!S.includes(x)&&!S.some(s=>s.pair&&x.pair===s.pair));selW=null;selMulti.clear()}
 else if(selN!==null){notes.splice(selN,1);selN=null}pend=null;panel();render()}
/* ---- Interactions ---- */
const pt=e=>{const p=cv.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(cv.getScreenCTM().inverse())};
let hd=null,ndrag=null,rz=null,pan=null,pinch=null,view={x:0,y:0,z:1};const ptrs=new Map(),WW=4000,WH=3000;
function applyView(){const w=cv.clientWidth||900,h=cv.clientHeight||600;view.z=Math.min(3,Math.max(.15,view.z));cv.setAttribute('viewBox',view.x+' '+view.y+' '+w/view.z+' '+h/view.z);const zl=document.getElementById('zl');if(zl)zl.textContent=Math.round(view.z*100)+' %'}
function zoomAt(f,cx,cy){const r=cv.getBoundingClientRect(),px=cx-r.left,py=cy-r.top,wx=view.x+px/view.z,wy=view.y+py/view.z;view.z=Math.min(3,Math.max(.15,view.z*f));view.x=wx-px/view.z;view.y=wy-py/view.z;applyView()}
function contentBounds(){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;const ad=(x,y)=>{x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)};
 comps.forEach(c=>{const b=geo(c).b;ad(c.x+b[0],c.y+b[1]);ad(c.x+b[0]+b[2],c.y+b[1]+b[3])});
 wires.forEach(w=>{if(w.hide)return;const a=tp(w.a),b=tp(w.b);if(a&&b)wsamples(w,a,b).forEach(q=>ad(q.x,q.y))});
 notes.forEach(n=>{if(n.k==='r'){ad(n.x,n.y);ad(n.x+n.w,n.y+n.h)}else{const R=noteRuns(n);const bx=noteBox(n,R);ad(n.x,bx.top);ad(n.x+Math.max(...R.map(l=>lineW(l,n.s,nwb(n))),1)+8,bx.top+bx.h+2)}});
 if(x0>x1)return{x:0,y:0,w:900,h:600};const m=50;return{x:x0-m,y:y0-m,w:Math.max(x1-x0+2*m,300),h:Math.max(y1-y0+2*m,200)}}
function fitView(){const b=contentBounds(),w=cv.clientWidth||900,h=cv.clientHeight||600;view.z=Math.max(.15,Math.min(w/b.w,h/b.h,2));view.x=b.x-(w/view.z-b.w)/2;view.y=b.y-(h/view.z-b.h)/2;applyView()}
const pinfo=()=>{const a=[...ptrs.values()];return{d:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)||1,cx:(a[0].x+a[1].x)/2,cy:(a[0].y+a[1].y)/2}};
function doPinch(){const p=pinfo();zoomAt(p.d/pinch.d,p.cx,p.cy);view.x-=(p.cx-pinch.cx)/view.z;view.y-=(p.cy-pinch.cy)/view.z;applyView();pinch=p}
cv.addEventListener('wheel',e=>{e.preventDefault();zoomAt(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:false});
const zctr=f=>{const r=cv.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)};
document.getElementById('zi').onclick=()=>zctr(1.25);document.getElementById('zo').onclick=()=>zctr(.8);document.getElementById('zf').onclick=()=>fitView();{const b=document.getElementById('wb'),u=()=>{b.style.opacity=wBack?1:.45;b.title=wBack?'Câbles contournant les écrans et boutons : activé (clic pour les laisser passer partout)':'Câbles libres, même devant les écrans (clic pour les faire contourner les écrans)'};u();b.onclick=()=>{wBack=!wBack;try{localStorage.setItem('labosim_wback',wBack?'1':'0')}catch(e){}u();render()}}
window.addEventListener('resize',applyView);
cv.addEventListener('pointerdown',e=>{const X=e.target,t=X.closest('[data-t]'),hk=X.closest('[data-hk]'),ho=X.closest('[data-ho]'),rzz=X.closest('[data-rz]'),c=X.closest('[data-c]'),w=X.closest('[data-w]'),nt=X.closest('[data-nt]');mouse=pt(e);
 ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});if(ptrs.size===2){drag=wd=hd=ndrag=rz=pan=null;pend=null;pinch=pinfo();return}
 if(e.button===1){e.preventDefault();pan={cx:e.clientX,cy:e.clientY,vx:view.x,vy:view.y};return}
 if(t&&capt){capPick(t.dataset.t);return}
 if(t){const k=t.dataset.t;if(!pend)pend=k;else{if(pend!==k&&!wires.some(x=>(x.a===pend&&x.b===k)||(x.a===k&&x.b===pend)))connect(pend,k);pend=null}render();return}
 if(hk&&selW!==null){const w2=wires[selW],pr=hk.dataset.hk.split(':'),i=+pr[1];if(pr[0]==='g'){w2.pts=w2.pts||[];w2.pts.splice(i,0,{x:mouse.x,y:mouse.y})}hd={w:w2,t:'p',i};return}
 if(ho&&selW!==null){hd={w:wires[selW],t:'o',k:+ho.dataset.ho};return}
 if(rzz){rz={n:notes[+rzz.dataset.rz]};return}
 const dgh=X.closest('[data-dg]');if(dgh&&c){const o=comps.find(o=>o.id==c.dataset.c);if(o){const[i,d]=dgh.dataset.dg.split(':').map(Number);o.dg=(o.dg||[0,0,0,0,0,0]).slice();o.dg[i]=((o.dg[i]+d)%10+10)%10;sel=o.id;selW=null;selN=null;pend=null;panel();render();return}}
 const mq=X.closest('[data-mq]');if(mq&&c){const o=comps.find(o=>o.id==c.dataset.c);if(o){const v=mq.dataset.mq;if(v==='mode')o.mode=o.mode==='AC'?'DC':'AC';else if(v==='AC'||v==='DC')o.mode=v;else if(v.startsWith('rng:'))o.rng=+v.slice(4);sel=o.id;selW=null;selN=null;pend=null;panel();render();return}}
 const orb=X.closest('[data-or]');if(orb&&c&&c.dataset){const o=comps.find(o=>o.id==c.dataset.c);if(o&&o.type==='ohm'){setOhm(o,orb.dataset.or);sel=o.id;selW=null;selN=null;pend=null;panel();render();return}}
 const mmb=X.closest('[data-mm]');if(mmb&&c){const o=comps.find(o=>o.id==c.dataset.c);if(o){setMM(o,mmb.dataset.mm);sel=o.id;selW=null;selN=null;pend=null;panel();render();return}}
 if(c){const o=comps.find(o=>o.id==c.dataset.c);pend=null;sel=o.id;selW=null;selN=null;drag={o,dx:mouse.x-o.x,dy:mouse.y-o.y,moved:false,carry:o.type==='bread'?comps.filter(q=>PLUG.has(q.type)&&geo(q).t.some((_,i)=>{const p=T(q,i);return nearHole(o,p.x,p.y,4)})).map(q=>({c:q,dx:q.x-o.x,dy:q.y-o.y})):null};if(o.type==='pb'){o.closed=true;render()}panel();return}
 if(w){pend=null;const wi=+w.dataset.w,ww=wires[wi];sel=null;selN=null;
  if(e.shiftKey||e.ctrlKey||e.metaKey){if(selW!==null&&wires[selW])selMulti.add(wires[selW]);if(selMulti.has(ww))selMulti.delete(ww);else selMulti.add(ww);const rest=[...selMulti];if(rest.length===1){selW=wires.indexOf(rest[0]);selMulti.clear()}else if(!rest.length)selW=null;else selW=wi;wd=null;panel();render();return}
  selMulti.clear();selW=wi;wd={w:ww,sx:mouse.x,sy:mouse.y};panel();render();return}
 if(nt){const n=notes[+nt.dataset.nt];pend=null;sel=null;selW=null;selN=+nt.dataset.nt;ndrag={n,dx:mouse.x-n.x,dy:mouse.y-n.y};panel();render();return}
 pend=null;selW=null;sel=null;selN=null;pan={cx:e.clientX,cy:e.clientY,vx:view.x,vy:view.y};panel();render()});
window.addEventListener('pointermove',e=>{if(ptrs.has(e.pointerId))ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pinch&&ptrs.size>=2){doPinch();return}
 if(pan){view.x=pan.vx-(e.clientX-pan.cx)/view.z;view.y=pan.vy-(e.clientY-pan.cy)/view.z;applyView();return}
 if(!drag&&!pend&&!wd&&!hd&&!ndrag&&!rz)return;mouse=pt(e);
 if(hd){if(hd.t==='p'){hd.w.pts[hd.i]={x:mouse.x,y:mouse.y}}else{const a=tp(hd.w.a),b=tp(hd.w.b),P=orthPts(hd.w,a,b),o=hd.w.os=hd.w.os||{};if(o.y1===undefined){o.y1=P[1].y;o.x2=P[2].x;o.y3=P[3].y}
   if(hd.k===1)o.y1=Math.round(mouse.y/10)*10;else if(hd.k===2)o.x2=Math.round(mouse.x/10)*10;else o.y3=Math.round(mouse.y/10)*10}render();return}
 if(wd){if(wmode(wd.w)==='cable'&&Math.hypot(mouse.x-wd.sx,mouse.y-wd.sy)>4){const w=wd.w,a=tp(w.a),b=tp(w.b),N=[a,...(w.pts||[]),b];let bi=0,bd=1e9;for(let i=0;i<N.length-1;i++){const d=segDist({x:wd.sx,y:wd.sy},N[i],N[i+1]);if(d<bd){bd=d;bi=i}}
   w.pts=w.pts||[];w.pts.splice(bi,0,{x:mouse.x,y:mouse.y});hd={w,t:'p',i:bi};wd=null;render()}return}
 if(ndrag){ndrag.n.x=Math.round((mouse.x-ndrag.dx)/10)*10;ndrag.n.y=Math.round((mouse.y-ndrag.dy)/10)*10;render();return}
 if(rz){rz.n.w=Math.max(40,mouse.x-rz.n.x);rz.n.h=Math.max(30,mouse.y-rz.n.y);render();return}
 if(drag){drag.moved=true;const bb=geo(drag.o).b;drag.o.x=Math.max(10-bb[0],Math.min(WW-10-bb[0]-bb[2],Math.round((mouse.x-drag.dx)/20)*20));drag.o.y=Math.max(10-bb[1],Math.min(WH-10-bb[1]-bb[3],Math.round((mouse.y-drag.dy)/20)*20));if(drag.carry)drag.carry.forEach(k=>{k.c.x=drag.o.x+k.dx;k.c.y=drag.o.y+k.dy});else snapPlug(drag.o);render()}else render()});
window.addEventListener('pointercancel',e=>{ptrs.delete(e.pointerId);if(drag&&drag.o.type==='pb'){drag.o.closed=false;render()}pinch=null;pan=null});
window.addEventListener('pointerup',e=>{ptrs.delete(e.pointerId);if(ptrs.size<2)pinch=null;pan=null;wd=null;hd=null;ndrag=null;rz=null;if(drag){const c=drag.o;if(c.type==='pb'&&c.closed){c.closed=false;render()}
 if(!drag.moved){if(c.type==='sw'){c.closed=!c.closed;panel();render()}else if(c.type==='com'){c.pos=c.pos?0:1;panel();render()}else if(c.type==='cwm'){c.cwp=c.cwp?0:1;panel();render()}
  else if(c.type==='pince'&&drag.dx>=138&&drag.dx<=162&&drag.dy>=10&&drag.dy<=34){const O=['W','VAr','VA','V','A','Wh'],i=O.indexOf(c.disp||'A');c.disp=O[(i+1)%O.length];panel();render()}
  else if(c.type==='watt'){const h=[['W',-124],['VAr',-96],['VA',-68],['PF',-40],['V',-4],['A',24]].find(([l,x])=>drag.dx>=x&&drag.dx<=x+24&&drag.dy>=22&&drag.dy<=40);if(h){c.disp=h[0];panel();render()}}}
 else if(c.type==='pince'||c.type==='sc'){const k=clampOf(c);if(k){c.x=k.pt.x;c.y=k.pt.y;render()}}}
 drag=null});
window.addEventListener('keydown',e=>{const ed=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)||!!document.activeElement.isContentEditable,mod=(e.ctrlKey||e.metaKey)&&!e.altKey,k=(e.key||'').toLowerCase();if(mod&&!ed){if(k==='z'&&!e.shiftKey){e.preventDefault();undo();return}if(k==='y'||(k==='z'&&e.shiftKey)){e.preventDefault();redo();return}if(k==='c'){if(copySel())e.preventDefault();return}if(k==='v'){if(pasteSel())e.preventDefault();return}if(k==='d'){e.preventDefault();if(copySel())pasteSel();return}}
 if((e.key==='Delete'||e.key==='Backspace')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))delSel();if(e.key==='Escape'){pend=null;capt=null;render()}if((e.key==='r'||e.key==='R')&&!e.ctrlKey&&!e.metaKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))rotSel()});
const MENU=[["Alimentations",[["bat","Alimentation continue 0–30 V (limite en courant)"],
 ["bat2","Alimentation continue double 2×(0–30 V)"],
 ["ac","Alimentation alternative 0–230 V"],
 ["gbf","GBF (générateur de fonctions)"],
 ["smps","Alimentation à découpage 3,3–15 V (30–300 W, entrée 24–400 V)"],
 ["a3","Alimentation triphasée 400 V"]]],
 ["API (automates)",[["plc","Automate compact (alim. dédiée, 8 E / 4 S relais)"],["plct","Module d’extension TOR (6 E / 4 S relais)"],["plca","Module d’extension ANALOG (2 E / 2 S 0–10 V)"]]],["Appareils de mesure",[["dmm","Multimètre universel (V, A, Ω)"],
 ["ohm","Ohmmètre (calibres + BIP)"],
 ["amp","Multimètre – ampèremètre"],
 ["volt","Multimètre – voltmètre"],
 ["amp","Ampèremètre à aiguille",1],
 ["volt","Voltmètre à aiguille",1],
 ["watt","Wattmètre POWER8000"],
 ["cwm","Commutateur de wattmètre (méthode des 2 wattmètres)"],
 ["cem","Compteur d’énergie monophasé"],
 ["cet","Compteur d’énergie triphasé"],
 ["pince","Pince ampèremétrique"],
 ["sv","Sonde de tension ÷10 / ÷100"],
 ["sc","Sonde de courant ÷10 / ÷100 / ÷300"],
 ["tach","Compte-tours"],
 ["cpm","Couple-mètre"],
 ["scope","Oscilloscope 2 voies"]]],
 ["Audio",[["spk","Haut-parleur 8 Ω"],
 ["mic","Microphone (dynamique / électret)"]]],
 ["Boîtes noires",[["bb","Boîte noire – dipôle","d"],
 ["bb","Boîte noire – quadripôle","q"],
 ["#bl","📚 Bibliothèque de boîtes noires…"],
 ["#cd","Créer un dipôle depuis un montage…"],
 ["#cq","Créer un quadripôle depuis un montage…"],
 ["#cdx","Dipôle « tout type » (sources, diodes, transistors…)"],
 ["#cqx","Quadripôle « tout type » (sources, diodes, transistors…)"]]],
 ["Capteurs",[["ldr","Photorésistance (LDR)"],
 ["dled","Émetteur infrarouge (LED IR)","ir"],
 ["irrx","Récepteur infrarouge (phototransistor)"],
 ["tsop","Récepteur infrarouge TSOP (fréquence réglable)"],
 ["hcsr","Capteur ultrason HC-SR04"]]],
 ["Charges",[["res","Résistance"],
 ["bulb","Ampoule"],
 ["led","Lampe à LED"],
 ["cfl","Lampe fluocompacte"],
 ["cap","Condensateur"],
 ["ind","Bobine"],
 ["cch","Caisse de charge 0–4 kW"],
 ["dec","Boîte à décades (R / C / L)"]]],
 ["Charges domestiques",[["mac","Ventilateur 230 V monophasé (domestique)","fan1"],
 ["four","Four électrique (thermostat TOR, courbe de température)"],
 ["mac","Aspirateur 2000 W (moteur universel)","vac"]]],
 ["Charges industrielles",[["m3","Ventilateur 400 V triphasé (industriel)","fan3"],
 ["lev","Système de levage (treuil + masse)"],
 ["enc","Enceinte isolée chauffée + sonde de température"]]],
 ["Circuits intégrés",[["ne555","NE555 (timer)"],
 ["aop","AOP LF356"],
 ["cmp","Comparateur LM311"]]],
 ["Commandes",[["pot","Potentiomètre"],
 ["pb","Bouton poussoir"],
 ["sw","Interrupteur"],
 ["com","Commutateur 2 voies"]]],
 ["Composants",[["dio","Diode (1N4148, 1N4007, Zener)"]]],
 ["Composants électroniques",[["reg","Régulateur de tension réglable (Un)"],
 ["dled","LED (rouge, jaune, vert, bleu…)"],
 ["bread","Platine d’essai (breadboard)"],
 ["otri","Optotriac (MOC3021)"]]],
 ["Micro-contrôleur",[["uno","Uno (programmable)"]]],
 ["Moteurs",[["mdc","Moteur à courant continu"],
 ["mac","Moteur monophasé (cos φ 0,82)"],
 ["m3","Moteur asynchrone triphasé 1,5 kW"]]],
 ["Régulation",[["rtor","Régulateur de température TOR"],["rpid","Régulateur de température PID"]]],
 ["Relais et Contacteurs",[["rel","Relais (bobine + contact)"],
 ["ctc","Contacteur (2 contacts NO)"]]],
 ["Repérage",[["#r","Rectangle pointillé"],
 ["#t","Texte"]]],
 ["Semi-conducteurs",[["bjt","Transistor bipolaire NPN (2N2222)","npn"],
 ["bjt","Transistor bipolaire PNP (2N2907)","pnp"],
 ["bjt","Transistor de puissance NPN (TIP41)","npn+"],
 ["bjt","Transistor de puissance PNP (TIP42)","pnp+"],
 ["fet","MOSFET canal N (2N7000)","nmos"],
 ["fet","MOSFET canal P (BS250)","pmos"],
 ["fet","MOSFET de puissance canal N (IRF540)","nmos+"],
 ["fet","MOSFET de puissance canal P (IRF9540)","pmos+"],
 ["fet","HEMT (déplétion)","hemt"],
 ["fet","HEMT GaN (enrichissement)","gan"],
 ["triac","Triac de puissance (BTA16)"]]],
 ["Transformateurs",[["tr1","Transformateur monophasé"],
 ["tr3","Transformateur triphasé"]]]];
const menuEl=document.getElementById('menu'),side=document.getElementById('side');
function addNote(k){const vx=Math.round((view.x+(cv.clientWidth||900)/2/view.z)/10)*10,vy=Math.round((view.y+(cv.clientHeight||600)/2/view.z)/10)*10;notes.push(k==='r'?{k,x:vx-110,y:vy-65,w:220,h:130,col:'#7c4dff',t:''}:{k,x:vx-30,y:vy,t:'Texte',s:16,col:'#1976d2'});sel=null;selW=null;selN=notes.length-1;panel();render()}
function menuClick(b){const it=MENU[+b.dataset.g][1][+b.dataset.i],t=it[0];
 if(t==='#bl')openBBLib();else if(t==='#cd'||t==='#cq'||t==='#cdx'||t==='#cqx')startCapture(t[2]==='q'?'q':'d',t.length>3);else if(t[0]==='#')addNote(t==='#r'?'r':'t');else{const n=comps.length,vx=view.x+(cv.clientWidth||900)/2/view.z,vy=view.y+(cv.clientHeight||600)/2/view.z,c=add(t,Math.round((vx+((n%5)-2)*30)/20)*20,Math.round((vy+((n%5)-2)*30)/20)*20);if(it[2]===1){c.ana=1;panel();render()}else if((t==='bjt'||t==='fet')&&it[2]){const k=it[2];c.pw=k.endsWith('+');if(t==='bjt'){c.kd=k.replace('+','');bjtP(c)}else{c.fk=k.replace('+','');fetP(c)}panel();render()}else if((t==='mac'||t==='m3')&&it[2]){motPreset(c,it[2]);panel();render()}else if(t==='bb'){c.kind=it[2];c.name='BN'+comps.filter(x=>x.type==='bb').length;panel();render()}else if(t==='dled'&&it[2]){c.lc=it[2];panel();render()}}
 side.classList.remove('open')}
cv.addEventListener('dblclick',e=>{const k=e.target.closest('[data-hk]');if(k&&k.dataset.hk[0]==='p'&&selW!==null){wires[selW].pts.splice(+k.dataset.hk.split(':')[1],1);render()}});
document.getElementById('mb').onclick=()=>side.classList.toggle('open');
document.getElementById('clr').onclick=()=>{comps=[];wires=[];notes=[];sel=selW=selN=pend=null;panel();render()};
function example(){comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',160,300),s=add('sw',400,120),l=add('bulb',640,150),a=add('amp',440,380),v=add('volt',790,300);s.closed=true;l.val=10;l.un=9;
 wire(b.id+':1',s.id+':0');wire(s.id+':1',l.id+':0');wire(l.id+':1',a.id+':1');wire(a.id+':0',b.id+':0');wire(v.id+':1',l.id+':0');wire(v.id+':0',l.id+':1');
 sel=null;panel();render();fitView()}
document.getElementById('ex').onclick=example;
let ovId=null,cuDrag=null;const ov=document.getElementById('ov'),ovs=document.getElementById('ovs'),ovr=document.getElementById('ovr'),ovctl=document.getElementById('ovctl');
function thZoom(c,k,f,cx){if(!thView||thView.id!==c.id||thView.auto){const A=thAuto;thView={id:c.id,auto:false,x0:0,x1:A.x1,y0:A.lo,y1:A.hi,lt:A.lt,lv:A.lv}}const V=thView;
 if(k==='all'){thView=null;return}
 if(k==='x'||k==='xy'){const w=Math.max(2,(V.x1-V.x0)*f);if(cx===undefined){V.x0=Math.max(0,V.lt-w*.85);V.x1=V.x0+w}else{const u=cx,m=V.x0+(V.x1-V.x0)*u;V.x0=Math.max(0,m-w*u);V.x1=V.x0+w}}
 if(k==='y'||k==='xy'){const w=Math.max(.2,(V.y1-V.y0)*f);if(cx===undefined){V.y0=V.lv-w/2;V.y1=V.y0+w}else{const u=cx,m=V.y0+(V.y1-V.y0)*u;V.y0=m-w*u;V.y1=V.y0+w}}}
function thCtl(c){let h='<div class="sp2" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0"><b>Zoom</b> <button data-th="x:.5">Temps +</button><button data-th="x:2">Temps −</button><button data-th="y:.5">°C +</button><button data-th="y:2">°C −</button><button data-th="all">Tout voir</button><span class="mut">Molette = zoom temps (Maj : °C) · glisser = déplacer</span></div>'+FIELDS[c.type].map(f=>fieldH(c,f)).join('');if(isTherm(c))h+=`<label>Vitesse de simulation ${selH('acc',[[1,'×1 (temps réel)'],[10,'×10'],[60,'×60 (1 s = 1 min)'],[300,'×300'],[1000,'×1000']],c.acc||60)}</label><button id="thrs2">Remettre à froid</button>`;
 if(c.type==='rpid')h+=`<label><input type="checkbox" data-b="pe" ${c.pe?'checked':''}> P</label><label><input type="checkbox" data-b="ie" ${c.ie?'checked':''}> I</label><label><input type="checkbox" data-b="de" ${c.de?'checked':''}> D</label>`;return h}
function openOv(c){ovId=c.id;ov.style.display='block';const tt=document.getElementById('ovt');
 if(isTherm(c)||isReg(c)){thView=null;if(tt)tt.textContent=INFO[c.type].n+' – courbe agrandie';ovctl.style.cssText='';ovctl.innerHTML='<details'+(c.type==='rpid'||c.type==='rtor'?' open':'')+'><summary style="cursor:pointer;font-weight:600">⚙ Réglages (modifiables pendant la simulation)</summary>'+thCtl(c)+'</details>';const cb=()=>{render();renderOv()};bindU(ovctl,c,cb);bindP(ovctl,c,cb);ovctl.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{const[k,f]=b.dataset.th.split(':');thZoom(c,k,+f||1);renderOv()});const r2=document.getElementById('thrs2');if(r2)r2.onclick=()=>{delete TH[c.id];c.hon=false;render();renderOv()}}
 else{ovctl.style.cssText='';if(tt)tt.textContent='Oscilloscope – écran agrandi et curseurs';ovctl.innerHTML=scopeCtl(c,true);bindP(ovctl,c,()=>{render();renderOv()})}renderOv()}
function closeOv(){ovId=null;ov.style.display='none'}
document.getElementById('ovc').onclick=closeOv;window.addEventListener('keydown',e=>{if(e.key==='Escape')closeOv()});
function renderOv(){const c=comps.find(c=>c.id===ovId);if(!c){closeOv();return}
 if(isTherm(c)||isReg(c)){ovs.innerHTML=`<rect width="640" height="520" fill="#101614" rx="8"/><g transform="translate(10 10)">${thPlot(c,620,500)}</g>`;ovr.innerHTML=thInfo(c);return}const S=60,cu=c.cur,vd=c.cch===2?c.v2:c.v1,pos=c.cch===2?c.pos2:c.pos1;
 let g='';for(let i=0;i<=10;i++)g+=`M${i*S} 0V480`;for(let j=0;j<=8;j++)g+=`M0 ${j*S}H600`;
 for(let i=0;i<50;i++){g+=`M${i*12} 236V244`}for(let j=0;j<40;j++){g+=`M296 ${j*12}H304`}
 const xl=(k,col)=>`<line x1="${cu[k]*S}" x2="${cu[k]*S}" y1="0" y2="480" stroke="${col}" stroke-width="1.5" stroke-dasharray="6 4"/><line data-cu="${k}" x1="${cu[k]*S}" x2="${cu[k]*S}" y1="0" y2="480" stroke="transparent" stroke-width="22" style="cursor:ew-resize"/><text x="${cu[k]*S+4}" y="12" fill="${col}" font-size="12" font-weight="700">${k.toUpperCase()}</text>`,
  yl=(k,col)=>`<line y1="${240-cu[k]*S}" y2="${240-cu[k]*S}" x1="0" x2="600" stroke="${col}" stroke-width="1.5" stroke-dasharray="6 4"/><line data-cu="${k}" y1="${240-cu[k]*S}" y2="${240-cu[k]*S}" x1="0" x2="600" stroke="transparent" stroke-width="22" style="cursor:ns-resize"/><text x="4" y="${236-cu[k]*S}" fill="${col}" font-size="12" font-weight="700">${k.toUpperCase()}</text>`;
 ovs.innerHTML=`<rect width="640" height="520" fill="#101614" rx="8"/><g transform="translate(20 20)"><rect width="600" height="480" fill="#06100a" stroke="#555"/><path d="${g}" stroke="rgba(120,200,140,.28)" fill="none"/><path d="M300 0V480M0 240H600" stroke="rgba(120,200,140,.55)" fill="none"/>${traces(c,S)}${xl('x1','#ff9800')}${xl('x2','#ff5722')}${yl('y1','#e040fb')}${yl('y2','#7c4dff')}</g>`;
 const dT=Math.abs(cu.x2-cu.x1)*c.td,V1=(cu.y1-pos)*vd,V2=(cu.y2-pos)*vd;
 ovr.innerHTML=`<b>Temps</b> : T1 = ${fmt(cu.x1*c.td,'s')} · T2 = ${fmt(cu.x2*c.td,'s')} · ΔT = <b>${fmt(dT,'s')}</b>${dT>0?' · 1/ΔT = <b>'+fmt(1/dT,'Hz')+'</b>':''}<br><b>Tension CH${c.cch}</b> : V1 = ${fmt(V1,'V')} · V2 = ${fmt(V2,'V')} · ΔV = <b>${fmt(Math.abs(V2-V1),'V')}</b><br>Déphasage : φ = 360° × Δt / T (Δt entre deux passages par zéro des deux voies, T = période du signal). Valeur max : place V1 sur le sommet de la courbe.`}
(function(){const geo=e=>{const c=comps.find(x=>x.id===ovId);if(!c||!(isTherm(c)||isReg(c)))return null;const m=ovs.getScreenCTM();if(!m)return null;return{c,x:(e.clientX-m.e)/m.a-10,y:(e.clientY-m.f)/m.d-10}};
 ovs.addEventListener('wheel',e=>{const q=geo(e);if(!q)return;e.preventDefault();const u=Math.max(0,Math.min(1,(q.x-40)/572)),f=e.deltaY<0?.8:1.25;if(e.shiftKey)thZoom(q.c,'y',f,1-Math.max(0,Math.min(1,(q.y-8)/thAuto.hu)));else thZoom(q.c,'x',f,u);renderOv()},{passive:false});
 let pd=null;ovs.addEventListener('pointerdown',e=>{const q=geo(e);if(!q)return;if(!thView||thView.auto||thView.id!==q.c.id)return;pd={x:e.clientX,y:e.clientY,v:{...thView}};ovs.setPointerCapture&&ovs.setPointerCapture(e.pointerId)});
 ovs.addEventListener('pointermove',e=>{if(!pd||!thView)return;const m=ovs.getScreenCTM(),dx=(e.clientX-pd.x)/m.a,dy=(e.clientY-pd.y)/m.d,V=pd.v,dt=-dx/572*(V.x1-V.x0),dT=dy/thAuto.hu*(V.y1-V.y0);let n0=Math.max(0,V.x0+dt);thView.x0=n0;thView.x1=n0+(V.x1-V.x0);thView.y0=V.y0+dT;thView.y1=V.y1+dT;renderOv()});
 ovs.addEventListener('pointerup',()=>{pd=null})})();
const ptOv=e=>{const p=ovs.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(ovs.getScreenCTM().inverse())};
ovs.addEventListener('pointerdown',e=>{const t=e.target.closest('[data-cu]');if(t)cuDrag=t.dataset.cu});
window.addEventListener('pointermove',e=>{if(!cuDrag)return;const c=comps.find(x=>x.id===ovId);if(!c)return;const p=ptOv(e),S=60;
 if(cuDrag[0]==='x')c.cur[cuDrag]=Math.max(0,Math.min(10,(p.x-20)/S));else c.cur[cuDrag]=Math.max(-4,Math.min(4,(260-p.y)/S));renderOv()});
window.addEventListener('pointerup',()=>{cuDrag=null});
/* ---- Export PDF (sans bibliothèque) ---- */
const PAL={'--ink':'#1c2430','--panel':'#ffffff','--bg':'#ffffff','--grid':'#e1e6ee','--acc':'#1976d2','--line':'#d5dbe5','--mut':'#6b7686','--bad':'#c62828'};
function svgJpeg(svg,w,h,sc,vb,png){return new Promise(res=>{const cl=svg.cloneNode(true);if(vb)cl.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.h);cl.querySelectorAll('[data-t],[data-hk],[data-ho],[data-rz],[data-cu]').forEach(n=>n.remove());if(png)cl.querySelectorAll('rect[fill="url(#g)"]').forEach(n=>n.remove());
 cl.setAttribute('xmlns','http://www.w3.org/2000/svg');cl.setAttribute('width',w);cl.setAttribute('height',h);
 const str=new XMLSerializer().serializeToString(cl).replace(/var\((--[a-z]+)\)/g,(m,k)=>PAL[k]||'#000'),im=new Image();
 im.onload=()=>{const k=document.createElement('canvas');k.width=w*sc;k.height=h*sc;const g=k.getContext('2d');if(png!=='t'){g.fillStyle='#fff';g.fillRect(0,0,k.width,k.height)}g.drawImage(im,0,0,k.width,k.height);
  try{const u=png?k.toDataURL('image/png'):k.toDataURL('image/jpeg',.92);res({data:Uint8Array.from(atob(u.split(',')[1]),c=>c.charCodeAt(0)),w:k.width,h:k.height})}catch(e){res(null)}};
 im.onerror=()=>res(null);im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(str)})}
const pdfStr=x=>Array.from(String(x).replace(/Ω/g,'ohm').replace(/φ/g,'phi').replace(/Φ/g,'Phi').replace(/Δ/g,'D').replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/…/g,'...'),ch=>ch.charCodeAt(0)<256?ch:'?').join('');
const pdfTxt=(x,y,sz,t,b)=>`BT /${b?'F2':'F1'} ${sz} Tf ${x} ${y} Td (${pdfStr(t).replace(/[\\()]/g,'\\$&')}) Tj ET\n`;
function pdfWrap(t,n){const out=[];String(t).split('\n').forEach(p=>{let l='';p.split(' ').forEach(w=>{if((l+' '+w).trim().length>n){out.push(l);l=w}else l=(l+' '+w).trim()});out.push(l)});return out}
function buildPdf(pages,jpg){const ch=[],off=[];let len=0;const by=x=>Uint8Array.from(x,c=>c.charCodeAt(0)&255),put=u=>{ch.push(u);len+=u.length},obj=(id,b)=>{off[id]=len;put(by(`${id} 0 obj\n${b}\nendobj\n`))};
 put(by('%PDF-1.4\n'));const N=pages.length;obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,`<< /Type /Pages /Kids [${pages.map((_,i)=>`${7+2*i} 0 R`).join(' ')}] /Count ${N} >>`);
 obj(3,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');obj(4,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
 if(jpg){off[5]=len;put(by(`5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${jpg.w} /Height ${jpg.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.data.length} >>\nstream\n`));put(jpg.data);put(by('\nendstream\nendobj\n'))}else obj(5,'<< >>');
 pages.forEach((p,i)=>{const cid=6+2*i,c=(p.img&&jpg?`q ${p.img[2]} 0 0 ${p.img[3]} ${p.img[0]} ${p.img[1]} cm /Im1 Do Q\n`:'')+p.ops,cb=by(c);off[cid]=len;put(by(`${cid} 0 obj\n<< /Length ${cb.length} >>\nstream\n`));put(cb);put(by('\nendstream\nendobj\n'));
  obj(cid+1,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> /XObject << /Im1 5 0 R >> >> /Contents ${cid} 0 R >>`)});
 const total=6+2*N,xr=len;put(by(`xref\n0 ${total}\n0000000000 65535 f \n`+Array.from({length:total-1},(_,i)=>String(off[i+1]).padStart(10,'0')+' 00000 n \n').join('')+`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xr}\n%%EOF`));
 return new Blob(ch,{type:'application/pdf'})}
async function saveFile(blob,name){try{const d=window.claude&&window.claude.use?await window.claude.use('downloads'):null;if(d){await d.save({filename:name,data:blob});return}}catch(e){if(e&&e.code==='declined')return}
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)}
function scopeLines(c){const cu=c.cur,vd=c.cch===2?c.v2:c.v1,pos=c.cch===2?c.pos2:c.pos1,dT=Math.abs(cu.x2-cu.x1)*c.td;
 return[(c.xy?'Mode XY':'Base de temps : '+fmt(c.td,'s')+'/div')+'   CH1 : '+fmt(c.v1,'V')+'/div ('+c.cp1+')   CH2 : '+fmt(c.v2,'V')+'/div ('+c.cp2+')   Declenchement : CH'+c.trig+(c.tla?' (auto)':' niveau '+fmt((c.tl||0)*(c.trig===2?c.v2:c.v1),'V')),
  'Curseurs temps : T1 = '+fmt(cu.x1*c.td,'s')+'   T2 = '+fmt(cu.x2*c.td,'s')+'   DT = '+fmt(dT,'s')+(dT>0?'   1/DT = '+fmt(1/dT,'Hz'):''),
  'Curseurs tension (CH'+c.cch+') : V1 = '+fmt((cu.y1-pos)*vd,'V')+'   V2 = '+fmt((cu.y2-pos)*vd,'V')+'   DV = '+fmt(Math.abs(cu.y2-cu.y1)*vd,'V')]}
let pdfMode='schema';const pfm=document.getElementById('pdfm'),$=id=>document.getElementById(id);
function pfFmt(){const p=$('pf_fmt').value!=='pdf';$('pf_pdfo').style.display=p?'none':'';$('pf_go').textContent=p?'Générer l’image PNG':'Générer le PDF'}
function openPdf(m){pdfMode=m;pfFmt();try{const o=JSON.parse(localStorage.getItem('labosim_id')||'{}');['nom','pre','grp','res'].forEach(k=>{$('pf_'+k).value=o[k]||''})}catch(e){}$('pf_msg').textContent='';pfm.style.display='flex'}
$('pb').onclick=()=>openPdf('schema');$('ovp').onclick=()=>openPdf('scope');$('pf_x').onclick=()=>{pfm.style.display='none'};$('pf_fmt').onchange=pfFmt;
$('pf_go').onclick=async()=>{const g=k=>$('pf_'+k).value.trim(),id={nom:g('nom'),pre:g('pre'),grp:g('grp'),res:g('res')},msg=$('pf_msg'),c=pdfMode==='scope'?comps.find(x=>x.id===ovId):null,scope=!!c;
 try{localStorage.setItem('labosim_id',JSON.stringify(id))}catch(e){}
 msg.textContent='Génération…';const isT=scope&&(isTherm(c)||isReg(c)),png=$('pf_fmt').value==='pdf'?false:($('pf_fmt').value==='pngt'?'t':true),bb=scope?null:contentBounds(),j=scope?await svgJpeg(ovs,640,520,png?3:2,undefined,png):await svgJpeg(cv,bb.w,bb.h,Math.min(png?3:2,(png?4500:3000)/Math.max(bb.w,bb.h)),bb,png);
 if(!j){msg.textContent='Impossible de générer l’image du schéma dans ce navigateur.';return}
 if(png){await saveFile(new Blob([j.data],{type:'image/png'}),'LaboSim_'+(isT?'courbe_'+c.type:scope?'oscillo':'schema')+(png==='t'?'_transparent':'')+'.png');msg.textContent='Image PNG prête.';setTimeout(()=>{pfm.style.display='none'},700);return}
 const date=new Date().toLocaleDateString('fr-FR');
 let ops=pdfTxt(40,557,16,isT?'LaboSim - '+INFO[c.type].n:scope?'LaboSim - Oscilloscope':'LaboSim - Schéma de montage',1)+pdfTxt(740,557,9,'LaboSim v'+VERSION)+pdfTxt(40,536,11,'NOM : '+id.nom)+pdfTxt(260,536,11,'PRÉNOM : '+id.pre)+pdfTxt(480,536,11,'GROUPE : '+id.grp)+pdfTxt(40,516,11,'RESSOURCE : '+id.res)+pdfTxt(480,516,11,'Date : '+date);
 let foot;if(isT)foot=[thInfo(c).replace(/<[^>]+>/g,'')];else if(scope)foot=scopeLines(c);else{const cnt={};comps.forEach(k=>{const n=k.ana?(k.type==='amp'?'Ampèremètre à aiguille':'Voltmètre à aiguille'):INFO[k.type].n;cnt[n]=(cnt[n]||0)+1});foot=pdfWrap('Matériel : '+(Object.entries(cnt).map(([n,v])=>n+(v>1?' x'+v:'')).join(', ')||'aucun'),150).slice(0,3)}
 foot.forEach((l,i)=>{ops+=pdfTxt(40,56-i*13,9,l)});
 const top=502,bot=48+foot.length*13,bh=top-bot,sc=Math.min(762/j.w,bh/j.h),w=j.w*sc,h=j.h*sc;
 const pages=[{ops,img:[(842-w)/2,bot+(bh-h)/2,w,h]}],txt=$('pf_txt').value.trim();
 if(txt){const L=pdfWrap(txt,105);for(let i=0;i<L.length;i+=33){let o=pdfTxt(40,555,14,'Notes'+(i?' (suite)':''),1);L.slice(i,i+33).forEach((l,k)=>{o+=pdfTxt(40,530-k*15,11,l)});pages.push({ops:o,img:null})}}
 const nm='LaboSim_'+(isT?'courbe_'+c.type:scope?'oscillo':'schema')+'_'+((id.nom||'eleve').replace(/[^A-Za-z0-9_-]/g,'')||'eleve')+'.pdf';
 await saveFile(buildPdf(pages,j),nm);msg.textContent='PDF prêt.';setTimeout(()=>{pfm.style.display='none'},700)};
/* ---- Notice ---- */
function noticeInit(){const b=$('novb');b.innerHTML=NOTICE;if(!b.children||typeof b.insertBefore!=='function')return;let cur=null;const secs=[];[...b.children].forEach(k=>{if(k.tagName==='H4'){cur=document.createElement('section');secs.push(cur);b.insertBefore(cur,k)}if(cur)cur.appendChild(k)});
 const bar=document.createElement('div');bar.id='nbar';bar.innerHTML='<input id="nq" type="search" placeholder="🔍 Rechercher dans la notice…" autocomplete="off"><div id="ntoc"></div><div id="nres" class="mut"></div>';b.insertBefore(bar,b.firstChild);
 const norm=t=>t.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase(),toc=$('ntoc');
 secs.forEach(sc=>{const a=document.createElement('button');a.textContent=sc.firstChild.textContent;a.onclick=()=>{sc.style.scrollMarginTop=(bar.offsetHeight+6)+'px';sc.scrollIntoView({behavior:'smooth',block:'start'})};toc.appendChild(a)});
 $('nq').oninput=e=>{const q=norm(e.target.value.trim());let n=0;secs.forEach(sc=>{const lis=[...sc.querySelectorAll('li')];if(!q){sc.hidden=false;lis.forEach(l=>{l.hidden=false});return}const hm=norm(sc.firstChild.textContent).includes(q);let any=hm;lis.forEach(l=>{const m=hm||norm(l.textContent).includes(q);l.hidden=!m;if(m){any=true;n++}});sc.hidden=!any});toc.hidden=!!q;$('nres').textContent=q?(n?n+' résultat(s)':'Aucun résultat'):''}}
const NOTICE=`<h4>Principes</h4><ul><li><b>Ajouter un appareil</b> : menu de gauche (Alimentations, Charges, Commandes, Appareils de mesure). Sur téléphone, bouton ☰. Glisse l’appareil sur le plan.</li>
<li><b>Câbler</b> : clique une prise, puis une autre. Clique sur un câble pour changer sa couleur ou le supprimer. Trois tracés au choix en cliquant sur le câble : <b>Câble</b> (courbe : glisse le câble pour créer des points orange, les losanges en ajoutent, double-clic sur un point pour le retirer), <b>Droit</b> (ligne directe) ou <b>Orthogonal</b> (angles droits : glisse les losanges pour déplacer un segment). « Réinitialiser le tracé » revient au tracé par défaut.</li>
<li><b>Prises BNC</b> (GBF, oscilloscope) : le centre est l’<b>âme</b> (signal), la collerette est la <b>masse</b>. BNC → prise banane : un câble pour l’âme, un pour la masse. BNC → BNC : un seul clic = câble coaxial (âme + masse).</li>
<li><b>Zone de travail</b> : plan de 4000 × 3000. Molette ou boutons + / − (en haut à droite du plan) pour zoomer, glisser le fond pour déplacer la vue, deux doigts pour pincer-zoomer, ⤢ pour ajuster la vue à tout le montage.</li>
<li><b>Repérage</b> : rectangles pointillés (redimensionnables) et textes, menu « Repérage ». Ils apparaissent dans l’export PDF.</li><li><b>Oscilloscope</b> : <b>voie math</b> (CH1 + CH2, CH1 − CH2, CH2 − CH1, CH1 × CH2) tracée en violet, échelle automatique ou réglable ; « Mémoriser CH1/CH2 » garde la courbe affichée en pointillés blancs (référence), « Fichier CSV » enregistre les courbes (t, CH1, CH2, math).</li><li><b>Four et enceinte chauffée</b> : le <b>four</b> (Charges domestiques) a un thermostat tout ou rien (consigne, hystérésis) et affiche la courbe de température ; l’<b>enceinte isolée</b> (Charges industrielles) a une résistance chauffante et une sonde intérieure (10 mV/°C). Le temps est accéléré (×1 à ×1000, réglable). Menu <b>Régulation</b> : régulateur <b>TOR</b> et régulateur <b>PID</b> (cases P / I / D et curseurs Kp, Ti, Td) qui pilotent un contact en série avec la résistance.</li><li><b>Transformateurs</b> (rubrique du même nom) : monophasé ou triphasé (couplages Yy, Yd, Dy, Dd), avec U1n, U2, puissance Sn, <b>pertes fer</b>, <b>Q de magnétisation</b>, <b>pertes cuivre</b> et <b>flux de fuite</b> (ucc) ; le panneau donne rendement, charge et chute de tension. Le bouton « Valeurs typiques » propose des pertes réalistes pour la puissance choisie.</li><li><b>Alimentation à découpage</b> (menu Alimentations) : entrée 24–400 V, sortie 3,3–15 V réglable, puissance maximale 30–300 W avec limitation ; le courant d’entrée suit la puissance consommée.</li><li><b>Résistance des câbles</b> : clique sur un câble puis coche « Résistance du câble » : choisis cuivre ou aluminium, la section et la longueur (R = ρ·L/S, à 20 °C). Le panneau affiche R, le courant, la <b>chute de tension</b> et les pertes ; une étiquette apparaît sur le câble, et il passe en <b>rouge avec ⚠</b> si le courant dépasse la valeur admissible indicative de la section (1,5 mm² : 16 A…). Pour traiter plusieurs câbles : <b>Maj + clic</b> (ou « Sélectionner tous les câbles »), règle les valeurs puis « Appliquer ». Par défaut, tous les câbles restent idéaux (5 mΩ). Un câble = un conducteur : pour une ligne aller-retour, règle les deux câbles. Seule la résistance est modélisée.</li><li><b>Mise en forme des textes</b> : double-clique (ou double-tape) sur un texte du plan pour le modifier directement. Sélectionne une partie du texte puis utilise la barre : <b>G</b> gras, <i>I</i> italique, S souligné, x₂ indice, x² exposant, <b>A</b> avec flèche = vecteur (clique avant de taper pour l’activer, reclique pour l’éteindre) ; A petit / normal / grand règle la taille de la sélection ou du texte qui suit, et la liste « Texte » règle la taille de base. Entrée = nouvelle ligne, clic à côté = valider, Échap = annuler. Double-clique sur le titre d’un rectangle pour le modifier.</li>
<li>Tous les réglages numériques ont une <b>unité au choix</b> (mΩ, kΩ, MΩ, pF, µF, mH, kHz…).</li></ul>
<h4>Alimentations</h4><ul><li><b>Continue</b> : prise noire = −, rouge = +. <b>Alternative</b> : N (bleue) et Φ (rouge), tension efficace et fréquence réglables. <b>GBF</b> : sortie BNC ; sinus, carré ou triangle, amplitude crête 0–12 V, offset.</li><li><b>Alimentation triphasée</b> : N (bleue), L1 (jaune), L2 (verte), L3 (rouge) ; tension entre phases 0–400 V (230 V entre phase et neutre) et fréquence réglables, séquence directe 0°, −120°, +120°.</li></ul>
<h4>Charges</h4><ul><li><b>Lampe à LED</b> et <b>lampe fluocompacte</b> : 230 V, puissance et cos φ réglables (driver ou ballast électronique : courant déphasé en avance, visible au wattmètre en VAr et en PF). Elles s’allument à partir de 40 % (LED) ou 60 % (fluocompacte) de la tension nominale.</li>
<li><b>Moteur à courant continu</b> : borne rouge = +, noire = −. Régler tension nominale, résistance et inductance d’induit, courant et vitesse à vide, courant nominal et couple résistant. Le rotor tourne selon la tension (sens inversé si la polarité est inversée) ; vitesse en tr/min avec « Valeurs théoriques ». Il ne démarre pas si la tension est trop faible pour vaincre le couple résistant.</li>
<li><b>Moteur monophasé</b> : 230 V / 50 Hz, cos φ = 0,82 par défaut (puissance utile et rendement réglables). Mesure P, Q, S et PF avec le wattmètre POWER8000 ou la pince.</li>
<li><b>Moteur asynchrone triphasé 1,5 kW</b> (cos φ 0,84, rendement 80 %) : bornes U, V, W. Choisis le <b>couplage</b> : étoile sur 400 V entre phases, triangle sur 230 V ; un mauvais couplage donne « surtension ! ». Vitesse ≈ 1440 tr/min à 50 Hz (2 paires de pôles).</li>
<li><b>Charge des moteurs alternatifs</b> : un curseur règle le fonctionnement de <i>0 (à vide)</i> à <i>1,2 × In</i>. À vide le courant est faible avec un mauvais cos φ ; à 1 × In on retrouve le cos φ nominal ; la vitesse et le couple suivent (compte-tours, couple-mètre).</li>
<li><b>Caisse de charge 0–4 kW</b> : résistances réglables par paliers de 200 W (curseur) ou valeur tapée. Deux jeux de bornes : <b>M1/M2</b> (monophasé ou continu) et <b>L1/L2/L3</b> (triphasé, charge équilibrée) ; le réglage « Branchement » choisit le jeu en service, l’autre est hors circuit (bornes grisées). La puissance réglée est celle obtenue à la tension nominale indiquée.</li></ul>
<h4>Commandes</h4><ul><li><b>Interrupteur</b> : clic sur l’appareil. <b>Commutateur</b> : C est le commun, A et B les deux voies ; clic pour basculer.</li>
<li><b>Relais</b> : A1/A2 = bobine ; 11 = commun, 14 = contact travail (NO), 12 = contact repos (NC). Il colle quand la tension bobine atteint 80 % de sa valeur nominale, avec un « clac » (bouton 🔊 en haut pour couper le son).</li>
<li><b>Contacteur</b> : A1/A2 = bobine ; contacts NO 13-14 et 23-24 (puissance).</li></ul>
<h4>Appareils de mesure</h4><ul><li><b>Ampèremètre</b> : en <u>série</u>, courant entrant par la borne rouge. Branché en dérivation il crée un court-circuit. <b>Voltmètre</b> : en <u>dérivation</u>. Mode DC ou AC (valeur efficace).</li>
<li><b>Appareils à aiguille</b> : choisir un calibre au moins égal à la valeur attendue. Deux échelles sont gravées : 0–100 (calibres 0,1 V · 1 · 10 · 100 · 1000, ou 1 mA · 10 mA · 100 mA · 1 A · 10 A) et 0–30 (calibres 0,3 · 3 · 30 · 300) ; l’échelle en service est tracée en noir. Valeur = lecture × calibre / 100 (ou / 30).</li>
<li><b>Wattmètre POWER8000</b> : le <b>courant</b> se mesure entre les deux bornes du bas (bleue → noire, symbole du fusible) ; la <b>tension</b> se mesure sur les deux bornes de droite (rouge du haut, noire du bas). Les deux bornes rouges du haut sont reliées entre elles.<br>
<i>Câblage 4 fils</i> : phase de la source → rouge SOURCE ; rouge LOAD → phase de la charge ; neutre de la source → bleue ; neutre de la charge → noire.<br>
<i>Câblage 3 fils</i> : la phase de la source et celle de la charge se rejoignent sur la rouge LOAD ; bleue et noire comme ci-dessus.<br>
Boutons W (P), VAr (Q), VA (S), PF, V, A : clique dessus ou choisis l’affichage dans le panneau.</li>
<li><b>Pince ampèremétrique</b> : pose-la sur un câble (le câble passe dans l’anneau : dessous côté amont, dessus côté aval). La flèche rouge donne le sens positif ; « Inverser » le retourne. L’affichage est réglable : A (DC ou AC), W, VAr, VA, PF, V. Pour W, VAr, VA, PF et V, branche les deux cordons tension aux bornes de la charge (noir = COM, rouge = V).</li>
<li><b>Oscilloscope</b> : l’âme de chaque voie va au point à mesurer. Les masses des deux voies sont reliées entre elles : relie-en une au 0 V du montage. Réglages : base de temps, calibres, position, couplage DC/AC/GND, déclenchement.<br>
<b>Écran agrandi + curseurs</b> : deux curseurs de temps (T1, T2) et deux de tension (V1, V2) à glisser ; l’affichage donne ΔT, 1/ΔT et ΔV. <i>Valeur max</i> : place V1 sur le sommet. <i>Déphasage</i> : φ = 360° × Δt / T, Δt étant mesuré entre deux passages par zéro des deux voies et T la période. <b>Mode XY</b> (case dans les réglages) : CH1 pilote l’axe horizontal, CH2 l’axe vertical (figures de Lissajous).</li>
<li><b>Sonde de tension</b> (÷10 ou ÷100) : deux cordons côté mesure, comme un voltmètre (rouge = +) ; sortie BNC vers l’oscilloscope, isolée du circuit. La tension réelle = lecture × rapport.</li>
<li><b>API (automates, essai)</b> : rubrique « API (automates) » du menu. L’<b>automate compact</b> a une alimentation dédiée (24 V continu, 24 V alternatif ou 230 V), 8 entrées TOR (I1–I8, vues à 1 au-delà de 60 % de la tension d’alimentation), 4 sorties relais à contact sec (Q1–Q4) et un programme texte (équations booléennes, mémoires M, temporisations TON/TOF, front RISE/FALL, comparaisons, calculs). Les <b>modules d’extension TOR</b> (6 E / 4 S) et <b>ANALOG</b> (2 entrées et 2 sorties 0–10 V) posés à moins de 420 px d’un automate s’y raccordent seuls et prolongent la numérotation (I9…, Q5…, AI1…, AO1…).</li>
<li><b>Énergie (Wh)</b> : la pince PROVA 21 (avec ses deux fils de tension) et le wattmètre affichent la puissance active ; choisis « Wh » dans <i>Affichage</i> pour lire l’énergie P × t. Les <b>compteurs d’énergie monophasé et triphasé</b> (bornes 1 = entrée, 3 = sortie ; N traversant) totalisent des kWh sur un afficheur. « Temps accéléré » règle la vitesse (× 3600 : 1 s = 1 h) ; « Remise à zéro » remet à 0. Le <b>commutateur de wattmètre</b> permet la méthode des 2 wattmètres avec un seul appareil : position 1 = courant I1 et tension U13, position 2 = I2 et U23 (clic sur l’appareil) ; P = P1 + P2. Sur la pince PROVA 21, le bouton noir en façade fait défiler les modes P, Q, S, U, I, E.</li>
<li><b>Sonde de courant</b> (÷10, ÷100 ou ÷300) : mini-pince à poser sur un câble, sortie BNC vers l’oscilloscope ; elle délivre 1 V pour « rapport » ampères (÷100 : 10 mV/A). Courant réel = tension lue × rapport. « Inverser » change le sens.</li>
<li><b>Compte-tours</b> et <b>couple-mètre</b> : à poser près d’un moteur (≈ 100 px) ; ils affichent la vitesse (tr/min) ou le couple utile (N·m) du moteur le plus proche.</li></ul>
<h4>Circuits intégrés (simulation temporelle)</h4><ul><li><b>NE555</b> : broches GND, TRIG, OUT, RST, CTRL, THR, DIS, VCC (de gauche à droite sur le module). Câble-le en astable (R1, R2, C) ou monostable ; f = 1,44 / ((R1 + 2·R2)·C) en astable.</li>
<li><b>AOP LF356</b> : entrées + et −, sortie S, alimentations V+ et V− à brancher (par exemple deux alimentations continues en série : le point commun est la masse). La sortie sature à environ 1,5 V des rails.</li>
<li><b>Comparateur LM311</b> : même brochage ; sortie à collecteur ouvert en option (résistance de rappel à ajouter).</li>
<li>Dès qu’un de ces circuits est présent, la simulation passe en mode temporel : les signaux de l’oscilloscope sont calculés à partir de la mise sous tension (≈ 75 divisions de simulation avant l’affichage). Choisir une base de temps adaptée à la fréquence. Les multimètres affichent la moyenne (DC) ou la valeur efficace de la composante alternative (AC). Les moteurs, relais, wattmètre, pinces et sondes ne sont pas pris en charge dans ce mode.</li></ul>
<h4>Boîtes noires (dipôles et quadripôles à caractériser)</h4><ul><li>Le professeur place une boîte noire (menu « Boîtes noires »), puis « 🔒 Édition (professeur)… » : nom (BN1, BN2…), type (dipôle A-B ou quadripôle E+, E−, S+, S−), modèle prêt à l’emploi ou netlist libre (R, C, L, W, E), code professeur facultatif.</li>
<li><b>Construire l’intérieur avec de vrais composants</b> : pose des résistances, condensateurs et bobines sur le plan et câble-les entre eux ; puis, dans le menu « Boîtes noires », choisis « Créer un dipôle depuis un montage… » ou « …un quadripôle… » et clique les bornes dans l’ordre demandé dans la barre d’état (A, B ou E+, E−, S+, S−). Plusieurs bornes peuvent être posées sur le même nœud (par exemple E− et S−). Les composants convertis disparaissent du plan (enregistre le montage avant pour en garder une copie) ; il reste à brancher la boîte noire comme n’importe quel appareil. La netlist produite reste modifiable via « 🔒 Édition ».</li>
<li>L’élève ne voit que le nom et les bornes ; il doit déterminer le contenu par des mesures (voltmètre, ampèremètre, GBF + oscilloscope).</li>
<li>Le contenu est enregistré de façon masquée dans le fichier de montage et protégé par le code à l’écran. C’est une protection de commodité, pas un chiffrement : un élève déterminé pourrait l’extraire du fichier.</li></ul>
<h4>Diodes, LED, platine d’essai</h4><ul><li><b>Diode</b> (menu « Composants ») : 1N4148, 1N4007 ou Zener (3,3 / 5,1 / 9,1 V) ; l’anode est à gauche (A), la cathode, repérée par la bague, à droite (K). <b>LED</b> : rouge, orange, jaune, vert, bleu ou blanc ; patte + à gauche. Pense à la résistance de protection : au-delà de 35 mA, « surintensité ! » s’affiche. La luminosité suit le courant moyen. Ces composants utilisent la simulation temporelle (comme le NE555 et l’AOP).</li>
<li><b>Circuits intégrés</b> : boîtier DIP-8 vu de dessus, encoche à gauche, broche 1 en bas à gauche, broches 5 à 8 en haut. NE555 : 1 GND, 2 TRG, 3 OUT, 4 RST, 5 CTL, 6 THR, 7 DIS, 8 VCC. LF356 : 2 entrée −, 3 entrée +, 4 V−, 6 sortie, 7 V+ (1, 5 : offset ; 8 : NC). LM311 : 2 entrée +, 3 entrée −, 4 V−, 7 sortie, 8 V+ ; la broche 4 sert de référence (en alimentation simple, relie aussi la broche 1 à la masse).</li>
<li><b>Platine d’essai</b> : pose-la, puis glisse dessus résistances, condensateurs, bobines, diodes, LED ou circuits intégrés : ils s’accrochent aux trous. Les 5 trous d’une même colonne (a–e en bas, f–j en haut) sont reliés, la rainure centrale sépare les deux moitiés, et les quatre lignes du haut et du bas sont des rails (+ / −). Pour un circuit intégré, place-le à cheval sur la rainure. Chaque trou peut aussi recevoir un câble (alimentations, appareils de mesure). Déplacer la platine emporte les composants enfichés.</li></ul>
<h4>Capteurs</h4><ul><li><b>Photorésistance (LDR)</b> : curseur d’éclairement de 0,1 à 10 000 lx ; 16 kΩ à 10 lx, environ 1 MΩ dans le noir. À brancher en pont diviseur.</li>
<li><b>Émetteur / récepteur infrarouge</b> : l’émetteur est une LED infrarouge (menu « Capteurs ») ; le récepteur est un phototransistor (C = collecteur, E = émetteur). Le courant du récepteur dépend du courant dans les LED infrarouges du plan et de la distance qui les sépare ; la case « Obstacle sur le faisceau » coupe presque tout. Un signal modulé (GBF, NE555) est reproduit.</li>
<li><b>Capteur ultrason HC-SR04</b> : alimenter VCC (5 V) / GND ; une impulsion sur TRIG (fin de l’impulsion) lance la mesure ; ECHO reste à l’état haut 2·d / 340 m/s. La distance de l’obstacle se règle sur l’appareil (2 à 400 cm). Ces capteurs utilisent la simulation temporelle.</li></ul>
<h4>Transistors, triacs, haut-parleur, micro</h4><ul><li><b>Transistor bipolaire NPN / PNP</b> (et versions de puissance TO-220) : jonction base-émetteur ≈ 0,65 V (0,85 V en puissance), Ic = β·Ib en régime actif, saturation quand la charge limite le courant. Le panneau indique l’état (bloqué / actif / saturé), Ic et Ib. Mets toujours une résistance en série avec la base.</li><li><b>MOSFET N / P</b>, <b>HEMT</b> (déplétion, Vth &lt; 0) et <b>HEMT GaN</b> : modèle à loi carrée (Vth et K réglables), diode de corps. Grille isolée.</li><li><b>Triac</b> : amorcé par un courant de gâchette ≥ Igt (G–MT1), maintenu tant que I &gt; Ih, bloqué au passage par zéro. <b>Optotriac</b> : la LED d’entrée (A, K) amorce la sortie (T1, T2) au-delà de IFT ; option « passage par zéro ».</li><li><b>Haut-parleur</b> : le son est reconstruit à partir de la fréquence et de la puissance calculées dans la bobine (🔊 pour couper). <b>Micro</b> : dynamique (source 600 Ω) ou électret (à polariser) ; son sinusoïdal réglable, ou micro réel de l’appareil (fréquence dominante + niveau).</li></ul><h4>Multimètre universel</h4><ul><li>Bornes : <b>COM</b> (noire, commune), <b>V/Ω</b> (rouge), <b>3 A</b> et <b>16 A</b> (blanches). Clique sur <b>DCV / ACV / DCI / ACI / Ω</b> pour choisir la fonction. Tension : en dérivation ; courant : en série (jack 3 A ou 16 A) ; Ω : composant hors tension et isolé du reste du circuit.</li><li>Résistance : le bouton « Tolérance ±5 % » donne une valeur réelle légèrement différente de la valeur marquée — à mesurer à l’ohmmètre.</li><li>Oscilloscope : décoche « Niveau auto » pour régler le niveau de déclenchement avec le curseur.</li></ul><h4>Alimentations à limite de courant</h4><ul><li>Chaque voie (alim 0–30 V, alim double) a une <b>limite de courant</b> réglable dans le panneau de droite. En dessous, la voie régule la tension (CV) ; au-delà elle régule le courant (CC, voyant rouge « CC ») et la tension s’effondre : un court-circuit ne détruit rien.</li><li>Alim double : CH1 = bornes 1 (−) et 2 (+), CH2 = bornes 3 (−) et 4 (+). Les voies sont flottantes : relie + d’une voie au − de l’autre pour 2 × 30 V en série, ou − de CH1 à + de CH2 pour une alim symétrique ±.</li></ul><h4>Récepteur IR TSOP</h4><ul><li>Sortie <b>haute</b> au repos, <b>basse</b> quand il reçoit de l’infrarouge <b>modulé à sa fréquence</b> (réglable, une par groupe). La lumière continue, le 100 Hz des lampes et les autres fréquences sont ignorés. Émetteur : LED IR + résistance pilotée par un GBF carré 0–5 V ou par <code>tone(3, 38000)</code>. Espace les fréquences de ≥ 5 kHz.</li></ul><h4>Arduino Uno (programmable)</h4><ul><li><b>Carte Arduino Uno</b> : menu « Arduino ». Broches D0–D13 et A0–A5 câblables, 5 V, 3,3 V et GND (la carte est alimentée par l’USB : pas d’alimentation à brancher). La LED « L » suit la broche 13.</li>
<li><b>Programmer</b> : sélectionne la carte puis « 💻 Code et moniteur série… ». Un volet s’ouvre à droite : écris ton programme (langage Arduino : <code>setup()</code>, <code>loop()</code>, <code>pinMode</code>, <code>digitalWrite</code>, <code>digitalRead</code>, <code>analogRead</code>, <code>analogWrite</code>, <code>delay</code>, <code>millis</code>, <code>pulseIn</code>, <code>Serial.print</code>…), puis « ▶ Téléverser et démarrer ». Les erreurs sont signalées avec le numéro de ligne.</li>
<li><b>Exécution en temps réel</b> : le programme tourne en même temps que le circuit (LED qui clignotent, tensions mesurées, oscilloscope, moniteur série). « ⏸ Pause », « ↺ Reset » et une vitesse (×0,1 à ×10) sont disponibles. Les <i>int</i> font 16 bits comme sur la vraie carte (débordements à 32767), <i>long</i> 32 bits, la division de deux entiers est entière.</li>
<li><b>Entrées analogiques</b> : analogRead mesure la tension de la broche (0–5 V → 0–1023, 112 µs). <b>Sorties PWM</b> : analogWrite sur 3, 5, 6, 9, 10, 11 (≈ 490 Hz, 980 Hz sur 5 et 6) — observe-les à l’oscilloscope (base de temps ≈ 1 ms/div).</li>
<li><b>Capteurs</b> : HC-SR04 câblé sur deux broches (TRIG en sortie, ECHO en entrée) avec <code>pulseIn(echo, HIGH)</code> ; photorésistance en pont diviseur sur une entrée analogique ; potentiomètre (curseur → A0…) ; bouton poussoir entre une broche en <code>INPUT_PULLUP</code> et GND (maintenir le clic pour appuyer).</li>
<li><b>Moniteur série</b> : le champ d’envoi ajoute un retour à la ligne (comme l’IDE Arduino) : pense à <code>Serial.parseInt()</code> qui lira ensuite un 0 sur ce retour, ou utilise <code>readStringUntil('\\n')</code>.</li>
<li><b>Non géré</b> : bibliothèques (#include), structures et classes, pointeurs, interruptions, I²C/SPI, Servo. Les macros <code>#define NOM valeur</code> fonctionnent.</li></ul>
<h4>Boîtes noires étendues, ventilateurs, aspirateur</h4><ul><li><b>Boîte noire créée à partir du montage</b> : en plus de R, C et L, elle accepte maintenant les <b>diodes, LED, Zener, transistors bipolaires, MOSFET N/P, triacs, lampes, LDR, boîtes à décades et interrupteurs fermés</b>. Les valeurs de tolérance (±5 %) sont figées au moment de la création. Dès qu'une boîte contient un composant non linéaire, le simulateur passe en mode temporel. <b>Sources dans une boîte</b> : ligne <code>V1 n1 B 12</code> (continu) ou <code>V1 n1 B 230 AC 50</code> (alternatif, valeur efficace et fréquence) ; modèles « Batterie 12 V (Thévenin : source + 0,1 Ω) » et « Secteur 230 V~ » dans l'éditeur. Autres lignes : <code>G1 + - amplitude fréquence sin|sq|tri [offset] [rapport]</code> (GBF), <code>U1 in out gnd Un [dropout] [Imax]</code> (régulateur), <code>A1 in+ in- out v+ v- [vm]</code> (ampli-op), <code>K1 …</code> (comparateur, option OC), <code>O1 A K T2 T1 [ift] [ZC]</code> (optotriac), <code>N1 gnd trg out rst ctl thr dis vcc</code> (NE555), <code>M1 G D S N|P|H|G …</code> (MOSFET, HEMT, GaN). Pour capturer sources, diodes, transistors… depuis un montage, utilise les entrées « tout type » du menu Boîtes noires (monte d'abord le contenu de la boîte isolé du reste du circuit). Netlist saisie à la main : <code>D1 A B [v0 rd vz rz]</code>, <code>Q1 B C E NPN|PNP [bêta] [P]</code>, <code>M1 G D S N|P [vt] [kp] [P]</code>, <code>T1 MT2 MT1 G [igt] [ih]</code>.</li><li><b>Ventilateurs</b> (menu Charges mécaniques / moteurs) : 230 V monophasé domestique (≈ 1 400 tr/min, ≈ 100 W) et 400 V triphasé industriel (≈ 1,1 kW). <b>Aspirateur 2000 W</b> : moteur universel 230 V, ≈ 9 A, ≈ 17 000 tr/min.</li></ul>
<h4>Ohmmètre, régulateur, levage, bibliothèque</h4><ul><li><b>Ohmmètre</b> : 5 calibres (200 Ω à 2 MΩ), « OL » au-delà ; mode <b>BIP</b> = continuité (bip sous 50 Ω). À brancher hors tension.</li><li><b>Régulateur réglable</b> : IN / OUT / GND, tension de sortie Un réglable, dropout et limite de courant ; à placer après pont + condensateur (exemple 31).</li><li><b>Levage</b> : treuil + masse couplés à un moteur (le plus proche ou choisi) ; la masse fixe le couple résistant, donc la charge du moteur ; trop lourd, le moteur cale (exemple 32).</li><li><b>Bibliothèque de boîtes noires</b> : enregistre une boîte (contenu chiffré + code conservés), export / import, chargement automatique depuis <code>labosim-bb-index.json</code> + dossier <code>bb/</code> (ou <code>labosim-bb.json</code>).</li></ul>
<h4>Étiquettes et filtre du matériel</h4><ul><li>Le bouton <b>🏷</b> (haut du menu de gauche) ouvre la gestion des étiquettes : crée, renomme ou supprime des étiquettes (TP ELEN, TP ENER, TP1, TP2, Projet…) puis coche les appareils concernés.</li><li>La liste déroulante du menu filtre le matériel : <i>Tout le matériel</i>, une étiquette, ou <i>Sans étiquette</i>. Chaque étiquette a une couleur (modifiable) : un petit point de cette couleur apparaît à droite des appareils concernés dans le menu.</li><li>La configuration est mémorisée dans le navigateur ; « Exporter » / « Importer » permettent de la partager. Sur un site GitHub Pages, deux possibilités : un seul fichier <code>labosim-tags.json</code> à côté de <code>index.html</code>, ou plusieurs fichiers combinés : « Exporter un fichier par étiquette » télécharge un fichier par étiquette (<code>tp-elen.json</code>, <code>tp1.json</code>…, nommés d’après l’étiquette) et un <code>labosim-tags-index.json</code> ; dépose les premiers dans le dossier <code>tags/</code> et l’index à la racine. Le site fusionne tout (mêmes noms d’étiquettes regroupés, appareils additionnés). Pour ajouter un TP, dépose son fichier dans <code>tags/</code> et ajoute son nom à l’index. Les étiquettes déjà enregistrées dans le navigateur ont la priorité</li></ul>
<h4>Sauvegarde d’un montage</h4><ul><li>« 💾 Enregistrer » télécharge un fichier <code>montage_labosim.json</code> (appareils, câbles, repérages) ; « 📂 Ouvrir » le recharge.</li></ul>
<h4>Export PDF / PNG</h4><ul><li><b>PNG</b> : dans la fenêtre « Exporter », choisis <b>Image PNG sur fond blanc</b> ou <b>sur fond transparent</b> : le schéma (ou l’écran de l’oscilloscope) est enregistré en haute résolution, sans bandeau ni quadrillage, prêt à être collé dans un document ou une présentation.</li><li>« Exporter » (en haut), format PDF : schéma de montage + champs NOM, PRÉNOM, GROUPE, RESSOURCE et notes libres. Le même bouton existe dans l’écran agrandi de l’oscilloscope : le PDF contient alors la copie d’écran, les mesures des curseurs et le texte libre.</li></ul>`;
noticeInit();$('nb').onclick=()=>{$('nov').style.display='block'};$('novc').onclick=()=>{$('nov').style.display='none'};
$('snd').onclick=()=>{soundOn=!soundOn;$('snd').textContent=soundOn?'🔊':'🔇';if(AC_&&AC_._m)AC_._m.gain.value=soundOn?VOL:0;render()};
{const v=$('vol');if(v){let p=60;try{const q=localStorage.getItem('labosim_vol');if(q!==null)p=+q}catch(e){}v.value=p;v.oninput=()=>{VOL=Math.pow(v.value/100,2);try{localStorage.setItem('labosim_vol',v.value)}catch(e){}if(v.value>0&&!soundOn){soundOn=true;$('snd').textContent='🔊'}if(AC_&&AC_._m)AC_._m.gain.value=soundOn?VOL:0}}}
/* ---- Étiquettes du matériel (TP, projet…) : couleurs et filtre du menu ---- */
const TCOL=['#e53935','#fb8c00','#43a047','#1e88e5','#8e24aa','#00897b','#6d4c41','#546e7a'];
let TAGS={tags:['TP ELEN','TP ENER','TP1','TP2','Projet'],map:{},colors:{'TP ELEN':TCOL[0],'TP ENER':TCOL[1],'TP1':TCOL[2],'TP2':TCOL[3],'Projet':TCOL[4]}},tagFilter='*',tagsLocal=false;
const itKey=it=>it[0]+(it[2]===1?':a':it[2]?':'+it[2]:''),tcol=t=>TAGS.colors[t]||'#888';
function normTags(d){const t=[...new Set((Array.isArray(d&&d.tags)?d.tags:[]).map(x=>String(x).trim()).filter(Boolean))],m={},co={};Object.entries((d&&d.map)||{}).forEach(([k,v])=>{if(Array.isArray(v))m[k]=v.map(String).filter(x=>t.includes(x))});
 t.forEach((x,i)=>{const c=d&&d.colors&&d.colors[x];co[x]=/^#[0-9a-f]{6}$/i.test(c)?c:TCOL[i%TCOL.length]});return{tags:t,map:m,colors:co}}
function saveTags(){try{localStorage.setItem('labosim_tags',JSON.stringify({...TAGS,edited:true}));localStorage.setItem('labosim_filter',tagFilter)}catch(e){}}
function saveFilter(){try{localStorage.setItem('labosim_filter',tagFilter)}catch(e){}}
const tagSlug=t=>String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'etiquette';
/* fusion de plusieurs fichiers d'étiquettes : étiquettes réunies, appareils additionnés, première couleur conservée */
function mergeTags(list){const o={tags:[],map:{},colors:{}};list.forEach(d=>{const n=normTags(d);n.tags.forEach(t=>{if(!o.tags.includes(t))o.tags.push(t);if(!o.colors[t]&&n.colors[t])o.colors[t]=n.colors[t]});Object.entries(n.map).forEach(([k,v])=>{o.map[k]=[...new Set([...(o.map[k]||[]),...v])]})});return normTags(o)}
/* ---- Bibliothèque de boîtes noires (sauvegardée comme les étiquettes) ---- */
let BBLIB=[];
const bbLibLocal=()=>BBLIB.filter(b=>!b.src);
function bbLibSave(){try{localStorage.setItem('labosim_bblib',JSON.stringify(bbLibLocal()))}catch(e){}}
/* Formats acceptés à l'import : export bibliothèque {boxes:[…]}, tableau, fichier d'une boîte {name,net,…}, montage enregistré (boîtes noires incluses) */
function bbLibArr(d){if(!d)return[];if(Array.isArray(d))return d.filter(b=>b&&typeof b.net==='string');if(Array.isArray(d.boxes))return d.boxes;if(typeof d.net==='string'&&d.name)return[d];if(Array.isArray(d.comps))return d.comps.filter(c=>c&&c.type==='bb'&&typeof c.net==='string').map(c=>({name:c.name||'BN',kind:c.kind,net:c.net,lk:c.lk||''}));return[]}
function bbLibMerge(arr,over){let ch=false;(arr||[]).forEach(b=>{if(!b||!b.name||typeof b.net!=='string')return;const e={name:String(b.name).slice(0,60),kind:b.kind==='q'?'q':'d',net:b.net,lk:b.lk||''},i=BBLIB.findIndex(x=>x.name===e.name&&!x.src);if(i<0){BBLIB.push(e);ch=true}else if(over){BBLIB[i]=e;ch=true}});if(ch)bbLibSave();return ch}
function bbLibInit(){try{BBLIB=JSON.parse(localStorage.getItem('labosim_bblib')||'[]').filter(b=>b&&b.name&&typeof b.net==='string')}catch(e){BBLIB=[]}
 try{if(typeof fetch!=='function')return;const j=u=>fetch(u,{cache:'no-cache'}).then(r=>r.ok?r.json():null).catch(()=>null);
  j('labosim-bb-index.json').then(ix=>{const fl=Array.isArray(ix)?ix:ix&&Array.isArray(ix.files)?ix.files:[];return Promise.all([j('labosim-bb.json'),...fl.map(j)])}).then(r=>{const L=[];r.forEach(d=>{if(!d)return;(Array.isArray(d)?d:Array.isArray(d.boxes)?d.boxes:[d]).forEach(b=>{if(b&&b.name&&typeof b.net==='string')L.push(b)})});
   if(!L.length)return;BBLIB=BBLIB.filter(b=>!b.src);L.forEach(b=>{if(!BBLIB.some(x=>x.name===b.name))BBLIB.push({name:String(b.name).slice(0,60),kind:b.kind==='q'?'q':'d',net:b.net,lk:b.lk||'',src:'file'})})})}catch(e){}}
function bbLibPlace(b){const n=comps.length,vx=view.x+(cv.clientWidth||900)/2/view.z,vy=view.y+(cv.clientHeight||600)/2/view.z,c=add('bb',Math.round((vx+((n%5)-2)*30)/20)*20,Math.round((vy+((n%5)-2)*30)/20)*20);c.kind=b.kind;c.name=b.name;c.net=b.net;c.lk=b.lk||'';sel=c.id;selW=null;selN=null;panel();render();return c}
function bbLibAdd(c){const e={name:c.name||'BN',kind:c.kind,net:c.net,lk:c.lk||''},i=BBLIB.findIndex(x=>x.name===e.name&&!x.src);if(i<0)BBLIB.push(e);else BBLIB[i]=e;bbLibSave()}
function openBBLib(){const m=$('bbm'),b=$('bbb');m.style.display='block';
 const draw=(msg)=>{b.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>📚 Bibliothèque de boîtes noires</b><button id="blx">Fermer</button></div>
<div class="mut" style="font-size:12px">Les boîtes enregistrées gardent leur contenu chiffré et leur code professeur. Elles sont mémorisées dans ce navigateur ; « Un fichier par boîte » télécharge un fichier par boîte plus <code>labosim-bb-index.json</code> : dépose les fichiers dans un dossier <code>bb/</code> sur GitHub et l’index à côté de <code>index.html</code> ; tout se charge alors automatiquement pour tous (boîtes marquées 📁). « Tout dans un fichier » crée un seul <code>labosim-bb.json</code>.</div>
<div style="max-height:46vh;overflow:auto;margin:8px 0">${BBLIB.length?`<table style="width:100%">${BBLIB.map((x,i)=>`<tr><td>${x.lk?'🔒':'🔓'} ${x.src?'📁 ':''}<b>${esc_(x.name)}</b> <span class="mut">${x.kind==='q'?'quadripôle':'dipôle'}</span></td><td style="text-align:right;white-space:nowrap"><button data-bp="${i}" class="p">Placer</button> ${x.src?'':`<button data-bd="${i}">Supprimer</button>`}</td></tr>`).join('')}</table>`:'<span class="mut">Bibliothèque vide : sélectionne une boîte noire puis « Enregistrer dans la bibliothèque ».</span>'}</div>
<div id="blm" class="mut">${msg||''}</div>
<div style="display:flex;gap:8px;flex-wrap:wrap"><button id="blx2">⬇ Un fichier par boîte</button><button id="blx3">⬇ Tout dans un fichier</button><button id="bli">⬆ Importer…</button></div>`;
  $('blx').onclick=()=>{m.style.display='none'};
  b.querySelectorAll('[data-bp]').forEach(x=>x.onclick=()=>{bbLibPlace(BBLIB[+x.dataset.bp]);m.style.display='none'});
  b.querySelectorAll('[data-bd]').forEach(x=>x.onclick=()=>{const t=BBLIB[+x.dataset.bd];if(t&&!t.src){BBLIB.splice(+x.dataset.bd,1);bbLibSave()}draw()});
  $('blx3').onclick=()=>saveFile(new Blob([JSON.stringify({boxes:BBLIB.map(({name,kind,net,lk})=>({name,kind,net,lk}))},null,1)],{type:'application/json'}),'labosim-bb.json');
  $('blx2').onclick=()=>{const files=[];BBLIB.forEach(x=>{const nm=tagSlug(x.name)+'.json';files.push('bb/'+nm);saveFile(new Blob([JSON.stringify({name:x.name,kind:x.kind,net:x.net,lk:x.lk},null,1)],{type:'application/json'}),nm)});setTimeout(()=>saveFile(new Blob([JSON.stringify({files},null,1)],{type:'application/json'}),'labosim-bb-index.json'),300)};
  $('bli').onclick=()=>{const i=document.createElement('input');i.type='file';i.multiple=true;i.accept='.json,application/json';i.onchange=()=>{const fs=[...(i.files||[])];if(!fs.length)return;let all=[],idx=false,bad=0,left=fs.length;
   fs.forEach(f=>{const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(String(r.result)),a=bbLibArr(d);if(a.length)all=all.concat(a);else if(d&&Array.isArray(d.files))idx=true;else bad++}catch(x){bad++}
    if(--left===0){const n=all.length?bbLibMerge(all,true):false;draw(n?'Boîtes importées ('+all.length+').':idx?'Ce fichier est un index (labosim-bb-index.json) : il sert au site GitHub, pas à l’import. Importe plutôt les fichiers des boîtes.':bad?'Aucune boîte noire dans ce fichier (attendu : export de la bibliothèque, fichier d’une boîte ou montage contenant des boîtes).':'Rien à importer.')}};r.readAsText(f)})};i.click()}};
 draw()}

function loadTagFiles(){const j=u=>fetch(u,{cache:'no-cache'}).then(r=>r.ok?r.json():null).catch(()=>null);
 return j('labosim-tags-index.json').then(ix=>{const fl=Array.isArray(ix)?ix:ix&&Array.isArray(ix.files)?ix.files:null;
  const main=j('labosim-tags.json');if(!fl||!fl.length)return main.then(d=>d&&d.tags?[d]:[]);
  return Promise.all([main,...fl.map(j)]).then(r=>r.filter(d=>d&&d.tags))})}
function initTags(){try{const o=JSON.parse(localStorage.getItem('labosim_tags')||'null');if(o&&o.tags&&o.edited){TAGS=normTags(o);tagsLocal=true}tagFilter=localStorage.getItem('labosim_filter')||'*'}catch(e){}
 try{if(!tagsLocal&&typeof fetch==='function')loadTagFiles().then(l=>{if(l.length){TAGS=mergeTags(l);buildMenu()}}).catch(()=>{})}catch(e){}}
let FOLD=new Set();try{FOLD=new Set(JSON.parse(localStorage.getItem('labosim_fold')||'[]'))}catch(e){}
function saveFold(){try{localStorage.setItem('labosim_fold',JSON.stringify([...FOLD]))}catch(e){}}
function foldUi(){const eh=$('exh'),ex=$('exs');if(eh&&ex){const f=FOLD.has('Exemples');eh.classList.toggle('fold',f);ex.hidden=f;eh.onclick=()=>{if(FOLD.has('Exemples'))FOLD.delete('Exemples');else FOLD.add('Exemples');saveFold();foldUi()}}
 const fa=$('fa');if(fa){const all=MENU.map(m=>m[0]).concat('Exemples');fa.onclick=()=>{const allF=all.every(g=>FOLD.has(g));if(allF)FOLD.clear();else all.forEach(g=>FOLD.add(g));saveFold();buildMenu()};fa.textContent=all.every(g=>FOLD.has(g))?'⊞':'⊟';fa.title=all.every(g=>FOLD.has(g))?'Tout déplier':'Tout replier'}}
function buildMenu(){const tf=$('tf');if(tagFilter!=='*'&&tagFilter!=='-'&&!TAGS.tags.includes(tagFilter))tagFilter='*';
 tf.innerHTML='<option value="*">Tout le matériel</option>'+TAGS.tags.map(t=>`<option value="${esc_(t)}">${esc_(t)}</option>`).join('')+'<option value="-">Sans étiquette</option>';tf.value=tagFilter;
 $('tfd').style.background=tagFilter==='*'||tagFilter==='-'?'transparent':tcol(tagFilter);
 const tg=it=>TAGS.map[itKey(it)]||[],show=it=>it[0][0]==='#'||tagFilter==='*'||(tagFilter==='-'?tg(it).length===0:tg(it).includes(tagFilter));let any=false;
 menuEl.innerHTML=MENU.map(([g,items],gi)=>{const L=items.map((it,ii)=>show(it)?`<button data-g="${gi}" data-i="${ii}"><span>${it[1]}</span>${it[0][0]!=='#'&&tg(it).length?`<span class="dots">${tg(it).map(t=>`<i style="background:${tcol(t)}" title="${esc_(t)}"></i>`).join('')}</span>`:''}</button>`:'').join('');if(L&&g!=='Repérage')any=true;const fo=FOLD.has(g);return L?`<h3 data-gh="${esc_(g)}" class="${fo?'fold':''}">${g}</h3><div class="grp"${fo?' hidden':''}>${L}</div>`:''}).join('')+(any?'':'<p class="mut" style="font-size:12px">Aucun matériel avec cette étiquette.</p>');
 foldUi();menuEl.querySelectorAll('button').forEach(b=>b.onclick=()=>menuClick(b));menuEl.querySelectorAll('h3[data-gh]').forEach(h=>h.onclick=()=>{const g=h.dataset.gh;if(FOLD.has(g))FOLD.delete(g);else FOLD.add(g);try{localStorage.setItem('labosim_fold',JSON.stringify([...FOLD]))}catch(e){}h.classList.toggle('fold');h.nextElementSibling.hidden=FOLD.has(g)})}
function renderTags(){const n=TAGS.tags.length,ents=MENU.filter(([g])=>g!=='Repérage').map(([g,it])=>[g,it.filter(x=>x[0][0]!=='#')]);
 const rows=ents.map(([g,items])=>`<tr><th colspan="${n+1}" style="background:var(--bg)">${g}</th></tr>`+items.map(it=>`<tr><td>${it[1]}</td>${TAGS.tags.map((t,ti)=>`<td><input type="checkbox" data-ck="${itKey(it)}|${ti}"${(TAGS.map[itKey(it)]||[]).includes(t)?' checked':''}></td>`).join('')}</tr>`).join('')).join('');
 $('tgb2').innerHTML=`<div>${TAGS.tags.map((t,i)=>`<span class="chip"><input type="color" data-tc="${i}" value="${tcol(t)}" title="Couleur de l’étiquette"><input type="text" data-tr="${i}" value="${esc_(t)}" size="${Math.max(6,t.length)}"><button data-td="${i}" title="Supprimer l’étiquette">×</button></span>`).join('')}<span class="chip"><input type="text" id="tnew" placeholder="Nouvelle étiquette" size="16"><button id="tadd">Ajouter</button></span></div>
<div style="overflow:auto"><table><tr><th>Appareil</th>${TAGS.tags.map((t,i)=>`<th><i class="dot" style="background:${tcol(t)}"></i> ${esc_(t)}<br><button data-ta="${i}" title="Tout cocher / tout décocher">☑</button></th>`).join('')}</tr>${rows}</table></div>
<div style="display:flex;gap:8px;flex-wrap:wrap"><button id="texp">Exporter la configuration</button><button id="tweb" title="Oublier les étiquettes modifiées sur cet ordinateur et recharger celles des fichiers en ligne">Revenir aux fichiers en ligne</button><button id="texf" title="Un fichier par étiquette, nommé d’après l’étiquette, plus la liste à déposer sur GitHub">Exporter un fichier par étiquette</button><button id="timp">Importer…</button><input type="file" id="tfl" accept=".json,application/json" style="display:none"><button id="trst">Décocher tout</button></div>`;
 const done=()=>{saveTags();buildMenu()};{const w=$('tweb');if(w)w.onclick=()=>{try{localStorage.removeItem('labosim_tags')}catch(e){}location.reload()}}
 $('tgb2').querySelectorAll('[data-ck]').forEach(i=>i.onchange=()=>{const[k,ti]=i.dataset.ck.split('|'),t=TAGS.tags[+ti],a=TAGS.map[k]||[];TAGS.map[k]=i.checked?[...new Set([...a,t])]:a.filter(x=>x!==t);done()});
 $('tgb2').querySelectorAll('[data-tc]').forEach(i=>i.onchange=()=>{TAGS.colors[TAGS.tags[+i.dataset.tc]]=i.value;done();renderTags()});
 $('tgb2').querySelectorAll('[data-tr]').forEach(i=>i.onchange=()=>{const old=TAGS.tags[+i.dataset.tr],nv=i.value.trim();if(!nv||TAGS.tags.includes(nv)){renderTags();return}TAGS.tags[+i.dataset.tr]=nv;TAGS.colors[nv]=TAGS.colors[old];delete TAGS.colors[old];Object.keys(TAGS.map).forEach(k=>{TAGS.map[k]=TAGS.map[k].map(x=>x===old?nv:x)});if(tagFilter===old)tagFilter=nv;done();renderTags()});
 $('tgb2').querySelectorAll('[data-td]').forEach(b=>b.onclick=()=>{const old=TAGS.tags[+b.dataset.td];TAGS.tags.splice(+b.dataset.td,1);delete TAGS.colors[old];Object.keys(TAGS.map).forEach(k=>{TAGS.map[k]=TAGS.map[k].filter(x=>x!==old)});if(tagFilter===old)tagFilter='*';done();renderTags()});
 $('tadd').onclick=()=>{const v=$('tnew').value.trim();if(v&&!TAGS.tags.includes(v)){TAGS.tags.push(v);TAGS.colors[v]=TCOL[(TAGS.tags.length-1)%TCOL.length];done();renderTags()}};
 $('tgb2').querySelectorAll('[data-ta]').forEach(b=>b.onclick=()=>{const t=TAGS.tags[+b.dataset.ta],all=ents.flatMap(([g,items])=>items).every(it=>(TAGS.map[itKey(it)]||[]).includes(t));ents.forEach(([g,items])=>items.forEach(it=>{const k=itKey(it),a=TAGS.map[k]||[];TAGS.map[k]=all?a.filter(x=>x!==t):[...new Set([...a,t])]}));done();renderTags()});
 $('trst').onclick=()=>{TAGS.map={};done();renderTags()};
 $('texf').onclick=()=>{const files=[];TAGS.tags.forEach(t=>{const m={};Object.entries(TAGS.map).forEach(([k,v])=>{if(v.includes(t))m[k]=[t]});const nm=tagSlug(t)+'.json';files.push('tags/'+nm);saveFile(new Blob([JSON.stringify({tags:[t],map:m,colors:{[t]:tcol(t)}},null,1)],{type:'application/json'}),nm)});
  setTimeout(()=>saveFile(new Blob([JSON.stringify({files},null,1)],{type:'application/json'}),'labosim-tags-index.json'),300)};
 $('texp').onclick=()=>saveFile(new Blob([JSON.stringify(TAGS,null,1)],{type:'application/json'}),'etiquettes_labosim.json');
 $('timp').onclick=()=>$('tfl').click();
 $('tfl').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{TAGS=normTags(JSON.parse(String(r.result)));done();renderTags()}catch(x){}};r.readAsText(f)}}
$('tf').onchange=()=>{tagFilter=$('tf').value;saveFilter();buildMenu()};
$('tgb').onclick=()=>{renderTags();$('tgm').style.display='block'};$('tgx').onclick=()=>{$('tgm').style.display='none'};
const SKIP=new Set(['plQ','plAO','plM','plS','plV','plA','plI','plAIv','plOn','plE','plC','plP','plPP','plB','plI0','plQ0','plA0','plO0','plN','E','Iw','hon','ron','Tq','refs','t0c','tx','gin','smon','Uo','Io','cc','shunt','lv','lst','rgs','zs','zt','zm','kst','mi1','mi2','mon','mst','arm','afq','acr','nv','nw','nt','ng','tr','bbp','cl','sig','ws','U','I','P','Q','Ur','Ir','Ua','Ia','rps','rpm','tgt','tv']);
function serializeMontage(){return JSON.stringify({app:'LaboSim',version:VERSION,comps,wires,notes,pairId},(k,v)=>SKIP.has(k)?undefined:v,1)}
function loadMontage(txt){let d;try{d=JSON.parse(txt);if(!d||!Array.isArray(d.comps))throw 0}catch(e){st.textContent='Fichier de montage invalide';return false}
 const vn=v=>{const p=String(v||'0').split('.');return(+p[0]||0)*1000+(+p[1]||0)};
 if(vn(d.version)<1009&&Array.isArray(d.wires)){const MP={aop:[2,1,5,6,3],cmp:[1,2,6,7,3]},mp={};(d.comps||[]).forEach(c=>{if(c&&MP[c.type])mp[c.id]=MP[c.type]});d.wires.forEach(w=>['a','b'].forEach(k=>{const q=String(w[k]).split(':');if(mp[q[0]])w[k]=q[0]+':'+mp[q[0]][+q[1]]}))}
 if(vn(d.version)<1005&&Array.isArray(d.wires)){const mg=new Set((d.comps||[]).filter(c=>c&&c.type==='cch'&&c.cm==='tri').map(c=>c.id));d.wires.forEach(w=>{['a','b'].forEach(k=>{const q=String(w[k]).split(':');if(mg.has(+q[0]))w[k]=q[0]+':'+(+q[1]+2)})})}
 comps=[];wires=[];notes=[];uid=1;(d.comps||[]).forEach(sc=>{if(sc&&INFO[sc.type]){const c=add(sc.type,sc.x,sc.y);Object.assign(c,sc)}});
 uid=Math.max(1,...comps.map(c=>c.id+1));wires=(d.wires||[]).filter(w=>{try{return w&&tp(w.a)&&tp(w.b)}catch(e){return false}});notes=Array.isArray(d.notes)?d.notes:[];pairId=d.pairId||Math.max(1,...wires.map(w=>(w.pair||0)+1));
 sel=selW=selN=pend=null;panel();render();fitView();return true}
$('sv_').onclick=()=>saveFile(new Blob([serializeMontage()],{type:'application/json'}),'montage_labosim.json');
$('op_').onclick=()=>$('fl').click();
$('fl').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>loadMontage(String(r.result));r.readAsText(f);e.target.value=''};
const place=(c,w,t)=>{const pt=bz(tp(w.a),tp(w.b),w,t);c.x=pt.x;c.y=pt.y};
document.getElementById('ex9').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',140,170),ic=add('ne555',560,340),r1=add('res',420,130),r2=add('res',660,130),cc=add('cap',860,300),o=add('scope',560,640);b.val=12;r1.val=1000;r2.val=10000;cc.val=0.1;o.td=5e-4;o.v1=5;o.v2=2;
 wire(b.id+':1',ic.id+':7');wire(b.id+':1',ic.id+':3');wire(b.id+':1',r1.id+':0');wire(r1.id+':1',ic.id+':6');wire(r1.id+':1',r2.id+':0');wire(r2.id+':1',ic.id+':5');wire(ic.id+':5',ic.id+':1');wire(ic.id+':5',cc.id+':0');wire(cc.id+':1',b.id+':0');wire(ic.id+':0',b.id+':0');
 wire(ic.id+':2',o.id+':1');wire(o.id+':0',b.id+':0');wire(o.id+':3',ic.id+':5');sel=null;panel();render();fitView()};
document.getElementById('ex10').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b1=add('bat',130,170),b2=add('bat',130,420),g=add('gbf',140,720),r1=add('res',420,260),rf=add('res',620,120),ic=add('aop',620,360),o=add('scope',640,660);b1.val=15;b2.val=15;g.amp=1;r1.val=1000;rf.val=10000;o.td=2e-4;o.v1=1;o.v2=5;
 wire(b1.id+':1',ic.id+':6');wire(b1.id+':0',b2.id+':1');wire(b2.id+':0',ic.id+':3');wire(g.id+':1',r1.id+':0');wire(g.id+':0',b1.id+':0');wire(r1.id+':1',ic.id+':1');wire(rf.id+':0',ic.id+':1');wire(rf.id+':1',ic.id+':5');wire(ic.id+':2',b1.id+':0');
 wire(o.id+':1',g.id+':1');wire(o.id+':3',ic.id+':5');wire(o.id+':0',b1.id+':0');sel=null;panel();render();fitView()};
const holeIx=(ci,ri)=>ci*10+ri,plugOn=(c,b,ci,ri,term)=>{const t=geo(c).t[term||0];c.x=b.x+BX0+ci*BP-t[0];c.y=b.y+BROW[ri]-t[1]};
document.getElementById('ex12').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',200,520),bd=add('bread',720,480),r=add('res',0,0),l=add('dled',0,0);b.val=5;r.val=330;plugOn(r,bd,5,6);plugOn(l,bd,9,5);
 wire(b.id+':1',bd.id+':'+holeIx(5,7));wire(b.id+':0',bd.id+':'+holeIx(10,7));
 notes.push({k:'t',x:430,y:200,t:'Pile 5 V → R 330 Ω → LED : tout est enfiché sur la platine',s:16,col:'#1976d2'});sel=null;panel();render();fitView()};
document.getElementById('ex13').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const a=add('ac',160,300),d=add('dio',440,160),r=add('res',700,300),c=add('cap',700,150),o=add('scope',480,560);a.val=8;a.f=50;r.val=1000;c.val=10;o.td=5e-3;o.v1=5;o.v2=5;d.dk='d4007';
 wire(a.id+':1',d.id+':0');wire(d.id+':1',r.id+':0');wire(d.id+':1',c.id+':0');wire(r.id+':1',a.id+':0');wire(c.id+':1',a.id+':0');wire(o.id+':1',d.id+':1');wire(o.id+':0',a.id+':0');wire(o.id+':3',a.id+':1');wire(o.id+':2',a.id+':0');
 sel=null;panel();render();fitView()};
document.getElementById('ex14').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',200,560),o=add('scope',300,170),bd=add('bread',800,500),ic=add('ne555'),r1=add('res'),r2=add('res'),cc=add('cap'),r3=add('res'),l=add('dled');
 b.val=9;r1.val=1000;r2.val=10000;cc.val=0.1;r3.val=470;l.lc='vert';o.td=5e-4;o.v1=5;o.v2=2;
 plugOn(ic,bd,8,5,0);plugOn(r1,bd,5,1);plugOn(r2,bd,9,2);plugOn(cc,bd,9,7);plugOn(r3,bd,10,8);plugOn(l,bd,14,6);
 const H=(ci,ri)=>bd.id+':'+holeIx(ci,ri),RM=ci=>bd.id+':'+(200+ci),RP=ci=>bd.id+':'+(200+BC+ci);   /* rails du haut : (−) puis (+) */
 [[RP(0),b.id+':1'],[RM(0),b.id+':0'],[H(8,0),RP(8)],[H(5,3),RP(5)],[H(11,6),RP(11)],[H(8,8),RM(8)],[H(10,3),H(9,6)],[H(13,3),H(9,8)],[H(13,8),RM(13)],[H(15,9),RM(15)],
  [o.id+':1',H(10,9)],[o.id+':0',RM(2)],[o.id+':3',H(9,9)],[o.id+':2',RM(3)]].forEach(([x,y])=>{wire(x,y);const w=wires[wires.length-1],m=k=>/:(20[0-9]|21[0-9])$/.test(k)&&+k.split(':')[1]<220;w.col=(y===RP(0)||x===RP(0)||x===RP(5)||y===RP(5)||x===RP(11)||y===RP(11)||y===RP(8)||x===RP(8))?COLS[0]:(m(x)||m(y)||x===b.id+':0')?COLS[1]:w.col});
 notes.push({k:'t',x:560,y:215,t:'NE555 astable sur platine : R1 = 1 kΩ, R2 = 10 kΩ, C = 100 nF',s:16,col:'#1976d2'});sel=null;panel();render();fitView()};
document.getElementById('ex15').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',160,300),r=add('res',460,160),l=add('ldr',700,300),v=add('volt',480,420);b.val=5;r.val=10000;l.lux=100;
 wire(b.id+':1',r.id+':0');wire(r.id+':1',l.id+':0');wire(l.id+':1',b.id+':0');wire(v.id+':1',l.id+':0');wire(v.id+':0',l.id+':1');
 notes.push({k:'t',x:420,y:90,t:'Pont diviseur 5 V · 10 kΩ · photorésistance : change l’éclairement de la LDR',s:16,col:'#1976d2'});sel=l.id;panel();render();fitView()};
document.getElementById('ex16').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',160,380),r1=add('res',420,160),d=add('dled',640,340),r2=add('res',420,600),t=add('irrx',780,340),v=add('volt',900,560);b.val=5;r1.val=220;r2.val=4700;d.lc='ir';
 wire(b.id+':1',r1.id+':0');wire(r1.id+':1',d.id+':0');wire(d.id+':1',b.id+':0');wire(b.id+':1',r2.id+':0');wire(r2.id+':1',t.id+':0');wire(t.id+':1',b.id+':0');wire(v.id+':1',t.id+':0');wire(v.id+':0',t.id+':1');
 notes.push({k:'t',x:360,y:90,t:'LED infrarouge → phototransistor : coche « Obstacle sur le faisceau » ou éloigne les deux',s:16,col:'#1976d2'});sel=t.id;panel();render();fitView()};
document.getElementById('ex17').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',160,500),g=add('gbf',160,200),h=add('hcsr',560,300),o=add('scope',860,300);b.val=5;g.wave='sq';g.f=20;g.amp=2.5;g.off=2.5;g.duty=.1;o.td=2e-3;o.v1=2;o.v2=2;o.pos1=1.5;o.pos2=-1.5;h.dist=100;
 wire(h.id+':0',b.id+':1');wire(h.id+':3',b.id+':0');wire(h.id+':1',g.id+':1');wire(g.id+':0',b.id+':0');wire(o.id+':1',g.id+':1');wire(o.id+':3',h.id+':2');wire(o.id+':0',b.id+':0');wire(o.id+':2',b.id+':0');
 notes.push({k:'t',x:420,y:140,t:'HC-SR04 : l’écho dure 2·d/340 (≈ 5,8 ms à 1 m). Change la distance de l’obstacle.',s:16,col:'#1976d2'});sel=h.id;panel();render();fitView()};
document.getElementById('ex11').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const g=add('gbf',160,240),q=add('bb',560,260),d=add('bb',560,520),o=add('scope',860,200);g.amp=5;q.kind='q';q.name='BN1';q.net=bbEnc(BBT.q['Passe-bas RC (fc ≈ 1,6 kHz)']);d.kind='d';d.name='BN2';d.net=bbEnc(BBT.d['R // C (1 kΩ ∥ 100 nF)']);o.td=5e-4;o.v1=2;o.v2=2;
 wire(g.id+':1',q.id+':0');wire(g.id+':0',q.id+':1');wire(o.id+':1',g.id+':1');wire(o.id+':0',g.id+':0');wire(o.id+':3',q.id+':2');sel=null;panel();render();fitView()};
document.getElementById('ex8').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const a=add('a3',190,300),m=add('m3',640,150),t=add('tach',730,190);
 wire(a.id+':1',m.id+':0');wire(a.id+':2',m.id+':1');wire(a.id+':3',m.id+':2');sel=null;panel();render();fitView()};
document.getElementById('ex7').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',170,300),w=add('watt',480,420),m=add('mac',640,160);s.val=230;
 wire(s.id+':1',w.id+':1');wire(w.id+':3',m.id+':1');wire(m.id+':0',w.id+':2');wire(w.id+':0',s.id+':0');sel=null;panel();render();fitView()};
document.getElementById('ex5').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),r=add('res',520,130),l=add('ind',760,330),p=add('pince',0,0),q=add('pince',0,0);s.val=24;r.val=22;l.val=200;l.r=10;p.disp='W';p.mode='AC';q.mode='AC';
 wire(s.id+':1',r.id+':0');wire(r.id+':1',l.id+':0');wire(l.id+':1',s.id+':0');wire(p.id+':1',s.id+':1');wire(p.id+':0',s.id+':0');
 place(p,wires[0],.5);place(q,wires[2],.5);sel=null;panel();render();fitView()};
document.getElementById('ex6').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',130,150),k=add('sw',340,110),r=add('rel',540,300),b2=add('bat',140,440),l=add('bulb',760,430);b.val=12;b2.val=9;l.val=10;l.un=9;
 wire(b.id+':1',k.id+':0');wire(k.id+':1',r.id+':0');wire(r.id+':1',b.id+':0');wire(b2.id+':1',r.id+':2');wire(r.id+':3',l.id+':0');wire(l.id+':1',b2.id+':0');
 sel=null;panel();render();fitView()};
document.getElementById('ex4').onclick=document.getElementById('ex4').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const g=add('gbf',170,130),r=add('res',420,110),c=add('cap',650,170),o=add('scope',500,380);r.val=1000;c.val=0.1;g.amp=5;o.td=5e-4;o.v1=o.v2=2;
 wire(g.id+':1',r.id+':0');wire(r.id+':1',c.id+':0');wire(c.id+':1',g.id+':0');wire(o.id+':1',r.id+':0');wire(o.id+':0',g.id+':0');wire(o.id+':3',c.id+':0');
 sel=null;panel();render();fitView()};
document.getElementById('ex3').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),w=add('watt',470,400),r=add('res',560,140),l=add('ind',790,300);s.val=24;r.val=22;l.val=200;l.r=10;
 wire(s.id+':1',w.id+':1');wire(w.id+':3',r.id+':0');wire(r.id+':1',l.id+':0');wire(l.id+':1',w.id+':2');wire(w.id+':0',s.id+':0');
 sel=null;panel();render();fitView()};
document.getElementById('ex2').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),r=add('res',520,140),a=add('amp',480,380),v=add('volt',790,300);s.val=24;a.mode=v.mode='AC';r.val=47;
 wire(s.id+':1',r.id+':0');wire(r.id+':1',a.id+':1');wire(a.id+':0',s.id+':0');wire(v.id+':1',r.id+':0');wire(v.id+':0',r.id+':1');
 sel=null;panel();render();fitView()};

/* ---- Exemples Arduino ---- */
function exUno(n,build,note){comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const u=add('uno',640,300);u.code=LaboArduino.EXAMPLES[n].code;build(u);
 notes.push({k:'t',x:300,y:70,t:note,s:16,col:'#1976d2'});sel=u.id;liveStart();panel();render();fitView();openDock(u.id)}
const ledR=(u,pin,x,y,lc)=>{const r=add('res',x,y),d=add('dled',x,y+170);r.val=220;if(lc)d.lc=lc;wire(u.id+':'+pin,r.id+':0');wire(r.id+':1',d.id+':0');wire(d.id+':1',u.id+':22');return[r,d]};
document.getElementById('ex18').onclick=()=>exUno(0,u=>{const[r,d]=ledR(u,8,320,140),v=add('volt',140,300);wire(v.id+':1',d.id+':0');wire(v.id+':0',d.id+':1')},'Arduino : LED + résistance 220 Ω sur D8 (la LED « L » de la carte suit D13). Modifie delay() dans le code.');
document.getElementById('ex19').onclick=()=>exUno(1,u=>{const l=add('ldr',300,120),r=add('res',300,360);r.val=10000;l.lux=100;wire(u.id+':20',l.id+':0');wire(l.id+':1',u.id+':14');wire(l.id+':1',r.id+':0');wire(r.id+':1',u.id+':22');ledR(u,8,940,140)},'Veilleuse : pont diviseur LDR / 10 kΩ sur A0. Baisse l’éclairement de la LDR : la LED s’allume sous le seuil.');
document.getElementById('ex20').onclick=()=>exUno(2,u=>{const h=add('hcsr',260,260);h.dist=100;wire(h.id+':0',u.id+':20');wire(h.id+':1',u.id+':7');wire(h.id+':2',u.id+':6');wire(h.id+':3',u.id+':22');ledR(u,8,940,140)},'Radar : TRIG sur D7, ECHO sur D6. Change la distance de l’obstacle (< 20 cm : la LED s’allume) et regarde le moniteur série.');
document.getElementById('ex21').onclick=()=>exUno(3,u=>{const p=add('pot',260,200),o=add('scope',260,520);p.pos=.5;o.td=1e-3;o.v1=2;o.v2=2;o.pos1=1;wire(p.id+':0',u.id+':22');wire(p.id+':2',u.id+':20');wire(p.id+':1',u.id+':15');wire(o.id+':1',u.id+':9');wire(o.id+':0',u.id+':22');ledR(u,9,940,140)},'Variateur : le potentiomètre (A1) règle le rapport cyclique PWM de D9 (≈ 490 Hz) — visible à l’oscilloscope.');
document.getElementById('ex22').onclick=()=>exUno(4,u=>{const b=add('pb',260,220);wire(b.id+':0',u.id+':2');wire(b.id+':1',u.id+':22');ledR(u,8,940,140)},'Bouton entre D2 et GND (INPUT_PULLUP) : maintiens le clic sur le bouton, le compteur s’affiche dans le moniteur série.');
document.getElementById('ex23').onclick=()=>exUno(5,u=>{ledR(u,10,940,100,'rouge');ledR(u,9,1090,100,'orange');ledR(u,8,1240,100,'vert')},'Feu tricolore : D10 rouge, D9 orange, D8 vert. Une fonction feu() du programme enchaîne les phases.');
document.getElementById('ex24').onclick=()=>exUno(6,u=>{const[r,d]=ledR(u,3,300,120,'ir'),t=add('tsop',700,540);ledR(u,8,940,140);wire(t.id+':2',u.id+':20');wire(t.id+':1',u.id+':22');wire(t.id+':0',u.id+':2');t.fc=38000},'Télécommande IR : D3 émet une porteuse 38 kHz (tone) dans la LED IR, le TSOP (sortie sur D2) la détecte ; la LED D8 suit la réception. Change la fréquence du TSOP (panneau de droite) ou mets un obstacle : plus de détection. Le moniteur série affiche le résultat.');
document.getElementById('ex25').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const b=add('bat',120,520),g=add('gbf',120,160),r=add('res',380,100),d=add('dled',560,160),t=add('tsop',800,160),o=add('scope',860,470),a=add('volt',560,520);
 b.val=5;g.wave='sq';g.f=38000;g.amp=2.5;g.off=2.5;g.duty=.5;r.val=220;d.lc='ir';t.fc=38000;o.td=2e-4;o.v1=5;o.v2=5;o.pos1=1.5;o.pos2=-1.5;
 wire(g.id+':1',r.id+':0');wire(r.id+':1',d.id+':0');wire(d.id+':1',g.id+':0');wire(g.id+':0',b.id+':0');wire(t.id+':2',b.id+':1');wire(t.id+':1',b.id+':0');wire(t.id+':0',o.id+':1');wire(o.id+':0',b.id+':0');wire(t.id+':0',a.id+':0');wire(a.id+':1',b.id+':0');
 notes.push({k:'t',x:120,y:40,t:'TSOP : le GBF (carré 0–5 V, 38 kHz) module la LED IR ; la sortie du TSOP (voie 1) passe à l’état bas quand la porteuse est détectée. Essaie : fréquence du GBF ≠ celle du TSOP, signal continu (amplitude 0), obstacle, lumière ambiante.',s:16,col:'#1976d2'});
 sel=t.id;panel();render();fitView()};
document.getElementById('ex26').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const b=add('bat2',140,280),d=add('dled',560,160),r=add('res',560,420),a=add('amp',380,160),v=add('volt',760,160);
 b.val=12;b.il=.02;b.val2=5;b.il2=1;d.lc='rouge';r.val=100;
 wire(b.id+':1',a.id+':1');wire(a.id+':0',d.id+':0');wire(d.id+':1',b.id+':0');wire(v.id+':1',d.id+':0');wire(v.id+':0',d.id+':1');
 wire(b.id+':3',r.id+':0');wire(r.id+':1',b.id+':2');
 notes.push({k:'t',x:140,y:40,t:'Alim à limitation de courant : CH1 (12 V) alimente une LED SANS résistance, mais sa limite est réglée à 20 mA : la voie passe en régulation de courant (CC) et la LED est protégée. Monte la limite : le courant explose. CH2 alimente une résistance en tension constante (CV).',s:16,col:'#1976d2'});
 sel=b.id;panel();render();fitView()};
$('ahx').onclick=closeDock;$('ago').onclick=dockUpload;$('apa').onclick=()=>{if(live&&live.on)liveStop();else liveStart()};$('are').onclick=()=>liveResetAll();
$('asp').onchange=()=>{if(live)live.speed=+$('asp').value||1};
$('acl').onclick=()=>{const c=comps.find(x=>x.id===dockId),e=c&&engOf(c);if(e){e.ser='';e.serN=0}dockS='\u0000';dockUpd()};
const sendSer=()=>{const c=comps.find(x=>x.id===dockId),e=c&&engOf(c),i=$('ain');if(e&&i.value!==''){e.send(i.value+'\n');i.value=''}};$('asd').onclick=sendSer;$('ain').onkeydown=ev=>{if(ev.key==='Enter')sendSer()};
$('acode').oninput=()=>{const c=comps.find(x=>x.id===dockId);if(c)c.code=$('acode').value};
$('acode').onkeydown=ev=>{if(ev.key==='Tab'){ev.preventDefault();const t=ev.target,a=t.selectionStart;t.value=t.value.slice(0,a)+'  '+t.value.slice(t.selectionEnd);t.selectionStart=t.selectionEnd=a+2;t.oninput()}};
$('aex').innerHTML='<option value="">— exemples de programmes —</option>'+LaboArduino.EXAMPLES.map((x,i)=>`<option value="${i}">${esc_(x.n)}</option>`).join('');
$('aex').onchange=()=>{const v=$('aex').value;if(v==='')return;const t=$('acode');if(t.value.trim()&&!LaboArduino.EXAMPLES.some(x=>x.code===t.value)&&typeof confirm==='function'&&!confirm('Remplacer le code actuel par cet exemple ?')){$('aex').value='';return}t.value=LaboArduino.EXAMPLES[+v].code;t.oninput();$('aex').value=''};
document.getElementById('ex27').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const b=add('bat',140,300),rb=add('res',380,160),pb_=add('pb',380,300),q=add('bjt',600,300),rc=add('res',600,100),d=add('dled',820,200);
 b.val=5;rb.val=4700;rc.val=330;d.lc='rouge';
 wire(b.id+':1',pb_.id+':0');wire(pb_.id+':1',rb.id+':0');wire(rb.id+':1',q.id+':0');wire(b.id+':1',rc.id+':0');wire(rc.id+':1',d.id+':0');wire(d.id+':1',q.id+':1');wire(q.id+':2',b.id+':0');
 notes.push({k:'t',x:140,y:40,t:'Transistor NPN en commutation : le bouton poussoir envoie un courant de base (≈ 0,9 mA) à travers 4,7 kΩ ; le collecteur laisse alors passer la LED (≈ 13 mA, β·Ib suffisant → transistor saturé). Appuie sur le bouton, regarde Ic / Ib et l’état affiché sous le transistor. Essaie PNP, 100 kΩ, MOSFET…',s:14,col:'#1976d2'});
 sel=q.id;panel();render();fitView()};
document.getElementById('ex28').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',140,300),t=add('triac',520,300),bl=add('bulb',520,100),g=add('bat',140,520),sw_=add('sw',380,520),rg=add('res',620,520);
 a.val=6;bl.val=5;g.val=10;rg.val=270;
 wire(a.id+':1',bl.id+':0');wire(bl.id+':1',t.id+':1');wire(t.id+':0',a.id+':0');wire(g.id+':1',sw_.id+':0');wire(sw_.id+':1',rg.id+':0');wire(rg.id+':1',t.id+':2');wire(g.id+':0',a.id+':0');
 notes.push({k:'t',x:140,y:40,t:'Triac de puissance : ferme l’interrupteur de gâchette (10 V, 270 Ω) → le triac s’amorce et l’ampoule 6 V~ s’allume dans les deux alternances. Ouvre l’interrupteur : le triac se bloque au prochain passage par zéro du courant. Règle Igt / Ih dans le panneau.',s:14,col:'#1976d2'});
 sel=t.id;panel();render();fitView()};
document.getElementById('ex29').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const g=add('gbf',160,300),h=add('spk',520,300);
 g.amp=3;g.f=440;wire(g.id+':1',h.id+':0');wire(g.id+':0',h.id+':1');
 notes.push({k:'t',x:140,y:40,t:'Haut-parleur 8 Ω piloté par le GBF : tu entends la fréquence réglée (440 Hz = la). Change la fréquence, l’amplitude, la forme (carré, triangle). Le bouton 🔊 en haut coupe le son.',s:14,col:'#1976d2'});
 sel=h.id;panel();render();fitView()};
document.getElementById('ex34').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',170,300),w=add('watt',480,420),m=add('mac',640,160);a.val=230;motPreset(m,'vac');m.snd=false;
 wire(a.id+':1',w.id+':1');wire(w.id+':3',m.id+':1');wire(m.id+':0',w.id+':2');wire(w.id+':0',a.id+':0');
 notes.push({k:'t',x:120,y:20,t:'Aspirateur 2000 W : moteur universel 230 V, environ 9 A et 17 000 tr/min. Le wattmètre POWER8000 (fusible 16 A) affiche la puissance absorbée. Change la charge du moteur dans le panneau (suction bouchée = moins de courant et plus de vitesse).',s:14,col:'#1976d2'});
 sel=m.id;panel();render();fitView()};
document.getElementById('ex33').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',150,200),m=add('mac',420,100),b=add('a3',150,520),t=add('m3',460,440);a.val=230;b.val=400;motPreset(m,'fan1');motPreset(t,'fan3');
 wire(a.id+':1',m.id+':0');wire(m.id+':1',a.id+':0');wire(b.id+':1',t.id+':0');wire(b.id+':2',t.id+':1');wire(b.id+':3',t.id+':2');
 notes.push({k:'t',x:110,y:-20,t:'Ventilateurs : en haut, modèle domestique 230 V monophasé (≈ 1 400 tr/min, ≈ 100 W) ; en bas, modèle industriel 400 V triphasé en étoile (≈ 1 100 W). Compare les courants et la vitesse avec les appareils de mesure.',s:14,col:'#1976d2'});
 sel=null;panel();render();fitView()};
document.getElementById('ex32').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',120,300),sw_=add('sw',280,180),am=add('amp',280,420),m=add('mac',500,300),h=add('lev',760,280);
 a.val=230;m.un=230;am.mode='AC';h.mass=10;h.gr=40;h.dr=5;
 wire(a.id+':1',sw_.id+':0');wire(sw_.id+':1',am.id+':0');wire(am.id+':1',m.id+':0');wire(m.id+':1',a.id+':0');
 notes.push({k:'t',x:100,y:30,t:'Levage : ferme l’interrupteur, le moteur monophasé enroule la corde et la masse monte (réducteur 1:40). Augmente la masse dans le panneau du levage : le courant mesuré augmente ; trop lourd, le moteur cale.',s:14,col:'#1976d2'});
 sel=h.id;panel();render();fitView()};
document.getElementById('ex31').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',100,260),d1=add('dio',250,160),d2=add('dio',250,360),d3=add('dio',430,160),d4=add('dio',430,360),c=add('cap',590,260),g=add('reg',700,200),r=add('res',860,260),v=add('dmm',700,420);
 a.val=12;a.f=50;c.val=2200;g.ur=5;r.val=50;v.fn='V';
 wire(a.id+':1',d1.id+':0');wire(a.id+':0',d2.id+':0');wire(d1.id+':1',d2.id+':1');wire(d1.id+':1',c.id+':0');wire(c.id+':0',g.id+':0');
 wire(d3.id+':1',a.id+':1');wire(d4.id+':1',a.id+':0');wire(d3.id+':0',d4.id+':0');wire(d3.id+':0',c.id+':1');wire(c.id+':1',g.id+':2');
 wire(g.id+':1',r.id+':0');wire(r.id+':1',g.id+':2');wire(v.id+':1',r.id+':0');wire(v.id+':0',r.id+':1');
 notes.push({k:'t',x:90,y:40,t:'Alimentation régulée : source alternative 12 V (secondaire de transformateur), pont de diodes, condensateur de filtrage, puis régulateur réglable. Règle Un dans le panneau du régulateur : la sortie reste stable tant que l’entrée dépasse Un + dropout.',s:14,col:'#1976d2'});
 sel=g.id;panel();render();fitView()};
document.getElementById('ex30').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop();const a=add('ac',140,200),bl=add('bulb',440,60),t=add('triac',620,220),rl=add('res',440,360),o=add('otri',620,420),b=add('bat',140,500),sw_=add('sw',340,560),rd=add('res',480,560);
 a.val=230;bl.un=230;bl.val=60;rl.val=330;b.val=5;rd.val=220;
 wire(a.id+':1',bl.id+':0');wire(bl.id+':1',t.id+':1');wire(t.id+':0',a.id+':0');
 wire(t.id+':1',rl.id+':0');wire(rl.id+':1',o.id+':3');wire(o.id+':2',t.id+':2');
 wire(b.id+':1',sw_.id+':0');wire(sw_.id+':1',rd.id+':0');wire(rd.id+':1',o.id+':0');wire(o.id+':1',b.id+':0');
 notes.push({k:'t',x:140,y:20,t:'Interface de commutation logique (5 V) → secteur 230 V : la commande 5 V (interrupteur, ou une sortie Arduino) allume la LED de l’optotriac MOC3021 (R = 220 Ω → ≈ 16 mA, au-dessus de son courant de déclenchement). L’optotriac, isolé galvaniquement, injecte un courant dans la gâchette du triac (R = 330 Ω) qui commute la lampe 60 W / 230 V. Avec une sortie 3,3 V : R = 100 Ω. Ferme l’interrupteur : la lampe s’allume.',s:13,col:'#1976d2'});
 sel=o.id;panel();render();fitView()};
/* Exemples : notes coupées en ~4 lignes (sinon le zoom s'adapte à une ligne très longue) */
function wrapT(t,lines=4){if(!t||t.includes('\n'))return t;const w=Math.max(55,Math.ceil(t.length/lines)+8),out=[];let cur='';t.split(' ').forEach(x=>{if(cur&&(cur+' '+x).length>w){out.push(cur);cur=x}else cur=cur?cur+' '+x:x});if(cur)out.push(cur);return out.join('\n')}
function wrapNotes(){let ch=false;const top=comps.length?Math.min(...comps.map(c=>c.y+geo(c).b[1])):300;notes.forEach(n=>{if(n.k==='t'&&n.t&&!n.t.includes('\n')&&n.t.length>70){n.t=wrapT(n.t);const L=n.t.split('\n').length,sz=(n.s||16)+4;n.y=Math.min(n.y,top-40-(L-1)*sz);ch=true}});if(ch){render();fitView()}}
if(typeof document!=='undefined')document.querySelectorAll('#exs button[id^="ex"]').forEach(b=>{const f=b.onclick;if(f)b.onclick=ev=>{f.call(b,ev);wrapNotes()}});
bbLibInit();initTags();buildMenu();
setInterval(thermTick,100);
let enLast=0;function enTick(dtf){const now=performance.now(),dt=typeof dtf==='number'?dtf:enLast?Math.min(.5,(now-enLast)/1000):.1;enLast=now;if(err)return;let ch=false;comps.forEach(c=>{if(c.type!=='cem'&&c.type!=='cet'&&c.type!=='pince'&&c.type!=='watt')return;if(c.P===undefined||isNaN(c.P))return;const a=c.E||0,b=a+c.P*dt*(c.eacc||1)/3600;c.E=b;const f=x=>c.type==='cem'||c.type==='cet'?(x/1000).toFixed(2):fmt(x,'Wh');if(f(a)!==f(b))ch=true});if(ch){render();const p=document.getElementById('ez');if(p&&sel!=null){const c=comps.find(x=>x.id===sel);if(c&&c.E!==undefined)p.textContent='Remise à zéro (énergie '+fmt(c.E,'Wh')+')'}}}
setInterval(enTick,100);
setInterval(()=>{const mm=motorTick()||comps.some(c=>c.zm);if((mm||comps.some(c=>c.type==='scope'&&c.free)||needleMoving())&&!(live&&live.on)){render();if(typeof ovId!=='undefined'&&ovId!=null)renderOv()}},60);
/* ---- Édition directe des textes sur le plan (double-clic) ---- */
(function(){if(typeof document.createElement!=='function'||!document.body||!document.body.appendChild)return;
 const ed=document.createElement('div'),tb=document.createElement('div');ed.id='ned';ed.contentEditable='true';ed.spellcheck=false;tb.id='ntb';
 tb.innerHTML='<button data-f="bold" title="Gras (Ctrl+B)"><b>G</b></button><button data-f="italic" title="Italique (Ctrl+I)"><i>I</i></button><button data-f="underline" title="Souligné (Ctrl+U)"><u>S</u></button><i class="sep"></i><button data-f="subscript" title="Indice">x<sub>2</sub></button><button data-f="superscript" title="Exposant">x<sup>2</sup></button><button data-f="vec" title="Vecteur : sélectionne le texte, ou clique pour activer / désactiver avant de taper"><span class="vl">A</span></button><i class="sep"></i><button data-z="p" title="Sélection (ou suite du texte) en petit"><span style="font-size:10px">A</span></button><button data-z="m" title="Taille normale"><span style="font-size:14px">A</span></button><button data-z="g" title="Sélection (ou suite du texte) en grand"><span style="font-size:19px">A</span></button><i class="sep"></i><select id="ntbz" title="Taille de base de tout le texte"><option value="12">Texte : petit</option><option value="16">Texte : moyen</option><option value="24">Texte : grand</option></select>';
 document.body.appendChild(ed);document.body.appendChild(tb);
 let cur=null,rich=true;const hide=()=>{ed.style.display='none';tb.style.display='none'};hide();
 const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'),ZW='\u200b';
 function html(n){return noteRuns(n).map(l=>l.map(r=>{let h=esc(r.t);if(r.sub)h='<sub>'+h+'</sub>';if(r.sup)h='<sup>'+h+'</sup>';if(r.b)h='<b>'+h+'</b>';if(r.i)h='<i>'+h+'</i>';if(r.u)h='<u>'+h+'</u>';if(r.z)h='<span class="sz" data-z="'+r.z+'">'+h+'</span>';if(r.vec)h='<span class="vec">'+h+'</span>';return h}).join('')).join('<br>')}
 function parse(root){const lines=[[]],cl=()=>lines[lines.length-1];
  const walk=(n,st)=>{[...n.childNodes].forEach((c,ix)=>{if(c.nodeType===3){c.nodeValue.replace(/\u200b/g,'').split('\n').forEach((p,k)=>{if(k)lines.push([]);if(p)cl().push({t:p,...st})});return}if(c.nodeType!==1)return;const tn=c.nodeName,s={...st},cs=c.style||{};
   if(tn==='BR'){lines.push([]);return}
   if(tn==='B'||tn==='STRONG'||+cs.fontWeight>=600||cs.fontWeight==='bold')s.b=1;if(tn==='I'||tn==='EM'||cs.fontStyle==='italic')s.i=1;if(tn==='U'||/underline/.test(cs.textDecoration||cs.textDecorationLine||''))s.u=1;
   if(tn==='SUB'){s.sub=1;delete s.sup}if(tn==='SUP'){s.sup=1;delete s.sub}if(c.classList&&c.classList.contains('vec'))s.vec=1;if(c.classList&&c.classList.contains('sz')&&c.dataset.z)s.z=c.dataset.z;
   if(tn==='DIV'||tn==='P'){if(ix>0||cl().length||lines.length>1)lines.push([]);if(c.childNodes.length===1&&c.firstChild.nodeName==='BR')return}
   walk(c,s)})};
  walk(root,{});while(lines.length>1&&!lines[lines.length-1].length)lines.pop();
  return lines.map(l=>{const o=[];l.forEach(r=>{const p=o[o.length-1];if(p&&['b','i','u','sub','sup','vec','z'].every(k=>p[k]===r[k]||(!p[k]&&!r[k])))p.t+=r.t;else o.push(r)});return o})}
 function place(){if(cur===null)return;const n=notes[cur];if(!n){hide();return}const m=cv.getScreenCTM(),z=m.a,x=m.e+(n.k==='r'?n.x+8:n.x)*z,y=m.f+(n.k==='r'?n.y+3:n.y-n.s*.86)*z,sz=n.k==='r'?13:n.s;
  Object.assign(ed.style,{display:'block',left:x+'px',top:y+'px',fontSize:sz*z+'px',lineHeight:n.k==='r'?'1.25':String((n.s+4)/n.s),color:n.col,minWidth:Math.max(60,40*z)+'px'});
  tb.style.display=rich?'flex':'none';const h=tb.offsetHeight||34;tb.style.left=Math.max(4,x-6)+'px';tb.style.top=Math.max(4,y-h-8)+'px';$('ntbz').value=String(n.s);if($('ntbz').value!==String(n.s)){const o=document.createElement('option');o.value=n.s;o.textContent='Texte : '+n.s;$('ntbz').appendChild(o);$('ntbz').value=String(n.s)}}
 const $=id=>document.getElementById(id),G=()=>window.getSelection();
 const anc=(nd,cls)=>{while(nd&&nd!==ed){if(nd.nodeType===1&&nd.classList.contains(cls))return nd;nd=nd.parentNode}return null};
 const caret=(nd,o)=>{const r=document.createRange();r.setStart(nd,o);r.collapse(true);const g=G();g.removeAllRanges();g.addRange(r)};
 const exitSpan=sp=>{const z=document.createTextNode(ZW);sp.parentNode.insertBefore(z,sp.nextSibling);caret(z,1)};
 const enterSpan=(cls,zv)=>{const g=G();if(!g.rangeCount)return;const r=g.getRangeAt(0),sp=document.createElement('span');sp.className=cls;if(zv)sp.dataset.z=zv;const z=document.createTextNode(ZW);sp.appendChild(z);r.insertNode(sp);caret(z,1)};
 const unwrap=sp=>{const p=sp.parentNode;while(sp.firstChild)p.insertBefore(sp.firstChild,sp);p.removeChild(sp)};
 const clean=()=>ed.querySelectorAll('span.vec,span.sz').forEach(s=>{if(s.textContent==='')s.remove()});
 function doVec(){const g=G();if(!g.rangeCount)return;const a=anc(g.anchorNode,'vec');
  if(g.isCollapsed){if(a)exitSpan(a);else enterSpan('vec');return}
  if(a&&a.contains(g.focusNode)){unwrap(a);return}
  const r=g.getRangeAt(0),sp=document.createElement('span');sp.className='vec';const f=r.extractContents();f.querySelectorAll('.vec').forEach(unwrap);sp.appendChild(f);r.insertNode(sp);clean();exitSpan(sp)}
 function doSize(c){const g=G();if(!g.rangeCount)return;const a=anc(g.anchorNode,'sz');
  if(g.isCollapsed){if(a){if(a.dataset.z===c){return}exitSpan(a)}if(c!=='m')enterSpan('sz',c);return}
  const r=g.getRangeAt(0),f=r.extractContents();f.querySelectorAll('.sz').forEach(unwrap);
  if(c==='m'){const last=f.lastChild;r.insertNode(f);clean();if(last){const q=document.createRange();q.setStartAfter(last);q.collapse(true);g.removeAllRanges();g.addRange(q)}return}
  const sp=document.createElement('span');sp.className='sz';sp.dataset.z=c;sp.appendChild(f);r.insertNode(sp);clean();exitSpan(sp)}
 function state(){if(cur===null||!rich)return;const g=G();if(!g.rangeCount||!ed.contains(g.anchorNode))return;const on=(f,v)=>{const b=tb.querySelector('[data-f="'+f+'"]');if(b)b.classList.toggle('on',!!v)};
  ['bold','italic','underline','subscript','superscript'].forEach(f=>{let v=false;try{v=document.queryCommandState(f)}catch(e){}on(f,v)});on('vec',anc(g.anchorNode,'vec'));
  const z=anc(g.anchorNode,'sz'),zz=z?z.dataset.z:'m';tb.querySelectorAll('[data-z]').forEach(b=>b.classList.toggle('on',b.dataset.z===zz))}
 document.addEventListener('selectionchange',state);
 function commit(save){if(cur===null)return;const i=cur,n=notes[i];cur=null;EDN=null;hide();if(n&&save){if(n.k==='r'){const v=(ed.innerText||'').replace(/\n/g,' ').replace(/\u200b/g,'').trim();n.t=v}else{const R=parse(ed),pl=R.map(l=>l.map(r=>r.t).join('')).join('\n');if(pl.trim()){n.r=R;n.t=pl}}}
  panel();render();if(typeof histCheck==='function')histCheck()}
 window.noteEdit=function(i){const n=notes[i];if(!n)return;if(cur!==null)commit(true);cur=i;EDN=i;rich=n.k==='t';ed.innerHTML=n.k==='r'?esc(n.t||''):html(n);selN=i;sel=selW=null;panel();render();place();ed.focus();const r=document.createRange();r.selectNodeContents(ed);r.collapse(false);const g=G();g.removeAllRanges();g.addRange(r);state()};
 ed.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape'){commit(false)}else if(e.key==='Enter'&&rich){e.preventDefault();document.execCommand('insertLineBreak')}else if(e.key==='Enter'){e.preventDefault();commit(true)}});
 ed.addEventListener('paste',e=>{e.preventDefault();document.execCommand('insertText',false,(e.clipboardData||window.clipboardData).getData('text/plain'))});
 ed.addEventListener('input',()=>{if(cur!==null&&notes[cur]&&notes[cur].k==='t')render()});
 ed.addEventListener('blur',()=>{setTimeout(()=>{if(cur!==null&&document.activeElement!==ed&&!tb.contains(document.activeElement))commit(true)},120)});
 tb.addEventListener('mousedown',e=>{if(e.target.tagName!=='SELECT')e.preventDefault()});
 $('ntbz').onchange=e=>{if(cur===null)return;const n=notes[cur];n.s=+e.target.value;place();render();ed.focus()};
 tb.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||cur===null)return;ed.focus();
  if(b.dataset.z){doSize(b.dataset.z);state();return}
  if(b.dataset.f==='vec'){doVec();state();return}
  document.execCommand(b.dataset.f);state()});
 window.addEventListener('resize',()=>{if(cur!==null)place()});cv.addEventListener('wheel',()=>{if(cur!==null)commit(true)},{passive:true});
 const noteAt=e=>{const m=cv.getScreenCTM();if(!m)return-1;const x=(e.clientX-m.e)/m.a,y=(e.clientY-m.f)/m.d;for(let i=notes.length-1;i>=0;i--){const n=notes[i];let b;
   if(n.k==='r')b=[n.x,n.y,n.x+Math.max(120,(n.t||'').length*8+16),n.y+22];else{const R=noteRuns(n),bx=noteBox(n,R);b=[n.x-4,bx.top,n.x+Math.max(...R.map(l=>lineW(l,n.s,nwb(n))),n.s)+4,bx.top+bx.h]}
   if(x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3])return i}return-1};
 let LN={i:-1,t:0,x:0,y:0};cv.addEventListener('pointerdown',e=>{if(e.button||(e.target.closest&&e.target.closest('[data-c],[data-rz],[data-w]')))return;const now=Date.now();
  if(LN.i>=0&&now-LN.t<450&&Math.hypot(e.clientX-LN.x,e.clientY-LN.y)<8&&notes[LN.i]){const i=LN.i;LN={i:-1,t:0,x:0,y:0};e.preventDefault();e.stopPropagation();setTimeout(()=>window.noteEdit(i),0);return}
  const i=noteAt(e);LN=i>=0?{i,t:now,x:e.clientX,y:e.clientY}:{i:-1,t:0,x:0,y:0}},true);
})();
/* double-clic sur un four / une enceinte / un régulateur : courbe agrandie */
(function(){let D={id:0,t:0,x:0,y:0};cv.addEventListener('pointerdown',e=>{if(e.button)return;const g=e.target.closest&&e.target.closest('[data-c]');if(!g){D.id=0;return}const id=+g.dataset.c,c=comps.find(x=>x.id===id);if(!c||!(isTherm(c)||isReg(c))){D.id=0;return}
 const now=Date.now();if(D.id===id&&now-D.t<450&&Math.hypot(e.clientX-D.x,e.clientY-D.y)<8){D.id=0;setTimeout(()=>openOv(c),0);return}D={id,t:now,x:e.clientX,y:e.clientY}},true)})();
/* ---- exemples v3.11.0 ---- */
const exNew=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;liveDrop()},exWrap=t=>{const o=[];let l='';t.split(' ').forEach(w=>{if((l+' '+w).trim().length>80&&l){o.push(l);l=w}else l=(l+' '+w).trim()});if(l)o.push(l);return o.join('\n')},exNote=(x,y,t)=>notes.push({k:'t',x,y:y-40,t:exWrap(t),s:14,col:'#1976d2'});
document.getElementById('ex35').onclick=()=>{exNew();const g=add('gbf',170,130),r=add('res',420,110),c=add('cap',650,170),o=add('scope',500,380);r.val=1000;c.val=0.1;g.amp=5;o.td=5e-4;o.v1=o.v2=2;o.mth='s12';
 wire(g.id+':1',r.id+':0');wire(r.id+':1',c.id+':0');wire(c.id+':1',g.id+':0');wire(o.id+':1',r.id+':0');wire(o.id+':0',g.id+':0');wire(o.id+':3',c.id+':0');wire(o.id+':2',g.id+':0');
 exNote(120,-10,'Voie Maths (violet) : CH1 − CH2 = tension aux bornes de la résistance, que l’on ne peut pas mesurer directement avec une seule masse. CH1 : tension du GBF, CH2 : tension du condensateur. Essaie aussi CH1 × CH2 ou CH1 + CH2 dans le panneau de l’oscilloscope, et le bouton « Enregistrer » pour sauvegarder une courbe.');
 sel=o.id;panel();render();fitView()};
document.getElementById('ex36').onclick=()=>{exNew();const g=add('ac',150,260),w=add('watt',420,420),t=add('tr1',470,200),r=add('res',760,200);g.val=230;r.val=20;
 wire(g.id+':1',w.id+':1');wire(w.id+':3',t.id+':0');wire(t.id+':1',w.id+':2');wire(w.id+':0',g.id+':0');wire(t.id+':2',r.id+':0');wire(t.id+':3',r.id+':1');
 exNote(120,40,'Transformateur monophasé 230 V / 24 V (100 VA) : le wattmètre au primaire donne la puissance absorbée (charge + pertes fer et cuivre). Compare avec la puissance dans la résistance du secondaire pour estimer le rendement. Les pertes et la chute de tension se règlent dans le panneau du transformateur.');
 sel=t.id;panel();render();fitView()};
document.getElementById('ex37').onclick=()=>{exNew();const g=add('a3',130,300),t=add('tr3',480,260),r=[0,1,2].map(k=>add('res',800,100+k*140));g.val=400;t.cp='Dy11';r.forEach(x=>x.val=100);
 for(let k=0;k<3;k++){wire(g.id+':'+(k+1),t.id+':'+k);wire(t.id+':'+(4+k),r[k].id+':0');wire(r[k].id+':1',t.id+':7')}
 exNote(100,-20,'Transformateur triphasé 400 V / 230 V, couplage Dy11 (triangle au primaire, étoile avec neutre au secondaire) : trois résistances de 100 Ω alimentées en 230 V simple. Change le couplage (Yy0, Yd1, Dd0…) dans le panneau pour voir le décalage horaire et les tensions.');
 sel=t.id;panel();render();fitView()};
document.getElementById('ex38').onclick=()=>{exNew();const g=add('ac',150,260),s=add('smps',450,230),r=add('res',760,200),v=add('volt',760,420),a=add('amp',600,430);g.val=230;s.val=12;s.pmax=100;r.val=12;
 wire(g.id+':1',s.id+':0');wire(g.id+':0',s.id+':1');wire(s.id+':2',a.id+':0');wire(a.id+':1',r.id+':0');wire(r.id+':1',s.id+':3');wire(v.id+':1',r.id+':0');wire(v.id+':0',r.id+':1');
 exNote(110,60,'Alimentation à découpage : entrée 24 à 400 V, sortie 12 V réglable (3,3 à 15 V) avec limitation de puissance (100 W). Baisse la résistance de charge : au-delà de 100 W, la sortie passe en limitation. Mesure le courant d’entrée avec un wattmètre pour voir le rendement (≈ 88 %).');
 sel=s.id;panel();render();fitView()};
document.getElementById('ex39').onclick=()=>{exNew();const g=add('ac',160,260),f=add('four',470,240);g.val=230;f.acc=300;
 wire(g.id+':1',f.id+':0');wire(g.id+':0',f.id+':1');
 exNote(110,-20,'Four électrique 2 kW avec thermostat tout ou rien : la température monte jusqu’à la consigne puis oscille dans la plage d’hystérésis. Double-clique sur le four pour agrandir la courbe (zoom : molette, Maj + molette pour les °C). Change la consigne et l’hystérésis en direct.');
 sel=f.id;panel();render();fitView()};
const encMount=(reg)=>{const g=add('ac',150,260),e=add('enc',480,230),r=add(reg,480,60);g.val=230;
 wire(g.id+':1',r.id+':2');wire(r.id+':3',e.id+':0');wire(e.id+':1',g.id+':0');wire(e.id+':2',r.id+':0');wire(e.id+':3',r.id+':1');return[e,r]};
document.getElementById('ex40').onclick=()=>{exNew();const[e,r]=encMount('rtor');e.acc=300;r.cons=60;r.hy=2;
 exNote(110,-90,'Enceinte isolée chauffée par une résistance, régulée en tout ou rien : la sonde (10 mV/°C) à l’intérieur mesure la température, le régulateur TOR ferme le contact de puissance. Double-clique sur l’enceinte ou le régulateur pour ouvrir la courbe.');
 sel=r.id;panel();render();fitView()};
document.getElementById('ex41').onclick=()=>{exNew();const[e,r]=encMount('rpid');e.acc=60;e.cth=30;r.cons=60;r.kp=20;r.ti=300;r.tdv=20;r.pe=true;r.ie=true;r.de=false;r.tc=10;
 exNote(110,-90,'Régulation PID de l’enceinte (consigne 60 °C) : choisis les actions P, I, D et règle Kp, Ti, Td avec les curseurs. Garde la vitesse de simulation à × 60 ou moins. Double-clique pour voir la courbe de température et la sortie du régulateur.');
 sel=r.id;panel();render();fitView()};
document.getElementById('ex42').onclick=()=>{exNew();const[e,r]=encMount('rpid');e.acc=60;e.cth=10;e.dly=300;e.tpr=30;r.cons=60;r.kp=40;r.ti=300;r.pe=true;r.ie=true;r.de=false;r.tc=10;
 exNote(110,-90,'PID qui oscille : la sonde est lente (retard de 300 s) et le gain est élevé (Kp = 40 %/K). La température oscille de façon durable autour de 60 °C. Réduis Kp, ajoute l’action D ou diminue le retard de la sonde pour retrouver une régulation stable.');
 sel=r.id;panel();render();fitView()};
document.getElementById('ex43').onclick=()=>{exNew();const g=add('ac',150,240),m=add('cem',470,200),r=add('res',760,200),p=add('pince',0,0);g.val=230;r.val=100;m.eacc=600;p.disp='Wh';p.mode='AC';p.eacc=600;
 wire(g.id+':1',m.id+':0');wire(m.id+':1',r.id+':0');wire(r.id+':1',m.id+':3');wire(m.id+':2',g.id+':0');wire(p.id+':1',g.id+':1');wire(p.id+':0',g.id+':0');
 exNote(110,-20,'Compteur d’énergie monophasé : l’afficheur totalise les kWh consommés par la résistance de 100 Ω (≈ 530 W). Le temps est accéléré (× 600 : 1 s = 10 min). La pince PROVA 21, en mode E (Wh), mesure la même énergie : compare les deux. « Remise à zéro » dans le panneau.');
 sel=m.id;panel();render();fitView();render();{const w0=wires[0],S=wsamples(w0,tp(w0.a),tp(w0.b)),q=S[S.length>>1];p.x=q.x;p.y=q.y;render()}};
document.getElementById('ex44').onclick=()=>{exNew();const a=add('a3',130,300),m=add('cet',470,240),c=add('cch',800,260);a.val=400;c.cm='tri';c.un=400;c.val=4000;m.eacc=600;
 for(let k=0;k<3;k++){wire(a.id+':'+(k+1),m.id+':'+2*k);wire(m.id+':'+(2*k+1),c.id+':'+(2+k))}wire(a.id+':0',m.id+':6');
 exNote(100,-20,'Compteur d’énergie triphasé : charge triphasée de 4 kW sous 400 V. Les trois phases traversent le compteur (entrées à gauche, sorties à droite) ; l’afficheur donne les kWh. Change la puissance de la charge et l’accélération du temps.');
 sel=m.id;panel();render();fitView()};
document.getElementById('ex45').onclick=()=>{exNew();const a=add('a3',110,300),k=add('cwm',460,250),w=add('watt',470,500),c=add('cch',800,260);a.val=400;c.cm='tri';c.un=400;c.val=4000;
 for(let i=0;i<3;i++){wire(a.id+':'+(i+1),k.id+':'+2*i);wire(k.id+':'+(2*i+1),c.id+':'+(2+i))}
 wire(k.id+':6',w.id+':0');wire(w.id+':2',k.id+':7');wire(k.id+':8',w.id+':3');
 exNote(80,-40,'Méthode des 2 wattmètres avec un seul wattmètre : le commutateur envoie tour à tour I1 et U13 puis I2 et U23. Clique sur le commutateur pour changer de position ; la puissance triphasée est la somme des deux lectures P1 + P2 (4 kW ici, soit 2 kW par position avec une charge résistive équilibrée).');
 sel=k.id;panel();render();fitView()};
document.getElementById('ex46').onclick=()=>{exNew();const b=add('bat',120,420),p=add('plc',620,400),m=add('pb',330,60),a=add('pb',520,60),l1=add('bulb',960,160),l2=add('bulb',960,330);b.val=24;l1.un=24;l1.val=5;l2.un=24;l2.val=5;
 p.prg='M1 = (I1 | M1) & !I2   // marche / arrêt avec auto-maintien\nQ1 = M1\nQ2 = TON(M1, 5)        // 2e lampe après 5 s';
 wire(b.id+':1',p.id+':0');wire(b.id+':0',p.id+':1');wire(b.id+':1',m.id+':0');wire(m.id+':1',p.id+':2');wire(b.id+':1',a.id+':0');wire(a.id+':1',p.id+':3');
 wire(b.id+':1',p.id+':10');wire(p.id+':11',l1.id+':0');wire(l1.id+':1',b.id+':0');wire(b.id+':1',p.id+':12');wire(p.id+':13',l2.id+':0');wire(l2.id+':1',b.id+':0');
 exNote(80,-40,'Automate programmable (essai) : alimentation dédiée 24 V, entrées I1 (marche) et I2 (arrêt) sur boutons poussoirs, sorties relais Q1 et Q2 sur deux lampes 24 V. Appuie sur I1 : Q1 s’allume et reste (auto-maintien), Q2 suit 5 s plus tard ; I2 arrête tout. Le programme se modifie dans le panneau de l’automate.');
 sel=p.id;panel();render();fitView()};
document.getElementById('ex47').onclick=()=>{exNew();const b=add('bat',120,260),p=add('plc',620,260),a=add('plca',620,540),c=add('bat',120,560),v=add('volt',930,560),l=add('bulb',960,130);b.val=24;c.val=6;l.un=24;l.val=5;
 p.prg='Q1 = AI1 > 5      // seuil à 5 V\nAO1 = AI1 * 0.5  // recopie à moitié';
 wire(b.id+':1',p.id+':0');wire(b.id+':0',p.id+':1');wire(c.id+':1',a.id+':1');wire(c.id+':0',a.id+':0');wire(v.id+':1',a.id+':3');wire(v.id+':0',a.id+':0');
 wire(b.id+':1',p.id+':10');wire(p.id+':11',l.id+':0');wire(l.id+':1',b.id+':0');
 exNote(80,-40,'Automate + module d’extension ANALOG : l’entrée AI1 mesure la tension de la source de 6 V (réglable). Le programme allume la lampe Q1 au-delà de 5 V et recopie AI1 / 2 sur la sortie analogique AO1, lue par le voltmètre. Le module se raccorde tout seul à l’automate voisin.');
 sel=a.id;panel();render();fitView()};
document.getElementById('ex48').onclick=()=>{exNew();const b=add('bat',120,420),p=add('plc',620,400),m=add('pb',330,60),a=add('pb',520,60),l1=add('bulb',960,160),l2=add('bulb',960,330);b.val=24;l1.un=24;l1.val=5;l2.un=24;l2.val=5;
 const R=(cols,coil)=>{const r=ladNew();cols.forEach((c,i)=>{c.forEach((x,k)=>{r.cols[i][k]=x})});r.coil=coil;return r},C=(k,v)=>({k,v});
 p.lang='ladder';p.lad=[R([[C('NO','I1'),C('NO','M1')],[C('NC','I2')]],{k:'M',n:1,t:0}),R([[C('NO','M1')]],{k:'Q',n:1,t:0}),R([[C('NO','M1')]],{k:'TON',n:1,t:5}),R([[C('NO','T1')]],{k:'Q',n:2,t:0})];p.prg=ladToText(p.lad);
 wire(b.id+':1',p.id+':0');wire(b.id+':0',p.id+':1');wire(b.id+':1',m.id+':0');wire(m.id+':1',p.id+':2');wire(b.id+':1',a.id+':0');wire(a.id+':1',p.id+':3');
 wire(b.id+':1',p.id+':10');wire(p.id+':11',l1.id+':0');wire(l1.id+':1',b.id+':0');wire(b.id+':1',p.id+':12');wire(p.id+':13',l2.id+':0');wire(l2.id+':1',b.id+':0');
 exNote(80,-40,'Automate programmé en ladder : l’échelon 1 est l’auto-maintien (I1 ou M1) et non I2 ; l’échelon 2 commande la lampe Q1 ; l’échelon 3 est une temporisation TON de 5 s (T1) qui commande Q2 à l’échelon 4. Sélectionne l’automate puis « Ouvrir l’éditeur ladder » : les contacts passent au vert quand ils conduisent.');
 sel=p.id;panel();render();fitView()};
/* ---- fenêtre « Charger un exemple » ---- */
function openEx(){const m=document.getElementById('exm');if(m)m.classList.add('on')}
(function(){const m=document.getElementById('exm');if(!m||!m.classList.add)return;const $_=id=>document.getElementById(id),ex=[...document.querySelectorAll('#exs button[id^="ex"]')];
 if(!ex.length)return;const L=$_('exl');L.innerHTML='';ex.forEach(b=>{const e=document.createElement('button');e.textContent=b.textContent;e.onclick=()=>{m.classList.remove('on');b.click()};L.appendChild(e)});
 $_('exb').onclick=openEx;$_('exx').onclick=()=>m.classList.remove('on');m.onclick=e=>{if(e.target===m)m.classList.remove('on')};
 if(document.addEventListener)document.addEventListener('keydown',e=>{if(e.key==='Escape')m.classList.remove('on')})})();
/* ---- fenêtre d'accueil ---- */
(function(){const sp=document.getElementById('splash');if(!sp||typeof sp.classList.add!=='function')return;
 const $_=id=>document.getElementById(id),close=()=>sp.classList.remove('on');
 const exs=[...document.querySelectorAll('#exs button[id^="ex"]')].filter(b=>b.id&&b.textContent);
 $_('spv').textContent=VERSION;
 const pick=[...exs].sort(()=>Math.random()-.5).slice(0,3);
 $_('sp_r').innerHTML='';pick.forEach(b=>{const e=document.createElement('button');e.textContent='▶ '+b.textContent;e.onclick=()=>{close();b.click()};$_('sp_r').appendChild(e)});
 $_('sp_new').onclick=()=>{close();$_('clr').onclick()};
 $_('sp_ex').onclick=()=>{close();openEx()};
 sp.onclick=e=>{if(e.target===sp)close()};
 if(document.addEventListener)document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 sp.classList.add('on')})();
