import{S as k,F as y,P as B,W as h,a as L,A as b,b as x,O as F,G,M as l,B as d,c as f}from"./vendor.985c7b03.js";const M=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};M();const i=new k;i.fog=new y(4061951,1,50);const c=new B(75,window.innerWidth/window.innerHeight,.1,1e3),a=new h({antialias:!0,canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);a.setClearColor(4061951);c.position.set(10,5,10);const m=new L(16777215);m.position.set(5,20,5);const P=new b(16777215);i.add(m,P);const v=new x(m);i.add(v);const C=new F(c,a.domElement);function A(){const e=new d(1,1,1),o=new f({color:5018707});return new l(e,o)}function O(){const e=new d(1,1,1),o=new f({color:5780494});return new l(e,o)}function S(){const e=new d(1,1,1),o=new f({color:2431236});return new l(e,o)}function p(){const e=new d(1,1,1),o=new f({color:940088});return new l(e,o)}function T(){for(let e=0;e<10;e++)for(let o=0;o<10;o++){const t=A();t.position.set(e,1,o),i.add(t)}}function j(){for(let e=0;e<10;e++)for(let o=0;o<10;o++)for(let t=1;t<5;t++){const s=O();s.position.set(e,t-4,o),i.add(s)}}function D(){for(let e=0;e<4;e++){const o=S();o.position.set(7,e+2,3),i.add(o)}}function E(){for(let e=0;e<5;e++)for(let o=0;o<5;o++)for(let t=1;t<3;t++){const s=p();s.position.set(e+5,t+5,o+1),i.add(s)}for(let e=0;e<3;e++)for(let o=0;o<3;o++){const t=p();t.position.set(e+6,8,o+2),i.add(t)}}T();j();D();E();const H=new G;H.load("/low_poly_fireplace.glb",function(e){e.scene.position.set(3,1.55,6.5),i.add(e.scene)},void 0,function(e){console.error(e)});function w(){const e=document.body.getBoundingClientRect().top;c.position.z=10+e*-.005,c.position.x=10+e*.001,c.position.y=5+e*-.001}document.body.onscroll=w;w();function g(){requestAnimationFrame(g),C.update(),a.render(i,c)}g();
