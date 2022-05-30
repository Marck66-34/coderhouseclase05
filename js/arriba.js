window.onscroll= function(){
    if(document.documentElement.scrollTop >100);
   document.querySelector('.arriba-boton')
   .classList.add('show');
}else{
    document.querySelector('arriba-boton')
   .classList.add('show');
}
document.querySelector('.arriba-boton')
.addEventListener('click' )