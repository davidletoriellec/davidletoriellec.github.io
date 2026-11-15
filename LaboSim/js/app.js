const INFO={bat:{n:'Alimentation continue 0–30 V',v:9,u:'V',max:30},ac:{n:'Alimentation alternative 0–230 V~',v:12,max:230},res:{n:'Résistance',v:100,u:'Ω'},bulb:{n:'Ampoule',v:5,u:'W',lab:'Puissance nominale'},cap:{n:'Condensateur',v:10,u:'µF',lab:'Capacité'},ind:{n:'Bobine',v:100,u:'mH',lab:'Inductance'},watt:{n:'Wattmètre ISW8000'},pince:{n:'Pince ampèremétrique (PROVA 21)'},rel:{n:'Relais'},ctc:{n:'Contacteur 2 NO'},mdc:{n:'Moteur à courant continu'},mac:{n:'Moteur asynchrone monophasé'},led:{n:'Lampe à LED'},cfl:{n:'Lampe fluocompacte'},a3:{n:'Alimentation triphasée',v:400},cch:{n:'Caisse de charge',v:1000},m3:{n:'Moteur asynchrone triphasé'},sv:{n:'Sonde de tension'},sc:{n:'Sonde de courant'},tach:{n:'Compte-tours'},cpm:{n:'Couple-mètre'},com:{n:'Commutateur 2 voies (3 bornes)'},gbf:{n:'GBF (générateur de fonctions)'},scope:{n:'Oscilloscope 2 voies'},sw:{n:'Interrupteur'},amp:{n:'Multimètre (ampèremètre)'},volt:{n:'Multimètre (voltmètre)'}};
const GEO={gbf:{t:[[62,43,'b'],[62,28,'b']],b:[-100,-55,200,110]},scope:{t:[[-90,103,'b'],[-90,88,'b'],[-30,103,'b'],[-30,88,'b']],b:[-150,-110,300,220]},cap:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},ind:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},watt:{t:[[75,16],[75,-26],[115,16],[115,-26]],b:[-130,-60,260,120]},pince:{t:[[194,18],[194,-16]],b:[-45,-45,257,90]},rel:{t:[[-60,44],[-30,44],[20,44],[50,44],[80,44]],b:[-90,-60,180,120]},ctc:{t:[[-90,44],[-60,44],[-20,44],[10,44],[45,44],[75,44]],b:[-110,-60,220,120]},mdc:{t:[[-25,37],[25,37]],b:[-50,-50,100,100]},mac:{t:[[-25,37],[25,37]],b:[-50,-50,100,100]},led:{t:[[-26,40],[26,40]],b:[-45,-70,90,125]},cfl:{t:[[-26,40],[26,40]],b:[-45,-70,90,125]},a3:{t:[[-75,36],[-25,36],[25,36],[75,36]],b:[-110,-55,220,110]},cch:{t:[[-70,38],[-40,38],[10,38],[40,38],[70,38]],b:[-90,-50,180,100]},m3:{t:[[-40,37],[0,37],[40,37]],b:[-60,-52,120,102]},
 sv:{t:[[45,7,'b'],[45,-8,'b'],[-50,16],[-50,-16]],b:[-75,-35,150,70]},sc:{t:[[100,9,'b'],[100,-6,'b']],b:[-45,-45,175,90]},tach:{t:[],b:[-48,-40,96,78]},cpm:{t:[],b:[-72,-44,144,72]},com:{t:[[-45,24],[0,24],[45,24]],b:[-65,-32,130,66]},ac:{t:[[-40,34],[40,34]],b:[-95,-50,190,100]},bat:{t:[[-35,34],[35,34]],b:[-85,-50,170,100]},res:{t:[[-52,0],[52,0]],b:[-70,-20,140,40]},bulb:{t:[[-26,40],[26,40]],b:[-45,-55,90,110]},sw:{t:[[-42,22],[42,22]],b:[-60,-30,120,64]},amp:{t:[[-24,62],[24,62]],b:[-48,-75,96,150]}};GEO.volt=GEO.amp;GEO.voltA=GEO.ampA={t:[[-25,98],[25,98]],b:[-95,-100,190,215]};const geo=c=>GEO[c.type+(c.ana?'A':'')]||GEO[c.type];
const TD=[];for(let e=-7;e<=-1;e++)[1,2,5].forEach(m=>TD.push(+(m+'e'+e)));
const VD=[0.005,0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20];let pairId=1;const RV=[0.1,1,3,10,30,100,300,1000],RA=[0.001,0.01,0.1,0.3,1,3,10];
const UNITS={V:[['mV',1e-3],['V',1],['kV',1e3]],Om:[['mΩ',1e-3],['Ω',1],['kΩ',1e3],['MΩ',1e6]],uF:[['pF',1e-6],['nF',1e-3],['µF',1],['mF',1e3]],mH:[['µH',1e-3],['mH',1],['H',1e3]],W:[['mW',1e-3],['W',1],['kW',1e3]],Hz:[['Hz',1],['kHz',1e3],['MHz',1e6]],A:[['mA',1e-3],['A',1]],rpm:[['tr/min',1]],pct:[['%',1]],NU:[['',1]],PCT:[['%',0.01]]};
const FIELDS={bat:[['val','Tension',UNITS.V,{min:0,max:30,sl:[0,30,0.5]}]],
 ac:[['val','Tension efficace',UNITS.V,{min:0,max:230,sl:[0,230,1]}],['f','Fréquence',UNITS.Hz,{min:1,max:1e6,sl:'log'}]],
 gbf:[['amp','Amplitude crête',UNITS.V,{min:0,max:12,sl:[0,12,0.1]}],['f','Fréquence',UNITS.Hz,{min:10,max:1e6,sl:'log'}],['off','Offset',UNITS.V,{min:-12,max:12}]],
 res:[['val','Résistance',UNITS.Om,{min:1e-3}]],bulb:[['val','Puissance nominale',UNITS.W,{min:1e-3}],['un','Tension nominale',UNITS.V,{min:1e-3}]],
 cap:[['val','Capacité',UNITS.uF,{min:1e-6}]],ind:[['val','Inductance',UNITS.mH,{min:1e-3}],['r','Résistance interne',UNITS.Om,{min:1e-3}]],
 rel:[['un','Tension bobine',UNITS.V,{min:0.1}],['rc','Résistance bobine',UNITS.Om,{min:1}]],ctc:[['un','Tension bobine',UNITS.V,{min:0.1}],['rc','Résistance bobine',UNITS.Om,{min:1}]],
 mdc:[['un','Tension nominale',UNITS.V,{min:1}],['ra','Résistance d’induit',UNITS.Om,{min:0.01}],['la','Inductance d’induit',UNITS.mH,{min:0.01}],['i0','Courant à vide',UNITS.A,{min:0.001}],['n0','Vitesse à vide',UNITS.rpm,{min:10}],['inom','Courant nominal',UNITS.A,{min:0.01}],['load','Couple résistant (% du nominal)',UNITS.pct,{min:0,max:150,sl:[0,150,1]}]],
 mac:[['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance utile',UNITS.W,{min:1}],['cosphi','cos φ',UNITS.NU,{min:0.1,max:1}],['eta','Rendement',UNITS.PCT,{min:0.1,max:1}]],
 led:[['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance',UNITS.W,{min:0.1}],['cosphi','cos φ (capacitif)',UNITS.NU,{min:0.1,max:1}]],
 cfl:[['un','Tension nominale',UNITS.V,{min:1}],['pn','Puissance',UNITS.W,{min:0.1}],['cosphi','cos φ (capacitif)',UNITS.NU,{min:0.1,max:1}]],
 a3:[['val','Tension entre phases',UNITS.V,{min:0,max:400,sl:[0,400,5]}],['f','Fréquence',UNITS.Hz,{min:1,max:1e6,sl:'log'}]],
 cch:[['val','Puissance',UNITS.W,{min:0,max:4000,sl:[0,4000,200]}],['un','Tension nominale',UNITS.V,{min:1}]],
 m3:[['pn','Puissance utile',UNITS.W,{min:1}],['un','Tension d’enroulement',UNITS.V,{min:1}],['cosphi','cos φ',UNITS.NU,{min:0.1,max:1}],['eta','Rendement',UNITS.PCT,{min:0.1,max:1}]]};
const selH=(p,o,v)=>`<select data-p="${p}">${o.map(([a,l])=>`<option value="${a}"${String(a)===String(v)?' selected':''}>${l}</option>`).join('')}</select>`;
const COLS=['#d32f2f','#1b1b1b','#1976d2','#2e7d32','#f9a825','#fb8c00','#8e24aa','#6d4c41','#9e9e9e'];const VERSION='1.5';
let comps=[],wires=[],sel=null,selW=null,pend=null,mouse={x:0,y:0},drag=null,wd=null,notes=[],selN=null,uid=1,err='',theory=false;
const cv=document.getElementById('cv'),st=document.getElementById('st'),pn=document.getElementById('pn');
const T=(c,i)=>{const t=geo(c).t[i];return{x:c.x+t[0],y:c.y+t[1]}};
const tp=k=>{const[id,i]=k.split(':');const c=comps.find(c=>c.id==id);return c?T(c,+i):null};
function add(type,x,y){const c={id:uid++,type,x:x??450,y:y??300,val:INFO[type].v,f:type==='gbf'?1000:50,un:({rel:12,ctc:24,mdc:12,mac:230,led:230,cfl:230,m3:230,cch:230})[type]||6,cm:'mono',cpl:'Y',ratio:type==='sc'?100:10,xy:false,rc:type==='ctc'?100:120,on:false,run:0,ra:2,la:5,i0:.15,n0:3000,inom:1.5,load:0,pn:({led:8,cfl:11,mac:370,m3:1500})[type]||0,cosphi:({led:.6,cfl:.55,mac:.82,m3:.84})[type]||1,eta:({m3:.8})[type]||.7,r:5,mode:type==='pince'?'AC':'DC',wave:'sin',amp:5,off:0,td:1e-3,v1:1,v2:1,cp1:'DC',cp2:'DC',on1:true,on2:true,trig:1,pos1:0,pos2:0,cur:{x1:2,x2:6,y1:2,y2:-2},cch:1,rng:type==='amp'?1:10,disp:type==='pince'?'A':'W',rev:false,pos:0,closed:type==='sw'?false:undefined};comps.push(c);sel=c.id;selW=null;panel();render();return c}
function defCol(a,b){for(const k of[a,b]){const c=comps.find(c=>c.id==k.split(':')[0]),i=k.split(':')[1];if(c&&c.type==='ac')return i==='1'?COLS[0]:COLS[2];if(c&&c.type==='watt')return[COLS[2],COLS[0],COLS[1],COLS[0]][+i];if(c&&c.type==='a3')return[COLS[2],COLS[4],COLS[3],COLS[0]][+i];if(c&&['bat','amp','volt','pince','gbf','scope','sv','sc'].includes(c.type))return(+i)%2?COLS[0]:COLS[1]}return COLS[2]}
function wire(a,b){wires.push({a,b,col:defCol(a,b)})}
const kindOf=k=>{const[id,i]=k.split(':'),c=comps.find(c=>c.id==id);return c?geo(c).t[+i][2]:0};
function connect(a,b){if(kindOf(a)==='b'&&kindOf(b)==='b'){const[ia,sa]=a.split(':'),[ib,sb]=b.split(':');if(ia===ib)return;const A=((+sa)>>1)*2,B=((+sb)>>1)*2,x=ia+':'+(A+1),y=ib+':'+(B+1);
 if(wires.some(w=>w.coax&&((w.a===x&&w.b===y)||(w.a===y&&w.b===x))))return;const p=pairId++;
 wires.push({a:x,b:y,col:'#37474f',coax:1,pair:p},{a:ia+':'+A,b:ib+':'+B,col:'#37474f',hide:1,pair:p})}else wire(a,b)}
function fmt(x,u){if(x===undefined||isNaN(x))return'–';const a=Math.abs(x);if(a<1e-9)return'0 '+u;for(const[f,s]of[[1e6,'M'],[1e3,'k'],[1,''],[1e-3,'m'],[1e-6,'µ']])if(a>=f*0.9995)return(+(x/f).toPrecision(3))+' '+s+u;return x.toExponential(1)+' '+u}
/* ---- Simulation (analyse nodale modifiée) ---- */
function mdcP(c){const w0=c.n0*Math.PI/30,k=Math.max(c.un-c.ra*c.i0,.01)/w0,b=.7*k*c.i0/w0,Tf=.3*k*c.i0,TL=c.load/100*k*Math.max(c.inom-c.i0,0),D=c.ra*b/k+k,U0=c.ra*(Tf+TL)/k;return{k,D,U0,TL,Tf,G:(1-k/D)/c.ra,Ic:(Tf+TL)/D}}
function cchY(c){return c.val<=0?0:c.cm==='tri'?c.val/(3*c.un*c.un):c.val/(c.un*c.un)}
function m3Y(c,w){const Iw=c.pn/c.eta/(3*c.un*c.cosphi),Z=c.un/Iw,ph=Math.acos(Math.min(1,Math.max(.05,c.cosphi))),R=Z*Math.cos(ph),X=Z*Math.sin(ph)*(w/(2*Math.PI*50)),f=c.cpl==='D'?1:3,d=R*R+X*X;return[R/d/f,-X/d/f]}
const torque=m=>m.type==='mdc'?(m.run?mdcP(m).TL:0):(m.rps>0?m.eta*Math.max(m.P,0)/(2*Math.PI*m.rps):0);
function macZ(c){const S=c.pn/c.eta/c.cosphi,Z=c.un*c.un/S,ph=Math.acos(Math.min(1,Math.max(.05,c.cosphi)));return{R:Z*Math.cos(ph),X:Z*Math.sin(ph)}}
let AC_=null,soundOn=true;
function clac(heavy){if(!soundOn)return;try{const A=AC_=AC_||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();
 const hit=(delay,g)=>{const n=Math.floor(A.sampleRate*.09),buf=A.createBuffer(1,n,A.sampleRate),d=buf.getChannelData(0),tau=A.sampleRate*(heavy?.016:.008);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/tau)+(i<A.sampleRate*.003?.8*Math.sin(i/6):0);
  const s=A.createBufferSource();s.buffer=buf;const f=A.createBiquadFilter();f.type='bandpass';f.frequency.value=heavy?700:1800;f.Q.value=.9;const gn=A.createGain();gn.gain.value=g;s.connect(f);f.connect(gn);gn.connect(A.destination);s.start(A.currentTime+delay)};
 hit(0,heavy?1:.7);hit(.045,heavy?.55:.4)}catch(e){}}
