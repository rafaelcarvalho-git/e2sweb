let time = 3300, /*tempo da transição em milisegundos*/
    currentImageIndex = 0, /*primeira imagem*/
    images = document /*onde estao as imagens*/
                .querySelectorAll("#slider img")
    max = images.length; /*maximo de imagens que serao utilizadas*/

function nextImage() { 
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= max)
        currentImageIndex = 0 /*reseta para a imagem inicial*/
    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => { /*executa uma funcao a cada time tempo*/
        // troca de imagem
        nextImage()
}, time)
}
window.addEventListener("load", start) /*quando janela for carregada, executa a start*/