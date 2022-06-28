// operadores

// operando operador (unario)

// operando1 operador operando2 (binarios)

// operador ternario (ver mas adelante sintaxis)

let resultado = 6;
let factorCorreccion = 12;

let puntuacion = resultado - factorCorreccion;
console.log(puntuacion);

// el operador suma en el caso de tipos string los concatena

let nombre = 'Laura';
let mensaje = 'Hola';

mensaje = mensaje + nombre;

console.log(mensaje);

resultado = 10;
factorCorreccion = '3';

puntuacion = resultado + factorCorreccion;
console.log(puntuacion);

// * y /
let a = 10;
let b = 2;

resultado = a / b;

console.log(resultado);

// Valor NaN (not a number);

a = 'Hello';
resultado = a * b;
console.log(resultado);

// Resto % 

let ejemploResto = 13 % 2;
console.log(ejemploResto);

// incremento ++ (sumar una unidad al valor de la variable)

let c = 1;

console.log(c++); //Post incremento
console.log(c);

let d = 10;
console.log(++d); // preincremento

// decremento -- (resta una unidad) al valor de la variable

let e = 4;
console.log(--e);

// precedencia de operadores
// de derecha a izquierda

resultado = 12 + 3 * 8;
console.log(resultado);

// podemos usar parentesis para romper la precedencia de operadores

resultado = (12 + 3) * 8;
console.log(resultado);