function solveOnce(){
 err='';comps.forEach(c=>{c.U=c.I=c.P=c.Q=c.Ur=c.Ir=c.Ua=c.Ia=undefined;c.sig=null;c.cl=null});if(!comps.length)return;
 const par={};const f=k=>{if(par[k]===undefined)par[k]=k;return par[k]===k?k:(par[k]=f(par[k]))};
 comps.forEach(c=>geo(c).t.forEach((_,i)=>f(c.id+':'+i)));
 comps.forEach(c=>{if(c.type==='scope')par[f(c.id+':0')]=f(c.id+':2');if(c.type==='watt')par[f(c.id+':1')]=f(c.id+':3')});  /* masses reliées (oscilloscope, wattmètre) */
 const isS=c=>c.type==='bat'||c.type==='ac'||c.type==='gbf'||c.type==='a3',b0=comps.find(isS),g=f((b0||comps[0]).id+':0');
 const map={};let m=0;Object.keys(par).forEach(k=>{const r=f(k);if(r!==g&&map[r]===undefined)map[r]=m++});
 const ix=k=>{const r=f(k);return r===g?-1:map[r]};
 /* colonne 0 = continu ; colonnes q>0 = phaseurs efficaces (réf. cosinus) à chaque fréquence/harmonique ; sources de même fréquence supposées en phase */
 const F=[];const col=fq=>{fq=+fq.toPrecision(9);let i=F.indexOf(fq);if(i<0){F.push(fq);i=F.length-1}return i+1};
 const HK=c=>c.wave==='sq'?[...Array(20)].map((_,i)=>2*i+1):c.wave==='tri'?[...Array(8)].map((_,i)=>2*i+1):[1];
 const amp=(c,k)=>c.wave==='sq'?c.amp*4/Math.PI*(((k-1)/2)%2?-1:1)/k:c.wave==='tri'?c.amp*8/(Math.PI*Math.PI)/(k*k):c.amp;
 const src=[];comps.forEach(c=>{if(c.type==='a3'){const Vp=c.val/Math.sqrt(3),fq=col(c.f);[[1,0],[2,-120],[3,120]].forEach(([k,d])=>{const ev={};if(Vp>0)ev[fq]=[Vp*Math.cos(d*Math.PI/180),Vp*Math.sin(d*Math.PI/180)];src.push({c,p:c.id+':'+k,n:c.id+':0',ev})})}
  else if(isS(c)){const ev={};
   if(c.type==='bat')ev[0]=c.val;else if(c.type==='ac'){if(c.val>0)ev[col(c.f)]=c.val}
   else{ev[0]=c.off;if(c.amp>0)HK(c).forEach(k=>{const q=col(c.f*k);ev[q]=(ev[q]||0)+amp(c,k)/Math.SQRT2})}
   src.push({c,p:c.id+':1',n:c.id+':0',ev})}
  else if(c.type==='amp'||(c.type==='sw'&&c.closed))src.push({c,p:c.id+':0',n:c.id+':1',ev:{}});
  else if(c.type==='watt')src.push({c,p:c.id+':2',n:c.id+':0',ev:{}});
  else if(c.type==='sv')src.push({c,p:c.id+':1',n:c.id+':0',ev:{},ctl:[[c.id+':3',1/c.ratio],[c.id+':2',-1/c.ratio]]});
  else if(c.type==='sc'){const cl=clampOf(c);c.cl=cl;const sg=(c.rev?-1:1)/(c.ratio*0.005),ctl=[];if(cl)wires.forEach(x=>{if(x===cl.w||(cl.w.pair&&x.pair===cl.w.pair)){ctl.push([x.a,sg],[x.b,-sg])}});src.push({c,p:c.id+':1',n:c.id+':0',ev:{},ctl})}});
 const K=1+F.length,ws=[0,...F.map(x=>2*Math.PI*x)],Rw=0.005;   /* chaque câble = 5 mΩ */
 const Rb=c=>c.un*c.un/Math.max(c.val,1e-6);
 const Yof=(c,w)=>{if(c.type==='mdc'){if(w===0)return[c.run?mdcP(c).G:1/c.ra,0];const L=w*c.la*1e-3,d=c.ra*c.ra+L*L;return[c.ra/d,-L/d]}
  if(c.type==='mac'){const z=macZ(c);if(w===0)return[1/z.R,0];const X=z.X*(w/(2*Math.PI*50)),d=z.R*z.R+X*X;return[z.R/d,-X/d]}
  if(c.type==='led'||c.type==='cfl'){const R=c.un*c.un/Math.max(c.pn,1e-6),Q=c.pn*Math.tan(Math.acos(Math.min(1,Math.max(.05,c.cosphi)))),C=Q/(2*Math.PI*50*c.un*c.un);return[1/R,w*C]}
  if(c.type==='res')return[1/Math.max(c.val,1e-6),0];if(c.type==='bulb')return[1/Rb(c),0];if(c.type==='volt')return[1e-7,0];
  if(c.type==='cap')return[0,w*c.val*1e-6];if(c.type==='ind'){const L=w*c.val*1e-3,r=Math.max(c.r,1e-3),d=r*r+L*L;return[r/d,-L/d]}return null};
 const n=m+src.length,X=[];
 for(let q=0;q<K;q++){const w=ws[q],Ar=Array.from({length:n},()=>new Array(n+1).fill(0)),Ai=Array.from({length:n},()=>new Array(n+1).fill(0));
  for(let i=0;i<m;i++)Ar[i][i]+=1e-9;
  const G=(a,b,gr,gi)=>{const i=ix(a),j=ix(b);if(i>=0){Ar[i][i]+=gr;Ai[i][i]+=gi}if(j>=0){Ar[j][j]+=gr;Ai[j][j]+=gi}if(i>=0&&j>=0){Ar[i][j]-=gr;Ai[i][j]-=gi;Ar[j][i]-=gr;Ai[j][i]-=gi}};
  comps.forEach(c=>{const y=Yof(c,w);if(y)G(c.id+':0',c.id+':1',y[0],y[1]);if(c.type==='scope'){G(c.id+':0',c.id+':1',1e-6,0);G(c.id+':2',c.id+':3',1e-6,0)}if(c.type==='com')G(c.id+':1',c.id+':'+(c.pos?2:0),200,0);
   if(c.type==='sv')G(c.id+':2',c.id+':3',1/4e6,0);
   if(c.type==='cch'){const Y=cchY(c);if(Y>0){if(c.cm==='tri'){G(c.id+':2',c.id+':3',Y,0);G(c.id+':3',c.id+':4',Y,0);G(c.id+':4',c.id+':2',Y,0)}else G(c.id+':0',c.id+':1',Y,0)}}
   if(c.type==='m3'){const y=m3Y(c,w);[[0,1],[1,2],[2,0]].forEach(([i,j])=>G(c.id+':'+i,c.id+':'+j,y[0],y[1]))}if(c.type==='rel'){G(c.id+':0',c.id+':1',1/Math.max(c.rc,1),0);G(c.id+':2',c.id+(c.on?':3':':4'),200,0)}if(c.type==='ctc'){G(c.id+':0',c.id+':1',1/Math.max(c.rc,1),0);if(c.on){G(c.id+':2',c.id+':3',200,0);G(c.id+':4',c.id+':5',200,0)}}});
  wires.forEach(x=>G(x.a,x.b,1/Rw,0));
  if(q===0)comps.forEach(c=>{if(c.type==='mdc'&&c.run){const I=c.run*mdcP(c).Ic,i1=ix(c.id+':1'),i0=ix(c.id+':0');if(i1>=0)Ar[i1][n]-=I;if(i0>=0)Ar[i0][n]+=I}});
  src.forEach((s,k)=>{const r=m+k,p=ix(s.p),o=ix(s.n);if(p>=0){Ar[p][r]+=1;Ar[r][p]+=1}if(o>=0){Ar[o][r]-=1;Ar[r][o]-=1}const e=s.ev[q]||0;Ar[r][n]=Array.isArray(e)?e[0]:e;Ai[r][n]=Array.isArray(e)?e[1]:0;if(s.ctl)s.ctl.forEach(([kk,cf])=>{const j=ix(kk);if(j>=0)Ar[r][j]-=cf})});
  for(let c=0;c<n;c++){let p=c,best=-1;for(let r=c;r<n;r++){const v=Ar[r][c]**2+Ai[r][c]**2;if(v>best){best=v;p=r}}
   if(best<1e-24){err='Court-circuit détecté : vérifie ton câblage (ampèremètre en dérivation ?).';return}
   [Ar[c],Ar[p]]=[Ar[p],Ar[c]];[Ai[c],Ai[p]]=[Ai[p],Ai[c]];const pr=Ar[c][c],pi=Ai[c][c],den=pr*pr+pi*pi;
   for(let r=0;r<n;r++)if(r!==c){const kr=(Ar[r][c]*pr+Ai[r][c]*pi)/den,ki=(Ai[r][c]*pr-Ar[r][c]*pi)/den;if(kr||ki)for(let j=c;j<=n;j++){const a=Ar[c][j],b=Ai[c][j];Ar[r][j]-=kr*a-ki*b;Ai[r][j]-=kr*b+ki*a}}}
  const xr=[],xi=[];for(let i=0;i<n;i++){const pr=Ar[i][i],pi=Ai[i][i],den=pr*pr+pi*pi;xr.push((Ar[i][n]*pr+Ai[i][n]*pi)/den);xi.push((Ai[i][n]*pr-Ar[i][n]*pi)/den)}X[q]={r:xr,i:xi}}
 for(let k=0;k<src.length;k++){let t=0;X.forEach(x=>{t+=x.r[m+k]**2+x.i[m+k]**2});if(Math.sqrt(t)>100){err='Court-circuit détecté : courant excessif (> 100 A).';return}}
 const Vc=(k,q)=>{const i=ix(k);return i<0?[0,0]:[X[q].r[i],X[q].i[i]]};
 const WI=wires.map(x=>X.map((_,q)=>{const a=Vc(x.a,q),b=Vc(x.b,q);return[(a[0]-b[0])/Rw,(a[1]-b[1])/Rw]}));   /* courant a→b dans chaque câble */
 comps.forEach(c=>{const k=src.findIndex(s=>s.c===c);let CI=null;
  if(c.type==='pince'){c.cl=clampOf(c);const sg=c.rev?-1:1;
   CI=X.map((_,q)=>{let r=0,im=0;if(c.cl)wires.forEach((x,wi)=>{if(x===c.cl.w||(c.cl.w.pair&&x.pair===c.cl.w.pair)){r+=WI[wi][q][0];im+=WI[wi][q][1]}});return[sg*r,sg*im]})}
  const cols=X.map((_,q)=>{const a=Vc(c.id+':0',q),b=Vc(c.id+':1',q),y=Yof(c,ws[q]);let u=[a[0]-b[0],a[1]-b[1]],i;
   if(y)i=[u[0]*y[0]-u[1]*y[1],u[0]*y[1]+u[1]*y[0]];else i=k<0?[0,0]:[X[q].r[m+k],X[q].i[m+k]];
   if(c.type==='mdc'&&q===0)i=[i[0]-c.run*mdcP(c).Ic,i[1]];if(isS(c)||c.type==='mdc'||c.type==='mac'){u=[-u[0],-u[1]];i=[-i[0],-i[1]]}
   if(c.type==='watt'){const a1=Vc(c.id+':3',q),b1=Vc(c.id+':2',q);u=[a1[0]-b1[0],a1[1]-b1[1]]}
   if(CI){if(c.type==='pince'){const a1=Vc(c.id+':1',q),b1=Vc(c.id+':0',q);u=[a1[0]-b1[0],a1[1]-b1[1]]}else u=[0,0];i=CI[q]}
   return[u[0],u[1],i[0],i[1]]});
  c.U=cols[0][0];c.I=cols[0][2];const ac=cols.slice(1);
  c.Ua=Math.hypot(...ac.map(x=>Math.hypot(x[0],x[1])));c.Ia=Math.hypot(...ac.map(x=>Math.hypot(x[2],x[3])));
  c.Ur=Math.hypot(c.U,c.Ua);c.Ir=Math.hypot(c.I,c.Ia);
  c.P=cols.reduce((t,x)=>t+x[0]*x[2]+x[1]*x[3],0);c.Q=cols.reduce((t,x)=>t+x[1]*x[2]-x[0]*x[3],0);
  if(c.type==='mdc'){const Pm=mdcP(c);c.rps=c.run?Math.max(0,(Math.abs(c.U)-Pm.U0)/Pm.D)/(2*Math.PI):0;c.rpm=c.rps*60}
  if(c.type==='mac'){let bb=-1,f=0;ac.forEach((x,k)=>{const m=Math.hypot(x[0],x[1]);if(m>bb){bb=m;f=ws[k+1]/(2*Math.PI)}});c.rps=c.Ur>=.6*c.un&&f>0?f*.95:0;c.rpm=c.rps*60}
  if(c.type==='cch'||c.type==='m3'){let P=0,Q=0;const pr=c.type==='m3'?[[0,1],[1,2],[2,0]]:c.cm==='tri'?[[2,3],[3,4],[4,2]]:[[0,1]];
   X.forEach((_,q)=>pr.forEach(([i,j])=>{const a=Vc(c.id+':'+i,q),b=Vc(c.id+':'+j,q),u=[a[0]-b[0],a[1]-b[1]],y=c.type==='cch'?[cchY(c),0]:m3Y(c,ws[q]),cu=[u[0]*y[0]-u[1]*y[1],u[0]*y[1]+u[1]*y[0]];P+=u[0]*cu[0]+u[1]*cu[1];Q+=u[1]*cu[0]-u[0]*cu[1]}));c.P=P;c.Q=Q;
   if(c.type==='m3'){let bb=-1,f=0;ac.forEach((x,k)=>{const m=Math.hypot(x[0],x[1]);if(m>bb){bb=m;f=ws[k+1]/(2*Math.PI)}});const Uw=c.cpl==='D'?c.Ur:c.Ur/Math.sqrt(3);c.rps=Uw>=.6*c.un&&f>0?f/2*.96:0;c.rpm=c.rps*60}}
  if(c.type==='scope'){c.ws=ws;c.sig=[0,2].map(o=>X.map((_,q)=>{const a=Vc(c.id+':'+(o+1),q),b=Vc(c.id+':'+o,q);return[a[0]-b[0],a[1]-b[1]]}))}});
 comps.forEach(c=>{if(c.type==='tach'||c.type==='cpm'){let best=null,bd=110;comps.forEach(m=>{if(m.type==='mdc'||m.type==='mac'||m.type==='m3'){const d=Math.hypot(m.x-c.x,m.y-c.y);if(d<bd){bd=d;best=m}}});c.tgt=best?best.id:null;c.tv=best?(c.type==='tach'?(best.rpm||0):torque(best)):undefined}});
}
/* relais / contacteurs : l'état dépend de la tension efficace de la bobine (hystérésis 80 % / 30 %) -> itération */
function solve(){const was=comps.map(c=>c.on);comps.forEach(c=>{if(c.type==='mdc')c.run=0});let ok=false;
 for(let it=0;it<10;it++){solveOnce();if(err)break;let ch=false;comps.forEach(c=>{
  if(c.type==='rel'||c.type==='ctc'){const on=c.Ur>=.8*c.un?true:c.Ur<.3*c.un?false:c.on;if(on!==c.on){c.on=on;ch=true}}
  if(c.type==='mdc'){const r=Math.abs(c.U)>mdcP(c).U0?Math.sign(c.U):0;if(r!==c.run){c.run=r;ch=true}}});if(!ch){ok=true;break}}
 if(!ok&&!err){comps.forEach(c=>{if(c.type==='mdc')c.run=0});solveOnce()}
 comps.forEach((c,i)=>{if((c.type==='rel'||c.type==='ctc')&&c.on&&!was[i])clac(c.type==='ctc')})}
/* ---- Oscilloscope : reconstruction temporelle ---- */
function mkWave(c,ch,acOnly){const ph=c.sig[ch],cp=ch?c.cp2:c.cp1;if(cp==='GND')return()=>0;
 const dc=(acOnly||cp==='AC')?0:ph[0][0],T=[];for(let q=1;q<ph.length;q++)if(Math.hypot(ph[q][0],ph[q][1])>1e-9)T.push([c.ws[q],ph[q][0]*Math.SQRT2,ph[q][1]*Math.SQRT2]);
 return t=>{let y=dc;for(const[w,a,b]of T)y+=a*Math.cos(w*t)-b*Math.sin(w*t);return y}}
