(() => {
'use strict';
const slides=window.KTR_SLIDES, $=id=>document.getElementById(id), params=new URLSearchParams(location.search);
const presenter=params.has('presenter'); let current=0, started=Date.now();
let channel; try { channel=new BroadcastChannel('ktr-jkp-'+location.pathname); } catch {}
const fromHash=()=>{const n=Number(location.hash.slice(1));return Number.isInteger(n)&&n>0?Math.min(n-1,slides.length-1):0};
slides.forEach((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=(i+1)+' / '+slides.length;$('jump').append(o)});
function show(index,broadcast=true){current=Math.max(0,Math.min(index,slides.length-1));const s=slides[current];$('section').textContent=s.section;$('title').textContent=s.title;$('points').replaceChildren(...s.points.map(x=>{const li=document.createElement('li');li.textContent=x;return li}));$('count').textContent=(current+1)+' / '+slides.length;$('progress').style.width=((current+1)/slides.length*100)+'%';$('prev').disabled=current===0;$('next').disabled=current===slides.length-1;$('jump').value=current;$('inline-notes').querySelector('p').textContent=s.notes;$('presenter-title').textContent=(current+1)+'. '+s.title.replaceAll('\n',' ');$('presenter-notes').textContent=s.notes;$('up-next').textContent=slides[current+1]?.title.replaceAll('\n',' ')||'Tamat pembentangan';history.replaceState(null,'','#'+(current+1));if(broadcast)channel?.postMessage({type:'slide',index:current});}
$('prev').onclick=()=>show(current-1);$('next').onclick=()=>show(current+1);$('jump').onchange=e=>show(Number(e.target.value));
async function fullscreen(){const stage=$('stage');if(stage.classList.contains('fallback')){stage.classList.remove('fallback');return}try{if(document.fullscreenElement)await document.exitFullscreen();else if(stage.requestFullscreen)await stage.requestFullscreen();else throw Error();}catch{stage.classList.toggle('fallback');$('status').textContent='Mod paparan besar digunakan. Tekan Esc untuk keluar.'}}
$('full').onclick=fullscreen;
function openPresenter(){const url=new URL(location.href);url.search='?presenter=1';url.hash=String(current+1);const popup=window.open(url.href,'ktr-presenter','width=1000,height=800');if(!popup)$('status').textContent='Benarkan tetingkap pop-up untuk paparan penyampai, kemudian cuba lagi.';}
$('present').onclick=openPresenter;
function notes(){const n=$('inline-notes');n.hidden=!n.hidden;$('notes').setAttribute('aria-pressed',String(!n.hidden));}
$('notes').onclick=notes;
$('reset').onclick=()=>{started=Date.now()};setInterval(()=>{const t=Math.floor((Date.now()-started)/1000);$('timer').textContent=String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0')},1000);
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(e.target.tagName))return;const key=e.key.toLowerCase();if(['arrowright','arrowdown',' ','pagedown'].includes(key)){e.preventDefault();show(current+1)}else if(['arrowleft','arrowup','pageup'].includes(key)){e.preventDefault();show(current-1)}else if(key==='home'){e.preventDefault();show(0)}else if(key==='end'){e.preventDefault();show(slides.length-1)}else if(key==='f'&&!presenter)fullscreen();else if(key==='n'&&!presenter)notes();else if(key==='p'&&!presenter)openPresenter();else if(key==='escape')$('stage').classList.remove('fallback');});
window.addEventListener('hashchange',()=>show(fromHash()));
if(channel)channel.onmessage=e=>{if(e.data.type==='slide'&&Number.isInteger(e.data.index))show(e.data.index,false);else if(e.data.type==='request'&&!presenter)channel.postMessage({type:'slide',index:current});};
$('print').onclick=()=>window.print();
document.querySelector('.controls').addEventListener('click',e=>{if(e.target.matches('button'))e.target.blur()});$('jump').addEventListener('change',e=>e.target.blur());
// Build a separate print-only view, including notes and every slide.
slides.forEach((s,i)=>{const el=document.createElement('section');el.className='print-slide';el.style.display='none';const h=document.createElement('h2');h.textContent=(i+1)+' / '+slides.length+' • '+s.section;const title=document.createElement('h1');title.textContent=s.title;const list=document.createElement('ul');s.points.forEach(t=>{const li=document.createElement('li');li.textContent=t;list.append(li)});const note=document.createElement('p');note.textContent='Nota penyampai: '+s.notes;el.append(h,title,list,note);document.body.append(el)});
const style=document.createElement('style');style.textContent='@media print{.print-slide{display:block!important}}';document.head.append(style);
if(presenter){document.body.classList.add('presenter');$('presenter').hidden=false;document.title='Penyampai • KTR JKP';}
show(fromHash(),false);if(presenter)channel?.postMessage({type:'request'});
})();
