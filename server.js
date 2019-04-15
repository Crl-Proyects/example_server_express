const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 8080;



app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales') //directorios con parciales
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    let salida = {
        nombre: 'Carlos',
        apellidos: 'Vargas',
        url: req.url
    }

    res.render('home', { //renderisa el archivo homce
        nombre: 'Carlos'
    })
})


app.get('/about', function(req, res) {
    res.render('about', { //renderisa el archivo homce
    })
})




app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})