function domFreq(ph,ws){let b=1e-6,f=0;for(let q=1;q<ph.length;q++){const a=Math.hypot(ph[q][0],ph[q][1]);if(a>b){b=a;f=ws[q]/(2*Math.PI)}}return f}
function traces(c,S){if(err||!c.sig)return'';let s='';const tr=c.trig===2?1:0,fT=domFreq(c.sig[tr],c.ws),H=8*S,Wd=10*S;let t0=0;
 if(c.xy){const W1=mkWave(c,0),W2=mkWave(c,1),f1=domFreq(c.sig[0],c.ws),f2=domFreq(c.sig[1],c.ws),fm=Math.min(f1||1e12,f2||1e12),Ts=fm<1e12?20/fm:1,N=3000;let d='';
  for(let k=0;k<=N;k++){const t=k/N*Ts,x=Wd/2+(W1(t)/c.v1+c.pos1)*S,y=H/2-(W2(t)/c.v2+c.pos2)*S;d+=(k?'L':'M')+Math.max(0,Math.min(Wd,x)).toFixed(1)+' '+Math.max(0,Math.min(H,y)).toFixed(1)}
  return`<path d="${d}" stroke="#7cfc00" stroke-width="${S>30?2:1.5}" fill="none" stroke-linejoin="round"/>`}
 if(fT){const ref=mkWave(c,tr,true),dt=1/(fT*600);let pv=ref(0);for(let t=dt;t<1.3/fT;t+=dt){const y=ref(t);if(pv<0&&y>=0){t0=t-dt*y/(y-pv);break}pv=y}}
 [0,1].forEach(ch=>{if(!(ch?c.on2:c.on1))return;const colr=ch?'#00e5ff':'#ffeb3b',vd=ch?c.v2:c.v1,pos=ch?c.pos2:c.pos1,W=mkWave(c,ch),fd=domFreq(c.sig[ch],c.ws),span=c.td*10;
  const Y=v=>Math.max(0,Math.min(H,H/2-(v/vd+pos)*S)).toFixed(1);let d='';
  if(fd&&span*fd>20){for(let px=0;px<=Wd;px++){const tx=t0+px/Wd*span;let mn=1e9,mx=-1e9;for(let j=0;j<24;j++){const y=W(tx+j/(24*fd));if(y<mn)mn=y;if(y>mx)mx=y}d+=`M${px} ${Y(mn)}V${Y(mx)}`}
   s+=`<path d="${d}" stroke="${colr}" stroke-width="1.3" fill="none"/>`}
  else{const N=Math.max(400,Wd*2);for(let k=0;k<=N;k++)d+=(k?'L':'M')+(k*Wd/N).toFixed(1)+' '+Y(W(t0+k/N*span));s+=`<path d="${d}" stroke="${colr}" stroke-width="${S>30?2.2:1.8}" fill="none" stroke-linejoin="round"/>`}
  const y0=Y(0);s+=`<path d="M0 ${y0-5}L8 ${y0}L0 ${y0+5}Z" fill="${colr}"/>`});
 return s}
function scopeCtl(c){const cps=[['DC','DC'],['AC','AC'],['GND','GND']],vo=VD.map(x=>[x,fmt(x,'V')+'/div']);
 return`<label>Base de temps ${selH('td',TD.map(x=>[x,fmt(x,'s')+'/div']),c.td)}</label><label><input type="checkbox" data-b="on1" ${c.on1?'checked':''}> CH1 ${selH('v1',vo,c.v1)} ${selH('cp1',cps,c.cp1)} pos <input type="number" data-p="pos1" step="0.5" value="${c.pos1}"></label><label><input type="checkbox" data-b="on2" ${c.on2?'checked':''}> CH2 ${selH('v2',vo,c.v2)} ${selH('cp2',cps,c.cp2)} pos <input type="number" data-p="pos2" step="0.5" value="${c.pos2}"></label><label>Déclenchement ${selH('trig',[[1,'CH1'],[2,'CH2']],c.trig)}</label><label><input type="checkbox" data-b="xy" ${c.xy?'checked':''}> Mode XY (CH1 = X, CH2 = Y)</label>`}
function bindP(root,c,cb){root.querySelectorAll('[data-p]').forEach(el=>el.oninput=el.onchange=()=>{const p=el.dataset.p;let v=el.value;
  if(/^(DC|AC|GND|sin|sq|tri|W|VAr|VA|PF|V|A|Y|D|mono)$/.test(v))c[p]=v;else{v=parseFloat(v);if(isNaN(v))return;
   if(p==='fl')c.f=+Math.pow(10,v).toPrecision(3);else if(p==='f')c.f=Math.min(1e6,Math.max(10,v));else if(p==='amp')c.amp=Math.min(12,Math.max(0,v));else if(p==='off')c.off=Math.min(12,Math.max(-12,v));else c[p]=v}
  root.querySelectorAll('[data-p]').forEach(o=>{if(o===el)return;const q=o.dataset.p;if(q==='f'&&p==='fl')o.value=c.f;else if(q==='fl'&&p==='f')o.value=Math.log10(c.f);else if(q===p&&o.tagName==='INPUT')o.value=c[p]});cb()});
 root.querySelectorAll('[data-b]').forEach(el=>el.onchange=()=>{c[el.dataset.b]=el.checked;cb()})}
