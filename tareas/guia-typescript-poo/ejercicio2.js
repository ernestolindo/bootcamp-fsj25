var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.exponenciar = function (a, b) {
        return Math.pow(a, b);
    };
    Calculadora.prototype.factorial = function (n) {
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log(calculadora.sumar(10, 2));
console.log(calculadora.restar(10, 2));
console.log(calculadora.multiplicar(10, 2));
console.log(calculadora.dividir(10, 2));
console.log(calculadora.exponenciar(10, 2));
console.log(calculadora.factorial(10));
