var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numCuenta) {
        if (cantidad === void 0) { cantidad = 0; }
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuenta;
    }
    Cuenta.prototype.depositar = function (suma) {
        if (suma < 5) {
            console.log("Lo sentimos, el valor a depositar debe ser mayor a $5.00");
        }
        this.cantidad += suma;
        console.log("Su deposito de ".concat(suma, " se ha efectuado exitosamente. Saldo actualizado: ").concat(this.cantidad, "."));
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad < 5) {
            console.log("Lo sentimos, para hacer un retiro su cuenta debe poseer un saldo superior a $5.00. \n        Saldo actual: ".concat(this.cantidad));
        }
        this.cantidad -= valor;
        console.log("Su retiro de ".concat(valor, " se ha efectuado exitosamente. Saldo actualizado: ").concat(this.cantidad, "."));
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("".concat(this.nombre, " - Tipo de cuenta: ").concat(this.tipoCuenta, " - Numero de cuenta: ").concat(this.numCuenta, " "));
    };
    return Cuenta;
}());
var miCuenta = new Cuenta("Ernesto Lindo", 23, "Cuenta de ahorros", 12341);
miCuenta.mostrarDatos();
miCuenta.depositar(10);
miCuenta.retirar(10);