/* ---- Dessin des appareils ---- */
const bnc=(x,y)=>`<circle cx="${x}" cy="${y}" r="16" fill="#c9ccd1" stroke="#5f646b" stroke-width="2"/><circle cx="${x}" cy="${y}" r="10" fill="#8f959d"/><circle cx="${x}" cy="${y}" r="4.5" fill="#d4af37" stroke="#7a5f00"/><rect x="${x-19}" y="${y-2.5}" width="6" height="5" fill="#5f646b"/><rect x="${x+13}" y="${y-2.5}" width="6" height="5" fill="#5f646b"/>`;
const jack=(x,y,col)=>`<circle cx="${x}" cy="${y}" r="9" fill="${col}" stroke="#4a4a4a" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#0c0c0c"/>`;
const BAND=['#111','#8b4513','#d32f2f','#ff9800','#fdd835','#2e7d32','#1976d2','#7b1fa2','#9e9e9e','#fff'];
function bands(v){let e=Math.floor(Math.log10(v)),m=Math.round(v/Math.pow(10,e-1));if(m>=100){m=10;e++}const x=e-1,col=k=>k===-1?'#d4af37':k===-2?'#c0c0c0':BAND[k]||'#777';return[BAND[Math.floor(m/10)],BAND[m%10],col(x)]}
const txt=(x,y,s,sz,fill,anc,fam)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${fill}" text-anchor="${anc||'middle'}" stroke="none" font-family="${fam||'system-ui'}" font-weight="600">${s}</text>`;
const reading=c=>err?'----':c.mode==='AC'?(c.type==='amp'?fmt(c.Ia,'A'):fmt(c.Ua,'V')):(c.type==='amp'?fmt(-c.I,'A'):fmt(-c.U,'V'));
function body(c){let s='';
 if(c.type==='bat'){const ang=-135+c.val/30*270;
  s=`<rect x="-85" y="-50" width="170" height="100" rx="8" fill="#cfd6df" stroke="#6b7684" stroke-width="2"/><rect x="-75" y="-42" width="82" height="34" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-34,-17,c.val.toFixed(1)+' V',20,'#46e07a','middle','ui-monospace,Consolas,monospace')}
  <circle cx="45" cy="-24" r="17" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-14" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(45 -24) rotate(${ang})"/>${txt(45,12,'TENSION',8,'#334','middle')}${txt(-35,18,'− COM',10,'#222')}${txt(35,18,'+ 0-30V',10,'#b71c1c')}${jack(-35,34,'#1b1b1b')}${jack(35,34,'#d32f2f')}`}
 else if(c.type==='ac'){const a1=-135+c.val/230*270,a2=-135+Math.log10(c.f)/3*270,kn=(x,a)=>`<circle cx="${x}" cy="-20" r="14" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-12" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -20) rotate(${a})"/>`;
  s=`<rect x="-95" y="-50" width="190" height="100" rx="8" fill="#b9c6d6" stroke="#4d5e73" stroke-width="2"/><rect x="-95" y="-50" width="190" height="8" rx="4" fill="#1565c0"/><rect x="-85" y="-38" width="92" height="40" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-39,-20,+c.val.toFixed(1)+' V ~',17,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-39,-5,+c.f.toPrecision(4)+' Hz',13,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${kn(38,a1)}${kn(74,a2)}${txt(38,8,'TENSION',7,'#334')}${txt(74,8,'FRÉQ.',7,'#334')}${txt(-40,18,'N',10,'#0d47a1')}${txt(40,18,'Φ 0-230V~',10,'#b71c1c')}${jack(-40,34,'#1565c0')}${jack(40,34,'#d32f2f')}`}
 else if(c.type==='gbf'){const a1=-135+c.amp/12*270,a2=-135+(Math.log10(c.f)-1)/5*270,x0=i=>-90+i*38,W=['sin','sq','tri'],
  ic=[i=>`M${x0(i)+4} 24q6.5 -14 13 0t13 0`,i=>`M${x0(i)+4} 32V18H${x0(i)+13}V32H${x0(i)+21}V18H${x0(i)+30}`,i=>`M${x0(i)+4} 29L${x0(i)+11} 17L${x0(i)+19} 29L${x0(i)+26} 17`],
  kn=(x,a)=>`<circle cx="${x}" cy="-28" r="12" fill="#263238" stroke="#101519" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-10" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -28) rotate(${a})"/>`;
  s=`<rect x="-100" y="-55" width="200" height="110" rx="8" fill="#37474f" stroke="#1c262b" stroke-width="2"/>${txt(0,-46,'GÉNÉRATEUR DE FONCTIONS',8,'#eceff1')}<rect x="-90" y="-42" width="110" height="46" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-35,-20,fmt(c.f,'Hz'),17,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-35,-5,c.amp.toFixed(1)+' V'+(c.off?(c.off>0?' +':' ')+c.off.toFixed(1)+' V':''),10,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${[0,1,2].map(i=>`<rect x="${x0(i)}" y="12" width="34" height="24" rx="4" fill="#263238" stroke="${c.wave===W[i]?'#46e07a':'#78909c'}" stroke-width="2"/><path d="${ic[i](i)}" fill="none" stroke="${c.wave===W[i]?'#46e07a':'#b0bec5'}" stroke-width="2"/>`).join('')}${kn(45,a1)}${kn(78,a2)}${txt(45,-8,'AMPL.',7,'#eceff1')}${txt(78,-8,'FRÉQ.',7,'#eceff1')}${txt(62,6,'SORTIE',7,'#eceff1')}${bnc(62,28)}`}
 else if(c.type==='scope'){const gr=[...Array(11)].map((_,i)=>`M${-140+i*20} -100V60`).join('')+[...Array(9)].map((_,j)=>`M-140 ${-100+j*20}H60`).join(''),
  kb=(x,y,idx,n,lab)=>`<circle cx="${x}" cy="${y}" r="14" fill="#3a4350" stroke="#12181b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-12" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} ${y}) rotate(${-135+Math.max(0,idx)/(n-1)*270})"/>${txt(x,y+26,lab,7,'#eceff1')}`,
  ro='1:'+fmt(c.v1,'V')+(c.cp1==='DC'?'':' '+c.cp1)+'  2:'+fmt(c.v2,'V')+(c.cp2==='DC'?'':' '+c.cp2)+(c.xy?'  XY':'  '+fmt(c.td,'s')+'/div');
  s=`<rect x="-150" y="-110" width="300" height="220" rx="10" fill="#2f3a3f" stroke="#12181b" stroke-width="2"/><rect x="-146" y="-106" width="208" height="170" rx="6" fill="#0a0f0c" stroke="#555" stroke-width="2"/><path d="${gr}" stroke="rgba(120,200,140,.28)" fill="none"/><path d="M-40 -100V60M-140 -20H60" stroke="rgba(120,200,140,.55)" fill="none"/><g transform="translate(-140 -100)">${traces(c,20)}</g>${txt(-137,57,ro,7,'#9ccc65','start','ui-monospace,Consolas,monospace')}${txt(107,-94,'OSCILLOSCOPE',8,'#eceff1')}${kb(107,-62,TD.indexOf(c.td),TD.length,'BASE TEMPS')}${kb(107,-14,VD.indexOf(c.v1),VD.length,'CH1 V/DIV')}${kb(107,34,VD.indexOf(c.v2),VD.length,'CH2 V/DIV')}${bnc(-90,88)}${bnc(-30,88)}${txt(-66,92,'CH1',9,'#ffeb3b','start')}${txt(-6,92,'CH2',9,'#00e5ff','start')}${txt(-60,70,'masses reliées',7,'#b0bec5')}`}
 else if(c.type==='cap'){
  s=`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/><path d="M-52 0H-26M26 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-28" y="-15" width="56" height="30" rx="6" fill="#e8a317" stroke="#8a5d00" stroke-width="1.5"/><rect x="-23" y="-11" width="46" height="4" rx="2" fill="rgba(255,255,255,.4)"/>${txt(0,9,+c.val.toPrecision(3)+' µF',11,'#3b2600')}${jack(-52,0,'#bdbdbd')}${jack(52,0,'#bdbdbd')}`}
 else if(c.type==='ind'){const tr=[-24,-16,-8,0,8,16,24].map(x=>`<path d="M${x-3} 13L${x+3} -13" stroke="#c8702a" stroke-width="5" stroke-linecap="round"/>`).join('');
  s=`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/><path d="M-52 0H-30M30 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-31" y="-14" width="62" height="28" rx="4" fill="#9aa3ad" stroke="#59616b"/>${tr}${txt(0,-26,+c.val.toPrecision(3)+' mH · '+c.r+' Ω',10,'var(--ink)')}${jack(-52,0,'#bdbdbd')}${jack(52,0,'#bdbdbd')}`}
 else if(c.type==='watt'){const S=c.Ur*c.Ir,D=c.disp||'W',v=err?null:D==='W'?c.P:D==='VAr'?c.Q:D==='VA'?S:D==='PF'?(S>1e-9?c.P/S:0):D==='V'?c.Ur:c.Ir,
  num=v===null?'-----':Math.abs(v)<1e-9?'0.000':String(+v.toPrecision(4)),
  bt=(x,l)=>`<rect x="${x}" y="22" width="24" height="18" rx="3" fill="#2a2a2a" stroke="#111"/><circle cx="${x+12}" cy="31" r="3" fill="${D===l?'#ff3b30':'#4a2a2a'}"/>${txt(x+12,18,l,8,'#222')}`;
  s=`<rect x="-130" y="-60" width="260" height="120" rx="6" fill="#ddd9cf" stroke="#8c887c" stroke-width="2"/><rect x="-122" y="-50" width="134" height="56" rx="3" fill="#1a0a0a" stroke="#333"/>${txt(8,-10,num,28,'#ff2a1a','end','ui-monospace,Consolas,monospace')}${txt(-116,-38,D==='PF'?'':D,9,'#ff6a5a','start')}${bt(-124,'W')}${bt(-96,'VAr')}${bt(-68,'VA')}${bt(-40,'PF')}${bt(-4,'V')}${bt(24,'A')}${txt(-60,54,'IeS ISW8000 · WATTMETER',8,'#555')}${txt(75,-44,'SOURCE',8,'#222')}${txt(115,-44,'LOAD',8,'#222')}<path d="M75 16H115" stroke="#555" stroke-width="2"/><rect x="85" y="10" width="20" height="12" rx="2" fill="#f4f0e0" stroke="#444" stroke-width="1.5"/><path d="M88 16H102" stroke="#444" stroke-width="1.2"/>${txt(95,34,'mesure I',6,'#444')}<path d="M127 -26V16M123 -26H127M123 16H127" stroke="#555" fill="none" stroke-width="1.5"/>${jack(75,-26,'#d32f2f')}${jack(75,16,'#1976d2')}${jack(115,-26,'#d32f2f')}${jack(115,16,'#1b1b1b')}`}
 else if(c.type==='pince'){const S=c.Ur*c.Ir,D=c.disp||'A',cl=c.cl,
  v=err?null:D==='A'?(c.mode==='AC'?c.Ia:c.I):D==='W'?c.P:D==='VAr'?c.Q:D==='VA'?S:D==='PF'?(S>1e-9?c.P/S:0):D==='V'?c.Ur:c.Ir,
  tv=v===null?'----':D==='PF'?v.toFixed(2):fmt(v,D),ang=cl?cl.ang+(c.rev?180:0):0;
  s=`<rect x="22" y="-36" width="190" height="72" rx="12" fill="#5d7a8c" stroke="#2c3e48" stroke-width="2"/><circle r="31" fill="none" stroke="#f2c200" stroke-width="20"/><circle r="41" fill="none" stroke="#8a6d00" stroke-width="1.5"/><circle r="21" fill="none" stroke="#8a6d00" stroke-width="1.5"/><path d="M0 -41V-21" stroke="#6d5600" stroke-width="2.5"/><rect x="58" y="-28" width="88" height="38" rx="4" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(142,-4,tv,15,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(62,-17,D==='A'?(c.mode==='AC'?'AC ~':'DC ='):D,8,'#14210c','start')}<circle cx="150" cy="22" r="10" fill="#263238" stroke="#101519" stroke-width="2"/>${txt(62,31,'PROVA 21',8,'#eceff1','start')}${cl?`<g transform="rotate(${ang}) translate(0 15)"><path d="M-13 0H13M7 -4.5L13 0L7 4.5" stroke="#d32f2f" stroke-width="2.5" fill="none"/></g>`:''}${jack(194,-16,'#d32f2f')}${jack(194,18,'#1b1b1b')}`}
 else if(c.type==='com'){const x=c.pos?30:-30;
  s=`<rect x="-65" y="-32" width="130" height="66" rx="8" fill="#c9ced6" stroke="#6b7684" stroke-width="2"/><circle cx="-30" cy="-22" r="4" fill="#555"/><circle cx="30" cy="-22" r="4" fill="#555"/><circle cy="-2" r="5" fill="#555"/><line x1="0" y1="-2" x2="${x}" y2="-22" stroke="#e53935" stroke-width="8" stroke-linecap="round"/>${txt(-45,12,'A',9,'#222')}${txt(0,12,'C',9,'#222')}${txt(45,12,'B',9,'#222')}${jack(-45,24,'#bdbdbd')}${jack(0,24,'#bdbdbd')}${jack(45,24,'#bdbdbd')}`}
 else if(c.type==='a3'){const kn=(x,a)=>`<circle cx="${x}" cy="-20" r="12" fill="#3a4350" stroke="#1c222b" stroke-width="2"/><line x1="0" y1="-3" x2="0" y2="-9" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(${x} -20) rotate(${a})"/>`;
  s=`<rect x="-110" y="-55" width="220" height="110" rx="8" fill="#b9c6d6" stroke="#4d5e73" stroke-width="2"/><rect x="-110" y="-55" width="220" height="12" rx="4" fill="#c62828"/>${txt(0,-46,'ALIMENTATION TRIPHASÉE',8,'#fff')}<rect x="-100" y="-36" width="140" height="44" rx="4" fill="#0b1a12" stroke="#444"/>${txt(-30,-16,c.val.toFixed(0)+' V',18,'#46e07a','middle','ui-monospace,Consolas,monospace')}${txt(-30,-2,'phase '+(c.val/Math.sqrt(3)).toFixed(0)+' V · '+fmt(c.f,'Hz'),9,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${kn(62,-135+c.val/400*270)}${kn(92,-135+Math.log10(c.f)/6*270)}${txt(62,6,'TENSION',6.5,'#334')}${txt(92,6,'FRÉQ.',6.5,'#334')}${[['N',-75,'#1976d2'],['L1',-25,'#f9a825'],['L2',25,'#2e7d32'],['L3',75,'#d32f2f']].map(([l,x,cl])=>txt(x,19,l,9,'#222')+jack(x,36,cl)).join('')}`}
 else if(c.type==='cch'){const T3=c.cm==='tri',P=err?0:(c.P||0),h=Math.min(1,P/4000),bars=[...Array(6)].map((_,i)=>`<rect x="${-72+i*24}" y="-28" width="16" height="48" rx="3" fill="rgb(${Math.round(90+165*h)},${Math.round(60+20*h)},${Math.round(50-30*h)})" stroke="#2b2b2b"/>`).join('');
  s=`<rect x="-90" y="-50" width="180" height="100" rx="8" fill="#6d7780" stroke="#2f3a41" stroke-width="2"/><rect x="-80" y="-38" width="160" height="62" rx="4" fill="#2b3138"/>${bars}<rect x="-80" y="-38" width="160" height="62" rx="4" fill="rgba(255,120,0,${(h*.2).toFixed(2)})"/>${txt(-78,-43,'CAISSE DE CHARGE · '+(T3?'TRIPHASÉ':'MONO / DC'),7,'#eceff1','start')}${txt(86,-43,fmt(c.val,'W'),8,'#ffb74d','end')}${geo(c).t.map((t,i)=>{const act=(i<2)===!T3;return txt(t[0],30,i<2?'M'+(i+1):'L'+(i-1),7,act?'#eceff1':'#78828b')+jack(t[0],t[1],act?'#bdbdbd':'#5d666e')}).join('')}<path d="M-12 27V47" stroke="#cfd8dc" stroke-dasharray="2 2"/>`}
 else if(c.type==='m3'){const hot=!err&&c.Ur>0&&((c.cpl==='D'?c.Ur:c.Ur/Math.sqrt(3))>1.15*c.un),rps=c.rps||0,dur=rps>.02?(1/Math.min(rps,4)).toFixed(2):0,
  blades=[0,60,120,180,240,300].map(a=>`<path transform="rotate(${a})" d="M-3 -4L-4 -23H4L3 -4Z" fill="#9aa3ab" stroke="#4a525a"/>`).join(''),fins=[...Array(16)].map((_,i)=>`<path transform="translate(0 -14) rotate(${i*22.5})" d="M0 -32V-39" stroke="#3d566e" stroke-width="3"/>`).join('');
  s=`<rect x="-60" y="24" width="120" height="26" rx="4" fill="#3b4148" stroke="#1c2024" stroke-width="2"/>${fins}<circle cx="0" cy="-14" r="31" fill="#4f7396" stroke="#2c4660" stroke-width="3"/><circle cx="0" cy="-14" r="25" fill="#222a31"/><g transform="translate(0 -14)"><g>${dur?`<animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="${dur}s" repeatCount="indefinite"/>`:''}${blades}</g><circle r="5" fill="#9aa3ab" stroke="#444"/></g>${txt(0,-56,'3~ '+(c.cpl==='D'?'triangle':'étoile'),8,'var(--ink)')}${hot?txt(0,-66,'surtension ! couplage ?',9,'#d32f2f'):''}${['U','V','W'].map((l,i)=>txt(-40+i*40,29,l,7,'#cfd8dc')+jack(-40+i*40,38,'#bdbdbd')).join('')}`}
 else if(c.type==='sv'){s=`<rect x="-75" y="-35" width="150" height="70" rx="8" fill="#2f3a42" stroke="#12181b" stroke-width="2"/>${txt(-8,-16,'SONDE DE TENSION',8,'#eceff1')}${txt(-8,8,'÷ '+c.ratio,22,'#ffb74d','middle','ui-monospace,Consolas,monospace')}${txt(-8,26,'isolée · 4 MΩ',7,'#90a4ae')}${txt(-32,-12,'+',10,'#eceff1')}${txt(-32,20,'−',10,'#eceff1')}${txt(45,-26,'SORTIE',6.5,'#90a4ae')}${jack(-50,16,'#1b1b1b')}${jack(-50,-16,'#d32f2f')}${bnc(45,-8)}`}
 else if(c.type==='sc'){const cl=c.cl,ang=cl?cl.ang+(c.rev?180:0):0;s=`<rect x="22" y="-26" width="100" height="52" rx="8" fill="#2f3a42" stroke="#12181b" stroke-width="2"/><circle r="20" fill="none" stroke="#e0b100" stroke-width="12"/><circle r="26" fill="none" stroke="#7a5f00" stroke-width="1.5"/><circle r="14" fill="none" stroke="#7a5f00" stroke-width="1.5"/>${txt(28,-10,'SONDE I',8,'#eceff1','start')}${txt(28,10,'÷ '+c.ratio,14,'#ffb74d','start','ui-monospace,Consolas,monospace')}${cl?`<g transform="rotate(${ang}) translate(0 11)"><path d="M-10 0H10M5 -4L10 0L5 4" stroke="#d32f2f" stroke-width="2.5" fill="none"/></g>`:''}${bnc(100,-6)}`}
 else if(c.type==='tach'){const v=c.tv;s=`<rect x="-45" y="-36" width="90" height="70" rx="10" fill="#4a5560" stroke="#1d2328" stroke-width="2"/><rect x="-37" y="-28" width="74" height="30" rx="3" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(33,-6,v===undefined?'----':String(Math.round(v)),16,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-33,-18,'tr/min',7,'#14210c','start')}<circle cx="0" cy="17" r="8" fill="#d32f2f" stroke="#7a1111"/>${txt(0,31,'COMPTE-TOURS',6.5,'#eceff1')}`}
 else if(c.type==='cpm'){const v=c.tv;s=`<rect x="-55" y="-14" width="110" height="34" rx="4" fill="#9aa3ab" stroke="#4a525a" stroke-width="2"/><rect x="-70" y="-22" width="16" height="50" rx="3" fill="#6b7684"/><rect x="54" y="-22" width="16" height="50" rx="3" fill="#6b7684"/><rect x="-35" y="-42" width="70" height="26" rx="3" fill="#b9c9b3" stroke="#222" stroke-width="2"/>${txt(31,-23,v===undefined?'----':v.toFixed(2),14,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-31,-34,'N·m',7,'#14210c','start')}${txt(0,10,'COUPLEMÈTRE',7,'#222')}`}
 else if(c.type==='mdc'||c.type==='mac'){const M=c.type==='mdc',rps=c.rps||0,dur=rps>.02?(1/Math.min(rps,4)).toFixed(2):0,dir=M&&c.run<0?-1:1,hot=M&&!err&&c.Ir>2*c.inom,
  blades=M?[0,120,240].map(a=>`<g transform="rotate(${a})"><ellipse cx="0" cy="-14" rx="6.5" ry="12" fill="#c8702a" stroke="#7a4210"/><ellipse cx="0" cy="-14" rx="3" ry="8" fill="none" stroke="#e5a15c"/></g>`).join(''):[0,60,120,180,240,300].map(a=>`<path transform="rotate(${a})" d="M-3 -4L-4 -23H4L3 -4Z" fill="#9aa3ab" stroke="#4a525a"/>`).join(''),
  fins=M?'':[...Array(16)].map((_,i)=>`<path transform="translate(0 -14) rotate(${i*22.5})" d="M0 -32V-39" stroke="#5f6b76" stroke-width="3"/>`).join('');
  s=`<rect x="-50" y="24" width="100" height="26" rx="4" fill="#3b4148" stroke="#1c2024" stroke-width="2"/>${fins}<circle cx="0" cy="-14" r="31" fill="${M?'#cfd5db':'#8fa4b8'}" stroke="#4d5e73" stroke-width="3"/><circle cx="0" cy="-14" r="25" fill="#2b3138"/><g transform="translate(0 -14)"><g>${dur?`<animateTransform attributeName="transform" type="rotate" from="${dir>0?0:360} 0 0" to="${dir>0?360:0} 0 0" dur="${dur}s" repeatCount="indefinite"/>`:''}${blades}</g><circle r="5" fill="#9aa3ab" stroke="#444"/></g>${hot?txt(0,-56,'surintensité !',10,'#d32f2f'):''}${jack(-25,37,'#1b1b1b')}${jack(25,37,'#d32f2f')}`}
 else if(c.type==='led'||c.type==='cfl'){const L=c.type==='led',b=err?0:(c.Ur<(L?.4:.6)*c.un?0:Math.min(1,c.P/c.pn)),hot=!err&&c.Ur>1.3*c.un,glow=L?'235,245,255':'255,236,170',on=b>.02;
  s=`<circle cy="-26" r="${28+b*22}" fill="rgba(${glow},${(b*.45).toFixed(2)})"/><rect x="-42" y="12" width="84" height="42" rx="6" fill="#4a4f57" stroke="#22262b" stroke-width="2"/><rect x="-16" y="-2" width="32" height="14" fill="#b9bcc2" stroke="#6e7177"/><path d="M-16 3H16M-16 8H16" stroke="#6e7177"/>`+(L?`<circle cy="-26" r="26" fill="${on?`rgba(${glow},${(.35+.6*b).toFixed(2)})`:'rgba(215,230,240,.3)'}" stroke="#7b8794" stroke-width="2"/><path d="M-9 -4V-30M0 -4V-34M9 -4V-30" stroke="${on?'#fff':'#9aa5ad'}" stroke-width="3" stroke-linecap="round"/>`:`<path d="M-17 -2V-30Q-17 -50 -8 -50Q1 -50 1 -30V-2M1 -2V-30Q1 -50 10 -50Q19 -50 19 -30V-2" fill="none" stroke="${on?`rgb(255,${Math.round(250-30*(1-b))},${Math.round(215-60*(1-b))})`:'#cfd8dc'}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`)+`${txt(0,-62,L?'LED':'FLUOCOMPACTE',8,'var(--ink)')}${hot?txt(0,-72,'surtension !',11,'#d32f2f'):''}${jack(-26,40,'#bdbdbd')}${jack(26,40,'#bdbdbd')}`}
 else if(c.type==='rel'){const on=c.on,tip=on?[50,-34]:[80,-34],arm=on?-42:-52;
  s=`<rect x="-90" y="-60" width="180" height="120" rx="8" fill="rgba(160,200,225,.35)" stroke="#4f7a96" stroke-width="2"/><path d="M-60 44V4M-30 44V4M20 44V-6M50 44V-34M80 44V-34" stroke="#b87333" stroke-width="2" fill="none"/><rect x="-80" y="-36" width="56" height="40" rx="3" fill="#9aa3ab" stroke="#59616b"/>${[...Array(7)].map((_,i)=>`<path d="M${-76+i*8} 2L${-70+i*8} -34" stroke="#c8702a" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="-82" y="${arm}" width="64" height="7" rx="2" fill="#6b7684"/><path d="M-18 ${arm+3}H20V-6" stroke="#8a8a8a" stroke-dasharray="3 3" fill="none"/><circle cx="50" cy="-34" r="4" fill="#d4af37"/><circle cx="80" cy="-34" r="4" fill="#d4af37"/><line x1="20" y1="-6" x2="${tip[0]}" y2="${tip[1]}" stroke="#444" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="-6" r="4" fill="#444"/><circle cx="70" cy="-50" r="5" fill="${on?'#43d17a':'#555'}"/>${txt(-60,28,'A1',8,'#222')}${txt(-30,28,'A2',8,'#222')}${txt(20,28,'11',8,'#222')}${txt(50,28,'14',8,'#222')}${txt(80,28,'12',8,'#222')}${txt(-45,-50,'BOBINE',7,'#234')}${txt(50,-50,'CONTACT',7,'#234')}${[-60,-30,20,50,80].map(x=>jack(x,44,'#bdbdbd')).join('')}`}
 else if(c.type==='ctc'){const on=c.on,y=on?-20:-36,arm=on?-44:-54;
  s=`<rect x="-110" y="-60" width="220" height="120" rx="8" fill="#aab3bb" stroke="#59616b" stroke-width="2"/><path d="M-90 44V4M-60 44V4M-20 44V-20M10 44V-20M45 44V-20M75 44V-20" stroke="#b87333" stroke-width="2" fill="none"/><rect x="-104" y="-38" width="56" height="42" rx="3" fill="#7d8791" stroke="#434a52"/>${[...Array(7)].map((_,i)=>`<path d="M${-100+i*8} 2L${-94+i*8} -36" stroke="#c8702a" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="-106" y="${arm}" width="60" height="7" rx="2" fill="#4a525a"/><path d="M-46 ${arm+3}H-34V${y}M14 ${y}H41" stroke="#333" stroke-dasharray="3 3" fill="none"/><circle cx="-20" cy="-20" r="4" fill="#d4af37"/><circle cx="10" cy="-20" r="4" fill="#d4af37"/><circle cx="45" cy="-20" r="4" fill="#d4af37"/><circle cx="75" cy="-20" r="4" fill="#d4af37"/><rect x="-24" y="${y-4}" width="38" height="8" rx="2" fill="#dfe4e8" stroke="#59616b"/><rect x="41" y="${y-4}" width="38" height="8" rx="2" fill="#dfe4e8" stroke="#59616b"/><circle cx="95" cy="-48" r="5" fill="${on?'#43d17a':'#555'}"/>${txt(-70,-48,'CONTACTEUR · 2 NO',8,'#234')}${['A1','A2','13','14','23','24'].map((l,i)=>txt(GEO.ctc.t[i][0],28,l,8,'#222')).join('')}${GEO.ctc.t.map(t=>jack(t[0],t[1],'#bdbdbd')).join('')}`}
 else if(c.type==='res'){const b=bands(c.val);
  s=`<rect x="-70" y="-20" width="140" height="40" rx="6" fill="#e5dcc6" stroke="#8d7f5c" stroke-width="2"/><path d="M-52 0H-26M26 0H52" stroke="#8a8a8a" stroke-width="4"/><rect x="-26" y="-11" width="52" height="22" rx="10" fill="#e6c9a0" stroke="#8a6d3b" stroke-width="1.5"/>${[[-17,b[0]],[-8,b[1]],[1,b[2]],[16,'#d4af37']].map(([x,cl])=>`<rect x="${x}" y="-11" width="5" height="22" fill="${cl}"/>`).join('')}${jack(-52,0,'#bdbdbd')}${jack(52,0,'#bdbdbd')}${txt(0,17,fmt(c.val,'Ω'),9,'#5b4f30')}`}
 else if(c.type==='bulb'){const pnom=c.val,b=Math.min(1,Math.abs(c.P||0)/pnom),hot=Math.abs(c.P||0)>pnom*2.5;
  s=`<circle cy="-26" r="${26+b*22}" fill="rgba(255,210,60,${(b*.45).toFixed(2)})"/><rect x="-42" y="12" width="84" height="42" rx="6" fill="#4a4f57" stroke="#22262b" stroke-width="2"/><rect x="-16" y="-2" width="32" height="14" fill="#b9bcc2" stroke="#6e7177"/><path d="M-16 3H16M-16 8H16" stroke="#6e7177"/><circle cy="-26" r="26" fill="${b>.02?`rgba(255,${Math.round(240-b*50)},${Math.round(170-b*90)},${(.4+.6*b).toFixed(2)})`:'rgba(205,225,240,.35)'}" stroke="#7b8794" stroke-width="2"/><path d="M-8 -4L-6 -28L0 -18L6 -28L8 -4" fill="none" stroke="${b>.02?'#fff3c4':'#8a8a8a'}" stroke-width="2"/>${jack(-26,40,'#bdbdbd')}${jack(26,40,'#bdbdbd')}${hot?txt(0,-62,'surtension !',12,'#d32f2f'):''}`}
 else if(c.type==='sw'){
  s=`<rect x="-60" y="-30" width="120" height="64" rx="8" fill="#c9ced6" stroke="#6b7684" stroke-width="2"/><rect x="-14" y="-24" width="28" height="36" rx="5" fill="#2b2f36"/><line x1="0" y1="-6" x2="0" y2="${c.closed?-18:6}" stroke="#e53935" stroke-width="10" stroke-linecap="round"/>${txt(28,-12,'ON',10,'#333')}${txt(30,10,'OFF',10,'#333')}${jack(-42,22,'#bdbdbd')}${jack(42,22,'#bdbdbd')}`}
 else if(c.ana){const A=c.type==='amp',R=A?RA:RV,u=A?'A':'V',val=err?0:(c.mode==='AC'?(A?c.Ia:c.Ua):(A?-c.I:-c.U))||0,fr=Math.max(-.12,Math.min(1.12,val/c.rng)),ang=-48+fr*96,
  pol=(a,r)=>[(r*Math.sin(a*Math.PI/180)).toFixed(1),(8-r*Math.cos(a*Math.PI/180)).toFixed(1)],
  tk=[...Array(51)].map((_,i)=>{const a=-48+i*96/50,p1=pol(a,74),p2=pol(a,i%5?69:63);return`<path d="M${p1[0]} ${p1[1]}L${p2[0]} ${p2[1]}" stroke="#222" stroke-width="${i%5?1:1.6}"/>`}).join(''),
  nm=[0,20,40,60,80,100].map(n=>{const p=pol(-48+n*.96,54);return txt(p[0],+p[1]+3,n,8,'#222')}).join(''),
  ka=i=>-120+i*240/(R.length-1),
  kl=R.map((r,i)=>txt((40*Math.sin(ka(i)*Math.PI/180)).toFixed(1),(60-40*Math.cos(ka(i)*Math.PI/180)).toFixed(1),fmt(r,u).replace(' ',''),6.5,'#222')).join('');
  s=`<rect x="-95" y="-100" width="190" height="215" rx="18" fill="#f2b705" stroke="#8a6500" stroke-width="3"/><rect x="-75" y="-90" width="150" height="100" rx="6" fill="#f7f4e6" stroke="#333" stroke-width="2"/>${tk}${nm}${txt(-62,-76,'COM',9,'#111','start')}${txt(62,-76,u,9,'#111','end')}${txt(0,-34,u,16,'#111')}${txt(-64,4,c.mode==='AC'?'AC ~':'DC =',7,'#c62828','start')}${Math.abs(fr)>1.1?txt(0,-14,'SURCHARGE',8,'#c62828'):''}<line x1="0" y1="0" x2="0" y2="-68" stroke="#111" stroke-width="2" transform="translate(0 8) rotate(${ang})"/><circle cx="0" cy="8" r="5" fill="#111"/><circle cx="0" cy="58" r="30" fill="#1c1c1c" stroke="#000" stroke-width="2"/>${kl}<line x1="0" y1="-4" x2="0" y2="-24" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="translate(0 58) rotate(${ka(Math.max(0,R.indexOf(c.rng)))})"/>${jack(-25,98,'#1b1b1b')}${jack(25,98,'#d32f2f')}`}
 else{const A=c.type==='amp';
  s=`<rect x="-48" y="-75" width="96" height="150" rx="12" fill="#f4b400" stroke="#7a5a00" stroke-width="2"/><rect x="-38" y="-65" width="76" height="34" rx="4" fill="#c9d8b6" stroke="#333" stroke-width="2"/>${txt(33,-40,reading(c),15,'#14210c','end','ui-monospace,Consolas,monospace')}${txt(-34,-55,c.mode==='AC'?'AC ~':'DC =',8,'#14210c','start')}<circle cy="6" r="21" fill="#2b2b2b" stroke="#111" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="-16" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="translate(0 6) rotate(${(A?1:-1)*(c.mode==='AC'?75:40)})"/>${[['V=',-40],['V~',-75],['A=',40],['A~',75]].map(([l,d])=>txt((32*Math.sin(d*Math.PI/180)).toFixed(1),(9-32*Math.cos(d*Math.PI/180)).toFixed(1),l,9,'#222')).join('')}${txt(-24,44,'COM',9,'#222')}${txt(24,44,A?'A':'V',10,'#b71c1c')}${jack(-24,62,'#1b1b1b')}${jack(24,62,'#d32f2f')}`}
 return s}
/* ---- géométrie des câbles : Câble (courbe par des points), Droit, Orthogonal ---- */
const wmode=w=>(w&&w.mode)||'cable',lerpP=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
const cub=(p0,c1,c2,p1,t)=>{const u=1-t;return{x:u*u*u*p0.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*p1.x,y:u*u*u*p0.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*p1.y}};
function orthPts(w,a,b){const o=w.os||{},y1=o.y1!==undefined?o.y1:a.y+20,x2=o.x2!==undefined?o.x2:(a.x+b.x)/2,y3=o.y3!==undefined?o.y3:b.y+20;return[a,{x:a.x,y:y1},{x:x2,y:y1},{x:x2,y:y3},{x:b.x,y:y3},b]}
function crSeg(P,i){const p1=P[i],p2=P[i+1],p0=P[i-1]||{x:2*p1.x-p2.x,y:2*p1.y-p2.y},p3=P[i+2]||{x:2*p2.x-p1.x,y:2*p2.y-p1.y};return[p1,{x:p1.x+(p2.x-p0.x)/6,y:p1.y+(p2.y-p0.y)/6},{x:p2.x-(p3.x-p1.x)/6,y:p2.y-(p3.y-p1.y)/6},p2]}
function cableSegs(w,a,b){const pts=w.pts||[];if(!pts.length){const d=30+Math.hypot(b.x-a.x,b.y-a.y)*.18;return[[a,{x:a.x,y:a.y+d},{x:b.x,y:b.y+d},b]]}const P=[a,...pts,b];return P.slice(0,-1).map((_,i)=>crSeg(P,i))}
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
function render(){
 solve();let s='<defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="var(--grid)"/></pattern></defs><rect width="900" height="600" fill="url(#g)"/>'+noteSvg('r')+tgtLinks();
 comps.forEach(c=>{const[bx,by,bw,bh]=geo(c).b,on=sel===c.id;let lab='';
  if(theory&&c.U!==undefined&&!err&&c.type!=='amp'&&!['watt','gbf','scope','pince','com','rel','ctc','a3','sv','sc','tach','cpm'].includes(c.type))lab=c.type==='sw'?'':(c.type==='cch'||c.type==='m3')?fmt(c.P,'W')+(c.type==='m3'?' · '+Math.round(c.rpm||0)+' tr/min':''):`${fmt(c.Ur,'V')} · ${fmt(c.Ir,'A')}`+((c.type==='mdc'||c.type==='mac')?' · '+Math.round(c.rpm||0)+' tr/min':'');
  s+=`<g transform="translate(${c.x} ${c.y})" data-c="${c.id}" style="cursor:grab">${body(c)}<rect x="${bx-4}" y="${by-4}" width="${bw+8}" height="${bh+8}" rx="10" fill="transparent" stroke="${on?'var(--acc)':'none'}" stroke-dasharray="5 4" stroke-width="2"/>${txt(0,by+bh+20,lab,12,'var(--ink)')}</g>`});
 const plug=(k,p,colr)=>{const[id,ii]=k.split(':'),c=comps.find(c=>c.id==id);if(c&&geo(c).t[+ii][2]==='b'){const y=(+ii)%2?p.y:p.y-15;return`<circle cx="${p.x}" cy="${y}" r="14" fill="#23272d" stroke="#9aa0a8" stroke-width="3"/><circle cx="${p.x}" cy="${y}" r="7" fill="${colr}"/>`}return`<circle cx="${p.x}" cy="${p.y}" r="7" fill="${colr}" stroke="rgba(120,120,120,.7)" stroke-width="1.5"/>`};
 wires.forEach((w,i)=>{if(w.hide)return;const a=tp(w.a),b=tp(w.b);if(!a||!b)return;const d=cable(a,b,w),on=selW===i,sw=w.coax?7:5;
  s+=`<path d="${d}" fill="none" stroke="${on?'var(--acc)':'rgba(120,120,120,.55)'}" stroke-width="${sw+3}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${w.col}" stroke-width="${sw}" stroke-linecap="round"/><path d="${d}" data-w="${i}" fill="none" stroke="transparent" stroke-width="16"/>`+plug(w.a,a,w.col)+plug(w.b,b,w.col)});
 s+=noteSvg('t')+clampFronts()+handlesSvg();if(pend){const a=tp(pend);if(a)s+=`<path d="M${a.x} ${a.y}L${mouse.x} ${mouse.y}" stroke="var(--acc)" stroke-dasharray="5 4" stroke-width="3"/>`}
 comps.forEach(c=>geo(c).t.forEach((tt,i)=>{const p=T(c,i),k=c.id+':'+i,cl=pend===k?'':'hj';
  if(tt[2]==='b')s+=i%2?`<circle class="${cl}" cx="${p.x}" cy="${p.y}" r="6" data-t="${k}" fill="rgba(25,118,210,.3)" stroke="#1976d2" stroke-width="2" style="cursor:crosshair"/>`:`<circle class="${cl}" cx="${p.x}" cy="${p.y-15}" r="14" data-t="${k}" fill="none" stroke="rgba(25,118,210,.35)" stroke-width="14" style="cursor:crosshair"/>`;
  else s+=`<circle class="${cl}" cx="${p.x}" cy="${p.y}" r="12" data-t="${k}" fill="rgba(25,118,210,.18)" stroke="#1976d2" stroke-width="2" style="cursor:crosshair"/>`}));
 cv.innerHTML=s;st.textContent=err||(comps.length?(pend?'Clique sur une autre prise pour finir le câble':'Simulation en cours ✓'):'Ajoute des appareils pour commencer');st.className=err?'err':'';
 const o=document.getElementById('ro'),c=comps.find(c=>c.id===sel);if(o&&c)o.textContent=(theory&&!err)?`U = ${fmt(c.Ur,'V')} · I = ${fmt(c.Ir,'A')} · P = ${fmt(c.P,'W')} (valeurs efficaces)`:'';
}
const esc_=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function noteSvg(k){return notes.map((n,i)=>{if(n.k!==k)return'';const on=selN===i;
 if(k==='r')return`<g data-nt="${i}" style="cursor:move"><rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="6" fill="${n.col}" fill-opacity=".05" stroke="${n.col}" stroke-width="${on?3:2}" stroke-dasharray="9 6"/>${n.t?`<text x="${n.x+8}" y="${n.y+16}" font-size="13" font-weight="700" fill="${n.col}" stroke="none" font-family="system-ui">${esc_(n.t)}</text>`:''}${on?`<rect data-rz="${i}" x="${n.x+n.w-7}" y="${n.y+n.h-7}" width="14" height="14" fill="${n.col}" style="cursor:nwse-resize"/>`:''}</g>`;
 const L=n.t.split('\n');return`<g data-nt="${i}" style="cursor:move">${on?`<rect x="${n.x-4}" y="${n.y-n.s}" width="${Math.max(...L.map(l=>l.length),1)*n.s*.6+8}" height="${L.length*(n.s+4)+2}" fill="none" stroke="var(--acc)" stroke-dasharray="4 3"/>`:''}${L.map((l,j)=>`<text x="${n.x}" y="${n.y+j*(n.s+4)}" font-size="${n.s}" fill="${n.col}" font-family="system-ui" font-weight="600" stroke="none">${esc_(l)}</text>`).join('')}</g>`}).join('')}
function handlesSvg(){if(selW===null)return'';const w=wires[selW];if(!w||w.hide)return'';const a=tp(w.a),b=tp(w.b);if(!a||!b)return'';const m=wmode(w);let h='';
 const dot=(x,y,at)=>`<circle ${at} cx="${x}" cy="${y}" r="8" fill="#fb8c00" stroke="#fff" stroke-width="2" style="cursor:move"/>`;
 if(m==='cable')(w.pts||[]).forEach((p,i)=>{h+=dot(p.x,p.y,`data-hk="p:${i}"`)});
 else if(m==='ortho'){const P=orthPts(w,a,b);if(Math.abs(P[1].x-P[2].x)>12)h+=dot((P[1].x+P[2].x)/2,P[1].y,'data-ho="1"');if(Math.abs(P[2].y-P[3].y)>12)h+=dot(P[2].x,(P[2].y+P[3].y)/2,'data-ho="2"');if(Math.abs(P[3].x-P[4].x)>12)h+=dot((P[3].x+P[4].x)/2,P[3].y,'data-ho="3"')}
 return h}
function tgtLinks(){return comps.filter(c=>(c.type==='tach'||c.type==='cpm')&&c.tgt).map(c=>{const m=comps.find(x=>x.id===c.tgt);return m?`<path d="M${c.x} ${c.y}L${m.x} ${m.y-14}" stroke="${c.type==='tach'?'#ff3b30':'#7c4dff'}" stroke-width="2" stroke-dasharray="5 4" opacity=".8"/>`:''}).join('')}
function clampFronts(){return comps.filter(c=>(c.type==='pince'||c.type==='sc')&&c.cl).map(c=>{const sc=c.type==='sc',R=sc?20:31,sw=sc?12:20,th=c.cl.ang,P=(r,d)=>[(r*Math.cos((th+d)*Math.PI/180)).toFixed(1),(r*Math.sin((th+d)*Math.PI/180)).toFixed(1)],arc=r=>{const a=P(r,90),b=P(r,270);return`M${a[0]} ${a[1]}A${r} ${r} 0 0 1 ${b[0]} ${b[1]}`};
 return`<g transform="translate(${c.x} ${c.y})" data-c="${c.id}" style="cursor:grab"><path d="${arc(R)}" fill="none" stroke="${sc?'#e0b100':'#f2c200'}" stroke-width="${sw}"/><path d="${arc(R+sw/2)}" fill="none" stroke="#7a5f00" stroke-width="1.5"/><path d="${arc(R-sw/2)}" fill="none" stroke="#7a5f00" stroke-width="1.5"/></g>`}).join('')}
function autoUnit(c,p,U){if(c.u&&c.u[p]!==undefined)return c.u[p];const v=Math.abs(c[p]);if(!v)return U.findIndex(u=>u[1]===1);let k=0;U.forEach((u,i)=>{if(v>=u[1]*.9995)k=i});return k}
function fieldH(c,[p,l,U,o]){const k=autoUnit(c,p,U),log=o.sl==='log';
 return`<label>${l} <input type="number" data-n="${p}" step="any" value="${+(c[p]/U[k][1]).toPrecision(6)}"> <select data-un="${p}">${U.map((u,i)=>`<option value="${i}"${i===k?' selected':''}>${u[0]}</option>`).join('')}</select></label>`+(o.sl?(log?`<input type="range" data-sl="${p}" data-log="1" min="${Math.log10(o.min)}" max="${Math.log10(o.max)}" step="0.01" value="${Math.log10(c[p])}">`:`<input type="range" data-sl="${p}" min="${o.sl[0]}" max="${o.sl[1]}" step="${o.sl[2]}" value="${c[p]}">`):'')}
function bindU(root,c,cb){const def=p=>FIELDS[c.type].find(f=>f[0]===p),
 sync=skip=>{root.querySelectorAll('[data-n]').forEach(i=>{if(i===skip)return;const p=i.dataset.n,s=root.querySelector('[data-un="'+p+'"]');i.value=+(c[p]/def(p)[2][+s.value][1]).toPrecision(6)});root.querySelectorAll('[data-sl]').forEach(r=>{const p=r.dataset.sl;r.value=r.dataset.log?Math.log10(c[p]):c[p]})};
 root.querySelectorAll('[data-n]').forEach(i=>i.oninput=()=>{const p=i.dataset.n,d=def(p),s=root.querySelector('[data-un="'+p+'"]'),v=parseFloat(i.value);if(isNaN(v))return;let x=v*d[2][+s.value][1];const o=d[3];if(o.min!==undefined&&x<o.min)return;if(o.max!==undefined)x=Math.min(x,o.max);c[p]=x;sync(i);cb()});
 root.querySelectorAll('[data-un]').forEach(s=>s.onchange=()=>{const p=s.dataset.un;c.u=c.u||{};c.u[p]=+s.value;sync();cb()});
 root.querySelectorAll('[data-sl]').forEach(r=>r.oninput=()=>{const p=r.dataset.sl,v=parseFloat(r.value);c[p]=r.dataset.log?+Math.pow(10,v).toPrecision(3):v;sync();cb()})}
const DISP=[['W','W – puissance active P'],['VAr','VAr – puissance réactive Q'],['VA','VA – puissance apparente S'],['PF','PF – facteur de puissance'],['V','V – tension efficace'],['A','A – courant']];
function panel(){
 if(selN!==null&&notes[selN]){const n=notes[selN];
  pn.innerHTML=n.k==='r'?`<b>Rectangle de repérage</b><label>Titre <input id="nt" type="text" value="${esc_(n.t)}"></label><label>Couleur <input id="nc" type="color" value="${n.col}"></label><button id="dn">Supprimer</button><span class="mut">Glisse le carré en bas à droite pour redimensionner.</span>`
   :`<b>Texte</b><label><textarea id="nt" rows="2">${esc_(n.t)}</textarea></label><label>Taille <select id="ns">${[12,16,20,28].map(x=>`<option${x===n.s?' selected':''}>${x}</option>`).join('')}</select></label><label>Couleur <input id="nc" type="color" value="${n.col}"></label><button id="dn">Supprimer</button>`;
  document.getElementById('nt').oninput=e=>{n.t=e.target.value;render()};document.getElementById('nc').oninput=e=>{n.col=e.target.value;render()};const ns=document.getElementById('ns');if(ns)ns.onchange=()=>{n.s=+ns.value;render()};document.getElementById('dn').onclick=delSel;return}
 const c=comps.find(c=>c.id===sel);
 if(!c){if(selW!==null){const w=wires[selW],m=wmode(w);pn.innerHTML=(w.coax?'<b>Câble coaxial BNC–BNC</b>':'<b>Câble</b>'+COLS.map((k,i)=>`<button class="sw" data-k="${i}" style="background:${k}"></button>`).join(''))+`<span>${[['cable','⌒ Câble'],['line','╱ Droit'],['ortho','⌐ Orthogonal']].map(([k,l])=>`<button data-md="${k}" class="${m===k?'p':''}">${l}</button>`).join(' ')}</span><button id="rs">Réinitialiser le tracé</button><button id="dw">Supprimer</button><span class="mut">${m==='cable'?'Glisse le câble pour créer un point orange, glisse un point pour le déplacer ; les losanges ajoutent un point (double-clic sur un point = le retirer).':m==='ortho'?'Glisse les losanges pour déplacer un segment perpendiculairement à lui-même.':'Le câble relie directement les deux bornes.'}</span>`;
   pn.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{wires[selW].col=COLS[b.dataset.k];render()});pn.querySelectorAll('[data-md]').forEach(b=>b.onclick=()=>{w.mode=b.dataset.md;panel();render()});document.getElementById('dw').onclick=delSel;document.getElementById('rs').onclick=()=>{delete w.pts;delete w.os;render()}}
  else pn.textContent='Choisis un appareil dans le menu de gauche (☰ sur téléphone). Clique une prise puis une autre pour brancher un câble (BNC : centre = âme, collerette = masse ; BNC → BNC = coaxial). Glisse un appareil ou un câble pour le déplacer.';return}
 const I=INFO[c.type];let h=`<b>${c.ana?(c.type==='amp'?'Ampèremètre à aiguille':'Voltmètre à aiguille'):I.n}</b>`;
 if(FIELDS[c.type])h+=FIELDS[c.type].map(f=>fieldH(c,f)).join('');
 if(c.type==='gbf')h+=`<label>Forme ${selH('wave',[['sin','Sinus'],['sq','Carré'],['tri','Triangle']],c.wave)}</label>`;
 if(c.type==='scope')h+=scopeCtl(c)+'<button id="zm">Écran agrandi + curseurs</button>';
 if(c.ana)h+=`<label>Calibre ${selH('rng',(c.type==='amp'?RA:RV).map(x=>[x,fmt(x,c.type==='amp'?'A':'V')]),c.rng)}</label>`;
 if(c.type==='cch')h+=`<label>Branchement ${selH('cm',[['mono','Monophasé / continu (bornes M1, M2)'],['tri','Triphasé (bornes L1, L2, L3)']],c.cm)}</label>`;
 if(c.type==='m3')h+=`<label>Couplage ${selH('cpl',[['Y','Étoile (Y)'],['D','Triangle (Δ)']],c.cpl)}</label>`;
 if(c.type==='sv')h+=`<label>Rapport ${selH('ratio',[[10,'÷ 10'],[100,'÷ 100']],c.ratio)}</label>`;
 if(c.type==='sc')h+=`<label>Rapport ${selH('ratio',[[10,'÷ 10 (100 mV/A)'],[100,'÷ 100 (10 mV/A)'],[300,'÷ 300 (3,33 mV/A)']],c.ratio)}</label><button id="rv">Inverser le sens de la pince</button><span class="mut">Pose la sonde sur un câble.</span>`;
 if(c.type==='tach'||c.type==='cpm')h+=`<span class="mut">Pose l’appareil près d’un moteur (à moins de ~100 px) : un trait pointillé le relie au moteur mesuré.</span>`;
 if(c.type==='watt'||c.type==='pince')h+=`<label>Affichage ${selH('disp',DISP,c.disp)}</label>`;
 if(c.type==='amp'||c.type==='volt'||c.type==='pince')h+=`<button id="md">Mode : ${c.mode==='AC'?'AC ~ (eff.)':'DC ='}</button>`;
 if(c.type==='pince')h+=`<button id="rv">Inverser le sens de la pince</button><span class="mut">Pose la pince sur un câble.</span>`;
 if(c.type==='sw')h+=`<button id="tg">${c.closed?'Ouvrir':'Fermer'}</button>`;
 if(c.type==='com')h+=`<button id="tg">Basculer (position ${c.pos?'B':'A'})</button>`;
 if(c.type==='rel'||c.type==='ctc')h+=`<span class="mut">Contact : ${c.on?'collé (travail)':'repos'} · colle à 80 % de la tension bobine</span>`;
 h+=`<span id="ro" class="mut"></span><button id="dl">Supprimer</button>`;pn.innerHTML=h;
 bindP(pn,c,render);bindU(pn,c,render);
 const cmS=pn.querySelector('[data-p="cm"]');if(cmS)cmS.addEventListener('change',()=>{c.un=c.cm==='tri'?400:230;panel();render()});
 const md=document.getElementById('md');if(md)md.onclick=()=>{c.mode=c.mode==='AC'?'DC':'AC';panel();render()};
 const rv=document.getElementById('rv');if(rv)rv.onclick=()=>{c.rev=!c.rev;render()};
 const zm=document.getElementById('zm');if(zm)zm.onclick=()=>openOv(c);
 const tg=document.getElementById('tg');if(tg)tg.onclick=()=>{if(c.type==='com')c.pos=c.pos?0:1;else c.closed=!c.closed;panel();render()};
 document.getElementById('dl').onclick=delSel;render()}
function delSel(){if(sel!==null){wires=wires.filter(w=>!w.a.startsWith(sel+':')&&!w.b.startsWith(sel+':'));comps=comps.filter(c=>c.id!==sel);sel=null}
 else if(selW!==null){const w0=wires[selW];wires=wires.filter(x=>x!==w0&&!(w0.pair&&x.pair===w0.pair));selW=null}
 else if(selN!==null){notes.splice(selN,1);selN=null}pend=null;panel();render()}
/* ---- Interactions ---- */
const pt=e=>{const p=cv.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(cv.getScreenCTM().inverse())};
let hd=null,ndrag=null,rz=null;
cv.addEventListener('pointerdown',e=>{const X=e.target,t=X.closest('[data-t]'),hk=X.closest('[data-hk]'),ho=X.closest('[data-ho]'),rzz=X.closest('[data-rz]'),c=X.closest('[data-c]'),w=X.closest('[data-w]'),nt=X.closest('[data-nt]');mouse=pt(e);
 if(t){const k=t.dataset.t;if(!pend)pend=k;else{if(pend!==k&&!wires.some(x=>(x.a===pend&&x.b===k)||(x.a===k&&x.b===pend)))connect(pend,k);pend=null}render();return}
 if(hk&&selW!==null){const w2=wires[selW],pr=hk.dataset.hk.split(':'),i=+pr[1];if(pr[0]==='g'){w2.pts=w2.pts||[];w2.pts.splice(i,0,{x:mouse.x,y:mouse.y})}hd={w:w2,t:'p',i};return}
 if(ho&&selW!==null){hd={w:wires[selW],t:'o',k:+ho.dataset.ho};return}
 if(rzz){rz={n:notes[+rzz.dataset.rz]};return}
 if(c){const o=comps.find(o=>o.id==c.dataset.c);pend=null;sel=o.id;selW=null;selN=null;drag={o,dx:mouse.x-o.x,dy:mouse.y-o.y,moved:false};panel();return}
 if(w){pend=null;selW=+w.dataset.w;sel=null;selN=null;const ww=wires[selW];wd={w:ww,sx:mouse.x,sy:mouse.y};panel();render();return}
 if(nt){const n=notes[+nt.dataset.nt];pend=null;sel=null;selW=null;selN=+nt.dataset.nt;ndrag={n,dx:mouse.x-n.x,dy:mouse.y-n.y};panel();render();return}
 pend=null;selW=null;sel=null;selN=null;panel();render()});
window.addEventListener('pointermove',e=>{if(!drag&&!pend&&!wd&&!hd&&!ndrag&&!rz)return;mouse=pt(e);
 if(hd){if(hd.t==='p'){hd.w.pts[hd.i]={x:mouse.x,y:mouse.y}}else{const a=tp(hd.w.a),b=tp(hd.w.b),P=orthPts(hd.w,a,b),o=hd.w.os=hd.w.os||{};if(o.y1===undefined){o.y1=P[1].y;o.x2=P[2].x;o.y3=P[3].y}
   if(hd.k===1)o.y1=Math.round(mouse.y/10)*10;else if(hd.k===2)o.x2=Math.round(mouse.x/10)*10;else o.y3=Math.round(mouse.y/10)*10}render();return}
 if(wd){if(wmode(wd.w)==='cable'&&Math.hypot(mouse.x-wd.sx,mouse.y-wd.sy)>4){const w=wd.w,a=tp(w.a),b=tp(w.b),N=[a,...(w.pts||[]),b];let bi=0,bd=1e9;for(let i=0;i<N.length-1;i++){const d=segDist({x:wd.sx,y:wd.sy},N[i],N[i+1]);if(d<bd){bd=d;bi=i}}
   w.pts=w.pts||[];w.pts.splice(bi,0,{x:mouse.x,y:mouse.y});hd={w,t:'p',i:bi};wd=null;render()}return}
 if(ndrag){ndrag.n.x=Math.round((mouse.x-ndrag.dx)/10)*10;ndrag.n.y=Math.round((mouse.y-ndrag.dy)/10)*10;render();return}
 if(rz){rz.n.w=Math.max(40,mouse.x-rz.n.x);rz.n.h=Math.max(30,mouse.y-rz.n.y);render();return}
 if(drag){drag.moved=true;const bb=geo(drag.o).b;drag.o.x=Math.max(10-bb[0],Math.min(890-bb[0]-bb[2],Math.round((mouse.x-drag.dx)/20)*20));drag.o.y=Math.max(10-bb[1],Math.min(590-bb[1]-bb[3],Math.round((mouse.y-drag.dy)/20)*20));render()}else render()});
window.addEventListener('pointerup',()=>{wd=null;hd=null;ndrag=null;rz=null;if(drag){const c=drag.o;
 if(!drag.moved){if(c.type==='sw'){c.closed=!c.closed;panel();render()}else if(c.type==='com'){c.pos=c.pos?0:1;panel();render()}
  else if(c.type==='watt'){const h=[['W',-124],['VAr',-96],['VA',-68],['PF',-40],['V',-4],['A',24]].find(([l,x])=>drag.dx>=x&&drag.dx<=x+24&&drag.dy>=22&&drag.dy<=40);if(h){c.disp=h[0];panel();render()}}}
 else if(c.type==='pince'||c.type==='sc'){const k=clampOf(c);if(k){c.x=k.pt.x;c.y=k.pt.y;render()}}}
 drag=null});
window.addEventListener('keydown',e=>{if((e.key==='Delete'||e.key==='Backspace')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))delSel();if(e.key==='Escape'){pend=null;render()}});
const MENU=[['Alimentations',[['bat','Alimentation continue 0–30 V'],['ac','Alimentation alternative 0–230 V'],['gbf','GBF (générateur de fonctions)'],['a3','Alimentation triphasée 400 V']]],
 ['Charges',[['res','Résistance'],['bulb','Ampoule'],['led','Lampe à LED'],['cfl','Lampe fluocompacte'],['cap','Condensateur'],['ind','Bobine'],['mdc','Moteur à courant continu'],['mac','Moteur monophasé (cos φ 0,82)'],['m3','Moteur asynchrone triphasé 1,5 kW'],['cch','Caisse de charge 0–4 kW']]],
 ['Commandes',[['sw','Interrupteur'],['com','Commutateur 2 voies'],['rel','Relais (bobine + contact)'],['ctc','Contacteur (2 contacts NO)']]],
 ['Appareils de mesure',[['amp','Multimètre – ampèremètre'],['volt','Multimètre – voltmètre'],['amp','Ampèremètre à aiguille',1],['volt','Voltmètre à aiguille',1],['watt','Wattmètre ISW8000'],['pince','Pince ampèremétrique'],['sv','Sonde de tension ÷10 / ÷100'],['sc','Sonde de courant ÷10 / ÷100 / ÷300'],['tach','Compte-tours'],['cpm','Couple-mètre'],['scope','Oscilloscope 2 voies']]],
 ['Repérage',[['#r','Rectangle pointillé'],['#t','Texte']]]];
