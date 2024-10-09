var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente, alineacion) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }
    // Método 1: Obtener el título, color y fuente de la página
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    // Método 2: Definir cómo debe aparecer el título (centrado, derecha o izquierda)
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método 3: Imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina("Mi Sitio Web", "azul", "Arial", "centro");
cabecera.imprimirPropiedades(); // Imprimir todas las propiedades
cabecera.definirAlineacion("izquierda"); // Cambiar la alineación
cabecera.imprimirPropiedades(); // Imprimir nuevamente para ver los cambios
