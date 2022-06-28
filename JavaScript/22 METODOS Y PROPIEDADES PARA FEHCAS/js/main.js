// metodos inmutables ( no modifican el valor del array )

let frutas = ['Manzanas', 'Naranjas', 'Kiwis', 'Fresas', 'Plátanos', 'Mandarinas'];

let frutasSeleccionadas = frutas.slice(2, 4); // Extrae elementos desde una posición incluida la posicion hasta otra posición que será excluida

console.log(frutas);
console.log(frutasSeleccionadas);

let hayPomelos = frutas.includes('Pomelos'); // Devuelve true o false según exista el elemento
console.log(hayPomelos);

let mensaje = frutas.join(' | '); // une los elemntos separados por el string del argumento, por defecto separa por coma
console.log(mensaje);

let vehiculosEuropeos = ['SEAT', 'Renault', 'Mercedes'];

let marcasVehiculos = vehiculosEuropeos.concat('Subaru', 'Hyundai');

console.log(vehiculosEuropeos);
console.log(marcasVehiculos);

let vehiculosAsiaticos = ['Toyota', 'Maza']

marcasVehiculos = vehiculosEuropeos.concat(vehiculosAsiaticos);
console.log(vehiculosEuropeos);
console.log(vehiculosAsiaticos);
console.log(marcasVehiculos);