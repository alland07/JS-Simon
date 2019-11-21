const redbtn = document.querySelector('.rouge');
const bluebtn = document.querySelector('.bleu');
const yellowbtn = document.querySelector('.jaune');
const greenbtn = document.querySelector('.vert');
const $rules = document.querySelector('.modalRules');

//Ces 4 fonctions vont permettre de toggle afin d'avoir comme une animation

function Rouge() {
    redbtn.className='rouge2';
    setTimeout(function passer(){
        redbtn.className='rouge';
    }, 260);
}
function Bleu() {
    bluebtn.className='bleu2';
    setTimeout(function passer2(){
        bluebtn.className='bleu';
    }, 260);
}
function Vert() {
    greenbtn.className='vert2';
    setTimeout(function passer3(){
        greenbtn.className='vert';
    }, 260);
}
function Jaune() {
    yellowbtn.className='jaune2';
    setTimeout(function passer4(){
        yellowbtn.className='jaune';
    }, 260);
}



// Cette fonction va executer le jeu: c'est la fonction principale du jeu

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


}


//fonction restart Quand on a perdu.
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
