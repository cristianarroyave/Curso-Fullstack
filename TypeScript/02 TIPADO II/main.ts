// tipos compuestos

// arrays 

// let identificador: <tipo-elemento>[]
// let identificador: Array<tipo-elemento>

let frutas: string[];
let vehiculos: Array<string>;

frutas = ['peras', 'manzanas'];

// tipo any

let id: any = 2856; // romper la inferencia de tipos y permitirá cualquiera

id = 'mensaje';

// tipado de funciones (parametros y el retorno de la funcion pueden ser tipados)

function suma(a: number, b: number): number{
    return a+b;
}

suma(4, 2);

// tipo void (en funciones que no devuelvan valores)

function setMensaje(mensaje: string): void {
    console.log(mensaje);
    //return mensaje; devolveria error
}

// tipado generico en funciones ( se define el tipo en la invocacion de la función)

function retornoResultado<T> (saludo: T): T {
    return saludo;
}

retornoResultado<string>('hola');
retornoResultado<number>(4);

const a: string = retornoResultado<string>('hola');
const b: number = retornoResultado<number>(4);

// tipos de union

type _id = string | number;

let referencia: _id;
referencia = 'A12313';
referencia = 2;

// tipos de union complejos

type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razasPerro;

razaToby = 'Pastor Alemán';
