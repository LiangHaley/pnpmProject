(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"5ZrT":function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("lFyj");function c(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],m=i[1],d=Object(a["useState"])(!1),s=c(d,2),f=s[0],E=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){m(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},UTvZ:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),l=n("D2G6"),o=n("Il19"),c=n("zJrY"),i=n("5ZrT"),u=r.a.memo((e=>{var t=e.demos,n=t["useunmount-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useunmount"},r.a.createElement(l["AnchorLink"],{to:"#useunmount","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useUnmount"),r.a.createElement("p",null,"\u5728\u7ec4\u4ef6\u5378\u8f7d\uff08unmount\uff09\u65f6\u6267\u884c\u7684 Hook\u3002"),r.a.createElement("h2",{id:"demo"},r.a.createElement(l["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"demo")),r.a.createElement(o["default"],t["useunmount-demo1"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"useUnmount(fn: () => void)",lang:"typescript"}),r.a.createElement("h3",{id:"\u53c2\u6570"},r.a.createElement(l["AnchorLink"],{to:"#\u53c2\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u7ec4\u4ef6\u5378\u8f7d\u65f6\u6267\u884c\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"() => void")),r.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},lFyj:function(e,t,n){}}]);