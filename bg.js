const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintIMage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandomNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number;
}

function init(){
    const randomNumber = genRandomNumber();
    paintIMage(randomNumber);
}

init();