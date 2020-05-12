/* Metodo tradicional node
//Requiriendo colors

const color =require('colors');

//creando constante para el servidor servidor http
const http= require('http');

// Creando constante manejador del servidor que almacenara la funcion de res

const handleServer=function(req,res){
    res.writeHead(202, { 'Content-type' : 'text/html' });
    //contenido para mostrar en el navegador
    res.write('<h1>Primer hola mundo desde servidor </h1>');
    //El res end se coloca siempre al terminar de responder
    res.end();
}

//Creando constante server que creer el servidor

const server=http.createServer(handleServer);


//creando el servidor en el puerto 3000
server.listen(3000, function(){
    console.log('Conexion en el puerto 3000'.green);
}); */

//Utilizando libreria de express para hacer la conexion

//express es un framework

//Manejador de constantes
const express = require('express');

const app = express();

const morgan = require('morgan');

const color = require('colors');

//registra peticiones que llegan a mi servidor
function logger(req, res, next) {
    console.log(`Ruta recivida: ${req.protocol}://${req.get('host')}//${req.originalUrl}`.yellow);
    next();
};

//Settings
// app.set('nombre','funcion');
app.set('appName','Tutorial express');

//Cambiar el puerto app.set('port','5000');
app.set('port','3000');

//motor de plantillas
app.set('view engine','ejs');

//Middlewares
//App se le permite leer los archivos json
app.use(express.json());

app.use(morgan('dev'));

//maneja el midlewar manejador de peticiones
app.use(logger);


//Routes

//Manejar de peticion a especifico
app.all('/aboutme', (req, res, next) => {
    console.log('Procesando form about'.red);
    /*res.send('finalizado');*/
    next();
});

//rutas

//Ruta inicial
// app.get('/', (req,res)=> {
//     res.send('<h1>Haciendo uso del servidor con express </h1>');
// });

//Ruta about

app.get('/aboutme', (req, res) => {
    res.json({
        username: 'Karina',
        lastname: 'Diaz'
    });
});
//ruta dinamica de form login
app.post('/formLogin/:id', (req, res) => {
    //objeto de java scrip que permite ver los json
    console.log(req.body);
    console.log(req.params);
    res.send('Peticion post recividad');
});

//ruta de form registro
app.put('/formRegistre/:contacid', (req, res) => {
    console.log(req.body);
    res.send(`User registro ${req.params.contacid}update`);
});

//ruta de form contac
app.delete('/formContac/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});


//uso diferente de midlewer

app.use(express.static('public'));

//asignacion de puerto
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port ',app.get('port').blue);
});

