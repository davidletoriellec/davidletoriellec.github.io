/* LaboSim – mini-compilateur Arduino (C++ simplifié) → générateurs JavaScript + moteur d'exécution en temps virtuel.
   Sous-ensemble géré : setup/loop, fonctions, variables globales/locales, tableaux 1-2 D, String, if/for/while/do/switch,
   pinMode, digitalWrite/Read, analogRead/Write, delay, delayMicroseconds, millis, micros, pulseIn, tone, Serial, map, constrain, random…
   Types C respectés : int = 16 bits, long = 32 bits, byte, unsigned…, division entière, débordements. */
(function(G){'use strict';
const TW=new Set(['void','bool','boolean','char','byte','int','short','long','float','double','unsigned','signed','word','String','size_t','uint8_t','int8_t','uint16_t','int16_t','uint32_t','int32_t','const','static','volatile']);
const MODS=new Set(['const','static','volatile','signed']);
const CONST={HIGH:[1,'i16'],LOW:[0,'i16'],INPUT:[0,'i16'],OUTPUT:[1,'i16'],INPUT_PULLUP:[2,'i16'],LED_BUILTIN:[13,'i16'],true:[1,'b'],false:[0,'b'],PI:[Math.PI,'f'],DEC:[10,'i16'],HEX:[16,'i16'],BIN:[2,'i16'],OCT:[8,'i16'],LSBFIRST:[0,'i16'],MSBFIRST:[1,'i16'],NULL:[0,'i16'],EULER:[Math.E,'f'],HALF_PI:[Math.PI/2,'f'],TWO_PI:[2*Math.PI,'f']};
for(let i=0;i<6;i++)CONST['A'+i]=[14+i,'i16'];
const P16=t=>(t==='b'||t==='i8'||t==='u8')?'i16':t;
function arith(a,b){if(a==='f'||b==='f')return'f';a=P16(a);b=P16(b);if(a==='u32'||b==='u32')return'u32';if(a==='i32'||b==='i32')return'i32';if(a==='u16'||b==='u16')return'u16';return'i16'}
function W(t,c){switch(t){case'i16':return`(${c}<<16>>16)`;case'u16':return`(${c}&65535)`;case'i32':return`(${c}|0)`;case'u32':return`(${c}>>>0)`;case'i8':return`(${c}<<24>>24)`;case'u8':return`(${c}&255)`;case'b':return`(${c}?1:0)`;default:return c}}
const isInt=t=>t!=='f'&&t!=='S'&&t!=='v';
function typeOf(w){if(w.includes('String'))return'S';const u=w.includes('unsigned'),nl=w.filter(x=>x==='long').length,b=w.find(x=>!['unsigned','long','short','signed','const','static','volatile'].includes(x));
 if(b==='void')return'v';if(b==='bool'||b==='boolean')return'b';if(b==='float'||b==='double')return'f';if(b==='char')return u?'u8':'i8';if(b==='byte'||b==='uint8_t')return'u8';if(b==='int8_t')return'i8';
 if(b==='uint16_t'||b==='word')return'u16';if(b==='int16_t')return'i16';if(b==='uint32_t'||b==='size_t')return'u32';if(b==='int32_t')return'i32';if(nl)return u?'u32':'i32';return u?'u16':'i16'}
/* ---------- Analyse lexicale ---------- */
function lexRaw(src,ln0,M,top){const T=[],n=src.length;let i=0,ln=ln0||1,ls=true;const E=(m,l)=>{throw{line:l||ln,msg:m}};
 const OPS=['<<=','>>=','++','--','+=','-=','*=','/=','%=','&=','|=','^=','==','!=','<=','>=','&&','||','<<','>>','->','::'];
 while(i<n){const ch=src[i];
  if(ch==='\n'){ln++;i++;ls=true;continue}if(ch===' '||ch==='\t'||ch==='\r'){i++;continue}
  if(ch==='/'&&src[i+1]==='/'){while(i<n&&src[i]!=='\n')i++;continue}
  if(ch==='/'&&src[i+1]==='*'){i+=2;while(i<n&&!(src[i]==='*'&&src[i+1]==='/')){if(src[i]==='\n')ln++;i++}i+=2;continue}
  if(ch==='#'&&ls&&top){let j=i;while(j<n&&src[j]!=='\n')j++;const line=src.slice(i+1,j).replace(/\/\/.*$/,'').trim(),m=line.match(/^define\s+([A-Za-z_]\w*)(\(?)\s*(.*)$/);
   if(m){if(m[2])E('macro avec paramètres non gérée : utilise une fonction ou une constante',ln);M[m[1]]=lexRaw(m[3],ln,M,false).filter(t=>t.k!=='e')}i=j;continue}
  ls=false;
  if(/[A-Za-z_]/.test(ch)){let j=i+1;while(j<n&&/\w/.test(src[j]))j++;const id=src.slice(i,j);i=j;if(M&&M[id]){M[id].forEach(t=>T.push({...t,line:ln}))}else T.push({k:'i',v:id,line:ln});continue}
  if(/\d/.test(ch)||(ch==='.'&&/\d/.test(src[i+1]||''))){const m=src.slice(i).match(/^(0[xX][0-9a-fA-F]+|0[bB][01]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)([uUlLfF]*)/);let s=m[1],sf=m[2].toLowerCase(),v,t,hx=/^0[xXbB]/.test(s);
   v=/^0[bB]/.test(s)?parseInt(s.slice(2),2):Number(s);const fl=!hx&&(/[.eE]/.test(s)||sf.includes('f'));
   if(fl)t='f';else if(sf.includes('l'))t=sf.includes('u')?'u32':'i32';else if(sf.includes('u'))t=v>65535?'u32':'u16';else t=v<=32767?'i16':(hx&&v<=65535)?'u16':v<=2147483647?'i32':'u32';
   T.push({k:'n',v,t,line:ln});i+=m[0].length;continue}
  if(ch==='"'||ch==="'"){let j=i+1,s='';while(j<n&&src[j]!==ch){if(src[j]==='\n')E('guillemet non fermé',ln);if(src[j]==='\\'){j++;const e=src[j];s+=e==='n'?'\n':e==='t'?'\t':e==='r'?'\r':e==='0'?'\0':e}else s+=src[j];j++}
   if(j>=n)E('guillemet non fermé',ln);i=j+1;if(ch==='"')T.push({k:'s',v:s,line:ln});else{if(s.length!==1)E('constante caractère invalide',ln);T.push({k:'n',v:s.charCodeAt(0),t:'i8',line:ln})}continue}
  let op=OPS.find(o=>src.startsWith(o,i));if(!op)op=ch;if(!'+-*/%=<>!&|^~?:;,.(){}[]'.includes(op[0]))E('caractère inattendu « '+ch+' »',ln);T.push({k:'o',v:op,line:ln});i+=op.length}
 T.push({k:'e',v:'',line:ln});return T}
/* ---------- Compilateur ---------- */
const BIN={'||':1,'&&':2,'|':3,'^':4,'&':5,'==':6,'!=':6,'<':7,'<=':7,'>':7,'>=':7,'<<':8,'>>':8,'+':9,'-':9,'*':10,'/':10,'%':10};
const ASG=new Set(['=','+=','-=','*=','/=','%=','&=','|=','^=','<<=','>>=']);
const BI={pinMode:{r:'v',n:[2,2]},digitalWrite:{r:'v',n:[2,2]},digitalRead:{r:'i16',n:[1,1],y:1},analogRead:{r:'i16',n:[1,1],y:1},analogWrite:{r:'v',n:[2,2]},analogReference:{r:'v',n:[1,1]},
 delay:{r:'v',n:[1,1],y:1},delayMicroseconds:{r:'v',n:[1,1],y:1},millis:{r:'u32',n:[0,0]},micros:{r:'u32',n:[0,0]},pulseIn:{r:'u32',n:[2,3],y:1},tone:{r:'v',n:[2,3]},noTone:{r:'v',n:[1,1]},
 random:{r:'i32',n:[1,2]},randomSeed:{r:'v',n:[1,1]},map:{r:'i32',n:[5,5]},constrain:{r:'a',n:[3,3]},sqrt:{r:'f',n:[1,1],m:1},pow:{r:'f',n:[2,2],m:1},sin:{r:'f',n:[1,1],m:1},cos:{r:'f',n:[1,1],m:1},tan:{r:'f',n:[1,1],m:1},
 asin:{r:'f',n:[1,1],m:1},acos:{r:'f',n:[1,1],m:1},atan:{r:'f',n:[1,1],m:1},atan2:{r:'f',n:[2,2],m:1},exp:{r:'f',n:[1,1],m:1},log:{r:'f',n:[1,1],m:1},log10:{r:'f',n:[1,1],m:1},floor:{r:'f',n:[1,1],m:1},ceil:{r:'f',n:[1,1],m:1},
 round:{r:'i32',n:[1,1]},radians:{r:'f',n:[1,1]},degrees:{r:'f',n:[1,1]},fabs:{r:'f',n:[1,1],m:1,mn:'abs'}};
const SM={print:1,println:1,begin:1,end:1,write:1,available:1,read:1,peek:1,parseInt:1,parseFloat:1,readString:1,readStringUntil:1,flush:1,setTimeout:1};
function compile(src){
 let T,p=0;const E=(m,l)=>{throw{line:l||(T[Math.min(p,T.length-1)]||{}).line||1,msg:m}};
 try{T=lexRaw(src,1,{},true);
  const pk=(o=0)=>T[Math.min(p+o,T.length-1)],isO=(v,o=0)=>pk(o).k==='o'&&pk(o).v===v,isI=(v,o=0)=>pk(o).k==='i'&&pk(o).v===v,eat=v=>{if(isO(v)){p++;return true}return false},
   need=v=>{if(!eat(v)){const t=pk(),pv=T[p-1]||t;if(v===';')E('« ; » attendu à la fin de l’instruction'+(t.k==='e'?'':' (avant « '+t.v+' »)'),pv.line);E('« '+v+' » attendu'+(t.k==='e'?' (fin du programme)':' avant « '+t.v+' »'),t.line)}},
   ident=()=>{const t=pk();if(t.k!=='i')E('nom attendu'+(t.k==='e'?'':' avant « '+t.v+' »'));p++;return t.v};
  const tyStart=(o=0)=>pk(o).k==='i'&&TW.has(pk(o).v);
  function parseType(){const w=[];while(tyStart()){w.push(pk().v);p++}if(!w.length)E('type attendu');if(w.every(x=>MODS.has(x)))E('type manquant');let t=typeOf(w);if(isO('*')){if(w.includes('char')){p++;t='S'}else E('les pointeurs ne sont pas gérés dans LaboSim')}if(isO('&'))E('les références (&) ne sont pas gérées : renvoie la valeur avec return');return t}
  /* signatures (appels avant la définition) */
  const F={};let scopes=[new Map()];
  (function(){let d=0;const save=p;for(p=0;p<T.length;){const t=pk();if(t.k==='o'&&(t.v==='{'||t.v==='('||t.v==='['))d++;else if(t.k==='o'&&(t.v==='}'||t.v===')'||t.v===']'))d--;
    else if(d===0&&tyStart()&&(p===0||T[p-1].v===';'||T[p-1].v==='}')){const q=p;try{const rt=parseType();if(pk().k==='i'&&isO('(',1)){const nm=ident();p++;const ps=[];if(isI('void')&&isO(')',1))p++;
     while(!isO(')')){const pt=parseType();let dm=0;if(pk().k==='i')p++;while(eat('[')){while(!isO(']'))p++;p++;dm++}ps.push({t:pt,dm});if(!eat(','))break}F[nm]={ret:rt,ps};}}catch(e){}p=q}p++}p=save})();
  const look=n=>{for(let i=scopes.length-1;i>=0;i--)if(scopes[i].has(n))return scopes[i].get(n);return null};
  const decl=(n,info,l)=>{const s=scopes[scopes.length-1];if(s.has(n))E('« '+n+' » est déjà déclarée',l);s.set(n,info)};
  const call=(n)=>{const f=F[n];return f};
  let retT='v';
  /* ----- expressions ----- */
  function sconv(a){return a.t==='S'?a.c:`R.s(${a.c},'${a.t}')`}
  function bin(op,a,b,l){
   if(op==='&&')return{c:`(${a.c}&&${b.c}?1:0)`,t:'b'};if(op==='||')return{c:`(${a.c}||${b.c}?1:0)`,t:'b'};
   if(['==','!=','<','<=','>','>='].includes(op))return{c:`(${a.c}${op==='=='?'===':op==='!='?'!==':op}${b.c}?1:0)`,t:'b'};
   if(a.t==='S'||b.t==='S'){if(op==='+')return{c:`(${sconv(a)}+${sconv(b)})`,t:'S'};E('opération « '+op+' » impossible sur une String',l)}
   if(op==='<<'||op==='>>'){const t=P16(a.t);if(a.t==='f'||b.t==='f')E('décalage impossible sur un float',l);return{c:W(t,op==='>>'&&(t==='u32')?`(${a.c}>>>${b.c})`:`(${a.c}${op}${b.c})`),t}}
   const t=arith(a.t,b.t);
   if(t==='f'){if(['%','&','|','^'].includes(op))E('l’opérateur « '+op+' » n’est pas défini pour les float',l);return{c:`(${a.c}${op}${b.c})`,t}}
   if(op==='*')return{c:W(t,t==='i32'||t==='u32'?`Math.imul(${a.c},${b.c})`:`(${a.c}*${b.c})`),t};
   if(op==='/')return{c:W(t,`R.idiv(${a.c},${b.c})`),t};if(op==='%')return{c:W(t,`R.imod(${a.c},${b.c})`),t};
   return{c:W(t,`(${a.c}${op}${b.c})`),t}}
  function args(){need('(');const a=[];if(!isO(')')){do a.push(asg());while(eat(','))}need(')');return a}
  function chk(n,a,r,l){if(a.length<r[0]||a.length>r[1])E('« '+n+' » attend '+(r[0]===r[1]?r[0]:r[0]+' à '+r[1])+' argument(s), '+a.length+' fourni(s)',l)}
  function prim(){const t=pk(),l=t.line;
   if(t.k==='n'){p++;return{c:String(t.v),t:t.t}}if(t.k==='s'){p++;return{c:JSON.stringify(t.v),t:'S'}}
   if(t.k==='o'&&t.v==='('){if(tyStart(1)){p++;const ty=parseType();need(')');const u=un();return cast(ty,u)}p++;const e=comma();need(')');return{...e,c:'('+e.c+')',lv:false}}
   if(t.k!=='i')E('expression attendue'+(t.k==='e'?' (fin du programme)':' avant « '+t.v+' »'),l);
   const n=t.v;p++;
   if(n==='Serial')return serial(l);
   if(tyStart(-1)&&TW.has(n)&&isO('(')){p--;const ty=parseType();const a=args();if(ty==='S'){if(!a.length)return{c:'""',t:'S'};if(a.length===2)return{c:`R.sb(${a[0].c},${a[1].c})`,t:'S'};return{c:sconv(a[0]),t:'S'}}return cast(ty,a[0]||E('conversion sans valeur',l))}
   if(n==='F'&&isO('(')){const a=args();return a[0]}
   const v=look(n);
   if(v&&!v.fn){let e={c:'u_'+n,t:v.t,lv:true,dm:v.dm||0,nm:n};return e}
   if(F[n]&&isO('(')){const a=args(),f=F[n];if(a.length!==f.ps.length)E('« '+n+' » attend '+f.ps.length+' argument(s), '+a.length+' fourni(s)',l);
    return{c:`(yield* f_${n}(${a.map((x,i)=>f.ps[i].dm?x.c:conv(x,f.ps[i].t)).join(',')}))`,t:f.ret}}
   if(CONST[n]&&!isO('('))return{c:String(CONST[n][0]),t:CONST[n][1]};
   if(isO('(')){const a=args();return builtin(n,a,l)}
   E('« '+n+' » n’est pas déclarée (variable ou fonction inconnue)',l)}
  const conv=(e,t)=>t==='S'?(e.t==='S'?e.c:sconv(e)):W(t,e.c);
  function cast(ty,u){if(ty==='S')return{c:sconv(u),t:'S'};if(u.t==='S')E('conversion String → nombre : utilise .toInt()');return{c:W(ty,u.c),t:ty}}
  function builtin(n,a,l){
   if(n==='abs'){chk(n,a,[1,1],l);return{c:`Math.abs(${a[0].c})`,t:P16(a[0].t)}}
   if(n==='min'||n==='max'){chk(n,a,[2,2],l);return{c:`Math.${n}(${a[0].c},${a[1].c})`,t:arith(a[0].t,a[1].t)}}
   if(n==='sq'){chk(n,a,[1,1],l);const t=P16(a[0].t);return{c:W(t,`(${a[0].c}*${a[0].c})`),t}}
   if(n==='constrain'){chk(n,a,[3,3],l);return{c:`R.constrain(${a.map(x=>x.c).join(',')})`,t:arith(a[0].t,arith(a[1].t,a[2].t))}}
   if(n==='bitRead'){chk(n,a,[2,2],l);return{c:`((${a[0].c}>>${a[1].c})&1)`,t:'i16'}}
   if(n==='bitSet'||n==='bitClear'||n==='bitWrite'){chk(n,a,n==='bitWrite'?[3,3]:[2,2],l);const x=a[0];if(!x.lv)E(n+' : le premier argument doit être une variable',l);
    const m=`(1<<${a[1].c})`,v=n==='bitSet'?`(${x.c}|${m})`:n==='bitClear'?`(${x.c}&~${m})`:`(${a[2].c}?(${x.c}|${m}):(${x.c}&~${m}))`;return{c:`(${x.c}=${W(x.t,v)})`,t:'v'}}
   if(n==='lowByte'){chk(n,a,[1,1],l);return{c:`(${a[0].c}&255)`,t:'u8'}}if(n==='highByte'){chk(n,a,[1,1],l);return{c:`((${a[0].c}>>8)&255)`,t:'u8'}}
   if(n==='isnan'){return{c:`(isNaN(${a[0].c})?1:0)`,t:'b'}}
   const b=BI[n];if(!b)E('fonction « '+n+' » inconnue ou non gérée dans LaboSim',l);chk(n,a,b.n,l);
   const code=b.m?`Math.${b.mn||n}(${a.map(x=>x.c).join(',')})`:b.y?`(yield* R.${n}(${a.map(x=>x.c).join(',')}))`:`R.${n}(${a.map(x=>x.c).join(',')})`;
   return{c:code,t:b.r}}
  function serial(l){need('.');const m=ident();if(!SM[m])E('Serial.'+m+' n’est pas géré',l);const a=args();
   if(m==='print'||m==='println'){const nl=m==='println'?1:0;if(!a.length)return{c:`R.sp('','S',0,${nl})`,t:'v'};return{c:`R.sp(${a[0].c},'${a[0].t}',${a[1]?a[1].c:'undefined'},${nl})`,t:'v'}}
   const r={begin:'v',end:'v',write:'v',available:'i16',read:'i16',peek:'i16',parseInt:'i32',parseFloat:'f',readString:'S',readStringUntil:'S',flush:'v',setTimeout:'v'}[m];return{c:`R.s_${m}(${a.map(x=>x.c).join(',')})`,t:r}}
  function member(o,l){const m=ident();
   if(o.t!=='S')E('« . » : seules les String et Serial ont des méthodes',l);const a=args();const c=o.c,ml=o.lv&&o.dm===0;
   const mut=(f,t)=>{if(!ml)E('« '+m+' » ne peut s’appliquer qu’à une variable String',l);return{c:`(${c}=${f})`,t:'v'}};
   switch(m){case'length':return{c:`${c}.length`,t:'i16'};case'charAt':return{c:`R.ch(${c},${a[0].c})`,t:'i8'};case'toInt':return{c:`R.toInt(${c})`,t:'i32'};case'toFloat':return{c:`R.toFloat(${c})`,t:'f'};
    case'substring':return{c:`R.sub(${c},${a[0].c},${a[1]?a[1].c:'undefined'})`,t:'S'};case'indexOf':return{c:`${c}.indexOf(${sconv(a[0])}${a[1]?','+a[1].c:''})`,t:'i16'};case'lastIndexOf':return{c:`${c}.lastIndexOf(${sconv(a[0])})`,t:'i16'};
    case'equals':return{c:`(${c}===${sconv(a[0])}?1:0)`,t:'b'};case'equalsIgnoreCase':return{c:`(${c}.toLowerCase()===${sconv(a[0])}.toLowerCase()?1:0)`,t:'b'};
    case'startsWith':return{c:`(${c}.startsWith(${sconv(a[0])})?1:0)`,t:'b'};case'endsWith':return{c:`(${c}.endsWith(${sconv(a[0])})?1:0)`,t:'b'};case'c_str':return{c,t:'S'};case'isEmpty':return{c:`(${c}.length?0:1)`,t:'b'};
    case'trim':return mut(`${c}.trim()`);case'toUpperCase':return mut(`${c}.toUpperCase()`);case'toLowerCase':return mut(`${c}.toLowerCase()`);case'concat':return mut(`${c}+${sconv(a[0])}`);
    case'replace':return mut(`${c}.split(${sconv(a[0])}).join(${sconv(a[1])})`);case'remove':return mut(`R.rem(${c},${a[0].c},${a[1]?a[1].c:'undefined'})`);
    default:E('String.'+m+' n’est pas géré',l)}}
  function post(){let e=prim();for(;;){const t=pk();if(t.k!=='o')break;
    if(t.v==='['){p++;const i=comma();need(']');if(e.t==='S'&&!(e.dm>0)){e={c:`R.ch(${e.c},${i.c})`,t:'i8',lv:false}}else{if(!(e.dm>0))E('« '+(e.nm||'cette valeur')+' n’est pas un tableau',t.line);e={c:`${e.c}[${i.c}]`,t:e.t,lv:true,dm:e.dm-1,nm:e.nm}}}
    else if(t.v==='.'){p++;e=member(e,t.line)}
    else if(t.v==='++'||t.v==='--'){p++;if(!e.lv||e.dm)E('« '+t.v+' » s’applique à une variable',t.line);const o=t.v==='++'?'+':'-';e={c:`(_t=${e.c},${e.c}=${W(P16(e.t)===e.t?e.t:e.t,`(${e.c}${o}1)`)},_t)`,t:e.t}}
    else break}return e}
  function un(){const t=pk();
   if(t.k==='o'){const l=t.line;
    if(t.v==='-'){p++;const u=un();if(u.t==='S')E('« - » impossible sur une String',l);return{c:W(P16(u.t)===u.t||u.t==='f'?u.t:P16(u.t),`(-${u.c})`),t:P16(u.t)}}
    if(t.v==='+'){p++;return un()}if(t.v==='!'){p++;const u=un();return{c:`(${u.c}?0:1)`,t:'b'}}
    if(t.v==='~'){p++;const u=un(),ty=P16(u.t);return{c:W(ty,`(~${u.c})`),t:ty}}
    if(t.v==='++'||t.v==='--'){p++;const u=un();if(!u.lv)E('« '+t.v+' » s’applique à une variable',l);return{c:`(${u.c}=${W(u.t,`(${u.c}${t.v[0]}1)`)})`,t:u.t}}
    if(t.v==='*'||t.v==='&')E('les pointeurs ne sont pas gérés dans LaboSim',l)}
   if(t.k==='i'&&t.v==='sizeof')E('sizeof n’est pas géré',t.line);return post()}
  function binx(min){let a=un();for(;;){const t=pk();if(t.k!=='o'||!BIN[t.v]||BIN[t.v]<min)break;p++;const b=binx(BIN[t.v]+1);a=bin(t.v,a,b,t.line)}return a}
  function tern(){const c=binx(1);if(eat('?')){const a=asg();need(':');const b=tern();const t=a.t===b.t?a.t:(a.t==='S'||b.t==='S')?'S':arith(a.t,b.t);return{c:`(${c.c}?${a.c}:${b.c})`,t}}return c}
  function asg(){const a=tern(),t=pk();if(t.k==='o'&&ASG.has(t.v)){if(!a.lv||a.dm)E('on ne peut pas affecter à cette expression',t.line);p++;const b=asg();
    if(t.v==='='){if(a.t==='S'&&b.t!=='S')return{c:`(${a.c}=${sconv(b)})`,t:'S'};if(a.t!=='S'&&b.t==='S')E('on ne peut pas ranger une String dans un nombre : utilise .toInt()',t.line);return{c:`(${a.c}=${conv(b,a.t)})`,t:a.t}}
    const r=bin(t.v.slice(0,-1),a,b,t.line);return{c:`(${a.c}=${conv(r,a.t)})`,t:a.t}}return a}
  function comma(){let e=asg();while(isO(',')&&!noComma){p++;const b=asg();e={c:`(${e.c},${b.c})`,t:b.t}}return e}
  let noComma=false;
  /* ----- instructions ----- */
  const TICK='R.t+=2;if(R.t>R.hz)yield 0;';
  function initList(t,dm,l){need('{');const o=[];if(!isO('}')){do{if(isO('}'))break;if(isO('{'))o.push(initList(t,dm-1,l));else{const e=asg();o.push(conv(e,t))}}while(eat(','))}need('}');return'['+o.join(',')+']'}
  function declLine(global){const t=parseType();if(t==='v')E('« void » ici : une fonction ne peut pas être définie à l’intérieur d’une autre — il manque sans doute une « } » plus haut');const out=[],init=[];
   do{const l=pk().line,n=ident(),dims=[];while(eat('[')){if(isO(']'))dims.push(null);else dims.push(comma().c);need(']')}
    let code;
    if(dims.length){let ini=null;if(eat('=')){ini=initList(t,dims.length,l)}
     if(ini)code=ini;else{if(dims.some(d=>d===null))E('taille du tableau « '+n+' » inconnue',l);code=`R.arr([${dims.join(',')}],${t==='S'?'""':'0'})`}}
    else if(eat('=')){const e=asg();if(t==='S')code=sconv(e);else{if(e.t==='S')E('on ne peut pas ranger une String dans un nombre : utilise .toInt()',l);code=conv(e,t)}}
    else code=t==='S'?'""':'0';
    decl(n,{t,dm:dims.length},l);
    if(global){out.push(`let u_${n};`);init.push(`u_${n}=${code};`)}else out.push(`let u_${n}=${code};`)
   }while(eat(','));need(';');return{decl:out.join(''),init:init.join('')}}
  function block(){need('{');scopes.push(new Map());let s='';while(!isO('}')){if(pk().k==='e')E('« } » manquante : le bloc n’est pas fermé');s+=stmt()}p++;scopes.pop();return'{'+s+'}'}
  function body(){const t=pk();if(isO('{'))return block();scopes.push(new Map());const s=stmt();scopes.pop();return'{'+s+'}'}
  function stmt(){const t=pk(),l=t.line;
   if(t.k==='o'){if(t.v==='{')return block();if(t.v===';'){p++;return''}}
   if(t.k==='i'){const v=t.v;
    if(v==='if'){p++;need('(');const c=comma();need(')');let s=`if(${c.c})${body()}`;if(isI('else')){p++;s+=`else ${isI('if')?stmt():body()}`}return s}
    if(v==='while'){p++;need('(');const c=comma();need(')');return`while(${c.c}){${TICK}${body()}}`}
    if(v==='do'){p++;const b=body();if(!isI('while'))E('« while » attendu après le « do »');p++;need('(');const c=comma();need(')');need(';');return`do{${TICK}${b}}while(${c.c});`}
    if(v==='for'){p++;need('(');scopes.push(new Map());let ini='';if(!isO(';')){if(tyStart()){const d=declLine(false);ini=d.decl.replace(/;$/,'');if(/;let /.test(ini))E('une seule déclaration dans le for',l)}else{ini=comma().c;need(';')}}else p++;
     let cd='';if(!isO(';'))cd=comma().c;need(';');let st='';if(!isO(')'))st=comma().c;need(')');const b=body();scopes.pop();return`for(${ini};${cd};${st}){${TICK}${b}}`}
    if(v==='switch'){p++;need('(');const c=comma();need(')');need('{');let s=`switch(${c.c}){`;scopes.push(new Map());while(!isO('}')){if(isI('case')){p++;const e=tern();need(':');s+=`case ${e.c}:`}else if(isI('default')){p++;need(':');s+='default:'}else{if(pk().k==='e')E('« } » manquante pour le switch');s+=stmt()}}p++;scopes.pop();return s+'}'}
    if(v==='break'||v==='continue'){p++;need(';');return v+';'}
    if(v==='return'){p++;if(eat(';'))return'return;';const e=comma();need(';');return`return ${retT==='v'?e.c:conv(e,retT)};`}
    if(v==='goto'||v==='struct'||v==='class'||v==='enum'||v==='typedef'||v==='template')E('« '+v+' » n’est pas géré dans LaboSim',l);
    if(tyStart()&&!isO('(',1))return declLine(false).decl}
   const e=comma();need(';');return e.c+';'}
  /* ----- programme ----- */
  let G_='',INIT='',FN='';
  while(pk().k!=='e'){const l=pk().line;
   if(isO(';')){p++;continue}
   if(!tyStart()){const t=pk();E(t.k==='i'?'instruction « '+t.v+' » en dehors d’une fonction (écris-la dans setup() ou loop())':'« '+t.v+' » inattendu en dehors d’une fonction',l)}
   const save=p,rt=parseType();
   if(pk().k==='i'&&isO('(',1)){const nm=ident();p++;if(look(nm))E('« '+nm+' » est déjà déclarée',l);const ps=[];if(isI('void')&&isO(')',1))p++;
    while(!isO(')')){const pt=parseType();if(pt==='v')E('paramètre de type void');const pn=ident();let dm=0;while(eat('[')){while(!isO(']'))p++;p++;dm++}ps.push({n:pn,t:pt,dm});if(!eat(','))break}need(')');
    if(eat(';'))continue;scopes.push(new Map());ps.forEach(q=>decl(q.n,{t:q.t,dm:q.dm},l));retT=rt;
    const b=block();scopes.pop();FN+=`function* f_${nm}(${ps.map(q=>'u_'+q.n).join(',')}){${ps.filter(q=>!q.dm&&q.t!=='S').map(q=>`u_${q.n}=${W(q.t,'u_'+q.n)};`).join('')}${b.slice(1)}\n`;continue}
   p=save;const d=declLine(true);G_+=d.decl;INIT+=d.init}
  if(!F.setup)E('il manque la fonction void setup()',1);if(!F.loop)E('il manque la fonction void loop()',1);
  const code=`let _t=0;${G_}\n${FN}function* _init(){${INIT}}\nfunction* _main(){yield* _init();yield* f_setup();for(;;){yield* f_loop();R.t+=R.lc;if(R.t>R.hz)yield 0}}\nreturn _main();`;
  let make;try{make=new Function('R',code)}catch(e){E('erreur interne de compilation : '+e.message,1)}
  return{ok:true,make,js:code}
 }catch(e){if(e&&e.msg!==undefined)return{ok:false,line:e.line,msg:e.msg};return{ok:false,line:0,msg:'erreur interne : '+(e&&e.message||e)}}}
/* ---------- Moteur d'exécution (temps virtuel en µs ; temps de simulation en s) ---------- */
const PWMP=[3,5,6,9,10,11];
function Engine(){const E=this;
 E.src='';E.prog=null;E.err=null;E.G=100;
 E.reset=function(){E.t=0;E.hz=0;E.simT=0;E.lc=3;E.mode=Array(20).fill(0);E.out=Array(20).fill(0);E.pwm=Array(20).fill(null);E.lvl=Array(20).fill(0);E.log=Array.from({length:20},()=>[]);E.pv=new Float64Array(20);E.pvp=new Float64Array(20);E.skip=Array(20).fill(false);
  E.ser='';E.serN=0;E.rx=[];E.baud=9600;E.txFree=0;E.seed=1;E.done=false;E.rt=null;E.gen=null;E.chg=true;E.started=false;E.fault='';E.base=0;E.fresh=null;E.fed=false;E.dirty=false;
  if(E.prog){try{E.gen=E.prog(E)}catch(x){E.fail(x)}}};
 E.load=function(src){const r=compile(src);E.src=src;if(!r.ok){E.err=r;E.prog=null;return r}E.err=null;E.prog=r.make;E.reset();return r};
 E.fail=function(x){E.done=true;E.fault=String(x&&x.message||x);E.emit('\n[Erreur d’exécution : '+E.fault+']\n')};
 E.run=function(vt){if(E.done||!E.gen)return;const vu=vt*1e6;E.simT=vu;E.hz=vu+E.G;E.started=true;let g=0;
  while(E.t<=vu+1e-3&&!E.done){let r;try{r=E.gen.next()}catch(x){E.fail(x);return}if(r.done){E.done=true;return}if(++g>100000){E.t=vu+E.G;break}}};
 /* sorties */
 E.drv=function(p,ts){const q=E.pwm[p];if(q){if(q.end&&ts*1e6>=q.end){E.pwm[p]=null;E.out[p]=0}else{const ph=ts*q.f,k=Math.floor(ph+1e-9);return(ph-k<q.d/255-1e-9)?1:2}}
  if(E.mode[p]===1)return E.out[p]?1:2;return E.mode[p]===2?3:0};
 E.nextEdge=function(ts){let b=Infinity;for(let p=0;p<20;p++){const q=E.pwm[p];if(!q)continue;const ph=ts*q.f,k=Math.floor(ph+1e-9),d=q.d/255;b=Math.min(b,(ph-k<d-1e-9)?(k+d)/q.f:(k+1)/q.f);if(q.end)b=Math.min(b,q.end*1e-6)}return b};
 E.feed=function(t0,t1,pv){E.pvp.set(E.pv);E.pv.set(pv);for(let p=0;p<20;p++){const v=E.pv[p],o=E.pvp[p],l=E.lvl[p],n=l?(v>1.5?1:0):(v>3?1:0);if(n!==l){E.lvl[p]=n;if(E.skip[p])continue;const th=n?3:1.5,f=Math.abs(v-o)<1e-12?1:Math.min(1,Math.max(0,(th-o)/(v-o)));const lg=E.log[p];lg.push([(t0+f*(t1-t0))*1e6,n]);if(lg.length>48)lg.splice(0,16)}}E.skip.fill(false);E.fed=true;E.dirty=false};
 E.edge=function(p,tUs,l){const lg=E.log[p];lg.push([tUs,l]);if(lg.length>48)lg.splice(0,16);E.skip[p]=true;E.lvl[p]=l};
 E.findEdge=function(p,l,after){const lg=E.log[p];for(let i=0;i<lg.length;i++)if(lg[i][0]>after&&lg[i][1]===l)return lg[i][0];return null};
 /* API Arduino */
 const pn=p=>{p=Math.trunc(+p);return p>=0&&p<20?p:-1};
 E.need=()=>E.sim&&(E.dirty||!E.fed);
 E.pinMode=(p,m)=>{p=pn(p);if(p<0)return;E.dirty=true;E.mode[p]=m;E.hz=Math.min(E.hz,E.t);if(m!==1)E.pwm[p]=null;E.t+=5;E.chg=true};
 E.digitalWrite=(p,v)=>{p=pn(p);if(p<0)return;E.dirty=true;E.t+=5;E.pwm[p]=null;if(E.mode[p]===1){if(E.out[p]!==(v?1:0))E.hz=Math.min(E.hz,E.t);E.out[p]=v?1:0;E.chg=true}else{E.mode[p]=v?2:0;E.chg=true}};
 E.digitalRead=function*(p){if(E.need()){E.t=Math.max(E.t,E.simT)+1;yield 0}p=pn(p);E.t+=5;if(p<0)return 0;return E.mode[p]===1?E.out[p]:E.lvl[p]};
 E.analogRead=function*(p){if(E.need()){E.t=Math.max(E.t,E.simT)+1;yield 0}p=Math.trunc(+p);if(p>=0&&p<6)p+=14;E.t+=112;if(p<14||p>19)return 0;return Math.max(0,Math.min(1023,Math.floor(E.pv[p]/5*1024)))};
 E.analogWrite=(p,v)=>{p=pn(p);if(p<0)return;E.dirty=true;E.t+=5;v=Math.max(0,Math.min(255,Math.trunc(+v)));E.mode[p]=1;E.chg=true;if(!PWMP.includes(p)){E.pwm[p]=null;E.out[p]=v>=128?1:0;return}E.hz=Math.min(E.hz,E.t);if(v===0||v===255){E.pwm[p]=null;E.out[p]=v?1:0}else E.pwm[p]={f:(p===5||p===6)?976:490,d:v}};
 E.tone=(p,f,d)=>{p=pn(p);if(p<0||!(f>0))return;E.t+=5;E.mode[p]=1;E.chg=true;E.pwm[p]={f:+f,d:128,end:d?E.t+d*1000:0}};
 E.noTone=p=>{p=pn(p);if(p<0)return;E.pwm[p]=null;E.out[p]=0;E.chg=true};
 E.analogReference=()=>{};
 E.delay=function*(ms){E.t+=Math.max(0,+ms)*1000;if(E.t>E.simT)yield 0};
 E.delayMicroseconds=function*(us){E.t+=Math.max(0,+us)+.5;if(E.t>E.simT)yield 0};
 E.millis=()=>Math.floor((E.t-E.base)/1000)>>>0;E.micros=()=>Math.floor(E.t-E.base)>>>0;
 E.pulseIn=function*(p,l,to){p=pn(p);l=l?1:0;to=to===undefined?1e6:+to;const t0=E.t,dl=t0+to;let e1=null;E.t+=3;
  for(;;){e1=E.findEdge(p,l,t0);if(e1!==null)break;if(E.simT>=dl){E.t=Math.max(E.t,dl);return 0}E.t=Math.max(E.t,E.simT)+1;yield 1}
  const d2=e1+to;let e2=null;for(;;){e2=E.findEdge(p,1-l,e1);if(e2!==null)break;if(E.simT>=d2){E.t=Math.max(E.t,d2);return 0}E.t=Math.max(E.t,E.simT)+1;yield 1}
  E.t=Math.max(E.t,e2);return Math.round(e2-e1)>>>0};
 E.random=(a,b)=>{E.seed=(Math.imul(E.seed,1103515245)+12345)&0x7fffffff;const r=E.seed>>4;if(b===undefined)return a>0?r%a:0;return b>a?a+r%(b-a):a};E.randomSeed=s=>{E.seed=(+s)|0};
 E.map=(x,a,b,c,d)=>b===a?c:Math.trunc((x-a)*(d-c)/(b-a))+c;E.constrain=(x,a,b)=>x<a?a:x>b?b:x;E.round=x=>Math.sign(x)*Math.round(Math.abs(x))|0;E.radians=x=>x*Math.PI/180;E.degrees=x=>x*180/Math.PI;
 E.idiv=(a,b)=>b===0?0:Math.trunc(a/b);E.imod=(a,b)=>b===0?0:a%b;
 E.arr=(d,v)=>{const mk=i=>Array.from({length:Math.max(0,d[i]|0)},()=>i+1<d.length?mk(i+1):v);return mk(0)};
 /* texte */
 E.s=(x,t)=>t==='S'?x:t==='f'?E.fs(x,2):t==='i8'?String.fromCharCode(x&255):String(x);
 E.fs=(x,n)=>isNaN(x)?'nan':!isFinite(x)?(x<0?'-inf':'inf'):x.toFixed(Math.max(0,Math.min(9,n|0)));
 E.sb=(x,b)=>(b===16?(x>>>0).toString(16).toUpperCase():b===2?(x>>>0).toString(2):b===8?(x>>>0).toString(8):String(x));
 E.ch=(s,i)=>i>=0&&i<s.length?s.charCodeAt(i):0;E.sub=(s,a,b)=>b===undefined?s.slice(Math.max(0,a)):s.slice(Math.max(0,a),b);E.rem=(s,a,n)=>n===undefined?s.slice(0,a):s.slice(0,a)+s.slice(a+n);
 E.toInt=s=>{const m=String(s).trim().match(/^[+-]?\d+/);return m?parseInt(m[0],10)|0:0};E.toFloat=s=>{const m=String(s).trim().match(/^[+-]?(\d+\.?\d*|\.\d+)/);return m?parseFloat(m[0]):0};
 E.emit=function(s){if(!s)return;E.ser+=s;E.serN+=s.length;if(E.ser.length>30000)E.ser=E.ser.slice(-20000);const ct=1e7/E.baud;E.txFree=Math.max(E.txFree,E.t)+s.length*ct;const mx=64*ct;if(E.txFree-E.t>mx)E.t=E.txFree-mx};
 E.sp=(x,t,a,nl)=>{let s;if(t==='f')s=E.fs(x,a===undefined?2:a);else if(t==='S')s=x;else if(t==='i8'&&a===undefined)s=String.fromCharCode(x&255);else if(a===16||a===2||a===8)s=E.sb(t==='i16'?x&65535:x,a);else s=String(x);E.emit(nl?s+'\r\n':s)};
 E.s_begin=b=>{E.baud=+b||9600};E.s_end=()=>{};E.s_flush=()=>{};E.s_setTimeout=()=>{};E.s_write=x=>{E.emit(typeof x==='string'?x:String.fromCharCode(x&255))};
 E.s_available=()=>E.rx.length;E.s_read=()=>E.rx.length?E.rx.shift():-1;E.s_peek=()=>E.rx.length?E.rx[0]:-1;
 E.s_parseInt=()=>{while(E.rx.length&&!/[-0-9]/.test(String.fromCharCode(E.rx[0])))E.rx.shift();let s='';while(E.rx.length&&/[-0-9]/.test(String.fromCharCode(E.rx[0])))s+=String.fromCharCode(E.rx.shift());return E.toInt(s)};
 E.s_parseFloat=()=>{while(E.rx.length&&!/[-0-9.]/.test(String.fromCharCode(E.rx[0])))E.rx.shift();let s='';while(E.rx.length&&/[-0-9.]/.test(String.fromCharCode(E.rx[0])))s+=String.fromCharCode(E.rx.shift());return E.toFloat(s)};
 E.s_readString=()=>{const s=String.fromCharCode(...E.rx);E.rx=[];return s};E.s_readStringUntil=c=>{let s='';while(E.rx.length){const x=E.rx.shift();if(x===c)break;s+=String.fromCharCode(x)}return s};
 E.send=function(txt){for(const ch of String(txt))E.rx.push(ch.charCodeAt(0)&255)};
 E.reset()}
const EXAMPLES=[
{n:'Blink – LED sur D8',code:`// Clignotement : LED + résistance sur la broche 8
// (la LED « L » de la carte est reliée à la broche 13)
const int led = 8;

void setup() {
  pinMode(led, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);            // 500 ms
  digitalWrite(led, LOW);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
`},
{n:'Veilleuse – photorésistance (A0) → LED (D8)',code:`// Pont diviseur : 5 V – LDR – A0 – 10 kΩ – GND
const int capteur = A0;
const int led = 8;
const int seuil = 400;     // 0 à 1023

void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int valeur = analogRead(capteur);
  Serial.print("Lumiere : ");
  Serial.println(valeur);
  if (valeur < seuil) {
    digitalWrite(led, HIGH);   // il fait nuit
  } else {
    digitalWrite(led, LOW);
  }
  delay(200);
}
`},
{n:'Radar de recul – HC-SR04 (TRIG D7, ECHO D6)',code:`// Mesure de distance par ultrason
const int trig = 7;
const int echo = 6;
const int buzzer = 8;      // LED d'alerte

void setup() {
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  pinMode(buzzer, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);     // impulsion de 10 µs
  digitalWrite(trig, LOW);

  long duree = pulseIn(echo, HIGH, 30000);   // en µs
  float distance = duree * 0.0343 / 2;       // en cm

  Serial.print("Distance : ");
  Serial.print(distance);
  Serial.println(" cm");

  digitalWrite(buzzer, distance > 0 && distance < 20);
  delay(300);
}
`},
{n:'Variateur – potentiomètre (A1) → LED en PWM (D9)',code:`// analogRead : 0 à 1023 ; analogWrite : 0 à 255
const int pot = A1;
const int led = 9;         // broche PWM (~)

void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lecture = analogRead(pot);
  int duree = map(lecture, 0, 1023, 0, 255);
  analogWrite(led, duree);
  Serial.print(lecture);
  Serial.print(" -> ");
  Serial.println(duree);
  delay(100);
}
`},
{n:'Bouton poussoir (D2) – compteur d’appuis',code:`// Bouton entre D2 et GND (résistance de rappel interne)
const int bouton = 2;
const int led = 8;
int compteur = 0;
bool avant = HIGH;

void setup() {
  pinMode(bouton, INPUT_PULLUP);
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool etat = digitalRead(bouton);     // LOW quand on appuie
  digitalWrite(led, !etat);
  if (avant == HIGH && etat == LOW) {
    compteur++;
    Serial.print("Appuis : ");
    Serial.println(compteur);
  }
  avant = etat;
  delay(10);
}
`},
{n:'Feu tricolore (D10 rouge, D9 orange, D8 vert)',code:`const int rouge = 10;
const int orange = 9;
const int vert = 8;

void feu(int r, int o, int v, long duree) {
  digitalWrite(rouge, r);
  digitalWrite(orange, o);
  digitalWrite(vert, v);
  delay(duree);
}

void setup() {
  pinMode(rouge, OUTPUT);
  pinMode(orange, OUTPUT);
  pinMode(vert, OUTPUT);
}

void loop() {
  feu(1, 0, 0, 3000);   // rouge
  feu(0, 0, 1, 3000);   // vert
  feu(0, 1, 0, 1000);   // orange
}
`}];
G.LaboArduino={compile,Engine,EXAMPLES,PWMP};
if(typeof module!=='undefined'&&module.exports)module.exports=G.LaboArduino;
})(typeof window!=='undefined'?window:globalThis);
