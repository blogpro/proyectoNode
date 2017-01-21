var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();
const server = require('http').createServer(app);  

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

// Importamos Controladores
var CtrlTeoremaPitagoras = require('./controllers/teoremaPitagoras');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {  
   res.sendfile(__dirname + '/index.html');
});

app.use(router);


// API routes
var api = express.Router();
api.route('/operaciones/teorema-pitagoras').post(CtrlTeoremaPitagoras.calcular);

app.use('/api', api);

server.listen(process.env.PORT || 9000);