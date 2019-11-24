const redbtn = document.querySelector('.rouge');
const bluebtn = document.querySelector('.bleu');
const yellowbtn = document.querySelector('.jaune');
const greenbtn = document.querySelector('.vert');
const $rules = document.querySelector('.modalRules');
const $do = document.querySelector('#audiodo');
const $re = document.querySelector('#audiore');
const $mi = document.querySelector('#audiomi');
const $fa = document.querySelector('#audiofa');
const $avousdejouer = document.querySelector('.Joueur');
const counttour = document.querySelector('.resultatTour');
const $modalfin = document.querySelector('.modalFin');

let computer = [];
let player = [];
let tour;
let compTour;
let nbr = 0;
let valide = true;
let suivant;
let to = false;
let appair;
let win = false;



//Compteur de clic
const $resultat = document.querySelector('.resultat');
let $compte = parseInt(Number($resultat.innerHTML));
redbtn.addEventListener('click', function (){
    $compte +=1;
    $resultat.innerHTML = $compte;
})
bluebtn.addEventListener('click', function (){
    $compte +=1;
    $resultat.innerHTML = $compte;
})
greenbtn.addEventListener('click', function (){ 
    $compte +=1;
    $resultat.innerHTML = $compte;
})
yellowbtn.addEventListener('click', function (){
    $compte +=1;
    $resultat.innerHTML = $compte;
})

//Ces 4 fonctions vont permettre de toggle afin d'avoir comme une animation
function Rouge() {
    redbtn.className='rouge2';
    setTimeout(function passer(){
        redbtn.className='rouge';  
    }, 1000);
    $do.play();

}
function Bleu() {
    bluebtn.className='bleu2';
    setTimeout(function passer2(){
        bluebtn.className='bleu';
    }, 1000);
    $re.play();
}
function Vert() {
    greenbtn.className='vert2';
    setTimeout(function passer3(){
        greenbtn.className='vert';
    }, 1000);
    $mi.play();
}
function Jaune() {
    yellowbtn.className='jaune2';
    setTimeout(function passer4(){
        yellowbtn.className='jaune';
    }, 1000);
    $fa.play();
}



// -----------------------------FONCION PLAY----------------------------------

function play(){

    win = false;
    computer = [];
    player = [];
    appair = 0;
    suivant =0;
    to = true;
    tour = 1;
    for (let i = 0; i < 8 ;i++){
        computer.push(Math.trunc(1 + Math.random()*4));
        console.log(computer);
    }
    compTour = true;
    suivant = setInterval(Joueur,1000);
}

//------------------------------ Au tour du joueur--------------------------------

function Joueur (){
    to=false;
    if (appair == tour) {
        clearInterval(suivant);
        compTour = false;
        on = true;
      }
      $avousdejouer.style.display="block";
    
      if (compTour) {
        setTimeout(function() {
          if (computer[appair] == 1) Rouge();
          if (computer[appair] == 2) Bleu();
          if (computer[appair] == 3) Vert();
          if (computer[appair] == 4) Jaune();
          appair++;
        }, 200);
      }
}

//--------------------------- Quand c'est au joueur  , ce qu'il se passe quand il appuie sur le bouton rouge
redbtn.addEventListener('click', (event) => {
    if (to) {
      computer.push(1);
      Rouge();
      Verif();
      if(!win) {
        setTimeout(() => {
        }, 300);
      }
    }
}
)

// Pareil pour le bleu
bluebtn.addEventListener('click', (event) => {
    if (to) {
      computer.push(2);
      Bleu();
      Verif();
      if(!win) {
        setTimeout(() => {
        }, 300);
      }
    }
})
// Le vert

greenbtn.addEventListener('click', (event) => {
    if (to) {
      computer.push(3);
      Vert();
      Verif();
      if(!win) {
        setTimeout(() => {
        }, 300);
      }
    }
})
//Le jaune


yellowbtn.addEventListener('click', (event) => {
    if (to) {
      computer.push(4);
      Jaune();
      Verif();
      if(!win) {
        setTimeout(() => {
        }, 300);
      }
    }
})

function Verif() {
    if (player[player.length - 1] !== order[player.length - 1])
      valide = false;
  
    if (player.length == 1 && valide) {
      gagne();
    }
  
    if (valide == false) {
      setTimeout(() => {
        counttour.innerHTML = tour;
    })}
  
    if (turn == player.length && valide && !win) {
      tour++;
      player = [];
      compTour = true;
      appair = 0;
      counttour.innerHTML = turn;
      suivant = setInterval(gameTurn, 800);
    }
  
}



function gagne() {
    $modalfin.style.display = "block";
    $modalfin.innerHTML = "WIN!";
    to = false;
    win = true;
  }
//-------------------------------------------------FONCTION RESTART-----------------------------------------------
function recommencer(){
    play();
}


//---------------------------------------------------Le modal----------------------------------------
function rules(){
    $rules.style.display="block";
}
function Close(){
    $rules.style.display="none";
}