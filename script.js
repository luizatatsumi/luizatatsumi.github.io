// EDITE AQUI: substitua os cards demonstrativos pelos seus projetos reais.
const projects = [
 {title:'Identidade em movimento',category:'branding',label:'BRANDING / POSICIONAMENTO',art:'Branding<br>com propósito.',style:'art-one',description:'Espaço reservado para um projeto real de identidade, posicionamento ou reposicionamento de marca.'},
 {title:'Conteúdo com estratégia',category:'conteudo',label:'SOCIAL MEDIA / CONTENT',art:'Content<br>that connects.',style:'art-two',description:'Espaço reservado para apresentar uma estratégia editorial, uma série de conteúdos ou resultados de social media.'},
 {title:'Da ideia à campanha',category:'campanhas',label:'CAMPANHAS / CRIAÇÃO',art:'Think.<br>Create.<br>Connect.',style:'art-three',description:'Espaço reservado para uma campanha: briefing, conceito, peças produzidas e resultados.'},
 {title:'Experiências de marca',category:'campanhas',label:'SEEDING / ATIVAÇÕES',art:'Beyond<br>the screen.',style:'art-four',description:'Espaço reservado para ações de seeding, ativações presenciais ou experiências de marca.'}
];
const grid=document.getElementById('projectGrid');
const dialog=document.getElementById('projectDialog');
function renderProjects(filter='todos'){
 const visible=projects.filter(p=>filter==='todos'||p.category===filter);
 grid.innerHTML=visible.map(p=>`<button class="project-card" type="button" data-project="${projects.indexOf(p)}" aria-label="Abrir ${p.title}"><div class="project-art ${p.style}"><span>${p.art}</span><small>CONCEPT / PORTFOLIO</small></div><div class="project-meta"><div><small>${p.label}</small><h3>${p.title}</h3></div><span class="project-arrow" aria-hidden="true">↗</span></div></button>`).join('');
 grid.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(projects[Number(b.dataset.project)])));
}
function openProject(p){document.getElementById('dialogCategory').textContent=p.label;document.getElementById('dialogTitle').textContent=p.title;document.getElementById('dialogDescription').textContent=p.description;dialog.showModal()}
document.getElementById('dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');renderProjects(b.dataset.filter)}));
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
const progress=document.getElementById('progress');function updateProgress(){const h=document.documentElement;progress.style.width=(100*window.scrollY/Math.max(1,h.scrollHeight-innerHeight))+'%'}window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.section-top,.section-heading,.intro-grid,.timeline-item,.approach-grid>div').forEach(e=>e.classList.add('reveal'));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e))}
document.getElementById('year').textContent=new Date().getFullYear();renderProjects();
