const express = require('express');
const app = express();
const path = require('path')

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/crea-tu-cuenta", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/ingresa", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.use(express.static('public'));

app.listen(3030,()=>{
    console.log("Servidor corriendo en puerto 3030");
});
