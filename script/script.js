const body = document.querySelector('body');
const cookie_esquerda = document.querySelector('.cookie-header-esquerda');
const cookie_direita = document.querySelector('.cookie-header-direita');



window.addEventListener('scroll', () => {
    const menu_fixo = document.querySelector('#home ul');
    const menu_opcoes = document.querySelectorAll('.menu-opcao');
    const tamanhoY = window.scrollY;
    //console.log(tamanhoY);
    
    if(tamanhoY > 400) {
        menu_fixo.classList.add('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.add('pequeno-opcao'));
    }else {
        menu_fixo.classList.remove('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.remove('pequeno-opcao'));
    }
    
});


//Carrossel de fotos do sobre nos

const fotos = [
    '/imagens/carrossel-img/carrossel1.avif',
    '/imagens/carrossel-img/carrossel2.avif',
    '/imagens/carrossel-img/carrossel3.jpg'
]

const container_fotos = document.querySelector('.img-slides');
const imagensCriadas = document.querySelector('.img-slides img');

let contador = 0;

passarFotos(fotos);

setInterval(() => {
    passarFotos(fotos);
    contador++;  
}, 5000)

function passarFotos(fotos) {
    imagensCriadas.src = fotos[contador];
    

    if (contador >= fotos.length) {
        contador = 0;
        imagensCriadas.src = fotos[contador];
        
    }
}
//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82