$(document).ready(function(){

    // quando clicar no icon menu de navegação, ira remover
    // a classe menu e inserir o a classe do icon X de navegação.

    $('.fa-bars').click(function() { 
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    // se clicar no icon do menu e abrir a navegação e mecher
    // no scroll automaticamente ira remover o menu e escondelo
    // voltando na possição start.

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');
        




        // Quando o scroll não estiver na possição 0 ele vai remover
        // o border-radius e colocar um width de 100% colando no topo
        // da pagina quando a mesma não estiver mais na possição start.

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
            }else{
                $('header').removeClass('header-active');
            }
    })
})