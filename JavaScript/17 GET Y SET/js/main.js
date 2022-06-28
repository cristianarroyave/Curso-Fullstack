// Propiedades privadas en JavaScript

class Employee {

    name;
    surname; // Públicas 
    #age; // privadas
    #department; // privadas
    #dni;

    constructor(nameIn, surnameIn) {
        this.name = nameIn;
        this.surname = surnameIn;
    }

    getAge(){
        return this.#age;
    }

    setAge(ageIn){
        this.#age = ageIn;
    }

    get dni(){
        return this.#dni;
    }

    set dni(dniIn){
        this.#dni = dniIn;
    }
}


let employee1 = new Employee('Juan', 'López');

employee1.dni = '49252232F' // en la invocación de los metodos get y set se usan como propiedades

console.log(employee1.dni);