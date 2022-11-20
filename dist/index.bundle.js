(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),i=t.n(r),c=t(645),o=t.n(c)()(i());o.push([e.id,"body {\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 230px;\n}\n\n.menu-container {\n    display: grid;\n    grid: 1fr 1fr / 1fr 1fr;\n    gap: 20px;\n}\n\n.menutile > h3 {\n    margin: 0;\n}\n\n.menutile {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    align-items: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.9);\n    text-align: center;\n    padding: 25px 10px;\n    border-radius: 15px;\n    width: 250px;\n}\n\n.contact-info > img {\n    height: 400px;\n    width: 550px;\n}\n\n.menutile:hover {\n    background-color: darkslategrey;\n}\n\n.menutile > p {\n    width: 75%;\n    text-align: center;\n}\n\n.maincopy {\n    background-color: rgba(0, 0, 0, 0.7);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 40px 30px;\n    border-radius: 20px;\n}\n\n.maincopy > h1 {\n    color: white;\n    font-size: 40px;\n}\n\n.maincopy > p {\n    color: white;\n    font-size: 20px;\n    text-align: center;\n}\n\n.maincopy > img {\n    border-radius: 50%;\n    margin: 50px 0;\n}\n\n.homeDivider {\n    width: 30%;\n    height: 1px;\n    background-color: white;\n    margin: 30px 0;\n}\n\n.menuDivider {\n    width: 30%;\n    height: 1px;\n    background-color: white;\n    margin: 30px 0;\n}\n\n.tileDivider {\n    width: 2rem;\n    height: 1px;\n    background-color: white;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.phone, .email {\n    color: white;\n    font-size: 20px;\n}\n\n.email {\n    margin-bottom: 20px;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: max-content;\n    background-color: black;\n    color: white;\n    row-gap: 15px;\n    padding: 3rem 0;\n    width: 100%;\n}\n\nh1 {\n    margin: 0;\n    font-size: 50px;\n}\n\nnav {\n    display: flex;\n    gap: 15px;\n}\n\nnav > a {\n    color: white;\n    text-decoration: none;\n}\n\nfooter {\n    background-color: black;\n    padding: 15px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    color: white;\n    font-size: 15px;\n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,c){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&o[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},o=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],s=c[l]||0,u="".concat(l," ").concat(s);c[l]=s+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=i(p,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var c=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<c.length;o++){var a=t(c[o]);n[a].references--}for(var d=r(e,i),l=0;l<c.length;l++){var s=t(c[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}c=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},495:(e,n,t)=>{t.d(n,{g:()=>i});const r=t.p+"6ad00c9082ad38c4ecdc.png",i=()=>{const e=document.querySelector(".maincopy"),n=new Image;return n.src=r,{buildContact:()=>{e.innerHTML="",e.appendChild(document.createElement("h1")).innerHTML="CONTACT US",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","menuDivider"),e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[2].setAttribute("class","contact-info"),e.children[2].appendChild(document.createElement("div")).setAttribute("class","phone"),document.querySelector(".phone").innerHTML="Phone: 123-456-7890",e.children[2].insertAdjacentElement("beforeend",document.createElement("div")),document.querySelector(".contact-info").children[1].setAttribute("class","email"),document.querySelector(".contact-info").children[1].innerHTML="Email: contact@bigfredsbbq.com",e.children[2].insertAdjacentElement("beforeend",n)}}}},105:(e,n,t)=>{t.d(n,{b:()=>c});const r=t.p+"0510a935b52c8f668c51.jpg",i=t.p+"2f2a78b427bbd4a73129.jpg",c=()=>{const e=new Image;e.src=r;const n=e.src.match(/[^/]*$/g)[0],t=new Image;return t.src=i,{bImage:n,buildPage:()=>{(()=>{const e=document.body;e.style.backgroundImage=`url(./${n})`,e.style.backgroundSize="cover",e.style.backgroundPosition="center",e.style.backgroundAttachment="fixed"})(),(()=>{document.getElementById("content").appendChild(document.createElement("header")).appendChild(document.createElement("h1")),document.getElementsByTagName("h1")[0].innerHTML="BIG FRED'S BBQ",document.getElementsByTagName("header")[0].appendChild(document.createElement("nav"));const e=["Home","Menu","Contact"],n=document.getElementsByTagName("nav")[0];for(let t=0;t<e.length;t++){let r=n.appendChild(document.createElement("a"));r.innerHTML=e[t],r.setAttribute("class",e[t].toLowerCase()),r.setAttribute("href","")}})(),(()=>{const e=document.getElementById("content"),n=document.createElement("div");e.insertAdjacentElement("beforeend",n);const r=e.children[1];r.setAttribute("class","maincopy"),r.appendChild(document.createElement("h1")).innerHTML="HOME OF THE BEST BBQ",r.insertAdjacentElement("beforeend",document.createElement("div")),r.children[1].setAttribute("class","homeDivider"),r.insertAdjacentElement("beforeend",document.createElement("p")),r.children[2].innerHTML="Since 2020, Big Fred's BBQ became the go-to spot for mouth-watering BBQ. <br>\n        Stop by and try our delicious farm-to-table recipes that are <br> finger-lickin' good!",r.insertAdjacentElement("beforeend",t),r.insertAdjacentElement("beforeend",document.createElement("p")),r.children[4].innerHTML="Swing by to dine-in or call-in for take out"})(),(()=>{const e=document.getElementById("content");e.insertAdjacentElement("beforeend",document.createElement("footer")),e.children[2].innerHTML="Designed by Eddie Canvasser"})()}}}},39:(e,n,t)=>{t.d(n,{f:()=>r});const r=()=>{const e=document.querySelector(".maincopy");return{buildMenu:()=>{e.innerHTML="",e.appendChild(document.createElement("h1")).innerHTML="MENU",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","menuDivider"),(()=>{e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[2].setAttribute("class","menu-container");let n=["Chicken","Tri-tip","Ribs","Steak"];const t=document.querySelector(".menu-container");for(let e=0;e<n.length;e++)t.appendChild(document.createElement("div")).setAttribute("class",`${n[e].toLowerCase()} menutile`)})(),(()=>{const e=document.querySelector(".ribs");e.appendChild(document.createElement("h3")).innerHTML="RIB PLATTER",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","tileDivider"),e.insertAdjacentElement("beforeend",document.createElement("p")),e.children[2].setAttribute("class","tileText"),e.children[2].innerHTML="Slow-smoked ribs with a choice of two sides"})(),(()=>{const e=document.querySelector(".steak");e.appendChild(document.createElement("h3")).innerHTML="STEAK DINNER",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","tileDivider"),e.insertAdjacentElement("beforeend",document.createElement("p")),e.children[2].setAttribute("class","tileText"),e.children[2].innerHTML="Wood-fire grilled steak with mashed potatoes and green beans"})(),(()=>{const e=document.querySelector(".chicken");e.appendChild(document.createElement("h3")).innerHTML="CHICKEN DINNER",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","tileDivider"),e.insertAdjacentElement("beforeend",document.createElement("p")),e.children[2].setAttribute("class","tileText"),e.children[2].innerHTML="Zesty BBQ chicken over a bed of country potatoes and peppers"})(),(()=>{const e=document.querySelector(".tri-tip");e.appendChild(document.createElement("h3")).innerHTML="TRI-TIP SUPPER",e.insertAdjacentElement("beforeend",document.createElement("div")),e.children[1].setAttribute("class","tileDivider"),e.insertAdjacentElement("beforeend",document.createElement("p")),e.children[2].setAttribute("class","tileText"),e.children[2].innerHTML="Savory and tender tri-tip with a choice of 3 delicious sides"})()}}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),c=t(569),o=t.n(c),a=t(565),d=t.n(a),l=t(216),s=t.n(l),u=t(589),m=t.n(u),p=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=s(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var f=t(105),b=t(39),g=t(495);(0,f.b)().buildPage(),document.querySelector(".home").addEventListener("click",(e=>{(0,f.b)().setBackground(),e.preventDefault()})),document.querySelector(".menu").addEventListener("click",(e=>{(0,b.f)().buildMenu(),e.preventDefault()})),document.querySelector(".contact").addEventListener("click",(e=>{(0,g.g)().buildContact(),e.preventDefault()}))})()})();