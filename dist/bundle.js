(()=>{var e={923:()=>{document.querySelectorAll("[data-button=animate]").forEach((e=>{e.addEventListener("click",(e=>{const{nextElementSibling:t}=e.target;t.classList.add("JPs-animate")}))}))},377:()=>{document.querySelectorAll(".JPs-anim").forEach((e=>{!function(e){for(var t=e.innerText,r="",n=0;n<t.length;n++){var a=.1*n;" "===t.substring(n,n+1)?r+=t.substring(n,n+1):r+=`<span style="animation-delay: ${a}s">${t.substring(n,n+1)}</span>`}e.innerHTML=r}(e)}))},225:()=>{document.querySelectorAll("[data-button=reset]").forEach((e=>{e.addEventListener("click",(e=>{const{previousElementSibling:t}=e.target;t.classList.remove("JPs-animate")}))}))}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(377),r(923),r(225)})()})();