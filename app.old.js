const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Carlos',
            apellidos: 'Vargas',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end(); //para decirle que ya terminamos de enviar la respuesta;

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');