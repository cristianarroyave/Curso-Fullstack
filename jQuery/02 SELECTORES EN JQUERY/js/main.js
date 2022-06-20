// Codigo JQuery siempre comienza con un metodo

$(document).ready(function() {
    // Selector por ID
    $('#vg').hide(3000);
    // Selector mediante clase
    $('.escritores').css('font-size', '24px');
    // Selector mediante clase y posición
    $('.escritores:eq(2)').css('color', 'violet');
    // Selectores mediante una combinacion de selectores
    $('#directores li').addClass('cine');
})

