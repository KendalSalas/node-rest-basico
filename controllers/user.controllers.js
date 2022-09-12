const { request, response } = require('express');

const usersGet = (req = request, res = response) => {

    // Request query => Son los query params de la url (opcionales)
    //Estos son los valores de la URL que vienen despues del ?
    const query = req.query;
    const { q, nombre, apikey = 'No apikey' } = query

    res.status(200).json({
        msg: 'GET API - Controller',
        q,
        nombre,
        apikey
    });
}

const usersPOST = (req, res = response) => {
    // const body = req.body; // Recibo el cuerpo completo
    const { name, age } = req.body; // Desestructuro el objeto para obtener lo que quiero

    res.status(201).json({
        msg: 'POST API - Controller',
        name, age
    });
}

const usersPUT = (req, res = response) => {

    // Obtengo el ID de req.params.nombreVariable
    //NOTA => SIEMPRE LLEGAN COMO STRING
    //Estos son los valores dinámicos de una URL
    const id = req.params.id;

    res.status(201).json({
        msg: 'PUT API - Controller',
        id
    })
}

const usersDELETE = (req, res = response) => {
    res.status(204).json({
        msg: 'DELETE API - Controller'
    });
}

module.exports = {
    usersGet,
    usersPOST,
    usersPUT,
    usersDELETE
}