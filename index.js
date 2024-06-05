const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 4000;

const { getConsolas, getConsolaById } = require("./controllers/consolas.controller")

app.use(cors());
app.get("/", getConsolas);
app.get("/:id", getConsolaById);

app.listen(puerto, ()=> {
    console.log(`Servidor Consolas OK. Puerto: ${puerto}`);
});