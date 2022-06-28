// paso por valor y paso por referencia

// los tipos primitivos tienen su paso por valor

let a = 'Juan';
let b = a;
console.log(b);
b = 'Carlos';
console.log(b);
console.log(a); // a mantiene el valor 'Juan' puesto que el paso es por valor

// los tipos compuestos (arrays y objetos) tienen un paso por referencia

let c = [1, 2, 3];
let d = c;
console.log(d);

d.push(4);
console.log(d);
console.log(c);

// romper el paso por referencia

// Concat 

let marcasEuropeas = ['VW', 'Renault', 'Audi'];

let marcasSeleccionadas = marcasEuropeas.concat();

marcasSeleccionadas.push('Toyota', 'Honda');

console.log(marcasEuropeas);
console.log(marcasSeleccionadas);

// Operador spread ... ECMA6

let marcasAsiaticas = [];
let marcasCoreanas = ['KIA', 'Hyundai'];
let marcasJaponesas = ['Toyota', 'Lexus'];

marcasAsiaticas = [...marcasCoreanas, ...marcasJaponesas];

console.log(marcasAsiaticas);
marcasAsiaticas.push('Subaru');
console.log(marcasAsiaticas);
console.log(marcasCoreanas);
console.log(marcasAsiaticas);