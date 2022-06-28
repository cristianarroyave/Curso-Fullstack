// estructura condicional switch

let diaSemana = 10;

switch(diaSemana){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Dia no valido');
}

let mes = 'octubre'

switch(mes){
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('Estamos en el primer trimestre');
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('Estamos en el segundo trimestre');
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('Estamos en el tercer trimestre');
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('Estamos en el quart trimestre');
    default:
        console.log('mes no valido');
}