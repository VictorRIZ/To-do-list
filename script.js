var BotaoAdicionar = document.getElementById('adicionar')
var SobreBox = document.getElementById('sobre-box')
var write = document.getElementById('write')

BotaoAdicionar.addEventListener('click' , function(){
    var campo = document.createElement('p')
    campo.innerText = write.value;
    SobreBox.appendChild(campo);

})