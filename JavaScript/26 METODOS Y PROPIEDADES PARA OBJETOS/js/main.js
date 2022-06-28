// Métodos y propiedades para arrays de objetos

let jugadores = [
    {nombre: 'Maria', apellidos: 'Zuil', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 2}
];

// Ciclo forEach ECMA 2015

let jugadoresAptos = [];

jugadores.forEach((elemento, i) => {
    if(elemento.puntuacion >= 5) jugadoresAptos.push(elemento);
    console.log(i);
})

console.log(jugadoresAptos);

jugadores.forEach(elemento => {
    if(elemento.puntuacion >= 5) jugadoresAptos.push(elemento);
})

// ciclo map ECMA 2015

let nombreJugadores = jugadores.map((elem, i) => {
    return `${i + 1}.- ${elem.nombre} ${elem.apellidos}.`
});

console.log(nombreJugadores);

// Ciclo filter ECMA 2015

let jugadoresNoAptos = jugadores.filter(elem => {
    return elem.puntuacion < 5;
})

console.log(jugadoresNoAptos);