const menuEl=document.getElementById('menu'),side=document.getElementById('side');
function addNote(k){notes.push(k==='r'?{k,x:300,y:200,w:220,h:130,col:'#7c4dff',t:''}:{k,x:320,y:240,t:'Texte',s:16,col:'#1976d2'});sel=null;selW=null;selN=notes.length-1;panel();render()}
function menuClick(b){const it=MENU[+b.dataset.g][1][+b.dataset.i],t=it[0];
 if(t[0]==='#')addNote(t==='#r'?'r':'t');else{const n=comps.length,c=add(t,150+(n%5)*140,140+(Math.floor(n/5)%3)*150);if(it[2]){c.ana=1;panel();render()}}
 side.classList.remove('open')}
cv.addEventListener('dblclick',e=>{const k=e.target.closest('[data-hk]');if(k&&k.dataset.hk[0]==='p'&&selW!==null){wires[selW].pts.splice(+k.dataset.hk.split(':')[1],1);render()}});
document.getElementById('mb').onclick=()=>side.classList.toggle('open');
document.getElementById('clr').onclick=()=>{comps=[];wires=[];notes=[];sel=selW=selN=pend=null;panel();render()};
document.getElementById('th').onchange=e=>{theory=e.target.checked;render()};
function example(){comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',160,300),s=add('sw',400,120),l=add('bulb',640,150),a=add('amp',440,380),v=add('volt',790,300);s.closed=true;l.val=10;l.un=9;
 wire(b.id+':1',s.id+':0');wire(s.id+':1',l.id+':0');wire(l.id+':1',a.id+':1');wire(a.id+':0',b.id+':0');wire(v.id+':1',l.id+':0');wire(v.id+':0',l.id+':1');
 sel=null;panel();render()}
