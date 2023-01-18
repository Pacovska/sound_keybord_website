function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    
    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]
   
    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa')
        tecla.classList.remove('ativa')
    }
}