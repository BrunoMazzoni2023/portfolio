// Array de URLs das imagens que deseja exibir em sequência
const imagens = [

    // Adicione mais URLs de imagens, se necessário
];

// Índice da imagem atual
let indiceImagemAtual = 0;

// Função para trocar a imagem exibida
function trocarImagem() {
    const imagemExibida = document.getElementById('image');
    imagemExibida.src = imagens[indiceImagemAtual];

    // Atualizar o índice para a próxima imagem
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
}

// Definir o intervalo para trocar a imagem a cada 3 segundos (3000 milissegundos)
const intervaloImagens = setInterval(trocarImagem, 1000);







var bindSpaceKey = function(anchor) {  
    anchor.addEventListener('keyup', function(event) {
        if (event.keyCode == 32) { anchor.click(); }
    })
}
var anchorButtons = document.querySelectorAll('a[role="button"]');  
for ( var i = 0; i < anchorButtons.length; i++ ) {  
    bindSpaceKey( anchorButtons[i] );
}












function ativaLetra(elemento){
const arrayTexto = [elemento.innerHTML.split('')]
console.log(arrTexto)
}


const titulo = document.querySelector('.digitando');