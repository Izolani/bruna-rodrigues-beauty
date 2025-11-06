let slide = document.getElementById("slide");

let images = [
    "img/depoimentos/depo1.jpg",
    "img/depoimentos/depo2.jpg",
    "img/depoimentos/depo3.jpg",
    "img/depoimentos/depo4.jpg",
    "img/depoimentos/depo5.jpg",
    "img/depoimentos/depo6.jpg",
    "img/depoimentos/depo7.jpg"
];

let index = 0;

function trocarImagem() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slide.src = images[index];
}

setInterval(trocarImagem, 3000);
