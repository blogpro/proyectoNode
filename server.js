var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9000);


// Ahora necesitamos que el servidor de websockets, 
//que lo tenemos en la variable io, esté atento a que se realice una conexión. 
//Eso lo logramos con io.on() y pasándole el mensaje connection. 

io.on('connection', function (socket) {
  socket.emit('messagesFront', { Messaje: 'Conexion Correcta A servidor NodeJs' });//Se envia el mensaje a el cliente

  socket.on('NewConection', function (data) {//Se recibe el mensaje de el cliente
    console.log(data);
  });

});



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});