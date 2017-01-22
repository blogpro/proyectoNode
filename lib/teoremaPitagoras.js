function TeoremaPitagoras(request) {
    this.catetoA = request.catetoA;
    this.catetoB = request.catetoB;
    this.hipotenusa = request.hipotenusa;
    this.tipo = request.tipo;

    this.tipoCalculo = function () {
        if (this.tipo == 1) {
            return this.calcularCatetoA();
        }
        if (this.tipo == 2) {
            return this.CalcularCatetoB();
        }
        if (this.tipo == 3) {
            return this.CalcularHipotenusa();
        } else {
            return NaN;
        }
    };

    this.calcularCatetoA = function () {
        var respuestaDescritiva = [],
            respuesta;
        respuestaDescritiva.push(this.hipotenusa + "<sup>2</sup>" + " - " + this.catetoB + "<sup>2</sup> = c<sup>2</sup>");
        respuestaDescritiva.push(Math.pow(this.hipotenusa, 2) + " - " + Math.pow(this.catetoB, 2) + "= c<sup>2</sup>");
        respuestaDescritiva.push(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoB, 2) + "= c<sup>2</sup>");
        respuestaDescritiva.push("c = &#8730;" + (Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoB, 2)));
        respuestaDescritiva.push("c = " + (Math.sqrt(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoB, 2))).toFixed(2));

        if (this.catetoB > this.hipotenusa) {
            respuesta = {
                resultado: NaN,
                historial: respuestaDescritiva,
                mensaje: "No hay solución, La hipotenisa debe ser mayor o igual al Cateto B"
            };
        } else {
            var catetoA = Math.sqrt(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoB, 2));
            console.log(catetoA);
            respuesta = {resultado: catetoA.toFixed(2), historial: respuestaDescritiva, mensaje: "Calculo correcto"};
        }
        return respuesta;
    };
    this.CalcularCatetoB = function () {
        var catetoB = Math.sqrt(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoA, 2));
        return catetoB.toFixed(2);

    };
    this.CalcularHipotenusa = function () {
        var hipotenusa = Math.sqrt(Math.pow(this.catetoA, 2) + Math.pow(this.catetoB, 2));
        return hipotenusa.toFixed(2);
    };
    return this;
}
exports.TeoremaPitagoras = TeoremaPitagoras;