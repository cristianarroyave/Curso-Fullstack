// 1º forma de declarar objetos mediante literal

let jugador1 = {
    nombre: 'Sergio',
    apellidos: 'Ramos', // las propiedades son publicas
    dorsal: '4',
    goles: 0,
    equipos: ['Sevilla', 'Real Madrid'],
    marcarGol() {
        this.goles++;
    }
}

// Acceso a los miembros (notacion del punto)

console.log(jugador1.apellidos);

jugador1.marcarGol();

console.log(jugador1.goles);

jugador1.apellidos = 'Ramos Gonzalez';

console.log(jugador1.apellidos);

// 2º forma de declarar objetos con Object()

let jugador2 = new Object();

console.log(typeof jugador2);

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}

jugador2.marcarGol();

console.log(jugador2);

// 3º forma de declarar objetos mediante funcion constructora

function Jugador (nombreIn, apellidosIn, dorsalIn, golesIn) {
    this.nombre = nombreIn;
    this.apellidos = apellidosIn;
    this.dorsal = dorsalIn;
    this.goles = golesIn;
    this.esposa = 'Shakira';

    this.marcarGol = function () {
        this.goles++;
    }
}

// Podemos instanciar todos los objetos que necesitemos

let jugador3 = new Jugador('Rafael', 'Varane', '8', 0);
let jugador4 = new Jugador('Julio', 'Iglesias', '1', 0);

jugador3.marcarGol();

console.log(jugador3);

// 4º forma de declara objetos mediante factory functions

function Empleado (nombre, apellidos) {
    return {
        nombre, 
        apellidos
    }
}

let empleado1 = Empleado('Juan', 'López Pérez');
console.log(empleado1.nombre);


