var operacion = require('./../lib/teoremaPitagoras');

//POST - Calcula la operacion
exports.calcular = function (req, res) {
    console.log(req.body.tipoCalculo);
    var respuesta;
    if (req.body.tipo != undefined && req.body.catetoA != undefined && req.body.catetoB != undefined && req.body.hipotenusa != undefined) {
        var calPitagoras = new operacion.TeoremaPitagoras(req.body);
        var respuesta = calPitagoras.tipoCalculo();

        if (isNaN(respuesta.resultado)) {
            respuesta = {
                code: 1,
                jsonRespuesta: {
                    resultado: NaN,
                    descripcion: respuesta.historial
                },
                mensaje: respuesta.mensaje
            };

        } else {
            respuesta = {
                code: 0,
                jsonRespuesta: {
                    resultado: respuesta.resultado,
                    descripcion: respuesta.historial
                },
                mensaje: respuesta.mensaje
            };
        }
        res.status(200).jsonp(respuesta);
    } else {
        respuesta = {
            code: 1,
            jsonRespuesta: {},
            mensajes: "Error, Parametros Invalidos"
        };
        res.status(200).jsonp(respuesta);
    }
};