document.getElementById('ex').onclick=example;
let ovId=null,cuDrag=null;const ov=document.getElementById('ov'),ovs=document.getElementById('ovs'),ovr=document.getElementById('ovr'),ovctl=document.getElementById('ovctl');
function openOv(c){ovId=c.id;ov.style.display='block';ovctl.innerHTML=scopeCtl(c)+`<label>Curseurs V sur ${selH('cch',[[1,'CH1'],[2,'CH2']],c.cch)}</label>`;bindP(ovctl,c,()=>{render();renderOv()});renderOv()}
function closeOv(){ovId=null;ov.style.display='none'}
document.getElementById('ovc').onclick=closeOv;window.addEventListener('keydown',e=>{if(e.key==='Escape')closeOv()});
function renderOv(){const c=comps.find(c=>c.id===ovId);if(!c){closeOv();return}const S=60,cu=c.cur,vd=c.cch===2?c.v2:c.v1,pos=c.cch===2?c.pos2:c.pos1;
 let g='';for(let i=0;i<=10;i++)g+=`M${i*S} 0V480`;for(let j=0;j<=8;j++)g+=`M0 ${j*S}H600`;
 for(let i=0;i<50;i++){g+=`M${i*12} 236V244`}for(let j=0;j<40;j++){g+=`M296 ${j*12}H304`}
 const xl=(k,col)=>`<line x1="${cu[k]*S}" x2="${cu[k]*S}" y1="0" y2="480" stroke="${col}" stroke-width="1.5" stroke-dasharray="6 4"/><line data-cu="${k}" x1="${cu[k]*S}" x2="${cu[k]*S}" y1="0" y2="480" stroke="transparent" stroke-width="22" style="cursor:ew-resize"/><text x="${cu[k]*S+4}" y="12" fill="${col}" font-size="12" font-weight="700">${k.toUpperCase()}</text>`,
  yl=(k,col)=>`<line y1="${240-cu[k]*S}" y2="${240-cu[k]*S}" x1="0" x2="600" stroke="${col}" stroke-width="1.5" stroke-dasharray="6 4"/><line data-cu="${k}" y1="${240-cu[k]*S}" y2="${240-cu[k]*S}" x1="0" x2="600" stroke="transparent" stroke-width="22" style="cursor:ns-resize"/><text x="4" y="${236-cu[k]*S}" fill="${col}" font-size="12" font-weight="700">${k.toUpperCase()}</text>`;
 ovs.innerHTML=`<rect width="640" height="520" fill="#101614" rx="8"/><g transform="translate(20 20)"><rect width="600" height="480" fill="#06100a" stroke="#555"/><path d="${g}" stroke="rgba(120,200,140,.28)" fill="none"/><path d="M300 0V480M0 240H600" stroke="rgba(120,200,140,.55)" fill="none"/>${traces(c,S)}${xl('x1','#ff9800')}${xl('x2','#ff5722')}${yl('y1','#e040fb')}${yl('y2','#7c4dff')}</g>`;
 const dT=Math.abs(cu.x2-cu.x1)*c.td,V1=(cu.y1-pos)*vd,V2=(cu.y2-pos)*vd;
 ovr.innerHTML=`<b>Temps</b> : T1 = ${fmt(cu.x1*c.td,'s')} · T2 = ${fmt(cu.x2*c.td,'s')} · ΔT = <b>${fmt(dT,'s')}</b>${dT>0?' · 1/ΔT = <b>'+fmt(1/dT,'Hz')+'</b>':''}<br><b>Tension CH${c.cch}</b> : V1 = ${fmt(V1,'V')} · V2 = ${fmt(V2,'V')} · ΔV = <b>${fmt(Math.abs(V2-V1),'V')}</b><br>Déphasage : φ = 360° × Δt / T (Δt entre deux passages par zéro des deux voies, T = période du signal). Valeur max : place V1 sur le sommet de la courbe.`}
