const express = require("express");
const cors = require("cors");
const alumnosRouter = require("./src/routers/alumnos.routers");
const asig_notasRouter = require ("./src/routers/asig_notas.routers");
const errorHandling = require("./src/error/errorHanding");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(alumnosRouter);
app.use(asig_notasRouter);
app.use(function(req,res,next){
    res.status(404).json({ 
        error: true,
        codigo: 404,
        message: "Endpoint doesnt found"
    })
})
app.use(errorHandling)

module.exports = app;



