// creo un array contenente le immagini

const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

//creo la versione javascript degli elementi html

let buttonUpEl = document.getElementById("btn-up");

let buttonDownEl = document.getElementById("btn-down");

let imageContainerEl = document.getElementById("image");

//creo un index

let index = 0;

//assegno l'index alla sorgente dell'immagine

imageContainerEl.src = images[index]

//genero il funzionamento del tasto su

buttonUpEl.addEventListener("click", function(){

    index++;
    
    if(index == 5) {
        index = 0
    }
    
    imageContainerEl.src = images[index]

});

//genero il funzionamento del tasto giu


buttonDownEl.addEventListener("click", function(){
    index--;

    if(index == -1) {
        index = 4
    }

    imageContainerEl.src = images[index]

});



