// Clases en TypeScript (implementar el tipo de los miembros y modificadores de acceso)

class Jugador {
    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void{
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }

}

let jugador1 = new Jugador('Cristian', 'Arroyave');

let players: Array<Jugador>;

players = [jugador1, new Jugador('Sergio', 'Ramos')];

jugador1.nombre = 'Cris';