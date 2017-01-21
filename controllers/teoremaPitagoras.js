var operacion = require('./../lib/teoremaPitagoras');

//POST - Calcula la operacion
exports.calcular = function(req, res) {
    var respuesta;
    var calPitagoras = new operacion.TeoremaPitagoras(req.body);
    var resultado = calPitagoras.tipoCalculo();

    if(isNaN(resultado)){
        respuesta = {
            codeE : 1,
            jsonRespuesta : {
                resultado: resultado.resultado,
                descripcion : resultado.historial
            },
            mensajes : "No tiene solucion. Los valores de los catetos debe ser menor o igual a la hipotenusa"
        };

    }else{
        respuesta = {
            codeE : 0,
            jsonRespuesta : resultado,
            mensajes : "Calculo correcto"
        };
    }
    res.status(200).jsonp(respuesta);
};
