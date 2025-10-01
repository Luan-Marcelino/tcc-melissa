const body = document.querySelector('body');
const cookie_esquerda = document.querySelector('.cookie-header-esquerda');
const cookie_direita = document.querySelector('.cookie-header-direita');



window.addEventListener('scroll', () => {
    const tamanhoY = window.scrollY;
    const tamanhoX = window.innerWidth;
    console.log(tamanhoX);
    
    if(tamanhoX > 480 && tamanhoY <= 250) {
        cookie_esquerda.style.transform = `translateX(${180 -tamanhoY}px) scale(1.5)`;
        cookie_direita.style.transform = `translateX(${-185 + tamanhoY}px) scale(1.5)`;
        
    }else if(tamanhoX <= 480 && tamanhoY <= 150) {//para mobile
        cookie_esquerda.style.transform = `translateX(${102 - tamanhoY}px) scale(1.7)`;
        cookie_direita.style.transform = `translateX(${-85 + tamanhoY}px) scale(1.7)`;
    }
    //console.log(tamanhoY);
    
});


//cores: https://colorhunt.co/palette/ffecc0ffc29bf39f9fb95e82