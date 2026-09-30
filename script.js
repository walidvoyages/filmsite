
const scenes=[...document.querySelectorAll('.scene')];
const bar=document.getElementById('timelineBar');
const replay=document.getElementById('replay');

const durations=[
  4200, 5000, 5200, 4800, 5200, 3800,
  5200, 4200, 5200, 3500, 4500, 5000,
  4800, 5200, 3600, 5200, 4200, 5200
];

let idx=0, timer=null, shotTimer=null;

function typeText(el,text,speed=55){
  if(!el)return;
  el.textContent='';
  let i=0;
  const t=setInterval(()=>{
    el.textContent=text.slice(0,++i);
    if(i>=text.length)clearInterval(t);
  },speed);
}

function sceneSpecific(i){
  clearInterval(shotTimer);

  if(i===2){
    typeText(document.getElementById('hotelSearchText'),'Hotel à Hammamet • 2 adultes • 2 nuits',55);
  }

  if(i===6){
    typeText(document.getElementById('nameF'),'Chiheb Ben Salah',70);
    setTimeout(()=>typeText(document.getElementById('emailF'),'chiheb@email.com',60),700);
    setTimeout(()=>typeText(document.getElementById('phoneF'),'+216 55 123 456',60),1400);
    setTimeout(()=>typeText(document.getElementById('paxF'),'2 adultes',65),2100);
  }

  if(i===8){
    typeText(document.getElementById('ccNum'),'4242 4242 4242 4242',70);
    setTimeout(()=>typeText(document.getElementById('expF'),'10/29',70),1100);
    setTimeout(()=>typeText(document.getElementById('cvvF'),'***',100),1500);
  }

  if(i===13){
    typeText(document.getElementById('fromF'),'TUN — Tunis',65);
    setTimeout(()=>typeText(document.getElementById('toF'),'PAR — Paris',65),650);
    setTimeout(()=>typeText(document.getElementById('depF'),'18 Octobre 2026',60),1300);
    setTimeout(()=>typeText(document.getElementById('travF'),'1 Voyageur',60),1950);
  }
}

function animateBar(ms){
  bar.style.transition='none';
  bar.style.width='0';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    bar.style.transition=`width ${ms}ms linear`;
    bar.style.width='100%';
  }));
}

function show(i){
  idx=i;
  scenes.forEach((s,n)=>s.classList.toggle('active',n===i));
  sceneSpecific(i);
  clearTimeout(timer);
  animateBar(durations[i]);
  timer=setTimeout(()=>{
    if(i<scenes.length-1) show(i+1);
  },durations[i]);
}

replay.onclick=()=>show(0);
show(0);
