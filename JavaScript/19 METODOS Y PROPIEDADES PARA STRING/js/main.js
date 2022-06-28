// Metodos y propiedades para string en JavaScript

// let nombre = new String('Juan');

let nombre = 'Juan';

console.log(nombre.length); // devuelve nº de caracteres del string

console.log(nombre.toLowerCase()); // devuelve el valor transformado a minisculas
console.log(nombre.toUpperCase()); // devuelve el valor transformado a mayusculas

console.log(nombre);

console.log(nombre.charAt(2)); // devolver el caracter de la posicion ( empieza en 0 )

console.log(nombre.indexOf('n')); // devuelve la posicion de la primera coincidencia
console.log(nombre.indexOf('x')); // devuelve -1 si no encuentra el caracter

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // devuelve la ultima de las posiciones
console.log(nombre.includes('nda')); // devuelve true o false si encuentra la cadena
console.log(nombre.startsWith('A')); // devuelve true o false si comienza por el caracter que le pasamos
console.log(nombre.endsWith('a')); // devuelve true o false si finaliza por el caracter que le pasamos
 
let apellidos = 'Pérez Gómez'

let nombreCompleto = nombre.concat(' ' + apellidos );

console.log(nombreCompleto);

let frase = '                      En un lugar de la Mancha               ';

console.log(frase.trim());

let password = '01234abcde';

console.log(password.slice(2, 5));  // devuelve el fragmento desde la primera posicion incluida 
                                    // hasta la segunda posicion excluida
console.log(password.slice(-2)); // pasando argumento negativo devuelve los n ultimos caracteres

