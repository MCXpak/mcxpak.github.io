import{S as k,P as B,W as b,a as x,A as L,b as S,O as A,G as F,M as d,c as f,B as u,d as p}from"./vendor.128b9b9b.js";const G=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};G();const i=new k,c=new B(75,window.innerWidth/window.innerHeight,.1,1e3),a=new b({antialias:!0,canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);a.setClearColor(4061951);c.position.set(10,5,10);document.querySelector("#bg");window.addEventListener("resize",()=>{console.log(a),a.setSize(window.innerWidth,window.innerHeight)});const w=new x(16777215);w.position.set(5,20,5);const M=new L(16777215);i.add(w,M);const z=new S(w);i.add(z);const v=new A(c,a.domElement);function C(){const e=new u(1,1,1),o=new p({color:5018707});return new f(e,o)}function P(){const e=new u(1,1,1),o=new p({color:5780494});return new f(e,o)}function E(){const e=new u(1,1,1),o=new p({color:2431236});return new f(e,o)}function y(){const e=new u(1,1,1),o=new p({color:940088});return new f(e,o)}function O(){for(let e=0;e<10;e++)for(let o=0;o<10;o++){const t=C();t.position.set(e,1,o),i.add(t)}}function T(){for(let e=0;e<10;e++)for(let o=0;o<10;o++)for(let t=1;t<5;t++){const n=P();n.position.set(e,t-4,o),i.add(n)}}function H(){for(let e=0;e<4;e++){const o=E();o.position.set(7,e+2,3),i.add(o)}}function W(){for(let e=0;e<5;e++)for(let o=0;o<5;o++)for(let t=1;t<3;t++){const n=y();n.position.set(e+5,t+5,o+1),i.add(n)}for(let e=0;e<3;e++)for(let o=0;o<3;o++){const t=y();t.position.set(e+6,8,o+2),i.add(t)}}O();T();H();W();const l=new F;l.load("./low_poly_fireplace.glb",function(e){e.scene.position.set(3,1.55,6.5),i.add(e.scene)},void 0,function(e){console.error(e)});function j(){l.load("./cloud1.glb",function(e){const[o,t,n]=Array(3).fill().map(()=>d.randFloatSpread(-300,300));e.scene.position.set(o,t,n),i.add(e.scene)})}l.load("./cloud1.glb",function(e){const[o,t,n]=Array(3).fill().map(()=>d.randFloatSpread(300));e.scene.position.set(o,t,n),e.scene.rotation.x=o,e.scene.rotation.y=t,e.scene.rotation.z=n,i.add(e.scene)});l.load("./cloud3.glb",function(e){const[o,t,n]=Array(3).fill().map(()=>d.randFloatSpread(300));e.scene.position.set(o,t,n),i.add(e.scene)});l.load("./cloud3.glb",function(e){const[o,t,n]=Array(3).fill().map(()=>d.randFloatSpread(300));e.scene.position.set(o,t,n),i.add(e.scene)});Array(200).fill().forEach(j);function g(){const e=document.body.getBoundingClientRect().top;c.position.z=10+e*-.005,c.position.x=10+e*.001,c.position.y=5+e*-.001}document.body.onscroll=g;g();function h(){requestAnimationFrame(h),v.update(),a.render(i,c)}h();