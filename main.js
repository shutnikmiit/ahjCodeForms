!function(){var e={562:function(){!function(){var e=document.createElement("div");e.className="block",e.innerHTML='<div id="popover-block"></div>',e.innerHTML+='<button class="toggle-btn" id="popover-btn">Click to toggle popover</button>',document.body.appendChild(e);var t=document.getElementsByClassName("toggle-btn")[0],n=document.querySelector("#popover-block");t.addEventListener("click",(function(){if(t.classList.contains("toggle-btn")){var e=document.createElement("h3"),o=document.createElement("p");e.id="header",e.className="popover",e.title="Popover title",e.textContent="Popover title",o.id="text",o.className="popover",o.textContent="And here`s some amazing content. It`s very engaging. Right?",n.insertAdjacentElement("afterbegin",o),n.insertAdjacentElement("afterbegin",e),t.classList.toggle("toggle-btn"),n.style.position="absolute",n.style.left="37%",n.style.top="19%"}else{var r=document.querySelector("#header"),c=document.querySelector("#text");r.remove(),c.remove(),t.classList.toggle("toggle-btn")}}))}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(562)}()}();