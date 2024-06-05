const { request, response } = require("express");
const { consolas } = require("../consolas");

const getConsolas = (req, res)=> {
    return res.json({
        ok:true,
        statusCode:200,
        consolas
    })
}

const getConsolaById = (req = request, res = response)=> {

    let id = req.params.id;
    let consolaABuscar = "";
    consolaABuscar = consolas.find((consola)=> {
        return consola.id === id;
    });

    if(consolaABuscar) {
        return res.json({
            ok:true,
            statusCode:200,
            consolaABuscar
        });
    } else {
        return res.json({
            ok:true,
            statusCode:404,
            msg:"no hay consola"
        });
    }
}

module.exports = { 
    getConsolas,
    getConsolaById
}