
function TeoremaPitagoras(request) {
    this.catetoA = request.catetoA;
    this.catetoB = request.catetoB;
    this.hipotenusa = request.hipotenusa;

    this.tipoCalculo = function(){
        if(this.catetoA == 0 && this.catetoB != 0 && this.hipotenusa != 0 && (this.catetoA || this.catetoB) <= this.hipotenusa){
            return this.calcularCatetoA();
        }
        if(this.catetoA != 0 && this.catetoB == 0 && this.hipotenusa != 0){
            return this.CalcularCatetoB();
        }
        if(this.catetoA != 0 && this.catetoB != 0 && this.hipotenusa == 0){
            return this.CalcularHipotenusa();
        }else{
            return NaN;
        }
    };

    this.calcularCatetoA = function(){
        var catetoA = Math.sqrt(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoB, 2));
        return catetoA.toFixed(2);
    };
    this.CalcularCatetoB = function(){
        var catetoB = Math.sqrt(Math.pow(this.hipotenusa, 2) - Math.pow(this.catetoA, 2));
        return catetoB.toFixed(2);

    };
    this.CalcularHipotenusa = function(){
        var hipotenusa = Math.sqrt(Math.pow(this.catetoA, 2) + Math.pow(this.catetoB, 2));
        return hipotenusa.toFixed(2);
    };
    return this;
}
exports.TeoremaPitagoras = TeoremaPitagoras;