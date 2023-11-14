const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'./public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/crea-tu-cuenta", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/ingresa", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
    console.log(__dirname)
});

app.post('/crea-tu-cuenta', (req,res) => {
	console.log (req.body);
	res.redirect('/ingresa');
});

app.post('/ingresa', (req,res) => {
	console.log (req.body);
	res.redirect('/');
});

app.listen(3030,()=>{
    console.log("Servidor corriendo en puerto 3030");
});
