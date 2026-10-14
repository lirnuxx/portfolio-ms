const deb=(f,t=300)=>{let h;return(...a)=>{clearTimeout(h);h=setTimeout(()=>f(...a),t)}};
(()=>{
const R=document.documentElement,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
try{const t=localStorage.getItem('ms-theme');if(t)R.setAttribute('data-theme',t)}catch(e){}
function count(el){
  const txt=el.textContent;if(still||/[A-Za-zÁ-ú]{5,}/.test(txt))return;
  const m=txt.match(/(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?/);if(!m)return;
  const dec=m[2]?m[2].length:0,to=parseFloat(m[1].replace(/\./g,'')+(m[2]?'.'+m[2]:''));
  if(!isFinite(to)||!to)return;
  const pre=txt.slice(0,m.index),post=txt.slice(m.index+m[0].length),t0=performance.now();
  const f=n=>n.toLocaleString('es-AR',{minimumFractionDigits:dec,maximumFractionDigits:dec});
  (function s(t){const p=Math.min(1,(t-t0)/800);el.textContent=pre+f(to*(1-Math.pow(1-p,3)))+post;if(p<1)requestAnimationFrame(s)})(t0);
}
const mo=new MutationObserver(ms=>ms.forEach(m=>m.target.querySelectorAll('.k strong').forEach(count)));
document.querySelectorAll('.kpis').forEach(k=>mo.observe(k,{childList:true}));
const tip=document.createElement('div');tip.className='tip';
const q='svg rect,svg circle';
document.addEventListener('pointerover',e=>{const el=e.target.closest&&e.target.closest(q);if(!el)return;
  const t=el.querySelector('title');if(t){el.dataset.tip=t.textContent;t.remove()}
  if(el.dataset.tip){tip.textContent=el.dataset.tip;tip.classList.add('on')}});
document.addEventListener('pointermove',e=>{if(tip.classList.contains('on')){tip.style.left=Math.max(8,Math.min(e.clientX+14,innerWidth-tip.offsetWidth-8))+'px';tip.style.top=(e.clientY+16)+'px'}});
document.addEventListener('pointerout',e=>{if(e.target.closest&&e.target.closest(q))tip.classList.remove('on')});
document.addEventListener('DOMContentLoaded',()=>{
  document.body.appendChild(tip);
  const b=document.getElementById('tema');
  b&&b.addEventListener('click',()=>{try{localStorage.setItem('ms-theme',R.getAttribute('data-theme'))}catch(e){}});
  const tl=document.querySelector('.tabs');if(!tl)return;
  tl.setAttribute('role','tablist');const bs=[...tl.querySelectorAll('button')];
  const sync=()=>bs.forEach(x=>{const on=x.classList.contains('on');x.setAttribute('role','tab');x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;const p=document.getElementById('tab-'+x.dataset.t);p&&p.setAttribute('role','tabpanel')});
  sync();tl.addEventListener('click',()=>setTimeout(sync));
  tl.addEventListener('keydown',e=>{const d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!d)return;const i=bs.findIndex(x=>x.classList.contains('on')),n=bs[(i+d+bs.length)%bs.length];n.click();n.focus();e.preventDefault()});
});
})();
