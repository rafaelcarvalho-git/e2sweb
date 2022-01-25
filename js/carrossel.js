//evento que vai disparar quando mexer a rolagem do mouse
document.querySelector("#items").addEventListener("wheel", event => {
    if(event.deltaY > 0){ /*move o carrossel apenas com a rolagem do mouse pra cima ou para baixo*/
        event.target.scrollBy(500, 0)
    } else {
        event.target.scrollBy(-500, 0)
    }
})