// metodos y propiedades para tipos Number

// Clase Math

// Redondeo

let puntuacion = 2.5;

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;

puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(puntuacion);
console.log(puntuacionRedondeada);

//Redondeo siempre a la baja

puntuacion = 9.7; 

puntuacionRedondeada = Math.floor(puntuacion);

console.log(puntuacionRedondeada);

// Redondeo al alza

puntuacion = 9.7; 

puntuacionRedondeada = Math.ceil(puntuacion);

console.log(puntuacionRedondeada);

// Random devolver un numero aleatorio entre 0 y 0.99999999999999;

let nombres = ['Juan', 'Sara', 'Carlos', 'Raquel'];


let nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];

console.log(nombreElegido);

// parseo de string a number

let resultado = '9.7' // tipo string

let resultadoParseado = parseFloat(resultado); // Convierte a number y mantiene la parte flotante

console.log(typeof resultadoParseado);

let resultadoEnteroParseado = parseInt(resultado);

console.log(typeof resultadoEnteroParseado);

// Parseo de number a string 

let resultado2 = 9;

let resultadoParseadoString = resultado2.toString();

console.log(typeof resultadoParseadoString);