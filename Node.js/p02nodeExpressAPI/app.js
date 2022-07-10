const express = require('express');

const app = express();
const cors = require('cors');
const port = 3000;

let clientes = [
    {nombre: "Jazztel", cif: "A123456789", direccion: "Gran via, 22", localidad: "Barcelona"},
    {nombre: "Orange", cif: "A555555555", direccion: "Principe Pio, 40", localidad: "Madrid"},
    {nombre: "Movistar", cif: "A987654321", direccion: "Castellana, 100", localidad: "Madrid"},
    {nombre: "Movistar", cif: "A987654321", direccion: "Castellana, 100", localidad: "Madrid"}
]

app.use(cors());
app.use(express.json()/*, function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}*/);


app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send(clientes);
})

app.get('/:cif', (req, res) => {
    let cliente = clientes.find(elem => {
        return elem.cif === req.params.cif;
    });
    if(cliente === undefined){
        return res.status(404).json({
            mensaje: 'no se encontró ningún cliente con ese cif'
        })
    }
    res.status(200).json({
        cliente: cliente
    })
})

app.post('/', (req, res) => {
    if(req.body === undefined) {
        return res.status(404).json({
            mensaje: 'dame algun dato bro...'
        })
    }
    clientes.push(req.body);
    res.status(201).json({
        mensaje: 'El cliente ha sido añadido correctamente'
    })
})

app.put('/:cif', (req, res) => {
    if(req.body === undefined) {
        return res.status(400).json({
            mensaje: 'dame algun dato bro...'
        })
    }
    if(req.params.cif === undefined) {
        return res.status(400).json({
            mensaje: 'CIF a actualizar obligatorio'
        })
    }
    const posicion = clientes.findIndex(elem => {
        return elem.cif === req.params.cif;
    })
    if(posicion < 0) {
        return res.status(404).json({
            mensaje: 'Cliente no encontrado'
        })
    }
    if(req.body.nombre !== undefined){
        clientes[posicion].nombre = req.body.nombre;
    }
    if(req.body.direccion !== undefined){
        clientes[posicion].direccion = req.body.direccion;
    }
    if(req.body.localidad !== undefined){
        clientes[posicion].localidad = req.body.localidad;
    }
    res.status(201).json({
        mensaje: 'Cliente modificado correctamente'
    })
    console.log(clientes);
})

app.delete('/:cif', (req, res) => {
    if(req.params.cif === undefined) {
        return res.status(400).json({
            mensaje: 'CIF a actualizar obligatorio'
        })
    }
    const posicion = clientes.findIndex(elem => {
        return elem.cif === req.params.cif;
    })
    if(posicion < 0) {
        return res.status(404).json({
            mensaje: 'Cliente no encontrado'
        })
    }
    clientes.splice(posicion, 1);
    res.status(200).json({
        mensaje: 'El cliente ha sido borrado correctamente'
    })
    console.log(clientes);
})

app.listen(3000, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

