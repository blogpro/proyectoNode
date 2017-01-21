var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();
const server = require('http').createServer(app);  

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

// Import Models and Controllers
var CtrlTeoremaPitagoras =require('./controllers/teoremaPitagoras');
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

// Start server
/*app.listen(9000, function() {
  console.log("Node server running on http://localhost:9000");
});*/

server.listen(process.env.PORT || 9000);