<<<<<<< HEAD
function aa(a){throw a;}var f=void 0,i=!0,k=null,l=!1;function n(){return function(){}}function ba(a){return function(b){this[a]=b}}function o(a){return function(){return this[a]}}function r(a){return function(){return a}}var s,ca=this;
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"string"==typeof a}var fa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ga=0,ia=Date.now||function(){return+new Date};function ja(a,b){var c=a.split("."),d=ca;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==f?d[e]=b:d=d[e]?d[e]:d[e]={}}
function ka(a,b){function c(){}c.prototype=b.prototype;a.Cn=b.prototype;a.prototype=new c;a.prototype.constructor=a}function la(a,b){for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a}function ma(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sa,"&quot;"));return a}
var oa=/&/g,pa=/</g,ra=/>/g,sa=/\"/g,na=/[&<>\"]/;var ta,ua,va,wa;function xa(){return ca.navigator?ca.navigator.userAgent:k}wa=va=ua=ta=l;var ya;if(ya=xa()){var za=ca.navigator;ta=0==ya.indexOf("Opera");ua=!ta&&-1!=ya.indexOf("MSIE");va=!ta&&-1!=ya.indexOf("WebKit");wa=!ta&&!va&&"Gecko"==za.product}var Aa=ua,Ba=wa,Ca=va,Da;
a:{var Ea="",Fa;if(ta&&ca.opera)var Ga=ca.opera.version,Ea="function"==typeof Ga?Ga():Ga;else if(Ba?Fa=/rv\:([^\);]+)(\)|;)/:Aa?Fa=/MSIE\s+([^\);]+)(\)|;)/:Ca&&(Fa=/WebKit\/(\S+)/),Fa)var Ha=Fa.exec(xa()),Ea=Ha?Ha[1]:"";if(Aa){var Ia,Ja=ca.document;Ia=Ja?Ja.documentMode:f;if(Ia>parseFloat(Ea)){Da=""+Ia;break a}}Da=Ea}var Ka={};
function La(a){if(!Ka[a]){for(var b=0,c=(""+Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",j=d[g]||"",m=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=m.exec(h)||["","",""],x=p.exec(j)||["","",""];if(0==q[0].length&&0==x[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==x[1].length?0:parseInt(x[1],10))?-1:(0==q[1].length?0:parseInt(q[1],10))>(0==
x[1].length?0:parseInt(x[1],10))?1:0)||((0==q[2].length)<(0==x[2].length)?-1:(0==q[2].length)>(0==x[2].length)?1:0)||(q[2]<x[2]?-1:q[2]>x[2]?1:0)}while(0==b)}Ka[a]=0<=b}}var Ma={};function Na(){return Ma[9]||(Ma[9]=Aa&&document.documentMode&&9<=document.documentMode)}function Oa(){this.pi=ia()}new Oa;Oa.prototype.set=ba("pi");Oa.prototype.reset=function(){this.set(ia())};Oa.prototype.get=o("pi");function Pa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Qa(a){this.stack=Error().stack||"";a&&(this.message=""+a)}ka(Qa,Error);Qa.prototype.name="CustomError";function Ra(a,b){b.unshift(a);Qa.call(this,la.apply(k,b));b.shift()}ka(Ra,Qa);Ra.prototype.name="AssertionError";function Sa(a,b){aa(new Ra("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))}
var Ta=Array.prototype,Ua=Ta.indexOf?function(a,b,c){return Ta.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(ea(a))return!ea(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function Va(a,b,c,d){Ta.splice.apply(a,Wa(arguments,1))}function Wa(a,b,c){return 2>=arguments.length?Ta.slice.call(a,b):Ta.slice.call(a,b,c)}
function Xa(a,b,c){for(var d=0,e=a.length,g;d<e;){var h=d+e>>1,j;j=b(c,a[h]);0<j?d=h+1:(e=h,g=!j)}return g?d:~d}function Ya(a,b){return a>b?1:a<b?-1:0}function Za(a){if("function"==typeof a.Cd)return a.Cd();if(ea(a))return a.split("");var b=da(a);if("array"==b||"object"==b&&"number"==typeof a.length){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Pa(a)}
function $a(a,b){this.Ca={};this.Ba=[];var c=arguments.length;if(1<c){c%2&&aa(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.uf(a)}s=$a.prototype;s.Lc=0;s.Cd=function(){ab(this);for(var a=[],b=0;b<this.Ba.length;b++)a.push(this.Ca[this.Ba[b]]);return a};s.clear=function(){this.Ca={};this.Lc=this.Ba.length=0};s.remove=function(a){return bb(this.Ca,a)?(delete this.Ca[a],this.Lc--,this.Ba.length>2*this.Lc&&ab(this),i):l};
function ab(a){if(a.Lc!=a.Ba.length){for(var b=0,c=0;b<a.Ba.length;){var d=a.Ba[b];bb(a.Ca,d)&&(a.Ba[c++]=d);b++}a.Ba.length=c}if(a.Lc!=a.Ba.length){for(var e={},c=b=0;b<a.Ba.length;)d=a.Ba[b],bb(e,d)||(a.Ba[c++]=d,e[d]=1),b++;a.Ba.length=c}}s.get=function(a,b){return bb(this.Ca,a)?this.Ca[a]:b};s.set=function(a,b){bb(this.Ca,a)||(this.Lc++,this.Ba.push(a));this.Ca[a]=b};
s.uf=function(a){var b;if(a instanceof $a)ab(a),b=a.Ba.concat(),a=a.Cd();else{b=[];var c=0,d;for(d in a)b[c++]=d;a=Pa(a)}for(c=0;c<b.length;c++)this.set(b[c],a[c])};s.clone=function(){return new $a(this)};function bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function cb(a){this.Ca=new $a;a&&this.uf(a)}function db(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[fa]||(a[fa]=++ga)):b.substr(0,1)+a}s=cb.prototype;s.add=function(a){this.Ca.set(db(a),a)};
s.uf=function(a){for(var a=Za(a),b=a.length,c=0;c<b;c++)this.add(a[c])};s.remove=function(a){return this.Ca.remove(db(a))};s.clear=function(){this.Ca.clear()};s.contains=function(a){a=db(a);return bb(this.Ca.Ca,a)};s.Cd=function(){return this.Ca.Cd()};s.clone=function(){return new cb(this)};function eb(a){return fb(a||arguments.callee.caller,[])}
function fb(a,b){var c=[];if(0<=Ua(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(gb(a)+"(");for(var d=a.arguments,e=0;e<d.length;e++){0<e&&c.push(", ");var g;g=d[e];switch(typeof g){case "object":g=g?"object":"null";break;case "string":break;case "number":g=""+g;break;case "boolean":g=g?"true":"false";break;case "function":g=(g=gb(g))?g:"[fn]";break;default:g=typeof g}40<g.length&&(g=g.substr(0,40)+"...");c.push(g)}b.push(a);c.push(")\n");try{c.push(fb(a.caller,b))}catch(h){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function gb(a){if(hb[a])return hb[a];a=""+a;if(!hb[a]){var b=/function ([^\(]+)/.exec(a);hb[a]=b?b[1]:"[Anonymous]"}return hb[a]}var hb={};function ib(a,b,c,d,e){this.reset(a,b,c,d,e)}ib.prototype.hh=k;ib.prototype.gh=k;var jb=0;ib.prototype.reset=function(a,b,c,d,e){"number"==typeof e||jb++;d||ia();this.Id=a;this.bl=b;delete this.hh;delete this.gh};ib.prototype.si=ba("Id");function kb(a){this.fi=a}kb.prototype.Xe=k;kb.prototype.Id=k;
kb.prototype.Cf=k;kb.prototype.Lh=k;function lb(a,b){this.name=a;this.value=b}lb.prototype.toString=o("name");var mb=new lb("SHOUT",1200),nb=new lb("CONFIG",700);s=kb.prototype;s.getName=o("fi");s.getParent=o("Xe");s.si=ba("Id");function ob(a){if(a.Id)return a.Id;if(a.Xe)return ob(a.Xe);Sa("Root logger has no level set.");return k}
s.log=function(a,b,c){if(a.value>=ob(this).value){a=this.ak(a,b,c);b="log:"+a.bl;ca.console&&(ca.console.timeStamp?ca.console.timeStamp(b):ca.console.markTimeline&&ca.console.markTimeline(b));ca.msWriteProfilerMark&&ca.msWriteProfilerMark(b);for(b=this;b;){var c=b,d=a;if(c.Lh)for(var e=0,g=f;g=c.Lh[e];e++)g(d);b=b.getParent()}}};
s.ak=function(a,b,c){var d=new ib(a,""+b,this.fi);if(c){d.hh=c;var e;var g=arguments.callee.caller;try{var h;var j;c:{for(var m=["window","location","href"],p=ca,q;q=m.shift();)if(p[q]!=k)p=p[q];else{j=k;break c}j=p}if(ea(c))h={message:c,name:"Unknown error",lineNumber:"Not available",fileName:j,stack:"Not available"};else{var x,A,m=l;try{x=c.lineNumber||c.Vb||"Not available"}catch(D){x="Not available",m=i}try{A=c.fileName||c.filename||c.sourceURL||j}catch(qa){A="Not available",m=i}h=m||!c.lineNumber||
!c.fileName||!c.stack?{message:c.message,name:c.name,lineNumber:x,fileName:A,stack:c.stack||"Not available"}:c}e="Message: "+ma(h.message)+'\nUrl: <a href="view-source:'+h.fileName+'" target="_new">'+h.fileName+"</a>\nLine: "+h.lineNumber+"\n\nBrowser stack:\n"+ma(h.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ma(eb(g)+"-> ")}catch(ha){e="Exception trying to expose exception! You win, we lose. "+ha}d.gh=e}return d};function t(a,b){a.log(mb,b,f)}var pb={},qb=k;
function rb(a){qb||(qb=new kb(""),pb[""]=qb,qb.si(nb));var b;if(!(b=pb[a])){b=new kb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=rb(a.substr(0,c));c.Cf||(c.Cf={});c.Cf[d]=b;b.Xe=c;pb[a]=b}return b}!Aa||Na();!Ba&&!Aa||Aa&&Na()||Ba&&La("1.9.1");Aa&&La("9");function sb(a,b,c){for(var d in b)a[d]=a[d]!==f&&c?c(a[d],b[d]):b[d];return a}function tb(a,b){"object"!==typeof a&&aa(TypeError());var c=[],d;for(d in a)a.hasOwnProperty(d)&&(!b||b.test(d))&&c.push(d);return c}
function ub(a,b){for(var c in b)"function"!==typeof b[c]&&(a[c]=b[c]);return a}function u(a,b){a.a=b.prototype;a.prototype=new b;a.prototype.constructor=a}function v(a,b){var c=a.prototype,d=b.prototype,e;for(e in d)"function"!==typeof d[e]&&aa(Error("ScoreLibrary.aggregate: unexpect!")),"constructor"!==e&&(c[e]=d[e])}function vb(){}
function wb(a){function b(a){return function(){return a.apply(this.delegate?this.delegate:this,arguments)}}var c=w;v(a,vb);var a=a.prototype,c=c.prototype,d;for(d in c){var e=c[d];"function"===typeof e&&"constructor"!==d&&(a[d]=b(e))}}var z;z=rb("ScoreLibrary");z.rm=function(a,b){if("undefined"==typeof a)return"undefined";if(a==k)return"NULL";var c=[],d;for(d in a)if(b||"function"!=da(a[d])){var e=d+" = ";try{e+=a[d]}catch(g){e+="*** "+g+" ***"}c.push(e)}return c.join("\n")};
z.Y=function(a){function b(a,g){var h=g+"  ";try{if(a!==f)if(a===k)d.push("NULL");else if(ea(a))d.push('"'+a.replace(/\n/g,"\n"+g)+'"');else if("function"==da(a))d.push((""+a).replace(/\n/g,"\n"+g));else{var j=da(a);if("object"==j||"array"==j||"function"==j)if(c.contains(a))d.push("*** reference loop detected ***");else{c.add(a);d.push("{");for(var m in a)"function"!=da(a[m])&&(d.push("\n"),d.push(h),d.push(m+" = "),b(a[m],h));d.push("\n"+g+"}")}else d.push(a)}else d.push("undefined")}catch(p){d.push("*** "+
p+" ***")}}var c=new cb,d=[];b(a,"");return d.join("")};function xb(){}var B=B||new xb;xb.prototype.toString=r("Renderer.PaintHelper");xb.prototype.J=function(a,b,c,d,e){a.moveTo(b,c);a.lineTo(d,e)};function yb(a,b,c,d,e,g,h){var j=g?1:-1,g=2*j,m=d-b,p=e-c,q=0.4*m;h>q&&20>p&&(h=q);h*=j;q=p/m;j=b+0.25*m;p=c+(j-b)*q+h;m=d-0.25*m;h=c+(m-b)*q+h;a.moveTo(b,c);a.bezierCurveTo(j,p,m,h,d,e);a.bezierCurveTo(m,h+g,j,p+g,b,c)}
function zb(a,b,c,d,e,g,h,j,m,p){j="dashed"===j?a.Mc:a.J;h&1||j.call(a,b,c,d,c,d+g,m,p);h&2||j.call(a,b,c,d+g,c+e,d+g,m,p);h&4||j.call(a,b,c+e,d+g,c+e,d,m,p);h&8||j.call(a,b,c+e,d,c,d,m,p)}xb.prototype.Mc=function(a,b,c,d,e,g,h){for(var g=g||5,h=h||5,d=d-b,e=e-c,j=Math.abs(Math.sqrt(Math.pow(d,2)+Math.pow(e,2))),m=i,p=0,q=b,x=c;p<j;){var A=j-p,D=m?g:h,p=p+(A<D?A:D),A=b+p*d/j,D=c+p*e/j;m&&this.J(a,q,x,A,D);q=A;x=D;m=!m}};function Ab(){}
function Bb(a,b){for(var c in b)if(b[c]<a.i(c))return l;for(c in b)Cb(a,c,b[c]);return i}Ab.prototype.wa=function(a){return!Bb(this,a)?l:i};function Db(){}function Eb(a){/(width|height)/.test(a)}function Fb(a){0<=a||aa(RangeError("Renderer.Requisition.validateVal(): invalid argument!"))}Db.prototype.Ya=function(a){Eb(a);return this["implicit_"+a]||0};function Gb(a,b,c){Eb(b);Fb(c);a["implicit_"+b]=c}function Hb(a,b){Eb(b);return a["explicit_"+b]}function C(a,b,c){Eb(b);Fb(c);a["explicit_"+b]=c}
Db.prototype.i=function(a){Eb(a);var b=Hb(this,a),a=this.Ya(a);return b?Math.max(b,a):a};function Ib(a,b){var c=a["allocate_"+b];Fb(c);return c}function Cb(a,b,c){c>=a.i(b)||aa(RangeError("Renderer.Requisition.setAllocate(): invalid argument!"));a["allocate_"+b]=c}function E(a,b,c){/(x|y)/.test(c);return a[b+"_"+c]}function F(a,b,c,d){/(x|y)/.test(c);a[b+"_"+c]=d}function Jb(){}var Kb={xa:1,ya:0,za:0,Aa:1,x:0,y:0};
function Lb(a,b){var c={};c.xa=a.xa*b.xa+a.za*b.ya;c.ya=a.ya*b.xa+a.Aa*b.ya;c.za=a.xa*b.za+a.za*b.Aa;c.Aa=a.ya*b.za+a.Aa*b.Aa;c.x=a.xa*b.x+a.za*b.y+1*a.x;c.y=a.ya*b.x+a.Aa*b.y+1*a.y;return c}Jb.prototype.xh=function(){return this.ci?{xa:this.Xh,ya:this.Yh,za:this.Zh,Aa:this.$h,x:this.ai,y:this.bi}:f};Jb.prototype.transform=function(a){a.transform(this.Xh,this.Yh,this.Zh,this.$h,this.ai,this.bi)};function Mb(){this.id=++Nb;this.debug=l}v(Mb,Db);v(Mb,n());v(Mb,Jb);v(Mb,Ab);var Nb=Nb||0;
Mb.prototype.toString=r("Renderer.Paintable");Mb.prototype.clone=function(a){a=a||new Mb;ub(a,this);return a};var Ob=Ob||f;function Pb(a){var b=Ob;return b===f||b===a.id||a.debug}var Qb=Qb||l;Mb.prototype.p=function(a){if(Qb&&Pb(this)){a.save();a.X(1);a.qa("#209424");a.beginPath();var b=Ib(this,"width"),c=Ib(this,"height");0===b?B.J(a,0.5,0.5,0.5,c-0.5):0===c?B.J(a,0.5,0.5,b-0.5,0.5):a.rect(0.5,0.5,b-1,c-1);a.stroke();a.restore()}};
function Rb(a,b){this.target=a;b&&(this.xa=b.xa,this.ya=b.ya,this.za=b.za,this.Aa=b.Aa,this.x=b.x,this.y=b.y)}Rb.prototype.toString=r("Renderer.PaintableTransformer");Rb.prototype.xh=function(){return{xa:this.xa,ya:this.ya,za:this.za,Aa:this.Aa,x:this.x,y:this.y}};Rb.prototype.transform=function(){var a=this,b=sb({},Kb);do{if(Mb.prototype.isPrototypeOf(a)){var c=a,a=b;c.ci&&(a=Lb(c.xh(),a));c.ci=i;c.Xh=a.xa;c.Yh=a.ya;c.Zh=a.za;c.$h=a.Aa;c.ai=a.x;c.bi=a.y;break}b=Lb(b,a);a=a.target}while(1);return b};
function Sb(a,b,c){this.yl=b!==f?b:1;this.zl=c!==f?c:1;Sb.a.constructor.call(this,a,{xa:this.yl,ya:0,za:0,Aa:this.zl,x:0,y:0})}u(Sb,Rb);Sb.prototype.toString=r("Renderer.PaintableScaler");function Tb(a,b){this.bf=b||0;var c=Math.cos(this.bf),d=Math.sin(this.bf);Tb.a.constructor.call(this,a,{xa:c,ya:d,za:-d,Aa:c,x:0,y:0})}u(Tb,Rb);Tb.prototype.toString=r("Renderer.PaintableRotator");
function Ub(a,b,c){this.$k=b!==f?b:0;this.al=c!==f?c:0;Ub.a.constructor.call(this,a,{xa:1,ya:0,za:0,Aa:1,x:this.$k,y:this.al})}u(Ub,Rb);Ub.prototype.toString=r("Renderer.PaintableTranslator");function Vb(a,b){this.fg=b?i:l;Vb.a.constructor.call(this,a,{xa:this.fg?-1:1,ya:0,za:0,Aa:this.fg?1:-1,x:0,y:0})}u(Vb,Rb);Vb.prototype.toString=r("Renderer.PaintableMirror");Vb.prototype.Qh=o("fg");function Wb(a){Wb.a.constructor.call(this);this.sa=a;this.Ed=a.name}u(Wb,Mb);s=Wb.prototype;s.toString=r("Renderer.Glyph");
s.clone=function(a){a=a||new Wb(this.sa);return Wb.a.clone.call(this,a)};s.getName=function(){return this.sa.name};s.uh=function(){return 0<this.sa.width?this.sa.height/this.sa.width:1};s.Eh=function(){return 0<this.sa.height?this.sa.width/this.sa.height:1};s.dd=function(a){this.qg=i;this.sg=a.e;this.ug=a.c;this.rg=a.f;this.tg=a.d};s.P=function(){var a=f;return a=this.qg?{e:this.sg,c:this.ug,f:this.rg,d:this.tg}:{e:this.sa.e,c:this.sa.c,f:this.sa.f,d:this.sa.d}};
s.zh=function(){this.sa.outline===f&&this.sa.g!==f&&(this.sa.outline=this.sa.g.split(" "));return this.sa.outline};
s.p=function(a){Wb.a.p.call(this,a);a.save();this.transform(a);a.X(1);a.qa("#000000");a.beginPath();if(!(0>=this.sa.width)){var b=this.zh();if(b!==f)for(var c=b.length,d=0;d<c;)switch(b[d++]){case "m":a.moveTo(b[d++],b[d++]);break;case "l":a.lineTo(b[d++],b[d++]);break;case "q":var e=b[d++],g=b[d++];a.quadraticCurveTo(b[d++],b[d++],e,g);break;case "b":e=b[d++],g=b[d++],a.bezierCurveTo(b[d++],b[d++],b[d++],b[d++],e,g)}}a.closePath();a.fill();a.restore()};function Xb(){}
function Yb(a){var b=Zb;a.sd=a.sd||[];a.sd.some(function(a){return b.ih===a.ih?i:l})||a.sd.push(b)}function $b(a,b){a.tc===f&&(a.tc={},a.sd.forEach(function(a){for(var b in a.tc){var e=a.tc[b],g=e.name;e.fm=b;this.tc[g]=e}},a));return a.tc[b]}function ac(a,b){var c=f;a.sd.some(function(a){return(c=a.tc[b])!==f?i:l});return c}function G(a,b,c,d){a=$b(a,b);b=a!==f?new Wb(a):f;return bc(a,b,c,d)}function cc(a,b,c){a=ac(a,b);b=a!==f?new Wb(a):f;return bc(a,b,f,c)}
function bc(a,b,c,d){if(b!==f&&(c!==f?d=c*b.uh():d!==f&&(c=d*b.Eh()),C(b,"width",c),C(b,"height",d),a.width)){a=c/a.width;c=new Sb(b,a,a);d=b.P();d.e*=a;d.c*=a;d.f*=a;d.d*=a;b.dd(d);if(0!==d.e||0!==d.c)c=new Ub(c,-d.e,-d.c);c.transform()}return b}function dc(a){this.context=a;this.style=ec;this.Ea=16}var ec=0;function fc(a){a.z===f&&(a.z=new Xb);return a.z}s=dc.prototype;
s.fillText=function(a,b,c,d,e){e!==f&&(this.style=3,this.hb=e);return this.style!==ec?(this.context.save(),this.context.translate(b,c),b=this.xj,c=this.Ph,d=this.kj,3!==this.style&&(c=this.Oh,d=this.jj),gc(this,b,c,d,a),this.context.restore(),i):l};s.measureText=function(a,b){b!==f&&(this.style=3,this.hb=b);if(this.style!==ec){this.wc=0;var c=this.Xk,d=this.Ph,e=this.Wk;3!==this.style&&(d=this.Oh,e=this.Vk);gc(this,c,d,e,a);return this.wc}};
s.xj=function(a){var b=this.style;this.style=ec;this.context.fillText(a,0,0);this.context.translate(this.context.measureText(a),0);this.style=b};s.Xk=function(a){var b=this.style;this.style=ec;a=this.context.measureText(a);this.style=b;this.wc+=a};
function gc(a,b,c,d,e){for(var g="",h=0;h<e.length;++h){var j=e.charAt(h);switch(a.style){case 1:d.call(a,j,h,e);break;case 2:case 3:c.call(a,j,h,e)?(""!==g&&(b.call(a,g),g=""),d.call(a,j,h,e)&&++h):g+=j}}(2===a.style||3===a.style)&&""!==g&&b.call(a,g)}s.Oh=function(a){return!/\d/.test(a)&&ac(this.z,a)!==f?i:l};
s.jj=function(a){var a=cc(this.z,a,this.Ea),b=a.i("width"),c=a.i("height");Cb(a,"width",b);Cb(a,"height",c);this.context.save();this.context.transform(1,0,0,-1,0,0);a.p(this.context);this.context.restore();this.context.translate(b,0);return l};s.Ph=function(a,b,c){return"%"===a&&b+1<c.length&&(a=c.charAt(b+1),"%"===a||/\d/.test(a)&&this.hb!==f&&a<this.hb.length)?i:l};
s.kj=function(a,b,c){a=c.charAt(b+1);if("%"!==a){a=this.hb[a];b=a.i("width");c=a.i("height");Cb(a,"width",b);Cb(a,"height",c);this.context.save();c=0;switch(this.context.Bh()){case "top":c=this.Ea;break;case "middle":c=0.2*this.Ea}var d=hc(this,a);this.context.transform(d,0,0,-d,0,c);a.p(this.context);this.context.restore();this.context.translate(b*d,0)}return i};s.Vk=function(a){this.wc+=cc(this.z,a,this.Ea).i("width");return l};
function hc(a,b){var c=b.i("height");"Note"===b.toString()&&(c=b.aa().i("height"));return c*a.Ea/250}s.Wk=function(a,b,c){a=c.charAt(b+1);"%"!==a&&(a=this.hb[a],b=hc(this,a),this.wc+=a.i("width")*b);return i};function ic(a){this.Cb=a}s=ic.prototype;s.kb=function(){return this.Cb.prop("width")};s.Xa=function(){return this.Cb.prop("height")};s.resize=function(a,b){this.Cb.prop({width:a,height:b})};s.save=n();s.restore=n();s.transform=n();s.beginPath=n();s.closePath=n();s.moveTo=n();s.lineTo=n();
s.clearRect=n();s.rect=n();s.X=n();s.tb=n();s.qa=n();var jc=l;s=ic.prototype;s.stroke=n();s.fill=n();s.Td=n();function kc(a){a.Ug===f&&(a.Ug=new dc(a));return a.Ug}s.measureText=function(a,b){var c=f;try{c=kc(this).measureText(a,b)}catch(d){t(z,"ERROR: caught exception "+z.Y(d)+"in ScoreLibrary.Renderer.PaintContext.measureText()!")}return c};s.fillText=function(a,b,c,d,e){var g=l;try{g=kc(this).fillText(a,b,c,d,e)}catch(h){t(z,"ERROR: caught exception "+z.Y(h)+"in ScoreLibrary.Renderer.PaintContext.fillText()!")}return g};
s.hf=n();s.Bh=n();s.quadraticCurveTo=n();s.bezierCurveTo=n();s.arc=n();s.drawImage=n();function lc(a){lc.a.constructor.call(this,a);this.context=this.Cb[0].getContext("2d")}u(lc,ic);s=lc.prototype;s.save=function(){try{this.context.save()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.save()!")}};s.restore=function(){try{this.context.restore()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.restore()!")}};
s.clear=function(){try{this.context.clearRect(0,0,this.kb(),this.Xa()),this.context.beginPath()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.clear()!")}};s.transform=function(a,b,c,d,e,g){try{this.context.transform(a,b,c,d,e,g)}catch(h){t(z,"ERROR: caught exception "+z.Y(h)+"in ScoreLibrary.Renderer.PaintContext.Canvas.transform()!")}};s.translate=function(a,b){try{this.context.translate(a,b)}catch(c){t(z,"ERROR: caught exception "+z.Y(c)+"in ScoreLibrary.Renderer.PaintContext.Canvas.translate()!")}};
s.X=function(a){try{this.context.lineWidth=a}catch(b){t(z,"ERROR: caught exception "+z.Y(b)+"in ScoreLibrary.Renderer.PaintContext.Canvas.setLineWidth()!")}};s.tb=function(){var a=f;try{a=this.context.lineWidth}catch(b){t(z,"ERROR: caught exception "+z.Y(b)+"in ScoreLibrary.Renderer.PaintContext.Canvas.getLineWidth()!")}return a};s.beginPath=function(){try{this.context.beginPath()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.beginPath()!")}};
s.closePath=function(){try{this.context.closePath()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.closePath()!")}};s.moveTo=function(a,b){try{this.context.moveTo(a,b)}catch(c){t(z,"ERROR: caught exception "+z.Y(c)+"in ScoreLibrary.Renderer.PaintContext.Canvas.moveTo()!")}};s.lineTo=function(a,b){try{this.context.lineTo(a,b)}catch(c){t(z,"ERROR: caught exception "+z.Y(c)+"in ScoreLibrary.Renderer.PaintContext.Canvas.lineTo()!")}};
ic.prototype.clearRect=function(a,b,c,d){try{this.context.clearRect(a,b,c,d)}catch(e){t(z,"ERROR: caught exception "+z.Y(e)+"in ScoreLibrary.Renderer.PaintContext.Canvas.clearRect()!")}};s=lc.prototype;s.rect=function(a,b,c,d){try{this.context.rect(a,b,c,d)}catch(e){t(z,"ERROR: caught exception "+z.Y(e)+"in ScoreLibrary.Renderer.PaintContext.Canvas.rect()!")}};s.qa=function(a){try{this.context.strokeStyle=a,this.context.fillStyle=a}catch(b){t(z,"ERROR: caught exception "+z.Y(b)+"in ScoreLibrary.Renderer.PaintContext.Canvas.setSourceRgb()!")}};
s.stroke=function(){try{jc&&(confirm("Click OK to step on, Cancel to run!")||(jc=l)),this.context.stroke()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.stroke()!")}};s.fill=function(){try{jc&&(confirm("Click OK to step on, Cancel to run!")||(jc=l)),this.context.fill()}catch(a){t(z,"ERROR: caught exception "+z.Y(a)+"in ScoreLibrary.Renderer.PaintContext.Canvas.fill()!")}};
s.Td=function(a){try{this.context.font=a}catch(b){t(z,"ERROR: caught exception "+z.Y(b)+"in ScoreLibrary.Renderer.PaintContext.Canvas.setFont()!")}};s.measureText=function(a,b){var c=f;try{c=lc.a.measureText.call(this,a,b),c===f&&(c=this.context.measureText(a).width)}catch(d){t(z,"ERROR: caught exception "+z.Y(d)+"in ScoreLibrary.Renderer.PaintContext.Canvas.measureText()!")}return c};
s.fillText=function(a,b,c,d,e){try{lc.a.fillText.call(this,a,b,c,d,e)||this.context.fillText(a,b,c)}catch(g){t(z,"ERROR: caught exception "+z.Y(g)+"in ScoreLibrary.Renderer.PaintContext.Canvas.fillText()!")}};s.Bh=function(){return this.context.textBaseline};s.hf=function(a){try{this.context.textBaseline=a}catch(b){t(z,"ERROR: caught exception "+z.Y(b)+"in Renderer.PaintContext.Canvas.setTextBaseline()!")}};
s.quadraticCurveTo=function(a,b,c,d){try{this.context.quadraticCurveTo(a,b,c,d)}catch(e){t(z,"ERROR: caught exception "+z.Y(e)+"in Renderer.PaintContext.Canvas.quadraticCurveTo()!")}};s.bezierCurveTo=function(a,b,c,d,e,g){try{this.context.bezierCurveTo(a,b,c,d,e,g)}catch(h){t(z,"ERROR: caught exception "+z.Y(h)+"in Renderer.PaintContext.Canvas.bezierCurveTo()!")}};s.arc=function(a,b,c,d,e,g){try{this.context.arc(a,b,c,d,e,g)}catch(h){t(z,"ERROR: caught exception "+z.Y(h)+"in ScoreLibrary.Renderer.PaintContext.Canvas.arc()!")}};
s.drawImage=function(a,b){ic.prototype.isPrototypeOf(a)&&(a=a.Cb[0]);try{this.context.drawImage.apply(this.context,arguments)}catch(c){t(z,"ERROR: caught exception "+z.Y(c)+"in ScoreLibrary.Renderer.PaintContext.Canvas.drawImage()!")}};
var Zb={tc:{"\ue199":{width:299,c:-386.109375,e:-149.71875,d:0,f:148.359375,name:"scripts.dpedaltoe",h:151,height:387,g:"m -8 -1 b -1 0 -5 -1 -4 0 b 16 -11 5 0 13 -4 b 83 -186 17 -12 47 -90 l 148 -358 l 148 -363 b 127 -386 148 -376 138 -386 b 112 -379 122 -386 118 -383 b 54 -226 110 -375 114 -386 b 0 -81 24 -147 0 -81 b -55 -226 -1 -81 -25 -147 b -114 -379 -115 -386 -111 -375 b -129 -386 -119 -383 -123 -386 b -149 -363 -140 -386 -149 -376 l -149 -358 l -84 -186 b -19 -11 -49 -90 -19 -12 b -8 -1 -17 -8 -12 -4 "},"\ue13e":{width:429,
c:-187.5,e:0,d:186.109375,f:428.75,name:"noteheads.s2",h:438,height:375,g:"m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 "},"\ue162":{width:448,c:0,e:0,d:173.609375,f:447.8125,name:"rests.1",h:457,height:174,g:"m 0 86 l 0 173 l 223 173 l 447 173 l 447 86 l 447 0 l 223 0 l 0 0 l 0 86 "},"\ue159":{width:343,c:191.671875,
e:0,d:331.9375,f:343,name:"pedal.M",h:350,height:141,g:"m 329 331 b 333 331 330 331 332 331 b 343 322 338 331 343 327 b 343 320 343 322 343 320 b 318 276 341 318 340 313 b 279 223 291 227 294 230 b 202 208 257 212 236 208 b 144 211 186 208 167 208 b 93 212 123 212 107 212 b 19 195 59 212 39 208 b 8 191 14 193 10 191 b 0 198 5 191 2 194 b 0 201 0 200 0 200 b 23 248 0 205 4 213 b 62 301 50 297 47 293 b 140 316 84 312 104 316 b 197 313 155 316 174 315 b 249 311 217 312 234 311 b 322 329 283 311 303 316 b 329 331 325 329 328 331 "},
"\ue124":{width:781,c:0,e:-390.640625,d:504.171875,f:389.28125,name:"scripts.ulongfermata",h:397,height:505,g:"m -378 502 l -374 504 l 0 504 l 372 504 l 377 502 b 387 491 381 500 385 497 l 389 488 l 389 251 l 389 15 l 387 12 b 367 0 383 4 375 0 b 348 12 360 0 352 4 l 347 15 l 347 175 l 347 336 l 0 336 l -348 336 l -348 175 l -348 15 l -349 12 b -368 0 -353 4 -362 0 b -389 12 -377 0 -385 4 l -390 15 l -390 251 l -390 488 l -389 491 b -378 502 -386 497 -382 500 m -13 131 b -1 133 -9 133 -5 133 b 50 105 19 133 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -58 38 -62 55 b -13 131 -62 98 -44 125 "},
"\ue11f":{width:371,c:-279.171875,e:0,d:277.78125,f:370.21875,name:"clefs.percussion_change",h:378,height:558,g:"m 0 0 l 0 277 l 61 277 l 122 277 l 122 0 l 122 -279 l 61 -279 l 0 -279 l 0 0 m 246 -1 l 246 277 l 308 277 l 370 277 l 370 -1 l 370 -279 l 308 -279 l 246 -279 l 246 -1 "},"\ue10c":{width:560,c:-205.5625,e:0,d:127.78125,f:559.421875,name:"brackettips.down",h:571,height:334,g:"m 5 127 b 14 127 6 127 9 127 b 51 126 25 127 43 127 b 175 98 93 122 138 112 l 186 94 b 279 51 210 86 255 65 b 285 47 280 51 283 48 b 319 27 291 44 311 31 l 326 22 b 359 0 332 19 352 4 l 367 -6 b 371 -9 368 -6 370 -8 l 379 -15 b 387 -22 383 -18 386 -20 l 398 -30 l 411 -40 l 417 -47 l 427 -55 l 434 -61 b 441 -66 436 -62 439 -65 l 446 -72 l 453 -77 l 462 -87 b 558 -188 490 -113 549 -176 b 559 -195 559 -191 559 -194 b 548 -205 559 -201 555 -205 b 541 -204 547 -205 544 -205 b 534 -198 539 -201 536 -200 l 525 -191 b 481 -162 518 -187 490 -168 b 472 -155 477 -159 472 -156 b 468 -152 470 -155 469 -154 b 461 -150 466 -152 464 -151 b 428 -130 454 -145 441 -137 b 371 -100 413 -122 372 -100 b 363 -95 371 -100 367 -98 b 353 -91 357 -94 353 -91 b 348 -90 353 -91 352 -91 b 332 -81 343 -87 341 -86 b 27 -12 230 -37 127 -13 b 0 -5 4 -11 2 -11 b 0 58 0 -2 0 27 b 0 122 0 88 0 120 b 5 127 1 125 4 126 "},
"\ue193":{width:310,c:-26.390625,e:-155.171875,d:354.171875,f:153.8125,name:"arrowheads.close.1M1",h:157,height:382,g:"m -137 354 b -130 354 -136 354 -133 354 b -112 350 -125 354 -119 352 b -100 343 -110 347 -104 344 b 0 318 -69 326 -35 318 b 111 350 38 318 76 329 b 129 354 117 352 123 354 b 153 327 142 354 153 344 b 144 302 153 320 153 318 b 27 6 93 226 50 113 b 21 -13 24 -11 24 -11 b 0 -26 17 -22 8 -26 b -24 -12 -9 -26 -19 -22 b -28 5 -24 -9 -27 -2 b -145 302 -53 118 -95 225 b -155 327 -155 318 -155 320 b -137 354 -155 340 -148 350 "},
"\ue11b":{width:700,c:-565.28125,e:0,d:563.890625,f:699.609375,name:"clefs.C_change",h:714,height:1130,g:"m 0 0 l 0 563 l 65 563 l 132 563 l 132 0 l 132 -565 l 65 -565 l 0 -565 l 0 0 m 181 0 l 181 563 l 197 563 l 215 563 l 215 294 b 215 25 215 95 215 25 b 228 37 216 25 221 30 b 332 245 274 84 311 159 b 344 262 334 258 338 262 b 349 262 347 262 348 262 b 359 244 356 259 357 256 b 488 91 364 158 424 91 b 519 97 499 91 509 94 b 582 306 570 113 582 156 l 582 308 b 544 501 582 423 573 472 b 464 529 525 520 496 529 b 387 512 439 529 412 523 b 381 508 383 509 381 508 b 383 508 381 508 382 508 b 430 473 400 508 421 491 b 436 445 434 465 436 455 b 372 380 436 412 408 380 b 366 380 370 380 368 380 b 304 450 328 384 304 416 b 323 498 304 468 310 484 b 465 555 362 537 413 555 b 656 454 536 555 611 520 b 699 312 686 411 699 361 b 496 66 699 191 617 75 b 487 66 494 66 490 66 b 412 91 461 66 438 75 b 404 97 408 95 405 97 b 404 95 404 97 404 97 b 348 1 404 95 352 9 l 347 0 l 375 -50 b 405 -98 392 -76 404 -98 l 405 -98 b 415 -91 405 -97 409 -94 b 492 -68 438 -75 464 -68 b 598 -105 526 -68 564 -80 b 688 -238 641 -136 673 -184 b 699 -313 695 -263 699 -290 b 594 -516 699 -395 661 -469 b 465 -556 555 -543 510 -556 b 353 -523 426 -556 386 -545 b 304 -461 321 -501 307 -484 b 304 -451 304 -458 304 -454 b 372 -381 304 -411 337 -381 b 408 -393 383 -381 396 -384 b 436 -445 427 -405 436 -426 b 385 -508 436 -475 417 -504 l 379 -509 l 387 -513 b 464 -530 412 -525 438 -530 b 522 -518 485 -530 506 -526 b 579 -390 558 -501 574 -463 b 582 -300 582 -370 582 -334 b 581 -226 582 -272 582 -243 b 519 -98 575 -144 560 -112 b 488 -93 510 -95 499 -93 b 359 -245 424 -93 364 -158 b 345 -263 357 -258 355 -263 b 332 -244 337 -263 336 -261 b 220 -30 310 -155 268 -73 l 215 -25 l 215 -295 l 215 -565 l 197 -565 l 181 -565 l 181 0 "},
"\ue175":{width:458,c:-544.4375,e:-1.359375,d:543.0625,f:455.96875,name:"accidentals.3",h:465,height:1089,g:"m 352 541 b 357 543 353 543 355 543 b 377 530 364 543 372 537 l 378 526 l 378 394 l 379 262 l 404 266 b 436 270 420 269 430 270 b 450 265 443 270 446 269 b 455 220 455 259 455 261 l 455 208 l 455 161 l 454 156 b 411 140 449 147 447 147 b 378 133 393 137 379 134 b 378 68 378 133 378 106 b 378 22 378 54 378 38 l 379 -87 l 404 -83 b 436 -79 420 -80 430 -79 b 450 -84 443 -79 446 -80 b 455 -129 455 -90 455 -88 l 455 -141 l 455 -188 l 454 -193 b 413 -209 449 -202 447 -202 b 382 -215 398 -212 383 -215 l 378 -215 l 378 -345 l 378 -380 b 375 -486 378 -484 378 -480 b 357 -494 371 -491 364 -494 b 340 -486 351 -494 344 -491 b 336 -383 337 -480 336 -484 l 336 -350 l 336 -223 l 334 -223 b 291 -231 334 -223 314 -227 l 247 -240 l 247 -372 l 246 -504 l 245 -506 b 225 -519 242 -515 234 -519 b 206 -506 219 -519 210 -515 l 205 -504 l 205 -376 l 205 -248 l 160 -256 l 115 -265 l 115 -397 l 115 -527 l 114 -531 b 95 -544 110 -540 102 -544 b 76 -531 87 -544 78 -540 l 73 -527 l 73 -400 b 73 -273 73 -330 73 -273 b 49 -277 73 -273 61 -275 b 17 -281 32 -280 24 -281 b 4 -276 10 -281 8 -280 b -1 -234 0 -269 -1 -272 b 0 -219 -1 -229 0 -225 l 0 -170 l 1 -168 b 10 -158 2 -163 6 -159 b 49 -150 13 -156 16 -155 l 73 -145 l 73 -34 b 73 76 73 26 73 76 b 49 72 73 76 61 75 b 17 68 32 69 24 68 b 4 73 10 68 8 69 b -1 115 0 80 -1 77 b 0 130 -1 120 0 125 l 0 179 l 1 181 b 10 191 2 186 6 190 b 49 200 13 193 16 194 l 73 204 l 73 338 b 73 375 73 352 73 365 b 77 483 73 484 73 477 b 95 493 81 490 88 493 b 111 483 100 493 107 490 b 115 379 115 477 115 483 l 115 343 b 117 212 115 223 115 212 b 204 229 117 212 200 227 l 205 229 l 205 365 l 205 502 l 206 505 b 225 518 210 513 219 518 b 245 505 234 518 242 513 l 246 502 l 247 369 l 247 237 l 249 237 b 336 254 253 238 336 254 b 337 390 336 254 337 302 l 337 526 l 338 530 b 352 541 341 536 347 540 m 336 15 b 336 126 336 102 336 126 l 336 126 b 291 118 336 126 315 122 l 247 109 l 247 -1 l 247 -112 l 249 -112 b 336 -95 253 -111 336 -95 b 336 15 336 -95 336 -56 m 205 -120 b 205 -55 205 -120 205 -93 b 205 -9 205 -41 205 -25 l 205 101 l 160 93 l 115 84 l 115 -26 b 115 -83 115 -50 115 -69 b 117 -137 115 -133 115 -137 b 205 -120 118 -137 204 -120 "},
"\ue15e":{width:352,c:-288.890625,e:-1.359375,d:287.5,f:349.8125,name:"rests.2classical",h:357,height:577,g:"m 230 287 b 243 287 234 287 238 287 b 266 286 251 287 261 287 b 349 180 319 275 349 227 b 307 95 349 150 336 118 b 208 63 280 75 245 63 b 84 106 166 63 122 79 b 76 113 80 111 77 113 b 76 113 76 113 76 113 b 132 -75 76 112 102 27 b 187 -272 179 -236 187 -263 b 186 -276 187 -273 186 -275 b 166 -288 183 -284 174 -288 b 148 -279 159 -288 152 -286 b -1 231 145 -273 -1 227 b 20 252 -1 244 9 252 b 36 244 25 252 32 250 b 40 234 38 243 39 238 b 167 112 63 175 112 127 l 174 111 l 170 113 b 142 181 152 133 142 158 b 230 287 142 230 176 277 "},
"\ue141":{width:427,c:-22.21875,e:-209.609375,d:250,f:208.25,name:"scripts.uportato",h:213,height:273,g:"m -12 248 b -1 250 -9 250 -5 250 b 55 219 20 250 43 237 b 66 180 62 206 66 194 b 36 123 66 158 55 137 b 0 112 25 116 12 112 b -57 143 -21 112 -43 122 b -68 180 -63 154 -68 168 b -12 248 -68 212 -46 243 m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -5 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -5 b -197 19 -209 6 -205 15 "},
"\ue18f":{width:310,c:-26.390625,e:-155.171875,d:355.5625,f:153.8125,name:"arrowheads.open.1M1",h:157,height:383,g:"m -137 354 b -129 355 -134 354 -132 355 b -102 333 -118 355 -111 348 b -8 129 -63 273 -32 205 b 0 106 -4 116 -1 106 b 6 129 0 106 2 116 b 100 333 31 205 62 273 b 114 350 107 344 108 347 b 127 354 118 352 123 354 b 153 327 141 354 153 344 b 144 302 153 320 153 318 b 29 18 96 227 54 123 l 25 -4 b -1 -26 21 -19 13 -26 b -27 -4 -14 -26 -23 -19 l -31 18 b -145 302 -55 123 -98 227 b -155 327 -155 318 -155 320 b -137 354 -155 340 -148 350 "},
"\ue153":{width:103,c:-1.390625,e:0,d:104.171875,f:102.078125,name:"pedal..",h:104,height:107,g:"m 42 104 b 47 104 43 104 46 104 b 66 102 54 104 62 102 b 102 51 89 94 102 72 b 76 5 102 33 93 15 b 51 -1 68 1 59 -1 b 10 18 35 -1 20 5 b 0 51 2 27 0 38 b 42 104 0 76 16 100 "},"\ue170":{width:324,c:-538.890625,e:0,d:537.5,f:323.9375,name:"accidentals.sharp",h:331,height:1077,g:"m 217 536 b 225 537 220 537 221 537 b 245 525 235 537 242 533 l 246 522 l 247 390 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 493 87 498 b 103 495 98 498 100 497 b 114 486 107 494 111 490 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 384 l 205 522 l 206 525 b 217 536 209 529 212 533 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "},
"\ue109":{width:378,c:-1.390625,e:-10.890625,d:173.609375,f:366.140625,name:"scripts.trill_element",h:363,height:176,g:"m 98 172 b 110 173 102 173 106 173 b 210 120 142 173 172 156 b 281 66 235 95 264 75 b 294 63 285 63 289 63 b 341 87 307 63 322 72 b 356 97 348 94 352 97 b 363 93 359 97 362 95 b 366 87 364 90 366 88 b 355 72 366 83 363 79 b 268 2 317 31 288 9 b 243 -1 259 0 251 -1 b 144 52 212 -1 181 16 b 72 106 119 77 91 98 b 61 109 69 108 65 109 b 13 84 47 109 31 101 b 0 76 5 77 2 76 b -10 86 -6 76 -10 80 b -10 88 -10 87 -10 88 b 62 158 -9 95 43 145 b 98 172 73 165 87 170 "},
"\ue197":{width:299,c:-231.9375,e:-149.71875,d:152.78125,f:148.359375,name:"scripts.dpedalheel",h:151,height:385,g:"m -9 151 b -1 152 -6 151 -2 152 b 1 152 0 152 0 152 l 9 151 b 144 37 72 148 127 100 b 148 -62 148 19 148 15 b 148 -111 148 -76 148 -93 l 148 -216 l 147 -219 b 127 -231 144 -227 136 -231 b 108 -219 119 -231 112 -227 l 107 -216 l 107 -104 b 103 26 106 18 107 12 b -1 109 89 76 46 109 b -38 102 -13 109 -25 106 b -104 27 -70 90 -96 62 b -108 -101 -108 15 -108 22 l -108 -216 l -110 -219 b -129 -231 -114 -227 -122 -231 b -148 -219 -137 -231 -145 -227 l -149 -216 l -149 -100 b -149 -63 -149 -87 -149 -75 b -145 37 -149 26 -149 20 b -9 151 -130 101 -74 148 "},
"\ue10d":{width:560,c:-129.171875,e:0,d:204.171875,f:559.421875,name:"brackettips.up",h:571,height:335,g:"m 544 204 b 548 204 545 204 547 204 b 559 194 555 204 559 200 b 559 190 559 193 559 191 b 530 156 559 188 556 184 b 462 86 510 134 481 104 b 453 76 458 81 454 77 l 446 70 l 441 65 b 434 59 439 63 436 61 l 427 54 b 409 37 426 51 416 44 b 392 23 398 29 394 26 b 387 19 389 22 387 20 b 379 13 386 19 383 16 l 371 8 l 367 5 l 359 -1 l 337 -16 b 285 -48 319 -29 298 -41 l 279 -52 b 186 -95 255 -66 210 -87 l 175 -100 b 23 -129 127 -118 68 -129 b 17 -129 20 -129 19 -129 b 1 -123 2 -129 2 -129 b 0 -50 0 -122 0 -83 b 0 4 0 -22 0 1 b 27 11 2 9 4 9 b 185 31 78 12 145 20 b 198 34 186 31 193 33 b 314 73 234 44 277 58 b 349 88 328 79 340 84 b 353 90 352 90 353 90 b 363 94 353 90 357 93 b 371 98 367 97 371 98 b 428 129 372 98 413 120 b 461 148 441 136 454 144 b 468 151 464 150 466 151 b 472 154 469 152 470 154 b 481 161 473 155 477 158 b 525 190 490 166 518 186 l 534 197 b 540 201 536 198 539 200 b 544 204 541 202 544 204 "},
"\ue151":{width:327,c:-695.828125,e:0,d:462.5,f:326.671875,name:"accidentals.natural.arrowdown",h:333,height:1159,g:"m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -105 b 239 -262 239 -168 239 -219 b 238 -448 239 -416 239 -445 b 238 -451 238 -450 238 -451 b 238 -452 238 -452 238 -452 b 243 -451 239 -452 240 -451 b 298 -431 262 -448 280 -441 b 308 -427 300 -429 304 -427 b 326 -447 318 -427 326 -436 l 326 -447 l 326 -452 l 321 -462 b 238 -675 283 -520 253 -600 b 219 -695 234 -690 230 -695 b 197 -670 206 -695 202 -690 b 115 -462 179 -591 152 -520 l 110 -452 l 110 -447 l 110 -447 b 127 -427 110 -436 118 -427 b 138 -431 130 -427 134 -429 b 193 -451 155 -441 172 -448 b 198 -452 196 -452 197 -452 b 198 -451 198 -452 198 -452 b 198 -448 198 -451 198 -450 b 197 -323 197 -445 197 -426 b 197 -201 197 -247 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "},
"\ue169":{width:620,c:-187.5,e:0,d:186.109375,f:619.3125,name:"noteheads.s0",h:632,height:375,g:"m 274 184 b 307 186 285 186 296 186 b 616 22 465 186 597 116 b 619 -1 617 13 619 5 b 308 -187 619 -104 483 -187 b 0 -1 133 -187 0 -102 b 5 36 0 11 1 23 b 274 184 29 115 141 176 m 289 161 b 272 162 284 162 277 162 b 171 41 209 162 171 108 b 205 -73 171 5 182 -34 b 345 -163 243 -133 298 -163 b 436 -98 385 -163 420 -143 b 446 -43 443 -80 446 -62 b 289 161 446 47 377 147 "},"\ue144":{width:805,c:-176.390625,
e:-402.890625,d:175,f:401.53125,name:"scripts.prall",h:410,height:352,g:"m -219 173 b -213 175 -217 175 -215 175 b -202 173 -209 175 -205 173 b -114 86 -200 172 -179 151 b -28 0 -66 37 -28 0 b 40 84 -28 0 2 37 b 117 175 111 173 110 172 b 122 175 118 175 119 175 b 132 173 125 175 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 75 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -175 215 -176 b 201 -175 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b -42 -86 27 0 -4 -38 b -118 -175 -112 -175 -111 -173 b -123 -176 -119 -176 -121 -176 b -133 -175 -126 -176 -130 -175 b -296 -12 -136 -173 -172 -137 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -50 -402 -55 -402 -52 b -224 172 -398 -43 -228 168 b -219 173 -223 172 -220 173 "},
"\ue18b":{width:680,c:0,e:-340.28125,d:522.21875,f:338.921875,name:"scripts.trill",h:346,height:523,g:"m -32 520 b -29 522 -31 520 -31 522 b -23 519 -27 522 -24 520 b -20 513 -21 518 -20 516 b -21 506 -20 512 -20 509 b -31 475 -23 502 -27 488 l -53 402 l -66 352 l -68 350 l -57 350 b -32 351 -51 350 -40 351 b 123 370 19 352 74 359 b 137 372 127 370 133 372 b 170 356 152 372 164 366 b 171 355 170 355 170 355 b 216 366 174 355 183 358 b 280 379 268 377 266 377 b 287 379 283 379 284 379 b 332 350 307 379 322 369 b 338 319 336 341 338 330 b 332 301 338 311 336 302 b 242 280 329 300 246 280 b 242 280 242 280 242 280 b 235 288 236 280 235 283 b 235 293 235 290 235 291 b 236 302 236 297 236 300 b 220 337 236 316 230 330 l 216 340 l 210 336 b 159 276 189 322 172 301 b 118 150 152 265 156 275 b 81 34 84 36 85 36 b -8 13 78 33 -4 13 b -8 13 -8 13 -8 13 b -14 20 -12 15 -14 15 b -8 44 -14 25 -12 31 b -2 66 -5 55 -2 65 b -2 66 -2 66 -2 66 l -2 66 b -43 41 -2 66 -21 55 b -114 4 -98 8 -98 8 b -144 0 -123 0 -134 0 b -242 100 -197 0 -242 43 b -242 109 -242 102 -242 105 b -212 219 -240 122 -242 116 b -185 312 -197 270 -185 312 l -185 312 b -189 312 -185 312 -186 312 b -259 312 -200 312 -227 312 b -321 311 -291 312 -310 311 b -334 312 -330 311 -334 312 b -340 319 -338 313 -340 316 b -336 326 -340 322 -338 325 b -291 337 -334 326 -314 331 l -247 347 l -210 348 b -172 348 -190 348 -172 348 b -168 363 -172 348 -171 355 b -145 443 -151 425 -145 441 b -133 452 -144 444 -140 447 l -77 490 b -32 520 -53 506 -32 520 m 57 334 b 53 336 55 336 54 336 b 44 334 50 336 49 336 b -70 316 8 326 -28 320 b -78 309 -78 316 -78 316 b -108 202 -80 305 -88 275 b -141 81 -136 112 -141 93 b -140 75 -141 79 -141 77 b -117 50 -137 59 -127 50 b -107 52 -114 50 -110 51 b 16 127 -106 54 14 126 b 42 218 16 127 42 215 b 49 241 42 222 44 229 b 73 320 53 251 73 318 b 57 334 73 327 65 333 "},
"\ue14d":{width:1143,c:-176.390625,e:-571.671875,d:352.78125,f:570.3125,name:"scripts.lineprall",h:582,height:530,g:"m -559 351 b -551 352 -556 352 -553 352 b -530 338 -543 352 -533 348 b -529 169 -530 337 -529 291 l -529 1 l -507 27 l -441 112 b -382 175 -394 169 -390 175 b -378 175 -381 175 -379 175 b -281 86 -370 175 -375 179 b -196 0 -234 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 175 279 173 279 172 b 289 175 285 175 288 175 b 300 173 294 175 298 173 b 462 11 303 172 340 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 375 -176 371 -176 b 280 -87 367 -173 347 -152 b 194 0 234 -38 194 0 b 126 -86 194 0 163 -38 b 49 -175 54 -175 55 -173 b 44 -176 47 -176 46 -176 b 34 -175 40 -176 36 -175 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -140 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -288 -176 b -300 -175 -294 -176 -298 -175 b -464 -11 -303 -173 -374 -102 l -476 0 l -506 -37 b -539 -76 -528 -65 -537 -75 b -551 -80 -543 -79 -547 -80 b -570 -68 -558 -80 -566 -76 l -571 -65 l -571 136 b -570 340 -571 331 -571 337 b -559 351 -568 344 -564 348 "},
"\ue196":{width:299,c:-154.171875,e:-149.71875,d:230.5625,f:148.359375,name:"scripts.upedalheel",h:151,height:386,g:"m -138 229 b -129 230 -136 230 -133 230 b -110 218 -121 230 -114 226 l -108 215 l -108 100 b -104 -29 -108 -23 -108 -16 b -38 -104 -96 -63 -70 -91 b -1 -111 -25 -108 -13 -111 b 103 -27 46 -111 89 -77 b 107 102 107 -13 106 -19 l 107 215 l 108 218 b 127 230 112 226 119 230 b 137 229 130 230 134 230 b 147 218 141 226 145 223 l 148 215 l 148 109 b 148 63 148 91 148 76 b 147 -25 148 -1 148 -13 b -1 -154 134 -101 70 -154 b -38 -148 -13 -154 -25 -151 b -145 -38 -91 -134 -133 -93 b -149 62 -149 -22 -149 -27 b -149 98 -149 73 -149 86 l -149 215 l -148 218 b -138 229 -147 223 -142 226 "},
"\ue13a":{width:433,c:-188.890625,e:0,d:187.5,f:432.828125,name:"noteheads.s2harmonic",h:442,height:377,g:"m 209 186 b 213 187 210 187 212 187 b 216 187 215 187 216 187 b 224 175 216 186 220 180 b 420 -1 269 105 338 43 b 432 -12 431 -8 432 -9 b 421 -23 432 -15 432 -16 b 228 -180 345 -70 264 -137 b 219 -188 221 -188 221 -188 l 219 -188 b 208 -177 215 -188 215 -188 b 10 1 163 -106 93 -44 b 0 11 0 6 0 8 b 10 22 0 13 0 15 b 202 179 87 69 167 136 b 209 186 206 183 209 186 "},"\ue17c":{width:134,c:-69.4375,
e:0,d:68.0625,f:133.390625,name:"dots.dot",h:136,height:139,g:"m 54 66 b 65 68 58 68 61 68 b 122 37 88 68 110 56 b 133 -1 130 26 133 12 b 104 -58 133 -23 123 -44 b 66 -69 92 -65 78 -69 b 10 -38 44 -69 23 -58 b 0 -1 2 -27 0 -13 b 54 66 0 30 20 61 "},"\ue101":{width:1255,c:-176.390625,e:-627.46875,d:175,f:626.109375,name:"scripts.espr",h:639,height:352,g:"m -69 173 b -53 175 -62 175 -58 175 b -42 172 -49 175 -44 175 b -28 150 -32 166 -28 158 b -42 126 -28 140 -32 131 b -231 73 -44 125 -29 129 l -371 34 l -469 8 b -499 0 -485 2 -499 0 b -469 -9 -499 -1 -485 -4 l -371 -36 l -231 -75 b -40 -129 -21 -131 -44 -125 b -28 -151 -32 -133 -28 -141 b -40 -172 -28 -159 -32 -168 b -54 -176 -44 -175 -49 -176 b -69 -175 -58 -176 -62 -176 l -288 -113 l -552 -41 b -616 -22 -619 -23 -611 -25 b -627 0 -623 -18 -627 -9 b -616 20 -627 8 -623 16 b -615 22 -615 22 -615 22 b -615 22 -615 22 -615 22 b -288 112 -615 23 -598 27 l -69 173 m 44 175 b 51 175 47 175 49 175 b 68 173 55 175 61 175 l 287 112 l 551 40 b 615 20 617 22 609 23 b 626 0 622 16 626 8 b 615 -22 626 -9 622 -18 b 613 -23 613 -23 613 -23 b 613 -23 613 -23 613 -23 b 287 -113 613 -25 597 -29 l 68 -175 b 53 -176 61 -176 57 -176 b 39 -172 47 -176 43 -175 b 27 -151 31 -168 27 -159 b 39 -129 27 -141 31 -133 b 230 -75 43 -125 20 -131 l 370 -36 l 468 -9 b 498 0 484 -4 498 -1 b 468 8 498 0 484 2 l 370 34 l 230 73 b 40 126 28 129 43 125 b 27 150 31 131 27 140 b 44 175 27 161 34 170 "},
"-":{width:319,c:315.28125,e:0,d:377.78125,f:318.5,name:"hyphen",h:325,height:63,g:"m 20 376 b 167 377 23 377 96 377 b 296 376 231 377 294 377 b 318 347 311 372 318 359 b 296 316 318 333 311 320 b 159 315 294 315 227 315 b 21 316 91 315 24 315 b 0 345 6 320 0 333 b 20 376 0 359 6 372 "},"\ue137":{width:506,c:-229.171875,e:-21.78125,d:633.328125,f:483.1875,name:"accidentals.flatflat",h:493,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 179 164 200 187 193 l 210 176 l 210 397 l 210 618 l 212 622 b 231 633 216 629 223 633 b 250 620 239 633 247 629 b 251 383 251 616 251 616 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "},
"\ue139":{width:433,c:-188.890625,e:0,d:187.5,f:432.828125,name:"noteheads.s0harmonic",h:442,height:377,g:"m 208 184 b 213 187 209 186 212 187 b 224 176 217 187 221 183 b 245 147 225 172 235 159 b 419 -1 288 90 347 38 b 431 -8 424 -4 431 -8 b 432 -12 432 -9 432 -11 b 430 -18 432 -13 432 -16 b 364 -61 424 -20 383 -47 b 225 -183 307 -102 250 -152 b 223 -187 224 -184 223 -187 b 220 -188 221 -188 220 -188 b 208 -176 216 -188 210 -184 b 187 -148 205 -173 197 -159 b 12 0 144 -90 84 -38 b 0 11 4 5 0 8 b 16 25 0 13 4 18 b 183 158 83 69 141 115 b 208 184 194 169 198 173 m 183 105 b 176 113 181 109 176 113 b 172 109 176 113 175 112 b 92 45 149 90 117 62 l 88 41 l 102 31 b 247 -105 160 -6 210 -55 l 254 -115 l 257 -112 l 269 -102 b 340 -45 287 -87 319 -61 l 344 -43 l 330 -33 b 183 105 272 6 221 54 "},
"\ue17a":{width:147,c:-1.390625,e:-73.5,d:254.171875,f:72.140625,name:"scripts.ustaccatissimo",h:74,height:257,g:"m -72 252 l -73 254 l 0 254 l 72 254 l 70 252 b 0 -1 70 248 0 -1 b -72 252 -1 -1 -72 248 "},"\ue148":{width:1181,c:-338.890625,e:-590.71875,d:275,f:589.359375,name:"scripts.upmordent",h:601,height:614,g:"m 175 273 b 182 275 178 273 181 275 b 202 262 190 275 198 269 b 204 158 204 259 204 259 l 204 56 l 250 112 b 303 175 296 172 298 172 b 308 175 304 175 307 175 b 318 173 313 175 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 75 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -175 401 -176 b 387 -175 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 208 -6 213 0 210 -2 l 204 -12 l 204 -147 b 204 -211 204 -173 204 -194 b 198 -293 204 -297 204 -287 b 183 -300 194 -297 189 -300 b 164 -287 175 -300 167 -295 b 163 -175 163 -284 163 -284 l 161 -63 l 119 -118 b 65 -176 76 -170 73 -176 b 61 -176 63 -176 62 -176 b -35 -87 51 -175 57 -180 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -175 -261 -175 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -175 -276 -176 -280 -175 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -304 -548 -254 -544 -280 b -533 -318 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -363 175 -374 170 -371 175 b -359 175 -362 175 -360 175 b -262 86 -351 175 -356 179 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 175 -36 173 -38 172 b -25 175 -29 175 -28 175 b -16 173 -23 175 -19 173 b 147 11 -13 172 35 123 l 157 -1 l 160 1 l 163 4 l 163 130 b 164 261 163 256 163 258 b 175 273 166 266 170 270 "},
"\ue183":{width:389,c:4.171875,e:-21.78125,d:1380.5625,f:366.140625,name:"flags.d5",h:374,height:1377,g:"m 276 1379 b 284 1380 279 1380 281 1380 b 306 1361 292 1380 298 1375 b 352 1248 326 1327 343 1287 b 366 1140 362 1213 366 1176 b 347 1009 366 1094 359 1050 l 344 1002 l 347 993 b 352 972 348 987 351 977 b 366 863 362 937 366 900 b 347 733 366 819 359 773 l 344 726 l 347 716 b 352 695 348 711 351 701 b 366 588 362 659 366 623 b 223 262 366 465 314 345 b 189 233 212 252 212 252 b 35 76 126 183 73 129 b -1 16 20 56 2 27 b -19 4 -4 9 -12 4 l -21 4 l -21 137 l -21 270 l -17 270 b 186 344 59 281 134 308 b 319 606 270 400 319 500 b 317 651 319 620 319 636 l 315 659 l 314 655 b 223 537 288 608 258 570 b 189 509 212 529 212 529 b 35 352 126 459 73 405 b -1 293 20 333 2 304 b -19 280 -4 286 -12 280 l -21 280 l -21 413 l -21 547 l -17 547 b 186 620 59 558 134 584 b 319 883 270 676 319 776 b 317 926 319 897 319 912 l 315 936 l 314 931 b 223 813 288 884 258 847 b 189 786 212 805 212 805 b 35 629 126 736 73 681 b -1 569 20 609 2 580 b -19 556 -4 562 -12 556 l -21 556 l -21 690 l -21 823 l -17 823 b 202 908 68 836 152 868 b 319 1158 280 969 319 1062 b 270 1338 319 1219 303 1281 b 262 1359 264 1350 262 1354 b 262 1365 262 1361 262 1363 b 276 1379 265 1372 269 1377 "},
"\ue15b":{width:387,c:-348.609375,e:0,d:347.21875,f:386.5625,name:"rests.M2",h:394,height:697,g:"m 0 0 l 0 347 l 193 347 l 386 347 l 386 0 l 386 -348 l 193 -348 l 0 -348 l 0 0 "},"\ue149":{width:1195,c:-327.78125,e:-597.53125,d:175,f:596.171875,name:"scripts.pralldown",h:608,height:503,g:"m -413 173 b -408 175 -412 175 -409 175 b -397 173 -404 175 -400 173 b -308 86 -394 172 -374 151 b -223 0 -261 37 -223 0 b -153 84 -223 0 -191 37 b -77 175 -83 173 -84 172 b -72 175 -76 175 -74 175 b -62 173 -68 175 -63 173 b 25 86 -59 172 -39 151 b 112 0 73 37 111 0 b 181 84 112 0 144 37 b 257 175 251 173 251 172 b 262 175 258 175 261 175 b 273 173 266 175 270 173 b 436 9 276 172 347 101 l 447 -1 l 477 36 b 522 79 511 79 513 79 l 522 79 b 552 51 533 79 539 73 b 596 -112 582 6 596 -51 b 567 -262 596 -161 586 -213 b 539 -322 558 -287 544 -316 b 524 -327 534 -326 529 -327 b 504 -315 515 -327 507 -323 b 503 -308 503 -312 503 -309 b 511 -286 503 -302 504 -297 b 555 -113 540 -227 555 -169 b 544 -34 555 -86 551 -59 b 522 19 540 -16 530 8 l 521 22 l 481 -26 l 405 -122 b 353 -176 366 -172 362 -176 b 349 -176 352 -176 351 -176 b 253 -87 341 -176 347 -180 b 167 0 206 -38 167 0 b 99 -86 167 0 136 -38 b 21 -175 27 -175 28 -173 b 17 -176 20 -176 19 -176 b 6 -175 13 -176 9 -175 b -81 -87 4 -173 -14 -152 b -167 0 -129 -38 -167 0 b -236 -86 -167 0 -198 -38 b -313 -175 -307 -175 -306 -173 b -318 -176 -314 -176 -315 -176 b -328 -175 -321 -176 -325 -175 b -491 -12 -330 -173 -367 -137 l -503 0 l -530 -34 b -570 -77 -562 -73 -564 -76 b -577 -79 -571 -79 -574 -79 b -597 -58 -588 -79 -597 -69 b -596 -50 -597 -55 -597 -52 b -417 172 -593 -43 -423 168 b -413 173 -417 172 -415 173 "},
"\ue1a1":{width:439,c:-193.0625,e:0,d:191.671875,f:438.28125,name:"noteheads.s1diamond",h:447,height:386,g:"m 212 190 b 219 191 213 191 216 191 b 236 176 225 191 228 190 b 419 18 277 105 341 50 b 436 5 431 13 434 11 b 438 -1 438 4 438 1 b 424 -16 438 -8 432 -13 b 356 -50 409 -20 379 -36 b 234 -180 306 -83 258 -133 b 219 -193 230 -188 224 -193 b 200 -176 213 -193 206 -187 b 9 -15 157 -102 89 -45 b 0 0 2 -12 0 -6 b 16 18 0 9 2 12 b 200 176 93 48 159 104 b 212 190 205 186 208 188 m 239 113 b 236 118 238 116 238 118 b 230 108 235 118 234 115 b 92 -15 196 58 140 8 b 88 -18 91 -16 88 -18 b 92 -20 88 -18 91 -19 b 198 -116 130 -43 166 -75 b 200 -118 200 -118 200 -118 b 201 -118 200 -118 201 -118 b 264 -43 212 -98 242 -62 b 345 15 288 -19 321 4 b 348 18 347 16 348 16 b 344 20 348 18 347 19 b 239 113 307 41 266 79 "},
"\ue12f":{width:361,c:-229.171875,e:-108.890625,d:865.28125,f:251.8125,name:"accidentals.flat.arrowup",h:257,height:1096,g:"m -8 863 b 0 865 -5 865 -2 865 b 12 859 4 865 9 863 b 19 844 16 856 16 854 b 102 631 34 769 65 690 l 107 622 l 107 616 l 107 616 b 89 597 107 605 99 597 b 78 601 85 597 83 598 b 47 615 69 606 55 612 b 19 622 39 618 21 622 b 19 622 19 622 19 622 b 19 619 19 622 19 620 b 20 383 20 616 20 586 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 b -20 619 -21 563 -21 616 b -20 622 -20 620 -20 622 b -20 622 -20 622 -20 622 b -49 615 -23 622 -40 618 b -80 601 -57 612 -70 606 b -91 597 -84 598 -87 597 b -108 616 -100 597 -108 605 l -108 616 l -108 622 l -103 631 b -20 840 -66 690 -38 761 b -8 863 -17 856 -14 859 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
"\ue119":{width:683,c:-1022.21875,e:-1.359375,d:1043.0625,f:680.5625,name:"clefs.tab",h:694,height:2067,g:"m 597 1043 b 604 1043 600 1043 602 1043 b 642 1002 627 1043 642 1023 b 619 966 642 988 635 975 b 439 927 574 943 503 927 l 426 927 l 426 922 b 430 838 428 894 430 866 b 345 480 430 697 398 561 b 179 391 307 423 249 391 b 156 393 171 391 164 393 b 138 394 149 394 142 394 b 103 434 115 397 103 416 b 129 472 103 451 111 466 b 141 475 133 473 137 475 b 172 459 153 475 164 469 b 181 455 175 456 176 455 b 187 456 182 455 185 455 b 253 520 212 461 234 483 b 315 837 294 605 315 715 b 311 929 315 868 314 898 b 302 945 310 944 311 943 b 245 954 283 951 262 954 b 130 891 193 954 149 931 b 84 861 119 870 102 861 b 36 905 61 861 39 877 b 36 911 36 908 36 909 b 80 970 36 931 50 950 b 249 1018 125 1001 187 1018 b 322 1009 273 1018 299 1015 l 341 1004 b 436 991 372 995 406 991 b 577 1031 495 991 545 1005 b 597 1043 583 1038 590 1041 m 416 361 b 424 361 419 361 421 361 b 481 309 454 361 479 338 b 503 145 484 280 495 200 b 585 -186 525 16 555 -106 b 630 -245 596 -213 613 -237 l 634 -247 l 638 -245 b 647 -244 641 -245 645 -244 b 680 -279 666 -244 680 -262 b 664 -308 680 -290 675 -301 b 638 -312 658 -311 650 -312 b 613 -309 631 -312 623 -311 b 477 -201 555 -304 502 -261 b 417 -2 460 -159 434 -72 b 416 5 417 1 416 5 b 416 5 416 5 416 5 b 411 -5 415 5 413 0 b 359 -97 397 -33 377 -70 b 353 -106 355 -102 353 -105 b 359 -112 353 -108 355 -109 b 409 -130 375 -123 390 -129 b 426 -134 420 -130 421 -131 b 431 -147 428 -137 431 -141 b 420 -162 431 -152 427 -159 b 382 -169 409 -166 396 -169 b 323 -155 363 -169 341 -165 l 317 -152 l 314 -155 b 62 -304 240 -240 148 -295 b 36 -305 55 -305 44 -305 b 23 -304 29 -305 24 -305 b -1 -273 6 -300 -1 -287 b 31 -240 -1 -256 10 -240 b 36 -240 32 -240 34 -240 b 42 -241 38 -241 39 -241 b 134 -204 63 -241 99 -226 b 367 288 265 -115 357 81 b 375 330 368 313 370 320 b 416 361 383 347 400 358 m 360 -359 b 379 -359 363 -359 371 -359 b 424 -361 396 -359 416 -359 b 646 -502 536 -373 624 -430 b 649 -527 649 -511 649 -519 b 530 -673 649 -579 604 -636 l 521 -677 l 529 -681 b 653 -812 592 -715 637 -762 b 660 -854 658 -827 660 -840 b 645 -912 660 -873 656 -893 b 426 -1022 608 -981 519 -1022 b 283 -990 377 -1022 328 -1012 b 235 -949 249 -973 239 -965 b 234 -937 234 -947 234 -941 b 234 -929 234 -934 234 -931 l 235 -926 l 234 -927 l 225 -934 b 87 -983 186 -966 138 -983 b 80 -983 85 -983 83 -983 b 55 -981 70 -981 58 -981 b 17 -944 32 -981 17 -965 b 54 -905 17 -922 35 -905 b 78 -915 62 -905 72 -909 l 83 -919 l 88 -919 b 190 -831 122 -919 166 -881 b 269 -506 242 -727 269 -612 b 268 -462 269 -493 269 -477 b 266 -450 266 -458 266 -452 b 265 -444 266 -445 266 -444 b 257 -447 264 -444 261 -445 b 132 -545 196 -470 152 -505 b 88 -573 122 -563 104 -573 b 39 -523 63 -573 39 -554 b 63 -476 39 -505 44 -494 b 360 -359 136 -408 235 -369 m 419 -425 b 393 -423 411 -423 406 -423 l 375 -423 l 377 -426 b 379 -440 377 -427 378 -434 b 383 -511 382 -463 383 -487 b 314 -812 383 -609 360 -711 b 266 -894 296 -851 285 -870 b 264 -898 265 -897 264 -898 l 264 -898 b 264 -898 264 -898 264 -898 b 268 -898 264 -898 266 -898 b 273 -898 270 -898 272 -898 b 300 -909 283 -898 291 -901 b 426 -958 340 -941 385 -958 b 476 -950 443 -958 460 -955 b 547 -854 522 -931 547 -894 b 485 -745 547 -816 526 -776 b 397 -708 460 -727 432 -715 b 366 -676 375 -704 366 -693 b 396 -643 366 -658 377 -645 b 530 -558 455 -637 511 -601 b 536 -527 534 -548 536 -537 b 419 -425 536 -480 490 -437 "},
"\ue187":{width:390,c:4.171875,e:-21.78125,d:1902.78125,f:367.5,name:"flags.d7",h:375,height:1899,g:"m 276 1901 b 284 1902 279 1901 281 1902 b 306 1884 291 1902 298 1897 b 367 1687 347 1826 367 1758 b 343 1559 367 1644 359 1601 l 338 1550 l 343 1538 b 367 1412 359 1498 367 1455 b 343 1283 367 1368 359 1325 l 338 1273 l 343 1262 b 367 1136 359 1222 367 1179 b 343 1008 367 1091 359 1048 l 338 997 l 343 986 b 367 859 359 945 367 902 b 343 731 367 815 359 772 l 338 720 l 343 709 b 367 583 359 668 367 626 b 289 362 367 504 340 426 b 239 312 276 345 259 330 b 29 77 152 237 76 152 b -1 18 14 54 2 30 b -19 4 -4 11 -12 4 l -21 4 l -21 133 l -20 261 l -13 262 b 98 300 17 269 62 284 b 111 305 103 302 110 305 b 167 334 123 311 156 327 b 319 595 264 391 319 491 b 313 659 319 616 318 638 b 310 668 311 665 311 668 b 307 663 310 668 308 666 b 240 588 289 637 269 615 b 16 331 141 505 62 413 b -1 294 8 316 1 302 b -19 280 -4 287 -12 280 l -21 280 l -21 408 l -20 537 l -13 538 b 98 576 17 545 62 561 b 111 581 103 579 110 581 b 167 611 123 587 156 604 b 319 872 264 668 319 768 b 313 936 319 893 318 913 b 310 943 311 941 311 943 b 307 940 310 943 308 941 b 240 865 289 913 269 890 b 16 608 141 781 62 690 b -1 570 8 593 1 579 b -19 556 -4 563 -12 556 l -21 556 l -21 684 l -20 813 l -13 815 b 98 852 17 822 62 837 b 111 858 103 855 110 858 b 167 887 123 863 156 880 b 319 1148 264 944 319 1044 b 313 1212 319 1169 318 1190 b 310 1219 311 1218 311 1219 b 307 1216 310 1219 308 1218 b 240 1141 289 1188 269 1166 b 16 884 141 1058 62 966 b -1 847 8 869 1 855 b -19 833 -4 840 -12 833 l -21 833 l -21 961 l -20 1090 l -13 1091 b 98 1129 17 1098 62 1112 b 111 1134 103 1131 110 1134 b 167 1163 123 1140 156 1156 b 319 1425 264 1220 319 1320 b 313 1487 319 1445 318 1466 b 310 1495 311 1494 311 1495 b 307 1493 310 1495 308 1494 b 240 1418 289 1465 269 1443 b 16 1161 141 1334 62 1243 b -1 1122 8 1145 1 1131 b -19 1109 -4 1116 -12 1109 l -21 1109 l -21 1237 l -20 1366 l -13 1368 b 98 1405 17 1375 62 1388 b 111 1411 103 1408 110 1411 b 250 1509 172 1438 215 1468 b 319 1702 296 1565 319 1634 b 270 1861 319 1758 303 1815 b 262 1883 265 1869 262 1876 b 276 1901 262 1891 266 1897 "},
"\ue15c":{width:387,c:0,e:0,d:347.21875,f:386.5625,name:"rests.M1",h:394,height:348,g:"m 0 173 l 0 347 l 193 347 l 386 347 l 386 173 l 386 0 l 193 0 l 0 0 l 0 173 "},"\ue125":{width:781,c:-1.390625,e:-390.640625,d:576.390625,f:389.28125,name:"scripts.uverylongfermata",h:397,height:579,g:"m -378 573 l -374 576 l 0 576 l 372 576 l 377 573 b 387 563 381 572 385 568 l 389 559 l 389 287 l 389 15 l 387 12 b 367 0 383 4 375 0 b 348 12 360 0 352 4 l 347 15 l 347 211 l 347 406 l 0 406 l -348 406 l -348 211 l -348 15 l -349 12 b -368 0 -353 4 -362 0 b -389 12 -377 0 -385 4 l -390 15 l -390 287 l -390 559 l -389 563 b -378 573 -386 568 -382 572 m -274 337 l -270 338 l 0 338 l 269 338 l 273 337 b 284 326 279 334 281 330 l 285 323 l 285 169 l 285 15 l 284 12 b 265 -1 280 4 272 -1 b 245 12 257 -1 249 4 l 245 15 l 243 108 l 243 201 l 0 201 l -245 201 l -245 108 l -245 15 l -246 12 b -266 -1 -250 4 -258 -1 b -285 12 -273 -1 -281 4 l -287 15 l -287 169 l -287 323 l -285 326 b -274 337 -283 330 -280 334 m -13 131 b -1 133 -9 133 -5 133 b 50 105 19 133 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -58 38 -62 55 b -13 131 -62 98 -44 125 "},
"\ue18d":{width:846,c:-279.171875,e:-423.3125,d:277.78125,f:421.9375,name:"scripts.reverseturn",h:431,height:558,g:"m -10 276 b -2 277 -8 277 -5 277 b 17 265 5 277 13 273 b 19 163 19 261 19 261 l 19 68 l 39 45 b 277 -95 122 -34 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -54 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 200 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 137 b 421 22 421 37 421 29 b 257 -198 421 -86 347 -188 b 242 -198 251 -198 247 -198 b 20 -105 181 -198 95 -163 l 19 -104 l 19 -183 b 19 -216 19 -195 19 -206 b 12 -273 19 -272 17 -268 b -2 -279 8 -277 2 -279 b -21 -266 -10 -279 -19 -275 b -23 -165 -23 -263 -23 -262 l -23 -69 l -44 -47 b -250 86 -117 23 -183 66 b -295 94 -270 93 -284 94 b -315 91 -302 94 -308 94 b -381 5 -356 81 -381 43 b -355 -56 -381 -16 -372 -40 b -299 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -168 -77 -196 -58 -179 -65 b -151 -122 -156 -90 -151 -105 b -179 -175 -151 -141 -160 -162 b -239 -195 -194 -184 -217 -193 b -257 -197 -245 -195 -250 -197 b -423 -5 -349 -197 -423 -113 b -423 0 -423 -4 -423 -1 b -277 194 -420 97 -362 173 b -247 197 -268 197 -258 197 b -24 104 -185 197 -100 162 l -23 102 l -23 181 b -21 265 -23 261 -23 261 b -10 276 -20 269 -14 275 "},
"\ue112":{width:623,c:-280.5625,e:0,d:419.4375,f:622.03125,name:"scripts.caesura",h:635,height:701,g:"m 398 418 b 406 419 401 419 404 419 b 427 398 417 419 427 409 b 427 391 427 395 427 393 b 34 -275 424 386 38 -272 b 20 -280 29 -279 25 -280 b 0 -259 9 -280 0 -270 b 0 -252 0 -256 0 -254 b 393 413 2 -247 389 411 b 398 418 394 415 397 416 m 592 418 b 600 419 594 419 597 419 b 622 398 611 419 622 409 b 620 391 622 395 620 393 b 227 -275 617 386 231 -272 b 213 -280 223 -279 219 -280 b 193 -259 202 -280 193 -270 b 194 -252 193 -256 193 -254 b 586 413 196 -247 582 411 b 592 418 588 415 590 416 "},
"\ue16f":{width:324,c:-538.890625,e:0,d:537.5,f:323.9375,name:"accidentals.2",h:331,height:1077,g:"m 217 536 b 225 537 220 537 221 537 b 245 525 235 537 242 533 l 246 522 l 247 390 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 493 87 498 b 103 495 98 498 100 497 b 114 486 107 494 111 490 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 384 l 205 522 l 206 525 b 217 536 209 529 212 533 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "},
"\ue157":{width:1067,c:-1.390625,e:-1.359375,d:694.453125,f:1064.390625,name:"pedal.Ped",h:1086,height:697,g:"m 296 693 b 314 694 302 694 307 694 b 386 686 337 694 366 690 b 548 498 480 661 548 580 b 548 481 548 493 548 487 b 455 395 541 426 499 395 b 370 462 420 395 383 418 b 362 497 364 477 362 488 b 377 515 362 509 367 515 b 393 501 386 515 390 511 b 432 475 397 484 413 475 b 470 487 445 475 458 479 b 491 530 484 497 491 511 b 490 544 491 534 491 540 b 333 661 479 606 411 658 l 323 662 l 315 647 b 269 525 285 591 269 556 b 321 431 269 493 287 466 b 349 395 338 413 343 408 b 363 343 359 379 363 362 b 359 312 363 333 362 322 b 285 158 348 266 318 206 b 281 152 283 155 281 152 b 281 152 281 152 281 152 b 287 154 283 152 284 152 b 318 155 298 154 308 155 b 461 98 371 155 419 136 l 464 97 l 483 112 b 503 129 494 120 503 127 b 504 130 503 129 504 129 b 503 138 504 131 503 134 b 500 180 500 152 500 166 b 553 326 500 238 518 288 b 604 366 560 331 592 358 b 649 381 617 376 632 381 b 696 362 665 381 681 375 b 724 302 714 347 724 325 b 695 238 724 279 714 255 b 660 211 691 234 662 212 b 579 148 658 209 582 151 b 579 148 579 148 579 148 b 596 106 579 144 589 119 b 622 77 604 88 609 83 b 657 69 632 72 645 69 b 748 112 688 69 721 84 b 755 123 754 118 755 120 b 755 127 755 125 755 126 b 751 165 752 137 751 151 b 758 219 751 183 754 202 b 894 387 774 290 820 347 b 896 390 896 388 896 388 b 891 398 896 391 895 393 b 622 561 827 477 730 536 b 600 580 605 565 600 569 b 617 597 600 591 607 597 b 628 595 622 597 624 597 b 1057 248 846 552 1020 412 b 1064 191 1061 229 1064 209 b 922 0 1064 94 1005 9 b 902 -1 916 -1 909 -1 b 774 76 847 -1 800 26 b 769 83 770 81 770 83 b 769 81 769 83 769 83 b 627 -1 733 29 677 -1 b 548 27 597 -1 570 8 b 515 88 537 37 525 61 l 513 95 l 510 93 l 453 45 b 390 0 396 0 396 0 b 390 0 390 0 390 0 b 374 15 381 0 377 4 b 268 105 359 69 314 105 b 250 104 262 105 257 105 l 243 102 l 234 90 b 155 1 201 50 159 2 b 147 -1 152 0 149 -1 b 130 15 138 -1 130 6 b 132 20 130 18 132 19 b 136 31 133 22 134 27 b 220 131 149 75 178 109 b 231 137 225 134 230 136 b 302 279 280 202 302 244 b 265 336 302 300 295 309 b 209 443 234 363 213 402 b 209 455 209 447 209 451 b 279 648 209 502 232 565 l 285 659 l 283 659 b 176 627 238 654 210 645 b 57 477 111 594 66 538 b 55 459 55 472 55 465 b 72 409 55 437 61 415 b 93 404 78 405 87 404 b 152 468 123 404 151 431 b 168 488 153 483 157 488 b 185 462 181 488 185 483 l 185 461 b 137 344 183 409 168 369 b 78 322 119 329 98 322 b 13 361 50 322 25 336 b -1 426 4 380 -1 402 b 89 611 -1 488 32 559 b 296 693 147 659 210 686 m 926 348 b 921 354 924 351 922 354 b 914 348 920 354 918 351 b 823 168 857 306 823 237 b 828 125 823 154 826 138 b 890 31 837 79 862 40 b 896 31 892 31 894 31 b 956 104 916 31 940 59 b 970 191 965 129 970 159 b 966 241 970 208 969 225 b 926 348 959 277 945 313 m 627 326 b 619 326 624 326 622 326 b 598 316 611 326 604 323 b 568 215 579 288 568 255 b 568 208 568 213 568 211 b 571 183 570 195 570 184 l 571 183 b 594 201 571 183 582 191 l 634 231 b 660 259 653 247 656 248 b 664 279 662 266 664 272 b 627 326 664 300 649 320 "},
"\ue172":{width:334,c:-538.890625,e:0,d:822.21875,f:333.46875,name:"accidentals.sharp.arrowup",h:340,height:1362,g:"m 219 819 b 225 822 220 820 223 822 b 239 816 231 822 235 819 b 245 801 242 812 243 811 b 328 587 259 726 291 647 l 333 579 l 333 573 l 333 572 b 315 554 333 561 325 554 b 306 556 313 554 308 555 b 251 577 288 568 270 575 b 246 579 249 577 247 579 b 245 577 246 579 245 579 b 246 576 245 577 246 577 b 247 416 246 575 246 543 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 494 87 498 b 114 486 102 498 110 494 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 409 b 206 575 205 547 205 572 b 206 577 206 576 206 577 b 205 579 206 579 206 579 b 200 577 205 579 202 577 b 147 556 181 575 163 568 b 136 554 142 555 138 554 b 118 572 126 554 118 561 l 118 573 l 118 579 l 123 587 b 205 797 160 647 187 718 b 219 819 209 813 210 816 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "},
"\ue160":{width:654,c:-958.328125,e:-1.359375,d:645.828125,f:651.96875,name:"rests.6",h:665,height:1605,g:"m 389 644 b 405 645 394 645 400 645 b 504 566 450 645 492 613 b 507 541 506 558 507 550 b 480 472 507 515 498 490 l 477 468 l 483 470 b 609 591 539 486 586 531 b 613 601 611 595 613 600 b 631 609 619 608 624 609 b 651 588 641 609 651 602 b 200 -947 651 584 204 -941 b 182 -958 197 -954 190 -958 b 163 -945 174 -958 166 -954 b 161 -940 161 -943 161 -943 b 217 -744 161 -931 170 -905 b 272 -555 247 -640 272 -555 b 272 -555 272 -555 272 -555 b 264 -561 272 -555 268 -558 b 140 -604 227 -590 182 -604 b 36 -568 102 -604 65 -593 b -1 -487 12 -548 -1 -518 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -554 205 -509 196 -536 l 175 -558 l 182 -555 b 307 -436 236 -540 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -250 b 99 -145 112 -206 99 -176 b 118 -84 99 -125 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -125 b 279 -212 306 -168 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 218 206 238 b 304 304 239 287 272 304 b 393 250 338 304 374 286 b 406 200 402 234 406 218 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 143 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 465 574 470 570 468 b 442 422 529 436 484 422 b 337 458 404 422 367 433 b 300 537 313 479 300 508 b 389 644 300 586 334 636 "},
"\ue133":{width:424,c:-229.171875,e:-171.5,d:633.328125,f:251.8125,name:"accidentals.flat.slashslash",h:257,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 554 20 616 20 615 b 20 491 20 504 20 491 l 20 491 b 153 536 47 501 149 536 b 174 515 167 536 174 525 b 164 497 174 508 171 501 b 92 470 164 495 132 484 l 20 445 l 20 390 b 20 363 20 379 20 370 b 20 333 20 340 20 333 l 20 333 b 153 377 47 344 149 377 b 174 356 167 377 174 368 b 164 338 174 350 171 343 b 92 312 164 338 132 326 l 20 288 l 20 219 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 b -21 30 -21 -212 -21 -212 b -21 273 -21 163 -21 273 b -84 252 -21 273 -50 263 b -152 230 -133 234 -145 230 b -157 231 -155 230 -156 231 b -171 252 -166 234 -171 244 b -160 270 -171 259 -167 266 b -27 316 -159 270 -93 294 l -21 319 l -21 375 b -21 431 -21 406 -21 431 b -84 409 -21 431 -50 422 b -152 388 -133 393 -145 388 b -157 390 -155 388 -156 388 b -171 409 -166 393 -171 401 b -160 429 -171 418 -167 425 b -27 475 -159 429 -93 451 l -21 476 l -21 547 b -20 620 -21 615 -21 616 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
"\ue10f":{width:230,c:-216.671875,e:-1.359375,d:215.28125,f:227.3125,name:"scripts.lcomma",h:232,height:433,g:"m 182 211 b 196 215 189 213 193 215 b 204 209 200 215 202 212 b 205 204 205 206 205 205 b 193 191 205 200 201 195 b 104 54 137 159 104 105 b 122 -8 104 31 110 11 l 123 -11 l 130 -11 b 202 -45 156 -11 185 -25 b 227 -112 219 -65 227 -88 b 172 -205 227 -150 208 -186 b 127 -216 157 -212 142 -216 b -1 -52 59 -216 -1 -144 b 0 -37 -1 -48 0 -43 b 182 211 6 58 80 155 "},2:{width:461,c:-1.390625,e:-1.359375,
d:673.609375,f:458.6875,name:"two",h:468,height:676,g:"m 197 648 b 216 648 201 648 208 648 b 258 647 232 648 253 648 b 419 547 333 637 393 600 b 432 490 428 529 432 509 b 356 343 432 440 405 384 b 235 279 322 313 288 295 b 69 170 166 256 107 218 b 69 169 69 170 69 169 b 69 169 69 169 69 169 b 74 173 69 169 72 170 b 209 222 112 204 163 222 b 310 195 247 222 274 215 b 371 179 332 184 352 179 b 396 181 379 179 387 179 b 428 202 409 184 423 194 b 442 212 431 209 436 212 b 458 197 450 212 458 206 b 441 148 458 190 449 165 b 299 44 409 84 353 44 b 288 45 295 44 292 44 b 250 61 274 45 268 50 b 122 100 212 86 164 100 b 73 91 104 100 88 97 b 28 63 53 84 34 72 b 14 54 25 56 20 54 b 1 62 9 54 4 56 l -1 65 l -1 79 b 0 100 -1 91 0 95 b 2 113 1 102 2 108 b 164 309 20 197 81 272 b 285 470 232 341 277 398 b 287 487 287 476 287 481 b 171 595 287 551 239 595 b 155 595 166 595 160 595 b 142 593 145 594 142 594 b 145 590 142 593 142 591 b 179 527 168 576 179 551 b 132 455 179 497 163 468 b 104 451 122 452 112 451 b 27 530 62 451 27 487 b 29 555 27 538 27 547 b 197 648 44 601 115 640 m 228 -1 l 230 -1 l 227 -1 l 228 -1 m 228 673 l 230 673 l 227 673 l 228 673 "},
"\ue1ab":{width:485,c:-248.609375,e:0,d:247.21875,f:484.5625,name:"noteheads.s2xcircle",h:494,height:497,g:"m 228 245 b 239 247 234 247 239 247 b 243 247 240 247 242 247 b 303 238 257 247 287 243 b 484 -2 417 208 484 104 b 412 -177 484 -65 461 -127 b 243 -248 363 -226 303 -248 b 6 -63 138 -248 36 -180 b 0 -1 1 -41 0 -20 b 228 245 0 127 98 240 m 255 181 b 240 183 247 183 245 183 b 232 181 238 183 235 183 b 142 152 200 180 168 170 l 138 150 l 190 97 l 242 44 l 294 97 l 345 150 l 340 152 b 255 181 315 169 284 180 m 147 -54 l 197 -1 l 147 51 l 95 104 l 91 100 b 62 -1 72 70 62 34 b 66 -43 62 -15 63 -29 b 91 -101 72 -63 80 -84 l 95 -106 l 147 -54 m 393 100 b 389 104 390 102 389 104 b 337 51 389 104 366 80 l 285 -1 l 337 -54 l 389 -106 l 393 -101 b 421 -1 412 -72 421 -36 b 393 100 421 34 412 69 m 294 -98 b 242 -45 265 -69 242 -45 b 190 -98 242 -45 219 -69 l 138 -151 l 142 -154 b 242 -184 172 -175 206 -184 b 340 -154 276 -184 311 -175 l 345 -151 l 294 -98 "},
"\ue165":{width:451,c:-616.671875,e:0,d:304.171875,f:450.53125,name:"rests.4",h:460,height:922,g:"m 189 302 b 204 304 193 302 198 304 b 303 225 250 304 292 270 b 306 200 304 216 306 208 b 279 129 306 173 296 147 l 276 126 l 281 127 b 408 250 337 143 385 190 b 412 259 409 254 412 258 b 430 268 417 265 423 268 b 450 247 441 268 450 259 b 200 -605 450 243 204 -600 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -611 b 161 -598 161 -601 161 -601 b 217 -402 161 -590 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -250 b 0 -145 12 -206 0 -176 b 17 -84 0 -125 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -125 b 178 -212 205 -168 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 194 111 136 99 165 b 189 302 99 244 133 293 "},
"\ue11d":{width:678,c:-702.78125,e:0,d:1201.390625,f:677.828125,name:"clefs.G_change",h:692,height:1905,g:"m 390 1200 b 396 1201 392 1201 394 1201 b 426 1180 404 1201 412 1195 b 528 976 468 1136 507 1059 b 543 863 537 938 543 901 b 401 533 543 744 494 627 l 366 497 l 344 476 l 349 455 l 366 376 b 385 284 381 304 385 284 b 385 284 385 284 385 284 b 394 284 386 284 390 284 b 419 286 402 286 411 286 b 568 237 472 286 526 268 b 677 18 641 183 677 101 b 624 -147 677 -38 661 -97 b 499 -245 592 -190 556 -219 l 496 -247 l 500 -268 b 524 -380 511 -319 522 -372 b 532 -459 529 -408 532 -434 b 431 -665 532 -551 498 -620 b 307 -702 394 -690 351 -702 b 130 -618 242 -702 175 -673 b 103 -543 111 -595 103 -569 b 156 -444 103 -505 121 -468 b 219 -425 175 -431 197 -425 b 303 -463 250 -425 283 -438 b 330 -536 321 -486 330 -511 b 232 -644 330 -588 292 -638 l 223 -644 l 230 -648 b 307 -665 254 -659 281 -665 b 485 -530 387 -665 464 -612 b 495 -462 492 -508 495 -486 b 481 -359 495 -433 491 -401 b 461 -259 472 -311 461 -259 b 461 -259 461 -259 461 -259 b 455 -261 461 -259 458 -259 b 372 -270 428 -268 401 -270 b 190 -222 310 -270 247 -254 b 0 115 68 -151 0 -20 b 46 304 0 179 14 243 b 268 581 80 369 182 497 l 281 595 l 280 606 b 240 798 253 734 243 781 b 235 865 236 822 235 843 b 239 927 235 884 236 905 b 340 1154 250 1011 285 1091 b 390 1200 356 1172 383 1198 m 446 1040 b 432 1041 442 1041 438 1041 b 383 1023 417 1041 401 1036 b 284 804 321 981 284 897 b 288 747 284 786 285 766 b 313 627 289 737 313 627 l 313 627 b 344 658 314 627 332 645 b 487 958 434 758 487 870 b 483 995 487 970 485 983 b 446 1040 477 1022 468 1034 m 314 441 b 314 443 314 443 314 443 b 303 433 313 443 310 440 b 161 254 251 375 196 305 b 102 56 122 194 102 125 b 125 -66 102 13 110 -27 b 374 -243 170 -175 269 -243 b 420 -238 389 -243 405 -241 b 454 -229 432 -236 454 -230 l 454 -229 b 442 -165 454 -227 449 -200 b 375 148 389 84 377 145 b 374 150 375 150 375 150 b 363 145 372 150 370 148 b 269 12 302 120 269 66 b 333 -101 269 -30 289 -73 b 343 -118 340 -105 343 -112 b 330 -133 343 -125 338 -130 b 328 -133 329 -133 328 -133 b 238 -70 308 -133 262 -101 b 193 61 206 -30 193 15 b 340 272 193 151 247 240 b 348 276 345 275 348 276 b 332 358 348 276 341 313 b 314 441 322 402 314 440 m 443 155 b 420 156 436 156 427 156 b 415 156 419 156 416 156 l 412 156 l 413 148 l 430 68 l 455 -54 l 477 -159 l 490 -213 l 494 -211 b 571 -134 525 -194 553 -165 b 601 -33 592 -102 601 -66 b 443 155 601 56 539 140 "},
"\ue1aa":{width:407,c:-184.71875,e:0,d:183.328125,f:406.96875,name:"noteheads.s2cross",h:415,height:369,g:"m 21 183 b 28 183 24 183 25 183 b 42 181 34 183 39 183 b 127 108 47 179 47 179 b 202 41 168 72 202 41 b 279 108 204 41 238 72 b 357 177 321 145 356 176 b 375 183 363 181 370 183 b 406 151 392 183 406 169 b 404 137 406 147 405 141 b 322 62 401 131 398 129 b 251 0 284 27 251 0 b 322 -63 251 -1 284 -29 b 404 -138 398 -130 401 -133 b 406 -152 405 -143 406 -148 b 375 -184 406 -170 392 -184 b 357 -179 370 -184 363 -183 b 279 -109 356 -177 321 -147 b 202 -43 238 -73 204 -43 b 127 -109 202 -43 168 -73 b 49 -179 85 -147 50 -177 b 31 -184 43 -183 36 -184 b 0 -152 13 -184 0 -170 b 2 -138 0 -148 0 -143 b 83 -63 5 -133 8 -130 b 155 0 122 -29 155 -1 b 83 62 155 0 122 27 b 8 129 43 97 10 127 b 0 151 2 136 0 144 b 21 183 0 165 8 177 "},
"\ue182":{width:343,c:-1177.78125,e:-24.5,d:-5.5625,f:317.140625,name:"flags.u4",h:324,height:1173,g:"m -24 -147 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 58 -123 6 -43 31 -86 b 196 -279 93 -173 134 -219 b 317 -570 274 -356 317 -461 b 294 -713 317 -618 308 -666 l 289 -725 l 294 -736 b 317 -873 308 -780 317 -827 b 235 -1133 317 -963 288 -1055 b 209 -1166 228 -1141 224 -1147 b 189 -1177 204 -1173 196 -1177 b 171 -1165 182 -1177 175 -1173 b 168 -1155 170 -1162 168 -1159 b 181 -1133 168 -1150 172 -1143 b 269 -891 238 -1065 269 -976 b 269 -881 269 -887 269 -884 b 262 -815 269 -858 265 -827 b 258 -801 261 -812 259 -806 b 142 -629 240 -731 198 -668 b -8 -590 112 -606 47 -590 b -20 -590 -13 -590 -19 -590 l -24 -590 l -24 -450 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 58 -425 6 -345 31 -388 b 194 -580 93 -476 136 -523 b 259 -661 221 -606 245 -636 b 261 -663 259 -662 261 -663 b 264 -656 262 -663 262 -661 b 269 -587 268 -633 269 -611 b 264 -522 269 -566 268 -544 b 262 -512 264 -518 262 -513 b 258 -498 261 -509 259 -504 b 142 -326 240 -429 198 -365 b -8 -287 112 -304 47 -288 b -20 -287 -13 -287 -19 -287 l -24 -287 l -24 -147 "},
"\ue1a7":{width:439,c:-206.9375,e:-1.359375,d:205.5625,f:436.921875,name:"noteheads.u2triangle",h:446,height:413,g:"m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 200 b 236 187 234 194 235 190 l 245 168 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 200 208 202 "},
"\ue18a":{width:559,c:-325,e:-1.359375,d:323.609375,f:556.6875,name:"timesig.C44",h:568,height:649,g:"m 294 322 b 318 323 299 322 308 323 b 360 320 334 323 352 322 b 526 218 430 311 490 273 b 543 166 537 202 543 184 b 447 70 543 118 503 70 b 445 70 447 70 446 70 b 359 159 394 72 359 113 b 368 201 359 173 362 187 b 442 245 382 229 412 245 b 455 244 446 245 451 245 b 460 244 458 244 460 244 b 460 244 460 244 460 244 b 454 248 460 244 458 245 b 325 291 417 276 372 291 b 285 287 313 291 299 290 b 144 -2 183 269 144 190 b 281 -290 144 -208 179 -280 b 304 -291 289 -291 298 -291 b 524 -105 412 -291 506 -212 b 541 -84 526 -88 530 -84 b 556 -101 551 -84 556 -90 b 549 -138 556 -111 553 -122 b 334 -322 521 -237 435 -311 b 302 -325 323 -323 313 -325 b 13 -101 172 -325 54 -234 b -1 -1 4 -68 -1 -34 b 294 322 -1 161 121 304 "},
"\ue191":{width:374,c:-158.328125,e:-348.4375,d:156.9375,f:24.5,name:"arrowheads.open.01",h:25,height:316,g:"m -330 155 b -322 156 -329 156 -326 156 b -315 156 -319 156 -317 156 b -298 147 -311 155 -308 154 b -19 30 -224 98 -122 55 l 2 26 b 24 -1 17 22 24 13 b 2 -27 24 -15 17 -23 l -19 -31 b -298 -148 -122 -56 -224 -100 b -322 -158 -313 -158 -315 -158 b -348 -131 -338 -158 -348 -145 b -344 -118 -348 -127 -347 -122 b -328 -104 -341 -112 -338 -111 b -127 -8 -269 -65 -202 -33 b -106 0 -115 -4 -106 -1 b -127 6 -106 0 -115 2 b -328 102 -202 31 -269 63 b -344 116 -338 109 -341 111 b -348 130 -347 120 -348 125 b -330 155 -348 141 -341 152 "},
"\ue122":{width:884,c:0,e:-442.359375,d:488.890625,f:441,name:"scripts.ufermata",h:450,height:489,g:"m -31 487 b -1 488 -21 488 -10 488 b 434 104 216 488 397 330 b 441 27 438 79 441 47 b 439 12 441 20 439 15 b 419 0 435 4 427 0 b 404 5 413 0 408 1 b 398 30 400 11 398 13 b 0 351 390 213 213 351 b -59 348 -20 351 -39 350 b -400 30 -251 325 -393 191 b -405 5 -400 13 -401 11 b -420 0 -409 1 -415 0 b -441 12 -428 0 -436 4 b -442 27 -441 15 -442 20 b -435 104 -442 47 -439 79 b -31 487 -401 316 -235 475 m -13 131 b -1 133 -9 133 -5 133 b 51 105 19 133 39 123 b 61 70 58 95 61 83 b 51 34 61 58 58 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -57 38 -62 54 b -13 131 -62 98 -44 125 "},
"\ue12e":{width:274,c:-229.171875,e:-21.78125,d:633.328125,f:251.8125,name:"accidentals.flat",h:257,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
"\ue143":{width:805,c:-300,e:-402.890625,d:275,f:401.53125,name:"scripts.mordent",h:410,height:575,g:"m -10 273 b -4 275 -9 273 -6 275 b 16 262 4 275 12 269 b 17 158 17 259 17 259 l 17 56 l 62 112 b 117 175 110 172 110 172 b 122 175 118 175 119 175 b 132 173 125 175 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 75 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -175 215 -176 b 201 -175 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b 21 -6 27 0 24 -2 l 17 -12 l 17 -147 b 17 -211 17 -173 17 -194 b 10 -293 17 -297 16 -287 b -2 -300 6 -297 2 -300 b -21 -287 -10 -300 -19 -295 b -24 -175 -23 -284 -23 -284 l -24 -63 l -66 -118 b -121 -176 -110 -170 -114 -176 b -125 -176 -122 -176 -123 -176 b -296 -12 -134 -175 -125 -184 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -50 -402 -55 -402 -52 b -224 170 -398 -43 -231 165 b -212 175 -221 173 -216 175 b -202 173 -208 175 -205 175 b -39 11 -200 172 -151 122 l -28 -1 l -25 1 l -24 4 l -24 130 b -23 261 -24 256 -24 258 b -10 273 -20 266 -16 270 "},
"\ue1a0":{width:628,c:-193.0625,e:0,d:191.671875,f:627.46875,name:"noteheads.s0diamond",h:640,height:386,g:"m 306 190 b 314 191 308 191 311 191 b 326 184 318 191 322 190 l 336 173 b 510 52 377 127 442 80 b 515 50 513 51 515 50 b 611 16 537 40 579 25 b 627 0 624 13 627 9 b 607 -18 627 -11 624 -13 b 330 -181 490 -50 389 -109 b 314 -193 323 -190 319 -193 b 306 -191 311 -193 308 -193 b 294 -177 302 -188 302 -188 b 257 -140 287 -170 265 -148 b 19 -18 193 -84 114 -44 b 0 0 2 -13 0 -11 b 16 16 0 9 2 13 b 110 50 47 25 89 40 b 117 52 111 50 114 51 b 145 65 126 56 130 58 b 281 163 200 93 245 125 b 300 186 288 170 291 175 b 306 190 300 187 303 188 m 317 137 b 313 143 315 141 314 143 b 308 137 313 143 311 141 b 161 4 276 84 220 33 b 155 0 159 1 155 0 b 163 -4 155 0 159 -2 b 308 -138 220 -34 276 -84 b 313 -143 311 -141 313 -143 b 317 -138 314 -143 315 -141 b 464 -4 351 -84 406 -34 b 470 0 468 -2 470 0 b 464 4 470 0 468 1 b 317 137 406 33 351 84 "},
"\ue184":{width:341,c:-1534.71875,e:-24.5,d:-5.5625,f:315.78125,name:"flags.u5",h:322,height:1530,g:"m -24 -145 l -24 -5 l -20 -5 b 1 -26 -10 -5 -6 -9 b 175 -241 31 -86 96 -166 b 314 -548 259 -323 304 -420 b 315 -590 315 -555 315 -572 b 314 -630 315 -606 315 -623 b 298 -730 311 -665 306 -700 l 295 -743 l 296 -748 b 314 -851 304 -779 311 -813 b 315 -893 315 -858 315 -875 b 314 -933 315 -909 315 -926 b 298 -1033 311 -968 306 -1002 l 295 -1045 l 296 -1051 b 314 -1154 304 -1081 311 -1116 b 315 -1194 315 -1161 315 -1177 b 314 -1236 315 -1212 315 -1229 b 217 -1527 306 -1338 270 -1445 b 201 -1534 213 -1533 208 -1534 b 182 -1523 193 -1534 185 -1530 b 179 -1515 181 -1519 179 -1518 b 189 -1490 179 -1509 182 -1502 b 266 -1218 240 -1404 266 -1309 b 262 -1156 266 -1197 265 -1177 b 110 -908 247 -1044 190 -951 b 0 -890 87 -895 50 -890 l -1 -890 l -24 -890 l -24 -750 l -24 -611 l -20 -611 b 1 -631 -10 -611 -6 -615 b 175 -847 31 -691 96 -772 b 259 -956 213 -884 236 -915 b 265 -966 262 -962 264 -966 b 265 -966 265 -966 265 -966 b 265 -954 265 -965 265 -959 b 266 -920 266 -944 266 -933 b 262 -854 266 -898 265 -873 b 110 -605 247 -741 190 -648 b 0 -587 87 -593 50 -587 l -1 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 1 -329 -10 -308 -6 -312 b 175 -544 31 -388 96 -469 b 259 -655 213 -581 236 -612 b 265 -663 262 -659 264 -663 b 265 -663 265 -663 265 -663 b 265 -651 265 -663 265 -658 b 266 -618 266 -641 266 -630 b 262 -551 266 -595 265 -570 b 110 -304 247 -438 190 -345 b 0 -284 87 -290 50 -284 l -1 -284 l -24 -284 l -24 -145 "},
"\ue11c":{width:721,c:-605.5625,e:0,d:280.5625,f:720.03125,name:"clefs.F_change",h:735,height:887,g:"m 251 280 b 269 280 258 280 264 280 b 487 215 348 280 432 255 b 594 -2 558 159 594 87 b 590 -55 594 -19 593 -37 b 44 -598 553 -309 330 -533 b 10 -605 25 -604 16 -605 b 1 -600 5 -605 2 -604 b 0 -594 0 -598 0 -595 b 8 -580 0 -587 2 -580 b 43 -566 9 -580 32 -572 b 453 -54 279 -468 434 -275 b 454 -9 454 -48 454 -29 b 453 34 454 9 454 29 b 351 230 443 129 411 193 b 259 255 323 247 292 255 b 70 133 183 255 103 208 b 68 125 68 127 68 125 b 68 123 68 123 68 123 b 70 126 68 123 69 125 b 126 141 88 137 107 141 b 202 109 153 141 182 131 b 234 33 224 87 234 59 b 126 -77 234 -23 191 -77 b 5 61 53 -77 5 -13 b 27 147 5 88 12 119 b 251 280 68 226 151 275 m 672 172 b 677 173 673 173 676 173 b 720 130 700 173 720 152 b 714 111 720 125 717 118 b 677 88 707 95 692 88 b 642 108 664 88 650 95 b 637 130 638 115 637 123 b 672 172 637 151 650 169 m 672 -90 b 677 -90 673 -90 676 -90 b 720 -131 700 -90 720 -109 b 714 -151 720 -138 717 -144 b 677 -175 707 -166 692 -175 b 642 -154 664 -175 650 -168 b 637 -133 638 -147 637 -140 b 672 -90 637 -112 650 -93 "},
"\ue1a3":{width:631,c:-206.9375,e:0,d:205.5625,f:630.203125,name:"noteheads.s0triangle",h:643,height:413,g:"m 308 204 b 314 205 310 205 313 205 b 326 201 319 205 323 204 b 355 154 328 200 338 180 b 401 83 362 143 392 95 l 409 72 b 431 41 412 66 424 50 b 619 -175 498 -51 570 -134 b 630 -193 626 -180 630 -186 b 626 -202 630 -195 628 -200 b 616 -206 623 -205 620 -206 b 552 -188 608 -206 592 -202 b 310 -155 488 -169 392 -155 b 268 -156 295 -155 281 -155 b 77 -188 197 -161 126 -173 b 13 -206 35 -202 20 -206 b 9 -206 12 -206 10 -206 b 0 -191 2 -202 0 -197 b 8 -176 0 -186 2 -180 b 204 50 58 -136 138 -43 l 220 72 l 227 83 b 295 188 245 108 281 166 b 308 204 299 197 304 202 m 315 147 b 314 147 315 147 314 147 b 314 147 314 147 314 147 b 306 129 314 145 310 138 l 296 105 b 281 72 292 97 284 77 l 274 56 b 181 -123 247 -4 212 -72 l 174 -134 l 176 -133 b 314 -123 215 -127 272 -123 b 451 -133 356 -123 413 -127 l 454 -134 l 449 -123 b 353 56 417 -72 381 -4 l 347 72 b 332 105 344 77 336 97 l 322 129 b 315 147 318 138 315 145 "},
qn:{width:309,c:-30.5625,e:70.78125,d:373.609375,f:378.390625,name:"s",h:315,height:405,g:"m 246 373 b 254 373 249 373 251 373 b 372 325 303 373 360 351 b 378 302 377 318 378 309 b 338 251 378 279 362 255 b 328 250 334 250 332 250 b 283 294 303 250 283 270 b 288 315 283 301 284 308 b 289 319 289 318 289 319 b 289 319 289 319 289 319 b 283 320 289 320 287 320 b 270 322 279 322 274 322 b 206 288 242 322 215 308 b 206 283 206 287 206 286 b 257 223 206 268 230 238 b 284 206 272 213 277 211 b 351 90 328 173 351 130 b 340 47 351 75 348 59 b 205 -30 314 -2 264 -30 b 182 -29 198 -30 190 -30 b 84 15 147 -25 103 -5 b 70 48 74 25 70 36 b 108 100 70 70 85 94 b 121 102 112 101 117 102 b 167 56 147 102 167 80 b 159 31 167 48 164 40 l 156 26 l 157 26 b 190 20 167 22 178 20 b 220 26 201 20 212 22 b 258 65 243 34 258 51 b 257 70 258 66 258 69 b 204 126 249 94 234 109 b 114 258 148 158 114 209 b 125 302 114 273 118 288 b 246 373 147 343 193 370 "},
"\ue114":{width:504,c:-287.5,e:0,d:430.5625,f:503.609375,name:"scripts.caesura.curved",h:514,height:719,g:"m 274 430 b 277 430 276 430 277 430 b 310 394 296 430 310 415 b 308 383 310 391 308 387 b 306 368 307 381 307 375 b 236 120 298 305 272 211 b 40 -273 189 -5 125 -134 b 20 -287 35 -283 27 -287 b 5 -281 14 -287 9 -286 b 0 -268 1 -277 0 -273 b 9 -243 0 -262 2 -255 b 246 395 137 -12 232 243 b 274 430 249 416 257 427 m 468 430 b 472 430 469 430 470 430 b 503 394 490 430 503 415 b 502 383 503 391 503 387 b 499 368 502 381 500 375 b 431 120 491 305 465 211 b 234 -273 382 -5 318 -134 b 213 -287 228 -283 220 -287 b 198 -281 208 -287 202 -286 b 193 -268 194 -277 193 -273 b 202 -243 193 -262 196 -255 b 439 395 330 -12 426 243 b 468 430 442 416 451 427 "},
"\ue195":{width:374,c:-158.328125,e:-348.4375,d:156.9375,f:24.5,name:"arrowheads.close.01",h:25,height:316,g:"m -330 155 b -322 156 -329 156 -326 156 b -315 156 -319 156 -317 156 b -298 147 -311 155 -308 154 b -6 27 -221 95 -117 52 b 10 23 1 26 8 23 b 24 -1 20 18 24 8 b 12 -23 24 -9 20 -19 b -8 -29 9 -26 9 -26 b -298 -148 -112 -52 -223 -97 b -322 -158 -313 -158 -315 -158 b -348 -133 -338 -158 -348 -147 b -343 -115 -348 -127 -347 -120 b -313 -1 -323 -79 -313 -40 b -337 101 -313 34 -321 69 b -343 113 -338 105 -341 111 b -348 131 -347 119 -348 126 b -330 155 -348 143 -343 152 "},
"\ue120":{width:623,c:-391.671875,e:-311.6875,d:390.28125,f:310.328125,name:"scripts.coda",h:317,height:783,g:"m -9 388 b -2 390 -8 390 -5 390 b 5 388 1 390 4 390 b 19 379 10 387 16 383 b 23 333 23 372 23 372 b 24 298 23 300 24 298 b 81 276 34 298 65 286 b 213 91 145 240 190 177 b 224 25 217 76 224 36 b 257 25 224 25 235 25 b 299 19 292 25 292 25 b 310 -1 306 15 310 6 b 299 -23 310 -11 306 -19 b 257 -27 292 -27 292 -27 b 224 -29 235 -27 224 -29 b 213 -95 224 -40 217 -80 b 81 -280 190 -181 145 -244 b 24 -301 65 -290 34 -301 b 23 -336 24 -301 23 -304 l 23 -340 b 17 -381 23 -375 23 -375 b -1 -391 13 -388 5 -391 b -21 -381 -9 -391 -17 -388 b -27 -340 -27 -375 -27 -375 l -27 -336 b -28 -301 -27 -304 -27 -301 b -85 -280 -38 -301 -69 -290 b -217 -95 -149 -244 -194 -181 b -228 -29 -221 -80 -228 -40 b -259 -27 -228 -29 -238 -27 b -300 -23 -294 -27 -294 -27 b -311 -2 -307 -19 -311 -11 b -294 23 -311 8 -304 19 b -259 25 -291 23 -284 25 b -228 25 -239 25 -228 25 b -217 91 -228 36 -221 76 b -85 276 -194 177 -149 240 b -28 298 -69 286 -38 298 b -27 333 -27 298 -27 300 b -27 372 -27 362 -27 369 b -9 388 -24 379 -17 386 m -27 136 b -28 247 -27 197 -28 247 b -61 216 -31 247 -53 226 b -123 33 -95 172 -121 98 l -125 25 l -76 25 l -27 25 l -27 136 m 29 243 b 24 247 27 245 24 247 b 23 136 24 247 23 197 l 23 25 l 72 25 l 121 25 l 119 33 b 29 243 115 116 77 206 m -27 -140 l -27 -27 l -76 -27 l -125 -27 l -123 -36 b -61 -220 -121 -102 -95 -176 b -28 -251 -53 -230 -31 -251 b -27 -140 -28 -251 -27 -201 m 119 -36 l 121 -27 l 72 -27 l 23 -27 l 23 -140 b 24 -251 23 -201 24 -251 b 57 -220 27 -251 49 -230 b 119 -36 91 -176 117 -102 "},
"\ue14e":{width:240,c:-463.890625,e:0,d:462.5,f:239.5625,name:"accidentals.0",h:244,height:927,g:"m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -106 l 239 -448 l 238 -451 b 219 -463 234 -459 225 -463 b 198 -451 210 -463 202 -459 l 197 -448 l 197 -325 b 197 -201 197 -248 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "},
"\ue16c":{width:194,c:-519.4375,e:0,d:518.0625,f:193.28125,name:"accidentals.1",h:197,height:1039,g:"m 85 515 b 95 518 88 518 89 518 b 114 505 103 518 110 513 l 115 502 l 115 376 b 115 250 115 306 115 250 b 141 258 117 250 127 252 l 167 266 l 172 266 b 190 254 181 265 187 262 l 193 251 l 193 202 l 193 188 b 187 147 193 150 191 152 b 147 130 183 143 182 141 l 115 119 l 115 9 b 115 -100 115 -51 115 -100 b 141 -91 115 -100 127 -95 b 171 -81 166 -81 167 -81 l 171 -81 b 191 -94 181 -81 189 -87 b 193 -143 191 -97 193 -120 b 191 -195 193 -168 191 -194 b 125 -227 187 -205 187 -204 l 115 -230 l 115 -366 l 115 -504 l 114 -506 b 95 -519 110 -515 102 -519 b 74 -506 87 -519 78 -515 l 73 -504 l 73 -375 b 73 -245 73 -261 73 -245 b 73 -245 73 -245 73 -245 b 55 -252 72 -245 63 -250 l 32 -261 b 19 -263 27 -262 23 -263 b 4 -256 13 -263 8 -261 b 0 -215 0 -251 0 -254 b 0 -200 0 -211 0 -206 l 0 -152 l 1 -150 b 8 -140 2 -145 5 -141 b 42 -127 9 -140 24 -133 l 73 -116 l 73 -5 b 73 23 73 4 73 15 b 73 105 73 70 73 105 b 49 97 73 105 61 101 b 17 88 32 91 23 88 b 4 95 10 88 8 91 b 0 137 0 101 0 98 b 0 151 0 141 0 145 l 0 200 l 1 202 b 43 225 5 212 5 212 l 73 234 l 73 368 l 73 502 l 74 505 b 85 515 77 509 81 513 "},
"\ue13b":{width:223,c:-113.890625,e:-111.609375,d:112.5,f:110.25,name:"scripts.flageolet",h:113,height:227,g:"m -8 112 b -1 112 -5 112 -2 112 b 110 -1 63 112 110 58 b 87 -69 110 -25 103 -48 b -1 -113 65 -98 32 -113 b -88 -69 -34 -113 -66 -98 b -111 -1 -104 -48 -111 -25 b -8 112 -111 55 -70 108 m 17 94 b 0 95 12 95 6 95 b -53 79 -17 95 -38 90 b -95 -1 -80 61 -95 30 b -72 -63 -95 -23 -88 -45 b -1 -97 -53 -87 -27 -97 b 89 -31 38 -97 74 -73 b 93 0 92 -20 93 -11 b 17 94 93 44 63 83 "},"\ue176":{width:458,
c:-544.4375,e:-1.359375,d:543.0625,f:455.96875,name:"accidentals.sharp.slashslash.stemstemstem",h:465,height:1089,g:"m 352 541 b 357 543 353 543 355 543 b 377 530 364 543 372 537 l 378 526 l 378 394 l 379 262 l 404 266 b 436 270 420 269 430 270 b 450 265 443 270 446 269 b 455 220 455 259 455 261 l 455 208 l 455 161 l 454 156 b 411 140 449 147 447 147 b 378 133 393 137 379 134 b 378 68 378 133 378 106 b 378 22 378 54 378 38 l 379 -87 l 404 -83 b 436 -79 420 -80 430 -79 b 450 -84 443 -79 446 -80 b 455 -129 455 -90 455 -88 l 455 -141 l 455 -188 l 454 -193 b 413 -209 449 -202 447 -202 b 382 -215 398 -212 383 -215 l 378 -215 l 378 -345 l 378 -380 b 375 -486 378 -484 378 -480 b 357 -494 371 -491 364 -494 b 340 -486 351 -494 344 -491 b 336 -383 337 -480 336 -484 l 336 -350 l 336 -223 l 334 -223 b 291 -231 334 -223 314 -227 l 247 -240 l 247 -372 l 246 -504 l 245 -506 b 225 -519 242 -515 234 -519 b 206 -506 219 -519 210 -515 l 205 -504 l 205 -376 l 205 -248 l 160 -256 l 115 -265 l 115 -397 l 115 -527 l 114 -531 b 95 -544 110 -540 102 -544 b 76 -531 87 -544 78 -540 l 73 -527 l 73 -400 b 73 -273 73 -330 73 -273 b 49 -277 73 -273 61 -275 b 17 -281 32 -280 24 -281 b 4 -276 10 -281 8 -280 b -1 -234 0 -269 -1 -272 b 0 -219 -1 -229 0 -225 l 0 -170 l 1 -168 b 10 -158 2 -163 6 -159 b 49 -150 13 -156 16 -155 l 73 -145 l 73 -34 b 73 76 73 26 73 76 b 49 72 73 76 61 75 b 17 68 32 69 24 68 b 4 73 10 68 8 69 b -1 115 0 80 -1 77 b 0 130 -1 120 0 125 l 0 179 l 1 181 b 10 191 2 186 6 190 b 49 200 13 193 16 194 l 73 204 l 73 338 b 73 375 73 352 73 365 b 77 483 73 484 73 477 b 95 493 81 490 88 493 b 111 483 100 493 107 490 b 115 379 115 477 115 483 l 115 343 b 117 212 115 223 115 212 b 204 229 117 212 200 227 l 205 229 l 205 365 l 205 502 l 206 505 b 225 518 210 513 219 518 b 245 505 234 518 242 513 l 246 502 l 247 369 l 247 237 l 249 237 b 336 254 253 238 336 254 b 337 390 336 254 337 302 l 337 526 l 338 530 b 352 541 341 536 347 540 m 336 15 b 336 126 336 102 336 126 l 336 126 b 291 118 336 126 315 122 l 247 109 l 247 -1 l 247 -112 l 249 -112 b 336 -95 253 -111 336 -95 b 336 15 336 -95 336 -56 m 205 -120 b 205 -55 205 -120 205 -93 b 205 -9 205 -41 205 -25 l 205 101 l 160 93 l 115 84 l 115 -26 b 115 -83 115 -50 115 -69 b 117 -137 115 -133 115 -137 b 205 -120 118 -137 204 -120 "},
"\ue107":{width:310,c:1.390625,e:-10.890625,d:475,f:298.078125,name:"scripts.arpeggio.arrow.M1",h:294,height:474,g:"m 138 473 b 142 475 140 473 141 475 b 164 459 148 475 153 470 b 191 402 183 443 191 423 b 181 354 191 388 187 372 b 178 350 179 352 178 350 b 179 348 178 348 179 348 b 185 350 181 348 182 348 b 255 376 210 355 234 363 b 272 381 264 381 266 381 b 298 355 287 381 298 370 b 288 330 298 348 298 345 b 171 34 238 254 194 141 b 166 13 168 16 168 16 b 144 1 161 5 152 1 b 121 15 134 1 125 5 b 115 33 119 18 117 24 b 0 330 91 145 49 252 b -10 355 -9 345 -10 348 b 13 381 -10 372 0 381 b 31 376 19 381 25 380 b 132 345 61 358 103 345 l 136 345 l 137 355 b 145 379 138 359 142 370 b 152 415 149 394 152 405 b 137 452 152 427 148 438 b 133 465 134 458 133 461 b 138 473 133 468 134 470 "},
"\ue115":{width:903,c:-243.0625,e:0,d:241.671875,f:902.421875,name:"noteheads.sM1",h:921,height:486,g:"m 17 240 b 24 241 19 241 21 241 b 32 240 28 241 31 241 b 46 229 38 238 43 234 b 50 88 50 223 50 237 b 50 -1 50 63 50 34 b 50 -90 50 -36 50 -65 b 46 -231 50 -238 50 -225 b 25 -243 42 -238 34 -243 b 0 -225 14 -243 4 -236 b 0 2 0 -222 0 -108 b 0 223 0 112 0 220 b 17 240 2 230 9 237 m 110 240 b 118 241 111 241 114 241 b 126 240 121 241 123 241 b 142 223 133 237 140 230 b 144 123 144 220 144 205 b 144 29 144 45 144 29 b 144 29 144 29 144 29 b 393 183 166 106 264 168 b 450 186 412 184 431 186 b 756 29 600 186 732 120 b 756 29 756 29 756 29 b 758 123 758 29 758 45 b 760 227 758 226 758 223 b 784 241 766 237 774 241 b 804 229 792 241 800 237 b 809 88 808 223 809 237 l 809 -1 l 809 -90 b 804 -231 809 -238 808 -225 b 784 -243 800 -238 792 -243 b 762 -231 775 -243 766 -238 b 758 -125 756 -225 758 -231 b 756 -30 758 -47 758 -30 b 756 -30 756 -30 756 -30 b 509 -184 736 -108 637 -169 b 450 -187 488 -187 469 -187 b 144 -30 300 -187 168 -122 b 144 -30 144 -30 144 -30 b 144 -125 144 -30 144 -47 b 140 -231 144 -231 144 -225 b 118 -243 134 -238 126 -243 b 92 -225 107 -243 96 -236 b 92 2 92 -222 92 -108 b 92 223 92 112 92 220 b 110 240 95 230 102 237 m 432 161 b 413 162 426 162 420 162 b 313 41 351 162 313 109 b 347 -73 313 5 323 -34 b 487 -163 385 -133 439 -163 b 578 -97 526 -163 562 -143 b 588 -43 585 -80 588 -62 b 432 161 588 47 518 147 m 868 240 b 876 241 869 241 872 241 b 884 240 879 241 882 241 b 898 229 890 238 894 234 b 902 88 902 223 902 237 l 902 -1 l 902 -90 b 898 -231 902 -238 902 -225 b 876 -243 892 -238 884 -243 b 852 -225 865 -243 854 -236 b 850 2 850 -222 850 -108 b 852 223 850 112 850 220 b 868 240 853 230 860 237 "},
"\ue180":{width:343,c:-1034.71875,e:-24.5,d:-5.5625,f:317.140625,name:"flags.u3",h:324,height:1030,g:"m -24 -161 l -24 -5 l -20 -5 b 0 -25 -9 -5 -2 -12 b 171 -315 21 -125 84 -233 b 317 -661 268 -406 317 -531 b 187 -1015 317 -783 274 -909 b 161 -1034 172 -1034 171 -1034 b 141 -1013 149 -1034 141 -1026 b 152 -991 141 -1005 142 -1002 b 266 -683 228 -900 266 -788 b 174 -430 266 -588 236 -498 b -23 -318 136 -388 66 -348 b -24 -161 -23 -316 -24 -286 "},"\ue15f":{width:552,c:-616.671875,e:0,d:645.828125,
f:551.25,name:"rests.5",h:563,height:1263,g:"m 289 644 b 304 645 294 645 299 645 b 404 566 349 645 392 613 b 406 541 405 558 406 550 b 379 472 406 515 397 490 l 377 468 l 382 470 b 509 591 438 486 485 531 b 513 601 510 595 513 600 b 530 609 518 608 524 609 b 551 588 540 609 551 602 b 200 -605 551 584 204 -600 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -611 b 161 -598 161 -601 161 -601 b 217 -402 161 -590 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -250 b 0 -145 12 -206 0 -176 b 17 -84 0 -125 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -125 b 178 -212 205 -168 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 195 112 136 99 165 b 118 256 99 218 106 238 b 204 304 138 287 171 304 b 292 250 238 304 273 286 b 306 200 302 234 306 218 b 279 129 306 173 296 148 l 276 126 l 281 127 b 408 248 336 143 385 190 b 473 470 409 254 473 469 b 473 470 473 470 473 470 b 465 465 473 470 469 468 b 341 422 428 436 383 422 b 236 458 303 422 266 433 b 200 537 212 479 200 508 b 289 644 200 586 234 636 "},
"\ue15a":{width:1160,c:-348.609375,e:0,d:347.21875,f:1159.671875,name:"rests.M3",h:1183,height:697,g:"m 0 0 l 0 347 l 193 347 l 386 347 l 386 0 l 386 -348 l 193 -348 l 0 -348 l 0 0 m 773 -1 l 773 347 l 966 347 l 1159 347 l 1159 -1 l 1159 -348 l 966 -348 l 773 -348 l 773 -1 "},"\ue12b":{width:273,c:-229.171875,e:0,d:633.328125,f:272.21875,name:"accidentals.mirroredflat",h:278,height:864,g:"m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "},
"\ue185":{width:390,c:4.171875,e:-21.78125,d:1554.171875,f:367.5,name:"flags.d6",h:375,height:1551,g:"m 259 1554 b 265 1554 261 1554 264 1554 b 288 1541 272 1554 277 1551 b 367 1352 340 1494 367 1425 b 336 1222 367 1309 357 1263 l 332 1212 l 333 1209 b 367 1077 356 1170 367 1125 b 336 945 367 1033 357 987 l 332 936 l 333 933 b 367 801 356 894 367 848 b 336 669 367 756 357 711 l 332 659 l 333 656 b 367 523 356 618 367 572 b 345 412 367 486 360 447 b 231 273 322 356 284 311 b -1 19 121 195 27 93 b -17 4 -4 11 -10 5 l -21 4 l -21 134 l -21 265 l -17 265 b 133 291 20 265 96 279 b 318 537 245 329 318 433 b 307 604 318 559 315 583 b 303 615 304 612 304 615 b 298 609 302 615 300 613 b 231 550 281 590 258 568 b -1 295 121 472 27 369 b -17 280 -4 287 -10 281 l -21 280 l -21 411 l -21 541 l -17 541 b 133 568 20 541 96 555 b 318 813 245 605 318 709 b 307 880 318 836 315 859 b 303 891 304 888 304 891 b 298 886 302 891 300 888 b 231 826 281 866 258 844 b -1 572 121 748 27 645 b -17 556 -4 563 -10 558 l -21 556 l -21 687 l -21 818 l -17 818 b 133 844 20 818 96 830 b 318 1090 245 881 318 986 b 307 1156 318 1112 315 1134 b 303 1168 304 1165 304 1168 b 298 1162 302 1168 300 1165 b 231 1102 281 1141 258 1120 b -1 848 121 1025 27 922 b -17 833 -4 840 -10 834 l -21 833 l -21 963 l -21 1094 l -17 1094 b 114 1113 12 1094 78 1104 b 313 1315 215 1143 289 1219 b 318 1365 317 1331 318 1348 b 255 1512 318 1423 295 1479 b 243 1533 247 1520 243 1526 b 259 1554 243 1541 250 1551 "},
"\ue11a":{width:465,c:-348.609375,e:0,d:347.21875,f:464.140625,name:"clefs.percussion",h:474,height:697,g:"m 0 0 l 0 347 l 76 347 l 153 347 l 153 0 l 153 -348 l 76 -348 l 0 -348 l 0 0 m 308 -1 l 308 347 l 386 347 l 464 347 l 464 -1 l 464 -348 l 386 -348 l 308 -348 l 308 -1 "},"0":{width:515,c:-1.390625,e:0,d:673.609375,f:514.5,name:"zero",h:525,height:676,g:"m 236 648 b 246 648 238 648 242 648 b 288 647 261 648 283 648 b 472 513 364 634 428 587 b 514 347 502 465 514 413 b 462 163 514 272 499 218 b 257 44 409 83 333 44 b 50 163 181 44 103 83 b 0 347 14 218 0 272 b 40 513 0 413 12 465 b 236 648 87 591 155 638 m 277 615 b 253 616 273 616 261 616 b 242 616 247 616 243 616 b 170 500 193 609 181 590 b 159 348 163 447 159 398 b 166 222 159 308 161 266 b 201 91 174 138 183 106 b 257 76 215 81 235 76 b 311 91 277 76 299 81 b 347 222 330 106 338 138 b 353 348 352 266 353 308 b 344 500 353 398 351 447 b 277 615 333 587 322 606 m 257 -1 l 258 -1 l 255 -1 l 257 -1 m 257 673 l 258 673 l 255 673 l 257 673 "},
"\ue16a":{width:343,c:0,e:-171.5,d:568.0625,f:170.140625,name:"scripts.umarcato",h:174,height:575,g:"m -6 566 b 0 568 -5 568 -2 568 b 14 556 6 568 12 563 b 92 286 14 555 50 433 b 170 13 166 33 170 19 b 168 13 170 13 170 13 b 161 1 168 8 167 4 l 159 0 l 122 0 l 84 0 l 81 1 b 21 195 76 5 78 -5 b -32 381 -8 297 -32 381 b -87 197 -32 381 -57 298 b -141 8 -115 94 -140 9 b -155 0 -142 2 -149 0 b -171 15 -163 0 -171 5 b -14 556 -171 18 -24 529 b -6 566 -14 561 -10 565 "},"\ue126":{width:881,c:-490.28125,
e:-441,d:0,f:439.640625,name:"scripts.dfermata",h:449,height:491,g:"m -428 -2 b -421 0 -427 -1 -424 0 b -406 -6 -416 0 -409 -2 b -400 -31 -401 -12 -400 -15 b -1 -352 -392 -215 -215 -352 b 58 -350 19 -352 38 -351 b 398 -31 250 -326 392 -193 b 404 -6 398 -15 400 -12 b 419 -1 408 -2 413 -1 b 439 -13 427 -1 435 -5 b 439 -29 439 -16 439 -22 b 434 -105 439 -48 438 -80 b 0 -490 397 -333 213 -490 b -68 -484 -23 -490 -44 -488 b -441 -36 -280 -452 -436 -263 b -441 -30 -441 -34 -441 -31 b -428 -2 -441 -11 -439 -5 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -57 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "},
"\ue166":{width:448,c:-175,e:0,d:0,f:447.8125,name:"rests.0",h:457,height:175,g:"m 0 -87 l 0 0 l 223 0 l 447 0 l 447 -87 l 447 -175 l 223 -175 l 0 -175 l 0 -87 "},"\ue158":{width:595,c:88.890625,e:-1.359375,d:694.453125,f:592.078125,name:"pedal.*",h:604,height:607,g:"m 280 693 b 295 694 283 693 289 694 b 310 693 300 694 307 693 b 357 630 340 684 357 658 b 336 580 357 612 351 594 b 311 538 321 566 311 550 b 352 493 311 512 330 493 b 366 495 357 493 362 493 b 397 554 390 504 397 518 b 415 604 397 576 402 591 b 460 623 427 618 443 623 b 509 600 479 623 498 615 b 522 559 518 587 522 573 b 494 506 522 538 513 519 b 451 495 481 498 473 497 b 415 488 432 495 426 494 b 394 450 404 483 394 465 b 394 448 394 448 394 448 l 394 440 l 397 433 b 428 409 404 420 413 413 b 438 408 431 408 435 408 b 479 431 450 408 462 415 b 528 455 495 448 510 455 b 548 452 534 455 541 454 b 592 391 577 443 592 416 b 549 331 592 365 577 340 b 528 327 541 329 534 327 b 479 351 510 327 495 336 b 438 375 464 368 450 375 b 417 369 431 375 424 373 b 394 333 402 361 394 348 b 400 312 394 326 396 319 b 451 287 408 294 420 288 b 513 258 484 286 499 279 b 522 223 519 247 522 234 b 461 159 522 190 496 159 b 449 161 457 159 453 159 b 397 229 416 168 397 191 b 366 288 397 265 390 279 b 352 290 362 290 357 290 b 315 262 336 290 321 280 b 311 245 313 256 311 251 b 334 204 311 233 318 220 b 355 170 348 190 351 184 b 357 152 356 166 357 159 b 355 136 357 147 356 140 b 295 88 345 104 321 88 b 232 152 264 88 232 112 b 255 204 232 175 238 186 b 279 244 273 222 279 231 l 279 245 b 238 290 279 270 259 290 b 224 288 234 290 228 290 b 193 229 200 279 193 265 b 141 161 193 191 174 168 b 129 159 137 159 133 159 b 68 223 93 159 68 190 b 77 258 68 234 70 247 b 138 287 91 279 106 286 b 185 302 166 287 175 291 b 196 333 193 312 196 323 b 174 369 196 347 187 361 b 152 375 166 373 159 375 b 111 351 140 375 126 368 b 62 327 95 336 80 327 b 51 329 58 327 54 327 b -1 391 16 334 -1 363 b 53 455 -1 420 17 450 b 62 455 57 455 59 455 b 111 431 80 455 95 448 b 152 408 127 415 140 408 b 161 409 155 408 159 408 b 193 433 176 413 186 420 l 196 440 l 196 448 b 196 451 196 450 196 450 b 190 472 196 459 194 463 b 137 495 182 490 167 495 l 134 495 l 134 495 b 68 561 95 495 68 522 b 129 623 68 597 95 623 b 144 622 134 623 138 623 b 193 554 175 615 193 590 b 224 495 193 518 200 504 b 238 493 228 493 234 493 b 279 538 259 493 279 512 b 254 580 279 550 269 566 b 232 630 239 594 232 612 b 280 693 232 658 250 684 m 307 456 b 295 458 303 458 299 458 b 230 391 258 458 230 426 b 236 361 230 381 231 372 b 295 325 249 337 272 325 b 353 361 318 325 341 337 b 360 391 357 370 360 381 b 307 456 360 422 340 451 "},
"\ue103":{width:636,c:350,e:-206.890625,d:812.5,f:428.75,name:"flags.dgrace",h:438,height:463,g:"m -178 812 b -172 812 -175 812 -174 812 b -145 801 -164 812 -157 809 l -114 779 l -50 736 l 13 691 l 77 647 l 141 602 l 205 559 l 269 515 l 332 472 l 394 427 b 428 393 421 409 426 405 b 428 384 428 390 428 387 b 394 350 428 365 412 350 b 375 355 387 350 382 351 b 272 426 372 356 303 404 l 209 469 l 145 513 l 83 556 l -34 638 l -87 675 l -151 719 b -202 759 -196 750 -198 752 b -206 776 -205 765 -206 770 b -178 812 -206 793 -196 809 "},
"\ue128":{width:781,c:-505.5625,e:-390.640625,d:0,f:389.28125,name:"scripts.dlongfermata",h:397,height:506,g:"m -378 -2 b -368 -1 -375 -1 -374 -1 b -349 -13 -360 -1 -353 -5 l -348 -16 l -348 -176 l -348 -337 l 0 -337 l 347 -337 l 347 -176 l 347 -16 l 348 -13 b 367 0 352 -5 360 0 b 387 -13 375 0 383 -5 l 389 -16 l 389 -252 l 389 -490 l 387 -493 b 377 -504 385 -498 381 -501 l 372 -505 l 0 -505 l -374 -505 l -378 -504 b -389 -493 -382 -501 -386 -498 l -390 -490 l -390 -252 l -390 -16 l -389 -13 b -378 -2 -386 -8 -382 -4 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -58 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "},
"\ue147":{width:1181,c:-338.890625,e:-590.71875,d:175,f:589.359375,name:"scripts.upprall",h:601,height:514,g:"m -367 173 b -362 175 -366 175 -364 175 b -351 173 -357 175 -353 173 b -262 86 -348 172 -328 151 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 175 -36 173 -38 172 b -25 175 -29 175 -28 175 b -16 173 -23 175 -19 173 b 72 86 -13 172 6 151 b 157 0 119 37 157 0 b 227 84 159 0 189 37 b 303 175 298 173 296 172 b 308 175 304 175 307 175 b 318 173 313 175 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 75 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -175 401 -176 b 387 -175 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 144 -86 213 0 182 -38 b 68 -175 73 -175 74 -173 b 62 -176 66 -176 65 -176 b 53 -175 59 -176 55 -175 b -35 -87 50 -173 29 -152 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -175 -261 -175 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -175 -276 -176 -280 -175 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -304 -548 -254 -544 -280 b -533 -318 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -367 173 -375 169 -372 172 "},
"\ue130":{width:361,c:-513.890625,e:-108.890625,d:633.328125,f:251.8125,name:"accidentals.flat.arrowdown",h:257,height:1148,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 93 -148 206 -40 179 -70 l 38 -200 l 23 -215 l 20 -218 l 20 -241 b 19 -268 20 -261 20 -266 b 19 -270 19 -269 19 -270 b 19 -270 19 -270 19 -270 b 47 -263 21 -270 39 -266 b 78 -250 55 -261 69 -255 b 89 -247 83 -247 85 -247 b 107 -265 99 -247 107 -254 l 107 -265 l 107 -270 l 102 -280 b 19 -493 65 -338 34 -418 b 0 -513 14 -508 10 -513 b -20 -488 -12 -513 -16 -508 b -103 -280 -38 -409 -66 -338 l -108 -270 l -108 -265 l -108 -265 b -91 -247 -108 -254 -100 -247 b -80 -250 -87 -247 -84 -247 b -49 -263 -70 -255 -57 -261 b -20 -270 -40 -266 -23 -270 b -20 -270 -20 -270 -20 -270 b -20 -268 -20 -270 -20 -269 b -21 175 -21 -266 -21 -208 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
Sm:{width:624,c:-27.78125,e:46.28125,d:376.390625,f:669.671875,name:"m",h:563,height:405,g:"m 183 376 b 189 376 185 376 187 376 b 212 375 197 376 208 376 b 265 337 234 369 253 355 b 274 318 268 331 273 320 b 274 316 274 318 274 316 b 280 323 276 316 276 319 b 311 358 288 337 299 348 b 319 366 315 361 318 365 b 356 376 326 373 340 376 b 382 372 364 376 374 375 b 428 337 400 366 417 352 b 436 318 431 331 436 320 b 438 316 436 318 436 316 b 442 323 438 316 439 319 b 475 358 451 337 462 348 b 483 366 477 361 481 365 b 518 376 488 373 503 376 b 544 373 528 376 536 376 b 604 286 579 361 604 326 b 597 250 604 273 601 258 b 543 63 596 247 544 70 b 541 54 543 61 541 55 b 540 44 540 51 540 47 b 552 23 540 33 545 23 b 552 23 552 23 552 23 b 647 126 586 29 627 72 b 658 138 651 136 653 138 b 660 138 660 138 660 138 b 669 129 666 137 669 136 b 654 88 669 122 665 109 b 562 -12 631 43 602 9 l 549 -19 b 521 -27 540 -25 530 -27 b 447 30 490 -27 458 -4 b 443 58 445 38 443 48 b 450 93 443 72 446 84 b 504 279 453 97 504 272 b 507 288 506 283 506 287 b 509 298 507 293 509 295 b 491 326 509 311 502 320 b 487 327 490 327 488 327 b 479 325 484 327 483 326 b 441 270 462 316 443 288 b 435 250 441 265 436 254 b 398 127 434 248 419 195 b 362 4 379 61 362 5 b 328 -1 359 -1 362 -1 b 314 -1 323 -1 319 -1 b 302 -1 310 -1 306 -1 b 266 4 266 -1 269 -1 b 265 6 265 5 265 5 b 303 144 265 13 272 34 b 343 279 325 216 343 276 b 344 288 343 281 344 286 b 345 298 345 291 345 295 b 330 326 345 311 340 320 b 323 327 328 327 325 327 b 317 325 322 327 321 326 b 279 270 300 316 281 288 b 273 250 279 265 274 254 b 236 127 272 248 255 195 b 200 4 216 61 200 5 b 164 -1 197 -1 198 -1 b 151 -1 161 -1 156 -1 b 140 -1 147 -1 142 -1 b 103 4 104 -1 106 -1 b 103 6 103 5 103 5 b 141 144 103 13 108 34 b 181 279 161 216 179 276 b 182 288 181 281 181 286 b 183 298 182 291 183 295 b 168 325 183 311 178 320 b 160 327 166 326 163 327 b 141 320 156 327 151 325 b 69 230 112 305 85 272 b 57 215 65 218 62 215 b 55 215 57 215 55 215 b 46 225 49 215 46 218 b 59 261 46 231 50 243 b 151 363 81 306 112 341 b 161 369 155 365 160 368 b 183 376 166 372 174 375 "},
"\ue1ad":{width:394,c:-343.0625,e:-1.359375,d:341.671875,f:392,name:"noteheads.s1slash",h:400,height:686,g:"m 253 341 b 317 341 276 341 298 341 b 363 341 344 341 362 341 b 392 309 379 340 392 326 l 392 309 b 266 -320 392 305 269 -311 b 246 -341 262 -330 255 -337 b 136 -343 243 -343 189 -343 b 21 -341 80 -343 24 -343 b -1 -311 8 -337 -1 -325 b 0 -311 -1 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 253 341 147 341 151 341 m 321 276 b 250 277 321 277 307 277 b 179 276 194 277 179 277 b 123 -1 179 276 153 151 l 68 -279 l 140 -279 b 167 -279 149 -279 159 -279 b 210 -279 191 -279 210 -279 b 321 276 210 -279 321 275 "},
"\ue19d":{width:710,c:0,e:-355.25,d:1069.453125,f:353.890625,name:"accordion.accBayanbase",h:361,height:1070,g:"m -355 534 l -355 1069 l 0 1069 l 353 1069 l 353 534 l 353 0 l 0 0 l -355 0 l -355 534 m 325 881 l 325 1041 l -1 1041 l -326 1041 l -326 881 l -326 722 l -1 722 l 325 722 l 325 881 m 325 534 l 325 694 l 0 694 l -326 694 l -326 534 l -326 375 l 0 375 l 325 375 l 325 534 m 325 187 l 325 347 l 0 347 l -326 347 l -326 187 l -326 27 l 0 27 l 325 27 l 325 187 "},"\ue19c":{width:1391,c:0,e:-695.53125,
d:1416.65625,f:694.171875,name:"accordion.accStdbase",h:708,height:1417,g:"m -50 1415 b 1 1416 -32 1415 -16 1416 b 683 829 333 1416 626 1169 b 694 706 690 787 694 747 b -1 0 694 323 389 0 b -695 706 -385 0 -695 315 b -50 1413 -695 1080 -415 1387 l -50 1415 m 44 1386 b -2 1387 28 1387 13 1387 b -526 1125 -204 1387 -400 1290 b -564 1069 -539 1108 -564 1070 b -1 1068 -564 1069 -311 1068 b 563 1069 308 1068 563 1069 b 524 1125 563 1070 537 1108 b 44 1386 406 1277 235 1372 m 590 1022 l 581 1040 l -1 1040 l -582 1040 l -592 1022 b -666 729 -637 931 -666 816 l -666 720 l -1 720 l 665 720 l 665 729 b 590 1022 665 816 635 931 m 665 686 l 665 693 l -1 693 l -666 693 l -666 686 b -590 391 -666 597 -637 480 l -582 375 l -1 375 l 579 375 l 589 391 b 665 686 634 480 665 597 m 558 337 l 563 345 l -1 345 l -564 345 l -559 337 b 0 27 -436 143 -223 27 b 148 44 49 27 99 33 b 558 337 315 83 465 191 "},
8:{width:489,c:-1.390625,e:0,d:673.609375,f:488.640625,name:"eight",h:499,height:676,g:"m 217 648 b 245 650 225 648 235 650 b 453 516 343 650 430 595 b 458 479 455 504 458 491 b 412 370 458 440 441 398 b 411 369 412 369 411 369 b 415 365 411 368 412 368 b 488 231 462 331 488 281 b 472 165 488 208 483 186 b 243 43 434 86 338 43 b 63 104 178 43 112 62 b 0 233 20 140 0 186 b 73 365 0 283 24 331 l 77 369 l 72 375 b 29 476 42 406 29 441 b 217 648 29 558 103 636 m 258 605 b 242 606 253 605 247 606 b 157 552 198 606 157 580 b 160 541 157 548 159 544 b 319 413 176 504 242 452 l 337 404 l 338 406 b 359 476 352 429 359 452 b 258 605 359 537 318 595 m 138 326 b 130 330 134 329 130 330 b 130 330 130 330 130 330 b 107 305 127 330 112 313 b 84 231 91 281 84 256 b 243 86 84 156 151 86 b 249 87 245 86 246 87 b 347 156 303 88 347 120 b 344 172 347 162 345 168 b 156 319 325 227 257 281 b 138 326 151 322 144 325 m 243 -1 l 245 -1 l 242 -1 l 243 -1 m 243 673 l 245 673 l 242 673 l 243 673 "},
"\ue179":{width:147,c:-255.5625,e:-73.5,d:0,f:72.140625,name:"scripts.dstaccatissimo",h:74,height:256,g:"m -36 -126 b 0 0 -17 -56 -1 0 b 70 -254 0 0 70 -250 l 72 -255 l 0 -255 l -73 -255 l -72 -254 b -36 -126 -72 -254 -55 -195 "},"\ue154":{width:552,c:-1.390625,e:-1.359375,d:694.453125,f:549.890625,name:"pedal.P",h:561,height:697,g:"m 296 693 b 314 694 302 694 307 694 b 386 686 337 694 366 690 b 548 498 480 661 548 580 b 548 481 548 493 548 487 b 455 395 541 426 499 395 b 370 462 420 395 383 418 b 362 497 364 477 362 488 b 377 515 362 509 367 515 b 393 501 386 515 390 511 b 432 475 397 484 413 475 b 470 487 445 475 458 479 b 491 530 484 497 491 511 b 490 544 491 534 491 540 b 333 661 479 606 411 658 l 323 662 l 315 647 b 269 525 285 591 269 556 b 321 431 269 493 287 466 b 349 395 338 413 343 408 b 363 343 359 379 363 362 b 359 312 363 333 362 322 b 285 158 348 266 318 206 b 281 152 283 155 281 152 b 281 152 281 152 281 152 b 287 154 283 152 284 152 b 318 155 298 154 308 155 b 461 98 371 155 419 136 l 464 97 l 495 122 b 534 148 528 148 528 148 b 549 133 544 148 549 143 l 549 133 b 549 130 549 131 549 131 b 509 91 549 125 548 123 l 436 33 b 390 0 397 0 396 0 b 374 15 381 0 377 4 b 268 105 359 69 314 105 b 250 104 262 105 257 105 l 243 102 l 234 90 b 155 1 201 50 159 2 b 147 -1 152 0 149 -1 b 130 15 138 -1 130 6 b 132 20 130 18 132 19 b 136 31 133 22 134 27 b 220 131 149 75 178 109 b 231 137 225 134 230 136 b 302 279 280 202 302 244 b 265 336 302 300 295 309 b 209 443 234 363 213 402 b 209 455 209 447 209 451 b 279 648 209 502 232 565 l 285 659 l 283 659 b 176 627 238 654 210 645 b 57 477 111 594 66 538 b 55 459 55 472 55 465 b 72 409 55 437 61 415 b 93 404 78 405 87 404 b 152 468 123 404 151 431 b 168 488 153 483 157 488 b 185 462 181 488 185 483 l 185 461 b 137 344 183 409 168 369 b 78 322 119 329 98 322 b 13 361 50 322 25 336 b -1 426 4 380 -1 402 b 89 611 -1 488 32 559 b 296 693 147 659 210 686 "},
"\ue14b":{width:1195,c:-300,e:-597.53125,d:327.78125,f:596.171875,name:"scripts.downmordent",h:608,height:628,g:"m -533 325 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 318 b -504 305 -504 305 -504 305 b -513 284 -504 300 -504 300 b -556 112 -541 226 -556 168 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 175 -367 169 -363 175 b -351 175 -353 175 -352 175 b -254 86 -343 175 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 175 -21 175 -20 175 b -8 173 -14 175 -10 173 b 155 11 -5 172 43 123 l 166 -1 l 168 1 l 170 4 l 170 130 b 171 261 170 256 170 258 b 191 275 175 269 183 275 b 205 268 196 275 201 272 b 212 158 212 262 210 273 l 212 56 l 257 112 b 311 173 304 172 304 172 b 317 175 313 175 314 175 b 326 173 319 175 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 75 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -175 409 -176 b 396 -175 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 216 -6 221 -1 219 -2 l 212 -12 l 212 -147 b 212 -211 212 -173 212 -194 b 205 -293 212 -297 210 -287 b 191 -300 201 -297 196 -300 b 172 -287 183 -300 175 -295 b 170 -175 171 -284 171 -284 l 170 -63 l 127 -118 b 73 -176 84 -170 80 -176 b 68 -176 72 -176 70 -176 b -27 -87 59 -175 65 -180 b -114 0 -74 -38 -112 0 b -182 -86 -114 0 -145 -38 b -258 -175 -253 -175 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -175 -268 -176 -272 -175 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -75 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 225 b -533 325 -548 311 -540 322 "},
"\ue190":{width:374,c:-158.328125,e:-25.859375,d:156.9375,f:347.078125,name:"arrowheads.open.0M1",h:354,height:316,g:"m 313 155 b 321 156 315 156 318 156 b 329 156 325 156 328 156 b 347 130 341 152 347 141 b 338 109 347 123 344 115 b 288 79 332 105 307 88 b 126 6 236 50 186 26 b 104 0 114 2 104 0 b 126 -8 104 -1 114 -4 b 326 -104 201 -33 268 -65 b 343 -118 337 -111 340 -112 b 347 -131 345 -122 347 -127 b 321 -158 347 -145 337 -158 b 296 -148 314 -158 311 -158 b 17 -31 223 -100 121 -56 l -4 -27 b -25 0 -19 -23 -25 -15 b -4 26 -25 13 -19 22 l 17 30 b 296 147 121 55 223 98 b 313 155 307 152 310 155 "},
5:{width:410,c:-1.390625,e:0,d:673.609375,f:409.6875,name:"five",h:418,height:676,g:"m 47 637 b 53 638 49 638 50 638 b 69 634 55 638 61 637 b 210 611 114 619 161 611 b 363 634 259 611 311 619 b 382 638 372 637 378 638 b 392 634 386 638 389 637 b 397 623 396 630 397 627 b 393 611 397 620 396 616 b 298 505 368 552 338 520 b 212 494 277 498 246 494 b 65 518 163 494 106 502 b 61 518 62 518 61 518 b 61 518 61 518 61 518 b 51 408 61 518 51 412 b 51 408 51 408 51 408 b 51 408 51 408 51 408 b 61 412 53 408 55 409 b 125 434 80 422 103 430 b 185 441 145 440 166 441 b 409 244 310 441 409 354 b 401 191 409 227 406 209 b 197 43 375 105 287 43 b 159 47 183 43 171 44 b 23 123 112 56 61 86 b 0 180 6 140 0 159 b 76 261 0 220 31 261 b 92 259 81 261 87 259 b 152 183 132 251 152 216 b 100 112 152 152 134 122 b 95 111 98 112 95 111 b 95 111 95 111 95 111 b 129 98 95 109 119 101 b 148 97 136 97 141 97 b 264 236 206 97 261 158 b 265 248 265 240 265 244 b 210 398 265 312 243 373 b 179 408 201 406 194 408 b 174 408 178 408 176 408 b 53 369 130 408 88 394 b 34 359 39 359 38 359 b 17 375 24 359 17 365 b 39 629 17 384 38 626 b 47 637 40 631 43 636 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "},
"\ue19e":{width:171,c:-87.5,e:-85.75,d:86.109375,f:84.390625,name:"accordion.accDot",h:86,height:175,g:"m -17 84 b 0 86 -12 86 -6 86 b 84 -1 46 86 84 45 b 83 -18 84 -6 84 -12 b -1 -87 73 -62 36 -87 b -66 -55 -25 -87 -49 -77 b -85 -1 -80 -38 -85 -19 b -17 84 -85 37 -59 75 "},"\ue11e":{width:547,c:-816.671875,e:-1.359375,d:836.109375,f:544.4375,name:"clefs.tab_change",h:556,height:1654,g:"m 475 834 b 483 836 477 834 480 836 b 514 804 500 836 514 820 b 509 786 514 798 513 791 b 356 743 496 765 424 744 l 341 743 l 341 738 b 344 672 343 716 344 694 b 247 351 344 533 306 401 b 144 315 217 326 185 315 b 121 316 136 315 129 315 b 83 340 98 318 88 323 b 81 348 83 343 81 345 b 114 380 81 366 98 380 b 137 369 122 380 130 377 b 147 365 140 366 142 365 b 191 400 159 365 178 379 b 251 673 230 459 251 561 b 250 740 251 695 251 718 b 239 758 249 756 249 755 b 194 763 224 762 209 763 b 103 712 153 763 121 745 b 68 690 95 697 81 690 b 29 730 47 690 29 704 b 77 786 29 750 43 766 b 198 815 111 805 155 815 b 262 806 220 815 243 812 b 351 794 294 798 323 794 b 462 827 396 794 435 805 b 475 834 466 831 469 833 m 334 290 b 340 290 336 290 338 290 b 386 244 364 290 383 272 b 470 -154 397 115 439 -81 b 509 -195 481 -177 498 -195 b 510 -195 509 -195 510 -195 b 518 -194 513 -194 515 -194 b 544 -223 533 -194 544 -208 b 530 -244 544 -231 540 -240 b 510 -248 526 -247 519 -248 b 450 -236 491 -248 466 -244 b 351 -68 401 -211 381 -176 b 333 5 344 -44 333 1 b 333 5 333 5 333 5 b 326 -8 333 5 329 -1 b 289 -73 313 -34 302 -54 l 281 -84 l 284 -86 b 328 -102 295 -95 313 -102 b 344 -116 340 -104 344 -106 b 323 -131 344 -125 340 -129 b 304 -134 317 -133 311 -134 b 259 -123 289 -134 273 -130 l 254 -120 l 251 -125 b 78 -237 198 -183 141 -222 b 29 -243 63 -241 44 -243 b 16 -241 24 -243 19 -243 b -1 -218 5 -237 -1 -227 b 17 -193 -1 -206 5 -195 b 23 -191 19 -191 20 -191 b 29 -191 24 -191 27 -191 b 32 -191 29 -191 31 -191 b 175 -97 70 -191 132 -152 b 294 237 246 -12 287 105 b 306 273 295 256 298 263 b 334 290 313 281 323 288 m 292 -286 b 311 -286 299 -286 306 -286 b 517 -400 405 -286 496 -334 b 519 -420 518 -406 519 -413 b 427 -536 519 -462 485 -505 l 416 -541 l 427 -547 b 528 -681 491 -580 528 -631 b 518 -725 528 -695 525 -711 b 341 -816 488 -783 417 -816 b 216 -786 299 -816 255 -806 b 186 -751 194 -775 186 -765 b 187 -743 186 -748 186 -745 l 187 -740 l 186 -743 b 66 -784 151 -772 114 -784 b 59 -784 65 -784 62 -784 b 16 -768 31 -784 23 -781 b 13 -754 14 -763 13 -758 b 43 -723 13 -737 27 -723 b 62 -730 50 -723 55 -726 b 70 -734 66 -734 66 -734 b 151 -666 96 -734 130 -705 b 167 -630 153 -661 155 -656 b 213 -444 193 -570 209 -506 b 215 -412 215 -437 215 -426 b 212 -355 215 -386 213 -356 b 212 -354 212 -355 212 -354 b 176 -369 209 -354 187 -363 b 106 -433 145 -386 119 -409 b 69 -458 98 -450 83 -458 b 36 -437 57 -458 44 -451 b 31 -418 32 -431 31 -425 b 53 -379 31 -405 38 -391 b 292 -286 111 -325 191 -294 m 336 -338 b 310 -337 329 -338 318 -337 b 300 -338 304 -337 300 -337 b 300 -338 300 -338 300 -338 b 306 -408 303 -345 306 -381 b 306 -415 306 -411 306 -413 b 247 -658 304 -497 284 -579 b 217 -709 235 -683 228 -695 b 210 -718 215 -713 212 -716 b 210 -718 210 -718 210 -718 b 215 -718 210 -718 212 -718 b 217 -718 215 -718 216 -718 b 220 -718 217 -718 219 -718 b 242 -727 228 -718 232 -719 b 337 -765 273 -752 303 -763 b 341 -765 338 -765 340 -765 b 436 -681 396 -765 436 -729 b 435 -665 436 -676 436 -670 b 319 -566 427 -618 381 -579 b 299 -558 307 -563 304 -562 b 292 -540 294 -552 292 -545 b 317 -513 292 -527 302 -515 b 423 -445 364 -508 409 -480 b 428 -422 427 -437 428 -430 b 336 -338 428 -384 392 -350 "},
7:{width:443,c:-1.390625,e:0,d:673.609375,f:442.359375,name:"seven",h:451,height:676,g:"m 147 648 b 166 650 153 650 160 650 b 313 598 217 650 273 630 b 340 587 323 588 328 587 l 341 587 b 412 629 367 587 390 601 b 427 638 416 636 421 638 b 439 633 431 638 435 637 b 442 623 441 630 442 629 b 430 569 442 616 439 604 b 352 369 408 493 377 411 b 300 259 325 325 313 298 b 273 84 283 205 273 140 b 265 55 273 65 272 59 l 261 54 l 181 54 l 99 54 l 96 55 b 91 61 95 56 92 59 l 89 63 l 89 77 b 147 263 89 133 111 202 b 261 401 176 313 212 355 b 378 541 315 450 349 490 l 382 548 l 375 544 b 240 495 333 512 285 495 b 129 536 198 495 160 509 b 84 561 108 552 95 561 b 76 559 81 561 78 561 b 31 487 59 555 43 530 b 14 470 27 473 24 470 b 1 477 8 470 4 472 l 0 480 l 0 554 l 0 627 l 1 630 b 16 638 4 636 9 638 b 23 636 17 638 20 637 b 49 626 36 626 39 626 b 96 638 59 626 80 630 b 104 640 99 638 102 640 b 117 644 107 641 112 643 b 147 648 125 645 137 648 m 220 -1 l 221 -1 l 219 -1 l 220 -1 m 220 673 l 221 673 l 219 673 l 220 673 "},
",":{width:196,c:-119.4375,e:-1.359375,d:233.328125,f:193.28125,name:"comma",h:197,height:354,g:"m 78 233 b 87 233 81 233 84 233 b 187 140 132 233 174 195 b 193 102 190 127 193 115 b 43 -113 193 22 136 -62 b 27 -119 36 -116 31 -119 b 19 -108 21 -119 19 -115 b 29 -97 19 -102 20 -101 b 102 13 73 -72 102 -27 b 92 51 102 26 98 40 l 91 54 l 84 54 b 8 104 53 54 21 75 b -1 143 1 116 -1 130 b 78 233 -1 187 31 227 "},"\ue14c":{width:1181,c:-176.390625,e:-590.71875,d:337.5,f:589.359375,name:"scripts.prallup",
h:601,height:519,g:"m 544 336 b 553 337 548 337 551 337 b 575 313 563 337 570 330 b 589 226 583 286 589 256 b 517 8 589 152 563 76 b 464 -58 507 -4 503 -9 l 401 -136 b 362 -176 372 -172 370 -176 b 357 -176 360 -176 359 -176 b 261 -87 349 -175 355 -180 b 175 0 215 -38 175 0 b 106 -86 175 0 144 -38 b 29 -175 35 -175 36 -173 b 24 -176 28 -176 27 -176 b 14 -175 21 -176 17 -175 b -73 -87 12 -173 -8 -152 b -159 0 -121 -38 -159 0 b -228 -86 -160 0 -190 -38 b -304 -175 -299 -175 -298 -173 b -310 -176 -306 -176 -308 -176 b -319 -175 -314 -176 -318 -175 b -483 -12 -323 -173 -359 -137 l -495 0 l -524 -34 b -562 -77 -553 -73 -556 -76 b -568 -79 -564 -79 -566 -79 b -590 -58 -581 -79 -590 -69 b -588 -50 -590 -55 -589 -52 b -412 170 -585 -43 -417 165 b -398 175 -408 173 -402 175 b -389 173 -394 175 -392 175 b -300 86 -387 172 -366 151 b -215 -1 -254 37 -215 -1 b -145 84 -215 -1 -183 37 b -69 173 -74 173 -76 172 b -63 175 -68 175 -66 175 b -54 173 -61 175 -57 173 b 34 86 -51 172 -31 151 b 119 -1 81 37 119 -1 b 189 84 121 -1 151 37 b 265 173 259 173 258 172 b 270 175 266 175 269 175 b 280 173 274 175 279 173 b 370 84 283 172 303 151 b 455 -1 416 37 455 -1 l 455 -1 b 476 25 455 -1 469 15 b 547 226 522 87 547 159 b 534 302 547 252 543 279 b 532 318 533 308 532 313 b 544 336 532 326 536 333 "},
"\ue19a":{width:710,c:0,e:-355.25,d:722.21875,f:353.890625,name:"accordion.accFreebase",h:361,height:723,g:"m -27 720 b -13 722 -24 720 -20 722 b 42 719 4 722 34 720 b 343 447 190 700 308 591 b 353 361 349 418 353 390 b 84 9 353 197 245 50 b 0 0 55 2 27 0 b -344 273 -160 0 -306 109 b -355 359 -351 302 -355 331 b -39 719 -355 540 -221 701 l -27 720 m 39 691 b -13 693 32 691 4 693 b -25 693 -19 693 -23 693 b -326 383 -190 676 -314 548 l -326 375 l -1 375 l 325 375 l 325 383 b 39 691 314 541 197 668 m 325 337 l 325 345 l -1 345 l -326 345 l -326 337 b -55 33 -315 184 -204 58 b -1 29 -34 29 -29 29 b 54 33 28 29 32 29 b 325 337 201 58 314 184 "},
"\ue111":{width:160,c:-194.4375,e:-80.3125,d:193.0625,f:78.9375,name:"scripts.lvarcomma",h:81,height:389,g:"m 63 191 b 69 193 65 193 66 193 b 77 188 72 193 76 191 b 78 183 78 187 78 186 b 74 158 78 179 77 172 l 66 115 b 9 -161 49 30 10 -158 b -10 -187 6 -172 -1 -181 b -34 -194 -17 -191 -25 -194 b -80 -147 -58 -194 -80 -175 b -80 -141 -80 -144 -80 -143 b 9 70 -80 -134 -73 -118 l 49 163 b 63 191 59 188 61 190 "},"\ue1a2":{width:437,c:-193.0625,e:0,d:191.671875,f:436.921875,name:"noteheads.s2diamond",
h:446,height:386,g:"m 213 190 b 217 191 215 191 216 191 b 231 184 223 191 228 188 b 249 154 240 168 246 159 b 419 18 292 91 348 45 b 436 -1 435 11 436 8 b 424 -16 436 -9 434 -13 b 308 -87 394 -26 340 -59 b 231 -186 276 -118 257 -143 b 219 -193 228 -191 225 -193 b 198 -175 209 -193 208 -191 b 47 -33 161 -113 110 -63 b 10 -16 34 -26 17 -19 b 0 -1 2 -13 0 -9 b 17 18 0 8 1 11 b 198 173 95 48 156 101 b 213 190 206 187 208 188 "},"\ue194":{width:374,c:-158.328125,e:-25.859375,d:156.9375,f:347.078125,name:"arrowheads.close.0M1",
h:354,height:316,g:"m 313 155 b 321 156 315 156 318 156 b 334 154 325 156 330 155 b 347 131 343 148 347 140 b 341 113 347 126 345 120 b 336 101 340 111 337 105 b 311 -1 319 69 311 34 b 341 -115 311 -40 322 -79 b 347 -133 345 -120 347 -127 b 321 -158 347 -147 337 -158 b 296 -148 314 -158 311 -158 b 6 -29 221 -97 111 -52 b -13 -23 -10 -26 -10 -26 b -25 -1 -21 -19 -25 -9 b -12 23 -25 8 -21 18 b 5 27 -9 23 -2 26 b 296 147 115 52 220 95 b 313 155 307 152 310 155 "},"\ue18c":{width:846,c:-200,e:-423.3125,
d:198.609375,f:421.9375,name:"scripts.turn",h:431,height:399,g:"m -262 197 b -247 197 -257 197 -253 197 b -118 162 -210 197 -163 184 b 40 45 -61 134 -13 98 b 277 -95 119 -33 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -55 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 201 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 136 b 421 22 421 37 421 29 b 245 -200 421 -93 338 -200 b 238 -198 243 -200 240 -200 b -44 -47 148 -194 50 -141 b -250 86 -114 22 -183 66 b -295 94 -270 91 -283 94 b -315 91 -302 94 -307 94 b -381 4 -356 81 -381 43 b -355 -56 -381 -18 -372 -40 b -298 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -178 -69 -200 -58 -189 -62 b -151 -122 -160 -81 -151 -101 b -171 -168 -151 -138 -157 -155 b -239 -195 -185 -181 -213 -193 b -257 -197 -245 -197 -250 -197 b -423 -5 -352 -197 -423 -109 b -412 65 -423 16 -419 40 b -262 197 -389 137 -329 188 "},
"\ue174":{width:348,c:-823.609375,e:0,d:822.21875,f:347.078125,name:"accidentals.sharp.arrowboth",h:354,height:1647,g:"m 231 819 b 239 822 234 820 236 822 b 251 816 243 822 249 819 b 258 801 255 812 255 811 b 341 587 273 726 304 647 l 347 579 l 347 573 l 347 572 b 329 554 347 561 338 554 b 318 556 325 554 322 555 b 264 577 302 568 283 575 b 258 579 261 577 259 579 b 258 577 258 579 258 579 b 258 576 258 577 258 577 b 259 416 259 575 259 543 l 259 258 l 285 265 b 318 270 302 269 311 270 b 336 259 328 270 332 268 b 337 208 336 256 337 233 b 336 158 337 184 336 159 b 302 140 332 148 329 147 b 259 130 266 131 259 130 b 259 65 259 130 259 104 b 259 20 259 51 259 36 l 259 -88 l 285 -81 b 318 -76 302 -77 311 -76 b 332 -81 325 -76 328 -77 b 337 -123 336 -87 337 -86 l 337 -138 l 337 -154 b 332 -195 337 -191 336 -190 b 281 -211 328 -200 328 -200 b 262 -216 272 -213 264 -216 l 259 -216 l 259 -350 l 259 -483 l 258 -487 b 239 -500 254 -495 246 -500 b 220 -487 231 -500 223 -495 l 219 -483 l 217 -355 l 217 -227 l 216 -227 l 194 -233 l 152 -244 b 129 -250 140 -247 130 -250 b 127 -411 127 -250 127 -258 b 127 -576 127 -548 127 -573 b 126 -579 126 -577 126 -579 b 127 -580 126 -579 126 -580 b 133 -579 129 -580 130 -579 b 186 -558 152 -576 170 -569 b 197 -555 190 -556 194 -555 b 215 -573 206 -555 215 -562 l 215 -575 l 215 -580 l 209 -588 b 126 -802 172 -648 141 -727 b 107 -823 123 -818 118 -823 b 87 -798 95 -823 91 -818 b 5 -588 69 -719 40 -648 l 0 -580 l 0 -575 b 0 -573 0 -575 0 -575 b 16 -555 0 -562 6 -555 b 27 -558 20 -555 24 -556 b 81 -579 44 -569 62 -576 b 87 -580 84 -579 85 -580 b 88 -579 88 -580 88 -580 b 87 -576 88 -579 88 -577 b 87 -416 87 -573 87 -550 b 85 -261 87 -270 87 -261 b 85 -261 85 -261 85 -261 b 32 -273 74 -263 35 -273 b 13 -261 24 -273 16 -268 b 12 -209 12 -256 12 -256 l 12 -162 l 13 -158 b 74 -134 17 -148 17 -148 l 87 -131 l 87 -22 b 85 86 87 79 87 86 b 85 86 85 86 85 86 b 32 75 74 83 35 75 b 13 86 24 75 16 79 b 12 137 12 90 12 90 l 12 184 l 13 188 b 73 212 17 198 17 198 l 87 215 l 87 348 l 87 481 l 88 486 b 107 498 92 494 99 498 b 126 486 115 498 122 494 l 127 481 l 127 354 l 127 226 l 133 226 b 172 236 136 227 153 231 l 212 247 l 217 248 l 217 409 b 219 575 217 547 217 572 b 219 577 219 576 219 577 b 219 579 219 579 219 579 b 213 577 217 579 216 577 b 159 556 194 575 175 568 b 148 554 155 555 152 554 b 130 572 138 554 130 561 l 130 573 l 130 579 l 136 587 b 219 797 172 647 200 718 b 231 819 221 813 224 816 m 217 9 b 217 119 217 70 217 119 l 217 119 b 194 113 217 119 206 116 l 152 102 b 129 97 140 100 130 97 b 127 -12 127 97 127 91 l 127 -122 l 133 -120 b 172 -111 136 -119 153 -115 l 212 -101 l 217 -98 l 217 9 "},
"\ue102":{width:636,c:-813.890625,e:-206.890625,d:-351.390625,f:428.75,name:"flags.ugrace",h:438,height:463,g:"m 389 -351 b 394 -351 390 -351 393 -351 b 428 -386 413 -351 428 -368 b 428 -394 428 -388 428 -391 b 394 -429 426 -406 421 -411 l 332 -473 l 269 -516 l 205 -561 l 141 -604 l 77 -648 l 13 -693 l -50 -737 l -114 -780 l -145 -802 b -171 -813 -157 -811 -163 -813 b -175 -813 -172 -813 -174 -813 b -206 -777 -194 -812 -206 -795 b -202 -761 -206 -772 -205 -766 b -87 -676 -197 -752 -206 -758 l -34 -640 l 83 -558 l 145 -515 l 209 -470 l 272 -427 b 389 -351 375 -356 381 -352 "},
"\ue198":{width:299,c:0,e:-149.71875,d:384.71875,f:148.359375,name:"scripts.upedaltoe",h:151,height:392,g:"m -137 381 b -130 383 -134 383 -133 383 b -111 372 -122 383 -114 379 b -55 225 -110 370 -85 305 b 0 80 -25 145 -1 80 b 54 225 0 80 24 145 b 112 377 114 384 110 373 b 127 384 118 381 122 384 b 148 362 138 384 148 375 l 148 356 l 83 183 b 16 9 47 88 17 11 b -1 0 12 2 5 0 b -14 5 -5 0 -10 1 b -84 183 -19 9 -13 -6 l -149 356 l -149 362 b -137 381 -149 372 -145 379 "},"\ue167":{width:738,c:-175,e:0,
d:15.28125,f:737.71875,name:"rests.0o",h:753,height:191,g:"m 9 13 b 208 15 10 15 51 15 b 368 15 251 15 304 15 l 726 15 l 729 12 b 737 -1 735 9 737 4 b 729 -15 737 -6 735 -11 l 726 -16 l 660 -16 l 592 -16 l 592 -95 l 592 -175 l 368 -175 l 144 -175 l 144 -95 l 144 -16 l 77 -16 l 9 -16 l 6 -15 b 0 -1 1 -11 0 -6 b 9 13 0 5 2 11 "},"\ue140":{width:427,c:-22.21875,e:-209.609375,d:20.828125,f:208.25,name:"scripts.tenuto",h:213,height:44,g:"m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -6 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -6 b -197 19 -209 6 -205 15 "},
"\ue16d":{width:194,c:-519.4375,e:0,d:518.0625,f:193.28125,name:"accidentals.sharp.slashslash.stem",h:197,height:1039,g:"m 85 515 b 95 518 88 518 89 518 b 114 505 103 518 110 513 l 115 502 l 115 376 b 115 250 115 306 115 250 b 141 258 117 250 127 252 l 167 266 l 172 266 b 190 254 181 265 187 262 l 193 251 l 193 202 l 193 188 b 187 147 193 150 191 152 b 147 130 183 143 182 141 l 115 119 l 115 9 b 115 -100 115 -51 115 -100 b 141 -91 115 -100 127 -95 b 171 -81 166 -81 167 -81 l 171 -81 b 191 -94 181 -81 189 -87 b 193 -143 191 -97 193 -120 b 191 -195 193 -168 191 -194 b 125 -227 187 -205 187 -204 l 115 -230 l 115 -366 l 115 -504 l 114 -506 b 95 -519 110 -515 102 -519 b 74 -506 87 -519 78 -515 l 73 -504 l 73 -375 b 73 -245 73 -261 73 -245 b 73 -245 73 -245 73 -245 b 55 -252 72 -245 63 -250 l 32 -261 b 19 -263 27 -262 23 -263 b 4 -256 13 -263 8 -261 b 0 -215 0 -251 0 -254 b 0 -200 0 -211 0 -206 l 0 -152 l 1 -150 b 8 -140 2 -145 5 -141 b 42 -127 9 -140 24 -133 l 73 -116 l 73 -5 b 73 23 73 4 73 15 b 73 105 73 70 73 105 b 49 97 73 105 61 101 b 17 88 32 91 23 88 b 4 95 10 88 8 91 b 0 137 0 101 0 98 b 0 151 0 141 0 145 l 0 200 l 1 202 b 43 225 5 212 5 212 l 73 234 l 73 368 l 73 502 l 74 505 b 85 515 77 509 81 513 "},
"\ue117":{width:902,c:-756.953125,e:-1.359375,d:351.390625,f:899.703125,name:"clefs.F",h:918,height:1109,g:"m 307 350 b 332 351 315 351 323 351 b 443 340 367 351 408 347 b 741 47 607 306 720 195 b 744 0 743 31 744 16 b 660 -304 744 -90 713 -206 b 28 -755 534 -531 304 -695 b 14 -756 23 -755 19 -756 b -1 -741 4 -756 -1 -751 b 21 -720 -1 -731 1 -729 b 567 -56 337 -601 548 -344 b 568 -11 568 -41 568 -25 b 442 286 568 129 525 233 b 325 319 406 308 367 319 b 93 177 232 319 137 266 b 84 154 91 170 84 155 b 84 154 84 154 84 154 b 88 156 84 154 85 155 b 159 177 110 170 134 177 b 257 134 194 177 231 162 b 294 41 281 108 294 73 b 171 -97 294 -25 246 -90 b 156 -98 166 -97 161 -98 b 6 75 73 -98 6 -22 b 6 80 6 76 6 79 b 307 350 10 223 141 340 m 839 215 b 845 216 841 216 842 216 b 862 213 852 216 860 215 b 899 163 887 206 899 184 b 872 118 899 145 890 127 b 847 111 865 112 856 111 b 808 130 833 111 818 118 b 796 162 800 140 796 151 b 839 215 796 187 812 212 m 839 -112 b 845 -112 841 -112 842 -112 b 862 -115 852 -112 860 -113 b 899 -165 887 -122 899 -144 b 872 -211 899 -183 890 -201 b 847 -218 865 -215 856 -218 b 808 -198 833 -218 818 -211 b 796 -165 800 -188 796 -177 b 839 -112 796 -140 812 -116 "},
"\ue171":{width:389,c:-538.890625,e:-1.359375,d:537.5,f:386.5625,name:"accidentals.sharp.slashslashslash.stemstem",h:394,height:1077,g:"m 249 536 b 257 537 251 537 253 537 b 276 525 266 537 273 533 l 277 522 l 279 419 l 279 316 l 304 323 b 337 329 319 326 330 329 b 353 316 347 329 349 325 b 355 266 355 315 355 290 b 353 215 355 241 355 218 b 319 198 349 206 347 205 b 279 187 284 190 279 188 b 279 156 279 187 279 175 b 279 136 279 151 279 144 l 279 84 l 289 87 l 330 98 b 367 105 352 102 362 105 b 378 101 372 105 375 104 b 386 61 385 95 386 94 b 386 40 386 55 386 48 l 386 -5 l 385 -8 b 374 -19 383 -12 378 -18 b 291 -40 372 -19 347 -26 b 279 -43 284 -41 279 -43 b 279 -83 279 -43 279 -59 b 279 -95 279 -87 279 -91 l 279 -145 l 304 -140 b 337 -133 321 -136 330 -133 b 349 -140 343 -133 347 -136 b 355 -181 355 -145 355 -143 l 355 -197 l 355 -211 b 349 -252 355 -250 355 -247 b 300 -269 345 -258 347 -258 b 280 -275 291 -272 281 -273 l 279 -275 l 277 -379 l 277 -483 l 276 -487 b 257 -500 273 -495 265 -500 b 238 -487 249 -500 242 -495 l 236 -483 l 236 -384 l 236 -286 l 235 -286 l 212 -291 l 170 -301 b 148 -308 159 -305 148 -306 b 147 -415 147 -308 147 -313 l 147 -523 l 145 -526 b 126 -538 141 -534 133 -538 b 106 -526 118 -538 110 -534 l 104 -523 l 104 -420 b 103 -318 104 -326 104 -318 b 103 -318 103 -318 103 -318 b 50 -330 92 -322 54 -330 b 31 -318 42 -330 35 -326 b 29 -268 29 -315 29 -315 l 29 -219 l 32 -216 b 92 -193 36 -206 36 -206 l 104 -190 l 104 -138 b 103 -87 104 -91 104 -87 b 103 -87 103 -87 103 -87 b 88 -91 103 -87 96 -88 l 49 -101 b 17 -106 32 -105 23 -106 b 6 -102 13 -106 10 -105 b -1 -62 0 -97 -1 -95 b 0 -41 -1 -56 0 -50 l 0 4 l 1 6 b 10 16 2 11 6 15 b 91 37 12 18 38 25 l 104 41 l 104 93 b 103 144 104 140 104 144 b 103 144 103 144 103 144 b 50 131 92 141 54 131 b 31 144 42 131 35 137 b 29 195 29 147 29 148 l 29 243 l 32 245 b 92 269 36 255 36 255 l 104 273 l 104 377 l 104 481 l 106 486 b 126 498 110 493 118 498 b 134 495 129 498 132 497 b 145 486 138 494 142 490 l 147 481 l 147 383 l 147 283 l 152 284 b 190 294 155 286 171 290 l 230 304 l 236 305 l 236 413 l 236 522 l 238 525 b 249 536 240 529 243 533 m 236 126 b 235 177 236 154 236 177 l 235 177 b 213 172 235 177 225 175 l 170 161 b 147 155 157 158 147 155 b 147 125 147 155 147 143 b 147 102 147 118 147 111 l 147 52 l 153 54 l 228 72 l 236 75 l 236 126 m 236 -105 b 235 -54 236 -65 236 -54 l 235 -54 b 231 -55 235 -54 234 -54 b 172 -69 227 -55 204 -62 l 149 -76 l 147 -76 l 147 -127 l 147 -179 l 152 -177 b 190 -168 155 -177 171 -173 l 230 -158 l 236 -156 l 236 -105 "},
"\ue17e":{width:424,c:-219.4375,e:-212.328125,d:218.0625,f:210.96875,name:"scripts.stopped",h:215,height:439,g:"m -8 216 b -1 218 -6 216 -4 218 b 19 204 8 218 16 212 b 20 111 20 201 20 200 l 20 20 l 107 20 b 142 20 121 20 133 20 b 205 13 205 20 198 19 b 210 0 209 9 210 4 b 198 -20 210 -9 206 -16 b 107 -22 194 -22 193 -22 l 20 -22 l 20 -112 b 20 -148 20 -126 20 -138 b 13 -212 20 -213 19 -206 b 0 -219 9 -216 4 -219 b -20 -205 -8 -219 -16 -213 b -21 -112 -21 -202 -21 -201 l -21 -22 l -108 -22 b -200 -20 -194 -22 -196 -22 b -212 0 -208 -16 -212 -9 b -206 13 -212 4 -210 9 b -144 20 -200 19 -206 20 b -108 20 -134 20 -122 20 l -21 20 l -21 111 b -20 204 -21 200 -21 201 b -8 216 -17 209 -13 213 "},
"\ue15d":{width:301,c:-508.328125,e:0,d:506.9375,f:300.8125,name:"rests.2",h:307,height:1016,g:"m 49 505 b 53 506 50 505 51 506 b 70 497 58 506 62 504 b 81 486 73 493 78 488 l 96 473 l 111 459 l 122 450 l 134 438 l 182 397 l 255 330 b 292 291 292 298 292 298 l 292 290 l 292 284 l 283 270 b 209 36 234 197 209 113 b 288 -170 209 -44 235 -119 b 299 -184 295 -179 299 -181 b 300 -191 300 -187 300 -188 b 285 -206 300 -200 294 -206 b 280 -206 283 -206 281 -206 b 247 -201 270 -202 259 -201 b 176 -222 223 -201 197 -208 b 114 -340 136 -250 114 -293 b 172 -472 114 -384 134 -433 b 185 -493 182 -481 185 -487 b 181 -502 185 -497 183 -500 b 171 -508 176 -505 174 -508 b 152 -498 166 -508 160 -504 b 0 -284 65 -429 12 -352 b 0 -261 0 -279 0 -270 b 1 -238 0 -252 0 -243 b 148 -140 16 -177 73 -140 b 209 -148 167 -140 189 -143 b 215 -150 212 -148 215 -150 b 215 -150 215 -150 215 -150 l 215 -150 b 201 -136 215 -148 209 -143 l 157 -97 l 96 -41 b 17 34 21 25 17 29 b 17 37 17 36 17 36 b 17 38 17 37 17 38 b 25 56 17 44 17 44 b 110 298 81 131 110 219 b 46 475 110 368 88 431 b 38 491 40 480 38 487 b 49 505 38 498 42 502 "},
"\ue1a6":{width:439,c:-206.9375,e:-1.359375,d:205.5625,f:436.921875,name:"noteheads.d2triangle",h:446,height:413,g:"m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 200 b 236 187 234 194 235 190 l 245 168 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 200 208 202 "},
"\ue127":{width:781,c:-654.171875,e:-390.640625,d:0,f:389.28125,name:"scripts.dshortfermata",h:397,height:655,g:"m -377 -1 b -368 0 -375 -1 -372 0 b -362 -1 -366 0 -363 -1 b -343 -25 -356 -4 -352 -8 l -285 -119 l -187 -280 l -88 -444 l -35 -533 b -31 -538 -32 -537 -32 -538 b -28 -534 -31 -538 -29 -537 l -23 -526 l -19 -518 l -13 -509 l -8 -501 l -2 -493 l 2 -483 l 6 -476 l 17 -458 l 23 -450 l 32 -433 l 38 -425 l 42 -416 l 47 -408 l 53 -400 l 58 -391 l 63 -381 l 68 -373 l 73 -365 l 78 -356 l 84 -348 l 89 -340 l 93 -330 l 99 -322 l 104 -315 l 114 -297 l 125 -280 l 129 -272 l 134 -263 l 140 -255 l 145 -247 l 151 -238 l 155 -230 l 160 -220 l 166 -212 l 171 -204 l 176 -195 l 181 -187 l 186 -177 l 191 -169 l 196 -162 l 201 -154 l 206 -144 l 217 -127 l 221 -119 l 227 -111 l 232 -102 l 238 -94 l 242 -86 l 247 -77 l 253 -69 l 258 -59 l 262 -51 l 268 -43 l 273 -34 l 279 -26 l 283 -18 b 321 -1 292 -2 292 -1 b 338 -1 326 -1 332 -1 b 382 -6 378 -1 375 -1 b 389 -20 386 -9 389 -15 b 382 -38 389 -26 386 -31 l 378 -47 l 372 -55 l 367 -63 l 362 -72 l 356 -80 l 351 -90 l 347 -98 l 341 -106 l 336 -115 l 330 -123 l 325 -131 l 321 -141 l 315 -150 l 310 -158 l 304 -166 l 299 -175 b 295 -183 298 -177 296 -181 l 289 -191 l 285 -200 l 280 -208 l 274 -216 l 269 -225 l 264 -233 l 259 -243 l 254 -251 l 249 -259 l 243 -268 l 238 -276 l 234 -284 l 228 -293 l 223 -302 l 217 -311 l 213 -319 l 208 -327 b 202 -336 206 -330 204 -334 l 197 -344 l 193 -351 l 187 -361 l 182 -369 l 176 -377 l 172 -386 l 167 -394 l 161 -404 l 156 -412 l 152 -420 l 147 -429 l 141 -437 l 136 -445 l 130 -455 l 126 -463 l 121 -472 l 115 -480 b 110 -488 114 -483 111 -487 l 106 -497 l 100 -504 l 96 -512 l 89 -522 l 85 -530 l 80 -538 l 74 -547 l 69 -555 l 65 -565 l 59 -573 l 54 -581 l 49 -590 l 43 -598 l 39 -606 l 34 -616 l 28 -625 l 23 -633 b 19 -641 21 -636 20 -638 b 0 -654 14 -650 8 -654 b -25 -631 -10 -654 -14 -650 l -80 -541 l -359 -79 b -389 -29 -375 -52 -389 -30 b -390 -22 -389 -26 -390 -25 b -377 -1 -390 -13 -385 -5 m -13 -9 b -1 -8 -9 -8 -5 -8 b 51 -36 19 -8 39 -19 b 61 -72 58 -47 61 -59 b 51 -106 61 -84 58 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -127 b -62 -72 -57 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "},
"\ue177":{width:368,c:-188.890625,e:0,d:187.5,f:367.5,name:"accidentals.4",h:375,height:377,g:"m 0 125 l 0 187 l 61 187 l 122 187 l 122 138 l 122 91 l 153 61 l 183 30 l 213 61 l 243 91 l 243 138 l 243 187 l 306 187 l 367 187 l 367 125 l 367 61 l 321 61 l 274 61 l 243 30 l 213 0 l 243 -31 l 274 -62 l 321 -62 l 367 -62 l 367 -125 l 367 -188 l 306 -188 l 243 -188 l 243 -140 l 243 -93 l 213 -62 l 183 -31 l 153 -62 l 122 -93 l 122 -140 l 122 -188 l 61 -188 l 0 -188 l 0 -125 l 0 -62 l 46 -62 l 92 -62 l 123 -31 l 153 0 l 123 30 l 92 61 l 46 61 l 0 61 l 0 125 "},
Zn:{width:392,c:1.390625,e:29.9375,d:347.21875,f:420.578125,name:"z",h:371,height:347,g:"m 115 345 b 221 347 117 345 166 347 b 411 345 306 347 409 345 b 420 330 416 343 420 336 b 415 319 420 326 419 322 b 178 118 397 303 179 118 b 178 117 178 118 178 117 b 181 117 178 117 178 117 b 189 117 182 117 185 117 b 193 117 190 117 191 117 b 247 99 215 117 232 111 b 296 75 266 83 280 76 b 302 75 299 75 300 75 b 322 92 311 75 315 79 b 322 92 322 92 322 92 b 322 92 322 92 322 92 b 319 92 322 92 321 92 b 313 90 318 90 315 90 b 283 107 300 90 288 97 b 277 126 279 114 277 121 b 319 167 277 149 295 167 b 319 167 319 167 319 167 b 362 118 347 167 362 147 b 355 82 362 108 359 96 b 311 33 349 65 340 55 b 224 1 284 12 253 1 b 194 5 213 1 204 2 b 168 18 183 8 178 11 b 110 36 151 30 130 36 b 57 15 88 36 68 29 b 47 11 54 12 51 11 b 31 20 40 11 34 13 b 29 26 31 22 29 25 b 68 66 29 36 39 46 b 285 251 73 71 281 248 b 285 251 285 251 285 251 b 231 252 285 252 261 252 b 137 251 190 252 141 251 b 93 227 122 248 110 241 b 78 220 88 223 83 220 b 66 227 74 220 70 223 b 63 234 65 230 63 231 b 85 291 63 241 69 252 b 115 345 108 343 108 344 "},
"\ue13f":{width:429,c:-187.5,e:0,d:186.109375,f:428.75,name:"noteheads.s1",h:438,height:375,g:"m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 m 366 131 b 352 134 362 133 357 134 b 219 81 321 134 269 115 b 47 -111 126 23 50 -62 b 47 -112 47 -111 47 -112 b 77 -136 47 -129 58 -136 b 264 -45 118 -136 194 -101 b 382 109 336 12 382 76 b 366 131 382 120 377 129 "},
"\ue134":{width:608,c:-229.171875,e:0,d:633.328125,f:607.0625,name:"accidentals.M3",h:619,height:864,g:"m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 m 347 631 b 353 633 348 633 351 633 b 374 620 363 633 371 629 b 375 383 375 616 375 616 l 375 148 l 377 151 b 492 200 415 183 454 200 b 537 191 507 200 522 197 b 607 84 582 176 607 134 b 583 0 607 58 598 29 b 455 -143 562 -40 533 -72 l 378 -215 b 355 -229 364 -229 362 -229 b 334 -216 345 -229 337 -225 l 333 -212 l 333 201 l 333 616 l 334 620 b 347 631 337 625 341 630 m 465 131 b 451 133 461 133 455 133 b 445 133 449 133 446 133 b 379 87 419 129 396 113 l 375 80 l 375 -37 l 375 -156 l 378 -152 b 499 81 451 -72 499 20 l 499 83 b 465 131 499 113 490 126 "},
"\ue118":{width:848,c:-876.390625,e:0,d:1502.78125,f:847.96875,name:"clefs.G",h:865,height:2380,g:"m 488 1501 b 495 1502 491 1502 492 1502 b 541 1468 507 1502 521 1493 b 679 1080 622 1375 679 1212 b 677 1052 679 1070 677 1062 b 477 644 668 895 604 766 l 443 611 l 431 598 l 455 477 b 481 356 470 411 481 356 b 481 356 481 356 481 356 b 490 358 483 356 485 356 b 528 359 495 358 511 359 b 558 358 540 359 552 358 b 847 30 724 337 842 202 b 847 20 847 26 847 23 b 628 -304 847 -115 759 -247 b 622 -308 624 -305 622 -308 b 638 -387 622 -308 628 -344 b 661 -516 656 -472 658 -490 b 665 -575 664 -536 665 -555 b 562 -812 665 -677 631 -756 b 385 -876 510 -855 447 -876 b 163 -772 303 -876 220 -840 b 129 -677 140 -744 129 -711 b 172 -573 129 -640 144 -602 b 273 -529 202 -543 238 -529 b 412 -669 344 -529 412 -584 l 412 -669 b 284 -804 412 -743 355 -804 l 277 -804 l 281 -805 b 344 -826 296 -813 322 -822 b 383 -829 357 -829 371 -829 b 605 -672 483 -829 575 -766 b 619 -573 615 -643 619 -609 b 608 -472 619 -541 615 -508 b 577 -323 604 -454 577 -323 b 577 -323 577 -323 577 -323 b 566 -326 577 -323 571 -325 b 466 -337 533 -333 500 -337 b 127 -187 343 -337 215 -283 b 0 144 42 -93 0 25 b 96 444 0 247 31 352 b 322 716 166 543 236 627 l 352 747 l 341 800 l 330 856 b 303 986 325 876 304 977 b 295 1084 298 1019 295 1052 b 413 1429 295 1211 336 1331 b 488 1501 436 1458 477 1498 m 551 1304 b 541 1304 548 1304 545 1304 b 411 1209 500 1304 447 1265 b 355 1008 374 1152 355 1083 b 362 934 355 983 357 959 b 392 784 363 925 392 786 l 392 784 b 434 830 393 784 424 819 b 607 1168 534 943 594 1062 b 609 1195 608 1177 609 1186 b 597 1272 609 1226 604 1256 b 551 1304 589 1288 571 1301 m 405 494 b 393 556 398 529 393 556 b 318 472 390 556 343 501 b 190 300 266 409 212 336 b 127 72 149 229 127 150 b 155 -76 127 20 137 -29 b 468 -302 209 -215 333 -302 b 519 -298 484 -302 502 -301 b 568 -284 539 -294 568 -286 b 551 -195 568 -284 560 -244 l 521 -55 l 509 1 l 507 12 l 487 104 b 469 190 477 151 469 188 b 469 190 469 190 469 190 b 416 163 462 190 430 173 b 337 15 364 127 337 70 b 413 -123 337 -38 363 -91 b 428 -143 424 -130 428 -136 b 428 -148 428 -144 428 -147 b 409 -165 426 -159 419 -165 b 394 -161 405 -165 400 -163 b 253 0 328 -131 274 -72 b 240 79 245 26 240 52 b 432 344 240 195 315 305 b 436 345 435 345 436 345 l 436 345 b 420 427 436 347 421 418 b 405 494 419 430 413 461 m 548 195 b 524 197 540 197 530 197 b 515 197 518 197 515 197 b 556 -1 515 197 533 108 b 600 -208 579 -109 598 -202 b 612 -265 602 -220 612 -265 b 612 -265 612 -265 612 -265 b 641 -247 613 -265 632 -254 b 744 -97 692 -211 730 -155 b 751 -38 749 -77 751 -58 b 548 195 751 77 666 183 "},
"\ue105":{width:140,c:-372.21875,e:25.859375,d:370.828125,f:164.6875,name:"accidentals.rightparen",h:168,height:744,g:"m 34 369 b 40 370 35 370 38 370 b 59 354 49 370 50 368 b 164 40 122 254 155 158 b 164 0 164 33 164 16 b 164 -40 164 -16 164 -34 b 59 -354 155 -158 122 -254 b 40 -372 53 -366 47 -372 b 34 -370 38 -372 36 -370 b 25 -358 28 -368 25 -363 b 31 -337 25 -352 27 -347 b 92 0 72 -234 92 -118 b 31 336 92 116 72 233 b 25 356 27 345 25 352 b 34 369 25 363 28 366 "},"\ue12d":{width:274,c:-229.171875,
e:-21.78125,d:633.328125,f:251.8125,name:"accidentals.M2",h:257,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
"\ue145":{width:1143,c:-176.390625,e:-571.671875,d:175,f:570.3125,name:"scripts.prallprall",h:582,height:352,g:"m -386 173 b -381 175 -385 175 -383 175 b -370 173 -377 175 -372 173 b -281 86 -367 172 -347 151 b -196 0 -235 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 175 279 173 277 172 b 289 175 285 175 288 175 b 299 173 294 175 298 173 b 462 11 303 172 338 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 374 -176 371 -176 b 280 -87 367 -173 345 -152 b 194 0 234 -38 194 0 b 125 -86 194 0 163 -38 b 49 -175 54 -175 55 -173 b 43 -176 47 -176 46 -176 b 34 -175 40 -176 36 -175 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -141 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -289 -176 b -300 -175 -295 -176 -299 -175 b -464 -12 -304 -173 -340 -137 l -476 0 l -504 -34 b -543 -77 -534 -73 -537 -76 b -549 -79 -545 -79 -547 -79 b -571 -58 -562 -79 -571 -69 b -568 -50 -571 -55 -570 -52 b -392 172 -566 -43 -396 168 b -386 173 -390 172 -387 173 "},
" ":{width:0,c:0,e:0,d:0,f:0,name:"space",h:263,height:0},"\ue152":{width:416,c:-695.828125,e:-1.359375,d:694.453125,f:413.78125,name:"accidentals.natural.arrowboth",h:422,height:1391,g:"m 99 693 b 107 694 102 693 104 694 b 121 688 112 694 117 691 b 126 673 123 686 125 683 b 209 461 141 598 172 519 l 215 451 l 215 445 l 215 445 b 197 426 215 434 206 426 b 186 430 194 426 190 427 b 133 450 170 440 152 447 b 127 451 130 450 129 451 b 126 450 126 451 126 451 b 127 447 126 450 127 448 b 127 325 127 444 127 425 b 129 205 127 259 129 205 b 215 227 129 205 167 215 b 308 250 283 244 300 250 b 315 247 311 250 313 248 b 325 237 319 245 323 241 l 326 233 l 326 -105 b 326 -262 326 -168 326 -219 b 326 -448 326 -416 326 -445 b 325 -451 325 -450 325 -451 b 326 -452 325 -452 325 -452 b 330 -451 326 -452 329 -451 b 385 -431 351 -448 368 -441 b 396 -427 389 -429 393 -427 b 413 -447 405 -427 413 -436 l 413 -447 l 413 -452 l 408 -462 b 325 -675 371 -520 340 -600 b 306 -695 322 -690 317 -695 b 285 -670 294 -695 289 -690 b 204 -462 268 -591 239 -520 l 197 -452 l 197 -447 l 197 -447 b 215 -427 197 -436 205 -427 b 225 -431 219 -427 223 -429 b 280 -451 243 -441 261 -448 b 285 -452 283 -452 284 -452 b 287 -451 287 -452 287 -452 b 285 -448 287 -451 287 -450 b 285 -323 285 -445 285 -426 b 284 -201 285 -247 284 -201 b 197 -223 284 -201 245 -211 b 104 -245 129 -240 111 -245 b 98 -243 102 -245 100 -244 b 88 -233 93 -241 89 -237 l 87 -230 l 87 106 b 87 262 87 169 87 220 b 87 447 87 415 87 444 b 88 450 88 448 88 450 b 87 451 88 451 88 451 b 81 450 85 451 84 451 b 27 430 62 447 44 440 b 16 426 24 427 20 426 b -1 445 6 426 -1 434 b 0 445 -1 445 0 445 l 0 451 l 5 461 b 87 669 40 519 69 590 b 99 693 91 686 92 688 m 284 22 b 285 70 285 41 285 58 b 284 116 285 113 284 116 l 284 116 b 205 97 283 116 247 106 l 127 77 l 127 -18 b 129 -112 127 -69 129 -112 l 206 -93 l 284 -73 l 284 22 "},
"\ue163":{width:738,c:-16.671875,e:0,d:173.609375,f:737.71875,name:"rests.1o",h:753,height:191,g:"m 144 94 l 144 173 l 368 173 l 592 173 l 592 94 l 592 15 l 660 15 l 726 15 l 729 12 b 737 -1 735 9 737 4 b 729 -15 737 -6 735 -11 l 726 -16 l 368 -16 l 9 -16 l 6 -15 b 0 -1 1 -11 0 -6 b 6 12 0 4 1 9 l 9 15 l 77 15 l 144 15 l 144 94 "},"\ue10b":{width:340,c:0,e:-170.140625,d:568.0625,f:168.78125,name:"scripts.upbow",h:172,height:569,g:"m -160 568 b -122 568 -159 568 -149 568 l -87 568 l -84 566 b -74 554 -78 563 -77 561 b -20 366 -73 551 -49 466 b 31 186 8 268 31 186 b 85 372 31 186 55 269 b 140 559 114 473 138 558 b 153 568 141 565 148 568 b 168 559 159 568 166 565 b 168 555 168 558 168 558 b 92 281 168 548 159 513 b 14 13 50 134 14 13 b 0 0 14 6 6 0 b -17 15 -8 0 -17 8 b -93 283 -17 15 -51 136 b -170 552 -166 533 -170 548 b -170 554 -170 552 -170 552 b -160 568 -170 561 -167 565 "},
"+":{width:320,c:183.328125,e:0,d:509.71875,f:319.859375,name:"plus",h:326,height:327,g:"m 149 508 b 159 509 152 509 155 509 b 186 494 170 509 181 504 b 190 440 190 487 190 488 l 190 430 l 190 377 l 242 377 l 251 377 b 303 373 298 377 296 377 b 319 345 314 368 319 356 b 304 319 319 336 314 325 b 250 315 296 315 299 315 l 242 315 l 190 315 l 190 262 l 190 252 b 186 198 190 204 190 205 b 159 183 179 188 170 183 b 132 198 148 183 138 188 b 127 252 127 205 127 204 l 127 262 l 127 315 l 76 315 l 68 315 b 14 319 20 315 21 315 b 0 347 4 325 0 336 b 14 373 0 356 4 368 b 68 377 21 377 20 377 l 76 377 l 127 377 l 127 430 l 127 440 b 132 494 127 488 127 487 b 149 508 136 501 142 505 "},
"\ue168":{width:661,c:-486.109375,e:-330.75,d:484.71875,f:329.390625,name:"scripts.segno",h:336,height:972,g:"m -133 483 b -117 484 -127 484 -122 484 b 31 373 -51 484 9 440 b 35 348 34 365 35 356 b -25 286 35 313 10 286 b -87 331 -55 286 -76 302 b -167 402 -100 376 -133 402 b -191 398 -175 402 -183 401 b -227 341 -215 388 -227 369 b -225 320 -227 334 -227 327 b -13 75 -209 230 -125 133 b 6 65 -4 70 5 66 l 9 63 l 10 65 b 117 231 12 68 40 112 l 189 341 l 242 425 b 268 461 262 456 264 458 b 283 465 273 463 277 465 b 308 438 296 465 308 454 l 308 437 b 287 397 308 430 308 429 l 95 98 l 59 43 l 58 41 l 65 37 b 253 -156 151 -8 217 -77 b 281 -286 272 -200 281 -244 b 148 -481 281 -381 231 -463 b 115 -486 137 -484 126 -486 b -32 -376 51 -486 -9 -443 b -36 -350 -35 -366 -36 -358 b 25 -287 -36 -315 -12 -287 b 85 -333 54 -287 74 -302 b 166 -404 99 -377 133 -404 b 190 -400 174 -404 182 -402 b 225 -343 215 -390 225 -370 b 224 -322 225 -336 225 -329 b 12 -76 208 -231 125 -134 b -8 -66 2 -72 -6 -68 l -10 -65 l -12 -66 b -118 -231 -13 -68 -42 -113 l -190 -343 l -243 -426 b -269 -462 -264 -458 -265 -458 b -284 -466 -274 -465 -279 -466 b -310 -440 -298 -466 -310 -455 l -310 -438 b -288 -398 -310 -430 -308 -430 l -96 -100 l -59 -44 l -59 -43 l -66 -38 b -281 284 -198 33 -281 158 l -281 284 b -133 483 -281 393 -220 475 m 254 177 b 266 179 258 177 262 179 b 319 150 287 179 307 168 b 329 115 326 140 329 127 b 319 79 329 102 326 90 b 268 51 307 61 287 51 b 221 72 250 51 234 58 b 205 115 210 84 205 100 b 254 177 205 143 223 170 m -281 -54 b -269 -52 -277 -52 -273 -52 b -223 -73 -253 -52 -235 -59 b -206 -116 -212 -84 -206 -101 b -216 -151 -206 -129 -209 -141 b -269 -179 -228 -170 -249 -179 b -314 -159 -285 -179 -302 -173 b -330 -116 -325 -147 -330 -131 b -281 -54 -330 -88 -313 -61 "},
"\ue16e":{width:258,c:-519.4375,e:-1.359375,d:518.0625,f:255.890625,name:"accidentals.sharp.slashslashslash.stem",h:261,height:1039,g:"m 118 515 b 127 518 121 518 122 518 b 147 505 136 518 142 513 l 148 502 l 148 404 b 148 306 148 351 148 306 b 174 315 149 306 160 311 l 200 325 l 205 323 b 223 312 213 323 220 319 l 225 308 l 225 261 b 225 245 225 255 225 250 b 220 204 225 208 224 209 b 179 188 216 200 215 200 l 148 177 l 148 125 l 148 70 l 189 84 b 236 98 219 94 230 98 b 247 94 240 98 243 97 b 255 52 254 88 255 87 b 255 33 255 47 255 40 l 254 -12 l 253 -15 b 249 -22 253 -18 250 -20 l 245 -25 l 196 -41 l 148 -58 l 148 -108 b 148 -158 148 -136 148 -158 b 174 -148 148 -158 160 -154 b 204 -140 198 -140 200 -140 l 204 -140 b 224 -152 213 -140 221 -145 b 225 -201 224 -155 225 -177 b 224 -254 225 -226 224 -251 b 157 -284 220 -262 220 -262 l 148 -288 l 148 -395 l 148 -504 l 147 -506 b 127 -519 142 -515 134 -519 b 107 -506 119 -519 111 -515 l 106 -504 l 106 -404 b 106 -304 106 -316 106 -304 b 104 -304 104 -304 104 -304 b 88 -311 104 -304 96 -306 l 63 -319 b 51 -322 59 -320 55 -322 b 36 -315 46 -322 40 -319 b 31 -273 32 -309 31 -312 b 31 -258 31 -269 31 -263 l 31 -211 l 34 -206 b 40 -198 35 -204 38 -200 b 74 -186 42 -197 57 -191 l 106 -173 l 106 -123 b 106 -97 106 -112 106 -104 b 106 -72 106 -76 106 -72 b 104 -72 106 -72 106 -72 b 20 -100 89 -79 23 -100 b 0 -84 10 -100 2 -93 b -1 -37 0 -81 -1 -59 b 0 11 -1 -15 0 9 b 58 40 4 22 2 22 l 106 56 l 106 109 b 106 123 106 115 106 119 b 106 162 106 147 106 162 b 81 155 106 162 93 159 b 50 147 65 150 55 147 b 36 152 43 147 40 148 b 31 194 32 158 31 156 b 31 209 31 198 31 204 l 31 256 l 34 261 b 76 281 38 269 38 269 l 106 293 l 106 397 l 106 502 l 107 505 b 118 515 110 509 114 513 "},
"\ue100":{width:607,c:-176.390625,e:-299.4375,d:175,f:298.078125,name:"scripts.sforzato",h:304,height:352,g:"m -281 175 b -274 175 -280 175 -277 175 b -259 173 -270 175 -265 175 l -40 112 l 224 40 b 287 20 289 22 283 23 b 298 0 295 16 298 8 b 287 -22 298 -9 295 -18 b 287 -23 287 -23 287 -23 b 287 -23 287 -23 287 -23 b -40 -113 287 -25 270 -29 l -259 -175 b -274 -176 -265 -176 -270 -176 b -288 -172 -280 -176 -284 -175 b -299 -151 -296 -168 -299 -159 b -288 -129 -299 -141 -296 -133 b -98 -75 -284 -125 -307 -131 l 42 -36 l 140 -9 b 170 0 156 -4 170 -1 b 140 8 170 0 156 2 l 42 34 l -98 73 b -287 126 -299 129 -284 125 b -299 150 -295 131 -299 140 b -281 175 -299 161 -294 170 "},
"\ue181":{width:385,c:4.171875,e:-21.78125,d:1033.328125,f:362.0625,name:"flags.d4",h:369,height:1030,g:"m 302 1031 b 308 1033 304 1033 307 1033 b 330 1016 318 1033 325 1027 b 362 868 351 970 362 920 b 340 738 362 825 353 780 l 336 727 l 340 718 b 362 591 355 677 362 634 b 257 323 362 497 325 401 b 204 272 243 306 227 290 b 20 56 129 206 66 133 b -1 18 12 44 0 22 b -19 4 -4 9 -12 4 l -21 4 l -21 140 l -21 276 l -12 277 b 167 333 61 288 127 309 b 319 598 262 388 319 491 b 311 665 319 620 317 643 l 310 673 l 304 665 b 204 548 279 620 250 587 b 20 333 129 483 66 409 b -1 293 12 320 0 298 b -19 280 -4 286 -12 280 l -21 280 l -21 416 l -21 552 l -12 554 b 167 609 61 565 127 586 b 319 875 264 666 319 770 b 294 993 319 915 311 955 b 288 1012 288 1005 288 1008 b 302 1031 288 1022 294 1029 "},
"\ue138":{width:656,c:-229.171875,e:-171.5,d:633.328125,f:483.1875,name:"accidentals.flatflat.slash",h:493,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 495 20 616 20 616 b 20 373 20 427 20 373 b 115 411 20 373 63 390 l 210 448 l 210 531 b 212 620 210 615 210 616 b 231 633 215 629 223 633 b 246 627 236 633 242 631 b 251 541 251 620 251 629 l 251 463 l 315 490 b 387 515 368 509 381 515 b 393 513 390 515 392 515 b 406 494 402 511 406 502 b 397 476 406 487 404 480 b 323 447 396 475 363 462 l 251 418 l 251 283 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -19 -218 -9 -229 -16 -225 l -20 -215 l -21 48 l -21 311 l -83 287 b -152 262 -133 266 -145 262 b -157 263 -153 262 -155 262 b -171 283 -166 266 -171 275 b -161 301 -171 290 -167 297 b -91 329 -160 302 -129 315 l -21 356 l -21 487 l -20 618 l -19 622 b -8 631 -17 626 -12 630 m 210 288 b 210 401 210 351 210 401 b 114 365 209 401 167 384 l 20 327 l 20 238 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 180 164 200 187 193 l 209 177 b 209 177 209 177 209 177 b 210 288 210 177 210 200 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "},
"\ue19f":{width:710,c:0,e:-355.25,d:722.21875,f:353.890625,name:"accordion.accOldEE",h:361,height:723,g:"m -27 720 b -13 722 -24 720 -20 722 b 42 719 4 722 34 720 b 343 447 190 700 308 591 b 353 361 349 418 353 390 b 84 9 353 197 245 50 b 0 0 55 2 27 0 b -344 273 -160 0 -306 109 b -355 359 -351 302 -355 331 b -39 719 -355 540 -221 701 l -27 720 m 39 691 b -13 693 32 691 4 693 b -25 693 -19 693 -23 693 b -322 416 -178 677 -296 566 b -326 361 -325 394 -326 390 b -325 323 -326 341 -325 329 b -36 29 -303 163 -193 51 b -1 29 -31 29 -16 29 b 35 29 14 29 29 29 b 323 323 191 51 302 163 b 325 361 323 329 325 341 b 321 416 325 390 323 394 b 39 691 296 561 185 669 m -12 655 b -4 655 -9 655 -6 655 b 20 652 4 655 14 654 b 66 586 50 643 66 613 b 32 525 66 562 55 538 b 25 522 28 523 25 522 b 16 404 25 520 16 408 b 16 404 16 404 16 404 l 16 404 b 54 448 17 404 34 423 l 92 493 l 89 500 b 87 519 88 506 87 513 b 103 565 87 536 92 552 b 155 590 117 581 136 590 b 216 551 179 590 204 576 b 224 520 221 541 224 530 b 156 450 224 483 193 450 b 136 454 149 450 142 451 l 129 455 l 85 416 b 42 377 61 395 42 379 l 42 377 l 42 377 b 156 387 46 377 156 387 b 160 394 156 387 159 390 b 220 430 172 418 197 430 b 280 394 243 430 266 418 b 288 361 285 384 288 372 b 280 326 288 348 285 337 b 220 291 266 302 243 291 b 160 327 197 291 172 302 b 156 333 159 330 156 333 b 42 343 156 333 46 343 b 42 343 42 343 42 343 l 42 343 b 85 304 42 343 61 325 l 129 265 l 136 268 b 155 270 142 269 148 270 b 198 254 171 270 186 265 b 223 201 216 240 223 220 b 186 138 223 176 210 151 b 155 131 176 133 166 131 b 87 201 119 131 87 162 b 89 220 87 206 88 213 l 92 227 l 54 272 b 16 316 34 297 17 316 l 16 316 b 16 316 16 316 16 316 b 25 200 16 313 25 200 b 32 195 25 200 28 198 b 68 134 55 183 68 158 b 32 73 68 111 55 87 b -1 65 23 68 10 65 b -34 73 -12 65 -24 68 b -69 134 -57 87 -69 111 b -34 195 -69 158 -57 183 b -27 200 -29 198 -27 200 b -17 316 -27 200 -17 313 b -17 316 -17 316 -17 316 l -17 316 b -55 272 -19 316 -35 297 l -93 227 l -91 220 b -88 201 -89 215 -88 208 b -104 156 -88 184 -93 169 b -156 131 -118 140 -137 131 b -217 169 -181 131 -205 144 b -225 201 -223 179 -225 190 b -157 270 -225 238 -194 270 b -137 268 -151 270 -144 269 l -130 265 l -87 304 b -43 343 -62 325 -43 343 l -43 343 b -43 343 -43 343 -43 343 b -157 333 -47 343 -157 333 b -161 327 -159 333 -160 330 b -221 291 -175 302 -198 291 b -281 326 -245 291 -268 302 b -289 361 -287 337 -289 348 b -281 394 -289 372 -287 384 b -221 430 -268 418 -245 430 b -161 394 -198 430 -175 418 b -157 387 -160 390 -159 387 b -43 377 -157 387 -47 377 l -43 377 l -43 377 b -87 416 -43 379 -62 395 l -130 455 l -137 454 b -156 450 -144 451 -149 450 b -200 466 -172 450 -187 455 b -224 520 -217 480 -224 500 b -187 581 -224 545 -212 569 b -156 590 -178 587 -167 590 b -88 520 -121 590 -88 559 b -91 500 -88 513 -89 506 l -93 493 l -55 448 b -17 404 -35 423 -19 404 l -17 404 b -17 404 -17 404 -17 404 b -27 522 -17 408 -27 520 b -34 525 -27 522 -29 523 b -68 586 -57 538 -68 562 b -12 655 -68 618 -47 650 "},
"\ue1a8":{width:599,c:-184.71875,e:0,d:183.328125,f:598.890625,name:"noteheads.s0cross",h:611,height:369,g:"m 62 181 b 77 183 66 183 72 183 b 91 181 83 183 88 183 b 202 131 100 180 106 177 l 299 87 l 394 131 b 517 183 499 181 502 183 b 519 183 517 183 518 183 b 598 104 567 183 598 144 b 577 50 598 84 592 65 b 518 15 567 38 563 37 b 484 0 499 6 484 0 b 518 -16 484 -1 499 -8 b 577 -51 563 -38 567 -40 b 598 -105 592 -66 598 -86 b 519 -184 598 -145 567 -184 b 517 -184 518 -184 517 -184 b 394 -133 502 -184 499 -183 l 299 -88 l 202 -133 b 81 -184 99 -183 95 -184 b 77 -184 80 -184 78 -184 b 0 -105 29 -184 0 -145 b 20 -51 0 -86 5 -66 b 80 -16 29 -40 34 -38 b 114 -1 98 -8 114 -1 b 80 15 114 0 98 6 b 20 50 34 37 29 38 b 0 104 6 65 0 84 b 62 181 0 140 23 175 m 88 134 b 74 136 85 134 80 136 b 68 134 72 136 69 136 b 46 104 54 130 46 118 b 55 81 46 95 49 88 b 149 34 59 76 53 80 b 224 -1 190 15 224 0 b 144 -38 224 -1 187 -18 b 54 -84 59 -79 58 -79 b 46 -105 49 -90 46 -98 b 76 -137 46 -122 58 -137 b 78 -137 77 -137 77 -137 b 194 -86 87 -137 76 -141 b 298 -36 250 -58 298 -36 b 298 -36 298 -36 298 -36 b 402 -84 299 -36 345 -58 b 518 -137 522 -141 510 -137 b 521 -137 519 -137 519 -137 b 551 -105 539 -137 551 -122 b 541 -83 551 -98 548 -90 b 447 -36 537 -77 544 -81 b 374 -1 406 -16 374 -1 b 447 34 374 0 406 15 b 541 81 544 80 537 76 b 551 104 548 88 551 97 b 521 136 551 120 539 136 b 518 136 519 136 519 136 b 517 136 518 136 517 136 l 517 136 b 402 83 511 136 511 136 b 298 34 345 56 299 34 b 298 34 298 34 298 34 b 194 84 298 34 250 56 b 88 134 137 111 89 133 "},
"\ue1a4":{width:439,c:-206.9375,e:0,d:205.5625,f:438.28125,name:"noteheads.d1triangle",h:447,height:413,g:"m 212 205 b 219 205 213 205 216 205 b 239 183 228 205 231 204 b 421 -163 298 40 363 -83 b 438 -191 434 -180 438 -186 b 436 -197 438 -193 438 -195 b 424 -206 434 -204 431 -206 b 406 -201 420 -206 415 -205 b 216 -156 347 -172 281 -156 b 23 -205 148 -156 80 -173 b 14 -206 20 -206 17 -206 b 0 -191 6 -206 0 -201 b 6 -176 0 -187 1 -183 b 202 193 63 -104 142 45 b 212 205 205 200 208 202 m 264 48 l 249 81 l 243 94 l 242 91 b 89 -126 208 36 137 -66 b 81 -138 85 -133 81 -138 b 81 -138 81 -138 81 -138 b 81 -138 81 -138 81 -138 b 95 -133 81 -138 87 -136 b 280 -94 156 -108 221 -94 b 334 -98 299 -94 317 -95 b 343 -100 338 -100 343 -100 b 343 -100 343 -100 343 -100 b 338 -94 343 -100 341 -97 b 264 48 318 -58 287 1 "},
"\ue17d":{width:299,c:-219.4375,e:-149.71875,d:218.0625,f:148.359375,name:"scripts.snappizzicato",h:151,height:439,g:"m -9 215 b 0 218 -6 218 -4 218 b 19 205 8 218 14 213 b 20 143 20 202 20 201 l 20 84 l 23 84 b 144 -27 81 75 129 30 b 148 -66 147 -40 148 -54 b 36 -213 148 -134 103 -197 b 0 -219 24 -218 12 -219 b -145 -104 -68 -219 -129 -173 b -149 -68 -148 -91 -149 -79 b -24 84 -149 6 -98 75 l -21 84 l -21 143 b -19 205 -20 201 -20 202 b -9 215 -17 209 -13 213 m -21 -15 b -23 41 -21 37 -21 41 b -23 41 -23 41 -23 41 b -76 11 -35 40 -62 26 b -108 -65 -98 -11 -108 -38 b -1 -176 -108 -122 -65 -176 b 107 -65 63 -176 107 -122 b 74 11 107 -38 96 -11 b 20 41 61 26 32 41 b 20 -15 20 41 20 15 b 19 -75 20 -72 20 -72 b 0 -87 14 -83 6 -87 b -19 -75 -8 -87 -16 -83 b -21 -15 -20 -72 -20 -72 "},
"\ue1a9":{width:407,c:-184.71875,e:0,d:183.328125,f:406.96875,name:"noteheads.s1cross",h:415,height:369,g:"m 55 181 b 70 183 61 183 66 183 b 111 170 85 183 99 179 b 160 130 115 168 137 150 l 202 95 l 245 130 b 319 181 299 176 302 179 b 334 183 325 183 330 183 b 406 109 375 183 406 148 b 401 81 406 100 405 91 b 348 25 394 65 390 59 b 318 -1 332 11 318 0 b 348 -26 318 -1 332 -12 b 401 -83 390 -61 394 -66 b 406 -111 405 -93 406 -101 b 334 -184 406 -150 375 -184 b 319 -183 330 -184 325 -184 b 245 -131 302 -180 299 -177 l 202 -97 l 160 -131 b 85 -183 107 -177 103 -180 b 70 -184 80 -184 76 -184 b 0 -111 31 -184 0 -150 b 4 -83 0 -101 1 -93 b 58 -26 10 -66 16 -61 b 88 -1 74 -12 88 -1 b 58 25 88 0 74 11 b 10 69 23 54 17 59 b 0 109 2 81 0 95 b 55 181 0 143 21 173 m 83 133 b 72 136 78 136 76 136 b 57 131 66 136 61 134 b 46 109 49 126 46 118 b 50 93 46 104 47 98 b 107 45 51 91 77 70 b 160 0 137 20 160 0 b 107 -47 160 -1 137 -22 b 50 -94 77 -72 51 -93 b 46 -111 47 -100 46 -105 b 59 -134 46 -120 50 -130 b 72 -137 62 -136 68 -137 b 83 -136 76 -137 80 -136 b 144 -84 84 -134 107 -116 b 202 -36 176 -58 202 -36 b 261 -84 202 -36 230 -58 b 323 -136 299 -116 321 -134 b 334 -137 326 -136 330 -137 b 345 -134 338 -137 343 -136 b 360 -111 355 -130 360 -120 b 355 -94 360 -105 359 -100 b 299 -47 353 -93 329 -72 b 245 0 269 -22 245 -1 b 299 45 245 0 269 20 b 355 93 329 70 353 91 b 360 109 359 98 360 104 b 345 133 360 119 355 129 b 334 136 343 134 338 136 b 323 134 330 136 326 134 b 261 83 321 133 299 115 b 202 34 230 56 202 34 b 144 83 202 34 176 56 b 83 133 106 115 84 133 "},
"\ue1ac":{width:598,c:-343.0625,e:0,d:341.671875,f:597.53125,name:"noteheads.s0slash",h:610,height:686,g:"m 356 341 b 479 341 402 341 445 341 b 570 341 533 341 568 341 b 597 309 586 340 597 326 l 597 309 b 472 -320 597 305 475 -311 b 451 -341 469 -330 462 -337 b 242 -343 450 -343 347 -343 b 21 -341 134 -343 24 -343 b 0 -311 8 -337 0 -325 b 0 -311 0 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 356 341 147 341 153 341 m 528 276 b 353 277 528 277 492 277 b 179 276 215 277 179 277 b 123 -1 179 276 153 151 l 68 -279 l 242 -279 b 310 -279 266 -279 289 -279 b 416 -279 372 -279 416 -279 b 528 276 417 -279 528 275 "},
"\ue10a":{width:457,c:0,e:-228.671875,d:488.890625,f:227.3125,name:"scripts.downbow",h:232,height:489,g:"m -217 487 l -213 488 l 0 488 l 212 488 l 216 487 b 225 476 220 484 224 480 l 227 473 l 227 244 l 227 15 l 225 12 b 206 0 223 4 215 0 b 197 1 204 0 200 0 b 187 12 193 4 189 6 l 186 15 l 186 138 l 186 262 l -1 262 l -187 262 l -187 138 l -187 15 l -189 12 b -208 0 -193 4 -200 0 b -227 12 -216 0 -223 4 l -228 15 l -228 244 l -228 473 l -227 476 b -217 487 -225 480 -221 484 "},"\ue12c":{width:430,
c:-229.171875,e:-1.359375,d:633.328125,f:427.390625,name:"accidentals.mirroredflat.backslash",h:436,height:864,g:"m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 b 272 494 272 616 272 616 l 272 370 l 344 333 b 426 286 426 293 423 294 b 427 277 426 283 427 280 b 405 256 427 266 417 256 b 405 256 405 256 405 256 l 400 256 l 336 290 b 272 322 300 308 272 322 b 272 54 272 322 272 201 b 270 -216 272 -212 272 -212 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b -1 84 9 18 -1 52 b 111 200 -1 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 245 l 231 343 l 157 380 b 81 420 92 413 84 418 b 76 436 77 425 76 430 b 96 456 76 447 84 456 b 98 456 96 456 98 456 l 103 456 l 166 425 b 230 391 201 406 230 391 b 231 504 230 391 231 443 b 232 620 231 615 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "},
"\ue14f":{width:240,c:-463.890625,e:0,d:462.5,f:239.5625,name:"accidentals.natural",h:244,height:927,g:"m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -106 l 239 -448 l 238 -451 b 219 -463 234 -459 225 -463 b 198 -451 210 -463 202 -459 l 197 -448 l 197 -325 b 197 -201 197 -248 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "},
"\ue17f":{width:390,c:4.171875,e:-21.78125,d:1033.328125,f:367.5,name:"flags.d3",h:375,height:1030,g:"m 230 1031 b 238 1033 232 1033 235 1033 b 259 1015 245 1033 251 1027 b 367 662 330 906 367 783 b 364 602 367 641 367 622 b 232 318 352 488 304 384 b 57 120 155 245 103 187 b -1 18 31 84 6 40 b -19 4 -4 11 -12 4 l -21 4 l -21 159 l -21 315 l -16 315 b 96 336 10 315 62 325 b 315 695 227 380 315 527 b 313 738 315 709 314 725 b 224 991 304 826 273 916 b 216 1013 219 1000 216 1008 b 230 1031 216 1022 220 1029 "},
1:{width:347,c:-1.390625,e:-1.359375,d:673.609375,f:344.359375,name:"one",h:351,height:676,g:"m 126 637 l 129 638 l 198 638 l 266 638 l 269 636 b 274 631 272 634 273 633 l 277 627 l 277 395 b 279 156 277 230 277 161 b 329 88 281 123 295 106 b 344 69 341 81 344 79 b 337 55 344 62 343 59 l 333 54 l 197 54 l 61 54 l 58 55 b 50 69 53 59 50 62 b 65 88 50 79 53 81 b 80 97 72 91 74 93 b 117 156 103 113 112 129 b 117 345 117 161 117 222 l 117 529 l 100 504 l 38 406 b 14 383 24 384 23 383 b -1 398 5 383 -1 390 b 4 415 -1 404 1 409 b 16 437 5 416 10 426 l 72 540 l 100 597 b 121 633 119 631 119 631 b 126 637 122 634 125 636 m 171 -1 l 172 -1 l 170 -1 l 171 -1 m 171 673 l 172 673 l 170 673 l 171 673 "},
"\ue188":{width:339,c:-2066.671875,e:-24.5,d:-5.5625,f:313.0625,name:"flags.u7",h:319,height:2062,g:"m -24 -133 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 142 -213 13 -61 74 -144 b 258 -376 196 -269 230 -315 b 313 -605 295 -450 313 -529 b 292 -743 313 -652 306 -700 b 288 -752 289 -748 288 -752 b 288 -752 288 -752 288 -752 b 292 -765 289 -754 291 -758 b 313 -908 306 -812 313 -861 b 292 -1045 313 -955 306 -1002 b 288 -1055 289 -1051 288 -1055 b 288 -1055 288 -1055 288 -1055 b 292 -1068 289 -1055 291 -1061 b 313 -1211 306 -1113 313 -1162 b 292 -1347 313 -1258 306 -1305 b 288 -1358 289 -1354 288 -1358 b 288 -1358 288 -1358 288 -1358 b 292 -1369 289 -1358 291 -1363 b 313 -1513 306 -1416 313 -1465 b 292 -1650 313 -1561 306 -1606 b 288 -1661 289 -1655 288 -1661 b 288 -1661 288 -1661 288 -1661 b 292 -1672 289 -1661 291 -1666 b 313 -1815 306 -1720 313 -1768 b 250 -2041 313 -1898 291 -1979 b 232 -2063 238 -2058 236 -2061 b 221 -2066 230 -2065 225 -2066 b 200 -2047 210 -2066 201 -2058 b 200 -2044 200 -2045 200 -2045 b 208 -2027 200 -2038 202 -2036 b 269 -1827 249 -1968 269 -1898 b 153 -1545 269 -1727 230 -1626 b -9 -1473 115 -1506 58 -1481 b -21 -1472 -14 -1472 -19 -1472 l -24 -1472 l -24 -1344 l -24 -1216 l -20 -1216 b -1 -1230 -12 -1216 -4 -1222 b 142 -1425 13 -1270 74 -1354 b 257 -1583 196 -1479 228 -1525 b 264 -1595 261 -1590 264 -1595 l 264 -1595 b 265 -1583 264 -1595 264 -1590 b 270 -1526 268 -1563 270 -1545 b 153 -1244 270 -1425 228 -1322 b -9 -1170 115 -1204 58 -1179 b -21 -1169 -14 -1170 -19 -1169 l -24 -1169 l -24 -1041 l -24 -913 l -20 -913 b -1 -927 -12 -913 -4 -919 b 142 -1122 13 -968 74 -1051 b 257 -1281 196 -1176 228 -1222 b 264 -1293 261 -1287 264 -1293 l 264 -1293 b 265 -1280 264 -1293 264 -1287 b 270 -1223 268 -1262 270 -1243 b 153 -941 270 -1122 228 -1019 b -9 -868 115 -901 58 -876 b -21 -866 -14 -868 -19 -866 l -24 -866 l -24 -738 l -24 -611 l -20 -611 b -1 -625 -12 -611 -4 -616 b 142 -819 13 -665 74 -750 b 257 -979 196 -873 228 -919 b 264 -990 261 -984 264 -990 l 264 -990 b 265 -977 264 -990 264 -984 b 270 -920 268 -959 270 -940 b 153 -638 270 -819 228 -716 b -9 -565 115 -598 58 -573 b -21 -563 -14 -565 -19 -563 l -24 -563 l -24 -436 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 142 -516 13 -363 74 -447 b 257 -676 196 -572 228 -616 b 264 -687 261 -681 264 -687 l 264 -687 b 265 -675 264 -687 264 -681 b 270 -618 268 -656 270 -637 b 153 -336 270 -516 228 -413 b -9 -262 115 -295 58 -270 b -21 -261 -14 -262 -19 -261 l -24 -261 l -24 -133 "},
"\ue104":{width:142,c:-372.21875,e:-166.0625,d:370.828125,f:-25.859375,name:"accidentals.leftparen",h:0,height:744,g:"m -49 369 b -42 370 -46 369 -44 370 b -27 361 -36 370 -29 366 b -25 355 -27 359 -25 358 b -32 336 -25 351 -28 347 b -92 52 -66 248 -87 159 b -93 -1 -93 43 -93 20 b -92 -54 -93 -23 -93 -45 b -32 -337 -85 -162 -66 -251 b -25 -355 -27 -350 -25 -352 b -42 -372 -25 -365 -32 -372 b -61 -354 -50 -372 -51 -369 b -163 -63 -119 -262 -153 -165 b -166 -1 -166 -37 -166 -31 b -163 62 -166 30 -166 36 b -61 352 -153 163 -119 261 b -49 369 -54 365 -51 366 "},
"\ue150":{width:329,c:-463.890625,e:-1.359375,d:694.453125,f:326.671875,name:"accidentals.natural.arrowup",h:333,height:1159,g:"m 99 693 b 107 694 102 693 104 694 b 121 688 112 694 117 691 b 126 673 123 686 125 683 b 209 461 141 598 172 519 l 215 451 l 215 445 l 215 445 b 197 426 215 434 206 426 b 186 430 194 426 190 427 b 133 450 170 440 152 447 b 127 451 130 450 129 451 b 126 450 126 451 126 451 b 127 447 126 450 127 448 b 127 325 127 444 127 425 b 129 205 127 259 129 205 b 215 227 129 205 167 215 b 308 250 283 244 300 250 b 315 247 311 250 313 248 b 325 237 319 245 323 241 l 326 233 l 326 -106 l 326 -448 l 325 -451 b 306 -463 321 -459 314 -463 b 287 -451 298 -463 291 -459 l 285 -448 l 285 -325 b 284 -201 285 -248 284 -201 b 197 -223 284 -201 245 -211 b 104 -245 129 -240 111 -245 b 98 -243 102 -245 100 -244 b 88 -233 93 -241 89 -237 l 87 -230 l 87 106 b 87 262 87 169 87 220 b 87 447 87 415 87 444 b 88 450 88 448 88 450 b 87 451 88 451 88 451 b 81 450 85 451 84 451 b 27 430 62 447 44 440 b 16 426 24 427 20 426 b -1 445 6 426 -1 434 b 0 445 -1 445 0 445 l 0 451 l 5 461 b 87 669 40 519 69 590 b 99 693 91 686 92 688 m 284 22 b 285 70 285 41 285 58 b 284 116 285 113 284 116 l 284 116 b 205 97 283 116 247 106 l 127 77 l 127 -18 b 129 -112 127 -69 129 -112 l 206 -93 l 284 -73 l 284 22 "},
"\ue135":{width:608,c:-229.171875,e:0,d:633.328125,f:607.0625,name:"accidentals.mirroredflat.flat",h:619,height:864,g:"m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 m 347 631 b 353 633 348 633 351 633 b 374 620 363 633 371 629 b 375 383 375 616 375 616 l 375 148 l 377 151 b 492 200 415 183 454 200 b 537 191 507 200 522 197 b 607 84 582 176 607 134 b 583 0 607 58 598 29 b 455 -143 562 -40 533 -72 l 378 -215 b 355 -229 364 -229 362 -229 b 334 -216 345 -229 337 -225 l 333 -212 l 333 201 l 333 616 l 334 620 b 347 631 337 625 341 630 m 465 131 b 451 133 461 133 455 133 b 445 133 449 133 446 133 b 379 87 419 129 396 113 l 375 80 l 375 -37 l 375 -156 l 378 -152 b 499 81 451 -72 499 20 l 499 83 b 465 131 499 113 490 126 "},
"\ue121":{width:623,c:-391.671875,e:-311.6875,d:390.28125,f:310.328125,name:"scripts.varcoda",h:317,height:783,g:"m -9 388 b -2 390 -8 390 -5 390 b 5 388 1 390 4 390 b 19 379 10 387 16 383 b 23 333 23 372 23 372 l 23 329 l 23 290 l 27 290 b 172 275 62 290 129 283 b 200 259 191 270 196 268 b 215 40 204 250 215 102 b 215 26 215 33 215 26 l 216 25 l 253 25 l 255 25 b 299 19 292 25 292 23 b 310 -1 306 15 310 6 b 299 -23 310 -11 306 -19 b 255 -27 292 -27 292 -27 l 253 -27 l 216 -27 l 215 -30 b 215 -55 215 -31 215 -43 b 202 -244 213 -111 209 -179 b 174 -277 200 -270 198 -273 b 40 -294 132 -286 87 -291 l 23 -294 l 23 -331 b 23 -340 23 -334 23 -337 b 17 -381 23 -376 23 -375 b -1 -391 13 -388 5 -391 b -21 -381 -9 -391 -17 -388 b -27 -340 -27 -375 -27 -376 b -27 -331 -27 -337 -27 -334 l -27 -294 l -44 -294 b -178 -277 -91 -291 -136 -286 b -205 -258 -198 -273 -204 -270 b -219 -44 -210 -215 -219 -94 b -219 -29 -219 -37 -219 -30 l -220 -27 l -255 -27 l -258 -27 b -300 -23 -294 -27 -294 -27 b -311 -2 -307 -19 -311 -11 b -294 23 -311 8 -304 19 b -255 25 -291 23 -284 25 l -220 25 l -219 26 b -219 40 -219 26 -219 33 b -204 259 -219 104 -208 250 b -176 275 -200 268 -196 270 b -31 290 -133 283 -66 290 l -27 290 l -27 329 b -27 372 -27 361 -27 369 b -9 388 -24 379 -17 386 m -27 136 l -27 247 l -28 247 b -103 233 -46 245 -100 236 b -107 197 -103 233 -106 218 b -115 52 -111 147 -114 94 b -115 27 -115 40 -115 29 l -115 25 l -72 25 l -27 25 l -27 136 m 34 245 b 24 247 28 247 24 247 b 23 136 24 247 23 197 l 23 25 l 68 25 l 111 25 l 111 27 b 111 52 111 29 111 40 b 103 197 110 94 107 147 b 99 233 102 218 100 233 b 34 245 98 236 54 244 m -27 -140 l -27 -27 l -72 -27 l -115 -27 l -115 -30 b -115 -56 -115 -33 -115 -44 b -107 -201 -114 -98 -111 -151 b -103 -237 -106 -222 -103 -237 b -28 -251 -100 -240 -40 -251 b -27 -140 -28 -251 -27 -201 m 111 -30 l 111 -27 l 68 -27 l 23 -27 l 23 -140 b 24 -251 23 -201 24 -251 b 99 -237 36 -251 96 -240 b 103 -201 100 -237 102 -222 b 111 -56 107 -151 110 -98 b 111 -30 111 -44 111 -33 "},
"\ue113":{width:623,c:-280.5625,e:0,d:419.4375,f:622.03125,name:"scripts.caesura.straight",h:635,height:701,g:"m 398 418 b 406 419 401 419 404 419 b 427 398 417 419 427 409 b 427 391 427 395 427 393 b 34 -275 424 386 38 -272 b 20 -280 29 -279 25 -280 b 0 -259 9 -280 0 -270 b 0 -252 0 -256 0 -254 b 393 413 2 -247 389 411 b 398 418 394 415 397 416 m 592 418 b 600 419 594 419 597 419 b 622 398 611 419 622 409 b 620 391 622 395 620 393 b 227 -275 617 386 231 -272 b 213 -280 223 -279 219 -280 b 193 -259 202 -280 193 -270 b 194 -252 193 -256 193 -254 b 586 413 196 -247 582 411 b 592 418 588 415 590 416 "},
"\ue156":{width:294,c:-1.390625,e:0,d:381.9375,f:294,name:"pedal.e",h:300,height:384,g:"m 138 381 b 147 381 141 381 144 381 b 221 300 191 381 221 341 b 194 238 221 279 213 255 b 159 211 190 234 161 212 b 78 148 157 209 81 151 b 78 148 78 148 78 148 b 95 106 78 144 88 119 b 121 77 103 88 108 83 b 156 69 132 72 144 69 b 259 127 193 69 232 91 b 273 140 266 137 269 138 b 279 141 274 141 276 141 b 294 125 287 141 294 134 b 292 118 294 123 294 120 b 255 66 289 113 261 72 b 126 -1 220 22 171 -1 b 47 27 96 -1 69 8 b 2 133 31 43 9 93 b 0 180 0 150 0 165 b 53 326 0 237 17 288 b 103 366 59 331 91 358 b 138 381 112 373 129 380 m 126 326 b 118 326 123 326 121 326 b 98 316 110 326 103 323 b 68 215 78 288 68 255 b 68 208 68 213 68 211 b 70 183 69 195 69 184 l 70 183 b 93 201 70 183 81 191 l 133 231 b 159 259 152 247 155 248 b 163 279 161 266 163 272 b 126 326 163 300 148 320 "},
"\ue178":{width:368,c:-188.890625,e:0,d:187.5,f:367.5,name:"accidentals.doublesharp",h:375,height:377,g:"m 0 125 l 0 187 l 61 187 l 122 187 l 122 138 l 122 91 l 153 61 l 183 30 l 213 61 l 243 91 l 243 138 l 243 187 l 306 187 l 367 187 l 367 125 l 367 61 l 321 61 l 274 61 l 243 30 l 213 0 l 243 -31 l 274 -62 l 321 -62 l 367 -62 l 367 -125 l 367 -188 l 306 -188 l 243 -188 l 243 -140 l 243 -93 l 213 -62 l 183 -31 l 153 -62 l 122 -93 l 122 -140 l 122 -188 l 61 -188 l 0 -188 l 0 -125 l 0 -62 l 46 -62 l 92 -62 l 123 -31 l 153 0 l 123 30 l 92 61 l 46 61 l 0 61 l 0 125 "},
"\ue106":{width:171,c:-11.109375,e:58.53125,d:373.609375,f:228.671875,name:"scripts.arpeggio",h:294,height:386,g:"m 138 372 b 142 373 140 372 141 373 b 178 343 149 373 156 366 b 228 251 217 297 228 279 b 228 244 228 248 228 247 b 176 147 227 212 212 184 b 123 73 152 122 132 93 b 121 62 122 70 121 66 b 145 13 121 48 129 31 b 153 -2 151 6 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 145 -11 b 129 -1 140 -11 136 -8 b 61 87 89 37 68 68 b 58 113 59 95 58 105 b 110 215 58 144 74 177 b 163 287 134 240 155 269 b 166 300 166 291 166 295 b 141 348 166 313 157 330 b 133 361 134 356 133 358 b 133 363 133 362 133 362 b 138 372 133 368 136 370 "},
"\ue136":{width:506,c:-229.171875,e:-21.78125,d:633.328125,f:483.1875,name:"accidentals.M4",h:493,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 179 164 200 187 193 l 210 176 l 210 397 l 210 618 l 212 622 b 231 633 216 629 223 633 b 250 620 239 633 247 629 b 251 383 251 616 251 616 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "},
"\ue164":{width:350,c:-273.609375,e:0,d:304.171875,f:349.8125,name:"rests.3",h:357,height:579,g:"m 88 302 b 103 304 93 302 98 304 b 202 225 149 304 191 270 b 205 200 204 216 205 208 b 178 129 205 173 196 147 l 175 126 l 182 127 b 307 250 236 143 284 190 b 313 259 308 254 311 258 b 329 268 317 265 323 268 b 349 247 340 268 349 259 b 201 -263 349 243 204 -258 b 182 -273 197 -270 190 -273 b 163 -261 174 -273 166 -269 b 161 -256 161 -259 161 -258 b 217 -59 161 -248 170 -220 b 272 129 247 43 272 127 b 272 129 272 129 272 129 b 264 122 272 129 268 126 b 140 80 227 94 183 80 b 36 115 102 80 65 91 b 0 194 10 136 0 165 b 88 302 0 244 32 293 "},
"\ue155":{width:463,c:-1.390625,e:0,d:597.21875,f:462.78125,name:"pedal.d",h:472,height:600,g:"m 8 595 b 14 597 10 597 12 597 b 50 591 21 597 29 595 b 455 248 255 544 420 405 b 462 191 460 229 462 209 b 321 0 462 94 404 9 b 300 -1 314 -1 307 -1 b 149 168 215 -1 149 69 b 294 387 149 258 201 337 b 296 390 295 388 296 388 b 289 398 296 391 294 393 b 21 561 225 477 130 536 b 2 569 9 563 5 566 b 0 580 0 573 0 576 b 8 595 0 587 2 593 m 325 348 b 321 354 322 351 322 354 b 313 348 319 354 317 351 b 223 168 255 306 223 237 b 227 125 223 154 224 138 b 289 31 236 79 261 40 b 295 31 291 31 294 31 b 355 104 315 31 338 59 b 368 191 364 129 368 159 b 364 241 368 208 367 225 b 325 348 357 277 344 313 "},
"\ue18e":{width:310,c:-355.5625,e:-155.171875,d:26.390625,f:153.8125,name:"arrowheads.open.11",h:157,height:383,g:"m -9 25 b 0 26 -5 25 -2 26 b 25 2 12 26 21 16 l 29 -19 b 144 -304 54 -125 96 -229 b 153 -329 153 -319 153 -322 b 127 -355 153 -344 142 -355 b 100 -334 115 -355 111 -351 b 6 -130 62 -275 31 -206 b -1 -108 2 -118 0 -108 b -8 -130 -1 -108 -4 -118 b -102 -334 -32 -206 -63 -275 b -129 -355 -112 -351 -117 -355 b -155 -329 -144 -355 -155 -344 b -145 -304 -155 -322 -155 -319 b -31 -19 -98 -229 -55 -125 l -27 2 b -9 25 -24 13 -17 22 "},
"\ue17b":{width:136,c:-69.4375,e:-68.0625,d:68.0625,f:66.6875,name:"scripts.staccato",h:68,height:139,g:"m -12 66 b -1 68 -9 68 -5 68 b 55 37 20 68 43 56 b 66 -1 62 26 66 12 b 36 -58 66 -23 55 -44 b 0 -69 25 -65 12 -69 b -57 -38 -21 -69 -43 -58 b -68 -1 -63 -27 -68 -13 b -12 66 -68 30 -46 61 "},"\ue186":{width:340,c:-1713.890625,e:-24.5,d:-5.5625,f:314.421875,name:"flags.u6",h:321,height:1709,g:"m -24 -145 l -24 -5 l -20 -5 b 0 -23 -9 -5 -2 -12 b 27 -87 4 -38 14 -66 b 138 -220 53 -136 88 -177 b 235 -329 179 -255 208 -288 b 314 -593 287 -409 314 -501 b 292 -733 314 -640 307 -687 l 289 -743 l 294 -756 b 314 -897 307 -802 314 -850 b 292 -1036 314 -944 307 -991 l 289 -1045 l 294 -1058 b 314 -1198 307 -1105 314 -1152 b 292 -1338 314 -1247 307 -1293 l 289 -1348 l 294 -1361 b 314 -1501 307 -1408 314 -1455 b 273 -1690 314 -1566 300 -1629 b 250 -1713 265 -1711 261 -1713 b 228 -1693 236 -1713 228 -1705 l 228 -1686 l 234 -1676 b 270 -1508 258 -1622 270 -1565 b 98 -1194 270 -1381 209 -1262 b 40 -1175 76 -1180 58 -1175 b -10 -1190 24 -1175 8 -1179 b -20 -1193 -14 -1193 -16 -1193 l -24 -1193 l -24 -1052 l -24 -913 l -20 -913 b 0 -931 -9 -913 -2 -920 b 27 -995 4 -947 14 -975 b 138 -1129 53 -1044 88 -1086 b 257 -1276 190 -1173 228 -1220 b 262 -1284 259 -1280 262 -1284 l 262 -1284 b 269 -1250 264 -1283 268 -1261 b 270 -1206 270 -1234 270 -1220 b 98 -891 270 -1076 206 -958 b 40 -872 76 -877 58 -872 b -10 -887 24 -872 8 -876 b -20 -890 -14 -890 -16 -890 l -24 -890 l -24 -750 l -24 -611 l -20 -611 b 0 -629 -9 -611 -2 -618 b 27 -693 4 -644 14 -672 b 138 -826 53 -741 88 -783 b 257 -973 190 -870 228 -918 b 262 -981 259 -977 262 -981 l 262 -981 b 269 -947 264 -980 268 -958 b 270 -904 270 -931 270 -918 b 98 -588 270 -775 206 -655 b 40 -569 76 -575 58 -569 b -10 -584 24 -569 8 -575 b -20 -587 -14 -587 -16 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 0 -326 -9 -308 -2 -315 b 27 -390 4 -341 14 -369 b 138 -523 53 -438 88 -480 b 257 -670 190 -568 228 -615 b 262 -679 259 -675 262 -679 b 262 -679 262 -679 262 -679 b 269 -644 264 -677 268 -656 b 270 -601 270 -629 270 -615 b 98 -286 270 -472 206 -352 b 40 -266 76 -273 58 -266 b -10 -281 24 -266 8 -272 b -20 -284 -14 -284 -16 -284 l -24 -284 l -24 -145 "},
"\ue161":{width:755,c:-958.328125,e:-1.359375,d:987.5,f:752.703125,name:"rests.7",h:768,height:1947,g:"m 490 986 b 504 987 495 987 500 987 b 604 908 551 987 593 955 b 607 884 607 901 607 893 b 581 813 607 858 597 831 l 578 811 l 583 812 b 710 933 638 827 687 873 b 714 944 711 937 713 943 b 730 952 720 950 725 952 b 752 931 741 952 752 944 b 200 -947 752 927 204 -941 b 182 -958 197 -954 190 -958 b 163 -945 174 -958 166 -954 b 161 -940 161 -943 161 -943 b 217 -744 161 -931 170 -905 b 272 -555 247 -640 272 -555 b 272 -555 272 -555 272 -555 b 264 -561 272 -555 268 -558 b 140 -604 227 -590 182 -604 b 36 -568 102 -604 65 -593 b -1 -487 12 -548 -1 -518 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -554 205 -509 196 -536 l 175 -558 l 182 -555 b 307 -436 236 -540 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -250 b 99 -145 112 -206 99 -176 b 118 -84 99 -125 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -125 b 279 -212 306 -168 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 218 206 238 b 304 304 239 287 272 304 b 393 250 338 304 374 286 b 406 200 402 234 406 218 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 143 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 465 574 470 570 468 b 442 422 529 436 484 422 b 337 458 404 422 367 433 b 300 538 314 477 300 508 b 318 598 300 559 306 580 b 404 645 340 630 372 645 b 494 593 439 645 475 627 b 507 541 502 577 507 559 b 480 472 507 516 498 490 l 477 468 l 483 470 b 608 590 537 486 586 531 b 675 812 611 595 675 811 b 675 812 675 812 675 812 b 666 806 675 812 671 809 b 543 763 628 777 585 763 b 438 800 504 763 468 776 b 401 879 412 820 401 850 b 490 986 401 929 434 977 "},
"\ue12a":{width:273,c:-229.171875,e:0,d:633.328125,f:272.21875,name:"accidentals.M1",h:278,height:864,g:"m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "},
"\ue123":{width:781,c:0,e:-390.640625,d:652.78125,f:389.28125,name:"scripts.ushortfermata",h:397,height:653,g:"m -9 651 b -1 652 -6 651 -4 652 b 19 640 6 652 13 648 l 23 631 b 28 623 24 629 27 626 l 34 615 l 39 606 l 43 598 l 49 588 l 54 580 l 59 572 l 65 563 l 69 555 l 74 547 l 80 537 l 85 529 b 89 520 87 526 89 523 l 95 512 l 100 504 l 106 494 l 111 487 l 115 479 l 121 470 l 126 462 l 130 454 l 136 445 l 141 437 l 147 427 l 151 419 l 156 411 l 161 402 l 167 394 l 172 386 l 176 376 b 182 368 179 375 181 370 l 187 359 l 193 351 l 198 343 l 202 334 l 208 326 l 212 318 l 217 309 l 223 301 l 228 293 l 234 284 l 238 275 l 243 266 l 249 258 l 254 250 l 259 241 l 264 233 l 269 225 b 274 216 270 222 273 218 l 280 206 l 285 198 l 295 180 l 299 175 l 304 165 l 310 156 l 315 148 l 321 140 l 325 131 l 330 123 l 336 113 l 341 105 l 347 97 l 351 88 l 356 80 l 360 72 b 364 66 362 70 363 68 b 370 58 366 65 368 61 l 379 41 b 389 19 386 31 389 25 b 382 4 389 13 386 8 b 347 0 377 0 378 0 b 337 0 344 0 340 0 b 336 0 336 0 336 0 b 287 11 294 0 294 0 l 281 19 l 276 27 l 272 37 l 266 45 l 261 54 l 255 62 l 250 70 l 246 79 l 240 87 l 235 97 l 230 105 l 224 113 l 220 122 l 215 130 l 209 140 l 204 148 l 200 155 l 194 163 b 189 172 193 165 191 169 l 185 180 l 179 188 l 174 198 l 168 206 l 163 215 l 159 223 l 153 231 l 148 240 l 142 250 l 138 258 l 133 266 l 127 275 l 122 283 l 117 293 l 111 301 l 107 308 l 102 316 b 98 325 102 318 99 322 l 92 333 l 87 341 l 81 350 l 77 359 l 72 368 l 66 376 l 61 384 l 55 393 l 51 401 l 46 411 l 40 419 l 35 427 l 31 436 l 24 444 l 20 454 l 14 461 l 10 469 b 5 477 9 470 6 475 l 0 486 l -5 494 l -9 502 l -14 512 b -20 519 -16 513 -19 518 l -24 526 l -28 534 b -31 537 -29 536 -31 537 b -35 533 -32 537 -32 536 l -88 444 l -187 280 l -285 118 l -343 23 b -362 1 -352 6 -356 2 b -368 0 -364 0 -367 0 b -390 20 -381 0 -390 8 l -390 20 b -359 77 -390 27 -390 27 l -80 540 l -25 631 b -9 651 -17 644 -13 648 m -13 133 b -1 134 -9 133 -5 134 b 50 105 19 134 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 70 -57 40 -62 55 b -13 133 -62 98 -44 126 "},
"\ue116":{width:874,c:-705.5625,e:0,d:704.171875,f:873.828125,name:"clefs.C",h:892,height:1411,g:"m 0 0 l 0 704 l 81 704 l 164 704 l 164 0 l 164 -705 l 81 -705 l 0 -705 l 0 0 m 225 0 l 225 704 l 246 704 l 268 704 l 268 366 l 268 30 l 274 36 b 314 79 284 44 302 63 b 413 302 357 137 392 213 b 432 327 419 325 421 327 b 449 306 443 327 447 322 b 611 115 457 195 529 115 b 651 122 624 115 638 118 b 728 316 705 140 724 188 b 729 388 728 343 729 366 b 671 636 729 533 711 602 b 581 662 649 652 616 662 b 477 637 545 662 510 654 l 475 636 l 477 634 b 503 627 488 633 495 631 b 545 556 532 612 545 584 b 491 480 545 525 526 491 b 465 475 481 476 473 475 b 379 563 417 475 379 516 b 389 602 379 576 382 588 b 541 691 409 641 479 681 b 582 694 555 693 568 694 b 865 462 714 694 834 598 b 873 393 871 440 873 416 b 865 318 873 368 871 341 b 639 84 839 194 748 101 b 612 83 630 83 620 83 b 511 116 577 83 543 94 b 504 120 509 119 506 120 b 504 120 504 120 504 120 b 469 59 504 120 488 93 l 432 -1 l 469 -61 b 504 -122 488 -94 504 -122 b 504 -122 504 -122 504 -122 b 511 -118 506 -122 509 -120 b 612 -84 543 -95 577 -84 b 665 -91 630 -84 647 -87 b 869 -338 771 -122 850 -216 b 873 -393 872 -356 873 -375 b 798 -595 873 -469 847 -540 b 581 -695 741 -662 660 -695 b 406 -626 517 -695 454 -672 b 381 -563 389 -608 381 -586 b 465 -477 381 -519 413 -477 b 545 -559 514 -477 545 -519 b 503 -629 545 -587 532 -613 b 477 -636 495 -633 488 -634 l 475 -637 l 477 -638 b 581 -663 510 -655 545 -663 b 671 -637 616 -663 649 -654 b 729 -391 711 -604 729 -534 b 728 -318 729 -368 728 -344 b 623 -118 722 -173 698 -125 b 611 -116 619 -116 615 -116 b 449 -308 528 -116 457 -198 b 432 -329 447 -323 443 -329 b 413 -304 421 -329 419 -326 b 314 -80 392 -215 357 -138 b 274 -37 302 -65 284 -45 l 268 -31 l 268 -368 l 268 -705 l 246 -705 l 225 -705 l 225 0 "},
"\ue131":{width:361,c:-513.890625,e:-108.890625,d:865.28125,f:251.8125,name:"accidentals.flat.arrowboth",h:257,height:1380,g:"m -8 863 b 0 865 -5 865 -2 865 b 12 859 4 865 9 863 b 19 844 16 856 16 854 b 102 631 34 769 65 690 l 107 622 l 107 616 l 107 616 b 89 597 107 605 99 597 b 78 601 85 597 83 598 b 47 615 69 606 55 612 b 19 622 39 618 21 622 b 19 622 19 622 19 622 b 19 619 19 622 19 620 b 20 383 20 616 20 586 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 93 -148 206 -40 179 -70 l 38 -200 l 23 -215 l 20 -218 l 20 -241 b 19 -268 20 -261 20 -266 b 19 -270 19 -269 19 -270 b 19 -270 19 -270 19 -270 b 47 -263 21 -270 39 -266 b 78 -250 55 -261 69 -255 b 89 -247 83 -247 85 -247 b 107 -265 99 -247 107 -254 l 107 -265 l 107 -270 l 102 -280 b 19 -493 65 -338 34 -418 b 0 -513 14 -508 10 -513 b -20 -488 -12 -513 -16 -508 b -103 -280 -38 -409 -66 -338 l -108 -270 l -108 -265 l -108 -265 b -91 -247 -108 -254 -100 -247 b -80 -250 -87 -247 -84 -247 b -49 -263 -70 -255 -57 -261 b -20 -270 -40 -266 -23 -270 b -20 -270 -20 -270 -20 -270 b -20 -268 -20 -270 -20 -269 b -21 175 -21 -266 -21 -208 b -20 619 -21 559 -21 616 b -20 622 -20 620 -20 622 b -20 622 -20 622 -20 622 b -49 615 -23 622 -40 618 b -80 601 -57 612 -70 606 b -91 597 -84 598 -87 597 b -108 616 -100 597 -108 605 l -108 616 l -108 622 l -103 631 b -20 840 -66 690 -38 761 b -8 863 -17 856 -14 859 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
"\ue142":{width:427,c:-251.390625,e:-209.609375,d:20.828125,f:208.25,name:"scripts.dportato",h:213,height:273,g:"m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -5 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -5 b -197 19 -209 6 -205 15 m -12 -113 b -1 -113 -9 -113 -5 -113 b 55 -144 20 -113 43 -125 b 66 -181 62 -155 66 -169 b 27 -244 66 -208 53 -233 b 0 -251 19 -248 9 -251 b -57 -220 -21 -251 -43 -240 b -68 -181 -63 -208 -68 -195 b -12 -113 -68 -151 -46 -120 "},
"\ue1a5":{width:439,c:-206.9375,e:0,d:205.5625,f:438.28125,name:"noteheads.u1triangle",h:447,height:413,g:"m 212 205 b 219 205 213 205 216 205 b 239 183 228 205 231 204 b 421 -163 298 40 363 -83 b 438 -191 434 -180 438 -186 b 436 -197 438 -193 438 -195 b 424 -206 434 -204 431 -206 b 406 -201 420 -206 415 -205 b 216 -156 347 -172 281 -156 b 23 -205 148 -156 80 -173 b 14 -206 20 -206 17 -206 b 0 -191 6 -206 0 -201 b 6 -176 0 -187 1 -183 b 202 193 63 -104 142 45 b 212 205 205 200 208 202 m 264 48 l 249 81 l 243 94 l 242 91 b 89 -126 208 36 137 -66 b 81 -138 85 -133 81 -138 b 81 -138 81 -138 81 -138 b 81 -138 81 -138 81 -138 b 95 -133 81 -138 87 -136 b 280 -94 156 -108 221 -94 b 334 -98 299 -94 317 -95 b 343 -100 338 -100 343 -100 b 343 -100 343 -100 343 -100 b 338 -94 343 -100 341 -97 b 264 48 318 -58 287 1 "},
kn:{width:408,c:-1.390625,e:78.9375,d:380.5625,f:485.921875,name:"r",h:417,height:383,g:"m 362 379 b 378 380 367 380 372 380 b 472 348 415 380 453 368 b 485 315 481 338 485 327 b 462 273 485 298 477 281 b 439 268 454 269 446 268 b 398 290 424 268 409 275 b 344 319 385 309 364 319 b 281 269 315 319 289 301 b 279 262 280 266 279 262 b 276 256 279 261 277 258 b 274 250 276 254 274 251 b 238 127 273 248 257 193 b 201 4 217 61 201 5 b 166 -1 198 -1 200 -1 b 153 -1 163 -1 157 -1 b 141 -1 148 -1 144 -1 b 104 4 106 -1 107 -1 b 104 6 104 5 104 5 b 142 144 104 13 110 34 b 182 279 164 219 181 276 b 183 288 182 281 182 286 b 185 302 185 293 185 298 b 164 330 185 318 176 329 b 159 330 163 330 161 330 b 102 302 140 330 119 320 b 91 294 95 295 93 294 b 88 294 91 294 89 294 b 78 304 83 294 78 298 b 81 312 78 306 78 309 b 200 373 106 347 160 373 b 215 372 205 373 209 372 b 266 336 235 368 254 354 b 269 331 268 333 269 331 b 269 331 269 331 269 331 b 273 336 269 331 270 334 b 362 379 298 359 330 376 "},
"\ue110":{width:160,c:-194.4375,e:-80.3125,d:193.0625,f:78.9375,name:"scripts.rvarcomma",h:81,height:389,g:"m 23 191 b 32 193 27 193 29 193 b 78 145 57 193 78 172 b 78 140 78 143 78 141 b -10 -72 78 133 70 116 l -50 -165 b -70 -194 -63 -194 -63 -194 b -80 -184 -77 -194 -80 -193 b -76 -159 -80 -179 -78 -172 l -68 -116 b -12 159 -51 -31 -13 156 b 23 191 -6 176 6 188 "},"\ue10e":{width:228,c:-216.671875,e:0,d:215.28125,f:227.3125,name:"scripts.rcomma",h:232,height:433,g:"m 91 213 b 100 215 93 215 96 215 b 227 58 167 215 224 144 b 227 52 227 56 227 54 b 61 -201 227 -43 164 -138 b 29 -216 44 -212 36 -216 b 23 -211 27 -216 24 -213 b 21 -205 21 -208 21 -206 b 34 -193 21 -201 25 -197 b 122 -55 89 -161 122 -106 b 104 6 122 -33 117 -12 l 103 9 l 96 9 b 4 79 57 9 17 38 b 0 112 1 90 0 101 b 91 213 0 163 36 209 "},
"\ue14a":{width:1195,c:-176.390625,e:-597.53125,d:327.78125,f:596.171875,name:"scripts.downprall",h:608,height:505,g:"m -533 325 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 318 b -504 305 -504 305 -504 305 b -513 284 -504 300 -504 300 b -556 112 -541 226 -556 168 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 175 -367 169 -363 175 b -351 175 -353 175 -352 175 b -254 86 -343 175 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 175 -21 175 -20 175 b -8 173 -14 175 -10 173 b 80 86 -5 172 13 151 b 166 -1 127 37 166 -1 b 235 84 166 -1 197 37 b 311 173 306 173 304 172 b 317 175 313 175 314 175 b 326 173 319 175 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 75 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -175 409 -176 b 396 -175 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 152 -86 221 -1 190 -38 b 76 -176 81 -175 83 -173 b 70 -176 74 -176 73 -176 b 61 -175 66 -176 62 -175 b -27 -87 58 -173 38 -152 b -114 -1 -74 -38 -112 -1 b -182 -86 -114 -1 -145 -38 b -258 -176 -253 -175 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -175 -268 -176 -272 -175 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -75 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 225 b -533 325 -548 311 -540 322 "},
"\ue16b":{width:340,c:-569.4375,e:-170.140625,d:0,f:168.78125,name:"scripts.dmarcato",h:172,height:570,g:"m -160 -1 b -122 -1 -159 -1 -149 -1 l -87 -1 l -84 -2 b -74 -15 -78 -4 -77 -6 b -20 -201 -73 -18 -49 -102 b 31 -383 8 -301 31 -383 b 85 -197 31 -383 55 -300 b 140 -9 114 -95 138 -11 b 153 0 141 -4 148 0 b 168 -9 159 0 166 -4 b 168 -12 168 -11 168 -11 b 92 -287 168 -20 159 -55 b 14 -555 50 -434 14 -555 b 0 -569 14 -562 6 -569 b -17 -554 -8 -569 -17 -561 b -93 -286 -17 -552 -51 -433 b -170 -16 -166 -36 -170 -20 b -170 -15 -170 -15 -170 -15 b -160 -1 -170 -8 -167 -4 "},
"\ue189":{width:557,c:-548.609375,e:0,d:547.21875,f:556.6875,name:"timesig.C22",h:568,height:1097,g:"m 289 545 b 298 547 292 545 295 547 b 318 533 306 547 315 541 b 319 429 319 530 319 529 l 319 327 l 334 327 b 526 223 412 326 485 286 b 543 172 537 206 543 190 b 447 76 543 122 503 76 b 445 76 446 76 446 76 b 359 165 394 77 359 119 b 368 205 359 179 362 193 b 441 251 382 233 412 251 b 455 250 446 251 451 251 b 460 248 458 250 460 248 b 460 248 460 248 460 248 b 454 254 460 250 458 251 b 334 295 419 280 378 294 l 319 295 l 319 4 l 319 -287 l 321 -286 b 328 -286 322 -286 325 -286 b 524 -100 424 -277 507 -198 b 541 -79 526 -84 530 -79 b 556 -97 551 -79 556 -84 b 548 -133 556 -105 553 -118 b 334 -318 521 -233 434 -306 b 322 -319 329 -318 323 -318 l 319 -319 l 319 -425 b 319 -472 319 -444 319 -459 b 313 -541 319 -544 318 -536 b 298 -548 308 -545 303 -548 b 279 -534 289 -548 281 -543 b 277 -425 277 -531 277 -530 l 277 -318 l 273 -318 b 13 -95 153 -305 51 -218 b 0 2 4 -62 0 -29 b 182 295 0 126 66 238 b 274 325 210 309 249 320 l 277 325 l 277 427 b 279 533 277 529 277 530 b 289 545 281 538 285 543 m 277 2 b 277 291 277 161 277 291 b 268 288 277 291 273 290 b 144 1 179 265 144 184 b 276 -284 144 -200 175 -268 l 277 -286 l 277 2 "},
"\ue132":{width:429,c:-229.171875,e:-176.9375,d:633.328125,f:251.8125,name:"accidentals.flat.slash",h:257,height:864,g:"m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 504 20 616 20 615 b 20 391 20 443 20 391 b 84 425 20 391 49 406 l 147 456 l 152 456 b 153 456 153 456 153 456 b 175 436 166 456 175 447 b 172 427 175 433 174 430 b 92 380 170 420 172 422 l 20 343 l 20 245 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 b -21 54 -21 -212 -21 -212 b -21 322 -21 201 -21 322 b -85 290 -21 322 -50 308 l -148 256 l -153 256 b -155 256 -155 256 -155 256 b -176 277 -167 256 -176 266 b -174 286 -176 280 -175 283 b -93 333 -171 294 -174 293 l -21 370 l -21 494 b -20 620 -21 616 -21 616 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "},
".":{width:176,c:54.171875,e:0,d:233.328125,f:175.578125,name:"period",h:179,height:180,g:"m 72 231 b 87 233 77 233 81 233 b 175 143 137 233 175 191 b 164 102 175 130 171 116 b 87 54 149 70 118 54 b 24 80 63 54 42 62 b 0 143 6 98 0 120 b 72 231 0 184 27 225 "},"\ue13c":{width:245,c:-148.609375,e:-122.5,d:147.21875,f:121.140625,name:"scripts.open",h:124,height:297,g:"m -16 145 b 0 147 -10 147 -5 147 b 121 -1 66 147 121 77 b 114 -50 121 -16 118 -33 b -1 -148 95 -112 47 -148 b -85 -106 -31 -148 -61 -134 b -122 -1 -110 -76 -122 -38 b -16 145 -122 68 -81 134 m 12 111 b 0 113 8 113 4 113 b -68 22 -29 113 -61 73 b -70 0 -69 15 -70 6 b -13 -113 -70 -50 -47 -98 b -1 -115 -9 -115 -5 -115 b 63 -40 24 -115 53 -83 b 68 -1 66 -27 68 -15 b 12 111 68 48 46 97 "},
sm:{width:717,c:-251.390625,e:-118.421875,d:575,f:597.53125,name:"f",h:381,height:827,g:"m 460 575 b 464 575 461 575 462 575 b 488 575 470 575 481 575 b 500 573 491 575 498 575 b 594 504 543 570 588 538 b 597 488 596 498 597 494 b 528 418 597 450 564 418 b 502 423 519 418 510 419 b 465 481 477 434 465 458 b 488 529 465 500 472 516 b 490 530 490 530 490 530 b 490 530 490 530 490 530 b 468 518 488 530 475 523 b 349 340 419 486 377 420 b 347 330 348 334 347 330 b 383 329 347 329 363 329 b 428 326 423 329 424 329 b 442 302 438 320 442 312 b 430 281 442 294 438 286 b 385 276 424 277 426 276 l 377 276 l 332 276 l 330 269 b 178 -118 303 126 250 -9 b 1 -250 129 -194 69 -237 b -20 -251 -6 -251 -13 -251 b -114 -187 -65 -251 -100 -227 b -118 -156 -117 -177 -118 -166 b -51 -84 -118 -116 -91 -84 b -31 -87 -46 -84 -39 -86 b 16 -152 0 -95 16 -125 b -12 -205 16 -173 8 -194 b -16 -208 -14 -206 -16 -208 b -14 -208 -16 -208 -14 -208 b -9 -206 -14 -208 -12 -208 b 74 -125 23 -197 54 -166 b 172 225 98 -79 125 22 b 185 276 178 252 183 275 b 185 276 185 276 185 276 b 141 276 185 276 181 276 b 91 280 96 276 96 276 b 77 302 83 286 77 294 b 91 326 77 312 83 320 b 148 329 95 329 96 329 l 198 330 l 202 341 b 460 575 249 474 351 566 "},
6:{width:476,c:-1.390625,e:0,d:673.609375,f:475.03125,name:"six",h:485,height:676,g:"m 255 648 b 274 648 259 648 266 648 b 314 647 288 648 307 648 b 450 555 374 637 438 594 b 454 530 453 547 454 538 b 375 451 454 486 416 451 b 328 468 359 451 343 455 b 300 526 310 483 300 504 b 352 598 300 558 319 590 b 356 600 355 598 356 600 b 352 602 356 600 355 601 b 288 616 330 612 308 616 b 210 584 257 616 230 605 b 164 433 189 559 174 508 b 160 375 163 415 160 381 b 160 375 160 375 160 375 b 160 375 160 375 160 375 b 168 377 160 375 164 376 b 258 395 200 390 228 395 b 366 368 294 395 328 387 b 475 223 436 333 475 283 b 472 197 475 215 473 206 b 349 65 462 141 419 95 b 259 43 317 51 288 43 b 167 69 230 43 200 52 b 4 290 80 113 20 195 b 0 350 1 309 0 329 b 20 468 0 391 6 433 b 255 648 58 563 155 637 m 269 363 b 257 363 265 363 261 363 b 210 345 236 363 220 356 b 186 226 196 325 186 272 b 187 198 186 216 186 206 b 213 95 191 151 202 112 b 257 76 221 83 238 76 b 270 77 261 76 266 76 b 321 156 299 81 310 100 b 329 229 326 183 329 206 b 321 301 329 252 326 275 b 269 363 311 343 298 359 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "},
"\ue1ae":{width:289,c:-343.0625,e:0,d:341.671875,f:288.5625,name:"noteheads.s2slash",h:294,height:686,g:"m 202 341 b 235 341 213 341 225 341 b 261 341 249 341 259 341 b 288 309 276 340 288 326 l 288 309 b 163 -320 288 305 166 -311 b 142 -341 160 -330 153 -337 b 83 -343 140 -343 111 -343 b 21 -341 54 -343 24 -343 b 0 -311 8 -337 0 -325 b 0 -311 0 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 202 341 147 341 151 341 "},"\ue192":{width:310,c:-355.5625,e:-155.171875,d:26.390625,f:153.8125,
name:"arrowheads.close.11",h:158,height:383,g:"m -8 25 b -1 26 -6 25 -4 26 b 21 12 8 26 17 20 b 27 -8 24 9 24 9 b 144 -304 50 -115 93 -227 b 153 -322 151 -315 152 -318 b 153 -330 153 -325 153 -327 b 129 -355 153 -344 142 -355 b 111 -351 123 -355 117 -354 b 0 -319 76 -330 38 -319 b -100 -344 -35 -319 -69 -327 b -112 -351 -104 -345 -110 -348 b -129 -355 -119 -355 -123 -355 b -155 -329 -144 -355 -155 -344 b -145 -304 -155 -322 -155 -319 b -28 -6 -95 -226 -53 -119 b -8 25 -24 13 -20 19 "},"\ue129":{width:781,
c:-577.78125,e:-390.640625,d:0,f:389.28125,name:"scripts.dverylongfermata",h:397,height:578,g:"m -378 -2 b -368 -1 -375 -1 -374 -1 b -349 -13 -360 -1 -353 -5 l -348 -16 l -348 -212 l -348 -408 l 0 -408 l 347 -408 l 347 -212 l 347 -16 l 348 -13 b 367 0 352 -5 360 0 b 387 -13 375 0 383 -5 l 389 -16 l 389 -288 l 389 -561 l 387 -565 b 377 -575 385 -569 381 -573 l 372 -577 l 0 -577 l -374 -577 l -378 -575 b -389 -565 -382 -573 -386 -569 l -390 -561 l -390 -288 l -390 -16 l -389 -13 b -378 -2 -386 -8 -382 -4 m -274 -2 b -266 -1 -272 -1 -270 -1 b -246 -13 -257 -1 -250 -5 l -245 -16 l -245 -109 l -245 -202 l 0 -202 l 243 -202 l 243 -109 l 245 -16 l 245 -13 b 265 0 249 -5 257 0 b 284 -13 272 0 280 -5 l 285 -16 l 285 -170 l 285 -325 l 284 -327 b 273 -338 281 -331 279 -336 l 269 -340 l 0 -340 l -270 -340 l -274 -338 b -285 -327 -280 -336 -283 -331 l -287 -325 l -287 -170 l -287 -16 l -285 -13 b -274 -2 -283 -8 -280 -4 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -58 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "},
3:{width:412,c:-1.390625,e:-1.359375,d:673.609375,f:409.6875,name:"three",h:418,height:676,g:"m 174 648 b 191 648 176 648 183 648 b 225 648 204 648 220 648 b 402 523 317 638 389 588 b 404 504 404 518 404 511 b 402 484 404 495 404 488 b 264 373 389 437 334 394 b 257 370 259 372 257 372 b 257 370 257 370 257 370 b 264 369 258 370 261 369 b 409 202 359 334 409 268 b 318 72 409 152 381 104 b 200 43 281 52 240 43 b 23 113 134 43 69 68 b 0 169 6 129 0 150 b 77 250 0 211 29 250 l 77 250 b 152 175 125 250 152 212 b 103 102 152 145 137 116 b 103 102 103 102 103 102 b 147 94 103 101 132 95 b 153 94 149 94 151 94 b 265 206 219 94 265 141 b 264 226 265 213 265 219 b 147 355 253 300 204 354 b 126 372 133 356 126 362 b 147 388 126 383 132 388 b 254 475 196 391 238 425 b 259 502 258 484 259 494 b 182 593 259 544 228 583 b 156 595 175 595 166 595 b 115 593 142 595 129 594 l 111 591 l 115 588 b 152 525 141 575 152 550 b 92 450 152 491 130 458 b 76 448 87 448 81 448 b -1 530 32 448 -1 488 b 20 581 -1 548 5 566 b 174 648 55 619 108 641 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "},
9:{width:476,c:-1.390625,e:0,d:673.609375,f:475.03125,name:"nine",h:485,height:676,g:"m 191 647 b 212 650 198 648 205 650 b 255 644 227 650 243 647 b 458 448 348 616 428 540 b 475 343 469 415 475 379 b 460 244 475 308 469 274 b 193 44 421 125 303 44 b 91 69 157 44 122 51 b 19 161 43 97 19 126 b 21 181 19 168 20 175 b 98 241 32 220 65 241 b 170 186 129 241 160 223 b 172 166 171 179 172 173 b 121 94 172 134 152 102 b 117 93 118 94 117 93 b 121 90 117 93 118 91 b 185 76 142 80 164 76 b 270 119 220 76 251 91 b 308 259 287 145 300 194 b 313 318 310 277 313 311 b 313 318 313 318 313 318 b 313 318 313 318 313 318 b 304 315 313 318 308 316 b 216 295 273 302 245 295 b 145 308 193 295 170 300 b 19 398 88 327 42 361 b 0 469 5 420 0 444 b 24 551 0 497 8 526 b 191 647 54 597 125 637 m 227 615 b 215 616 224 616 220 616 b 202 615 210 616 206 616 b 152 536 174 611 163 593 b 144 463 147 509 144 486 b 152 391 144 440 147 418 b 216 329 163 344 179 329 b 280 391 253 329 269 344 b 288 463 285 418 288 440 b 280 536 288 486 285 509 b 227 615 269 594 258 611 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "},
"\ue13d":{width:245,c:-237.5,e:-122.5,d:147.21875,f:121.140625,name:"scripts.thumb",h:124,height:386,g:"m -16 145 b -1 147 -10 147 -5 147 b 119 20 58 147 111 93 b 121 0 119 13 121 6 b 32 -143 121 -66 84 -125 l 24 -144 l 24 -180 b 24 -187 24 -183 24 -184 b 19 -227 24 -222 24 -220 b 0 -237 14 -234 6 -237 b -20 -227 -8 -237 -16 -234 b -25 -187 -25 -220 -25 -222 b -25 -180 -25 -184 -25 -183 l -25 -144 l -34 -143 b -122 0 -85 -125 -122 -66 b -121 20 -122 6 -121 13 b -16 145 -114 84 -70 137 m 12 111 b 0 113 8 113 4 113 b -68 22 -29 113 -61 73 b -69 0 -69 15 -69 6 b -13 -113 -69 -50 -46 -98 b -1 -115 -9 -115 -5 -115 b 63 -40 24 -115 53 -83 b 68 -1 66 -27 68 -15 b 12 111 68 48 46 97 "},
4:{width:469,c:-1.390625,e:0,d:673.609375,f:468.21875,name:"four",h:478,height:676,g:"m 174 637 b 232 638 175 638 189 638 b 277 638 245 638 259 638 l 378 638 l 381 636 b 389 623 386 633 389 627 b 382 609 389 618 386 613 b 366 590 381 606 372 598 l 313 529 l 245 451 l 209 411 l 155 348 l 84 268 b 59 240 72 252 59 240 b 59 240 59 240 59 240 b 151 238 59 238 68 238 l 242 238 l 242 304 b 243 372 242 369 242 370 b 289 426 245 375 254 386 l 303 441 l 317 456 l 338 483 l 360 506 l 371 520 b 386 527 375 526 381 527 b 400 519 392 527 397 525 b 401 440 401 516 401 515 b 401 377 401 423 401 402 l 401 238 l 426 238 b 453 237 449 238 450 238 b 465 218 461 234 465 226 b 460 202 465 212 464 206 b 426 197 454 197 453 197 l 401 197 l 401 180 b 451 88 402 129 412 109 b 468 69 465 81 468 79 b 461 55 468 62 466 59 l 458 54 l 321 54 l 185 54 l 182 55 b 175 69 176 59 175 62 b 191 88 175 79 176 81 b 240 180 230 109 240 129 l 240 197 l 125 197 b 73 195 104 195 87 195 b 8 197 10 195 9 197 b 0 212 2 200 0 205 b 0 212 0 212 0 212 b 20 243 0 219 0 219 b 163 611 104 344 163 493 b 174 637 163 629 166 634 m 234 -1 l 235 -1 l 232 -1 l 234 -1 m 234 673 l 235 673 l 232 673 l 234 673 "},
an:{width:568,c:-248.609375,e:-53.078125,d:384.71875,f:513.140625,name:"p",h:485,height:634,g:"m 185 383 b 196 384 187 383 191 384 b 277 334 230 384 259 365 b 288 301 281 325 288 306 b 288 297 288 298 288 297 b 294 302 289 297 291 300 b 394 370 323 338 367 368 b 404 372 398 370 401 372 b 510 272 453 372 498 329 b 513 237 513 262 513 251 b 507 172 513 218 511 193 b 326 -34 487 59 412 -26 b 314 -36 322 -36 318 -36 b 274 -25 298 -36 283 -31 l 265 -16 b 224 44 246 -1 232 20 b 223 50 224 47 223 50 b 223 50 223 50 223 50 b 149 -197 221 48 149 -194 b 149 -198 149 -197 149 -198 b 170 -211 149 -202 155 -205 b 187 -215 174 -211 175 -212 b 204 -231 201 -219 204 -222 b 197 -245 204 -240 202 -243 l 194 -248 l 76 -248 l -42 -248 l -46 -245 b -53 -231 -51 -243 -53 -240 b -35 -215 -53 -222 -49 -218 b -13 -211 -21 -212 -20 -212 b -6 -208 -10 -209 -8 -208 b 0 -206 -6 -208 -2 -206 b 25 -188 13 -201 21 -195 b 163 280 28 -183 163 276 b 166 291 163 283 164 287 b 167 302 167 295 167 300 b 155 325 167 315 161 325 b 155 325 155 325 155 325 b 65 230 125 322 85 280 b 53 215 61 218 58 215 b 51 215 53 215 51 215 b 42 225 46 215 42 218 b 57 263 42 231 47 244 b 140 361 77 305 104 337 b 152 370 144 365 149 369 b 185 383 157 376 172 381 m 374 306 b 366 308 371 308 368 308 b 300 273 348 308 321 294 b 284 254 288 262 287 259 b 280 243 283 250 281 245 b 257 169 279 240 270 213 l 236 98 l 236 93 b 251 48 238 77 243 61 b 279 27 258 37 272 27 b 281 27 279 27 280 27 b 291 31 281 27 287 30 b 396 170 334 52 378 109 b 406 247 402 197 406 225 b 401 277 406 259 405 270 b 374 306 397 290 383 304 "},
"\ue146":{width:1143,c:-300,e:-571.671875,d:275,f:570.3125,name:"scripts.prallmordent",h:582,height:575,g:"m 156 273 b 163 275 159 273 161 275 b 183 262 171 275 179 269 b 185 158 185 259 185 259 l 185 56 l 231 112 b 284 175 277 172 279 172 b 289 175 285 175 288 175 b 299 173 294 175 298 173 b 462 11 303 172 338 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 374 -176 371 -176 b 280 -87 367 -173 345 -152 b 194 0 234 -38 194 0 b 189 -6 194 0 191 -2 l 185 -12 l 185 -147 b 185 -211 185 -173 185 -194 b 179 -293 185 -297 185 -287 b 164 -300 175 -297 170 -300 b 145 -287 156 -300 148 -295 b 144 -175 144 -284 144 -284 l 142 -63 l 100 -118 b 46 -176 57 -170 54 -176 b 42 -176 44 -176 43 -176 b -54 -87 32 -175 38 -180 b -140 0 -102 -38 -140 0 b -209 -86 -141 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -289 -176 b -300 -175 -295 -176 -299 -175 b -464 -12 -304 -173 -340 -137 l -476 0 l -504 -34 b -543 -77 -534 -73 -537 -76 b -549 -79 -545 -79 -547 -79 b -571 -58 -562 -79 -571 -69 b -568 -50 -571 -55 -570 -52 b -393 170 -566 -43 -398 165 b -379 175 -389 173 -383 175 b -370 173 -375 175 -372 175 b -281 86 -367 172 -347 151 b -196 0 -235 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 127 11 -32 172 16 123 l 138 -1 l 141 1 l 144 4 l 144 130 b 145 261 144 256 144 258 b 156 273 147 266 151 270 "},
"\ue19b":{width:1051,c:0,e:-525.390625,d:1069.4375,f:524.03125,name:"accordion.accDiscant",h:535,height:1070,g:"m -42 1068 b 1 1069 -27 1069 -13 1069 b 524 534 285 1069 524 831 b 0 0 524 231 283 0 b -118 12 -38 0 -77 4 b -487 336 -284 51 -424 175 b -525 534 -513 402 -525 469 b -42 1068 -525 802 -325 1043 m 38 1038 b 0 1040 25 1040 12 1040 b -460 726 -198 1040 -386 915 l -461 722 l 0 722 l 460 722 l 458 726 b 38 1038 390 900 224 1023 m 472 686 l 470 693 l 0 693 l -470 693 l -473 686 b -496 536 -488 638 -496 587 b -472 377 -496 483 -488 429 l -470 375 l 0 375 l 470 375 l 470 377 b 495 536 487 429 495 483 b 472 686 495 587 488 638 m 458 344 l 460 345 l 0 345 l -461 345 l -460 344 b -402 238 -454 323 -424 269 b 0 27 -303 98 -152 27 b 401 238 151 27 302 98 b 458 344 423 269 453 323 "},
"\ue173":{width:338,c:-823.609375,e:0,d:537.5,f:337.5625,name:"accidentals.sharp.arrowdown",h:344,height:1362,g:"m 230 536 b 239 537 232 537 234 537 b 258 525 247 537 254 533 l 259 522 l 259 390 l 259 258 l 285 265 b 318 270 302 269 311 270 b 336 259 328 270 332 268 b 337 208 336 256 337 233 b 336 158 337 184 336 159 b 302 140 332 148 329 147 b 259 130 266 131 259 130 b 259 65 259 130 259 104 b 259 20 259 51 259 36 l 259 -88 l 285 -81 b 318 -76 302 -77 311 -76 b 332 -81 325 -76 328 -77 b 337 -123 336 -87 337 -86 l 337 -138 l 337 -154 b 332 -195 337 -191 336 -190 b 281 -211 328 -200 328 -200 b 262 -216 272 -213 264 -216 l 259 -216 l 259 -350 l 259 -483 l 258 -487 b 239 -500 254 -495 246 -500 b 220 -487 231 -500 223 -495 l 219 -483 l 217 -355 l 217 -227 l 216 -227 l 194 -233 l 152 -244 b 129 -250 140 -247 130 -250 b 127 -411 127 -250 127 -258 b 127 -576 127 -548 127 -573 b 126 -579 126 -577 126 -579 b 127 -580 126 -579 126 -580 b 133 -579 129 -580 130 -579 b 186 -558 152 -576 170 -569 b 197 -555 190 -556 194 -555 b 215 -573 206 -555 215 -562 l 215 -575 l 215 -580 l 209 -588 b 126 -802 172 -648 141 -727 b 107 -823 123 -818 118 -823 b 87 -798 95 -823 91 -818 b 5 -588 69 -719 40 -648 l 0 -580 l 0 -575 b 0 -573 0 -575 0 -575 b 16 -555 0 -562 6 -555 b 27 -558 20 -555 24 -556 b 81 -579 44 -569 62 -576 b 87 -580 84 -579 85 -580 b 88 -579 88 -580 88 -580 b 87 -576 88 -579 88 -577 b 87 -416 87 -573 87 -550 b 85 -261 87 -270 87 -261 b 85 -261 85 -261 85 -261 b 32 -273 74 -263 35 -273 b 13 -261 24 -273 16 -268 b 12 -209 12 -256 12 -256 l 12 -162 l 13 -158 b 74 -134 17 -148 17 -148 l 87 -131 l 87 -22 b 85 86 87 79 87 86 b 85 86 85 86 85 86 b 32 75 74 83 35 75 b 13 86 24 75 16 79 b 12 137 12 90 12 90 l 12 184 l 13 188 b 73 212 17 198 17 198 l 87 215 l 87 348 l 87 481 l 88 486 b 107 498 92 493 99 498 b 117 495 110 498 114 497 b 126 486 121 494 125 490 l 127 481 l 127 354 l 127 226 l 133 226 b 172 236 136 227 153 231 l 212 247 l 217 248 l 217 384 l 219 522 l 220 525 b 230 536 221 529 225 533 m 217 9 b 217 119 217 70 217 119 l 217 119 b 194 113 217 119 206 116 l 152 102 b 129 97 140 100 130 97 b 127 -12 127 97 127 91 l 127 -122 l 133 -120 b 172 -111 136 -119 153 -115 l 212 -101 l 217 -98 l 217 9 "},
"\ue108":{width:311,c:-11.109375,e:-10.890625,d:462.5,f:299.4375,name:"scripts.arpeggio.arrow.1",h:294,height:475,g:"m 136 461 b 142 462 137 462 140 462 b 166 450 152 462 161 456 b 171 429 168 447 168 445 b 288 131 194 322 238 209 b 298 115 295 120 296 118 b 299 106 298 112 299 109 b 273 81 299 91 287 81 b 255 86 268 81 261 83 b 155 116 225 104 183 116 l 152 116 l 149 108 b 141 83 148 102 144 91 b 134 48 137 69 134 58 b 149 9 134 34 140 25 b 153 -1 152 5 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 147 -11 b 122 2 138 -11 133 -6 b 95 61 104 20 95 38 b 107 108 95 75 99 90 b 108 113 107 111 108 112 b 107 113 108 113 108 113 b 102 113 106 113 104 113 b 31 86 76 108 53 98 b 14 80 24 81 20 80 b -10 106 0 80 -10 91 b 0 131 -10 115 -9 116 b 115 430 49 209 91 318 b 136 461 119 451 123 456 "},
"\ue2bd":{width:1085,c:-7013.890625,e:-1084.71875,d:7012.515625,f:0,name:"brace445",h:0,height:14027,g:"m -19 7011 b -12 7012 -16 7012 -15 7012 b -1 7005 -8 7012 -4 7011 b 0 7001 -1 7004 0 7002 b -15 6970 0 6997 -4 6990 b -609 4558 -409 6258 -609 5447 b -609 4527 -609 4548 -609 4538 b -606 4348 -609 4437 -608 4413 b -358 2811 -588 3844 -502 3319 b -226 2400 -319 2677 -298 2611 b -119 1751 -154 2187 -119 1968 b -1029 6 -119 1090 -444 444 b -1047 -8 -1038 -1 -1047 -8 b -1029 -23 -1047 -8 -1038 -15 b -119 -1769 -444 -461 -119 -1108 b -226 -2416 -119 -1986 -154 -2204 l -258 -2509 b -608 -4562 -493 -3201 -608 -3895 b -15 -6972 -608 -5434 -409 -6259 b -1 -7002 -4 -6991 -1 -6998 b -1 -7006 -1 -7004 -1 -7005 b -13 -7013 -4 -7012 -9 -7013 b -23 -7009 -18 -7013 -22 -7012 b -109 -6851 -31 -6995 -80 -6908 b -768 -4804 -452 -6201 -679 -5498 l -773 -4759 b -815 -4090 -798 -4565 -815 -4309 b -813 -4029 -815 -4069 -813 -4050 b -516 -2340 -805 -3441 -709 -2897 b -375 -1519 -422 -2063 -375 -1786 b -1059 -33 -375 -911 -616 -362 b -1084 -8 -1076 -20 -1084 -15 b -1059 15 -1084 -2 -1076 4 b -640 484 -895 137 -751 298 b -375 1502 -463 779 -375 1131 b -512 2309 -375 1766 -420 2040 l -531 2366 b -816 4091 -719 2912 -816 3502 b -776 4743 -816 4309 -802 4527 b -43 6975 -680 5519 -436 6265 b -19 7011 -23 7009 -23 7009 "}},
km:"normal",Xl:1903,Mn:-150,jm:"normal",bm:{Yn:-2066.671875,Wn:-695.53125,Xn:1902.78125,Vn:1159.671875},pn:1E3,Zm:{en:"Gonville-18",Tn:"Version 0.1.8955 ",Sn:"",Am:"Gonville-18",wm:"Gonville-18",im:"No copyright is claimed on this font file.",description:"",Jn:"",nm:"",om:"",On:"FontForge 2.0 : Gonville-18 : 22-5-2010",Nm:"",Mm:"",Um:"",ym:"18"},mm:-2066,ih:"Gonville-18",lineHeight:4093,Nn:50};var mc=mc||{};function H(){}var nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc;
function I(){var a=nc;a===f&&(nc=a=new H);return a}function zc(a,b){b=b||{};b.jg=J(a,"justify","left")}function Ac(a,b){b=b||{};b.lm=K(a,"default-x",0);b.Ua=K(a,"default-y",0);b.mn=K(a,"relative-x",0);b.nn=K(a,"relative-y",0);return b}s=H.prototype;s.oa=function(a,b){b=b||{};b.Cj=J(a,"font-family",f);b.xm=L(a,"font-style",["normal","italic"],"normal");b.Ea=J(a,"font-size","medium");b.Ea=isNaN(parseFloat(b.Ea))?b.Ea:parseFloat(b.Ea);b.Dj=L(a,"font-weight",["normal","bold"],"normal");return b};
function Bc(a,b){b=b||{};b.color=J(a,"color","#000000")}function M(a,b,c){c=c||{};c.position=Ac(b);c.font=a.oa(b);Bc(b,c)}function Cc(a,b){b=b||{};b.Mk=L(a,"halign",["left","center","right"],"left")}function Dc(a,b){b=b||{};b.Pl=L(a,"valign",["top","middle","bottom","baseline"],"middle")}function Ec(a,b){b=b||{};b.Rn=L(a,"valign-image",["top","middle","bottom"],"middle")}function Fc(a,b,c){c=c||{};M(a,b,c);Cc(b,c);Dc(b,c)}function Gc(a,b,c){return L(a,b,["solid","dashed","dotted","wavy"],c)}
function Hc(a,b){b=b||{};b.hj=K(a,"dash-length",5);b.Fl=K(a,"space-length",5)}function Ic(a,b){var c=b=b||{},d;d=L(a,"enclosure","rectangle square oval circle bracket triangle diamond none".split(" "),b.te);c.te=d}function Jc(a,b,c){c=c||{};zc(b,c);Fc(a,b,c);Ic(b,c);c.text=J(b,f,"");return c}function Kc(a){return N(a,"print-object",i)}function Lc(a,b){b=b||{};b.eb=Kc(a);b.gn=N(a,"print-dot",i);b.vl=N(a,"print-spacing",l);b.jn=N(a,"print-lyric",i)}function O(a){return a}function Mc(a){return a}
function L(a,b,c,d){a=J(a,b,d);return a!==d?Nc(c,d,a):d}function Nc(a,b,c){return a.some(function(a){return c===a})?c:b}function Oc(a,b,c){return L(a,b,["start","stop"],c)}function Pc(a,b){return L(a,"type",["start","stop","continue"],b)}function N(a,b,c){return"yes"===L(a,b,["yes","no"],c?"yes":"no")}function Qc(a,b){b=b||{};b.size=L(a,"size",["full","cue","large"],"full");return b}function Rc(a,b){b=b||{};b.bd=N(a,"parentheses",l);b.dc=b.bd?l:N(a,"bracket",l);!b.bd&&!b.dc&&Qc(a,b)}
function Sc(a,b){return L(a,b,"ABCDEFG".split(""),f)}s.ha=function(a,b){b=b||{};b.step=Sc(a,"step");b.Ia=Mc(K(a,"octave",f));b.L=K(a,"alter",0);return b};function Tc(a,b){b=b||{};b.ah=Sc(a,"display-step");b.$g=Mc(K(a,"display-octave",f))}function Uc(a,b){b=b||{};b.ah=Sc(a,"display-step");b.$g=Mc(K(a,"display-octave",f));b.Vm=N(a,"measure",l)}function Vc(a,b){var b=b||{},c=J(a,"time-only","");c&&(b.Gn=c.split(",").map(function(a){return Number(a)}))}
s.ua=function(a,b){b=b||{};b.duration=O(K(a,"duration",f));return b};function Wc(a){var b;b=b||{};b.type=O(Oc(a,"type",f));Vc(a,b);return b}
function Xc(a,b,c){var c=c||{},d=P(b,"type");d&&Yc(d,c);c.rd=Zc(b,"dot");if(d=P(b,"accidental"))c.Na=a.Ob(d);if(d=P(b,"time-modification"))c.Ll=$c(d);(d=P(b,"stem"))&&ad(d,c);if(d=P(b,"notehead"))c.Te=a.aa(d);Q(b,"beam",function(a,b){c.je=c.je||[];var d;d=d||{};d.type=O(L(b,f,["begin","continue","end","forward hook","backward hook"],f));d.k=Mc(K(b,"number",1));if("begin"===d.type||"continue"===d.type)d.tm=L(b,"fan",["accel","rit"],"none");Bc(b,d);c.je.push(d)},a);(d=P(b,"notations"))&&a.yd(d,c);Q(b,
"lyric",function(a,b){c.Qa=c.Qa||[];var d=bd(this,b);c.Qa.push(d)},a);a.O(b,c);cd(a,b,c);M(a,b,c);Lc(b,c);c.Pk=dd(b,"chord");(d=P(b,"pitch"))&&a.ha(d,c);(a=P(b,"unpitched"))&&Tc(a,c);if(b=P(b,"rest"))c.ig=i,Uc(b,c)}function ed(a,b,c){return L(a,b,"1024th 512th 256th 128th 64th 32nd 16th eighth quarter half whole breve long maxima".split(" "),c)}function Yc(a,b){b=b||{};b.type=ed(a,f,f);b.size=Qc(a,b.hg?"full":"cue")}function ad(a,b){b=b||{};b.Gl=L(a,f,["down","up","none","double"],f)}
s.O=function(a,b){b=b||{};b.Ka=K(a,"staff",1);return b};s.aa=function(a,b){b=b||{};b.Te=L(a,f,"slash;triangle;diamond;square;cross;x;circle-x;inverted triangle;arrow down;arrow up;slashed;back slashed;normal;cluster;circle dot;left triangle;rectangle;none;do;re;mi;fa;fa up;so;la;ti".split(";"),"normal");b.filled=N(a,"filled",i);b.bd=N(a,"parentheses",l);this.oa(a,b);Bc(a,b);return b};
function $c(a){var b;b=b||{};b.Mi=O(K(a,"actual-notes",f));b.fl=O(K(a,"normal-notes",f));var c=P(a,"normal-type");c&&(b.ii=ed(c,f),b.hi=Zc(a,"normal-dot"));return b}function fd(a,b){var c=I(),b=b||{},d=P(a,"grace");d&&(b.ca=i,gd(d,b));var e=P(a,"cue");e&&(b.Qk=i);!d&&!e&&(b.hg=i);Xc(c,a,b);(b.hg||b.Qk)&&c.ua(a,b);(b.hg||b.ca)&&Q(a,"tie",function(a,c){b.Di=b.Di||[];b.Di.push(Wc(c))},c)}
function gd(a,b){b=b||{};b.An=K(a,"steal-time-previous",0);b.zn=K(a,"steal-time-following",0);b.Tm=K(a,"make-time",0);b.ed=N(a,"slash",l)}
function hd(a,b){var c=I(),b=b||{};b.k=K(a,"number",1);b.sn=L(a,"show-frets",["number","letters"],"number");b.eb=Kc(a);b.vl=N(a,"print-spacing",l);b.Eg=L(a,"staff-type",["ossia","cue","editorial","regular","alternate"],"regular");b.fa=K(a,"staff-lines",5);0>=b.fa&&(b.fa=5);b.xn=K(a,"staff-size",100);b.em=K(a,"capo",0);Q(a,"staff-tuning",function(a,c){var g;g=g||{};g.Vb=O(K(c,"line",f));g.step=Sc(c,"tuning-step");g.Ia=Mc(K(c,"tuning-octave",f));g.L=K(c,"tuning-alter",0);b.xi=b.xi||[];b.xi[g.Vb-1]=
g},c)}s.jb=function(a,b){b=b||{};b.Yb=L(a,f,["none","brace","line","bracket","square"],"brace");b.rf=K(a,"top-staff",f);b.me=K(a,"bottom-staff",f);Ac(a,b);Bc(a,b);return b};function id(a,b){var b=b||{},c=P(a,"slash-type");c&&(b.tn=Oc(c,f,f))}function Zc(a,b){var c=0;Q(a,b,function(){c+=1});return c}
function jd(a,b){var c=I(),b=b||{};b.Va=Mc(K(a,"divisions",f));b.staves=K(a,"staves",f);Q(a,"measure-style",function(a,c){b.Xc=b.Xc||[];var g;g=g||{};g.k=K(c,"number",1);this.oa(c,g);Bc(c,g);var h=P(c,"multiple-rest");if(h){g.Kd="multiple-rest";var j;j=g||{};j.Gi=N(h,"use-symbols",l);j.og=K(h,f,2)}if(h=P(c,"measure-repeat"))g.Kd="measure-repeat",j=g||{},j.type=O(Oc(h,"type",f)),j.El=K(h,"slashes",1),j.og=K(h,f,2);if(h=P(c,"beat-repeat"))g.Kd="beat-repeat",j=g||{},j.type=O(Oc(h,"type",f)),j.El=K(h,
"slashes",1),j.Ol=N(h,"use-dots",l),id(h,j),j.Dl=Zc(h,"slash-dot");if(h=P(c,"slash"))g.Kd="slash",j=g||{},j.type=O(Oc(h,"type",f)),j.Ol=N(h,"use-dots",l),j.Qn=N(h,"use-stems",l),id(h,j),j.Dl=Zc(h,"slash-dot");b.Xc.push(g)},c)}
s.rb=function(a,b){b=b||{};b.k=K(a,"number",1);b.Ng=N(a,"additional");b.Ng&&Qc(a,b);b.Ul=N(a,"after-barline");b.eb=Kc(a);M(this,a,b);b.T=L(a,"sign","G F C percussion TAB jianpu none".split(" "),"none");if(!b.Ng){var c=f;switch(b.T){case "G":c=2;break;case "F":c=4;break;case "C":c=3;break;case "TAB":c=5}b.Vb=K(a,"line",c)}b.nd=K(a,"clef-octave-change",0);return b};var kd="sharp natural flat double-sharp sharp-sharp double-flat flat-flat natural-sharp natural-flat quarter-flat quarter-sharp three-quarters-flat three-quarters-sharp sharp-down sharp-up natural-down natural-up flat-down flat-up triple-sharp triple-flat slash-quarter-sharp slash-sharp slash-flat double-slash-flat sharp-1 sharp-2 sharp-3 sharp-5 flat-1 flat-2 flat-3 flat-4 sori koron".split(" ");
s=H.prototype;s.Ob=function(a,b){b=b||{};b.Na=L(a,f,kd,f);b.md=N(a,"cautionary",l);b.se=N(a,"editorial",l);Rc(a,b);M(this,a,b);return b};
function ld(a,b){var c=f,d=f,e=f,g=f,h=f;Q(b,"key-octave",function(a,b){h=h||{};var c=O(K(b,"number",f));c&&(h[c]=K(b,f,4))},a);Q(b,"key-step",function(a,b){d=d||[];d.push(b.Rb(f))});Q(b,"key-alter",function(a,b){e=e||[];e.push(K(b,f,0))});Q(b,"key-accidental",function(a,b){g=g||[];g.push(this.Ob(b))},a);d.forEach(function(a,b){c=c||[];var d={};d.Ia=h?h[b+1]:/(C|D|E|F)/.test(a)?5:4;d.step=a;d.L=e[b];g&&g[b]&&(d.Na=g[b]);c.push(d)});return c}
s.getKey=function(a,b){b=b||{};b.k=K(a,"number",-1);b.eb=Kc(a);M(this,a,b);var c=P(a,"cancel");if(c){var d;d=b||{};d.cancel=K(c,f,f);d.cancel&&(d.dm=L(c,"location",["left","right","before-barline"],"left"))}dd(a,"fifths")?(b.we=K(a,"fifths",0),b.mode=L(a,"mode","major minor dorian phrygian lydian mixolydian aeolian ionian locrian none".split(" "),"major")):b.fe=ld(this,a);return b};function md(a,b){b=b||{};b.Yb=L(a,"symbol","common cut single-number note dotted-note normal".split(" "),"normal")}
function nd(a,b){b=b||{};b.separator=L(a,"separator",["none","horizontal","diagonal","vertical","adjacent"],"none")}function od(a,b,c){var c=c||{},d=f;Q(b,"beats",function(a,b){d=d||[];d.push(b.Rb())},a);var e=f;Q(b,"beat-type",function(a,b){e=e||[];e.push(b.Rb())},a);d.forEach(function(a,b){c.ke=c.ke||[];c.ke.push({Jc:a,le:e[b]})})}
s.getTime=function(a,b){b=b||{};b.k=K(a,"number",-1);md(a,b);nd(a,b);Fc(this,a,b);b.eb=Kc(a);b.ri=dd(a,"senza-misura");if(!b.ri){od(this,a,b);var c=P(a,"interchangeable");if(c){var d=b,e;e=e||{};e.Hn=L(c,"time-relation","parentheses bracket equals slash space hyphen".split(" "),f);md(c,e);nd(c,e);od(this,c,e);d.Hm=e}}return b};s.Ah=function(a,b){b=b||{};b.Yk=K(a,"millimeters",7);b.Kl=K(a,"tenths",40);return b};
s.Fb=function(a,b){b=b||{};b.$c=K(a,"page-height",800);b.ad=K(a,"page-width",600);Q(a,"page-margins",function(a,d){b.Cc=b.Cc||{};var e;e=e||{};e.type=L(d,"type",["odd","even","both"],"both");e["left-margin"]=K(d,"left-margin",0);e["right-margin"]=K(d,"right-margin",0);e["top-margin"]=K(d,"top-margin",0);e["bottom-margin"]=K(d,"bottom-margin",0);b.Cc[e.type]=e},this);return b};
s.rc=function(a,b){var b=b||{},c=P(a,"system-margins");if(c){var d=b,e;e=e||{};e["left-margin"]=K(c,"left-margin",0);e["right-margin"]=K(c,"right-margin",0);d.Ci=e}b.zi=K(a,"system-distance",0);b.Fi=K(a,"top-system-distance",0);return b};
function pd(a,b,c){var c=c||{},d=P(b,"scaling");d&&(c.qi=a.Ah(d));if(d=P(b,"page-layout"))c.We=a.Fb(d);if(d=P(b,"system-layout"))c.Bi=a.rc(d);if(d=P(b,"music-font"))c.cl=a.oa(d);if(d=P(b,"word-font"))c.Rl=a.oa(d);Q(b,"lyric-font",function(a,b){c.vc=c.vc||[];var d={};d.k=K(b,"number",f);d.name=J(b,"name",f);this.oa(b,d);c.vc.push(d)},a)}
function qd(a,b,c){c=c||{};Q(b,"credit-image,credit-words",function(a,b){var g={},h=rd(b);h&&Q(h,f,function(a,b){if(b.is("credit-type")){g.pd=g.pd||"";var c=L(b,f,"page number;title;subtitle;composer;arranger;lyricist;rights".split(";"),"");c&&(g.pd+=c,g.pd+="|")}else b.is("link")||b.is("bookmark")},this);if(b.is("credit-words"))g.Sk=i,Jc(this,b,g);else if(b.is("credit-image")){g.Jm=i;return}c.Ff=c.Ff||[];c.Ff.push(g)},a);c.page=K(b,"page",1)}
s.ph=function(a,b){b=b||{};b.Ic=L(a,"bar-style","regular dotted dashed heavy light-light light-heavy heavy-light heavy-heavy tick short none".split(" "),"regular");Bc(a,b);return b};function sd(a){var b;b=b||{};b.direction=O(L(a,"direction",["backward","forward"],f));b.Ml=K(a,"times",0);b.Un=L(a,"winged",["none","straight","curved","double-straight","double-curved"],"none");return b}
function td(a,b){var c;c=c||{};c.kl=O(J(b,"number",f));c.text=J(b,f,"");c.type=O(L(b,"type",["start","stop","discontinue"],f));c.eb=Kc(b);M(a,b,c);c.mj=K(b,"end-length",10);c.En=K(b,"text-x",5);c.Fn=K(b,"text-y",5);return c}
function ud(a,b){var c=I(),b=b||{};b.location=L(a,"location",["right","left","middle"],"right");c.ph(a,b);var d=P(a,"repeat");d&&(b.repeat=sd(d));(d=P(a,"ending"))&&(b.ending=td(c,d));(d=P(a,"wavy-line"))&&(b["wavy-line"]=c.Dh(d));(d=P(a,"segno"))&&(b.segno=c.De(d));(d=P(a,"coda"))&&(b.coda=c.De(d));Q(a,"fermata",function(a,c){b.fermata=b.fermata||[];b.fermata.push(this.rh(c))},c)}function vd(a){return Mc(K(a,"number",1))}s.R=function(a,b,c){b=b||{};b.Ta=L(a,"placement",["above","below"],c);return b};
s.Ae=function(a,b){b=b||{};b.orientation=L(a,"orientation",["over","under"],f);return b};s.Ak=function(a,b){b=b||{};b.type=O(Pc(a,f));b.k=vd(a);this.R(a,b);this.Ae(a,b);return b};s.ok=function(a,b){b=b||{};b.type=O(Pc(a,f));b.k=vd(a);this.R(a,b);this.Ae(a,b);return b};function wd(a,b){b=b||{};b.be=K(a,"tuplet-number",b.be);b.ce=ed(a,"tuplet-type",b.ce);var c=Zc(a,"tuplet-dot");b.$d=c?c:b.$d;return b}
s.Fk=function(a,b,c){b=b||{};b.type=O(Oc(a,"type",f));b.k=vd(a);b.dc=N(a,"bracket",i);b.Al=L(a,"show-number",["actual","both","none"],"actual");b.Cl=L(a,"show-type",["actual","both","none"],"none");this.R(a,b);if(c=c?c.Ll:f)b.Zd={be:c.Mi,ce:c.ii,$d:c.hi};var d=P(a,"tuplet-actual");d&&(b.Zd=wd(d,b.Zd));c&&(b.ae={be:c.fl,ce:c.ii,$d:c.hi});if(a=P(a,"tuplet-normal"))b.ae=wd(a,b.ae);return b};
s.Ck=function(a,b){var c=b=b||{},d;d=L(a,"type",["start","stop","single"],"single");c.type=d;b.k=K(a,f,0);M(this,a,b);this.R(a,b);return b};s.Dk=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");xd(a,b);return b};s.Fe=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");xd(a,b);b.ed=N(a,"slash",l);return b};s.Pj=H.prototype.Fe;s.$j=H.prototype.Fe;s.Oj=H.prototype.Fe;s.Ch=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");xd(a,b);return b};s.mk=H.prototype.Ch;
s.Dh=function(a,b){b=b||{};b.type=Pc(a,"start");b.k=vd(a);Ac(a,b);this.R(a,b,"above");Bc(a,b);xd(a,b);return b};s.yh=function(a,b){b=b||{};b.Jd=N(a,"long",l);b.Jd&&(b.kd=L(a,"approach",["above","below"],f),b.re=L(a,"departure",["above","below"],f));M(this,a,b);this.R(a,b,"above");xd(a,b);return b};s.Zj=H.prototype.yh;s.lk=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");return b};
function yd(a,b,c,d,e,g,h){c=c||{};Q(b,h,function(a,b){var h=f,q=b.v?b.v.prop("nodeName"):"",x=g[q];x&&(h=x.call(this,b,f,c),h[e]=q);h&&(c[d]=c[d]||[],c[d].push(h))},a);return c}function zd(a){var b=oc;b===f&&(oc=b={tremolo:a.Ck,"trill-mark":a.Dk,turn:a.Fe,"delayed-turn":a.Pj,"inverted-turn":a.$j,"delayed-inverted-turn":a.Oj,"vertical-turn":a.Ch,"wavy-line":a.Dh,shake:a.mk,mordent:a.yh,"inverted-mordent":a.Zj,schleifer:a.lk,"accidental-mark":a.oh,"other-ornament":k});return b}
s.Sc=function(a,b){var b=b||{},c=zd(this),d=pc;d===f&&(pc=d=tb(c).join(","));return yd(this,a,b,"ornaments","ornament",c,d)};s.rh=function(a,b){b=b||{};b.text=L(a,f,["normal","angled","square"],"normal");b.type=L(a,"type",["upright","inverted"],"upright");M(this,a,b);return b};s.Gj=function(a,b){b=b||{};b.k=vd(a);b.direction=L(a,"direction",["up","down"],f);Ac(a,b);this.R(a,b);Bc(a,b);return b};
s.ck=function(a,b){var c=b=b||{},d;d=L(a,"type",["top","bottom"],f);c.type=d;b.k=vd(a);Ac(a,b);this.R(a,b);Bc(a,b);return b};s.oh=function(a,b){b=b||{};b.Na=L(a,f,kd,f);M(this,a,b);this.R(a,b);return b};function Ad(a){var b=qc;b===f&&(qc=b={accent:a.ib,"strong-accent":a.vk,staccato:a.sk,tenuto:a.yk,"detached-legato":a.Qj,staccatissimo:a.rk,spiccato:a.qk,scoop:a.Ce,plop:a.hk,doit:a.Rj,falloff:a.Uj,"breath-mark":a.Jj,caesura:a.Kj,stress:a.uk,unstress:a.Gk,"other-articulation":a.fk});return b}
s.Uf=function(a,b){var b=b||{},c=Ad(this),d=rc;d===f&&(rc=d=tb(c).join(","));return yd(this,a,b,"articulations","articulation",c,d)};s.ib=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");return b};s.vk=function(a,b){b=b||{};b.type=L(a,"type",["up","down"],"up");this.ib(a,b);return b};s.sk=H.prototype.ib;s.yk=H.prototype.ib;s.Qj=H.prototype.ib;s.rk=H.prototype.ib;s.qk=H.prototype.ib;
s.Ce=function(a,b){var c=b=b||{},d;d=L(a,"line-shape",["straight","curved"],"curved");c.Qm=d;b.xb=Gc(a,"line-shape","solid");"dashed"===b.xb&&Hc(a,b);M(this,a,b);this.R(a,b);return b};s.hk=H.prototype.Ce;s.Rj=H.prototype.Ce;s.Uj=H.prototype.Ce;s.Jj=function(a,b){b=b||{};b.text=J(a,f,f);M(this,a,b);this.R(a,b,"above");return b};s.Kj=H.prototype.ib;s.uk=H.prototype.ib;s.Gk=H.prototype.ib;s.fk=H.prototype.ib;
function Bd(a){var b=sc;b===f&&(sc=b={tied:a.Ak,slur:a.ok,tuplet:a.Fk,ornaments:a.Sc,fermata:a.rh,"accidental-mark":a.oh,articulations:a.Uf,technical:a.xk,dynamics:a.qh,arpeggiate:a.Gj,"non-arpeggiate":a.ck,glissando:a.Vj,slide:a.nk,"other-notation":k});return b}s.yd=function(a,b){var b=b||{},c=Bd(this),d=tc;d===f&&(tc=d=tb(c).join(","));return yd(this,a,b,"notations","notation",c,d)};
function bd(a,b){var c;c=c||{};c.k=vd(b);c.name=J(b,"name","");zc(b,c);Ac(b,c);a.R(b,c);Bc(b,c);c.eb=Kc(b);c.pm=dd(b,"end-line");c.qm=dd(b,"end-paragraph");Cd(a,b,c);if(dd(b,"laughing"))c.Lm=i;else if(dd(b,"humming"))c.Em=i;else{var d=0;Q(b,"elision, text",function(a,b){d+=1;c.text=c.text||"";c.text=b.is("elision")?c.text+L(b,f,[String.fromCharCode(160),String.fromCharCode(95),String.fromCharCode(8255)],String.fromCharCode(160)):c.text+J(b,f,"")},a);var e=P(b,"syllabic");e&&1===d&&(c.Jl=L(e,f,["single",
"begin","end","middle"],"single"));if(e=P(b,"extend"))c.extend=Pc(e,i)}return c}function Cd(a,b,c){var c=c||{},d=P(b,"footnote");d&&(c.zm=Jc(a,d));if(a=P(b,"level"))c.Uh={},c.Uh.ln=N(a,"reference",l),Rc(a,c.Uh)}function cd(a,b,c){c=c||{};Cd(a,b,c);c.sf=K(b,"voice",1)}function Dd(a,b){a&&b&&(a.Ta=b.Ta,a.Zg=b.Zg,a.Ka=b.Ka,a.sf=b.sf)}s.kk=function(a,b,c){b=b||{};Dd(b,c);b.Ta=b.Ta||"above";b.te="square";Jc(this,a,b);return b};
s.Ik=function(a,b,c){b=b||{};Dd(b,c);b.Ta=b.Ta||"below";b.te="none";Jc(this,a,b);return b};s.De=function(a,b,c){b=b||{};Dd(b,c);b.Ta=b.Ta||"above";Fc(this,a,b);return b};s.Lj=H.prototype.De;var Ed="p pp ppp pppp ppppp pppppp f ff fff ffff fffff ffffff mp mf sf sfp sfpp fp rf rfz sfz sffz fz other-dynamics".split(" ");s=H.prototype;
s.qh=function(a,b,c){b=b||{};Dd(b,c);Fc(this,a,b);this.R(a,b);Ic(a,b);uc=uc||Ed.join(",");Q(a,uc,function(a,c){b.qf=b.qf||[];c.is("other-dynamics")?b.qf.push(J(c,f,"")):Ed.some(function(a){return c.is(a)?(b.qf.push(a),i):l})});return b};s.gk=function(a,b,c){b=b||{};Dd(b,c);b.type=O(L(a,"type",["start","stop","continue","change"],f));b.Vb=N(a,"line",l);b.T=N(a,"sign",i);Fc(this,a,b);return b};
s.Hk=function(a,b,c){b=b||{};Dd(b,c);b.type=O(L(a,"type",["crescendo","diminuendo","stop","continue"],f));b.k=vd(a);b.lf=K(a,"spread",10);b.lf||(b.lf=10);b.Xm=N(a,"niente",l);b.xb=Gc(a,"line-type","solid");"dashed"===b.xb&&Hc(a,b);Ac(a,b);Bc(a,b);return b};s.Nj=function(a,b,c){b=b||{};Dd(b,c);b.type=O(Pc(a,f));b.k=vd(a);Hc(a,b);Ac(a,b);Bc(a,b);return b};
s.Ij=function(a,b,c){b=b||{};Dd(b,c);b.type=O(Pc(a,f));b.k=vd(a);b.Pm=O(L(a,"line-end",["up","down","both","arrow","none"],f));b.mj=K(a,"end-length",5);b.xb=Gc(a,"line-type","solid");"dashed"===b.xb&&Hc(a,b);Ac(a,b);Bc(a,b);return b};s.dk=function(a,b,c){b=b||{};Dd(b,c);b.type=O(L(a,"type",["up","down","stop","continue"],f));b.k=vd(a);b.size=K(a,"size",8);Hc(a,b);M(this,a,b);return b};
s.bk=function(a,b,c){b=b||{};Dd(b,c);Q(a,"beat-unit",function(a,c){b["beat_unit"+a]=ed(c,f,"quarter");var g=Fd(c,":not(beat-unit-dot)");g&&(b["beat_unit"+a+"_dots"]=Zc(g,f))},this);if(c=P(a,"per-minute"))b.ni=J(c,f,"");b.bd=N(a,"parentheses",l);Fc(this,a,b);zc(a,b);return b};s.Yj=function(a,b,c){b=b||{};Dd(b,c);Fc(this,a,b);b.mi={D:0,C:0,B:0,E:0,F:0,G:0,A:0};Q(a,"pedal-tuning",function(a,c){var g=O(L(c,"pedal-step","DCBEFGA".split(""),f)),h=K(c,"pedal-alter",0);b.mi[g]=h},this);return b};
s.Fj=function(a,b){b=b||{};b.Ki=dd(a,"accordion-high");b.Li=dd(a,"accordion-low");b.Mg=Mc(K(a,"accordion-middle",0));Fc(this,a,b);return b};function Gd(a,b){b=b||{};b.Zg=N(a,"directive",i)}
s.s=function(a,b){var b=b||{},c=P(a,"offset");c&&(b.offset=Hd(c));cd(this,a,b);this.O(a,b);this.R(a,b);Gd(a,b);Q(a,"direction-type",function(a,c){var g=b,g=g||{},h;h=vc;if(h===f)vc=h={rehearsal:this.kk,segno:this.De,coda:this.Lj,words:this.Ik,dynamics:this.qh,pedal:this.gk,wedge:this.Hk,dashes:this.Nj,bracket:this.Ij,"octave-shift":this.dk,"harp-pedals":this.Yj,"accordion-registration":this.Fj,metronome:this.bk,damp:k,"damp-all":k,percussion:k,eyeglasses:k,"string-mute":k,scordatura:k,image:k,"principal-voice":k,
"other-direction":k};var j=wc;if(j===f)wc=j=tb(h).join(",");yd(this,c,g,"directions","direction",h,j)},this);return b};function Hd(a){var b;b=b||{};b.duration=K(a,f,0);b.un=N(a,"sound",l);return b}function xd(a,b){b=b||{};b.yn=L(a,"start-note",["upper","main","below"],"upper");b.Kn=L(a,"trill-step",["whole","half","unison"],"whole");b.Ln=L(a,"two-note-turn",["whole","half","none"],"none");b.Sl=N(a,"accelerate",l);b.Jc=K(a,"beats",4);b.rn=K(a,"second-beat",25);b.Km=K(a,"last-beat",75)}
function Id(a){var b=xc;b===f&&(xc=b={"up-bow":a.Sb,"down-bow":a.Tj,harmonic:a.Xj,"open-string":a.ek,"thumb-position":a.zk,pluck:a.ik,"double-tongue":a.Sj,"triple-tongue":a.Ek,stopped:a.tk,"snap-pizzicato":a.pk,fingering:a.Xf,fret:a.sh,string:a.Rb,tap:a.wk,heel:a.th,toe:a.Bk,"hammer-on":a.Wj,"pull-off":a.jk,bend:a.Hj,fingernails:a.Xf,hole:k,arrow:k,handbell:k,"other-technical":k});return b}
s.xk=function(a,b){var b=b||{},c=Id(this),d=yc;d===f&&(yc=d=tb(c).join(","));return yd(this,a,b,"technical","technical",c,d)};s.Sb=function(a,b){b=b||{};M(this,a,b);this.R(a,b,"above");return b};s.Tj=H.prototype.Sb;s.Xj=function(a,b){b=b||{};P(a,"natural")?b.Wm=i:P(a,"artificial")&&(b.Wl=i);var c=P(a,"base-pitch");if(c)b.Yl=this.ha(c);else if(c=P(a,"touching-pitch"))b.In=this.ha(c);else if(c=P(a,"sounding-pitch"))b.vn=this.ha(c);b.eb=Kc(a);M(this,a,b);this.R(a,b,"above");return b};s.ek=H.prototype.Sb;
s.zk=H.prototype.Sb;s.ik=function(a,b){b=b||{};b.text=J(a,f,"");M(this,a,b);this.R(a,b,"above");return b};s.Sj=H.prototype.Sb;s.Ek=H.prototype.Sb;s.tk=H.prototype.Sb;s.pk=H.prototype.Sb;s.Xf=function(a,b){b=b||{};b.text=J(a,f,"");b.Il=N(a,"substitution",l);b.Vl=N(a,"alternate",l);M(this,a,b);this.R(a,b,"above");return b};s.sh=function(a,b){b=b||{};b.text=J(a,f,"");this.oa(a,b);Bc(a,b);return b};s.Rb=function(a,b){b=b||{};b.text=J(a,f,"");M(this,a,b);this.R(a,b,"above");return b};
s.wk=function(a,b){b=b||{};b.text=J(a,f,"T");M(this,a,b);this.R(a,b,"above");return b};s.th=function(a,b){b=b||{};b.Il=N(a,"substitution",l);M(this,a,b);this.R(a,b,"above");return b};s.Bk=H.prototype.th;function Jd(a,b,c){c.type=O(Oc(b,"type",f));c.k=vd(b);M(a,b,c);a.R(b,c,"above")}s.Wj=function(a,b){b=b||{};b.text=J(a,f,"H");Jd(this,a,b);return b};s.jk=function(a,b){b=b||{};b.text=J(a,f,"P");Jd(this,a,b);return b};
s.Hj=function(a,b){b=b||{};b.wf=K(a,"bend-alter",1);P(a,"pre-bend")?b.ul=i:P(a,"release")&&(b.Ag=i);return b};s.Vj=function(a,b){b=b||{};b.type=O(Oc(a,"type"));b.text=J(a,f,"");b.k=vd(a);b.xb=Gc(a,"line-type","wavy");"dashed"===b.xb&&Hc(a,b);M(this,a,b);return b};s.nk=function(a,b){b=b||{};b.type=O(Oc(a,"type"));b.text=J(a,f,"");b.k=vd(a);b.xb=Gc(a,"line-type","solid");"dashed"===b.xb&&Hc(a,b);M(this,a,b);return b};
function Kd(a,b){var c;c=c||{};c.value=Sc(b,f);c.text=J(b,"text","");M(a,b,c);return c}function Ld(a,b){var c;c=c||{};c.value=K(b,f,0);c.eb=Kc(b);M(a,b,c);c.location=L(b,"location",["left","right"],"right");return c}function Md(a,b){var c;c=c||{};var d=P(b,"root-step");d&&(c.step=Kd(a,d));if(d=P(b,"root-alter"))c.L=Ld(a,d);return c}function Nd(a,b){var c;c=c||{};c.text=J(b,f,"");M(a,b,c);return c}var Od=Od||"major minor augmented diminished dominant major-seventh minor-seventh diminished-seventh augmented-seventh half-diminished major-minor major-sixth minor-sixth dominant-ninth major-ninth minor-ninth dominant-11th major-11th minor-11th dominant-13th major-13th minor-13th suspended-second suspended-fourth Neapolitan Italian French German pedal power Tristan other none".split(" ");
function Pd(a,b){var c;c=c||{};c.Me=L(b,f,Od,"none");c.Gi=N(b,"use-symbols",i);c.text=J(b,"text","");c.wn=N(b,"stack-degrees",l);c.dn=N(b,"parentheses-degrees",l);c.cm=N(b,"bracket-degrees",l);M(a,b,c);Cc(b,c);Dc(b,c);return c}function Qd(a,b){var c;c=c||{};c.Ok=K(b,f,0);M(a,b,c);return c}function Rd(a,b){var c;c=c||{};var d=P(b,"bass-step");d&&(c.step=Kd(a,d));if(d=P(b,"bass-alter"))c.L=Ld(a,d);return c}var Sd=Sd||["major","minor","augmented","diminished","half-diminished"];
function Td(a,b){var c;c=c||{};c.eb=Kc(b);var d=P(b,"degree-value");if(d){var e;e=e||{};e.value=O(K(d,f,f));e.Yb=L(d,"symbol",Sd,f);e.text=J(d,"text","");M(a,d,e);c.value=e}if(d=P(b,"degree-alter")){var g;g=g||{};g.value=K(d,f,0);g.tl=N(d,"plus-minus");M(a,d,g);c.L=g}if(g=P(b,"degree-type")){var h;h=h||{};h.value=O(L(g,f,["add","alter","subtract"],f));h.text=J(g,"text","");M(a,g,h);c.type=h}return c}
function Ud(a,b){var c;c=c||{};b.is("root")?c.root=Md(a,b):c.Bm=Nd(a,b);var d=Fd(b,"root, function"),e=P(d,"kind",i);e&&(c.Me=Pd(a,e));if(e=P(d,"inversion",i))c.Ok=Qd(a,e);if(e=P(d,"bass",i))c.Zl=Rd(a,e);(d=P(d,"degree",i))&&Q(d,f,function(a,b){c.Gf=c.Gf||[];c.Gf.push(Td(this,b))},a);return c}
function Vd(a,b){var c;c=c||{};var d=P(b,"string");d&&(c.Hl=a.Rb(d));if(d=P(b,"fret"))c.Ej=a.sh(d);if(d=P(b,"fingering"))c.jh=a.Xf(d);if(d=P(b,"barre")){var e;e=e||{};e.type=O(Oc(d,"type",f));Bc(d,e);c.Pi=e}return c}
function Wd(a,b){var c;c=c||{};Ac(b,c);Bc(b,c);Cc(b,c);Ec(b,c);c.height=b.la("height",f);c.width=b.la("width",f);c.Pn=J(b,"unplayed","x");c.of=O(b.la("frame-strings",f));c.Rf=O(b.la("frame-frets",f));c.ye=1;var d=P(b,"first-fret");d&&(c.ye=K(d,f,1),c.vm=J(d,"text",""),c.um=L(d,"location",["left","right"],"right"));Q(b,"frame-note",function(a,b){c.Qf=c.Qf||[];c.Qf.push(Vd(this,b))},a);return c}
function Xd(a,b){var c=I(),b=b||{};b.type=L(a,"type",["explicit","implied","alternate"],"explicit");b.eb=Kc(a);b.hn=N(a,"print-frame",i);M(c,a,b);c.R(a,b,"above");Q(a,"root, function",function(a,c){b.oe=b.oe||[];b.oe.push(Ud(this,c))},c);var d=P(a,"frame");d&&(b.frame=Wd(c,d));if(d=P(a,"offset"))b.offset=Hd(d);Cd(c,a,b);c.O(a,b)}function Yd(a){var b;b=b||{};b.kh=O(J(a,"full-path",f));b.ei=J(a,"media-type","application/vnd.recordare.musicxml+xml");return b}
function Zd(a,b){var c;c=c||{};var d=P(b,"rootfiles");d&&Q(d,"rootfile",function(a,b){c.Bg=c.Bg||[];c.Bg.push(Yd(b))},a);return c}function $d(a){a&&$d.prototype.isPrototypeOf(a)?this.v=a.v:a&&"string"===typeof a?this.v=$($.parseXML(a)).children():a&&($.isXMLDoc(a)||Document.prototype.isPrototypeOf(a))?(this.v=$(a),(a=this.v.children("parsererror"))&&0<a.length&&aa(a.text())):this.v=a}s=$d.prototype;s.toString=r("Score.Node");s.clone=function(a){return a=a||new $d(this.v)};
s.is=function(a){a=$d.prototype.isPrototypeOf(a)?a.v:a;return this.v.is(a)};s.Rb=function(a){var b=f;this.v&&(a===f?b=this.v.first().text():(b=this.v.attr(a),b===f&&(b=this.v.children(a).first().text())));return b};function J(a,b,c){return(a=a.Rb(b))?a:c}s.la=function(a){return(a=this.Rb(a))?Number(a):f};function K(a,b,c){a=a.la(b);return a!==f?a:c}function dd(a,b){return b&&a.v&&0<a.v.children(b).length?i:l}
function P(a,b,c){a=a.v&&b?c?a.v.filter(b):a.v.children(b):f;if(a!==f&&0<a.length)return new $d(a)}function Q(a,b,c,d){a.v&&(b?a.v.children(b).each(function(a,b){c.call(d,a,new $d($(b)))}):a.v.each(function(a,b){c.call(d,a,new $d($(b)))}))}function rd(a){return(a=a.v?a.v.prevUntil("credit"):f)&&a.length?new $d(a):f}function Fd(a,b){var c=a.v&&b?a.v.nextUntil(b):f;return c&&c.length?new $d(c):f}function ae(a,b,c){ae.a.constructor.call(this,b);this.w=a;this.Bf=c}u(ae,$d);s=ae.prototype;s.xd=n();
s.toString=r("Score.Element");s.clone=function(a){a=a||new ae(this.w,this.v,this.Bf);this.attributes&&(a.attributes=this.attributes);this.Va&&(a.Va=this.Va);this.Ab&&(a.Ab=this.Ab);this.ob&&(a.ob=this.ob);this.pb&&(a.pb=this.pb);this.ea&&(a.ea=this.ea);this.Db&&(a.Db=this.Db);this.time&&(a.time=this.time);this.key&&(a.key=this.key);return ae.a.clone.call(this,a)};
function be(a,b,c){var d;d=2;for(var e=a;e&&!b.call(a,e);){var g=c?e.prev:e.next;if(!g&&1===d&&e.w&&(e=c?e.w.prev:e.w.next))g=(e=e.fc)&&0<e.length?c?e[e.length-1]:e[0]:g;e=g}return e}s.ua=n();s.La=n();s.Fa=function(){return this.Va||l};s.jb=o("Ab");s.O=o("k");s.oc=function(){return this.ob||l};s.ba=function(){return this.pb||l};s.q=function(){return this.ea||l};s.rb=function(){return this.Db||l};s.getTime=function(){return this.time||l};s.getKey=function(){return this.key||l};
s.m=function(){var a=new Mb;this.Q(a);return a};s.Q=function(a){a.n=this;this.cf=a};s.t=o("cf");function ce(a,b){ce.a.constructor.call(this,a,b)}u(ce,ae);ce.prototype.toString=r("ScoreUnknown");ce.prototype.clone=function(a){a=a||new ce(this.w,this.v);return ce.a.clone.call(this,a)};function de(a,b){de.a.constructor.call(this,a,b)}u(de,ae);de.prototype.clone=function(a){a=a||new de(this.w,this.v);return de.a.clone.call(this,a)};de.prototype.toString=r("Score.AttributeElement");de.prototype.ua=r(1);
de.prototype.La=function(){return this.ua()};function ee(a,b,c){ee.a.constructor.call(this,a,b,c)}u(ee,ae);ee.prototype.clone=function(a){a=a||new ee(this.w,this.v);return ee.a.clone.call(this,a)};ee.prototype.toString=r("Score.DataElement");ee.prototype.ua=o("duration");ee.prototype.La=function(){var a=this.ua(),b=this.Fa(),c=fe(this.w);return 1E3*a*c/b};function ge(a,b){ge.a.constructor.call(this,a,b,he);var c=this;I();c=c||{};c.id=O(J(this,"id",f))}var ie;u(ge,ae);var he=["measure"];s=ge.prototype;
s.toString=r("ScorePart");s.nj=function(a,b){for(var c=a.Rc();0<--c;)b.Ld();return this.qd(a)};s.xd=function(){var a=ie;a===f&&(ie=a=[this.nj]);return a};s.m=r(k);s.getName=function(){return this.$e?this.$e:this.yg};s.Sf=function(){return this.Ze?this.Ze:this.Ye?this.Ye:this.getName()};s.oc=function(){var a=this.ob;a===f&&(this.ob=a=new je(this));return a};s.ba=function(){return ke(this.oc(),this)};s.Fa=function(){return this.ba().Fa()};s.jb=function(){return this.ba().jb()};function le(){}s=le.prototype;
s.toString=o("Ed");s.getName=o("Ed");s.uh=function(){var a=this.i("width"),b=this.i("height");return 0!==a?b/a:1};s.Eh=function(){var a=this.i("width"),b=this.i("height");return 0!==b?a/b:1};s.zh=function(){return[]};s.P=function(){var a=f;this.qg?a={e:this.sg,c:this.ug,f:this.rg,d:this.tg}:(a={},a.e=E(this,this.ga||"parent","x")||0,a.c=E(this,this.ga||"parent","y")||0,a.f=a.e+this.i("width"),a.d=a.c+this.i("height"));return a};
s.dd=function(a){this.qg=i;this.sg=a.e;this.ug=a.c;this.rg=a.f;this.tg=a.d};function me(){}function ne(a,b){a.orientation=b||1;a.Qh()?(a.U="width",a.ab="height",a.Z="x",a.lb="y"):(a.U="height",a.ab="width",a.Z="y",a.lb="x")}me.prototype.Ae=o("orientation");me.prototype.Qh=function(){return 1===this.orientation};function oe(){}
oe.prototype.o=function(a,b,c,d,e,g,h){var j=pe(this,a);j!==f&&(this.zg(a,b,c,d,e,g,h),this.Hg(a,j),b=f,a.Od!==f?b=qe(this,a,this.lb,this.ab):(b=this.Ya(this.ab),b=Math.max(b,a.i(this.ab))),Gb(this,this.ab,b));return j};oe.prototype.zg=function(a,b,c,d,e,g,h){h?this.ol=i:this.nl=i;if(g&&(this.ga||(this.ga=g),g=this.ga?E(a,this.ga,this.Z):f,g!==f&&(a.Yc=g),g=this.ga?E(a,this.ga,this.lb):f,g!==f))a.Od=g;h?a.ql=i:a.pl=i;b&&c?a.ki=i:b&&!c&&(a.wg=i);a.W=d||0;a.Ra=e||0};
function qe(a,b,c,d){var e=a.Ya(d),d=b.i(d),b=E(b,a.ga,c),d=b+d,g=E(a,a.ga,c),h=g!==f?g+e:f,h=h!==f?Math.max(h,d):d,g=g!==f?Math.min(g,b):b;F(a,a.ga,c,g);return e=Math.max(e,h-g)}oe.prototype.Hg=function(a,b){var c=f;a.Yc!==f?c=qe(this,a,this.Z,this.U):(c=this.Ya(this.U),c+=a.W,c+=a.Ra,0<b&&(c+=this.Sa),c+=a.i(this.U));Gb(this,this.U,c)};function re(){}v(re,Ab);s=re.prototype;s.vb=function(){return!this.Ne};
function se(a){var b=0;te(a,function(a){if(this.xe(a))return l;!a.Yc&&(a.ki||a.wg)&&++b;return l},a);return b}s.ne=function(a,b,c){return b/c};s.Lf=function(a,b,c,d,e,g){d[this.U]+=g;b.Yc!==f&&(d[this.U]=ue(this,this.Z)+a[this.U]-b.Yc)};function ue(a,b){return a.ga?E(a,a.ga,b):f}function ve(a,b,c){b[a.Z]=a.Ne?c[a.U]:0;b[a.lb]=0}s.vg=function(a,b,c,d){this.vb()?c[this.Z]+=b.W:(c[this.Z]-=d[this.U],c[this.Z]-=b.W);b.Yc!==f&&(c[this.Z]=b.Yc-ue(this,this.Z))};s.xe=function(a){return this.Ne?!a.ql:!a.pl};
s.wa=function(a){var b;if(!(b=!Bb(this,a))){a:{if(0<we(this)){b=a[this.U]-this.Ya(this.U);if(this.nl&&(this.Ne=l,!xe(this,a,b))){a=l;break a}if(this.ol&&(this.Ne=i,!xe(this,a,b))){a=l;break a}}a=i}b=!a}return b?l:i};
function xe(a,b,c){var d=se(a),e={},g={};ve(a,e,b);return te(a,function(a){if(this.xe(a))return l;g[this.U]=a.i(this.U);g[this.ab]=a.i(this.ab);a.ki&&this.Lf(b,a,e,g,c,this.ne(a,c,d));if(a.wg){var j=this.ne(a,c,d);a.cn=a.W;a.bn=a.Ra;var m=0.5*j,p=0.5*j;a.W!==a.Ra&&(m=j*a.W/(a.W+a.Ra),p=j*a.Ra/(a.W+a.Ra));a.W+=m;a.Ra+=p}this.vg(b,a,e,g,c,d);a.Od!==f&&(e[this.lb]=a.Od-ue(this,this.lb));a.Ue&&(g[this.ab]=b[this.ab]-e[this.lb]);F(a,"parent",this.Z,e[this.Z]);F(a,"parent",this.lb,e[this.lb]);if(!a.wa(g))return i;
this.vb()?(e[this.Z]+=g[this.U],e[this.Z]+=a.Ra,e[this.Z]+=this.Sa):(e[this.Z]-=a.Ra,e[this.Z]-=this.Sa);return l},a)?l:i}function we(a){return a.children?a.children.length:0}function pe(a,b){a.children=a.children||[];var c=a.children.length;a.children.push(b);return c}function te(a,b,c){return a.children?a.children.some(function(a,c,g){return b.call(this,a,c,g)},c):l}function ye(a){var b=a.children;delete a.children;return b}
function ze(a,b){te(a,function(a){b.children=b.children||[];b.children.push(a.clone());return l},a);return b}function Ae(){return Ae.a.constructor.call(this)}u(Ae,Mb);v(Ae,n());Ae.prototype.toString=r("Renderer.PaintableContainer");Ae.prototype.clone=function(a){a=a||new Ae;return ze(this,Ae.a.clone.call(this,a))};Ae.prototype.p=function(a){Ae.a.p.call(this,a);Be(this,a)};
function Be(a,b){te(a,function(a){b.save();var d;d=E(a,"parent","x");var e;e=E(a,"parent","y");d!==f&&e!==f&&b.translate(d,e);d=a.debug;a.debug=Pb(this);a.p(b);a.debug=d;b.restore();return l},a)}function Ce(a,b){Ce.a.constructor.call(this);ne(this,a);this.Sa=b||0}u(Ce,Ae);v(Ce,me);v(Ce,oe);v(Ce,re);Ce.prototype.toString=r("Renderer.Box");Ce.prototype.clone=function(a){a=a||new Ce(this.Ae(),this.Sa);return Ce.a.clone.call(this,a)};function De(a){De.a.constructor.call(this,1,a)}u(De,Ce);
De.prototype.toString=r("Renderer.HBox");De.prototype.clone=function(a){a=a||new De(this.Sa);return De.a.clone.call(this,a)};function Ee(a){Ee.a.constructor.call(this,2,a)}u(Ee,Ce);Ee.prototype.toString=r("Renderer.VBox");Ee.prototype.clone=function(a){a=a||new Ee(this.Sa);return Ee.a.clone.call(this,a)};function Fe(a,b){Fe.a.constructor.call(this,b);this.Ed=a||"VBoxGlyph"}u(Fe,Ee);v(Fe,le);Fe.prototype.clone=function(a){a=a||new Fe(this.getName(),this.Sa);return Fe.a.clone.call(this,a)};
function R(a,b){R.a.constructor.call(this,b);this.Ed=a||"HBoxGlyph"}u(R,De);v(R,le);R.prototype.clone=function(a){a=a||new R(this.getName(),this.Sa);return R.a.clone.call(this,a)};function S(a){S.a.constructor.call(this);this.Ed=a||"CustomGlyph"}u(S,Mb);v(S,le);S.prototype.clone=function(a){a=a||new S(this.getName());return S.a.clone.call(this,a)};function T(a,b,c){T.a.constructor.call(this,"TextBox");this.eg=a||"left";this.de=b||"middle";this.border=c||0}u(T,S);
T.prototype.p=function(a){T.a.p.call(this,a);a.save();var b=Ib(this,"height");a.transform(1,0,0,-1,0,0+b);a.hf(this.de);a.Td(this.font);a.fillText(this.text,Ge(this),He(this),f,this.hb);a.restore()};T.prototype.clone=function(a){a=a||new T(this.eg,this.de,this.border);return T.a.clone.call(this,a)};T.prototype.Ya=function(a){var b="metric_"+a;return!this[b]?T.a.Ya.call(this,a):this[b]+2*this.border};
T.prototype.P=function(){if(this.ml)return this.ml;var a=this.i("width"),b=this.i("height");return{e:0,c:0.5*-b,f:a,d:0.5*b}};function Ie(a,b,c,d,e){a.text=b;a.font=c||"normal 16px sans-serif";e!==f&&(a.hb=e);d.save();d.Td(a.font);a.metric_width=d.measureText(a.text,a.hb);a.metric_height=d.measureText("W");d.restore()}function Ge(a){var b=f;"right"===a.eg?(b=Ib(a,"width"),b=b-a.metric_width-a.border):"center"===a.eg?(b=Ib(a,"width"),b=0.5*(b-a.metric_width)):b=a.border;return b}
function He(a){var b=f;"top"===a.de?b=a.border:"middle"===a.de||"baseline"===a.de?(b=Ib(a,"height"),b*=0.5):(b=Ib(a,"height"),b-=a.border);return b}function Je(){Je.a.constructor.call(this,"Barline")}u(Je,S);s=Je.prototype;s.clone=function(a){a=a||new Je;return Je.a.clone.call(this,a)};
s.Ya=function(a){if("width"===a){var a=0,b=this.n;b.repeat&&(a+=4*U(this));switch(b.Ic){case "light-light":a+=2*U(this)+2*U(this);break;case "light-heavy":case "heavy-light":a+=U(this)+2*U(this)+4*U(this);break;case "heavy-heavy":a+=8*U(this)+2*U(this);break;default:a+=U(this)}}else a=Ke(this);return a};s.q=function(){return this.n.ba().ma(this.Ka)};function U(a){return a.Oe!==f?a.Oe:a.q().tb()}function Ke(a){return a.ld!==f?a.ld:(a.q().fa-1)*Le(a.q())}
s.Mc=function(a,b){var c=Ke(this);line_width=U(this);for(var b=b+0.5*line_width,d=0,e=0;e<c;++d,e+=4)this.J(a,b,line_width,e,e+=0===d||4===d?3:6)};s.J=function(a,b,c,d,e){d=d||0;e=e||d+(this.ve!==f?this.ve:Ke(this));a.beginPath();a.X(c);a.moveTo(b,d);a.lineTo(b,e);a.stroke()};function Me(a,b,c,d){a.beginPath();a.arc(b,c,d,0,2*Math.PI);a.closePath();a.fill()}function Ne(a,b){var c=4*U(a),d=2*U(a),e=a.q(),e=V(e,Oe(e))-V(e,1),e=e-2*d;Me(b,c,e,d);Me(b,c,e+4*d,d)}
s.p=function(a){Je.a.p.call(this,a);if(!this.gl){a.save();var b=this.n;b.repeat&&"backward"===b.repeat.direction&&(Ne(this,a),a.translate(8*U(this),0));var c=0,d=f;switch(b.Ic){case "light-light":d=U(this);c+=0.5*d;this.J(a,c,d);c=c+0.5*d+2*U(this);c+=0.5*d;this.J(a,c,d);break;case "light-heavy":d=U(this);c+=0.5*d;this.J(a,c,d);c=c+0.5*d+2*U(this);d=4*U(this);c+=0.5*d;this.J(a,c,d);break;case "heavy-light":d=4*U(this);c+=0.5*d;this.J(a,c,d);c=c+0.5*d+2*U(this);d=U(this);c+=0.5*d;this.J(a,c,d);break;
case "heavy-heavy":d=4*U(this);c+=0.5*d;this.J(a,c,d);c=c+0.5*d+2*U(this);c+=0.5*d;this.J(a,c,d);break;case "heavy":d=4*U(this);c+=0.5*d;this.J(a,c,d);break;case "dotted":for(var e=c,g=Ke(this),h=0;h<g;h+=10)Me(a,e+2,h+5,2);break;case "dashed":this.Mc(a,c);break;case "tick":d=U(this);c+=0.5*d;this.J(a,c,d,35,45);break;case "short":d=U(this);c+=0.5*d;this.J(a,c,d,10,30);break;case "regular":d=U(this),c+=0.5*d,this.J(a,c,d)}b.repeat&&"forward"===b.repeat.direction&&(a.translate(c+d,0),Ne(this,a));a.restore()}};
function Pe(a,b){Pe.a.constructor.call(this,a,b);if(b&&this.is("part-group")){var c=this;I();c=c||{};c.k=K(this,"number",1);c.type=O(Oc(this,"type",f));c.Jh=J(this,"group-name","");c.Kh=J(this,"group-name-display","");c.Hh=J(this,"group-abbreviation","");c.Ih=J(this,"group-abbreviation-display","");c.Fd=L(this,"group-symbol",["none","brace","line","bracket","square"],"none");c.Cm=N(this,"group-barline",l);c.Dm=dd(this,"group-time")}this.Ic="regular"}u(Pe,ae);Pe.prototype.toString=r("Score.PartGroup");
function Qe(a,b,c){Qe.a.constructor.call(this);this.Ei=a;this.Gg=b;this.Oe=4;this.ld=c}u(Qe,Je);Qe.prototype.clone=function(a){a=a||new Qe(this.Ei.clone(),this.Gg.clone(),Ke(this));return Qe.a.clone.call(this,a)};Qe.prototype.p=function(a){Qe.a.p.call(this,a);var b=this.Gg.i("height");a.translate(0,-b);this.Gg.p(a);a.translate(0,b+Ke(this));this.Ei.p(a)};
function Re(a,b){function c(b){b=G(a,b,f,10);b.wa({width:b.i("width"),height:b.i("height")});return b}return new Qe(c("brackettips.up"),c("brackettips.down"),b)}
Pe.prototype.m=function(a,b){var c=f;if("line"===this.Fd){var c=new Fe("GroupLine"),d=G(a,"scripts.tenuto",10,f);F(d,"groupline","x",0);c.o(d,l,l,0,0,"groupline");d=new Je;d.n={Ic:"regular"};d.Oe=2;d.ld=b?b:50;F(d,"groupline","x",0);c.o(d,l,l,0,0,"groupline");d=G(a,"scripts.tenuto",10,f);F(d,"groupline","x",0);c.o(d,l,l,0,0,"groupline")}else"bracket"===this.Fd?c=Re(a,b):"brace"===this.Fd&&(c=G(a,"brace445",f,b));c?this.Q(c):c=k;return c};Pe.prototype.getName=function(){return this.Kh?this.Kh:this.Jh};
Pe.prototype.Sf=function(){return this.Ih?this.Ih:this.Hh?this.Hh:this.getName()};Pe.prototype.O=n();function Se(a,b){Se.a.constructor.call(this,a,b,Te)}var Ue,Te=["part-group","score-part"];u(Se,ae);function Ve(a,b){Ve.a.constructor.call(this,a,b);var c=this;I();c=c||{};c.id=O(J(this,"id",f));c.id&&(c.Fm=J(this,"identification",f),c.yg=J(this,"part-name",""),c.$e=J(this,"part-name-display",""),c.Ye=J(this,"part-abbreviation",""),c.Ze=J(this,"part-abbreviation-display",""))}u(Ve,ae);
Ve.prototype.toString=r("Score.PartListItem");s=Se.prototype;s.qj=function(a,b){if(Pe.prototype.isPrototypeOf(a)){if("start"===a.type)for(b=b.clone();b.Tc();){var c=b.Ld();if(Pe.prototype.isPrototypeOf(c)&&"stop"===c.type&&c.k===a.k&&a.Wd&&a.nf&&a.Wd!==a.nf){this.qd(a);break}else Ve.prototype.isPrototypeOf(c)&&(a.Wd||(a.Wd=c),a.nf=c)}return a}};s.xd=function(){var a=Ue;a===f&&(Ue=a=[this.qj]);return a};s.toString=r("Score.PartList");s.m=r(k);
s.Zf=function(){for(var a=[],b=We(this);b.S();){var c=b.next();Pe.prototype.isPrototypeOf(c)&&a.push(c)}return a};function Xe(a){for(var b=[],a=We(a);a.S();){var c=a.next();Ve.prototype.isPrototypeOf(c)&&b.push(c)}return b}function Ye(a){Ye.a.constructor.call(this,k,a,Ze);this.v&&(this.v=this.v.is("score-partwise")?this.v:this.v.find("score-partwise"))}var Ze=["part-list","part"];u(Ye,ae);Ye.prototype.toString=r("Score.Source");
function $e(a){for(var b=f,c=[],a=We(a);a.S();){var d=a.next();Se.prototype.isPrototypeOf(d)?b=d:c.push(d)}if(b&&1<=c.length){var e=[],g=Xe(b);c.forEach(function(a){g.some(function(b){return a.id===b.id?(a.yg=b.yg,a.$e=b.$e,a.Ye=b.Ye,a.Ze=b.Ze,i):l})&&e.push(a)});return e}}Ye.prototype.Zf=function(){for(var a=We(this);a.S();){var b=a.next();if(Se.prototype.isPrototypeOf(b))return b.Zf()}return[]};
function af(){this.qi={Yk:7,Kl:40};this.We={$c:f,ad:f};this.We.Cc={};this.We.Cc.both={"left-margin":0,"right-margin":0,"top-margin":0,"bottom-margin":0};this.Bi={Ci:{"left-margin":0,"right-margin":0},zi:0,Fi:0}}af.prototype.Ah=o("qi");function bf(a){this.$a=a}s=bf.prototype;s.Be=function(){return this.$a.$c};s.ti=function(a){this.$a.$c=a};s.zd=function(){return this.$a.ad};s.ui=function(a){this.$a.ad=a};s.ze=function(a){if(this.$a&&this.$a.Cc)return this.$a.Cc[a]||this.$a.Cc.both};
af.prototype.Fb=function(){return new bf(this.We)};function cf(a){this.$a=a}cf.prototype.ze=function(){return this.$a.Ci};function df(a){return{top:a.$a.Fi,$m:a.$a.zi}}af.prototype.rc=function(){return new cf(this.Bi)};af.prototype.oa=function(a,b,c){if("lyric"!==a)return"music"===a?this.cl:this.Rl;var d=f;this.vc&&this.vc.some(function(a){return b!==f&&b===a.k||c!==f&&c===a.name?(d=a,i):l});d||(d=this.vc&&0<this.vc.length?this.vc[0]:{Cj:"Times New Roman",Ea:"medium"},d.k=b,d.name=c);return d};
function ef(a){if(a.Th===f){var b=new af,c=P(a,"defaults");c&&pd(I(),c,b);a.Th=b}return a.Th}function ff(){}function gf(a){return(a=a.Ff.filter(function(a){return a.Sk},a))&&0<a.length?a:k}ff.prototype.Qb=o("page");function hf(a){a.qe===f&&(Q(a,"credit",function(a,c){var d=new ff;qd(I(),c,d);this.qe=this.qe||[];this.qe.push(d)},a),a.dj===f&&(a.dj=k));return a.qe}Ye.prototype.m=r(k);function jf(a,b){this.context=a;this.source=b}s=jf.prototype;s.Fb=function(){return ef(this.source).Fb()};s.rc=function(){return ef(this.source).rc()};
s.ui=ba("ad");s.zd=function(){return this.ad?this.ad:this.Fb().zd()};s.ti=ba("$c");s.Be=function(){return this.$c?this.$c:this.Fb().Be()};function kf(a,b){a[b+"-margin"]=20}function lf(a,b,c){var c=c+"-margin",d=a[c];if(d!==f)return d;var d=a.Fb().ze(mf(b)),a=a.rc(),e=a.ze();return"top-margin"===c?(a=df(a),d[c]+(1===b.Qb()?a.top:0)):"bottom-margin"===c?d[c]:d[c]+e[c]}function nf(a,b){a.Fb();mf(b);a.rc();return a.zd()-lf(a,b,"left")-lf(a,b,"right")}
function of(a,b){if(a.di)return a.di;var c=a.Fb().ze(mf(b)),d=df(a.rc()),c=a.Be()-(c["top-margin"]+c["bottom-margin"]);1===b.Qb()&&(c-=d.top);return c}function pf(a){this.context=a}
pf.prototype.$=function(a,b){if(1===a.Qb()&&1===b.Qb()){var c=gf(a);c&&c.forEach(function(a){var c=new T(a.Mk,a.Pl);Ie(c,a.text,[a.font.Dj,a.font.Ea+"px","sans-serif"].join(" "),this.context);var g=0;"left"===a.jg?g=0:"center"===a.jg?g=0.5*(b.i("width")-c.i("width")):"right"===a.jg&&(g=b.i("width")-c.i("width"));F(c,"page","x",g);b.o(c,l,l,10,10,"page",i)},this)}return b};function qf(a){this.context=a}
qf.prototype.$=function(a,b,c){var d="even"===mf(b)?"left":"right",d=new T(d);Ie(d,b.Qb(),"bold 12px sans-serif",this.context);var e=d.i("width"),a="even"===mf(b)?lf(a,b,"left")-e-5:a.zd()-lf(a,b,"right")+5;F(d,"page","x",a);b.o(d,l,l,0,0,"page",c?i:l);return b};function rf(){}function sf(a){a.k=a.k||1;a.k+=1}rf.prototype.Qb=function(){return this.k=this.k||1};function mf(a){return 0===a.Qb()%2?"even":"odd"}function tf(a){tf.a.constructor.call(this,"Page");this.k=a.Qb()}u(tf,Fe);v(tf,rf);
tf.prototype.p=function(a){a.save();var b=this.i("height");a.transform(1,0,0,-1,0,b);tf.a.p.call(this,a);a.restore()};function uf(a,b){this.k=a;this.j=b}s=uf.prototype;s.toString=r("Score.Connector");s.l=function(){aa(Error("ScoreLibrary.Score.Connector.toNodeString(): overload me!"))};s.clone=function(a){a=a||new uf(this.k,this.j);this.I&&(a.I=this.I.slice(0));return a};s.la=o("k");s.r=o("I");s.ta=function(a){return/(begin|continue|end)/.test(a)};s.na=function(a){return"begin"===a};
s.va=function(a){return"end"===a};s.Gc=function(a,b,c,d){if(!this.zf(a,b,c))return l;this.I=this.I||[];this.I.push(c);this.zc(a,b,c,d);return i};s.zf=function(a){return a!==this.k||this.ended?l:i};s.zc=function(a,b){this.va(b)&&(this.ended=i)};s.ub=o("Ec");s.$f=n();s.af=function(a,b){var c=this.$f(a,b);c&&(this.td(c),this.jd(c))};s.td=function(a){this.I.forEach(function(b,c,d){a.forEach(function(a){a.Wa(b,c,d)})},this)};
s.jd=function(a){this.I.forEach(function(b,c,d){a.forEach(function(a){a.fb(b,c,d)})},this)};
s.R=function(){var a=f;switch(this.l()){case "harmony-frame":case "harmony-chord":case "staff-lyrics":case "lyric":case "rehearsal":case "words":case "metronome":case "wedge":case "tuplet":case "toe":case "tap":case "heel":case "snap-pizzicato":case "stopped":case "triple-tongue":case "double-tongue":case "string":case "fret":case "fingering":case "pluck":case "thumb-position":case "open-string":case "harmonic":case "down-bow":case "up-bow":case "dynamics":case "schleifer":case "inverted-mordent":case "mordent":case "shake":case "wavy-line":case "vertical-turn":case "delayed-inverted-turn":case "inverted-turn":case "delayed-turn":case "turn":case "trill-mark":case "dashes":case "bracket":case "ending":case "accidental-mark":case "fermata":case "accordion-registration":case "pedal":case "segno":case "coda":case "caesura":case "breath-mark":case "accent":case "octave-shift":case "harp-pedals":a="staff";
break;case "glissando":case "slide":case "tremolo":case "beam":case "bend":case "falloff":case "doit":case "plop":case "scoop":case "staccatissimo":case "detached-legato":case "tenuto":case "staccato":case "strong-accent":case "slur":case "hammer-on":case "pull-off":case "tied":a="notes"}return a};s.s=function(){return this.j?"above"===this.j.Ta?"upper":"lower":"upper"};s.Je=r(i);
s.Gb=function(){var a=5;switch(this.l()){case "caesura":a=-10;break;case "slide":case "glissando":case "beam":case "tremolo":case "tied":a=0}return a};
function vf(a,b,c){var d=0;switch(a.l()){case "harmony-frame":case "harmony-chord":case "tap":case "heel":case "toe":case "stopped":case "snap-pizzicato":case "double-tongue":case "triple-tongue":case "fingering":case "pluck":case "string":case "open-string":case "thumb-position":case "harmonic":case "up-bow":case "down-bow":case "shake":case "mordent":case "inverted-mordent":case "schleifer":case "turn":case "delayed-turn":case "inverted-turn":case "delayed-inverted-turn":case "vertical-turn":case "trill-mark":case "dynamics":case "fermata":case "accidental-mark":case "accent":case "strong-accent":case "staccato":case "tenuto":case "detached-legato":case "staccatissimo":var e=a.r()[0],
g=e.t(),h=f,d=f;W.prototype.isPrototypeOf(e)&&(h=g.Ob(),d=g.aa());e=0;if(g.wg)var j=b.kg(g.da),e=e+(g.W+c*j/b.Pb()*g.W/(g.W+g.Ra));b=0;h&&(b=h.i("width"));c=0;d&&(c+=d.W,c+=0.5*d.i("width"));a=a.t().i("width");d=e+b+c-0.5*a;break;case "pedal":case "accordion-registration":a=a.t().i("width");d=0.5*-a;break;case "caesura":case "breath-mark":g=a.r()[0].t();d+=g.W+g.i("width")+g.Ra;break;case "rehearsal":case "segno":case "coda":a=a.t().i("width");d=-a;break;case "bend":d+=10}return d}s.V=function(){aa(Error("ScoreLibrary.Score.Connector.getClosestNoteToMe(): overload me!"))};
s.ia=function(){aa(Error("ScoreLibrary.Score.Connector.getFarmostNoteToMe(): overload me!"))};s.Q=function(a){a.n=this;this.cf=a};s.t=o("cf");s.m=function(){aa(Error("ScoreLibrary.Score.Connector.createRenderer(): overload me!"))};function wf(){}function xf(a,b,c){b.forEach(function(a){var b=c.ka(a.prototype.l());b&&yf(this,c,a,b)},a)}wf.prototype.Mh=r(i);
wf.prototype.reset=function(){if(this.ra){var a=f;this.ra.forEach(function(b){!b.ended&&/slur|tied/.test(b.l())&&(a=a||[],b=b.clone(),b.Vc=i,a.push(b))});this.ra=a}};wf.prototype.ka=function(a,b){return a?this.ra?this.ra.filter(function(c){return RegExp.prototype.isPrototypeOf(a)?b?!a.test(c.l()):a.test(c.l()):b?a!==c.l():a===c.l()}):[]:this.ra||[]};
function yf(a,b,c,d){function e(a,b,c){zf.prototype.isPrototypeOf(c)&&(c=c.ub(/(wedge|dashes|bracket)/.test(a.prototype.l())?i:a.prototype.na(b.type)));return c}var g=f;d.forEach(function(a){if(c.prototype.ta(a.type)){this.ra=this.ra||[];if(c.prototype.na(a.type)||!this.Mh(c,a.k))g=new c(a.k,a),this.ra.push(g);else for(var d=this.ra.length-1;0<=d;--d){g=this.ra[d];var m=g.r();b=e(c,a,b);if(!g.ended&&0<m.length&&(Af.prototype.isPrototypeOf(b)||Af.prototype.isPrototypeOf(m[0])||b.sc()===m[0].sc())&&
g.la()===a.k&&c.prototype.toString()===g.toString())break;else g=f}g&&(b=e(c,a,b),g.Gc(a.k,a.type,b,a))}},a)}function Bf(a,b){Bf.a.constructor.call(this,a,b)}u(Bf,uf);s=Bf.prototype;s.toString=r("Score.Anchor");s.clone=function(a){a=a||new Bf(this.k,this.j);return Bf.a.clone.call(this,a)};s.na=r(i);s.va=r(i);s.ta=r(i);function Cf(a){this.anchor=a}Cf.prototype.Wa=n();Cf.prototype.fb=function(a,b){0===b&&(this.anchor.Ec=a)};Bf.prototype.$f=function(){return[new Cf(this)]};
function X(a,b){X.a.constructor.call(this,a,b)}u(X,Bf);s=X.prototype;s.toString=r("Score.GlyphAnchor");s.clone=function(a){a=a||new X(this.k,this.j);return X.a.clone.call(this,a)};s.N=function(){return[]};
s.nc=function(a){var b={width:f,height:f};switch(a){case "scripts.segno":b.height=30;break;case "scripts.trill_element":case "scripts.tenuto":case "scripts.dportato":case "scripts.uportato":case "scripts.sforzato":b.width=10;break;case "scripts.prall":case "scripts.mordent":case "scripts.trill":case "scripts.turn":case "scripts.reverseturn":b.width=15;break;case "scripts.snappizzicato":case "scripts.stopped":case "scripts.open":case "scripts.thumb":case "scripts.flageolet":b.width=8;break;case "scripts.upbow":case "scripts.downbow":case "comma":case "scripts.ustaccatissimo":case "scripts.dstaccatissimo":case "scripts.umarcato":case "scripts.dmarcato":b.height=
10;break;case "scripts.ufermata":case "scripts.dfermata":case "scripts.ushortfermata":case "scripts.dshortfermata":case "scripts.ulongfermata":case "scripts.dlongfermata":case "scripts.coda":b.width=20;break;case "scripts.caesura.curved":b.height=20;break;case "scripts.upedalheel":case "scripts.dpedalheel":case "scripts.upedaltoe":case "scripts.dpedaltoe":case "pedal.Ped":case "pedal.*":b.height=15;break;case "dots.dot":case "scripts.staccato":case "accordion.accDot":b.height=4;break;case "pedal..":b.height=
3;break;case "scripts.prallmordent":case "scripts.prallprall":case "scripts.prallup":case "scripts.pralldown":case "scripts.upmordent":case "scripts.downmordent":case "scripts.upprall":case "scripts.downprall":case "accordion.accDiscant":b.width=25}return b};
s.m=function(a,b){var c=f,d=fc(kc(a)),e=this.N();e&&0<e.length&&(c=1<e.length||b?new R("GlyphAnchor"):f,e.forEach(function(a){var b=this.nc(a),a=G(d,a,b.width,b.height);c?(b=a.P(),F(a,"glyph_anchor","y",b.c),c.o(a,l,l,1,1,"glyph_anchor")):c=a},this));this.Q(c);return c};function Df(a){Df.a.constructor.call(this,"Staff");this.ea=a}u(Df,S);Df.prototype.Ya=function(a){return"width"===a?0:10*(this.ea.fa-1)+this.ea.tb()};Df.prototype.clone=function(a){a=a||new Df(this.ea);return Df.a.clone.call(this,a)};
Df.prototype.p=function(a){Df.a.p.call(this,a);a.save();var b=Ib(this,"width");a.qa(this.ea.Om||"#000000");a.X(this.ea.tb());for(var c=0,d=this.ea.fa,e=1;e<=d;++e)a.beginPath(),B.J(a,0,c,b,c),a.stroke(),c+=10;a.restore()};Df.prototype.u=function(){return-V(this.ea,Oe(this.ea))};function Ef(){Ef.a.constructor.call(this,"Renderer.Note")}u(Ef,R);Ef.prototype.clone=function(a){a=a||new Ef;return Ef.a.clone.call(this,a)};
Ef.prototype.p=function(a){Ef.a.p.call(this,a);if("TAB"!==this.n.rb().T){a.save();var b=this.aa(),c=E(b,"parent","x")||0,d=E(b,"parent","y")||0,b=b.P();a.translate(c+-b.e,d+-b.c);c=this.n;if(Ff(c)){a.save();a.translate(0,-c.u());var d=c.q(),e=Ib(this.aa(),"width");c.H();var g=d.tb();a.X(g);b=-g;e+=g;g=c.q();c.H();for(var g=0>Gf(c)?V(g,1):V(g,g.fa),g=Math.abs(c.u()-g),g=Math.floor(g/10),h=1;h<=g;++h){var j=0>Gf(c)?Hf(d,2*-h):Hf(d,2*(d.fa+h-1));a.beginPath();B.J(a,b,j,e,j);a.stroke()}a.restore()}c=
this.n;if(If(c)){d=c.ja();e=this.aa();b=Ib(e,"width");e=e.P();g=c.H();h=0.5*c.q().tb();a.X(h);var j=Jf(g,h,b),m=Kf(d,g,h,e),p=Lf(c,d,g,h,e);a.beginPath();B.J(a,j,m,j,p);a.stroke();if("long"===d||"breve"===d)d="breve",g=1===g?-1:1,j=Jf(g,h,b),m=Kf(d,g,h,e),p=Lf(c,d,g,h,e),a.beginPath(),B.J(a,j,m,j,p),a.stroke()}c=this.n;e=Mf(c);if(e!==k&&"single"===e.type&&0<e.k){e=Ib(this.aa(),"width");d=c.H();b=0.5*e;1===d&&(b*=-1);g=0.5*e;-1===d&&(g+=e);e=Mf(c);for(h=0;h<e.k;++h){j=d;m=c.Za();p=h;this.n.q();m=m-
8-6*p;1===j&&(m*=-1);j=y0=m;this.n.q();y1=j-4;radian=30*Math.PI/360;a.beginPath();var q=(g-b)*Math.tan(radian),j=a,m=b,p=g,x=y1,A=y1+q,q=y0+q;j.moveTo(m,y0);j.lineTo(m,x);j.lineTo(p,A);j.lineTo(p,q);a.closePath();a.fill()}}c=this.n;Nf(c)&&this.Pf&&(a.save(),d=this.n,b=this.aa().P(),d.q().tb(),e=this.Pf.P(),1===d.H()?a.transform(1,0,0,-1,-b.e,-d.Za()+-e.c):a.translate(b.f+e.e,d.Za()+e.c),this.Pf.p(a),this.ed&&(a.translate(-3.5,0.2*c.Za()),this.ed.p(a)),a.restore());a.restore()}};
function Of(a,b){var c=f;te(a,function(a){return b.test(a.getName())?(c=a,i):l});return c}Ef.prototype.aa=function(){return Of(this,/(^noteheads|^rests|^ChordNote|^fret)/)};Ef.prototype.Ob=function(){return Of(this,/(^Accidental|^accidentals)/)};function Pf(){Pf.a.constructor.call(this,"ChordCompound")}u(Pf,R);Pf.prototype.clone=function(a){a=a||new Pf;return Pf.a.clone.call(this,a)};Pf.prototype.aa=Ef.prototype.aa;Pf.prototype.Ob=Ef.prototype.Ob;function Qf(){}
function Rf(a,b,c,d){var e=a.n,g=e.r(),h=e.s(),j=g[0].q(),m=a.yf,p=a.xf,j="upper"===h?V(j,j.fa):V(j,1);e.Vc?m=j:e.Ke&&(p=j);var q=j=f;1<g.length?(j=b===g[0]?m:p,q=c===g[0]?m:p):1===g.length&&d?(j=m,q=p):1===g.length&&!d&&(j=p,q=m);j="lower"===h?(j<=q?0:j-q)+a.i("height"):j>=q?0:j-q;a.Uc(b)&&(j+=a.Vf(b));e.Ke&&!d&&(j+="upper"===h?10:-5);return j}Qf.prototype.Uc=n();Qf.prototype.Vf=n();function Sf(a){Sf.a.constructor.call(this,a||"Slur")}u(Sf,S);v(Sf,Qf);s=Sf.prototype;
s.clone=function(a){a=a||new Sf;return Sf.a.clone.call(this,a)};
s.p=function(a){Sf.a.p.call(this,a);var b=this.n,c;c=this.n;if(c.Vc)c=35;else{c=c.r()[0];var d=c.t(),e=d.aa(),d=d.W+E(e,"parent","x"),g=this.Uc(c),h=c.H();c=d=g&&-1===h?d+e.i("width"):g&&1===h&&(this.Ie(c)||!Tf(this))?d+0:d+0.5*e.i("width")}e=this.n.r();e=Rf(this,e[0],e[e.length-1],i);h=this.n;if(h.Ke)d=this.i("width");else var g=h.r(),d=g[g.length-1],j=g[0].t(),m=d.t(),g=m.aa(),h=E(m,"parent","x")-(h.Vc?0:E(j,"parent","x"))+j.W+E(g,"parent","x"),j=this.Uc(d),m=d.H(),d=h=j&&1===m?h+0:j&&-1===m&&(this.Ie(d)||
!Tf(this))?h+g.i("width"):h+0.5*g.i("width");g=this.n.r();g=Rf(this,g[g.length-1],g[0],l);a.save();a.qa("#000000");a.beginPath();yb(a,c,e,d,g,"upper"===b.s(),25);a.closePath();a.fill();a.restore();if(b=this.Ma(a))e=g+35,j=Ib(b,"width"),h=Ib(b,"height"),c+=0.5*(d-c-j),e=g+0.5*(e-g-h),a.save(),a.translate(c,e),b.p(a),a.restore()};s.Vf=function(a){var b=this.n,c=0;!this.Ie(a)&&Tf(this)&&(c=a.Za(),c-=Math.abs(b.ia(a).u()-b.V(a).u()),c=c*("upper"===b.s()?-1:1)*(Uf(b)&&!Vf(a)?0.8:0.5));return c};
s.Uc=function(a){var b=this.n;return"upper"===b.s()&&If(a)&&-1===a.H()||"lower"===b.s()&&If(a)&&1===a.H()?i:l};s.Ie=function(a){a=this.n.V(a);return Nf(a)||a.ka("beam")?i:l};function Tf(a){var b=a.n,c=b.r(),a=b.V(c[0]),b=b.V(c[c.length-1]);return 6*Le(a.q())>=Math.abs(b.u()-a.u())}s.Ma=function(a){var b=f,c=this.n.Ga();c&&(b=new T("center"),Ie(b,c,"italic bold 12px sans-serif",a),b.wa({width:b.i("width"),height:b.i("height")}));return b};function Wf(a,b){Wf.a.constructor.call(this,a,b)}
ja("ScoreLibrary.Score.Slur",Wf);u(Wf,uf);s=Wf.prototype;s.toString=r("Score.Slur");s.l=r("slur");s.clone=function(a){a=a||new Wf(this.k,this.j);return Wf.a.clone.call(this,a)};s.ta=function(a){return/(start|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.Ie=o("Im");s.Ga=r("");s.s=function(){var a=1,b=this.r();if(b){var c=b[0],b=b[b.length-1];Vf(c)?a=-1===c.H()?1:-1:c.ca||b.ca?a=-1:c.H()===b.H()&&(a=c.H())}return-1===a?"lower":"upper"};s.Je=r(l);
s.V=function(a){if(Y.prototype.isPrototypeOf(a)){var b="lower"===this.s()?0:a.I.length-1;return a.I[b]}return a};s.ia=function(a){if(Y.prototype.isPrototypeOf(a)){var b="lower"===this.s()?a.I.length-1:0;return a.I[b]}return a};s.m=function(){var a=new Sf;C(a,"height",Uf(this)?0:17.5);this.Q(a);return a};s.Gb=function(){return Uf(this)?0:5};function Uf(a){return(a=a.r())&&(a[0].ca||a[a.length-1].ca)}function Xf(){Xf.a.constructor.call(this,"Curve")}u(Xf,S);
Xf.prototype.clone=function(a){a=a||new Xf;return Xf.a.clone.call(this,a)};Xf.prototype.p=function(a){Xf.a.p.call(this,a);var b=this.n,c=0+this.i("width"),d=0+this.i("height"),e=0+(b.ej||5),b=d-(b.ej||5);a.save();this.transform(a);a.qa("#000000");a.X(1);a.beginPath();0===d?B.J(a,0,0,c,0):0===c?B.J(a,0,0,0,d):(a.moveTo(0,0),a.quadraticCurveTo(e,b,c,d));a.stroke();a.restore()};function Yf(a,b){Yf.a.constructor.call(this,a,b)}u(Yf,X);Yf.prototype.toString=r("Score.Accent");Yf.prototype.l=r("accent");
Yf.prototype.N=function(){return["scripts.sforzato"]};Yf.prototype.clone=function(a){a=a||new Yf(this.k,this.j);return Yf.a.clone.call(this,a)};function Zf(a,b){Zf.a.constructor.call(this,a,b)}u(Zf,X);Zf.prototype.toString=r("Score.StrongAccent");Zf.prototype.l=r("strong-accent");Zf.prototype.N=function(){return["upper"===this.s()?"scripts.umarcato":"scripts.dmarcato"]};Zf.prototype.clone=function(a){a=a||new Zf(this.k,this.j);return Zf.a.clone.call(this,a)};
function $f(a,b){$f.a.constructor.call(this,a,b)}u($f,X);$f.prototype.toString=r("Score.Staccato");$f.prototype.l=r("staccato");$f.prototype.N=function(){return["scripts.staccato"]};$f.prototype.clone=function(a){a=a||new $f(this.k,this.j);return $f.a.clone.call(this,a)};function ag(a,b){ag.a.constructor.call(this,a,b)}u(ag,X);ag.prototype.toString=r("Score.Tenuto");ag.prototype.l=r("tenuto");ag.prototype.N=function(){return["scripts.tenuto"]};
ag.prototype.clone=function(a){a=a||new ag(this.k,this.j);return ag.a.clone.call(this,a)};function bg(a,b){bg.a.constructor.call(this,a,b)}u(bg,X);bg.prototype.toString=r("Score.DetachedLegato");bg.prototype.l=r("detached-legato");bg.prototype.N=function(){return["upper"===this.s()?"scripts.dportato":"scripts.uportato"]};bg.prototype.clone=function(a){a=a||new bg(this.k,this.j);return bg.a.clone.call(this,a)};function cg(a,b){cg.a.constructor.call(this,a,b)}u(cg,X);cg.prototype.toString=r("Score.Staccatissimo");
cg.prototype.l=r("staccatissimo");cg.prototype.N=function(){return["upper"===this.s()?"scripts.ustaccatissimo":"scripts.dstaccatissimo"]};cg.prototype.clone=function(a){a=a||new cg(this.k,this.j);return cg.a.clone.call(this,a)};function dg(a,b){dg.a.constructor.call(this,a,b)}u(dg,X);s=dg.prototype;s.toString=r("Score.BreathMark");s.l=r("breath-mark");s.N=function(){return["comma"]};s.clone=function(a){a=a||new dg(this.k,this.j);return dg.a.clone.call(this,a)};s.s=r("upper");
function eg(a,b){eg.a.constructor.call(this,a,b)}u(eg,X);s=eg.prototype;s.toString=r("Score.Caesura");s.l=r("caesura");s.N=function(){return["scripts.caesura.curved"]};s.clone=function(a){a=a||new eg(this.k,this.j);return eg.a.clone.call(this,a)};s.s=r("upper");function fg(a,b){fg.a.constructor.call(this,a,b)}u(fg,Bf);s=fg.prototype;s.toString=r("Score.Scoop");s.l=r("scoop");function gg(a){return a.Xg!==f?a.Xg:18}function hg(a){return a.Wg!==f?a.Wg:18}s.Gb=function(){return-hg(this)};
s.clone=function(a){a=a||new fg(this.k,this.j);return fg.a.clone.call(this,a)};s.Je=r(l);s.m=function(){var a=new Xf;C(a,"width",gg(this));C(a,"height",hg(this));this.Q(a);return a};s.Gb=function(){return-hg(this)};function ig(a,b){ig.a.constructor.call(this,a,b)}u(ig,fg);s=ig.prototype;s.toString=r("Score.Plop");s.l=r("plop");s.clone=function(a){a=a||new ig(this.k,this.j);return ig.a.clone.call(this,a)};s.m=function(){var a=ig.a.m.call(this);(new Ub(new Vb(a,l),0,hg(this))).transform();return a};
s.Gb=r(0);function jg(a,b){jg.a.constructor.call(this,a,b)}u(jg,fg);s=jg.prototype;s.toString=r("Score.Doit");s.l=r("doit");s.clone=function(a){a=a||new jg(this.k,this.j);return jg.a.clone.call(this,a)};s.m=function(){var a=jg.a.m.call(this);(new Ub(new Vb(new Vb(a,l),i),gg(this),hg(this))).transform();return a};s.Gb=r(0);function kg(a,b){kg.a.constructor.call(this,a,b)}u(kg,fg);kg.prototype.toString=r("Score.Falloff");kg.prototype.l=r("falloff");
kg.prototype.clone=function(a){a=a||new kg(this.k,this.j);return kg.a.clone.call(this,a)};kg.prototype.m=function(){var a=kg.a.m.call(this);(new Ub(new Vb(a,i),gg(this),0)).transform();return a};function lg(a){lg.a.constructor.call(this,"TextAnchor");this.$b=a}u(lg,S);lg.prototype.clone=function(a){a=a||new lg(this.$b);return lg.a.clone.call(this,a)};function mg(a,b){var c=b.i("width"),d=b.i("height");return/(square|circle|oval)/.test(a.$b.Wf())?Math.max(c,d):d}
lg.prototype.p=function(a){lg.a.p.call(this,a);var b=this.Ma(a);if(b){a.save();var c=b.i("height"),c=0.5*(mg(this,b)-c);a.translate(0,c);b.p(a);var d=this.$b.Wf();if(d&&"none"!==d){a.save();a.X(1);a.qa("#000000");a.beginPath();b=this.Da.i("width");c=this.Da.i("height");switch(d){case "oval":case "circle":d=B;d=Math.max(b,c);a.arc(0.5*b,0.5*c,0.5*d,0,2*Math.PI);break;case "rectangle":a.rect(0,0,b,c);break;default:case "square":d=Math.max(b,c);a.rect(0,0-0.5*(d-c),d,d);break;case "bracket":d=B,zb(d,
a,0,0,b,c,8)}a.stroke();a.restore()}a.restore()}};lg.prototype.Ma=function(a){if(this.Da===f){var b=this.$b.Ga(a);b&&(this.Da=new T("left"),kc(a).Ea=14,Ie(this.Da,b,this.$b.oa(),a,this.$b.qc()),a=this.Da.i("width"),b=this.Da.i("height"),this.Da.wa({width:a,height:b}),b=mg(this,this.Da),C(this,"width",a),C(this,"height",b))}return this.Da};function ng(a){ng.a.constructor.call(this,"TextAnchor");this.$b=a}u(ng,lg);ng.prototype.clone=function(a){a=a||new ng(this.$b);return ng.a.clone.call(this,a)};
ng.prototype.p=function(a){ng.a.p.call(this,a);var b=this.n,c=b.r(),d=f;if(c&&(d=c[0].ka("tied"))&&"stop"===d[0].type)a.save(),a.Td(b.oa()),b="(",c=0-a.measureText(b),d=0+this.i("height")-1,a.fillText(b,c,d),b=")",c=0+this.i("width"),a.fillText(b,c,d),a.restore()};function og(a,b){og.a.constructor.call(this,a,b)}u(og,Bf);s=og.prototype;s.toString=r("Score.TextAnchor");s.clone=function(a){a=a||new og(this.k,this.j);return og.a.clone.call(this,a)};s.Wf=function(){return this.j.te};s.Ga=function(){return this.j.text};
s.oa=r("italic 16px sans-serif");s.qc=n();s.m=function(a){var b=new lg(this);b.Ma(a);this.Q(b);return b};function pg(a,b){pg.a.constructor.call(this,a,b)}u(pg,X);pg.prototype.toString=r("Score.UpBow");pg.prototype.l=r("up-bow");pg.prototype.N=function(){return["scripts.upbow"]};pg.prototype.clone=function(a){a=a||new pg(this.k,this.j);return pg.a.clone.call(this,a)};function qg(a,b){qg.a.constructor.call(this,a,b)}u(qg,X);qg.prototype.toString=r("Score.DownBow");qg.prototype.l=r("down-bow");
qg.prototype.N=function(){return["scripts.downbow"]};qg.prototype.clone=function(a){a=a||new qg(this.k,this.j);return qg.a.clone.call(this,a)};function rg(a,b){rg.a.constructor.call(this,a,b)}u(rg,X);rg.prototype.toString=r("Score.Harmonic");rg.prototype.l=r("harmonic");rg.prototype.N=function(){return["scripts.flageolet"]};rg.prototype.clone=function(a){a=a||new rg(this.k,this.j);return rg.a.clone.call(this,a)};function sg(a,b){sg.a.constructor.call(this,a,b)}u(sg,X);sg.prototype.toString=r("Score.OpenString");
sg.prototype.l=r("open-string");sg.prototype.N=function(){return["scripts.open"]};sg.prototype.clone=function(a){a=a||new sg(this.k,this.j);return sg.a.clone.call(this,a)};function tg(a,b){tg.a.constructor.call(this,a,b)}u(tg,X);tg.prototype.toString=r("Score.ThumbPosition");tg.prototype.l=r("thumb-position");tg.prototype.N=function(){return["scripts.thumb"]};tg.prototype.clone=function(a){a=a||new tg(this.k,this.j);return tg.a.clone.call(this,a)};
function ug(a,b){ug.a.constructor.call(this,a,b)}u(ug,og);ug.prototype.toString=r("Score.Pluck");ug.prototype.l=r("pluck");ug.prototype.clone=function(a){a=a||new ug(this.k,this.j);return ug.a.clone.call(this,a)};ug.prototype.oa=r("italic 12px sans-serif");function vg(a,b){vg.a.constructor.call(this,a,b)}u(vg,og);vg.prototype.toString=r("Score.Fingering");vg.prototype.l=r("fingering");vg.prototype.clone=function(a){a=a||new vg(this.k,this.j);return vg.a.clone.call(this,a)};vg.prototype.oa=ug.prototype.oa;
function wg(a,b){wg.a.constructor.call(this,a,b)}u(wg,og);s=wg.prototype;s.toString=r("Score.Fret");s.l=r("fret");s.s=r("upper");s.clone=function(a){a=a||new wg(this.k,this.j);return wg.a.clone.call(this,a)};s.oa=r("bold 12px sans-serif");s.Ad=function(){return this.j.wl};s.m=function(a){var b=new ng(this);b.Ma(a);this.Q(b);return b};function xg(a,b){xg.a.constructor.call(this,a,b)}u(xg,og);xg.prototype.toString=r("Score.String");xg.prototype.l=r("string");
xg.prototype.clone=function(a){a=a||new xg(this.k,this.j);return xg.a.clone.call(this,a)};xg.prototype.oa=ug.prototype.oa;function yg(a,b){yg.a.constructor.call(this,a,b)}u(yg,X);yg.prototype.toString=r("Score.DoubleTongue");yg.prototype.l=r("double-tongue");yg.prototype.N=function(){return["dots.dot","dots.dot"]};yg.prototype.clone=function(a){a=a||new yg(this.k,this.j);return yg.a.clone.call(this,a)};function zg(a,b){zg.a.constructor.call(this,a,b)}u(zg,X);zg.prototype.toString=r("Score.TripleTongue");
zg.prototype.l=r("triple-tongue");zg.prototype.N=function(){return["dots.dot","dots.dot","dots.dot"]};zg.prototype.clone=function(a){a=a||new zg(this.k,this.j);return zg.a.clone.call(this,a)};function Ag(a,b){Ag.a.constructor.call(this,a,b)}u(Ag,X);Ag.prototype.toString=r("Score.Stopped");Ag.prototype.l=r("stopped");Ag.prototype.N=function(){return["scripts.stopped"]};Ag.prototype.clone=function(a){a=a||new Ag(this.k,this.j);return Ag.a.clone.call(this,a)};
function Bg(a,b){Bg.a.constructor.call(this,a,b)}u(Bg,X);Bg.prototype.toString=r("Score.SnapPizzicato");Bg.prototype.l=r("snap-pizzicato");Bg.prototype.N=function(){return["scripts.snappizzicato"]};Bg.prototype.clone=function(a){a=a||new Bg(this.k,this.j);return Bg.a.clone.call(this,a)};function Cg(a,b){Cg.a.constructor.call(this,a,b)}u(Cg,og);Cg.prototype.toString=r("Score.Tap");Cg.prototype.s=r("upper");Cg.prototype.l=r("tap");
Cg.prototype.clone=function(a){a=a||new Cg(this.k,this.j);return Cg.a.clone.call(this,a)};function Dg(a,b){Dg.a.constructor.call(this,a,b)}u(Dg,X);s=Dg.prototype;s.toString=r("Score.Heel");s.l=r("heel");s.s=r("upper");s.N=function(){var a;a="scripts."+("upper"===this.s()?"u":"d");return[a+"pedalheel"]};s.clone=function(a){a=a||new Dg(this.k,this.j);return Dg.a.clone.call(this,a)};function Eg(a,b){Eg.a.constructor.call(this,a,b)}u(Eg,X);s=Eg.prototype;s.toString=r("Score.Toe");s.l=r("toe");s.s=r("upper");
s.N=function(){var a;a="scripts."+("upper"===this.s()?"u":"d");return[a+"pedaltoe"]};s.clone=function(a){a=a||new Eg(this.k,this.j);return Eg.a.clone.call(this,a)};function Fg(a,b){Fg.a.constructor.call(this,a,b)}u(Fg,Wf);s=Fg.prototype;s.toString=r("Score.HammerOn");s.l=r("hammer-on");s.clone=function(a){a=a||new Fg(this.k,this.j);return Fg.a.clone.call(this,a)};s.Ga=function(){return this.j.text};s.Ad=wg.prototype.Ad;function Gg(a,b){Gg.a.constructor.call(this,a,b)}u(Gg,Fg);
Gg.prototype.toString=r("Score.PullOff");Gg.prototype.l=r("pull-off");Gg.prototype.clone=function(a){a=a||new Gg(this.k,this.j);return Gg.a.clone.call(this,a)};function Hg(a,b){Hg.a.constructor.call(this,a,b)}u(Hg,Bf);s=Hg.prototype;s.toString=r("Score.Bend");s.l=r("bend");s.clone=function(a){a=a||new Hg(this.k,this.j);return Hg.a.clone.call(this,a)};s.Gb=function(){return E(this.cf,"bendlist","y")};
s.m=function(a){var b=fc(kc(a)),c=f,d=this.j.Si;if(d&&0<d.length){c=new R("BendList");F(c,"bendlist","x",0);F(c,"bendlist","y",0);var e=0,g=0;d.forEach(function(d){var j=c,m=!d.Ag,p=m?new jg:new kg;d.ul?p.Xg=0:d.wf||(p.Wg=0);var q=p.m();if(q){var x=g+p.Gb();F(q,"bendlist","x",e);F(q,"bendlist","y",x);j.o(q,l,l,0,0,"bendlist");g+=(m?1:-1)*hg(p);e+=gg(p)}if(d.wf&&q){j=c;m=!d.Ag;if(p=G(b,m?"arrowheads.close.11":"arrowheads.close.1M1",f,8))q=p.i("width"),F(p,"bendlist","x",e-0.5*q),F(p,"bendlist","y",
m?g:g-8),j.o(p,l,l,0,0,"bendlist");if(p){var j=c,m=!d.Ag,x=d.wf,A=f,d=f;(q=Math.floor(x))&&(A=q.toString());(x-=q)&&(d="1/2");1===q&&!x&&(A="full");var D=p.i("height"),x=q=p=f;A&&(p=new T("center"),Ie(p,A,"12px sans-serif",a),q=p.i("width"),x=p.i("height"));var qa=A=f,ha=f;d&&(A=new T("center"),Ie(A,d,"normal 8px sans-serif",a),qa=A.i("width"),ha=A.i("height"));d=g;d=m?d+D:d-D;D=e;q!==f&&x!==f&&(D-=0.5*q,m||(d-=x));qa!==f&&ha!==f&&(D-=0.5*qa,m||(d-=ha));p&&(F(p,"bendlist","x",D),F(p,"bendlist","y",
d),j.o(p,l,l,0,0,"bendlist"));q!==f&&(D+=q);A&&(d+=2,F(A,"bendlist","x",D),F(A,"bendlist","y",d),j.o(A,l,l,0,0,"bendlist"))}}},this)}this.Q(c);return c};s.Ad=wg.prototype.Ad;function Ig(a,b){Ig.a.constructor.call(this,a,b)}u(Ig,X);s=Ig.prototype;s.toString=r("Score.TrillMark");s.l=r("trill-mark");s.N=function(){return["scripts.trill"]};s.s=r("upper");s.clone=function(a){a=a||new Ig(this.k,this.j);return Ig.a.clone.call(this,a)};function Jg(a,b){Jg.a.constructor.call(this,a,b)}u(Jg,X);
Jg.prototype.toString=r("Score.Turn");Jg.prototype.l=r("turn");Jg.prototype.N=function(){return[this.j.ed?"scripts.reverseturn":"scripts.turn"]};Jg.prototype.clone=function(a){a=a||new Jg(this.k,this.j);return Jg.a.clone.call(this,a)};function Kg(a,b){Kg.a.constructor.call(this,a,b)}u(Kg,Jg);Kg.prototype.toString=r("Score.DelayedTurn");Kg.prototype.l=r("delayed-turn");Kg.prototype.clone=function(a){a=a||new Kg(this.k,this.j);return Kg.a.clone.call(this,a)};
function Lg(a,b){Lg.a.constructor.call(this,a,b)}u(Lg,Jg);Lg.prototype.toString=r("Score.InvertedTurn");Lg.prototype.l=r("inverted-turn");Lg.prototype.clone=function(a){a=a||new Lg(this.k,this.j);return Lg.a.clone.call(this,a)};Lg.prototype.m=function(a){(a=Lg.a.m.call(this,a))&&(new Vb(a,i)).transform();return a};function Mg(a,b){Mg.a.constructor.call(this,a,b)}u(Mg,Lg);Mg.prototype.toString=r("Score.DelayedInvertedTurn");Mg.prototype.l=r("delayed-inverted-turn");
Mg.prototype.clone=function(a){a=a||new Mg(this.k,this.j);return Mg.a.clone.call(this,a)};function Ng(a,b){Ng.a.constructor.call(this,a,b)}u(Ng,Jg);Ng.prototype.toString=r("Score.VerticalTurn");Ng.prototype.l=r("vertical-turn");Ng.prototype.clone=function(a){a=a||new Ng(this.k,this.j);return Ng.a.clone.call(this,a)};Ng.prototype.m=function(a){(a=Ng.a.m.call(this,a))&&(new Tb(a,0.5*Math.PI)).transform();return a};function Og(a,b){Og.a.constructor.call(this,a,b)}u(Og,X);s=Og.prototype;s.toString=r("Score.WavyLine");
s.l=r("wavy-line");s.ta=function(a){return/(start|continue|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.clone=function(a){a=a||new Og(this.k,this.j);return Og.a.clone.call(this,a)};s.ja=function(){return this.j.type};s.s=r("upper");s.N=function(){return["scripts.trill","scripts.trill_element"]};s.af=function(a,b){var c=this.r(),d=c[0].t(),c=c[c.length-1].t(),d=Pg(a,d,b);this.Ql=Pg(a,c,b)-d;return Og.a.af.call(this,a,b)};
s.m=function(a){if(a=Og.a.m.call(this,a,i))for(var b=a.i("width"),c=a.children&&0<=we(a)-1&&we(a)-1<a.children.length?a.children[we(a)-1]:f,d=c.i("width"),b=(this.Ql-b)/d,d=0;d<=b;++d){var e=c.clone(),g=e.P();F(e,"glyph_anchor","y",g.c);a.o(e,l,l,0,0,"glyph_anchor")}return a};function Qg(a,b){Qg.a.constructor.call(this,a,b)}u(Qg,X);Qg.prototype.toString=r("Score.Shake");Qg.prototype.l=r("shake");Qg.prototype.N=function(){return["scripts.prallprall"]};
Qg.prototype.clone=function(a){a=a||new Qg(this.k,this.j);return Qg.a.clone.call(this,a)};function Rg(a,b){Rg.a.constructor.call(this,a,b)}u(Rg,X);Rg.prototype.toString=r("Score.Mordent");Rg.prototype.l=r("mordent");Rg.prototype.N=function(){var a="scripts.";if(this.j.Jd)switch(this.j.kd){case "above":a+="down";break;case "below":a+="up";break;default:a+="prall"}return[a+"mordent"]};Rg.prototype.clone=function(a){a=a||new Rg(this.k,this.j);return Rg.a.clone.call(this,a)};
function Sg(a,b){Sg.a.constructor.call(this,a,b)}u(Sg,Rg);Sg.prototype.toString=r("Score.InvertedMordent");Sg.prototype.l=r("inverted-mordent");Sg.prototype.N=function(){var a="scripts.";this.j.Jd&&("above"===this.j.kd?a+="down":"below"===this.j.kd&&(a+="up"));a+="prall";this.j.Jd&&!this.j.kd&&this.j.re&&("above"===this.j.re&&(a+="up"),"below"===this.j.re&&(a+="down"));this.j.Jd&&!this.j.kd&&!this.j.re&&(a+="prall");return[a]};
Sg.prototype.clone=function(a){a=a||new Sg(this.k,this.j);return Sg.a.clone.call(this,a)};function Tg(a,b){Tg.a.constructor.call(this,a,b)}u(Tg,X);Tg.prototype.toString=r("Score.Schleifer");Tg.prototype.l=r("schleifer");Tg.prototype.N=function(){return["scripts.upprall"]};Tg.prototype.clone=function(a){a=a||new Tg(this.k,this.j);return Tg.a.clone.call(this,a)};function Ug(){}u(Ug,re);Ug.prototype.xe=function(a){var b=Ug.a;return a.da===f||b.xe.call(this,a)};
Ug.prototype.Lf=function(a,b,c,d,e,g){if(b.da!==f&&b.yj)d[this.U]=Pg(this,b,e,i)-Pg(this,b,e);else{if(b.da!==f){var h=this.vh(b.da,i);d[this.U]=h[this.U]}Ug.a.Lf.call(this,a,b,c,d,e,g)}};Ug.prototype.ne=function(a,b,c){return a.da!==f?(a=this.kg(a.da),b*a/this.Pb()):Ug.a.ne.call(this,a,b,c)};Ug.prototype.vg=function(a,b,c,d,e){b.da!==f?c[this.Z]=Pg(this,b,e):Ug.a.vg.call(this,a,b,c,d)};
function Pg(a,b,c,d){var e=b.da;d&&(e+=b.duration);var g=c*e/a.Pb(),c=a.mc(i),h=a.Ub(e);0>h&&(h=c.length);1<=h&&c.some(function(a,b){if(b<h){g=g+a[this.U];g=g+a.Qd;g=g+a.Pd;return l}return i},a);0<h&&(g+=h*a.Sa);return g+=b.W}function Vg(){}ja("ScoreLibrary.DurationAccumulator",Vg);Vg.prototype.vd=function(){return this.bc||0};Vg.prototype.getAccDuration=Vg.prototype.vd;Vg.prototype.Pb=function(){return this.mg||0};Vg.prototype.getMaxDuration=Vg.prototype.Pb;
Vg.prototype.Mj=function(){return this.fj||0};Vg.prototype.getCurDuration=Vg.prototype.Mj;Vg.prototype.qb=function(a){this.fj=a;this.bc=this.bc!==f?this.bc+a:a;0>this.bc&&(this.bc=0);this.mg=this.mg!==f?Math.max(this.mg,this.bc):this.bc};Vg.prototype.accumulate=Vg.prototype.qb;function Wg(){}ja("ScoreLibrary.DurationKeyGenerator",Wg);v(Wg,Vg);Wg.prototype.mh=function(a){var b=this.vd();this.qb(a);return b};Wg.prototype.generate=Wg.prototype.mh;function w(){}ja("ScoreLibrary.DurationMapper",w);
v(w,Wg);w.prototype.Ub=function(a){this.Ha=this.Ha||[];return Xa(this.Ha,function(a,c){return a-c.wb}||Ya,a)};w.prototype.keyDurationToIndex=w.prototype.Ub;w.prototype.Cg=function(a,b,c,d){var c=c||l,e=this.Ub(a);0<=e?d?d(this.Ha[e],b):sb(this.Ha[e],b):(c||(b=sb({},b)),b.wb=a,Va(this.Ha,-(e+1),0,b))};w.prototype.setInformation=w.prototype.Cg;w.prototype.Wh=function(a,b,c,d){a=this.mh(a);this.Cg(a,b,c,d);return a};w.prototype.mapInformation=w.prototype.Wh;
w.prototype.mc=function(a){return this.Ha?a||l?this.Ha:this.Ha.map(function(a){a=sb({},a);delete a.wb;return a}):f};w.prototype.getAllInformations=w.prototype.mc;w.prototype.vh=function(a,b){var b=b||l,c=f;if(this.Ha){var d=this.Ub(a);0<=d&&(c=this.Ha[d],b||(c=sb({},c),delete c.wb))}return c};w.prototype.getInformation=w.prototype.vh;w.prototype.wh=function(){return this.Ha?this.Ha.map(function(a){return a.wb}):[]};w.prototype.getKeyDurations=w.prototype.wh;
w.prototype.nh=function(){var a=this.wh();a.push(this.Pb());return a};w.prototype.getAbsDurations=w.prototype.nh;w.prototype.kg=function(a){var b=0;if(this.Ha){var c=this.Ub(a);c>=this.Ha.length-1?b=this.Pb()-a:0<=c&&(b=this.Ha[c+1].wb-a)}return b};w.prototype.keyDurationToDuration=w.prototype.kg;
w.prototype.ie=function(a){if(1E3>a||0!==a%1E3)this.qb(-a);else{var b=this.nh();b.reverse();b.some(function(b,d,e){if(d<e.length-1&&1E3<=b){b-=e[d+1];if(a<b)return this.qb(-a),i;this.qb(-b);1E3<=b&&(a-=b)}return l},this)}};w.prototype.backup=w.prototype.ie;w.prototype.save=function(){var a=this.vd();this.tf=this.tf||[];this.tf.push(a)};w.prototype.save=w.prototype.save;w.prototype.restore=function(){var a=this.vd()-this.tf.pop();0<a?this.ie(a):0>a&&this.qb(-a);return a};w.prototype.restore=w.prototype.restore;
function Xg(){Xg.a.constructor.call(this)}u(Xg,Ae);wb(Xg);Xg.prototype.toString=r("Renderer.DurationContainer");Xg.prototype.clone=function(a){a=a||new Xg;return Xg.a.clone.call(this,a)};Xg.prototype.Yf=function(){return this.delegate?this.delegate:this};Xg.prototype.ff=ba("delegate");function Yg(){}u(Yg,oe);Yg.prototype.o=function(a,b,c,d,e,g,h){if(a.da===f&&a.duration===f){var j=a.n;j&&(a.duration=j.La())}return Yg.a.o.call(this,a,b,c,d,e,g,h)};
Yg.prototype.zg=function(a,b,c,d,e,g,h){function j(a,b){sb(a,b,Math.max)}Yg.a.zg.apply(this,arguments);var m={};m[this.U]=a.i(this.U);m.Qd=a.W;m.Pd=a.Ra;a.yb&&(m=Zg(a.yb,this,a,m),delete a.yb);m&&(a.da===f?a.da=this.Wh(a.duration,m,i,j):this.Cg(a.da,m,i,j))};Yg.prototype.Hg=function(a,b){if(!a.rl)if(0<=a.duration){var c=0;this.mc(i).forEach(function(a,b){c+=a[this.U];c+=a.Qd;c+=a.Pd;0<b&&(c+=this.Sa)},this);var d=this.Ya(this.U),d=Math.max(d,c);Gb(this,this.U,d)}else Yg.a.Hg.call(this,a,b)};
function $g(a){$g.a.constructor.call(this,a);ne(this,1);this.Sa=a||0}u($g,Xg);v($g,me);v($g,Yg);v($g,Ug);$g.prototype.toString=r("Renderer.DurationBox");$g.prototype.clone=function(a){a=a||new $g(this.Sa);return $g.a.clone.call(this,a)};function ah(){ah.a.constructor.call(this)}u(ah,Ee);wb(ah);ah.prototype.clone=function(a){a=a||new ah;return ah.a.clone.call(this,a)};ah.prototype.toString=r("Renderer.Part");function bh(a){var b=a.n.ba().ma(1);return E(a,"staff","y")+a.i("height")-V(b,b.fa)}
function ch(a,b){te(a,function(a){te(a,function(a){Je.prototype.isPrototypeOf(a)&&(a.ve=a.ve!==f?Math.max(a.ve,b):b)},this);return l},a)}ah.prototype.Yf=function(){return this.delegate?this.delegate:this};ah.prototype.ff=ba("delegate");function dh(a,b,c){var b=b||1,c=c||l,d=f;te(a,function(a){return a.Ka===b?(d=a,i):l},a);!d&&c&&(d=new $g,d.Ka=b,d.ff(a.Yf()),d.Dc=a.Dc,c="p"+a.Dc,d.gd=c+"s"+b,pe(a,d));return d}
function eh(a){var b=ye(a);b.sort(function(a,b){return a.Ka-b.Ka});b.forEach(function(a){a.Ue=i;fix_org_coord="staff";this.o(a,l,l,0,0,fix_org_coord)},a)}function fh(a,b){fh.a.constructor.call(this,a,b);hd(this,this)}u(fh,de);s=fh.prototype;s.toString=r("Score.Staff");s.clone=function(a){a=a||new fh(this.w,this.v);this.ud!==f&&(a.ud=this.ud);return fh.a.clone.call(this,a)};s.La=o("ud");s.m=function(){var a=new Df(this);this.Q(a);return a};s.tb=function(){return this.Rm||1};
function Le(){return 10}function Hf(a,b){var c=Math.abs(b),c=10*Math.floor(c/2)+5*(c%2);return gh(a,0<=b?c:-c)}function Oe(a){return Math.ceil(0.5*a.fa)}function V(a,b){return Hf(a,2*(b-1))}s.ma=function(a){return this.w?this.w.ma(a):f};s.pa=function(){return this.w?this.w.pa():1};function gh(a,b){var c;c=a.O();c-=1;c=a.w&&1<=c&&c<=a.w.pa()?a.w.ma(c):f;c!==f&&(b-=(a.w?a.w.ag():NaN)+10*(a.fa-1),b=gh(c,b));return b}
function hh(a){this.Ia=a.Ia;this.step=(a.step.charCodeAt(0)-65+7-2)%7;this.L=a.L!==f?a.L:0}hh.prototype.tj=function(a){return this.Ia===a.Ia&&this.step===a.step&&this.L===a.L};hh.prototype.uj=function(a){return this.step===a.step};hh.prototype.vj=function(a){return this.step===a.step&&this.L===a.L};hh.prototype.clone=function(a){return a=a||new hh({Ia:this.Ia,step:String.fromCharCode((this.step+2)%7+65),L:this.L})};function ih(a){return 7*a.Ia+a.step}
function jh(a,b){jh.a.constructor.call(this,a,b);I().rb(this,this)}u(jh,de);s=jh.prototype;s.toString=r("Score.Clef");s.getName=function(){var a=f;switch(this.T){case "G":a="clefs.G";break;case "C":a="clefs.C";break;case "F":a="clefs.F";break;case "percussion":a="clefs.percussion";break;case "TAB":a="clefs.tab";break;default:a="none"}return a};
function kh(a){if(a.Ef===f){var b=a.q();if(/(G|C|F)/.test(a.T)&&a.Vb!==f){var c='<staff-details number="'+b.O()+'"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>',c=new fh(a.w,c);a.Ef=2*(a.Vb-1)-(c.fa-b.fa)}else a.Ef=Math.ceil(1*(b.fa-1))}return a.Ef}function lh(a,b){var c=kh(a),d=a.ha();d&&(c+=ih(b)-ih(d));return Hf(a.q(),c)}function mh(a,b){var c=a.q();relative_steps=2*(c.fa-b+1-1);return Hf(c,relative_steps)}s.u=function(){return Hf(this.q(),kh(this))};
s.nc=function(){var a={width:f,height:f};switch(this.T){case "G":a.height=8*Le(this.q());break;case "C":a.height=4*Le(this.q());break;case "F":a.height=3*Le(this.q());break;case "percussion":a.height=2*Le(this.q());break;case "TAB":a.height=5*Le(this.q())}return a};s.ha=function(){this.pitch===f&&(this.pitch=/(G|C|F)/.test(this.T)?new hh({Ia:("F"===this.T?3:4)+this.nd,step:this.T,L:0}):k);return this.pitch};
s.m=function(a,b){var c=f;"none"!==this.T&&"jianpu"!==this.T&&(c=this.nc(),b||(c.height*=0.75),(c=G(a,this.getName(),c.width,c.height))&&this.Q(c));return c};function nh(a,b){nh.a.constructor.call(this,a,b);I().getTime(this,this)}u(nh,de);nh.prototype.toString=r("Score.Time");nh.prototype.clone=function(){clone=new nh(this.w,this.v);return nh.a.clone.call(this,clone)};
function oh(a,b,c,d){for(var e=1<c.length?new R("TimeSignature.Compound"):f,g=0;g<c.length;++g){var h=c.charAt(g),h=cc(b,h,"+"===h?Le(a.q()):2*Le(a.q()));if(e!==f){var j=h.P();F(h,"staff","y",j.c);e.o(h,l,l,0,0,"staff")}else e=h}d&&(a=e,b=a.P(),c=b.d-b.c,b.c-=0.5*c,b.d-=0.5*c,a.dd(b),e=a);return e}
function ph(a,b,c){var d=new Fe("TimeSignature.Fractional");[c.le,c.Jc].forEach(function(a){var a=oh(this,b,a),c=a.P();F(a,"fractional","x",0.5*-(c.f-c.e));d.o(a,l,l,0,0,"fractional")},a);c=d.P();c.c-=2*Le(a.q());c.d-=2*Le(a.q());d.dd(c);return d}
nh.prototype.m=function(a){var b=f,c=f;this.ri||(c=1<this.ke.length?new R("TimeSignature.Compound"):f,this.ke.forEach(function(d,e,g){b=f;"single-number"===this.Yb&&1===g.length&&(!/\D+/.test(g[0].Jc)&&!/\D+/.test(g[0].le))&&(b=oh(this,a,d.Jc,i));if("common"===this.Yb||"cut"===this.Yb){var h=f;"4"===d.Jc&&"4"===d.le?h=G(a,"timesig.C44",f,2*Le(this.q())):"2"===d.Jc&&"2"===d.le&&(h=G(a,"timesig.C22",f,3.4*Le(this.q())));b=h}b===f&&(b=ph(this,a,d));c!==f&&(d=b.P(),F(b,"compound","y",d.c),c.o(b,l,l,0,
0,"compound"),e!==g.length-1&&(e=cc(a,"+",Le(this.q())),g=e.P(),F(e,"compound","y",0.5*-(g.d-g.c)),c.o(e,l,l,0,0,"compound")))},this),b=c!==f?c:b);b&&this.Q(b);return b};
function qh(a,b,c,d){if(a)this.Na=a.Na,this.se=a.se,this.md=a.md;else{a=f;switch(c){case 2:a="double-sharp";break;case 1.5:a="three-quarters-sharp";break;case 1:a="sharp";break;case 0.5:a="quarter-sharp";break;case 0:a="natural";break;case -0.5:a="quarter-flat";break;case -1:a="flat";break;case -1.5:a="three-quarters-flat";break;case -2:a="double-flat"}this.Na=a}this.ea=b;this.ca=d?i:l}
qh.prototype.m=function(a){var b=f,c=f,c=f;if(this.md||this.se){b=new R("Accidental",1);F(b,"accidental","y",0);var c=this.ee("leftparen"),d=15;this.ca&&(d*=0.65);c=G(a,c,f,d);c!==f&&(d=c.P(),F(c,"accidental","y",d.c),b.o(c,l,l,0,0,"accidental"))}this.Na!==f&&(c=this.ee(this.Na),d="accidentals.doublesharp"===c?10:20,this.ca&&(d*=0.75),c=G(a,c,f,d),c!==f&&(b!==f?(d=c.P(),F(c,"accidental","y",d.c),b.o(c,l,l,0,0,"accidental")):b=c));if(this.md||this.se)c=this.ee("rightparen"),d=15,this.ca&&(d*=0.65),
c=G(a,c,f,d),c!==f&&(d=c.P(),F(c,"accidental","y",d.c),b.o(c,l,l,0,0,"accidental"));return b};
var rh={sharp:"accidentals.sharp","sharp-sharp":"accidentals.doublesharp","double-sharp":"accidentals.doublesharp",flat:"accidentals.flat","flat-flat":"accidentals.flatflat","double-flat":"accidentals.flatflat",natural:"accidentals.natural","natural-sharp":"accidentals.natural","natural-flat":"accidentals.natural","quarter-flat":"accidentals.mirroredflat","quarter-sharp":"accidentals.sharp.slashslash.stem","three-quarters-flat":"accidentals.mirroredflat.flat","three-quarters-sharp":"accidentals.sharp.slashslash.stemstemstem",
"sharp-down":"accidentals.sharp.arrowdown","sharp-up":"accidentals.sharp.arrowup","natural-down":"accidentals.natural.arrowdown","natural-up":"accidentals.natural.arrowup","flat-down":"accidentals.flat.arrowdown","flat-up":"accidentals.flat.arrowup","triple-sharp":"","triple-flat":"","slash-quarter-sharp":"accidentals.sharp.slashslashslash.stem","slash-sharp":"accidentals.sharp.slashslashslash.stemstem","slash-flat":"accidentals.flat.slash","double-slash-flat":"accidentals.flat.slashslash","sharp-1":"accidentals.1",
"sharp-2":"accidentals.2","sharp-3":"accidentals.3","sharp-5":"accidentals.4","flat-1":"accidentals.M1","flat-2":"accidentals.M2","flat-3":"accidentals.M3","flat-4":"accidentals.M4",leftparen:"accidentals.leftparen",rightparen:"accidentals.rightparen",sori:"sori",koron:"koron"};qh.prototype.ee=function(a){return rh[a]};function sh(a,b){sh.a.constructor.call(this,a,b);I().getKey(this,this)}u(sh,de);sh.prototype.toString=r("Score.Key");
sh.prototype.clone=function(a){a=a||new sh(this.w,this.v);return sh.a.clone.call(this,a)};var th={"#":"FCGDAEB".split(""),b:"BEADGCF".split("")},uh={"#":[5,5,5,5,4,5,4],b:[4,5,4,5,4,5,4]},vh={"#":[4,4,4,4,3,4,3],b:[3,4,3,4,3,4,3]},wh={"#":[3,4,3,4,3,4,3],b:[3,4,3,4,3,4,3]},xh={"#":[3,3,3,3,2,3,2],b:[2,3,2,3,2,3,2]};
function yh(a){var b=a.rb(),c=f,d=f;switch(b.T){default:case "G":c=uh;break;case "C":3===b.Vb?c=vh:4===b.Vb&&(c=wh);break;case "F":c=xh}0<a.we?(c=c["#"],d=th["#"]):0>a.we&&(c=c.b,d=th.b);for(var e=f,g=Math.abs(a.we),h=7<=g?7:g,j=0;j<h;++j){var m=(j+(7<=g?g%7:0))%7,p=(0<a.we?1:-1)*Math.floor((j+(7<=g?g:7))/7),e=e||[];e.push({Ia:c[m]+b.nd,step:d[m],L:p})}return e}function zh(a){if(a.Lg===f&&(a.fe||(a.fe=yh(a)),a.fe))a.Lg=a.fe.map(function(a){a.Ia=a.Ia+0;return new hh(a)});return a.Lg}
sh.prototype.m=function(a){function b(a,b,c,d){d=d||0;c=(new qh(f,this.q(),a.L)).m(c);if(c!==f){var e=c.P(),a=lh(this.rb(),a)+e.c;F(c,"staff","y",a);b.o(c,l,l,0,d,"staff")}}var c=f,d=zh(this),e=this.ll;if(e!==d&&(e||d))c=new R("KeyAccidentals"),this.Q(c);e&&e.forEach(function(d,e,j){d.L=0;b.call(this,d,c,a,e===j.length-1?5:0)},this);d&&d.forEach(function(d){b.call(this,d,c,a)},this);return c};function Z(a,b){Z.a.constructor.call(this,a,b,Ah);jd(this,this)}u(Z,ee);
var Ah=["part-symbol","staff-details","clef","key","time"];s=Z.prototype;s.toString=r("Score.Attributes");s.m=r(k);s.ua=r(0);s.La=function(){return this.ua()};s.Fa=o("Va");function Bh(a,b){Bh.a.constructor.call(this,a,b);b&&this.is("part-symbol")&&I().jb(this,this);this.Fd=this.Yb;this.rf=this.rf||1;this.me=this.me||a.ba().pa()}u(Bh,Pe);Bh.prototype.toString=r("Score.PartSymbol");s=Z.prototype;s.jb=o("part_symbol");
function Ch(a,b){var c=a.staves?"number"===typeof a.staves?a.staves:a.pa():b?b.pa():1;a.staves=Array(c);for(c=We(a);c.S();){var d=a,e=c.next(),g=f;Bh.prototype.isPrototypeOf(e)&&(g="part_symbol");fh.prototype.isPrototypeOf(e)&&(g="staves");jh.prototype.isPrototypeOf(e)&&(g="clefs");nh.prototype.isPrototypeOf(e)&&(g="times");sh.prototype.isPrototypeOf(e)&&(g="keys");if(g&&"part_symbol"===g)d[g]=e;else if(g&&-1===e.k)for(var h=1;h<=d.pa();++h){var j=e.clone();j.k=h;d[g]=d[g]||[];d[g].push(j)}else g&&
1<=e.k&&e.k<=d.pa()&&(d[g]=d[g]||[],d[g][e.k-1]=e)}}s.pa=function(){return this.staves.length};s.getAttribute=function(a,b){var c=this[a];return c?c[b-1]:f};s.Tf=function(){return["staves","clefs","times","keys"].map(function(a){return this[a]},this).reduce(function(a,b){return a.concat(b)},[]).filter(function(a){return a!==f})};s.ma=function(a){return this.getAttribute("staves",a)};s.Eb=function(a){return this.getAttribute("clefs",a)};s.Bd=function(a){return this.getAttribute("times",a)};
s.Qc=function(a){return this.getAttribute("keys",a)};s.ag=r(50);function Dh(a){this.zb=a}s=Dh.prototype;s.toString=r("ScoreNoteHead");s.clone=function(a){return a=a||new Dh(this.zb)};s.m=function(a){var b=this.nc();return G(a,this.getName(),b.width,b.height)};s.q=function(){return this.zb.q()};s.ja=function(){return this.zb.Te?this.zb.Te.Te:"normal"};s.nc=function(){this.q();var a={};switch(this.ja()){case "slash":a.height=18;break;default:a.height=10}this.zb.ca&&(a.height*=0.65);return a};
s.getName=function(){var a="noteheads.",b=this.ja(),c=this.zb.ja();"circle-x"===b?a+="s2xcircle":/(breve|long|maxima|whole)/.test(c)?a+="s0":("triangle"!==b?a+="s":a+=-1===this.zb.H()?"u":"d",a="square"===b?a+"2":"half"===c?a+"1":a+"2");if("slash"===b||"triangle"===b||"diamond"===b||"cross"===b)a+=b;"x"===b&&(a+="cross");"square"===b&&(a+="harmonic");return a};function W(a,b){W.a.constructor.call(this,a,b);b&&fd(this,this)}u(W,ee);s=W.prototype;s.toString=r("Score.Note");s.m=r(k);
function Eh(a){var b=f;switch(a){case "1024th":case "512th":case "256th":case "128th":b="flags.u7";break;case "64th":b="flags.u6";break;case "32nd":b="flags.u5";break;case "16th":b="flags.u4";break;case "eighth":b="flags.u3"}return b}s.Gd=function(){return this.ja()&&/whole/.test(this.ja())};function Fh(a){return a.ca}s.sc=o("sf");s.O=o("Ka");s.ja=o("type");
function Gh(a){var b=0,c=f;be(a,function(a){if(!Hh.prototype.isPrototypeOf(a)&&zf.prototype.isPrototypeOf(a)){var b=a.ka(Ih.prototype.l());if(b&&0<b.length)return c=a,"stop"===b[0].type&&(c=f),i}return l},i);c&&(a=c.ka(Ih.prototype.l()),b=8===a[0].size?1:15===a[0].size?2:0,b*="up"===a[0].type?1:-1);return b}s.ha=function(){if(this.Se===f){var a=this.$g||this.Ia,b=this.ah||this.step,c=this.L||0;if(a){var d=Gh(this);this.Se=new hh({Ia:a+d,step:b,L:c});0!==d&&(this.Se.ji=i)}else this.Se=k}return this.Se};
s.ua=function(){return this.duration?this.duration:this.ca?1:f};s.La=function(){var a=W.a;return this.ca?this.ua():a.La.call(this)};s.u=function(){if(this.Kg===f){var a=this.rb();if("TAB"===a.T){var b=Jh(this,"string");this.Kg=mh(a,b&&b[0].text?Number(b[0].text):1)}else this.Kg=lh(a,this.ha())}return this.Kg};s.Ud=ba("yi");function Kh(a){if(a.ca)return-1;var b=a.q();return 0<=a.u()-V(b,Oe(b))?1:-1}function Vf(a){var b=a.w;return b&&(1>=a.O()?1<Lh(b,a.O()):1<Lh(b,a.O())-Lh(b,a.O()-1))?i:l}
s.H=function(){var a;if(this.yi!==f)a=this.yi;else{if(this.jf===f)switch(this.Gl){case "up":this.jf=-1;break;case "down":this.jf=1;break;default:this.Vg===f&&(Vf(this)?(a=this.w,a=this.sc()===(1>=this.O()?1:Lh(a,this.O()-1)+1)?-1:1):a=Kh(this),this.Vg=a),this.jf=this.Vg}a=this.jf}return a};function Nf(a){beams=a.ka("beam");return!beams&&Eh(a.ja())&&!a.el}s.gf=function(a){this.el=a?i:l};
function If(a){if(a.gi||a.ig)return l;var b=i;switch(a.ja()){case "breve":b=i;break;case "long":b=i;break;case "maxima":case "whole":b=l;break;default:b=i}return b}
s.Za=function(){if(this.fd!==f)return this.fd;var a=this.q(),b=35,a=Math.abs(this.u()-V(a,Oe(a)));Vf(this)&&this.H()!==Kh(this)?b-=Math.min(a,30)/3:this.ca||(b=Math.max(a,b));if(Nf(this)){switch(this.ja()){case "1024th":case "512th":case "256th":case "128th":b+=25;break;case "64th":b+=15;break;case "32nd":b+=10}b=Math.max(b,35)}this.ca&&(b*=0.65);return b};s.Fc=function(a,b,c){a=a.filter(function(a){return a[b]===c},this);return 0<a.length?a:f};
s.yd=function(a){if(this[a]===f){if(this.notations){var b=this.Fc(this.notations,"notation",a);if(("ornaments"===a||"articulations"===a||"technical"===a)&&b&&0<b.length)b=b.reduce(function(b,d){var e={};e.type=a;e[a]=b[a].concat(d[a]);return e})[a];this[a]=b}this[a]===f&&(this[a]=k)}return this[a]};
function Mh(a,b,c,d,e){var g=f,h=d;"ornament"===c&&"accidental-mark"===d&&(h=c+"-"+d);if(a[h]===f){if((g=a.yd(b))&&0<g.length)b=a.Fc(g,c,d),a[h]=b;a[h]===f&&(a[h]=k)}(g=a[h])&&e&&(g=g.filter(e));return g}s.Sc=function(a,b){return Mh(this,"ornaments","ornament",a,b)};s.Uf=function(a,b){return Mh(this,"articulations","articulation",a,b)};function Jh(a,b){return Mh(a,"technical","technical",b,f)}
s.ka=function(a){var b=f;if("beam"===a)b=this.je?this.je:k;else if("lyric"===a)b=this.Qa?this.Qa:k;else if("accidental-mark"===a){var c=this.yd(a);c&&0<c.length&&(b=c);(a=this.Sc(a))&&0<a.length&&!b&&(b=a);b||(b=k)}else Ad(I())[a]?b=this.Uf(a):Id(I())[a]?(b=Jh(this,a),"bend"===a&&b&&(b=[{Dn:"bend",Si:b}]),/fret|bend|hammer-on|pull-off/.test(a)&&b&&b.forEach(function(a){a.wl=this},this)):zd(I())[a]?b="tremolo"===a?this.Sc(a,function(a){return"single"!==a.type}):this.Sc(a):Bd(I())[a]&&(b=this.yd(a));
b&&b.sort(function(a,b){return a.k-b.k});return b};function Mf(a){if(a.vi===f){var b=f,c=a.Sc("tremolo");c&&(b=a.Fc(c,"type","single"));a.vi=b&&0<b.length?b[0]:k}return a.vi}function Gf(a){var b=a.q(),a=a.u();return a<=Hf(b,-2)?-1:a>=Hf(b,2*(b.fa+1-1))?1:0}function Ff(a){return a.ig||!a.ha()?l:0!==Gf(a)?i:l}function Nh(a){return a.vf}s.wd=o("bf");function Oh(a){return a.w}function Kf(a,b,c,d){var e=0;if("long"===a||"breve"===a)e=1===b?d.d+2*c:d.c-2*c;return e}
function Lf(a,b,c,d,e){var g=0;1===c?(g=-a.Za(),"breve"===b&&(g=e.c-2*d)):(g=a.Za(),"breve"===b&&(g=e.d+2*d));return g}function Jf(a,b,c){return 1===a?0.5*b:c-0.5*b}function Ph(){}
function Zg(a,b,c,d){var e=c.n;if(W.prototype.isPrototypeOf(e)||jh.prototype.isPrototypeOf(e)||nh.prototype.isPrototypeOf(e)||sh.prototype.isPrototypeOf(e)){var a=c.Od||0,e=a+c.i(b.ab),g=a,h=e;if(c=c.n.q())g=Math.min(g,V(c,1)),h=Math.max(h,V(c,c.fa));d["notes_lower_bound_"+b.gd]=Qh(l,a);d["notes_upper_bound_"+b.gd]=Qh(i,e);d["staff_lower_bound_"+b.gd]=Qh(l,g);d["staff_upper_bound_"+b.gd]=Qh(i,h);return d}if(fh.prototype.isPrototypeOf(e))return b="staff_duration_p"+c.Dc,d[b]=c.duration,d;if(uf.prototype.isPrototypeOf(e)){e=
c.n;g=g||e.R();h=h||e.s();d="upper"===h;c.Pg=Rh(g,h,b.gd);"notes"===g&&(c.Dg=Rh("staff",h,b.gd));a.Nb=a.Nb||0;g=E(c,b.ga,b.lb);if(g===f){var h=c.n,j=c.i(b.U),m=c.i(b.ab),p=b.mc(i),q=b.Ub(c.da),x=p.length-1;0<=c.Bc&&(j=0,x=b.Ub(c.Bc));var A=0.5*(q+x);if(x<q){var D=x,x=q,q=D,D=c.da;c.Bc=c.da;c.da=D}D=f;for(a.hc=q;(0<=j||0<=c.Bc)&&a.hc<=x;++a.hc){var qa=p[a.hc],D=Qh(d,qa[c.Pg]);if(D!==f)if(g===f)g=D,c.yf=D;else{if(Wf.prototype.isPrototypeOf(h)&&2<x-q&&(d?D>g:D<g))D-=(d?1:-1)*m*(1-Math.abs(a.hc-A)/(A-
q));g=d?Math.max(g,D):Math.min(g,D)}var ha=a.Nb*((a.hc===p.length-1?b.Pb():p[a.hc+1].wb)-qa.wb)/b.Pb(),ha=ha+qa[b.U],ha=ha+qa.Qd,ha=ha+qa.Pd,ha=ha+b.Sa;0<=c.Bc?(j+=ha,c.Bc===qa.wb&&(C(c,b.U,j),c.xf=D)):j-=ha}g+=(d?1:-1)*e.Gb();j=c.i(b.ab);h=g+(d?1:-1)*j;if(0<j&&e.Je()){e=b.mc(i);for(j=b.Ub(c.da);j<a.hc;++j)m=e[j],m[c.Pg]=Qh(d,h),c.Dg&&(p=Qh(d,m[c.Dg]),p=d?Math.max(p,h):Math.min(p,h),m[c.Dg]=Qh(d,p))}g=d?g:h;F(c,b.ga,b.lb,g)}c.Od=g;c.rl=i}}function Qh(a,b){return b===f?f:a?b:-b}
function Rh(a,b,c){return""+a+"_"+b+"_bound_"+c}function zf(a,b){zf.a.constructor.call(this,a,b);b&&I().s(this,this)}u(zf,ee);s=zf.prototype;s.toString=r("Score.Direction");s.ua=n();s.sc=o("sf");s.O=o("Ka");s.Fc=W.prototype.Fc;s.ka=function(a){var b=f;this[a]===f&&(this.directions&&(b=this.Fc(this.directions,"direction",a),this[a]=b),this[a]===f&&(this[a]=k));(b=this[a])&&b.sort(function(a,b){return a.k-b.k});return b};
s.ub=function(a){return be(this,function(a){return W.prototype.isPrototypeOf(a)},!a)};function Hh(a,b){ee.prototype.constructor.call(this,a,b);if(b&&(Xd(this,this),this.oe&&(this.directions=this.oe.map(function(a){a.direction="harmony-chord";a.Ta=this.Ta;a.Ka=this.Ka;return a},this)),this.frame)){var c=this.frame;c.direction="harmony-frame";c.Ta=this.Ta;c.Ka=this.Ka;this.directions=this.directions||[];this.directions.push(c)}}u(Hh,zf);Hh.prototype.toString=r("Score.Harmony");Hh.prototype.sc=r(1);
function Sh(a,b){Sh.a.constructor.call(this,a,b)}u(Sh,og);Sh.prototype.toString=r("Score.Rehearsal");Sh.prototype.l=r("rehearsal");Sh.prototype.clone=function(a){a=a||new Sh(this.k,this.j);return Sh.a.clone.call(this,a)};function Th(a,b){Th.a.constructor.call(this,a,b)}u(Th,og);Th.prototype.toString=r("Score.Words");Th.prototype.l=r("words");Th.prototype.clone=function(a){a=a||new Th(this.k,this.j);return Th.a.clone.call(this,a)};function Uh(a,b){Uh.a.constructor.call(this,a,b)}u(Uh,og);s=Uh.prototype;
s.toString=r("Score.Metronome");s.l=r("metronome");s.clone=function(a){a=a||new Uh(this.k,this.j);return Uh.a.clone.call(this,a)};s.Ga=function(a){var b="",c=-1;this.j.bd&&(b+="(");if(this.j.Qi){var b=b+"%"+ ++c,d=this.qc(i),e=this.od(this.j.Qi,this.j.$l,a);e.wa({width:e.i("width"),height:e.i("height")});d.push(e)}b+=" = ";this.j.ni?b+=this.j.ni:this.j.Ri&&(b=b+"%"+ ++c,d=this.qc(i),e=this.od(this.j.Ri,this.j.am,a),e.wa({width:e.i("width"),height:e.i("height")}),d.push(e));this.j.bd&&(b+=")");return b};
s.qc=function(a){this.hb===f&&a&&(this.hb=[]);return this.hb};s.Wf=r("none");s.s=r("upper");s.od=function(a,b,c){var d="<note><duration>1</duration><pitch><octave>4</octave><step>G</step></pitch><type>"+a+"</type></note>",a=this.ub(),d=new W(a.w,d);d.rd=b;d.prev=a;d.ea=a.ea;d.Db=a.Db;d.time=a.time;d.key=a.key;return(new Vh(c)).m(d)};function Wh(a,b){Wh.a.constructor.call(this,a,b)}u(Wh,og);Wh.prototype.toString=r("Score.HarmonyChord");Wh.prototype.l=r("harmony-chord");Wh.prototype.qc=Uh.prototype.qc;
Wh.prototype.Ga=function(a){a=fc(kc(a));this.fh=-1;var b="",c="",d=this.j.root;d&&(c+=d.step.text||d.step.value,d.L&&d.L.eb&&d.L.value&&(c=Xh(this,c,d.L,a)));b+=c;d="";if(c=this.j.Me){if(c.Gi){var d=d+Yh(c.Me),e=c.Me,g="";/dominant$|seventh$|^half|major-minor/.test(e)?g="7":/sixth$/.test(e)?g="6":/ninth$/.test(e)?g="9":/11th$/.test(e)?g="11":/13th$/.test(e)?g="13":"suspended-second"===e?g="sus2":"suspended-fourth"===e&&(g="sus4");d+=g}c.text&&(d+=c.text)}return a=b+d+Zh(this,a)};
function Xh(a,b,c,d){b="left"===c.location?"%"+ ++a.fh+b:b+"%"+ ++a.fh;c=(new qh(f,new fh(f,'<staff-details number="1"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>'),c.value,i)).m(d);c.wa({width:c.i("width"),height:c.i("height")});a.qc(i).push(c);return b}var $h={Uk:9651,Zk:45,Ni:43,ij:176,Lk:248};
function Yh(a){var b=f;/major/.test(a)&&(b=$h.Uk);/minor/.test(a)&&(b=$h.Zk);/augmented/.test(a)&&(b=$h.Ni);/diminished/.test(a)&&(b=$h.ij,/half/.test(a)&&(b=$h.Lk));return b?String.fromCharCode(b):""}function Zh(a,b){var c="",d=a.j.Gf;d&&d.forEach(function(a){c+="/";if(a.eb){var d=a.type;d&&(c+=d.text||("add"===d.value?"add":""));(d=a.L)&&(d.tl?c+=0<d.value?"+":"-":d.value&&(c=Xh(this,c,d,b)));if(a=a.value)a.Yb&&(c+=Yh(a.Yb)),c+=a.text||a.value}},a);return c}
Wh.prototype.clone=function(a){a=a||new Wh(this.k,this.j);return Wh.a.clone.call(this,a)};function ai(a,b){ai.a.constructor.call(this,a,b)}u(ai,X);ai.prototype.toString=r("Score.Segno");ai.prototype.l=r("segno");ai.prototype.N=function(){return["scripts.segno"]};ai.prototype.clone=function(a){a=a||new ai(this.k,this.j);return ai.a.clone.call(this,a)};function bi(a,b){bi.a.constructor.call(this,a,b)}u(bi,X);bi.prototype.toString=r("Score.Coda");bi.prototype.l=r("coda");bi.prototype.N=function(){return["scripts.coda"]};
bi.prototype.clone=function(a){a=a||new bi(this.k,this.j);return bi.a.clone.call(this,a)};function ci(a,b){ci.a.constructor.call(this,a,b)}u(ci,X);ci.prototype.toString=r("Score.Pedal");ci.prototype.l=r("pedal");ci.prototype.N=function(){var a=f;switch(this.j.type){case "start":a=["pedal.Ped","pedal.."];break;case "stop":a=["pedal.*"];break;case "change":a=["pedal.*","pedal.Ped","pedal.."]}return a};ci.prototype.clone=function(a){a=a||new ci(this.k,this.j);return ci.a.clone.call(this,a)};
function di(a,b){di.a.constructor.call(this,a,b)}u(di,X);s=di.prototype;s.toString=r("Score.Accordion");s.l=r("accordion-registration");s.N=function(){return["accordion.accDiscant"]};s.clone=function(a){a=a||new di(this.k,this.j);return mc.Tl.a.clone.call(this,a)};s.s=r("upper");
s.m=function(a){function b(a,b,c,d){var m=b.i("width"),p=b.i("height"),q=this.nc("accordion.accDot"),a=G(a,"accordion.accDot",q.width,q.height);q.width=a.i("width");q.height=a.i("height");m=0.5*(m-q.width);c=(3-c)*p/3+0.5*q.height;1===d?(F(a,"glyph_anchor","x",m),F(a,"glyph_anchor","y",c),b.o(a,l,l,0,0,"glyph_anchor")):2===d?(F(a,"glyph_anchor","x",m-q.width),F(a,"glyph_anchor","y",c),b.o(a,l,l,0,0,"glyph_anchor"),d=a.clone(),F(d,"glyph_anchor","x",m+q.width),F(d,"glyph_anchor","y",c),b.o(d,l,l,0,
0,"glyph_anchor")):3===d&&(F(a,"glyph_anchor","x",m-2*q.width),F(a,"glyph_anchor","y",c),b.o(a,l,l,0,0,"glyph_anchor"),d=a.clone(),F(d,"glyph_anchor","x",m),F(d,"glyph_anchor","y",c),b.o(d,l,l,0,0,"glyph_anchor"),d=a.clone(),F(d,"glyph_anchor","x",m+2*q.width),F(d,"glyph_anchor","y",c),b.o(d,l,l,0,0,"glyph_anchor"))}var c=di.a.m.call(this,a,i);if(c){F(c,"glyph_anchor","x",0);var a=fc(kc(a)),d=this.j;d.Ki&&b.call(this,a,c,1,1);0<d.Mg&&b.call(this,a,c,2,d.Mg);d.Li&&b.call(this,a,c,3,1)}return c};
function Vh(a){if(this.context=a)this.z=fc(kc(a))}var ei,fi;s=Vh.prototype;s.$=function(a,b){var b=b||new ah,c=this.m(a),d=a.rb();E(c,"staff","y");var e=Math.max(c.Qd||0,a.Gd()?1:0),g=Math.max(c.Pd||0,a.ca?5:1);c.yb=new Ph;var h=dh(b,a.O(),i);h.o(c,i,l,e,g,"staff");!a.ka("beam")&&"TAB"!==d.T&&this.eh(a,c,h);return b};
s.m=function(a,b){var c=a.rb(),d=f,d=new Ef;"TAB"===c.T?(C(d,"width",10),C(d,"height",10),gi(this,a,d)):this.dh(a,d,b);var e=0;(c=a.ka("lyric"))&&c.forEach(function(a){e=Math.max(e,this.context.measureText(a.text))},this);Hh.prototype.isPrototypeOf(a.prev)&&(c=a.prev.ka("harmony-chord"))&&c.forEach(function(a){a=new Wh(0,a);e=Math.max(e,this.context.measureText(a.Ga(this.context)))},this);d.Qd=a.Gd()?0.5*e:0;d.Pd=a.Gd()?0.5*e:e;a.Q(d);return d};
function gi(a,b,c){b.q();var d=f;if(d=Jh(b,"fret")){var d=(new wg(d[0].k,d[0])).m(a.context),a=d.i("width"),e=d.i("height");d.dd({e:0.5*-a,c:0.5*-e,f:0.5*a,d:0.5*e});a=d.P();b=b.u()+a.c;F(d,"staff","y",b);c.o(d,l,l,5,5,"staff")}}
s.dh=function(a,b,c){a.Sd!==f&&(a.fd=a.Sd);if(!c){hi(this,a,b,i);var d=a.Lb;if(d&&(d=d.m(this.z))){var e=d.P(),e=a.u()+e.c;F(d,"staff","y",e);b.o(d,l,l,0,0,"staff")}}this.kc(a,b,c);Nf(a)&&(a.q(),c=Eh(a.ja()),c!==f&&(d=10,a.ca&&(d*=0.65),c=G(this.z,c,d,f),c.wa({width:c.i("width"),height:c.i("height")}),b.Pf=c,a.ca&&a.ca&&a.ed&&(c=-1===a.H()?"flags.ugrace":"flags.dgrace",c=G(this.z,c,12,f),c.wa({width:c.i("width"),height:c.i("height")}),b.ed=c)));this.ue(a,b);hi(this,a,b,l)};
s.eh=function(a,b,c,d){var e=Y.prototype.isPrototypeOf(a)?a.sb():a;if(d||!d&&If(e)){var d=e.H(),g=e.t().aa(),h=g.i("height"),j=e.Za(),j=j+0.5*h,m=new S("StemPlaceHolder");C(m,"width",0);C(m,"height",j);g=E(g,"staff","y");1===d&&(g=g-j+h);F(m,"staff","y",g);m.da=b.da;m.n=e;m.yb=new Ph;c.o(m,l,l,0,0,"staff");a.Bn=m}};s.kc=function(a,b,c){a.q();var d=(new Dh(a)).m(this.z),e=d.P(),a=a.u()+e.c;F(d,"staff","y",a);c=c?0:2;b.o(d,l,l,c,c,"staff")};
s.ue=function(a,b,c){a.q();for(var d=a.rd,e=0;e<d;++e){var g=G(this.z,"dots.dot",f,4);a.ha()&&(c=a.u());0===Math.abs(c)%10&&(c+=5);var h=g.P(),c=c+h.c;F(g,"staff","y",c);b.o(g,l,l,2,2,"staff")}};function ii(a,b){xf(this,a,b)}v(ii,wf);function hi(a,b,c,d){ei=ei||[fg,ig];fi=fi||[jg,kg,Hg];(new ii(d?ei:fi,b)).ka().forEach(function(a){var d=a.m(this.context);if(d){var h=b.u(),h=h+a.Gb();F(d,"staff","y",h);c.o(d,l,l,0,0,"staff")}},a)}function ji(){ji.a.constructor.call(this,"Tuplet")}u(ji,S);v(ji,Qf);
s=ji.prototype;s.clone=function(a){a=a||new ji;return ji.a.clone.call(this,a)};
s.p=function(a){ji.a.p.call(this,a);var b=this.n,c;c=this.n;var d=c.r()[0],e=d.t(),g=e.aa(),e=e.W+E(g,"parent","x");c.j.dc||-1===d.H()&&(e+=g.i("width"));c=e;var d=this.n,e=d.r(),g=e[e.length-1],h=e[0].t(),j=g.t(),e=j.aa(),h=E(j,"parent","x")-E(h,"parent","x")+h.W+E(e,"parent","x")+e.i("width");d.j.dc||1===g.H()&&(h-=e.i("width"));d=h;e=("upper"===this.n.s()?0.5:-0.5)*this.i("height");g=this.n.r();h=Rf(this,g[0],g[g.length-1]);g=h+e;j=this.n.r();j=Rf(this,j[j.length-1],j[0]);e=j+e;b.j.dc&&(a.save(),
a.X(1),a.qa("#000000"),a.beginPath(),a.moveTo(c,h),a.lineTo(c,g),a.lineTo(d,e),a.lineTo(d,j),a.stroke(),a.restore());if(1===b.la()&&(b=this.Ma(a))){var h=E(b,"parent","x")||0,j=E(b,"parent","y")||0,m=Ib(b,"width"),p=Ib(b,"height");c+=0.5*(d-c-m);d=g+0.5*(e-g-p);a.save();a.translate(c,d);a.clearRect(h-3,j,m+6,p);b.p(a);a.restore()}};
s.od=function(a,b,c,d){var e=this.n,a=new W(a,"<note><duration>1</duration><pitch><octave>4</octave><step>G</step></pitch><type>"+b+"</type></note>");a.rd=c;c=e.r()[0];a.prev=c;a.ea=c.ea;a.Db=c.Db;a.time=c.time;a.key=c.key;return(new Vh(d)).m(a)};
s.Ma=function(a){var b=this.n,c=f,d=b.j.Al,e=b.j.Cl;if("none"!==d){var c=new T("center"),g="",h=f;if("actual"===d||"both"===d)if(g+=b.j.Zd.be,"actual"===e||"both"===e){var j=b.r(),j=j[0],m=b.j.Zd.ce,m=m!==f?m:b.ia(j).ja(),p=b.j.Zd.$d,p=p!==f?p:b.ia(j).rd,j=this.od(Oh(b.ia(j)),m,p,a);j.wa({width:j.i("width"),height:j.i("height")});h=h||[];h.push(j);g+="%0"}"both"===d&&(g=g+":"+b.j.ae.be,"both"===e&&(j=b.r(),d=j[0],e=b.j.ae.ce,e=e!==f?e:b.ia(d).ja(),j=b.j.ae.$d,j=j!==f?j:b.ia(d).rd,j=this.od(Oh(b.ia(d)),
e,j,a),j.wa({width:j.i("width"),height:j.i("height")}),h=h||[],h.push(j),g+="%1"));kc(a).Ea=14;Ie(c,g,"italic bold 12px sans-serif",a,h);c.wa({width:c.i("width"),height:c.i("height")})}return c};s.Uc=r(l);function ki(a,b){ki.a.constructor.call(this,a,b)}u(ki,uf);s=ki.prototype;s.toString=r("Score.Tuplet");s.l=r("tuplet");s.clone=function(a){a=a||new ki(this.k,this.j);return ki.a.clone.call(this,a)};s.ta=function(a){return/(start|stop)/.test(a)};s.na=function(a){return"start"===a};
s.va=function(a){return"stop"===a};s.s=function(){var a=this.r(),b=a[0],a=a[a.length-1];return b.H()===a.H()?-1===b.H()?"upper":"lower":"upper"};s.m=function(){var a=new ji;C(a,"height",14);this.Q(a);return a};s.V=function(a){if(Y.prototype.isPrototypeOf(a)){var b="upper"===this.s()?a.I.length-1:0;return a.I[b]}return a};s.ia=function(a){if(Y.prototype.isPrototypeOf(a)){var b="upper"===this.s()?0:a.I.length-1;return a.I[b]}return a};function li(a){this.Bb=a}
li.prototype.Wa=function(a,b){0===b&&(this.Ec=a)};li.prototype.fb=function(a,b){if(0===b){this.Bb.Ec=this.Ec;var c=Nh(this.Bb.ia(this.Ec));c&&0<c.length&&c.some(function(a){var a=a.r(),b=this.Bb.r();return this.Bb.ia(a[0])===this.Bb.ia(b[0])&&this.Bb.ia(a[a.length-1])===this.Bb.ia(b[b.length-1])},this)&&(this.Bb.j.dc=l);if((c=Mf(this.Bb.ia(this.Ec)))&&"single"===c.type&&0<c.k)this.Bb.j.dc=l}};ki.prototype.$f=function(){return[new li(this)]};function mi(){mi.a.constructor.call(this,"Tied")}u(mi,S);
mi.prototype.clone=function(a){a=a||new mi;return mi.a.clone.call(this,a)};
mi.prototype.p=function(a){mi.a.p.call(this,a);var b=this.n,c;c=this.n;if(c.Vc)c=35;else{var d=c.r()[0],e=d.t(),g=e.W;Y.prototype.isPrototypeOf(d)?(e=e.aa(),g+=E(e,"parent","x"),d=ni(c,d),e=d.t(),g+=E(e,"parent","x")+e.i("width")):g+=e.i("width");c=g}d=this.n;if(d.Ke)d=this.i("width");else{var h=d.r(),g=h[h.length-1],e=h[0].t(),h=h[h.length-1].t(),e=E(h,"parent","x")-(d.Vc?0:E(e,"parent","x"))+e.W;Y.prototype.isPrototypeOf(g)&&(h=h.aa(),e+=E(h,"parent","x"),g=ni(d,g),h=g.t(),e+=E(h,"parent","x"));
d=e}var h=this.n,g=h.s(),e=0,h=ni(h,h.r()[0]),j=this.yf||this.xf,m=this.xf||this.yf;h.q();var p=h.u();0===Math.abs(p)%10&&(e+="upper"===g?-2:2);"upper"===g&&j!==m&&(e-=Math.abs(j-m));e-=Math.min(j,m)-h.u();g=e+("upper"===g?5:-5);a.save();a.qa("#000000");a.beginPath();yb(a,c,g,d,g,"upper"===b.s(),5);a.closePath();a.fill();a.restore()};function Y(a,b){Y.a.constructor.call(this,a,b);this.Gc(b)}u(Y,W);s=Y.prototype;s.toString=r("ScoreChord");function oi(a,b){a.gb=b}s.sb=o("gb");
s.Gc=function(a){this.I=this.I||[];a.prev=this;this.I.push(a)};s.H=function(){return this.sb().H()};s.ka=function(a){var b=f;this.I.forEach(function(c){var d=c.ka(a);d&&(b=b||[],d.forEach(function(d){"tied"===a&&(d.zb=c);b.push(d)}))});b===f&&(b=k);return b};s.Ud=function(a){this.I.forEach(function(b,c,d){b.H();b.Ud(a);b.gi=c!==(-1===a?0:d.length-1)?i:l})};s.gf=function(a){this.I.forEach(function(b){b.gf(a)})};s.Za=function(){return this.sb().Za()};s.m=r(k);
function pi(a){pi.a.constructor.call(this,a)}u(pi,uf);s=pi.prototype;s.toString=r("Score.Tied");s.l=r("tied");s.clone=function(a){a=a||new pi(this.k);return pi.a.clone.call(this,a)};s.ta=function(a){return/(start|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.zc=function(a,b,c,d){pi.a.zc.call(this,a,b,c,d);if(Y.prototype.isPrototypeOf(c)&&(this.na(b)&&(this.il=d.zb),this.va(b)))this.hl=d.zb};s.m=function(){var a=new mi;this.Q(a);return a};
s.s=function(){if(this.direction===f){var a=1,b=f,c=f,d=this.r();if(d){var e=d[0],d=d[d.length-1];e.H()===d.H()&&(a=e.H());Y.prototype.isPrototypeOf(e)?(b=e,c=ni(this,e)):Y.prototype.isPrototypeOf(d)&&(b=d,c=ni(this,d))}b?(a=c.q(),this.direction=c.u()>=V(a,Oe(a))?"upper":"lower"):this.direction=-1===a?"lower":"upper"}return this.direction};function ni(a,b){return Y.prototype.isPrototypeOf(b)?b===a.r()[0]?a.il:a.hl:b}function qi(a){qi.a.constructor.call(this,a||"Beam")}u(qi,S);v(qi,Qf);s=qi.prototype;
s.clone=function(a){a=a||new qi;return qi.a.clone.call(this,a)};s.p=function(a){qi.a.p.call(this,a);var b=this.n;a.save();a.qa("#000000");var c=this.Dd(),d=this.bg(),e=this.Ge(),g=this.cg(),h=b.ub();a.beginPath();b.vb()||b.Hd?(b=b.ia(h).wd(),h=(d-c)*Math.tan(b),b=g+h,h=e+h,a.moveTo(c,e),a.lineTo(c,g),a.lineTo(d,b),a.lineTo(d,h)):(h=ri(b)*("upper"===b.s()?-1:1),b=e+h,h=g+h,a.moveTo(c,e),a.lineTo(c,b),a.lineTo(d,h),a.lineTo(d,g));a.closePath();a.fill();a.restore()};
s.Dd=function(){var a=this.n,b=a.r()[0].t(),c=b.aa(),a=c.Hi?0.5*c.i("width"):"upper"===a.s()?c.i("width"):0;return b.W+E(c,"parent","x")+a};s.bg=function(){var a=this.n,b=f;if(a.Hd)b=this.Dd()-si(a);else if(a.vb())b=this.Dd()+si(a);else var b=a.r(),c=b[b.length-1],b=b[0].t(),c=c.t(),d=c.aa(),a=d.Hi?0.5*d.i("width"):"upper"===a.s()?d.i("width"):0,b=E(c,"parent","x")-E(b,"parent","x")+b.W+E(d,"parent","x")+a;return b};
s.Ge=function(){var a=this.n;if(a.vb()||a.Hd)return 0+("lower"===a.s()?1:-1)*(a.la()-1)*(ri(a)+ti(a));a=a.r();return Rf(this,a[0],a[a.length-1])};s.cg=function(){var a=this.n;if(a.vb()||a.Hd)return this.Ge()+("lower"===a.s()?1:-1)*ri(a);a=a.r();return Rf(this,a[a.length-1],a[0])};s.Uc=r(i);s.Vf=function(){var a=this.n;return("lower"===a.s()?1:-1)*(a.la()-1)*(ri(a)+ti(a))};function ui(){ui.a.constructor.call(this,"TremoloBeam")}u(ui,qi);s=ui.prototype;
s.clone=function(a){a=a||new ui;return ui.a.clone.call(this,a)};s.p=function(a){for(var b=ui.a,c=this.n,d=c.la(),e=1;e<=d+1;++e)c.k=e,b.p.call(this,a);c.k=d};s.Dd=function(){return ui.a.Dd.call(this)+5};s.bg=function(){return ui.a.bg.call(this)-5};s.Ge=function(){var a=ui.a,b=this.n,c=b.ub(),b=b.ia(c).wd();return a.Ge.call(this)+5*Math.tan(b)};s.cg=function(){var a=ui.a,b=this.n,c=b.ub(),b=b.ia(c).wd();return a.cg.call(this)-5*Math.tan(b)};function vi(a){vi.a.constructor.call(this,a)}u(vi,uf);s=vi.prototype;
s.toString=r("Score.Beam");s.l=r("beam");s.clone=function(a){a=a||new vi(this.k);return vi.a.clone.call(this,a)};s.na=function(a){return vi.a.na.call(this,a)||/(forward\shook|backward\shook)/.test(a)};s.ta=function(a){return vi.a.ta.call(this,a)||/(forward\shook|backward\shook)/.test(a)};s.zf=function(a,b,c){return!vi.a.zf.call(this,a,b,c)||this.I&&1<this.I.length&&/(forward\shook|backward\shook)/.test(b)?l:i};
s.zc=function(a,b,c){vi.a.zc.call(this,a,b,c);"forward hook"===b?this.Le=i:"backward hook"===b&&(this.Hd=i);/(forward\shook|backward\shook)/.test(b)&&(this.ended=i)};s.vb=o("Le");s.s=function(){return this.I&&1===this.I[0].H()?"lower":"upper"};s.m=function(){var a=new qi(this);this.Q(a);return a};function ti(a){var b=a.r(),c=0.2*Le(a.V(b[0]).q());Fh(a.V(b[0]))&&(c*=0.65);return c}function ri(a){var b=a.r(),c=0.5*Le(a.V(b[0]).q());Fh(a.V(b[0]))&&(c*=0.65);return c}
function si(a){var b=a.r(),c=Le(a.V(b[0]).q());Fh(a.V(b[0]))&&(c*=0.65);return c}s.Ee=o("kf");function wi(a){this.K=a;this.Jb=this.Ib=this.Nd=this.Md=0;this.yc=this.xc=f}wi.prototype.Wa=function(a){if(Y.prototype.isPrototypeOf(a))a.I.forEach(this.Wa,this);else{var b=a.q(),b=V(b,Oe(b)),b=a.u()-b;0<b&&(++this.Md,b=Math.abs(b),this.Ib<b&&(this.Ib=b,this.xc=a));0>b&&(++this.Nd,b=Math.abs(b),this.Jb<b&&(this.Jb=b,this.yc=a))}};wi.prototype.fb=function(a){var b=this.sb().H();a.Ud(b);this.K.hm=i};
wi.prototype.sb=function(){if(this.gb===f&&(this.gb=this.Ib===this.Jb?this.Md>=this.Nd?this.xc:this.yc:this.Ib>=this.Jb?this.xc:this.yc,this.K.vb()||this.K.Hd||this.gb===f))this.gb=this.K.r()[0];return this.gb};function xi(a,b,c,d,e,g){this.K=a;this.gg=0;this.Fg=b;this.wi=c;this.Rd=d;this.Vd=e;this.Nb=g}xi.prototype.Wa=function(a){if(1===this.K.la()&&(this.K.V(a).q(),(a=a.ka("beam"))&&2<a.length))this.gg=Math.max(this.gg,(a.length-2)*(ri(this.K)+ti(this.K)))};
function yi(a,b,c){var d;d="note"+b+"_x";a[d]===f&&(a[d]=Pg(a.Vd,c[b].t(),a.Nb));return a[d]}function zi(a,b,c){var d;d="note"+b+"_y";a[d]===f&&(a[d]=a.K.V(c[b]).u());return a[d]}function Ai(a,b,c){var d;d="note"+b+"_slant";if(a[d]===f){var e=f;0===b?e=0:b===c.length-1?(e=a.wi.Ee(),1===a.Fg.sb().H()&&(e*=-1)):e=Ai(a,c.length-1,c)*((yi(a,b,c)-yi(a,0,c))/(yi(a,c.length-1,c)-yi(a,0,c)));a[d]=e}return a[d]}
xi.prototype.wd=function(a){this.Og===f&&(this.Og=Math.atan(Ai(this,a.length-1,a)/(yi(this,a.length-1,a)-yi(this,0,a))));return this.Og};
xi.prototype.fb=function(a,b,c){if(1===this.K.la()){a.gf(i);var d=this.K.ia(a),e=this.wd(c),e=-1===d.H()?e:-e;d.bf=e;e="note"+b+"_stem_length";if(this[e]===f){var g;if(this.oi===f){var h=this.Rd.ub();g=h.Za();g-=Math.abs(this.K.ia(h).u()-this.K.V(h).u());g+=this.gg;var h=c[0],j=c[c.length-1];Ff(this.K.V(h))&&Ff(this.K.V(j))&&(j=this.K.V(h).q(),j=V(j,Math.ceil(0.5*j.fa)),35<=Math.abs(this.K.V(h).u()-j)&&(g+=0<this.wi.Ee()?ri(this.K):-ri(this.K)));this.oi=g}g=this.oi;h=c[b];j=this.Rd.ub()===this.Rd.Ig?
this.Rd.Nl:this.Rd.Tk;b!==j&&(g-=Ai(this,j,c),g+=Math.abs(zi(this,j,c)-zi(this,b,c)),g+=Ai(this,b,c));g+=Math.abs(this.K.ia(h).u()-this.K.V(h).u());this[e]=g}b=this[e];d.Sd===f&&(d.Sd=d.fd);d.fd=b;Y.prototype.isPrototypeOf(a)&&(a.gb=d);Vh.prototype.eh.call(this,a,a.t(),this.Vd,i)}};function Bi(a,b){this.K=a;this.Ji=-Infinity;this.Ii=Infinity;this.Vh=this.Ig=f;this.Fg=b}
Bi.prototype.Wa=function(a,b){var c=this.K.V(a).u();c>this.Ji&&(this.Ji=c,this.Ig=a,this.Nl=b);c<this.Ii&&(this.Ii=c,this.Vh=a,this.Tk=b)};Bi.prototype.ub=function(){return-1===this.Fg.sb().H()?this.Ig:this.Vh};Bi.prototype.fb=function(a,b){if(0===b){this.K.Ec=this.ub();var c=this.K;a.vf=a.vf||[];a.vf.push(c)}};function Ci(a){this.K=a;this.kf=this.T=f}
Ci.prototype.Wa=function(a,b,c){if(1===this.K.la()&&b<Math.floor(0.5*c.length)){this.K.V(a).q();var c=c[c.length-(b+1)],d=this.K.V(a).u(),d=(this.K.V(c).u()-d)/10,e=0!==d?0<d?1:-1:0;this.T=this.T===f?e:this.T!==e?0:this.T;if(0===b){d=Math.abs(d);Ff(this.K.V(a))&&Ff(this.K.V(c))&&0!==d&&(d=0.5);switch(d){case 0:case 0.5:case 1:case 1.5:break;case 2:case 2.5:case 3:d=1.5;break;default:d=2}this.kf=10*d}}};Ci.prototype.fb=function(){1===this.K.la()&&(this.K.kf=this.Ee())};
Ci.prototype.Ee=function(){return this.T*this.kf};vi.prototype.af=function(a,b){var c=new wi(this),d=[c];this.td(d);this.jd(d);var e=f,g=f,d=[e=new Ci(this),g=new Bi(this,c),new xi(this,c,e,g,a,b)];this.td(d);this.jd(d)};vi.prototype.V=function(a){if(Y.prototype.isPrototypeOf(a)){var b="upper"===this.s()?a.I.length-1:0;return a.I[b]}return a};vi.prototype.ia=function(a){if(Y.prototype.isPrototypeOf(a)){var b="upper"===this.s()?0:a.I.length-1;return a.I[b]}return a};
function Di(a){Di.a.constructor.call(this,a)}u(Di,vi);s=Di.prototype;s.toString=r("Score.TremoloBeam");s.l=r("tremolo");s.clone=function(a){a=a||new Di(this.k);return Di.a.clone.call(this,a)};s.ta=function(a){return/(start|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.m=function(){var a=new ui;this.Q(a);return a};function Ei(a,b){Ei.a.constructor.call(this,a,b)}u(Ei,X);s=Ei.prototype;s.toString=r("Score.Fermata");s.l=r("fermata");
s.N=function(){var a="scripts.";switch(this.ja()){default:case "upright":a+="u";break;case "inverted":a+="d"}switch(this.Ga()){case "angled":a+="short";break;case "square":a+="long"}return[a+"fermata"]};s.clone=function(a){a=a||new Ei(this.k,this.j);return Ei.a.clone.call(this,a)};s.Ga=function(){return this.j.text};s.ja=function(){return this.j.type};s.s=function(){return"upright"===this.ja()?"upper":"lower"};function Fi(a,b){Fi.a.constructor.call(this,a,b)}u(Fi,X);s=Fi.prototype;s.toString=r("Score.AccidentalMark");
s.l=r("accidental-mark");s.N=function(){return[qh.prototype.ee.call(this,this.Ob())]};s.clone=function(a){a=a||new Fi(this.k,this.j);return Fi.a.clone.call(this,a)};s.Ob=function(){return this.j.Na};s.nc=function(a){var b={width:f,height:f};b.height="accidentals.doublesharp"===a?10:20;return b};function Gi(a,b){Gi.a.constructor.call(this,"rests.line");this.ea=b}u(Gi,S);
Gi.prototype.p=function(a){Gi.a.p.call(this,a);a.save();var b=E(this,"parent","x"),c=E(this,"parent","y"),d=Ib(this,"width"),e=Ib(this,"height");a.translate(b,c);var b=8*this.ea.tb(),c=0,g=d,h=0,j=e,h=j=0.5*e;a.X(b);a.beginPath();B.J(a,c,h,g,j);a.stroke();b=0.5*this.ea.tb();h=c=g=0;j=e;a.X(b);a.beginPath();B.J(a,c,h,g,j);a.stroke();c=g=d;a.X(b);a.beginPath();B.J(a,c,h,g,j);a.stroke();a.restore()};Gi.prototype.clone=function(a){a=a||new Gi;return Gi.a.clone.call(this,a)};
Gi.prototype.Ya=function(a){return"width"===a?100:20};function Hi(a,b){Hi.a.constructor.call(this,a,b)}u(Hi,W);s=Hi.prototype;s.toString=r("ScoreRest");s.Rc=o("jl");s.Gd=function(){var a=Hi.a;return 1<this.Rc()||a.Gd.call(this)};
function Ii(a,b){var c=a.q(),d=f;switch(b){case "double-whole":d={name:"rests.M1",height:10,Ua:V(c,3)};break;case "whole":d={name:"rests.0",height:5,Ua:V(c,4)};break;case "half":d={name:"rests.1",height:5,Ua:V(c,3)};break;case "quarter":d={name:"rests.2",height:30,Ua:V(c,3)};break;case "eighth":d={name:"rests.3",height:20,Ua:V(c,3)};break;case "16th":d={name:"rests.4",height:30,Ua:V(c,3)};break;case "32nd":d={name:"rests.5",height:40,Ua:V(c,3)};break;case "64th":d={name:"rests.6",height:50,Ua:V(c,
3)};break;case "128th":d={name:"rests.7",height:60,Ua:V(c,3)}}return d}s.ja=function(){var a=Hi.a.ja.call(this);if(!a)switch(32*this.ua()/this.Fa()){case 1:a="128th";break;case 2:a="64th";break;case 4:a="32nd";break;case 8:a="16th";break;case 16:a="eighth";break;case 32:a="quarter";break;case 64:a="half";break;case 128:a="whole";break;case 256:a="double-whole"}return a};s.u=function(){if(this.ha())return Hi.a.u.call(this);var a=this.ja();if(a)return Ii(this,a).Ua};
s.ua=function(){var a=Hi.a.ua.call(this),b=this.Rc();0<b&&(a+=4*b*this.Fa());return a};function Ji(a,b){Ji.a.constructor.call(this,a,b);var c=this,d=I(),c=c||{};d.ua(this,c);c.Rh=this.is("backup");c.Rh?Cd(d,this,c):(c.Le=this.is("forward"),c.Le&&(cd(d,this,c),d.O(this,c)))}u(Ji,ee);Ji.prototype.toString=r("Score.Mover");Ji.prototype.vb=o("Le");Ji.prototype.O=function(){if(this.vb())return this.Ka||1};Ji.prototype.m=function(){var a=new R("Mover");C(a,"width",10);C(a,"height",10);this.Q(a);return a};
function Ki(){Ki.a.constructor.call(this)}u(Ki,Ee);wb(Ki);Ki.prototype.clone=function(a){a=a||new Ki;return Ki.a.clone.call(this,a)};Ki.prototype.toString=r("Renderer.Measure");Ki.prototype.Yf=function(){return this.delegate?this.delegate:this};Ki.prototype.ff=ba("delegate");function Li(a,b){Li.a.constructor.call(this,a,b,Mi);var c=this;I();c=c||{};c.k=O(K(this,"number",f));c.Gm=N(this,"implicit",l);c.Ym=N(this,"non-controlling",l);c.width=K(this,"width",f)}var Ni;u(Li,ae);var Mi="attributes note direction harmony backup forward barline".split(" ");
s=Li.prototype;s.pj=function(a,b,c,d){function e(a){var b=f,c=be(a,function(a){return Z.prototype.isPrototypeOf(a)},i);c&&c.Xc&&(c.Xc.some(function(a){return"multiple-rest"===a.Kd?(b=a,i):l})&&b)&&(a.jl=b.og)}if(W.prototype.isPrototypeOf(a)&&a.ig)return a=d.create(c,f,a,"rest"),a=this.qd(a),e(a),a};
s.oj=function(a,b,c,d,e){if(W.prototype.isPrototypeOf(a)){for(var g=f;b.Tc();){var h=b.Ld();if(W.prototype.isPrototypeOf(h)&&h.Pk)g===f&&(g=d.create(c,f,a,"chord"),e.filter(a),this.qd(g)),g.Gc(h),e.filter(h);else{--b.M;break}}return g}};s.xd=function(){return Ni=Ni||[this.pj,this.oj]};s.toString=r("ScoreMeasure");s.m=r(k);
function fe(a){if(a.lh===f){for(var b=[],c=We(a),d=i;c.S();){var e=c.next();d&&!Z.prototype.isPrototypeOf(e)&&b.push(e.Fa());d=l;Z.prototype.isPrototypeOf(e)&&e.Fa()&&b.push(e.Fa())}0===b.length&&b.push(a.Fa());a.lh=b.reduce(function(a,b){for(var c,d=b,e=a;0!==a%b;)c=b,b=a%b,a=c;return d*e/b})}return a.lh}
s.Rc=function(){if(this.pg===f)for(var a=We(this);a.S();){var b=a.next();if(Z.prototype.isPrototypeOf(b)&&b.Xc&&b.Xc.some(function(a){return"multiple-rest"===a.Kd?(this.pg=a,i):l},this))break}return this.pg?this.pg.og:0};function Lh(a,b){b=b||1;if(a.Qe===f){a.Qe=[];for(var c=We(a);c.S();){var d=c.next();d&&d.O&&d.sc&&(a.Qe[d.O()]=Math.max(a.Qe[d.O()]||1,d.sc()))}}return a.Qe[b]}s.oc=function(){var a=this.ob;a===f&&(this.ob=a=this.w.oc());return a};s.O=n();s.ba=function(){return ke(this.oc(),this)};
s.Fa=function(){return this.ba().Fa()};s.jb=function(){return this.ba().jb()};function Af(a,b){Af.a.constructor.call(this,a,b);ud(this,this)}u(Af,ee);s=Af.prototype;s.toString=r("ScoreBarline");s.clone=function(a){a=a||new Af(this.w,this.v);return Af.a.clone.call(this,a)};s.m=function(){var a=new Je;this.Q(a);return a};s.ua=r(1);s.La=function(){return this.ua()};s.ph=o("Ic");s.ka=function(a){var b=f;this[a]&&(b="fermata"===a?this[a]:[this[a]]);b&&b.sort(function(a,b){return a.k-b.k});return b};
function Oi(){}Oi.prototype.toString=r("ScoreElementFactory");
Oi.prototype.create=function(a,b,c,d){c=$d.prototype.isPrototypeOf(c)?c:new $d(c);b=f;switch(d){case "rest":b=new Hi(a,c);break;case "chord":b=new Y(a,c);break;case "barline":b=new Af(a,c);break;default:b=c.is("score-partwise")?new Ye(c):c.is("part-list")?new Se(a,c):c.is("score-part")?new Ve(a,c):c.is("part-group")?new Pe(a,c):c.is("part-symbol")?new Bh(a,c):c.is("part")?new ge(a,c):c.is("measure")?new Li(a,c):c.is("note")?new W(a,c):c.is("direction")?new zf(a,c):c.is("harmony")?new Hh(a,c):c.is("backup")||
c.is("forward")?new Ji(a,c):c.is("staff-details")?new fh(a,c):c.is("clef")?new jh(a,c):c.is("key")?new sh(a,c):c.is("time")?new nh(a,c):c.is("attributes")?new Z(a,c):c.is("barline")?new Af(a,c):new ce(a,c)}return b};function Pi(){}Pi.prototype.clone=function(a){a=a||new Pi;return ub(a,this)};Pi.prototype.reset=function(){tb(this,/^\d+/).forEach(function(a){delete this[a]},this)};function Qi(a,b,c){var c="key_pitches_"+(c||1),d=a[c];a[c]=b;return d}
function Ri(a,b,c){c="key_pitches_"+(c||1);return!a[c]||!a[c].some(hh.prototype.vj,b)?l:i}function Si(){}s=Si.prototype;s.toString=r("Score.ElementTunnelStates");s.clone=function(a){a=a||new Si;this.Va&&(a.Va=this.Va);this.part_symbol&&(a.part_symbol=this.part_symbol);this.staves&&(a.staves=this.staves.slice(0));this.clefs&&(a.clefs=this.clefs.slice(0));this.times&&(a.times=this.times.slice(0));this.keys&&(a.keys=this.keys.slice(0));return a};
s.reset=function(a){this.Va=a.Va||this.Va;this.part_symbol=a.part_symbol||this.part_symbol;Ti(this,a)};function Ui(a,b,c,d,e){a[d]=a[d]||[];var g=b-1;c&&c[d]&&c[d][g]?(a[d][g]=c[d][g],a[d][g].w=a):a[d][g]||(a[d][g]=e.call(a,b))}
function Ti(a,b){for(var c=b?b.pa():1,d=1;d<=c;++d){Ui(a,d,b,"staves",function(a){return new fh(this,'<staff-details number="'+a+'"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>')});Ui(a,d,b,"clefs",function(a){return new jh(this,'<clef number="'+a+'"><sign>G</sign><line>2</line></clef>')});var e=a.Eb(d);e&&"TAB"!==e.T&&(Ui(a,d,b,"times",function(a){return new nh(this,'<time number="'+a+'" symbol="common"><beats>4</beats><beat-type>4</beat-type></time>')}),Ui(a,d,b,
"keys",function(a){return new sh(this,'<key number="'+a+'"><fifths>0</fifths></key>')}))}}s.jb=function(){var a=this.part_symbol;if(a===f&&0===this.Nh){var b=this.pa();1<b&&(this.part_symbol=a=new Bh(this,'<part-symbol top-staff="1" bottom-staff="'+b+'">brace</part-symbol>'))}return a};s.pa=Z.prototype.pa;s.Fa=Z.prototype.Fa;s.getAttribute=Z.prototype.getAttribute;s.Tf=Z.prototype.Tf;s.ma=Z.prototype.ma;s.Eb=Z.prototype.Eb;s.Bd=Z.prototype.Bd;s.Qc=Z.prototype.Qc;s.ag=Z.prototype.ag;
function je(a){this.w=a;this.Hb=new Pi}je.prototype.toString=r("Score.ElementTunnel");function Vi(a,b){for(var c=a.Hb,d=b.pa(),e=1;e<=d;++e){var g=b.Qc(e);if(g){var h=f,j=zh(g);j&&(h=Qi(c,j,e));h&&j&&(h=h.filter(function(a){return!j.some(hh.prototype.tj,a)}),g.ll=h)}}}function Wi(a,b){a.Xd=a.Xd||[];var c=a.Xd,d=f;0>=c.length?(d=new Si,Ch(b)):(d=c[c.length-1],Ch(b,d),d=d.clone());d.reset(b);d.Nh=c.length;c.push(d);return d}
je.prototype.filter=function(a){a.ob=this;if(Li.prototype.isPrototypeOf(a))this.Hb.reset();else if(Z.prototype.isPrototypeOf(a))Xi(this,a);else if(Yi(this,a),W.prototype.isPrototypeOf(a)&&!Y.prototype.isPrototypeOf(a)&&!Hi.prototype.isPrototypeOf(a)){var b=a.ha();if(!a.dl&&b&&(a.prev||!a.ka("tied"))){var c;if(!(c=!this.Hb)){if(!(c=b.ji)){c=this.Hb;var d=a.O(),d=d||1;if(b.L)if(Ri(c,b,d))c=i;else{var e;e=""+ih(b);c=c[e+d]===b.L}else c=l;c=!c}c=c||a.Na&&a.Na.md}if(c){if(a.Na)a.Lb=new qh(a.Na,a.q(),f,
a.ca);else if(b.L)a.Lb=new qh(f,a.q(),b.L,a.ca);else{if(c=this.Hb)c=this.Hb,d=(d=a.O())||1,b.L?c=l:(e=""+ih(b),e=c[e+d],0===e?c=l:e?c=i:(d="key_pitches_"+(d||1),c=c[d]&&c[d].some(hh.prototype.uj,b)?i:l));c&&(a.Lb=new qh(f,a.q(),0,a.ca),c=a.O(),d=""+ih(b),this.Hb[d+(c||1)]=0)}!b.ji&&this.Hb&&(c=this.Hb,a=(a=a.O())||1,b.L&&!Ri(c,b,a)&&(d=""+ih(b),d+=a,c[d]!==b.L&&(c[d]=b.L)))}}}};function Xi(a,b){var c=Wi(a,b);b.pb=c;c.Tf().forEach(function(a){Yi(this,a)},a);Vi(a,c)}
function Yi(a,b){var c;a.Xd=a.Xd||[];c=a.Xd;if(0>=c.length){var d=new Si;Ti(d);d.Nh=c.length;c.push(d)}c=c[c.length-1];b.pb=c;b.Va=c.Fa();b.Ab=c.jb();if(d=b.O())!b.ea&&!fh.prototype.isPrototypeOf(b)&&(b.ea=c.ma(d)),!b.Db&&!jh.prototype.isPrototypeOf(b)&&(b.Db=c.Eb(d)),!b.time&&!nh.prototype.isPrototypeOf(b)&&(b.time=c.Bd(d)),!b.key&&!sh.prototype.isPrototypeOf(b)&&(b.key=c.Qc(d))}function ke(a,b){var c=b.Aj;c===f&&(c=We(b).next().ba(),b.Aj=c);return c}
function Zi(a,b,c){this.w=a;this.Oi=b?i:l;this.ob=c}s=Zi.prototype;s.toString=r("Score.ElementIterator");s.clone=function(a){a=a||new Zi;return ub(a,this)};function $i(a){return(a=a.w)&&a.fc?a.fc.length:0}function aj(){var a=Zi.factory;a===f&&(a=new Oi);return a}function bj(a){a.M=a.M!==f?a.M:a.Oi?$i(a):0}s.S=function(){return this.M<$i(this)};s.next=function(){return this.w.fc[this.M++]};s.Tb=function(){return 0<this.M};s.prev=function(){return this.w.fc[--this.M]};
function cj(a,b,c,d){this.element=a;this.bh=b||[];this.bh.push(this.qd);this.lc=a.fc||[];a.fc=this.lc;this.lj=c;this.Hf=d}cj.prototype.toString=r("Score.ElementEnfolder");function dj(a,b){var c=f;if(b.Tc()){var d=b.Ld();a.bh.some(function(a){return(c=a.call(this,d,b,this.element,this.lj,this.Hf))?i:l},a)}return c}cj.prototype.qd=function(a){var b=0<this.lc.length?this.lc[this.lc.length-1]:f,c=this.lc.length;this.lc.push(a);a.Bj=c;b&&(b.next=a,a.prev=b);this.Hf&&this.Hf.filter(a);return a};
function ej(a,b,c){ej.a.constructor.call(this,a,b,c);if((a=this.w)&&!a.Af){var b=a.xd(),c=aj(),d=fj(this,a);a.Nc=a.Nc||new cj(a,b,c,this.ob);for(b=new gj(d);b.Tc();)dj(a.Nc,b);a.fc=a.Nc.lc;a.Af=i}bj(this)}u(ej,Zi);ej.prototype.toString=r("Score.ElementFullInitIter");ej.prototype.clone=function(a){a=a||new ej;return ej.a.clone.call(this,a)};function fj(a,b){var c=f,d=aj();Q(b,b.Bf.join(","),function(a,g){var h=d.create(b,a,g);c=c||[];c.push(h)},a);return c}function gj(a){this.cd=a;this.M=0}
gj.prototype.clone=function(a){a=a||new gj;return ub(a,this)};gj.prototype.Tc=function(){return this.cd?this.M<this.cd.length:l};gj.prototype.Ld=function(){return this.cd[this.M++]};
function hj(a,b,c){hj.a.constructor.call(this,a,b,c);if((owner=this.w)&&!owner.Af){a=owner;if(!(b=owner.Df))b=P(owner,owner.Bf);a.Df=b;var a=owner,d;b=owner.Df;b.v&&(d=new $d(b.v.first()));a.cj=d;d=owner;var e;a=owner.Df;a.v&&(e=new $d(a.v.last()));d.gm=e;owner.Kc=owner.Kc||owner.cj;owner.Nc=owner.Nc||new cj(owner,owner.xd(),aj(),this.ob)}bj(this)}u(hj,Zi);s=hj.prototype;s.toString=r("Score.ElementLazyInitIter");s.clone=function(a){a=a||new hj;return hj.a.clone.call(this,a)};
s.S=function(){return hj.a.S.call(this)||this.Nk()};s.next=function(a){bj(this);var b=hj.a;if(b.S.call(this))b=b.next.call(this);else{var b=this.w,c=dj(b.Nc,this);++this.M;b.Kc||(b.Af=i);b=c}!a&&this.S()&&(this.next(i),this.prev());return b};s.Tc=function(){return this.w.Kc?i:l};s.Ld=function(){var a=this.w,b=aj(),c=a.Kc,d;d=a.Kc;d=(d=d.v?d.v.next():f)&&d.length?new $d(d):f;a.Kc=d;b=b.create(a,f,c);a.cd=a.cd||[];a.cd.push(b);return b};s.Nk=hj.prototype.Tc;
function We(a,b){var c=f;ge.prototype.isPrototypeOf(a)?c=a.oc():Li.prototype.isPrototypeOf(a)&&(c=a.w.oc());return ge.prototype.isPrototypeOf(a)?new hj(a,b,c):new ej(a,b,c)}function ij(){ij.a.constructor.call(this,"Wedge")}u(ij,S);ij.prototype.clone=function(a){a=a||new ij;return ij.a.clone.call(this,a)};
ij.prototype.p=function(a){ij.a.p.call(this,a);var b=this.n;a.save();a.X(1);a.qa("#000000");a.beginPath();var c=this.Fh(),d=this.Gh(),e=b.j.lf||10;("crescendo"===b.j.type?4:1)&1?(a.moveTo(c,0+e),a.lineTo(d,0+0.5*e),a.lineTo(c,0)):(a.moveTo(d,0+e),a.lineTo(c,0+0.5*e),a.lineTo(d,0));a.stroke();a.restore()};ij.prototype.Fh=function(){var a=this.n.r()[0].t(),b=a.aa();return a.W+E(b,"parent","x")};
ij.prototype.Gh=function(){var a=this.n.r(),b=a[0].t(),a=a[a.length-1].t(),c=a.aa();return E(a,"parent","x")-E(b,"parent","x")+b.W+E(c,"parent","x")+c.i("width")};function jj(a,b){jj.a.constructor.call(this,a,b)}u(jj,uf);s=jj.prototype;s.toString=r("Score.Wedge");s.l=r("wedge");s.clone=function(a){a=a||new jj(this.k,this.j);return jj.a.clone.call(this,a)};s.ta=function(a){return/(crescendo|diminuendo|continue|stop)/.test(a)};s.na=function(a){return/crescendo|diminuendo/.test(a)};
s.va=function(a){return"stop"===a};s.m=function(){var a=new ij;C(a,"height",this.j.lf||10);this.Q(a);return a};function kj(){kj.a.constructor.call(this,"Dashes")}u(kj,S);kj.prototype.clone=function(a){a=a||new kj;return kj.a.clone.call(this,a)};kj.prototype.p=function(a){kj.a.p.call(this,a);var b=this.n;a.save();a.X(1);a.qa("#000000");var c=this.Jk(),d=this.Kk();a.beginPath();B.Mc(a,c,0,d,0,b.j.hj,b.j.Fl);a.stroke();a.restore()};kj.prototype.Jk=ij.prototype.Fh;kj.prototype.Kk=ij.prototype.Gh;
function lj(a,b){lj.a.constructor.call(this,a,b)}u(lj,uf);s=lj.prototype;s.toString=r("Score.Dashes");s.l=r("dashes");s.clone=function(a){a=a||new lj(this.k,this.j);return lj.a.clone.call(this,a)};s.ta=function(a){return/(start|continue|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.s=r("upper");s.m=function(){var a=new kj;C(a,"height",10);this.Q(a);return a};function mj(a,b){mj.a.constructor.call(this,a,b)}u(mj,Bf);mj.prototype.toString=r("Score.Dynamics");
mj.prototype.l=r("dynamics");mj.prototype.clone=function(a){a=a||new mj(this.k,this.j);return mj.a.clone.call(this,a)};
mj.prototype.m=function(a){var b=fc(kc(a)),c=f;(a=this.j.qf)&&a.forEach(function(a){for(var e=0;e<a.length;++e){var g=a.charAt(e),h;h={width:f,height:f};switch(g){case "r":case "z":case "s":case "m":h.height=8;break;case "p":h.height=13;break;case "f":h.height=18;break;case "-":h.width=10;break;default:h.width=15}if(h=G(b,g,h.width,h.height)){h.wj*=0.6;c=c||new R("Dynamics");var j=h.P();F(h,"dynamics","y",j.c);g="p"===g?1:"z"===g?2:0;c.o(h,l,l,g,g,"dynamics")}}},this);this.Q(c);return c};
function nj(){nj.a.constructor.call(this,"Slide")}u(nj,S);nj.prototype.clone=function(a){a=a||new nj;return nj.a.clone.call(this,a)};
nj.prototype.p=function(a){nj.a.p.call(this,a);var b=this.n,c=this.n.r()[0].t().i("width"),d=oj(this),e,g=this.n.r();e=g[g.length-1];g=g[0].t();e=e.t();e.aa();e=E(e,"parent","x")-E(g,"parent","x");var h=this.n.r(),g=h[0],h=h[h.length-1],g=oj(this)+(h.u()-g.u());a.save();a.X(1);a.qa("#000000");a.beginPath();switch(b.j.xb){default:case "solid":B.J(a,c,d,e,g);break;case "dashed":B.Mc(a,c,d,e,g);break;case "dotted":B.Mc(a,c,d,e,g,1,4);break;case "wavy":var b=B,h=e-c,j=g-d,m=Math.atan(j/h);a.transform(Math.cos(m),
Math.sin(m),-Math.sin(m),Math.cos(m),c+3,d);for(var h=Math.abs(Math.sqrt(Math.pow(h,2)+Math.pow(j,2)))-3,m=j=0,p=i;j<h;){var q=j+3,x=m+(p?1:-1)*3*(5/3);b.J(a,j,m,q,x);j=q;m=x;p=!p}}a.stroke();a.restore();a.save();if(b=this.Ma(a))h=b.i("width"),e-=c,g-=d,j=Math.atan(g/e),a.transform(Math.cos(j),Math.sin(j),-Math.sin(j),Math.cos(j),c+0.5*e-0.5*h*Math.cos(j),d+0.5*g-0.5*h*Math.sin(j)),b.p(a);a.restore()};function oj(a){var a=a.n.r()[0],b=a.t().aa();return 0.5*(-1===a.H()?1:-1)*b.i("height")}
nj.prototype.Ma=function(a){var b=f,c=this.n.Ga();c&&(b=new T("center"),Ie(b,c,"10px sans-serif",a),b.wa({width:b.i("width"),height:b.i("height")}));return b};function pj(a,b){pj.a.constructor.call(this,a,b)}u(pj,Bf);s=pj.prototype;s.toString=r("Score.Slide");s.l=r("slide");s.clone=function(a){a=a||new pj(this.k,this.j);return pj.a.clone.call(this,a)};s.ta=function(a){return/(start|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.Ga=function(){return this.j.text};
s.Je=r(l);s.s=function(){return-1===this.r()[0].H()?"lower":"upper"};s.m=function(){var a=new nj;this.Q(a);return a};function qj(a,b){qj.a.constructor.call(this,a,b)}u(qj,pj);qj.prototype.toString=r("Score.Glissando");qj.prototype.l=r("glissando");qj.prototype.clone=function(a){a=a||new qj(this.k,this.j);return qj.a.clone.call(this,a)};function rj(a){rj.a.constructor.call(this,"Bracket");this.Ac=a||8}u(rj,S);s=rj.prototype;s.clone=function(a){a=a||new rj;return rj.a.clone.call(this,a)};
s.p=function(a){rj.a.p.call(this,a);a.save();a.X(1);a.qa("#000000");a.beginPath();var b;this.Ac&10?b=0:this.Ac&5&&(b=0);zb(B,a,0,b,this.kb(),this.Xa(),this.Ac);a.stroke();a.restore();if(b=this.Ma(a))a.save(),a.translate(5,-(b.i("height")-this.Xa()+2)),b.p(a),a.restore()};
s.kb=function(){var a=this.n;if(this.Ac&10){var b=a.r(),c=b[0].t(),b=b[b.length-1].t(),c=E(c,"parent","x"),d=E(b,"parent","x"),b=b.i("width");sj.prototype.isPrototypeOf(a)&&(b-=2);return c===f?Hb(this,"width")-2:d-c+b}if(this.Ac&5)return a.pc()};s.Xa=function(){var a=this.n;if(this.Ac&10)return a.pc();if(this.Ac&5){var a=a.r(),b=a[0].u();return a[a.length-1].u()-b+10}};
s.Ma=function(a){var b=f,c=this.n;if("ending"===c.l()){var d="";(d=c.j?c.j.kl:"")?(d=d.split(/,\s+/).join("., "),d+="."):d=c.Ga();d&&(b=new T("center"),kc(a).Ea=14,Ie(b,d,"bold 11px sans-serif",a),b.wa({width:b.i("width"),height:b.i("height")}))}return b};function tj(a,b){tj.a.constructor.call(this,a,b)}u(tj,uf);s=tj.prototype;s.toString=r("Score.Bracket");s.l=r("bracket");s.clone=function(a){a=a||new tj(this.k,this.j);return tj.a.clone.call(this,a)};s.ta=function(a){return/(start|continue|stop)/.test(a)};
s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.s=r("upper");s.pc=r(10);s.m=function(a,b){var c=new rj(b);C(c,"height",this.pc());this.Q(c);return c};function sj(a,b){sj.a.constructor.call(this,a,b)}u(sj,tj);s=sj.prototype;s.toString=r("Score.Ending");s.l=r("ending");s.clone=function(a){a=a||new sj(this.k,this.j);return sj.a.clone.call(this,a)};s.ta=function(a){return/(start|discontinue|stop)/.test(a)};s.na=function(a){return"start"===a};
s.va=function(a){return"stop"===a||"discontinue"===a};s.zc=function(a,b,c){"discontinue"===b&&(this.Rk=i);return sj.a.zc.call(this,a,b,c)};s.m=function(a){var b=8;this.Rk&&(b|=4);return sj.a.m.call(this,a,b)};s.Ga=function(){return this.j?this.j.text:""};function uj(){uj.a.constructor.call(this,"HarpPedals");C(this,"width",80);C(this,"height",25)}u(uj,S);uj.prototype.clone=function(a){a=a||new uj;return uj.a.clone.call(this,a)};
uj.prototype.p=function(a){uj.a.p.call(this,a);a.save();a.X(1);a.qa("#000000");var b=this.i("width"),c=this.i("height");a.beginPath();B.J(a,0,0.5*c,0+b,0.5*c);a.stroke();a.beginPath();B.J(a,0.43*b,0,0.43*b,0+c);a.stroke();a.restore();vj(this,a)};
function vj(a,b){var c=a.n;b.save();b.X(3);b.qa("#000000");var d=a.i("width"),e=a.i("height"),g=c.j.mi,h=d/8,j=e/3;"DCBEFGA".split("").forEach(function(a,c){var d=g[a],e=0.5*h+c*h,e=e+(3<=c?h:0),A=j;0>d?A+=j:0<d&&(A+=-j);d=A+j;b.beginPath();B.J(b,e,A,e,d);b.stroke()});b.restore()}function wj(a,b){wj.a.constructor.call(this,a,b)}u(wj,Bf);wj.prototype.toString=r("Score.HarpPedals");wj.prototype.l=r("harp-pedals");
wj.prototype.clone=function(a){a=a||new wj(this.k,this.j);return wj.a.clone.call(this,a)};wj.prototype.m=function(){var a=new uj;this.Q(a);return a};function xj(){xj.a.constructor.call(this,"HarmonyFrame");C(this,"width",80);C(this,"height",25)}u(xj,S);var yj={marginTop:15,marginLeft:15,marginRight:5,marginBottom:5,Xb:10,Pc:15};xj.prototype.clone=function(a){a=a||new xj;return xj.a.clone.call(this,a)};
xj.prototype.i=function(a){var b=this.n;return"width"===a?yj.marginLeft+yj.marginRight+yj.Xb*(b.j.of-1):yj.marginTop+yj.marginBottom+yj.Pc*b.j.Rf};
xj.prototype.p=function(a){xj.a.p.call(this,a);a.save();a.transform(1,0,0,-1,0,this.i("height"));var b=this.n;a.X(0.5);a.qa("#000000");for(var c=yj.marginTop,d=yj.marginTop+b.j.Rf*yj.Pc,e=this.i("width"),g=1;g<=b.j.of;++g){var h=e-yj.marginRight-(g-1)*yj.Xb;a.beginPath();B.J(a,h,c,h,d);a.closePath();a.stroke()}c=yj.marginLeft;d=yj.marginLeft+(b.j.of-1)*yj.Xb;for(e=0;e<=b.j.Rf;++e){g=yj.marginTop+e*yj.Pc;if(0<e){var j=(e+b.j.ye-1).toString();a.hf("bottom");h=yj.marginLeft-0.5*yj.Xb-a.measureText(j);
a.fillText(j,h,g)}a.beginPath();B.J(a,c,g,d,g);a.closePath();0===e&&1===b.j.ye?a.X(3):a.X(1);a.stroke()}zj(this,a);a.restore()};function Aj(a,b,c,d,e,g){for(var h=1;h<=b.j.of;++h)if(!a[h-1]){var j=c-d.marginRight-(h-1)*d.Xb,m=d.marginTop+-0.5*d.Pc;g.X(1);g.beginPath();e.J(g,j-2,m-2,j+2,m+2);g.closePath();g.stroke();g.beginPath();e.J(g,j-2,m+2,j+2,m-2);g.closePath();g.stroke()}}
function Bj(a,b,c,d){a&&a.forEach(function(a,g){if(a.start&&a.stop){var h=b-c.marginRight-(a.start-1)*c.Xb,j=b-c.marginRight-(a.stop-1)*c.Xb,m=c.marginTop+(g-1)*c.Pc;d.beginPath();yb(d,h,m,j,m,l,5);d.closePath();d.fill()}})}
function zj(a,b){var c=a.n,d=[],e=c.j.Qf;if(e){var g=B,h=yj,j=a.i("width"),m=f;e.forEach(function(a){var e=Number(a.Hl.text);d[e-1]=i;var g=Number(a.Ej.text),g=0===g?g:g-c.j.ye+1,A=j-h.marginRight-(e-1)*h.Xb,D=h.marginTop+(g-0.5)*h.Pc,qa=a.Pi;qa&&(m=m||[],m[g]=m[g]||{},m[g][qa.type]=e);e=A;0===g?(b.X(1),b.beginPath(),b.arc(e,D,2,0,2*Math.PI),b.closePath(),b.stroke()):a.jh?(b.X(0.5),b.beginPath(),b.arc(e,D,5,0,2*Math.PI),b.closePath(),b.fill(),a=a.jh,a.text&&(b.save(),b.Td("bold 8px sans-serif"),b.qa("#FFFFFF"),
b.hf("middle"),e-=0.5*b.measureText(a.text),b.fillText(a.text,e,D+1),b.restore())):(b.X(0.5),b.beginPath(),b.arc(e,D,3,0,2*Math.PI),b.closePath(),b.fill())},a)}Aj(d,c,j,h,g,b);Bj(m,j,h,b)}function Cj(a,b){Cj.a.constructor.call(this,a,b)}u(Cj,Bf);Cj.prototype.toString=r("Score.HarmonyFrame");Cj.prototype.l=r("harmony-frame");Cj.prototype.clone=function(a){a=a||new Cj(this.k,this.j);return Cj.a.clone.call(this,a)};Cj.prototype.m=function(){var a=new xj;this.Q(a);return a};
function Dj(a,b){Dj.a.constructor.call(this,a,b)}u(Dj,og);Dj.prototype.toString=r("Score.Lyric");Dj.prototype.l=r("lyric");Dj.prototype.clone=function(a){a=a||new Dj(this.k,this.j);return Dj.a.clone.call(this,a)};function Ej(a,b){Ej.a.constructor.call(this,a,b)}u(Ej,uf);s=Ej.prototype;s.ta=function(a){return/(start|continue|stop)/.test(a)};s.na=function(a){return"start"===a};s.va=function(a){return"stop"===a};s.toString=r("Score.StaffLyrics");s.l=r("staff-lyrics");
s.clone=function(a){a=a||new Ej(this.k,this.j);return Ej.a.clone.call(this,a)};s.s=r("lower");s.r=function(){if(this.Qa){var a=this.Qa[this.Qa.length-1].r();return[this.Qa[0].r()[0],a[a.length-1]]}return Ej.a.r.call(this)};function Fj(a,b,c){a.Vd=b;a.Nb=c}
s.m=function(a){var b=new R("StaffLyrics"),c=this.r();if(c&&0<c.length&&(c=Pg(this.Vd,c[0].t(),this.Nb),F(b,"staff_lyrics","x",c),F(b,"staff_lyrics","y",0),this.Qa)){var d=f;this.Qa.forEach(function(c,g){var h=c.m(a),j=c.r();if(j&&!(0>=j.length)){var j=Pg(this.Vd,j[0].t(),this.Nb),m=(this.Pe-c.la())*h.i("height");if(0<g){var p=c.j.Jl||"single",q=d[c.la()-1];if(q!==f&&("middle"===p||"end"===p))p=new T("left"),Ie(p,"-",c.oa(),a),F(p,"staff_lyrics","x",q+0.5*(j-q-p.i("width"))),F(p,"staff_lyrics","y",
m),b.o(p,l,l,0,0,"staff_lyrics")}F(h,"staff_lyrics","x",j);F(h,"staff_lyrics","y",m);b.o(h,l,l,0,0,"staff_lyrics");q=j+h.i("width");d=d||[];d[c.la()-1]=q;c.j.extend&&(p=new T("left"),Ie(p," __",c.oa(),a),F(p,"staff_lyrics","x",q),F(p,"staff_lyrics","y",m),b.o(p,l,l,0,0,"staff_lyrics"))}},this)}this.Q(b);return b};function Gj(){Gj.a.constructor.call(this,"Shift")}u(Gj,S);Gj.prototype.clone=function(a){a=a||new Gj;return Gj.a.clone.call(this,a)};
Gj.prototype.p=function(a){Gj.a.p.call(this,a);var b=this.Ma(a);if(b){var c=this.n;a.save();var d=c.r();if(d[0]!==d[1]){a.X(1);a.qa("#000000");var d=this.n.r(),e=d[0].t(),d=d[d.length-1].t(),e=E(e,"parent","x"),g=E(d,"parent","x"),d=d.i("width"),d=0+(g-e+d),e="upper"===c.s()?0:0.5*this.i("height"),g=1|("upper"===c.s()?8:2),h=b.i("width");a.beginPath();zb(B,a,0+h+5,e,d-(0+h+5),c.pc(),g,"dashed",4,4);a.stroke()}b.p(a);a.restore()}};
Gj.prototype.Ma=function(a){if(this.Da===f){var b=this.n.Ga();b!==f&&(this.Da=new T("left"),Ie(this.Da,b,"italic 12px sans-serif",a),a=this.Da.i("width"),b=this.Da.i("height"),this.Da.wa({width:a,height:b}),C(this,"height",b))}return this.Da};function Ih(a,b){Ih.a.constructor.call(this,a,b)}u(Ih,uf);s=Ih.prototype;s.toString=r("Score.Shift");s.l=r("octave-shift");s.clone=function(a){a=a||new Ih(this.k,this.j);return Ih.a.clone.call(this,a)};s.ta=function(a){return/(up|down|continue|stop)/.test(a)};
s.na=function(a){return/(up|down)/.test(a)};s.va=function(a){return"stop"===a};s.s=function(){return"up"===this.j.type?"lower":"upper"};s.pc=r(5);s.Ga=function(){var a=this.j.size;return a?a+(8===a?"v":"m")+("upper"===this.s()?"a":"b"):f};s.m=function(a){var b=new Gj;this.Q(b);b.Ma(a);return b};function Hj(){}var Ij,Jj,Kj,Lj;v(Hj,wf);
Hj.prototype.Gc=function(a){Ij=Ij||[Fi,Yf,Zf,$f,bg,cg,ag,dg,Ig,Jg,Kg,Lg,Mg,Ng,Og,Qg,Rg,Sg,Tg,pg,qg,rg,sg,tg,ug,yg,zg,Ag,Bg,vg,wg,Cg,Dg,Eg,eg,Fg,Gg,Hg,Ei,vi,Di,ki,Wf,pi,mj,pj,qj,Dj];xf(this,Ij,a)};function Mj(a){Mj.a.constructor.call(this,a)}u(Mj,Vh);
Mj.prototype.dh=function(a,b){F(b,"staff","x",0);switch(a.Rc()){case 3:this.kc(a,b,"double-whole");this.kc(a,b,"whole");Nj(this,a,b);break;case 2:this.kc(a,b,"double-whole");Nj(this,a,b);break;case 1:this.kc(a,b,"whole");break;case 0:case f:this.kc(a,b);this.ue(a,b);break;default:var c=a.q(),d=new Gi(0,c),c=V(c,2);F(d,"staff","y",c);b.o(d,l,l,0,0,"staff");Nj(this,a,b)}};
Mj.prototype.kc=function(a,b,c){if(c=c||a.ja()){var d=Ii(a,c),c=G(this.z,d.name,d.width,d.height);y=a.u();y===f&&(y=d.Ua);a=c.P();y+=a.c;F(c,"staff","y",y);b.o(c,l,l,2,2,"staff")}};Mj.prototype.ue=function(a,b){var c=a.ja();c&&(c=Ii(a,c),Mj.a.ue.call(this,a,b,c.Ua))};
function Nj(a,b,c){var d=b.Rc();if(0<d){for(var e=d.toString(),d=1<e.length?new R("Renderer.RestNumber"):f,b=b.q(),g=0;g<e.length;++g){var h=cc(a.z,e.charAt(g),20);d?d.o(h,l,l,0,0):d=h}d&&(a=V(b,b.fa),e=0.5*(c.i("width")-d.i("width")),F(d,"staff","x",e),F(d,"staff","y",a),c.o(d,l,l,0,0,"staff"))}}function Oj(a,b){Oj.a.constructor.call(this,a,b)}u(Oj,Bf);s=Oj.prototype;s.toString=r("Score.Arpeggiate");s.l=r("arpeggiate");s.clone=function(a){a=a||new Oj(this.k,this.j);return Oj.a.clone.call(this,a)};
s.ta=function(a){return a===f};s.na=r(l);s.va=r(l);s.s=function(){return this.j.direction};s.m=function(a){for(var b=f,c=this.r(),d=c[0].u(),c=c[c.length-1].u(),c=Math.ceil((c-d)/10),e=0;e<c;++e){var g=a,h=e,j=c,m="scripts.arpeggio";0===h&&"down"===this.s()&&(m="scripts.arpeggio.arrow.M1");h===j-1&&"up"===this.s()&&(m="scripts.arpeggio.arrow.1");if(g=G(g,m,f,10))b=b||new Fe("Arpeggiate"),b.o(g,l,l,0,0)}b&&F(b,"staff","y",d);return b};function Pj(a,b){Pj.a.constructor.call(this,a,b)}u(Pj,Bf);s=Pj.prototype;
s.toString=r("Score.NonArpeggiate");s.l=r("non-arpeggiate");s.clone=function(a){a=a||new Pj(this.k,this.j);return Pj.a.clone.call(this,a)};s.ta=function(a){return/(top|bottom)/.test(a)};s.na=r(l);s.va=r(l);s.pc=r(5);s.m=function(){var a=new rj(4),b=this.r(),c=b[0].u();requisite_height=b[b.length-1].u()-c;requisite_width=this.pc();C(a,"width",requisite_width);C(a,"height",requisite_height);F(a,"staff","y",c-5);this.Q(a);return a};function Qj(a){Qj.a.constructor.call(this,a)}u(Qj,Vh);
function Rj(a,b){this.z=a;this.ea=b}var Sj;v(Rj,wf);Rj.prototype.Wa=function(a){Sj=Sj||[Oj,Pj];xf(this,Sj,a)};Rj.prototype.fb=n();Rj.prototype.Mh=function(a,b){for(var c=0;c<(this.ra?this.ra.length:0);++c){var d=this.ra[c];if(d&&d.toString()===a.prototype.toString()&&d.la()===b)return i}return l};function Tj(a,b){if(a.df===f&&0<(a.ra?a.ra.length:0))for(var c=0;c<(a.ra?a.ra.length:0);++c){var d=a.ra[c];if(d&&(d=d.m(b)))a.df=a.df||[],a.df.push(d)}return a.df}function Uj(a,b){this.z=a;this.ea=b}
function Vj(a,b){return a.hd!==f&&a.hd.some(function(a){return a===b})?i:l}function Wj(a){a.Hc.reverse();a.Hc.forEach(function(a){F(a,"accidentals","y",E(a,"alignbox","y"));this.ge.o(a,l,l,2,2,"accidentals")},a);delete a.Hc;delete a.hd;delete a.cc}
Uj.prototype.Wa=function(a,b,c){if(!Vj(this,b)&&a.Lb){this.ge=this.ge||new R("AccidentalGroup");var d;d=a.ha();var e=f,g=l;b<c.length-1&&1===ih(c[b+1].ha())-ih(d)&&(g=i);this.cc===f&&(this.cc=c.length);for(var h=f,j=f;--this.cc>b;){var e=c[this.cc],j=e.ha(),h=e.Lb,m=2<=this.cc-b,j=6<=ih(j)-ih(d);if(h&&(m||j)){j&&g&&(++this.cc,e=f);break}else e=f}if(d=e){e=new Fe("AlignAccidentalBox");if(g=a.Lb.m(this.z))m=g.P(),m=a.u()+m.c,F(g,"alignbox","x",0),F(g,"alignbox","y",m),e.o(g,l,l,0,0,"alignbox");if(h=
d.Lb.m(this.z))m=h.P(),m=d.u()+m.c,a=a.ha(),j=0,6>ih(d.ha())-ih(a)&&(j+=g.i("width")),F(h,"alignbox","x",j),F(h,"alignbox","y",m),e.o(h,l,l,0,0,"alignbox");this.Hc=this.Hc||[];this.Hc.push(e);this.hd=this.hd||[];this.hd.push(this.cc)}else if(d=a.Lb.m(this.z))e=d.P(),a=a.u()+e.c,F(d,"accidentals","y",a),this.ge.o(d,l,l,2,2,"accidentals")}c.length-1===b&&this.Hc!==f&&Wj(this)};Uj.prototype.fb=function(a){a.dl=i};Uj.prototype.t=o("ge");
function Xj(){this.Jb=this.Ib=0;this.yc=this.xc=f;this.Nd=this.Md=0}Xj.prototype.Wa=function(a){var b=a.q(),b=V(b,Oe(b)),b=a.u()-b;0<b&&(++this.Md,b=Math.abs(b),this.Ib<b&&(this.Ib=b,this.xc=a));0>b&&(++this.Nd,b=Math.abs(b),this.Jb<b&&(this.Jb=b,this.yc=a))};Xj.prototype.fb=function(a,b,c){var d=(b=this.sb(c))?b.H():1;a.Ud(d);this.Yg===f&&b&&If(b)&&(c=b===c[0]?c[c.length-1]:c[0],c=this.Yg=b.Za()+Math.abs(b.u()-c.u()),b.Sd===f&&(b.Sd=b.fd),b.fd=c);a!==b&&(a.gf(i),a.gi=i)};
Xj.prototype.sb=function(a){if(this.gb===f){var b=f;if(a&&a[0].ca)b=a[0].H(),this.gb=-1===b?a[0]:a[a.length-1];else{var c=this.Ib===this.Jb?this.Md>=this.Nd?this.xc:this.yc:this.Ib>=this.Jb?this.xc:this.yc,b=c.H();1===b&&c===a[0]&&(c=a[a.length-1]);-1===b&&c===a[a.length-1]&&(c=a[0]);c.Ud(b);this.gb=c}}return this.gb};function Yj(a,b){this.context=a;this.z=b}Yj.prototype.Wa=n();
function Zj(a,b,c){var d=f,e=f;0<b&&(d=c[b-1]);b<c.length-1&&(e=c[b+1]);var g=a.ha();return[d,e].some(function(a){if(a===f)return l;a=a.ha();return 1===Math.abs(ih(g)-ih(a))?i:l})}Yj.prototype.fb=function(a,b,c){var d=this.t(),e=(new Vh(this.context)).m(a,i),g=0;if(Zj(a,b,c)){var b=e.aa().i("width"),g=0,h=a.ha(),a=a.H();(c=0!==(ih(c[c.length-1].ha())-ih(h))%2)&&1===a?g=-1:!c&&-1===a&&(g=1);g*=b;d.Hi=i}F(e,"staff","x",g);d.o(e,l,l,0,0,"staff")};
Yj.prototype.t=function(){this.Tg===f&&(this.Tg=new Fe("ChordNote"));return this.Tg};Qj.prototype.td=function(a,b){a.I.forEach(function(a,d,e){b.forEach(function(b){b.Wa(a,d,e)})},this)};Qj.prototype.jd=function(a,b){a.I.forEach(function(a,d,e){b.forEach(function(b){b.fb(a,d,e)})},this)};function $j(a,b){if(!W.prototype.isPrototypeOf(a)||!W.prototype.isPrototypeOf(b))return 0;var c=a.O(),d=b.O();return c===d?(c=ih(a.ha()),d=ih(b.ha()),c-d):d-c}
Qj.prototype.m=function(a){var b=a.rb(),c=a.q(),d=f;if("TAB"!==b.T&&a.I!==f&&1<a.I.length){a.I.sort($j);var b=new Xj,e=new Rj(this.z,c),g=new Uj(this.z,c),c=new Yj(this.context,this.z),h=[b,e,g,c];this.td(a,h);this.jd(a,h);oi(a,b.sb());var j=new Pf;(b=Tj(e,this.z))&&b.forEach(function(a){F(a,"compound","y",E(a,"staff","y"));j.o(a,l,l,0,2,"compound")},this);if(b=g.t())F(b,"compound","y",E(b,"accidentals","y")),j.o(b,l,l,0,0,"compound");d=c.t();j&&(F(d,"compound","y",E(d,"staff","y")),j.o(d,l,l,0,0,
"compound"),F(j,"staff","y",E(j,"compound","y")),d=j)}else"TAB"===b.T&&a.I!==f&&1<a.I.length&&(d=new Fe("ChordFret"),a.I.forEach(function(a){a=(new Vh(this.context)).m(a,i);F(a,"staff","x",0);d.o(a,l,l,0,0,"staff")},this));a.Q(d);return d};function ak(a){this.context=a;this.z=fc(kc(a))}s=ak.prototype;s.$=function(a,b){b=b||new ah;a.prev&&bk(this,a,this.Mf,this.If,b,f);bk(this,a,this.Nf,this.Jf,b,f);bk(this,a,this.Of,this.Kf,b,f);return b};
function bk(a,b,c,d,e,g){for(var h=0,j=b.ba().pa(),m=1;m<=j;++m)h=c.call(a,b,m,g),e.save(),h&&(duration=d.call(a,h,dh(e,m,i),g)),h=e.restore();0===h&&(h=1);e.qb(h);return h}s.Mf=function(a,b,c){return c?a.ba().Eb(b):a.Eb(b)};
s.If=function(a,b,c){if(a&&(c=a.m(this.z,c))){var d=c.P(),e=a.u()+d.c;F(c,"staff","y",e);c.yb=new Ph;var g=5;b.o(c,i,l,g,10,"staff");if(a.nd){var h=new T,j;j=""+Math.abs(8*a.nd);Ie(h,j,"10px sans-serif",this.context);j=a.q();0<a.nd?(e+=d.d-d.c,e=Math.max(e,V(j,j.fa)),e+=2):(e=Math.min(e,V(j,1)),e-=h.i("height"),e-=2);F(h,"staff","y",e);h.da=c.da;g+=0.5*(d.f-d.e-h.i("width"));b.o(h,l,l,g,0,"staff")}return a.La()}return 0};
s.Nf=function(a,b,c){var d=a.ba(),e=d.ma(b),d=d.Eb(b),g=f;"alternate"===e.Eg&&"TAB"===d.T||(g=c?a.ba().Qc(b):a.Qc(b));return g};s.Jf=function(a,b){if(a){var c=a.m(this.z);if(c)return c.yb=new Ph,b.o(c,i,l,0,10,"staff"),a.La()}return 0};s.Of=function(a,b,c){var d=a.ba(),e=d.ma(b),d=d.Eb(b),g=f;"alternate"===e.Eg&&"TAB"===d.T||(g=c?a.ba().Bd(b):a.Bd(b));return g};
s.Kf=function(a,b){if(a){var c=a.m(this.z);if(c){var d=c.P();staff=a.q();d=V(staff,Oe(staff))+d.c;F(c,"staff","y",d);c.yb=new Ph;b.o(c,i,l,0,10,"staff");return a.La()}}return 0};s.zj=function(a,b){return a.ba().ma(b)};s.rj=function(a,b,c){if(a){var a=a.clone(),d=a.m(this.z);if(d)return a.ud=c,a=gh(a,0),F(d,"staff","y",a),d.yj=i,d.Dc=b.Dc,d.yb=new Ph,b.o(d,i,i,0,0,"staff"),c}return 0};function ck(a){this.z=a}
ck.prototype.$=function(a,b){b=b||new ah;if(a.Rh)b.ie(a.La());else{var c=a.m(this.z);c&&dh(b,a.O(),i).o(c,i,l,0,1,"staff")}return b};function dk(a){this.z=a}dk.prototype.$=function(a,b,c,d){var b=b||new ah,e=a.ba();if(e){var g=a.m(this.z);if(g){g.Ka=a.k;var h=e.ma(a.k),j=V(h,1),m=a.jb();"alternate"!==h.Eg&&m&&a.k===m.me&&(e=e.ma(m.rf),e=V(e,e.fa),g.ld=Math.abs(e-j));F(g,"staff","y",j);g.gl=d?i:l;dh(b,a.k,i).o(g,i,l,c?5:0,c?0:5,"staff")}}return b};function ek(a){this.context=a;this.z=fc(kc(a))}
ek.prototype.$=function(a,b,c,d,e,g){c||(c=new ah,d&&c.ff(d),c.Dc=e);b&&(c.n=a);if(a.prev&&b&&e===g-1&&(d=c,e=new T,Ie(e,a.Bj+1,"10px sans-serif",this.context),g=a.ba()))g=g.ma(1),F(e,"staff","y",V(g,g.fa)+5),e.duration=0,dh(d,1,i).o(e,l,l,0,0,"staff");for(a=We(a);a.S();){child_element=a.next();e=c;g=b;d=child_element;if(!d.prev&&!g){var h=d.w.prev,j=We(h,i).prev();if(!Af.prototype.isPrototypeOf(j)){var m=j,j=new Af(h,"<barline/>");j.pb=m.pb;j.Ab=m.Ab;j.prev=m}fk(this,j,e,i);j=d;h=l;Af.prototype.isPrototypeOf(j)||
(m=j,j=new Af(d.w,"<barline/>"),j.pb=m.pb,j.Ab=m.Ab,j.prev=m,h=i);fk(this,j,e,l,h)}!d.prev&&g?(g=e,j=d,h=new ak(this.context),bk(h,j,h.Mf,h.If,g,i),bk(h,j,h.Nf,h.Jf,g,i),j.w.prev||bk(h,j,h.Of,h.Kf,g,i)):Z.prototype.isPrototypeOf(d)&&(gk(this,e,d),g=new ak(this.context),g.$(d,e));Y.prototype.isPrototypeOf(d)?(g=new Qj(this.context),g.$(d,e)):Hi.prototype.isPrototypeOf(d)?(g=new Mj(this.context),g.$(d,e)):W.prototype.isPrototypeOf(d)&&(g=new Vh(this.context),g.$(d,e));Ji.prototype.isPrototypeOf(d)&&
(g=new ck(this.z),g.$(d,e));d.prev&&d.next&&Af.prototype.isPrototypeOf(d)&&fk(this,d,e,l);if(!d.next&&(d=d.w.next))if(g=We(d),d=f,g.S()&&Z.prototype.isPrototypeOf(d=g.next()))g=new ak(this.context),bk(g,d,g.Mf,g.If,e,f)}gk(this,c,child_element);return c};
function hk(a,b,c){function d(a,b){var c=0,d=new ak(this.context),c=c+bk(d,a,d.Nf,d.Jf,b,f);return c+=bk(d,a,d.Of,d.Kf,b,f)}var e=0,g=function(a){if(a){var a=We(a),b=f;if(a.S()&&(b=a.next(),!Z.prototype.isPrototypeOf(b)||!b.keys&&!b.Ml))b=f}return b}(b.next,c),h=We(b,i).prev();if(!Af.prototype.isPrototypeOf(h)){var j=h,h=new Af(b,"<barline/>");h.pb=j.pb;h.Ab=j.Ab;h.prev=j}e+=fk(a,h,c,g?l:i);g&&(e+=d.call(a,g,c));(function(a,b){te(a,function(a){var c=we(a)-1;do{var d=a.children&&0<=c&&c<a.children.length?
a.children[c]:f;if(Df.prototype.isPrototypeOf(d)){a=d.n;c=b+a.La();a.ud=c;d.duration=a.La();break}}while(0<=--c);return l},this)})(c,e)}function ik(a,b,c,d,e){var d=d||[],e=e||new w,g=0;b.forEach(function(a,b,m){e.save();d[b]=this.$(a,c,d?d[b]:f,e,b,m.length);g=e.restore()},a);e.qb(g);return d}function jk(a,b,c,d){var d=d||new w,e=0;b.forEach(function(a,b){d.save();hk(this,a,c[b]);e=d.restore()},a);d.qb(e);return c}
function fk(a,b,c,d,e){b.k=1;var g=0,a=new dk(a.z),h=b.ba();if(h){for(var h=h.pa(),j=1;j<=h;++j)b.k=j,c.save(),a.$(b,c,d,e),g=c.restore();c.qb(g)}b.k=1;return g}function gk(a,b,c){if(c){for(var d=b.vd(),e=b.mc(i),g=e.length-1;0<=g;--g){var h=e[g],j="staff_duration_p",j=j+b.Dc,j=h[j];if(0<=j){d-=j;d-=h.wb;break}}0<d&&(b.save(),b.ie(d),a=new ak(a.context),bk(a,c,a.zj,a.rj,b,d),b.restore())}}function kk(){kk.a.constructor.call(this,"LabelGroups")}u(kk,R);
kk.prototype.clone=function(a){a=a||new kk;return kk.a.clone.call(this,a)};function lk(a){if(0<we(a)){var b=0;te(a,function(a){b=Math.max(b,a.i("width"));return l},a);te(a,function(a){C(a,"width",b);return l},a)}}function mk(a,b){this.nb=a;this.uc=b}function nk(a,b,c){function d(a,b){return a?a.map(function(a){return a?a.i("width"):0}).reduce(function(a,b){return Math.max(a,b)},b):b}ok(a,b,c);pk(a,b,c);b=d(a.xg,0);b=d(a.dg,b);return b+=qk(a,rk(a))}
mk.prototype.t=function(a,b){if(this.Oa===f||this.xl!==a)if(this.Oa=f,this.xl=a,this.nb&&(this.Oa=new kk),sk(this,a),tk(this,a),this.Oa&&lk(this.Oa),uk(this,a,b),vk(this,a,b),this.nb){var c=1<this.nb.length?i:l,d=l;c||(d=1<a.cb[this.nb[0].id].n.ba().pa()?i:l);if(c||d){var c=this.Oa,e=this.nb,d=this.Oa.i("width"),g=wk(a,a.cb[e[0].id],xk),e=wk(a,a.cb[e[e.length-1].id],yk),h=new Je;h.n={Ic:"regular"};h.Oe=1;h.ld=Math.abs(e-g);F(h,"line","x",d+5);F(h,"line","y",g);c.o(h,l,l,0,0,"line")}}return this.Oa};
function ok(a,b,c){a.nb&&1<a.nb.length&&(a.xg=a.nb.map(function(a){if(a=c?a.getName():a.Sf()){var e=new T("right","middle",5);Ie(e,a,"Serif 12 Bold",b);return e}},a))}function sk(a,b){a.xg&&a.xg.forEach(function(a,d){if(a){var e=this.Oa,g=b.cb[this.nb[d].id],h=a.i("height"),g=wk(b,g,zk)-0.5*h;F(a,"line","x",0);F(a,"line","y",g);e.o(a,l,l,0,0,"line")}},a)}function pk(a,b,c){a.uc&&(a.dg=a.uc.map(function(a){if(a=c?a.Jh:a.Sf()){var e=new T("left","middle",5);Ie(e,a,"Serif 12 Bold",b);return e}}))}
function tk(a,b){a.dg&&a.dg.forEach(function(a,d){if(a){var e=this.Oa,g=this.uc[d],h=wk(b,b.cb[g.nf.id],xk),g=wk(b,b.cb[g.Wd.id],yk);F(a,"line","x",0);F(a,"line","y",0.5*(g+h));e.o(a,l,l,0,0,"line")}},a)}function rk(a){return a.uc?a.uc.map(function(a){return a.k},a).reduce(function(a,c){return Math.max(a,c)},1):1}function qk(a,b){return 10*(rk(a)-b)}
function uk(a,b,c){if(a.uc){var d=a.Oa.i("width");a.uc.forEach(function(a){var g=this.Oa,h=d+qk(this,a.k);if("none"!==a.Fd){var j=fc(kc(c)),m=b.cb[a.nf.id],p=wk(b,m,xk),q=wk(b,b.cb[a.Wd.id],yk),q=Math.abs(q-p),a=a.m(j,q);ch(m,q);F(a,"line","x",h);F(a,"line","y",p);g.o(a,l,l,0,0,"line")}},a)}}
function vk(a,b,c){if(a.nb){var d=a.Oa.i("width");a.nb.forEach(function(a){var g=this.Oa,h=d+qk(this,rk(this)),a=b.cb[a.id],j=a.n.ba(),m=j.jb();if(j&&m){var p=j.ma(m.rf),q=j.ma(m.me);if(p!==f&&q!==f&&p!==q){var p=V(p,p.fa),q=V(q,1),x=fc(kc(c)),m=m.m(x,Math.abs(p-q));m!==f&&(j=V(j.ma(j.pa()),1),a=wk(b,a,xk),F(m,"line","x",0<h?h-m.i("width"):h),F(m,"line","y",a+(q-j)),g.o(m,l,l,0,0,"line"))}}},a)}}function Ak(a){this.context=a}
Ak.prototype.$=function(a,b,c,d){if(!a)return b;a.forEach(function(a,g){var h=b[g]||new ah,j=0;te(h,function(a){j=Math.max(j,a.i("width"));return l},this);var m=(c?Math.min(d,1.7*j):d?d:1.7*j)-j,p=a.ka("beam");p&&Bk(this,p,h,m);(p=a.ka(/beam|lyric/,i))&&Bk(this,p,h,m);if(p=a.ka("lyric"))p=Ck(this,p,h,m),Bk(this,p,h,m)},this);return b};
function Bk(a,b,c,d){b.forEach(function(a){var b=wg.prototype.isPrototypeOf(a),h=Hg.prototype.isPrototypeOf(a),j=Wf.prototype.isPrototypeOf(a),m=pi.prototype.isPrototypeOf(a),p=a.r(),q=p[0].O();if(b||h){var x=p[0].rb();if("TAB"===x.T)return;q+=1;x=p[0].ba().Eb(q);if(!x||"TAB"!==x.T)return}q=dh(c,q,l);a.af(q,d);var A=a.m(this.context),D=(j||m)&&1===p.length&&!a.ended?i:l;A.da=(j||m)&&a.Vc?0:p[0].t().da;Bf.prototype.isPrototypeOf(a)||(D?(a.Ke=i,j=q.mc(i),A.Bc=j[j.length-1].wb):A.Bc=p[p.length-1].t().da);
b&&(j=A.i("width"),m=A.i("height"),A.dd({e:0.5*-j,c:0.5*-m,f:0.5*j,d:0.5*m}));if(b||h)b=x,h=(h=Jh(a.Ad(),"string"))&&h[0].text?Number(h[0].text):1,x=A.P(),b=mh(b,h)+x.c,F(A,"staff","y",b);A.yb=new Ph;A.yb.Nb=d;q.o(A,l,l,vf(a,q,d),0,"staff")},a)}
function Ck(a,b,c,d){var e=[];b.forEach(function(a){var b=a.r()[0].O();e[b-1]=e[b-1]||[];e[b-1].push(a)},a);return e.map(function(a,b){var e=b+1;composed=f;a.forEach(function(a){var b=composed=composed||new Ej(e);b.Qa=b.Qa||[];b.Qa.push(a);b.Pe=b.Pe||1;b.Pe=Math.max(b.Pe,a.la())});composed&&Fj(composed,dh(c,e,l),d);return composed},a)}function Dk(){Dk.a.constructor.call(this)}u(Dk,Ee);wb(Dk);Dk.prototype.toString=r("Renderer.System");
Dk.prototype.clone=function(a){a=a||new Dk;return Dk.a.clone.call(this,a)};var yk=1,zk=2,xk=3;function wk(a,b,c){var d=0;te(a,function(a){if(0===c||c===yk||c===zk)d+=a.i("height");if(a===b){if(c===yk)d-=bh(b);else if(c===xk){var a=d,g;g=b.n.ba();g=V(g.ma(g.pa()),1)-E(b,"staff","y");d=a+g}else if(c===zk){a=d;g=bh(b);var h,j=b.n.ba();h=j.ma(1);j=j.ma(j.pa());h=V(h,h.fa)-V(j,1);d=a-(g+0.5*h)}return i}if(4===c||c===xk)d+=a.i("height");return l},a);return d}
function Ek(a){this.li=a.map(function(a){return We(a)});this.M=0}Ek.prototype.S=function(){return this.M<(this.Mb?this.Mb.length:0)?i:Fk(this)};Ek.prototype.next=function(){return this.M<(this.Mb?this.Mb.length:0)?this.Mb[this.M++]:Gk(this)};function Fk(a){return a.li.every(function(a){return a.S()})}function Gk(a){var b=a.li.map(function(a){return a.next()});a.Mb=a.Mb||[];a.Mb.push(b);++a.M;return b}Ek.prototype.Tb=function(){return 0<this.M};Ek.prototype.prev=function(){return this.Mb[--this.M]};
function Hk(a){this.z=a}Hk.prototype.$=function(a,b,c){b.forEach(function(b,e){eh(b);c=c||new Dk;var g=c,h=a[e].id;g.cb=g.cb||{};g.cb[h]===f&&(g.cb[h]=b,b.Ue=i,g.o(b,l,l,0,0))},this);return c};function Ik(a){this.context=a}function Jk(a,b,c){this.source=a;this.Pa=b;this.context=c;this.ef=$e(a).reverse();this.Sh=new mk(this.ef,a.Zf());this.ng=new ek(this.context);this.sl=new Ak(this.context);a=kc(this.context);this.Ai=new Hk(fc(a));this.Zc=new rf;this.gc=new Ek(this.ef);this.M=0}
function Kk(a,b){var c=b,d=a.Sh.t(b,a.context);d&&(c=new R("SystemWithLabels"),c.o(d,l,l,0,0,"line"),F(b,"line","x",c.i("width")),F(b,"line","y",0),c.o(b,i,i,0,0,"line"));return c}s=Jk.prototype;s.S=function(){return this.M<(this.Zb?this.Zb.length:0)?i:this.gc.S()};s.next=function(){return this.M<(this.Zb?this.Zb.length:0)?this.Zb[this.M++]:this.lg()};
s.lg=function(){var a=new Dk;this.he=this.he||0;for(var b=0,c=nk(this.Sh,this.context,!this.gc.Tb()),d=nf(this.Pa,this.Zc)-c,e=i,g=f,h=f,j=f;this.gc.S();){g=h;h=this.gc.next();this.pe=this.pe||h.map(function(){return new Hj},this);var m=this.Ai.$(this.ef,ik(this.ng,h,e,f)).i("width"),b=b+1.6*m;if(b>d){this.gc.prev();this.gc.Tb()||(e="score-div's width is not enough,",e+=" at least ",e+=Math.ceil(b+c+50),e+=" please!",aa(Error(e)));h=g;break}j=ik(this.ng,h,e,j,a);e=l;h.forEach(function(a,b){for(var c=
this.pe[b],d=We(a);d.S();){child_element=d.next();W.prototype.isPrototypeOf(child_element)&&c.Gc(child_element);if(Hh.prototype.isPrototypeOf(child_element)){var e=c,g=child_element;Kj=Kj||[Cj,Wh];xf(e,Kj,g)}else zf.prototype.isPrototypeOf(child_element)&&(e=c,g=child_element,Jj=Jj||[Sh,ai,bi,mj,ci,jj,Ih,lj,tj,Th,wj,di,Uh],xf(e,Jj,g));Af.prototype.isPrototypeOf(child_element)&&(e=c,g=child_element,Lj=Lj||[ai,bi,Ei,sj,Og],xf(e,Lj,g))}},this)}j?(j=jk(this.ng,h,j,a),b=!this.gc.S(),j=this.sl.$(this.pe,
j,b,d),this.pe.forEach(function(a){a.reset()}),a=this.Ai.$(this.ef,j,a),j=a.i("width"),b?C(a,"width",Math.min(d,1.7*j)):C(a,"width",d),a=Kk(this,a),this.he+=a.i("height"),this.he>of(this.Pa,this.Zc)&&sf(this.Zc),this.Zb=this.Zb||[],this.Zb.push(a),++this.M):a=f;return a};s.Tb=function(){return 0<this.M};s.prev=function(){return this.Zb[--this.M]};Ik.prototype.$=function(a,b){return new Jk(a,b,this.context)};function Lk(a){this.context=a}
function Mk(a,b,c,d){this.source=a;this.context=d;this.Zc=new rf;this.Pa=b;this.Yd=c;this.ga="page";this.M=0}s=Mk.prototype;s.S=function(){return this.M<(this.Wb?this.Wb.length:0)?i:this.Yd.S()};s.next=function(){return this.M<(this.Wb?this.Wb.length:0)?this.Wb[this.M++]:this.lg()};
s.lg=function(){var a=new tf(this.Zc);C(a,"width",this.Pa.zd());C(a,"height",this.Pa.Be());F(a,this.ga,"x",0);F(a,this.ga,"y",0);var b=new S("TopMargin");C(b,"height",lf(this.Pa,a,"top"));b.Ue=i;F(b,this.ga,"x",0);a.o(b,l,l,0,0,this.ga,i);(new qf(this.context)).$(this.Pa,a,i);Nk(this,a);this.Pa.di=Hb(a,"height")-a.Ya("height")-lf(this.Pa,a,"bottom");for(b=0;this.Yd.S();){var c=this.Yd.next(),b=b+5,b=b+c.i("height");if(b>of(this.Pa)){this.Yd.prev();this.Yd.Tb()||(c="score-div's height is not enough,",
c+=" at least ",c+=Math.ceil(b+50),c+=" please!",aa(Error(c)));break}F(c,this.ga,"x",lf(this.Pa,a,"left"));a.o(c,l,l,5,0,this.ga,i)}b=new S("BottomMargin");C(b,"height",lf(this.Pa,a,"bottom"));b.Ue=i;F(b,this.ga,"x",0);a.o(b,l,l,0,0,this.ga);(new qf(this.context)).$(this.Pa,a);sf(this.Zc);this.Wb=this.Wb||[];this.Wb.push(a);++this.M;return a};s.Tb=function(){return 0<this.M};s.prev=function(){return this.Wb[--this.M]};
function Nk(a,b){var c=new pf(a.context),d=hf(a.source);d&&d.forEach(function(a){c.$(a,b)},a)}Lk.prototype.$=function(a,b){b||(b=new jf(this.context,a),b.ui(this.context.kb()),b.ti(this.context.Xa()),kf(b,"top"),kf(b,"left"),kf(b,"right"),kf(b,"bottom"));var c=(new Ik(this.context)).$(a,b);return new Mk(a,b,c,this.context)};
function Ok(a,b,c,d){this.context=b;this.pf=c;this.Oc=d;var e=this;zip.workerScriptsPath||aa(Error("ScoreLibrary.Inflater(): set zip.workerScriptsPath first!"));zip.createReader(new zip.BlobReader(Pk(a)),function(a){Qk(e,a)},function(a){e.Oc.call(e.context,a)})}function Pk(a){for(var b=a.length,c=new Uint8Array(b),d=0;d<b;++d)c[d]=a.charCodeAt(d)&255;a=new zip.BlobBuilder;a.append(c.buffer);return a.getBlob("application/vnd.recordare.musicxml")}
function Qk(a,b){b.getEntries(function(b){var d=f;b.some(function(a){return"META-INF/container.xml"===a.filename?(d=a,i):l})&&d.getData(new zip.TextWriter,function(d){Rk(a,b,d)})})}
function Rk(a,b,c){if((c=Zd(new I,new $d(c)).Bg)&&0<c.length&&("application/vnd.recordare.musicxml+xml"===c[0].ei||""===c[0].ei)&&c[0].kh){var d=c[0].kh,e=f;if(b.some(function(a){return a.filename===d?(e=a,i):l})){e.getData(new zip.TextWriter,function(b){a.pf.call(a.context,$.parseXML(b))});return}}a.Oc.call(a.context,"ScoreLibrary.Inflater.callbackContainer(): invalid contents!")}
function Sk(a,b,c,d){this.bb="object"===typeof a?a.name:a;this.Jg=/.*\.mxl$/.test(this.bb)?i:l;this.context=b;this.pf=c;this.Oc=d}Sk.prototype.Sg=function(a){this.Jg?new Ok(a,this.context,this.pf,this.Oc):this.pf.call(this.context,a)};function Tk(a,b,c,d){Tk.a.constructor.call(this,a,b,c,d);this.mb=a;this.load()}u(Tk,Sk);Tk.prototype.load=function(){var a=new FileReader,b=this;a.onload=function(a){b.Sg(a.target.result)};a.onerror=b.ec;a.readAsBinaryString(this.mb)};
Tk.prototype.ec=function(a){this.Oc.call(this.context,a)};function Uk(a,b,c,d){Uk.a.constructor.call(this,a,b,c,d);this.load()}u(Uk,Sk);Uk.prototype.load=function(){$.ajax({url:this.bb,type:"GET",mimeType:this.Jg?"application/vnd.recordare.musicxml":"application/vnd.recordare.musicxml+xml",dataType:this.Jg?"mxl":"xml",context:this,success:this.Sg,error:this.ec})};Uk.prototype.ec=function(a,b,c){this.Oc.call(this.context,c)};$.ajaxSetup({contents:{xml:/.*musicxml\+xml$/,mxl:/.*musicxml$/},converters:{"text mxl":i}});
$.ajaxPrefilter("mxl",function(a){a.mimeType="text/plain; charset=x-user-defined"});
function Vk(a,b,c,d){this.ic=a;this.Cb=$("<canvas/>");this.Cb.css({position:"absolute",left:0,top:0});this.Cb.appendTo(this.ic);this.jc=new lc(this.Cb);this.gj=kc(this.jc);this.z=fc(this.gj);Yb(this.z);this.bb=this.ic.attr("musicxml_ref")||"";this.mb=b;this.Wc=c?i:l;this.Bl=d?i:l;this.Kb||(this.Wc?(this.Kb=this.ic.prev(".ui-dialog-titlebar"),this.Kb.css({padding:"0px"})):(this.Kb=$("<span></span>",{id:"toolbar","class":"ui-widget-header ui-corner-all"}),this.Kb.css({position:"absolute",display:"none",
right:0,bottom:0,"font-family":"'Trebuchet MS', 'Arial', '''Helvetica', 'Verdana', 'sans-serif'",padding:"0px 4px"}),this.Kb.appendTo(this.ic)),this.Wc?Wk(this,"go_url_btn_node",{id:"go_url_btn",text:this.bb},{icons:{secondary:"ui-icon-refresh"}},this.Qg):(Wk(this,"open_file_btn_node",{id:"open_file_btn",text:"Open local MusicXML"},{text:l,icons:{primary:"ui-icon-folder-collapsed"}},this.Ti),Xk(this,"go_url_input_node",{id:"go_url_input",type:"text",value:this.bb,size:30,maxlength:256},{"font-size":"1.1em"},
this.Kb),Wk(this,"go_url_btn_node",{id:"go_url_btn",text:"Refresh"},{text:l,icons:{primary:"ui-icon-refresh"}},this.Qg)),Wk(this,"page_1st_btn_node",{id:"page_1st_btn",text:"Goto First Page"},{text:l,icons:{primary:"ui-icon-arrowthickstop-1-w"},disabled:i},this.Ui),Wk(this,"page_prev_btn_node",{id:"page_prev_btn",text:"Goto Prev Page"},{text:l,icons:{primary:"ui-icon-arrowthick-1-w"},disabled:i},this.Xi),Wk(this,"page_next_btn_node",{id:"page_next_btn",text:"Goto Next Page"},{text:l,icons:{primary:"ui-icon-arrowthick-1-e"},
disabled:i},this.Vi),Wk(this,"page_nth_btn_node",{id:"page_nth_btn",text:"Goto Last Page"},{text:l,icons:{primary:"ui-icon-arrowthickstop-1-e"},disabled:i},this.Wi),this.Wc||Wk(this,"standalone_btn_node",{id:"standalone_btn",text:"Standalone Viewer"},{text:l,icons:{primary:"ui-icon-newwin"}},this.Yi));Yk(this)}ja("ScoreLibrary.ScoreDiv",Vk);function Zk(a,b,c){b=0<=b?b:0;a.Ve=a.Ve||[];var d=a.Ve[b];!d&&c&&(d=new lc($("<canvas/>")),d.resize(a.jc.kb(),a.jc.Xa()),kc(d).z=a.z,a.Ve[b]=d);return d}s=Vk.prototype;
s.kb=function(){return this.ic.width()};s.Xa=function(){return this.ic.height()};function $k(a,b){a.data.He.call(a.data.Re,a,b)}function al(a,b,c){(a=a[b])&&c&&a.button("option",c)}function Xk(a,b,c,d,e){var g=a[b];g||(g=$("<input></input>",c),g.css(d),g.appendTo(e),a[b]=g)}function Wk(a,b,c,d,e){var g={},h=a[b];h||(h=$("<button></button>",c),h.css(g),h.button(d),h.appendTo(a.Kb),e&&h.click({Re:a,He:e},$k),a[b]=h)}
function bl(a,b,c,d,e,g,h){var j=a[b];j||(j=$("<div></div>",c),e&&j.bind("dialogcreate",{Re:a,He:e},$k),g&&j.bind("dialogresizestop",{Re:a,He:g},$k),h&&j.bind("dialogclose",{Re:a,He:h},$k),a[b]=j,j.dialog(d));j.dialog("open")}function cl(a){if(a.Ja.S()){var b=a.Ja.M||0,c=a.Ja.next(),d=Zk(a,b);d===f&&(d=Zk(a,b,i),c.wa({width:c.i("width"),height:c.i("height")}),c.p(d));b=a.jc;b.clear();b.drawImage(d,0,0);a.Ja.prev()}}function dl(a){a.Ja.next();var b=a.Ja.S();a.Ja.prev();return b}
function el(a){var b=a.Ja.Tb();al(a,"page_prev_btn_node",{disabled:!b});al(a,"page_1st_btn_node",{disabled:!b});b=dl(a);al(a,"page_next_btn_node",{disabled:!b});al(a,"page_nth_btn_node",{disabled:!b})}
s.Ti=function(){al(this,"open_file_btn_node",{disabled:i});bl(this,"open_file_dialog_node",{id:"open_file_dialog"},{modal:i,autoOpen:l,position:["center","center"],title:"Open local MusicXML",resizable:l,width:500,height:"auto",buttons:{OK:function(){var a=$(this);a.prop("ok_clicked",i);a.dialog("close")},Cancel:function(){var a=$(this);a.prop("ok_clicked",l);a.dialog("close")}}},this.$i,f,this.Zi);al(this,"open_file_btn_node",{disabled:l})};
s.$i=function(){Xk(this,"open_file_input_node",{id:"open_file_input",type:"file",accept:"application/vnd.recordare.musicxml, application/vnd.recordare.musicxml+xml"},{width:"100%"},this.open_file_dialog_node)};s.Zi=function(){var a=this.open_file_dialog_node.prop("ok_clicked"),b=this.open_file_input_node.prop("files");a&&b&&1===b.length&&(this.mb=b[0],this.bb=this.mb.name,this.go_url_input_node.prop("value",this.bb),fl(this),Yk(this))};
s.Qg=function(){al(this,"go_url_btn_node",{disabled:i});this.go_url_input_node&&(this.bb=this.go_url_input_node.prop("value"));fl(this);Yk(this)};s.Yi=function(){bl(this,"standalone_dialog_node",{id:"standalone_dialog"},{modal:l,autoOpen:l,position:["center","center"],width:this.kb(),minWidth:this.kb(),height:"auto",minHeight:this.Xa()},this.aj,this.bj)};
s.aj=function(){this.mf||(this.mf=new Vk(this.standalone_dialog_node.attr({musicxml_ref:this.bb}).css({padding:"0px",width:this.kb(),height:this.Xa()}),this.mb,i))};s.bj=function(){this.mf&&Yk(this.mf)};function fl(a){var b=a.standalone_dialog_node;b&&b.dialog("close");delete a.mf;delete a.standalone_dialog_node}s.Ui=function(){for(;this.Ja.Tb();)this.Ja.prev();cl(this);el(this)};s.Xi=function(){this.Ja.prev();cl(this);el(this)};s.Vi=function(){this.Ja.next();cl(this);el(this)};
s.Wi=function(){for(;this.Ja.S();)this.Ja.next();this.Ja.prev();cl(this);el(this)};s.i=function(a){return this[a]};function gl(a){a.ac&&(a.ac.remove(),delete a.ac)}
s.Rg=function(a){try{var b=this.kb(),c=this.Wc?this.Xa():this.Xa()-this.Kb.outerHeight();this.jc.resize(b,c);delete this.Ve;this.source=new Ye(a);this.sj=new Lk(this.jc);this.Ja=this.sj.$(this.source);if(this.Wc||this.Bl||dl(this))this.Wc||this.Kb.css("display","block");cl(this);el(this)}catch(d){this.ec(d)}gl(this);al(this,"go_url_btn_node",{disabled:l})};s.ec=function(a){gl(this);aa(a)};
function Yk(a){a.jc.clear();if(!a.ac){a.ac=$("<img/>",{src:"/images/waiting.gif",alt:"musicxml loading..."});var b=0.5*(a.kb()-a.ac.prop("width")),c=0.5*(a.Xa()-a.ac.prop("height"));a.ac.css({position:"absolute",left:b,bottom:c})}a.ac.appendTo(a.ic);"object"===typeof(a.mb?a.mb:a.bb)?new Tk(a.mb?a.mb:a.bb,a,a.Rg,a.ec):new Uk(a.mb?a.mb:a.bb,a,a.Rg,a.ec)}$(function(){$(".score-div").map(function(){return new Vk($(this))}).get()});
=======
function aa(a) {
    throw a;
}
var f = void 0,
    i = !0,
    k = null,
    l = !1;

function n() {
    return function () {}
}

function ba(a) {
    return function (b) {
        this[a] = b
    }
}

function o(a) {
    return function () {
        return this[a]
    }
}

function r(a) {
    return function () {
        return a
    }
}
var s, ca = this;

function da(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function ea(a) {
    return "string" == typeof a
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    ga = 0,
    ia = Date.now || function () {
        return +new Date
    };

function ja(a, b) {
    var c = a.split("."),
        d = ca;
    !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)!c.length && b !== f ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}

function ka(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Cn = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
}

function la(a, b) {
    for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
    a = a.replace(/\%s/, d);
    return a
}

function ma(a) {
    if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
    return a
}
var oa = /&/g,
    pa = /</g,
    ra = />/g,
    sa = /\"/g,
    na = /[&<>\"]/;
var ta, ua, va, wa;

function xa() {
    return ca.navigator ? ca.navigator.userAgent : k
}
wa = va = ua = ta = l;
var ya;
if (ya = xa()) {
    var za = ca.navigator;
    ta = 0 == ya.indexOf("Opera");
    ua = !ta && -1 != ya.indexOf("MSIE");
    va = !ta && -1 != ya.indexOf("WebKit");
    wa = !ta && !va && "Gecko" == za.product
}
var Aa = ua,
    Ba = wa,
    Ca = va,
    Da;
a: {
    var Ea = "",
        Fa;
    if (ta && ca.opera) var Ga = ca.opera.version,
    Ea = "function" == typeof Ga ? Ga() : Ga;
    else if (Ba ? Fa = /rv\:([^\);]+)(\)|;)/ : Aa ? Fa = /MSIE\s+([^\);]+)(\)|;)/ : Ca && (Fa = /WebKit\/(\S+)/), Fa) var Ha = Fa.exec(xa()),
    Ea = Ha ? Ha[1] : "";
    if (Aa) {
        var Ia, Ja = ca.document;
        Ia = Ja ? Ja.documentMode : f;
        if (Ia > parseFloat(Ea)) {
            Da = "" + Ia;
            break a
        }
    }
    Da = Ea
}
var Ka = {};

function La(a) {
    if (!Ka[a]) {
        for (var b = 0, c = ("" + Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
            var h = c[g] || "",
                j = d[g] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                p = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = m.exec(h) || ["", "", ""],
                    x = p.exec(j) || ["", "", ""];
                if (0 == q[0].length && 0 == x[0].length) break;
                b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 ==
                    x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == x[2].length) ? -1 : (0 == q[2].length) > (0 == x[2].length) ? 1 : 0) || (q[2] < x[2] ? -1 : q[2] > x[2] ? 1 : 0)
            } while (0 == b)
        }
        Ka[a] = 0 <= b
    }
}
var Ma = {};

function Na() {
    return Ma[9] || (Ma[9] = Aa && document.documentMode && 9 <= document.documentMode)
}

function Oa() {
    this.pi = ia()
}
new Oa;
Oa.prototype.set = ba("pi");
Oa.prototype.reset = function () {
    this.set(ia())
};
Oa.prototype.get = o("pi");

function Pa(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function Qa(a) {
    this.stack = Error().stack || "";
    a && (this.message = "" + a)
}
ka(Qa, Error);
Qa.prototype.name = "CustomError";

function Ra(a, b) {
    b.unshift(a);
    Qa.call(this, la.apply(k, b));
    b.shift()
}
ka(Ra, Qa);
Ra.prototype.name = "AssertionError";

function Sa(a, b) {
    aa(new Ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
var Ta = Array.prototype,
    Ua = Ta.indexOf ? function (a, b, c) {
        return Ta.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (ea(a)) return !ea(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };

function Va(a, b, c, d) {
    Ta.splice.apply(a, Wa(arguments, 1))
}

function Wa(a, b, c) {
    return 2 >= arguments.length ? Ta.slice.call(a, b) : Ta.slice.call(a, b, c)
}

function Xa(a, b, c) {
    for (var d = 0, e = a.length, g; d < e;) {
        var h = d + e >> 1,
            j;
        j = b(c, a[h]);
        0 < j ? d = h + 1 : (e = h, g = !j)
    }
    return g ? d : ~d
}

function Ya(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}

function Za(a) {
    if ("function" == typeof a.Cd) return a.Cd();
    if (ea(a)) return a.split("");
    var b = da(a);
    if ("array" == b || "object" == b && "number" == typeof a.length) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return Pa(a)
}

function $a(a, b) {
    this.Ca = {};
    this.Ba = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && aa(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.uf(a)
}
s = $a.prototype;
s.Lc = 0;
s.Cd = function () {
    ab(this);
    for (var a = [], b = 0; b < this.Ba.length; b++) a.push(this.Ca[this.Ba[b]]);
    return a
};
s.clear = function () {
    this.Ca = {};
    this.Lc = this.Ba.length = 0
};
s.remove = function (a) {
    return bb(this.Ca, a) ? (delete this.Ca[a], this.Lc--, this.Ba.length > 2 * this.Lc && ab(this), i) : l
};

function ab(a) {
    if (a.Lc != a.Ba.length) {
        for (var b = 0, c = 0; b < a.Ba.length;) {
            var d = a.Ba[b];
            bb(a.Ca, d) && (a.Ba[c++] = d);
            b++
        }
        a.Ba.length = c
    }
    if (a.Lc != a.Ba.length) {
        for (var e = {}, c = b = 0; b < a.Ba.length;) d = a.Ba[b], bb(e, d) || (a.Ba[c++] = d, e[d] = 1), b++;
        a.Ba.length = c
    }
}
s.get = function (a, b) {
    return bb(this.Ca, a) ? this.Ca[a] : b
};
s.set = function (a, b) {
    bb(this.Ca, a) || (this.Lc++, this.Ba.push(a));
    this.Ca[a] = b
};
s.uf = function (a) {
    var b;
    if (a instanceof $a) ab(a), b = a.Ba.concat(), a = a.Cd();
    else {
        b = [];
        var c = 0,
            d;
        for (d in a) b[c++] = d;
        a = Pa(a)
    }
    for (c = 0; c < b.length; c++) this.set(b[c], a[c])
};
s.clone = function () {
    return new $a(this)
};

function bb(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}

function cb(a) {
    this.Ca = new $a;
    a && this.uf(a)
}

function db(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + (a[fa] || (a[fa] = ++ga)) : b.substr(0, 1) + a
}
s = cb.prototype;
s.add = function (a) {
    this.Ca.set(db(a), a)
};
s.uf = function (a) {
    for (var a = Za(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
};
s.remove = function (a) {
    return this.Ca.remove(db(a))
};
s.clear = function () {
    this.Ca.clear()
};
s.contains = function (a) {
    a = db(a);
    return bb(this.Ca.Ca, a)
};
s.Cd = function () {
    return this.Ca.Cd()
};
s.clone = function () {
    return new cb(this)
};

function eb(a) {
    return fb(a || arguments.callee.caller, [])
}

function fb(a, b) {
    var c = [];
    if (0 <= Ua(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(gb(a) + "(");
        for (var d = a.arguments, e = 0; e < d.length; e++) {
            0 < e && c.push(", ");
            var g;
            g = d[e];
            switch (typeof g) {
            case "object":
                g = g ? "object" : "null";
                break;
            case "string":
                break;
            case "number":
                g = "" + g;
                break;
            case "boolean":
                g = g ? "true" : "false";
                break;
            case "function":
                g = (g = gb(g)) ? g : "[fn]";
                break;
            default:
                g = typeof g
            }
            40 < g.length && (g = g.substr(0, 40) + "...");
            c.push(g)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(fb(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ?
        c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}

function gb(a) {
    if (hb[a]) return hb[a];
    a = "" + a;
    if (!hb[a]) {
        var b = /function ([^\(]+)/.exec(a);
        hb[a] = b ? b[1] : "[Anonymous]"
    }
    return hb[a]
}
var hb = {};

function ib(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
}
ib.prototype.hh = k;
ib.prototype.gh = k;
var jb = 0;
ib.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || jb++;
    d || ia();
    this.Id = a;
    this.bl = b;
    delete this.hh;
    delete this.gh
};
ib.prototype.si = ba("Id");

function kb(a) {
    this.fi = a
}
kb.prototype.Xe = k;
kb.prototype.Id = k;
kb.prototype.Cf = k;
kb.prototype.Lh = k;

function lb(a, b) {
    this.name = a;
    this.value = b
}
lb.prototype.toString = o("name");
var mb = new lb("SHOUT", 1200),
    nb = new lb("CONFIG", 700);
s = kb.prototype;
s.getName = o("fi");
s.getParent = o("Xe");
s.si = ba("Id");

function ob(a) {
    if (a.Id) return a.Id;
    if (a.Xe) return ob(a.Xe);
    Sa("Root logger has no level set.");
    return k
}
s.log = function (a, b, c) {
    if (a.value >= ob(this).value) {
        a = this.ak(a, b, c);
        b = "log:" + a.bl;
        ca.console && (ca.console.timeStamp ? ca.console.timeStamp(b) : ca.console.markTimeline && ca.console.markTimeline(b));
        ca.msWriteProfilerMark && ca.msWriteProfilerMark(b);
        for (b = this; b;) {
            var c = b,
                d = a;
            if (c.Lh)
                for (var e = 0, g = f; g = c.Lh[e]; e++) g(d);
            b = b.getParent()
        }
    }
};
s.ak = function (a, b, c) {
    var d = new ib(a, "" + b, this.fi);
    if (c) {
        d.hh = c;
        var e;
        var g = arguments.callee.caller;
        try {
            var h;
            var j;
            c: {
                for (var m = ["window", "location", "href"], p = ca, q; q = m.shift();)
                    if (p[q] != k) p = p[q];
                    else {
                        j = k;
                        break c
                    }
                j = p
            }
            if (ea(c)) h = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: j,
                stack: "Not available"
            };
            else {
                var x, A, m = l;
                try {
                    x = c.lineNumber || c.Vb || "Not available"
                } catch (D) {
                    x = "Not available", m = i
                }
                try {
                    A = c.fileName || c.filename || c.sourceURL || j
                } catch (qa) {
                    A = "Not available", m = i
                }
                h = m || !c.lineNumber || !c.fileName || !c.stack ? {
                    message: c.message,
                    name: c.name,
                    lineNumber: x,
                    fileName: A,
                    stack: c.stack || "Not available"
                } : c
            }
            e = "Message: " + ma(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ma(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ma(eb(g) + "-> ")
        } catch (ha) {
            e = "Exception trying to expose exception! You win, we lose. " + ha
        }
        d.gh = e
    }
    return d
};

function t(a, b) {
    a.log(mb, b, f)
}
var pb = {}, qb = k;

function rb(a) {
    qb || (qb = new kb(""), pb[""] = qb, qb.si(nb));
    var b;
    if (!(b = pb[a])) {
        b = new kb(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = rb(a.substr(0, c));
        c.Cf || (c.Cf = {});
        c.Cf[d] = b;
        b.Xe = c;
        pb[a] = b
    }
    return b
}!Aa || Na();
!Ba && !Aa || Aa && Na() || Ba && La("1.9.1");
Aa && La("9");

function sb(a, b, c) {
    for (var d in b) a[d] = a[d] !== f && c ? c(a[d], b[d]) : b[d];
    return a
}

function tb(a, b) {
    "object" !== typeof a && aa(TypeError());
    var c = [],
        d;
    for (d in a) a.hasOwnProperty(d) && (!b || b.test(d)) && c.push(d);
    return c
}

function ub(a, b) {
    for (var c in b) "function" !== typeof b[c] && (a[c] = b[c]);
    return a
}

function u(a, b) {
    a.a = b.prototype;
    a.prototype = new b;
    a.prototype.constructor = a
}

function v(a, b) {
    var c = a.prototype,
        d = b.prototype,
        e;
    for (e in d) "function" !== typeof d[e] && aa(Error("ScoreLibrary.aggregate: unexpect!")), "constructor" !== e && (c[e] = d[e])
}

function vb() {}

function wb(a) {
    function b(a) {
        return function () {
            return a.apply(this.delegate ? this.delegate : this, arguments)
        }
    }
    var c = w;
    v(a, vb);
    var a = a.prototype,
        c = c.prototype,
        d;
    for (d in c) {
        var e = c[d];
        "function" === typeof e && "constructor" !== d && (a[d] = b(e))
    }
}
var z;
z = rb("ScoreLibrary");
z.rm = function (a, b) {
    if ("undefined" == typeof a) return "undefined";
    if (a == k) return "NULL";
    var c = [],
        d;
    for (d in a)
        if (b || "function" != da(a[d])) {
            var e = d + " = ";
            try {
                e += a[d]
            } catch (g) {
                e += "*** " + g + " ***"
            }
            c.push(e)
        }
    return c.join("\n")
};
z.Y = function (a) {
    function b(a, g) {
        var h = g + "  ";
        try {
            if (a !== f)
                if (a === k) d.push("NULL");
                else if (ea(a)) d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
            else if ("function" == da(a)) d.push(("" + a).replace(/\n/g, "\n" + g));
            else {
                var j = da(a);
                if ("object" == j || "array" == j || "function" == j)
                    if (c.contains(a)) d.push("*** reference loop detected ***");
                    else {
                        c.add(a);
                        d.push("{");
                        for (var m in a) "function" != da(a[m]) && (d.push("\n"), d.push(h), d.push(m + " = "), b(a[m], h));
                        d.push("\n" + g + "}")
                    } else d.push(a)
            } else d.push("undefined")
        } catch (p) {
            d.push("*** " +
                p + " ***")
        }
    }
    var c = new cb,
        d = [];
    b(a, "");
    return d.join("")
};

function xb() {}
var B = B || new xb;
xb.prototype.toString = r("Renderer.PaintHelper");
xb.prototype.J = function (a, b, c, d, e) {
    a.moveTo(b, c);
    a.lineTo(d, e)
};

function yb(a, b, c, d, e, g, h) {
    var j = g ? 1 : -1,
        g = 2 * j,
        m = d - b,
        p = e - c,
        q = 0.4 * m;
    h > q && 20 > p && (h = q);
    h *= j;
    q = p / m;
    j = b + 0.25 * m;
    p = c + (j - b) * q + h;
    m = d - 0.25 * m;
    h = c + (m - b) * q + h;
    a.moveTo(b, c);
    a.bezierCurveTo(j, p, m, h, d, e);
    a.bezierCurveTo(m, h + g, j, p + g, b, c)
}

function zb(a, b, c, d, e, g, h, j, m, p) {
    j = "dashed" === j ? a.Mc : a.J;
    h & 1 || j.call(a, b, c, d, c, d + g, m, p);
    h & 2 || j.call(a, b, c, d + g, c + e, d + g, m, p);
    h & 4 || j.call(a, b, c + e, d + g, c + e, d, m, p);
    h & 8 || j.call(a, b, c + e, d, c, d, m, p)
}
xb.prototype.Mc = function (a, b, c, d, e, g, h) {
    for (var g = g || 5, h = h || 5, d = d - b, e = e - c, j = Math.abs(Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2))), m = i, p = 0, q = b, x = c; p < j;) {
        var A = j - p,
            D = m ? g : h,
            p = p + (A < D ? A : D),
            A = b + p * d / j,
            D = c + p * e / j;
        m && this.J(a, q, x, A, D);
        q = A;
        x = D;
        m = !m
    }
};

function Ab() {}

function Bb(a, b) {
    for (var c in b)
        if (b[c] < a.i(c)) return l;
    for (c in b) Cb(a, c, b[c]);
    return i
}
Ab.prototype.wa = function (a) {
    return !Bb(this, a) ? l : i
};

function Db() {}

function Eb(a) {
    /(width|height)/.test(a)
}

function Fb(a) {
    0 <= a || aa(RangeError("Renderer.Requisition.validateVal(): invalid argument!"))
}
Db.prototype.Ya = function (a) {
    Eb(a);
    return this["implicit_" + a] || 0
};

function Gb(a, b, c) {
    Eb(b);
    Fb(c);
    a["implicit_" + b] = c
}

function Hb(a, b) {
    Eb(b);
    return a["explicit_" + b]
}

function C(a, b, c) {
    Eb(b);
    Fb(c);
    a["explicit_" + b] = c
}
Db.prototype.i = function (a) {
    Eb(a);
    var b = Hb(this, a),
        a = this.Ya(a);
    return b ? Math.max(b, a) : a
};

function Ib(a, b) {
    var c = a["allocate_" + b];
    Fb(c);
    return c
}

function Cb(a, b, c) {
    c >= a.i(b) || aa(RangeError("Renderer.Requisition.setAllocate(): invalid argument!"));
    a["allocate_" + b] = c
}

function E(a, b, c) {
    /(x|y)/.test(c);
    return a[b + "_" + c]
}

function F(a, b, c, d) {
    /(x|y)/.test(c);
    a[b + "_" + c] = d
}

function Jb() {}
var Kb = {
    xa: 1,
    ya: 0,
    za: 0,
    Aa: 1,
    x: 0,
    y: 0
};

function Lb(a, b) {
    var c = {};
    c.xa = a.xa * b.xa + a.za * b.ya;
    c.ya = a.ya * b.xa + a.Aa * b.ya;
    c.za = a.xa * b.za + a.za * b.Aa;
    c.Aa = a.ya * b.za + a.Aa * b.Aa;
    c.x = a.xa * b.x + a.za * b.y + 1 * a.x;
    c.y = a.ya * b.x + a.Aa * b.y + 1 * a.y;
    return c
}
Jb.prototype.xh = function () {
    return this.ci ? {
        xa: this.Xh,
        ya: this.Yh,
        za: this.Zh,
        Aa: this.$h,
        x: this.ai,
        y: this.bi
    } : f
};
Jb.prototype.transform = function (a) {
    a.transform(this.Xh, this.Yh, this.Zh, this.$h, this.ai, this.bi)
};

function Mb() {
    this.id = ++Nb;
    this.debug = l
}
v(Mb, Db);
v(Mb, n());
v(Mb, Jb);
v(Mb, Ab);
var Nb = Nb || 0;
Mb.prototype.toString = r("Renderer.Paintable");
Mb.prototype.clone = function (a) {
    a = a || new Mb;
    ub(a, this);
    return a
};
var Ob = Ob || f;

function Pb(a) {
    var b = Ob;
    return b === f || b === a.id || a.debug
}
var Qb = Qb || l;
Mb.prototype.p = function (a) {
    if (Qb && Pb(this)) {
        a.save();
        a.X(1);
        a.qa("#209424");
        a.beginPath();
        var b = Ib(this, "width"),
            c = Ib(this, "height");
        0 === b ? B.J(a, 0.5, 0.5, 0.5, c - 0.5) : 0 === c ? B.J(a, 0.5, 0.5, b - 0.5, 0.5) : a.rect(0.5, 0.5, b - 1, c - 1);
        a.stroke();
        a.restore()
    }
};

function Rb(a, b) {
    this.target = a;
    b && (this.xa = b.xa, this.ya = b.ya, this.za = b.za, this.Aa = b.Aa, this.x = b.x, this.y = b.y)
}
Rb.prototype.toString = r("Renderer.PaintableTransformer");
Rb.prototype.xh = function () {
    return {
        xa: this.xa,
        ya: this.ya,
        za: this.za,
        Aa: this.Aa,
        x: this.x,
        y: this.y
    }
};
Rb.prototype.transform = function () {
    var a = this,
        b = sb({}, Kb);
    do {
        if (Mb.prototype.isPrototypeOf(a)) {
            var c = a,
                a = b;
            c.ci && (a = Lb(c.xh(), a));
            c.ci = i;
            c.Xh = a.xa;
            c.Yh = a.ya;
            c.Zh = a.za;
            c.$h = a.Aa;
            c.ai = a.x;
            c.bi = a.y;
            break
        }
        b = Lb(b, a);
        a = a.target
    } while (1);
    return b
};

function Sb(a, b, c) {
    this.yl = b !== f ? b : 1;
    this.zl = c !== f ? c : 1;
    Sb.a.constructor.call(this, a, {
        xa: this.yl,
        ya: 0,
        za: 0,
        Aa: this.zl,
        x: 0,
        y: 0
    })
}
u(Sb, Rb);
Sb.prototype.toString = r("Renderer.PaintableScaler");

function Tb(a, b) {
    this.bf = b || 0;
    var c = Math.cos(this.bf),
        d = Math.sin(this.bf);
    Tb.a.constructor.call(this, a, {
        xa: c,
        ya: d,
        za: -d,
        Aa: c,
        x: 0,
        y: 0
    })
}
u(Tb, Rb);
Tb.prototype.toString = r("Renderer.PaintableRotator");

function Ub(a, b, c) {
    this.$k = b !== f ? b : 0;
    this.al = c !== f ? c : 0;
    Ub.a.constructor.call(this, a, {
        xa: 1,
        ya: 0,
        za: 0,
        Aa: 1,
        x: this.$k,
        y: this.al
    })
}
u(Ub, Rb);
Ub.prototype.toString = r("Renderer.PaintableTranslator");

function Vb(a, b) {
    this.fg = b ? i : l;
    Vb.a.constructor.call(this, a, {
        xa: this.fg ? -1 : 1,
        ya: 0,
        za: 0,
        Aa: this.fg ? 1 : -1,
        x: 0,
        y: 0
    })
}
u(Vb, Rb);
Vb.prototype.toString = r("Renderer.PaintableMirror");
Vb.prototype.Qh = o("fg");

function Wb(a) {
    Wb.a.constructor.call(this);
    this.sa = a;
    this.Ed = a.name
}
u(Wb, Mb);
s = Wb.prototype;
s.toString = r("Renderer.Glyph");
s.clone = function (a) {
    a = a || new Wb(this.sa);
    return Wb.a.clone.call(this, a)
};
s.getName = function () {
    return this.sa.name
};
s.uh = function () {
    return 0 < this.sa.width ? this.sa.height / this.sa.width : 1
};
s.Eh = function () {
    return 0 < this.sa.height ? this.sa.width / this.sa.height : 1
};
s.dd = function (a) {
    this.qg = i;
    this.sg = a.e;
    this.ug = a.c;
    this.rg = a.f;
    this.tg = a.d
};
s.P = function () {
    var a = f;
    return a = this.qg ? {
        e: this.sg,
        c: this.ug,
        f: this.rg,
        d: this.tg
    } : {
        e: this.sa.e,
        c: this.sa.c,
        f: this.sa.f,
        d: this.sa.d
    }
};
s.zh = function () {
    this.sa.outline === f && this.sa.g !== f && (this.sa.outline = this.sa.g.split(" "));
    return this.sa.outline
};
s.p = function (a) {
    Wb.a.p.call(this, a);
    a.save();
    this.transform(a);
    a.X(1);
    a.qa("#000000");
    a.beginPath();
    if (!(0 >= this.sa.width)) {
        var b = this.zh();
        if (b !== f)
            for (var c = b.length, d = 0; d < c;) switch (b[d++]) {
            case "m":
                a.moveTo(b[d++], b[d++]);
                break;
            case "l":
                a.lineTo(b[d++], b[d++]);
                break;
            case "q":
                var e = b[d++],
                    g = b[d++];
                a.quadraticCurveTo(b[d++], b[d++], e, g);
                break;
            case "b":
                e = b[d++], g = b[d++], a.bezierCurveTo(b[d++], b[d++], b[d++], b[d++], e, g)
            }
    }
    a.closePath();
    a.fill();
    a.restore()
};

function Xb() {}

function Yb(a) {
    var b = Zb;
    a.sd = a.sd || [];
    a.sd.some(function (a) {
        return b.ih === a.ih ? i : l
    }) || a.sd.push(b)
}

function $b(a, b) {
    a.tc === f && (a.tc = {}, a.sd.forEach(function (a) {
        for (var b in a.tc) {
            var e = a.tc[b],
                g = e.name;
            e.fm = b;
            this.tc[g] = e
        }
    }, a));
    return a.tc[b]
}

function ac(a, b) {
    var c = f;
    a.sd.some(function (a) {
        return (c = a.tc[b]) !== f ? i : l
    });
    return c
}

function G(a, b, c, d) {
    a = $b(a, b);
    b = a !== f ? new Wb(a) : f;
    return bc(a, b, c, d)
}

function cc(a, b, c) {
    a = ac(a, b);
    b = a !== f ? new Wb(a) : f;
    return bc(a, b, f, c)
}

function bc(a, b, c, d) {
    if (b !== f && (c !== f ? d = c * b.uh() : d !== f && (c = d * b.Eh()), C(b, "width", c), C(b, "height", d), a.width)) {
        a = c / a.width;
        c = new Sb(b, a, a);
        d = b.P();
        d.e *= a;
        d.c *= a;
        d.f *= a;
        d.d *= a;
        b.dd(d);
        if (0 !== d.e || 0 !== d.c) c = new Ub(c, -d.e, -d.c);
        c.transform()
    }
    return b
}

function dc(a) {
    this.context = a;
    this.style = ec;
    this.Ea = 16
}
var ec = 0;

function fc(a) {
    a.z === f && (a.z = new Xb);
    return a.z
}
s = dc.prototype;
s.fillText = function (a, b, c, d, e) {
    e !== f && (this.style = 3, this.hb = e);
    return this.style !== ec ? (this.context.save(), this.context.translate(b, c), b = this.xj, c = this.Ph, d = this.kj, 3 !== this.style && (c = this.Oh, d = this.jj), gc(this, b, c, d, a), this.context.restore(), i) : l
};
s.measureText = function (a, b) {
    b !== f && (this.style = 3, this.hb = b);
    if (this.style !== ec) {
        this.wc = 0;
        var c = this.Xk,
            d = this.Ph,
            e = this.Wk;
        3 !== this.style && (d = this.Oh, e = this.Vk);
        gc(this, c, d, e, a);
        return this.wc
    }
};
s.xj = function (a) {
    var b = this.style;
    this.style = ec;
    this.context.fillText(a, 0, 0);
    this.context.translate(this.context.measureText(a), 0);
    this.style = b
};
s.Xk = function (a) {
    var b = this.style;
    this.style = ec;
    a = this.context.measureText(a);
    this.style = b;
    this.wc += a
};

function gc(a, b, c, d, e) {
    for (var g = "", h = 0; h < e.length; ++h) {
        var j = e.charAt(h);
        switch (a.style) {
        case 1:
            d.call(a, j, h, e);
            break;
        case 2:
        case 3:
            c.call(a, j, h, e) ? ("" !== g && (b.call(a, g), g = ""), d.call(a, j, h, e) && ++h) : g += j
        }
    }(2 === a.style || 3 === a.style) && "" !== g && b.call(a, g)
}
s.Oh = function (a) {
    return !/\d/.test(a) && ac(this.z, a) !== f ? i : l
};
s.jj = function (a) {
    var a = cc(this.z, a, this.Ea),
        b = a.i("width"),
        c = a.i("height");
    Cb(a, "width", b);
    Cb(a, "height", c);
    this.context.save();
    this.context.transform(1, 0, 0, -1, 0, 0);
    a.p(this.context);
    this.context.restore();
    this.context.translate(b, 0);
    return l
};
s.Ph = function (a, b, c) {
    return "%" === a && b + 1 < c.length && (a = c.charAt(b + 1), "%" === a || /\d/.test(a) && this.hb !== f && a < this.hb.length) ? i : l
};
s.kj = function (a, b, c) {
    a = c.charAt(b + 1);
    if ("%" !== a) {
        a = this.hb[a];
        b = a.i("width");
        c = a.i("height");
        Cb(a, "width", b);
        Cb(a, "height", c);
        this.context.save();
        c = 0;
        switch (this.context.Bh()) {
        case "top":
            c = this.Ea;
            break;
        case "middle":
            c = 0.2 * this.Ea
        }
        var d = hc(this, a);
        this.context.transform(d, 0, 0, -d, 0, c);
        a.p(this.context);
        this.context.restore();
        this.context.translate(b * d, 0)
    }
    return i
};
s.Vk = function (a) {
    this.wc += cc(this.z, a, this.Ea).i("width");
    return l
};

function hc(a, b) {
    var c = b.i("height");
    "Note" === b.toString() && (c = b.aa().i("height"));
    return c * a.Ea / 250
}
s.Wk = function (a, b, c) {
    a = c.charAt(b + 1);
    "%" !== a && (a = this.hb[a], b = hc(this, a), this.wc += a.i("width") * b);
    return i
};

function ic(a) {
    this.Cb = a
}
s = ic.prototype;
s.kb = function () {
    return this.Cb.prop("width")
};
s.Xa = function () {
    return this.Cb.prop("height")
};
s.resize = function (a, b) {
    this.Cb.prop({
        width: a,
        height: b
    })
};
s.save = n();
s.restore = n();
s.transform = n();
s.beginPath = n();
s.closePath = n();
s.moveTo = n();
s.lineTo = n();
s.clearRect = n();
s.rect = n();
s.X = n();
s.tb = n();
s.qa = n();
var jc = l;
s = ic.prototype;
s.stroke = n();
s.fill = n();
s.Td = n();

function kc(a) {
    a.Ug === f && (a.Ug = new dc(a));
    return a.Ug
}
s.measureText = function (a, b) {
    var c = f;
    try {
        c = kc(this).measureText(a, b)
    } catch (d) {
        t(z, "ERROR: caught exception " + z.Y(d) + "in ScoreLibrary.Renderer.PaintContext.measureText()!")
    }
    return c
};
s.fillText = function (a, b, c, d, e) {
    var g = l;
    try {
        g = kc(this).fillText(a, b, c, d, e)
    } catch (h) {
        t(z, "ERROR: caught exception " + z.Y(h) + "in ScoreLibrary.Renderer.PaintContext.fillText()!")
    }
    return g
};
s.hf = n();
s.Bh = n();
s.quadraticCurveTo = n();
s.bezierCurveTo = n();
s.arc = n();
s.drawImage = n();

function lc(a) {
    lc.a.constructor.call(this, a);
    this.context = this.Cb[0].getContext("2d")
}
u(lc, ic);
s = lc.prototype;
s.save = function () {
    try {
        this.context.save()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.save()!")
    }
};
s.restore = function () {
    try {
        this.context.restore()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.restore()!")
    }
};
s.clear = function () {
    try {
        this.context.clearRect(0, 0, this.kb(), this.Xa()), this.context.beginPath()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.clear()!")
    }
};
s.transform = function (a, b, c, d, e, g) {
    try {
        this.context.transform(a, b, c, d, e, g)
    } catch (h) {
        t(z, "ERROR: caught exception " + z.Y(h) + "in ScoreLibrary.Renderer.PaintContext.Canvas.transform()!")
    }
};
s.translate = function (a, b) {
    try {
        this.context.translate(a, b)
    } catch (c) {
        t(z, "ERROR: caught exception " + z.Y(c) + "in ScoreLibrary.Renderer.PaintContext.Canvas.translate()!")
    }
};
s.X = function (a) {
    try {
        this.context.lineWidth = a
    } catch (b) {
        t(z, "ERROR: caught exception " + z.Y(b) + "in ScoreLibrary.Renderer.PaintContext.Canvas.setLineWidth()!")
    }
};
s.tb = function () {
    var a = f;
    try {
        a = this.context.lineWidth
    } catch (b) {
        t(z, "ERROR: caught exception " + z.Y(b) + "in ScoreLibrary.Renderer.PaintContext.Canvas.getLineWidth()!")
    }
    return a
};
s.beginPath = function () {
    try {
        this.context.beginPath()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.beginPath()!")
    }
};
s.closePath = function () {
    try {
        this.context.closePath()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.closePath()!")
    }
};
s.moveTo = function (a, b) {
    try {
        this.context.moveTo(a, b)
    } catch (c) {
        t(z, "ERROR: caught exception " + z.Y(c) + "in ScoreLibrary.Renderer.PaintContext.Canvas.moveTo()!")
    }
};
s.lineTo = function (a, b) {
    try {
        this.context.lineTo(a, b)
    } catch (c) {
        t(z, "ERROR: caught exception " + z.Y(c) + "in ScoreLibrary.Renderer.PaintContext.Canvas.lineTo()!")
    }
};
ic.prototype.clearRect = function (a, b, c, d) {
    try {
        this.context.clearRect(a, b, c, d)
    } catch (e) {
        t(z, "ERROR: caught exception " + z.Y(e) + "in ScoreLibrary.Renderer.PaintContext.Canvas.clearRect()!")
    }
};
s = lc.prototype;
s.rect = function (a, b, c, d) {
    try {
        this.context.rect(a, b, c, d)
    } catch (e) {
        t(z, "ERROR: caught exception " + z.Y(e) + "in ScoreLibrary.Renderer.PaintContext.Canvas.rect()!")
    }
};
s.qa = function (a) {
    try {
        this.context.strokeStyle = a, this.context.fillStyle = a
    } catch (b) {
        t(z, "ERROR: caught exception " + z.Y(b) + "in ScoreLibrary.Renderer.PaintContext.Canvas.setSourceRgb()!")
    }
};
s.stroke = function () {
    try {
        jc && (confirm("Click OK to step on, Cancel to run!") || (jc = l)), this.context.stroke()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.stroke()!")
    }
};
s.fill = function () {
    try {
        jc && (confirm("Click OK to step on, Cancel to run!") || (jc = l)), this.context.fill()
    } catch (a) {
        t(z, "ERROR: caught exception " + z.Y(a) + "in ScoreLibrary.Renderer.PaintContext.Canvas.fill()!")
    }
};
s.Td = function (a) {
    try {
        this.context.font = a
    } catch (b) {
        t(z, "ERROR: caught exception " + z.Y(b) + "in ScoreLibrary.Renderer.PaintContext.Canvas.setFont()!")
    }
};
s.measureText = function (a, b) {
    var c = f;
    try {
        c = lc.a.measureText.call(this, a, b), c === f && (c = this.context.measureText(a).width)
    } catch (d) {
        t(z, "ERROR: caught exception " + z.Y(d) + "in ScoreLibrary.Renderer.PaintContext.Canvas.measureText()!")
    }
    return c
};
s.fillText = function (a, b, c, d, e) {
    try {
        lc.a.fillText.call(this, a, b, c, d, e) || this.context.fillText(a, b, c)
    } catch (g) {
        t(z, "ERROR: caught exception " + z.Y(g) + "in ScoreLibrary.Renderer.PaintContext.Canvas.fillText()!")
    }
};
s.Bh = function () {
    return this.context.textBaseline
};
s.hf = function (a) {
    try {
        this.context.textBaseline = a
    } catch (b) {
        t(z, "ERROR: caught exception " + z.Y(b) + "in Renderer.PaintContext.Canvas.setTextBaseline()!")
    }
};
s.quadraticCurveTo = function (a, b, c, d) {
    try {
        this.context.quadraticCurveTo(a, b, c, d)
    } catch (e) {
        t(z, "ERROR: caught exception " + z.Y(e) + "in Renderer.PaintContext.Canvas.quadraticCurveTo()!")
    }
};
s.bezierCurveTo = function (a, b, c, d, e, g) {
    try {
        this.context.bezierCurveTo(a, b, c, d, e, g)
    } catch (h) {
        t(z, "ERROR: caught exception " + z.Y(h) + "in Renderer.PaintContext.Canvas.bezierCurveTo()!")
    }
};
s.arc = function (a, b, c, d, e, g) {
    try {
        this.context.arc(a, b, c, d, e, g)
    } catch (h) {
        t(z, "ERROR: caught exception " + z.Y(h) + "in ScoreLibrary.Renderer.PaintContext.Canvas.arc()!")
    }
};
s.drawImage = function (a, b) {
    ic.prototype.isPrototypeOf(a) && (a = a.Cb[0]);
    try {
        this.context.drawImage.apply(this.context, arguments)
    } catch (c) {
        t(z, "ERROR: caught exception " + z.Y(c) + "in ScoreLibrary.Renderer.PaintContext.Canvas.drawImage()!")
    }
};
var Zb = {
    tc: {
        "\ue199": {
            width: 299,
            c: -386.109375,
            e: -149.71875,
            d: 0,
            f: 148.359375,
            name: "scripts.dpedaltoe",
            h: 151,
            height: 387,
            g: "m -8 -1 b -1 0 -5 -1 -4 0 b 16 -11 5 0 13 -4 b 83 -186 17 -12 47 -90 l 148 -358 l 148 -363 b 127 -386 148 -376 138 -386 b 112 -379 122 -386 118 -383 b 54 -226 110 -375 114 -386 b 0 -81 24 -147 0 -81 b -55 -226 -1 -81 -25 -147 b -114 -379 -115 -386 -111 -375 b -129 -386 -119 -383 -123 -386 b -149 -363 -140 -386 -149 -376 l -149 -358 l -84 -186 b -19 -11 -49 -90 -19 -12 b -8 -1 -17 -8 -12 -4 "
        },
        "\ue13e": {
            width: 429,
            c: -187.5,
            e: 0,
            d: 186.109375,
            f: 428.75,
            name: "noteheads.s2",
            h: 438,
            height: 375,
            g: "m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 "
        },
        "\ue162": {
            width: 448,
            c: 0,
            e: 0,
            d: 173.609375,
            f: 447.8125,
            name: "rests.1",
            h: 457,
            height: 174,
            g: "m 0 86 l 0 173 l 223 173 l 447 173 l 447 86 l 447 0 l 223 0 l 0 0 l 0 86 "
        },
        "\ue159": {
            width: 343,
            c: 191.671875,
            e: 0,
            d: 331.9375,
            f: 343,
            name: "pedal.M",
            h: 350,
            height: 141,
            g: "m 329 331 b 333 331 330 331 332 331 b 343 322 338 331 343 327 b 343 320 343 322 343 320 b 318 276 341 318 340 313 b 279 223 291 227 294 230 b 202 208 257 212 236 208 b 144 211 186 208 167 208 b 93 212 123 212 107 212 b 19 195 59 212 39 208 b 8 191 14 193 10 191 b 0 198 5 191 2 194 b 0 201 0 200 0 200 b 23 248 0 205 4 213 b 62 301 50 297 47 293 b 140 316 84 312 104 316 b 197 313 155 316 174 315 b 249 311 217 312 234 311 b 322 329 283 311 303 316 b 329 331 325 329 328 331 "
        },
        "\ue124": {
            width: 781,
            c: 0,
            e: -390.640625,
            d: 504.171875,
            f: 389.28125,
            name: "scripts.ulongfermata",
            h: 397,
            height: 505,
            g: "m -378 502 l -374 504 l 0 504 l 372 504 l 377 502 b 387 491 381 500 385 497 l 389 488 l 389 251 l 389 15 l 387 12 b 367 0 383 4 375 0 b 348 12 360 0 352 4 l 347 15 l 347 175 l 347 336 l 0 336 l -348 336 l -348 175 l -348 15 l -349 12 b -368 0 -353 4 -362 0 b -389 12 -377 0 -385 4 l -390 15 l -390 251 l -390 488 l -389 491 b -378 502 -386 497 -382 500 m -13 131 b -1 133 -9 133 -5 133 b 50 105 19 133 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -58 38 -62 55 b -13 131 -62 98 -44 125 "
        },
        "\ue11f": {
            width: 371,
            c: -279.171875,
            e: 0,
            d: 277.78125,
            f: 370.21875,
            name: "clefs.percussion_change",
            h: 378,
            height: 558,
            g: "m 0 0 l 0 277 l 61 277 l 122 277 l 122 0 l 122 -279 l 61 -279 l 0 -279 l 0 0 m 246 -1 l 246 277 l 308 277 l 370 277 l 370 -1 l 370 -279 l 308 -279 l 246 -279 l 246 -1 "
        },
        "\ue10c": {
            width: 560,
            c: -205.5625,
            e: 0,
            d: 127.78125,
            f: 559.421875,
            name: "brackettips.down",
            h: 571,
            height: 334,
            g: "m 5 127 b 14 127 6 127 9 127 b 51 126 25 127 43 127 b 175 98 93 122 138 112 l 186 94 b 279 51 210 86 255 65 b 285 47 280 51 283 48 b 319 27 291 44 311 31 l 326 22 b 359 0 332 19 352 4 l 367 -6 b 371 -9 368 -6 370 -8 l 379 -15 b 387 -22 383 -18 386 -20 l 398 -30 l 411 -40 l 417 -47 l 427 -55 l 434 -61 b 441 -66 436 -62 439 -65 l 446 -72 l 453 -77 l 462 -87 b 558 -188 490 -113 549 -176 b 559 -195 559 -191 559 -194 b 548 -205 559 -201 555 -205 b 541 -204 547 -205 544 -205 b 534 -198 539 -201 536 -200 l 525 -191 b 481 -162 518 -187 490 -168 b 472 -155 477 -159 472 -156 b 468 -152 470 -155 469 -154 b 461 -150 466 -152 464 -151 b 428 -130 454 -145 441 -137 b 371 -100 413 -122 372 -100 b 363 -95 371 -100 367 -98 b 353 -91 357 -94 353 -91 b 348 -90 353 -91 352 -91 b 332 -81 343 -87 341 -86 b 27 -12 230 -37 127 -13 b 0 -5 4 -11 2 -11 b 0 58 0 -2 0 27 b 0 122 0 88 0 120 b 5 127 1 125 4 126 "
        },
        "\ue193": {
            width: 310,
            c: -26.390625,
            e: -155.171875,
            d: 354.171875,
            f: 153.8125,
            name: "arrowheads.close.1M1",
            h: 157,
            height: 382,
            g: "m -137 354 b -130 354 -136 354 -133 354 b -112 350 -125 354 -119 352 b -100 343 -110 347 -104 344 b 0 318 -69 326 -35 318 b 111 350 38 318 76 329 b 129 354 117 352 123 354 b 153 327 142 354 153 344 b 144 302 153 320 153 318 b 27 6 93 226 50 113 b 21 -13 24 -11 24 -11 b 0 -26 17 -22 8 -26 b -24 -12 -9 -26 -19 -22 b -28 5 -24 -9 -27 -2 b -145 302 -53 118 -95 225 b -155 327 -155 318 -155 320 b -137 354 -155 340 -148 350 "
        },
        "\ue11b": {
            width: 700,
            c: -565.28125,
            e: 0,
            d: 563.890625,
            f: 699.609375,
            name: "clefs.C_change",
            h: 714,
            height: 1130,
            g: "m 0 0 l 0 563 l 65 563 l 132 563 l 132 0 l 132 -565 l 65 -565 l 0 -565 l 0 0 m 181 0 l 181 563 l 197 563 l 215 563 l 215 294 b 215 25 215 95 215 25 b 228 37 216 25 221 30 b 332 245 274 84 311 159 b 344 262 334 258 338 262 b 349 262 347 262 348 262 b 359 244 356 259 357 256 b 488 91 364 158 424 91 b 519 97 499 91 509 94 b 582 306 570 113 582 156 l 582 308 b 544 501 582 423 573 472 b 464 529 525 520 496 529 b 387 512 439 529 412 523 b 381 508 383 509 381 508 b 383 508 381 508 382 508 b 430 473 400 508 421 491 b 436 445 434 465 436 455 b 372 380 436 412 408 380 b 366 380 370 380 368 380 b 304 450 328 384 304 416 b 323 498 304 468 310 484 b 465 555 362 537 413 555 b 656 454 536 555 611 520 b 699 312 686 411 699 361 b 496 66 699 191 617 75 b 487 66 494 66 490 66 b 412 91 461 66 438 75 b 404 97 408 95 405 97 b 404 95 404 97 404 97 b 348 1 404 95 352 9 l 347 0 l 375 -50 b 405 -98 392 -76 404 -98 l 405 -98 b 415 -91 405 -97 409 -94 b 492 -68 438 -75 464 -68 b 598 -105 526 -68 564 -80 b 688 -238 641 -136 673 -184 b 699 -313 695 -263 699 -290 b 594 -516 699 -395 661 -469 b 465 -556 555 -543 510 -556 b 353 -523 426 -556 386 -545 b 304 -461 321 -501 307 -484 b 304 -451 304 -458 304 -454 b 372 -381 304 -411 337 -381 b 408 -393 383 -381 396 -384 b 436 -445 427 -405 436 -426 b 385 -508 436 -475 417 -504 l 379 -509 l 387 -513 b 464 -530 412 -525 438 -530 b 522 -518 485 -530 506 -526 b 579 -390 558 -501 574 -463 b 582 -300 582 -370 582 -334 b 581 -226 582 -272 582 -243 b 519 -98 575 -144 560 -112 b 488 -93 510 -95 499 -93 b 359 -245 424 -93 364 -158 b 345 -263 357 -258 355 -263 b 332 -244 337 -263 336 -261 b 220 -30 310 -155 268 -73 l 215 -25 l 215 -295 l 215 -565 l 197 -565 l 181 -565 l 181 0 "
        },
        "\ue175": {
            width: 458,
            c: -544.4375,
            e: -1.359375,
            d: 543.0625,
            f: 455.96875,
            name: "accidentals.3",
            h: 465,
            height: 1089,
            g: "m 352 541 b 357 543 353 543 355 543 b 377 530 364 543 372 537 l 378 526 l 378 394 l 379 262 l 404 266 b 436 270 420 269 430 270 b 450 265 443 270 446 269 b 455 220 455 259 455 261 l 455 208 l 455 161 l 454 156 b 411 140 449 147 447 147 b 378 133 393 137 379 134 b 378 68 378 133 378 106 b 378 22 378 54 378 38 l 379 -87 l 404 -83 b 436 -79 420 -80 430 -79 b 450 -84 443 -79 446 -80 b 455 -129 455 -90 455 -88 l 455 -141 l 455 -188 l 454 -193 b 413 -209 449 -202 447 -202 b 382 -215 398 -212 383 -215 l 378 -215 l 378 -345 l 378 -380 b 375 -486 378 -484 378 -480 b 357 -494 371 -491 364 -494 b 340 -486 351 -494 344 -491 b 336 -383 337 -480 336 -484 l 336 -350 l 336 -223 l 334 -223 b 291 -231 334 -223 314 -227 l 247 -240 l 247 -372 l 246 -504 l 245 -506 b 225 -519 242 -515 234 -519 b 206 -506 219 -519 210 -515 l 205 -504 l 205 -376 l 205 -248 l 160 -256 l 115 -265 l 115 -397 l 115 -527 l 114 -531 b 95 -544 110 -540 102 -544 b 76 -531 87 -544 78 -540 l 73 -527 l 73 -400 b 73 -273 73 -330 73 -273 b 49 -277 73 -273 61 -275 b 17 -281 32 -280 24 -281 b 4 -276 10 -281 8 -280 b -1 -234 0 -269 -1 -272 b 0 -219 -1 -229 0 -225 l 0 -170 l 1 -168 b 10 -158 2 -163 6 -159 b 49 -150 13 -156 16 -155 l 73 -145 l 73 -34 b 73 76 73 26 73 76 b 49 72 73 76 61 75 b 17 68 32 69 24 68 b 4 73 10 68 8 69 b -1 115 0 80 -1 77 b 0 130 -1 120 0 125 l 0 179 l 1 181 b 10 191 2 186 6 190 b 49 200 13 193 16 194 l 73 204 l 73 338 b 73 375 73 352 73 365 b 77 483 73 484 73 477 b 95 493 81 490 88 493 b 111 483 100 493 107 490 b 115 379 115 477 115 483 l 115 343 b 117 212 115 223 115 212 b 204 229 117 212 200 227 l 205 229 l 205 365 l 205 502 l 206 505 b 225 518 210 513 219 518 b 245 505 234 518 242 513 l 246 502 l 247 369 l 247 237 l 249 237 b 336 254 253 238 336 254 b 337 390 336 254 337 302 l 337 526 l 338 530 b 352 541 341 536 347 540 m 336 15 b 336 126 336 102 336 126 l 336 126 b 291 118 336 126 315 122 l 247 109 l 247 -1 l 247 -112 l 249 -112 b 336 -95 253 -111 336 -95 b 336 15 336 -95 336 -56 m 205 -120 b 205 -55 205 -120 205 -93 b 205 -9 205 -41 205 -25 l 205 101 l 160 93 l 115 84 l 115 -26 b 115 -83 115 -50 115 -69 b 117 -137 115 -133 115 -137 b 205 -120 118 -137 204 -120 "
        },
        "\ue15e": {
            width: 352,
            c: -288.890625,
            e: -1.359375,
            d: 287.5,
            f: 349.8125,
            name: "rests.2classical",
            h: 357,
            height: 577,
            g: "m 230 287 b 243 287 234 287 238 287 b 266 286 251 287 261 287 b 349 180 319 275 349 227 b 307 95 349 150 336 118 b 208 63 280 75 245 63 b 84 106 166 63 122 79 b 76 113 80 111 77 113 b 76 113 76 113 76 113 b 132 -75 76 112 102 27 b 187 -272 179 -236 187 -263 b 186 -276 187 -273 186 -275 b 166 -288 183 -284 174 -288 b 148 -279 159 -288 152 -286 b -1 231 145 -273 -1 227 b 20 252 -1 244 9 252 b 36 244 25 252 32 250 b 40 234 38 243 39 238 b 167 112 63 175 112 127 l 174 111 l 170 113 b 142 181 152 133 142 158 b 230 287 142 230 176 277 "
        },
        "\ue141": {
            width: 427,
            c: -22.21875,
            e: -209.609375,
            d: 250,
            f: 208.25,
            name: "scripts.uportato",
            h: 213,
            height: 273,
            g: "m -12 248 b -1 250 -9 250 -5 250 b 55 219 20 250 43 237 b 66 180 62 206 66 194 b 36 123 66 158 55 137 b 0 112 25 116 12 112 b -57 143 -21 112 -43 122 b -68 180 -63 154 -68 168 b -12 248 -68 212 -46 243 m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -5 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -5 b -197 19 -209 6 -205 15 "
        },
        "\ue18f": {
            width: 310,
            c: -26.390625,
            e: -155.171875,
            d: 355.5625,
            f: 153.8125,
            name: "arrowheads.open.1M1",
            h: 157,
            height: 383,
            g: "m -137 354 b -129 355 -134 354 -132 355 b -102 333 -118 355 -111 348 b -8 129 -63 273 -32 205 b 0 106 -4 116 -1 106 b 6 129 0 106 2 116 b 100 333 31 205 62 273 b 114 350 107 344 108 347 b 127 354 118 352 123 354 b 153 327 141 354 153 344 b 144 302 153 320 153 318 b 29 18 96 227 54 123 l 25 -4 b -1 -26 21 -19 13 -26 b -27 -4 -14 -26 -23 -19 l -31 18 b -145 302 -55 123 -98 227 b -155 327 -155 318 -155 320 b -137 354 -155 340 -148 350 "
        },
        "\ue153": {
            width: 103,
            c: -1.390625,
            e: 0,
            d: 104.171875,
            f: 102.078125,
            name: "pedal..",
            h: 104,
            height: 107,
            g: "m 42 104 b 47 104 43 104 46 104 b 66 102 54 104 62 102 b 102 51 89 94 102 72 b 76 5 102 33 93 15 b 51 -1 68 1 59 -1 b 10 18 35 -1 20 5 b 0 51 2 27 0 38 b 42 104 0 76 16 100 "
        },
        "\ue170": {
            width: 324,
            c: -538.890625,
            e: 0,
            d: 537.5,
            f: 323.9375,
            name: "accidentals.sharp",
            h: 331,
            height: 1077,
            g: "m 217 536 b 225 537 220 537 221 537 b 245 525 235 537 242 533 l 246 522 l 247 390 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 493 87 498 b 103 495 98 498 100 497 b 114 486 107 494 111 490 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 384 l 205 522 l 206 525 b 217 536 209 529 212 533 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "
        },
        "\ue109": {
            width: 378,
            c: -1.390625,
            e: -10.890625,
            d: 173.609375,
            f: 366.140625,
            name: "scripts.trill_element",
            h: 363,
            height: 176,
            g: "m 98 172 b 110 173 102 173 106 173 b 210 120 142 173 172 156 b 281 66 235 95 264 75 b 294 63 285 63 289 63 b 341 87 307 63 322 72 b 356 97 348 94 352 97 b 363 93 359 97 362 95 b 366 87 364 90 366 88 b 355 72 366 83 363 79 b 268 2 317 31 288 9 b 243 -1 259 0 251 -1 b 144 52 212 -1 181 16 b 72 106 119 77 91 98 b 61 109 69 108 65 109 b 13 84 47 109 31 101 b 0 76 5 77 2 76 b -10 86 -6 76 -10 80 b -10 88 -10 87 -10 88 b 62 158 -9 95 43 145 b 98 172 73 165 87 170 "
        },
        "\ue197": {
            width: 299,
            c: -231.9375,
            e: -149.71875,
            d: 152.78125,
            f: 148.359375,
            name: "scripts.dpedalheel",
            h: 151,
            height: 385,
            g: "m -9 151 b -1 152 -6 151 -2 152 b 1 152 0 152 0 152 l 9 151 b 144 37 72 148 127 100 b 148 -62 148 19 148 15 b 148 -111 148 -76 148 -93 l 148 -216 l 147 -219 b 127 -231 144 -227 136 -231 b 108 -219 119 -231 112 -227 l 107 -216 l 107 -104 b 103 26 106 18 107 12 b -1 109 89 76 46 109 b -38 102 -13 109 -25 106 b -104 27 -70 90 -96 62 b -108 -101 -108 15 -108 22 l -108 -216 l -110 -219 b -129 -231 -114 -227 -122 -231 b -148 -219 -137 -231 -145 -227 l -149 -216 l -149 -100 b -149 -63 -149 -87 -149 -75 b -145 37 -149 26 -149 20 b -9 151 -130 101 -74 148 "
        },
        "\ue10d": {
            width: 560,
            c: -129.171875,
            e: 0,
            d: 204.171875,
            f: 559.421875,
            name: "brackettips.up",
            h: 571,
            height: 335,
            g: "m 544 204 b 548 204 545 204 547 204 b 559 194 555 204 559 200 b 559 190 559 193 559 191 b 530 156 559 188 556 184 b 462 86 510 134 481 104 b 453 76 458 81 454 77 l 446 70 l 441 65 b 434 59 439 63 436 61 l 427 54 b 409 37 426 51 416 44 b 392 23 398 29 394 26 b 387 19 389 22 387 20 b 379 13 386 19 383 16 l 371 8 l 367 5 l 359 -1 l 337 -16 b 285 -48 319 -29 298 -41 l 279 -52 b 186 -95 255 -66 210 -87 l 175 -100 b 23 -129 127 -118 68 -129 b 17 -129 20 -129 19 -129 b 1 -123 2 -129 2 -129 b 0 -50 0 -122 0 -83 b 0 4 0 -22 0 1 b 27 11 2 9 4 9 b 185 31 78 12 145 20 b 198 34 186 31 193 33 b 314 73 234 44 277 58 b 349 88 328 79 340 84 b 353 90 352 90 353 90 b 363 94 353 90 357 93 b 371 98 367 97 371 98 b 428 129 372 98 413 120 b 461 148 441 136 454 144 b 468 151 464 150 466 151 b 472 154 469 152 470 154 b 481 161 473 155 477 158 b 525 190 490 166 518 186 l 534 197 b 540 201 536 198 539 200 b 544 204 541 202 544 204 "
        },
        "\ue151": {
            width: 327,
            c: -695.828125,
            e: 0,
            d: 462.5,
            f: 326.671875,
            name: "accidentals.natural.arrowdown",
            h: 333,
            height: 1159,
            g: "m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -105 b 239 -262 239 -168 239 -219 b 238 -448 239 -416 239 -445 b 238 -451 238 -450 238 -451 b 238 -452 238 -452 238 -452 b 243 -451 239 -452 240 -451 b 298 -431 262 -448 280 -441 b 308 -427 300 -429 304 -427 b 326 -447 318 -427 326 -436 l 326 -447 l 326 -452 l 321 -462 b 238 -675 283 -520 253 -600 b 219 -695 234 -690 230 -695 b 197 -670 206 -695 202 -690 b 115 -462 179 -591 152 -520 l 110 -452 l 110 -447 l 110 -447 b 127 -427 110 -436 118 -427 b 138 -431 130 -427 134 -429 b 193 -451 155 -441 172 -448 b 198 -452 196 -452 197 -452 b 198 -451 198 -452 198 -452 b 198 -448 198 -451 198 -450 b 197 -323 197 -445 197 -426 b 197 -201 197 -247 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "
        },
        "\ue169": {
            width: 620,
            c: -187.5,
            e: 0,
            d: 186.109375,
            f: 619.3125,
            name: "noteheads.s0",
            h: 632,
            height: 375,
            g: "m 274 184 b 307 186 285 186 296 186 b 616 22 465 186 597 116 b 619 -1 617 13 619 5 b 308 -187 619 -104 483 -187 b 0 -1 133 -187 0 -102 b 5 36 0 11 1 23 b 274 184 29 115 141 176 m 289 161 b 272 162 284 162 277 162 b 171 41 209 162 171 108 b 205 -73 171 5 182 -34 b 345 -163 243 -133 298 -163 b 436 -98 385 -163 420 -143 b 446 -43 443 -80 446 -62 b 289 161 446 47 377 147 "
        },
        "\ue144": {
            width: 805,
            c: -176.390625,
            e: -402.890625,
            d: 175,
            f: 401.53125,
            name: "scripts.prall",
            h: 410,
            height: 352,
            g: "m -219 173 b -213 175 -217 175 -215 175 b -202 173 -209 175 -205 173 b -114 86 -200 172 -179 151 b -28 0 -66 37 -28 0 b 40 84 -28 0 2 37 b 117 175 111 173 110 172 b 122 175 118 175 119 175 b 132 173 125 175 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 75 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -175 215 -176 b 201 -175 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b -42 -86 27 0 -4 -38 b -118 -175 -112 -175 -111 -173 b -123 -176 -119 -176 -121 -176 b -133 -175 -126 -176 -130 -175 b -296 -12 -136 -173 -172 -137 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -50 -402 -55 -402 -52 b -224 172 -398 -43 -228 168 b -219 173 -223 172 -220 173 "
        },
        "\ue18b": {
            width: 680,
            c: 0,
            e: -340.28125,
            d: 522.21875,
            f: 338.921875,
            name: "scripts.trill",
            h: 346,
            height: 523,
            g: "m -32 520 b -29 522 -31 520 -31 522 b -23 519 -27 522 -24 520 b -20 513 -21 518 -20 516 b -21 506 -20 512 -20 509 b -31 475 -23 502 -27 488 l -53 402 l -66 352 l -68 350 l -57 350 b -32 351 -51 350 -40 351 b 123 370 19 352 74 359 b 137 372 127 370 133 372 b 170 356 152 372 164 366 b 171 355 170 355 170 355 b 216 366 174 355 183 358 b 280 379 268 377 266 377 b 287 379 283 379 284 379 b 332 350 307 379 322 369 b 338 319 336 341 338 330 b 332 301 338 311 336 302 b 242 280 329 300 246 280 b 242 280 242 280 242 280 b 235 288 236 280 235 283 b 235 293 235 290 235 291 b 236 302 236 297 236 300 b 220 337 236 316 230 330 l 216 340 l 210 336 b 159 276 189 322 172 301 b 118 150 152 265 156 275 b 81 34 84 36 85 36 b -8 13 78 33 -4 13 b -8 13 -8 13 -8 13 b -14 20 -12 15 -14 15 b -8 44 -14 25 -12 31 b -2 66 -5 55 -2 65 b -2 66 -2 66 -2 66 l -2 66 b -43 41 -2 66 -21 55 b -114 4 -98 8 -98 8 b -144 0 -123 0 -134 0 b -242 100 -197 0 -242 43 b -242 109 -242 102 -242 105 b -212 219 -240 122 -242 116 b -185 312 -197 270 -185 312 l -185 312 b -189 312 -185 312 -186 312 b -259 312 -200 312 -227 312 b -321 311 -291 312 -310 311 b -334 312 -330 311 -334 312 b -340 319 -338 313 -340 316 b -336 326 -340 322 -338 325 b -291 337 -334 326 -314 331 l -247 347 l -210 348 b -172 348 -190 348 -172 348 b -168 363 -172 348 -171 355 b -145 443 -151 425 -145 441 b -133 452 -144 444 -140 447 l -77 490 b -32 520 -53 506 -32 520 m 57 334 b 53 336 55 336 54 336 b 44 334 50 336 49 336 b -70 316 8 326 -28 320 b -78 309 -78 316 -78 316 b -108 202 -80 305 -88 275 b -141 81 -136 112 -141 93 b -140 75 -141 79 -141 77 b -117 50 -137 59 -127 50 b -107 52 -114 50 -110 51 b 16 127 -106 54 14 126 b 42 218 16 127 42 215 b 49 241 42 222 44 229 b 73 320 53 251 73 318 b 57 334 73 327 65 333 "
        },
        "\ue14d": {
            width: 1143,
            c: -176.390625,
            e: -571.671875,
            d: 352.78125,
            f: 570.3125,
            name: "scripts.lineprall",
            h: 582,
            height: 530,
            g: "m -559 351 b -551 352 -556 352 -553 352 b -530 338 -543 352 -533 348 b -529 169 -530 337 -529 291 l -529 1 l -507 27 l -441 112 b -382 175 -394 169 -390 175 b -378 175 -381 175 -379 175 b -281 86 -370 175 -375 179 b -196 0 -234 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 175 279 173 279 172 b 289 175 285 175 288 175 b 300 173 294 175 298 173 b 462 11 303 172 340 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 375 -176 371 -176 b 280 -87 367 -173 347 -152 b 194 0 234 -38 194 0 b 126 -86 194 0 163 -38 b 49 -175 54 -175 55 -173 b 44 -176 47 -176 46 -176 b 34 -175 40 -176 36 -175 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -140 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -288 -176 b -300 -175 -294 -176 -298 -175 b -464 -11 -303 -173 -374 -102 l -476 0 l -506 -37 b -539 -76 -528 -65 -537 -75 b -551 -80 -543 -79 -547 -80 b -570 -68 -558 -80 -566 -76 l -571 -65 l -571 136 b -570 340 -571 331 -571 337 b -559 351 -568 344 -564 348 "
        },
        "\ue196": {
            width: 299,
            c: -154.171875,
            e: -149.71875,
            d: 230.5625,
            f: 148.359375,
            name: "scripts.upedalheel",
            h: 151,
            height: 386,
            g: "m -138 229 b -129 230 -136 230 -133 230 b -110 218 -121 230 -114 226 l -108 215 l -108 100 b -104 -29 -108 -23 -108 -16 b -38 -104 -96 -63 -70 -91 b -1 -111 -25 -108 -13 -111 b 103 -27 46 -111 89 -77 b 107 102 107 -13 106 -19 l 107 215 l 108 218 b 127 230 112 226 119 230 b 137 229 130 230 134 230 b 147 218 141 226 145 223 l 148 215 l 148 109 b 148 63 148 91 148 76 b 147 -25 148 -1 148 -13 b -1 -154 134 -101 70 -154 b -38 -148 -13 -154 -25 -151 b -145 -38 -91 -134 -133 -93 b -149 62 -149 -22 -149 -27 b -149 98 -149 73 -149 86 l -149 215 l -148 218 b -138 229 -147 223 -142 226 "
        },
        "\ue13a": {
            width: 433,
            c: -188.890625,
            e: 0,
            d: 187.5,
            f: 432.828125,
            name: "noteheads.s2harmonic",
            h: 442,
            height: 377,
            g: "m 209 186 b 213 187 210 187 212 187 b 216 187 215 187 216 187 b 224 175 216 186 220 180 b 420 -1 269 105 338 43 b 432 -12 431 -8 432 -9 b 421 -23 432 -15 432 -16 b 228 -180 345 -70 264 -137 b 219 -188 221 -188 221 -188 l 219 -188 b 208 -177 215 -188 215 -188 b 10 1 163 -106 93 -44 b 0 11 0 6 0 8 b 10 22 0 13 0 15 b 202 179 87 69 167 136 b 209 186 206 183 209 186 "
        },
        "\ue17c": {
            width: 134,
            c: -69.4375,
            e: 0,
            d: 68.0625,
            f: 133.390625,
            name: "dots.dot",
            h: 136,
            height: 139,
            g: "m 54 66 b 65 68 58 68 61 68 b 122 37 88 68 110 56 b 133 -1 130 26 133 12 b 104 -58 133 -23 123 -44 b 66 -69 92 -65 78 -69 b 10 -38 44 -69 23 -58 b 0 -1 2 -27 0 -13 b 54 66 0 30 20 61 "
        },
        "\ue101": {
            width: 1255,
            c: -176.390625,
            e: -627.46875,
            d: 175,
            f: 626.109375,
            name: "scripts.espr",
            h: 639,
            height: 352,
            g: "m -69 173 b -53 175 -62 175 -58 175 b -42 172 -49 175 -44 175 b -28 150 -32 166 -28 158 b -42 126 -28 140 -32 131 b -231 73 -44 125 -29 129 l -371 34 l -469 8 b -499 0 -485 2 -499 0 b -469 -9 -499 -1 -485 -4 l -371 -36 l -231 -75 b -40 -129 -21 -131 -44 -125 b -28 -151 -32 -133 -28 -141 b -40 -172 -28 -159 -32 -168 b -54 -176 -44 -175 -49 -176 b -69 -175 -58 -176 -62 -176 l -288 -113 l -552 -41 b -616 -22 -619 -23 -611 -25 b -627 0 -623 -18 -627 -9 b -616 20 -627 8 -623 16 b -615 22 -615 22 -615 22 b -615 22 -615 22 -615 22 b -288 112 -615 23 -598 27 l -69 173 m 44 175 b 51 175 47 175 49 175 b 68 173 55 175 61 175 l 287 112 l 551 40 b 615 20 617 22 609 23 b 626 0 622 16 626 8 b 615 -22 626 -9 622 -18 b 613 -23 613 -23 613 -23 b 613 -23 613 -23 613 -23 b 287 -113 613 -25 597 -29 l 68 -175 b 53 -176 61 -176 57 -176 b 39 -172 47 -176 43 -175 b 27 -151 31 -168 27 -159 b 39 -129 27 -141 31 -133 b 230 -75 43 -125 20 -131 l 370 -36 l 468 -9 b 498 0 484 -4 498 -1 b 468 8 498 0 484 2 l 370 34 l 230 73 b 40 126 28 129 43 125 b 27 150 31 131 27 140 b 44 175 27 161 34 170 "
        },
        "-": {
            width: 319,
            c: 315.28125,
            e: 0,
            d: 377.78125,
            f: 318.5,
            name: "hyphen",
            h: 325,
            height: 63,
            g: "m 20 376 b 167 377 23 377 96 377 b 296 376 231 377 294 377 b 318 347 311 372 318 359 b 296 316 318 333 311 320 b 159 315 294 315 227 315 b 21 316 91 315 24 315 b 0 345 6 320 0 333 b 20 376 0 359 6 372 "
        },
        "\ue137": {
            width: 506,
            c: -229.171875,
            e: -21.78125,
            d: 633.328125,
            f: 483.1875,
            name: "accidentals.flatflat",
            h: 493,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 179 164 200 187 193 l 210 176 l 210 397 l 210 618 l 212 622 b 231 633 216 629 223 633 b 250 620 239 633 247 629 b 251 383 251 616 251 616 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "
        },
        "\ue139": {
            width: 433,
            c: -188.890625,
            e: 0,
            d: 187.5,
            f: 432.828125,
            name: "noteheads.s0harmonic",
            h: 442,
            height: 377,
            g: "m 208 184 b 213 187 209 186 212 187 b 224 176 217 187 221 183 b 245 147 225 172 235 159 b 419 -1 288 90 347 38 b 431 -8 424 -4 431 -8 b 432 -12 432 -9 432 -11 b 430 -18 432 -13 432 -16 b 364 -61 424 -20 383 -47 b 225 -183 307 -102 250 -152 b 223 -187 224 -184 223 -187 b 220 -188 221 -188 220 -188 b 208 -176 216 -188 210 -184 b 187 -148 205 -173 197 -159 b 12 0 144 -90 84 -38 b 0 11 4 5 0 8 b 16 25 0 13 4 18 b 183 158 83 69 141 115 b 208 184 194 169 198 173 m 183 105 b 176 113 181 109 176 113 b 172 109 176 113 175 112 b 92 45 149 90 117 62 l 88 41 l 102 31 b 247 -105 160 -6 210 -55 l 254 -115 l 257 -112 l 269 -102 b 340 -45 287 -87 319 -61 l 344 -43 l 330 -33 b 183 105 272 6 221 54 "
        },
        "\ue17a": {
            width: 147,
            c: -1.390625,
            e: -73.5,
            d: 254.171875,
            f: 72.140625,
            name: "scripts.ustaccatissimo",
            h: 74,
            height: 257,
            g: "m -72 252 l -73 254 l 0 254 l 72 254 l 70 252 b 0 -1 70 248 0 -1 b -72 252 -1 -1 -72 248 "
        },
        "\ue148": {
            width: 1181,
            c: -338.890625,
            e: -590.71875,
            d: 275,
            f: 589.359375,
            name: "scripts.upmordent",
            h: 601,
            height: 614,
            g: "m 175 273 b 182 275 178 273 181 275 b 202 262 190 275 198 269 b 204 158 204 259 204 259 l 204 56 l 250 112 b 303 175 296 172 298 172 b 308 175 304 175 307 175 b 318 173 313 175 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 75 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -175 401 -176 b 387 -175 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 208 -6 213 0 210 -2 l 204 -12 l 204 -147 b 204 -211 204 -173 204 -194 b 198 -293 204 -297 204 -287 b 183 -300 194 -297 189 -300 b 164 -287 175 -300 167 -295 b 163 -175 163 -284 163 -284 l 161 -63 l 119 -118 b 65 -176 76 -170 73 -176 b 61 -176 63 -176 62 -176 b -35 -87 51 -175 57 -180 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -175 -261 -175 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -175 -276 -176 -280 -175 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -304 -548 -254 -544 -280 b -533 -318 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -363 175 -374 170 -371 175 b -359 175 -362 175 -360 175 b -262 86 -351 175 -356 179 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 175 -36 173 -38 172 b -25 175 -29 175 -28 175 b -16 173 -23 175 -19 173 b 147 11 -13 172 35 123 l 157 -1 l 160 1 l 163 4 l 163 130 b 164 261 163 256 163 258 b 175 273 166 266 170 270 "
        },
        "\ue183": {
            width: 389,
            c: 4.171875,
            e: -21.78125,
            d: 1380.5625,
            f: 366.140625,
            name: "flags.d5",
            h: 374,
            height: 1377,
            g: "m 276 1379 b 284 1380 279 1380 281 1380 b 306 1361 292 1380 298 1375 b 352 1248 326 1327 343 1287 b 366 1140 362 1213 366 1176 b 347 1009 366 1094 359 1050 l 344 1002 l 347 993 b 352 972 348 987 351 977 b 366 863 362 937 366 900 b 347 733 366 819 359 773 l 344 726 l 347 716 b 352 695 348 711 351 701 b 366 588 362 659 366 623 b 223 262 366 465 314 345 b 189 233 212 252 212 252 b 35 76 126 183 73 129 b -1 16 20 56 2 27 b -19 4 -4 9 -12 4 l -21 4 l -21 137 l -21 270 l -17 270 b 186 344 59 281 134 308 b 319 606 270 400 319 500 b 317 651 319 620 319 636 l 315 659 l 314 655 b 223 537 288 608 258 570 b 189 509 212 529 212 529 b 35 352 126 459 73 405 b -1 293 20 333 2 304 b -19 280 -4 286 -12 280 l -21 280 l -21 413 l -21 547 l -17 547 b 186 620 59 558 134 584 b 319 883 270 676 319 776 b 317 926 319 897 319 912 l 315 936 l 314 931 b 223 813 288 884 258 847 b 189 786 212 805 212 805 b 35 629 126 736 73 681 b -1 569 20 609 2 580 b -19 556 -4 562 -12 556 l -21 556 l -21 690 l -21 823 l -17 823 b 202 908 68 836 152 868 b 319 1158 280 969 319 1062 b 270 1338 319 1219 303 1281 b 262 1359 264 1350 262 1354 b 262 1365 262 1361 262 1363 b 276 1379 265 1372 269 1377 "
        },
        "\ue15b": {
            width: 387,
            c: -348.609375,
            e: 0,
            d: 347.21875,
            f: 386.5625,
            name: "rests.M2",
            h: 394,
            height: 697,
            g: "m 0 0 l 0 347 l 193 347 l 386 347 l 386 0 l 386 -348 l 193 -348 l 0 -348 l 0 0 "
        },
        "\ue149": {
            width: 1195,
            c: -327.78125,
            e: -597.53125,
            d: 175,
            f: 596.171875,
            name: "scripts.pralldown",
            h: 608,
            height: 503,
            g: "m -413 173 b -408 175 -412 175 -409 175 b -397 173 -404 175 -400 173 b -308 86 -394 172 -374 151 b -223 0 -261 37 -223 0 b -153 84 -223 0 -191 37 b -77 175 -83 173 -84 172 b -72 175 -76 175 -74 175 b -62 173 -68 175 -63 173 b 25 86 -59 172 -39 151 b 112 0 73 37 111 0 b 181 84 112 0 144 37 b 257 175 251 173 251 172 b 262 175 258 175 261 175 b 273 173 266 175 270 173 b 436 9 276 172 347 101 l 447 -1 l 477 36 b 522 79 511 79 513 79 l 522 79 b 552 51 533 79 539 73 b 596 -112 582 6 596 -51 b 567 -262 596 -161 586 -213 b 539 -322 558 -287 544 -316 b 524 -327 534 -326 529 -327 b 504 -315 515 -327 507 -323 b 503 -308 503 -312 503 -309 b 511 -286 503 -302 504 -297 b 555 -113 540 -227 555 -169 b 544 -34 555 -86 551 -59 b 522 19 540 -16 530 8 l 521 22 l 481 -26 l 405 -122 b 353 -176 366 -172 362 -176 b 349 -176 352 -176 351 -176 b 253 -87 341 -176 347 -180 b 167 0 206 -38 167 0 b 99 -86 167 0 136 -38 b 21 -175 27 -175 28 -173 b 17 -176 20 -176 19 -176 b 6 -175 13 -176 9 -175 b -81 -87 4 -173 -14 -152 b -167 0 -129 -38 -167 0 b -236 -86 -167 0 -198 -38 b -313 -175 -307 -175 -306 -173 b -318 -176 -314 -176 -315 -176 b -328 -175 -321 -176 -325 -175 b -491 -12 -330 -173 -367 -137 l -503 0 l -530 -34 b -570 -77 -562 -73 -564 -76 b -577 -79 -571 -79 -574 -79 b -597 -58 -588 -79 -597 -69 b -596 -50 -597 -55 -597 -52 b -417 172 -593 -43 -423 168 b -413 173 -417 172 -415 173 "
        },
        "\ue1a1": {
            width: 439,
            c: -193.0625,
            e: 0,
            d: 191.671875,
            f: 438.28125,
            name: "noteheads.s1diamond",
            h: 447,
            height: 386,
            g: "m 212 190 b 219 191 213 191 216 191 b 236 176 225 191 228 190 b 419 18 277 105 341 50 b 436 5 431 13 434 11 b 438 -1 438 4 438 1 b 424 -16 438 -8 432 -13 b 356 -50 409 -20 379 -36 b 234 -180 306 -83 258 -133 b 219 -193 230 -188 224 -193 b 200 -176 213 -193 206 -187 b 9 -15 157 -102 89 -45 b 0 0 2 -12 0 -6 b 16 18 0 9 2 12 b 200 176 93 48 159 104 b 212 190 205 186 208 188 m 239 113 b 236 118 238 116 238 118 b 230 108 235 118 234 115 b 92 -15 196 58 140 8 b 88 -18 91 -16 88 -18 b 92 -20 88 -18 91 -19 b 198 -116 130 -43 166 -75 b 200 -118 200 -118 200 -118 b 201 -118 200 -118 201 -118 b 264 -43 212 -98 242 -62 b 345 15 288 -19 321 4 b 348 18 347 16 348 16 b 344 20 348 18 347 19 b 239 113 307 41 266 79 "
        },
        "\ue12f": {
            width: 361,
            c: -229.171875,
            e: -108.890625,
            d: 865.28125,
            f: 251.8125,
            name: "accidentals.flat.arrowup",
            h: 257,
            height: 1096,
            g: "m -8 863 b 0 865 -5 865 -2 865 b 12 859 4 865 9 863 b 19 844 16 856 16 854 b 102 631 34 769 65 690 l 107 622 l 107 616 l 107 616 b 89 597 107 605 99 597 b 78 601 85 597 83 598 b 47 615 69 606 55 612 b 19 622 39 618 21 622 b 19 622 19 622 19 622 b 19 619 19 622 19 620 b 20 383 20 616 20 586 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 b -20 619 -21 563 -21 616 b -20 622 -20 620 -20 622 b -20 622 -20 622 -20 622 b -49 615 -23 622 -40 618 b -80 601 -57 612 -70 606 b -91 597 -84 598 -87 597 b -108 616 -100 597 -108 605 l -108 616 l -108 622 l -103 631 b -20 840 -66 690 -38 761 b -8 863 -17 856 -14 859 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        "\ue119": {
            width: 683,
            c: -1022.21875,
            e: -1.359375,
            d: 1043.0625,
            f: 680.5625,
            name: "clefs.tab",
            h: 694,
            height: 2067,
            g: "m 597 1043 b 604 1043 600 1043 602 1043 b 642 1002 627 1043 642 1023 b 619 966 642 988 635 975 b 439 927 574 943 503 927 l 426 927 l 426 922 b 430 838 428 894 430 866 b 345 480 430 697 398 561 b 179 391 307 423 249 391 b 156 393 171 391 164 393 b 138 394 149 394 142 394 b 103 434 115 397 103 416 b 129 472 103 451 111 466 b 141 475 133 473 137 475 b 172 459 153 475 164 469 b 181 455 175 456 176 455 b 187 456 182 455 185 455 b 253 520 212 461 234 483 b 315 837 294 605 315 715 b 311 929 315 868 314 898 b 302 945 310 944 311 943 b 245 954 283 951 262 954 b 130 891 193 954 149 931 b 84 861 119 870 102 861 b 36 905 61 861 39 877 b 36 911 36 908 36 909 b 80 970 36 931 50 950 b 249 1018 125 1001 187 1018 b 322 1009 273 1018 299 1015 l 341 1004 b 436 991 372 995 406 991 b 577 1031 495 991 545 1005 b 597 1043 583 1038 590 1041 m 416 361 b 424 361 419 361 421 361 b 481 309 454 361 479 338 b 503 145 484 280 495 200 b 585 -186 525 16 555 -106 b 630 -245 596 -213 613 -237 l 634 -247 l 638 -245 b 647 -244 641 -245 645 -244 b 680 -279 666 -244 680 -262 b 664 -308 680 -290 675 -301 b 638 -312 658 -311 650 -312 b 613 -309 631 -312 623 -311 b 477 -201 555 -304 502 -261 b 417 -2 460 -159 434 -72 b 416 5 417 1 416 5 b 416 5 416 5 416 5 b 411 -5 415 5 413 0 b 359 -97 397 -33 377 -70 b 353 -106 355 -102 353 -105 b 359 -112 353 -108 355 -109 b 409 -130 375 -123 390 -129 b 426 -134 420 -130 421 -131 b 431 -147 428 -137 431 -141 b 420 -162 431 -152 427 -159 b 382 -169 409 -166 396 -169 b 323 -155 363 -169 341 -165 l 317 -152 l 314 -155 b 62 -304 240 -240 148 -295 b 36 -305 55 -305 44 -305 b 23 -304 29 -305 24 -305 b -1 -273 6 -300 -1 -287 b 31 -240 -1 -256 10 -240 b 36 -240 32 -240 34 -240 b 42 -241 38 -241 39 -241 b 134 -204 63 -241 99 -226 b 367 288 265 -115 357 81 b 375 330 368 313 370 320 b 416 361 383 347 400 358 m 360 -359 b 379 -359 363 -359 371 -359 b 424 -361 396 -359 416 -359 b 646 -502 536 -373 624 -430 b 649 -527 649 -511 649 -519 b 530 -673 649 -579 604 -636 l 521 -677 l 529 -681 b 653 -812 592 -715 637 -762 b 660 -854 658 -827 660 -840 b 645 -912 660 -873 656 -893 b 426 -1022 608 -981 519 -1022 b 283 -990 377 -1022 328 -1012 b 235 -949 249 -973 239 -965 b 234 -937 234 -947 234 -941 b 234 -929 234 -934 234 -931 l 235 -926 l 234 -927 l 225 -934 b 87 -983 186 -966 138 -983 b 80 -983 85 -983 83 -983 b 55 -981 70 -981 58 -981 b 17 -944 32 -981 17 -965 b 54 -905 17 -922 35 -905 b 78 -915 62 -905 72 -909 l 83 -919 l 88 -919 b 190 -831 122 -919 166 -881 b 269 -506 242 -727 269 -612 b 268 -462 269 -493 269 -477 b 266 -450 266 -458 266 -452 b 265 -444 266 -445 266 -444 b 257 -447 264 -444 261 -445 b 132 -545 196 -470 152 -505 b 88 -573 122 -563 104 -573 b 39 -523 63 -573 39 -554 b 63 -476 39 -505 44 -494 b 360 -359 136 -408 235 -369 m 419 -425 b 393 -423 411 -423 406 -423 l 375 -423 l 377 -426 b 379 -440 377 -427 378 -434 b 383 -511 382 -463 383 -487 b 314 -812 383 -609 360 -711 b 266 -894 296 -851 285 -870 b 264 -898 265 -897 264 -898 l 264 -898 b 264 -898 264 -898 264 -898 b 268 -898 264 -898 266 -898 b 273 -898 270 -898 272 -898 b 300 -909 283 -898 291 -901 b 426 -958 340 -941 385 -958 b 476 -950 443 -958 460 -955 b 547 -854 522 -931 547 -894 b 485 -745 547 -816 526 -776 b 397 -708 460 -727 432 -715 b 366 -676 375 -704 366 -693 b 396 -643 366 -658 377 -645 b 530 -558 455 -637 511 -601 b 536 -527 534 -548 536 -537 b 419 -425 536 -480 490 -437 "
        },
        "\ue187": {
            width: 390,
            c: 4.171875,
            e: -21.78125,
            d: 1902.78125,
            f: 367.5,
            name: "flags.d7",
            h: 375,
            height: 1899,
            g: "m 276 1901 b 284 1902 279 1901 281 1902 b 306 1884 291 1902 298 1897 b 367 1687 347 1826 367 1758 b 343 1559 367 1644 359 1601 l 338 1550 l 343 1538 b 367 1412 359 1498 367 1455 b 343 1283 367 1368 359 1325 l 338 1273 l 343 1262 b 367 1136 359 1222 367 1179 b 343 1008 367 1091 359 1048 l 338 997 l 343 986 b 367 859 359 945 367 902 b 343 731 367 815 359 772 l 338 720 l 343 709 b 367 583 359 668 367 626 b 289 362 367 504 340 426 b 239 312 276 345 259 330 b 29 77 152 237 76 152 b -1 18 14 54 2 30 b -19 4 -4 11 -12 4 l -21 4 l -21 133 l -20 261 l -13 262 b 98 300 17 269 62 284 b 111 305 103 302 110 305 b 167 334 123 311 156 327 b 319 595 264 391 319 491 b 313 659 319 616 318 638 b 310 668 311 665 311 668 b 307 663 310 668 308 666 b 240 588 289 637 269 615 b 16 331 141 505 62 413 b -1 294 8 316 1 302 b -19 280 -4 287 -12 280 l -21 280 l -21 408 l -20 537 l -13 538 b 98 576 17 545 62 561 b 111 581 103 579 110 581 b 167 611 123 587 156 604 b 319 872 264 668 319 768 b 313 936 319 893 318 913 b 310 943 311 941 311 943 b 307 940 310 943 308 941 b 240 865 289 913 269 890 b 16 608 141 781 62 690 b -1 570 8 593 1 579 b -19 556 -4 563 -12 556 l -21 556 l -21 684 l -20 813 l -13 815 b 98 852 17 822 62 837 b 111 858 103 855 110 858 b 167 887 123 863 156 880 b 319 1148 264 944 319 1044 b 313 1212 319 1169 318 1190 b 310 1219 311 1218 311 1219 b 307 1216 310 1219 308 1218 b 240 1141 289 1188 269 1166 b 16 884 141 1058 62 966 b -1 847 8 869 1 855 b -19 833 -4 840 -12 833 l -21 833 l -21 961 l -20 1090 l -13 1091 b 98 1129 17 1098 62 1112 b 111 1134 103 1131 110 1134 b 167 1163 123 1140 156 1156 b 319 1425 264 1220 319 1320 b 313 1487 319 1445 318 1466 b 310 1495 311 1494 311 1495 b 307 1493 310 1495 308 1494 b 240 1418 289 1465 269 1443 b 16 1161 141 1334 62 1243 b -1 1122 8 1145 1 1131 b -19 1109 -4 1116 -12 1109 l -21 1109 l -21 1237 l -20 1366 l -13 1368 b 98 1405 17 1375 62 1388 b 111 1411 103 1408 110 1411 b 250 1509 172 1438 215 1468 b 319 1702 296 1565 319 1634 b 270 1861 319 1758 303 1815 b 262 1883 265 1869 262 1876 b 276 1901 262 1891 266 1897 "
        },
        "\ue15c": {
            width: 387,
            c: 0,
            e: 0,
            d: 347.21875,
            f: 386.5625,
            name: "rests.M1",
            h: 394,
            height: 348,
            g: "m 0 173 l 0 347 l 193 347 l 386 347 l 386 173 l 386 0 l 193 0 l 0 0 l 0 173 "
        },
        "\ue125": {
            width: 781,
            c: -1.390625,
            e: -390.640625,
            d: 576.390625,
            f: 389.28125,
            name: "scripts.uverylongfermata",
            h: 397,
            height: 579,
            g: "m -378 573 l -374 576 l 0 576 l 372 576 l 377 573 b 387 563 381 572 385 568 l 389 559 l 389 287 l 389 15 l 387 12 b 367 0 383 4 375 0 b 348 12 360 0 352 4 l 347 15 l 347 211 l 347 406 l 0 406 l -348 406 l -348 211 l -348 15 l -349 12 b -368 0 -353 4 -362 0 b -389 12 -377 0 -385 4 l -390 15 l -390 287 l -390 559 l -389 563 b -378 573 -386 568 -382 572 m -274 337 l -270 338 l 0 338 l 269 338 l 273 337 b 284 326 279 334 281 330 l 285 323 l 285 169 l 285 15 l 284 12 b 265 -1 280 4 272 -1 b 245 12 257 -1 249 4 l 245 15 l 243 108 l 243 201 l 0 201 l -245 201 l -245 108 l -245 15 l -246 12 b -266 -1 -250 4 -258 -1 b -285 12 -273 -1 -281 4 l -287 15 l -287 169 l -287 323 l -285 326 b -274 337 -283 330 -280 334 m -13 131 b -1 133 -9 133 -5 133 b 50 105 19 133 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -58 38 -62 55 b -13 131 -62 98 -44 125 "
        },
        "\ue18d": {
            width: 846,
            c: -279.171875,
            e: -423.3125,
            d: 277.78125,
            f: 421.9375,
            name: "scripts.reverseturn",
            h: 431,
            height: 558,
            g: "m -10 276 b -2 277 -8 277 -5 277 b 17 265 5 277 13 273 b 19 163 19 261 19 261 l 19 68 l 39 45 b 277 -95 122 -34 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -54 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 200 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 137 b 421 22 421 37 421 29 b 257 -198 421 -86 347 -188 b 242 -198 251 -198 247 -198 b 20 -105 181 -198 95 -163 l 19 -104 l 19 -183 b 19 -216 19 -195 19 -206 b 12 -273 19 -272 17 -268 b -2 -279 8 -277 2 -279 b -21 -266 -10 -279 -19 -275 b -23 -165 -23 -263 -23 -262 l -23 -69 l -44 -47 b -250 86 -117 23 -183 66 b -295 94 -270 93 -284 94 b -315 91 -302 94 -308 94 b -381 5 -356 81 -381 43 b -355 -56 -381 -16 -372 -40 b -299 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -168 -77 -196 -58 -179 -65 b -151 -122 -156 -90 -151 -105 b -179 -175 -151 -141 -160 -162 b -239 -195 -194 -184 -217 -193 b -257 -197 -245 -195 -250 -197 b -423 -5 -349 -197 -423 -113 b -423 0 -423 -4 -423 -1 b -277 194 -420 97 -362 173 b -247 197 -268 197 -258 197 b -24 104 -185 197 -100 162 l -23 102 l -23 181 b -21 265 -23 261 -23 261 b -10 276 -20 269 -14 275 "
        },
        "\ue112": {
            width: 623,
            c: -280.5625,
            e: 0,
            d: 419.4375,
            f: 622.03125,
            name: "scripts.caesura",
            h: 635,
            height: 701,
            g: "m 398 418 b 406 419 401 419 404 419 b 427 398 417 419 427 409 b 427 391 427 395 427 393 b 34 -275 424 386 38 -272 b 20 -280 29 -279 25 -280 b 0 -259 9 -280 0 -270 b 0 -252 0 -256 0 -254 b 393 413 2 -247 389 411 b 398 418 394 415 397 416 m 592 418 b 600 419 594 419 597 419 b 622 398 611 419 622 409 b 620 391 622 395 620 393 b 227 -275 617 386 231 -272 b 213 -280 223 -279 219 -280 b 193 -259 202 -280 193 -270 b 194 -252 193 -256 193 -254 b 586 413 196 -247 582 411 b 592 418 588 415 590 416 "
        },
        "\ue16f": {
            width: 324,
            c: -538.890625,
            e: 0,
            d: 537.5,
            f: 323.9375,
            name: "accidentals.2",
            h: 331,
            height: 1077,
            g: "m 217 536 b 225 537 220 537 221 537 b 245 525 235 537 242 533 l 246 522 l 247 390 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 493 87 498 b 103 495 98 498 100 497 b 114 486 107 494 111 490 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 384 l 205 522 l 206 525 b 217 536 209 529 212 533 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "
        },
        "\ue157": {
            width: 1067,
            c: -1.390625,
            e: -1.359375,
            d: 694.453125,
            f: 1064.390625,
            name: "pedal.Ped",
            h: 1086,
            height: 697,
            g: "m 296 693 b 314 694 302 694 307 694 b 386 686 337 694 366 690 b 548 498 480 661 548 580 b 548 481 548 493 548 487 b 455 395 541 426 499 395 b 370 462 420 395 383 418 b 362 497 364 477 362 488 b 377 515 362 509 367 515 b 393 501 386 515 390 511 b 432 475 397 484 413 475 b 470 487 445 475 458 479 b 491 530 484 497 491 511 b 490 544 491 534 491 540 b 333 661 479 606 411 658 l 323 662 l 315 647 b 269 525 285 591 269 556 b 321 431 269 493 287 466 b 349 395 338 413 343 408 b 363 343 359 379 363 362 b 359 312 363 333 362 322 b 285 158 348 266 318 206 b 281 152 283 155 281 152 b 281 152 281 152 281 152 b 287 154 283 152 284 152 b 318 155 298 154 308 155 b 461 98 371 155 419 136 l 464 97 l 483 112 b 503 129 494 120 503 127 b 504 130 503 129 504 129 b 503 138 504 131 503 134 b 500 180 500 152 500 166 b 553 326 500 238 518 288 b 604 366 560 331 592 358 b 649 381 617 376 632 381 b 696 362 665 381 681 375 b 724 302 714 347 724 325 b 695 238 724 279 714 255 b 660 211 691 234 662 212 b 579 148 658 209 582 151 b 579 148 579 148 579 148 b 596 106 579 144 589 119 b 622 77 604 88 609 83 b 657 69 632 72 645 69 b 748 112 688 69 721 84 b 755 123 754 118 755 120 b 755 127 755 125 755 126 b 751 165 752 137 751 151 b 758 219 751 183 754 202 b 894 387 774 290 820 347 b 896 390 896 388 896 388 b 891 398 896 391 895 393 b 622 561 827 477 730 536 b 600 580 605 565 600 569 b 617 597 600 591 607 597 b 628 595 622 597 624 597 b 1057 248 846 552 1020 412 b 1064 191 1061 229 1064 209 b 922 0 1064 94 1005 9 b 902 -1 916 -1 909 -1 b 774 76 847 -1 800 26 b 769 83 770 81 770 83 b 769 81 769 83 769 83 b 627 -1 733 29 677 -1 b 548 27 597 -1 570 8 b 515 88 537 37 525 61 l 513 95 l 510 93 l 453 45 b 390 0 396 0 396 0 b 390 0 390 0 390 0 b 374 15 381 0 377 4 b 268 105 359 69 314 105 b 250 104 262 105 257 105 l 243 102 l 234 90 b 155 1 201 50 159 2 b 147 -1 152 0 149 -1 b 130 15 138 -1 130 6 b 132 20 130 18 132 19 b 136 31 133 22 134 27 b 220 131 149 75 178 109 b 231 137 225 134 230 136 b 302 279 280 202 302 244 b 265 336 302 300 295 309 b 209 443 234 363 213 402 b 209 455 209 447 209 451 b 279 648 209 502 232 565 l 285 659 l 283 659 b 176 627 238 654 210 645 b 57 477 111 594 66 538 b 55 459 55 472 55 465 b 72 409 55 437 61 415 b 93 404 78 405 87 404 b 152 468 123 404 151 431 b 168 488 153 483 157 488 b 185 462 181 488 185 483 l 185 461 b 137 344 183 409 168 369 b 78 322 119 329 98 322 b 13 361 50 322 25 336 b -1 426 4 380 -1 402 b 89 611 -1 488 32 559 b 296 693 147 659 210 686 m 926 348 b 921 354 924 351 922 354 b 914 348 920 354 918 351 b 823 168 857 306 823 237 b 828 125 823 154 826 138 b 890 31 837 79 862 40 b 896 31 892 31 894 31 b 956 104 916 31 940 59 b 970 191 965 129 970 159 b 966 241 970 208 969 225 b 926 348 959 277 945 313 m 627 326 b 619 326 624 326 622 326 b 598 316 611 326 604 323 b 568 215 579 288 568 255 b 568 208 568 213 568 211 b 571 183 570 195 570 184 l 571 183 b 594 201 571 183 582 191 l 634 231 b 660 259 653 247 656 248 b 664 279 662 266 664 272 b 627 326 664 300 649 320 "
        },
        "\ue172": {
            width: 334,
            c: -538.890625,
            e: 0,
            d: 822.21875,
            f: 333.46875,
            name: "accidentals.sharp.arrowup",
            h: 340,
            height: 1362,
            g: "m 219 819 b 225 822 220 820 223 822 b 239 816 231 822 235 819 b 245 801 242 812 243 811 b 328 587 259 726 291 647 l 333 579 l 333 573 l 333 572 b 315 554 333 561 325 554 b 306 556 313 554 308 555 b 251 577 288 568 270 575 b 246 579 249 577 247 579 b 245 577 246 579 245 579 b 246 576 245 577 246 577 b 247 416 246 575 246 543 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 268 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -211 314 -200 315 -200 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -350 l 246 -483 l 245 -487 b 225 -500 242 -495 234 -500 b 206 -487 219 -500 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -250 127 -247 117 -250 b 115 -386 115 -250 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -261 73 -269 73 -261 b 72 -261 72 -261 72 -261 b 19 -273 61 -263 23 -273 b 0 -261 10 -273 4 -268 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 75 61 83 23 75 b 0 86 10 75 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 486 b 95 498 78 494 87 498 b 114 486 102 498 110 494 l 115 481 l 115 354 l 115 226 l 121 226 b 159 236 123 227 141 231 l 198 247 l 205 248 l 205 409 b 206 575 205 547 205 572 b 206 577 206 576 206 577 b 205 579 206 579 206 579 b 200 577 205 579 202 577 b 147 556 181 575 163 568 b 136 554 142 555 138 554 b 118 572 126 554 118 561 l 118 573 l 118 579 l 123 587 b 205 797 160 647 187 718 b 219 819 209 813 210 816 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 100 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "
        },
        "\ue160": {
            width: 654,
            c: -958.328125,
            e: -1.359375,
            d: 645.828125,
            f: 651.96875,
            name: "rests.6",
            h: 665,
            height: 1605,
            g: "m 389 644 b 405 645 394 645 400 645 b 504 566 450 645 492 613 b 507 541 506 558 507 550 b 480 472 507 515 498 490 l 477 468 l 483 470 b 609 591 539 486 586 531 b 613 601 611 595 613 600 b 631 609 619 608 624 609 b 651 588 641 609 651 602 b 200 -947 651 584 204 -941 b 182 -958 197 -954 190 -958 b 163 -945 174 -958 166 -954 b 161 -940 161 -943 161 -943 b 217 -744 161 -931 170 -905 b 272 -555 247 -640 272 -555 b 272 -555 272 -555 272 -555 b 264 -561 272 -555 268 -558 b 140 -604 227 -590 182 -604 b 36 -568 102 -604 65 -593 b -1 -487 12 -548 -1 -518 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -554 205 -509 196 -536 l 175 -558 l 182 -555 b 307 -436 236 -540 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -250 b 99 -145 112 -206 99 -176 b 118 -84 99 -125 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -125 b 279 -212 306 -168 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 218 206 238 b 304 304 239 287 272 304 b 393 250 338 304 374 286 b 406 200 402 234 406 218 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 143 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 465 574 470 570 468 b 442 422 529 436 484 422 b 337 458 404 422 367 433 b 300 537 313 479 300 508 b 389 644 300 586 334 636 "
        },
        "\ue133": {
            width: 424,
            c: -229.171875,
            e: -171.5,
            d: 633.328125,
            f: 251.8125,
            name: "accidentals.flat.slashslash",
            h: 257,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 554 20 616 20 615 b 20 491 20 504 20 491 l 20 491 b 153 536 47 501 149 536 b 174 515 167 536 174 525 b 164 497 174 508 171 501 b 92 470 164 495 132 484 l 20 445 l 20 390 b 20 363 20 379 20 370 b 20 333 20 340 20 333 l 20 333 b 153 377 47 344 149 377 b 174 356 167 377 174 368 b 164 338 174 350 171 343 b 92 312 164 338 132 326 l 20 288 l 20 219 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 b -21 30 -21 -212 -21 -212 b -21 273 -21 163 -21 273 b -84 252 -21 273 -50 263 b -152 230 -133 234 -145 230 b -157 231 -155 230 -156 231 b -171 252 -166 234 -171 244 b -160 270 -171 259 -167 266 b -27 316 -159 270 -93 294 l -21 319 l -21 375 b -21 431 -21 406 -21 431 b -84 409 -21 431 -50 422 b -152 388 -133 393 -145 388 b -157 390 -155 388 -156 388 b -171 409 -166 393 -171 401 b -160 429 -171 418 -167 425 b -27 475 -159 429 -93 451 l -21 476 l -21 547 b -20 620 -21 615 -21 616 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        "\ue10f": {
            width: 230,
            c: -216.671875,
            e: -1.359375,
            d: 215.28125,
            f: 227.3125,
            name: "scripts.lcomma",
            h: 232,
            height: 433,
            g: "m 182 211 b 196 215 189 213 193 215 b 204 209 200 215 202 212 b 205 204 205 206 205 205 b 193 191 205 200 201 195 b 104 54 137 159 104 105 b 122 -8 104 31 110 11 l 123 -11 l 130 -11 b 202 -45 156 -11 185 -25 b 227 -112 219 -65 227 -88 b 172 -205 227 -150 208 -186 b 127 -216 157 -212 142 -216 b -1 -52 59 -216 -1 -144 b 0 -37 -1 -48 0 -43 b 182 211 6 58 80 155 "
        },
        2: {
            width: 461,
            c: -1.390625,
            e: -1.359375,
            d: 673.609375,
            f: 458.6875,
            name: "two",
            h: 468,
            height: 676,
            g: "m 197 648 b 216 648 201 648 208 648 b 258 647 232 648 253 648 b 419 547 333 637 393 600 b 432 490 428 529 432 509 b 356 343 432 440 405 384 b 235 279 322 313 288 295 b 69 170 166 256 107 218 b 69 169 69 170 69 169 b 69 169 69 169 69 169 b 74 173 69 169 72 170 b 209 222 112 204 163 222 b 310 195 247 222 274 215 b 371 179 332 184 352 179 b 396 181 379 179 387 179 b 428 202 409 184 423 194 b 442 212 431 209 436 212 b 458 197 450 212 458 206 b 441 148 458 190 449 165 b 299 44 409 84 353 44 b 288 45 295 44 292 44 b 250 61 274 45 268 50 b 122 100 212 86 164 100 b 73 91 104 100 88 97 b 28 63 53 84 34 72 b 14 54 25 56 20 54 b 1 62 9 54 4 56 l -1 65 l -1 79 b 0 100 -1 91 0 95 b 2 113 1 102 2 108 b 164 309 20 197 81 272 b 285 470 232 341 277 398 b 287 487 287 476 287 481 b 171 595 287 551 239 595 b 155 595 166 595 160 595 b 142 593 145 594 142 594 b 145 590 142 593 142 591 b 179 527 168 576 179 551 b 132 455 179 497 163 468 b 104 451 122 452 112 451 b 27 530 62 451 27 487 b 29 555 27 538 27 547 b 197 648 44 601 115 640 m 228 -1 l 230 -1 l 227 -1 l 228 -1 m 228 673 l 230 673 l 227 673 l 228 673 "
        },
        "\ue1ab": {
            width: 485,
            c: -248.609375,
            e: 0,
            d: 247.21875,
            f: 484.5625,
            name: "noteheads.s2xcircle",
            h: 494,
            height: 497,
            g: "m 228 245 b 239 247 234 247 239 247 b 243 247 240 247 242 247 b 303 238 257 247 287 243 b 484 -2 417 208 484 104 b 412 -177 484 -65 461 -127 b 243 -248 363 -226 303 -248 b 6 -63 138 -248 36 -180 b 0 -1 1 -41 0 -20 b 228 245 0 127 98 240 m 255 181 b 240 183 247 183 245 183 b 232 181 238 183 235 183 b 142 152 200 180 168 170 l 138 150 l 190 97 l 242 44 l 294 97 l 345 150 l 340 152 b 255 181 315 169 284 180 m 147 -54 l 197 -1 l 147 51 l 95 104 l 91 100 b 62 -1 72 70 62 34 b 66 -43 62 -15 63 -29 b 91 -101 72 -63 80 -84 l 95 -106 l 147 -54 m 393 100 b 389 104 390 102 389 104 b 337 51 389 104 366 80 l 285 -1 l 337 -54 l 389 -106 l 393 -101 b 421 -1 412 -72 421 -36 b 393 100 421 34 412 69 m 294 -98 b 242 -45 265 -69 242 -45 b 190 -98 242 -45 219 -69 l 138 -151 l 142 -154 b 242 -184 172 -175 206 -184 b 340 -154 276 -184 311 -175 l 345 -151 l 294 -98 "
        },
        "\ue165": {
            width: 451,
            c: -616.671875,
            e: 0,
            d: 304.171875,
            f: 450.53125,
            name: "rests.4",
            h: 460,
            height: 922,
            g: "m 189 302 b 204 304 193 302 198 304 b 303 225 250 304 292 270 b 306 200 304 216 306 208 b 279 129 306 173 296 147 l 276 126 l 281 127 b 408 250 337 143 385 190 b 412 259 409 254 412 258 b 430 268 417 265 423 268 b 450 247 441 268 450 259 b 200 -605 450 243 204 -600 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -611 b 161 -598 161 -601 161 -601 b 217 -402 161 -590 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -250 b 0 -145 12 -206 0 -176 b 17 -84 0 -125 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -125 b 178 -212 205 -168 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 194 111 136 99 165 b 189 302 99 244 133 293 "
        },
        "\ue11d": {
            width: 678,
            c: -702.78125,
            e: 0,
            d: 1201.390625,
            f: 677.828125,
            name: "clefs.G_change",
            h: 692,
            height: 1905,
            g: "m 390 1200 b 396 1201 392 1201 394 1201 b 426 1180 404 1201 412 1195 b 528 976 468 1136 507 1059 b 543 863 537 938 543 901 b 401 533 543 744 494 627 l 366 497 l 344 476 l 349 455 l 366 376 b 385 284 381 304 385 284 b 385 284 385 284 385 284 b 394 284 386 284 390 284 b 419 286 402 286 411 286 b 568 237 472 286 526 268 b 677 18 641 183 677 101 b 624 -147 677 -38 661 -97 b 499 -245 592 -190 556 -219 l 496 -247 l 500 -268 b 524 -380 511 -319 522 -372 b 532 -459 529 -408 532 -434 b 431 -665 532 -551 498 -620 b 307 -702 394 -690 351 -702 b 130 -618 242 -702 175 -673 b 103 -543 111 -595 103 -569 b 156 -444 103 -505 121 -468 b 219 -425 175 -431 197 -425 b 303 -463 250 -425 283 -438 b 330 -536 321 -486 330 -511 b 232 -644 330 -588 292 -638 l 223 -644 l 230 -648 b 307 -665 254 -659 281 -665 b 485 -530 387 -665 464 -612 b 495 -462 492 -508 495 -486 b 481 -359 495 -433 491 -401 b 461 -259 472 -311 461 -259 b 461 -259 461 -259 461 -259 b 455 -261 461 -259 458 -259 b 372 -270 428 -268 401 -270 b 190 -222 310 -270 247 -254 b 0 115 68 -151 0 -20 b 46 304 0 179 14 243 b 268 581 80 369 182 497 l 281 595 l 280 606 b 240 798 253 734 243 781 b 235 865 236 822 235 843 b 239 927 235 884 236 905 b 340 1154 250 1011 285 1091 b 390 1200 356 1172 383 1198 m 446 1040 b 432 1041 442 1041 438 1041 b 383 1023 417 1041 401 1036 b 284 804 321 981 284 897 b 288 747 284 786 285 766 b 313 627 289 737 313 627 l 313 627 b 344 658 314 627 332 645 b 487 958 434 758 487 870 b 483 995 487 970 485 983 b 446 1040 477 1022 468 1034 m 314 441 b 314 443 314 443 314 443 b 303 433 313 443 310 440 b 161 254 251 375 196 305 b 102 56 122 194 102 125 b 125 -66 102 13 110 -27 b 374 -243 170 -175 269 -243 b 420 -238 389 -243 405 -241 b 454 -229 432 -236 454 -230 l 454 -229 b 442 -165 454 -227 449 -200 b 375 148 389 84 377 145 b 374 150 375 150 375 150 b 363 145 372 150 370 148 b 269 12 302 120 269 66 b 333 -101 269 -30 289 -73 b 343 -118 340 -105 343 -112 b 330 -133 343 -125 338 -130 b 328 -133 329 -133 328 -133 b 238 -70 308 -133 262 -101 b 193 61 206 -30 193 15 b 340 272 193 151 247 240 b 348 276 345 275 348 276 b 332 358 348 276 341 313 b 314 441 322 402 314 440 m 443 155 b 420 156 436 156 427 156 b 415 156 419 156 416 156 l 412 156 l 413 148 l 430 68 l 455 -54 l 477 -159 l 490 -213 l 494 -211 b 571 -134 525 -194 553 -165 b 601 -33 592 -102 601 -66 b 443 155 601 56 539 140 "
        },
        "\ue1aa": {
            width: 407,
            c: -184.71875,
            e: 0,
            d: 183.328125,
            f: 406.96875,
            name: "noteheads.s2cross",
            h: 415,
            height: 369,
            g: "m 21 183 b 28 183 24 183 25 183 b 42 181 34 183 39 183 b 127 108 47 179 47 179 b 202 41 168 72 202 41 b 279 108 204 41 238 72 b 357 177 321 145 356 176 b 375 183 363 181 370 183 b 406 151 392 183 406 169 b 404 137 406 147 405 141 b 322 62 401 131 398 129 b 251 0 284 27 251 0 b 322 -63 251 -1 284 -29 b 404 -138 398 -130 401 -133 b 406 -152 405 -143 406 -148 b 375 -184 406 -170 392 -184 b 357 -179 370 -184 363 -183 b 279 -109 356 -177 321 -147 b 202 -43 238 -73 204 -43 b 127 -109 202 -43 168 -73 b 49 -179 85 -147 50 -177 b 31 -184 43 -183 36 -184 b 0 -152 13 -184 0 -170 b 2 -138 0 -148 0 -143 b 83 -63 5 -133 8 -130 b 155 0 122 -29 155 -1 b 83 62 155 0 122 27 b 8 129 43 97 10 127 b 0 151 2 136 0 144 b 21 183 0 165 8 177 "
        },
        "\ue182": {
            width: 343,
            c: -1177.78125,
            e: -24.5,
            d: -5.5625,
            f: 317.140625,
            name: "flags.u4",
            h: 324,
            height: 1173,
            g: "m -24 -147 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 58 -123 6 -43 31 -86 b 196 -279 93 -173 134 -219 b 317 -570 274 -356 317 -461 b 294 -713 317 -618 308 -666 l 289 -725 l 294 -736 b 317 -873 308 -780 317 -827 b 235 -1133 317 -963 288 -1055 b 209 -1166 228 -1141 224 -1147 b 189 -1177 204 -1173 196 -1177 b 171 -1165 182 -1177 175 -1173 b 168 -1155 170 -1162 168 -1159 b 181 -1133 168 -1150 172 -1143 b 269 -891 238 -1065 269 -976 b 269 -881 269 -887 269 -884 b 262 -815 269 -858 265 -827 b 258 -801 261 -812 259 -806 b 142 -629 240 -731 198 -668 b -8 -590 112 -606 47 -590 b -20 -590 -13 -590 -19 -590 l -24 -590 l -24 -450 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 58 -425 6 -345 31 -388 b 194 -580 93 -476 136 -523 b 259 -661 221 -606 245 -636 b 261 -663 259 -662 261 -663 b 264 -656 262 -663 262 -661 b 269 -587 268 -633 269 -611 b 264 -522 269 -566 268 -544 b 262 -512 264 -518 262 -513 b 258 -498 261 -509 259 -504 b 142 -326 240 -429 198 -365 b -8 -287 112 -304 47 -288 b -20 -287 -13 -287 -19 -287 l -24 -287 l -24 -147 "
        },
        "\ue1a7": {
            width: 439,
            c: -206.9375,
            e: -1.359375,
            d: 205.5625,
            f: 436.921875,
            name: "noteheads.u2triangle",
            h: 446,
            height: 413,
            g: "m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 200 b 236 187 234 194 235 190 l 245 168 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 200 208 202 "
        },
        "\ue18a": {
            width: 559,
            c: -325,
            e: -1.359375,
            d: 323.609375,
            f: 556.6875,
            name: "timesig.C44",
            h: 568,
            height: 649,
            g: "m 294 322 b 318 323 299 322 308 323 b 360 320 334 323 352 322 b 526 218 430 311 490 273 b 543 166 537 202 543 184 b 447 70 543 118 503 70 b 445 70 447 70 446 70 b 359 159 394 72 359 113 b 368 201 359 173 362 187 b 442 245 382 229 412 245 b 455 244 446 245 451 245 b 460 244 458 244 460 244 b 460 244 460 244 460 244 b 454 248 460 244 458 245 b 325 291 417 276 372 291 b 285 287 313 291 299 290 b 144 -2 183 269 144 190 b 281 -290 144 -208 179 -280 b 304 -291 289 -291 298 -291 b 524 -105 412 -291 506 -212 b 541 -84 526 -88 530 -84 b 556 -101 551 -84 556 -90 b 549 -138 556 -111 553 -122 b 334 -322 521 -237 435 -311 b 302 -325 323 -323 313 -325 b 13 -101 172 -325 54 -234 b -1 -1 4 -68 -1 -34 b 294 322 -1 161 121 304 "
        },
        "\ue191": {
            width: 374,
            c: -158.328125,
            e: -348.4375,
            d: 156.9375,
            f: 24.5,
            name: "arrowheads.open.01",
            h: 25,
            height: 316,
            g: "m -330 155 b -322 156 -329 156 -326 156 b -315 156 -319 156 -317 156 b -298 147 -311 155 -308 154 b -19 30 -224 98 -122 55 l 2 26 b 24 -1 17 22 24 13 b 2 -27 24 -15 17 -23 l -19 -31 b -298 -148 -122 -56 -224 -100 b -322 -158 -313 -158 -315 -158 b -348 -131 -338 -158 -348 -145 b -344 -118 -348 -127 -347 -122 b -328 -104 -341 -112 -338 -111 b -127 -8 -269 -65 -202 -33 b -106 0 -115 -4 -106 -1 b -127 6 -106 0 -115 2 b -328 102 -202 31 -269 63 b -344 116 -338 109 -341 111 b -348 130 -347 120 -348 125 b -330 155 -348 141 -341 152 "
        },
        "\ue122": {
            width: 884,
            c: 0,
            e: -442.359375,
            d: 488.890625,
            f: 441,
            name: "scripts.ufermata",
            h: 450,
            height: 489,
            g: "m -31 487 b -1 488 -21 488 -10 488 b 434 104 216 488 397 330 b 441 27 438 79 441 47 b 439 12 441 20 439 15 b 419 0 435 4 427 0 b 404 5 413 0 408 1 b 398 30 400 11 398 13 b 0 351 390 213 213 351 b -59 348 -20 351 -39 350 b -400 30 -251 325 -393 191 b -405 5 -400 13 -401 11 b -420 0 -409 1 -415 0 b -441 12 -428 0 -436 4 b -442 27 -441 15 -442 20 b -435 104 -442 47 -439 79 b -31 487 -401 316 -235 475 m -13 131 b -1 133 -9 133 -5 133 b 51 105 19 133 39 123 b 61 70 58 95 61 83 b 51 34 61 58 58 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -57 38 -62 54 b -13 131 -62 98 -44 125 "
        },
        "\ue12e": {
            width: 274,
            c: -229.171875,
            e: -21.78125,
            d: 633.328125,
            f: 251.8125,
            name: "accidentals.flat",
            h: 257,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        "\ue143": {
            width: 805,
            c: -300,
            e: -402.890625,
            d: 275,
            f: 401.53125,
            name: "scripts.mordent",
            h: 410,
            height: 575,
            g: "m -10 273 b -4 275 -9 273 -6 275 b 16 262 4 275 12 269 b 17 158 17 259 17 259 l 17 56 l 62 112 b 117 175 110 172 110 172 b 122 175 118 175 119 175 b 132 173 125 175 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 75 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -175 215 -176 b 201 -175 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b 21 -6 27 0 24 -2 l 17 -12 l 17 -147 b 17 -211 17 -173 17 -194 b 10 -293 17 -297 16 -287 b -2 -300 6 -297 2 -300 b -21 -287 -10 -300 -19 -295 b -24 -175 -23 -284 -23 -284 l -24 -63 l -66 -118 b -121 -176 -110 -170 -114 -176 b -125 -176 -122 -176 -123 -176 b -296 -12 -134 -175 -125 -184 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -50 -402 -55 -402 -52 b -224 170 -398 -43 -231 165 b -212 175 -221 173 -216 175 b -202 173 -208 175 -205 175 b -39 11 -200 172 -151 122 l -28 -1 l -25 1 l -24 4 l -24 130 b -23 261 -24 256 -24 258 b -10 273 -20 266 -16 270 "
        },
        "\ue1a0": {
            width: 628,
            c: -193.0625,
            e: 0,
            d: 191.671875,
            f: 627.46875,
            name: "noteheads.s0diamond",
            h: 640,
            height: 386,
            g: "m 306 190 b 314 191 308 191 311 191 b 326 184 318 191 322 190 l 336 173 b 510 52 377 127 442 80 b 515 50 513 51 515 50 b 611 16 537 40 579 25 b 627 0 624 13 627 9 b 607 -18 627 -11 624 -13 b 330 -181 490 -50 389 -109 b 314 -193 323 -190 319 -193 b 306 -191 311 -193 308 -193 b 294 -177 302 -188 302 -188 b 257 -140 287 -170 265 -148 b 19 -18 193 -84 114 -44 b 0 0 2 -13 0 -11 b 16 16 0 9 2 13 b 110 50 47 25 89 40 b 117 52 111 50 114 51 b 145 65 126 56 130 58 b 281 163 200 93 245 125 b 300 186 288 170 291 175 b 306 190 300 187 303 188 m 317 137 b 313 143 315 141 314 143 b 308 137 313 143 311 141 b 161 4 276 84 220 33 b 155 0 159 1 155 0 b 163 -4 155 0 159 -2 b 308 -138 220 -34 276 -84 b 313 -143 311 -141 313 -143 b 317 -138 314 -143 315 -141 b 464 -4 351 -84 406 -34 b 470 0 468 -2 470 0 b 464 4 470 0 468 1 b 317 137 406 33 351 84 "
        },
        "\ue184": {
            width: 341,
            c: -1534.71875,
            e: -24.5,
            d: -5.5625,
            f: 315.78125,
            name: "flags.u5",
            h: 322,
            height: 1530,
            g: "m -24 -145 l -24 -5 l -20 -5 b 1 -26 -10 -5 -6 -9 b 175 -241 31 -86 96 -166 b 314 -548 259 -323 304 -420 b 315 -590 315 -555 315 -572 b 314 -630 315 -606 315 -623 b 298 -730 311 -665 306 -700 l 295 -743 l 296 -748 b 314 -851 304 -779 311 -813 b 315 -893 315 -858 315 -875 b 314 -933 315 -909 315 -926 b 298 -1033 311 -968 306 -1002 l 295 -1045 l 296 -1051 b 314 -1154 304 -1081 311 -1116 b 315 -1194 315 -1161 315 -1177 b 314 -1236 315 -1212 315 -1229 b 217 -1527 306 -1338 270 -1445 b 201 -1534 213 -1533 208 -1534 b 182 -1523 193 -1534 185 -1530 b 179 -1515 181 -1519 179 -1518 b 189 -1490 179 -1509 182 -1502 b 266 -1218 240 -1404 266 -1309 b 262 -1156 266 -1197 265 -1177 b 110 -908 247 -1044 190 -951 b 0 -890 87 -895 50 -890 l -1 -890 l -24 -890 l -24 -750 l -24 -611 l -20 -611 b 1 -631 -10 -611 -6 -615 b 175 -847 31 -691 96 -772 b 259 -956 213 -884 236 -915 b 265 -966 262 -962 264 -966 b 265 -966 265 -966 265 -966 b 265 -954 265 -965 265 -959 b 266 -920 266 -944 266 -933 b 262 -854 266 -898 265 -873 b 110 -605 247 -741 190 -648 b 0 -587 87 -593 50 -587 l -1 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 1 -329 -10 -308 -6 -312 b 175 -544 31 -388 96 -469 b 259 -655 213 -581 236 -612 b 265 -663 262 -659 264 -663 b 265 -663 265 -663 265 -663 b 265 -651 265 -663 265 -658 b 266 -618 266 -641 266 -630 b 262 -551 266 -595 265 -570 b 110 -304 247 -438 190 -345 b 0 -284 87 -290 50 -284 l -1 -284 l -24 -284 l -24 -145 "
        },
        "\ue11c": {
            width: 721,
            c: -605.5625,
            e: 0,
            d: 280.5625,
            f: 720.03125,
            name: "clefs.F_change",
            h: 735,
            height: 887,
            g: "m 251 280 b 269 280 258 280 264 280 b 487 215 348 280 432 255 b 594 -2 558 159 594 87 b 590 -55 594 -19 593 -37 b 44 -598 553 -309 330 -533 b 10 -605 25 -604 16 -605 b 1 -600 5 -605 2 -604 b 0 -594 0 -598 0 -595 b 8 -580 0 -587 2 -580 b 43 -566 9 -580 32 -572 b 453 -54 279 -468 434 -275 b 454 -9 454 -48 454 -29 b 453 34 454 9 454 29 b 351 230 443 129 411 193 b 259 255 323 247 292 255 b 70 133 183 255 103 208 b 68 125 68 127 68 125 b 68 123 68 123 68 123 b 70 126 68 123 69 125 b 126 141 88 137 107 141 b 202 109 153 141 182 131 b 234 33 224 87 234 59 b 126 -77 234 -23 191 -77 b 5 61 53 -77 5 -13 b 27 147 5 88 12 119 b 251 280 68 226 151 275 m 672 172 b 677 173 673 173 676 173 b 720 130 700 173 720 152 b 714 111 720 125 717 118 b 677 88 707 95 692 88 b 642 108 664 88 650 95 b 637 130 638 115 637 123 b 672 172 637 151 650 169 m 672 -90 b 677 -90 673 -90 676 -90 b 720 -131 700 -90 720 -109 b 714 -151 720 -138 717 -144 b 677 -175 707 -166 692 -175 b 642 -154 664 -175 650 -168 b 637 -133 638 -147 637 -140 b 672 -90 637 -112 650 -93 "
        },
        "\ue1a3": {
            width: 631,
            c: -206.9375,
            e: 0,
            d: 205.5625,
            f: 630.203125,
            name: "noteheads.s0triangle",
            h: 643,
            height: 413,
            g: "m 308 204 b 314 205 310 205 313 205 b 326 201 319 205 323 204 b 355 154 328 200 338 180 b 401 83 362 143 392 95 l 409 72 b 431 41 412 66 424 50 b 619 -175 498 -51 570 -134 b 630 -193 626 -180 630 -186 b 626 -202 630 -195 628 -200 b 616 -206 623 -205 620 -206 b 552 -188 608 -206 592 -202 b 310 -155 488 -169 392 -155 b 268 -156 295 -155 281 -155 b 77 -188 197 -161 126 -173 b 13 -206 35 -202 20 -206 b 9 -206 12 -206 10 -206 b 0 -191 2 -202 0 -197 b 8 -176 0 -186 2 -180 b 204 50 58 -136 138 -43 l 220 72 l 227 83 b 295 188 245 108 281 166 b 308 204 299 197 304 202 m 315 147 b 314 147 315 147 314 147 b 314 147 314 147 314 147 b 306 129 314 145 310 138 l 296 105 b 281 72 292 97 284 77 l 274 56 b 181 -123 247 -4 212 -72 l 174 -134 l 176 -133 b 314 -123 215 -127 272 -123 b 451 -133 356 -123 413 -127 l 454 -134 l 449 -123 b 353 56 417 -72 381 -4 l 347 72 b 332 105 344 77 336 97 l 322 129 b 315 147 318 138 315 145 "
        },
        qn: {
            width: 309,
            c: -30.5625,
            e: 70.78125,
            d: 373.609375,
            f: 378.390625,
            name: "s",
            h: 315,
            height: 405,
            g: "m 246 373 b 254 373 249 373 251 373 b 372 325 303 373 360 351 b 378 302 377 318 378 309 b 338 251 378 279 362 255 b 328 250 334 250 332 250 b 283 294 303 250 283 270 b 288 315 283 301 284 308 b 289 319 289 318 289 319 b 289 319 289 319 289 319 b 283 320 289 320 287 320 b 270 322 279 322 274 322 b 206 288 242 322 215 308 b 206 283 206 287 206 286 b 257 223 206 268 230 238 b 284 206 272 213 277 211 b 351 90 328 173 351 130 b 340 47 351 75 348 59 b 205 -30 314 -2 264 -30 b 182 -29 198 -30 190 -30 b 84 15 147 -25 103 -5 b 70 48 74 25 70 36 b 108 100 70 70 85 94 b 121 102 112 101 117 102 b 167 56 147 102 167 80 b 159 31 167 48 164 40 l 156 26 l 157 26 b 190 20 167 22 178 20 b 220 26 201 20 212 22 b 258 65 243 34 258 51 b 257 70 258 66 258 69 b 204 126 249 94 234 109 b 114 258 148 158 114 209 b 125 302 114 273 118 288 b 246 373 147 343 193 370 "
        },
        "\ue114": {
            width: 504,
            c: -287.5,
            e: 0,
            d: 430.5625,
            f: 503.609375,
            name: "scripts.caesura.curved",
            h: 514,
            height: 719,
            g: "m 274 430 b 277 430 276 430 277 430 b 310 394 296 430 310 415 b 308 383 310 391 308 387 b 306 368 307 381 307 375 b 236 120 298 305 272 211 b 40 -273 189 -5 125 -134 b 20 -287 35 -283 27 -287 b 5 -281 14 -287 9 -286 b 0 -268 1 -277 0 -273 b 9 -243 0 -262 2 -255 b 246 395 137 -12 232 243 b 274 430 249 416 257 427 m 468 430 b 472 430 469 430 470 430 b 503 394 490 430 503 415 b 502 383 503 391 503 387 b 499 368 502 381 500 375 b 431 120 491 305 465 211 b 234 -273 382 -5 318 -134 b 213 -287 228 -283 220 -287 b 198 -281 208 -287 202 -286 b 193 -268 194 -277 193 -273 b 202 -243 193 -262 196 -255 b 439 395 330 -12 426 243 b 468 430 442 416 451 427 "
        },
        "\ue195": {
            width: 374,
            c: -158.328125,
            e: -348.4375,
            d: 156.9375,
            f: 24.5,
            name: "arrowheads.close.01",
            h: 25,
            height: 316,
            g: "m -330 155 b -322 156 -329 156 -326 156 b -315 156 -319 156 -317 156 b -298 147 -311 155 -308 154 b -6 27 -221 95 -117 52 b 10 23 1 26 8 23 b 24 -1 20 18 24 8 b 12 -23 24 -9 20 -19 b -8 -29 9 -26 9 -26 b -298 -148 -112 -52 -223 -97 b -322 -158 -313 -158 -315 -158 b -348 -133 -338 -158 -348 -147 b -343 -115 -348 -127 -347 -120 b -313 -1 -323 -79 -313 -40 b -337 101 -313 34 -321 69 b -343 113 -338 105 -341 111 b -348 131 -347 119 -348 126 b -330 155 -348 143 -343 152 "
        },
        "\ue120": {
            width: 623,
            c: -391.671875,
            e: -311.6875,
            d: 390.28125,
            f: 310.328125,
            name: "scripts.coda",
            h: 317,
            height: 783,
            g: "m -9 388 b -2 390 -8 390 -5 390 b 5 388 1 390 4 390 b 19 379 10 387 16 383 b 23 333 23 372 23 372 b 24 298 23 300 24 298 b 81 276 34 298 65 286 b 213 91 145 240 190 177 b 224 25 217 76 224 36 b 257 25 224 25 235 25 b 299 19 292 25 292 25 b 310 -1 306 15 310 6 b 299 -23 310 -11 306 -19 b 257 -27 292 -27 292 -27 b 224 -29 235 -27 224 -29 b 213 -95 224 -40 217 -80 b 81 -280 190 -181 145 -244 b 24 -301 65 -290 34 -301 b 23 -336 24 -301 23 -304 l 23 -340 b 17 -381 23 -375 23 -375 b -1 -391 13 -388 5 -391 b -21 -381 -9 -391 -17 -388 b -27 -340 -27 -375 -27 -375 l -27 -336 b -28 -301 -27 -304 -27 -301 b -85 -280 -38 -301 -69 -290 b -217 -95 -149 -244 -194 -181 b -228 -29 -221 -80 -228 -40 b -259 -27 -228 -29 -238 -27 b -300 -23 -294 -27 -294 -27 b -311 -2 -307 -19 -311 -11 b -294 23 -311 8 -304 19 b -259 25 -291 23 -284 25 b -228 25 -239 25 -228 25 b -217 91 -228 36 -221 76 b -85 276 -194 177 -149 240 b -28 298 -69 286 -38 298 b -27 333 -27 298 -27 300 b -27 372 -27 362 -27 369 b -9 388 -24 379 -17 386 m -27 136 b -28 247 -27 197 -28 247 b -61 216 -31 247 -53 226 b -123 33 -95 172 -121 98 l -125 25 l -76 25 l -27 25 l -27 136 m 29 243 b 24 247 27 245 24 247 b 23 136 24 247 23 197 l 23 25 l 72 25 l 121 25 l 119 33 b 29 243 115 116 77 206 m -27 -140 l -27 -27 l -76 -27 l -125 -27 l -123 -36 b -61 -220 -121 -102 -95 -176 b -28 -251 -53 -230 -31 -251 b -27 -140 -28 -251 -27 -201 m 119 -36 l 121 -27 l 72 -27 l 23 -27 l 23 -140 b 24 -251 23 -201 24 -251 b 57 -220 27 -251 49 -230 b 119 -36 91 -176 117 -102 "
        },
        "\ue14e": {
            width: 240,
            c: -463.890625,
            e: 0,
            d: 462.5,
            f: 239.5625,
            name: "accidentals.0",
            h: 244,
            height: 927,
            g: "m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -106 l 239 -448 l 238 -451 b 219 -463 234 -459 225 -463 b 198 -451 210 -463 202 -459 l 197 -448 l 197 -325 b 197 -201 197 -248 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "
        },
        "\ue16c": {
            width: 194,
            c: -519.4375,
            e: 0,
            d: 518.0625,
            f: 193.28125,
            name: "accidentals.1",
            h: 197,
            height: 1039,
            g: "m 85 515 b 95 518 88 518 89 518 b 114 505 103 518 110 513 l 115 502 l 115 376 b 115 250 115 306 115 250 b 141 258 117 250 127 252 l 167 266 l 172 266 b 190 254 181 265 187 262 l 193 251 l 193 202 l 193 188 b 187 147 193 150 191 152 b 147 130 183 143 182 141 l 115 119 l 115 9 b 115 -100 115 -51 115 -100 b 141 -91 115 -100 127 -95 b 171 -81 166 -81 167 -81 l 171 -81 b 191 -94 181 -81 189 -87 b 193 -143 191 -97 193 -120 b 191 -195 193 -168 191 -194 b 125 -227 187 -205 187 -204 l 115 -230 l 115 -366 l 115 -504 l 114 -506 b 95 -519 110 -515 102 -519 b 74 -506 87 -519 78 -515 l 73 -504 l 73 -375 b 73 -245 73 -261 73 -245 b 73 -245 73 -245 73 -245 b 55 -252 72 -245 63 -250 l 32 -261 b 19 -263 27 -262 23 -263 b 4 -256 13 -263 8 -261 b 0 -215 0 -251 0 -254 b 0 -200 0 -211 0 -206 l 0 -152 l 1 -150 b 8 -140 2 -145 5 -141 b 42 -127 9 -140 24 -133 l 73 -116 l 73 -5 b 73 23 73 4 73 15 b 73 105 73 70 73 105 b 49 97 73 105 61 101 b 17 88 32 91 23 88 b 4 95 10 88 8 91 b 0 137 0 101 0 98 b 0 151 0 141 0 145 l 0 200 l 1 202 b 43 225 5 212 5 212 l 73 234 l 73 368 l 73 502 l 74 505 b 85 515 77 509 81 513 "
        },
        "\ue13b": {
            width: 223,
            c: -113.890625,
            e: -111.609375,
            d: 112.5,
            f: 110.25,
            name: "scripts.flageolet",
            h: 113,
            height: 227,
            g: "m -8 112 b -1 112 -5 112 -2 112 b 110 -1 63 112 110 58 b 87 -69 110 -25 103 -48 b -1 -113 65 -98 32 -113 b -88 -69 -34 -113 -66 -98 b -111 -1 -104 -48 -111 -25 b -8 112 -111 55 -70 108 m 17 94 b 0 95 12 95 6 95 b -53 79 -17 95 -38 90 b -95 -1 -80 61 -95 30 b -72 -63 -95 -23 -88 -45 b -1 -97 -53 -87 -27 -97 b 89 -31 38 -97 74 -73 b 93 0 92 -20 93 -11 b 17 94 93 44 63 83 "
        },
        "\ue176": {
            width: 458,
            c: -544.4375,
            e: -1.359375,
            d: 543.0625,
            f: 455.96875,
            name: "accidentals.sharp.slashslash.stemstemstem",
            h: 465,
            height: 1089,
            g: "m 352 541 b 357 543 353 543 355 543 b 377 530 364 543 372 537 l 378 526 l 378 394 l 379 262 l 404 266 b 436 270 420 269 430 270 b 450 265 443 270 446 269 b 455 220 455 259 455 261 l 455 208 l 455 161 l 454 156 b 411 140 449 147 447 147 b 378 133 393 137 379 134 b 378 68 378 133 378 106 b 378 22 378 54 378 38 l 379 -87 l 404 -83 b 436 -79 420 -80 430 -79 b 450 -84 443 -79 446 -80 b 455 -129 455 -90 455 -88 l 455 -141 l 455 -188 l 454 -193 b 413 -209 449 -202 447 -202 b 382 -215 398 -212 383 -215 l 378 -215 l 378 -345 l 378 -380 b 375 -486 378 -484 378 -480 b 357 -494 371 -491 364 -494 b 340 -486 351 -494 344 -491 b 336 -383 337 -480 336 -484 l 336 -350 l 336 -223 l 334 -223 b 291 -231 334 -223 314 -227 l 247 -240 l 247 -372 l 246 -504 l 245 -506 b 225 -519 242 -515 234 -519 b 206 -506 219 -519 210 -515 l 205 -504 l 205 -376 l 205 -248 l 160 -256 l 115 -265 l 115 -397 l 115 -527 l 114 -531 b 95 -544 110 -540 102 -544 b 76 -531 87 -544 78 -540 l 73 -527 l 73 -400 b 73 -273 73 -330 73 -273 b 49 -277 73 -273 61 -275 b 17 -281 32 -280 24 -281 b 4 -276 10 -281 8 -280 b -1 -234 0 -269 -1 -272 b 0 -219 -1 -229 0 -225 l 0 -170 l 1 -168 b 10 -158 2 -163 6 -159 b 49 -150 13 -156 16 -155 l 73 -145 l 73 -34 b 73 76 73 26 73 76 b 49 72 73 76 61 75 b 17 68 32 69 24 68 b 4 73 10 68 8 69 b -1 115 0 80 -1 77 b 0 130 -1 120 0 125 l 0 179 l 1 181 b 10 191 2 186 6 190 b 49 200 13 193 16 194 l 73 204 l 73 338 b 73 375 73 352 73 365 b 77 483 73 484 73 477 b 95 493 81 490 88 493 b 111 483 100 493 107 490 b 115 379 115 477 115 483 l 115 343 b 117 212 115 223 115 212 b 204 229 117 212 200 227 l 205 229 l 205 365 l 205 502 l 206 505 b 225 518 210 513 219 518 b 245 505 234 518 242 513 l 246 502 l 247 369 l 247 237 l 249 237 b 336 254 253 238 336 254 b 337 390 336 254 337 302 l 337 526 l 338 530 b 352 541 341 536 347 540 m 336 15 b 336 126 336 102 336 126 l 336 126 b 291 118 336 126 315 122 l 247 109 l 247 -1 l 247 -112 l 249 -112 b 336 -95 253 -111 336 -95 b 336 15 336 -95 336 -56 m 205 -120 b 205 -55 205 -120 205 -93 b 205 -9 205 -41 205 -25 l 205 101 l 160 93 l 115 84 l 115 -26 b 115 -83 115 -50 115 -69 b 117 -137 115 -133 115 -137 b 205 -120 118 -137 204 -120 "
        },
        "\ue107": {
            width: 310,
            c: 1.390625,
            e: -10.890625,
            d: 475,
            f: 298.078125,
            name: "scripts.arpeggio.arrow.M1",
            h: 294,
            height: 474,
            g: "m 138 473 b 142 475 140 473 141 475 b 164 459 148 475 153 470 b 191 402 183 443 191 423 b 181 354 191 388 187 372 b 178 350 179 352 178 350 b 179 348 178 348 179 348 b 185 350 181 348 182 348 b 255 376 210 355 234 363 b 272 381 264 381 266 381 b 298 355 287 381 298 370 b 288 330 298 348 298 345 b 171 34 238 254 194 141 b 166 13 168 16 168 16 b 144 1 161 5 152 1 b 121 15 134 1 125 5 b 115 33 119 18 117 24 b 0 330 91 145 49 252 b -10 355 -9 345 -10 348 b 13 381 -10 372 0 381 b 31 376 19 381 25 380 b 132 345 61 358 103 345 l 136 345 l 137 355 b 145 379 138 359 142 370 b 152 415 149 394 152 405 b 137 452 152 427 148 438 b 133 465 134 458 133 461 b 138 473 133 468 134 470 "
        },
        "\ue115": {
            width: 903,
            c: -243.0625,
            e: 0,
            d: 241.671875,
            f: 902.421875,
            name: "noteheads.sM1",
            h: 921,
            height: 486,
            g: "m 17 240 b 24 241 19 241 21 241 b 32 240 28 241 31 241 b 46 229 38 238 43 234 b 50 88 50 223 50 237 b 50 -1 50 63 50 34 b 50 -90 50 -36 50 -65 b 46 -231 50 -238 50 -225 b 25 -243 42 -238 34 -243 b 0 -225 14 -243 4 -236 b 0 2 0 -222 0 -108 b 0 223 0 112 0 220 b 17 240 2 230 9 237 m 110 240 b 118 241 111 241 114 241 b 126 240 121 241 123 241 b 142 223 133 237 140 230 b 144 123 144 220 144 205 b 144 29 144 45 144 29 b 144 29 144 29 144 29 b 393 183 166 106 264 168 b 450 186 412 184 431 186 b 756 29 600 186 732 120 b 756 29 756 29 756 29 b 758 123 758 29 758 45 b 760 227 758 226 758 223 b 784 241 766 237 774 241 b 804 229 792 241 800 237 b 809 88 808 223 809 237 l 809 -1 l 809 -90 b 804 -231 809 -238 808 -225 b 784 -243 800 -238 792 -243 b 762 -231 775 -243 766 -238 b 758 -125 756 -225 758 -231 b 756 -30 758 -47 758 -30 b 756 -30 756 -30 756 -30 b 509 -184 736 -108 637 -169 b 450 -187 488 -187 469 -187 b 144 -30 300 -187 168 -122 b 144 -30 144 -30 144 -30 b 144 -125 144 -30 144 -47 b 140 -231 144 -231 144 -225 b 118 -243 134 -238 126 -243 b 92 -225 107 -243 96 -236 b 92 2 92 -222 92 -108 b 92 223 92 112 92 220 b 110 240 95 230 102 237 m 432 161 b 413 162 426 162 420 162 b 313 41 351 162 313 109 b 347 -73 313 5 323 -34 b 487 -163 385 -133 439 -163 b 578 -97 526 -163 562 -143 b 588 -43 585 -80 588 -62 b 432 161 588 47 518 147 m 868 240 b 876 241 869 241 872 241 b 884 240 879 241 882 241 b 898 229 890 238 894 234 b 902 88 902 223 902 237 l 902 -1 l 902 -90 b 898 -231 902 -238 902 -225 b 876 -243 892 -238 884 -243 b 852 -225 865 -243 854 -236 b 850 2 850 -222 850 -108 b 852 223 850 112 850 220 b 868 240 853 230 860 237 "
        },
        "\ue180": {
            width: 343,
            c: -1034.71875,
            e: -24.5,
            d: -5.5625,
            f: 317.140625,
            name: "flags.u3",
            h: 324,
            height: 1030,
            g: "m -24 -161 l -24 -5 l -20 -5 b 0 -25 -9 -5 -2 -12 b 171 -315 21 -125 84 -233 b 317 -661 268 -406 317 -531 b 187 -1015 317 -783 274 -909 b 161 -1034 172 -1034 171 -1034 b 141 -1013 149 -1034 141 -1026 b 152 -991 141 -1005 142 -1002 b 266 -683 228 -900 266 -788 b 174 -430 266 -588 236 -498 b -23 -318 136 -388 66 -348 b -24 -161 -23 -316 -24 -286 "
        },
        "\ue15f": {
            width: 552,
            c: -616.671875,
            e: 0,
            d: 645.828125,
            f: 551.25,
            name: "rests.5",
            h: 563,
            height: 1263,
            g: "m 289 644 b 304 645 294 645 299 645 b 404 566 349 645 392 613 b 406 541 405 558 406 550 b 379 472 406 515 397 490 l 377 468 l 382 470 b 509 591 438 486 485 531 b 513 601 510 595 513 600 b 530 609 518 608 524 609 b 551 588 540 609 551 602 b 200 -605 551 584 204 -600 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -611 b 161 -598 161 -601 161 -601 b 217 -402 161 -590 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -250 b 0 -145 12 -206 0 -176 b 17 -84 0 -125 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -125 b 178 -212 205 -168 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 195 112 136 99 165 b 118 256 99 218 106 238 b 204 304 138 287 171 304 b 292 250 238 304 273 286 b 306 200 302 234 306 218 b 279 129 306 173 296 148 l 276 126 l 281 127 b 408 248 336 143 385 190 b 473 470 409 254 473 469 b 473 470 473 470 473 470 b 465 465 473 470 469 468 b 341 422 428 436 383 422 b 236 458 303 422 266 433 b 200 537 212 479 200 508 b 289 644 200 586 234 636 "
        },
        "\ue15a": {
            width: 1160,
            c: -348.609375,
            e: 0,
            d: 347.21875,
            f: 1159.671875,
            name: "rests.M3",
            h: 1183,
            height: 697,
            g: "m 0 0 l 0 347 l 193 347 l 386 347 l 386 0 l 386 -348 l 193 -348 l 0 -348 l 0 0 m 773 -1 l 773 347 l 966 347 l 1159 347 l 1159 -1 l 1159 -348 l 966 -348 l 773 -348 l 773 -1 "
        },
        "\ue12b": {
            width: 273,
            c: -229.171875,
            e: 0,
            d: 633.328125,
            f: 272.21875,
            name: "accidentals.mirroredflat",
            h: 278,
            height: 864,
            g: "m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "
        },
        "\ue185": {
            width: 390,
            c: 4.171875,
            e: -21.78125,
            d: 1554.171875,
            f: 367.5,
            name: "flags.d6",
            h: 375,
            height: 1551,
            g: "m 259 1554 b 265 1554 261 1554 264 1554 b 288 1541 272 1554 277 1551 b 367 1352 340 1494 367 1425 b 336 1222 367 1309 357 1263 l 332 1212 l 333 1209 b 367 1077 356 1170 367 1125 b 336 945 367 1033 357 987 l 332 936 l 333 933 b 367 801 356 894 367 848 b 336 669 367 756 357 711 l 332 659 l 333 656 b 367 523 356 618 367 572 b 345 412 367 486 360 447 b 231 273 322 356 284 311 b -1 19 121 195 27 93 b -17 4 -4 11 -10 5 l -21 4 l -21 134 l -21 265 l -17 265 b 133 291 20 265 96 279 b 318 537 245 329 318 433 b 307 604 318 559 315 583 b 303 615 304 612 304 615 b 298 609 302 615 300 613 b 231 550 281 590 258 568 b -1 295 121 472 27 369 b -17 280 -4 287 -10 281 l -21 280 l -21 411 l -21 541 l -17 541 b 133 568 20 541 96 555 b 318 813 245 605 318 709 b 307 880 318 836 315 859 b 303 891 304 888 304 891 b 298 886 302 891 300 888 b 231 826 281 866 258 844 b -1 572 121 748 27 645 b -17 556 -4 563 -10 558 l -21 556 l -21 687 l -21 818 l -17 818 b 133 844 20 818 96 830 b 318 1090 245 881 318 986 b 307 1156 318 1112 315 1134 b 303 1168 304 1165 304 1168 b 298 1162 302 1168 300 1165 b 231 1102 281 1141 258 1120 b -1 848 121 1025 27 922 b -17 833 -4 840 -10 834 l -21 833 l -21 963 l -21 1094 l -17 1094 b 114 1113 12 1094 78 1104 b 313 1315 215 1143 289 1219 b 318 1365 317 1331 318 1348 b 255 1512 318 1423 295 1479 b 243 1533 247 1520 243 1526 b 259 1554 243 1541 250 1551 "
        },
        "\ue11a": {
            width: 465,
            c: -348.609375,
            e: 0,
            d: 347.21875,
            f: 464.140625,
            name: "clefs.percussion",
            h: 474,
            height: 697,
            g: "m 0 0 l 0 347 l 76 347 l 153 347 l 153 0 l 153 -348 l 76 -348 l 0 -348 l 0 0 m 308 -1 l 308 347 l 386 347 l 464 347 l 464 -1 l 464 -348 l 386 -348 l 308 -348 l 308 -1 "
        },
        "0": {
            width: 515,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 514.5,
            name: "zero",
            h: 525,
            height: 676,
            g: "m 236 648 b 246 648 238 648 242 648 b 288 647 261 648 283 648 b 472 513 364 634 428 587 b 514 347 502 465 514 413 b 462 163 514 272 499 218 b 257 44 409 83 333 44 b 50 163 181 44 103 83 b 0 347 14 218 0 272 b 40 513 0 413 12 465 b 236 648 87 591 155 638 m 277 615 b 253 616 273 616 261 616 b 242 616 247 616 243 616 b 170 500 193 609 181 590 b 159 348 163 447 159 398 b 166 222 159 308 161 266 b 201 91 174 138 183 106 b 257 76 215 81 235 76 b 311 91 277 76 299 81 b 347 222 330 106 338 138 b 353 348 352 266 353 308 b 344 500 353 398 351 447 b 277 615 333 587 322 606 m 257 -1 l 258 -1 l 255 -1 l 257 -1 m 257 673 l 258 673 l 255 673 l 257 673 "
        },
        "\ue16a": {
            width: 343,
            c: 0,
            e: -171.5,
            d: 568.0625,
            f: 170.140625,
            name: "scripts.umarcato",
            h: 174,
            height: 575,
            g: "m -6 566 b 0 568 -5 568 -2 568 b 14 556 6 568 12 563 b 92 286 14 555 50 433 b 170 13 166 33 170 19 b 168 13 170 13 170 13 b 161 1 168 8 167 4 l 159 0 l 122 0 l 84 0 l 81 1 b 21 195 76 5 78 -5 b -32 381 -8 297 -32 381 b -87 197 -32 381 -57 298 b -141 8 -115 94 -140 9 b -155 0 -142 2 -149 0 b -171 15 -163 0 -171 5 b -14 556 -171 18 -24 529 b -6 566 -14 561 -10 565 "
        },
        "\ue126": {
            width: 881,
            c: -490.28125,
            e: -441,
            d: 0,
            f: 439.640625,
            name: "scripts.dfermata",
            h: 449,
            height: 491,
            g: "m -428 -2 b -421 0 -427 -1 -424 0 b -406 -6 -416 0 -409 -2 b -400 -31 -401 -12 -400 -15 b -1 -352 -392 -215 -215 -352 b 58 -350 19 -352 38 -351 b 398 -31 250 -326 392 -193 b 404 -6 398 -15 400 -12 b 419 -1 408 -2 413 -1 b 439 -13 427 -1 435 -5 b 439 -29 439 -16 439 -22 b 434 -105 439 -48 438 -80 b 0 -490 397 -333 213 -490 b -68 -484 -23 -490 -44 -488 b -441 -36 -280 -452 -436 -263 b -441 -30 -441 -34 -441 -31 b -428 -2 -441 -11 -439 -5 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -57 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "
        },
        "\ue166": {
            width: 448,
            c: -175,
            e: 0,
            d: 0,
            f: 447.8125,
            name: "rests.0",
            h: 457,
            height: 175,
            g: "m 0 -87 l 0 0 l 223 0 l 447 0 l 447 -87 l 447 -175 l 223 -175 l 0 -175 l 0 -87 "
        },
        "\ue158": {
            width: 595,
            c: 88.890625,
            e: -1.359375,
            d: 694.453125,
            f: 592.078125,
            name: "pedal.*",
            h: 604,
            height: 607,
            g: "m 280 693 b 295 694 283 693 289 694 b 310 693 300 694 307 693 b 357 630 340 684 357 658 b 336 580 357 612 351 594 b 311 538 321 566 311 550 b 352 493 311 512 330 493 b 366 495 357 493 362 493 b 397 554 390 504 397 518 b 415 604 397 576 402 591 b 460 623 427 618 443 623 b 509 600 479 623 498 615 b 522 559 518 587 522 573 b 494 506 522 538 513 519 b 451 495 481 498 473 497 b 415 488 432 495 426 494 b 394 450 404 483 394 465 b 394 448 394 448 394 448 l 394 440 l 397 433 b 428 409 404 420 413 413 b 438 408 431 408 435 408 b 479 431 450 408 462 415 b 528 455 495 448 510 455 b 548 452 534 455 541 454 b 592 391 577 443 592 416 b 549 331 592 365 577 340 b 528 327 541 329 534 327 b 479 351 510 327 495 336 b 438 375 464 368 450 375 b 417 369 431 375 424 373 b 394 333 402 361 394 348 b 400 312 394 326 396 319 b 451 287 408 294 420 288 b 513 258 484 286 499 279 b 522 223 519 247 522 234 b 461 159 522 190 496 159 b 449 161 457 159 453 159 b 397 229 416 168 397 191 b 366 288 397 265 390 279 b 352 290 362 290 357 290 b 315 262 336 290 321 280 b 311 245 313 256 311 251 b 334 204 311 233 318 220 b 355 170 348 190 351 184 b 357 152 356 166 357 159 b 355 136 357 147 356 140 b 295 88 345 104 321 88 b 232 152 264 88 232 112 b 255 204 232 175 238 186 b 279 244 273 222 279 231 l 279 245 b 238 290 279 270 259 290 b 224 288 234 290 228 290 b 193 229 200 279 193 265 b 141 161 193 191 174 168 b 129 159 137 159 133 159 b 68 223 93 159 68 190 b 77 258 68 234 70 247 b 138 287 91 279 106 286 b 185 302 166 287 175 291 b 196 333 193 312 196 323 b 174 369 196 347 187 361 b 152 375 166 373 159 375 b 111 351 140 375 126 368 b 62 327 95 336 80 327 b 51 329 58 327 54 327 b -1 391 16 334 -1 363 b 53 455 -1 420 17 450 b 62 455 57 455 59 455 b 111 431 80 455 95 448 b 152 408 127 415 140 408 b 161 409 155 408 159 408 b 193 433 176 413 186 420 l 196 440 l 196 448 b 196 451 196 450 196 450 b 190 472 196 459 194 463 b 137 495 182 490 167 495 l 134 495 l 134 495 b 68 561 95 495 68 522 b 129 623 68 597 95 623 b 144 622 134 623 138 623 b 193 554 175 615 193 590 b 224 495 193 518 200 504 b 238 493 228 493 234 493 b 279 538 259 493 279 512 b 254 580 279 550 269 566 b 232 630 239 594 232 612 b 280 693 232 658 250 684 m 307 456 b 295 458 303 458 299 458 b 230 391 258 458 230 426 b 236 361 230 381 231 372 b 295 325 249 337 272 325 b 353 361 318 325 341 337 b 360 391 357 370 360 381 b 307 456 360 422 340 451 "
        },
        "\ue103": {
            width: 636,
            c: 350,
            e: -206.890625,
            d: 812.5,
            f: 428.75,
            name: "flags.dgrace",
            h: 438,
            height: 463,
            g: "m -178 812 b -172 812 -175 812 -174 812 b -145 801 -164 812 -157 809 l -114 779 l -50 736 l 13 691 l 77 647 l 141 602 l 205 559 l 269 515 l 332 472 l 394 427 b 428 393 421 409 426 405 b 428 384 428 390 428 387 b 394 350 428 365 412 350 b 375 355 387 350 382 351 b 272 426 372 356 303 404 l 209 469 l 145 513 l 83 556 l -34 638 l -87 675 l -151 719 b -202 759 -196 750 -198 752 b -206 776 -205 765 -206 770 b -178 812 -206 793 -196 809 "
        },
        "\ue128": {
            width: 781,
            c: -505.5625,
            e: -390.640625,
            d: 0,
            f: 389.28125,
            name: "scripts.dlongfermata",
            h: 397,
            height: 506,
            g: "m -378 -2 b -368 -1 -375 -1 -374 -1 b -349 -13 -360 -1 -353 -5 l -348 -16 l -348 -176 l -348 -337 l 0 -337 l 347 -337 l 347 -176 l 347 -16 l 348 -13 b 367 0 352 -5 360 0 b 387 -13 375 0 383 -5 l 389 -16 l 389 -252 l 389 -490 l 387 -493 b 377 -504 385 -498 381 -501 l 372 -505 l 0 -505 l -374 -505 l -378 -504 b -389 -493 -382 -501 -386 -498 l -390 -490 l -390 -252 l -390 -16 l -389 -13 b -378 -2 -386 -8 -382 -4 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -58 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "
        },
        "\ue147": {
            width: 1181,
            c: -338.890625,
            e: -590.71875,
            d: 175,
            f: 589.359375,
            name: "scripts.upprall",
            h: 601,
            height: 514,
            g: "m -367 173 b -362 175 -366 175 -364 175 b -351 173 -357 175 -353 173 b -262 86 -348 172 -328 151 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 175 -36 173 -38 172 b -25 175 -29 175 -28 175 b -16 173 -23 175 -19 173 b 72 86 -13 172 6 151 b 157 0 119 37 157 0 b 227 84 159 0 189 37 b 303 175 298 173 296 172 b 308 175 304 175 307 175 b 318 173 313 175 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 75 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -175 401 -176 b 387 -175 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 144 -86 213 0 182 -38 b 68 -175 73 -175 74 -173 b 62 -176 66 -176 65 -176 b 53 -175 59 -176 55 -175 b -35 -87 50 -173 29 -152 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -175 -261 -175 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -175 -276 -176 -280 -175 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -304 -548 -254 -544 -280 b -533 -318 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -367 173 -375 169 -372 172 "
        },
        "\ue130": {
            width: 361,
            c: -513.890625,
            e: -108.890625,
            d: 633.328125,
            f: 251.8125,
            name: "accidentals.flat.arrowdown",
            h: 257,
            height: 1148,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 93 -148 206 -40 179 -70 l 38 -200 l 23 -215 l 20 -218 l 20 -241 b 19 -268 20 -261 20 -266 b 19 -270 19 -269 19 -270 b 19 -270 19 -270 19 -270 b 47 -263 21 -270 39 -266 b 78 -250 55 -261 69 -255 b 89 -247 83 -247 85 -247 b 107 -265 99 -247 107 -254 l 107 -265 l 107 -270 l 102 -280 b 19 -493 65 -338 34 -418 b 0 -513 14 -508 10 -513 b -20 -488 -12 -513 -16 -508 b -103 -280 -38 -409 -66 -338 l -108 -270 l -108 -265 l -108 -265 b -91 -247 -108 -254 -100 -247 b -80 -250 -87 -247 -84 -247 b -49 -263 -70 -255 -57 -261 b -20 -270 -40 -266 -23 -270 b -20 -270 -20 -270 -20 -270 b -20 -268 -20 -270 -20 -269 b -21 175 -21 -266 -21 -208 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        Sm: {
            width: 624,
            c: -27.78125,
            e: 46.28125,
            d: 376.390625,
            f: 669.671875,
            name: "m",
            h: 563,
            height: 405,
            g: "m 183 376 b 189 376 185 376 187 376 b 212 375 197 376 208 376 b 265 337 234 369 253 355 b 274 318 268 331 273 320 b 274 316 274 318 274 316 b 280 323 276 316 276 319 b 311 358 288 337 299 348 b 319 366 315 361 318 365 b 356 376 326 373 340 376 b 382 372 364 376 374 375 b 428 337 400 366 417 352 b 436 318 431 331 436 320 b 438 316 436 318 436 316 b 442 323 438 316 439 319 b 475 358 451 337 462 348 b 483 366 477 361 481 365 b 518 376 488 373 503 376 b 544 373 528 376 536 376 b 604 286 579 361 604 326 b 597 250 604 273 601 258 b 543 63 596 247 544 70 b 541 54 543 61 541 55 b 540 44 540 51 540 47 b 552 23 540 33 545 23 b 552 23 552 23 552 23 b 647 126 586 29 627 72 b 658 138 651 136 653 138 b 660 138 660 138 660 138 b 669 129 666 137 669 136 b 654 88 669 122 665 109 b 562 -12 631 43 602 9 l 549 -19 b 521 -27 540 -25 530 -27 b 447 30 490 -27 458 -4 b 443 58 445 38 443 48 b 450 93 443 72 446 84 b 504 279 453 97 504 272 b 507 288 506 283 506 287 b 509 298 507 293 509 295 b 491 326 509 311 502 320 b 487 327 490 327 488 327 b 479 325 484 327 483 326 b 441 270 462 316 443 288 b 435 250 441 265 436 254 b 398 127 434 248 419 195 b 362 4 379 61 362 5 b 328 -1 359 -1 362 -1 b 314 -1 323 -1 319 -1 b 302 -1 310 -1 306 -1 b 266 4 266 -1 269 -1 b 265 6 265 5 265 5 b 303 144 265 13 272 34 b 343 279 325 216 343 276 b 344 288 343 281 344 286 b 345 298 345 291 345 295 b 330 326 345 311 340 320 b 323 327 328 327 325 327 b 317 325 322 327 321 326 b 279 270 300 316 281 288 b 273 250 279 265 274 254 b 236 127 272 248 255 195 b 200 4 216 61 200 5 b 164 -1 197 -1 198 -1 b 151 -1 161 -1 156 -1 b 140 -1 147 -1 142 -1 b 103 4 104 -1 106 -1 b 103 6 103 5 103 5 b 141 144 103 13 108 34 b 181 279 161 216 179 276 b 182 288 181 281 181 286 b 183 298 182 291 183 295 b 168 325 183 311 178 320 b 160 327 166 326 163 327 b 141 320 156 327 151 325 b 69 230 112 305 85 272 b 57 215 65 218 62 215 b 55 215 57 215 55 215 b 46 225 49 215 46 218 b 59 261 46 231 50 243 b 151 363 81 306 112 341 b 161 369 155 365 160 368 b 183 376 166 372 174 375 "
        },
        "\ue1ad": {
            width: 394,
            c: -343.0625,
            e: -1.359375,
            d: 341.671875,
            f: 392,
            name: "noteheads.s1slash",
            h: 400,
            height: 686,
            g: "m 253 341 b 317 341 276 341 298 341 b 363 341 344 341 362 341 b 392 309 379 340 392 326 l 392 309 b 266 -320 392 305 269 -311 b 246 -341 262 -330 255 -337 b 136 -343 243 -343 189 -343 b 21 -341 80 -343 24 -343 b -1 -311 8 -337 -1 -325 b 0 -311 -1 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 253 341 147 341 151 341 m 321 276 b 250 277 321 277 307 277 b 179 276 194 277 179 277 b 123 -1 179 276 153 151 l 68 -279 l 140 -279 b 167 -279 149 -279 159 -279 b 210 -279 191 -279 210 -279 b 321 276 210 -279 321 275 "
        },
        "\ue19d": {
            width: 710,
            c: 0,
            e: -355.25,
            d: 1069.453125,
            f: 353.890625,
            name: "accordion.accBayanbase",
            h: 361,
            height: 1070,
            g: "m -355 534 l -355 1069 l 0 1069 l 353 1069 l 353 534 l 353 0 l 0 0 l -355 0 l -355 534 m 325 881 l 325 1041 l -1 1041 l -326 1041 l -326 881 l -326 722 l -1 722 l 325 722 l 325 881 m 325 534 l 325 694 l 0 694 l -326 694 l -326 534 l -326 375 l 0 375 l 325 375 l 325 534 m 325 187 l 325 347 l 0 347 l -326 347 l -326 187 l -326 27 l 0 27 l 325 27 l 325 187 "
        },
        "\ue19c": {
            width: 1391,
            c: 0,
            e: -695.53125,
            d: 1416.65625,
            f: 694.171875,
            name: "accordion.accStdbase",
            h: 708,
            height: 1417,
            g: "m -50 1415 b 1 1416 -32 1415 -16 1416 b 683 829 333 1416 626 1169 b 694 706 690 787 694 747 b -1 0 694 323 389 0 b -695 706 -385 0 -695 315 b -50 1413 -695 1080 -415 1387 l -50 1415 m 44 1386 b -2 1387 28 1387 13 1387 b -526 1125 -204 1387 -400 1290 b -564 1069 -539 1108 -564 1070 b -1 1068 -564 1069 -311 1068 b 563 1069 308 1068 563 1069 b 524 1125 563 1070 537 1108 b 44 1386 406 1277 235 1372 m 590 1022 l 581 1040 l -1 1040 l -582 1040 l -592 1022 b -666 729 -637 931 -666 816 l -666 720 l -1 720 l 665 720 l 665 729 b 590 1022 665 816 635 931 m 665 686 l 665 693 l -1 693 l -666 693 l -666 686 b -590 391 -666 597 -637 480 l -582 375 l -1 375 l 579 375 l 589 391 b 665 686 634 480 665 597 m 558 337 l 563 345 l -1 345 l -564 345 l -559 337 b 0 27 -436 143 -223 27 b 148 44 49 27 99 33 b 558 337 315 83 465 191 "
        },
        8: {
            width: 489,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 488.640625,
            name: "eight",
            h: 499,
            height: 676,
            g: "m 217 648 b 245 650 225 648 235 650 b 453 516 343 650 430 595 b 458 479 455 504 458 491 b 412 370 458 440 441 398 b 411 369 412 369 411 369 b 415 365 411 368 412 368 b 488 231 462 331 488 281 b 472 165 488 208 483 186 b 243 43 434 86 338 43 b 63 104 178 43 112 62 b 0 233 20 140 0 186 b 73 365 0 283 24 331 l 77 369 l 72 375 b 29 476 42 406 29 441 b 217 648 29 558 103 636 m 258 605 b 242 606 253 605 247 606 b 157 552 198 606 157 580 b 160 541 157 548 159 544 b 319 413 176 504 242 452 l 337 404 l 338 406 b 359 476 352 429 359 452 b 258 605 359 537 318 595 m 138 326 b 130 330 134 329 130 330 b 130 330 130 330 130 330 b 107 305 127 330 112 313 b 84 231 91 281 84 256 b 243 86 84 156 151 86 b 249 87 245 86 246 87 b 347 156 303 88 347 120 b 344 172 347 162 345 168 b 156 319 325 227 257 281 b 138 326 151 322 144 325 m 243 -1 l 245 -1 l 242 -1 l 243 -1 m 243 673 l 245 673 l 242 673 l 243 673 "
        },
        "\ue179": {
            width: 147,
            c: -255.5625,
            e: -73.5,
            d: 0,
            f: 72.140625,
            name: "scripts.dstaccatissimo",
            h: 74,
            height: 256,
            g: "m -36 -126 b 0 0 -17 -56 -1 0 b 70 -254 0 0 70 -250 l 72 -255 l 0 -255 l -73 -255 l -72 -254 b -36 -126 -72 -254 -55 -195 "
        },
        "\ue154": {
            width: 552,
            c: -1.390625,
            e: -1.359375,
            d: 694.453125,
            f: 549.890625,
            name: "pedal.P",
            h: 561,
            height: 697,
            g: "m 296 693 b 314 694 302 694 307 694 b 386 686 337 694 366 690 b 548 498 480 661 548 580 b 548 481 548 493 548 487 b 455 395 541 426 499 395 b 370 462 420 395 383 418 b 362 497 364 477 362 488 b 377 515 362 509 367 515 b 393 501 386 515 390 511 b 432 475 397 484 413 475 b 470 487 445 475 458 479 b 491 530 484 497 491 511 b 490 544 491 534 491 540 b 333 661 479 606 411 658 l 323 662 l 315 647 b 269 525 285 591 269 556 b 321 431 269 493 287 466 b 349 395 338 413 343 408 b 363 343 359 379 363 362 b 359 312 363 333 362 322 b 285 158 348 266 318 206 b 281 152 283 155 281 152 b 281 152 281 152 281 152 b 287 154 283 152 284 152 b 318 155 298 154 308 155 b 461 98 371 155 419 136 l 464 97 l 495 122 b 534 148 528 148 528 148 b 549 133 544 148 549 143 l 549 133 b 549 130 549 131 549 131 b 509 91 549 125 548 123 l 436 33 b 390 0 397 0 396 0 b 374 15 381 0 377 4 b 268 105 359 69 314 105 b 250 104 262 105 257 105 l 243 102 l 234 90 b 155 1 201 50 159 2 b 147 -1 152 0 149 -1 b 130 15 138 -1 130 6 b 132 20 130 18 132 19 b 136 31 133 22 134 27 b 220 131 149 75 178 109 b 231 137 225 134 230 136 b 302 279 280 202 302 244 b 265 336 302 300 295 309 b 209 443 234 363 213 402 b 209 455 209 447 209 451 b 279 648 209 502 232 565 l 285 659 l 283 659 b 176 627 238 654 210 645 b 57 477 111 594 66 538 b 55 459 55 472 55 465 b 72 409 55 437 61 415 b 93 404 78 405 87 404 b 152 468 123 404 151 431 b 168 488 153 483 157 488 b 185 462 181 488 185 483 l 185 461 b 137 344 183 409 168 369 b 78 322 119 329 98 322 b 13 361 50 322 25 336 b -1 426 4 380 -1 402 b 89 611 -1 488 32 559 b 296 693 147 659 210 686 "
        },
        "\ue14b": {
            width: 1195,
            c: -300,
            e: -597.53125,
            d: 327.78125,
            f: 596.171875,
            name: "scripts.downmordent",
            h: 608,
            height: 628,
            g: "m -533 325 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 318 b -504 305 -504 305 -504 305 b -513 284 -504 300 -504 300 b -556 112 -541 226 -556 168 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 175 -367 169 -363 175 b -351 175 -353 175 -352 175 b -254 86 -343 175 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 175 -21 175 -20 175 b -8 173 -14 175 -10 173 b 155 11 -5 172 43 123 l 166 -1 l 168 1 l 170 4 l 170 130 b 171 261 170 256 170 258 b 191 275 175 269 183 275 b 205 268 196 275 201 272 b 212 158 212 262 210 273 l 212 56 l 257 112 b 311 173 304 172 304 172 b 317 175 313 175 314 175 b 326 173 319 175 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 75 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -175 409 -176 b 396 -175 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 216 -6 221 -1 219 -2 l 212 -12 l 212 -147 b 212 -211 212 -173 212 -194 b 205 -293 212 -297 210 -287 b 191 -300 201 -297 196 -300 b 172 -287 183 -300 175 -295 b 170 -175 171 -284 171 -284 l 170 -63 l 127 -118 b 73 -176 84 -170 80 -176 b 68 -176 72 -176 70 -176 b -27 -87 59 -175 65 -180 b -114 0 -74 -38 -112 0 b -182 -86 -114 0 -145 -38 b -258 -175 -253 -175 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -175 -268 -176 -272 -175 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -75 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 225 b -533 325 -548 311 -540 322 "
        },
        "\ue190": {
            width: 374,
            c: -158.328125,
            e: -25.859375,
            d: 156.9375,
            f: 347.078125,
            name: "arrowheads.open.0M1",
            h: 354,
            height: 316,
            g: "m 313 155 b 321 156 315 156 318 156 b 329 156 325 156 328 156 b 347 130 341 152 347 141 b 338 109 347 123 344 115 b 288 79 332 105 307 88 b 126 6 236 50 186 26 b 104 0 114 2 104 0 b 126 -8 104 -1 114 -4 b 326 -104 201 -33 268 -65 b 343 -118 337 -111 340 -112 b 347 -131 345 -122 347 -127 b 321 -158 347 -145 337 -158 b 296 -148 314 -158 311 -158 b 17 -31 223 -100 121 -56 l -4 -27 b -25 0 -19 -23 -25 -15 b -4 26 -25 13 -19 22 l 17 30 b 296 147 121 55 223 98 b 313 155 307 152 310 155 "
        },
        5: {
            width: 410,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 409.6875,
            name: "five",
            h: 418,
            height: 676,
            g: "m 47 637 b 53 638 49 638 50 638 b 69 634 55 638 61 637 b 210 611 114 619 161 611 b 363 634 259 611 311 619 b 382 638 372 637 378 638 b 392 634 386 638 389 637 b 397 623 396 630 397 627 b 393 611 397 620 396 616 b 298 505 368 552 338 520 b 212 494 277 498 246 494 b 65 518 163 494 106 502 b 61 518 62 518 61 518 b 61 518 61 518 61 518 b 51 408 61 518 51 412 b 51 408 51 408 51 408 b 51 408 51 408 51 408 b 61 412 53 408 55 409 b 125 434 80 422 103 430 b 185 441 145 440 166 441 b 409 244 310 441 409 354 b 401 191 409 227 406 209 b 197 43 375 105 287 43 b 159 47 183 43 171 44 b 23 123 112 56 61 86 b 0 180 6 140 0 159 b 76 261 0 220 31 261 b 92 259 81 261 87 259 b 152 183 132 251 152 216 b 100 112 152 152 134 122 b 95 111 98 112 95 111 b 95 111 95 111 95 111 b 129 98 95 109 119 101 b 148 97 136 97 141 97 b 264 236 206 97 261 158 b 265 248 265 240 265 244 b 210 398 265 312 243 373 b 179 408 201 406 194 408 b 174 408 178 408 176 408 b 53 369 130 408 88 394 b 34 359 39 359 38 359 b 17 375 24 359 17 365 b 39 629 17 384 38 626 b 47 637 40 631 43 636 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "
        },
        "\ue19e": {
            width: 171,
            c: -87.5,
            e: -85.75,
            d: 86.109375,
            f: 84.390625,
            name: "accordion.accDot",
            h: 86,
            height: 175,
            g: "m -17 84 b 0 86 -12 86 -6 86 b 84 -1 46 86 84 45 b 83 -18 84 -6 84 -12 b -1 -87 73 -62 36 -87 b -66 -55 -25 -87 -49 -77 b -85 -1 -80 -38 -85 -19 b -17 84 -85 37 -59 75 "
        },
        "\ue11e": {
            width: 547,
            c: -816.671875,
            e: -1.359375,
            d: 836.109375,
            f: 544.4375,
            name: "clefs.tab_change",
            h: 556,
            height: 1654,
            g: "m 475 834 b 483 836 477 834 480 836 b 514 804 500 836 514 820 b 509 786 514 798 513 791 b 356 743 496 765 424 744 l 341 743 l 341 738 b 344 672 343 716 344 694 b 247 351 344 533 306 401 b 144 315 217 326 185 315 b 121 316 136 315 129 315 b 83 340 98 318 88 323 b 81 348 83 343 81 345 b 114 380 81 366 98 380 b 137 369 122 380 130 377 b 147 365 140 366 142 365 b 191 400 159 365 178 379 b 251 673 230 459 251 561 b 250 740 251 695 251 718 b 239 758 249 756 249 755 b 194 763 224 762 209 763 b 103 712 153 763 121 745 b 68 690 95 697 81 690 b 29 730 47 690 29 704 b 77 786 29 750 43 766 b 198 815 111 805 155 815 b 262 806 220 815 243 812 b 351 794 294 798 323 794 b 462 827 396 794 435 805 b 475 834 466 831 469 833 m 334 290 b 340 290 336 290 338 290 b 386 244 364 290 383 272 b 470 -154 397 115 439 -81 b 509 -195 481 -177 498 -195 b 510 -195 509 -195 510 -195 b 518 -194 513 -194 515 -194 b 544 -223 533 -194 544 -208 b 530 -244 544 -231 540 -240 b 510 -248 526 -247 519 -248 b 450 -236 491 -248 466 -244 b 351 -68 401 -211 381 -176 b 333 5 344 -44 333 1 b 333 5 333 5 333 5 b 326 -8 333 5 329 -1 b 289 -73 313 -34 302 -54 l 281 -84 l 284 -86 b 328 -102 295 -95 313 -102 b 344 -116 340 -104 344 -106 b 323 -131 344 -125 340 -129 b 304 -134 317 -133 311 -134 b 259 -123 289 -134 273 -130 l 254 -120 l 251 -125 b 78 -237 198 -183 141 -222 b 29 -243 63 -241 44 -243 b 16 -241 24 -243 19 -243 b -1 -218 5 -237 -1 -227 b 17 -193 -1 -206 5 -195 b 23 -191 19 -191 20 -191 b 29 -191 24 -191 27 -191 b 32 -191 29 -191 31 -191 b 175 -97 70 -191 132 -152 b 294 237 246 -12 287 105 b 306 273 295 256 298 263 b 334 290 313 281 323 288 m 292 -286 b 311 -286 299 -286 306 -286 b 517 -400 405 -286 496 -334 b 519 -420 518 -406 519 -413 b 427 -536 519 -462 485 -505 l 416 -541 l 427 -547 b 528 -681 491 -580 528 -631 b 518 -725 528 -695 525 -711 b 341 -816 488 -783 417 -816 b 216 -786 299 -816 255 -806 b 186 -751 194 -775 186 -765 b 187 -743 186 -748 186 -745 l 187 -740 l 186 -743 b 66 -784 151 -772 114 -784 b 59 -784 65 -784 62 -784 b 16 -768 31 -784 23 -781 b 13 -754 14 -763 13 -758 b 43 -723 13 -737 27 -723 b 62 -730 50 -723 55 -726 b 70 -734 66 -734 66 -734 b 151 -666 96 -734 130 -705 b 167 -630 153 -661 155 -656 b 213 -444 193 -570 209 -506 b 215 -412 215 -437 215 -426 b 212 -355 215 -386 213 -356 b 212 -354 212 -355 212 -354 b 176 -369 209 -354 187 -363 b 106 -433 145 -386 119 -409 b 69 -458 98 -450 83 -458 b 36 -437 57 -458 44 -451 b 31 -418 32 -431 31 -425 b 53 -379 31 -405 38 -391 b 292 -286 111 -325 191 -294 m 336 -338 b 310 -337 329 -338 318 -337 b 300 -338 304 -337 300 -337 b 300 -338 300 -338 300 -338 b 306 -408 303 -345 306 -381 b 306 -415 306 -411 306 -413 b 247 -658 304 -497 284 -579 b 217 -709 235 -683 228 -695 b 210 -718 215 -713 212 -716 b 210 -718 210 -718 210 -718 b 215 -718 210 -718 212 -718 b 217 -718 215 -718 216 -718 b 220 -718 217 -718 219 -718 b 242 -727 228 -718 232 -719 b 337 -765 273 -752 303 -763 b 341 -765 338 -765 340 -765 b 436 -681 396 -765 436 -729 b 435 -665 436 -676 436 -670 b 319 -566 427 -618 381 -579 b 299 -558 307 -563 304 -562 b 292 -540 294 -552 292 -545 b 317 -513 292 -527 302 -515 b 423 -445 364 -508 409 -480 b 428 -422 427 -437 428 -430 b 336 -338 428 -384 392 -350 "
        },
        7: {
            width: 443,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 442.359375,
            name: "seven",
            h: 451,
            height: 676,
            g: "m 147 648 b 166 650 153 650 160 650 b 313 598 217 650 273 630 b 340 587 323 588 328 587 l 341 587 b 412 629 367 587 390 601 b 427 638 416 636 421 638 b 439 633 431 638 435 637 b 442 623 441 630 442 629 b 430 569 442 616 439 604 b 352 369 408 493 377 411 b 300 259 325 325 313 298 b 273 84 283 205 273 140 b 265 55 273 65 272 59 l 261 54 l 181 54 l 99 54 l 96 55 b 91 61 95 56 92 59 l 89 63 l 89 77 b 147 263 89 133 111 202 b 261 401 176 313 212 355 b 378 541 315 450 349 490 l 382 548 l 375 544 b 240 495 333 512 285 495 b 129 536 198 495 160 509 b 84 561 108 552 95 561 b 76 559 81 561 78 561 b 31 487 59 555 43 530 b 14 470 27 473 24 470 b 1 477 8 470 4 472 l 0 480 l 0 554 l 0 627 l 1 630 b 16 638 4 636 9 638 b 23 636 17 638 20 637 b 49 626 36 626 39 626 b 96 638 59 626 80 630 b 104 640 99 638 102 640 b 117 644 107 641 112 643 b 147 648 125 645 137 648 m 220 -1 l 221 -1 l 219 -1 l 220 -1 m 220 673 l 221 673 l 219 673 l 220 673 "
        },
        ",": {
            width: 196,
            c: -119.4375,
            e: -1.359375,
            d: 233.328125,
            f: 193.28125,
            name: "comma",
            h: 197,
            height: 354,
            g: "m 78 233 b 87 233 81 233 84 233 b 187 140 132 233 174 195 b 193 102 190 127 193 115 b 43 -113 193 22 136 -62 b 27 -119 36 -116 31 -119 b 19 -108 21 -119 19 -115 b 29 -97 19 -102 20 -101 b 102 13 73 -72 102 -27 b 92 51 102 26 98 40 l 91 54 l 84 54 b 8 104 53 54 21 75 b -1 143 1 116 -1 130 b 78 233 -1 187 31 227 "
        },
        "\ue14c": {
            width: 1181,
            c: -176.390625,
            e: -590.71875,
            d: 337.5,
            f: 589.359375,
            name: "scripts.prallup",
            h: 601,
            height: 519,
            g: "m 544 336 b 553 337 548 337 551 337 b 575 313 563 337 570 330 b 589 226 583 286 589 256 b 517 8 589 152 563 76 b 464 -58 507 -4 503 -9 l 401 -136 b 362 -176 372 -172 370 -176 b 357 -176 360 -176 359 -176 b 261 -87 349 -175 355 -180 b 175 0 215 -38 175 0 b 106 -86 175 0 144 -38 b 29 -175 35 -175 36 -173 b 24 -176 28 -176 27 -176 b 14 -175 21 -176 17 -175 b -73 -87 12 -173 -8 -152 b -159 0 -121 -38 -159 0 b -228 -86 -160 0 -190 -38 b -304 -175 -299 -175 -298 -173 b -310 -176 -306 -176 -308 -176 b -319 -175 -314 -176 -318 -175 b -483 -12 -323 -173 -359 -137 l -495 0 l -524 -34 b -562 -77 -553 -73 -556 -76 b -568 -79 -564 -79 -566 -79 b -590 -58 -581 -79 -590 -69 b -588 -50 -590 -55 -589 -52 b -412 170 -585 -43 -417 165 b -398 175 -408 173 -402 175 b -389 173 -394 175 -392 175 b -300 86 -387 172 -366 151 b -215 -1 -254 37 -215 -1 b -145 84 -215 -1 -183 37 b -69 173 -74 173 -76 172 b -63 175 -68 175 -66 175 b -54 173 -61 175 -57 173 b 34 86 -51 172 -31 151 b 119 -1 81 37 119 -1 b 189 84 121 -1 151 37 b 265 173 259 173 258 172 b 270 175 266 175 269 175 b 280 173 274 175 279 173 b 370 84 283 172 303 151 b 455 -1 416 37 455 -1 l 455 -1 b 476 25 455 -1 469 15 b 547 226 522 87 547 159 b 534 302 547 252 543 279 b 532 318 533 308 532 313 b 544 336 532 326 536 333 "
        },
        "\ue19a": {
            width: 710,
            c: 0,
            e: -355.25,
            d: 722.21875,
            f: 353.890625,
            name: "accordion.accFreebase",
            h: 361,
            height: 723,
            g: "m -27 720 b -13 722 -24 720 -20 722 b 42 719 4 722 34 720 b 343 447 190 700 308 591 b 353 361 349 418 353 390 b 84 9 353 197 245 50 b 0 0 55 2 27 0 b -344 273 -160 0 -306 109 b -355 359 -351 302 -355 331 b -39 719 -355 540 -221 701 l -27 720 m 39 691 b -13 693 32 691 4 693 b -25 693 -19 693 -23 693 b -326 383 -190 676 -314 548 l -326 375 l -1 375 l 325 375 l 325 383 b 39 691 314 541 197 668 m 325 337 l 325 345 l -1 345 l -326 345 l -326 337 b -55 33 -315 184 -204 58 b -1 29 -34 29 -29 29 b 54 33 28 29 32 29 b 325 337 201 58 314 184 "
        },
        "\ue111": {
            width: 160,
            c: -194.4375,
            e: -80.3125,
            d: 193.0625,
            f: 78.9375,
            name: "scripts.lvarcomma",
            h: 81,
            height: 389,
            g: "m 63 191 b 69 193 65 193 66 193 b 77 188 72 193 76 191 b 78 183 78 187 78 186 b 74 158 78 179 77 172 l 66 115 b 9 -161 49 30 10 -158 b -10 -187 6 -172 -1 -181 b -34 -194 -17 -191 -25 -194 b -80 -147 -58 -194 -80 -175 b -80 -141 -80 -144 -80 -143 b 9 70 -80 -134 -73 -118 l 49 163 b 63 191 59 188 61 190 "
        },
        "\ue1a2": {
            width: 437,
            c: -193.0625,
            e: 0,
            d: 191.671875,
            f: 436.921875,
            name: "noteheads.s2diamond",
            h: 446,
            height: 386,
            g: "m 213 190 b 217 191 215 191 216 191 b 231 184 223 191 228 188 b 249 154 240 168 246 159 b 419 18 292 91 348 45 b 436 -1 435 11 436 8 b 424 -16 436 -9 434 -13 b 308 -87 394 -26 340 -59 b 231 -186 276 -118 257 -143 b 219 -193 228 -191 225 -193 b 198 -175 209 -193 208 -191 b 47 -33 161 -113 110 -63 b 10 -16 34 -26 17 -19 b 0 -1 2 -13 0 -9 b 17 18 0 8 1 11 b 198 173 95 48 156 101 b 213 190 206 187 208 188 "
        },
        "\ue194": {
            width: 374,
            c: -158.328125,
            e: -25.859375,
            d: 156.9375,
            f: 347.078125,
            name: "arrowheads.close.0M1",
            h: 354,
            height: 316,
            g: "m 313 155 b 321 156 315 156 318 156 b 334 154 325 156 330 155 b 347 131 343 148 347 140 b 341 113 347 126 345 120 b 336 101 340 111 337 105 b 311 -1 319 69 311 34 b 341 -115 311 -40 322 -79 b 347 -133 345 -120 347 -127 b 321 -158 347 -147 337 -158 b 296 -148 314 -158 311 -158 b 6 -29 221 -97 111 -52 b -13 -23 -10 -26 -10 -26 b -25 -1 -21 -19 -25 -9 b -12 23 -25 8 -21 18 b 5 27 -9 23 -2 26 b 296 147 115 52 220 95 b 313 155 307 152 310 155 "
        },
        "\ue18c": {
            width: 846,
            c: -200,
            e: -423.3125,
            d: 198.609375,
            f: 421.9375,
            name: "scripts.turn",
            h: 431,
            height: 399,
            g: "m -262 197 b -247 197 -257 197 -253 197 b -118 162 -210 197 -163 184 b 40 45 -61 134 -13 98 b 277 -95 119 -33 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -55 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 201 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 136 b 421 22 421 37 421 29 b 245 -200 421 -93 338 -200 b 238 -198 243 -200 240 -200 b -44 -47 148 -194 50 -141 b -250 86 -114 22 -183 66 b -295 94 -270 91 -283 94 b -315 91 -302 94 -307 94 b -381 4 -356 81 -381 43 b -355 -56 -381 -18 -372 -40 b -298 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -178 -69 -200 -58 -189 -62 b -151 -122 -160 -81 -151 -101 b -171 -168 -151 -138 -157 -155 b -239 -195 -185 -181 -213 -193 b -257 -197 -245 -197 -250 -197 b -423 -5 -352 -197 -423 -109 b -412 65 -423 16 -419 40 b -262 197 -389 137 -329 188 "
        },
        "\ue174": {
            width: 348,
            c: -823.609375,
            e: 0,
            d: 822.21875,
            f: 347.078125,
            name: "accidentals.sharp.arrowboth",
            h: 354,
            height: 1647,
            g: "m 231 819 b 239 822 234 820 236 822 b 251 816 243 822 249 819 b 258 801 255 812 255 811 b 341 587 273 726 304 647 l 347 579 l 347 573 l 347 572 b 329 554 347 561 338 554 b 318 556 325 554 322 555 b 264 577 302 568 283 575 b 258 579 261 577 259 579 b 258 577 258 579 258 579 b 258 576 258 577 258 577 b 259 416 259 575 259 543 l 259 258 l 285 265 b 318 270 302 269 311 270 b 336 259 328 270 332 268 b 337 208 336 256 337 233 b 336 158 337 184 336 159 b 302 140 332 148 329 147 b 259 130 266 131 259 130 b 259 65 259 130 259 104 b 259 20 259 51 259 36 l 259 -88 l 285 -81 b 318 -76 302 -77 311 -76 b 332 -81 325 -76 328 -77 b 337 -123 336 -87 337 -86 l 337 -138 l 337 -154 b 332 -195 337 -191 336 -190 b 281 -211 328 -200 328 -200 b 262 -216 272 -213 264 -216 l 259 -216 l 259 -350 l 259 -483 l 258 -487 b 239 -500 254 -495 246 -500 b 220 -487 231 -500 223 -495 l 219 -483 l 217 -355 l 217 -227 l 216 -227 l 194 -233 l 152 -244 b 129 -250 140 -247 130 -250 b 127 -411 127 -250 127 -258 b 127 -576 127 -548 127 -573 b 126 -579 126 -577 126 -579 b 127 -580 126 -579 126 -580 b 133 -579 129 -580 130 -579 b 186 -558 152 -576 170 -569 b 197 -555 190 -556 194 -555 b 215 -573 206 -555 215 -562 l 215 -575 l 215 -580 l 209 -588 b 126 -802 172 -648 141 -727 b 107 -823 123 -818 118 -823 b 87 -798 95 -823 91 -818 b 5 -588 69 -719 40 -648 l 0 -580 l 0 -575 b 0 -573 0 -575 0 -575 b 16 -555 0 -562 6 -555 b 27 -558 20 -555 24 -556 b 81 -579 44 -569 62 -576 b 87 -580 84 -579 85 -580 b 88 -579 88 -580 88 -580 b 87 -576 88 -579 88 -577 b 87 -416 87 -573 87 -550 b 85 -261 87 -270 87 -261 b 85 -261 85 -261 85 -261 b 32 -273 74 -263 35 -273 b 13 -261 24 -273 16 -268 b 12 -209 12 -256 12 -256 l 12 -162 l 13 -158 b 74 -134 17 -148 17 -148 l 87 -131 l 87 -22 b 85 86 87 79 87 86 b 85 86 85 86 85 86 b 32 75 74 83 35 75 b 13 86 24 75 16 79 b 12 137 12 90 12 90 l 12 184 l 13 188 b 73 212 17 198 17 198 l 87 215 l 87 348 l 87 481 l 88 486 b 107 498 92 494 99 498 b 126 486 115 498 122 494 l 127 481 l 127 354 l 127 226 l 133 226 b 172 236 136 227 153 231 l 212 247 l 217 248 l 217 409 b 219 575 217 547 217 572 b 219 577 219 576 219 577 b 219 579 219 579 219 579 b 213 577 217 579 216 577 b 159 556 194 575 175 568 b 148 554 155 555 152 554 b 130 572 138 554 130 561 l 130 573 l 130 579 l 136 587 b 219 797 172 647 200 718 b 231 819 221 813 224 816 m 217 9 b 217 119 217 70 217 119 l 217 119 b 194 113 217 119 206 116 l 152 102 b 129 97 140 100 130 97 b 127 -12 127 97 127 91 l 127 -122 l 133 -120 b 172 -111 136 -119 153 -115 l 212 -101 l 217 -98 l 217 9 "
        },
        "\ue102": {
            width: 636,
            c: -813.890625,
            e: -206.890625,
            d: -351.390625,
            f: 428.75,
            name: "flags.ugrace",
            h: 438,
            height: 463,
            g: "m 389 -351 b 394 -351 390 -351 393 -351 b 428 -386 413 -351 428 -368 b 428 -394 428 -388 428 -391 b 394 -429 426 -406 421 -411 l 332 -473 l 269 -516 l 205 -561 l 141 -604 l 77 -648 l 13 -693 l -50 -737 l -114 -780 l -145 -802 b -171 -813 -157 -811 -163 -813 b -175 -813 -172 -813 -174 -813 b -206 -777 -194 -812 -206 -795 b -202 -761 -206 -772 -205 -766 b -87 -676 -197 -752 -206 -758 l -34 -640 l 83 -558 l 145 -515 l 209 -470 l 272 -427 b 389 -351 375 -356 381 -352 "
        },
        "\ue198": {
            width: 299,
            c: 0,
            e: -149.71875,
            d: 384.71875,
            f: 148.359375,
            name: "scripts.upedaltoe",
            h: 151,
            height: 392,
            g: "m -137 381 b -130 383 -134 383 -133 383 b -111 372 -122 383 -114 379 b -55 225 -110 370 -85 305 b 0 80 -25 145 -1 80 b 54 225 0 80 24 145 b 112 377 114 384 110 373 b 127 384 118 381 122 384 b 148 362 138 384 148 375 l 148 356 l 83 183 b 16 9 47 88 17 11 b -1 0 12 2 5 0 b -14 5 -5 0 -10 1 b -84 183 -19 9 -13 -6 l -149 356 l -149 362 b -137 381 -149 372 -145 379 "
        },
        "\ue167": {
            width: 738,
            c: -175,
            e: 0,
            d: 15.28125,
            f: 737.71875,
            name: "rests.0o",
            h: 753,
            height: 191,
            g: "m 9 13 b 208 15 10 15 51 15 b 368 15 251 15 304 15 l 726 15 l 729 12 b 737 -1 735 9 737 4 b 729 -15 737 -6 735 -11 l 726 -16 l 660 -16 l 592 -16 l 592 -95 l 592 -175 l 368 -175 l 144 -175 l 144 -95 l 144 -16 l 77 -16 l 9 -16 l 6 -15 b 0 -1 1 -11 0 -6 b 9 13 0 5 2 11 "
        },
        "\ue140": {
            width: 427,
            c: -22.21875,
            e: -209.609375,
            d: 20.828125,
            f: 208.25,
            name: "scripts.tenuto",
            h: 213,
            height: 44,
            g: "m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -6 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -6 b -197 19 -209 6 -205 15 "
        },
        "\ue16d": {
            width: 194,
            c: -519.4375,
            e: 0,
            d: 518.0625,
            f: 193.28125,
            name: "accidentals.sharp.slashslash.stem",
            h: 197,
            height: 1039,
            g: "m 85 515 b 95 518 88 518 89 518 b 114 505 103 518 110 513 l 115 502 l 115 376 b 115 250 115 306 115 250 b 141 258 117 250 127 252 l 167 266 l 172 266 b 190 254 181 265 187 262 l 193 251 l 193 202 l 193 188 b 187 147 193 150 191 152 b 147 130 183 143 182 141 l 115 119 l 115 9 b 115 -100 115 -51 115 -100 b 141 -91 115 -100 127 -95 b 171 -81 166 -81 167 -81 l 171 -81 b 191 -94 181 -81 189 -87 b 193 -143 191 -97 193 -120 b 191 -195 193 -168 191 -194 b 125 -227 187 -205 187 -204 l 115 -230 l 115 -366 l 115 -504 l 114 -506 b 95 -519 110 -515 102 -519 b 74 -506 87 -519 78 -515 l 73 -504 l 73 -375 b 73 -245 73 -261 73 -245 b 73 -245 73 -245 73 -245 b 55 -252 72 -245 63 -250 l 32 -261 b 19 -263 27 -262 23 -263 b 4 -256 13 -263 8 -261 b 0 -215 0 -251 0 -254 b 0 -200 0 -211 0 -206 l 0 -152 l 1 -150 b 8 -140 2 -145 5 -141 b 42 -127 9 -140 24 -133 l 73 -116 l 73 -5 b 73 23 73 4 73 15 b 73 105 73 70 73 105 b 49 97 73 105 61 101 b 17 88 32 91 23 88 b 4 95 10 88 8 91 b 0 137 0 101 0 98 b 0 151 0 141 0 145 l 0 200 l 1 202 b 43 225 5 212 5 212 l 73 234 l 73 368 l 73 502 l 74 505 b 85 515 77 509 81 513 "
        },
        "\ue117": {
            width: 902,
            c: -756.953125,
            e: -1.359375,
            d: 351.390625,
            f: 899.703125,
            name: "clefs.F",
            h: 918,
            height: 1109,
            g: "m 307 350 b 332 351 315 351 323 351 b 443 340 367 351 408 347 b 741 47 607 306 720 195 b 744 0 743 31 744 16 b 660 -304 744 -90 713 -206 b 28 -755 534 -531 304 -695 b 14 -756 23 -755 19 -756 b -1 -741 4 -756 -1 -751 b 21 -720 -1 -731 1 -729 b 567 -56 337 -601 548 -344 b 568 -11 568 -41 568 -25 b 442 286 568 129 525 233 b 325 319 406 308 367 319 b 93 177 232 319 137 266 b 84 154 91 170 84 155 b 84 154 84 154 84 154 b 88 156 84 154 85 155 b 159 177 110 170 134 177 b 257 134 194 177 231 162 b 294 41 281 108 294 73 b 171 -97 294 -25 246 -90 b 156 -98 166 -97 161 -98 b 6 75 73 -98 6 -22 b 6 80 6 76 6 79 b 307 350 10 223 141 340 m 839 215 b 845 216 841 216 842 216 b 862 213 852 216 860 215 b 899 163 887 206 899 184 b 872 118 899 145 890 127 b 847 111 865 112 856 111 b 808 130 833 111 818 118 b 796 162 800 140 796 151 b 839 215 796 187 812 212 m 839 -112 b 845 -112 841 -112 842 -112 b 862 -115 852 -112 860 -113 b 899 -165 887 -122 899 -144 b 872 -211 899 -183 890 -201 b 847 -218 865 -215 856 -218 b 808 -198 833 -218 818 -211 b 796 -165 800 -188 796 -177 b 839 -112 796 -140 812 -116 "
        },
        "\ue171": {
            width: 389,
            c: -538.890625,
            e: -1.359375,
            d: 537.5,
            f: 386.5625,
            name: "accidentals.sharp.slashslashslash.stemstem",
            h: 394,
            height: 1077,
            g: "m 249 536 b 257 537 251 537 253 537 b 276 525 266 537 273 533 l 277 522 l 279 419 l 279 316 l 304 323 b 337 329 319 326 330 329 b 353 316 347 329 349 325 b 355 266 355 315 355 290 b 353 215 355 241 355 218 b 319 198 349 206 347 205 b 279 187 284 190 279 188 b 279 156 279 187 279 175 b 279 136 279 151 279 144 l 279 84 l 289 87 l 330 98 b 367 105 352 102 362 105 b 378 101 372 105 375 104 b 386 61 385 95 386 94 b 386 40 386 55 386 48 l 386 -5 l 385 -8 b 374 -19 383 -12 378 -18 b 291 -40 372 -19 347 -26 b 279 -43 284 -41 279 -43 b 279 -83 279 -43 279 -59 b 279 -95 279 -87 279 -91 l 279 -145 l 304 -140 b 337 -133 321 -136 330 -133 b 349 -140 343 -133 347 -136 b 355 -181 355 -145 355 -143 l 355 -197 l 355 -211 b 349 -252 355 -250 355 -247 b 300 -269 345 -258 347 -258 b 280 -275 291 -272 281 -273 l 279 -275 l 277 -379 l 277 -483 l 276 -487 b 257 -500 273 -495 265 -500 b 238 -487 249 -500 242 -495 l 236 -483 l 236 -384 l 236 -286 l 235 -286 l 212 -291 l 170 -301 b 148 -308 159 -305 148 -306 b 147 -415 147 -308 147 -313 l 147 -523 l 145 -526 b 126 -538 141 -534 133 -538 b 106 -526 118 -538 110 -534 l 104 -523 l 104 -420 b 103 -318 104 -326 104 -318 b 103 -318 103 -318 103 -318 b 50 -330 92 -322 54 -330 b 31 -318 42 -330 35 -326 b 29 -268 29 -315 29 -315 l 29 -219 l 32 -216 b 92 -193 36 -206 36 -206 l 104 -190 l 104 -138 b 103 -87 104 -91 104 -87 b 103 -87 103 -87 103 -87 b 88 -91 103 -87 96 -88 l 49 -101 b 17 -106 32 -105 23 -106 b 6 -102 13 -106 10 -105 b -1 -62 0 -97 -1 -95 b 0 -41 -1 -56 0 -50 l 0 4 l 1 6 b 10 16 2 11 6 15 b 91 37 12 18 38 25 l 104 41 l 104 93 b 103 144 104 140 104 144 b 103 144 103 144 103 144 b 50 131 92 141 54 131 b 31 144 42 131 35 137 b 29 195 29 147 29 148 l 29 243 l 32 245 b 92 269 36 255 36 255 l 104 273 l 104 377 l 104 481 l 106 486 b 126 498 110 493 118 498 b 134 495 129 498 132 497 b 145 486 138 494 142 490 l 147 481 l 147 383 l 147 283 l 152 284 b 190 294 155 286 171 290 l 230 304 l 236 305 l 236 413 l 236 522 l 238 525 b 249 536 240 529 243 533 m 236 126 b 235 177 236 154 236 177 l 235 177 b 213 172 235 177 225 175 l 170 161 b 147 155 157 158 147 155 b 147 125 147 155 147 143 b 147 102 147 118 147 111 l 147 52 l 153 54 l 228 72 l 236 75 l 236 126 m 236 -105 b 235 -54 236 -65 236 -54 l 235 -54 b 231 -55 235 -54 234 -54 b 172 -69 227 -55 204 -62 l 149 -76 l 147 -76 l 147 -127 l 147 -179 l 152 -177 b 190 -168 155 -177 171 -173 l 230 -158 l 236 -156 l 236 -105 "
        },
        "\ue17e": {
            width: 424,
            c: -219.4375,
            e: -212.328125,
            d: 218.0625,
            f: 210.96875,
            name: "scripts.stopped",
            h: 215,
            height: 439,
            g: "m -8 216 b -1 218 -6 216 -4 218 b 19 204 8 218 16 212 b 20 111 20 201 20 200 l 20 20 l 107 20 b 142 20 121 20 133 20 b 205 13 205 20 198 19 b 210 0 209 9 210 4 b 198 -20 210 -9 206 -16 b 107 -22 194 -22 193 -22 l 20 -22 l 20 -112 b 20 -148 20 -126 20 -138 b 13 -212 20 -213 19 -206 b 0 -219 9 -216 4 -219 b -20 -205 -8 -219 -16 -213 b -21 -112 -21 -202 -21 -201 l -21 -22 l -108 -22 b -200 -20 -194 -22 -196 -22 b -212 0 -208 -16 -212 -9 b -206 13 -212 4 -210 9 b -144 20 -200 19 -206 20 b -108 20 -134 20 -122 20 l -21 20 l -21 111 b -20 204 -21 200 -21 201 b -8 216 -17 209 -13 213 "
        },
        "\ue15d": {
            width: 301,
            c: -508.328125,
            e: 0,
            d: 506.9375,
            f: 300.8125,
            name: "rests.2",
            h: 307,
            height: 1016,
            g: "m 49 505 b 53 506 50 505 51 506 b 70 497 58 506 62 504 b 81 486 73 493 78 488 l 96 473 l 111 459 l 122 450 l 134 438 l 182 397 l 255 330 b 292 291 292 298 292 298 l 292 290 l 292 284 l 283 270 b 209 36 234 197 209 113 b 288 -170 209 -44 235 -119 b 299 -184 295 -179 299 -181 b 300 -191 300 -187 300 -188 b 285 -206 300 -200 294 -206 b 280 -206 283 -206 281 -206 b 247 -201 270 -202 259 -201 b 176 -222 223 -201 197 -208 b 114 -340 136 -250 114 -293 b 172 -472 114 -384 134 -433 b 185 -493 182 -481 185 -487 b 181 -502 185 -497 183 -500 b 171 -508 176 -505 174 -508 b 152 -498 166 -508 160 -504 b 0 -284 65 -429 12 -352 b 0 -261 0 -279 0 -270 b 1 -238 0 -252 0 -243 b 148 -140 16 -177 73 -140 b 209 -148 167 -140 189 -143 b 215 -150 212 -148 215 -150 b 215 -150 215 -150 215 -150 l 215 -150 b 201 -136 215 -148 209 -143 l 157 -97 l 96 -41 b 17 34 21 25 17 29 b 17 37 17 36 17 36 b 17 38 17 37 17 38 b 25 56 17 44 17 44 b 110 298 81 131 110 219 b 46 475 110 368 88 431 b 38 491 40 480 38 487 b 49 505 38 498 42 502 "
        },
        "\ue1a6": {
            width: 439,
            c: -206.9375,
            e: -1.359375,
            d: 205.5625,
            f: 436.921875,
            name: "noteheads.d2triangle",
            h: 446,
            height: 413,
            g: "m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 200 b 236 187 234 194 235 190 l 245 168 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 200 208 202 "
        },
        "\ue127": {
            width: 781,
            c: -654.171875,
            e: -390.640625,
            d: 0,
            f: 389.28125,
            name: "scripts.dshortfermata",
            h: 397,
            height: 655,
            g: "m -377 -1 b -368 0 -375 -1 -372 0 b -362 -1 -366 0 -363 -1 b -343 -25 -356 -4 -352 -8 l -285 -119 l -187 -280 l -88 -444 l -35 -533 b -31 -538 -32 -537 -32 -538 b -28 -534 -31 -538 -29 -537 l -23 -526 l -19 -518 l -13 -509 l -8 -501 l -2 -493 l 2 -483 l 6 -476 l 17 -458 l 23 -450 l 32 -433 l 38 -425 l 42 -416 l 47 -408 l 53 -400 l 58 -391 l 63 -381 l 68 -373 l 73 -365 l 78 -356 l 84 -348 l 89 -340 l 93 -330 l 99 -322 l 104 -315 l 114 -297 l 125 -280 l 129 -272 l 134 -263 l 140 -255 l 145 -247 l 151 -238 l 155 -230 l 160 -220 l 166 -212 l 171 -204 l 176 -195 l 181 -187 l 186 -177 l 191 -169 l 196 -162 l 201 -154 l 206 -144 l 217 -127 l 221 -119 l 227 -111 l 232 -102 l 238 -94 l 242 -86 l 247 -77 l 253 -69 l 258 -59 l 262 -51 l 268 -43 l 273 -34 l 279 -26 l 283 -18 b 321 -1 292 -2 292 -1 b 338 -1 326 -1 332 -1 b 382 -6 378 -1 375 -1 b 389 -20 386 -9 389 -15 b 382 -38 389 -26 386 -31 l 378 -47 l 372 -55 l 367 -63 l 362 -72 l 356 -80 l 351 -90 l 347 -98 l 341 -106 l 336 -115 l 330 -123 l 325 -131 l 321 -141 l 315 -150 l 310 -158 l 304 -166 l 299 -175 b 295 -183 298 -177 296 -181 l 289 -191 l 285 -200 l 280 -208 l 274 -216 l 269 -225 l 264 -233 l 259 -243 l 254 -251 l 249 -259 l 243 -268 l 238 -276 l 234 -284 l 228 -293 l 223 -302 l 217 -311 l 213 -319 l 208 -327 b 202 -336 206 -330 204 -334 l 197 -344 l 193 -351 l 187 -361 l 182 -369 l 176 -377 l 172 -386 l 167 -394 l 161 -404 l 156 -412 l 152 -420 l 147 -429 l 141 -437 l 136 -445 l 130 -455 l 126 -463 l 121 -472 l 115 -480 b 110 -488 114 -483 111 -487 l 106 -497 l 100 -504 l 96 -512 l 89 -522 l 85 -530 l 80 -538 l 74 -547 l 69 -555 l 65 -565 l 59 -573 l 54 -581 l 49 -590 l 43 -598 l 39 -606 l 34 -616 l 28 -625 l 23 -633 b 19 -641 21 -636 20 -638 b 0 -654 14 -650 8 -654 b -25 -631 -10 -654 -14 -650 l -80 -541 l -359 -79 b -389 -29 -375 -52 -389 -30 b -390 -22 -389 -26 -390 -25 b -377 -1 -390 -13 -385 -5 m -13 -9 b -1 -8 -9 -8 -5 -8 b 51 -36 19 -8 39 -19 b 61 -72 58 -47 61 -59 b 51 -106 61 -84 58 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -127 b -62 -72 -57 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "
        },
        "\ue177": {
            width: 368,
            c: -188.890625,
            e: 0,
            d: 187.5,
            f: 367.5,
            name: "accidentals.4",
            h: 375,
            height: 377,
            g: "m 0 125 l 0 187 l 61 187 l 122 187 l 122 138 l 122 91 l 153 61 l 183 30 l 213 61 l 243 91 l 243 138 l 243 187 l 306 187 l 367 187 l 367 125 l 367 61 l 321 61 l 274 61 l 243 30 l 213 0 l 243 -31 l 274 -62 l 321 -62 l 367 -62 l 367 -125 l 367 -188 l 306 -188 l 243 -188 l 243 -140 l 243 -93 l 213 -62 l 183 -31 l 153 -62 l 122 -93 l 122 -140 l 122 -188 l 61 -188 l 0 -188 l 0 -125 l 0 -62 l 46 -62 l 92 -62 l 123 -31 l 153 0 l 123 30 l 92 61 l 46 61 l 0 61 l 0 125 "
        },
        Zn: {
            width: 392,
            c: 1.390625,
            e: 29.9375,
            d: 347.21875,
            f: 420.578125,
            name: "z",
            h: 371,
            height: 347,
            g: "m 115 345 b 221 347 117 345 166 347 b 411 345 306 347 409 345 b 420 330 416 343 420 336 b 415 319 420 326 419 322 b 178 118 397 303 179 118 b 178 117 178 118 178 117 b 181 117 178 117 178 117 b 189 117 182 117 185 117 b 193 117 190 117 191 117 b 247 99 215 117 232 111 b 296 75 266 83 280 76 b 302 75 299 75 300 75 b 322 92 311 75 315 79 b 322 92 322 92 322 92 b 322 92 322 92 322 92 b 319 92 322 92 321 92 b 313 90 318 90 315 90 b 283 107 300 90 288 97 b 277 126 279 114 277 121 b 319 167 277 149 295 167 b 319 167 319 167 319 167 b 362 118 347 167 362 147 b 355 82 362 108 359 96 b 311 33 349 65 340 55 b 224 1 284 12 253 1 b 194 5 213 1 204 2 b 168 18 183 8 178 11 b 110 36 151 30 130 36 b 57 15 88 36 68 29 b 47 11 54 12 51 11 b 31 20 40 11 34 13 b 29 26 31 22 29 25 b 68 66 29 36 39 46 b 285 251 73 71 281 248 b 285 251 285 251 285 251 b 231 252 285 252 261 252 b 137 251 190 252 141 251 b 93 227 122 248 110 241 b 78 220 88 223 83 220 b 66 227 74 220 70 223 b 63 234 65 230 63 231 b 85 291 63 241 69 252 b 115 345 108 343 108 344 "
        },
        "\ue13f": {
            width: 429,
            c: -187.5,
            e: 0,
            d: 186.109375,
            f: 428.75,
            name: "noteheads.s1",
            h: 438,
            height: 375,
            g: "m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 m 366 131 b 352 134 362 133 357 134 b 219 81 321 134 269 115 b 47 -111 126 23 50 -62 b 47 -112 47 -111 47 -112 b 77 -136 47 -129 58 -136 b 264 -45 118 -136 194 -101 b 382 109 336 12 382 76 b 366 131 382 120 377 129 "
        },
        "\ue134": {
            width: 608,
            c: -229.171875,
            e: 0,
            d: 633.328125,
            f: 607.0625,
            name: "accidentals.M3",
            h: 619,
            height: 864,
            g: "m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 m 347 631 b 353 633 348 633 351 633 b 374 620 363 633 371 629 b 375 383 375 616 375 616 l 375 148 l 377 151 b 492 200 415 183 454 200 b 537 191 507 200 522 197 b 607 84 582 176 607 134 b 583 0 607 58 598 29 b 455 -143 562 -40 533 -72 l 378 -215 b 355 -229 364 -229 362 -229 b 334 -216 345 -229 337 -225 l 333 -212 l 333 201 l 333 616 l 334 620 b 347 631 337 625 341 630 m 465 131 b 451 133 461 133 455 133 b 445 133 449 133 446 133 b 379 87 419 129 396 113 l 375 80 l 375 -37 l 375 -156 l 378 -152 b 499 81 451 -72 499 20 l 499 83 b 465 131 499 113 490 126 "
        },
        "\ue118": {
            width: 848,
            c: -876.390625,
            e: 0,
            d: 1502.78125,
            f: 847.96875,
            name: "clefs.G",
            h: 865,
            height: 2380,
            g: "m 488 1501 b 495 1502 491 1502 492 1502 b 541 1468 507 1502 521 1493 b 679 1080 622 1375 679 1212 b 677 1052 679 1070 677 1062 b 477 644 668 895 604 766 l 443 611 l 431 598 l 455 477 b 481 356 470 411 481 356 b 481 356 481 356 481 356 b 490 358 483 356 485 356 b 528 359 495 358 511 359 b 558 358 540 359 552 358 b 847 30 724 337 842 202 b 847 20 847 26 847 23 b 628 -304 847 -115 759 -247 b 622 -308 624 -305 622 -308 b 638 -387 622 -308 628 -344 b 661 -516 656 -472 658 -490 b 665 -575 664 -536 665 -555 b 562 -812 665 -677 631 -756 b 385 -876 510 -855 447 -876 b 163 -772 303 -876 220 -840 b 129 -677 140 -744 129 -711 b 172 -573 129 -640 144 -602 b 273 -529 202 -543 238 -529 b 412 -669 344 -529 412 -584 l 412 -669 b 284 -804 412 -743 355 -804 l 277 -804 l 281 -805 b 344 -826 296 -813 322 -822 b 383 -829 357 -829 371 -829 b 605 -672 483 -829 575 -766 b 619 -573 615 -643 619 -609 b 608 -472 619 -541 615 -508 b 577 -323 604 -454 577 -323 b 577 -323 577 -323 577 -323 b 566 -326 577 -323 571 -325 b 466 -337 533 -333 500 -337 b 127 -187 343 -337 215 -283 b 0 144 42 -93 0 25 b 96 444 0 247 31 352 b 322 716 166 543 236 627 l 352 747 l 341 800 l 330 856 b 303 986 325 876 304 977 b 295 1084 298 1019 295 1052 b 413 1429 295 1211 336 1331 b 488 1501 436 1458 477 1498 m 551 1304 b 541 1304 548 1304 545 1304 b 411 1209 500 1304 447 1265 b 355 1008 374 1152 355 1083 b 362 934 355 983 357 959 b 392 784 363 925 392 786 l 392 784 b 434 830 393 784 424 819 b 607 1168 534 943 594 1062 b 609 1195 608 1177 609 1186 b 597 1272 609 1226 604 1256 b 551 1304 589 1288 571 1301 m 405 494 b 393 556 398 529 393 556 b 318 472 390 556 343 501 b 190 300 266 409 212 336 b 127 72 149 229 127 150 b 155 -76 127 20 137 -29 b 468 -302 209 -215 333 -302 b 519 -298 484 -302 502 -301 b 568 -284 539 -294 568 -286 b 551 -195 568 -284 560 -244 l 521 -55 l 509 1 l 507 12 l 487 104 b 469 190 477 151 469 188 b 469 190 469 190 469 190 b 416 163 462 190 430 173 b 337 15 364 127 337 70 b 413 -123 337 -38 363 -91 b 428 -143 424 -130 428 -136 b 428 -148 428 -144 428 -147 b 409 -165 426 -159 419 -165 b 394 -161 405 -165 400 -163 b 253 0 328 -131 274 -72 b 240 79 245 26 240 52 b 432 344 240 195 315 305 b 436 345 435 345 436 345 l 436 345 b 420 427 436 347 421 418 b 405 494 419 430 413 461 m 548 195 b 524 197 540 197 530 197 b 515 197 518 197 515 197 b 556 -1 515 197 533 108 b 600 -208 579 -109 598 -202 b 612 -265 602 -220 612 -265 b 612 -265 612 -265 612 -265 b 641 -247 613 -265 632 -254 b 744 -97 692 -211 730 -155 b 751 -38 749 -77 751 -58 b 548 195 751 77 666 183 "
        },
        "\ue105": {
            width: 140,
            c: -372.21875,
            e: 25.859375,
            d: 370.828125,
            f: 164.6875,
            name: "accidentals.rightparen",
            h: 168,
            height: 744,
            g: "m 34 369 b 40 370 35 370 38 370 b 59 354 49 370 50 368 b 164 40 122 254 155 158 b 164 0 164 33 164 16 b 164 -40 164 -16 164 -34 b 59 -354 155 -158 122 -254 b 40 -372 53 -366 47 -372 b 34 -370 38 -372 36 -370 b 25 -358 28 -368 25 -363 b 31 -337 25 -352 27 -347 b 92 0 72 -234 92 -118 b 31 336 92 116 72 233 b 25 356 27 345 25 352 b 34 369 25 363 28 366 "
        },
        "\ue12d": {
            width: 274,
            c: -229.171875,
            e: -21.78125,
            d: 633.328125,
            f: 251.8125,
            name: "accidentals.M2",
            h: 257,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        "\ue145": {
            width: 1143,
            c: -176.390625,
            e: -571.671875,
            d: 175,
            f: 570.3125,
            name: "scripts.prallprall",
            h: 582,
            height: 352,
            g: "m -386 173 b -381 175 -385 175 -383 175 b -370 173 -377 175 -372 173 b -281 86 -367 172 -347 151 b -196 0 -235 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 175 279 173 277 172 b 289 175 285 175 288 175 b 299 173 294 175 298 173 b 462 11 303 172 338 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 374 -176 371 -176 b 280 -87 367 -173 345 -152 b 194 0 234 -38 194 0 b 125 -86 194 0 163 -38 b 49 -175 54 -175 55 -173 b 43 -176 47 -176 46 -176 b 34 -175 40 -176 36 -175 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -141 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -289 -176 b -300 -175 -295 -176 -299 -175 b -464 -12 -304 -173 -340 -137 l -476 0 l -504 -34 b -543 -77 -534 -73 -537 -76 b -549 -79 -545 -79 -547 -79 b -571 -58 -562 -79 -571 -69 b -568 -50 -571 -55 -570 -52 b -392 172 -566 -43 -396 168 b -386 173 -390 172 -387 173 "
        },
        " ": {
            width: 0,
            c: 0,
            e: 0,
            d: 0,
            f: 0,
            name: "space",
            h: 263,
            height: 0
        },
        "\ue152": {
            width: 416,
            c: -695.828125,
            e: -1.359375,
            d: 694.453125,
            f: 413.78125,
            name: "accidentals.natural.arrowboth",
            h: 422,
            height: 1391,
            g: "m 99 693 b 107 694 102 693 104 694 b 121 688 112 694 117 691 b 126 673 123 686 125 683 b 209 461 141 598 172 519 l 215 451 l 215 445 l 215 445 b 197 426 215 434 206 426 b 186 430 194 426 190 427 b 133 450 170 440 152 447 b 127 451 130 450 129 451 b 126 450 126 451 126 451 b 127 447 126 450 127 448 b 127 325 127 444 127 425 b 129 205 127 259 129 205 b 215 227 129 205 167 215 b 308 250 283 244 300 250 b 315 247 311 250 313 248 b 325 237 319 245 323 241 l 326 233 l 326 -105 b 326 -262 326 -168 326 -219 b 326 -448 326 -416 326 -445 b 325 -451 325 -450 325 -451 b 326 -452 325 -452 325 -452 b 330 -451 326 -452 329 -451 b 385 -431 351 -448 368 -441 b 396 -427 389 -429 393 -427 b 413 -447 405 -427 413 -436 l 413 -447 l 413 -452 l 408 -462 b 325 -675 371 -520 340 -600 b 306 -695 322 -690 317 -695 b 285 -670 294 -695 289 -690 b 204 -462 268 -591 239 -520 l 197 -452 l 197 -447 l 197 -447 b 215 -427 197 -436 205 -427 b 225 -431 219 -427 223 -429 b 280 -451 243 -441 261 -448 b 285 -452 283 -452 284 -452 b 287 -451 287 -452 287 -452 b 285 -448 287 -451 287 -450 b 285 -323 285 -445 285 -426 b 284 -201 285 -247 284 -201 b 197 -223 284 -201 245 -211 b 104 -245 129 -240 111 -245 b 98 -243 102 -245 100 -244 b 88 -233 93 -241 89 -237 l 87 -230 l 87 106 b 87 262 87 169 87 220 b 87 447 87 415 87 444 b 88 450 88 448 88 450 b 87 451 88 451 88 451 b 81 450 85 451 84 451 b 27 430 62 447 44 440 b 16 426 24 427 20 426 b -1 445 6 426 -1 434 b 0 445 -1 445 0 445 l 0 451 l 5 461 b 87 669 40 519 69 590 b 99 693 91 686 92 688 m 284 22 b 285 70 285 41 285 58 b 284 116 285 113 284 116 l 284 116 b 205 97 283 116 247 106 l 127 77 l 127 -18 b 129 -112 127 -69 129 -112 l 206 -93 l 284 -73 l 284 22 "
        },
        "\ue163": {
            width: 738,
            c: -16.671875,
            e: 0,
            d: 173.609375,
            f: 737.71875,
            name: "rests.1o",
            h: 753,
            height: 191,
            g: "m 144 94 l 144 173 l 368 173 l 592 173 l 592 94 l 592 15 l 660 15 l 726 15 l 729 12 b 737 -1 735 9 737 4 b 729 -15 737 -6 735 -11 l 726 -16 l 368 -16 l 9 -16 l 6 -15 b 0 -1 1 -11 0 -6 b 6 12 0 4 1 9 l 9 15 l 77 15 l 144 15 l 144 94 "
        },
        "\ue10b": {
            width: 340,
            c: 0,
            e: -170.140625,
            d: 568.0625,
            f: 168.78125,
            name: "scripts.upbow",
            h: 172,
            height: 569,
            g: "m -160 568 b -122 568 -159 568 -149 568 l -87 568 l -84 566 b -74 554 -78 563 -77 561 b -20 366 -73 551 -49 466 b 31 186 8 268 31 186 b 85 372 31 186 55 269 b 140 559 114 473 138 558 b 153 568 141 565 148 568 b 168 559 159 568 166 565 b 168 555 168 558 168 558 b 92 281 168 548 159 513 b 14 13 50 134 14 13 b 0 0 14 6 6 0 b -17 15 -8 0 -17 8 b -93 283 -17 15 -51 136 b -170 552 -166 533 -170 548 b -170 554 -170 552 -170 552 b -160 568 -170 561 -167 565 "
        },
        "+": {
            width: 320,
            c: 183.328125,
            e: 0,
            d: 509.71875,
            f: 319.859375,
            name: "plus",
            h: 326,
            height: 327,
            g: "m 149 508 b 159 509 152 509 155 509 b 186 494 170 509 181 504 b 190 440 190 487 190 488 l 190 430 l 190 377 l 242 377 l 251 377 b 303 373 298 377 296 377 b 319 345 314 368 319 356 b 304 319 319 336 314 325 b 250 315 296 315 299 315 l 242 315 l 190 315 l 190 262 l 190 252 b 186 198 190 204 190 205 b 159 183 179 188 170 183 b 132 198 148 183 138 188 b 127 252 127 205 127 204 l 127 262 l 127 315 l 76 315 l 68 315 b 14 319 20 315 21 315 b 0 347 4 325 0 336 b 14 373 0 356 4 368 b 68 377 21 377 20 377 l 76 377 l 127 377 l 127 430 l 127 440 b 132 494 127 488 127 487 b 149 508 136 501 142 505 "
        },
        "\ue168": {
            width: 661,
            c: -486.109375,
            e: -330.75,
            d: 484.71875,
            f: 329.390625,
            name: "scripts.segno",
            h: 336,
            height: 972,
            g: "m -133 483 b -117 484 -127 484 -122 484 b 31 373 -51 484 9 440 b 35 348 34 365 35 356 b -25 286 35 313 10 286 b -87 331 -55 286 -76 302 b -167 402 -100 376 -133 402 b -191 398 -175 402 -183 401 b -227 341 -215 388 -227 369 b -225 320 -227 334 -227 327 b -13 75 -209 230 -125 133 b 6 65 -4 70 5 66 l 9 63 l 10 65 b 117 231 12 68 40 112 l 189 341 l 242 425 b 268 461 262 456 264 458 b 283 465 273 463 277 465 b 308 438 296 465 308 454 l 308 437 b 287 397 308 430 308 429 l 95 98 l 59 43 l 58 41 l 65 37 b 253 -156 151 -8 217 -77 b 281 -286 272 -200 281 -244 b 148 -481 281 -381 231 -463 b 115 -486 137 -484 126 -486 b -32 -376 51 -486 -9 -443 b -36 -350 -35 -366 -36 -358 b 25 -287 -36 -315 -12 -287 b 85 -333 54 -287 74 -302 b 166 -404 99 -377 133 -404 b 190 -400 174 -404 182 -402 b 225 -343 215 -390 225 -370 b 224 -322 225 -336 225 -329 b 12 -76 208 -231 125 -134 b -8 -66 2 -72 -6 -68 l -10 -65 l -12 -66 b -118 -231 -13 -68 -42 -113 l -190 -343 l -243 -426 b -269 -462 -264 -458 -265 -458 b -284 -466 -274 -465 -279 -466 b -310 -440 -298 -466 -310 -455 l -310 -438 b -288 -398 -310 -430 -308 -430 l -96 -100 l -59 -44 l -59 -43 l -66 -38 b -281 284 -198 33 -281 158 l -281 284 b -133 483 -281 393 -220 475 m 254 177 b 266 179 258 177 262 179 b 319 150 287 179 307 168 b 329 115 326 140 329 127 b 319 79 329 102 326 90 b 268 51 307 61 287 51 b 221 72 250 51 234 58 b 205 115 210 84 205 100 b 254 177 205 143 223 170 m -281 -54 b -269 -52 -277 -52 -273 -52 b -223 -73 -253 -52 -235 -59 b -206 -116 -212 -84 -206 -101 b -216 -151 -206 -129 -209 -141 b -269 -179 -228 -170 -249 -179 b -314 -159 -285 -179 -302 -173 b -330 -116 -325 -147 -330 -131 b -281 -54 -330 -88 -313 -61 "
        },
        "\ue16e": {
            width: 258,
            c: -519.4375,
            e: -1.359375,
            d: 518.0625,
            f: 255.890625,
            name: "accidentals.sharp.slashslashslash.stem",
            h: 261,
            height: 1039,
            g: "m 118 515 b 127 518 121 518 122 518 b 147 505 136 518 142 513 l 148 502 l 148 404 b 148 306 148 351 148 306 b 174 315 149 306 160 311 l 200 325 l 205 323 b 223 312 213 323 220 319 l 225 308 l 225 261 b 225 245 225 255 225 250 b 220 204 225 208 224 209 b 179 188 216 200 215 200 l 148 177 l 148 125 l 148 70 l 189 84 b 236 98 219 94 230 98 b 247 94 240 98 243 97 b 255 52 254 88 255 87 b 255 33 255 47 255 40 l 254 -12 l 253 -15 b 249 -22 253 -18 250 -20 l 245 -25 l 196 -41 l 148 -58 l 148 -108 b 148 -158 148 -136 148 -158 b 174 -148 148 -158 160 -154 b 204 -140 198 -140 200 -140 l 204 -140 b 224 -152 213 -140 221 -145 b 225 -201 224 -155 225 -177 b 224 -254 225 -226 224 -251 b 157 -284 220 -262 220 -262 l 148 -288 l 148 -395 l 148 -504 l 147 -506 b 127 -519 142 -515 134 -519 b 107 -506 119 -519 111 -515 l 106 -504 l 106 -404 b 106 -304 106 -316 106 -304 b 104 -304 104 -304 104 -304 b 88 -311 104 -304 96 -306 l 63 -319 b 51 -322 59 -320 55 -322 b 36 -315 46 -322 40 -319 b 31 -273 32 -309 31 -312 b 31 -258 31 -269 31 -263 l 31 -211 l 34 -206 b 40 -198 35 -204 38 -200 b 74 -186 42 -197 57 -191 l 106 -173 l 106 -123 b 106 -97 106 -112 106 -104 b 106 -72 106 -76 106 -72 b 104 -72 106 -72 106 -72 b 20 -100 89 -79 23 -100 b 0 -84 10 -100 2 -93 b -1 -37 0 -81 -1 -59 b 0 11 -1 -15 0 9 b 58 40 4 22 2 22 l 106 56 l 106 109 b 106 123 106 115 106 119 b 106 162 106 147 106 162 b 81 155 106 162 93 159 b 50 147 65 150 55 147 b 36 152 43 147 40 148 b 31 194 32 158 31 156 b 31 209 31 198 31 204 l 31 256 l 34 261 b 76 281 38 269 38 269 l 106 293 l 106 397 l 106 502 l 107 505 b 118 515 110 509 114 513 "
        },
        "\ue100": {
            width: 607,
            c: -176.390625,
            e: -299.4375,
            d: 175,
            f: 298.078125,
            name: "scripts.sforzato",
            h: 304,
            height: 352,
            g: "m -281 175 b -274 175 -280 175 -277 175 b -259 173 -270 175 -265 175 l -40 112 l 224 40 b 287 20 289 22 283 23 b 298 0 295 16 298 8 b 287 -22 298 -9 295 -18 b 287 -23 287 -23 287 -23 b 287 -23 287 -23 287 -23 b -40 -113 287 -25 270 -29 l -259 -175 b -274 -176 -265 -176 -270 -176 b -288 -172 -280 -176 -284 -175 b -299 -151 -296 -168 -299 -159 b -288 -129 -299 -141 -296 -133 b -98 -75 -284 -125 -307 -131 l 42 -36 l 140 -9 b 170 0 156 -4 170 -1 b 140 8 170 0 156 2 l 42 34 l -98 73 b -287 126 -299 129 -284 125 b -299 150 -295 131 -299 140 b -281 175 -299 161 -294 170 "
        },
        "\ue181": {
            width: 385,
            c: 4.171875,
            e: -21.78125,
            d: 1033.328125,
            f: 362.0625,
            name: "flags.d4",
            h: 369,
            height: 1030,
            g: "m 302 1031 b 308 1033 304 1033 307 1033 b 330 1016 318 1033 325 1027 b 362 868 351 970 362 920 b 340 738 362 825 353 780 l 336 727 l 340 718 b 362 591 355 677 362 634 b 257 323 362 497 325 401 b 204 272 243 306 227 290 b 20 56 129 206 66 133 b -1 18 12 44 0 22 b -19 4 -4 9 -12 4 l -21 4 l -21 140 l -21 276 l -12 277 b 167 333 61 288 127 309 b 319 598 262 388 319 491 b 311 665 319 620 317 643 l 310 673 l 304 665 b 204 548 279 620 250 587 b 20 333 129 483 66 409 b -1 293 12 320 0 298 b -19 280 -4 286 -12 280 l -21 280 l -21 416 l -21 552 l -12 554 b 167 609 61 565 127 586 b 319 875 264 666 319 770 b 294 993 319 915 311 955 b 288 1012 288 1005 288 1008 b 302 1031 288 1022 294 1029 "
        },
        "\ue138": {
            width: 656,
            c: -229.171875,
            e: -171.5,
            d: 633.328125,
            f: 483.1875,
            name: "accidentals.flatflat.slash",
            h: 493,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 495 20 616 20 616 b 20 373 20 427 20 373 b 115 411 20 373 63 390 l 210 448 l 210 531 b 212 620 210 615 210 616 b 231 633 215 629 223 633 b 246 627 236 633 242 631 b 251 541 251 620 251 629 l 251 463 l 315 490 b 387 515 368 509 381 515 b 393 513 390 515 392 515 b 406 494 402 511 406 502 b 397 476 406 487 404 480 b 323 447 396 475 363 462 l 251 418 l 251 283 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -19 -218 -9 -229 -16 -225 l -20 -215 l -21 48 l -21 311 l -83 287 b -152 262 -133 266 -145 262 b -157 263 -153 262 -155 262 b -171 283 -166 266 -171 275 b -161 301 -171 290 -167 297 b -91 329 -160 302 -129 315 l -21 356 l -21 487 l -20 618 l -19 622 b -8 631 -17 626 -12 630 m 210 288 b 210 401 210 351 210 401 b 114 365 209 401 167 384 l 20 327 l 20 238 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 180 164 200 187 193 l 209 177 b 209 177 209 177 209 177 b 210 288 210 177 210 200 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "
        },
        "\ue19f": {
            width: 710,
            c: 0,
            e: -355.25,
            d: 722.21875,
            f: 353.890625,
            name: "accordion.accOldEE",
            h: 361,
            height: 723,
            g: "m -27 720 b -13 722 -24 720 -20 722 b 42 719 4 722 34 720 b 343 447 190 700 308 591 b 353 361 349 418 353 390 b 84 9 353 197 245 50 b 0 0 55 2 27 0 b -344 273 -160 0 -306 109 b -355 359 -351 302 -355 331 b -39 719 -355 540 -221 701 l -27 720 m 39 691 b -13 693 32 691 4 693 b -25 693 -19 693 -23 693 b -322 416 -178 677 -296 566 b -326 361 -325 394 -326 390 b -325 323 -326 341 -325 329 b -36 29 -303 163 -193 51 b -1 29 -31 29 -16 29 b 35 29 14 29 29 29 b 323 323 191 51 302 163 b 325 361 323 329 325 341 b 321 416 325 390 323 394 b 39 691 296 561 185 669 m -12 655 b -4 655 -9 655 -6 655 b 20 652 4 655 14 654 b 66 586 50 643 66 613 b 32 525 66 562 55 538 b 25 522 28 523 25 522 b 16 404 25 520 16 408 b 16 404 16 404 16 404 l 16 404 b 54 448 17 404 34 423 l 92 493 l 89 500 b 87 519 88 506 87 513 b 103 565 87 536 92 552 b 155 590 117 581 136 590 b 216 551 179 590 204 576 b 224 520 221 541 224 530 b 156 450 224 483 193 450 b 136 454 149 450 142 451 l 129 455 l 85 416 b 42 377 61 395 42 379 l 42 377 l 42 377 b 156 387 46 377 156 387 b 160 394 156 387 159 390 b 220 430 172 418 197 430 b 280 394 243 430 266 418 b 288 361 285 384 288 372 b 280 326 288 348 285 337 b 220 291 266 302 243 291 b 160 327 197 291 172 302 b 156 333 159 330 156 333 b 42 343 156 333 46 343 b 42 343 42 343 42 343 l 42 343 b 85 304 42 343 61 325 l 129 265 l 136 268 b 155 270 142 269 148 270 b 198 254 171 270 186 265 b 223 201 216 240 223 220 b 186 138 223 176 210 151 b 155 131 176 133 166 131 b 87 201 119 131 87 162 b 89 220 87 206 88 213 l 92 227 l 54 272 b 16 316 34 297 17 316 l 16 316 b 16 316 16 316 16 316 b 25 200 16 313 25 200 b 32 195 25 200 28 198 b 68 134 55 183 68 158 b 32 73 68 111 55 87 b -1 65 23 68 10 65 b -34 73 -12 65 -24 68 b -69 134 -57 87 -69 111 b -34 195 -69 158 -57 183 b -27 200 -29 198 -27 200 b -17 316 -27 200 -17 313 b -17 316 -17 316 -17 316 l -17 316 b -55 272 -19 316 -35 297 l -93 227 l -91 220 b -88 201 -89 215 -88 208 b -104 156 -88 184 -93 169 b -156 131 -118 140 -137 131 b -217 169 -181 131 -205 144 b -225 201 -223 179 -225 190 b -157 270 -225 238 -194 270 b -137 268 -151 270 -144 269 l -130 265 l -87 304 b -43 343 -62 325 -43 343 l -43 343 b -43 343 -43 343 -43 343 b -157 333 -47 343 -157 333 b -161 327 -159 333 -160 330 b -221 291 -175 302 -198 291 b -281 326 -245 291 -268 302 b -289 361 -287 337 -289 348 b -281 394 -289 372 -287 384 b -221 430 -268 418 -245 430 b -161 394 -198 430 -175 418 b -157 387 -160 390 -159 387 b -43 377 -157 387 -47 377 l -43 377 l -43 377 b -87 416 -43 379 -62 395 l -130 455 l -137 454 b -156 450 -144 451 -149 450 b -200 466 -172 450 -187 455 b -224 520 -217 480 -224 500 b -187 581 -224 545 -212 569 b -156 590 -178 587 -167 590 b -88 520 -121 590 -88 559 b -91 500 -88 513 -89 506 l -93 493 l -55 448 b -17 404 -35 423 -19 404 l -17 404 b -17 404 -17 404 -17 404 b -27 522 -17 408 -27 520 b -34 525 -27 522 -29 523 b -68 586 -57 538 -68 562 b -12 655 -68 618 -47 650 "
        },
        "\ue1a8": {
            width: 599,
            c: -184.71875,
            e: 0,
            d: 183.328125,
            f: 598.890625,
            name: "noteheads.s0cross",
            h: 611,
            height: 369,
            g: "m 62 181 b 77 183 66 183 72 183 b 91 181 83 183 88 183 b 202 131 100 180 106 177 l 299 87 l 394 131 b 517 183 499 181 502 183 b 519 183 517 183 518 183 b 598 104 567 183 598 144 b 577 50 598 84 592 65 b 518 15 567 38 563 37 b 484 0 499 6 484 0 b 518 -16 484 -1 499 -8 b 577 -51 563 -38 567 -40 b 598 -105 592 -66 598 -86 b 519 -184 598 -145 567 -184 b 517 -184 518 -184 517 -184 b 394 -133 502 -184 499 -183 l 299 -88 l 202 -133 b 81 -184 99 -183 95 -184 b 77 -184 80 -184 78 -184 b 0 -105 29 -184 0 -145 b 20 -51 0 -86 5 -66 b 80 -16 29 -40 34 -38 b 114 -1 98 -8 114 -1 b 80 15 114 0 98 6 b 20 50 34 37 29 38 b 0 104 6 65 0 84 b 62 181 0 140 23 175 m 88 134 b 74 136 85 134 80 136 b 68 134 72 136 69 136 b 46 104 54 130 46 118 b 55 81 46 95 49 88 b 149 34 59 76 53 80 b 224 -1 190 15 224 0 b 144 -38 224 -1 187 -18 b 54 -84 59 -79 58 -79 b 46 -105 49 -90 46 -98 b 76 -137 46 -122 58 -137 b 78 -137 77 -137 77 -137 b 194 -86 87 -137 76 -141 b 298 -36 250 -58 298 -36 b 298 -36 298 -36 298 -36 b 402 -84 299 -36 345 -58 b 518 -137 522 -141 510 -137 b 521 -137 519 -137 519 -137 b 551 -105 539 -137 551 -122 b 541 -83 551 -98 548 -90 b 447 -36 537 -77 544 -81 b 374 -1 406 -16 374 -1 b 447 34 374 0 406 15 b 541 81 544 80 537 76 b 551 104 548 88 551 97 b 521 136 551 120 539 136 b 518 136 519 136 519 136 b 517 136 518 136 517 136 l 517 136 b 402 83 511 136 511 136 b 298 34 345 56 299 34 b 298 34 298 34 298 34 b 194 84 298 34 250 56 b 88 134 137 111 89 133 "
        },
        "\ue1a4": {
            width: 439,
            c: -206.9375,
            e: 0,
            d: 205.5625,
            f: 438.28125,
            name: "noteheads.d1triangle",
            h: 447,
            height: 413,
            g: "m 212 205 b 219 205 213 205 216 205 b 239 183 228 205 231 204 b 421 -163 298 40 363 -83 b 438 -191 434 -180 438 -186 b 436 -197 438 -193 438 -195 b 424 -206 434 -204 431 -206 b 406 -201 420 -206 415 -205 b 216 -156 347 -172 281 -156 b 23 -205 148 -156 80 -173 b 14 -206 20 -206 17 -206 b 0 -191 6 -206 0 -201 b 6 -176 0 -187 1 -183 b 202 193 63 -104 142 45 b 212 205 205 200 208 202 m 264 48 l 249 81 l 243 94 l 242 91 b 89 -126 208 36 137 -66 b 81 -138 85 -133 81 -138 b 81 -138 81 -138 81 -138 b 81 -138 81 -138 81 -138 b 95 -133 81 -138 87 -136 b 280 -94 156 -108 221 -94 b 334 -98 299 -94 317 -95 b 343 -100 338 -100 343 -100 b 343 -100 343 -100 343 -100 b 338 -94 343 -100 341 -97 b 264 48 318 -58 287 1 "
        },
        "\ue17d": {
            width: 299,
            c: -219.4375,
            e: -149.71875,
            d: 218.0625,
            f: 148.359375,
            name: "scripts.snappizzicato",
            h: 151,
            height: 439,
            g: "m -9 215 b 0 218 -6 218 -4 218 b 19 205 8 218 14 213 b 20 143 20 202 20 201 l 20 84 l 23 84 b 144 -27 81 75 129 30 b 148 -66 147 -40 148 -54 b 36 -213 148 -134 103 -197 b 0 -219 24 -218 12 -219 b -145 -104 -68 -219 -129 -173 b -149 -68 -148 -91 -149 -79 b -24 84 -149 6 -98 75 l -21 84 l -21 143 b -19 205 -20 201 -20 202 b -9 215 -17 209 -13 213 m -21 -15 b -23 41 -21 37 -21 41 b -23 41 -23 41 -23 41 b -76 11 -35 40 -62 26 b -108 -65 -98 -11 -108 -38 b -1 -176 -108 -122 -65 -176 b 107 -65 63 -176 107 -122 b 74 11 107 -38 96 -11 b 20 41 61 26 32 41 b 20 -15 20 41 20 15 b 19 -75 20 -72 20 -72 b 0 -87 14 -83 6 -87 b -19 -75 -8 -87 -16 -83 b -21 -15 -20 -72 -20 -72 "
        },
        "\ue1a9": {
            width: 407,
            c: -184.71875,
            e: 0,
            d: 183.328125,
            f: 406.96875,
            name: "noteheads.s1cross",
            h: 415,
            height: 369,
            g: "m 55 181 b 70 183 61 183 66 183 b 111 170 85 183 99 179 b 160 130 115 168 137 150 l 202 95 l 245 130 b 319 181 299 176 302 179 b 334 183 325 183 330 183 b 406 109 375 183 406 148 b 401 81 406 100 405 91 b 348 25 394 65 390 59 b 318 -1 332 11 318 0 b 348 -26 318 -1 332 -12 b 401 -83 390 -61 394 -66 b 406 -111 405 -93 406 -101 b 334 -184 406 -150 375 -184 b 319 -183 330 -184 325 -184 b 245 -131 302 -180 299 -177 l 202 -97 l 160 -131 b 85 -183 107 -177 103 -180 b 70 -184 80 -184 76 -184 b 0 -111 31 -184 0 -150 b 4 -83 0 -101 1 -93 b 58 -26 10 -66 16 -61 b 88 -1 74 -12 88 -1 b 58 25 88 0 74 11 b 10 69 23 54 17 59 b 0 109 2 81 0 95 b 55 181 0 143 21 173 m 83 133 b 72 136 78 136 76 136 b 57 131 66 136 61 134 b 46 109 49 126 46 118 b 50 93 46 104 47 98 b 107 45 51 91 77 70 b 160 0 137 20 160 0 b 107 -47 160 -1 137 -22 b 50 -94 77 -72 51 -93 b 46 -111 47 -100 46 -105 b 59 -134 46 -120 50 -130 b 72 -137 62 -136 68 -137 b 83 -136 76 -137 80 -136 b 144 -84 84 -134 107 -116 b 202 -36 176 -58 202 -36 b 261 -84 202 -36 230 -58 b 323 -136 299 -116 321 -134 b 334 -137 326 -136 330 -137 b 345 -134 338 -137 343 -136 b 360 -111 355 -130 360 -120 b 355 -94 360 -105 359 -100 b 299 -47 353 -93 329 -72 b 245 0 269 -22 245 -1 b 299 45 245 0 269 20 b 355 93 329 70 353 91 b 360 109 359 98 360 104 b 345 133 360 119 355 129 b 334 136 343 134 338 136 b 323 134 330 136 326 134 b 261 83 321 133 299 115 b 202 34 230 56 202 34 b 144 83 202 34 176 56 b 83 133 106 115 84 133 "
        },
        "\ue1ac": {
            width: 598,
            c: -343.0625,
            e: 0,
            d: 341.671875,
            f: 597.53125,
            name: "noteheads.s0slash",
            h: 610,
            height: 686,
            g: "m 356 341 b 479 341 402 341 445 341 b 570 341 533 341 568 341 b 597 309 586 340 597 326 l 597 309 b 472 -320 597 305 475 -311 b 451 -341 469 -330 462 -337 b 242 -343 450 -343 347 -343 b 21 -341 134 -343 24 -343 b 0 -311 8 -337 0 -325 b 0 -311 0 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 356 341 147 341 153 341 m 528 276 b 353 277 528 277 492 277 b 179 276 215 277 179 277 b 123 -1 179 276 153 151 l 68 -279 l 242 -279 b 310 -279 266 -279 289 -279 b 416 -279 372 -279 416 -279 b 528 276 417 -279 528 275 "
        },
        "\ue10a": {
            width: 457,
            c: 0,
            e: -228.671875,
            d: 488.890625,
            f: 227.3125,
            name: "scripts.downbow",
            h: 232,
            height: 489,
            g: "m -217 487 l -213 488 l 0 488 l 212 488 l 216 487 b 225 476 220 484 224 480 l 227 473 l 227 244 l 227 15 l 225 12 b 206 0 223 4 215 0 b 197 1 204 0 200 0 b 187 12 193 4 189 6 l 186 15 l 186 138 l 186 262 l -1 262 l -187 262 l -187 138 l -187 15 l -189 12 b -208 0 -193 4 -200 0 b -227 12 -216 0 -223 4 l -228 15 l -228 244 l -228 473 l -227 476 b -217 487 -225 480 -221 484 "
        },
        "\ue12c": {
            width: 430,
            c: -229.171875,
            e: -1.359375,
            d: 633.328125,
            f: 427.390625,
            name: "accidentals.mirroredflat.backslash",
            h: 436,
            height: 864,
            g: "m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 b 272 494 272 616 272 616 l 272 370 l 344 333 b 426 286 426 293 423 294 b 427 277 426 283 427 280 b 405 256 427 266 417 256 b 405 256 405 256 405 256 l 400 256 l 336 290 b 272 322 300 308 272 322 b 272 54 272 322 272 201 b 270 -216 272 -212 272 -212 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b -1 84 9 18 -1 52 b 111 200 -1 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 245 l 231 343 l 157 380 b 81 420 92 413 84 418 b 76 436 77 425 76 430 b 96 456 76 447 84 456 b 98 456 96 456 98 456 l 103 456 l 166 425 b 230 391 201 406 230 391 b 231 504 230 391 231 443 b 232 620 231 615 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "
        },
        "\ue14f": {
            width: 240,
            c: -463.890625,
            e: 0,
            d: 462.5,
            f: 239.5625,
            name: "accidentals.natural",
            h: 244,
            height: 927,
            g: "m 10 461 b 20 462 13 462 14 462 b 39 450 28 462 35 458 l 40 447 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 250 196 244 213 250 b 227 247 224 250 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -106 l 239 -448 l 238 -451 b 219 -463 234 -459 225 -463 b 198 -451 210 -463 202 -459 l 197 -448 l 197 -325 b 197 -201 197 -248 197 -201 b 110 -223 196 -201 157 -211 b 17 -245 42 -240 24 -245 b 10 -243 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 447 l 0 450 b 10 461 2 454 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "
        },
        "\ue17f": {
            width: 390,
            c: 4.171875,
            e: -21.78125,
            d: 1033.328125,
            f: 367.5,
            name: "flags.d3",
            h: 375,
            height: 1030,
            g: "m 230 1031 b 238 1033 232 1033 235 1033 b 259 1015 245 1033 251 1027 b 367 662 330 906 367 783 b 364 602 367 641 367 622 b 232 318 352 488 304 384 b 57 120 155 245 103 187 b -1 18 31 84 6 40 b -19 4 -4 11 -12 4 l -21 4 l -21 159 l -21 315 l -16 315 b 96 336 10 315 62 325 b 315 695 227 380 315 527 b 313 738 315 709 314 725 b 224 991 304 826 273 916 b 216 1013 219 1000 216 1008 b 230 1031 216 1022 220 1029 "
        },
        1: {
            width: 347,
            c: -1.390625,
            e: -1.359375,
            d: 673.609375,
            f: 344.359375,
            name: "one",
            h: 351,
            height: 676,
            g: "m 126 637 l 129 638 l 198 638 l 266 638 l 269 636 b 274 631 272 634 273 633 l 277 627 l 277 395 b 279 156 277 230 277 161 b 329 88 281 123 295 106 b 344 69 341 81 344 79 b 337 55 344 62 343 59 l 333 54 l 197 54 l 61 54 l 58 55 b 50 69 53 59 50 62 b 65 88 50 79 53 81 b 80 97 72 91 74 93 b 117 156 103 113 112 129 b 117 345 117 161 117 222 l 117 529 l 100 504 l 38 406 b 14 383 24 384 23 383 b -1 398 5 383 -1 390 b 4 415 -1 404 1 409 b 16 437 5 416 10 426 l 72 540 l 100 597 b 121 633 119 631 119 631 b 126 637 122 634 125 636 m 171 -1 l 172 -1 l 170 -1 l 171 -1 m 171 673 l 172 673 l 170 673 l 171 673 "
        },
        "\ue188": {
            width: 339,
            c: -2066.671875,
            e: -24.5,
            d: -5.5625,
            f: 313.0625,
            name: "flags.u7",
            h: 319,
            height: 2062,
            g: "m -24 -133 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 142 -213 13 -61 74 -144 b 258 -376 196 -269 230 -315 b 313 -605 295 -450 313 -529 b 292 -743 313 -652 306 -700 b 288 -752 289 -748 288 -752 b 288 -752 288 -752 288 -752 b 292 -765 289 -754 291 -758 b 313 -908 306 -812 313 -861 b 292 -1045 313 -955 306 -1002 b 288 -1055 289 -1051 288 -1055 b 288 -1055 288 -1055 288 -1055 b 292 -1068 289 -1055 291 -1061 b 313 -1211 306 -1113 313 -1162 b 292 -1347 313 -1258 306 -1305 b 288 -1358 289 -1354 288 -1358 b 288 -1358 288 -1358 288 -1358 b 292 -1369 289 -1358 291 -1363 b 313 -1513 306 -1416 313 -1465 b 292 -1650 313 -1561 306 -1606 b 288 -1661 289 -1655 288 -1661 b 288 -1661 288 -1661 288 -1661 b 292 -1672 289 -1661 291 -1666 b 313 -1815 306 -1720 313 -1768 b 250 -2041 313 -1898 291 -1979 b 232 -2063 238 -2058 236 -2061 b 221 -2066 230 -2065 225 -2066 b 200 -2047 210 -2066 201 -2058 b 200 -2044 200 -2045 200 -2045 b 208 -2027 200 -2038 202 -2036 b 269 -1827 249 -1968 269 -1898 b 153 -1545 269 -1727 230 -1626 b -9 -1473 115 -1506 58 -1481 b -21 -1472 -14 -1472 -19 -1472 l -24 -1472 l -24 -1344 l -24 -1216 l -20 -1216 b -1 -1230 -12 -1216 -4 -1222 b 142 -1425 13 -1270 74 -1354 b 257 -1583 196 -1479 228 -1525 b 264 -1595 261 -1590 264 -1595 l 264 -1595 b 265 -1583 264 -1595 264 -1590 b 270 -1526 268 -1563 270 -1545 b 153 -1244 270 -1425 228 -1322 b -9 -1170 115 -1204 58 -1179 b -21 -1169 -14 -1170 -19 -1169 l -24 -1169 l -24 -1041 l -24 -913 l -20 -913 b -1 -927 -12 -913 -4 -919 b 142 -1122 13 -968 74 -1051 b 257 -1281 196 -1176 228 -1222 b 264 -1293 261 -1287 264 -1293 l 264 -1293 b 265 -1280 264 -1293 264 -1287 b 270 -1223 268 -1262 270 -1243 b 153 -941 270 -1122 228 -1019 b -9 -868 115 -901 58 -876 b -21 -866 -14 -868 -19 -866 l -24 -866 l -24 -738 l -24 -611 l -20 -611 b -1 -625 -12 -611 -4 -616 b 142 -819 13 -665 74 -750 b 257 -979 196 -873 228 -919 b 264 -990 261 -984 264 -990 l 264 -990 b 265 -977 264 -990 264 -984 b 270 -920 268 -959 270 -940 b 153 -638 270 -819 228 -716 b -9 -565 115 -598 58 -573 b -21 -563 -14 -565 -19 -563 l -24 -563 l -24 -436 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 142 -516 13 -363 74 -447 b 257 -676 196 -572 228 -616 b 264 -687 261 -681 264 -687 l 264 -687 b 265 -675 264 -687 264 -681 b 270 -618 268 -656 270 -637 b 153 -336 270 -516 228 -413 b -9 -262 115 -295 58 -270 b -21 -261 -14 -262 -19 -261 l -24 -261 l -24 -133 "
        },
        "\ue104": {
            width: 142,
            c: -372.21875,
            e: -166.0625,
            d: 370.828125,
            f: -25.859375,
            name: "accidentals.leftparen",
            h: 0,
            height: 744,
            g: "m -49 369 b -42 370 -46 369 -44 370 b -27 361 -36 370 -29 366 b -25 355 -27 359 -25 358 b -32 336 -25 351 -28 347 b -92 52 -66 248 -87 159 b -93 -1 -93 43 -93 20 b -92 -54 -93 -23 -93 -45 b -32 -337 -85 -162 -66 -251 b -25 -355 -27 -350 -25 -352 b -42 -372 -25 -365 -32 -372 b -61 -354 -50 -372 -51 -369 b -163 -63 -119 -262 -153 -165 b -166 -1 -166 -37 -166 -31 b -163 62 -166 30 -166 36 b -61 352 -153 163 -119 261 b -49 369 -54 365 -51 366 "
        },
        "\ue150": {
            width: 329,
            c: -463.890625,
            e: -1.359375,
            d: 694.453125,
            f: 326.671875,
            name: "accidentals.natural.arrowup",
            h: 333,
            height: 1159,
            g: "m 99 693 b 107 694 102 693 104 694 b 121 688 112 694 117 691 b 126 673 123 686 125 683 b 209 461 141 598 172 519 l 215 451 l 215 445 l 215 445 b 197 426 215 434 206 426 b 186 430 194 426 190 427 b 133 450 170 440 152 447 b 127 451 130 450 129 451 b 126 450 126 451 126 451 b 127 447 126 450 127 448 b 127 325 127 444 127 425 b 129 205 127 259 129 205 b 215 227 129 205 167 215 b 308 250 283 244 300 250 b 315 247 311 250 313 248 b 325 237 319 245 323 241 l 326 233 l 326 -106 l 326 -448 l 325 -451 b 306 -463 321 -459 314 -463 b 287 -451 298 -463 291 -459 l 285 -448 l 285 -325 b 284 -201 285 -248 284 -201 b 197 -223 284 -201 245 -211 b 104 -245 129 -240 111 -245 b 98 -243 102 -245 100 -244 b 88 -233 93 -241 89 -237 l 87 -230 l 87 106 b 87 262 87 169 87 220 b 87 447 87 415 87 444 b 88 450 88 448 88 450 b 87 451 88 451 88 451 b 81 450 85 451 84 451 b 27 430 62 447 44 440 b 16 426 24 427 20 426 b -1 445 6 426 -1 434 b 0 445 -1 445 0 445 l 0 451 l 5 461 b 87 669 40 519 69 590 b 99 693 91 686 92 688 m 284 22 b 285 70 285 41 285 58 b 284 116 285 113 284 116 l 284 116 b 205 97 283 116 247 106 l 127 77 l 127 -18 b 129 -112 127 -69 129 -112 l 206 -93 l 284 -73 l 284 22 "
        },
        "\ue135": {
            width: 608,
            c: -229.171875,
            e: 0,
            d: 633.328125,
            f: 607.0625,
            name: "accidentals.mirroredflat.flat",
            h: 619,
            height: 864,
            g: "m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 m 347 631 b 353 633 348 633 351 633 b 374 620 363 633 371 629 b 375 383 375 616 375 616 l 375 148 l 377 151 b 492 200 415 183 454 200 b 537 191 507 200 522 197 b 607 84 582 176 607 134 b 583 0 607 58 598 29 b 455 -143 562 -40 533 -72 l 378 -215 b 355 -229 364 -229 362 -229 b 334 -216 345 -229 337 -225 l 333 -212 l 333 201 l 333 616 l 334 620 b 347 631 337 625 341 630 m 465 131 b 451 133 461 133 455 133 b 445 133 449 133 446 133 b 379 87 419 129 396 113 l 375 80 l 375 -37 l 375 -156 l 378 -152 b 499 81 451 -72 499 20 l 499 83 b 465 131 499 113 490 126 "
        },
        "\ue121": {
            width: 623,
            c: -391.671875,
            e: -311.6875,
            d: 390.28125,
            f: 310.328125,
            name: "scripts.varcoda",
            h: 317,
            height: 783,
            g: "m -9 388 b -2 390 -8 390 -5 390 b 5 388 1 390 4 390 b 19 379 10 387 16 383 b 23 333 23 372 23 372 l 23 329 l 23 290 l 27 290 b 172 275 62 290 129 283 b 200 259 191 270 196 268 b 215 40 204 250 215 102 b 215 26 215 33 215 26 l 216 25 l 253 25 l 255 25 b 299 19 292 25 292 23 b 310 -1 306 15 310 6 b 299 -23 310 -11 306 -19 b 255 -27 292 -27 292 -27 l 253 -27 l 216 -27 l 215 -30 b 215 -55 215 -31 215 -43 b 202 -244 213 -111 209 -179 b 174 -277 200 -270 198 -273 b 40 -294 132 -286 87 -291 l 23 -294 l 23 -331 b 23 -340 23 -334 23 -337 b 17 -381 23 -376 23 -375 b -1 -391 13 -388 5 -391 b -21 -381 -9 -391 -17 -388 b -27 -340 -27 -375 -27 -376 b -27 -331 -27 -337 -27 -334 l -27 -294 l -44 -294 b -178 -277 -91 -291 -136 -286 b -205 -258 -198 -273 -204 -270 b -219 -44 -210 -215 -219 -94 b -219 -29 -219 -37 -219 -30 l -220 -27 l -255 -27 l -258 -27 b -300 -23 -294 -27 -294 -27 b -311 -2 -307 -19 -311 -11 b -294 23 -311 8 -304 19 b -255 25 -291 23 -284 25 l -220 25 l -219 26 b -219 40 -219 26 -219 33 b -204 259 -219 104 -208 250 b -176 275 -200 268 -196 270 b -31 290 -133 283 -66 290 l -27 290 l -27 329 b -27 372 -27 361 -27 369 b -9 388 -24 379 -17 386 m -27 136 l -27 247 l -28 247 b -103 233 -46 245 -100 236 b -107 197 -103 233 -106 218 b -115 52 -111 147 -114 94 b -115 27 -115 40 -115 29 l -115 25 l -72 25 l -27 25 l -27 136 m 34 245 b 24 247 28 247 24 247 b 23 136 24 247 23 197 l 23 25 l 68 25 l 111 25 l 111 27 b 111 52 111 29 111 40 b 103 197 110 94 107 147 b 99 233 102 218 100 233 b 34 245 98 236 54 244 m -27 -140 l -27 -27 l -72 -27 l -115 -27 l -115 -30 b -115 -56 -115 -33 -115 -44 b -107 -201 -114 -98 -111 -151 b -103 -237 -106 -222 -103 -237 b -28 -251 -100 -240 -40 -251 b -27 -140 -28 -251 -27 -201 m 111 -30 l 111 -27 l 68 -27 l 23 -27 l 23 -140 b 24 -251 23 -201 24 -251 b 99 -237 36 -251 96 -240 b 103 -201 100 -237 102 -222 b 111 -56 107 -151 110 -98 b 111 -30 111 -44 111 -33 "
        },
        "\ue113": {
            width: 623,
            c: -280.5625,
            e: 0,
            d: 419.4375,
            f: 622.03125,
            name: "scripts.caesura.straight",
            h: 635,
            height: 701,
            g: "m 398 418 b 406 419 401 419 404 419 b 427 398 417 419 427 409 b 427 391 427 395 427 393 b 34 -275 424 386 38 -272 b 20 -280 29 -279 25 -280 b 0 -259 9 -280 0 -270 b 0 -252 0 -256 0 -254 b 393 413 2 -247 389 411 b 398 418 394 415 397 416 m 592 418 b 600 419 594 419 597 419 b 622 398 611 419 622 409 b 620 391 622 395 620 393 b 227 -275 617 386 231 -272 b 213 -280 223 -279 219 -280 b 193 -259 202 -280 193 -270 b 194 -252 193 -256 193 -254 b 586 413 196 -247 582 411 b 592 418 588 415 590 416 "
        },
        "\ue156": {
            width: 294,
            c: -1.390625,
            e: 0,
            d: 381.9375,
            f: 294,
            name: "pedal.e",
            h: 300,
            height: 384,
            g: "m 138 381 b 147 381 141 381 144 381 b 221 300 191 381 221 341 b 194 238 221 279 213 255 b 159 211 190 234 161 212 b 78 148 157 209 81 151 b 78 148 78 148 78 148 b 95 106 78 144 88 119 b 121 77 103 88 108 83 b 156 69 132 72 144 69 b 259 127 193 69 232 91 b 273 140 266 137 269 138 b 279 141 274 141 276 141 b 294 125 287 141 294 134 b 292 118 294 123 294 120 b 255 66 289 113 261 72 b 126 -1 220 22 171 -1 b 47 27 96 -1 69 8 b 2 133 31 43 9 93 b 0 180 0 150 0 165 b 53 326 0 237 17 288 b 103 366 59 331 91 358 b 138 381 112 373 129 380 m 126 326 b 118 326 123 326 121 326 b 98 316 110 326 103 323 b 68 215 78 288 68 255 b 68 208 68 213 68 211 b 70 183 69 195 69 184 l 70 183 b 93 201 70 183 81 191 l 133 231 b 159 259 152 247 155 248 b 163 279 161 266 163 272 b 126 326 163 300 148 320 "
        },
        "\ue178": {
            width: 368,
            c: -188.890625,
            e: 0,
            d: 187.5,
            f: 367.5,
            name: "accidentals.doublesharp",
            h: 375,
            height: 377,
            g: "m 0 125 l 0 187 l 61 187 l 122 187 l 122 138 l 122 91 l 153 61 l 183 30 l 213 61 l 243 91 l 243 138 l 243 187 l 306 187 l 367 187 l 367 125 l 367 61 l 321 61 l 274 61 l 243 30 l 213 0 l 243 -31 l 274 -62 l 321 -62 l 367 -62 l 367 -125 l 367 -188 l 306 -188 l 243 -188 l 243 -140 l 243 -93 l 213 -62 l 183 -31 l 153 -62 l 122 -93 l 122 -140 l 122 -188 l 61 -188 l 0 -188 l 0 -125 l 0 -62 l 46 -62 l 92 -62 l 123 -31 l 153 0 l 123 30 l 92 61 l 46 61 l 0 61 l 0 125 "
        },
        "\ue106": {
            width: 171,
            c: -11.109375,
            e: 58.53125,
            d: 373.609375,
            f: 228.671875,
            name: "scripts.arpeggio",
            h: 294,
            height: 386,
            g: "m 138 372 b 142 373 140 372 141 373 b 178 343 149 373 156 366 b 228 251 217 297 228 279 b 228 244 228 248 228 247 b 176 147 227 212 212 184 b 123 73 152 122 132 93 b 121 62 122 70 121 66 b 145 13 121 48 129 31 b 153 -2 151 6 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 145 -11 b 129 -1 140 -11 136 -8 b 61 87 89 37 68 68 b 58 113 59 95 58 105 b 110 215 58 144 74 177 b 163 287 134 240 155 269 b 166 300 166 291 166 295 b 141 348 166 313 157 330 b 133 361 134 356 133 358 b 133 363 133 362 133 362 b 138 372 133 368 136 370 "
        },
        "\ue136": {
            width: 506,
            c: -229.171875,
            e: -21.78125,
            d: 633.328125,
            f: 483.1875,
            name: "accidentals.M4",
            h: 493,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 383 20 616 20 616 l 20 148 l 21 151 b 140 200 59 183 102 200 b 206 179 164 200 187 193 l 210 176 l 210 397 l 210 618 l 212 622 b 231 633 216 629 223 633 b 250 620 239 633 247 629 b 251 383 251 616 251 616 l 251 148 l 254 151 b 370 200 291 183 332 200 b 415 191 385 200 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -143 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -218 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -143 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "
        },
        "\ue164": {
            width: 350,
            c: -273.609375,
            e: 0,
            d: 304.171875,
            f: 349.8125,
            name: "rests.3",
            h: 357,
            height: 579,
            g: "m 88 302 b 103 304 93 302 98 304 b 202 225 149 304 191 270 b 205 200 204 216 205 208 b 178 129 205 173 196 147 l 175 126 l 182 127 b 307 250 236 143 284 190 b 313 259 308 254 311 258 b 329 268 317 265 323 268 b 349 247 340 268 349 259 b 201 -263 349 243 204 -258 b 182 -273 197 -270 190 -273 b 163 -261 174 -273 166 -269 b 161 -256 161 -259 161 -258 b 217 -59 161 -248 170 -220 b 272 129 247 43 272 127 b 272 129 272 129 272 129 b 264 122 272 129 268 126 b 140 80 227 94 183 80 b 36 115 102 80 65 91 b 0 194 10 136 0 165 b 88 302 0 244 32 293 "
        },
        "\ue155": {
            width: 463,
            c: -1.390625,
            e: 0,
            d: 597.21875,
            f: 462.78125,
            name: "pedal.d",
            h: 472,
            height: 600,
            g: "m 8 595 b 14 597 10 597 12 597 b 50 591 21 597 29 595 b 455 248 255 544 420 405 b 462 191 460 229 462 209 b 321 0 462 94 404 9 b 300 -1 314 -1 307 -1 b 149 168 215 -1 149 69 b 294 387 149 258 201 337 b 296 390 295 388 296 388 b 289 398 296 391 294 393 b 21 561 225 477 130 536 b 2 569 9 563 5 566 b 0 580 0 573 0 576 b 8 595 0 587 2 593 m 325 348 b 321 354 322 351 322 354 b 313 348 319 354 317 351 b 223 168 255 306 223 237 b 227 125 223 154 224 138 b 289 31 236 79 261 40 b 295 31 291 31 294 31 b 355 104 315 31 338 59 b 368 191 364 129 368 159 b 364 241 368 208 367 225 b 325 348 357 277 344 313 "
        },
        "\ue18e": {
            width: 310,
            c: -355.5625,
            e: -155.171875,
            d: 26.390625,
            f: 153.8125,
            name: "arrowheads.open.11",
            h: 157,
            height: 383,
            g: "m -9 25 b 0 26 -5 25 -2 26 b 25 2 12 26 21 16 l 29 -19 b 144 -304 54 -125 96 -229 b 153 -329 153 -319 153 -322 b 127 -355 153 -344 142 -355 b 100 -334 115 -355 111 -351 b 6 -130 62 -275 31 -206 b -1 -108 2 -118 0 -108 b -8 -130 -1 -108 -4 -118 b -102 -334 -32 -206 -63 -275 b -129 -355 -112 -351 -117 -355 b -155 -329 -144 -355 -155 -344 b -145 -304 -155 -322 -155 -319 b -31 -19 -98 -229 -55 -125 l -27 2 b -9 25 -24 13 -17 22 "
        },
        "\ue17b": {
            width: 136,
            c: -69.4375,
            e: -68.0625,
            d: 68.0625,
            f: 66.6875,
            name: "scripts.staccato",
            h: 68,
            height: 139,
            g: "m -12 66 b -1 68 -9 68 -5 68 b 55 37 20 68 43 56 b 66 -1 62 26 66 12 b 36 -58 66 -23 55 -44 b 0 -69 25 -65 12 -69 b -57 -38 -21 -69 -43 -58 b -68 -1 -63 -27 -68 -13 b -12 66 -68 30 -46 61 "
        },
        "\ue186": {
            width: 340,
            c: -1713.890625,
            e: -24.5,
            d: -5.5625,
            f: 314.421875,
            name: "flags.u6",
            h: 321,
            height: 1709,
            g: "m -24 -145 l -24 -5 l -20 -5 b 0 -23 -9 -5 -2 -12 b 27 -87 4 -38 14 -66 b 138 -220 53 -136 88 -177 b 235 -329 179 -255 208 -288 b 314 -593 287 -409 314 -501 b 292 -733 314 -640 307 -687 l 289 -743 l 294 -756 b 314 -897 307 -802 314 -850 b 292 -1036 314 -944 307 -991 l 289 -1045 l 294 -1058 b 314 -1198 307 -1105 314 -1152 b 292 -1338 314 -1247 307 -1293 l 289 -1348 l 294 -1361 b 314 -1501 307 -1408 314 -1455 b 273 -1690 314 -1566 300 -1629 b 250 -1713 265 -1711 261 -1713 b 228 -1693 236 -1713 228 -1705 l 228 -1686 l 234 -1676 b 270 -1508 258 -1622 270 -1565 b 98 -1194 270 -1381 209 -1262 b 40 -1175 76 -1180 58 -1175 b -10 -1190 24 -1175 8 -1179 b -20 -1193 -14 -1193 -16 -1193 l -24 -1193 l -24 -1052 l -24 -913 l -20 -913 b 0 -931 -9 -913 -2 -920 b 27 -995 4 -947 14 -975 b 138 -1129 53 -1044 88 -1086 b 257 -1276 190 -1173 228 -1220 b 262 -1284 259 -1280 262 -1284 l 262 -1284 b 269 -1250 264 -1283 268 -1261 b 270 -1206 270 -1234 270 -1220 b 98 -891 270 -1076 206 -958 b 40 -872 76 -877 58 -872 b -10 -887 24 -872 8 -876 b -20 -890 -14 -890 -16 -890 l -24 -890 l -24 -750 l -24 -611 l -20 -611 b 0 -629 -9 -611 -2 -618 b 27 -693 4 -644 14 -672 b 138 -826 53 -741 88 -783 b 257 -973 190 -870 228 -918 b 262 -981 259 -977 262 -981 l 262 -981 b 269 -947 264 -980 268 -958 b 270 -904 270 -931 270 -918 b 98 -588 270 -775 206 -655 b 40 -569 76 -575 58 -569 b -10 -584 24 -569 8 -575 b -20 -587 -14 -587 -16 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 0 -326 -9 -308 -2 -315 b 27 -390 4 -341 14 -369 b 138 -523 53 -438 88 -480 b 257 -670 190 -568 228 -615 b 262 -679 259 -675 262 -679 b 262 -679 262 -679 262 -679 b 269 -644 264 -677 268 -656 b 270 -601 270 -629 270 -615 b 98 -286 270 -472 206 -352 b 40 -266 76 -273 58 -266 b -10 -281 24 -266 8 -272 b -20 -284 -14 -284 -16 -284 l -24 -284 l -24 -145 "
        },
        "\ue161": {
            width: 755,
            c: -958.328125,
            e: -1.359375,
            d: 987.5,
            f: 752.703125,
            name: "rests.7",
            h: 768,
            height: 1947,
            g: "m 490 986 b 504 987 495 987 500 987 b 604 908 551 987 593 955 b 607 884 607 901 607 893 b 581 813 607 858 597 831 l 578 811 l 583 812 b 710 933 638 827 687 873 b 714 944 711 937 713 943 b 730 952 720 950 725 952 b 752 931 741 952 752 944 b 200 -947 752 927 204 -941 b 182 -958 197 -954 190 -958 b 163 -945 174 -958 166 -954 b 161 -940 161 -943 161 -943 b 217 -744 161 -931 170 -905 b 272 -555 247 -640 272 -555 b 272 -555 272 -555 272 -555 b 264 -561 272 -555 268 -558 b 140 -604 227 -590 182 -604 b 36 -568 102 -604 65 -593 b -1 -487 12 -548 -1 -518 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -554 205 -509 196 -536 l 175 -558 l 182 -555 b 307 -436 236 -540 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -250 b 99 -145 112 -206 99 -176 b 118 -84 99 -125 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -125 b 279 -212 306 -168 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 218 206 238 b 304 304 239 287 272 304 b 393 250 338 304 374 286 b 406 200 402 234 406 218 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 143 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 465 574 470 570 468 b 442 422 529 436 484 422 b 337 458 404 422 367 433 b 300 538 314 477 300 508 b 318 598 300 559 306 580 b 404 645 340 630 372 645 b 494 593 439 645 475 627 b 507 541 502 577 507 559 b 480 472 507 516 498 490 l 477 468 l 483 470 b 608 590 537 486 586 531 b 675 812 611 595 675 811 b 675 812 675 812 675 812 b 666 806 675 812 671 809 b 543 763 628 777 585 763 b 438 800 504 763 468 776 b 401 879 412 820 401 850 b 490 986 401 929 434 977 "
        },
        "\ue12a": {
            width: 273,
            c: -229.171875,
            e: 0,
            d: 633.328125,
            f: 272.21875,
            name: "accidentals.M1",
            h: 278,
            height: 864,
            g: "m 243 631 b 250 633 246 633 249 633 b 270 620 259 633 268 629 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -225 259 -229 b 227 -215 243 -229 240 -229 l 151 -143 b 32 -16 81 -80 53 -50 b 0 84 9 18 0 52 b 111 200 0 150 42 200 b 137 197 119 200 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 625 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "
        },
        "\ue123": {
            width: 781,
            c: 0,
            e: -390.640625,
            d: 652.78125,
            f: 389.28125,
            name: "scripts.ushortfermata",
            h: 397,
            height: 653,
            g: "m -9 651 b -1 652 -6 651 -4 652 b 19 640 6 652 13 648 l 23 631 b 28 623 24 629 27 626 l 34 615 l 39 606 l 43 598 l 49 588 l 54 580 l 59 572 l 65 563 l 69 555 l 74 547 l 80 537 l 85 529 b 89 520 87 526 89 523 l 95 512 l 100 504 l 106 494 l 111 487 l 115 479 l 121 470 l 126 462 l 130 454 l 136 445 l 141 437 l 147 427 l 151 419 l 156 411 l 161 402 l 167 394 l 172 386 l 176 376 b 182 368 179 375 181 370 l 187 359 l 193 351 l 198 343 l 202 334 l 208 326 l 212 318 l 217 309 l 223 301 l 228 293 l 234 284 l 238 275 l 243 266 l 249 258 l 254 250 l 259 241 l 264 233 l 269 225 b 274 216 270 222 273 218 l 280 206 l 285 198 l 295 180 l 299 175 l 304 165 l 310 156 l 315 148 l 321 140 l 325 131 l 330 123 l 336 113 l 341 105 l 347 97 l 351 88 l 356 80 l 360 72 b 364 66 362 70 363 68 b 370 58 366 65 368 61 l 379 41 b 389 19 386 31 389 25 b 382 4 389 13 386 8 b 347 0 377 0 378 0 b 337 0 344 0 340 0 b 336 0 336 0 336 0 b 287 11 294 0 294 0 l 281 19 l 276 27 l 272 37 l 266 45 l 261 54 l 255 62 l 250 70 l 246 79 l 240 87 l 235 97 l 230 105 l 224 113 l 220 122 l 215 130 l 209 140 l 204 148 l 200 155 l 194 163 b 189 172 193 165 191 169 l 185 180 l 179 188 l 174 198 l 168 206 l 163 215 l 159 223 l 153 231 l 148 240 l 142 250 l 138 258 l 133 266 l 127 275 l 122 283 l 117 293 l 111 301 l 107 308 l 102 316 b 98 325 102 318 99 322 l 92 333 l 87 341 l 81 350 l 77 359 l 72 368 l 66 376 l 61 384 l 55 393 l 51 401 l 46 411 l 40 419 l 35 427 l 31 436 l 24 444 l 20 454 l 14 461 l 10 469 b 5 477 9 470 6 475 l 0 486 l -5 494 l -9 502 l -14 512 b -20 519 -16 513 -19 518 l -24 526 l -28 534 b -31 537 -29 536 -31 537 b -35 533 -32 537 -32 536 l -88 444 l -187 280 l -285 118 l -343 23 b -362 1 -352 6 -356 2 b -368 0 -364 0 -367 0 b -390 20 -381 0 -390 8 l -390 20 b -359 77 -390 27 -390 27 l -80 540 l -25 631 b -9 651 -17 644 -13 648 m -13 133 b -1 134 -9 133 -5 134 b 50 105 19 134 39 123 b 61 70 57 95 61 83 b 50 34 61 58 57 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 70 -57 40 -62 55 b -13 133 -62 98 -44 126 "
        },
        "\ue116": {
            width: 874,
            c: -705.5625,
            e: 0,
            d: 704.171875,
            f: 873.828125,
            name: "clefs.C",
            h: 892,
            height: 1411,
            g: "m 0 0 l 0 704 l 81 704 l 164 704 l 164 0 l 164 -705 l 81 -705 l 0 -705 l 0 0 m 225 0 l 225 704 l 246 704 l 268 704 l 268 366 l 268 30 l 274 36 b 314 79 284 44 302 63 b 413 302 357 137 392 213 b 432 327 419 325 421 327 b 449 306 443 327 447 322 b 611 115 457 195 529 115 b 651 122 624 115 638 118 b 728 316 705 140 724 188 b 729 388 728 343 729 366 b 671 636 729 533 711 602 b 581 662 649 652 616 662 b 477 637 545 662 510 654 l 475 636 l 477 634 b 503 627 488 633 495 631 b 545 556 532 612 545 584 b 491 480 545 525 526 491 b 465 475 481 476 473 475 b 379 563 417 475 379 516 b 389 602 379 576 382 588 b 541 691 409 641 479 681 b 582 694 555 693 568 694 b 865 462 714 694 834 598 b 873 393 871 440 873 416 b 865 318 873 368 871 341 b 639 84 839 194 748 101 b 612 83 630 83 620 83 b 511 116 577 83 543 94 b 504 120 509 119 506 120 b 504 120 504 120 504 120 b 469 59 504 120 488 93 l 432 -1 l 469 -61 b 504 -122 488 -94 504 -122 b 504 -122 504 -122 504 -122 b 511 -118 506 -122 509 -120 b 612 -84 543 -95 577 -84 b 665 -91 630 -84 647 -87 b 869 -338 771 -122 850 -216 b 873 -393 872 -356 873 -375 b 798 -595 873 -469 847 -540 b 581 -695 741 -662 660 -695 b 406 -626 517 -695 454 -672 b 381 -563 389 -608 381 -586 b 465 -477 381 -519 413 -477 b 545 -559 514 -477 545 -519 b 503 -629 545 -587 532 -613 b 477 -636 495 -633 488 -634 l 475 -637 l 477 -638 b 581 -663 510 -655 545 -663 b 671 -637 616 -663 649 -654 b 729 -391 711 -604 729 -534 b 728 -318 729 -368 728 -344 b 623 -118 722 -173 698 -125 b 611 -116 619 -116 615 -116 b 449 -308 528 -116 457 -198 b 432 -329 447 -323 443 -329 b 413 -304 421 -329 419 -326 b 314 -80 392 -215 357 -138 b 274 -37 302 -65 284 -45 l 268 -31 l 268 -368 l 268 -705 l 246 -705 l 225 -705 l 225 0 "
        },
        "\ue131": {
            width: 361,
            c: -513.890625,
            e: -108.890625,
            d: 865.28125,
            f: 251.8125,
            name: "accidentals.flat.arrowboth",
            h: 257,
            height: 1380,
            g: "m -8 863 b 0 865 -5 865 -2 865 b 12 859 4 865 9 863 b 19 844 16 856 16 854 b 102 631 34 769 65 690 l 107 622 l 107 616 l 107 616 b 89 597 107 605 99 597 b 78 601 85 597 83 598 b 47 615 69 606 55 612 b 19 622 39 618 21 622 b 19 622 19 622 19 622 b 19 619 19 622 19 620 b 20 383 20 616 20 586 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 93 -148 206 -40 179 -70 l 38 -200 l 23 -215 l 20 -218 l 20 -241 b 19 -268 20 -261 20 -266 b 19 -270 19 -269 19 -270 b 19 -270 19 -270 19 -270 b 47 -263 21 -270 39 -266 b 78 -250 55 -261 69 -255 b 89 -247 83 -247 85 -247 b 107 -265 99 -247 107 -254 l 107 -265 l 107 -270 l 102 -280 b 19 -493 65 -338 34 -418 b 0 -513 14 -508 10 -513 b -20 -488 -12 -513 -16 -508 b -103 -280 -38 -409 -66 -338 l -108 -270 l -108 -265 l -108 -265 b -91 -247 -108 -254 -100 -247 b -80 -250 -87 -247 -84 -247 b -49 -263 -70 -255 -57 -261 b -20 -270 -40 -266 -23 -270 b -20 -270 -20 -270 -20 -270 b -20 -268 -20 -270 -20 -269 b -21 175 -21 -266 -21 -208 b -20 619 -21 559 -21 616 b -20 622 -20 620 -20 622 b -20 622 -20 622 -20 622 b -49 615 -23 622 -40 618 b -80 601 -57 612 -70 606 b -91 597 -84 598 -87 597 b -108 616 -100 597 -108 605 l -108 616 l -108 622 l -103 631 b -20 840 -66 690 -38 761 b -8 863 -17 856 -14 859 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        "\ue142": {
            width: 427,
            c: -251.390625,
            e: -209.609375,
            d: 20.828125,
            f: 208.25,
            name: "scripts.dportato",
            h: 213,
            height: 273,
            g: "m -197 19 b 1 20 -194 19 -96 20 b 196 19 98 20 193 19 b 208 -1 204 15 208 6 b 202 -15 208 -5 206 -11 b 95 -22 197 -20 212 -22 b -1 -22 69 -22 38 -22 b -96 -22 -39 -22 -70 -22 b -204 -15 -213 -22 -198 -20 b -209 -1 -208 -11 -209 -5 b -197 19 -209 6 -205 15 m -12 -113 b -1 -113 -9 -113 -5 -113 b 55 -144 20 -113 43 -125 b 66 -181 62 -155 66 -169 b 27 -244 66 -208 53 -233 b 0 -251 19 -248 9 -251 b -57 -220 -21 -251 -43 -240 b -68 -181 -63 -208 -68 -195 b -12 -113 -68 -151 -46 -120 "
        },
        "\ue1a5": {
            width: 439,
            c: -206.9375,
            e: 0,
            d: 205.5625,
            f: 438.28125,
            name: "noteheads.u1triangle",
            h: 447,
            height: 413,
            g: "m 212 205 b 219 205 213 205 216 205 b 239 183 228 205 231 204 b 421 -163 298 40 363 -83 b 438 -191 434 -180 438 -186 b 436 -197 438 -193 438 -195 b 424 -206 434 -204 431 -206 b 406 -201 420 -206 415 -205 b 216 -156 347 -172 281 -156 b 23 -205 148 -156 80 -173 b 14 -206 20 -206 17 -206 b 0 -191 6 -206 0 -201 b 6 -176 0 -187 1 -183 b 202 193 63 -104 142 45 b 212 205 205 200 208 202 m 264 48 l 249 81 l 243 94 l 242 91 b 89 -126 208 36 137 -66 b 81 -138 85 -133 81 -138 b 81 -138 81 -138 81 -138 b 81 -138 81 -138 81 -138 b 95 -133 81 -138 87 -136 b 280 -94 156 -108 221 -94 b 334 -98 299 -94 317 -95 b 343 -100 338 -100 343 -100 b 343 -100 343 -100 343 -100 b 338 -94 343 -100 341 -97 b 264 48 318 -58 287 1 "
        },
        kn: {
            width: 408,
            c: -1.390625,
            e: 78.9375,
            d: 380.5625,
            f: 485.921875,
            name: "r",
            h: 417,
            height: 383,
            g: "m 362 379 b 378 380 367 380 372 380 b 472 348 415 380 453 368 b 485 315 481 338 485 327 b 462 273 485 298 477 281 b 439 268 454 269 446 268 b 398 290 424 268 409 275 b 344 319 385 309 364 319 b 281 269 315 319 289 301 b 279 262 280 266 279 262 b 276 256 279 261 277 258 b 274 250 276 254 274 251 b 238 127 273 248 257 193 b 201 4 217 61 201 5 b 166 -1 198 -1 200 -1 b 153 -1 163 -1 157 -1 b 141 -1 148 -1 144 -1 b 104 4 106 -1 107 -1 b 104 6 104 5 104 5 b 142 144 104 13 110 34 b 182 279 164 219 181 276 b 183 288 182 281 182 286 b 185 302 185 293 185 298 b 164 330 185 318 176 329 b 159 330 163 330 161 330 b 102 302 140 330 119 320 b 91 294 95 295 93 294 b 88 294 91 294 89 294 b 78 304 83 294 78 298 b 81 312 78 306 78 309 b 200 373 106 347 160 373 b 215 372 205 373 209 372 b 266 336 235 368 254 354 b 269 331 268 333 269 331 b 269 331 269 331 269 331 b 273 336 269 331 270 334 b 362 379 298 359 330 376 "
        },
        "\ue110": {
            width: 160,
            c: -194.4375,
            e: -80.3125,
            d: 193.0625,
            f: 78.9375,
            name: "scripts.rvarcomma",
            h: 81,
            height: 389,
            g: "m 23 191 b 32 193 27 193 29 193 b 78 145 57 193 78 172 b 78 140 78 143 78 141 b -10 -72 78 133 70 116 l -50 -165 b -70 -194 -63 -194 -63 -194 b -80 -184 -77 -194 -80 -193 b -76 -159 -80 -179 -78 -172 l -68 -116 b -12 159 -51 -31 -13 156 b 23 191 -6 176 6 188 "
        },
        "\ue10e": {
            width: 228,
            c: -216.671875,
            e: 0,
            d: 215.28125,
            f: 227.3125,
            name: "scripts.rcomma",
            h: 232,
            height: 433,
            g: "m 91 213 b 100 215 93 215 96 215 b 227 58 167 215 224 144 b 227 52 227 56 227 54 b 61 -201 227 -43 164 -138 b 29 -216 44 -212 36 -216 b 23 -211 27 -216 24 -213 b 21 -205 21 -208 21 -206 b 34 -193 21 -201 25 -197 b 122 -55 89 -161 122 -106 b 104 6 122 -33 117 -12 l 103 9 l 96 9 b 4 79 57 9 17 38 b 0 112 1 90 0 101 b 91 213 0 163 36 209 "
        },
        "\ue14a": {
            width: 1195,
            c: -176.390625,
            e: -597.53125,
            d: 327.78125,
            f: 596.171875,
            name: "scripts.downprall",
            h: 608,
            height: 505,
            g: "m -533 325 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 318 b -504 305 -504 305 -504 305 b -513 284 -504 300 -504 300 b -556 112 -541 226 -556 168 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 175 -367 169 -363 175 b -351 175 -353 175 -352 175 b -254 86 -343 175 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 175 -21 175 -20 175 b -8 173 -14 175 -10 173 b 80 86 -5 172 13 151 b 166 -1 127 37 166 -1 b 235 84 166 -1 197 37 b 311 173 306 173 304 172 b 317 175 313 175 314 175 b 326 173 319 175 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 75 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -175 409 -176 b 396 -175 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 152 -86 221 -1 190 -38 b 76 -176 81 -175 83 -173 b 70 -176 74 -176 73 -176 b 61 -175 66 -176 62 -175 b -27 -87 58 -173 38 -152 b -114 -1 -74 -38 -112 -1 b -182 -86 -114 -1 -145 -38 b -258 -176 -253 -175 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -175 -268 -176 -272 -175 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -75 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 225 b -533 325 -548 311 -540 322 "
        },
        "\ue16b": {
            width: 340,
            c: -569.4375,
            e: -170.140625,
            d: 0,
            f: 168.78125,
            name: "scripts.dmarcato",
            h: 172,
            height: 570,
            g: "m -160 -1 b -122 -1 -159 -1 -149 -1 l -87 -1 l -84 -2 b -74 -15 -78 -4 -77 -6 b -20 -201 -73 -18 -49 -102 b 31 -383 8 -301 31 -383 b 85 -197 31 -383 55 -300 b 140 -9 114 -95 138 -11 b 153 0 141 -4 148 0 b 168 -9 159 0 166 -4 b 168 -12 168 -11 168 -11 b 92 -287 168 -20 159 -55 b 14 -555 50 -434 14 -555 b 0 -569 14 -562 6 -569 b -17 -554 -8 -569 -17 -561 b -93 -286 -17 -552 -51 -433 b -170 -16 -166 -36 -170 -20 b -170 -15 -170 -15 -170 -15 b -160 -1 -170 -8 -167 -4 "
        },
        "\ue189": {
            width: 557,
            c: -548.609375,
            e: 0,
            d: 547.21875,
            f: 556.6875,
            name: "timesig.C22",
            h: 568,
            height: 1097,
            g: "m 289 545 b 298 547 292 545 295 547 b 318 533 306 547 315 541 b 319 429 319 530 319 529 l 319 327 l 334 327 b 526 223 412 326 485 286 b 543 172 537 206 543 190 b 447 76 543 122 503 76 b 445 76 446 76 446 76 b 359 165 394 77 359 119 b 368 205 359 179 362 193 b 441 251 382 233 412 251 b 455 250 446 251 451 251 b 460 248 458 250 460 248 b 460 248 460 248 460 248 b 454 254 460 250 458 251 b 334 295 419 280 378 294 l 319 295 l 319 4 l 319 -287 l 321 -286 b 328 -286 322 -286 325 -286 b 524 -100 424 -277 507 -198 b 541 -79 526 -84 530 -79 b 556 -97 551 -79 556 -84 b 548 -133 556 -105 553 -118 b 334 -318 521 -233 434 -306 b 322 -319 329 -318 323 -318 l 319 -319 l 319 -425 b 319 -472 319 -444 319 -459 b 313 -541 319 -544 318 -536 b 298 -548 308 -545 303 -548 b 279 -534 289 -548 281 -543 b 277 -425 277 -531 277 -530 l 277 -318 l 273 -318 b 13 -95 153 -305 51 -218 b 0 2 4 -62 0 -29 b 182 295 0 126 66 238 b 274 325 210 309 249 320 l 277 325 l 277 427 b 279 533 277 529 277 530 b 289 545 281 538 285 543 m 277 2 b 277 291 277 161 277 291 b 268 288 277 291 273 290 b 144 1 179 265 144 184 b 276 -284 144 -200 175 -268 l 277 -286 l 277 2 "
        },
        "\ue132": {
            width: 429,
            c: -229.171875,
            e: -176.9375,
            d: 633.328125,
            f: 251.8125,
            name: "accidentals.flat.slash",
            h: 257,
            height: 864,
            g: "m -8 631 b -1 633 -6 633 -4 633 b 19 620 8 633 16 629 b 20 504 20 616 20 615 b 20 391 20 443 20 391 b 84 425 20 391 49 406 l 147 456 l 152 456 b 153 456 153 456 153 456 b 175 436 166 456 175 447 b 172 427 175 433 174 430 b 92 380 170 420 172 422 l 20 343 l 20 245 l 20 148 l 21 151 b 137 200 59 183 99 200 b 182 191 152 200 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -143 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -225 b -21 54 -21 -212 -21 -212 b -21 322 -21 201 -21 322 b -85 290 -21 322 -50 308 l -148 256 l -153 256 b -155 256 -155 256 -155 256 b -176 277 -167 256 -176 266 b -174 286 -176 280 -175 283 b -93 333 -171 294 -174 293 l -21 370 l -21 494 b -20 620 -21 616 -21 616 b -8 631 -17 625 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
        },
        ".": {
            width: 176,
            c: 54.171875,
            e: 0,
            d: 233.328125,
            f: 175.578125,
            name: "period",
            h: 179,
            height: 180,
            g: "m 72 231 b 87 233 77 233 81 233 b 175 143 137 233 175 191 b 164 102 175 130 171 116 b 87 54 149 70 118 54 b 24 80 63 54 42 62 b 0 143 6 98 0 120 b 72 231 0 184 27 225 "
        },
        "\ue13c": {
            width: 245,
            c: -148.609375,
            e: -122.5,
            d: 147.21875,
            f: 121.140625,
            name: "scripts.open",
            h: 124,
            height: 297,
            g: "m -16 145 b 0 147 -10 147 -5 147 b 121 -1 66 147 121 77 b 114 -50 121 -16 118 -33 b -1 -148 95 -112 47 -148 b -85 -106 -31 -148 -61 -134 b -122 -1 -110 -76 -122 -38 b -16 145 -122 68 -81 134 m 12 111 b 0 113 8 113 4 113 b -68 22 -29 113 -61 73 b -70 0 -69 15 -70 6 b -13 -113 -70 -50 -47 -98 b -1 -115 -9 -115 -5 -115 b 63 -40 24 -115 53 -83 b 68 -1 66 -27 68 -15 b 12 111 68 48 46 97 "
        },
        sm: {
            width: 717,
            c: -251.390625,
            e: -118.421875,
            d: 575,
            f: 597.53125,
            name: "f",
            h: 381,
            height: 827,
            g: "m 460 575 b 464 575 461 575 462 575 b 488 575 470 575 481 575 b 500 573 491 575 498 575 b 594 504 543 570 588 538 b 597 488 596 498 597 494 b 528 418 597 450 564 418 b 502 423 519 418 510 419 b 465 481 477 434 465 458 b 488 529 465 500 472 516 b 490 530 490 530 490 530 b 490 530 490 530 490 530 b 468 518 488 530 475 523 b 349 340 419 486 377 420 b 347 330 348 334 347 330 b 383 329 347 329 363 329 b 428 326 423 329 424 329 b 442 302 438 320 442 312 b 430 281 442 294 438 286 b 385 276 424 277 426 276 l 377 276 l 332 276 l 330 269 b 178 -118 303 126 250 -9 b 1 -250 129 -194 69 -237 b -20 -251 -6 -251 -13 -251 b -114 -187 -65 -251 -100 -227 b -118 -156 -117 -177 -118 -166 b -51 -84 -118 -116 -91 -84 b -31 -87 -46 -84 -39 -86 b 16 -152 0 -95 16 -125 b -12 -205 16 -173 8 -194 b -16 -208 -14 -206 -16 -208 b -14 -208 -16 -208 -14 -208 b -9 -206 -14 -208 -12 -208 b 74 -125 23 -197 54 -166 b 172 225 98 -79 125 22 b 185 276 178 252 183 275 b 185 276 185 276 185 276 b 141 276 185 276 181 276 b 91 280 96 276 96 276 b 77 302 83 286 77 294 b 91 326 77 312 83 320 b 148 329 95 329 96 329 l 198 330 l 202 341 b 460 575 249 474 351 566 "
        },
        6: {
            width: 476,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 475.03125,
            name: "six",
            h: 485,
            height: 676,
            g: "m 255 648 b 274 648 259 648 266 648 b 314 647 288 648 307 648 b 450 555 374 637 438 594 b 454 530 453 547 454 538 b 375 451 454 486 416 451 b 328 468 359 451 343 455 b 300 526 310 483 300 504 b 352 598 300 558 319 590 b 356 600 355 598 356 600 b 352 602 356 600 355 601 b 288 616 330 612 308 616 b 210 584 257 616 230 605 b 164 433 189 559 174 508 b 160 375 163 415 160 381 b 160 375 160 375 160 375 b 160 375 160 375 160 375 b 168 377 160 375 164 376 b 258 395 200 390 228 395 b 366 368 294 395 328 387 b 475 223 436 333 475 283 b 472 197 475 215 473 206 b 349 65 462 141 419 95 b 259 43 317 51 288 43 b 167 69 230 43 200 52 b 4 290 80 113 20 195 b 0 350 1 309 0 329 b 20 468 0 391 6 433 b 255 648 58 563 155 637 m 269 363 b 257 363 265 363 261 363 b 210 345 236 363 220 356 b 186 226 196 325 186 272 b 187 198 186 216 186 206 b 213 95 191 151 202 112 b 257 76 221 83 238 76 b 270 77 261 76 266 76 b 321 156 299 81 310 100 b 329 229 326 183 329 206 b 321 301 329 252 326 275 b 269 363 311 343 298 359 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "
        },
        "\ue1ae": {
            width: 289,
            c: -343.0625,
            e: 0,
            d: 341.671875,
            f: 288.5625,
            name: "noteheads.s2slash",
            h: 294,
            height: 686,
            g: "m 202 341 b 235 341 213 341 225 341 b 261 341 249 341 259 341 b 288 309 276 340 288 326 l 288 309 b 163 -320 288 305 166 -311 b 142 -341 160 -330 153 -337 b 83 -343 140 -343 111 -343 b 21 -341 54 -343 24 -343 b 0 -311 8 -337 0 -325 b 0 -311 0 -311 0 -311 b 123 316 0 -306 118 297 b 144 340 126 327 133 336 b 202 341 147 341 151 341 "
        },
        "\ue192": {
            width: 310,
            c: -355.5625,
            e: -155.171875,
            d: 26.390625,
            f: 153.8125,
            name: "arrowheads.close.11",
            h: 158,
            height: 383,
            g: "m -8 25 b -1 26 -6 25 -4 26 b 21 12 8 26 17 20 b 27 -8 24 9 24 9 b 144 -304 50 -115 93 -227 b 153 -322 151 -315 152 -318 b 153 -330 153 -325 153 -327 b 129 -355 153 -344 142 -355 b 111 -351 123 -355 117 -354 b 0 -319 76 -330 38 -319 b -100 -344 -35 -319 -69 -327 b -112 -351 -104 -345 -110 -348 b -129 -355 -119 -355 -123 -355 b -155 -329 -144 -355 -155 -344 b -145 -304 -155 -322 -155 -319 b -28 -6 -95 -226 -53 -119 b -8 25 -24 13 -20 19 "
        },
        "\ue129": {
            width: 781,
            c: -577.78125,
            e: -390.640625,
            d: 0,
            f: 389.28125,
            name: "scripts.dverylongfermata",
            h: 397,
            height: 578,
            g: "m -378 -2 b -368 -1 -375 -1 -374 -1 b -349 -13 -360 -1 -353 -5 l -348 -16 l -348 -212 l -348 -408 l 0 -408 l 347 -408 l 347 -212 l 347 -16 l 348 -13 b 367 0 352 -5 360 0 b 387 -13 375 0 383 -5 l 389 -16 l 389 -288 l 389 -561 l 387 -565 b 377 -575 385 -569 381 -573 l 372 -577 l 0 -577 l -374 -577 l -378 -575 b -389 -565 -382 -573 -386 -569 l -390 -561 l -390 -288 l -390 -16 l -389 -13 b -378 -2 -386 -8 -382 -4 m -274 -2 b -266 -1 -272 -1 -270 -1 b -246 -13 -257 -1 -250 -5 l -245 -16 l -245 -109 l -245 -202 l 0 -202 l 243 -202 l 243 -109 l 245 -16 l 245 -13 b 265 0 249 -5 257 0 b 284 -13 272 0 280 -5 l 285 -16 l 285 -170 l 285 -325 l 284 -327 b 273 -338 281 -331 279 -336 l 269 -340 l 0 -340 l -270 -340 l -274 -338 b -285 -327 -280 -336 -283 -331 l -287 -325 l -287 -170 l -287 -16 l -285 -13 b -274 -2 -283 -8 -280 -4 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -125 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -58 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "
        },
        3: {
            width: 412,
            c: -1.390625,
            e: -1.359375,
            d: 673.609375,
            f: 409.6875,
            name: "three",
            h: 418,
            height: 676,
            g: "m 174 648 b 191 648 176 648 183 648 b 225 648 204 648 220 648 b 402 523 317 638 389 588 b 404 504 404 518 404 511 b 402 484 404 495 404 488 b 264 373 389 437 334 394 b 257 370 259 372 257 372 b 257 370 257 370 257 370 b 264 369 258 370 261 369 b 409 202 359 334 409 268 b 318 72 409 152 381 104 b 200 43 281 52 240 43 b 23 113 134 43 69 68 b 0 169 6 129 0 150 b 77 250 0 211 29 250 l 77 250 b 152 175 125 250 152 212 b 103 102 152 145 137 116 b 103 102 103 102 103 102 b 147 94 103 101 132 95 b 153 94 149 94 151 94 b 265 206 219 94 265 141 b 264 226 265 213 265 219 b 147 355 253 300 204 354 b 126 372 133 356 126 362 b 147 388 126 383 132 388 b 254 475 196 391 238 425 b 259 502 258 484 259 494 b 182 593 259 544 228 583 b 156 595 175 595 166 595 b 115 593 142 595 129 594 l 111 591 l 115 588 b 152 525 141 575 152 550 b 92 450 152 491 130 458 b 76 448 87 448 81 448 b -1 530 32 448 -1 488 b 20 581 -1 548 5 566 b 174 648 55 619 108 641 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "
        },
        9: {
            width: 476,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 475.03125,
            name: "nine",
            h: 485,
            height: 676,
            g: "m 191 647 b 212 650 198 648 205 650 b 255 644 227 650 243 647 b 458 448 348 616 428 540 b 475 343 469 415 475 379 b 460 244 475 308 469 274 b 193 44 421 125 303 44 b 91 69 157 44 122 51 b 19 161 43 97 19 126 b 21 181 19 168 20 175 b 98 241 32 220 65 241 b 170 186 129 241 160 223 b 172 166 171 179 172 173 b 121 94 172 134 152 102 b 117 93 118 94 117 93 b 121 90 117 93 118 91 b 185 76 142 80 164 76 b 270 119 220 76 251 91 b 308 259 287 145 300 194 b 313 318 310 277 313 311 b 313 318 313 318 313 318 b 313 318 313 318 313 318 b 304 315 313 318 308 316 b 216 295 273 302 245 295 b 145 308 193 295 170 300 b 19 398 88 327 42 361 b 0 469 5 420 0 444 b 24 551 0 497 8 526 b 191 647 54 597 125 637 m 227 615 b 215 616 224 616 220 616 b 202 615 210 616 206 616 b 152 536 174 611 163 593 b 144 463 147 509 144 486 b 152 391 144 440 147 418 b 216 329 163 344 179 329 b 280 391 253 329 269 344 b 288 463 285 418 288 440 b 280 536 288 486 285 509 b 227 615 269 594 258 611 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "
        },
        "\ue13d": {
            width: 245,
            c: -237.5,
            e: -122.5,
            d: 147.21875,
            f: 121.140625,
            name: "scripts.thumb",
            h: 124,
            height: 386,
            g: "m -16 145 b -1 147 -10 147 -5 147 b 119 20 58 147 111 93 b 121 0 119 13 121 6 b 32 -143 121 -66 84 -125 l 24 -144 l 24 -180 b 24 -187 24 -183 24 -184 b 19 -227 24 -222 24 -220 b 0 -237 14 -234 6 -237 b -20 -227 -8 -237 -16 -234 b -25 -187 -25 -220 -25 -222 b -25 -180 -25 -184 -25 -183 l -25 -144 l -34 -143 b -122 0 -85 -125 -122 -66 b -121 20 -122 6 -121 13 b -16 145 -114 84 -70 137 m 12 111 b 0 113 8 113 4 113 b -68 22 -29 113 -61 73 b -69 0 -69 15 -69 6 b -13 -113 -69 -50 -46 -98 b -1 -115 -9 -115 -5 -115 b 63 -40 24 -115 53 -83 b 68 -1 66 -27 68 -15 b 12 111 68 48 46 97 "
        },
        4: {
            width: 469,
            c: -1.390625,
            e: 0,
            d: 673.609375,
            f: 468.21875,
            name: "four",
            h: 478,
            height: 676,
            g: "m 174 637 b 232 638 175 638 189 638 b 277 638 245 638 259 638 l 378 638 l 381 636 b 389 623 386 633 389 627 b 382 609 389 618 386 613 b 366 590 381 606 372 598 l 313 529 l 245 451 l 209 411 l 155 348 l 84 268 b 59 240 72 252 59 240 b 59 240 59 240 59 240 b 151 238 59 238 68 238 l 242 238 l 242 304 b 243 372 242 369 242 370 b 289 426 245 375 254 386 l 303 441 l 317 456 l 338 483 l 360 506 l 371 520 b 386 527 375 526 381 527 b 400 519 392 527 397 525 b 401 440 401 516 401 515 b 401 377 401 423 401 402 l 401 238 l 426 238 b 453 237 449 238 450 238 b 465 218 461 234 465 226 b 460 202 465 212 464 206 b 426 197 454 197 453 197 l 401 197 l 401 180 b 451 88 402 129 412 109 b 468 69 465 81 468 79 b 461 55 468 62 466 59 l 458 54 l 321 54 l 185 54 l 182 55 b 175 69 176 59 175 62 b 191 88 175 79 176 81 b 240 180 230 109 240 129 l 240 197 l 125 197 b 73 195 104 195 87 195 b 8 197 10 195 9 197 b 0 212 2 200 0 205 b 0 212 0 212 0 212 b 20 243 0 219 0 219 b 163 611 104 344 163 493 b 174 637 163 629 166 634 m 234 -1 l 235 -1 l 232 -1 l 234 -1 m 234 673 l 235 673 l 232 673 l 234 673 "
        },
        an: {
            width: 568,
            c: -248.609375,
            e: -53.078125,
            d: 384.71875,
            f: 513.140625,
            name: "p",
            h: 485,
            height: 634,
            g: "m 185 383 b 196 384 187 383 191 384 b 277 334 230 384 259 365 b 288 301 281 325 288 306 b 288 297 288 298 288 297 b 294 302 289 297 291 300 b 394 370 323 338 367 368 b 404 372 398 370 401 372 b 510 272 453 372 498 329 b 513 237 513 262 513 251 b 507 172 513 218 511 193 b 326 -34 487 59 412 -26 b 314 -36 322 -36 318 -36 b 274 -25 298 -36 283 -31 l 265 -16 b 224 44 246 -1 232 20 b 223 50 224 47 223 50 b 223 50 223 50 223 50 b 149 -197 221 48 149 -194 b 149 -198 149 -197 149 -198 b 170 -211 149 -202 155 -205 b 187 -215 174 -211 175 -212 b 204 -231 201 -219 204 -222 b 197 -245 204 -240 202 -243 l 194 -248 l 76 -248 l -42 -248 l -46 -245 b -53 -231 -51 -243 -53 -240 b -35 -215 -53 -222 -49 -218 b -13 -211 -21 -212 -20 -212 b -6 -208 -10 -209 -8 -208 b 0 -206 -6 -208 -2 -206 b 25 -188 13 -201 21 -195 b 163 280 28 -183 163 276 b 166 291 163 283 164 287 b 167 302 167 295 167 300 b 155 325 167 315 161 325 b 155 325 155 325 155 325 b 65 230 125 322 85 280 b 53 215 61 218 58 215 b 51 215 53 215 51 215 b 42 225 46 215 42 218 b 57 263 42 231 47 244 b 140 361 77 305 104 337 b 152 370 144 365 149 369 b 185 383 157 376 172 381 m 374 306 b 366 308 371 308 368 308 b 300 273 348 308 321 294 b 284 254 288 262 287 259 b 280 243 283 250 281 245 b 257 169 279 240 270 213 l 236 98 l 236 93 b 251 48 238 77 243 61 b 279 27 258 37 272 27 b 281 27 279 27 280 27 b 291 31 281 27 287 30 b 396 170 334 52 378 109 b 406 247 402 197 406 225 b 401 277 406 259 405 270 b 374 306 397 290 383 304 "
        },
        "\ue146": {
            width: 1143,
            c: -300,
            e: -571.671875,
            d: 275,
            f: 570.3125,
            name: "scripts.prallmordent",
            h: 582,
            height: 575,
            g: "m 156 273 b 163 275 159 273 161 275 b 183 262 171 275 179 269 b 185 158 185 259 185 259 l 185 56 l 231 112 b 284 175 277 172 279 172 b 289 175 285 175 288 175 b 299 173 294 175 298 173 b 462 11 303 172 338 134 l 475 -1 l 503 34 b 541 76 534 72 536 75 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -175 382 -176 b 368 -175 374 -176 371 -176 b 280 -87 367 -173 345 -152 b 194 0 234 -38 194 0 b 189 -6 194 0 191 -2 l 185 -12 l 185 -147 b 185 -211 185 -173 185 -194 b 179 -293 185 -297 185 -287 b 164 -300 175 -297 170 -300 b 145 -287 156 -300 148 -295 b 144 -175 144 -284 144 -284 l 142 -63 l 100 -118 b 46 -176 57 -170 54 -176 b 42 -176 44 -176 43 -176 b -54 -87 32 -175 38 -180 b -140 0 -102 -38 -140 0 b -209 -86 -141 0 -171 -38 b -285 -175 -280 -175 -279 -173 b -291 -176 -287 -176 -289 -176 b -300 -175 -295 -176 -299 -175 b -464 -12 -304 -173 -340 -137 l -476 0 l -504 -34 b -543 -77 -534 -73 -537 -76 b -549 -79 -545 -79 -547 -79 b -571 -58 -562 -79 -571 -69 b -568 -50 -571 -55 -570 -52 b -393 170 -566 -43 -398 165 b -379 175 -389 173 -383 175 b -370 173 -375 175 -372 175 b -281 86 -367 172 -347 151 b -196 0 -235 37 -196 0 b -126 84 -196 0 -164 37 b -50 175 -55 173 -57 172 b -44 175 -49 175 -47 175 b -35 173 -42 175 -38 173 b 127 11 -32 172 16 123 l 138 -1 l 141 1 l 144 4 l 144 130 b 145 261 144 256 144 258 b 156 273 147 266 151 270 "
        },
        "\ue19b": {
            width: 1051,
            c: 0,
            e: -525.390625,
            d: 1069.4375,
            f: 524.03125,
            name: "accordion.accDiscant",
            h: 535,
            height: 1070,
            g: "m -42 1068 b 1 1069 -27 1069 -13 1069 b 524 534 285 1069 524 831 b 0 0 524 231 283 0 b -118 12 -38 0 -77 4 b -487 336 -284 51 -424 175 b -525 534 -513 402 -525 469 b -42 1068 -525 802 -325 1043 m 38 1038 b 0 1040 25 1040 12 1040 b -460 726 -198 1040 -386 915 l -461 722 l 0 722 l 460 722 l 458 726 b 38 1038 390 900 224 1023 m 472 686 l 470 693 l 0 693 l -470 693 l -473 686 b -496 536 -488 638 -496 587 b -472 377 -496 483 -488 429 l -470 375 l 0 375 l 470 375 l 470 377 b 495 536 487 429 495 483 b 472 686 495 587 488 638 m 458 344 l 460 345 l 0 345 l -461 345 l -460 344 b -402 238 -454 323 -424 269 b 0 27 -303 98 -152 27 b 401 238 151 27 302 98 b 458 344 423 269 453 323 "
        },
        "\ue173": {
            width: 338,
            c: -823.609375,
            e: 0,
            d: 537.5,
            f: 337.5625,
            name: "accidentals.sharp.arrowdown",
            h: 344,
            height: 1362,
            g: "m 230 536 b 239 537 232 537 234 537 b 258 525 247 537 254 533 l 259 522 l 259 390 l 259 258 l 285 265 b 318 270 302 269 311 270 b 336 259 328 270 332 268 b 337 208 336 256 337 233 b 336 158 337 184 336 159 b 302 140 332 148 329 147 b 259 130 266 131 259 130 b 259 65 259 130 259 104 b 259 20 259 51 259 36 l 259 -88 l 285 -81 b 318 -76 302 -77 311 -76 b 332 -81 325 -76 328 -77 b 337 -123 336 -87 337 -86 l 337 -138 l 337 -154 b 332 -195 337 -191 336 -190 b 281 -211 328 -200 328 -200 b 262 -216 272 -213 264 -216 l 259 -216 l 259 -350 l 259 -483 l 258 -487 b 239 -500 254 -495 246 -500 b 220 -487 231 -500 223 -495 l 219 -483 l 217 -355 l 217 -227 l 216 -227 l 194 -233 l 152 -244 b 129 -250 140 -247 130 -250 b 127 -411 127 -250 127 -258 b 127 -576 127 -548 127 -573 b 126 -579 126 -577 126 -579 b 127 -580 126 -579 126 -580 b 133 -579 129 -580 130 -579 b 186 -558 152 -576 170 -569 b 197 -555 190 -556 194 -555 b 215 -573 206 -555 215 -562 l 215 -575 l 215 -580 l 209 -588 b 126 -802 172 -648 141 -727 b 107 -823 123 -818 118 -823 b 87 -798 95 -823 91 -818 b 5 -588 69 -719 40 -648 l 0 -580 l 0 -575 b 0 -573 0 -575 0 -575 b 16 -555 0 -562 6 -555 b 27 -558 20 -555 24 -556 b 81 -579 44 -569 62 -576 b 87 -580 84 -579 85 -580 b 88 -579 88 -580 88 -580 b 87 -576 88 -579 88 -577 b 87 -416 87 -573 87 -550 b 85 -261 87 -270 87 -261 b 85 -261 85 -261 85 -261 b 32 -273 74 -263 35 -273 b 13 -261 24 -273 16 -268 b 12 -209 12 -256 12 -256 l 12 -162 l 13 -158 b 74 -134 17 -148 17 -148 l 87 -131 l 87 -22 b 85 86 87 79 87 86 b 85 86 85 86 85 86 b 32 75 74 83 35 75 b 13 86 24 75 16 79 b 12 137 12 90 12 90 l 12 184 l 13 188 b 73 212 17 198 17 198 l 87 215 l 87 348 l 87 481 l 88 486 b 107 498 92 493 99 498 b 117 495 110 498 114 497 b 126 486 121 494 125 490 l 127 481 l 127 354 l 127 226 l 133 226 b 172 236 136 227 153 231 l 212 247 l 217 248 l 217 384 l 219 522 l 220 525 b 230 536 221 529 225 533 m 217 9 b 217 119 217 70 217 119 l 217 119 b 194 113 217 119 206 116 l 152 102 b 129 97 140 100 130 97 b 127 -12 127 97 127 91 l 127 -122 l 133 -120 b 172 -111 136 -119 153 -115 l 212 -101 l 217 -98 l 217 9 "
        },
        "\ue108": {
            width: 311,
            c: -11.109375,
            e: -10.890625,
            d: 462.5,
            f: 299.4375,
            name: "scripts.arpeggio.arrow.1",
            h: 294,
            height: 475,
            g: "m 136 461 b 142 462 137 462 140 462 b 166 450 152 462 161 456 b 171 429 168 447 168 445 b 288 131 194 322 238 209 b 298 115 295 120 296 118 b 299 106 298 112 299 109 b 273 81 299 91 287 81 b 255 86 268 81 261 83 b 155 116 225 104 183 116 l 152 116 l 149 108 b 141 83 148 102 144 91 b 134 48 137 69 134 58 b 149 9 134 34 140 25 b 153 -1 152 5 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 147 -11 b 122 2 138 -11 133 -6 b 95 61 104 20 95 38 b 107 108 95 75 99 90 b 108 113 107 111 108 112 b 107 113 108 113 108 113 b 102 113 106 113 104 113 b 31 86 76 108 53 98 b 14 80 24 81 20 80 b -10 106 0 80 -10 91 b 0 131 -10 115 -9 116 b 115 430 49 209 91 318 b 136 461 119 451 123 456 "
        },
        "\ue2bd": {
            width: 1085,
            c: -7013.890625,
            e: -1084.71875,
            d: 7012.515625,
            f: 0,
            name: "brace445",
            h: 0,
            height: 14027,
            g: "m -19 7011 b -12 7012 -16 7012 -15 7012 b -1 7005 -8 7012 -4 7011 b 0 7001 -1 7004 0 7002 b -15 6970 0 6997 -4 6990 b -609 4558 -409 6258 -609 5447 b -609 4527 -609 4548 -609 4538 b -606 4348 -609 4437 -608 4413 b -358 2811 -588 3844 -502 3319 b -226 2400 -319 2677 -298 2611 b -119 1751 -154 2187 -119 1968 b -1029 6 -119 1090 -444 444 b -1047 -8 -1038 -1 -1047 -8 b -1029 -23 -1047 -8 -1038 -15 b -119 -1769 -444 -461 -119 -1108 b -226 -2416 -119 -1986 -154 -2204 l -258 -2509 b -608 -4562 -493 -3201 -608 -3895 b -15 -6972 -608 -5434 -409 -6259 b -1 -7002 -4 -6991 -1 -6998 b -1 -7006 -1 -7004 -1 -7005 b -13 -7013 -4 -7012 -9 -7013 b -23 -7009 -18 -7013 -22 -7012 b -109 -6851 -31 -6995 -80 -6908 b -768 -4804 -452 -6201 -679 -5498 l -773 -4759 b -815 -4090 -798 -4565 -815 -4309 b -813 -4029 -815 -4069 -813 -4050 b -516 -2340 -805 -3441 -709 -2897 b -375 -1519 -422 -2063 -375 -1786 b -1059 -33 -375 -911 -616 -362 b -1084 -8 -1076 -20 -1084 -15 b -1059 15 -1084 -2 -1076 4 b -640 484 -895 137 -751 298 b -375 1502 -463 779 -375 1131 b -512 2309 -375 1766 -420 2040 l -531 2366 b -816 4091 -719 2912 -816 3502 b -776 4743 -816 4309 -802 4527 b -43 6975 -680 5519 -436 6265 b -19 7011 -23 7009 -23 7009 "
        }
    },
    km: "normal",
    Xl: 1903,
    Mn: -150,
    jm: "normal",
    bm: {
        Yn: -2066.671875,
        Wn: -695.53125,
        Xn: 1902.78125,
        Vn: 1159.671875
    },
    pn: 1E3,
    Zm: {
        en: "Gonville-18",
        Tn: "Version 0.1.8955 ",
        Sn: "",
        Am: "Gonville-18",
        wm: "Gonville-18",
        im: "No copyright is claimed on this font file.",
        description: "",
        Jn: "",
        nm: "",
        om: "",
        On: "FontForge 2.0 : Gonville-18 : 22-5-2010",
        Nm: "",
        Mm: "",
        Um: "",
        ym: "18"
    },
    mm: -2066,
    ih: "Gonville-18",
    lineHeight: 4093,
    Nn: 50
};
var mc = mc || {};

function H() {}
var nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc;

function I() {
    var a = nc;
    a === f && (nc = a = new H);
    return a
}

function zc(a, b) {
    b = b || {};
    b.jg = J(a, "justify", "left")
}

function Ac(a, b) {
    b = b || {};
    b.lm = K(a, "default-x", 0);
    b.Ua = K(a, "default-y", 0);
    b.mn = K(a, "relative-x", 0);
    b.nn = K(a, "relative-y", 0);
    return b
}
s = H.prototype;
s.oa = function (a, b) {
    b = b || {};
    b.Cj = J(a, "font-family", f);
    b.xm = L(a, "font-style", ["normal", "italic"], "normal");
    b.Ea = J(a, "font-size", "medium");
    b.Ea = isNaN(parseFloat(b.Ea)) ? b.Ea : parseFloat(b.Ea);
    b.Dj = L(a, "font-weight", ["normal", "bold"], "normal");
    return b
};

function Bc(a, b) {
    b = b || {};
    b.color = J(a, "color", "#000000")
}

function M(a, b, c) {
    c = c || {};
    c.position = Ac(b);
    c.font = a.oa(b);
    Bc(b, c)
}

function Cc(a, b) {
    b = b || {};
    b.Mk = L(a, "halign", ["left", "center", "right"], "left")
}

function Dc(a, b) {
    b = b || {};
    b.Pl = L(a, "valign", ["top", "middle", "bottom", "baseline"], "middle")
}

function Ec(a, b) {
    b = b || {};
    b.Rn = L(a, "valign-image", ["top", "middle", "bottom"], "middle")
}

function Fc(a, b, c) {
    c = c || {};
    M(a, b, c);
    Cc(b, c);
    Dc(b, c)
}

function Gc(a, b, c) {
    return L(a, b, ["solid", "dashed", "dotted", "wavy"], c)
}

function Hc(a, b) {
    b = b || {};
    b.hj = K(a, "dash-length", 5);
    b.Fl = K(a, "space-length", 5)
}

function Ic(a, b) {
    var c = b = b || {}, d;
    d = L(a, "enclosure", "rectangle square oval circle bracket triangle diamond none".split(" "), b.te);
    c.te = d
}

function Jc(a, b, c) {
    c = c || {};
    zc(b, c);
    Fc(a, b, c);
    Ic(b, c);
    c.text = J(b, f, "");
    return c
}

function Kc(a) {
    return N(a, "print-object", i)
}

function Lc(a, b) {
    b = b || {};
    b.eb = Kc(a);
    b.gn = N(a, "print-dot", i);
    b.vl = N(a, "print-spacing", l);
    b.jn = N(a, "print-lyric", i)
}

function O(a) {
    return a
}

function Mc(a) {
    return a
}

function L(a, b, c, d) {
    a = J(a, b, d);
    return a !== d ? Nc(c, d, a) : d
}

function Nc(a, b, c) {
    return a.some(function (a) {
        return c === a
    }) ? c : b
}

function Oc(a, b, c) {
    return L(a, b, ["start", "stop"], c)
}

function Pc(a, b) {
    return L(a, "type", ["start", "stop", "continue"], b)
}

function N(a, b, c) {
    return "yes" === L(a, b, ["yes", "no"], c ? "yes" : "no")
}

function Qc(a, b) {
    b = b || {};
    b.size = L(a, "size", ["full", "cue", "large"], "full");
    return b
}

function Rc(a, b) {
    b = b || {};
    b.bd = N(a, "parentheses", l);
    b.dc = b.bd ? l : N(a, "bracket", l);
    !b.bd && !b.dc && Qc(a, b)
}

function Sc(a, b) {
    return L(a, b, "ABCDEFG".split(""), f)
}
s.ha = function (a, b) {
    b = b || {};
    b.step = Sc(a, "step");
    b.Ia = Mc(K(a, "octave", f));
    b.L = K(a, "alter", 0);
    return b
};

function Tc(a, b) {
    b = b || {};
    b.ah = Sc(a, "display-step");
    b.$g = Mc(K(a, "display-octave", f))
}

function Uc(a, b) {
    b = b || {};
    b.ah = Sc(a, "display-step");
    b.$g = Mc(K(a, "display-octave", f));
    b.Vm = N(a, "measure", l)
}

function Vc(a, b) {
    var b = b || {}, c = J(a, "time-only", "");
    c && (b.Gn = c.split(",").map(function (a) {
        return Number(a)
    }))
}
s.ua = function (a, b) {
    b = b || {};
    b.duration = O(K(a, "duration", f));
    return b
};

function Wc(a) {
    var b;
    b = b || {};
    b.type = O(Oc(a, "type", f));
    Vc(a, b);
    return b
}

function Xc(a, b, c) {
    var c = c || {}, d = P(b, "type");
    d && Yc(d, c);
    c.rd = Zc(b, "dot");
    if (d = P(b, "accidental")) c.Na = a.Ob(d);
    if (d = P(b, "time-modification")) c.Ll = $c(d);
    (d = P(b, "stem")) && ad(d, c);
    if (d = P(b, "notehead")) c.Te = a.aa(d);
    Q(b, "beam", function (a, b) {
        c.je = c.je || [];
        var d;
        d = d || {};
        d.type = O(L(b, f, ["begin", "continue", "end", "forward hook", "backward hook"], f));
        d.k = Mc(K(b, "number", 1));
        if ("begin" === d.type || "continue" === d.type) d.tm = L(b, "fan", ["accel", "rit"], "none");
        Bc(b, d);
        c.je.push(d)
    }, a);
    (d = P(b, "notations")) && a.yd(d, c);
    Q(b,
        "lyric", function (a, b) {
            c.Qa = c.Qa || [];
            var d = bd(this, b);
            c.Qa.push(d)
        }, a);
    a.O(b, c);
    cd(a, b, c);
    M(a, b, c);
    Lc(b, c);
    c.Pk = dd(b, "chord");
    (d = P(b, "pitch")) && a.ha(d, c);
    (a = P(b, "unpitched")) && Tc(a, c);
    if (b = P(b, "rest")) c.ig = i, Uc(b, c)
}

function ed(a, b, c) {
    return L(a, b, "1024th 512th 256th 128th 64th 32nd 16th eighth quarter half whole breve long maxima".split(" "), c)
}

function Yc(a, b) {
    b = b || {};
    b.type = ed(a, f, f);
    b.size = Qc(a, b.hg ? "full" : "cue")
}

function ad(a, b) {
    b = b || {};
    b.Gl = L(a, f, ["down", "up", "none", "double"], f)
}
s.O = function (a, b) {
    b = b || {};
    b.Ka = K(a, "staff", 1);
    return b
};
s.aa = function (a, b) {
    b = b || {};
    b.Te = L(a, f, "slash;triangle;diamond;square;cross;x;circle-x;inverted triangle;arrow down;arrow up;slashed;back slashed;normal;cluster;circle dot;left triangle;rectangle;none;do;re;mi;fa;fa up;so;la;ti".split(";"), "normal");
    b.filled = N(a, "filled", i);
    b.bd = N(a, "parentheses", l);
    this.oa(a, b);
    Bc(a, b);
    return b
};

function $c(a) {
    var b;
    b = b || {};
    b.Mi = O(K(a, "actual-notes", f));
    b.fl = O(K(a, "normal-notes", f));
    var c = P(a, "normal-type");
    c && (b.ii = ed(c, f), b.hi = Zc(a, "normal-dot"));
    return b
}

function fd(a, b) {
    var c = I(),
        b = b || {}, d = P(a, "grace");
    d && (b.ca = i, gd(d, b));
    var e = P(a, "cue");
    e && (b.Qk = i);
    !d && !e && (b.hg = i);
    Xc(c, a, b);
    (b.hg || b.Qk) && c.ua(a, b);
    (b.hg || b.ca) && Q(a, "tie", function (a, c) {
        b.Di = b.Di || [];
        b.Di.push(Wc(c))
    }, c)
}

function gd(a, b) {
    b = b || {};
    b.An = K(a, "steal-time-previous", 0);
    b.zn = K(a, "steal-time-following", 0);
    b.Tm = K(a, "make-time", 0);
    b.ed = N(a, "slash", l)
}

function hd(a, b) {
    var c = I(),
        b = b || {};
    b.k = K(a, "number", 1);
    b.sn = L(a, "show-frets", ["number", "letters"], "number");
    b.eb = Kc(a);
    b.vl = N(a, "print-spacing", l);
    b.Eg = L(a, "staff-type", ["ossia", "cue", "editorial", "regular", "alternate"], "regular");
    b.fa = K(a, "staff-lines", 5);
    0 >= b.fa && (b.fa = 5);
    b.xn = K(a, "staff-size", 100);
    b.em = K(a, "capo", 0);
    Q(a, "staff-tuning", function (a, c) {
        var g;
        g = g || {};
        g.Vb = O(K(c, "line", f));
        g.step = Sc(c, "tuning-step");
        g.Ia = Mc(K(c, "tuning-octave", f));
        g.L = K(c, "tuning-alter", 0);
        b.xi = b.xi || [];
        b.xi[g.Vb - 1] =
            g
    }, c)
}
s.jb = function (a, b) {
    b = b || {};
    b.Yb = L(a, f, ["none", "brace", "line", "bracket", "square"], "brace");
    b.rf = K(a, "top-staff", f);
    b.me = K(a, "bottom-staff", f);
    Ac(a, b);
    Bc(a, b);
    return b
};

function id(a, b) {
    var b = b || {}, c = P(a, "slash-type");
    c && (b.tn = Oc(c, f, f))
}

function Zc(a, b) {
    var c = 0;
    Q(a, b, function () {
        c += 1
    });
    return c
}

function jd(a, b) {
    var c = I(),
        b = b || {};
    b.Va = Mc(K(a, "divisions", f));
    b.staves = K(a, "staves", f);
    Q(a, "measure-style", function (a, c) {
        b.Xc = b.Xc || [];
        var g;
        g = g || {};
        g.k = K(c, "number", 1);
        this.oa(c, g);
        Bc(c, g);
        var h = P(c, "multiple-rest");
        if (h) {
            g.Kd = "multiple-rest";
            var j;
            j = g || {};
            j.Gi = N(h, "use-symbols", l);
            j.og = K(h, f, 2)
        }
        if (h = P(c, "measure-repeat")) g.Kd = "measure-repeat", j = g || {}, j.type = O(Oc(h, "type", f)), j.El = K(h, "slashes", 1), j.og = K(h, f, 2);
        if (h = P(c, "beat-repeat")) g.Kd = "beat-repeat", j = g || {}, j.type = O(Oc(h, "type", f)), j.El = K(h,
            "slashes", 1), j.Ol = N(h, "use-dots", l), id(h, j), j.Dl = Zc(h, "slash-dot");
        if (h = P(c, "slash")) g.Kd = "slash", j = g || {}, j.type = O(Oc(h, "type", f)), j.Ol = N(h, "use-dots", l), j.Qn = N(h, "use-stems", l), id(h, j), j.Dl = Zc(h, "slash-dot");
        b.Xc.push(g)
    }, c)
}
s.rb = function (a, b) {
    b = b || {};
    b.k = K(a, "number", 1);
    b.Ng = N(a, "additional");
    b.Ng && Qc(a, b);
    b.Ul = N(a, "after-barline");
    b.eb = Kc(a);
    M(this, a, b);
    b.T = L(a, "sign", "G F C percussion TAB jianpu none".split(" "), "none");
    if (!b.Ng) {
        var c = f;
        switch (b.T) {
        case "G":
            c = 2;
            break;
        case "F":
            c = 4;
            break;
        case "C":
            c = 3;
            break;
        case "TAB":
            c = 5
        }
        b.Vb = K(a, "line", c)
    }
    b.nd = K(a, "clef-octave-change", 0);
    return b
};
var kd = "sharp natural flat double-sharp sharp-sharp double-flat flat-flat natural-sharp natural-flat quarter-flat quarter-sharp three-quarters-flat three-quarters-sharp sharp-down sharp-up natural-down natural-up flat-down flat-up triple-sharp triple-flat slash-quarter-sharp slash-sharp slash-flat double-slash-flat sharp-1 sharp-2 sharp-3 sharp-5 flat-1 flat-2 flat-3 flat-4 sori koron".split(" ");
s = H.prototype;
s.Ob = function (a, b) {
    b = b || {};
    b.Na = L(a, f, kd, f);
    b.md = N(a, "cautionary", l);
    b.se = N(a, "editorial", l);
    Rc(a, b);
    M(this, a, b);
    return b
};

function ld(a, b) {
    var c = f,
        d = f,
        e = f,
        g = f,
        h = f;
    Q(b, "key-octave", function (a, b) {
        h = h || {};
        var c = O(K(b, "number", f));
        c && (h[c] = K(b, f, 4))
    }, a);
    Q(b, "key-step", function (a, b) {
        d = d || [];
        d.push(b.Rb(f))
    });
    Q(b, "key-alter", function (a, b) {
        e = e || [];
        e.push(K(b, f, 0))
    });
    Q(b, "key-accidental", function (a, b) {
        g = g || [];
        g.push(this.Ob(b))
    }, a);
    d.forEach(function (a, b) {
        c = c || [];
        var d = {};
        d.Ia = h ? h[b + 1] : /(C|D|E|F)/.test(a) ? 5 : 4;
        d.step = a;
        d.L = e[b];
        g && g[b] && (d.Na = g[b]);
        c.push(d)
    });
    return c
}
s.getKey = function (a, b) {
    b = b || {};
    b.k = K(a, "number", -1);
    b.eb = Kc(a);
    M(this, a, b);
    var c = P(a, "cancel");
    if (c) {
        var d;
        d = b || {};
        d.cancel = K(c, f, f);
        d.cancel && (d.dm = L(c, "location", ["left", "right", "before-barline"], "left"))
    }
    dd(a, "fifths") ? (b.we = K(a, "fifths", 0), b.mode = L(a, "mode", "major minor dorian phrygian lydian mixolydian aeolian ionian locrian none".split(" "), "major")) : b.fe = ld(this, a);
    return b
};

function md(a, b) {
    b = b || {};
    b.Yb = L(a, "symbol", "common cut single-number note dotted-note normal".split(" "), "normal")
}

function nd(a, b) {
    b = b || {};
    b.separator = L(a, "separator", ["none", "horizontal", "diagonal", "vertical", "adjacent"], "none")
}

function od(a, b, c) {
    var c = c || {}, d = f;
    Q(b, "beats", function (a, b) {
        d = d || [];
        d.push(b.Rb())
    }, a);
    var e = f;
    Q(b, "beat-type", function (a, b) {
        e = e || [];
        e.push(b.Rb())
    }, a);
    d.forEach(function (a, b) {
        c.ke = c.ke || [];
        c.ke.push({
            Jc: a,
            le: e[b]
        })
    })
}
s.getTime = function (a, b) {
    b = b || {};
    b.k = K(a, "number", -1);
    md(a, b);
    nd(a, b);
    Fc(this, a, b);
    b.eb = Kc(a);
    b.ri = dd(a, "senza-misura");
    if (!b.ri) {
        od(this, a, b);
        var c = P(a, "interchangeable");
        if (c) {
            var d = b,
                e;
            e = e || {};
            e.Hn = L(c, "time-relation", "parentheses bracket equals slash space hyphen".split(" "), f);
            md(c, e);
            nd(c, e);
            od(this, c, e);
            d.Hm = e
        }
    }
    return b
};
s.Ah = function (a, b) {
    b = b || {};
    b.Yk = K(a, "millimeters", 7);
    b.Kl = K(a, "tenths", 40);
    return b
};
s.Fb = function (a, b) {
    b = b || {};
    b.$c = K(a, "page-height", 800);
    b.ad = K(a, "page-width", 600);
    Q(a, "page-margins", function (a, d) {
        b.Cc = b.Cc || {};
        var e;
        e = e || {};
        e.type = L(d, "type", ["odd", "even", "both"], "both");
        e["left-margin"] = K(d, "left-margin", 0);
        e["right-margin"] = K(d, "right-margin", 0);
        e["top-margin"] = K(d, "top-margin", 0);
        e["bottom-margin"] = K(d, "bottom-margin", 0);
        b.Cc[e.type] = e
    }, this);
    return b
};
s.rc = function (a, b) {
    var b = b || {}, c = P(a, "system-margins");
    if (c) {
        var d = b,
            e;
        e = e || {};
        e["left-margin"] = K(c, "left-margin", 0);
        e["right-margin"] = K(c, "right-margin", 0);
        d.Ci = e
    }
    b.zi = K(a, "system-distance", 0);
    b.Fi = K(a, "top-system-distance", 0);
    return b
};

function pd(a, b, c) {
    var c = c || {}, d = P(b, "scaling");
    d && (c.qi = a.Ah(d));
    if (d = P(b, "page-layout")) c.We = a.Fb(d);
    if (d = P(b, "system-layout")) c.Bi = a.rc(d);
    if (d = P(b, "music-font")) c.cl = a.oa(d);
    if (d = P(b, "word-font")) c.Rl = a.oa(d);
    Q(b, "lyric-font", function (a, b) {
        c.vc = c.vc || [];
        var d = {};
        d.k = K(b, "number", f);
        d.name = J(b, "name", f);
        this.oa(b, d);
        c.vc.push(d)
    }, a)
}

function qd(a, b, c) {
    c = c || {};
    Q(b, "credit-image,credit-words", function (a, b) {
        var g = {}, h = rd(b);
        h && Q(h, f, function (a, b) {
            if (b.is("credit-type")) {
                g.pd = g.pd || "";
                var c = L(b, f, "page number;title;subtitle;composer;arranger;lyricist;rights".split(";"), "");
                c && (g.pd += c, g.pd += "|")
            } else b.is("link") || b.is("bookmark")
        }, this);
        if (b.is("credit-words")) g.Sk = i, Jc(this, b, g);
        else if (b.is("credit-image")) {
            g.Jm = i;
            return
        }
        c.Ff = c.Ff || [];
        c.Ff.push(g)
    }, a);
    c.page = K(b, "page", 1)
}
s.ph = function (a, b) {
    b = b || {};
    b.Ic = L(a, "bar-style", "regular dotted dashed heavy light-light light-heavy heavy-light heavy-heavy tick short none".split(" "), "regular");
    Bc(a, b);
    return b
};

function sd(a) {
    var b;
    b = b || {};
    b.direction = O(L(a, "direction", ["backward", "forward"], f));
    b.Ml = K(a, "times", 0);
    b.Un = L(a, "winged", ["none", "straight", "curved", "double-straight", "double-curved"], "none");
    return b
}

function td(a, b) {
    var c;
    c = c || {};
    c.kl = O(J(b, "number", f));
    c.text = J(b, f, "");
    c.type = O(L(b, "type", ["start", "stop", "discontinue"], f));
    c.eb = Kc(b);
    M(a, b, c);
    c.mj = K(b, "end-length", 10);
    c.En = K(b, "text-x", 5);
    c.Fn = K(b, "text-y", 5);
    return c
}

function ud(a, b) {
    var c = I(),
        b = b || {};
    b.location = L(a, "location", ["right", "left", "middle"], "right");
    c.ph(a, b);
    var d = P(a, "repeat");
    d && (b.repeat = sd(d));
    (d = P(a, "ending")) && (b.ending = td(c, d));
    (d = P(a, "wavy-line")) && (b["wavy-line"] = c.Dh(d));
    (d = P(a, "segno")) && (b.segno = c.De(d));
    (d = P(a, "coda")) && (b.coda = c.De(d));
    Q(a, "fermata", function (a, c) {
        b.fermata = b.fermata || [];
        b.fermata.push(this.rh(c))
    }, c)
}

function vd(a) {
    return Mc(K(a, "number", 1))
}
s.R = function (a, b, c) {
    b = b || {};
    b.Ta = L(a, "placement", ["above", "below"], c);
    return b
};
s.Ae = function (a, b) {
    b = b || {};
    b.orientation = L(a, "orientation", ["over", "under"], f);
    return b
};
s.Ak = function (a, b) {
    b = b || {};
    b.type = O(Pc(a, f));
    b.k = vd(a);
    this.R(a, b);
    this.Ae(a, b);
    return b
};
s.ok = function (a, b) {
    b = b || {};
    b.type = O(Pc(a, f));
    b.k = vd(a);
    this.R(a, b);
    this.Ae(a, b);
    return b
};

function wd(a, b) {
    b = b || {};
    b.be = K(a, "tuplet-number", b.be);
    b.ce = ed(a, "tuplet-type", b.ce);
    var c = Zc(a, "tuplet-dot");
    b.$d = c ? c : b.$d;
    return b
}
s.Fk = function (a, b, c) {
    b = b || {};
    b.type = O(Oc(a, "type", f));
    b.k = vd(a);
    b.dc = N(a, "bracket", i);
    b.Al = L(a, "show-number", ["actual", "both", "none"], "actual");
    b.Cl = L(a, "show-type", ["actual", "both", "none"], "none");
    this.R(a, b);
    if (c = c ? c.Ll : f) b.Zd = {
        be: c.Mi,
        ce: c.ii,
        $d: c.hi
    };
    var d = P(a, "tuplet-actual");
    d && (b.Zd = wd(d, b.Zd));
    c && (b.ae = {
        be: c.fl,
        ce: c.ii,
        $d: c.hi
    });
    if (a = P(a, "tuplet-normal")) b.ae = wd(a, b.ae);
    return b
};
s.Ck = function (a, b) {
    var c = b = b || {}, d;
    d = L(a, "type", ["start", "stop", "single"], "single");
    c.type = d;
    b.k = K(a, f, 0);
    M(this, a, b);
    this.R(a, b);
    return b
};
s.Dk = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    xd(a, b);
    return b
};
s.Fe = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    xd(a, b);
    b.ed = N(a, "slash", l);
    return b
};
s.Pj = H.prototype.Fe;
s.$j = H.prototype.Fe;
s.Oj = H.prototype.Fe;
s.Ch = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    xd(a, b);
    return b
};
s.mk = H.prototype.Ch;
s.Dh = function (a, b) {
    b = b || {};
    b.type = Pc(a, "start");
    b.k = vd(a);
    Ac(a, b);
    this.R(a, b, "above");
    Bc(a, b);
    xd(a, b);
    return b
};
s.yh = function (a, b) {
    b = b || {};
    b.Jd = N(a, "long", l);
    b.Jd && (b.kd = L(a, "approach", ["above", "below"], f), b.re = L(a, "departure", ["above", "below"], f));
    M(this, a, b);
    this.R(a, b, "above");
    xd(a, b);
    return b
};
s.Zj = H.prototype.yh;
s.lk = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    return b
};

function yd(a, b, c, d, e, g, h) {
    c = c || {};
    Q(b, h, function (a, b) {
        var h = f,
            q = b.v ? b.v.prop("nodeName") : "",
            x = g[q];
        x && (h = x.call(this, b, f, c), h[e] = q);
        h && (c[d] = c[d] || [], c[d].push(h))
    }, a);
    return c
}

function zd(a) {
    var b = oc;
    b === f && (oc = b = {
        tremolo: a.Ck,
        "trill-mark": a.Dk,
        turn: a.Fe,
        "delayed-turn": a.Pj,
        "inverted-turn": a.$j,
        "delayed-inverted-turn": a.Oj,
        "vertical-turn": a.Ch,
        "wavy-line": a.Dh,
        shake: a.mk,
        mordent: a.yh,
        "inverted-mordent": a.Zj,
        schleifer: a.lk,
        "accidental-mark": a.oh,
        "other-ornament": k
    });
    return b
}
s.Sc = function (a, b) {
    var b = b || {}, c = zd(this),
        d = pc;
    d === f && (pc = d = tb(c).join(","));
    return yd(this, a, b, "ornaments", "ornament", c, d)
};
s.rh = function (a, b) {
    b = b || {};
    b.text = L(a, f, ["normal", "angled", "square"], "normal");
    b.type = L(a, "type", ["upright", "inverted"], "upright");
    M(this, a, b);
    return b
};
s.Gj = function (a, b) {
    b = b || {};
    b.k = vd(a);
    b.direction = L(a, "direction", ["up", "down"], f);
    Ac(a, b);
    this.R(a, b);
    Bc(a, b);
    return b
};
s.ck = function (a, b) {
    var c = b = b || {}, d;
    d = L(a, "type", ["top", "bottom"], f);
    c.type = d;
    b.k = vd(a);
    Ac(a, b);
    this.R(a, b);
    Bc(a, b);
    return b
};
s.oh = function (a, b) {
    b = b || {};
    b.Na = L(a, f, kd, f);
    M(this, a, b);
    this.R(a, b);
    return b
};

function Ad(a) {
    var b = qc;
    b === f && (qc = b = {
        accent: a.ib,
        "strong-accent": a.vk,
        staccato: a.sk,
        tenuto: a.yk,
        "detached-legato": a.Qj,
        staccatissimo: a.rk,
        spiccato: a.qk,
        scoop: a.Ce,
        plop: a.hk,
        doit: a.Rj,
        falloff: a.Uj,
        "breath-mark": a.Jj,
        caesura: a.Kj,
        stress: a.uk,
        unstress: a.Gk,
        "other-articulation": a.fk
    });
    return b
}
s.Uf = function (a, b) {
    var b = b || {}, c = Ad(this),
        d = rc;
    d === f && (rc = d = tb(c).join(","));
    return yd(this, a, b, "articulations", "articulation", c, d)
};
s.ib = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.vk = function (a, b) {
    b = b || {};
    b.type = L(a, "type", ["up", "down"], "up");
    this.ib(a, b);
    return b
};
s.sk = H.prototype.ib;
s.yk = H.prototype.ib;
s.Qj = H.prototype.ib;
s.rk = H.prototype.ib;
s.qk = H.prototype.ib;
s.Ce = function (a, b) {
    var c = b = b || {}, d;
    d = L(a, "line-shape", ["straight", "curved"], "curved");
    c.Qm = d;
    b.xb = Gc(a, "line-shape", "solid");
    "dashed" === b.xb && Hc(a, b);
    M(this, a, b);
    this.R(a, b);
    return b
};
s.hk = H.prototype.Ce;
s.Rj = H.prototype.Ce;
s.Uj = H.prototype.Ce;
s.Jj = function (a, b) {
    b = b || {};
    b.text = J(a, f, f);
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.Kj = H.prototype.ib;
s.uk = H.prototype.ib;
s.Gk = H.prototype.ib;
s.fk = H.prototype.ib;

function Bd(a) {
    var b = sc;
    b === f && (sc = b = {
        tied: a.Ak,
        slur: a.ok,
        tuplet: a.Fk,
        ornaments: a.Sc,
        fermata: a.rh,
        "accidental-mark": a.oh,
        articulations: a.Uf,
        technical: a.xk,
        dynamics: a.qh,
        arpeggiate: a.Gj,
        "non-arpeggiate": a.ck,
        glissando: a.Vj,
        slide: a.nk,
        "other-notation": k
    });
    return b
}
s.yd = function (a, b) {
    var b = b || {}, c = Bd(this),
        d = tc;
    d === f && (tc = d = tb(c).join(","));
    return yd(this, a, b, "notations", "notation", c, d)
};

function bd(a, b) {
    var c;
    c = c || {};
    c.k = vd(b);
    c.name = J(b, "name", "");
    zc(b, c);
    Ac(b, c);
    a.R(b, c);
    Bc(b, c);
    c.eb = Kc(b);
    c.pm = dd(b, "end-line");
    c.qm = dd(b, "end-paragraph");
    Cd(a, b, c);
    if (dd(b, "laughing")) c.Lm = i;
    else if (dd(b, "humming")) c.Em = i;
    else {
        var d = 0;
        Q(b, "elision, text", function (a, b) {
            d += 1;
            c.text = c.text || "";
            c.text = b.is("elision") ? c.text + L(b, f, [String.fromCharCode(160), String.fromCharCode(95), String.fromCharCode(8255)], String.fromCharCode(160)) : c.text + J(b, f, "")
        }, a);
        var e = P(b, "syllabic");
        e && 1 === d && (c.Jl = L(e, f, ["single",
            "begin", "end", "middle"
        ], "single"));
        if (e = P(b, "extend")) c.extend = Pc(e, i)
    }
    return c
}

function Cd(a, b, c) {
    var c = c || {}, d = P(b, "footnote");
    d && (c.zm = Jc(a, d));
    if (a = P(b, "level")) c.Uh = {}, c.Uh.ln = N(a, "reference", l), Rc(a, c.Uh)
}

function cd(a, b, c) {
    c = c || {};
    Cd(a, b, c);
    c.sf = K(b, "voice", 1)
}

function Dd(a, b) {
    a && b && (a.Ta = b.Ta, a.Zg = b.Zg, a.Ka = b.Ka, a.sf = b.sf)
}
s.kk = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.Ta = b.Ta || "above";
    b.te = "square";
    Jc(this, a, b);
    return b
};
s.Ik = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.Ta = b.Ta || "below";
    b.te = "none";
    Jc(this, a, b);
    return b
};
s.De = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.Ta = b.Ta || "above";
    Fc(this, a, b);
    return b
};
s.Lj = H.prototype.De;
var Ed = "p pp ppp pppp ppppp pppppp f ff fff ffff fffff ffffff mp mf sf sfp sfpp fp rf rfz sfz sffz fz other-dynamics".split(" ");
s = H.prototype;
s.qh = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    Fc(this, a, b);
    this.R(a, b);
    Ic(a, b);
    uc = uc || Ed.join(",");
    Q(a, uc, function (a, c) {
        b.qf = b.qf || [];
        c.is("other-dynamics") ? b.qf.push(J(c, f, "")) : Ed.some(function (a) {
            return c.is(a) ? (b.qf.push(a), i) : l
        })
    });
    return b
};
s.gk = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.type = O(L(a, "type", ["start", "stop", "continue", "change"], f));
    b.Vb = N(a, "line", l);
    b.T = N(a, "sign", i);
    Fc(this, a, b);
    return b
};
s.Hk = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.type = O(L(a, "type", ["crescendo", "diminuendo", "stop", "continue"], f));
    b.k = vd(a);
    b.lf = K(a, "spread", 10);
    b.lf || (b.lf = 10);
    b.Xm = N(a, "niente", l);
    b.xb = Gc(a, "line-type", "solid");
    "dashed" === b.xb && Hc(a, b);
    Ac(a, b);
    Bc(a, b);
    return b
};
s.Nj = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.type = O(Pc(a, f));
    b.k = vd(a);
    Hc(a, b);
    Ac(a, b);
    Bc(a, b);
    return b
};
s.Ij = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.type = O(Pc(a, f));
    b.k = vd(a);
    b.Pm = O(L(a, "line-end", ["up", "down", "both", "arrow", "none"], f));
    b.mj = K(a, "end-length", 5);
    b.xb = Gc(a, "line-type", "solid");
    "dashed" === b.xb && Hc(a, b);
    Ac(a, b);
    Bc(a, b);
    return b
};
s.dk = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    b.type = O(L(a, "type", ["up", "down", "stop", "continue"], f));
    b.k = vd(a);
    b.size = K(a, "size", 8);
    Hc(a, b);
    M(this, a, b);
    return b
};
s.bk = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    Q(a, "beat-unit", function (a, c) {
        b["beat_unit" + a] = ed(c, f, "quarter");
        var g = Fd(c, ":not(beat-unit-dot)");
        g && (b["beat_unit" + a + "_dots"] = Zc(g, f))
    }, this);
    if (c = P(a, "per-minute")) b.ni = J(c, f, "");
    b.bd = N(a, "parentheses", l);
    Fc(this, a, b);
    zc(a, b);
    return b
};
s.Yj = function (a, b, c) {
    b = b || {};
    Dd(b, c);
    Fc(this, a, b);
    b.mi = {
        D: 0,
        C: 0,
        B: 0,
        E: 0,
        F: 0,
        G: 0,
        A: 0
    };
    Q(a, "pedal-tuning", function (a, c) {
        var g = O(L(c, "pedal-step", "DCBEFGA".split(""), f)),
            h = K(c, "pedal-alter", 0);
        b.mi[g] = h
    }, this);
    return b
};
s.Fj = function (a, b) {
    b = b || {};
    b.Ki = dd(a, "accordion-high");
    b.Li = dd(a, "accordion-low");
    b.Mg = Mc(K(a, "accordion-middle", 0));
    Fc(this, a, b);
    return b
};

function Gd(a, b) {
    b = b || {};
    b.Zg = N(a, "directive", i)
}
s.s = function (a, b) {
    var b = b || {}, c = P(a, "offset");
    c && (b.offset = Hd(c));
    cd(this, a, b);
    this.O(a, b);
    this.R(a, b);
    Gd(a, b);
    Q(a, "direction-type", function (a, c) {
        var g = b,
            g = g || {}, h;
        h = vc;
        if (h === f) vc = h = {
            rehearsal: this.kk,
            segno: this.De,
            coda: this.Lj,
            words: this.Ik,
            dynamics: this.qh,
            pedal: this.gk,
            wedge: this.Hk,
            dashes: this.Nj,
            bracket: this.Ij,
            "octave-shift": this.dk,
            "harp-pedals": this.Yj,
            "accordion-registration": this.Fj,
            metronome: this.bk,
            damp: k,
            "damp-all": k,
            percussion: k,
            eyeglasses: k,
            "string-mute": k,
            scordatura: k,
            image: k,
            "principal-voice": k,
            "other-direction": k
        };
        var j = wc;
        if (j === f) wc = j = tb(h).join(",");
        yd(this, c, g, "directions", "direction", h, j)
    }, this);
    return b
};

function Hd(a) {
    var b;
    b = b || {};
    b.duration = K(a, f, 0);
    b.un = N(a, "sound", l);
    return b
}

function xd(a, b) {
    b = b || {};
    b.yn = L(a, "start-note", ["upper", "main", "below"], "upper");
    b.Kn = L(a, "trill-step", ["whole", "half", "unison"], "whole");
    b.Ln = L(a, "two-note-turn", ["whole", "half", "none"], "none");
    b.Sl = N(a, "accelerate", l);
    b.Jc = K(a, "beats", 4);
    b.rn = K(a, "second-beat", 25);
    b.Km = K(a, "last-beat", 75)
}

function Id(a) {
    var b = xc;
    b === f && (xc = b = {
        "up-bow": a.Sb,
        "down-bow": a.Tj,
        harmonic: a.Xj,
        "open-string": a.ek,
        "thumb-position": a.zk,
        pluck: a.ik,
        "double-tongue": a.Sj,
        "triple-tongue": a.Ek,
        stopped: a.tk,
        "snap-pizzicato": a.pk,
        fingering: a.Xf,
        fret: a.sh,
        string: a.Rb,
        tap: a.wk,
        heel: a.th,
        toe: a.Bk,
        "hammer-on": a.Wj,
        "pull-off": a.jk,
        bend: a.Hj,
        fingernails: a.Xf,
        hole: k,
        arrow: k,
        handbell: k,
        "other-technical": k
    });
    return b
}
s.xk = function (a, b) {
    var b = b || {}, c = Id(this),
        d = yc;
    d === f && (yc = d = tb(c).join(","));
    return yd(this, a, b, "technical", "technical", c, d)
};
s.Sb = function (a, b) {
    b = b || {};
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.Tj = H.prototype.Sb;
s.Xj = function (a, b) {
    b = b || {};
    P(a, "natural") ? b.Wm = i : P(a, "artificial") && (b.Wl = i);
    var c = P(a, "base-pitch");
    if (c) b.Yl = this.ha(c);
    else if (c = P(a, "touching-pitch")) b.In = this.ha(c);
    else if (c = P(a, "sounding-pitch")) b.vn = this.ha(c);
    b.eb = Kc(a);
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.ek = H.prototype.Sb;
s.zk = H.prototype.Sb;
s.ik = function (a, b) {
    b = b || {};
    b.text = J(a, f, "");
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.Sj = H.prototype.Sb;
s.Ek = H.prototype.Sb;
s.tk = H.prototype.Sb;
s.pk = H.prototype.Sb;
s.Xf = function (a, b) {
    b = b || {};
    b.text = J(a, f, "");
    b.Il = N(a, "substitution", l);
    b.Vl = N(a, "alternate", l);
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.sh = function (a, b) {
    b = b || {};
    b.text = J(a, f, "");
    this.oa(a, b);
    Bc(a, b);
    return b
};
s.Rb = function (a, b) {
    b = b || {};
    b.text = J(a, f, "");
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.wk = function (a, b) {
    b = b || {};
    b.text = J(a, f, "T");
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.th = function (a, b) {
    b = b || {};
    b.Il = N(a, "substitution", l);
    M(this, a, b);
    this.R(a, b, "above");
    return b
};
s.Bk = H.prototype.th;

function Jd(a, b, c) {
    c.type = O(Oc(b, "type", f));
    c.k = vd(b);
    M(a, b, c);
    a.R(b, c, "above")
}
s.Wj = function (a, b) {
    b = b || {};
    b.text = J(a, f, "H");
    Jd(this, a, b);
    return b
};
s.jk = function (a, b) {
    b = b || {};
    b.text = J(a, f, "P");
    Jd(this, a, b);
    return b
};
s.Hj = function (a, b) {
    b = b || {};
    b.wf = K(a, "bend-alter", 1);
    P(a, "pre-bend") ? b.ul = i : P(a, "release") && (b.Ag = i);
    return b
};
s.Vj = function (a, b) {
    b = b || {};
    b.type = O(Oc(a, "type"));
    b.text = J(a, f, "");
    b.k = vd(a);
    b.xb = Gc(a, "line-type", "wavy");
    "dashed" === b.xb && Hc(a, b);
    M(this, a, b);
    return b
};
s.nk = function (a, b) {
    b = b || {};
    b.type = O(Oc(a, "type"));
    b.text = J(a, f, "");
    b.k = vd(a);
    b.xb = Gc(a, "line-type", "solid");
    "dashed" === b.xb && Hc(a, b);
    M(this, a, b);
    return b
};

function Kd(a, b) {
    var c;
    c = c || {};
    c.value = Sc(b, f);
    c.text = J(b, "text", "");
    M(a, b, c);
    return c
}

function Ld(a, b) {
    var c;
    c = c || {};
    c.value = K(b, f, 0);
    c.eb = Kc(b);
    M(a, b, c);
    c.location = L(b, "location", ["left", "right"], "right");
    return c
}

function Md(a, b) {
    var c;
    c = c || {};
    var d = P(b, "root-step");
    d && (c.step = Kd(a, d));
    if (d = P(b, "root-alter")) c.L = Ld(a, d);
    return c
}

function Nd(a, b) {
    var c;
    c = c || {};
    c.text = J(b, f, "");
    M(a, b, c);
    return c
}
var Od = Od || "major minor augmented diminished dominant major-seventh minor-seventh diminished-seventh augmented-seventh half-diminished major-minor major-sixth minor-sixth dominant-ninth major-ninth minor-ninth dominant-11th major-11th minor-11th dominant-13th major-13th minor-13th suspended-second suspended-fourth Neapolitan Italian French German pedal power Tristan other none".split(" ");

function Pd(a, b) {
    var c;
    c = c || {};
    c.Me = L(b, f, Od, "none");
    c.Gi = N(b, "use-symbols", i);
    c.text = J(b, "text", "");
    c.wn = N(b, "stack-degrees", l);
    c.dn = N(b, "parentheses-degrees", l);
    c.cm = N(b, "bracket-degrees", l);
    M(a, b, c);
    Cc(b, c);
    Dc(b, c);
    return c
}

function Qd(a, b) {
    var c;
    c = c || {};
    c.Ok = K(b, f, 0);
    M(a, b, c);
    return c
}

function Rd(a, b) {
    var c;
    c = c || {};
    var d = P(b, "bass-step");
    d && (c.step = Kd(a, d));
    if (d = P(b, "bass-alter")) c.L = Ld(a, d);
    return c
}
var Sd = Sd || ["major", "minor", "augmented", "diminished", "half-diminished"];

function Td(a, b) {
    var c;
    c = c || {};
    c.eb = Kc(b);
    var d = P(b, "degree-value");
    if (d) {
        var e;
        e = e || {};
        e.value = O(K(d, f, f));
        e.Yb = L(d, "symbol", Sd, f);
        e.text = J(d, "text", "");
        M(a, d, e);
        c.value = e
    }
    if (d = P(b, "degree-alter")) {
        var g;
        g = g || {};
        g.value = K(d, f, 0);
        g.tl = N(d, "plus-minus");
        M(a, d, g);
        c.L = g
    }
    if (g = P(b, "degree-type")) {
        var h;
        h = h || {};
        h.value = O(L(g, f, ["add", "alter", "subtract"], f));
        h.text = J(g, "text", "");
        M(a, g, h);
        c.type = h
    }
    return c
}

function Ud(a, b) {
    var c;
    c = c || {};
    b.is("root") ? c.root = Md(a, b) : c.Bm = Nd(a, b);
    var d = Fd(b, "root, function"),
        e = P(d, "kind", i);
    e && (c.Me = Pd(a, e));
    if (e = P(d, "inversion", i)) c.Ok = Qd(a, e);
    if (e = P(d, "bass", i)) c.Zl = Rd(a, e);
    (d = P(d, "degree", i)) && Q(d, f, function (a, b) {
        c.Gf = c.Gf || [];
        c.Gf.push(Td(this, b))
    }, a);
    return c
}

function Vd(a, b) {
    var c;
    c = c || {};
    var d = P(b, "string");
    d && (c.Hl = a.Rb(d));
    if (d = P(b, "fret")) c.Ej = a.sh(d);
    if (d = P(b, "fingering")) c.jh = a.Xf(d);
    if (d = P(b, "barre")) {
        var e;
        e = e || {};
        e.type = O(Oc(d, "type", f));
        Bc(d, e);
        c.Pi = e
    }
    return c
}

function Wd(a, b) {
    var c;
    c = c || {};
    Ac(b, c);
    Bc(b, c);
    Cc(b, c);
    Ec(b, c);
    c.height = b.la("height", f);
    c.width = b.la("width", f);
    c.Pn = J(b, "unplayed", "x");
    c.of = O(b.la("frame-strings", f));
    c.Rf = O(b.la("frame-frets", f));
    c.ye = 1;
    var d = P(b, "first-fret");
    d && (c.ye = K(d, f, 1), c.vm = J(d, "text", ""), c.um = L(d, "location", ["left", "right"], "right"));
    Q(b, "frame-note", function (a, b) {
        c.Qf = c.Qf || [];
        c.Qf.push(Vd(this, b))
    }, a);
    return c
}

function Xd(a, b) {
    var c = I(),
        b = b || {};
    b.type = L(a, "type", ["explicit", "implied", "alternate"], "explicit");
    b.eb = Kc(a);
    b.hn = N(a, "print-frame", i);
    M(c, a, b);
    c.R(a, b, "above");
    Q(a, "root, function", function (a, c) {
        b.oe = b.oe || [];
        b.oe.push(Ud(this, c))
    }, c);
    var d = P(a, "frame");
    d && (b.frame = Wd(c, d));
    if (d = P(a, "offset")) b.offset = Hd(d);
    Cd(c, a, b);
    c.O(a, b)
}

function Yd(a) {
    var b;
    b = b || {};
    b.kh = O(J(a, "full-path", f));
    b.ei = J(a, "media-type", "application/vnd.recordare.musicxml+xml");
    return b
}

function Zd(a, b) {
    var c;
    c = c || {};
    var d = P(b, "rootfiles");
    d && Q(d, "rootfile", function (a, b) {
        c.Bg = c.Bg || [];
        c.Bg.push(Yd(b))
    }, a);
    return c
}

function $d(a) {
    a && $d.prototype.isPrototypeOf(a) ? this.v = a.v : a && "string" === typeof a ? this.v = $($.parseXML(a)).children() : a && ($.isXMLDoc(a) || Document.prototype.isPrototypeOf(a)) ? (this.v = $(a), (a = this.v.children("parsererror")) && 0 < a.length && aa(a.text())) : this.v = a
}
s = $d.prototype;
s.toString = r("Score.Node");
s.clone = function (a) {
    return a = a || new $d(this.v)
};
s.is = function (a) {
    a = $d.prototype.isPrototypeOf(a) ? a.v : a;
    return this.v.is(a)
};
s.Rb = function (a) {
    var b = f;
    this.v && (a === f ? b = this.v.first().text() : (b = this.v.attr(a), b === f && (b = this.v.children(a).first().text())));
    return b
};

function J(a, b, c) {
    return (a = a.Rb(b)) ? a : c
}
s.la = function (a) {
    return (a = this.Rb(a)) ? Number(a) : f
};

function K(a, b, c) {
    a = a.la(b);
    return a !== f ? a : c
}

function dd(a, b) {
    return b && a.v && 0 < a.v.children(b).length ? i : l
}

function P(a, b, c) {
    a = a.v && b ? c ? a.v.filter(b) : a.v.children(b) : f;
    if (a !== f && 0 < a.length) return new $d(a)
}

function Q(a, b, c, d) {
    a.v && (b ? a.v.children(b).each(function (a, b) {
        c.call(d, a, new $d($(b)))
    }) : a.v.each(function (a, b) {
        c.call(d, a, new $d($(b)))
    }))
}

function rd(a) {
    return (a = a.v ? a.v.prevUntil("credit") : f) && a.length ? new $d(a) : f
}

function Fd(a, b) {
    var c = a.v && b ? a.v.nextUntil(b) : f;
    return c && c.length ? new $d(c) : f
}

function ae(a, b, c) {
    ae.a.constructor.call(this, b);
    this.w = a;
    this.Bf = c
}
u(ae, $d);
s = ae.prototype;
s.xd = n();
s.toString = r("Score.Element");
s.clone = function (a) {
    a = a || new ae(this.w, this.v, this.Bf);
    this.attributes && (a.attributes = this.attributes);
    this.Va && (a.Va = this.Va);
    this.Ab && (a.Ab = this.Ab);
    this.ob && (a.ob = this.ob);
    this.pb && (a.pb = this.pb);
    this.ea && (a.ea = this.ea);
    this.Db && (a.Db = this.Db);
    this.time && (a.time = this.time);
    this.key && (a.key = this.key);
    return ae.a.clone.call(this, a)
};

function be(a, b, c) {
    var d;
    d = 2;
    for (var e = a; e && !b.call(a, e);) {
        var g = c ? e.prev : e.next;
        if (!g && 1 === d && e.w && (e = c ? e.w.prev : e.w.next)) g = (e = e.fc) && 0 < e.length ? c ? e[e.length - 1] : e[0] : g;
        e = g
    }
    return e
}
s.ua = n();
s.La = n();
s.Fa = function () {
    return this.Va || l
};
s.jb = o("Ab");
s.O = o("k");
s.oc = function () {
    return this.ob || l
};
s.ba = function () {
    return this.pb || l
};
s.q = function () {
    return this.ea || l
};
s.rb = function () {
    return this.Db || l
};
s.getTime = function () {
    return this.time || l
};
s.getKey = function () {
    return this.key || l
};
s.m = function () {
    var a = new Mb;
    this.Q(a);
    return a
};
s.Q = function (a) {
    a.n = this;
    this.cf = a
};
s.t = o("cf");

function ce(a, b) {
    ce.a.constructor.call(this, a, b)
}
u(ce, ae);
ce.prototype.toString = r("ScoreUnknown");
ce.prototype.clone = function (a) {
    a = a || new ce(this.w, this.v);
    return ce.a.clone.call(this, a)
};

function de(a, b) {
    de.a.constructor.call(this, a, b)
}
u(de, ae);
de.prototype.clone = function (a) {
    a = a || new de(this.w, this.v);
    return de.a.clone.call(this, a)
};
de.prototype.toString = r("Score.AttributeElement");
de.prototype.ua = r(1);
de.prototype.La = function () {
    return this.ua()
};

function ee(a, b, c) {
    ee.a.constructor.call(this, a, b, c)
}
u(ee, ae);
ee.prototype.clone = function (a) {
    a = a || new ee(this.w, this.v);
    return ee.a.clone.call(this, a)
};
ee.prototype.toString = r("Score.DataElement");
ee.prototype.ua = o("duration");
ee.prototype.La = function () {
    var a = this.ua(),
        b = this.Fa(),
        c = fe(this.w);
    return 1E3 * a * c / b
};

function ge(a, b) {
    ge.a.constructor.call(this, a, b, he);
    var c = this;
    I();
    c = c || {};
    c.id = O(J(this, "id", f))
}
var ie;
u(ge, ae);
var he = ["measure"];
s = ge.prototype;
s.toString = r("ScorePart");
s.nj = function (a, b) {
    for (var c = a.Rc(); 0 < --c;) b.Ld();
    return this.qd(a)
};
s.xd = function () {
    var a = ie;
    a === f && (ie = a = [this.nj]);
    return a
};
s.m = r(k);
s.getName = function () {
    return this.$e ? this.$e : this.yg
};
s.Sf = function () {
    return this.Ze ? this.Ze : this.Ye ? this.Ye : this.getName()
};
s.oc = function () {
    var a = this.ob;
    a === f && (this.ob = a = new je(this));
    return a
};
s.ba = function () {
    return ke(this.oc(), this)
};
s.Fa = function () {
    return this.ba().Fa()
};
s.jb = function () {
    return this.ba().jb()
};

function le() {}
s = le.prototype;
s.toString = o("Ed");
s.getName = o("Ed");
s.uh = function () {
    var a = this.i("width"),
        b = this.i("height");
    return 0 !== a ? b / a : 1
};
s.Eh = function () {
    var a = this.i("width"),
        b = this.i("height");
    return 0 !== b ? a / b : 1
};
s.zh = function () {
    return []
};
s.P = function () {
    var a = f;
    this.qg ? a = {
        e: this.sg,
        c: this.ug,
        f: this.rg,
        d: this.tg
    } : (a = {}, a.e = E(this, this.ga || "parent", "x") || 0, a.c = E(this, this.ga || "parent", "y") || 0, a.f = a.e + this.i("width"), a.d = a.c + this.i("height"));
    return a
};
s.dd = function (a) {
    this.qg = i;
    this.sg = a.e;
    this.ug = a.c;
    this.rg = a.f;
    this.tg = a.d
};

function me() {}

function ne(a, b) {
    a.orientation = b || 1;
    a.Qh() ? (a.U = "width", a.ab = "height", a.Z = "x", a.lb = "y") : (a.U = "height", a.ab = "width", a.Z = "y", a.lb = "x")
}
me.prototype.Ae = o("orientation");
me.prototype.Qh = function () {
    return 1 === this.orientation
};

function oe() {}
oe.prototype.o = function (a, b, c, d, e, g, h) {
    var j = pe(this, a);
    j !== f && (this.zg(a, b, c, d, e, g, h), this.Hg(a, j), b = f, a.Od !== f ? b = qe(this, a, this.lb, this.ab) : (b = this.Ya(this.ab), b = Math.max(b, a.i(this.ab))), Gb(this, this.ab, b));
    return j
};
oe.prototype.zg = function (a, b, c, d, e, g, h) {
    h ? this.ol = i : this.nl = i;
    if (g && (this.ga || (this.ga = g), g = this.ga ? E(a, this.ga, this.Z) : f, g !== f && (a.Yc = g), g = this.ga ? E(a, this.ga, this.lb) : f, g !== f)) a.Od = g;
    h ? a.ql = i : a.pl = i;
    b && c ? a.ki = i : b && !c && (a.wg = i);
    a.W = d || 0;
    a.Ra = e || 0
};

function qe(a, b, c, d) {
    var e = a.Ya(d),
        d = b.i(d),
        b = E(b, a.ga, c),
        d = b + d,
        g = E(a, a.ga, c),
        h = g !== f ? g + e : f,
        h = h !== f ? Math.max(h, d) : d,
        g = g !== f ? Math.min(g, b) : b;
    F(a, a.ga, c, g);
    return e = Math.max(e, h - g)
}
oe.prototype.Hg = function (a, b) {
    var c = f;
    a.Yc !== f ? c = qe(this, a, this.Z, this.U) : (c = this.Ya(this.U), c += a.W, c += a.Ra, 0 < b && (c += this.Sa), c += a.i(this.U));
    Gb(this, this.U, c)
};

function re() {}
v(re, Ab);
s = re.prototype;
s.vb = function () {
    return !this.Ne
};

function se(a) {
    var b = 0;
    te(a, function (a) {
        if (this.xe(a)) return l;
        !a.Yc && (a.ki || a.wg) && ++b;
        return l
    }, a);
    return b
}
s.ne = function (a, b, c) {
    return b / c
};
s.Lf = function (a, b, c, d, e, g) {
    d[this.U] += g;
    b.Yc !== f && (d[this.U] = ue(this, this.Z) + a[this.U] - b.Yc)
};

function ue(a, b) {
    return a.ga ? E(a, a.ga, b) : f
}

function ve(a, b, c) {
    b[a.Z] = a.Ne ? c[a.U] : 0;
    b[a.lb] = 0
}
s.vg = function (a, b, c, d) {
    this.vb() ? c[this.Z] += b.W : (c[this.Z] -= d[this.U], c[this.Z] -= b.W);
    b.Yc !== f && (c[this.Z] = b.Yc - ue(this, this.Z))
};
s.xe = function (a) {
    return this.Ne ? !a.ql : !a.pl
};
s.wa = function (a) {
    var b;
    if (!(b = !Bb(this, a))) {
        a: {
            if (0 < we(this)) {
                b = a[this.U] - this.Ya(this.U);
                if (this.nl && (this.Ne = l, !xe(this, a, b))) {
                    a = l;
                    break a
                }
                if (this.ol && (this.Ne = i, !xe(this, a, b))) {
                    a = l;
                    break a
                }
            }
            a = i
        }
        b = !a
    }
    return b ? l : i
};

function xe(a, b, c) {
    var d = se(a),
        e = {}, g = {};
    ve(a, e, b);
    return te(a, function (a) {
        if (this.xe(a)) return l;
        g[this.U] = a.i(this.U);
        g[this.ab] = a.i(this.ab);
        a.ki && this.Lf(b, a, e, g, c, this.ne(a, c, d));
        if (a.wg) {
            var j = this.ne(a, c, d);
            a.cn = a.W;
            a.bn = a.Ra;
            var m = 0.5 * j,
                p = 0.5 * j;
            a.W !== a.Ra && (m = j * a.W / (a.W + a.Ra), p = j * a.Ra / (a.W + a.Ra));
            a.W += m;
            a.Ra += p
        }
        this.vg(b, a, e, g, c, d);
        a.Od !== f && (e[this.lb] = a.Od - ue(this, this.lb));
        a.Ue && (g[this.ab] = b[this.ab] - e[this.lb]);
        F(a, "parent", this.Z, e[this.Z]);
        F(a, "parent", this.lb, e[this.lb]);
        if (!a.wa(g)) return i;
        this.vb() ? (e[this.Z] += g[this.U], e[this.Z] += a.Ra, e[this.Z] += this.Sa) : (e[this.Z] -= a.Ra, e[this.Z] -= this.Sa);
        return l
    }, a) ? l : i
}

function we(a) {
    return a.children ? a.children.length : 0
}

function pe(a, b) {
    a.children = a.children || [];
    var c = a.children.length;
    a.children.push(b);
    return c
}

function te(a, b, c) {
    return a.children ? a.children.some(function (a, c, g) {
        return b.call(this, a, c, g)
    }, c) : l
}

function ye(a) {
    var b = a.children;
    delete a.children;
    return b
}

function ze(a, b) {
    te(a, function (a) {
        b.children = b.children || [];
        b.children.push(a.clone());
        return l
    }, a);
    return b
}

function Ae() {
    return Ae.a.constructor.call(this)
}
u(Ae, Mb);
v(Ae, n());
Ae.prototype.toString = r("Renderer.PaintableContainer");
Ae.prototype.clone = function (a) {
    a = a || new Ae;
    return ze(this, Ae.a.clone.call(this, a))
};
Ae.prototype.p = function (a) {
    Ae.a.p.call(this, a);
    Be(this, a)
};

function Be(a, b) {
    te(a, function (a) {
        b.save();
        var d;
        d = E(a, "parent", "x");
        var e;
        e = E(a, "parent", "y");
        d !== f && e !== f && b.translate(d, e);
        d = a.debug;
        a.debug = Pb(this);
        a.p(b);
        a.debug = d;
        b.restore();
        return l
    }, a)
}

function Ce(a, b) {
    Ce.a.constructor.call(this);
    ne(this, a);
    this.Sa = b || 0
}
u(Ce, Ae);
v(Ce, me);
v(Ce, oe);
v(Ce, re);
Ce.prototype.toString = r("Renderer.Box");
Ce.prototype.clone = function (a) {
    a = a || new Ce(this.Ae(), this.Sa);
    return Ce.a.clone.call(this, a)
};

function De(a) {
    De.a.constructor.call(this, 1, a)
}
u(De, Ce);
De.prototype.toString = r("Renderer.HBox");
De.prototype.clone = function (a) {
    a = a || new De(this.Sa);
    return De.a.clone.call(this, a)
};

function Ee(a) {
    Ee.a.constructor.call(this, 2, a)
}
u(Ee, Ce);
Ee.prototype.toString = r("Renderer.VBox");
Ee.prototype.clone = function (a) {
    a = a || new Ee(this.Sa);
    return Ee.a.clone.call(this, a)
};

function Fe(a, b) {
    Fe.a.constructor.call(this, b);
    this.Ed = a || "VBoxGlyph"
}
u(Fe, Ee);
v(Fe, le);
Fe.prototype.clone = function (a) {
    a = a || new Fe(this.getName(), this.Sa);
    return Fe.a.clone.call(this, a)
};

function R(a, b) {
    R.a.constructor.call(this, b);
    this.Ed = a || "HBoxGlyph"
}
u(R, De);
v(R, le);
R.prototype.clone = function (a) {
    a = a || new R(this.getName(), this.Sa);
    return R.a.clone.call(this, a)
};

function S(a) {
    S.a.constructor.call(this);
    this.Ed = a || "CustomGlyph"
}
u(S, Mb);
v(S, le);
S.prototype.clone = function (a) {
    a = a || new S(this.getName());
    return S.a.clone.call(this, a)
};

function T(a, b, c) {
    T.a.constructor.call(this, "TextBox");
    this.eg = a || "left";
    this.de = b || "middle";
    this.border = c || 0
}
u(T, S);
T.prototype.p = function (a) {
    T.a.p.call(this, a);
    a.save();
    var b = Ib(this, "height");
    a.transform(1, 0, 0, -1, 0, 0 + b);
    a.hf(this.de);
    a.Td(this.font);
    a.fillText(this.text, Ge(this), He(this), f, this.hb);
    a.restore()
};
T.prototype.clone = function (a) {
    a = a || new T(this.eg, this.de, this.border);
    return T.a.clone.call(this, a)
};
T.prototype.Ya = function (a) {
    var b = "metric_" + a;
    return !this[b] ? T.a.Ya.call(this, a) : this[b] + 2 * this.border
};
T.prototype.P = function () {
    if (this.ml) return this.ml;
    var a = this.i("width"),
        b = this.i("height");
    return {
        e: 0,
        c: 0.5 * -b,
        f: a,
        d: 0.5 * b
    }
};

function Ie(a, b, c, d, e) {
    a.text = b;
    a.font = c || "normal 16px sans-serif";
    e !== f && (a.hb = e);
    d.save();
    d.Td(a.font);
    a.metric_width = d.measureText(a.text, a.hb);
    a.metric_height = d.measureText("W");
    d.restore()
}

function Ge(a) {
    var b = f;
    "right" === a.eg ? (b = Ib(a, "width"), b = b - a.metric_width - a.border) : "center" === a.eg ? (b = Ib(a, "width"), b = 0.5 * (b - a.metric_width)) : b = a.border;
    return b
}

function He(a) {
    var b = f;
    "top" === a.de ? b = a.border : "middle" === a.de || "baseline" === a.de ? (b = Ib(a, "height"), b *= 0.5) : (b = Ib(a, "height"), b -= a.border);
    return b
}

function Je() {
    Je.a.constructor.call(this, "Barline")
}
u(Je, S);
s = Je.prototype;
s.clone = function (a) {
    a = a || new Je;
    return Je.a.clone.call(this, a)
};
s.Ya = function (a) {
    if ("width" === a) {
        var a = 0,
            b = this.n;
        b.repeat && (a += 4 * U(this));
        switch (b.Ic) {
        case "light-light":
            a += 2 * U(this) + 2 * U(this);
            break;
        case "light-heavy":
        case "heavy-light":
            a += U(this) + 2 * U(this) + 4 * U(this);
            break;
        case "heavy-heavy":
            a += 8 * U(this) + 2 * U(this);
            break;
        default:
            a += U(this)
        }
    } else a = Ke(this);
    return a
};
s.q = function () {
    return this.n.ba().ma(this.Ka)
};

function U(a) {
    return a.Oe !== f ? a.Oe : a.q().tb()
}

function Ke(a) {
    return a.ld !== f ? a.ld : (a.q().fa - 1) * Le(a.q())
}
s.Mc = function (a, b) {
    var c = Ke(this);
    line_width = U(this);
    for (var b = b + 0.5 * line_width, d = 0, e = 0; e < c; ++d, e += 4) this.J(a, b, line_width, e, e += 0 === d || 4 === d ? 3 : 6)
};
s.J = function (a, b, c, d, e) {
    d = d || 0;
    e = e || d + (this.ve !== f ? this.ve : Ke(this));
    a.beginPath();
    a.X(c);
    a.moveTo(b, d);
    a.lineTo(b, e);
    a.stroke()
};

function Me(a, b, c, d) {
    a.beginPath();
    a.arc(b, c, d, 0, 2 * Math.PI);
    a.closePath();
    a.fill()
}

function Ne(a, b) {
    var c = 4 * U(a),
        d = 2 * U(a),
        e = a.q(),
        e = V(e, Oe(e)) - V(e, 1),
        e = e - 2 * d;
    Me(b, c, e, d);
    Me(b, c, e + 4 * d, d)
}
s.p = function (a) {
    Je.a.p.call(this, a);
    if (!this.gl) {
        a.save();
        var b = this.n;
        b.repeat && "backward" === b.repeat.direction && (Ne(this, a), a.translate(8 * U(this), 0));
        var c = 0,
            d = f;
        switch (b.Ic) {
        case "light-light":
            d = U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            c = c + 0.5 * d + 2 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            break;
        case "light-heavy":
            d = U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            c = c + 0.5 * d + 2 * U(this);
            d = 4 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            break;
        case "heavy-light":
            d = 4 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            c = c + 0.5 * d + 2 * U(this);
            d = U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            break;
        case "heavy-heavy":
            d = 4 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            c = c + 0.5 * d + 2 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            break;
        case "heavy":
            d = 4 * U(this);
            c += 0.5 * d;
            this.J(a, c, d);
            break;
        case "dotted":
            for (var e = c, g = Ke(this), h = 0; h < g; h += 10) Me(a, e + 2, h + 5, 2);
            break;
        case "dashed":
            this.Mc(a, c);
            break;
        case "tick":
            d = U(this);
            c += 0.5 * d;
            this.J(a, c, d, 35, 45);
            break;
        case "short":
            d = U(this);
            c += 0.5 * d;
            this.J(a, c, d, 10, 30);
            break;
        case "regular":
            d = U(this), c += 0.5 * d, this.J(a, c, d)
        }
        b.repeat && "forward" === b.repeat.direction && (a.translate(c + d, 0), Ne(this, a));
        a.restore()
    }
};

function Pe(a, b) {
    Pe.a.constructor.call(this, a, b);
    if (b && this.is("part-group")) {
        var c = this;
        I();
        c = c || {};
        c.k = K(this, "number", 1);
        c.type = O(Oc(this, "type", f));
        c.Jh = J(this, "group-name", "");
        c.Kh = J(this, "group-name-display", "");
        c.Hh = J(this, "group-abbreviation", "");
        c.Ih = J(this, "group-abbreviation-display", "");
        c.Fd = L(this, "group-symbol", ["none", "brace", "line", "bracket", "square"], "none");
        c.Cm = N(this, "group-barline", l);
        c.Dm = dd(this, "group-time")
    }
    this.Ic = "regular"
}
u(Pe, ae);
Pe.prototype.toString = r("Score.PartGroup");

function Qe(a, b, c) {
    Qe.a.constructor.call(this);
    this.Ei = a;
    this.Gg = b;
    this.Oe = 4;
    this.ld = c
}
u(Qe, Je);
Qe.prototype.clone = function (a) {
    a = a || new Qe(this.Ei.clone(), this.Gg.clone(), Ke(this));
    return Qe.a.clone.call(this, a)
};
Qe.prototype.p = function (a) {
    Qe.a.p.call(this, a);
    var b = this.Gg.i("height");
    a.translate(0, -b);
    this.Gg.p(a);
    a.translate(0, b + Ke(this));
    this.Ei.p(a)
};

function Re(a, b) {
    function c(b) {
        b = G(a, b, f, 10);
        b.wa({
            width: b.i("width"),
            height: b.i("height")
        });
        return b
    }
    return new Qe(c("brackettips.up"), c("brackettips.down"), b)
}
Pe.prototype.m = function (a, b) {
    var c = f;
    if ("line" === this.Fd) {
        var c = new Fe("GroupLine"),
            d = G(a, "scripts.tenuto", 10, f);
        F(d, "groupline", "x", 0);
        c.o(d, l, l, 0, 0, "groupline");
        d = new Je;
        d.n = {
            Ic: "regular"
        };
        d.Oe = 2;
        d.ld = b ? b : 50;
        F(d, "groupline", "x", 0);
        c.o(d, l, l, 0, 0, "groupline");
        d = G(a, "scripts.tenuto", 10, f);
        F(d, "groupline", "x", 0);
        c.o(d, l, l, 0, 0, "groupline")
    } else "bracket" === this.Fd ? c = Re(a, b) : "brace" === this.Fd && (c = G(a, "brace445", f, b));
    c ? this.Q(c) : c = k;
    return c
};
Pe.prototype.getName = function () {
    return this.Kh ? this.Kh : this.Jh
};
Pe.prototype.Sf = function () {
    return this.Ih ? this.Ih : this.Hh ? this.Hh : this.getName()
};
Pe.prototype.O = n();

function Se(a, b) {
    Se.a.constructor.call(this, a, b, Te)
}
var Ue, Te = ["part-group", "score-part"];
u(Se, ae);

function Ve(a, b) {
    Ve.a.constructor.call(this, a, b);
    var c = this;
    I();
    c = c || {};
    c.id = O(J(this, "id", f));
    c.id && (c.Fm = J(this, "identification", f), c.yg = J(this, "part-name", ""), c.$e = J(this, "part-name-display", ""), c.Ye = J(this, "part-abbreviation", ""), c.Ze = J(this, "part-abbreviation-display", ""))
}
u(Ve, ae);
Ve.prototype.toString = r("Score.PartListItem");
s = Se.prototype;
s.qj = function (a, b) {
    if (Pe.prototype.isPrototypeOf(a)) {
        if ("start" === a.type)
            for (b = b.clone(); b.Tc();) {
                var c = b.Ld();
                if (Pe.prototype.isPrototypeOf(c) && "stop" === c.type && c.k === a.k && a.Wd && a.nf && a.Wd !== a.nf) {
                    this.qd(a);
                    break
                } else Ve.prototype.isPrototypeOf(c) && (a.Wd || (a.Wd = c), a.nf = c)
            }
        return a
    }
};
s.xd = function () {
    var a = Ue;
    a === f && (Ue = a = [this.qj]);
    return a
};
s.toString = r("Score.PartList");
s.m = r(k);
s.Zf = function () {
    for (var a = [], b = We(this); b.S();) {
        var c = b.next();
        Pe.prototype.isPrototypeOf(c) && a.push(c)
    }
    return a
};

function Xe(a) {
    for (var b = [], a = We(a); a.S();) {
        var c = a.next();
        Ve.prototype.isPrototypeOf(c) && b.push(c)
    }
    return b
}

function Ye(a) {
    Ye.a.constructor.call(this, k, a, Ze);
    this.v && (this.v = this.v.is("score-partwise") ? this.v : this.v.find("score-partwise"))
}
var Ze = ["part-list", "part"];
u(Ye, ae);
Ye.prototype.toString = r("Score.Source");

function $e(a) {
    for (var b = f, c = [], a = We(a); a.S();) {
        var d = a.next();
        Se.prototype.isPrototypeOf(d) ? b = d : c.push(d)
    }
    if (b && 1 <= c.length) {
        var e = [],
            g = Xe(b);
        c.forEach(function (a) {
            g.some(function (b) {
                return a.id === b.id ? (a.yg = b.yg, a.$e = b.$e, a.Ye = b.Ye, a.Ze = b.Ze, i) : l
            }) && e.push(a)
        });
        return e
    }
}
Ye.prototype.Zf = function () {
    for (var a = We(this); a.S();) {
        var b = a.next();
        if (Se.prototype.isPrototypeOf(b)) return b.Zf()
    }
    return []
};

function af() {
    this.qi = {
        Yk: 7,
        Kl: 40
    };
    this.We = {
        $c: f,
        ad: f
    };
    this.We.Cc = {};
    this.We.Cc.both = {
        "left-margin": 0,
        "right-margin": 0,
        "top-margin": 0,
        "bottom-margin": 0
    };
    this.Bi = {
        Ci: {
            "left-margin": 0,
            "right-margin": 0
        },
        zi: 0,
        Fi: 0
    }
}
af.prototype.Ah = o("qi");

function bf(a) {
    this.$a = a
}
s = bf.prototype;
s.Be = function () {
    return this.$a.$c
};
s.ti = function (a) {
    this.$a.$c = a
};
s.zd = function () {
    return this.$a.ad
};
s.ui = function (a) {
    this.$a.ad = a
};
s.ze = function (a) {
    if (this.$a && this.$a.Cc) return this.$a.Cc[a] || this.$a.Cc.both
};
af.prototype.Fb = function () {
    return new bf(this.We)
};

function cf(a) {
    this.$a = a
}
cf.prototype.ze = function () {
    return this.$a.Ci
};

function df(a) {
    return {
        top: a.$a.Fi,
        $m: a.$a.zi
    }
}
af.prototype.rc = function () {
    return new cf(this.Bi)
};
af.prototype.oa = function (a, b, c) {
    if ("lyric" !== a) return "music" === a ? this.cl : this.Rl;
    var d = f;
    this.vc && this.vc.some(function (a) {
        return b !== f && b === a.k || c !== f && c === a.name ? (d = a, i) : l
    });
    d || (d = this.vc && 0 < this.vc.length ? this.vc[0] : {
        Cj: "Times New Roman",
        Ea: "medium"
    }, d.k = b, d.name = c);
    return d
};

function ef(a) {
    if (a.Th === f) {
        var b = new af,
            c = P(a, "defaults");
        c && pd(I(), c, b);
        a.Th = b
    }
    return a.Th
}

function ff() {}

function gf(a) {
    return (a = a.Ff.filter(function (a) {
        return a.Sk
    }, a)) && 0 < a.length ? a : k
}
ff.prototype.Qb = o("page");

function hf(a) {
    a.qe === f && (Q(a, "credit", function (a, c) {
        var d = new ff;
        qd(I(), c, d);
        this.qe = this.qe || [];
        this.qe.push(d)
    }, a), a.dj === f && (a.dj = k));
    return a.qe
}
Ye.prototype.m = r(k);

function jf(a, b) {
    this.context = a;
    this.source = b
}
s = jf.prototype;
s.Fb = function () {
    return ef(this.source).Fb()
};
s.rc = function () {
    return ef(this.source).rc()
};
s.ui = ba("ad");
s.zd = function () {
    return this.ad ? this.ad : this.Fb().zd()
};
s.ti = ba("$c");
s.Be = function () {
    return this.$c ? this.$c : this.Fb().Be()
};

function kf(a, b) {
    a[b + "-margin"] = 20
}

function lf(a, b, c) {
    var c = c + "-margin",
        d = a[c];
    if (d !== f) return d;
    var d = a.Fb().ze(mf(b)),
        a = a.rc(),
        e = a.ze();
    return "top-margin" === c ? (a = df(a), d[c] + (1 === b.Qb() ? a.top : 0)) : "bottom-margin" === c ? d[c] : d[c] + e[c]
}

function nf(a, b) {
    a.Fb();
    mf(b);
    a.rc();
    return a.zd() - lf(a, b, "left") - lf(a, b, "right")
}

function of(a, b) {
    if (a.di) return a.di;
    var c = a.Fb().ze(mf(b)),
        d = df(a.rc()),
        c = a.Be() - (c["top-margin"] + c["bottom-margin"]);
    1 === b.Qb() && (c -= d.top);
    return c
}

function pf(a) {
    this.context = a
}
pf.prototype.$ = function (a, b) {
    if (1 === a.Qb() && 1 === b.Qb()) {
        var c = gf(a);
        c && c.forEach(function (a) {
            var c = new T(a.Mk, a.Pl);
            Ie(c, a.text, [a.font.Dj, a.font.Ea + "px", "sans-serif"].join(" "), this.context);
            var g = 0;
            "left" === a.jg ? g = 0 : "center" === a.jg ? g = 0.5 * (b.i("width") - c.i("width")) : "right" === a.jg && (g = b.i("width") - c.i("width"));
            F(c, "page", "x", g);
            b.o(c, l, l, 10, 10, "page", i)
        }, this)
    }
    return b
};

function qf(a) {
    this.context = a
}
qf.prototype.$ = function (a, b, c) {
    var d = "even" === mf(b) ? "left" : "right",
        d = new T(d);
    Ie(d, b.Qb(), "bold 12px sans-serif", this.context);
    var e = d.i("width"),
        a = "even" === mf(b) ? lf(a, b, "left") - e - 5 : a.zd() - lf(a, b, "right") + 5;
    F(d, "page", "x", a);
    b.o(d, l, l, 0, 0, "page", c ? i : l);
    return b
};

function rf() {}

function sf(a) {
    a.k = a.k || 1;
    a.k += 1
}
rf.prototype.Qb = function () {
    return this.k = this.k || 1
};

function mf(a) {
    return 0 === a.Qb() % 2 ? "even" : "odd"
}

function tf(a) {
    tf.a.constructor.call(this, "Page");
    this.k = a.Qb()
}
u(tf, Fe);
v(tf, rf);
tf.prototype.p = function (a) {
    a.save();
    var b = this.i("height");
    a.transform(1, 0, 0, -1, 0, b);
    tf.a.p.call(this, a);
    a.restore()
};

function uf(a, b) {
    this.k = a;
    this.j = b
}
s = uf.prototype;
s.toString = r("Score.Connector");
s.l = function () {
    aa(Error("ScoreLibrary.Score.Connector.toNodeString(): overload me!"))
};
s.clone = function (a) {
    a = a || new uf(this.k, this.j);
    this.I && (a.I = this.I.slice(0));
    return a
};
s.la = o("k");
s.r = o("I");
s.ta = function (a) {
    return /(begin|continue|end)/.test(a)
};
s.na = function (a) {
    return "begin" === a
};
s.va = function (a) {
    return "end" === a
};
s.Gc = function (a, b, c, d) {
    if (!this.zf(a, b, c)) return l;
    this.I = this.I || [];
    this.I.push(c);
    this.zc(a, b, c, d);
    return i
};
s.zf = function (a) {
    return a !== this.k || this.ended ? l : i
};
s.zc = function (a, b) {
    this.va(b) && (this.ended = i)
};
s.ub = o("Ec");
s.$f = n();
s.af = function (a, b) {
    var c = this.$f(a, b);
    c && (this.td(c), this.jd(c))
};
s.td = function (a) {
    this.I.forEach(function (b, c, d) {
        a.forEach(function (a) {
            a.Wa(b, c, d)
        })
    }, this)
};
s.jd = function (a) {
    this.I.forEach(function (b, c, d) {
        a.forEach(function (a) {
            a.fb(b, c, d)
        })
    }, this)
};
s.R = function () {
    var a = f;
    switch (this.l()) {
    case "harmony-frame":
    case "harmony-chord":
    case "staff-lyrics":
    case "lyric":
    case "rehearsal":
    case "words":
    case "metronome":
    case "wedge":
    case "tuplet":
    case "toe":
    case "tap":
    case "heel":
    case "snap-pizzicato":
    case "stopped":
    case "triple-tongue":
    case "double-tongue":
    case "string":
    case "fret":
    case "fingering":
    case "pluck":
    case "thumb-position":
    case "open-string":
    case "harmonic":
    case "down-bow":
    case "up-bow":
    case "dynamics":
    case "schleifer":
    case "inverted-mordent":
    case "mordent":
    case "shake":
    case "wavy-line":
    case "vertical-turn":
    case "delayed-inverted-turn":
    case "inverted-turn":
    case "delayed-turn":
    case "turn":
    case "trill-mark":
    case "dashes":
    case "bracket":
    case "ending":
    case "accidental-mark":
    case "fermata":
    case "accordion-registration":
    case "pedal":
    case "segno":
    case "coda":
    case "caesura":
    case "breath-mark":
    case "accent":
    case "octave-shift":
    case "harp-pedals":
        a = "staff";
        break;
    case "glissando":
    case "slide":
    case "tremolo":
    case "beam":
    case "bend":
    case "falloff":
    case "doit":
    case "plop":
    case "scoop":
    case "staccatissimo":
    case "detached-legato":
    case "tenuto":
    case "staccato":
    case "strong-accent":
    case "slur":
    case "hammer-on":
    case "pull-off":
    case "tied":
        a = "notes"
    }
    return a
};
s.s = function () {
    return this.j ? "above" === this.j.Ta ? "upper" : "lower" : "upper"
};
s.Je = r(i);
s.Gb = function () {
    var a = 5;
    switch (this.l()) {
    case "caesura":
        a = -10;
        break;
    case "slide":
    case "glissando":
    case "beam":
    case "tremolo":
    case "tied":
        a = 0
    }
    return a
};

function vf(a, b, c) {
    var d = 0;
    switch (a.l()) {
    case "harmony-frame":
    case "harmony-chord":
    case "tap":
    case "heel":
    case "toe":
    case "stopped":
    case "snap-pizzicato":
    case "double-tongue":
    case "triple-tongue":
    case "fingering":
    case "pluck":
    case "string":
    case "open-string":
    case "thumb-position":
    case "harmonic":
    case "up-bow":
    case "down-bow":
    case "shake":
    case "mordent":
    case "inverted-mordent":
    case "schleifer":
    case "turn":
    case "delayed-turn":
    case "inverted-turn":
    case "delayed-inverted-turn":
    case "vertical-turn":
    case "trill-mark":
    case "dynamics":
    case "fermata":
    case "accidental-mark":
    case "accent":
    case "strong-accent":
    case "staccato":
    case "tenuto":
    case "detached-legato":
    case "staccatissimo":
        var e = a.r()[0],
            g = e.t(),
            h = f,
            d = f;
        W.prototype.isPrototypeOf(e) && (h = g.Ob(), d = g.aa());
        e = 0;
        if (g.wg) var j = b.kg(g.da),
        e = e + (g.W + c * j / b.Pb() * g.W / (g.W + g.Ra));
        b = 0;
        h && (b = h.i("width"));
        c = 0;
        d && (c += d.W, c += 0.5 * d.i("width"));
        a = a.t().i("width");
        d = e + b + c - 0.5 * a;
        break;
    case "pedal":
    case "accordion-registration":
        a = a.t().i("width");
        d = 0.5 * -a;
        break;
    case "caesura":
    case "breath-mark":
        g = a.r()[0].t();
        d += g.W + g.i("width") + g.Ra;
        break;
    case "rehearsal":
    case "segno":
    case "coda":
        a = a.t().i("width");
        d = -a;
        break;
    case "bend":
        d += 10
    }
    return d
}
s.V = function () {
    aa(Error("ScoreLibrary.Score.Connector.getClosestNoteToMe(): overload me!"))
};
s.ia = function () {
    aa(Error("ScoreLibrary.Score.Connector.getFarmostNoteToMe(): overload me!"))
};
s.Q = function (a) {
    a.n = this;
    this.cf = a
};
s.t = o("cf");
s.m = function () {
    aa(Error("ScoreLibrary.Score.Connector.createRenderer(): overload me!"))
};

function wf() {}

function xf(a, b, c) {
    b.forEach(function (a) {
        var b = c.ka(a.prototype.l());
        b && yf(this, c, a, b)
    }, a)
}
wf.prototype.Mh = r(i);
wf.prototype.reset = function () {
    if (this.ra) {
        var a = f;
        this.ra.forEach(function (b) {
            !b.ended && /slur|tied/.test(b.l()) && (a = a || [], b = b.clone(), b.Vc = i, a.push(b))
        });
        this.ra = a
    }
};
wf.prototype.ka = function (a, b) {
    return a ? this.ra ? this.ra.filter(function (c) {
        return RegExp.prototype.isPrototypeOf(a) ? b ? !a.test(c.l()) : a.test(c.l()) : b ? a !== c.l() : a === c.l()
    }) : [] : this.ra || []
};

function yf(a, b, c, d) {
    function e(a, b, c) {
        zf.prototype.isPrototypeOf(c) && (c = c.ub(/(wedge|dashes|bracket)/.test(a.prototype.l()) ? i : a.prototype.na(b.type)));
        return c
    }
    var g = f;
    d.forEach(function (a) {
        if (c.prototype.ta(a.type)) {
            this.ra = this.ra || [];
            if (c.prototype.na(a.type) || !this.Mh(c, a.k)) g = new c(a.k, a), this.ra.push(g);
            else
                for (var d = this.ra.length - 1; 0 <= d; --d) {
                    g = this.ra[d];
                    var m = g.r();
                    b = e(c, a, b);
                    if (!g.ended && 0 < m.length && (Af.prototype.isPrototypeOf(b) || Af.prototype.isPrototypeOf(m[0]) || b.sc() === m[0].sc()) &&
                        g.la() === a.k && c.prototype.toString() === g.toString()) break;
                    else g = f
                }
            g && (b = e(c, a, b), g.Gc(a.k, a.type, b, a))
        }
    }, a)
}

function Bf(a, b) {
    Bf.a.constructor.call(this, a, b)
}
u(Bf, uf);
s = Bf.prototype;
s.toString = r("Score.Anchor");
s.clone = function (a) {
    a = a || new Bf(this.k, this.j);
    return Bf.a.clone.call(this, a)
};
s.na = r(i);
s.va = r(i);
s.ta = r(i);

function Cf(a) {
    this.anchor = a
}
Cf.prototype.Wa = n();
Cf.prototype.fb = function (a, b) {
    0 === b && (this.anchor.Ec = a)
};
Bf.prototype.$f = function () {
    return [new Cf(this)]
};

function X(a, b) {
    X.a.constructor.call(this, a, b)
}
u(X, Bf);
s = X.prototype;
s.toString = r("Score.GlyphAnchor");
s.clone = function (a) {
    a = a || new X(this.k, this.j);
    return X.a.clone.call(this, a)
};
s.N = function () {
    return []
};
s.nc = function (a) {
    var b = {
        width: f,
        height: f
    };
    switch (a) {
    case "scripts.segno":
        b.height = 30;
        break;
    case "scripts.trill_element":
    case "scripts.tenuto":
    case "scripts.dportato":
    case "scripts.uportato":
    case "scripts.sforzato":
        b.width = 10;
        break;
    case "scripts.prall":
    case "scripts.mordent":
    case "scripts.trill":
    case "scripts.turn":
    case "scripts.reverseturn":
        b.width = 15;
        break;
    case "scripts.snappizzicato":
    case "scripts.stopped":
    case "scripts.open":
    case "scripts.thumb":
    case "scripts.flageolet":
        b.width = 8;
        break;
    case "scripts.upbow":
    case "scripts.downbow":
    case "comma":
    case "scripts.ustaccatissimo":
    case "scripts.dstaccatissimo":
    case "scripts.umarcato":
    case "scripts.dmarcato":
        b.height =
            10;
        break;
    case "scripts.ufermata":
    case "scripts.dfermata":
    case "scripts.ushortfermata":
    case "scripts.dshortfermata":
    case "scripts.ulongfermata":
    case "scripts.dlongfermata":
    case "scripts.coda":
        b.width = 20;
        break;
    case "scripts.caesura.curved":
        b.height = 20;
        break;
    case "scripts.upedalheel":
    case "scripts.dpedalheel":
    case "scripts.upedaltoe":
    case "scripts.dpedaltoe":
    case "pedal.Ped":
    case "pedal.*":
        b.height = 15;
        break;
    case "dots.dot":
    case "scripts.staccato":
    case "accordion.accDot":
        b.height = 4;
        break;
    case "pedal..":
        b.height =
            3;
        break;
    case "scripts.prallmordent":
    case "scripts.prallprall":
    case "scripts.prallup":
    case "scripts.pralldown":
    case "scripts.upmordent":
    case "scripts.downmordent":
    case "scripts.upprall":
    case "scripts.downprall":
    case "accordion.accDiscant":
        b.width = 25
    }
    return b
};
s.m = function (a, b) {
    var c = f,
        d = fc(kc(a)),
        e = this.N();
    e && 0 < e.length && (c = 1 < e.length || b ? new R("GlyphAnchor") : f, e.forEach(function (a) {
        var b = this.nc(a),
            a = G(d, a, b.width, b.height);
        c ? (b = a.P(), F(a, "glyph_anchor", "y", b.c), c.o(a, l, l, 1, 1, "glyph_anchor")) : c = a
    }, this));
    this.Q(c);
    return c
};

function Df(a) {
    Df.a.constructor.call(this, "Staff");
    this.ea = a
}
u(Df, S);
Df.prototype.Ya = function (a) {
    return "width" === a ? 0 : 10 * (this.ea.fa - 1) + this.ea.tb()
};
Df.prototype.clone = function (a) {
    a = a || new Df(this.ea);
    return Df.a.clone.call(this, a)
};
Df.prototype.p = function (a) {
    Df.a.p.call(this, a);
    a.save();
    var b = Ib(this, "width");
    a.qa(this.ea.Om || "#000000");
    a.X(this.ea.tb());
    for (var c = 0, d = this.ea.fa, e = 1; e <= d; ++e) a.beginPath(), B.J(a, 0, c, b, c), a.stroke(), c += 10;
    a.restore()
};
Df.prototype.u = function () {
    return -V(this.ea, Oe(this.ea))
};

function Ef() {
    Ef.a.constructor.call(this, "Renderer.Note")
}
u(Ef, R);
Ef.prototype.clone = function (a) {
    a = a || new Ef;
    return Ef.a.clone.call(this, a)
};
Ef.prototype.p = function (a) {
    Ef.a.p.call(this, a);
    if ("TAB" !== this.n.rb().T) {
        a.save();
        var b = this.aa(),
            c = E(b, "parent", "x") || 0,
            d = E(b, "parent", "y") || 0,
            b = b.P();
        a.translate(c + -b.e, d + -b.c);
        c = this.n;
        if (Ff(c)) {
            a.save();
            a.translate(0, -c.u());
            var d = c.q(),
                e = Ib(this.aa(), "width");
            c.H();
            var g = d.tb();
            a.X(g);
            b = -g;
            e += g;
            g = c.q();
            c.H();
            for (var g = 0 > Gf(c) ? V(g, 1) : V(g, g.fa), g = Math.abs(c.u() - g), g = Math.floor(g / 10), h = 1; h <= g; ++h) {
                var j = 0 > Gf(c) ? Hf(d, 2 * -h) : Hf(d, 2 * (d.fa + h - 1));
                a.beginPath();
                B.J(a, b, j, e, j);
                a.stroke()
            }
            a.restore()
        }
        c =
            this.n;
        if (If(c)) {
            d = c.ja();
            e = this.aa();
            b = Ib(e, "width");
            e = e.P();
            g = c.H();
            h = 0.5 * c.q().tb();
            a.X(h);
            var j = Jf(g, h, b),
                m = Kf(d, g, h, e),
                p = Lf(c, d, g, h, e);
            a.beginPath();
            B.J(a, j, m, j, p);
            a.stroke();
            if ("long" === d || "breve" === d) d = "breve", g = 1 === g ? -1 : 1, j = Jf(g, h, b), m = Kf(d, g, h, e), p = Lf(c, d, g, h, e), a.beginPath(), B.J(a, j, m, j, p), a.stroke()
        }
        c = this.n;
        e = Mf(c);
        if (e !== k && "single" === e.type && 0 < e.k) {
            e = Ib(this.aa(), "width");
            d = c.H();
            b = 0.5 * e;
            1 === d && (b *= -1);
            g = 0.5 * e; - 1 === d && (g += e);
            e = Mf(c);
            for (h = 0; h < e.k; ++h) {
                j = d;
                m = c.Za();
                p = h;
                this.n.q();
                m = m -
                    8 - 6 * p;
                1 === j && (m *= -1);
                j = y0 = m;
                this.n.q();
                y1 = j - 4;
                radian = 30 * Math.PI / 360;
                a.beginPath();
                var q = (g - b) * Math.tan(radian),
                    j = a,
                    m = b,
                    p = g,
                    x = y1,
                    A = y1 + q,
                    q = y0 + q;
                j.moveTo(m, y0);
                j.lineTo(m, x);
                j.lineTo(p, A);
                j.lineTo(p, q);
                a.closePath();
                a.fill()
            }
        }
        c = this.n;
        Nf(c) && this.Pf && (a.save(), d = this.n, b = this.aa().P(), d.q().tb(), e = this.Pf.P(), 1 === d.H() ? a.transform(1, 0, 0, -1, -b.e, -d.Za() + -e.c) : a.translate(b.f + e.e, d.Za() + e.c), this.Pf.p(a), this.ed && (a.translate(-3.5, 0.2 * c.Za()), this.ed.p(a)), a.restore());
        a.restore()
    }
};

function Of(a, b) {
    var c = f;
    te(a, function (a) {
        return b.test(a.getName()) ? (c = a, i) : l
    });
    return c
}
Ef.prototype.aa = function () {
    return Of(this, /(^noteheads|^rests|^ChordNote|^fret)/)
};
Ef.prototype.Ob = function () {
    return Of(this, /(^Accidental|^accidentals)/)
};

function Pf() {
    Pf.a.constructor.call(this, "ChordCompound")
}
u(Pf, R);
Pf.prototype.clone = function (a) {
    a = a || new Pf;
    return Pf.a.clone.call(this, a)
};
Pf.prototype.aa = Ef.prototype.aa;
Pf.prototype.Ob = Ef.prototype.Ob;

function Qf() {}

function Rf(a, b, c, d) {
    var e = a.n,
        g = e.r(),
        h = e.s(),
        j = g[0].q(),
        m = a.yf,
        p = a.xf,
        j = "upper" === h ? V(j, j.fa) : V(j, 1);
    e.Vc ? m = j : e.Ke && (p = j);
    var q = j = f;
    1 < g.length ? (j = b === g[0] ? m : p, q = c === g[0] ? m : p) : 1 === g.length && d ? (j = m, q = p) : 1 === g.length && !d && (j = p, q = m);
    j = "lower" === h ? (j <= q ? 0 : j - q) + a.i("height") : j >= q ? 0 : j - q;
    a.Uc(b) && (j += a.Vf(b));
    e.Ke && !d && (j += "upper" === h ? 10 : -5);
    return j
}
Qf.prototype.Uc = n();
Qf.prototype.Vf = n();

function Sf(a) {
    Sf.a.constructor.call(this, a || "Slur")
}
u(Sf, S);
v(Sf, Qf);
s = Sf.prototype;
s.clone = function (a) {
    a = a || new Sf;
    return Sf.a.clone.call(this, a)
};
s.p = function (a) {
    Sf.a.p.call(this, a);
    var b = this.n,
        c;
    c = this.n;
    if (c.Vc) c = 35;
    else {
        c = c.r()[0];
        var d = c.t(),
            e = d.aa(),
            d = d.W + E(e, "parent", "x"),
            g = this.Uc(c),
            h = c.H();
        c = d = g && -1 === h ? d + e.i("width") : g && 1 === h && (this.Ie(c) || !Tf(this)) ? d + 0 : d + 0.5 * e.i("width")
    }
    e = this.n.r();
    e = Rf(this, e[0], e[e.length - 1], i);
    h = this.n;
    if (h.Ke) d = this.i("width");
    else var g = h.r(),
    d = g[g.length - 1], j = g[0].t(), m = d.t(), g = m.aa(), h = E(m, "parent", "x") - (h.Vc ? 0 : E(j, "parent", "x")) + j.W + E(g, "parent", "x"), j = this.Uc(d), m = d.H(), d = h = j && 1 === m ? h + 0 : j && -1 === m && (this.Ie(d) || !Tf(this)) ? h + g.i("width") : h + 0.5 * g.i("width");
    g = this.n.r();
    g = Rf(this, g[g.length - 1], g[0], l);
    a.save();
    a.qa("#000000");
    a.beginPath();
    yb(a, c, e, d, g, "upper" === b.s(), 25);
    a.closePath();
    a.fill();
    a.restore();
    if (b = this.Ma(a)) e = g + 35, j = Ib(b, "width"), h = Ib(b, "height"), c += 0.5 * (d - c - j), e = g + 0.5 * (e - g - h), a.save(), a.translate(c, e), b.p(a), a.restore()
};
s.Vf = function (a) {
    var b = this.n,
        c = 0;
    !this.Ie(a) && Tf(this) && (c = a.Za(), c -= Math.abs(b.ia(a).u() - b.V(a).u()), c = c * ("upper" === b.s() ? -1 : 1) * (Uf(b) && !Vf(a) ? 0.8 : 0.5));
    return c
};
s.Uc = function (a) {
    var b = this.n;
    return "upper" === b.s() && If(a) && -1 === a.H() || "lower" === b.s() && If(a) && 1 === a.H() ? i : l
};
s.Ie = function (a) {
    a = this.n.V(a);
    return Nf(a) || a.ka("beam") ? i : l
};

function Tf(a) {
    var b = a.n,
        c = b.r(),
        a = b.V(c[0]),
        b = b.V(c[c.length - 1]);
    return 6 * Le(a.q()) >= Math.abs(b.u() - a.u())
}
s.Ma = function (a) {
    var b = f,
        c = this.n.Ga();
    c && (b = new T("center"), Ie(b, c, "italic bold 12px sans-serif", a), b.wa({
        width: b.i("width"),
        height: b.i("height")
    }));
    return b
};

function Wf(a, b) {
    Wf.a.constructor.call(this, a, b)
}
ja("ScoreLibrary.Score.Slur", Wf);
u(Wf, uf);
s = Wf.prototype;
s.toString = r("Score.Slur");
s.l = r("slur");
s.clone = function (a) {
    a = a || new Wf(this.k, this.j);
    return Wf.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.Ie = o("Im");
s.Ga = r("");
s.s = function () {
    var a = 1,
        b = this.r();
    if (b) {
        var c = b[0],
            b = b[b.length - 1];
        Vf(c) ? a = -1 === c.H() ? 1 : -1 : c.ca || b.ca ? a = -1 : c.H() === b.H() && (a = c.H())
    }
    return -1 === a ? "lower" : "upper"
};
s.Je = r(l);
s.V = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "lower" === this.s() ? 0 : a.I.length - 1;
        return a.I[b]
    }
    return a
};
s.ia = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "lower" === this.s() ? a.I.length - 1 : 0;
        return a.I[b]
    }
    return a
};
s.m = function () {
    var a = new Sf;
    C(a, "height", Uf(this) ? 0 : 17.5);
    this.Q(a);
    return a
};
s.Gb = function () {
    return Uf(this) ? 0 : 5
};

function Uf(a) {
    return (a = a.r()) && (a[0].ca || a[a.length - 1].ca)
}

function Xf() {
    Xf.a.constructor.call(this, "Curve")
}
u(Xf, S);
Xf.prototype.clone = function (a) {
    a = a || new Xf;
    return Xf.a.clone.call(this, a)
};
Xf.prototype.p = function (a) {
    Xf.a.p.call(this, a);
    var b = this.n,
        c = 0 + this.i("width"),
        d = 0 + this.i("height"),
        e = 0 + (b.ej || 5),
        b = d - (b.ej || 5);
    a.save();
    this.transform(a);
    a.qa("#000000");
    a.X(1);
    a.beginPath();
    0 === d ? B.J(a, 0, 0, c, 0) : 0 === c ? B.J(a, 0, 0, 0, d) : (a.moveTo(0, 0), a.quadraticCurveTo(e, b, c, d));
    a.stroke();
    a.restore()
};

function Yf(a, b) {
    Yf.a.constructor.call(this, a, b)
}
u(Yf, X);
Yf.prototype.toString = r("Score.Accent");
Yf.prototype.l = r("accent");
Yf.prototype.N = function () {
    return ["scripts.sforzato"]
};
Yf.prototype.clone = function (a) {
    a = a || new Yf(this.k, this.j);
    return Yf.a.clone.call(this, a)
};

function Zf(a, b) {
    Zf.a.constructor.call(this, a, b)
}
u(Zf, X);
Zf.prototype.toString = r("Score.StrongAccent");
Zf.prototype.l = r("strong-accent");
Zf.prototype.N = function () {
    return ["upper" === this.s() ? "scripts.umarcato" : "scripts.dmarcato"]
};
Zf.prototype.clone = function (a) {
    a = a || new Zf(this.k, this.j);
    return Zf.a.clone.call(this, a)
};

function $f(a, b) {
    $f.a.constructor.call(this, a, b)
}
u($f, X);
$f.prototype.toString = r("Score.Staccato");
$f.prototype.l = r("staccato");
$f.prototype.N = function () {
    return ["scripts.staccato"]
};
$f.prototype.clone = function (a) {
    a = a || new $f(this.k, this.j);
    return $f.a.clone.call(this, a)
};

function ag(a, b) {
    ag.a.constructor.call(this, a, b)
}
u(ag, X);
ag.prototype.toString = r("Score.Tenuto");
ag.prototype.l = r("tenuto");
ag.prototype.N = function () {
    return ["scripts.tenuto"]
};
ag.prototype.clone = function (a) {
    a = a || new ag(this.k, this.j);
    return ag.a.clone.call(this, a)
};

function bg(a, b) {
    bg.a.constructor.call(this, a, b)
}
u(bg, X);
bg.prototype.toString = r("Score.DetachedLegato");
bg.prototype.l = r("detached-legato");
bg.prototype.N = function () {
    return ["upper" === this.s() ? "scripts.dportato" : "scripts.uportato"]
};
bg.prototype.clone = function (a) {
    a = a || new bg(this.k, this.j);
    return bg.a.clone.call(this, a)
};

function cg(a, b) {
    cg.a.constructor.call(this, a, b)
}
u(cg, X);
cg.prototype.toString = r("Score.Staccatissimo");
cg.prototype.l = r("staccatissimo");
cg.prototype.N = function () {
    return ["upper" === this.s() ? "scripts.ustaccatissimo" : "scripts.dstaccatissimo"]
};
cg.prototype.clone = function (a) {
    a = a || new cg(this.k, this.j);
    return cg.a.clone.call(this, a)
};

function dg(a, b) {
    dg.a.constructor.call(this, a, b)
}
u(dg, X);
s = dg.prototype;
s.toString = r("Score.BreathMark");
s.l = r("breath-mark");
s.N = function () {
    return ["comma"]
};
s.clone = function (a) {
    a = a || new dg(this.k, this.j);
    return dg.a.clone.call(this, a)
};
s.s = r("upper");

function eg(a, b) {
    eg.a.constructor.call(this, a, b)
}
u(eg, X);
s = eg.prototype;
s.toString = r("Score.Caesura");
s.l = r("caesura");
s.N = function () {
    return ["scripts.caesura.curved"]
};
s.clone = function (a) {
    a = a || new eg(this.k, this.j);
    return eg.a.clone.call(this, a)
};
s.s = r("upper");

function fg(a, b) {
    fg.a.constructor.call(this, a, b)
}
u(fg, Bf);
s = fg.prototype;
s.toString = r("Score.Scoop");
s.l = r("scoop");

function gg(a) {
    return a.Xg !== f ? a.Xg : 18
}

function hg(a) {
    return a.Wg !== f ? a.Wg : 18
}
s.Gb = function () {
    return -hg(this)
};
s.clone = function (a) {
    a = a || new fg(this.k, this.j);
    return fg.a.clone.call(this, a)
};
s.Je = r(l);
s.m = function () {
    var a = new Xf;
    C(a, "width", gg(this));
    C(a, "height", hg(this));
    this.Q(a);
    return a
};
s.Gb = function () {
    return -hg(this)
};

function ig(a, b) {
    ig.a.constructor.call(this, a, b)
}
u(ig, fg);
s = ig.prototype;
s.toString = r("Score.Plop");
s.l = r("plop");
s.clone = function (a) {
    a = a || new ig(this.k, this.j);
    return ig.a.clone.call(this, a)
};
s.m = function () {
    var a = ig.a.m.call(this);
    (new Ub(new Vb(a, l), 0, hg(this))).transform();
    return a
};
s.Gb = r(0);

function jg(a, b) {
    jg.a.constructor.call(this, a, b)
}
u(jg, fg);
s = jg.prototype;
s.toString = r("Score.Doit");
s.l = r("doit");
s.clone = function (a) {
    a = a || new jg(this.k, this.j);
    return jg.a.clone.call(this, a)
};
s.m = function () {
    var a = jg.a.m.call(this);
    (new Ub(new Vb(new Vb(a, l), i), gg(this), hg(this))).transform();
    return a
};
s.Gb = r(0);

function kg(a, b) {
    kg.a.constructor.call(this, a, b)
}
u(kg, fg);
kg.prototype.toString = r("Score.Falloff");
kg.prototype.l = r("falloff");
kg.prototype.clone = function (a) {
    a = a || new kg(this.k, this.j);
    return kg.a.clone.call(this, a)
};
kg.prototype.m = function () {
    var a = kg.a.m.call(this);
    (new Ub(new Vb(a, i), gg(this), 0)).transform();
    return a
};

function lg(a) {
    lg.a.constructor.call(this, "TextAnchor");
    this.$b = a
}
u(lg, S);
lg.prototype.clone = function (a) {
    a = a || new lg(this.$b);
    return lg.a.clone.call(this, a)
};

function mg(a, b) {
    var c = b.i("width"),
        d = b.i("height");
    return /(square|circle|oval)/.test(a.$b.Wf()) ? Math.max(c, d) : d
}
lg.prototype.p = function (a) {
    lg.a.p.call(this, a);
    var b = this.Ma(a);
    if (b) {
        a.save();
        var c = b.i("height"),
            c = 0.5 * (mg(this, b) - c);
        a.translate(0, c);
        b.p(a);
        var d = this.$b.Wf();
        if (d && "none" !== d) {
            a.save();
            a.X(1);
            a.qa("#000000");
            a.beginPath();
            b = this.Da.i("width");
            c = this.Da.i("height");
            switch (d) {
            case "oval":
            case "circle":
                d = B;
                d = Math.max(b, c);
                a.arc(0.5 * b, 0.5 * c, 0.5 * d, 0, 2 * Math.PI);
                break;
            case "rectangle":
                a.rect(0, 0, b, c);
                break;
            default:
            case "square":
                d = Math.max(b, c);
                a.rect(0, 0 - 0.5 * (d - c), d, d);
                break;
            case "bracket":
                d = B, zb(d,
                    a, 0, 0, b, c, 8)
            }
            a.stroke();
            a.restore()
        }
        a.restore()
    }
};
lg.prototype.Ma = function (a) {
    if (this.Da === f) {
        var b = this.$b.Ga(a);
        b && (this.Da = new T("left"), kc(a).Ea = 14, Ie(this.Da, b, this.$b.oa(), a, this.$b.qc()), a = this.Da.i("width"), b = this.Da.i("height"), this.Da.wa({
            width: a,
            height: b
        }), b = mg(this, this.Da), C(this, "width", a), C(this, "height", b))
    }
    return this.Da
};

function ng(a) {
    ng.a.constructor.call(this, "TextAnchor");
    this.$b = a
}
u(ng, lg);
ng.prototype.clone = function (a) {
    a = a || new ng(this.$b);
    return ng.a.clone.call(this, a)
};
ng.prototype.p = function (a) {
    ng.a.p.call(this, a);
    var b = this.n,
        c = b.r(),
        d = f;
    if (c && (d = c[0].ka("tied")) && "stop" === d[0].type) a.save(), a.Td(b.oa()), b = "(", c = 0 - a.measureText(b), d = 0 + this.i("height") - 1, a.fillText(b, c, d), b = ")", c = 0 + this.i("width"), a.fillText(b, c, d), a.restore()
};

function og(a, b) {
    og.a.constructor.call(this, a, b)
}
u(og, Bf);
s = og.prototype;
s.toString = r("Score.TextAnchor");
s.clone = function (a) {
    a = a || new og(this.k, this.j);
    return og.a.clone.call(this, a)
};
s.Wf = function () {
    return this.j.te
};
s.Ga = function () {
    return this.j.text
};
s.oa = r("italic 16px sans-serif");
s.qc = n();
s.m = function (a) {
    var b = new lg(this);
    b.Ma(a);
    this.Q(b);
    return b
};

function pg(a, b) {
    pg.a.constructor.call(this, a, b)
}
u(pg, X);
pg.prototype.toString = r("Score.UpBow");
pg.prototype.l = r("up-bow");
pg.prototype.N = function () {
    return ["scripts.upbow"]
};
pg.prototype.clone = function (a) {
    a = a || new pg(this.k, this.j);
    return pg.a.clone.call(this, a)
};

function qg(a, b) {
    qg.a.constructor.call(this, a, b)
}
u(qg, X);
qg.prototype.toString = r("Score.DownBow");
qg.prototype.l = r("down-bow");
qg.prototype.N = function () {
    return ["scripts.downbow"]
};
qg.prototype.clone = function (a) {
    a = a || new qg(this.k, this.j);
    return qg.a.clone.call(this, a)
};

function rg(a, b) {
    rg.a.constructor.call(this, a, b)
}
u(rg, X);
rg.prototype.toString = r("Score.Harmonic");
rg.prototype.l = r("harmonic");
rg.prototype.N = function () {
    return ["scripts.flageolet"]
};
rg.prototype.clone = function (a) {
    a = a || new rg(this.k, this.j);
    return rg.a.clone.call(this, a)
};

function sg(a, b) {
    sg.a.constructor.call(this, a, b)
}
u(sg, X);
sg.prototype.toString = r("Score.OpenString");
sg.prototype.l = r("open-string");
sg.prototype.N = function () {
    return ["scripts.open"]
};
sg.prototype.clone = function (a) {
    a = a || new sg(this.k, this.j);
    return sg.a.clone.call(this, a)
};

function tg(a, b) {
    tg.a.constructor.call(this, a, b)
}
u(tg, X);
tg.prototype.toString = r("Score.ThumbPosition");
tg.prototype.l = r("thumb-position");
tg.prototype.N = function () {
    return ["scripts.thumb"]
};
tg.prototype.clone = function (a) {
    a = a || new tg(this.k, this.j);
    return tg.a.clone.call(this, a)
};

function ug(a, b) {
    ug.a.constructor.call(this, a, b)
}
u(ug, og);
ug.prototype.toString = r("Score.Pluck");
ug.prototype.l = r("pluck");
ug.prototype.clone = function (a) {
    a = a || new ug(this.k, this.j);
    return ug.a.clone.call(this, a)
};
ug.prototype.oa = r("italic 12px sans-serif");

function vg(a, b) {
    vg.a.constructor.call(this, a, b)
}
u(vg, og);
vg.prototype.toString = r("Score.Fingering");
vg.prototype.l = r("fingering");
vg.prototype.clone = function (a) {
    a = a || new vg(this.k, this.j);
    return vg.a.clone.call(this, a)
};
vg.prototype.oa = ug.prototype.oa;

function wg(a, b) {
    wg.a.constructor.call(this, a, b)
}
u(wg, og);
s = wg.prototype;
s.toString = r("Score.Fret");
s.l = r("fret");
s.s = r("upper");
s.clone = function (a) {
    a = a || new wg(this.k, this.j);
    return wg.a.clone.call(this, a)
};
s.oa = r("bold 12px sans-serif");
s.Ad = function () {
    return this.j.wl
};
s.m = function (a) {
    var b = new ng(this);
    b.Ma(a);
    this.Q(b);
    return b
};

function xg(a, b) {
    xg.a.constructor.call(this, a, b)
}
u(xg, og);
xg.prototype.toString = r("Score.String");
xg.prototype.l = r("string");
xg.prototype.clone = function (a) {
    a = a || new xg(this.k, this.j);
    return xg.a.clone.call(this, a)
};
xg.prototype.oa = ug.prototype.oa;

function yg(a, b) {
    yg.a.constructor.call(this, a, b)
}
u(yg, X);
yg.prototype.toString = r("Score.DoubleTongue");
yg.prototype.l = r("double-tongue");
yg.prototype.N = function () {
    return ["dots.dot", "dots.dot"]
};
yg.prototype.clone = function (a) {
    a = a || new yg(this.k, this.j);
    return yg.a.clone.call(this, a)
};

function zg(a, b) {
    zg.a.constructor.call(this, a, b)
}
u(zg, X);
zg.prototype.toString = r("Score.TripleTongue");
zg.prototype.l = r("triple-tongue");
zg.prototype.N = function () {
    return ["dots.dot", "dots.dot", "dots.dot"]
};
zg.prototype.clone = function (a) {
    a = a || new zg(this.k, this.j);
    return zg.a.clone.call(this, a)
};

function Ag(a, b) {
    Ag.a.constructor.call(this, a, b)
}
u(Ag, X);
Ag.prototype.toString = r("Score.Stopped");
Ag.prototype.l = r("stopped");
Ag.prototype.N = function () {
    return ["scripts.stopped"]
};
Ag.prototype.clone = function (a) {
    a = a || new Ag(this.k, this.j);
    return Ag.a.clone.call(this, a)
};

function Bg(a, b) {
    Bg.a.constructor.call(this, a, b)
}
u(Bg, X);
Bg.prototype.toString = r("Score.SnapPizzicato");
Bg.prototype.l = r("snap-pizzicato");
Bg.prototype.N = function () {
    return ["scripts.snappizzicato"]
};
Bg.prototype.clone = function (a) {
    a = a || new Bg(this.k, this.j);
    return Bg.a.clone.call(this, a)
};

function Cg(a, b) {
    Cg.a.constructor.call(this, a, b)
}
u(Cg, og);
Cg.prototype.toString = r("Score.Tap");
Cg.prototype.s = r("upper");
Cg.prototype.l = r("tap");
Cg.prototype.clone = function (a) {
    a = a || new Cg(this.k, this.j);
    return Cg.a.clone.call(this, a)
};

function Dg(a, b) {
    Dg.a.constructor.call(this, a, b)
}
u(Dg, X);
s = Dg.prototype;
s.toString = r("Score.Heel");
s.l = r("heel");
s.s = r("upper");
s.N = function () {
    var a;
    a = "scripts." + ("upper" === this.s() ? "u" : "d");
    return [a + "pedalheel"]
};
s.clone = function (a) {
    a = a || new Dg(this.k, this.j);
    return Dg.a.clone.call(this, a)
};

function Eg(a, b) {
    Eg.a.constructor.call(this, a, b)
}
u(Eg, X);
s = Eg.prototype;
s.toString = r("Score.Toe");
s.l = r("toe");
s.s = r("upper");
s.N = function () {
    var a;
    a = "scripts." + ("upper" === this.s() ? "u" : "d");
    return [a + "pedaltoe"]
};
s.clone = function (a) {
    a = a || new Eg(this.k, this.j);
    return Eg.a.clone.call(this, a)
};

function Fg(a, b) {
    Fg.a.constructor.call(this, a, b)
}
u(Fg, Wf);
s = Fg.prototype;
s.toString = r("Score.HammerOn");
s.l = r("hammer-on");
s.clone = function (a) {
    a = a || new Fg(this.k, this.j);
    return Fg.a.clone.call(this, a)
};
s.Ga = function () {
    return this.j.text
};
s.Ad = wg.prototype.Ad;

function Gg(a, b) {
    Gg.a.constructor.call(this, a, b)
}
u(Gg, Fg);
Gg.prototype.toString = r("Score.PullOff");
Gg.prototype.l = r("pull-off");
Gg.prototype.clone = function (a) {
    a = a || new Gg(this.k, this.j);
    return Gg.a.clone.call(this, a)
};

function Hg(a, b) {
    Hg.a.constructor.call(this, a, b)
}
u(Hg, Bf);
s = Hg.prototype;
s.toString = r("Score.Bend");
s.l = r("bend");
s.clone = function (a) {
    a = a || new Hg(this.k, this.j);
    return Hg.a.clone.call(this, a)
};
s.Gb = function () {
    return E(this.cf, "bendlist", "y")
};
s.m = function (a) {
    var b = fc(kc(a)),
        c = f,
        d = this.j.Si;
    if (d && 0 < d.length) {
        c = new R("BendList");
        F(c, "bendlist", "x", 0);
        F(c, "bendlist", "y", 0);
        var e = 0,
            g = 0;
        d.forEach(function (d) {
            var j = c,
                m = !d.Ag,
                p = m ? new jg : new kg;
            d.ul ? p.Xg = 0 : d.wf || (p.Wg = 0);
            var q = p.m();
            if (q) {
                var x = g + p.Gb();
                F(q, "bendlist", "x", e);
                F(q, "bendlist", "y", x);
                j.o(q, l, l, 0, 0, "bendlist");
                g += (m ? 1 : -1) * hg(p);
                e += gg(p)
            }
            if (d.wf && q) {
                j = c;
                m = !d.Ag;
                if (p = G(b, m ? "arrowheads.close.11" : "arrowheads.close.1M1", f, 8)) q = p.i("width"), F(p, "bendlist", "x", e - 0.5 * q), F(p, "bendlist", "y",
                    m ? g : g - 8), j.o(p, l, l, 0, 0, "bendlist");
                if (p) {
                    var j = c,
                        m = !d.Ag,
                        x = d.wf,
                        A = f,
                        d = f;
                    (q = Math.floor(x)) && (A = q.toString());
                    (x -= q) && (d = "1/2");
                    1 === q && !x && (A = "full");
                    var D = p.i("height"),
                        x = q = p = f;
                    A && (p = new T("center"), Ie(p, A, "12px sans-serif", a), q = p.i("width"), x = p.i("height"));
                    var qa = A = f,
                        ha = f;
                    d && (A = new T("center"), Ie(A, d, "normal 8px sans-serif", a), qa = A.i("width"), ha = A.i("height"));
                    d = g;
                    d = m ? d + D : d - D;
                    D = e;
                    q !== f && x !== f && (D -= 0.5 * q, m || (d -= x));
                    qa !== f && ha !== f && (D -= 0.5 * qa, m || (d -= ha));
                    p && (F(p, "bendlist", "x", D), F(p, "bendlist", "y",
                        d), j.o(p, l, l, 0, 0, "bendlist"));
                    q !== f && (D += q);
                    A && (d += 2, F(A, "bendlist", "x", D), F(A, "bendlist", "y", d), j.o(A, l, l, 0, 0, "bendlist"))
                }
            }
        }, this)
    }
    this.Q(c);
    return c
};
s.Ad = wg.prototype.Ad;

function Ig(a, b) {
    Ig.a.constructor.call(this, a, b)
}
u(Ig, X);
s = Ig.prototype;
s.toString = r("Score.TrillMark");
s.l = r("trill-mark");
s.N = function () {
    return ["scripts.trill"]
};
s.s = r("upper");
s.clone = function (a) {
    a = a || new Ig(this.k, this.j);
    return Ig.a.clone.call(this, a)
};

function Jg(a, b) {
    Jg.a.constructor.call(this, a, b)
}
u(Jg, X);
Jg.prototype.toString = r("Score.Turn");
Jg.prototype.l = r("turn");
Jg.prototype.N = function () {
    return [this.j.ed ? "scripts.reverseturn" : "scripts.turn"]
};
Jg.prototype.clone = function (a) {
    a = a || new Jg(this.k, this.j);
    return Jg.a.clone.call(this, a)
};

function Kg(a, b) {
    Kg.a.constructor.call(this, a, b)
}
u(Kg, Jg);
Kg.prototype.toString = r("Score.DelayedTurn");
Kg.prototype.l = r("delayed-turn");
Kg.prototype.clone = function (a) {
    a = a || new Kg(this.k, this.j);
    return Kg.a.clone.call(this, a)
};

function Lg(a, b) {
    Lg.a.constructor.call(this, a, b)
}
u(Lg, Jg);
Lg.prototype.toString = r("Score.InvertedTurn");
Lg.prototype.l = r("inverted-turn");
Lg.prototype.clone = function (a) {
    a = a || new Lg(this.k, this.j);
    return Lg.a.clone.call(this, a)
};
Lg.prototype.m = function (a) {
    (a = Lg.a.m.call(this, a)) && (new Vb(a, i)).transform();
    return a
};

function Mg(a, b) {
    Mg.a.constructor.call(this, a, b)
}
u(Mg, Lg);
Mg.prototype.toString = r("Score.DelayedInvertedTurn");
Mg.prototype.l = r("delayed-inverted-turn");
Mg.prototype.clone = function (a) {
    a = a || new Mg(this.k, this.j);
    return Mg.a.clone.call(this, a)
};

function Ng(a, b) {
    Ng.a.constructor.call(this, a, b)
}
u(Ng, Jg);
Ng.prototype.toString = r("Score.VerticalTurn");
Ng.prototype.l = r("vertical-turn");
Ng.prototype.clone = function (a) {
    a = a || new Ng(this.k, this.j);
    return Ng.a.clone.call(this, a)
};
Ng.prototype.m = function (a) {
    (a = Ng.a.m.call(this, a)) && (new Tb(a, 0.5 * Math.PI)).transform();
    return a
};

function Og(a, b) {
    Og.a.constructor.call(this, a, b)
}
u(Og, X);
s = Og.prototype;
s.toString = r("Score.WavyLine");
s.l = r("wavy-line");
s.ta = function (a) {
    return /(start|continue|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.clone = function (a) {
    a = a || new Og(this.k, this.j);
    return Og.a.clone.call(this, a)
};
s.ja = function () {
    return this.j.type
};
s.s = r("upper");
s.N = function () {
    return ["scripts.trill", "scripts.trill_element"]
};
s.af = function (a, b) {
    var c = this.r(),
        d = c[0].t(),
        c = c[c.length - 1].t(),
        d = Pg(a, d, b);
    this.Ql = Pg(a, c, b) - d;
    return Og.a.af.call(this, a, b)
};
s.m = function (a) {
    if (a = Og.a.m.call(this, a, i))
        for (var b = a.i("width"), c = a.children && 0 <= we(a) - 1 && we(a) - 1 < a.children.length ? a.children[we(a) - 1] : f, d = c.i("width"), b = (this.Ql - b) / d, d = 0; d <= b; ++d) {
            var e = c.clone(),
                g = e.P();
            F(e, "glyph_anchor", "y", g.c);
            a.o(e, l, l, 0, 0, "glyph_anchor")
        }
    return a
};

function Qg(a, b) {
    Qg.a.constructor.call(this, a, b)
}
u(Qg, X);
Qg.prototype.toString = r("Score.Shake");
Qg.prototype.l = r("shake");
Qg.prototype.N = function () {
    return ["scripts.prallprall"]
};
Qg.prototype.clone = function (a) {
    a = a || new Qg(this.k, this.j);
    return Qg.a.clone.call(this, a)
};

function Rg(a, b) {
    Rg.a.constructor.call(this, a, b)
}
u(Rg, X);
Rg.prototype.toString = r("Score.Mordent");
Rg.prototype.l = r("mordent");
Rg.prototype.N = function () {
    var a = "scripts.";
    if (this.j.Jd) switch (this.j.kd) {
    case "above":
        a += "down";
        break;
    case "below":
        a += "up";
        break;
    default:
        a += "prall"
    }
    return [a + "mordent"]
};
Rg.prototype.clone = function (a) {
    a = a || new Rg(this.k, this.j);
    return Rg.a.clone.call(this, a)
};

function Sg(a, b) {
    Sg.a.constructor.call(this, a, b)
}
u(Sg, Rg);
Sg.prototype.toString = r("Score.InvertedMordent");
Sg.prototype.l = r("inverted-mordent");
Sg.prototype.N = function () {
    var a = "scripts.";
    this.j.Jd && ("above" === this.j.kd ? a += "down" : "below" === this.j.kd && (a += "up"));
    a += "prall";
    this.j.Jd && !this.j.kd && this.j.re && ("above" === this.j.re && (a += "up"), "below" === this.j.re && (a += "down"));
    this.j.Jd && !this.j.kd && !this.j.re && (a += "prall");
    return [a]
};
Sg.prototype.clone = function (a) {
    a = a || new Sg(this.k, this.j);
    return Sg.a.clone.call(this, a)
};

function Tg(a, b) {
    Tg.a.constructor.call(this, a, b)
}
u(Tg, X);
Tg.prototype.toString = r("Score.Schleifer");
Tg.prototype.l = r("schleifer");
Tg.prototype.N = function () {
    return ["scripts.upprall"]
};
Tg.prototype.clone = function (a) {
    a = a || new Tg(this.k, this.j);
    return Tg.a.clone.call(this, a)
};

function Ug() {}
u(Ug, re);
Ug.prototype.xe = function (a) {
    var b = Ug.a;
    return a.da === f || b.xe.call(this, a)
};
Ug.prototype.Lf = function (a, b, c, d, e, g) {
    if (b.da !== f && b.yj) d[this.U] = Pg(this, b, e, i) - Pg(this, b, e);
    else {
        if (b.da !== f) {
            var h = this.vh(b.da, i);
            d[this.U] = h[this.U]
        }
        Ug.a.Lf.call(this, a, b, c, d, e, g)
    }
};
Ug.prototype.ne = function (a, b, c) {
    return a.da !== f ? (a = this.kg(a.da), b * a / this.Pb()) : Ug.a.ne.call(this, a, b, c)
};
Ug.prototype.vg = function (a, b, c, d, e) {
    b.da !== f ? c[this.Z] = Pg(this, b, e) : Ug.a.vg.call(this, a, b, c, d)
};

function Pg(a, b, c, d) {
    var e = b.da;
    d && (e += b.duration);
    var g = c * e / a.Pb(),
        c = a.mc(i),
        h = a.Ub(e);
    0 > h && (h = c.length);
    1 <= h && c.some(function (a, b) {
        if (b < h) {
            g = g + a[this.U];
            g = g + a.Qd;
            g = g + a.Pd;
            return l
        }
        return i
    }, a);
    0 < h && (g += h * a.Sa);
    return g += b.W
}

function Vg() {}
ja("ScoreLibrary.DurationAccumulator", Vg);
Vg.prototype.vd = function () {
    return this.bc || 0
};
Vg.prototype.getAccDuration = Vg.prototype.vd;
Vg.prototype.Pb = function () {
    return this.mg || 0
};
Vg.prototype.getMaxDuration = Vg.prototype.Pb;
Vg.prototype.Mj = function () {
    return this.fj || 0
};
Vg.prototype.getCurDuration = Vg.prototype.Mj;
Vg.prototype.qb = function (a) {
    this.fj = a;
    this.bc = this.bc !== f ? this.bc + a : a;
    0 > this.bc && (this.bc = 0);
    this.mg = this.mg !== f ? Math.max(this.mg, this.bc) : this.bc
};
Vg.prototype.accumulate = Vg.prototype.qb;

function Wg() {}
ja("ScoreLibrary.DurationKeyGenerator", Wg);
v(Wg, Vg);
Wg.prototype.mh = function (a) {
    var b = this.vd();
    this.qb(a);
    return b
};
Wg.prototype.generate = Wg.prototype.mh;

function w() {}
ja("ScoreLibrary.DurationMapper", w);
v(w, Wg);
w.prototype.Ub = function (a) {
    this.Ha = this.Ha || [];
    return Xa(this.Ha, function (a, c) {
        return a - c.wb
    } || Ya, a)
};
w.prototype.keyDurationToIndex = w.prototype.Ub;
w.prototype.Cg = function (a, b, c, d) {
    var c = c || l,
        e = this.Ub(a);
    0 <= e ? d ? d(this.Ha[e], b) : sb(this.Ha[e], b) : (c || (b = sb({}, b)), b.wb = a, Va(this.Ha, -(e + 1), 0, b))
};
w.prototype.setInformation = w.prototype.Cg;
w.prototype.Wh = function (a, b, c, d) {
    a = this.mh(a);
    this.Cg(a, b, c, d);
    return a
};
w.prototype.mapInformation = w.prototype.Wh;
w.prototype.mc = function (a) {
    return this.Ha ? a || l ? this.Ha : this.Ha.map(function (a) {
        a = sb({}, a);
        delete a.wb;
        return a
    }) : f
};
w.prototype.getAllInformations = w.prototype.mc;
w.prototype.vh = function (a, b) {
    var b = b || l,
        c = f;
    if (this.Ha) {
        var d = this.Ub(a);
        0 <= d && (c = this.Ha[d], b || (c = sb({}, c), delete c.wb))
    }
    return c
};
w.prototype.getInformation = w.prototype.vh;
w.prototype.wh = function () {
    return this.Ha ? this.Ha.map(function (a) {
        return a.wb
    }) : []
};
w.prototype.getKeyDurations = w.prototype.wh;
w.prototype.nh = function () {
    var a = this.wh();
    a.push(this.Pb());
    return a
};
w.prototype.getAbsDurations = w.prototype.nh;
w.prototype.kg = function (a) {
    var b = 0;
    if (this.Ha) {
        var c = this.Ub(a);
        c >= this.Ha.length - 1 ? b = this.Pb() - a : 0 <= c && (b = this.Ha[c + 1].wb - a)
    }
    return b
};
w.prototype.keyDurationToDuration = w.prototype.kg;
w.prototype.ie = function (a) {
    if (1E3 > a || 0 !== a % 1E3) this.qb(-a);
    else {
        var b = this.nh();
        b.reverse();
        b.some(function (b, d, e) {
            if (d < e.length - 1 && 1E3 <= b) {
                b -= e[d + 1];
                if (a < b) return this.qb(-a), i;
                this.qb(-b);
                1E3 <= b && (a -= b)
            }
            return l
        }, this)
    }
};
w.prototype.backup = w.prototype.ie;
w.prototype.save = function () {
    var a = this.vd();
    this.tf = this.tf || [];
    this.tf.push(a)
};
w.prototype.save = w.prototype.save;
w.prototype.restore = function () {
    var a = this.vd() - this.tf.pop();
    0 < a ? this.ie(a) : 0 > a && this.qb(-a);
    return a
};
w.prototype.restore = w.prototype.restore;

function Xg() {
    Xg.a.constructor.call(this)
}
u(Xg, Ae);
wb(Xg);
Xg.prototype.toString = r("Renderer.DurationContainer");
Xg.prototype.clone = function (a) {
    a = a || new Xg;
    return Xg.a.clone.call(this, a)
};
Xg.prototype.Yf = function () {
    return this.delegate ? this.delegate : this
};
Xg.prototype.ff = ba("delegate");

function Yg() {}
u(Yg, oe);
Yg.prototype.o = function (a, b, c, d, e, g, h) {
    if (a.da === f && a.duration === f) {
        var j = a.n;
        j && (a.duration = j.La())
    }
    return Yg.a.o.call(this, a, b, c, d, e, g, h)
};
Yg.prototype.zg = function (a, b, c, d, e, g, h) {
    function j(a, b) {
        sb(a, b, Math.max)
    }
    Yg.a.zg.apply(this, arguments);
    var m = {};
    m[this.U] = a.i(this.U);
    m.Qd = a.W;
    m.Pd = a.Ra;
    a.yb && (m = Zg(a.yb, this, a, m), delete a.yb);
    m && (a.da === f ? a.da = this.Wh(a.duration, m, i, j) : this.Cg(a.da, m, i, j))
};
Yg.prototype.Hg = function (a, b) {
    if (!a.rl)
        if (0 <= a.duration) {
            var c = 0;
            this.mc(i).forEach(function (a, b) {
                c += a[this.U];
                c += a.Qd;
                c += a.Pd;
                0 < b && (c += this.Sa)
            }, this);
            var d = this.Ya(this.U),
                d = Math.max(d, c);
            Gb(this, this.U, d)
        } else Yg.a.Hg.call(this, a, b)
};

function $g(a) {
    $g.a.constructor.call(this, a);
    ne(this, 1);
    this.Sa = a || 0
}
u($g, Xg);
v($g, me);
v($g, Yg);
v($g, Ug);
$g.prototype.toString = r("Renderer.DurationBox");
$g.prototype.clone = function (a) {
    a = a || new $g(this.Sa);
    return $g.a.clone.call(this, a)
};

function ah() {
    ah.a.constructor.call(this)
}
u(ah, Ee);
wb(ah);
ah.prototype.clone = function (a) {
    a = a || new ah;
    return ah.a.clone.call(this, a)
};
ah.prototype.toString = r("Renderer.Part");

function bh(a) {
    var b = a.n.ba().ma(1);
    return E(a, "staff", "y") + a.i("height") - V(b, b.fa)
}

function ch(a, b) {
    te(a, function (a) {
        te(a, function (a) {
            Je.prototype.isPrototypeOf(a) && (a.ve = a.ve !== f ? Math.max(a.ve, b) : b)
        }, this);
        return l
    }, a)
}
ah.prototype.Yf = function () {
    return this.delegate ? this.delegate : this
};
ah.prototype.ff = ba("delegate");

function dh(a, b, c) {
    var b = b || 1,
        c = c || l,
        d = f;
    te(a, function (a) {
        return a.Ka === b ? (d = a, i) : l
    }, a);
    !d && c && (d = new $g, d.Ka = b, d.ff(a.Yf()), d.Dc = a.Dc, c = "p" + a.Dc, d.gd = c + "s" + b, pe(a, d));
    return d
}

function eh(a) {
    var b = ye(a);
    b.sort(function (a, b) {
        return a.Ka - b.Ka
    });
    b.forEach(function (a) {
        a.Ue = i;
        fix_org_coord = "staff";
        this.o(a, l, l, 0, 0, fix_org_coord)
    }, a)
}

function fh(a, b) {
    fh.a.constructor.call(this, a, b);
    hd(this, this)
}
u(fh, de);
s = fh.prototype;
s.toString = r("Score.Staff");
s.clone = function (a) {
    a = a || new fh(this.w, this.v);
    this.ud !== f && (a.ud = this.ud);
    return fh.a.clone.call(this, a)
};
s.La = o("ud");
s.m = function () {
    var a = new Df(this);
    this.Q(a);
    return a
};
s.tb = function () {
    return this.Rm || 1
};

function Le() {
    return 10
}

function Hf(a, b) {
    var c = Math.abs(b),
        c = 10 * Math.floor(c / 2) + 5 * (c % 2);
    return gh(a, 0 <= b ? c : -c)
}

function Oe(a) {
    return Math.ceil(0.5 * a.fa)
}

function V(a, b) {
    return Hf(a, 2 * (b - 1))
}
s.ma = function (a) {
    return this.w ? this.w.ma(a) : f
};
s.pa = function () {
    return this.w ? this.w.pa() : 1
};

function gh(a, b) {
    var c;
    c = a.O();
    c -= 1;
    c = a.w && 1 <= c && c <= a.w.pa() ? a.w.ma(c) : f;
    c !== f && (b -= (a.w ? a.w.ag() : NaN) + 10 * (a.fa - 1), b = gh(c, b));
    return b
}

function hh(a) {
    this.Ia = a.Ia;
    this.step = (a.step.charCodeAt(0) - 65 + 7 - 2) % 7;
    this.L = a.L !== f ? a.L : 0
}
hh.prototype.tj = function (a) {
    return this.Ia === a.Ia && this.step === a.step && this.L === a.L
};
hh.prototype.uj = function (a) {
    return this.step === a.step
};
hh.prototype.vj = function (a) {
    return this.step === a.step && this.L === a.L
};
hh.prototype.clone = function (a) {
    return a = a || new hh({
        Ia: this.Ia,
        step: String.fromCharCode((this.step + 2) % 7 + 65),
        L: this.L
    })
};

function ih(a) {
    return 7 * a.Ia + a.step
}

function jh(a, b) {
    jh.a.constructor.call(this, a, b);
    I().rb(this, this)
}
u(jh, de);
s = jh.prototype;
s.toString = r("Score.Clef");
s.getName = function () {
    var a = f;
    switch (this.T) {
    case "G":
        a = "clefs.G";
        break;
    case "C":
        a = "clefs.C";
        break;
    case "F":
        a = "clefs.F";
        break;
    case "percussion":
        a = "clefs.percussion";
        break;
    case "TAB":
        a = "clefs.tab";
        break;
    default:
        a = "none"
    }
    return a
};

function kh(a) {
    if (a.Ef === f) {
        var b = a.q();
        if (/(G|C|F)/.test(a.T) && a.Vb !== f) {
            var c = '<staff-details number="' + b.O() + '"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>',
                c = new fh(a.w, c);
            a.Ef = 2 * (a.Vb - 1) - (c.fa - b.fa)
        } else a.Ef = Math.ceil(1 * (b.fa - 1))
    }
    return a.Ef
}

function lh(a, b) {
    var c = kh(a),
        d = a.ha();
    d && (c += ih(b) - ih(d));
    return Hf(a.q(), c)
}

function mh(a, b) {
    var c = a.q();
    relative_steps = 2 * (c.fa - b + 1 - 1);
    return Hf(c, relative_steps)
}
s.u = function () {
    return Hf(this.q(), kh(this))
};
s.nc = function () {
    var a = {
        width: f,
        height: f
    };
    switch (this.T) {
    case "G":
        a.height = 8 * Le(this.q());
        break;
    case "C":
        a.height = 4 * Le(this.q());
        break;
    case "F":
        a.height = 3 * Le(this.q());
        break;
    case "percussion":
        a.height = 2 * Le(this.q());
        break;
    case "TAB":
        a.height = 5 * Le(this.q())
    }
    return a
};
s.ha = function () {
    this.pitch === f && (this.pitch = /(G|C|F)/.test(this.T) ? new hh({
        Ia: ("F" === this.T ? 3 : 4) + this.nd,
        step: this.T,
        L: 0
    }) : k);
    return this.pitch
};
s.m = function (a, b) {
    var c = f;
    "none" !== this.T && "jianpu" !== this.T && (c = this.nc(), b || (c.height *= 0.75), (c = G(a, this.getName(), c.width, c.height)) && this.Q(c));
    return c
};

function nh(a, b) {
    nh.a.constructor.call(this, a, b);
    I().getTime(this, this)
}
u(nh, de);
nh.prototype.toString = r("Score.Time");
nh.prototype.clone = function () {
    clone = new nh(this.w, this.v);
    return nh.a.clone.call(this, clone)
};

function oh(a, b, c, d) {
    for (var e = 1 < c.length ? new R("TimeSignature.Compound") : f, g = 0; g < c.length; ++g) {
        var h = c.charAt(g),
            h = cc(b, h, "+" === h ? Le(a.q()) : 2 * Le(a.q()));
        if (e !== f) {
            var j = h.P();
            F(h, "staff", "y", j.c);
            e.o(h, l, l, 0, 0, "staff")
        } else e = h
    }
    d && (a = e, b = a.P(), c = b.d - b.c, b.c -= 0.5 * c, b.d -= 0.5 * c, a.dd(b), e = a);
    return e
}

function ph(a, b, c) {
    var d = new Fe("TimeSignature.Fractional");
    [c.le, c.Jc].forEach(function (a) {
        var a = oh(this, b, a),
            c = a.P();
        F(a, "fractional", "x", 0.5 * -(c.f - c.e));
        d.o(a, l, l, 0, 0, "fractional")
    }, a);
    c = d.P();
    c.c -= 2 * Le(a.q());
    c.d -= 2 * Le(a.q());
    d.dd(c);
    return d
}
nh.prototype.m = function (a) {
    var b = f,
        c = f;
    this.ri || (c = 1 < this.ke.length ? new R("TimeSignature.Compound") : f, this.ke.forEach(function (d, e, g) {
        b = f;
        "single-number" === this.Yb && 1 === g.length && (!/\D+/.test(g[0].Jc) && !/\D+/.test(g[0].le)) && (b = oh(this, a, d.Jc, i));
        if ("common" === this.Yb || "cut" === this.Yb) {
            var h = f;
            "4" === d.Jc && "4" === d.le ? h = G(a, "timesig.C44", f, 2 * Le(this.q())) : "2" === d.Jc && "2" === d.le && (h = G(a, "timesig.C22", f, 3.4 * Le(this.q())));
            b = h
        }
        b === f && (b = ph(this, a, d));
        c !== f && (d = b.P(), F(b, "compound", "y", d.c), c.o(b, l, l, 0,
            0, "compound"), e !== g.length - 1 && (e = cc(a, "+", Le(this.q())), g = e.P(), F(e, "compound", "y", 0.5 * -(g.d - g.c)), c.o(e, l, l, 0, 0, "compound")))
    }, this), b = c !== f ? c : b);
    b && this.Q(b);
    return b
};

function qh(a, b, c, d) {
    if (a) this.Na = a.Na, this.se = a.se, this.md = a.md;
    else {
        a = f;
        switch (c) {
        case 2:
            a = "double-sharp";
            break;
        case 1.5:
            a = "three-quarters-sharp";
            break;
        case 1:
            a = "sharp";
            break;
        case 0.5:
            a = "quarter-sharp";
            break;
        case 0:
            a = "natural";
            break;
        case -0.5:
            a = "quarter-flat";
            break;
        case -1:
            a = "flat";
            break;
        case -1.5:
            a = "three-quarters-flat";
            break;
        case -2:
            a = "double-flat"
        }
        this.Na = a
    }
    this.ea = b;
    this.ca = d ? i : l
}
qh.prototype.m = function (a) {
    var b = f,
        c = f,
        c = f;
    if (this.md || this.se) {
        b = new R("Accidental", 1);
        F(b, "accidental", "y", 0);
        var c = this.ee("leftparen"),
            d = 15;
        this.ca && (d *= 0.65);
        c = G(a, c, f, d);
        c !== f && (d = c.P(), F(c, "accidental", "y", d.c), b.o(c, l, l, 0, 0, "accidental"))
    }
    this.Na !== f && (c = this.ee(this.Na), d = "accidentals.doublesharp" === c ? 10 : 20, this.ca && (d *= 0.75), c = G(a, c, f, d), c !== f && (b !== f ? (d = c.P(), F(c, "accidental", "y", d.c), b.o(c, l, l, 0, 0, "accidental")) : b = c));
    if (this.md || this.se) c = this.ee("rightparen"), d = 15, this.ca && (d *= 0.65),
    c = G(a, c, f, d), c !== f && (d = c.P(), F(c, "accidental", "y", d.c), b.o(c, l, l, 0, 0, "accidental"));
    return b
};
var rh = {
    sharp: "accidentals.sharp",
    "sharp-sharp": "accidentals.doublesharp",
    "double-sharp": "accidentals.doublesharp",
    flat: "accidentals.flat",
    "flat-flat": "accidentals.flatflat",
    "double-flat": "accidentals.flatflat",
    natural: "accidentals.natural",
    "natural-sharp": "accidentals.natural",
    "natural-flat": "accidentals.natural",
    "quarter-flat": "accidentals.mirroredflat",
    "quarter-sharp": "accidentals.sharp.slashslash.stem",
    "three-quarters-flat": "accidentals.mirroredflat.flat",
    "three-quarters-sharp": "accidentals.sharp.slashslash.stemstemstem",
    "sharp-down": "accidentals.sharp.arrowdown",
    "sharp-up": "accidentals.sharp.arrowup",
    "natural-down": "accidentals.natural.arrowdown",
    "natural-up": "accidentals.natural.arrowup",
    "flat-down": "accidentals.flat.arrowdown",
    "flat-up": "accidentals.flat.arrowup",
    "triple-sharp": "",
    "triple-flat": "",
    "slash-quarter-sharp": "accidentals.sharp.slashslashslash.stem",
    "slash-sharp": "accidentals.sharp.slashslashslash.stemstem",
    "slash-flat": "accidentals.flat.slash",
    "double-slash-flat": "accidentals.flat.slashslash",
    "sharp-1": "accidentals.1",
    "sharp-2": "accidentals.2",
    "sharp-3": "accidentals.3",
    "sharp-5": "accidentals.4",
    "flat-1": "accidentals.M1",
    "flat-2": "accidentals.M2",
    "flat-3": "accidentals.M3",
    "flat-4": "accidentals.M4",
    leftparen: "accidentals.leftparen",
    rightparen: "accidentals.rightparen",
    sori: "sori",
    koron: "koron"
};
qh.prototype.ee = function (a) {
    return rh[a]
};

function sh(a, b) {
    sh.a.constructor.call(this, a, b);
    I().getKey(this, this)
}
u(sh, de);
sh.prototype.toString = r("Score.Key");
sh.prototype.clone = function (a) {
    a = a || new sh(this.w, this.v);
    return sh.a.clone.call(this, a)
};
var th = {
    "#": "FCGDAEB".split(""),
    b: "BEADGCF".split("")
}, uh = {
        "#": [5, 5, 5, 5, 4, 5, 4],
        b: [4, 5, 4, 5, 4, 5, 4]
    }, vh = {
        "#": [4, 4, 4, 4, 3, 4, 3],
        b: [3, 4, 3, 4, 3, 4, 3]
    }, wh = {
        "#": [3, 4, 3, 4, 3, 4, 3],
        b: [3, 4, 3, 4, 3, 4, 3]
    }, xh = {
        "#": [3, 3, 3, 3, 2, 3, 2],
        b: [2, 3, 2, 3, 2, 3, 2]
    };

function yh(a) {
    var b = a.rb(),
        c = f,
        d = f;
    switch (b.T) {
        default:
    case "G":
        c = uh;
        break;
    case "C":
        3 === b.Vb ? c = vh : 4 === b.Vb && (c = wh);
        break;
    case "F":
        c = xh
    }
    0 < a.we ? (c = c["#"], d = th["#"]) : 0 > a.we && (c = c.b, d = th.b);
    for (var e = f, g = Math.abs(a.we), h = 7 <= g ? 7 : g, j = 0; j < h; ++j) {
        var m = (j + (7 <= g ? g % 7 : 0)) % 7,
            p = (0 < a.we ? 1 : -1) * Math.floor((j + (7 <= g ? g : 7)) / 7),
            e = e || [];
        e.push({
            Ia: c[m] + b.nd,
            step: d[m],
            L: p
        })
    }
    return e
}

function zh(a) {
    if (a.Lg === f && (a.fe || (a.fe = yh(a)), a.fe)) a.Lg = a.fe.map(function (a) {
        a.Ia = a.Ia + 0;
        return new hh(a)
    });
    return a.Lg
}
sh.prototype.m = function (a) {
    function b(a, b, c, d) {
        d = d || 0;
        c = (new qh(f, this.q(), a.L)).m(c);
        if (c !== f) {
            var e = c.P(),
                a = lh(this.rb(), a) + e.c;
            F(c, "staff", "y", a);
            b.o(c, l, l, 0, d, "staff")
        }
    }
    var c = f,
        d = zh(this),
        e = this.ll;
    if (e !== d && (e || d)) c = new R("KeyAccidentals"), this.Q(c);
    e && e.forEach(function (d, e, j) {
        d.L = 0;
        b.call(this, d, c, a, e === j.length - 1 ? 5 : 0)
    }, this);
    d && d.forEach(function (d) {
        b.call(this, d, c, a)
    }, this);
    return c
};

function Z(a, b) {
    Z.a.constructor.call(this, a, b, Ah);
    jd(this, this)
}
u(Z, ee);
var Ah = ["part-symbol", "staff-details", "clef", "key", "time"];
s = Z.prototype;
s.toString = r("Score.Attributes");
s.m = r(k);
s.ua = r(0);
s.La = function () {
    return this.ua()
};
s.Fa = o("Va");

function Bh(a, b) {
    Bh.a.constructor.call(this, a, b);
    b && this.is("part-symbol") && I().jb(this, this);
    this.Fd = this.Yb;
    this.rf = this.rf || 1;
    this.me = this.me || a.ba().pa()
}
u(Bh, Pe);
Bh.prototype.toString = r("Score.PartSymbol");
s = Z.prototype;
s.jb = o("part_symbol");

function Ch(a, b) {
    var c = a.staves ? "number" === typeof a.staves ? a.staves : a.pa() : b ? b.pa() : 1;
    a.staves = Array(c);
    for (c = We(a); c.S();) {
        var d = a,
            e = c.next(),
            g = f;
        Bh.prototype.isPrototypeOf(e) && (g = "part_symbol");
        fh.prototype.isPrototypeOf(e) && (g = "staves");
        jh.prototype.isPrototypeOf(e) && (g = "clefs");
        nh.prototype.isPrototypeOf(e) && (g = "times");
        sh.prototype.isPrototypeOf(e) && (g = "keys");
        if (g && "part_symbol" === g) d[g] = e;
        else if (g && -1 === e.k)
            for (var h = 1; h <= d.pa(); ++h) {
                var j = e.clone();
                j.k = h;
                d[g] = d[g] || [];
                d[g].push(j)
            } else g &&
                1 <= e.k && e.k <= d.pa() && (d[g] = d[g] || [], d[g][e.k - 1] = e)
    }
}
s.pa = function () {
    return this.staves.length
};
s.getAttribute = function (a, b) {
    var c = this[a];
    return c ? c[b - 1] : f
};
s.Tf = function () {
    return ["staves", "clefs", "times", "keys"].map(function (a) {
        return this[a]
    }, this).reduce(function (a, b) {
        return a.concat(b)
    }, []).filter(function (a) {
        return a !== f
    })
};
s.ma = function (a) {
    return this.getAttribute("staves", a)
};
s.Eb = function (a) {
    return this.getAttribute("clefs", a)
};
s.Bd = function (a) {
    return this.getAttribute("times", a)
};
s.Qc = function (a) {
    return this.getAttribute("keys", a)
};
s.ag = r(50);

function Dh(a) {
    this.zb = a
}
s = Dh.prototype;
s.toString = r("ScoreNoteHead");
s.clone = function (a) {
    return a = a || new Dh(this.zb)
};
s.m = function (a) {
    var b = this.nc();
    return G(a, this.getName(), b.width, b.height)
};
s.q = function () {
    return this.zb.q()
};
s.ja = function () {
    return this.zb.Te ? this.zb.Te.Te : "normal"
};
s.nc = function () {
    this.q();
    var a = {};
    switch (this.ja()) {
    case "slash":
        a.height = 18;
        break;
    default:
        a.height = 10
    }
    this.zb.ca && (a.height *= 0.65);
    return a
};
s.getName = function () {
    var a = "noteheads.",
        b = this.ja(),
        c = this.zb.ja();
    "circle-x" === b ? a += "s2xcircle" : /(breve|long|maxima|whole)/.test(c) ? a += "s0" : ("triangle" !== b ? a += "s" : a += -1 === this.zb.H() ? "u" : "d", a = "square" === b ? a + "2" : "half" === c ? a + "1" : a + "2");
    if ("slash" === b || "triangle" === b || "diamond" === b || "cross" === b) a += b;
    "x" === b && (a += "cross");
    "square" === b && (a += "harmonic");
    return a
};

function W(a, b) {
    W.a.constructor.call(this, a, b);
    b && fd(this, this)
}
u(W, ee);
s = W.prototype;
s.toString = r("Score.Note");
s.m = r(k);

function Eh(a) {
    var b = f;
    switch (a) {
    case "1024th":
    case "512th":
    case "256th":
    case "128th":
        b = "flags.u7";
        break;
    case "64th":
        b = "flags.u6";
        break;
    case "32nd":
        b = "flags.u5";
        break;
    case "16th":
        b = "flags.u4";
        break;
    case "eighth":
        b = "flags.u3"
    }
    return b
}
s.Gd = function () {
    return this.ja() && /whole/.test(this.ja())
};

function Fh(a) {
    return a.ca
}
s.sc = o("sf");
s.O = o("Ka");
s.ja = o("type");

function Gh(a) {
    var b = 0,
        c = f;
    be(a, function (a) {
        if (!Hh.prototype.isPrototypeOf(a) && zf.prototype.isPrototypeOf(a)) {
            var b = a.ka(Ih.prototype.l());
            if (b && 0 < b.length) return c = a, "stop" === b[0].type && (c = f), i
        }
        return l
    }, i);
    c && (a = c.ka(Ih.prototype.l()), b = 8 === a[0].size ? 1 : 15 === a[0].size ? 2 : 0, b *= "up" === a[0].type ? 1 : -1);
    return b
}
s.ha = function () {
    if (this.Se === f) {
        var a = this.$g || this.Ia,
            b = this.ah || this.step,
            c = this.L || 0;
        if (a) {
            var d = Gh(this);
            this.Se = new hh({
                Ia: a + d,
                step: b,
                L: c
            });
            0 !== d && (this.Se.ji = i)
        } else this.Se = k
    }
    return this.Se
};
s.ua = function () {
    return this.duration ? this.duration : this.ca ? 1 : f
};
s.La = function () {
    var a = W.a;
    return this.ca ? this.ua() : a.La.call(this)
};
s.u = function () {
    if (this.Kg === f) {
        var a = this.rb();
        if ("TAB" === a.T) {
            var b = Jh(this, "string");
            this.Kg = mh(a, b && b[0].text ? Number(b[0].text) : 1)
        } else this.Kg = lh(a, this.ha())
    }
    return this.Kg
};
s.Ud = ba("yi");

function Kh(a) {
    if (a.ca) return -1;
    var b = a.q();
    return 0 <= a.u() - V(b, Oe(b)) ? 1 : -1
}

function Vf(a) {
    var b = a.w;
    return b && (1 >= a.O() ? 1 < Lh(b, a.O()) : 1 < Lh(b, a.O()) - Lh(b, a.O() - 1)) ? i : l
}
s.H = function () {
    var a;
    if (this.yi !== f) a = this.yi;
    else {
        if (this.jf === f) switch (this.Gl) {
        case "up":
            this.jf = -1;
            break;
        case "down":
            this.jf = 1;
            break;
        default:
            this.Vg === f && (Vf(this) ? (a = this.w, a = this.sc() === (1 >= this.O() ? 1 : Lh(a, this.O() - 1) + 1) ? -1 : 1) : a = Kh(this), this.Vg = a), this.jf = this.Vg
        }
        a = this.jf
    }
    return a
};

function Nf(a) {
    beams = a.ka("beam");
    return !beams && Eh(a.ja()) && !a.el
}
s.gf = function (a) {
    this.el = a ? i : l
};

function If(a) {
    if (a.gi || a.ig) return l;
    var b = i;
    switch (a.ja()) {
    case "breve":
        b = i;
        break;
    case "long":
        b = i;
        break;
    case "maxima":
    case "whole":
        b = l;
        break;
    default:
        b = i
    }
    return b
}
s.Za = function () {
    if (this.fd !== f) return this.fd;
    var a = this.q(),
        b = 35,
        a = Math.abs(this.u() - V(a, Oe(a)));
    Vf(this) && this.H() !== Kh(this) ? b -= Math.min(a, 30) / 3 : this.ca || (b = Math.max(a, b));
    if (Nf(this)) {
        switch (this.ja()) {
        case "1024th":
        case "512th":
        case "256th":
        case "128th":
            b += 25;
            break;
        case "64th":
            b += 15;
            break;
        case "32nd":
            b += 10
        }
        b = Math.max(b, 35)
    }
    this.ca && (b *= 0.65);
    return b
};
s.Fc = function (a, b, c) {
    a = a.filter(function (a) {
        return a[b] === c
    }, this);
    return 0 < a.length ? a : f
};
s.yd = function (a) {
    if (this[a] === f) {
        if (this.notations) {
            var b = this.Fc(this.notations, "notation", a);
            if (("ornaments" === a || "articulations" === a || "technical" === a) && b && 0 < b.length) b = b.reduce(function (b, d) {
                var e = {};
                e.type = a;
                e[a] = b[a].concat(d[a]);
                return e
            })[a];
            this[a] = b
        }
        this[a] === f && (this[a] = k)
    }
    return this[a]
};

function Mh(a, b, c, d, e) {
    var g = f,
        h = d;
    "ornament" === c && "accidental-mark" === d && (h = c + "-" + d);
    if (a[h] === f) {
        if ((g = a.yd(b)) && 0 < g.length) b = a.Fc(g, c, d), a[h] = b;
        a[h] === f && (a[h] = k)
    }(g = a[h]) && e && (g = g.filter(e));
    return g
}
s.Sc = function (a, b) {
    return Mh(this, "ornaments", "ornament", a, b)
};
s.Uf = function (a, b) {
    return Mh(this, "articulations", "articulation", a, b)
};

function Jh(a, b) {
    return Mh(a, "technical", "technical", b, f)
}
s.ka = function (a) {
    var b = f;
    if ("beam" === a) b = this.je ? this.je : k;
    else if ("lyric" === a) b = this.Qa ? this.Qa : k;
    else if ("accidental-mark" === a) {
        var c = this.yd(a);
        c && 0 < c.length && (b = c);
        (a = this.Sc(a)) && 0 < a.length && !b && (b = a);
        b || (b = k)
    } else Ad(I())[a] ? b = this.Uf(a) : Id(I())[a] ? (b = Jh(this, a), "bend" === a && b && (b = [{
        Dn: "bend",
        Si: b
    }]), /fret|bend|hammer-on|pull-off/.test(a) && b && b.forEach(function (a) {
        a.wl = this
    }, this)) : zd(I())[a] ? b = "tremolo" === a ? this.Sc(a, function (a) {
        return "single" !== a.type
    }) : this.Sc(a) : Bd(I())[a] && (b = this.yd(a));
    b && b.sort(function (a, b) {
        return a.k - b.k
    });
    return b
};

function Mf(a) {
    if (a.vi === f) {
        var b = f,
            c = a.Sc("tremolo");
        c && (b = a.Fc(c, "type", "single"));
        a.vi = b && 0 < b.length ? b[0] : k
    }
    return a.vi
}

function Gf(a) {
    var b = a.q(),
        a = a.u();
    return a <= Hf(b, -2) ? -1 : a >= Hf(b, 2 * (b.fa + 1 - 1)) ? 1 : 0
}

function Ff(a) {
    return a.ig || !a.ha() ? l : 0 !== Gf(a) ? i : l
}

function Nh(a) {
    return a.vf
}
s.wd = o("bf");

function Oh(a) {
    return a.w
}

function Kf(a, b, c, d) {
    var e = 0;
    if ("long" === a || "breve" === a) e = 1 === b ? d.d + 2 * c : d.c - 2 * c;
    return e
}

function Lf(a, b, c, d, e) {
    var g = 0;
    1 === c ? (g = -a.Za(), "breve" === b && (g = e.c - 2 * d)) : (g = a.Za(), "breve" === b && (g = e.d + 2 * d));
    return g
}

function Jf(a, b, c) {
    return 1 === a ? 0.5 * b : c - 0.5 * b
}

function Ph() {}

function Zg(a, b, c, d) {
    var e = c.n;
    if (W.prototype.isPrototypeOf(e) || jh.prototype.isPrototypeOf(e) || nh.prototype.isPrototypeOf(e) || sh.prototype.isPrototypeOf(e)) {
        var a = c.Od || 0,
            e = a + c.i(b.ab),
            g = a,
            h = e;
        if (c = c.n.q()) g = Math.min(g, V(c, 1)), h = Math.max(h, V(c, c.fa));
        d["notes_lower_bound_" + b.gd] = Qh(l, a);
        d["notes_upper_bound_" + b.gd] = Qh(i, e);
        d["staff_lower_bound_" + b.gd] = Qh(l, g);
        d["staff_upper_bound_" + b.gd] = Qh(i, h);
        return d
    }
    if (fh.prototype.isPrototypeOf(e)) return b = "staff_duration_p" + c.Dc, d[b] = c.duration, d;
    if (uf.prototype.isPrototypeOf(e)) {
        e =
            c.n;
        g = g || e.R();
        h = h || e.s();
        d = "upper" === h;
        c.Pg = Rh(g, h, b.gd);
        "notes" === g && (c.Dg = Rh("staff", h, b.gd));
        a.Nb = a.Nb || 0;
        g = E(c, b.ga, b.lb);
        if (g === f) {
            var h = c.n,
                j = c.i(b.U),
                m = c.i(b.ab),
                p = b.mc(i),
                q = b.Ub(c.da),
                x = p.length - 1;
            0 <= c.Bc && (j = 0, x = b.Ub(c.Bc));
            var A = 0.5 * (q + x);
            if (x < q) {
                var D = x,
                    x = q,
                    q = D,
                    D = c.da;
                c.Bc = c.da;
                c.da = D
            }
            D = f;
            for (a.hc = q;
                (0 <= j || 0 <= c.Bc) && a.hc <= x; ++a.hc) {
                var qa = p[a.hc],
                    D = Qh(d, qa[c.Pg]);
                if (D !== f)
                    if (g === f) g = D, c.yf = D;
                    else {
                        if (Wf.prototype.isPrototypeOf(h) && 2 < x - q && (d ? D > g : D < g)) D -= (d ? 1 : -1) * m * (1 - Math.abs(a.hc - A) / (A -
                            q));
                        g = d ? Math.max(g, D) : Math.min(g, D)
                    }
                var ha = a.Nb * ((a.hc === p.length - 1 ? b.Pb() : p[a.hc + 1].wb) - qa.wb) / b.Pb(),
                    ha = ha + qa[b.U],
                    ha = ha + qa.Qd,
                    ha = ha + qa.Pd,
                    ha = ha + b.Sa;
                0 <= c.Bc ? (j += ha, c.Bc === qa.wb && (C(c, b.U, j), c.xf = D)) : j -= ha
            }
            g += (d ? 1 : -1) * e.Gb();
            j = c.i(b.ab);
            h = g + (d ? 1 : -1) * j;
            if (0 < j && e.Je()) {
                e = b.mc(i);
                for (j = b.Ub(c.da); j < a.hc; ++j) m = e[j], m[c.Pg] = Qh(d, h), c.Dg && (p = Qh(d, m[c.Dg]), p = d ? Math.max(p, h) : Math.min(p, h), m[c.Dg] = Qh(d, p))
            }
            g = d ? g : h;
            F(c, b.ga, b.lb, g)
        }
        c.Od = g;
        c.rl = i
    }
}

function Qh(a, b) {
    return b === f ? f : a ? b : -b
}

function Rh(a, b, c) {
    return "" + a + "_" + b + "_bound_" + c
}

function zf(a, b) {
    zf.a.constructor.call(this, a, b);
    b && I().s(this, this)
}
u(zf, ee);
s = zf.prototype;
s.toString = r("Score.Direction");
s.ua = n();
s.sc = o("sf");
s.O = o("Ka");
s.Fc = W.prototype.Fc;
s.ka = function (a) {
    var b = f;
    this[a] === f && (this.directions && (b = this.Fc(this.directions, "direction", a), this[a] = b), this[a] === f && (this[a] = k));
    (b = this[a]) && b.sort(function (a, b) {
        return a.k - b.k
    });
    return b
};
s.ub = function (a) {
    return be(this, function (a) {
        return W.prototype.isPrototypeOf(a)
    }, !a)
};

function Hh(a, b) {
    ee.prototype.constructor.call(this, a, b);
    if (b && (Xd(this, this), this.oe && (this.directions = this.oe.map(function (a) {
        a.direction = "harmony-chord";
        a.Ta = this.Ta;
        a.Ka = this.Ka;
        return a
    }, this)), this.frame)) {
        var c = this.frame;
        c.direction = "harmony-frame";
        c.Ta = this.Ta;
        c.Ka = this.Ka;
        this.directions = this.directions || [];
        this.directions.push(c)
    }
}
u(Hh, zf);
Hh.prototype.toString = r("Score.Harmony");
Hh.prototype.sc = r(1);

function Sh(a, b) {
    Sh.a.constructor.call(this, a, b)
}
u(Sh, og);
Sh.prototype.toString = r("Score.Rehearsal");
Sh.prototype.l = r("rehearsal");
Sh.prototype.clone = function (a) {
    a = a || new Sh(this.k, this.j);
    return Sh.a.clone.call(this, a)
};

function Th(a, b) {
    Th.a.constructor.call(this, a, b)
}
u(Th, og);
Th.prototype.toString = r("Score.Words");
Th.prototype.l = r("words");
Th.prototype.clone = function (a) {
    a = a || new Th(this.k, this.j);
    return Th.a.clone.call(this, a)
};

function Uh(a, b) {
    Uh.a.constructor.call(this, a, b)
}
u(Uh, og);
s = Uh.prototype;
s.toString = r("Score.Metronome");
s.l = r("metronome");
s.clone = function (a) {
    a = a || new Uh(this.k, this.j);
    return Uh.a.clone.call(this, a)
};
s.Ga = function (a) {
    var b = "",
        c = -1;
    this.j.bd && (b += "(");
    if (this.j.Qi) {
        var b = b + "%" + ++c,
            d = this.qc(i),
            e = this.od(this.j.Qi, this.j.$l, a);
        e.wa({
            width: e.i("width"),
            height: e.i("height")
        });
        d.push(e)
    }
    b += " = ";
    this.j.ni ? b += this.j.ni : this.j.Ri && (b = b + "%" + ++c, d = this.qc(i), e = this.od(this.j.Ri, this.j.am, a), e.wa({
        width: e.i("width"),
        height: e.i("height")
    }), d.push(e));
    this.j.bd && (b += ")");
    return b
};
s.qc = function (a) {
    this.hb === f && a && (this.hb = []);
    return this.hb
};
s.Wf = r("none");
s.s = r("upper");
s.od = function (a, b, c) {
    var d = "<note><duration>1</duration><pitch><octave>4</octave><step>G</step></pitch><type>" + a + "</type></note>",
        a = this.ub(),
        d = new W(a.w, d);
    d.rd = b;
    d.prev = a;
    d.ea = a.ea;
    d.Db = a.Db;
    d.time = a.time;
    d.key = a.key;
    return (new Vh(c)).m(d)
};

function Wh(a, b) {
    Wh.a.constructor.call(this, a, b)
}
u(Wh, og);
Wh.prototype.toString = r("Score.HarmonyChord");
Wh.prototype.l = r("harmony-chord");
Wh.prototype.qc = Uh.prototype.qc;
Wh.prototype.Ga = function (a) {
    a = fc(kc(a));
    this.fh = -1;
    var b = "",
        c = "",
        d = this.j.root;
    d && (c += d.step.text || d.step.value, d.L && d.L.eb && d.L.value && (c = Xh(this, c, d.L, a)));
    b += c;
    d = "";
    if (c = this.j.Me) {
        if (c.Gi) {
            var d = d + Yh(c.Me),
                e = c.Me,
                g = "";
            /dominant$|seventh$|^half|major-minor/.test(e) ? g = "7" : /sixth$/.test(e) ? g = "6" : /ninth$/.test(e) ? g = "9" : /11th$/.test(e) ? g = "11" : /13th$/.test(e) ? g = "13" : "suspended-second" === e ? g = "sus2" : "suspended-fourth" === e && (g = "sus4");
            d += g
        }
        c.text && (d += c.text)
    }
    return a = b + d + Zh(this, a)
};

function Xh(a, b, c, d) {
    b = "left" === c.location ? "%" + ++a.fh + b : b + "%" + ++a.fh;
    c = (new qh(f, new fh(f, '<staff-details number="1"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>'), c.value, i)).m(d);
    c.wa({
        width: c.i("width"),
        height: c.i("height")
    });
    a.qc(i).push(c);
    return b
}
var $h = {
    Uk: 9651,
    Zk: 45,
    Ni: 43,
    ij: 176,
    Lk: 248
};

function Yh(a) {
    var b = f;
    /major/.test(a) && (b = $h.Uk);
    /minor/.test(a) && (b = $h.Zk);
    /augmented/.test(a) && (b = $h.Ni);
    /diminished/.test(a) && (b = $h.ij, /half/.test(a) && (b = $h.Lk));
    return b ? String.fromCharCode(b) : ""
}

function Zh(a, b) {
    var c = "",
        d = a.j.Gf;
    d && d.forEach(function (a) {
        c += "/";
        if (a.eb) {
            var d = a.type;
            d && (c += d.text || ("add" === d.value ? "add" : ""));
            (d = a.L) && (d.tl ? c += 0 < d.value ? "+" : "-" : d.value && (c = Xh(this, c, d, b)));
            if (a = a.value) a.Yb && (c += Yh(a.Yb)), c += a.text || a.value
        }
    }, a);
    return c
}
Wh.prototype.clone = function (a) {
    a = a || new Wh(this.k, this.j);
    return Wh.a.clone.call(this, a)
};

function ai(a, b) {
    ai.a.constructor.call(this, a, b)
}
u(ai, X);
ai.prototype.toString = r("Score.Segno");
ai.prototype.l = r("segno");
ai.prototype.N = function () {
    return ["scripts.segno"]
};
ai.prototype.clone = function (a) {
    a = a || new ai(this.k, this.j);
    return ai.a.clone.call(this, a)
};

function bi(a, b) {
    bi.a.constructor.call(this, a, b)
}
u(bi, X);
bi.prototype.toString = r("Score.Coda");
bi.prototype.l = r("coda");
bi.prototype.N = function () {
    return ["scripts.coda"]
};
bi.prototype.clone = function (a) {
    a = a || new bi(this.k, this.j);
    return bi.a.clone.call(this, a)
};

function ci(a, b) {
    ci.a.constructor.call(this, a, b)
}
u(ci, X);
ci.prototype.toString = r("Score.Pedal");
ci.prototype.l = r("pedal");
ci.prototype.N = function () {
    var a = f;
    switch (this.j.type) {
    case "start":
        a = ["pedal.Ped", "pedal.."];
        break;
    case "stop":
        a = ["pedal.*"];
        break;
    case "change":
        a = ["pedal.*", "pedal.Ped", "pedal.."]
    }
    return a
};
ci.prototype.clone = function (a) {
    a = a || new ci(this.k, this.j);
    return ci.a.clone.call(this, a)
};

function di(a, b) {
    di.a.constructor.call(this, a, b)
}
u(di, X);
s = di.prototype;
s.toString = r("Score.Accordion");
s.l = r("accordion-registration");
s.N = function () {
    return ["accordion.accDiscant"]
};
s.clone = function (a) {
    a = a || new di(this.k, this.j);
    return mc.Tl.a.clone.call(this, a)
};
s.s = r("upper");
s.m = function (a) {
    function b(a, b, c, d) {
        var m = b.i("width"),
            p = b.i("height"),
            q = this.nc("accordion.accDot"),
            a = G(a, "accordion.accDot", q.width, q.height);
        q.width = a.i("width");
        q.height = a.i("height");
        m = 0.5 * (m - q.width);
        c = (3 - c) * p / 3 + 0.5 * q.height;
        1 === d ? (F(a, "glyph_anchor", "x", m), F(a, "glyph_anchor", "y", c), b.o(a, l, l, 0, 0, "glyph_anchor")) : 2 === d ? (F(a, "glyph_anchor", "x", m - q.width), F(a, "glyph_anchor", "y", c), b.o(a, l, l, 0, 0, "glyph_anchor"), d = a.clone(), F(d, "glyph_anchor", "x", m + q.width), F(d, "glyph_anchor", "y", c), b.o(d, l, l, 0,
            0, "glyph_anchor")) : 3 === d && (F(a, "glyph_anchor", "x", m - 2 * q.width), F(a, "glyph_anchor", "y", c), b.o(a, l, l, 0, 0, "glyph_anchor"), d = a.clone(), F(d, "glyph_anchor", "x", m), F(d, "glyph_anchor", "y", c), b.o(d, l, l, 0, 0, "glyph_anchor"), d = a.clone(), F(d, "glyph_anchor", "x", m + 2 * q.width), F(d, "glyph_anchor", "y", c), b.o(d, l, l, 0, 0, "glyph_anchor"))
    }
    var c = di.a.m.call(this, a, i);
    if (c) {
        F(c, "glyph_anchor", "x", 0);
        var a = fc(kc(a)),
            d = this.j;
        d.Ki && b.call(this, a, c, 1, 1);
        0 < d.Mg && b.call(this, a, c, 2, d.Mg);
        d.Li && b.call(this, a, c, 3, 1)
    }
    return c
};

function Vh(a) {
    if (this.context = a) this.z = fc(kc(a))
}
var ei, fi;
s = Vh.prototype;
s.$ = function (a, b) {
    var b = b || new ah,
        c = this.m(a),
        d = a.rb();
    E(c, "staff", "y");
    var e = Math.max(c.Qd || 0, a.Gd() ? 1 : 0),
        g = Math.max(c.Pd || 0, a.ca ? 5 : 1);
    c.yb = new Ph;
    var h = dh(b, a.O(), i);
    h.o(c, i, l, e, g, "staff");
    !a.ka("beam") && "TAB" !== d.T && this.eh(a, c, h);
    return b
};
s.m = function (a, b) {
    var c = a.rb(),
        d = f,
        d = new Ef;
    "TAB" === c.T ? (C(d, "width", 10), C(d, "height", 10), gi(this, a, d)) : this.dh(a, d, b);
    var e = 0;
    (c = a.ka("lyric")) && c.forEach(function (a) {
        e = Math.max(e, this.context.measureText(a.text))
    }, this);
    Hh.prototype.isPrototypeOf(a.prev) && (c = a.prev.ka("harmony-chord")) && c.forEach(function (a) {
        a = new Wh(0, a);
        e = Math.max(e, this.context.measureText(a.Ga(this.context)))
    }, this);
    d.Qd = a.Gd() ? 0.5 * e : 0;
    d.Pd = a.Gd() ? 0.5 * e : e;
    a.Q(d);
    return d
};

function gi(a, b, c) {
    b.q();
    var d = f;
    if (d = Jh(b, "fret")) {
        var d = (new wg(d[0].k, d[0])).m(a.context),
            a = d.i("width"),
            e = d.i("height");
        d.dd({
            e: 0.5 * -a,
            c: 0.5 * -e,
            f: 0.5 * a,
            d: 0.5 * e
        });
        a = d.P();
        b = b.u() + a.c;
        F(d, "staff", "y", b);
        c.o(d, l, l, 5, 5, "staff")
    }
}
s.dh = function (a, b, c) {
    a.Sd !== f && (a.fd = a.Sd);
    if (!c) {
        hi(this, a, b, i);
        var d = a.Lb;
        if (d && (d = d.m(this.z))) {
            var e = d.P(),
                e = a.u() + e.c;
            F(d, "staff", "y", e);
            b.o(d, l, l, 0, 0, "staff")
        }
    }
    this.kc(a, b, c);
    Nf(a) && (a.q(), c = Eh(a.ja()), c !== f && (d = 10, a.ca && (d *= 0.65), c = G(this.z, c, d, f), c.wa({
        width: c.i("width"),
        height: c.i("height")
    }), b.Pf = c, a.ca && a.ca && a.ed && (c = -1 === a.H() ? "flags.ugrace" : "flags.dgrace", c = G(this.z, c, 12, f), c.wa({
        width: c.i("width"),
        height: c.i("height")
    }), b.ed = c)));
    this.ue(a, b);
    hi(this, a, b, l)
};
s.eh = function (a, b, c, d) {
    var e = Y.prototype.isPrototypeOf(a) ? a.sb() : a;
    if (d || !d && If(e)) {
        var d = e.H(),
            g = e.t().aa(),
            h = g.i("height"),
            j = e.Za(),
            j = j + 0.5 * h,
            m = new S("StemPlaceHolder");
        C(m, "width", 0);
        C(m, "height", j);
        g = E(g, "staff", "y");
        1 === d && (g = g - j + h);
        F(m, "staff", "y", g);
        m.da = b.da;
        m.n = e;
        m.yb = new Ph;
        c.o(m, l, l, 0, 0, "staff");
        a.Bn = m
    }
};
s.kc = function (a, b, c) {
    a.q();
    var d = (new Dh(a)).m(this.z),
        e = d.P(),
        a = a.u() + e.c;
    F(d, "staff", "y", a);
    c = c ? 0 : 2;
    b.o(d, l, l, c, c, "staff")
};
s.ue = function (a, b, c) {
    a.q();
    for (var d = a.rd, e = 0; e < d; ++e) {
        var g = G(this.z, "dots.dot", f, 4);
        a.ha() && (c = a.u());
        0 === Math.abs(c) % 10 && (c += 5);
        var h = g.P(),
            c = c + h.c;
        F(g, "staff", "y", c);
        b.o(g, l, l, 2, 2, "staff")
    }
};

function ii(a, b) {
    xf(this, a, b)
}
v(ii, wf);

function hi(a, b, c, d) {
    ei = ei || [fg, ig];
    fi = fi || [jg, kg, Hg];
    (new ii(d ? ei : fi, b)).ka().forEach(function (a) {
        var d = a.m(this.context);
        if (d) {
            var h = b.u(),
                h = h + a.Gb();
            F(d, "staff", "y", h);
            c.o(d, l, l, 0, 0, "staff")
        }
    }, a)
}

function ji() {
    ji.a.constructor.call(this, "Tuplet")
}
u(ji, S);
v(ji, Qf);
s = ji.prototype;
s.clone = function (a) {
    a = a || new ji;
    return ji.a.clone.call(this, a)
};
s.p = function (a) {
    ji.a.p.call(this, a);
    var b = this.n,
        c;
    c = this.n;
    var d = c.r()[0],
        e = d.t(),
        g = e.aa(),
        e = e.W + E(g, "parent", "x");
    c.j.dc || -1 === d.H() && (e += g.i("width"));
    c = e;
    var d = this.n,
        e = d.r(),
        g = e[e.length - 1],
        h = e[0].t(),
        j = g.t(),
        e = j.aa(),
        h = E(j, "parent", "x") - E(h, "parent", "x") + h.W + E(e, "parent", "x") + e.i("width");
    d.j.dc || 1 === g.H() && (h -= e.i("width"));
    d = h;
    e = ("upper" === this.n.s() ? 0.5 : -0.5) * this.i("height");
    g = this.n.r();
    h = Rf(this, g[0], g[g.length - 1]);
    g = h + e;
    j = this.n.r();
    j = Rf(this, j[j.length - 1], j[0]);
    e = j + e;
    b.j.dc && (a.save(),
        a.X(1), a.qa("#000000"), a.beginPath(), a.moveTo(c, h), a.lineTo(c, g), a.lineTo(d, e), a.lineTo(d, j), a.stroke(), a.restore());
    if (1 === b.la() && (b = this.Ma(a))) {
        var h = E(b, "parent", "x") || 0,
            j = E(b, "parent", "y") || 0,
            m = Ib(b, "width"),
            p = Ib(b, "height");
        c += 0.5 * (d - c - m);
        d = g + 0.5 * (e - g - p);
        a.save();
        a.translate(c, d);
        a.clearRect(h - 3, j, m + 6, p);
        b.p(a);
        a.restore()
    }
};
s.od = function (a, b, c, d) {
    var e = this.n,
        a = new W(a, "<note><duration>1</duration><pitch><octave>4</octave><step>G</step></pitch><type>" + b + "</type></note>");
    a.rd = c;
    c = e.r()[0];
    a.prev = c;
    a.ea = c.ea;
    a.Db = c.Db;
    a.time = c.time;
    a.key = c.key;
    return (new Vh(d)).m(a)
};
s.Ma = function (a) {
    var b = this.n,
        c = f,
        d = b.j.Al,
        e = b.j.Cl;
    if ("none" !== d) {
        var c = new T("center"),
            g = "",
            h = f;
        if ("actual" === d || "both" === d)
            if (g += b.j.Zd.be, "actual" === e || "both" === e) {
                var j = b.r(),
                    j = j[0],
                    m = b.j.Zd.ce,
                    m = m !== f ? m : b.ia(j).ja(),
                    p = b.j.Zd.$d,
                    p = p !== f ? p : b.ia(j).rd,
                    j = this.od(Oh(b.ia(j)), m, p, a);
                j.wa({
                    width: j.i("width"),
                    height: j.i("height")
                });
                h = h || [];
                h.push(j);
                g += "%0"
            }
            "both" === d && (g = g + ":" + b.j.ae.be, "both" === e && (j = b.r(), d = j[0], e = b.j.ae.ce, e = e !== f ? e : b.ia(d).ja(), j = b.j.ae.$d, j = j !== f ? j : b.ia(d).rd, j = this.od(Oh(b.ia(d)),
            e, j, a), j.wa({
            width: j.i("width"),
            height: j.i("height")
        }), h = h || [], h.push(j), g += "%1"));
        kc(a).Ea = 14;
        Ie(c, g, "italic bold 12px sans-serif", a, h);
        c.wa({
            width: c.i("width"),
            height: c.i("height")
        })
    }
    return c
};
s.Uc = r(l);

function ki(a, b) {
    ki.a.constructor.call(this, a, b)
}
u(ki, uf);
s = ki.prototype;
s.toString = r("Score.Tuplet");
s.l = r("tuplet");
s.clone = function (a) {
    a = a || new ki(this.k, this.j);
    return ki.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.s = function () {
    var a = this.r(),
        b = a[0],
        a = a[a.length - 1];
    return b.H() === a.H() ? -1 === b.H() ? "upper" : "lower" : "upper"
};
s.m = function () {
    var a = new ji;
    C(a, "height", 14);
    this.Q(a);
    return a
};
s.V = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "upper" === this.s() ? a.I.length - 1 : 0;
        return a.I[b]
    }
    return a
};
s.ia = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "upper" === this.s() ? 0 : a.I.length - 1;
        return a.I[b]
    }
    return a
};

function li(a) {
    this.Bb = a
}
li.prototype.Wa = function (a, b) {
    0 === b && (this.Ec = a)
};
li.prototype.fb = function (a, b) {
    if (0 === b) {
        this.Bb.Ec = this.Ec;
        var c = Nh(this.Bb.ia(this.Ec));
        c && 0 < c.length && c.some(function (a) {
            var a = a.r(),
                b = this.Bb.r();
            return this.Bb.ia(a[0]) === this.Bb.ia(b[0]) && this.Bb.ia(a[a.length - 1]) === this.Bb.ia(b[b.length - 1])
        }, this) && (this.Bb.j.dc = l);
        if ((c = Mf(this.Bb.ia(this.Ec))) && "single" === c.type && 0 < c.k) this.Bb.j.dc = l
    }
};
ki.prototype.$f = function () {
    return [new li(this)]
};

function mi() {
    mi.a.constructor.call(this, "Tied")
}
u(mi, S);
mi.prototype.clone = function (a) {
    a = a || new mi;
    return mi.a.clone.call(this, a)
};
mi.prototype.p = function (a) {
    mi.a.p.call(this, a);
    var b = this.n,
        c;
    c = this.n;
    if (c.Vc) c = 35;
    else {
        var d = c.r()[0],
            e = d.t(),
            g = e.W;
        Y.prototype.isPrototypeOf(d) ? (e = e.aa(), g += E(e, "parent", "x"), d = ni(c, d), e = d.t(), g += E(e, "parent", "x") + e.i("width")) : g += e.i("width");
        c = g
    }
    d = this.n;
    if (d.Ke) d = this.i("width");
    else {
        var h = d.r(),
            g = h[h.length - 1],
            e = h[0].t(),
            h = h[h.length - 1].t(),
            e = E(h, "parent", "x") - (d.Vc ? 0 : E(e, "parent", "x")) + e.W;
        Y.prototype.isPrototypeOf(g) && (h = h.aa(), e += E(h, "parent", "x"), g = ni(d, g), h = g.t(), e += E(h, "parent", "x"));
        d = e
    }
    var h = this.n,
        g = h.s(),
        e = 0,
        h = ni(h, h.r()[0]),
        j = this.yf || this.xf,
        m = this.xf || this.yf;
    h.q();
    var p = h.u();
    0 === Math.abs(p) % 10 && (e += "upper" === g ? -2 : 2);
    "upper" === g && j !== m && (e -= Math.abs(j - m));
    e -= Math.min(j, m) - h.u();
    g = e + ("upper" === g ? 5 : -5);
    a.save();
    a.qa("#000000");
    a.beginPath();
    yb(a, c, g, d, g, "upper" === b.s(), 5);
    a.closePath();
    a.fill();
    a.restore()
};

function Y(a, b) {
    Y.a.constructor.call(this, a, b);
    this.Gc(b)
}
u(Y, W);
s = Y.prototype;
s.toString = r("ScoreChord");

function oi(a, b) {
    a.gb = b
}
s.sb = o("gb");
s.Gc = function (a) {
    this.I = this.I || [];
    a.prev = this;
    this.I.push(a)
};
s.H = function () {
    return this.sb().H()
};
s.ka = function (a) {
    var b = f;
    this.I.forEach(function (c) {
        var d = c.ka(a);
        d && (b = b || [], d.forEach(function (d) {
            "tied" === a && (d.zb = c);
            b.push(d)
        }))
    });
    b === f && (b = k);
    return b
};
s.Ud = function (a) {
    this.I.forEach(function (b, c, d) {
        b.H();
        b.Ud(a);
        b.gi = c !== (-1 === a ? 0 : d.length - 1) ? i : l
    })
};
s.gf = function (a) {
    this.I.forEach(function (b) {
        b.gf(a)
    })
};
s.Za = function () {
    return this.sb().Za()
};
s.m = r(k);

function pi(a) {
    pi.a.constructor.call(this, a)
}
u(pi, uf);
s = pi.prototype;
s.toString = r("Score.Tied");
s.l = r("tied");
s.clone = function (a) {
    a = a || new pi(this.k);
    return pi.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.zc = function (a, b, c, d) {
    pi.a.zc.call(this, a, b, c, d);
    if (Y.prototype.isPrototypeOf(c) && (this.na(b) && (this.il = d.zb), this.va(b))) this.hl = d.zb
};
s.m = function () {
    var a = new mi;
    this.Q(a);
    return a
};
s.s = function () {
    if (this.direction === f) {
        var a = 1,
            b = f,
            c = f,
            d = this.r();
        if (d) {
            var e = d[0],
                d = d[d.length - 1];
            e.H() === d.H() && (a = e.H());
            Y.prototype.isPrototypeOf(e) ? (b = e, c = ni(this, e)) : Y.prototype.isPrototypeOf(d) && (b = d, c = ni(this, d))
        }
        b ? (a = c.q(), this.direction = c.u() >= V(a, Oe(a)) ? "upper" : "lower") : this.direction = -1 === a ? "lower" : "upper"
    }
    return this.direction
};

function ni(a, b) {
    return Y.prototype.isPrototypeOf(b) ? b === a.r()[0] ? a.il : a.hl : b
}

function qi(a) {
    qi.a.constructor.call(this, a || "Beam")
}
u(qi, S);
v(qi, Qf);
s = qi.prototype;
s.clone = function (a) {
    a = a || new qi;
    return qi.a.clone.call(this, a)
};
s.p = function (a) {
    qi.a.p.call(this, a);
    var b = this.n;
    a.save();
    a.qa("#000000");
    var c = this.Dd(),
        d = this.bg(),
        e = this.Ge(),
        g = this.cg(),
        h = b.ub();
    a.beginPath();
    b.vb() || b.Hd ? (b = b.ia(h).wd(), h = (d - c) * Math.tan(b), b = g + h, h = e + h, a.moveTo(c, e), a.lineTo(c, g), a.lineTo(d, b), a.lineTo(d, h)) : (h = ri(b) * ("upper" === b.s() ? -1 : 1), b = e + h, h = g + h, a.moveTo(c, e), a.lineTo(c, b), a.lineTo(d, h), a.lineTo(d, g));
    a.closePath();
    a.fill();
    a.restore()
};
s.Dd = function () {
    var a = this.n,
        b = a.r()[0].t(),
        c = b.aa(),
        a = c.Hi ? 0.5 * c.i("width") : "upper" === a.s() ? c.i("width") : 0;
    return b.W + E(c, "parent", "x") + a
};
s.bg = function () {
    var a = this.n,
        b = f;
    if (a.Hd) b = this.Dd() - si(a);
    else if (a.vb()) b = this.Dd() + si(a);
    else var b = a.r(),
    c = b[b.length - 1], b = b[0].t(), c = c.t(), d = c.aa(), a = d.Hi ? 0.5 * d.i("width") : "upper" === a.s() ? d.i("width") : 0, b = E(c, "parent", "x") - E(b, "parent", "x") + b.W + E(d, "parent", "x") + a;
    return b
};
s.Ge = function () {
    var a = this.n;
    if (a.vb() || a.Hd) return 0 + ("lower" === a.s() ? 1 : -1) * (a.la() - 1) * (ri(a) + ti(a));
    a = a.r();
    return Rf(this, a[0], a[a.length - 1])
};
s.cg = function () {
    var a = this.n;
    if (a.vb() || a.Hd) return this.Ge() + ("lower" === a.s() ? 1 : -1) * ri(a);
    a = a.r();
    return Rf(this, a[a.length - 1], a[0])
};
s.Uc = r(i);
s.Vf = function () {
    var a = this.n;
    return ("lower" === a.s() ? 1 : -1) * (a.la() - 1) * (ri(a) + ti(a))
};

function ui() {
    ui.a.constructor.call(this, "TremoloBeam")
}
u(ui, qi);
s = ui.prototype;
s.clone = function (a) {
    a = a || new ui;
    return ui.a.clone.call(this, a)
};
s.p = function (a) {
    for (var b = ui.a, c = this.n, d = c.la(), e = 1; e <= d + 1; ++e) c.k = e, b.p.call(this, a);
    c.k = d
};
s.Dd = function () {
    return ui.a.Dd.call(this) + 5
};
s.bg = function () {
    return ui.a.bg.call(this) - 5
};
s.Ge = function () {
    var a = ui.a,
        b = this.n,
        c = b.ub(),
        b = b.ia(c).wd();
    return a.Ge.call(this) + 5 * Math.tan(b)
};
s.cg = function () {
    var a = ui.a,
        b = this.n,
        c = b.ub(),
        b = b.ia(c).wd();
    return a.cg.call(this) - 5 * Math.tan(b)
};

function vi(a) {
    vi.a.constructor.call(this, a)
}
u(vi, uf);
s = vi.prototype;
s.toString = r("Score.Beam");
s.l = r("beam");
s.clone = function (a) {
    a = a || new vi(this.k);
    return vi.a.clone.call(this, a)
};
s.na = function (a) {
    return vi.a.na.call(this, a) || /(forward\shook|backward\shook)/.test(a)
};
s.ta = function (a) {
    return vi.a.ta.call(this, a) || /(forward\shook|backward\shook)/.test(a)
};
s.zf = function (a, b, c) {
    return !vi.a.zf.call(this, a, b, c) || this.I && 1 < this.I.length && /(forward\shook|backward\shook)/.test(b) ? l : i
};
s.zc = function (a, b, c) {
    vi.a.zc.call(this, a, b, c);
    "forward hook" === b ? this.Le = i : "backward hook" === b && (this.Hd = i);
    /(forward\shook|backward\shook)/.test(b) && (this.ended = i)
};
s.vb = o("Le");
s.s = function () {
    return this.I && 1 === this.I[0].H() ? "lower" : "upper"
};
s.m = function () {
    var a = new qi(this);
    this.Q(a);
    return a
};

function ti(a) {
    var b = a.r(),
        c = 0.2 * Le(a.V(b[0]).q());
    Fh(a.V(b[0])) && (c *= 0.65);
    return c
}

function ri(a) {
    var b = a.r(),
        c = 0.5 * Le(a.V(b[0]).q());
    Fh(a.V(b[0])) && (c *= 0.65);
    return c
}

function si(a) {
    var b = a.r(),
        c = Le(a.V(b[0]).q());
    Fh(a.V(b[0])) && (c *= 0.65);
    return c
}
s.Ee = o("kf");

function wi(a) {
    this.K = a;
    this.Jb = this.Ib = this.Nd = this.Md = 0;
    this.yc = this.xc = f
}
wi.prototype.Wa = function (a) {
    if (Y.prototype.isPrototypeOf(a)) a.I.forEach(this.Wa, this);
    else {
        var b = a.q(),
            b = V(b, Oe(b)),
            b = a.u() - b;
        0 < b && (++this.Md, b = Math.abs(b), this.Ib < b && (this.Ib = b, this.xc = a));
        0 > b && (++this.Nd, b = Math.abs(b), this.Jb < b && (this.Jb = b, this.yc = a))
    }
};
wi.prototype.fb = function (a) {
    var b = this.sb().H();
    a.Ud(b);
    this.K.hm = i
};
wi.prototype.sb = function () {
    if (this.gb === f && (this.gb = this.Ib === this.Jb ? this.Md >= this.Nd ? this.xc : this.yc : this.Ib >= this.Jb ? this.xc : this.yc, this.K.vb() || this.K.Hd || this.gb === f)) this.gb = this.K.r()[0];
    return this.gb
};

function xi(a, b, c, d, e, g) {
    this.K = a;
    this.gg = 0;
    this.Fg = b;
    this.wi = c;
    this.Rd = d;
    this.Vd = e;
    this.Nb = g
}
xi.prototype.Wa = function (a) {
    if (1 === this.K.la() && (this.K.V(a).q(), (a = a.ka("beam")) && 2 < a.length)) this.gg = Math.max(this.gg, (a.length - 2) * (ri(this.K) + ti(this.K)))
};

function yi(a, b, c) {
    var d;
    d = "note" + b + "_x";
    a[d] === f && (a[d] = Pg(a.Vd, c[b].t(), a.Nb));
    return a[d]
}

function zi(a, b, c) {
    var d;
    d = "note" + b + "_y";
    a[d] === f && (a[d] = a.K.V(c[b]).u());
    return a[d]
}

function Ai(a, b, c) {
    var d;
    d = "note" + b + "_slant";
    if (a[d] === f) {
        var e = f;
        0 === b ? e = 0 : b === c.length - 1 ? (e = a.wi.Ee(), 1 === a.Fg.sb().H() && (e *= -1)) : e = Ai(a, c.length - 1, c) * ((yi(a, b, c) - yi(a, 0, c)) / (yi(a, c.length - 1, c) - yi(a, 0, c)));
        a[d] = e
    }
    return a[d]
}
xi.prototype.wd = function (a) {
    this.Og === f && (this.Og = Math.atan(Ai(this, a.length - 1, a) / (yi(this, a.length - 1, a) - yi(this, 0, a))));
    return this.Og
};
xi.prototype.fb = function (a, b, c) {
    if (1 === this.K.la()) {
        a.gf(i);
        var d = this.K.ia(a),
            e = this.wd(c),
            e = -1 === d.H() ? e : -e;
        d.bf = e;
        e = "note" + b + "_stem_length";
        if (this[e] === f) {
            var g;
            if (this.oi === f) {
                var h = this.Rd.ub();
                g = h.Za();
                g -= Math.abs(this.K.ia(h).u() - this.K.V(h).u());
                g += this.gg;
                var h = c[0],
                    j = c[c.length - 1];
                Ff(this.K.V(h)) && Ff(this.K.V(j)) && (j = this.K.V(h).q(), j = V(j, Math.ceil(0.5 * j.fa)), 35 <= Math.abs(this.K.V(h).u() - j) && (g += 0 < this.wi.Ee() ? ri(this.K) : -ri(this.K)));
                this.oi = g
            }
            g = this.oi;
            h = c[b];
            j = this.Rd.ub() === this.Rd.Ig ?
                this.Rd.Nl : this.Rd.Tk;
            b !== j && (g -= Ai(this, j, c), g += Math.abs(zi(this, j, c) - zi(this, b, c)), g += Ai(this, b, c));
            g += Math.abs(this.K.ia(h).u() - this.K.V(h).u());
            this[e] = g
        }
        b = this[e];
        d.Sd === f && (d.Sd = d.fd);
        d.fd = b;
        Y.prototype.isPrototypeOf(a) && (a.gb = d);
        Vh.prototype.eh.call(this, a, a.t(), this.Vd, i)
    }
};

function Bi(a, b) {
    this.K = a;
    this.Ji = -Infinity;
    this.Ii = Infinity;
    this.Vh = this.Ig = f;
    this.Fg = b
}
Bi.prototype.Wa = function (a, b) {
    var c = this.K.V(a).u();
    c > this.Ji && (this.Ji = c, this.Ig = a, this.Nl = b);
    c < this.Ii && (this.Ii = c, this.Vh = a, this.Tk = b)
};
Bi.prototype.ub = function () {
    return -1 === this.Fg.sb().H() ? this.Ig : this.Vh
};
Bi.prototype.fb = function (a, b) {
    if (0 === b) {
        this.K.Ec = this.ub();
        var c = this.K;
        a.vf = a.vf || [];
        a.vf.push(c)
    }
};

function Ci(a) {
    this.K = a;
    this.kf = this.T = f
}
Ci.prototype.Wa = function (a, b, c) {
    if (1 === this.K.la() && b < Math.floor(0.5 * c.length)) {
        this.K.V(a).q();
        var c = c[c.length - (b + 1)],
            d = this.K.V(a).u(),
            d = (this.K.V(c).u() - d) / 10,
            e = 0 !== d ? 0 < d ? 1 : -1 : 0;
        this.T = this.T === f ? e : this.T !== e ? 0 : this.T;
        if (0 === b) {
            d = Math.abs(d);
            Ff(this.K.V(a)) && Ff(this.K.V(c)) && 0 !== d && (d = 0.5);
            switch (d) {
            case 0:
            case 0.5:
            case 1:
            case 1.5:
                break;
            case 2:
            case 2.5:
            case 3:
                d = 1.5;
                break;
            default:
                d = 2
            }
            this.kf = 10 * d
        }
    }
};
Ci.prototype.fb = function () {
    1 === this.K.la() && (this.K.kf = this.Ee())
};
Ci.prototype.Ee = function () {
    return this.T * this.kf
};
vi.prototype.af = function (a, b) {
    var c = new wi(this),
        d = [c];
    this.td(d);
    this.jd(d);
    var e = f,
        g = f,
        d = [e = new Ci(this), g = new Bi(this, c), new xi(this, c, e, g, a, b)];
    this.td(d);
    this.jd(d)
};
vi.prototype.V = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "upper" === this.s() ? a.I.length - 1 : 0;
        return a.I[b]
    }
    return a
};
vi.prototype.ia = function (a) {
    if (Y.prototype.isPrototypeOf(a)) {
        var b = "upper" === this.s() ? 0 : a.I.length - 1;
        return a.I[b]
    }
    return a
};

function Di(a) {
    Di.a.constructor.call(this, a)
}
u(Di, vi);
s = Di.prototype;
s.toString = r("Score.TremoloBeam");
s.l = r("tremolo");
s.clone = function (a) {
    a = a || new Di(this.k);
    return Di.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.m = function () {
    var a = new ui;
    this.Q(a);
    return a
};

function Ei(a, b) {
    Ei.a.constructor.call(this, a, b)
}
u(Ei, X);
s = Ei.prototype;
s.toString = r("Score.Fermata");
s.l = r("fermata");
s.N = function () {
    var a = "scripts.";
    switch (this.ja()) {
        default:
    case "upright":
        a += "u";
        break;
    case "inverted":
        a += "d"
    }
    switch (this.Ga()) {
    case "angled":
        a += "short";
        break;
    case "square":
        a += "long"
    }
    return [a + "fermata"]
};
s.clone = function (a) {
    a = a || new Ei(this.k, this.j);
    return Ei.a.clone.call(this, a)
};
s.Ga = function () {
    return this.j.text
};
s.ja = function () {
    return this.j.type
};
s.s = function () {
    return "upright" === this.ja() ? "upper" : "lower"
};

function Fi(a, b) {
    Fi.a.constructor.call(this, a, b)
}
u(Fi, X);
s = Fi.prototype;
s.toString = r("Score.AccidentalMark");
s.l = r("accidental-mark");
s.N = function () {
    return [qh.prototype.ee.call(this, this.Ob())]
};
s.clone = function (a) {
    a = a || new Fi(this.k, this.j);
    return Fi.a.clone.call(this, a)
};
s.Ob = function () {
    return this.j.Na
};
s.nc = function (a) {
    var b = {
        width: f,
        height: f
    };
    b.height = "accidentals.doublesharp" === a ? 10 : 20;
    return b
};

function Gi(a, b) {
    Gi.a.constructor.call(this, "rests.line");
    this.ea = b
}
u(Gi, S);
Gi.prototype.p = function (a) {
    Gi.a.p.call(this, a);
    a.save();
    var b = E(this, "parent", "x"),
        c = E(this, "parent", "y"),
        d = Ib(this, "width"),
        e = Ib(this, "height");
    a.translate(b, c);
    var b = 8 * this.ea.tb(),
        c = 0,
        g = d,
        h = 0,
        j = e,
        h = j = 0.5 * e;
    a.X(b);
    a.beginPath();
    B.J(a, c, h, g, j);
    a.stroke();
    b = 0.5 * this.ea.tb();
    h = c = g = 0;
    j = e;
    a.X(b);
    a.beginPath();
    B.J(a, c, h, g, j);
    a.stroke();
    c = g = d;
    a.X(b);
    a.beginPath();
    B.J(a, c, h, g, j);
    a.stroke();
    a.restore()
};
Gi.prototype.clone = function (a) {
    a = a || new Gi;
    return Gi.a.clone.call(this, a)
};
Gi.prototype.Ya = function (a) {
    return "width" === a ? 100 : 20
};

function Hi(a, b) {
    Hi.a.constructor.call(this, a, b)
}
u(Hi, W);
s = Hi.prototype;
s.toString = r("ScoreRest");
s.Rc = o("jl");
s.Gd = function () {
    var a = Hi.a;
    return 1 < this.Rc() || a.Gd.call(this)
};

function Ii(a, b) {
    var c = a.q(),
        d = f;
    switch (b) {
    case "double-whole":
        d = {
            name: "rests.M1",
            height: 10,
            Ua: V(c, 3)
        };
        break;
    case "whole":
        d = {
            name: "rests.0",
            height: 5,
            Ua: V(c, 4)
        };
        break;
    case "half":
        d = {
            name: "rests.1",
            height: 5,
            Ua: V(c, 3)
        };
        break;
    case "quarter":
        d = {
            name: "rests.2",
            height: 30,
            Ua: V(c, 3)
        };
        break;
    case "eighth":
        d = {
            name: "rests.3",
            height: 20,
            Ua: V(c, 3)
        };
        break;
    case "16th":
        d = {
            name: "rests.4",
            height: 30,
            Ua: V(c, 3)
        };
        break;
    case "32nd":
        d = {
            name: "rests.5",
            height: 40,
            Ua: V(c, 3)
        };
        break;
    case "64th":
        d = {
            name: "rests.6",
            height: 50,
            Ua: V(c,
                3)
        };
        break;
    case "128th":
        d = {
            name: "rests.7",
            height: 60,
            Ua: V(c, 3)
        }
    }
    return d
}
s.ja = function () {
    var a = Hi.a.ja.call(this);
    if (!a) switch (32 * this.ua() / this.Fa()) {
    case 1:
        a = "128th";
        break;
    case 2:
        a = "64th";
        break;
    case 4:
        a = "32nd";
        break;
    case 8:
        a = "16th";
        break;
    case 16:
        a = "eighth";
        break;
    case 32:
        a = "quarter";
        break;
    case 64:
        a = "half";
        break;
    case 128:
        a = "whole";
        break;
    case 256:
        a = "double-whole"
    }
    return a
};
s.u = function () {
    if (this.ha()) return Hi.a.u.call(this);
    var a = this.ja();
    if (a) return Ii(this, a).Ua
};
s.ua = function () {
    var a = Hi.a.ua.call(this),
        b = this.Rc();
    0 < b && (a += 4 * b * this.Fa());
    return a
};

function Ji(a, b) {
    Ji.a.constructor.call(this, a, b);
    var c = this,
        d = I(),
        c = c || {};
    d.ua(this, c);
    c.Rh = this.is("backup");
    c.Rh ? Cd(d, this, c) : (c.Le = this.is("forward"), c.Le && (cd(d, this, c), d.O(this, c)))
}
u(Ji, ee);
Ji.prototype.toString = r("Score.Mover");
Ji.prototype.vb = o("Le");
Ji.prototype.O = function () {
    if (this.vb()) return this.Ka || 1
};
Ji.prototype.m = function () {
    var a = new R("Mover");
    C(a, "width", 10);
    C(a, "height", 10);
    this.Q(a);
    return a
};

function Ki() {
    Ki.a.constructor.call(this)
}
u(Ki, Ee);
wb(Ki);
Ki.prototype.clone = function (a) {
    a = a || new Ki;
    return Ki.a.clone.call(this, a)
};
Ki.prototype.toString = r("Renderer.Measure");
Ki.prototype.Yf = function () {
    return this.delegate ? this.delegate : this
};
Ki.prototype.ff = ba("delegate");

function Li(a, b) {
    Li.a.constructor.call(this, a, b, Mi);
    var c = this;
    I();
    c = c || {};
    c.k = O(K(this, "number", f));
    c.Gm = N(this, "implicit", l);
    c.Ym = N(this, "non-controlling", l);
    c.width = K(this, "width", f)
}
var Ni;
u(Li, ae);
var Mi = "attributes note direction harmony backup forward barline".split(" ");
s = Li.prototype;
s.pj = function (a, b, c, d) {
    function e(a) {
        var b = f,
            c = be(a, function (a) {
                return Z.prototype.isPrototypeOf(a)
            }, i);
        c && c.Xc && (c.Xc.some(function (a) {
            return "multiple-rest" === a.Kd ? (b = a, i) : l
        }) && b) && (a.jl = b.og)
    }
    if (W.prototype.isPrototypeOf(a) && a.ig) return a = d.create(c, f, a, "rest"), a = this.qd(a), e(a), a
};
s.oj = function (a, b, c, d, e) {
    if (W.prototype.isPrototypeOf(a)) {
        for (var g = f; b.Tc();) {
            var h = b.Ld();
            if (W.prototype.isPrototypeOf(h) && h.Pk) g === f && (g = d.create(c, f, a, "chord"), e.filter(a), this.qd(g)), g.Gc(h), e.filter(h);
            else {
                --b.M;
                break
            }
        }
        return g
    }
};
s.xd = function () {
    return Ni = Ni || [this.pj, this.oj]
};
s.toString = r("ScoreMeasure");
s.m = r(k);

function fe(a) {
    if (a.lh === f) {
        for (var b = [], c = We(a), d = i; c.S();) {
            var e = c.next();
            d && !Z.prototype.isPrototypeOf(e) && b.push(e.Fa());
            d = l;
            Z.prototype.isPrototypeOf(e) && e.Fa() && b.push(e.Fa())
        }
        0 === b.length && b.push(a.Fa());
        a.lh = b.reduce(function (a, b) {
            for (var c, d = b, e = a; 0 !== a % b;) c = b, b = a % b, a = c;
            return d * e / b
        })
    }
    return a.lh
}
s.Rc = function () {
    if (this.pg === f)
        for (var a = We(this); a.S();) {
            var b = a.next();
            if (Z.prototype.isPrototypeOf(b) && b.Xc && b.Xc.some(function (a) {
                return "multiple-rest" === a.Kd ? (this.pg = a, i) : l
            }, this)) break
        }
    return this.pg ? this.pg.og : 0
};

function Lh(a, b) {
    b = b || 1;
    if (a.Qe === f) {
        a.Qe = [];
        for (var c = We(a); c.S();) {
            var d = c.next();
            d && d.O && d.sc && (a.Qe[d.O()] = Math.max(a.Qe[d.O()] || 1, d.sc()))
        }
    }
    return a.Qe[b]
}
s.oc = function () {
    var a = this.ob;
    a === f && (this.ob = a = this.w.oc());
    return a
};
s.O = n();
s.ba = function () {
    return ke(this.oc(), this)
};
s.Fa = function () {
    return this.ba().Fa()
};
s.jb = function () {
    return this.ba().jb()
};

function Af(a, b) {
    Af.a.constructor.call(this, a, b);
    ud(this, this)
}
u(Af, ee);
s = Af.prototype;
s.toString = r("ScoreBarline");
s.clone = function (a) {
    a = a || new Af(this.w, this.v);
    return Af.a.clone.call(this, a)
};
s.m = function () {
    var a = new Je;
    this.Q(a);
    return a
};
s.ua = r(1);
s.La = function () {
    return this.ua()
};
s.ph = o("Ic");
s.ka = function (a) {
    var b = f;
    this[a] && (b = "fermata" === a ? this[a] : [this[a]]);
    b && b.sort(function (a, b) {
        return a.k - b.k
    });
    return b
};

function Oi() {}
Oi.prototype.toString = r("ScoreElementFactory");
Oi.prototype.create = function (a, b, c, d) {
    c = $d.prototype.isPrototypeOf(c) ? c : new $d(c);
    b = f;
    switch (d) {
    case "rest":
        b = new Hi(a, c);
        break;
    case "chord":
        b = new Y(a, c);
        break;
    case "barline":
        b = new Af(a, c);
        break;
    default:
        b = c.is("score-partwise") ? new Ye(c) : c.is("part-list") ? new Se(a, c) : c.is("score-part") ? new Ve(a, c) : c.is("part-group") ? new Pe(a, c) : c.is("part-symbol") ? new Bh(a, c) : c.is("part") ? new ge(a, c) : c.is("measure") ? new Li(a, c) : c.is("note") ? new W(a, c) : c.is("direction") ? new zf(a, c) : c.is("harmony") ? new Hh(a, c) : c.is("backup") ||
            c.is("forward") ? new Ji(a, c) : c.is("staff-details") ? new fh(a, c) : c.is("clef") ? new jh(a, c) : c.is("key") ? new sh(a, c) : c.is("time") ? new nh(a, c) : c.is("attributes") ? new Z(a, c) : c.is("barline") ? new Af(a, c) : new ce(a, c)
    }
    return b
};

function Pi() {}
Pi.prototype.clone = function (a) {
    a = a || new Pi;
    return ub(a, this)
};
Pi.prototype.reset = function () {
    tb(this, /^\d+/).forEach(function (a) {
        delete this[a]
    }, this)
};

function Qi(a, b, c) {
    var c = "key_pitches_" + (c || 1),
        d = a[c];
    a[c] = b;
    return d
}

function Ri(a, b, c) {
    c = "key_pitches_" + (c || 1);
    return !a[c] || !a[c].some(hh.prototype.vj, b) ? l : i
}

function Si() {}
s = Si.prototype;
s.toString = r("Score.ElementTunnelStates");
s.clone = function (a) {
    a = a || new Si;
    this.Va && (a.Va = this.Va);
    this.part_symbol && (a.part_symbol = this.part_symbol);
    this.staves && (a.staves = this.staves.slice(0));
    this.clefs && (a.clefs = this.clefs.slice(0));
    this.times && (a.times = this.times.slice(0));
    this.keys && (a.keys = this.keys.slice(0));
    return a
};
s.reset = function (a) {
    this.Va = a.Va || this.Va;
    this.part_symbol = a.part_symbol || this.part_symbol;
    Ti(this, a)
};

function Ui(a, b, c, d, e) {
    a[d] = a[d] || [];
    var g = b - 1;
    c && c[d] && c[d][g] ? (a[d][g] = c[d][g], a[d][g].w = a) : a[d][g] || (a[d][g] = e.call(a, b))
}

function Ti(a, b) {
    for (var c = b ? b.pa() : 1, d = 1; d <= c; ++d) {
        Ui(a, d, b, "staves", function (a) {
            return new fh(this, '<staff-details number="' + a + '"><staff-type>regular</staff-type><staff-lines>5</staff-lines></staff-details>')
        });
        Ui(a, d, b, "clefs", function (a) {
            return new jh(this, '<clef number="' + a + '"><sign>G</sign><line>2</line></clef>')
        });
        var e = a.Eb(d);
        e && "TAB" !== e.T && (Ui(a, d, b, "times", function (a) {
            return new nh(this, '<time number="' + a + '" symbol="common"><beats>4</beats><beat-type>4</beat-type></time>')
        }), Ui(a, d, b,
            "keys", function (a) {
                return new sh(this, '<key number="' + a + '"><fifths>0</fifths></key>')
            }))
    }
}
s.jb = function () {
    var a = this.part_symbol;
    if (a === f && 0 === this.Nh) {
        var b = this.pa();
        1 < b && (this.part_symbol = a = new Bh(this, '<part-symbol top-staff="1" bottom-staff="' + b + '">brace</part-symbol>'))
    }
    return a
};
s.pa = Z.prototype.pa;
s.Fa = Z.prototype.Fa;
s.getAttribute = Z.prototype.getAttribute;
s.Tf = Z.prototype.Tf;
s.ma = Z.prototype.ma;
s.Eb = Z.prototype.Eb;
s.Bd = Z.prototype.Bd;
s.Qc = Z.prototype.Qc;
s.ag = Z.prototype.ag;

function je(a) {
    this.w = a;
    this.Hb = new Pi
}
je.prototype.toString = r("Score.ElementTunnel");

function Vi(a, b) {
    for (var c = a.Hb, d = b.pa(), e = 1; e <= d; ++e) {
        var g = b.Qc(e);
        if (g) {
            var h = f,
                j = zh(g);
            j && (h = Qi(c, j, e));
            h && j && (h = h.filter(function (a) {
                return !j.some(hh.prototype.tj, a)
            }), g.ll = h)
        }
    }
}

function Wi(a, b) {
    a.Xd = a.Xd || [];
    var c = a.Xd,
        d = f;
    0 >= c.length ? (d = new Si, Ch(b)) : (d = c[c.length - 1], Ch(b, d), d = d.clone());
    d.reset(b);
    d.Nh = c.length;
    c.push(d);
    return d
}
je.prototype.filter = function (a) {
    a.ob = this;
    if (Li.prototype.isPrototypeOf(a)) this.Hb.reset();
    else if (Z.prototype.isPrototypeOf(a)) Xi(this, a);
    else if (Yi(this, a), W.prototype.isPrototypeOf(a) && !Y.prototype.isPrototypeOf(a) && !Hi.prototype.isPrototypeOf(a)) {
        var b = a.ha();
        if (!a.dl && b && (a.prev || !a.ka("tied"))) {
            var c;
            if (!(c = !this.Hb)) {
                if (!(c = b.ji)) {
                    c = this.Hb;
                    var d = a.O(),
                        d = d || 1;
                    if (b.L)
                        if (Ri(c, b, d)) c = i;
                        else {
                            var e;
                            e = "" + ih(b);
                            c = c[e + d] === b.L
                        } else c = l;
                    c = !c
                }
                c = c || a.Na && a.Na.md
            }
            if (c) {
                if (a.Na) a.Lb = new qh(a.Na, a.q(), f,
                    a.ca);
                else if (b.L) a.Lb = new qh(f, a.q(), b.L, a.ca);
                else {
                    if (c = this.Hb) c = this.Hb, d = (d = a.O()) || 1, b.L ? c = l : (e = "" + ih(b), e = c[e + d], 0 === e ? c = l : e ? c = i : (d = "key_pitches_" + (d || 1), c = c[d] && c[d].some(hh.prototype.uj, b) ? i : l));
                    c && (a.Lb = new qh(f, a.q(), 0, a.ca), c = a.O(), d = "" + ih(b), this.Hb[d + (c || 1)] = 0)
                }!b.ji && this.Hb && (c = this.Hb, a = (a = a.O()) || 1, b.L && !Ri(c, b, a) && (d = "" + ih(b), d += a, c[d] !== b.L && (c[d] = b.L)))
            }
        }
    }
};

function Xi(a, b) {
    var c = Wi(a, b);
    b.pb = c;
    c.Tf().forEach(function (a) {
        Yi(this, a)
    }, a);
    Vi(a, c)
}

function Yi(a, b) {
    var c;
    a.Xd = a.Xd || [];
    c = a.Xd;
    if (0 >= c.length) {
        var d = new Si;
        Ti(d);
        d.Nh = c.length;
        c.push(d)
    }
    c = c[c.length - 1];
    b.pb = c;
    b.Va = c.Fa();
    b.Ab = c.jb();
    if (d = b.O())!b.ea && !fh.prototype.isPrototypeOf(b) && (b.ea = c.ma(d)), !b.Db && !jh.prototype.isPrototypeOf(b) && (b.Db = c.Eb(d)), !b.time && !nh.prototype.isPrototypeOf(b) && (b.time = c.Bd(d)), !b.key && !sh.prototype.isPrototypeOf(b) && (b.key = c.Qc(d))
}

function ke(a, b) {
    var c = b.Aj;
    c === f && (c = We(b).next().ba(), b.Aj = c);
    return c
}

function Zi(a, b, c) {
    this.w = a;
    this.Oi = b ? i : l;
    this.ob = c
}
s = Zi.prototype;
s.toString = r("Score.ElementIterator");
s.clone = function (a) {
    a = a || new Zi;
    return ub(a, this)
};

function $i(a) {
    return (a = a.w) && a.fc ? a.fc.length : 0
}

function aj() {
    var a = Zi.factory;
    a === f && (a = new Oi);
    return a
}

function bj(a) {
    a.M = a.M !== f ? a.M : a.Oi ? $i(a) : 0
}
s.S = function () {
    return this.M < $i(this)
};
s.next = function () {
    return this.w.fc[this.M++]
};
s.Tb = function () {
    return 0 < this.M
};
s.prev = function () {
    return this.w.fc[--this.M]
};

function cj(a, b, c, d) {
    this.element = a;
    this.bh = b || [];
    this.bh.push(this.qd);
    this.lc = a.fc || [];
    a.fc = this.lc;
    this.lj = c;
    this.Hf = d
}
cj.prototype.toString = r("Score.ElementEnfolder");

function dj(a, b) {
    var c = f;
    if (b.Tc()) {
        var d = b.Ld();
        a.bh.some(function (a) {
            return (c = a.call(this, d, b, this.element, this.lj, this.Hf)) ? i : l
        }, a)
    }
    return c
}
cj.prototype.qd = function (a) {
    var b = 0 < this.lc.length ? this.lc[this.lc.length - 1] : f,
        c = this.lc.length;
    this.lc.push(a);
    a.Bj = c;
    b && (b.next = a, a.prev = b);
    this.Hf && this.Hf.filter(a);
    return a
};

function ej(a, b, c) {
    ej.a.constructor.call(this, a, b, c);
    if ((a = this.w) && !a.Af) {
        var b = a.xd(),
            c = aj(),
            d = fj(this, a);
        a.Nc = a.Nc || new cj(a, b, c, this.ob);
        for (b = new gj(d); b.Tc();) dj(a.Nc, b);
        a.fc = a.Nc.lc;
        a.Af = i
    }
    bj(this)
}
u(ej, Zi);
ej.prototype.toString = r("Score.ElementFullInitIter");
ej.prototype.clone = function (a) {
    a = a || new ej;
    return ej.a.clone.call(this, a)
};

function fj(a, b) {
    var c = f,
        d = aj();
    Q(b, b.Bf.join(","), function (a, g) {
        var h = d.create(b, a, g);
        c = c || [];
        c.push(h)
    }, a);
    return c
}

function gj(a) {
    this.cd = a;
    this.M = 0
}
gj.prototype.clone = function (a) {
    a = a || new gj;
    return ub(a, this)
};
gj.prototype.Tc = function () {
    return this.cd ? this.M < this.cd.length : l
};
gj.prototype.Ld = function () {
    return this.cd[this.M++]
};

function hj(a, b, c) {
    hj.a.constructor.call(this, a, b, c);
    if ((owner = this.w) && !owner.Af) {
        a = owner;
        if (!(b = owner.Df)) b = P(owner, owner.Bf);
        a.Df = b;
        var a = owner,
            d;
        b = owner.Df;
        b.v && (d = new $d(b.v.first()));
        a.cj = d;
        d = owner;
        var e;
        a = owner.Df;
        a.v && (e = new $d(a.v.last()));
        d.gm = e;
        owner.Kc = owner.Kc || owner.cj;
        owner.Nc = owner.Nc || new cj(owner, owner.xd(), aj(), this.ob)
    }
    bj(this)
}
u(hj, Zi);
s = hj.prototype;
s.toString = r("Score.ElementLazyInitIter");
s.clone = function (a) {
    a = a || new hj;
    return hj.a.clone.call(this, a)
};
s.S = function () {
    return hj.a.S.call(this) || this.Nk()
};
s.next = function (a) {
    bj(this);
    var b = hj.a;
    if (b.S.call(this)) b = b.next.call(this);
    else {
        var b = this.w,
            c = dj(b.Nc, this);
        ++this.M;
        b.Kc || (b.Af = i);
        b = c
    }!a && this.S() && (this.next(i), this.prev());
    return b
};
s.Tc = function () {
    return this.w.Kc ? i : l
};
s.Ld = function () {
    var a = this.w,
        b = aj(),
        c = a.Kc,
        d;
    d = a.Kc;
    d = (d = d.v ? d.v.next() : f) && d.length ? new $d(d) : f;
    a.Kc = d;
    b = b.create(a, f, c);
    a.cd = a.cd || [];
    a.cd.push(b);
    return b
};
s.Nk = hj.prototype.Tc;

function We(a, b) {
    var c = f;
    ge.prototype.isPrototypeOf(a) ? c = a.oc() : Li.prototype.isPrototypeOf(a) && (c = a.w.oc());
    return ge.prototype.isPrototypeOf(a) ? new hj(a, b, c) : new ej(a, b, c)
}

function ij() {
    ij.a.constructor.call(this, "Wedge")
}
u(ij, S);
ij.prototype.clone = function (a) {
    a = a || new ij;
    return ij.a.clone.call(this, a)
};
ij.prototype.p = function (a) {
    ij.a.p.call(this, a);
    var b = this.n;
    a.save();
    a.X(1);
    a.qa("#000000");
    a.beginPath();
    var c = this.Fh(),
        d = this.Gh(),
        e = b.j.lf || 10;
    ("crescendo" === b.j.type ? 4 : 1) & 1 ? (a.moveTo(c, 0 + e), a.lineTo(d, 0 + 0.5 * e), a.lineTo(c, 0)) : (a.moveTo(d, 0 + e), a.lineTo(c, 0 + 0.5 * e), a.lineTo(d, 0));
    a.stroke();
    a.restore()
};
ij.prototype.Fh = function () {
    var a = this.n.r()[0].t(),
        b = a.aa();
    return a.W + E(b, "parent", "x")
};
ij.prototype.Gh = function () {
    var a = this.n.r(),
        b = a[0].t(),
        a = a[a.length - 1].t(),
        c = a.aa();
    return E(a, "parent", "x") - E(b, "parent", "x") + b.W + E(c, "parent", "x") + c.i("width")
};

function jj(a, b) {
    jj.a.constructor.call(this, a, b)
}
u(jj, uf);
s = jj.prototype;
s.toString = r("Score.Wedge");
s.l = r("wedge");
s.clone = function (a) {
    a = a || new jj(this.k, this.j);
    return jj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(crescendo|diminuendo|continue|stop)/.test(a)
};
s.na = function (a) {
    return /crescendo|diminuendo/.test(a)
};
s.va = function (a) {
    return "stop" === a
};
s.m = function () {
    var a = new ij;
    C(a, "height", this.j.lf || 10);
    this.Q(a);
    return a
};

function kj() {
    kj.a.constructor.call(this, "Dashes")
}
u(kj, S);
kj.prototype.clone = function (a) {
    a = a || new kj;
    return kj.a.clone.call(this, a)
};
kj.prototype.p = function (a) {
    kj.a.p.call(this, a);
    var b = this.n;
    a.save();
    a.X(1);
    a.qa("#000000");
    var c = this.Jk(),
        d = this.Kk();
    a.beginPath();
    B.Mc(a, c, 0, d, 0, b.j.hj, b.j.Fl);
    a.stroke();
    a.restore()
};
kj.prototype.Jk = ij.prototype.Fh;
kj.prototype.Kk = ij.prototype.Gh;

function lj(a, b) {
    lj.a.constructor.call(this, a, b)
}
u(lj, uf);
s = lj.prototype;
s.toString = r("Score.Dashes");
s.l = r("dashes");
s.clone = function (a) {
    a = a || new lj(this.k, this.j);
    return lj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|continue|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.s = r("upper");
s.m = function () {
    var a = new kj;
    C(a, "height", 10);
    this.Q(a);
    return a
};

function mj(a, b) {
    mj.a.constructor.call(this, a, b)
}
u(mj, Bf);
mj.prototype.toString = r("Score.Dynamics");
mj.prototype.l = r("dynamics");
mj.prototype.clone = function (a) {
    a = a || new mj(this.k, this.j);
    return mj.a.clone.call(this, a)
};
mj.prototype.m = function (a) {
    var b = fc(kc(a)),
        c = f;
    (a = this.j.qf) && a.forEach(function (a) {
            for (var e = 0; e < a.length; ++e) {
                var g = a.charAt(e),
                    h;
                h = {
                    width: f,
                    height: f
                };
                switch (g) {
                case "r":
                case "z":
                case "s":
                case "m":
                    h.height = 8;
                    break;
                case "p":
                    h.height = 13;
                    break;
                case "f":
                    h.height = 18;
                    break;
                case "-":
                    h.width = 10;
                    break;
                default:
                    h.width = 15
                }
                if (h = G(b, g, h.width, h.height)) {
                    h.wj *= 0.6;
                    c = c || new R("Dynamics");
                    var j = h.P();
                    F(h, "dynamics", "y", j.c);
                    g = "p" === g ? 1 : "z" === g ? 2 : 0;
                    c.o(h, l, l, g, g, "dynamics")
                }
            }
        }, this);
    this.Q(c);
    return c
};

function nj() {
    nj.a.constructor.call(this, "Slide")
}
u(nj, S);
nj.prototype.clone = function (a) {
    a = a || new nj;
    return nj.a.clone.call(this, a)
};
nj.prototype.p = function (a) {
    nj.a.p.call(this, a);
    var b = this.n,
        c = this.n.r()[0].t().i("width"),
        d = oj(this),
        e, g = this.n.r();
    e = g[g.length - 1];
    g = g[0].t();
    e = e.t();
    e.aa();
    e = E(e, "parent", "x") - E(g, "parent", "x");
    var h = this.n.r(),
        g = h[0],
        h = h[h.length - 1],
        g = oj(this) + (h.u() - g.u());
    a.save();
    a.X(1);
    a.qa("#000000");
    a.beginPath();
    switch (b.j.xb) {
        default:
    case "solid":
        B.J(a, c, d, e, g);
        break;
    case "dashed":
        B.Mc(a, c, d, e, g);
        break;
    case "dotted":
        B.Mc(a, c, d, e, g, 1, 4);
        break;
    case "wavy":
        var b = B,
            h = e - c,
            j = g - d,
            m = Math.atan(j / h);
        a.transform(Math.cos(m),
            Math.sin(m), -Math.sin(m), Math.cos(m), c + 3, d);
        for (var h = Math.abs(Math.sqrt(Math.pow(h, 2) + Math.pow(j, 2))) - 3, m = j = 0, p = i; j < h;) {
            var q = j + 3,
                x = m + (p ? 1 : -1) * 3 * (5 / 3);
            b.J(a, j, m, q, x);
            j = q;
            m = x;
            p = !p
        }
    }
    a.stroke();
    a.restore();
    a.save();
    if (b = this.Ma(a)) h = b.i("width"), e -= c, g -= d, j = Math.atan(g / e), a.transform(Math.cos(j), Math.sin(j), -Math.sin(j), Math.cos(j), c + 0.5 * e - 0.5 * h * Math.cos(j), d + 0.5 * g - 0.5 * h * Math.sin(j)), b.p(a);
    a.restore()
};

function oj(a) {
    var a = a.n.r()[0],
        b = a.t().aa();
    return 0.5 * (-1 === a.H() ? 1 : -1) * b.i("height")
}
nj.prototype.Ma = function (a) {
    var b = f,
        c = this.n.Ga();
    c && (b = new T("center"), Ie(b, c, "10px sans-serif", a), b.wa({
        width: b.i("width"),
        height: b.i("height")
    }));
    return b
};

function pj(a, b) {
    pj.a.constructor.call(this, a, b)
}
u(pj, Bf);
s = pj.prototype;
s.toString = r("Score.Slide");
s.l = r("slide");
s.clone = function (a) {
    a = a || new pj(this.k, this.j);
    return pj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.Ga = function () {
    return this.j.text
};
s.Je = r(l);
s.s = function () {
    return -1 === this.r()[0].H() ? "lower" : "upper"
};
s.m = function () {
    var a = new nj;
    this.Q(a);
    return a
};

function qj(a, b) {
    qj.a.constructor.call(this, a, b)
}
u(qj, pj);
qj.prototype.toString = r("Score.Glissando");
qj.prototype.l = r("glissando");
qj.prototype.clone = function (a) {
    a = a || new qj(this.k, this.j);
    return qj.a.clone.call(this, a)
};

function rj(a) {
    rj.a.constructor.call(this, "Bracket");
    this.Ac = a || 8
}
u(rj, S);
s = rj.prototype;
s.clone = function (a) {
    a = a || new rj;
    return rj.a.clone.call(this, a)
};
s.p = function (a) {
    rj.a.p.call(this, a);
    a.save();
    a.X(1);
    a.qa("#000000");
    a.beginPath();
    var b;
    this.Ac & 10 ? b = 0 : this.Ac & 5 && (b = 0);
    zb(B, a, 0, b, this.kb(), this.Xa(), this.Ac);
    a.stroke();
    a.restore();
    if (b = this.Ma(a)) a.save(), a.translate(5, -(b.i("height") - this.Xa() + 2)), b.p(a), a.restore()
};
s.kb = function () {
    var a = this.n;
    if (this.Ac & 10) {
        var b = a.r(),
            c = b[0].t(),
            b = b[b.length - 1].t(),
            c = E(c, "parent", "x"),
            d = E(b, "parent", "x"),
            b = b.i("width");
        sj.prototype.isPrototypeOf(a) && (b -= 2);
        return c === f ? Hb(this, "width") - 2 : d - c + b
    }
    if (this.Ac & 5) return a.pc()
};
s.Xa = function () {
    var a = this.n;
    if (this.Ac & 10) return a.pc();
    if (this.Ac & 5) {
        var a = a.r(),
            b = a[0].u();
        return a[a.length - 1].u() - b + 10
    }
};
s.Ma = function (a) {
    var b = f,
        c = this.n;
    if ("ending" === c.l()) {
        var d = "";
        (d = c.j ? c.j.kl : "") ? (d = d.split(/,\s+/).join("., "), d += ".") : d = c.Ga();
        d && (b = new T("center"), kc(a).Ea = 14, Ie(b, d, "bold 11px sans-serif", a), b.wa({
            width: b.i("width"),
            height: b.i("height")
        }))
    }
    return b
};

function tj(a, b) {
    tj.a.constructor.call(this, a, b)
}
u(tj, uf);
s = tj.prototype;
s.toString = r("Score.Bracket");
s.l = r("bracket");
s.clone = function (a) {
    a = a || new tj(this.k, this.j);
    return tj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|continue|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.s = r("upper");
s.pc = r(10);
s.m = function (a, b) {
    var c = new rj(b);
    C(c, "height", this.pc());
    this.Q(c);
    return c
};

function sj(a, b) {
    sj.a.constructor.call(this, a, b)
}
u(sj, tj);
s = sj.prototype;
s.toString = r("Score.Ending");
s.l = r("ending");
s.clone = function (a) {
    a = a || new sj(this.k, this.j);
    return sj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(start|discontinue|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a || "discontinue" === a
};
s.zc = function (a, b, c) {
    "discontinue" === b && (this.Rk = i);
    return sj.a.zc.call(this, a, b, c)
};
s.m = function (a) {
    var b = 8;
    this.Rk && (b |= 4);
    return sj.a.m.call(this, a, b)
};
s.Ga = function () {
    return this.j ? this.j.text : ""
};

function uj() {
    uj.a.constructor.call(this, "HarpPedals");
    C(this, "width", 80);
    C(this, "height", 25)
}
u(uj, S);
uj.prototype.clone = function (a) {
    a = a || new uj;
    return uj.a.clone.call(this, a)
};
uj.prototype.p = function (a) {
    uj.a.p.call(this, a);
    a.save();
    a.X(1);
    a.qa("#000000");
    var b = this.i("width"),
        c = this.i("height");
    a.beginPath();
    B.J(a, 0, 0.5 * c, 0 + b, 0.5 * c);
    a.stroke();
    a.beginPath();
    B.J(a, 0.43 * b, 0, 0.43 * b, 0 + c);
    a.stroke();
    a.restore();
    vj(this, a)
};

function vj(a, b) {
    var c = a.n;
    b.save();
    b.X(3);
    b.qa("#000000");
    var d = a.i("width"),
        e = a.i("height"),
        g = c.j.mi,
        h = d / 8,
        j = e / 3;
    "DCBEFGA".split("").forEach(function (a, c) {
        var d = g[a],
            e = 0.5 * h + c * h,
            e = e + (3 <= c ? h : 0),
            A = j;
        0 > d ? A += j : 0 < d && (A += -j);
        d = A + j;
        b.beginPath();
        B.J(b, e, A, e, d);
        b.stroke()
    });
    b.restore()
}

function wj(a, b) {
    wj.a.constructor.call(this, a, b)
}
u(wj, Bf);
wj.prototype.toString = r("Score.HarpPedals");
wj.prototype.l = r("harp-pedals");
wj.prototype.clone = function (a) {
    a = a || new wj(this.k, this.j);
    return wj.a.clone.call(this, a)
};
wj.prototype.m = function () {
    var a = new uj;
    this.Q(a);
    return a
};

function xj() {
    xj.a.constructor.call(this, "HarmonyFrame");
    C(this, "width", 80);
    C(this, "height", 25)
}
u(xj, S);
var yj = {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 5,
    Xb: 10,
    Pc: 15
};
xj.prototype.clone = function (a) {
    a = a || new xj;
    return xj.a.clone.call(this, a)
};
xj.prototype.i = function (a) {
    var b = this.n;
    return "width" === a ? yj.marginLeft + yj.marginRight + yj.Xb * (b.j.of - 1) : yj.marginTop + yj.marginBottom + yj.Pc * b.j.Rf
};
xj.prototype.p = function (a) {
    xj.a.p.call(this, a);
    a.save();
    a.transform(1, 0, 0, -1, 0, this.i("height"));
    var b = this.n;
    a.X(0.5);
    a.qa("#000000");
    for (var c = yj.marginTop, d = yj.marginTop + b.j.Rf * yj.Pc, e = this.i("width"), g = 1; g <= b.j.of; ++g) {
        var h = e - yj.marginRight - (g - 1) * yj.Xb;
        a.beginPath();
        B.J(a, h, c, h, d);
        a.closePath();
        a.stroke()
    }
    c = yj.marginLeft;
    d = yj.marginLeft + (b.j.of - 1) * yj.Xb;
    for (e = 0; e <= b.j.Rf; ++e) {
        g = yj.marginTop + e * yj.Pc;
        if (0 < e) {
            var j = (e + b.j.ye - 1).toString();
            a.hf("bottom");
            h = yj.marginLeft - 0.5 * yj.Xb - a.measureText(j);
            a.fillText(j, h, g)
        }
        a.beginPath();
        B.J(a, c, g, d, g);
        a.closePath();
        0 === e && 1 === b.j.ye ? a.X(3) : a.X(1);
        a.stroke()
    }
    zj(this, a);
    a.restore()
};

function Aj(a, b, c, d, e, g) {
    for (var h = 1; h <= b.j.of; ++h)
        if (!a[h - 1]) {
            var j = c - d.marginRight - (h - 1) * d.Xb,
                m = d.marginTop + -0.5 * d.Pc;
            g.X(1);
            g.beginPath();
            e.J(g, j - 2, m - 2, j + 2, m + 2);
            g.closePath();
            g.stroke();
            g.beginPath();
            e.J(g, j - 2, m + 2, j + 2, m - 2);
            g.closePath();
            g.stroke()
        }
}

function Bj(a, b, c, d) {
    a && a.forEach(function (a, g) {
        if (a.start && a.stop) {
            var h = b - c.marginRight - (a.start - 1) * c.Xb,
                j = b - c.marginRight - (a.stop - 1) * c.Xb,
                m = c.marginTop + (g - 1) * c.Pc;
            d.beginPath();
            yb(d, h, m, j, m, l, 5);
            d.closePath();
            d.fill()
        }
    })
}

function zj(a, b) {
    var c = a.n,
        d = [],
        e = c.j.Qf;
    if (e) {
        var g = B,
            h = yj,
            j = a.i("width"),
            m = f;
        e.forEach(function (a) {
            var e = Number(a.Hl.text);
            d[e - 1] = i;
            var g = Number(a.Ej.text),
                g = 0 === g ? g : g - c.j.ye + 1,
                A = j - h.marginRight - (e - 1) * h.Xb,
                D = h.marginTop + (g - 0.5) * h.Pc,
                qa = a.Pi;
            qa && (m = m || [], m[g] = m[g] || {}, m[g][qa.type] = e);
            e = A;
            0 === g ? (b.X(1), b.beginPath(), b.arc(e, D, 2, 0, 2 * Math.PI), b.closePath(), b.stroke()) : a.jh ? (b.X(0.5), b.beginPath(), b.arc(e, D, 5, 0, 2 * Math.PI), b.closePath(), b.fill(), a = a.jh, a.text && (b.save(), b.Td("bold 8px sans-serif"), b.qa("#FFFFFF"),
                b.hf("middle"), e -= 0.5 * b.measureText(a.text), b.fillText(a.text, e, D + 1), b.restore())) : (b.X(0.5), b.beginPath(), b.arc(e, D, 3, 0, 2 * Math.PI), b.closePath(), b.fill())
        }, a)
    }
    Aj(d, c, j, h, g, b);
    Bj(m, j, h, b)
}

function Cj(a, b) {
    Cj.a.constructor.call(this, a, b)
}
u(Cj, Bf);
Cj.prototype.toString = r("Score.HarmonyFrame");
Cj.prototype.l = r("harmony-frame");
Cj.prototype.clone = function (a) {
    a = a || new Cj(this.k, this.j);
    return Cj.a.clone.call(this, a)
};
Cj.prototype.m = function () {
    var a = new xj;
    this.Q(a);
    return a
};

function Dj(a, b) {
    Dj.a.constructor.call(this, a, b)
}
u(Dj, og);
Dj.prototype.toString = r("Score.Lyric");
Dj.prototype.l = r("lyric");
Dj.prototype.clone = function (a) {
    a = a || new Dj(this.k, this.j);
    return Dj.a.clone.call(this, a)
};

function Ej(a, b) {
    Ej.a.constructor.call(this, a, b)
}
u(Ej, uf);
s = Ej.prototype;
s.ta = function (a) {
    return /(start|continue|stop)/.test(a)
};
s.na = function (a) {
    return "start" === a
};
s.va = function (a) {
    return "stop" === a
};
s.toString = r("Score.StaffLyrics");
s.l = r("staff-lyrics");
s.clone = function (a) {
    a = a || new Ej(this.k, this.j);
    return Ej.a.clone.call(this, a)
};
s.s = r("lower");
s.r = function () {
    if (this.Qa) {
        var a = this.Qa[this.Qa.length - 1].r();
        return [this.Qa[0].r()[0], a[a.length - 1]]
    }
    return Ej.a.r.call(this)
};

function Fj(a, b, c) {
    a.Vd = b;
    a.Nb = c
}
s.m = function (a) {
    var b = new R("StaffLyrics"),
        c = this.r();
    if (c && 0 < c.length && (c = Pg(this.Vd, c[0].t(), this.Nb), F(b, "staff_lyrics", "x", c), F(b, "staff_lyrics", "y", 0), this.Qa)) {
        var d = f;
        this.Qa.forEach(function (c, g) {
            var h = c.m(a),
                j = c.r();
            if (j && !(0 >= j.length)) {
                var j = Pg(this.Vd, j[0].t(), this.Nb),
                    m = (this.Pe - c.la()) * h.i("height");
                if (0 < g) {
                    var p = c.j.Jl || "single",
                        q = d[c.la() - 1];
                    if (q !== f && ("middle" === p || "end" === p)) p = new T("left"), Ie(p, "-", c.oa(), a), F(p, "staff_lyrics", "x", q + 0.5 * (j - q - p.i("width"))), F(p, "staff_lyrics", "y",
                        m), b.o(p, l, l, 0, 0, "staff_lyrics")
                }
                F(h, "staff_lyrics", "x", j);
                F(h, "staff_lyrics", "y", m);
                b.o(h, l, l, 0, 0, "staff_lyrics");
                q = j + h.i("width");
                d = d || [];
                d[c.la() - 1] = q;
                c.j.extend && (p = new T("left"), Ie(p, " __", c.oa(), a), F(p, "staff_lyrics", "x", q), F(p, "staff_lyrics", "y", m), b.o(p, l, l, 0, 0, "staff_lyrics"))
            }
        }, this)
    }
    this.Q(b);
    return b
};

function Gj() {
    Gj.a.constructor.call(this, "Shift")
}
u(Gj, S);
Gj.prototype.clone = function (a) {
    a = a || new Gj;
    return Gj.a.clone.call(this, a)
};
Gj.prototype.p = function (a) {
    Gj.a.p.call(this, a);
    var b = this.Ma(a);
    if (b) {
        var c = this.n;
        a.save();
        var d = c.r();
        if (d[0] !== d[1]) {
            a.X(1);
            a.qa("#000000");
            var d = this.n.r(),
                e = d[0].t(),
                d = d[d.length - 1].t(),
                e = E(e, "parent", "x"),
                g = E(d, "parent", "x"),
                d = d.i("width"),
                d = 0 + (g - e + d),
                e = "upper" === c.s() ? 0 : 0.5 * this.i("height"),
                g = 1 | ("upper" === c.s() ? 8 : 2),
                h = b.i("width");
            a.beginPath();
            zb(B, a, 0 + h + 5, e, d - (0 + h + 5), c.pc(), g, "dashed", 4, 4);
            a.stroke()
        }
        b.p(a);
        a.restore()
    }
};
Gj.prototype.Ma = function (a) {
    if (this.Da === f) {
        var b = this.n.Ga();
        b !== f && (this.Da = new T("left"), Ie(this.Da, b, "italic 12px sans-serif", a), a = this.Da.i("width"), b = this.Da.i("height"), this.Da.wa({
            width: a,
            height: b
        }), C(this, "height", b))
    }
    return this.Da
};

function Ih(a, b) {
    Ih.a.constructor.call(this, a, b)
}
u(Ih, uf);
s = Ih.prototype;
s.toString = r("Score.Shift");
s.l = r("octave-shift");
s.clone = function (a) {
    a = a || new Ih(this.k, this.j);
    return Ih.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(up|down|continue|stop)/.test(a)
};
s.na = function (a) {
    return /(up|down)/.test(a)
};
s.va = function (a) {
    return "stop" === a
};
s.s = function () {
    return "up" === this.j.type ? "lower" : "upper"
};
s.pc = r(5);
s.Ga = function () {
    var a = this.j.size;
    return a ? a + (8 === a ? "v" : "m") + ("upper" === this.s() ? "a" : "b") : f
};
s.m = function (a) {
    var b = new Gj;
    this.Q(b);
    b.Ma(a);
    return b
};

function Hj() {}
var Ij, Jj, Kj, Lj;
v(Hj, wf);
Hj.prototype.Gc = function (a) {
    Ij = Ij || [Fi, Yf, Zf, $f, bg, cg, ag, dg, Ig, Jg, Kg, Lg, Mg, Ng, Og, Qg, Rg, Sg, Tg, pg, qg, rg, sg, tg, ug, yg, zg, Ag, Bg, vg, wg, Cg, Dg, Eg, eg, Fg, Gg, Hg, Ei, vi, Di, ki, Wf, pi, mj, pj, qj, Dj];
    xf(this, Ij, a)
};

function Mj(a) {
    Mj.a.constructor.call(this, a)
}
u(Mj, Vh);
Mj.prototype.dh = function (a, b) {
    F(b, "staff", "x", 0);
    switch (a.Rc()) {
    case 3:
        this.kc(a, b, "double-whole");
        this.kc(a, b, "whole");
        Nj(this, a, b);
        break;
    case 2:
        this.kc(a, b, "double-whole");
        Nj(this, a, b);
        break;
    case 1:
        this.kc(a, b, "whole");
        break;
    case 0:
    case f:
        this.kc(a, b);
        this.ue(a, b);
        break;
    default:
        var c = a.q(),
            d = new Gi(0, c),
            c = V(c, 2);
        F(d, "staff", "y", c);
        b.o(d, l, l, 0, 0, "staff");
        Nj(this, a, b)
    }
};
Mj.prototype.kc = function (a, b, c) {
    if (c = c || a.ja()) {
        var d = Ii(a, c),
            c = G(this.z, d.name, d.width, d.height);
        y = a.u();
        y === f && (y = d.Ua);
        a = c.P();
        y += a.c;
        F(c, "staff", "y", y);
        b.o(c, l, l, 2, 2, "staff")
    }
};
Mj.prototype.ue = function (a, b) {
    var c = a.ja();
    c && (c = Ii(a, c), Mj.a.ue.call(this, a, b, c.Ua))
};

function Nj(a, b, c) {
    var d = b.Rc();
    if (0 < d) {
        for (var e = d.toString(), d = 1 < e.length ? new R("Renderer.RestNumber") : f, b = b.q(), g = 0; g < e.length; ++g) {
            var h = cc(a.z, e.charAt(g), 20);
            d ? d.o(h, l, l, 0, 0) : d = h
        }
        d && (a = V(b, b.fa), e = 0.5 * (c.i("width") - d.i("width")), F(d, "staff", "x", e), F(d, "staff", "y", a), c.o(d, l, l, 0, 0, "staff"))
    }
}

function Oj(a, b) {
    Oj.a.constructor.call(this, a, b)
}
u(Oj, Bf);
s = Oj.prototype;
s.toString = r("Score.Arpeggiate");
s.l = r("arpeggiate");
s.clone = function (a) {
    a = a || new Oj(this.k, this.j);
    return Oj.a.clone.call(this, a)
};
s.ta = function (a) {
    return a === f
};
s.na = r(l);
s.va = r(l);
s.s = function () {
    return this.j.direction
};
s.m = function (a) {
    for (var b = f, c = this.r(), d = c[0].u(), c = c[c.length - 1].u(), c = Math.ceil((c - d) / 10), e = 0; e < c; ++e) {
        var g = a,
            h = e,
            j = c,
            m = "scripts.arpeggio";
        0 === h && "down" === this.s() && (m = "scripts.arpeggio.arrow.M1");
        h === j - 1 && "up" === this.s() && (m = "scripts.arpeggio.arrow.1");
        if (g = G(g, m, f, 10)) b = b || new Fe("Arpeggiate"), b.o(g, l, l, 0, 0)
    }
    b && F(b, "staff", "y", d);
    return b
};

function Pj(a, b) {
    Pj.a.constructor.call(this, a, b)
}
u(Pj, Bf);
s = Pj.prototype;
s.toString = r("Score.NonArpeggiate");
s.l = r("non-arpeggiate");
s.clone = function (a) {
    a = a || new Pj(this.k, this.j);
    return Pj.a.clone.call(this, a)
};
s.ta = function (a) {
    return /(top|bottom)/.test(a)
};
s.na = r(l);
s.va = r(l);
s.pc = r(5);
s.m = function () {
    var a = new rj(4),
        b = this.r(),
        c = b[0].u();
    requisite_height = b[b.length - 1].u() - c;
    requisite_width = this.pc();
    C(a, "width", requisite_width);
    C(a, "height", requisite_height);
    F(a, "staff", "y", c - 5);
    this.Q(a);
    return a
};

function Qj(a) {
    Qj.a.constructor.call(this, a)
}
u(Qj, Vh);

function Rj(a, b) {
    this.z = a;
    this.ea = b
}
var Sj;
v(Rj, wf);
Rj.prototype.Wa = function (a) {
    Sj = Sj || [Oj, Pj];
    xf(this, Sj, a)
};
Rj.prototype.fb = n();
Rj.prototype.Mh = function (a, b) {
    for (var c = 0; c < (this.ra ? this.ra.length : 0); ++c) {
        var d = this.ra[c];
        if (d && d.toString() === a.prototype.toString() && d.la() === b) return i
    }
    return l
};

function Tj(a, b) {
    if (a.df === f && 0 < (a.ra ? a.ra.length : 0))
        for (var c = 0; c < (a.ra ? a.ra.length : 0); ++c) {
            var d = a.ra[c];
            if (d && (d = d.m(b))) a.df = a.df || [], a.df.push(d)
        }
    return a.df
}

function Uj(a, b) {
    this.z = a;
    this.ea = b
}

function Vj(a, b) {
    return a.hd !== f && a.hd.some(function (a) {
        return a === b
    }) ? i : l
}

function Wj(a) {
    a.Hc.reverse();
    a.Hc.forEach(function (a) {
        F(a, "accidentals", "y", E(a, "alignbox", "y"));
        this.ge.o(a, l, l, 2, 2, "accidentals")
    }, a);
    delete a.Hc;
    delete a.hd;
    delete a.cc
}
Uj.prototype.Wa = function (a, b, c) {
    if (!Vj(this, b) && a.Lb) {
        this.ge = this.ge || new R("AccidentalGroup");
        var d;
        d = a.ha();
        var e = f,
            g = l;
        b < c.length - 1 && 1 === ih(c[b + 1].ha()) - ih(d) && (g = i);
        this.cc === f && (this.cc = c.length);
        for (var h = f, j = f; --this.cc > b;) {
            var e = c[this.cc],
                j = e.ha(),
                h = e.Lb,
                m = 2 <= this.cc - b,
                j = 6 <= ih(j) - ih(d);
            if (h && (m || j)) {
                j && g && (++this.cc, e = f);
                break
            } else e = f
        }
        if (d = e) {
            e = new Fe("AlignAccidentalBox");
            if (g = a.Lb.m(this.z)) m = g.P(), m = a.u() + m.c, F(g, "alignbox", "x", 0), F(g, "alignbox", "y", m), e.o(g, l, l, 0, 0, "alignbox");
            if (h =
                d.Lb.m(this.z)) m = h.P(), m = d.u() + m.c, a = a.ha(), j = 0, 6 > ih(d.ha()) - ih(a) && (j += g.i("width")), F(h, "alignbox", "x", j), F(h, "alignbox", "y", m), e.o(h, l, l, 0, 0, "alignbox");
            this.Hc = this.Hc || [];
            this.Hc.push(e);
            this.hd = this.hd || [];
            this.hd.push(this.cc)
        } else if (d = a.Lb.m(this.z)) e = d.P(), a = a.u() + e.c, F(d, "accidentals", "y", a), this.ge.o(d, l, l, 2, 2, "accidentals")
    }
    c.length - 1 === b && this.Hc !== f && Wj(this)
};
Uj.prototype.fb = function (a) {
    a.dl = i
};
Uj.prototype.t = o("ge");

function Xj() {
    this.Jb = this.Ib = 0;
    this.yc = this.xc = f;
    this.Nd = this.Md = 0
}
Xj.prototype.Wa = function (a) {
    var b = a.q(),
        b = V(b, Oe(b)),
        b = a.u() - b;
    0 < b && (++this.Md, b = Math.abs(b), this.Ib < b && (this.Ib = b, this.xc = a));
    0 > b && (++this.Nd, b = Math.abs(b), this.Jb < b && (this.Jb = b, this.yc = a))
};
Xj.prototype.fb = function (a, b, c) {
    var d = (b = this.sb(c)) ? b.H() : 1;
    a.Ud(d);
    this.Yg === f && b && If(b) && (c = b === c[0] ? c[c.length - 1] : c[0], c = this.Yg = b.Za() + Math.abs(b.u() - c.u()), b.Sd === f && (b.Sd = b.fd), b.fd = c);
    a !== b && (a.gf(i), a.gi = i)
};
Xj.prototype.sb = function (a) {
    if (this.gb === f) {
        var b = f;
        if (a && a[0].ca) b = a[0].H(), this.gb = -1 === b ? a[0] : a[a.length - 1];
        else {
            var c = this.Ib === this.Jb ? this.Md >= this.Nd ? this.xc : this.yc : this.Ib >= this.Jb ? this.xc : this.yc,
                b = c.H();
            1 === b && c === a[0] && (c = a[a.length - 1]); - 1 === b && c === a[a.length - 1] && (c = a[0]);
            c.Ud(b);
            this.gb = c
        }
    }
    return this.gb
};

function Yj(a, b) {
    this.context = a;
    this.z = b
}
Yj.prototype.Wa = n();

function Zj(a, b, c) {
    var d = f,
        e = f;
    0 < b && (d = c[b - 1]);
    b < c.length - 1 && (e = c[b + 1]);
    var g = a.ha();
    return [d, e].some(function (a) {
        if (a === f) return l;
        a = a.ha();
        return 1 === Math.abs(ih(g) - ih(a)) ? i : l
    })
}
Yj.prototype.fb = function (a, b, c) {
    var d = this.t(),
        e = (new Vh(this.context)).m(a, i),
        g = 0;
    if (Zj(a, b, c)) {
        var b = e.aa().i("width"),
            g = 0,
            h = a.ha(),
            a = a.H();
        (c = 0 !== (ih(c[c.length - 1].ha()) - ih(h)) % 2) && 1 === a ? g = -1 : !c && -1 === a && (g = 1);
        g *= b;
        d.Hi = i
    }
    F(e, "staff", "x", g);
    d.o(e, l, l, 0, 0, "staff")
};
Yj.prototype.t = function () {
    this.Tg === f && (this.Tg = new Fe("ChordNote"));
    return this.Tg
};
Qj.prototype.td = function (a, b) {
    a.I.forEach(function (a, d, e) {
        b.forEach(function (b) {
            b.Wa(a, d, e)
        })
    }, this)
};
Qj.prototype.jd = function (a, b) {
    a.I.forEach(function (a, d, e) {
        b.forEach(function (b) {
            b.fb(a, d, e)
        })
    }, this)
};

function $j(a, b) {
    if (!W.prototype.isPrototypeOf(a) || !W.prototype.isPrototypeOf(b)) return 0;
    var c = a.O(),
        d = b.O();
    return c === d ? (c = ih(a.ha()), d = ih(b.ha()), c - d) : d - c
}
Qj.prototype.m = function (a) {
    var b = a.rb(),
        c = a.q(),
        d = f;
    if ("TAB" !== b.T && a.I !== f && 1 < a.I.length) {
        a.I.sort($j);
        var b = new Xj,
            e = new Rj(this.z, c),
            g = new Uj(this.z, c),
            c = new Yj(this.context, this.z),
            h = [b, e, g, c];
        this.td(a, h);
        this.jd(a, h);
        oi(a, b.sb());
        var j = new Pf;
        (b = Tj(e, this.z)) && b.forEach(function (a) {
            F(a, "compound", "y", E(a, "staff", "y"));
            j.o(a, l, l, 0, 2, "compound")
        }, this);
        if (b = g.t()) F(b, "compound", "y", E(b, "accidentals", "y")), j.o(b, l, l, 0, 0, "compound");
        d = c.t();
        j && (F(d, "compound", "y", E(d, "staff", "y")), j.o(d, l, l, 0, 0,
            "compound"), F(j, "staff", "y", E(j, "compound", "y")), d = j)
    } else "TAB" === b.T && a.I !== f && 1 < a.I.length && (d = new Fe("ChordFret"), a.I.forEach(function (a) {
        a = (new Vh(this.context)).m(a, i);
        F(a, "staff", "x", 0);
        d.o(a, l, l, 0, 0, "staff")
    }, this));
    a.Q(d);
    return d
};

function ak(a) {
    this.context = a;
    this.z = fc(kc(a))
}
s = ak.prototype;
s.$ = function (a, b) {
    b = b || new ah;
    a.prev && bk(this, a, this.Mf, this.If, b, f);
    bk(this, a, this.Nf, this.Jf, b, f);
    bk(this, a, this.Of, this.Kf, b, f);
    return b
};

function bk(a, b, c, d, e, g) {
    for (var h = 0, j = b.ba().pa(), m = 1; m <= j; ++m) h = c.call(a, b, m, g), e.save(), h && (duration = d.call(a, h, dh(e, m, i), g)), h = e.restore();
    0 === h && (h = 1);
    e.qb(h);
    return h
}
s.Mf = function (a, b, c) {
    return c ? a.ba().Eb(b) : a.Eb(b)
};
s.If = function (a, b, c) {
    if (a && (c = a.m(this.z, c))) {
        var d = c.P(),
            e = a.u() + d.c;
        F(c, "staff", "y", e);
        c.yb = new Ph;
        var g = 5;
        b.o(c, i, l, g, 10, "staff");
        if (a.nd) {
            var h = new T,
                j;
            j = "" + Math.abs(8 * a.nd);
            Ie(h, j, "10px sans-serif", this.context);
            j = a.q();
            0 < a.nd ? (e += d.d - d.c, e = Math.max(e, V(j, j.fa)), e += 2) : (e = Math.min(e, V(j, 1)), e -= h.i("height"), e -= 2);
            F(h, "staff", "y", e);
            h.da = c.da;
            g += 0.5 * (d.f - d.e - h.i("width"));
            b.o(h, l, l, g, 0, "staff")
        }
        return a.La()
    }
    return 0
};
s.Nf = function (a, b, c) {
    var d = a.ba(),
        e = d.ma(b),
        d = d.Eb(b),
        g = f;
    "alternate" === e.Eg && "TAB" === d.T || (g = c ? a.ba().Qc(b) : a.Qc(b));
    return g
};
s.Jf = function (a, b) {
    if (a) {
        var c = a.m(this.z);
        if (c) return c.yb = new Ph, b.o(c, i, l, 0, 10, "staff"), a.La()
    }
    return 0
};
s.Of = function (a, b, c) {
    var d = a.ba(),
        e = d.ma(b),
        d = d.Eb(b),
        g = f;
    "alternate" === e.Eg && "TAB" === d.T || (g = c ? a.ba().Bd(b) : a.Bd(b));
    return g
};
s.Kf = function (a, b) {
    if (a) {
        var c = a.m(this.z);
        if (c) {
            var d = c.P();
            staff = a.q();
            d = V(staff, Oe(staff)) + d.c;
            F(c, "staff", "y", d);
            c.yb = new Ph;
            b.o(c, i, l, 0, 10, "staff");
            return a.La()
        }
    }
    return 0
};
s.zj = function (a, b) {
    return a.ba().ma(b)
};
s.rj = function (a, b, c) {
    if (a) {
        var a = a.clone(),
            d = a.m(this.z);
        if (d) return a.ud = c, a = gh(a, 0), F(d, "staff", "y", a), d.yj = i, d.Dc = b.Dc, d.yb = new Ph, b.o(d, i, i, 0, 0, "staff"), c
    }
    return 0
};

function ck(a) {
    this.z = a
}
ck.prototype.$ = function (a, b) {
    b = b || new ah;
    if (a.Rh) b.ie(a.La());
    else {
        var c = a.m(this.z);
        c && dh(b, a.O(), i).o(c, i, l, 0, 1, "staff")
    }
    return b
};

function dk(a) {
    this.z = a
}
dk.prototype.$ = function (a, b, c, d) {
    var b = b || new ah,
        e = a.ba();
    if (e) {
        var g = a.m(this.z);
        if (g) {
            g.Ka = a.k;
            var h = e.ma(a.k),
                j = V(h, 1),
                m = a.jb();
            "alternate" !== h.Eg && m && a.k === m.me && (e = e.ma(m.rf), e = V(e, e.fa), g.ld = Math.abs(e - j));
            F(g, "staff", "y", j);
            g.gl = d ? i : l;
            dh(b, a.k, i).o(g, i, l, c ? 5 : 0, c ? 0 : 5, "staff")
        }
    }
    return b
};

function ek(a) {
    this.context = a;
    this.z = fc(kc(a))
}
ek.prototype.$ = function (a, b, c, d, e, g) {
    c || (c = new ah, d && c.ff(d), c.Dc = e);
    b && (c.n = a);
    if (a.prev && b && e === g - 1 && (d = c, e = new T, Ie(e, a.Bj + 1, "10px sans-serif", this.context), g = a.ba())) g = g.ma(1), F(e, "staff", "y", V(g, g.fa) + 5), e.duration = 0, dh(d, 1, i).o(e, l, l, 0, 0, "staff");
    for (a = We(a); a.S();) {
        child_element = a.next();
        e = c;
        g = b;
        d = child_element;
        if (!d.prev && !g) {
            var h = d.w.prev,
                j = We(h, i).prev();
            if (!Af.prototype.isPrototypeOf(j)) {
                var m = j,
                    j = new Af(h, "<barline/>");
                j.pb = m.pb;
                j.Ab = m.Ab;
                j.prev = m
            }
            fk(this, j, e, i);
            j = d;
            h = l;
            Af.prototype.isPrototypeOf(j) ||
                (m = j, j = new Af(d.w, "<barline/>"), j.pb = m.pb, j.Ab = m.Ab, j.prev = m, h = i);
            fk(this, j, e, l, h)
        }!d.prev && g ? (g = e, j = d, h = new ak(this.context), bk(h, j, h.Mf, h.If, g, i), bk(h, j, h.Nf, h.Jf, g, i), j.w.prev || bk(h, j, h.Of, h.Kf, g, i)) : Z.prototype.isPrototypeOf(d) && (gk(this, e, d), g = new ak(this.context), g.$(d, e));
        Y.prototype.isPrototypeOf(d) ? (g = new Qj(this.context), g.$(d, e)) : Hi.prototype.isPrototypeOf(d) ? (g = new Mj(this.context), g.$(d, e)) : W.prototype.isPrototypeOf(d) && (g = new Vh(this.context), g.$(d, e));
        Ji.prototype.isPrototypeOf(d) &&
            (g = new ck(this.z), g.$(d, e));
        d.prev && d.next && Af.prototype.isPrototypeOf(d) && fk(this, d, e, l);
        if (!d.next && (d = d.w.next))
            if (g = We(d), d = f, g.S() && Z.prototype.isPrototypeOf(d = g.next())) g = new ak(this.context), bk(g, d, g.Mf, g.If, e, f)
    }
    gk(this, c, child_element);
    return c
};

function hk(a, b, c) {
    function d(a, b) {
        var c = 0,
            d = new ak(this.context),
            c = c + bk(d, a, d.Nf, d.Jf, b, f);
        return c += bk(d, a, d.Of, d.Kf, b, f)
    }
    var e = 0,
        g = function (a) {
            if (a) {
                var a = We(a),
                    b = f;
                if (a.S() && (b = a.next(), !Z.prototype.isPrototypeOf(b) || !b.keys && !b.Ml)) b = f
            }
            return b
        }(b.next, c),
        h = We(b, i).prev();
    if (!Af.prototype.isPrototypeOf(h)) {
        var j = h,
            h = new Af(b, "<barline/>");
        h.pb = j.pb;
        h.Ab = j.Ab;
        h.prev = j
    }
    e += fk(a, h, c, g ? l : i);
    g && (e += d.call(a, g, c));
    (function (a, b) {
        te(a, function (a) {
            var c = we(a) - 1;
            do {
                var d = a.children && 0 <= c && c < a.children.length ?
                    a.children[c] : f;
                if (Df.prototype.isPrototypeOf(d)) {
                    a = d.n;
                    c = b + a.La();
                    a.ud = c;
                    d.duration = a.La();
                    break
                }
            } while (0 <= --c);
            return l
        }, this)
    })(c, e)
}

function ik(a, b, c, d, e) {
    var d = d || [],
        e = e || new w,
        g = 0;
    b.forEach(function (a, b, m) {
        e.save();
        d[b] = this.$(a, c, d ? d[b] : f, e, b, m.length);
        g = e.restore()
    }, a);
    e.qb(g);
    return d
}

function jk(a, b, c, d) {
    var d = d || new w,
        e = 0;
    b.forEach(function (a, b) {
        d.save();
        hk(this, a, c[b]);
        e = d.restore()
    }, a);
    d.qb(e);
    return c
}

function fk(a, b, c, d, e) {
    b.k = 1;
    var g = 0,
        a = new dk(a.z),
        h = b.ba();
    if (h) {
        for (var h = h.pa(), j = 1; j <= h; ++j) b.k = j, c.save(), a.$(b, c, d, e), g = c.restore();
        c.qb(g)
    }
    b.k = 1;
    return g
}

function gk(a, b, c) {
    if (c) {
        for (var d = b.vd(), e = b.mc(i), g = e.length - 1; 0 <= g; --g) {
            var h = e[g],
                j = "staff_duration_p",
                j = j + b.Dc,
                j = h[j];
            if (0 <= j) {
                d -= j;
                d -= h.wb;
                break
            }
        }
        0 < d && (b.save(), b.ie(d), a = new ak(a.context), bk(a, c, a.zj, a.rj, b, d), b.restore())
    }
}

function kk() {
    kk.a.constructor.call(this, "LabelGroups")
}
u(kk, R);
kk.prototype.clone = function (a) {
    a = a || new kk;
    return kk.a.clone.call(this, a)
};

function lk(a) {
    if (0 < we(a)) {
        var b = 0;
        te(a, function (a) {
            b = Math.max(b, a.i("width"));
            return l
        }, a);
        te(a, function (a) {
            C(a, "width", b);
            return l
        }, a)
    }
}

function mk(a, b) {
    this.nb = a;
    this.uc = b
}

function nk(a, b, c) {
    function d(a, b) {
        return a ? a.map(function (a) {
            return a ? a.i("width") : 0
        }).reduce(function (a, b) {
            return Math.max(a, b)
        }, b) : b
    }
    ok(a, b, c);
    pk(a, b, c);
    b = d(a.xg, 0);
    b = d(a.dg, b);
    return b += qk(a, rk(a))
}
mk.prototype.t = function (a, b) {
    if (this.Oa === f || this.xl !== a)
        if (this.Oa = f, this.xl = a, this.nb && (this.Oa = new kk), sk(this, a), tk(this, a), this.Oa && lk(this.Oa), uk(this, a, b), vk(this, a, b), this.nb) {
            var c = 1 < this.nb.length ? i : l,
                d = l;
            c || (d = 1 < a.cb[this.nb[0].id].n.ba().pa() ? i : l);
            if (c || d) {
                var c = this.Oa,
                    e = this.nb,
                    d = this.Oa.i("width"),
                    g = wk(a, a.cb[e[0].id], xk),
                    e = wk(a, a.cb[e[e.length - 1].id], yk),
                    h = new Je;
                h.n = {
                    Ic: "regular"
                };
                h.Oe = 1;
                h.ld = Math.abs(e - g);
                F(h, "line", "x", d + 5);
                F(h, "line", "y", g);
                c.o(h, l, l, 0, 0, "line")
            }
        }
    return this.Oa
};

function ok(a, b, c) {
    a.nb && 1 < a.nb.length && (a.xg = a.nb.map(function (a) {
        if (a = c ? a.getName() : a.Sf()) {
            var e = new T("right", "middle", 5);
            Ie(e, a, "Serif 12 Bold", b);
            return e
        }
    }, a))
}

function sk(a, b) {
    a.xg && a.xg.forEach(function (a, d) {
        if (a) {
            var e = this.Oa,
                g = b.cb[this.nb[d].id],
                h = a.i("height"),
                g = wk(b, g, zk) - 0.5 * h;
            F(a, "line", "x", 0);
            F(a, "line", "y", g);
            e.o(a, l, l, 0, 0, "line")
        }
    }, a)
}

function pk(a, b, c) {
    a.uc && (a.dg = a.uc.map(function (a) {
        if (a = c ? a.Jh : a.Sf()) {
            var e = new T("left", "middle", 5);
            Ie(e, a, "Serif 12 Bold", b);
            return e
        }
    }))
}

function tk(a, b) {
    a.dg && a.dg.forEach(function (a, d) {
        if (a) {
            var e = this.Oa,
                g = this.uc[d],
                h = wk(b, b.cb[g.nf.id], xk),
                g = wk(b, b.cb[g.Wd.id], yk);
            F(a, "line", "x", 0);
            F(a, "line", "y", 0.5 * (g + h));
            e.o(a, l, l, 0, 0, "line")
        }
    }, a)
}

function rk(a) {
    return a.uc ? a.uc.map(function (a) {
        return a.k
    }, a).reduce(function (a, c) {
        return Math.max(a, c)
    }, 1) : 1
}

function qk(a, b) {
    return 10 * (rk(a) - b)
}

function uk(a, b, c) {
    if (a.uc) {
        var d = a.Oa.i("width");
        a.uc.forEach(function (a) {
            var g = this.Oa,
                h = d + qk(this, a.k);
            if ("none" !== a.Fd) {
                var j = fc(kc(c)),
                    m = b.cb[a.nf.id],
                    p = wk(b, m, xk),
                    q = wk(b, b.cb[a.Wd.id], yk),
                    q = Math.abs(q - p),
                    a = a.m(j, q);
                ch(m, q);
                F(a, "line", "x", h);
                F(a, "line", "y", p);
                g.o(a, l, l, 0, 0, "line")
            }
        }, a)
    }
}

function vk(a, b, c) {
    if (a.nb) {
        var d = a.Oa.i("width");
        a.nb.forEach(function (a) {
            var g = this.Oa,
                h = d + qk(this, rk(this)),
                a = b.cb[a.id],
                j = a.n.ba(),
                m = j.jb();
            if (j && m) {
                var p = j.ma(m.rf),
                    q = j.ma(m.me);
                if (p !== f && q !== f && p !== q) {
                    var p = V(p, p.fa),
                        q = V(q, 1),
                        x = fc(kc(c)),
                        m = m.m(x, Math.abs(p - q));
                    m !== f && (j = V(j.ma(j.pa()), 1), a = wk(b, a, xk), F(m, "line", "x", 0 < h ? h - m.i("width") : h), F(m, "line", "y", a + (q - j)), g.o(m, l, l, 0, 0, "line"))
                }
            }
        }, a)
    }
}

function Ak(a) {
    this.context = a
}
Ak.prototype.$ = function (a, b, c, d) {
    if (!a) return b;
    a.forEach(function (a, g) {
        var h = b[g] || new ah,
            j = 0;
        te(h, function (a) {
            j = Math.max(j, a.i("width"));
            return l
        }, this);
        var m = (c ? Math.min(d, 1.7 * j) : d ? d : 1.7 * j) - j,
            p = a.ka("beam");
        p && Bk(this, p, h, m);
        (p = a.ka(/beam|lyric/, i)) && Bk(this, p, h, m);
        if (p = a.ka("lyric")) p = Ck(this, p, h, m), Bk(this, p, h, m)
    }, this);
    return b
};

function Bk(a, b, c, d) {
    b.forEach(function (a) {
        var b = wg.prototype.isPrototypeOf(a),
            h = Hg.prototype.isPrototypeOf(a),
            j = Wf.prototype.isPrototypeOf(a),
            m = pi.prototype.isPrototypeOf(a),
            p = a.r(),
            q = p[0].O();
        if (b || h) {
            var x = p[0].rb();
            if ("TAB" === x.T) return;
            q += 1;
            x = p[0].ba().Eb(q);
            if (!x || "TAB" !== x.T) return
        }
        q = dh(c, q, l);
        a.af(q, d);
        var A = a.m(this.context),
            D = (j || m) && 1 === p.length && !a.ended ? i : l;
        A.da = (j || m) && a.Vc ? 0 : p[0].t().da;
        Bf.prototype.isPrototypeOf(a) || (D ? (a.Ke = i, j = q.mc(i), A.Bc = j[j.length - 1].wb) : A.Bc = p[p.length - 1].t().da);
        b && (j = A.i("width"), m = A.i("height"), A.dd({
            e: 0.5 * -j,
            c: 0.5 * -m,
            f: 0.5 * j,
            d: 0.5 * m
        }));
        if (b || h) b = x, h = (h = Jh(a.Ad(), "string")) && h[0].text ? Number(h[0].text) : 1, x = A.P(), b = mh(b, h) + x.c, F(A, "staff", "y", b);
        A.yb = new Ph;
        A.yb.Nb = d;
        q.o(A, l, l, vf(a, q, d), 0, "staff")
    }, a)
}

function Ck(a, b, c, d) {
    var e = [];
    b.forEach(function (a) {
        var b = a.r()[0].O();
        e[b - 1] = e[b - 1] || [];
        e[b - 1].push(a)
    }, a);
    return e.map(function (a, b) {
        var e = b + 1;
        composed = f;
        a.forEach(function (a) {
            var b = composed = composed || new Ej(e);
            b.Qa = b.Qa || [];
            b.Qa.push(a);
            b.Pe = b.Pe || 1;
            b.Pe = Math.max(b.Pe, a.la())
        });
        composed && Fj(composed, dh(c, e, l), d);
        return composed
    }, a)
}

function Dk() {
    Dk.a.constructor.call(this)
}
u(Dk, Ee);
wb(Dk);
Dk.prototype.toString = r("Renderer.System");
Dk.prototype.clone = function (a) {
    a = a || new Dk;
    return Dk.a.clone.call(this, a)
};
var yk = 1,
    zk = 2,
    xk = 3;

function wk(a, b, c) {
    var d = 0;
    te(a, function (a) {
        if (0 === c || c === yk || c === zk) d += a.i("height");
        if (a === b) {
            if (c === yk) d -= bh(b);
            else if (c === xk) {
                var a = d,
                    g;
                g = b.n.ba();
                g = V(g.ma(g.pa()), 1) - E(b, "staff", "y");
                d = a + g
            } else if (c === zk) {
                a = d;
                g = bh(b);
                var h, j = b.n.ba();
                h = j.ma(1);
                j = j.ma(j.pa());
                h = V(h, h.fa) - V(j, 1);
                d = a - (g + 0.5 * h)
            }
            return i
        }
        if (4 === c || c === xk) d += a.i("height");
        return l
    }, a);
    return d
}

function Ek(a) {
    this.li = a.map(function (a) {
        return We(a)
    });
    this.M = 0
}
Ek.prototype.S = function () {
    return this.M < (this.Mb ? this.Mb.length : 0) ? i : Fk(this)
};
Ek.prototype.next = function () {
    return this.M < (this.Mb ? this.Mb.length : 0) ? this.Mb[this.M++] : Gk(this)
};

function Fk(a) {
    return a.li.every(function (a) {
        return a.S()
    })
}

function Gk(a) {
    var b = a.li.map(function (a) {
        return a.next()
    });
    a.Mb = a.Mb || [];
    a.Mb.push(b);
    ++a.M;
    return b
}
Ek.prototype.Tb = function () {
    return 0 < this.M
};
Ek.prototype.prev = function () {
    return this.Mb[--this.M]
};

function Hk(a) {
    this.z = a
}
Hk.prototype.$ = function (a, b, c) {
    b.forEach(function (b, e) {
        eh(b);
        c = c || new Dk;
        var g = c,
            h = a[e].id;
        g.cb = g.cb || {};
        g.cb[h] === f && (g.cb[h] = b, b.Ue = i, g.o(b, l, l, 0, 0))
    }, this);
    return c
};

function Ik(a) {
    this.context = a
}

function Jk(a, b, c) {
    this.source = a;
    this.Pa = b;
    this.context = c;
    this.ef = $e(a).reverse();
    this.Sh = new mk(this.ef, a.Zf());
    this.ng = new ek(this.context);
    this.sl = new Ak(this.context);
    a = kc(this.context);
    this.Ai = new Hk(fc(a));
    this.Zc = new rf;
    this.gc = new Ek(this.ef);
    this.M = 0
}

function Kk(a, b) {
    var c = b,
        d = a.Sh.t(b, a.context);
    d && (c = new R("SystemWithLabels"), c.o(d, l, l, 0, 0, "line"), F(b, "line", "x", c.i("width")), F(b, "line", "y", 0), c.o(b, i, i, 0, 0, "line"));
    return c
}
s = Jk.prototype;
s.S = function () {
    return this.M < (this.Zb ? this.Zb.length : 0) ? i : this.gc.S()
};
s.next = function () {
    return this.M < (this.Zb ? this.Zb.length : 0) ? this.Zb[this.M++] : this.lg()
};
s.lg = function () {
    var a = new Dk;
    this.he = this.he || 0;
    for (var b = 0, c = nk(this.Sh, this.context, !this.gc.Tb()), d = nf(this.Pa, this.Zc) - c, e = i, g = f, h = f, j = f; this.gc.S();) {
        g = h;
        h = this.gc.next();
        this.pe = this.pe || h.map(function () {
            return new Hj
        }, this);
        var m = this.Ai.$(this.ef, ik(this.ng, h, e, f)).i("width"),
            b = b + 1.6 * m;
        if (b > d) {
            this.gc.prev();
            this.gc.Tb() || (e = "score-div's width is not enough,", e += " at least ", e += Math.ceil(b + c + 50), e += " please!", aa(Error(e)));
            h = g;
            break
        }
        j = ik(this.ng, h, e, j, a);
        e = l;
        h.forEach(function (a, b) {
            for (var c =
                this.pe[b], d = We(a); d.S();) {
                child_element = d.next();
                W.prototype.isPrototypeOf(child_element) && c.Gc(child_element);
                if (Hh.prototype.isPrototypeOf(child_element)) {
                    var e = c,
                        g = child_element;
                    Kj = Kj || [Cj, Wh];
                    xf(e, Kj, g)
                } else zf.prototype.isPrototypeOf(child_element) && (e = c, g = child_element, Jj = Jj || [Sh, ai, bi, mj, ci, jj, Ih, lj, tj, Th, wj, di, Uh], xf(e, Jj, g));
                Af.prototype.isPrototypeOf(child_element) && (e = c, g = child_element, Lj = Lj || [ai, bi, Ei, sj, Og], xf(e, Lj, g))
            }
        }, this)
    }
    j ? (j = jk(this.ng, h, j, a), b = !this.gc.S(), j = this.sl.$(this.pe,
        j, b, d), this.pe.forEach(function (a) {
        a.reset()
    }), a = this.Ai.$(this.ef, j, a), j = a.i("width"), b ? C(a, "width", Math.min(d, 1.7 * j)) : C(a, "width", d), a = Kk(this, a), this.he += a.i("height"), this.he > of(this.Pa, this.Zc) && sf(this.Zc), this.Zb = this.Zb || [], this.Zb.push(a), ++this.M) : a = f;
    return a
};
s.Tb = function () {
    return 0 < this.M
};
s.prev = function () {
    return this.Zb[--this.M]
};
Ik.prototype.$ = function (a, b) {
    return new Jk(a, b, this.context)
};

function Lk(a) {
    this.context = a
}

function Mk(a, b, c, d) {
    this.source = a;
    this.context = d;
    this.Zc = new rf;
    this.Pa = b;
    this.Yd = c;
    this.ga = "page";
    this.M = 0
}
s = Mk.prototype;
s.S = function () {
    return this.M < (this.Wb ? this.Wb.length : 0) ? i : this.Yd.S()
};
s.next = function () {
    return this.M < (this.Wb ? this.Wb.length : 0) ? this.Wb[this.M++] : this.lg()
};
s.lg = function () {
    var a = new tf(this.Zc);
    C(a, "width", this.Pa.zd());
    C(a, "height", this.Pa.Be());
    F(a, this.ga, "x", 0);
    F(a, this.ga, "y", 0);
    var b = new S("TopMargin");
    C(b, "height", lf(this.Pa, a, "top"));
    b.Ue = i;
    F(b, this.ga, "x", 0);
    a.o(b, l, l, 0, 0, this.ga, i);
    (new qf(this.context)).$(this.Pa, a, i);
    Nk(this, a);
    this.Pa.di = Hb(a, "height") - a.Ya("height") - lf(this.Pa, a, "bottom");
    for (b = 0; this.Yd.S();) {
        var c = this.Yd.next(),
            b = b + 5,
            b = b + c.i("height");
        if (b > of(this.Pa)) {
            this.Yd.prev();
            this.Yd.Tb() || (c = "score-div's height is not enough,",
                c += " at least ", c += Math.ceil(b + 50), c += " please!", aa(Error(c)));
            break
        }
        F(c, this.ga, "x", lf(this.Pa, a, "left"));
        a.o(c, l, l, 5, 0, this.ga, i)
    }
    b = new S("BottomMargin");
    C(b, "height", lf(this.Pa, a, "bottom"));
    b.Ue = i;
    F(b, this.ga, "x", 0);
    a.o(b, l, l, 0, 0, this.ga);
    (new qf(this.context)).$(this.Pa, a);
    sf(this.Zc);
    this.Wb = this.Wb || [];
    this.Wb.push(a);
    ++this.M;
    return a
};
s.Tb = function () {
    return 0 < this.M
};
s.prev = function () {
    return this.Wb[--this.M]
};

function Nk(a, b) {
    var c = new pf(a.context),
        d = hf(a.source);
    d && d.forEach(function (a) {
        c.$(a, b)
    }, a)
}
Lk.prototype.$ = function (a, b) {
    b || (b = new jf(this.context, a), b.ui(this.context.kb()), b.ti(this.context.Xa()), kf(b, "top"), kf(b, "left"), kf(b, "right"), kf(b, "bottom"));
    var c = (new Ik(this.context)).$(a, b);
    return new Mk(a, b, c, this.context)
};

function Ok(a, b, c, d) {
    this.context = b;
    this.pf = c;
    this.Oc = d;
    var e = this;
    zip.workerScriptsPath || aa(Error("ScoreLibrary.Inflater(): set zip.workerScriptsPath first!"));
    zip.createReader(new zip.BlobReader(Pk(a)), function (a) {
        Qk(e, a)
    }, function (a) {
        e.Oc.call(e.context, a)
    })
}

function Pk(a) {
    for (var b = a.length, c = new Uint8Array(b), d = 0; d < b; ++d) c[d] = a.charCodeAt(d) & 255;
    a = new zip.BlobBuilder;
    a.append(c.buffer);
    return a.getBlob("application/vnd.recordare.musicxml")
}

function Qk(a, b) {
    b.getEntries(function (b) {
        var d = f;
        b.some(function (a) {
            return "META-INF/container.xml" === a.filename ? (d = a, i) : l
        }) && d.getData(new zip.TextWriter, function (d) {
            Rk(a, b, d)
        })
    })
}

function Rk(a, b, c) {
    if ((c = Zd(new I, new $d(c)).Bg) && 0 < c.length && ("application/vnd.recordare.musicxml+xml" === c[0].ei || "" === c[0].ei) && c[0].kh) {
        var d = c[0].kh,
            e = f;
        if (b.some(function (a) {
            return a.filename === d ? (e = a, i) : l
        })) {
            e.getData(new zip.TextWriter, function (b) {
                a.pf.call(a.context, $.parseXML(b))
            });
            return
        }
    }
    a.Oc.call(a.context, "ScoreLibrary.Inflater.callbackContainer(): invalid contents!")
}

function Sk(a, b, c, d) {
    this.bb = "object" === typeof a ? a.name : a;
    this.Jg = /.*\.mxl$/.test(this.bb) ? i : l;
    this.context = b;
    this.pf = c;
    this.Oc = d
}
Sk.prototype.Sg = function (a) {
    this.Jg ? new Ok(a, this.context, this.pf, this.Oc) : this.pf.call(this.context, a)
};

function Tk(a, b, c, d) {
    Tk.a.constructor.call(this, a, b, c, d);
    this.mb = a;
    this.load()
}
u(Tk, Sk);
Tk.prototype.load = function () {
    var a = new FileReader,
        b = this;
    a.onload = function (a) {
        b.Sg(a.target.result)
    };
    a.onerror = b.ec;
    a.readAsBinaryString(this.mb)
};
Tk.prototype.ec = function (a) {
    this.Oc.call(this.context, a)
};

function Uk(a, b, c, d) {
    Uk.a.constructor.call(this, a, b, c, d);
    this.load()
}
u(Uk, Sk);
Uk.prototype.load = function () {
    $.ajax({
        url: this.bb,
        type: "GET",
        mimeType: this.Jg ? "application/vnd.recordare.musicxml" : "application/vnd.recordare.musicxml+xml",
        dataType: this.Jg ? "mxl" : "xml",
        context: this,
        success: this.Sg,
        error: this.ec
    })
};
Uk.prototype.ec = function (a, b, c) {
    this.Oc.call(this.context, c)
};
$.ajaxSetup({
    contents: {
        xml: /.*musicxml\+xml$/,
        mxl: /.*musicxml$/
    },
    converters: {
        "text mxl": i
    }
});
$.ajaxPrefilter("mxl", function (a) {
    a.mimeType = "text/plain; charset=x-user-defined"
});

function Vk(a, b, c, d) {
    this.ic = a;
    this.Cb = $("<canvas/>");
    this.Cb.css({
        position: "absolute",
        left: 0,
        top: 0
    });
    this.Cb.appendTo(this.ic);
    this.jc = new lc(this.Cb);
    this.gj = kc(this.jc);
    this.z = fc(this.gj);
    Yb(this.z);
    this.bb = this.ic.attr("musicxml_ref") || "";
    this.mb = b;
    this.Wc = c ? i : l;
    this.Bl = d ? i : l;
    this.Kb || (this.Wc ? (this.Kb = this.ic.prev(".ui-dialog-titlebar"), this.Kb.css({
        padding: "0px"
    })) : (this.Kb = $("<span></span>", {
        id: "toolbar",
        "class": "ui-widget-header ui-corner-all"
    }), this.Kb.css({
        position: "absolute",
        display: "none",
        right: 0,
        bottom: 0,
        "font-family": "'Trebuchet MS', 'Arial', '''Helvetica', 'Verdana', 'sans-serif'",
        padding: "0px 4px"
    }), this.Kb.appendTo(this.ic)), this.Wc ? Wk(this, "go_url_btn_node", {
        id: "go_url_btn",
        text: this.bb
    }, {
        icons: {
            secondary: "ui-icon-refresh"
        }
    }, this.Qg) : (Wk(this, "open_file_btn_node", {
        id: "open_file_btn",
        text: "Open local MusicXML"
    }, {
        text: l,
        icons: {
            primary: "ui-icon-folder-collapsed"
        }
    }, this.Ti), Xk(this, "go_url_input_node", {
            id: "go_url_input",
            type: "text",
            value: this.bb,
            size: 30,
            maxlength: 256
        }, {
            "font-size": "1.1em"
        },
        this.Kb), Wk(this, "go_url_btn_node", {
        id: "go_url_btn",
        text: "Refresh"
    }, {
        text: l,
        icons: {
            primary: "ui-icon-refresh"
        }
    }, this.Qg)), Wk(this, "page_1st_btn_node", {
        id: "page_1st_btn",
        text: "Goto First Page"
    }, {
        text: l,
        icons: {
            primary: "ui-icon-arrowthickstop-1-w"
        },
        disabled: i
    }, this.Ui), Wk(this, "page_prev_btn_node", {
        id: "page_prev_btn",
        text: "< Previous Page"
    }, {
        text: l,
        icons: {
            primary: "ui-icon-arrowthick-1-w"
        },
        disabled: i
    }, this.Xi), Wk(this, "page_next_btn_node", {
        id: "page_next_btn",
        text: "Next Page > "
    }, {
        text: l,
        icons: {
            primary: "ui-icon-arrowthick-1-e"
        },
        disabled: i
    }, this.Vi), Wk(this, "page_nth_btn_node", {
        id: "page_nth_btn",
        text: ""
    }, {
        text: l,
        icons: {
            primary: "ui-icon-arrowthickstop-1-e"
        },
        disabled: i
    }, this.Wi), this.Wc || Wk(this, "standalone_btn_node", {
        id: "standalone_btn",
        text: "Standalone Viewer"
    }, {
        text: l,
        icons: {
            primary: "ui-icon-newwin"
        }
    }, this.Yi));
    Yk(this)
}
ja("ScoreLibrary.ScoreDiv", Vk);

function Zk(a, b, c) {
    b = 0 <= b ? b : 0;
    a.Ve = a.Ve || [];
    var d = a.Ve[b];
    !d && c && (d = new lc($("<canvas/>")), d.resize(a.jc.kb(), a.jc.Xa()), kc(d).z = a.z, a.Ve[b] = d);
    return d
}
s = Vk.prototype;
s.kb = function () {
    return this.ic.width()
};
s.Xa = function () {
    return this.ic.height()
};

function $k(a, b) {
    a.data.He.call(a.data.Re, a, b)
}

function al(a, b, c) {
    (a = a[b]) && c && a.button("option", c)
}

function Xk(a, b, c, d, e) {
    var g = a[b];
    g || (g = $("<input></input>", c), g.css(d), g.appendTo(e), a[b] = g)
}

function Wk(a, b, c, d, e) {
    var g = {}, h = a[b];
    h || (h = $("<button></button>", c), h.css(g), h.button(d), h.appendTo(a.Kb), e && h.click({
        Re: a,
        He: e
    }, $k), a[b] = h)
}

function bl(a, b, c, d, e, g, h) {
    var j = a[b];
    j || (j = $("<div></div>", c), e && j.bind("dialogcreate", {
        Re: a,
        He: e
    }, $k), g && j.bind("dialogresizestop", {
        Re: a,
        He: g
    }, $k), h && j.bind("dialogclose", {
        Re: a,
        He: h
    }, $k), a[b] = j, j.dialog(d));
    j.dialog("open")
}

function cl(a) {
    if (a.Ja.S()) {
        var b = a.Ja.M || 0,
            c = a.Ja.next(),
            d = Zk(a, b);
        d === f && (d = Zk(a, b, i), c.wa({
            width: c.i("width"),
            height: c.i("height")
        }), c.p(d));
        b = a.jc;
        b.clear();
        b.drawImage(d, 0, 0);
        a.Ja.prev()
    }
}

function dl(a) {
    a.Ja.next();
    var b = a.Ja.S();
    a.Ja.prev();
    return b
}

function el(a) {
    var b = a.Ja.Tb();
    al(a, "page_prev_btn_node", {
        disabled: !b
    });
    al(a, "page_1st_btn_node", {
        disabled: !b
    });
    b = dl(a);
    al(a, "page_next_btn_node", {
        disabled: !b
    });
    al(a, "page_nth_btn_node", {
        disabled: !b
    })
}


s.Qg = function () {
    al(this, "go_url_btn_node", {
        disabled: i
    });
    this.go_url_input_node && (this.bb = this.go_url_input_node.prop("value"));
    fl(this);
    Yk(this)
};
s.Yi = function () {
    bl(this, "standalone_dialog_node", {
        id: "standalone_dialog"
    }, {
        modal: l,
        autoOpen: l,
        position: ["center", "center"],
        width: this.kb(),
        minWidth: this.kb(),
        height: "auto",
        minHeight: this.Xa()
    }, this.aj, this.bj)
};
s.aj = function () {
    this.mf || (this.mf = new Vk(this.standalone_dialog_node.attr({
        musicxml_ref: this.bb
    }).css({
        padding: "0px",
        width: this.kb(),
        height: this.Xa()
    }), this.mb, i))
};
s.bj = function () {
    this.mf && Yk(this.mf)
};

function fl(a) {
    var b = a.standalone_dialog_node;
    b && b.dialog("close");
    delete a.mf;
    delete a.standalone_dialog_node
}
s.Ui = function () {
    for (; this.Ja.Tb();) this.Ja.prev();
    cl(this);
    el(this)
};
s.Xi = function () {
    this.Ja.prev();
    cl(this);
    el(this)
};
s.Vi = function () {
    this.Ja.next();
    cl(this);
    el(this)
};
s.Wi = function () {
    for (; this.Ja.S();) this.Ja.next();
    this.Ja.prev();
    cl(this);
    el(this)
};
s.i = function (a) {
    return this[a]
};

function gl(a) {
    a.ac && (a.ac.remove(), delete a.ac)
}
s.Rg = function (a) {
    try {
        var b = this.kb(),
            c = this.Wc ? this.Xa() : this.Xa() - this.Kb.outerHeight();
        this.jc.resize(b, c);
        delete this.Ve;
        this.source = new Ye(a);
        this.sj = new Lk(this.jc);
        this.Ja = this.sj.$(this.source);
        if (this.Wc || this.Bl || dl(this)) this.Wc || this.Kb.css("display", "block");
        cl(this);
        el(this)
    } catch (d) {
        this.ec(d)
    }
    gl(this);
    al(this, "go_url_btn_node", {
        disabled: l
    })
};
s.ec = function (a) {
    gl(this);
    aa(a)
};

function Yk(a) {
    a.jc.clear();
    if (!a.ac) {
        a.ac = $("<img/>", {
            src: "",
            alt: "musicxml loading..."
        });
        var b = 0.5 * (a.kb() - a.ac.prop("width")),
            c = 0.5 * (a.Xa() - a.ac.prop("height"));
        a.ac.css({
            position: "absolute",
            left: b,
            bottom: c
        })
    }
    a.ac.appendTo(a.ic);
    "object" === typeof (a.mb ? a.mb : a.bb) ? new Tk(a.mb ? a.mb : a.bb, a, a.Rg, a.ec) : new Uk(a.mb ? a.mb : a.bb, a, a.Rg, a.ec)
}
$(function () {
    $(".score-div").map(function () {
        return new Vk($(this))
    }).get()
});
>>>>>>> 9031d3c23deac831772602b12fcdb9ce8e90e548
/*
 This file is part of
 score-library <http://www.musicxml-viewer.com>.
 author & contact: XiongWenjie (navigator117 at gmail.com)
 score-library is free software:
 you can redistribute it and/or modify it under the terms of the
 GNU General Public License as published by the Free Software Foundation,
 either version 3 of the License, or (at your option) any later version.

 score-library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 See the GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with score-library.
 If not, see <http://www.gnu.org/licenses>.
*/
