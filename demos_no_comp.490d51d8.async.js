(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["e"])(),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setLeft,i=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"\u5f53\u524dstate \u7684\u503c\u4e3a:","".concat(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"toggle\u5207\u6362")),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:o},"setLeft\u5207\u6362")),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:i},"setRight\u5207\u6362")))}},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["e"])("HaleyLiang","LiangHaley"),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setLeft,i=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"\u5f53\u524dstate \u7684\u503c\u4e3a:","".concat(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"toggle\u5207\u6362")),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:o},"setLeft\u5207\u6362")),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:i},"setRight\u5207\u6362")))}},"K8z/":function(e,t,n){"use strict";(function(e){var a=n("YArd");function r(){var t="object"==("undefined"===typeof e?"undefined":typeof e)&&e&&e.Object===Object&&e,n="object"==typeof self&&self&&self.Object===Object&&self;return t||n}n.d(t,"a",(function(){return a["a"]})),r()||(e.Date=Date)}).call(this,n("e7Xt"))},OCTU:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],o=Object(c["c"])(n);return Object(r["useEffect"])((()=>{var e=setTimeout((()=>{l(o.current+1)}),1e3);return()=>clearInterval(e)}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"count:",n))}},VoNs:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["b"])("useCookieStatestr"),t=Object(a["a"])(e,2),n=t[0],r=t[1];return u.a.createElement("input",{value:n,placeholder:"Please enter code some words",onChange:e=>r(e.target.value),style:{width:300}})}},aQ7k:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");function l(){var e=Object(c["b"])("useCookieStateOptions",{defaultValue:"0",path:"/",expires:(()=>new Date(+new Date+1e4))()}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,n),u.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>r((e=>String(Number(e)+1)),{expires:(()=>new Date(+new Date+1e4))()})},"inc + (10s expires)"),u.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>r((e=>String(Number(e)-1)),{expires:(()=>new Date(+new Date+1e4))()})},"dec - (10s expires)"),u.a.createElement("button",{type:"button",onClick:()=>r("0")},"reset"))}},b2g7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");function l(){var e=Object(c["b"])("useCookieStateUpdater",{defaultValue:"0"}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,n),u.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)+1)))},"inc +"),u.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)-1)))},"dec -"),u.a.createElement("button",{type:"button",onClick:()=>r("0")},"reset"))}},eWij:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setTrue,i=r.setFalse;return u.a.createElement("div",null,u.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"Toggle"),u.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),u.a.createElement("button",{type:"button",onClick:o},"Set true")))}},qPJ8:function(e,t,n){"use strict";n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return S}));var a=n("iojd"),r=n("ahKI");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(r["useState"])(e),u=Object(a["a"])(n,2),c=u[0],l=u[1],o=Object(r["useMemo"])((()=>{var n=void 0===t?!e:t,a=()=>l((t=>t===e?n:e)),r=e=>l(e),u=()=>l(e),c=()=>l(n);return{toggle:a,setLeft:u,set:r,setRight:c}}),[]);return[c,o]}var c=u;function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=c(!!e),n=Object(a["a"])(t,2),u=n[0],l=n[1],o=l.toggle,i=l.set,s=Object(r["useMemo"])((()=>{var e=()=>i(!0),t=()=>i(!1);return{toggle:o,set:e=>i(!!e),setTrue:e,setFalse:t}}),[]);return[u,s]}var o=l;function i(e){var t=Object(r["useRef"])(e);return t.current=e,t}var s=i,b=e=>"function"===typeof e,f=e=>"string"===typeof e,m=!1,p=m;function d(e){p&&(b(e)||console.error("useUnmount expeacted parameter is a function, got ".concat(typeof e)));var t=s(e);Object(r["useEffect"])((()=>()=>{t.current()}),[])}var g=d;function E(e){p&&(b(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=Object(r["useRef"])(e);t.current=Object(r["useMemo"])((()=>e),[e]);var n=Object(r["useRef"])();return n.current||(n.current=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.current.apply(this,n)}),n.current}var v=E,j=n("G3cz"),y=n("J9RX"),O=n("hUD9"),h=n.n(O),C=["defaultValue"];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r["useState"])((()=>{var n=h.a.get(e);return f(n)?n:b(t.defaultValue)?t.defaultValue():t.defaultValue})),u=Object(a["a"])(n,2),c=u[0],l=u[1],o=v((function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(j["a"])(Object(j["a"])({},t),a),u=(r.defaultValue,Object(y["a"])(r,C)),o=b(n)?n(c):n;l(o),void 0===o?h.a.remove(e):h.a.set(e,o,u)}));return[c,o]}var S=k;n("K8z/")},tHpm:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setTrue,i=r.setFalse;return u.a.createElement("div",null,u.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"Toggle"),u.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),u.a.createElement("button",{type:"button",onClick:o},"Set true")))}},y7Gi:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("qPJ8"),u=n("EZs7"),c=n("ahKI"),l=n.n(c),o=()=>(Object(r["f"])((()=>{u["a"].info("unmount")})),l.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(r["a"])(!0),t=Object(a["a"])(e,2),n=t[0],u=t[1].toggle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:u},n?"unmount":"mount"),n&&l.a.createElement(o,null))}},yQWC:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8"),l=n("EZs7");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],i=Object(r["useCallback"])((()=>{l["a"].info("Current count is ".concat(n))}),[n]),s=Object(c["d"])((()=>{l["a"].info("Current count is ".concat(n))}));return u.a.createElement("div",null,u.a.createElement("p",null,"count:",n),u.a.createElement("button",{onClick:()=>o((e=>e+1))},"Add count"),u.a.createElement("div",{style:{marginTop:16}},u.a.createElement("button",{type:"button",onClick:i},"callbackFn"),u.a.createElement("button",{type:"button",onClick:s,style:{marginLeft:8}},"momoizedFn")))}},yoie:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("qPJ8");t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setTrue,i=r.setFalse;return u.a.createElement("div",null,u.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"Toggle"),u.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),u.a.createElement("button",{type:"button",onClick:o},"Set true")))}}}]);