var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.autor = "Desconocido";
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.imprimirDatos = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
var sparks = new Cancion("Sparks", "Alternative rock");
sparks.setAutor("Coldpay");
console.log(sparks.getAutor());
sparks.imprimirDatos();
