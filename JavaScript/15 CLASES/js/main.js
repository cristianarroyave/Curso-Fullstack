// Declaracion de clases (ECMA6)

class Vehicle {

    constructor(brandIn, modelIn, colorIn, priceIn) {
        this.brand = brandIn;
        this.model = modelIn;
        this.color = colorIn;
        this.price = priceIn;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getPriceWithtaxes(tax) {
        return this.price + this.price * tax;
    }
}

// Instanciar objetos de una clase 

let vehicle1 = new Vehicle('Renault', 'Megane', 'Gris', 16000);
console.log(vehicle1);

console.log(vehicle1.getPriceWithtaxes(0.21));