const ptOv=e=>{const p=ovs.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(ovs.getScreenCTM().inverse())};
ovs.addEventListener('pointerdown',e=>{const t=e.target.closest('[data-cu]');if(t)cuDrag=t.dataset.cu});
window.addEventListener('pointermove',e=>{if(!cuDrag)return;const c=comps.find(x=>x.id===ovId);if(!c)return;const p=ptOv(e),S=60;
 if(cuDrag[0]==='x')c.cur[cuDrag]=Math.max(0,Math.min(10,(p.x-20)/S));else c.cur[cuDrag]=Math.max(-4,Math.min(4,(260-p.y)/S));renderOv()});
window.addEventListener('pointerup',()=>{cuDrag=null});
/* ---- Export PDF (sans bibliothèque) ---- */
const PAL={'--ink':'#1c2430','--panel':'#ffffff','--bg':'#ffffff','--grid':'#e1e6ee','--acc':'#1976d2','--line':'#d5dbe5','--mut':'#6b7686','--bad':'#c62828'};
function svgJpeg(svg,w,h,sc){return new Promise(res=>{const cl=svg.cloneNode(true);cl.querySelectorAll('[data-t],[data-hk],[data-ho],[data-rz],[data-cu]').forEach(n=>n.remove());
 cl.setAttribute('xmlns','http://www.w3.org/2000/svg');cl.setAttribute('width',w);cl.setAttribute('height',h);
 const str=new XMLSerializer().serializeToString(cl).replace(/var\((--[a-z]+)\)/g,(m,k)=>PAL[k]||'#000'),im=new Image();
 im.onload=()=>{const k=document.createElement('canvas');k.width=w*sc;k.height=h*sc;const g=k.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,k.width,k.height);g.drawImage(im,0,0,k.width,k.height);
  try{const u=k.toDataURL('image/jpeg',.92);res({data:Uint8Array.from(atob(u.split(',')[1]),c=>c.charCodeAt(0)),w:k.width,h:k.height})}catch(e){res(null)}};
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
 return[(c.xy?'Mode XY':'Base de temps : '+fmt(c.td,'s')+'/div')+'   CH1 : '+fmt(c.v1,'V')+'/div ('+c.cp1+')   CH2 : '+fmt(c.v2,'V')+'/div ('+c.cp2+')   Declenchement : CH'+c.trig,
  'Curseurs temps : T1 = '+fmt(cu.x1*c.td,'s')+'   T2 = '+fmt(cu.x2*c.td,'s')+'   DT = '+fmt(dT,'s')+(dT>0?'   1/DT = '+fmt(1/dT,'Hz'):''),
  'Curseurs tension (CH'+c.cch+') : V1 = '+fmt((cu.y1-pos)*vd,'V')+'   V2 = '+fmt((cu.y2-pos)*vd,'V')+'   DV = '+fmt(Math.abs(cu.y2-cu.y1)*vd,'V')]}
let pdfMode='schema';const pfm=document.getElementById('pdfm'),$=id=>document.getElementById(id);
function openPdf(m){pdfMode=m;try{const o=JSON.parse(localStorage.getItem('labosim_id')||'{}');['nom','pre','grp','res'].forEach(k=>{$('pf_'+k).value=o[k]||''})}catch(e){}$('pf_msg').textContent='';pfm.style.display='flex'}
$('pb').onclick=()=>openPdf('schema');$('ovp').onclick=()=>openPdf('scope');$('pf_x').onclick=()=>{pfm.style.display='none'};
$('pf_go').onclick=async()=>{const g=k=>$('pf_'+k).value.trim(),id={nom:g('nom'),pre:g('pre'),grp:g('grp'),res:g('res')},msg=$('pf_msg'),c=pdfMode==='scope'?comps.find(x=>x.id===ovId):null,scope=!!c;
 try{localStorage.setItem('labosim_id',JSON.stringify(id))}catch(e){}
 msg.textContent='Génération…';const j=await svgJpeg(scope?ovs:cv,scope?640:900,scope?520:600,2);
 if(!j){msg.textContent='Impossible de générer l’image du schéma dans ce navigateur.';return}
 const date=new Date().toLocaleDateString('fr-FR');
 let ops=pdfTxt(40,557,16,scope?'LaboSim - Oscilloscope':'LaboSim - Schéma de montage',1)+pdfTxt(740,557,9,'LaboSim v'+VERSION)+pdfTxt(40,536,11,'NOM : '+id.nom)+pdfTxt(260,536,11,'PRÉNOM : '+id.pre)+pdfTxt(480,536,11,'GROUPE : '+id.grp)+pdfTxt(40,516,11,'RESSOURCE : '+id.res)+pdfTxt(480,516,11,'Date : '+date);
 let foot;if(scope)foot=scopeLines(c);else{const cnt={};comps.forEach(k=>{const n=k.ana?(k.type==='amp'?'Ampèremètre à aiguille':'Voltmètre à aiguille'):INFO[k.type].n;cnt[n]=(cnt[n]||0)+1});foot=pdfWrap('Matériel : '+(Object.entries(cnt).map(([n,v])=>n+(v>1?' x'+v:'')).join(', ')||'aucun'),150).slice(0,3)}
 foot.forEach((l,i)=>{ops+=pdfTxt(40,56-i*13,9,l)});
 const top=502,bot=48+foot.length*13,bh=top-bot,sc=Math.min(762/j.w,bh/j.h),w=j.w*sc,h=j.h*sc;
 const pages=[{ops,img:[(842-w)/2,bot+(bh-h)/2,w,h]}],txt=$('pf_txt').value.trim();
 if(txt){const L=pdfWrap(txt,105);for(let i=0;i<L.length;i+=33){let o=pdfTxt(40,555,14,'Notes'+(i?' (suite)':''),1);L.slice(i,i+33).forEach((l,k)=>{o+=pdfTxt(40,530-k*15,11,l)});pages.push({ops:o,img:null})}}
 const nm='LaboSim_'+(scope?'oscillo':'schema')+'_'+((id.nom||'eleve').replace(/[^A-Za-z0-9_-]/g,'')||'eleve')+'.pdf';
 await saveFile(buildPdf(pages,j),nm);msg.textContent='PDF prêt.';setTimeout(()=>{pfm.style.display='none'},700)};
/* ---- Notice ---- */
const NOTICE=`<h4>Principes</h4><ul><li><b>Ajouter un appareil</b> : menu de gauche (Alimentations, Charges, Commandes, Appareils de mesure). Sur téléphone, bouton ☰. Glisse l’appareil sur le plan.</li>
<li><b>Câbler</b> : clique une prise, puis une autre. Clique sur un câble pour changer sa couleur ou le supprimer. Trois tracés au choix en cliquant sur le câble : <b>Câble</b> (courbe : glisse le câble pour créer des points orange, les losanges en ajoutent, double-clic sur un point pour le retirer), <b>Droit</b> (ligne directe) ou <b>Orthogonal</b> (angles droits : glisse les losanges pour déplacer un segment). « Réinitialiser le tracé » revient au tracé par défaut.</li>
<li><b>Prises BNC</b> (GBF, oscilloscope) : le centre est l’<b>âme</b> (signal), la collerette est la <b>masse</b>. BNC → prise banane : un câble pour l’âme, un pour la masse. BNC → BNC : un seul clic = câble coaxial (âme + masse).</li>
<li><b>Repérage</b> : rectangles pointillés (redimensionnables) et textes, menu « Repérage ». Ils apparaissent dans l’export PDF.</li>
<li><b>Valeurs théoriques</b> (en haut) : affiche U et I sur les composants, pour la correction.</li>
<li>Tous les réglages numériques ont une <b>unité au choix</b> (mΩ, kΩ, MΩ, pF, µF, mH, kHz…).</li></ul>
<h4>Alimentations</h4><ul><li><b>Continue</b> : prise noire = −, rouge = +. <b>Alternative</b> : N (bleue) et Φ (rouge), tension efficace et fréquence réglables. <b>GBF</b> : sortie BNC ; sinus, carré ou triangle, amplitude crête 0–12 V, offset.</li><li><b>Alimentation triphasée</b> : N (bleue), L1 (jaune), L2 (verte), L3 (rouge) ; tension entre phases 0–400 V (230 V entre phase et neutre) et fréquence réglables, séquence directe 0°, −120°, +120°.</li></ul>
<h4>Charges</h4><ul><li><b>Lampe à LED</b> et <b>lampe fluocompacte</b> : 230 V, puissance et cos φ réglables (driver ou ballast électronique : courant déphasé en avance, visible au wattmètre en VAr et en PF). Elles s’allument à partir de 40 % (LED) ou 60 % (fluocompacte) de la tension nominale.</li>
<li><b>Moteur à courant continu</b> : borne rouge = +, noire = −. Régler tension nominale, résistance et inductance d’induit, courant et vitesse à vide, courant nominal et couple résistant. Le rotor tourne selon la tension (sens inversé si la polarité est inversée) ; vitesse en tr/min avec « Valeurs théoriques ». Il ne démarre pas si la tension est trop faible pour vaincre le couple résistant.</li>
<li><b>Moteur monophasé</b> : 230 V / 50 Hz, cos φ = 0,82 par défaut (puissance utile et rendement réglables). Mesure P, Q, S et PF avec le wattmètre ISW8000 ou la pince.</li>
<li><b>Moteur asynchrone triphasé 1,5 kW</b> (cos φ 0,84, rendement 80 %) : bornes U, V, W. Choisis le <b>couplage</b> : étoile sur 400 V entre phases, triangle sur 230 V ; un mauvais couplage donne « surtension ! ». Vitesse ≈ 1440 tr/min à 50 Hz (2 paires de pôles).</li>
<li><b>Caisse de charge 0–4 kW</b> : résistances réglables par paliers de 200 W (curseur) ou valeur tapée. Deux jeux de bornes : <b>M1/M2</b> (monophasé ou continu) et <b>L1/L2/L3</b> (triphasé, charge équilibrée) ; le réglage « Branchement » choisit le jeu en service, l’autre est hors circuit (bornes grisées). La puissance réglée est celle obtenue à la tension nominale indiquée.</li></ul>
<h4>Commandes</h4><ul><li><b>Interrupteur</b> : clic sur l’appareil. <b>Commutateur</b> : C est le commun, A et B les deux voies ; clic pour basculer.</li>
<li><b>Relais</b> : A1/A2 = bobine ; 11 = commun, 14 = contact travail (NO), 12 = contact repos (NC). Il colle quand la tension bobine atteint 80 % de sa valeur nominale, avec un « clac » (bouton 🔊 en haut pour couper le son).</li>
<li><b>Contacteur</b> : A1/A2 = bobine ; contacts NO 13-14 et 23-24 (puissance).</li></ul>
<h4>Appareils de mesure</h4><ul><li><b>Ampèremètre</b> : en <u>série</u>, courant entrant par la borne rouge. Branché en dérivation il crée un court-circuit. <b>Voltmètre</b> : en <u>dérivation</u>. Mode DC ou AC (valeur efficace).</li>
<li><b>Appareils à aiguille</b> : choisir un calibre au moins égal à la valeur attendue. Échelle 0–100 : valeur = lecture × calibre / 100.</li>
<li><b>Wattmètre ISW8000</b> : le <b>courant</b> se mesure entre les deux bornes du bas (bleue → noire, symbole du fusible) ; la <b>tension</b> se mesure sur les deux bornes de droite (rouge du haut, noire du bas). Les deux bornes rouges du haut sont reliées entre elles.<br>
<i>Câblage 4 fils</i> : phase de la source → rouge SOURCE ; rouge LOAD → phase de la charge ; neutre de la source → bleue ; neutre de la charge → noire.<br>
<i>Câblage 3 fils</i> : la phase de la source et celle de la charge se rejoignent sur la rouge LOAD ; bleue et noire comme ci-dessus.<br>
Boutons W (P), VAr (Q), VA (S), PF, V, A : clique dessus ou choisis l’affichage dans le panneau.</li>
<li><b>Pince ampèremétrique</b> : pose-la sur un câble (le câble passe dans l’anneau : dessous côté amont, dessus côté aval). La flèche rouge donne le sens positif ; « Inverser » le retourne. L’affichage est réglable : A (DC ou AC), W, VAr, VA, PF, V. Pour W, VAr, VA, PF et V, branche les deux cordons tension aux bornes de la charge (noir = COM, rouge = V).</li>
<li><b>Oscilloscope</b> : l’âme de chaque voie va au point à mesurer. Les masses des deux voies sont reliées entre elles : relie-en une au 0 V du montage. Réglages : base de temps, calibres, position, couplage DC/AC/GND, déclenchement.<br>
<b>Écran agrandi + curseurs</b> : deux curseurs de temps (T1, T2) et deux de tension (V1, V2) à glisser ; l’affichage donne ΔT, 1/ΔT et ΔV. <i>Valeur max</i> : place V1 sur le sommet. <i>Déphasage</i> : φ = 360° × Δt / T, Δt étant mesuré entre deux passages par zéro des deux voies et T la période. <b>Mode XY</b> (case dans les réglages) : CH1 pilote l’axe horizontal, CH2 l’axe vertical (figures de Lissajous).</li>
<li><b>Sonde de tension</b> (÷10 ou ÷100) : deux cordons côté mesure, comme un voltmètre (rouge = +) ; sortie BNC vers l’oscilloscope, isolée du circuit. La tension réelle = lecture × rapport.</li>
<li><b>Sonde de courant</b> (÷10, ÷100 ou ÷300) : mini-pince à poser sur un câble, sortie BNC vers l’oscilloscope ; elle délivre 1 V pour « rapport » ampères (÷100 : 10 mV/A). Courant réel = tension lue × rapport. « Inverser » change le sens.</li>
<li><b>Compte-tours</b> et <b>couple-mètre</b> : à poser près d’un moteur (≈ 100 px) ; ils affichent la vitesse (tr/min) ou le couple utile (N·m) du moteur le plus proche.</li></ul>
<h4>Étiquettes et filtre du matériel</h4><ul><li>Le bouton <b>🏷</b> (haut du menu de gauche) ouvre la gestion des étiquettes : crée, renomme ou supprime des étiquettes (TP ELEN, TP ENER, TP1, TP2, Projet…) puis coche les appareils concernés.</li><li>La liste déroulante du menu filtre le matériel : <i>Tout le matériel</i>, une étiquette, ou <i>Sans étiquette</i>. Les étiquettes s’affichent en petit sous chaque bouton.</li><li>La configuration est mémorisée dans le navigateur ; « Exporter » / « Importer » permettent de la partager. Sur un site GitHub Pages, un fichier <code>labosim-tags.json</code> placé à côté de <code>index.html</code> est chargé automatiquement.</li></ul>
<h4>Sauvegarde d’un montage</h4><ul><li>« 💾 Enregistrer » télécharge un fichier <code>montage_labosim.json</code> (appareils, câbles, repérages) ; « 📂 Ouvrir » le recharge.</li></ul>
<h4>Export PDF</h4><ul><li>« Export PDF » (en haut) : schéma de montage + champs NOM, PRÉNOM, GROUPE, RESSOURCE et notes libres. Le même bouton existe dans l’écran agrandi de l’oscilloscope : le PDF contient alors la copie d’écran, les mesures des curseurs et le texte libre.</li></ul>`;
$('novb').innerHTML=NOTICE;$('nb').onclick=()=>{$('nov').style.display='block'};$('novc').onclick=()=>{$('nov').style.display='none'};
$('snd').onclick=()=>{soundOn=!soundOn;$('snd').textContent=soundOn?'🔊':'🔇'};
/* ---- Étiquettes du matériel (TP, projet…) et filtre du menu ---- */
let TAGS={tags:['TP ELEN','TP ENER','TP1','TP2','Projet'],map:{}},tagFilter='*',tagsLocal=false;
const itKey=it=>it[0]+(it[2]?':a':'');
function normTags(d){const t=[...new Set((Array.isArray(d&&d.tags)?d.tags:[]).map(x=>String(x).trim()).filter(Boolean))],m={};Object.entries((d&&d.map)||{}).forEach(([k,v])=>{if(Array.isArray(v))m[k]=v.map(String).filter(x=>t.includes(x))});return{tags:t,map:m}}
function saveTags(){try{localStorage.setItem('labosim_tags',JSON.stringify(TAGS));localStorage.setItem('labosim_filter',tagFilter)}catch(e){}}
function initTags(){try{const o=JSON.parse(localStorage.getItem('labosim_tags')||'null');if(o&&o.tags){TAGS=normTags(o);tagsLocal=true}tagFilter=localStorage.getItem('labosim_filter')||'*'}catch(e){}
 try{if(!tagsLocal&&typeof fetch==='function')fetch('labosim-tags.json').then(r=>r.ok?r.json():null).then(d=>{if(d&&d.tags){TAGS=normTags(d);buildMenu()}}).catch(()=>{})}catch(e){}}
function buildMenu(){const tf=$('tf');if(tagFilter!=='*'&&tagFilter!=='-'&&!TAGS.tags.includes(tagFilter))tagFilter='*';
 tf.innerHTML='<option value="*">Tout le matériel</option>'+TAGS.tags.map(t=>`<option value="${esc_(t)}">${esc_(t)}</option>`).join('')+'<option value="-">Sans étiquette</option>';tf.value=tagFilter;
 const tg=it=>TAGS.map[itKey(it)]||[],show=it=>it[0][0]==='#'||tagFilter==='*'||(tagFilter==='-'?tg(it).length===0:tg(it).includes(tagFilter));let any=false;
 menuEl.innerHTML=MENU.map(([g,items],gi)=>{const L=items.map((it,ii)=>show(it)?`<button data-g="${gi}" data-i="${ii}">${it[1]}${it[0][0]!=='#'&&tg(it).length?`<small class="mut"> · ${tg(it).map(esc_).join(' · ')}</small>`:''}</button>`:'').join('');if(L&&g!=='Repérage')any=true;return L?`<h3>${g}</h3>`+L:''}).join('')+(any?'':'<p class="mut" style="font-size:12px">Aucun matériel avec cette étiquette.</p>');
 menuEl.querySelectorAll('button').forEach(b=>b.onclick=()=>menuClick(b))}
function renderTags(){const n=TAGS.tags.length,ents=MENU.filter(([g])=>g!=='Repérage');
 const rows=ents.map(([g,items])=>`<tr><th colspan="${n+1}" style="background:var(--bg)">${g}</th></tr>`+items.map(it=>`<tr><td>${it[1]}</td>${TAGS.tags.map((t,ti)=>`<td><input type="checkbox" data-ck="${itKey(it)}|${ti}"${(TAGS.map[itKey(it)]||[]).includes(t)?' checked':''}></td>`).join('')}</tr>`).join('')).join('');
 $('tgb2').innerHTML=`<div>${TAGS.tags.map((t,i)=>`<span class="chip"><input type="text" data-tr="${i}" value="${esc_(t)}" size="${Math.max(6,t.length)}"><button data-td="${i}" title="Supprimer l’étiquette">×</button></span>`).join('')}<span class="chip"><input type="text" id="tnew" placeholder="Nouvelle étiquette" size="16"><button id="tadd">Ajouter</button></span></div>
<div style="overflow:auto"><table><tr><th>Appareil</th>${TAGS.tags.map((t,i)=>`<th>${esc_(t)}<br><button data-ta="${i}" title="Tout cocher / tout décocher">☑</button></th>`).join('')}</tr>${rows}</table></div>
<div style="display:flex;gap:8px;flex-wrap:wrap"><button id="texp">Exporter la configuration</button><button id="timp">Importer…</button><input type="file" id="tfl" accept=".json,application/json" style="display:none"><button id="trst">Décocher tout</button></div>`;
 const keyOf=k=>ents.flatMap(([g,items])=>items).find(it=>itKey(it)===k),done=()=>{saveTags();buildMenu()};
 $('tgb2').querySelectorAll('[data-ck]').forEach(i=>i.onchange=()=>{const[k,ti]=i.dataset.ck.split('|'),t=TAGS.tags[+ti],a=TAGS.map[k]||[];TAGS.map[k]=i.checked?[...new Set([...a,t])]:a.filter(x=>x!==t);done()});
 $('tgb2').querySelectorAll('[data-tr]').forEach(i=>i.onchange=()=>{const old=TAGS.tags[+i.dataset.tr],nv=i.value.trim();if(!nv||TAGS.tags.includes(nv)){renderTags();return}TAGS.tags[+i.dataset.tr]=nv;Object.keys(TAGS.map).forEach(k=>{TAGS.map[k]=TAGS.map[k].map(x=>x===old?nv:x)});if(tagFilter===old)tagFilter=nv;done();renderTags()});
 $('tgb2').querySelectorAll('[data-td]').forEach(b=>b.onclick=()=>{const old=TAGS.tags[+b.dataset.td];TAGS.tags.splice(+b.dataset.td,1);Object.keys(TAGS.map).forEach(k=>{TAGS.map[k]=TAGS.map[k].filter(x=>x!==old)});if(tagFilter===old)tagFilter='*';done();renderTags()});
 $('tadd').onclick=()=>{const v=$('tnew').value.trim();if(v&&!TAGS.tags.includes(v)){TAGS.tags.push(v);done();renderTags()}};
 $('tgb2').querySelectorAll('[data-ta]').forEach(b=>b.onclick=()=>{const t=TAGS.tags[+b.dataset.ta],all=ents.flatMap(([g,items])=>items).every(it=>(TAGS.map[itKey(it)]||[]).includes(t));ents.forEach(([g,items])=>items.forEach(it=>{const k=itKey(it),a=TAGS.map[k]||[];TAGS.map[k]=all?a.filter(x=>x!==t):[...new Set([...a,t])]}));done();renderTags()});
 $('trst').onclick=()=>{TAGS.map={};done();renderTags()};
 $('texp').onclick=()=>saveFile(new Blob([JSON.stringify(TAGS,null,1)],{type:'application/json'}),'etiquettes_labosim.json');
 $('timp').onclick=()=>$('tfl').click();
 $('tfl').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{TAGS=normTags(JSON.parse(String(r.result)));done();renderTags()}catch(x){}};r.readAsText(f)}}
