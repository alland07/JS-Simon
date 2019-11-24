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
const win = false;

let computer = [];
let player = [];
let tour;
let counttour = document.querySelector('.resultatTour');
let nbr = 0;
let valide = true;
let suivant;



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

    tour =1;
    for (let i =0; i<8 ;i++){
        computer.push(Math.trunc(1 + Math.random()*4));
        console.log(computer);
    }
    suivant = setInterval(Joueur,1000);
}

function Joueur (){

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
