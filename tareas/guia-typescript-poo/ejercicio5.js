var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18)
            console.log("".concat(this.nombre, " es mayor de edad."));
        else {
            console.log("".concat(this.nombre, " es menor de edad."));
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sueldo = 0; // Asignación de un valor por defecto
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log(this.sueldo);
    };
    // Implementamos el método abstracto 'mostrarDatosPersonales'
    Empleado.prototype.mostrarDatosPersonales = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido, ", Edad: ").concat(this.edad, ", Direcci\u00F3n: ").concat(this.direccion, ", Tel\u00E9fono: ").concat(this.telefono));
    };
    return Empleado;
}(Persona));
var juanLopez = new Empleado("Juan", "Lopez", "Colonia las colinas, casa 10-A, Santa Tecla", 12139032, 32);
juanLopez.cargarSueldo(341);
juanLopez.imprimirSueldo();
juanLopez.mostrarDatosPersonales();
