const express = require('express');  
const app = express();  
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

const bodyParser = require('body-parser');

//Levantamos el servidor.......
server.listen(process.env.PORT || 9000);

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use('/static', express.static(__dirname + '/public'));


// Ahora necesitamos que el servidor de websockets, 
//que lo tenemos en la variable io, esté atento a que se realice una conexión. 
//Eso lo logramos con io.on() y pasándole el mensaje connection. 


io.on('connection', function (socket) {
  socket.emit('messagesFront', { Messaje: 'Conexion Correcta A servidor NodeJs' });//Se envia el mensaje a el cliente

  socket.on('NewConection', function (data) {//Se recibe el mensaje de el cliente
    console.log(data);
  });

});
// End  websockets





app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});