/* ===== MODO OSCURO ===== */
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => document.body.classList.toggle("dark");


/* ===== MENÚ HAMBURGUESA ===== */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.onclick = () => menu.classList.toggle("show");


/* ===== SLIDER ===== */
let index = 0;
const slides = document.querySelectorAll('.slide');
setInterval(()=>{
slides.forEach(s => s.classList.remove('active'));
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}, 3000);


/* ===== NOTICIAS DINÁMICAS ===== */
function getNoticias(){ return JSON.parse(localStorage.getItem('noticias')||'[]'); }
function saveNoticias(n){ localStorage.setItem('noticias', JSON.stringify(n)); }


const newsList = document.getElementById('newsList');
if(newsList){
getNoticias().forEach(n=>{
const c = document.createElement('div');
c.className='card';
c.innerHTML = `<h3>${n.titulo}</h3><p>${n.desc}</p>`;
newsList.append(c);
});
}


/* ===== CRUD ADMIN ===== */
function agregarNoticia(){
const titulo = document.getElementById('titulo').value;
const desc = document.getElementById('desc').value;
if(!titulo || !desc) return alert("Completa todos los campos");
const datos = getNoticias();
datos.push({titulo, desc});
saveNoticias(datos);
location.reload();
}