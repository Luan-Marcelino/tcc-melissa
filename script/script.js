const body = document.querySelector('body');
const cookie_esquerda = document.querySelector('.cookie-header-esquerda');
const cookie_direita = document.querySelector('.cookie-header-direita');

window.addEventListener('scroll', () => {
    const tamanhoY = window.scrollY;
    
    while(tamanhoY <= 175) {
        cookie_esquerda.style.right = tamanhoY * 1 + 'px';
        cookie_direita.style.left = tamanhoY * 1.1 + 'px';
        break;        
    }
    
});

//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82