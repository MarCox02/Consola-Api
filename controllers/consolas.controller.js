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

    let id = parseInt(req.params.id);
    let consolaABuscar = "";
    consolaABuscar = consolas.find((juego)=> {
        return juego.id === id;
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
            msg:"no hay jogo"
        });
    }
}

module.exports = { 
    getConsolas,
    getConsolaById
}