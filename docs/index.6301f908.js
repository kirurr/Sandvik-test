"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("form"),t=(document.getElementById("form-button"),document.querySelectorAll(".text"));function o(e){e.forEach((e=>e.classList.toggle("anim")))}function n(e){e.forEach((e=>e.classList.toggle("complete")))}function s(e){e.forEach((e=>e.classList.toggle("error")))}function r(e){e.parentElement.classList.add("_error"),e.parentElement.classList.add("_error-anim"),setTimeout(c,300,e)}function c(e){e.parentElement.classList.remove("_error-anim")}function l(e){e.parentElement.classList.remove("_error")}function a(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(c){c.preventDefault();let i=function(e){let t=0,o=document.querySelectorAll("._req");for(let e=0;e<o.length;e++){const n=o[e];l(n),n.classList.contains("_email")?a(n)&&(r(n),t++):""===n.value&&(r(n),t++)}return t}(),u=new FormData(e);if(0===i){o(t);let r=await fetch("send.php",{method:"POST",body:u});if(r.ok){"sended"===(await r.json()).message&&(e.reset(),n(t),setTimeout(o,1500,t),setTimeout(n,2e3,t))}else e.reset(),s(t),setTimeout(o,1500,t),setTimeout(s,2e3,t)}}));const i=[document.querySelector(".about-text-anim"),document.querySelector(".about-img-anim")],u=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("show-anim"),u.unobserve(e.target))}))}),{root:null,threshold:0,rootMargin:"-100px"});i.forEach((e=>{u.observe(e)}));const m=document.querySelectorAll(".panel"),d=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("show-anim"),d.unobserve(e.target))}))}),{root:null,threshold:0,rootMargin:"-100px"});m.forEach((e=>{d.observe(e)}));const g=document.querySelector(".hamburger-cover"),f=document.querySelector(".hamburger-menu-cover"),L=document.querySelectorAll(".hamburger-link"),h=document.querySelector(".lex-logo"),v=document.body;g.addEventListener("click",(function(){g.classList.toggle("open"),f.classList.toggle("open"),v.classList.toggle("open")})),h.addEventListener("click",(function(){g.classList.toggle("open"),f.classList.toggle("open"),v.classList.toggle("open")})),L.forEach((e=>e.addEventListener("click",(function(){g.classList.remove("open"),f.classList.remove("open"),v.classList.remove("open")}))))}));
//# sourceMappingURL=index.6301f908.js.map