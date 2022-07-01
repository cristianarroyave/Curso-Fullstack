// tipos compuestos
// arrays 
// let identificador: <tipo-elemento>[]
// let identificador: Array<tipo-elemento>
var frutas;
var vehiculos;
frutas = ['peras', 'manzanas'];
// tipo any
var id = 2856; // romper la inferencia de tipos y permitirá cualquiera
id = 'mensaje';
// tipado de funciones (parametros y el retorno de la funcion pueden ser tipados)
function suma(a, b) {
    return a + b;
}
suma(4, 2);
// tipo void (en funciones que no devuelvan valores)
function setMensaje(mensaje) {
    console.log(mensaje);
    //return mensaje; devolveria error
}
// tipado generico en funciones ( se define el tipo en la invocacion de la función)
function retornoResultado(saludo) {
    return saludo;
}
retornoResultado('hola');
retornoResultado(4);
var a = retornoResultado('hola');
var b = retornoResultado(4);
var referencia;
referencia = 'A12313';
referencia = 2;
var razaToby;
razaToby = 'Pastor Alemán';
