// METODOS Y PROPIEDADES PARA ARRAYS

let frutas = ['Manzanas', 'Naranjas', 'Kiwis'];

//propiedades

console.log(frutas.length) // numero de elementos del array

// metodos mutables (modificables)

let frutaExtraida = frutas.pop(); // extra el ultimo elemento del array

console.log(frutaExtraida);
console.log(frutas);

frutas.push('Albaricoques', 'Fresas'); // añade uno o varios elementos al final del array
console.log(frutas);

frutas.shift(); // Extraer el primer elemento del array y desplazar a la izquierda el resto de elementos
console.log(frutas);

frutas.unshift('Platanos', 'Sandías');

console.log(frutas);

// Método splice para eliminar o sustituir elementos
// splice(indice, cantidad, elementos opcionales a sustituir)

frutas.splice(1, 2);

console.log(frutas);

frutas.splice(1,1);

console.log(frutas);

frutas.splice(1,2, 'Cerezas', 'Melones');

console.log(frutas);

frutas.push('Platanos');

frutas.splice(2, 0, 'Moras', 'Peras');

console.log(frutas);

frutas.sort();

console.log(frutas);

frutas.reverse();

console.log(frutas);

// los métodos en javascript se pueden encadenar

let marcaVehiculos = ['BMW', 'Dacia', 'Mercedes', 'VW', 'Seat', 'Audi', 'Renault'];

marcaVehiculos.sort().reverse();

console.log(marcaVehiculos);
