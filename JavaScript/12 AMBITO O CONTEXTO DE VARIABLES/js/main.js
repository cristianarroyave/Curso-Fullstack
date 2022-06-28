// AMBITO DE LAS VARIABLES Y CONSTANTES (DEPENDIENDO DE SU FORMA DE DECLARACION)

// variables declaradas con var
// el ambito será el de la funcion más próxima
 
var apellidos = 'López Pérez'; // ámbito global
var apellidos = 'Fernández'; // podemos (aun que sea mala practica) redeclarar variables

console.log(apellidos);

function setMayorEdad(edad) {
    if(edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
}

setMayorEdad(33);

// variables declaradas con let o const
// el ambito es el bloque más proximo de la variable

let ciudad = 'Barcelona'; // ambito global 
//let ciudad = 'Bogotá'; // no podemos redeclarar (error)

function setPuntuacion(puntuacion) {
    if(puntuacion >= 5) {
        let apto = true;
        console.log(apto)
    } else {
        let apto = false;
        console.log(apto);
    }
   // console.log(apto); devolverá error por que apto tiene el ámbito de su bloque
}

setPuntuacion(7);

// Variables declaradas sin palabras reservada
// el ámbito será siempre global con independencia de donde se declare

function areaTriangulo (a, b){
    area = .5 * a * b;
}

areaTriangulo(10, 20);

console.log(area);