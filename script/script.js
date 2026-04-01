const body = document.querySelector('body');
const cookie_esquerda = document.querySelector('.cookie-header-esquerda');
const cookie_direita = document.querySelector('.cookie-header-direita');



window.addEventListener('scroll', () => {
    const menu_fixo = document.querySelector('#home ul');
    const menu_opcoes = document.querySelectorAll('.menu-opcao');
    const tamanhoY = window.scrollY;
    console.log(tamanhoY);
    
    if(tamanhoY > 500) {
        menu_fixo.classList.add('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.add('pequeno-opcao'));
    }else {
        menu_fixo.classList.remove('pequeno');
        menu_opcoes.forEach(opcoes => opcoes.classList.remove('pequeno-opcao'));
    }
    
});


//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82