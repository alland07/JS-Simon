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
let fonctionne;
let speed;




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
    }, 500);
    $do.play();

}
function Bleu() {
    bluebtn.className='bleu2';
    setTimeout(function passer2(){
        bluebtn.className='bleu';
    }, 500);
    $re.play();
}
function Vert() {
    greenbtn.className='vert2';
    setTimeout(function passer3(){
        greenbtn.className='vert';
    }, 500);
    $mi.play();
}
function Jaune() {
    yellowbtn.className='jaune2';
    setTimeout(function passer4(){
        yellowbtn.className='jaune';
    }, 500);
    $fa.play();
}



// -----------------------------FONCION PLAY----------------------------------

function play(){

    fonctionne = true;
    computer = [];
    player = [];
    suivant =0;
    tour = 1;
    speed = 1;
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

//--------------------------- Quand c'est au joueur  , ce qu'il se passe quand il appuie sur un des 4 boutons-----

redbtn.addEventListener('click', (event) => {
    if (fonctionne) {
      player.push(1);
      Verif();
      Rouge();
    }
})

// Pareil pour le bleu
bluebtn.addEventListener('click', (event) => {
    if (fonctionne) {
      player.push(2);
      Verif();
      Bleu();
    }
})

// Le vert
greenbtn.addEventListener('click', (event) => {
    if (fonctionne) {
      player.push(3);
      Verif();
      Vert();
    }
})

//Le jaune
yellowbtn.addEventListener('click', (event) => {
    if (fonctionne) {
      player.push(4);
      Verif();
      Jaune();
    }
})

console.log(player);

// ------------------------------------On compare toutes les infos------------------------------

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
  
    if (tour == player.length && valide) {
      tour++;
      player = [];
      compTour = true;
      apparait = 0;
      counttour.innerHTML = tour-1;
      suivant = setInterval(Joueur, 800);
      speed++;
    }
    if (tour == player.length && !valide) {
        $modalfin.innerHTML =" Vous avez perdu";
        $modalfin.style.display="block";
      }
  
}

//---------------------------------------On gagne----------------------------------------------------

function gagne() {
    $modalfin.style.display = "block";
    $modalfin.innerHTML = "Vous avez gagné";
    
  }
//-------------------------------------------------FONCTION RESTART-----------------------------------------------
function recommencer(){
    $modalfin.style.display="none";
    play();
}


//---------------------------------------------------Le modal----------------------------------------
function rules(){
    $rules.style.display="block";
}
function Close(){
    $rules.style.display="none";
}