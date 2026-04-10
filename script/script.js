const menu_fixo = document.querySelector('#home ul');
const menu_opcoes = document.querySelectorAll('.menu-opcao');
const imgLogo = document.querySelector('.img-logo');

window.addEventListener('scroll', () => {
    const tamanhoY = window.scrollY;
    
    if(tamanhoY > 400) {
        imgLogo.classList.add('pequeno-logo');
        menu_fixo.classList.add('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.add('pequeno-opcao'));
    }else {
        menu_fixo.classList.remove('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.remove('pequeno-opcao'));
        imgLogo.classList.remove('pequeno-logo');
    }
});

//Carrossel de fotos do sobre nos

const imgCarrossel = [
    '/imagens/carrossel-img/carrossel1.avif',
    '/imagens/carrossel-img/carrossel2.avif',
    '/imagens/carrossel-img/carrossel3.jpg'
]

const container_fotos = document.querySelector('.img-slides');
const imagensSlides = document.querySelector('.img-slides img');

let indiceAtual = 0;

carrossel();

setInterval(() => {
    // É UM LOOP : 0 = (0 + 1) % 3 === 1 ---> 1 = (1 + 1) % 3 === 2 || 2 = (2 + 1) % 3 === 0 
    indiceAtual = (indiceAtual + 1) % imgCarrossel.length;
    carrossel();
}, 5000)

function carrossel() {
    imagensSlides.src = imgCarrossel[indiceAtual];
}
//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82