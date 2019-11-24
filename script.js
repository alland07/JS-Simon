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
let valide = true;
let suivant;
let apparait;




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

    computer = [];
    player = [];
    suivant =0;
    tour = 1;
    apparait = 0;
    for (let i = 0; i < 8 ;i++){
        computer.push(Math.trunc(1 + Math.random()*4));
        console.log(computer);
    }
    compTour = true;
    suivant = setInterval(Joueur,1000);
}

//------------------------------ Au tour du joueur--------------------------------

function Joueur (){
    if (apparait == tour) {
        compTour = false;
        clearInterval(suivant);

      }

      $avousdejouer.style.display="block";
      setTimeout(function changement(){
        $avousdejouer.style.display="none";  
    }, 500);

    
      if (compTour) {
        setTimeout(function() {
          if (computer[apparait] == 1) Rouge();
          if (computer[apparait] == 2) Bleu();
          if (computer[apparait] == 3) Vert();
          if (computer[apparait] == 4) Jaune();
          apparait++;
        }, 200);
      }
}

//--------------------------- Quand c'est au joueur  , ce qu'il se passe quand il appuie sur le bouton rouge-----

redbtn.addEventListener('click', (event) => {
    if (compTour) {
      player.push(1);
      Rouge();
      Verif();
    }
})

// Pareil pour le bleu
bluebtn.addEventListener('click', (event) => {
    if (compTour) {
      player.push(2);
      Bleu();
      Verif();
    }
})

// Le vert
greenbtn.addEventListener('click', (event) => {
    if (compTour) {
      player.push(3);
      Vert();
      Verif();
    }
})

//Le jaune
yellowbtn.addEventListener('click', (event) => {
    if (compTour) {
      player.push(4);
      Jaune();
      Verif();
    }
})

console.log(player);
function Verif() {
    if (player[player.length - 1] !== computer[player.length - 1])
      valide = false;
  
    if (player.length == 8 && valide) {
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
      apparait = 0;
      counttour.innerHTML = turn;
      suivant = setInterval(gameTurn, 800);
    }
  
}

//---------------------------------------On gagne----------------------------------------------------

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