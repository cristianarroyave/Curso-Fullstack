$(document).ready(function(){
    // Cambio de header
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    // Menu Hamburguesa
    $('#burguer').click(function() {
        $('#burguer').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
        $('header').toggleClass('cerrado');
    })
    // Smooth Scroll
    $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})