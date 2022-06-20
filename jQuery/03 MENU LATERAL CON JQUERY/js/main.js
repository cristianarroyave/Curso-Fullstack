// Codigo JQuery siempre comienza con un metodo

$(document).ready(function() {
    $('#burguer').click(function() {
        $('#burguer').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
})