$('tf').onchange=()=>{tagFilter=$('tf').value;saveTags();buildMenu()};
$('tgb').onclick=()=>{renderTags();$('tgm').style.display='block'};$('tgx').onclick=()=>{$('tgm').style.display='none'};
const SKIP=new Set(['cl','sig','ws','U','I','P','Q','Ur','Ir','Ua','Ia','rps','rpm','tgt','tv']);
function serializeMontage(){return JSON.stringify({app:'LaboSim',version:VERSION,comps,wires,notes,pairId},(k,v)=>SKIP.has(k)?undefined:v,1)}
function loadMontage(txt){let d;try{d=JSON.parse(txt);if(!d||!Array.isArray(d.comps))throw 0}catch(e){st.textContent='Fichier de montage invalide';return false}
 if(String(d.version||'0')<'1.5'&&Array.isArray(d.wires)){const mg=new Set((d.comps||[]).filter(c=>c&&c.type==='cch'&&c.cm==='tri').map(c=>c.id));d.wires.forEach(w=>{['a','b'].forEach(k=>{const q=String(w[k]).split(':');if(mg.has(+q[0]))w[k]=q[0]+':'+(+q[1]+2)})})}
 comps=[];wires=[];notes=[];uid=1;(d.comps||[]).forEach(sc=>{if(sc&&INFO[sc.type]){const c=add(sc.type,sc.x,sc.y);Object.assign(c,sc)}});
 uid=Math.max(1,...comps.map(c=>c.id+1));wires=(d.wires||[]).filter(w=>{try{return w&&tp(w.a)&&tp(w.b)}catch(e){return false}});notes=Array.isArray(d.notes)?d.notes:[];pairId=d.pairId||Math.max(1,...wires.map(w=>(w.pair||0)+1));
 sel=selW=selN=pend=null;panel();render();return true}
$('sv_').onclick=()=>saveFile(new Blob([serializeMontage()],{type:'application/json'}),'montage_labosim.json');
$('op_').onclick=()=>$('fl').click();
$('fl').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>loadMontage(String(r.result));r.readAsText(f);e.target.value=''};
const place=(c,w,t)=>{const pt=bz(tp(w.a),tp(w.b),w,t);c.x=pt.x;c.y=pt.y};
document.getElementById('ex8').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const a=add('a3',190,300),m=add('m3',640,150),t=add('tach',730,190);
 wire(a.id+':1',m.id+':0');wire(a.id+':2',m.id+':1');wire(a.id+':3',m.id+':2');sel=null;panel();render()};
document.getElementById('ex7').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',170,300),w=add('watt',480,420),m=add('mac',640,160);s.val=230;
 wire(s.id+':1',w.id+':1');wire(w.id+':3',m.id+':1');wire(m.id+':0',w.id+':2');wire(w.id+':0',s.id+':0');sel=null;panel();render()};
document.getElementById('ex5').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),r=add('res',520,130),l=add('ind',760,330),p=add('pince',0,0),q=add('pince',0,0);s.val=24;r.val=22;l.val=200;l.r=10;p.disp='W';p.mode='AC';q.mode='AC';
 wire(s.id+':1',r.id+':0');wire(r.id+':1',l.id+':0');wire(l.id+':1',s.id+':0');wire(p.id+':1',s.id+':1');wire(p.id+':0',s.id+':0');
 place(p,wires[0],.5);place(q,wires[2],.5);sel=null;panel();render()};
document.getElementById('ex6').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const b=add('bat',130,150),k=add('sw',340,110),r=add('rel',540,300),b2=add('bat',140,440),l=add('bulb',760,430);b.val=12;b2.val=9;l.val=10;l.un=9;
 wire(b.id+':1',k.id+':0');wire(k.id+':1',r.id+':0');wire(r.id+':1',b.id+':0');wire(b2.id+':1',r.id+':2');wire(r.id+':3',l.id+':0');wire(l.id+':1',b2.id+':0');
 sel=null;panel();render()};
document.getElementById('ex4').onclick=document.getElementById('ex4').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const g=add('gbf',170,130),r=add('res',420,110),c=add('cap',650,170),o=add('scope',500,380);r.val=1000;c.val=0.1;g.amp=5;o.td=5e-4;o.v1=o.v2=2;
 wire(g.id+':1',r.id+':0');wire(r.id+':1',c.id+':0');wire(c.id+':1',g.id+':0');wire(o.id+':1',r.id+':0');wire(o.id+':0',g.id+':0');wire(o.id+':3',c.id+':0');
 sel=null;panel();render()};
document.getElementById('ex3').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),w=add('watt',470,400),r=add('res',560,140),l=add('ind',790,300);s.val=24;r.val=22;l.val=200;l.r=10;
 wire(s.id+':1',w.id+':1');wire(w.id+':3',r.id+':0');wire(r.id+':1',l.id+':0');wire(l.id+':1',w.id+':2');wire(w.id+':0',s.id+':0');
 sel=null;panel();render()};
document.getElementById('ex2').onclick=()=>{comps=[];wires=[];notes=[];selN=null;uid=1;
 const s=add('ac',200,300),r=add('res',520,140),a=add('amp',480,380),v=add('volt',790,300);s.val=24;a.mode=v.mode='AC';r.val=47;
 wire(s.id+':1',r.id+':0');wire(r.id+':1',a.id+':1');wire(a.id+':0',s.id+':0');wire(v.id+':1',r.id+':0');wire(v.id+':0',r.id+':1');
 sel=null;panel();render()};
initTags();buildMenu();
example();
