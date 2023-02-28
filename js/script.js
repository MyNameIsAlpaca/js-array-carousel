// creo un array contenente le immagini

const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

//creo la versione javascript degli elementi html

let buttonUpEl = document.getElementById("btn-up");

let buttonDownEl = document.getElementById("btn-down");

let imageContainerEl = document.getElementById("image");

//creo un index

let index = 4;

//assegno l'index alla sorgente dell'immagine

imageContainerEl.src = images[index]

//creo versione javascript della thumbnailsContainer

let thumbnailsContainer = document.getElementById("thumbnailsContainer");

//genero img delle thumbnails

for (let i = 0; i < images.length; i++) {
    //creo elemento div
    let newThumbnailsImg = document.createElement("img");

    //aggiungo la classe

    newThumbnailsImg.classList.add("thumbnails");

    //aggiungo le immagini

    newThumbnailsImg.src = images[i]

    //lo metto figlio di thumbnailsContainer

    thumbnailsContainer.append(newThumbnailsImg)
}

//creo un array di thumbnails

let thumbnailsElements = document.querySelectorAll('.thumbnails');

//aggiungo la classe active

thumbnailsElements[index].classList.add("active")

//genero il funzionamento del tasto su

buttonDownEl.addEventListener("click", function(){
    
    index++;
    
    if(index == 5) {
        index = 0
        thumbnailsElements[4].classList.remove("active");
    } else {    
        thumbnailsElements[index - 1].classList.remove("active");
    }

    thumbnailsElements[index].classList.add("active")
    
    imageContainerEl.src = images[index]
    

});

//genero il funzionamento del tasto giu


buttonUpEl.addEventListener("click", function(){
    index--;

    if(index == -1) {
        index = 4
        thumbnailsElements[0].classList.remove("active");
    } else {    
        thumbnailsElements[index + 1].classList.remove("active");
    }

    thumbnailsElements[index].classList.add("active")

    imageContainerEl.src = images[index]

});




