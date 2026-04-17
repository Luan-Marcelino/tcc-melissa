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

const txtSobreNos = [
    
    `<h2>Quem <span class="spam">Somos</span></h2>
    <p>A Cookie Holic transforma um produto simples em uma experiência de qualidade.</p>
    <p>Receitas equilibradas, ingredientes selecionados e processos bem definidos garantem consistência e padrão.</p>
    <p>Cookies desenvolvidos para entregar sabor, textura e apresentação alinhados a quem valoriza qualidade.</p>`
    ,
    
    `<h2>Nossa <span class="spam">Visão</span></h2>
    <p>Ser referência em cookies artesanais, com foco em padronização e posicionamento profissional</p>`
    ,
    
    `<h2>Nossos <span class="spam">Valores</span></h2>
    <p>Qualidade, padronização, compromisso com o cliente e melhoria contínua em todos os processos.</p>`
    
]

const container_fotos = document.querySelector('.img-slides');
const imagensSlides = document.querySelector('.img-slides img');
const container_info = document.querySelector('.info');
let indiceAtualImg = 0;
let indiceAtualTxt = 0;

carrossel();

setInterval(() => {
    // É UM LOOP : 0 = (0 + 1) % 3 === 1 ---> 1 = (1 + 1) % 3 === 2 || 2 = (2 + 1) % 3 === 0 
    indiceAtualImg = (indiceAtualImg + 1) % imgCarrossel.length;
    carrossel();
}, 13000)

setInterval(() => {
    indiceAtualTxt = (indiceAtualTxt + 1) % txtSobreNos.length;
    carrossel();
}, 13000)

function carrossel() {
    imagensSlides.src = imgCarrossel[indiceAtualImg];
    container_info.innerHTML = txtSobreNos[indiceAtualTxt];
    
}


//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82