(()=> {
'use strict';
const $ = id => document.getElementById(id);
const editors = {html:$('html'), css:$('css'), js:$('js')};
let active = 'html';
const names = {html:'index.html', css:'style.css', js:'script.js'};
const sample = {
 html: `<main class="card">
  <h1>Hello, JayakumarTech!</h1>
  <p>Your WebDev Toolbox is ready.</p>
  <button id="hello">Click me</button>
  <p id="message"></p>
</main>`,
 css: `body { margin:0; min-height:100vh; display:grid; place-items:center; font-family:system-ui,sans-serif; background:#eef4ff; }
.card { padding:2rem; border-radius:18px; background:white; box-shadow:0 12px 35px #1232; text-align:center; }
button { padding:.7rem 1rem; cursor:pointer; }`,
 js: `document.getElementById('hello').addEventListener('click', () => {
  document.getElementById('message').textContent = 'JavaScript is working!';
});`
};
function current(){return editors[active]}
function lines(){const n=current().value.split('\n').length;$('lineCount').textContent=n+' line'+(n===1?'':'s')}
function build(){
 const openScript='<scr'+'ipt>', closeScript='</scr'+'ipt>';
 return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+editors.css.value+'</style></head><body>'+editors.html.value+openScript+editors.js.value+closeScript+'</body></html>';
}
function run(){$('preview').srcdoc=build();$('previewState').textContent='Preview updated'}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{
 active=b.dataset.tab;
 document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));
 Object.entries(editors).forEach(([k,e])=>e.classList.toggle('hidden',k!==active));
 $('fileLabel').textContent=names[active];lines();
}));
Object.values(editors).forEach(e=>e.addEventListener('input',()=>{if(e===current())lines();$('previewState').textContent='Changes not run'}));
$('runTop').onclick=$('refresh').onclick=run;
$('sample').onclick=()=>{Object.entries(sample).forEach(([k,v])=>editors[k].value=v);lines();run()};
$('clear').onclick=()=>{current().value='';lines();$('previewState').textContent='Changes not run';current().focus()};
$('copy').onclick=async()=>{try{await navigator.clipboard.writeText(current().value);$('previewState').textContent='Copied '+names[active]}catch{$('previewState').textContent='Clipboard unavailable'}};
$('fullscreen').onclick=()=>{const f=$('preview');if(f.requestFullscreen)f.requestFullscreen()};
$('theme').onclick=()=>{document.body.classList.toggle('light');$('theme').textContent=document.body.classList.contains('light')?'☀ Theme':'☾ Theme'};
$('download').onclick=()=>{for(const [name,content] of [['index.html',build()],['style.css',editors.css.value],['script.js',editors.js.value]]){const a=document.createElement('a'),u=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));a.href=u;a.download=name;a.click();URL.revokeObjectURL(u)}$('previewState').textContent='Project files downloaded separately'};
$('year').textContent=new Date().getFullYear();
Object.entries(sample).forEach(([k,v])=>editors[k].value=v);
lines();run();
})();
