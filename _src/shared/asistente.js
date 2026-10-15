// Asistente de preguntas frecuentes (respuestas predefinidas). Editar el objeto T para cambiar textos.
(()=>{
const A='<a href="#',L='" data-go>';
const T={
es:{title:"Asistente de Mateo",sub:"Preguntas frecuentes",open:"Abrir asistente",close:"Cerrar",
hi:"¡Hola! 👋 Soy el asistente del portfolio. Tocá una pregunta y te respondo al instante.",more:"¿Querés saber algo más?",
qa:[
["¿Quién es Mateo?","Mateo Scovenna es estudiante de Licenciatura en Informática y desarrollador Full-Stack junior, de Argentina. Se especializa en convertir planillas y datos desordenados en tableros interactivos que ayudan a tomar decisiones."],
["¿Qué proyectos hizo?","El destacado es un <b>panel de control de calidad</b> para un laboratorio de planta láctea. Además hay 3 demos: "+A+"demos"+L+"producción y OEE, no conformidades y CAPA, y ventas y stock</a>."],
["¿Cómo pruebo las demos?","Podés abrirlas online desde "+A+"demos"+L+"Más proyectos</a> con el botón <b>Abrir demo</b>. También podés bajar el .zip y ejecutarlo en Windows: arranca con un mini servidor en PowerShell, sin instalar nada."],
["¿Los datos son reales?","No. Los datos de las demos son ficticios y están hechos solo para mostrar cómo funcionan los tableros."],
["¿Qué tecnologías usa?","Frontend: HTML5, JavaScript, Tailwind CSS, React y Next.js. Datos y backend: Python, Flask, SQL, PostgreSQL y Prisma. En los proyectos también usa Chart.js, SheetJS, SVG y PowerShell. Mirá "+A+"habilidades"+L+"Habilidades</a>."],
["¿Qué tipo de problemas resuelve?","Procesos manuales o datos en Excel que cuesta analizar: los transforma en tableros con indicadores, tendencias, alertas y reportes exportables a PowerPoint y PDF."],
["¿Está disponible para trabajar?","Sí, figura como disponible para nuevos proyectos. Escribile desde "+A+"contacto"+L+"Contacto</a>."],
["¿Cómo lo contacto?","Por mail a <a href=\"mailto:mat.scvnna@gmail.com\">mat.scvnna@gmail.com</a>, por <a href=\"https://www.linkedin.com/in/mat-svn\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> o mirá su código en <a href=\"https://github.com/Lirnuxx\" target=\"_blank\" rel=\"noopener\">GitHub</a>."]]},
en:{title:"Mateo's assistant",sub:"Frequently asked questions",open:"Open assistant",close:"Close",
hi:"Hi! 👋 I'm the portfolio assistant. Tap a question and I'll answer right away.",more:"Want to know anything else?",
qa:[
["Who is Mateo?","Mateo Scovenna is a Computer Science student and junior Full-Stack developer from Argentina. He specializes in turning spreadsheets and messy data into interactive dashboards that support decision-making."],
["What projects has he built?","The featured one is a <b>quality control dashboard</b> for a dairy plant laboratory. There are also 3 demos: "+A+"demos"+L+"production and OEE, non-conformities and CAPA, and sales and stock</a>."],
["How do I try the demos?","You can open them online from "+A+"demos"+L+"More projects</a> with the <b>Open demo</b> button. You can also download the .zip and run it on Windows: it starts with a PowerShell mini server, no installs needed."],
["Is the data real?","No. The demo data is fictional and only meant to show how the dashboards work."],
["What technologies does he use?","Frontend: HTML5, JavaScript, Tailwind CSS, React and Next.js. Data and backend: Python, Flask, SQL, PostgreSQL and Prisma. His projects also use Chart.js, SheetJS, SVG and PowerShell. See "+A+"habilidades"+L+"Skills</a>."],
["What kind of problems does he solve?","Manual processes or Excel data that is hard to analyze: he turns them into dashboards with indicators, trends, alerts and reports exportable to PowerPoint and PDF."],
["Is he available for work?","Yes, he is listed as available for new projects. Write to him from "+A+"contacto"+L+"Contact</a>."],
["How can I contact him?","By email at <a href=\"mailto:mat.scvnna@gmail.com\">mat.scvnna@gmail.com</a>, on <a href=\"https://www.linkedin.com/in/mat-svn\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>, or check his code on <a href=\"https://github.com/Lirnuxx\" target=\"_blank\" rel=\"noopener\">GitHub</a>."]]}
};
const css=`#as-fab{position:fixed;right:20px;bottom:20px;z-index:90;width:56px;height:56px;border-radius:50%;border:0;cursor:pointer;background:var(--acc);color:var(--on-acc,#04202e);display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.35),0 0 0 6px var(--acc-glow);transition:transform .2s}
#as-fab:hover{transform:scale(1.07)}#as-fab svg{width:26px;height:26px}
#as-panel{position:fixed;right:20px;bottom:90px;z-index:91;width:360px;max-width:calc(100vw - 32px);height:min(540px,calc(100vh - 120px));display:none;flex-direction:column;background:var(--bg-card);color:var(--ink);border:1px solid var(--border-hover);border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,.45);overflow:hidden;font-family:var(--font-sans);font-size:14px;line-height:1.5}
#as-panel.on{display:flex;animation:as-in .22s ease-out}@keyframes as-in{from{opacity:0;transform:translateY(10px) scale(.97)}}
#as-panel .as-h{flex:none;display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border)}
#as-panel .av{width:34px;height:34px;border-radius:50%;background:var(--acc-glow);color:var(--acc);display:grid;place-items:center;font-size:16px;flex:none}
#as-panel .as-h div{flex:1}#as-panel .as-h b{display:block;font-size:14px}#as-panel .as-h small{color:var(--mute);font-size:12px}
#as-panel .as-h button{background:none;border:0;color:var(--mute);cursor:pointer;font-size:22px;line-height:1;padding:4px}
#as-msgs{flex:1;min-height:0;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
.as-m{max-width:88%;padding:9px 12px;border-radius:14px;animation:as-in .2s ease-out;word-wrap:break-word}
.as-b{background:var(--pill-bg);border:1px solid var(--border);align-self:flex-start;border-bottom-left-radius:4px}
.as-u{background:var(--acc);color:var(--on-acc,#04202e);font-weight:600;align-self:flex-end;border-bottom-right-radius:4px}
.as-m a{color:var(--acc);text-decoration:underline}.as-u a{color:inherit}
.as-t{display:flex;gap:4px;padding:12px}.as-t i{width:6px;height:6px;border-radius:50%;background:var(--mute);animation:as-d 1s infinite}.as-t i:nth-child(2){animation-delay:.15s}.as-t i:nth-child(3){animation-delay:.3s}@keyframes as-d{50%{transform:translateY(-4px);opacity:.4}}
#as-q{flex:none;padding:10px 12px 12px;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:6px;max-height:42%;overflow-y:auto}
#as-q button{font:inherit;font-size:12.5px;color:var(--ink);background:transparent;border:1px solid var(--border-hover);border-radius:999px;padding:6px 11px;cursor:pointer;text-align:left;transition:.15s}
#as-q button:hover,#as-q button:focus-visible{border-color:var(--acc);color:var(--acc);background:var(--acc-glow)}#as-q button[disabled]{opacity:.45}
@media(max-width:480px){#as-fab{right:14px;bottom:14px}#as-panel{right:16px;bottom:82px}}
@media(prefers-reduced-motion:reduce){#as-panel.on,.as-m{animation:none}.as-t i{animation:none}}`;
function init(){
  const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  let lang=document.documentElement.lang==="en"?"en":"es",asked=new Set(),busy=false;
  const $=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
  const fab=$("button","","<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z'/><path d='M9 11h.01M12 11h.01M15 11h.01'/></svg>");
  fab.id="as-fab";fab.type="button";fab.setAttribute("aria-expanded","false");
  const p=$("div");p.id="as-panel";p.setAttribute("role","dialog");
  const hd=$("div","as-h",'<span class="av" aria-hidden="true">✦</span><div><b></b><small></small></div>');
  const x=$("button","","&times;");x.type="button";hd.appendChild(x);
  const msgs=$("div");msgs.id="as-msgs";msgs.setAttribute("aria-live","polite");
  const q=$("div");q.id="as-q";
  p.append(hd,msgs,q);document.body.append(fab,p);
  const t=()=>T[lang];
  function add(cls,html){const m=$("div","as-m "+cls,html);msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;return m}
  function chips(){q.innerHTML="";t().qa.forEach(([qq],i)=>{const b=$("button","",qq);b.type="button";b.disabled=busy;b.onclick=()=>ask(i);q.appendChild(b)})}
  function ask(i){
    if(busy)return;busy=true;chips();
    add("as-u",t().qa[i][0]);
    const d=add("as-b as-t","<i></i><i></i><i></i>");
    setTimeout(()=>{d.className="as-m as-b";d.innerHTML=t().qa[i][1];
      msgs.scrollTop=msgs.scrollHeight;asked.add(i);busy=false;chips()},650);
  }
  function labels(){hd.querySelector("b").textContent=t().title;hd.querySelector("small").textContent=t().sub;
    fab.setAttribute("aria-label",t().open);x.setAttribute("aria-label",t().close);p.setAttribute("aria-label",t().title)}
  function reset(){msgs.innerHTML="";asked.clear();busy=false;labels();add("as-b",t().hi);chips()}
  const toggle=on=>{p.classList.toggle("on",on);fab.setAttribute("aria-expanded",on);if(on)q.querySelector("button")?.focus({preventScroll:true})};
  fab.onclick=()=>toggle(!p.classList.contains("on"));x.onclick=()=>{toggle(false);fab.focus()};
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&p.classList.contains("on"))x.onclick()});
  msgs.addEventListener("click",e=>{if(e.target.closest("[data-go]")&&innerWidth<=480)toggle(false)});
  addEventListener("ms-lang",e=>{lang=e.detail==="en"?"en":"es";reset()});
  reset();
}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();
})();
