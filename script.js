const redbtn = document.querySelector('.rouge');
const bluebtn = document.querySelector('.bleu');
const yellowbtn = document.querySelector('.jaune');
const greenbtn = document.querySelector('.vert');
const $rules = document.querySelector('.modalRules');
let tr = 0;
let nbr = 0;
const $do = document.querySelector('#audiodo');
const $re = document.querySelector('#audiore');
const $mi = document.querySelector('#audiomi');
const $fa = document.querySelector('#audiofa');



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
    }, 260);
    $do.play();
}
function Bleu() {
    bluebtn.className='bleu2';
    setTimeout(function passer2(){
        bluebtn.className='bleu';
    }, 260);
    $re.play();
}
function Vert() {
    greenbtn.className='vert2';
    setTimeout(function passer3(){
        greenbtn.className='vert';
    }, 260);
    $mi.play();
}
function Jaune() {
    yellowbtn.className='jaune2';
    setTimeout(function passer4(){
        yellowbtn.className='jaune';
    }, 260);
    $fa.play();
}



// -----------------------------FONCION PLAY----------------------------------

function play(){
    //Génération de chiffre entre 1 et 4 afin que le programme sache quelle couleur allumé
    function generateur(){
        let gen =  Math.trunc(1 + Math.random()*4);
        return gen;
    }
    let $generator = generateur();
    if ($generator==1){
        Rouge();
    }
    else if ($generator==2){
        Bleu();
    }
    else if ($generator==3){
        Vert();
    }
    else if ($generator==4){
        Jaune();
    }
    else{
        console.log('Erreur');
    }

    for (nbr<4;nbr++;){
        generateur();
    }



}


//-------------------------------------------------FONCTION RESTART-----------------------------------------------
function recommencer(){
    play();
}


//Le modal
function rules(){
    $rules.style.display="block";
}
function Close(){
    $rules.style.display="none";
}
