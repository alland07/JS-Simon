const redbtn = document.querySelector('.rouge');
const bluebtn = document.querySelector('.bleu');
const yellowbtn = document.querySelector('.jaune');
const greenbtn = document.querySelector('.vert');
const $rules = document.querySelector('.modalRules');

//Ces 4 fonctions vont permettre de toggle afin d'avoir comme une animation

function Rouge() {
    redbtn.classList.toggle('.rouge2');
}
function Bleu() {
    bluebtn.classList.toggle('.bleu2');
}
function Vert(){
    greenbtn.classList.toggle('.vert2');
}
function Jaune(){
    yellowbtn.classList.toggle('.jaune2');
}
// Cette fonction va executer le jeu: c'est la fonction principale du jeu
function Execute(){
    let couleur = console.log(Math.trunc(1 + Math.random()*4));

    for(i=0;i<4;i++){
        if(couleur=1){
            Rouge();
        }
        else if(couleur=2){
            Bleu();
        }
        else if(couleur=3){
            Vert();
        }
        else if(couleur=4){
            Jaune();
        }
    }
    
}

function rules(){
    $rules.style.display="block";
}
function Close(){
    $rules.style.display="none";
}