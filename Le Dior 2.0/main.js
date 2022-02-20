const openpops = document.getElementById('openpop');
const closepops = document.getElementById('popclose');
const pops = document.getElementById('pop');
const openpops3 = document.getElementById('openpop3');
const closepops3 = document.getElementById('popclose3');
const pops3 = document.getElementById('pop3');

const audio = new Audio();
audio.src = "tuturu.mp3";

const audio1 = new Audio();
audio1.src = "dsa.m4a"

openpops.addEventListener('click', function(e){
  e.preventDefault();
  pops.classList.add('active');
})

closepops.addEventListener('click',() => {
  pops.classList.remove('active');
})

openpops3.addEventListener('click', function(e){
  e.preventDefault();
  pops3.classList.add('active');
})

closepops3.addEventListener('click',() => {
  pops3.classList.remove('active');
})


function mouseOver() {
  document.getElementById("pop").style.color = "red";
}

function mouseOut() {
  document.getElementById("pop").style.color = "black";
}

function myFunction() {
  document.getElementById("gara").style.backgroundColor = "black";
}
