// Propiedades privadas en JavaScript

class Employee {

    name;
    surname; // Públicas 
    #age; // privadas
    #department; // privadas

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
}


let employee1 = new Employee('Juan', 'López');
// console.log(employee1.department); error la propiedad no es accesible


employee1.setAge(44);
console.log(employee1.getAge());