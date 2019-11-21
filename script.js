const redbtn = document.querySelector('.rouge');
const bluebtn = document.querySelector('.bleu');
const yellowbtn = document.querySelector('.jaune');
const greenbtn = document.querySelector('.vert');
const $rules = document.querySelector('.modalRules');

//Ces 4 fonctions vont permettre de toggle afin d'avoir comme une animation

function Rouge() {
    redbtn.classList.toggle('rouge2');
}
function Bleu() {
    bluebtn.classList.toggle('bleu2');
}
function Vert(){
    greenbtn.classList.toggle('vert2');
}
function Jaune(){
    yellowbtn.classList.toggle('jaune2');
}



// Cette fonction va executer le jeu: c'est la fonction principale du jeu

function play(){
    //Génération de chiffre entre 1 et 4 afin que le programme sache quelle couleur allumé
function generateur(){
    return Math.trunc(1 + Math.random()*4);
}

generateur();
console.log(generateur());
let $generator = generateur();


if (generateur()==1){
    Rouge();
}
else if (generateur()==2){
    Bleu();
}
else if (generateur()==3){
    Vert();
}
else if (generateur()==4){
    Jaune();
}
else{
    console.log('Error');
}

}


//Le modal
function rules(){
    $rules.style.display="block";
}
function Close(){
    $rules.style.display="none";
}
