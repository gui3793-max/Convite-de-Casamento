// Vetor com os nomes dos arquivos locais (certifique-se de que o nome está igual ao arquivo na pasta)
const imagens = [
    'url("1.jpeg")',
    'url("2.jpeg")',
    'url("3.jpeg")',
    'url("4.jpeg")'
];

let indiceAtual = 0;
const divFundo = document.getElementById('background-carousel');

// Inicializa a primeira imagem
divFundo.style.backgroundImage = imagens[0];

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    divFundo.style.backgroundImage = imagens[indiceAtual];
}

// Alterna a imagem a cada 5 segundos (5000ms)
setInterval(trocarImagem, 5000);