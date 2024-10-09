class CabeceraPagina {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacion: "centro" | "izquierda" | "derecha";

  constructor(
    titulo: string,
    color: string,
    fuente: string,
    alineacion: "centro" | "izquierda" | "derecha"
  ) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this.alineacion = alineacion;
  }

  // Método 1: Obtener el título, color y fuente de la página
  public obtenerPropiedades(): {
    titulo: string;
    color: string;
    fuente: string;
  } {
    return {
      titulo: this.titulo,
      color: this.color,
      fuente: this.fuente
    };
  }

  // Método 2: Definir cómo debe aparecer el título (centrado, derecha o izquierda)
  public definirAlineacion(
    alineacion: "centro" | "izquierda" | "derecha"
  ): void {
    this.alineacion = alineacion;
  }

  // Método 3: Imprimir todas las propiedades
  public imprimirPropiedades(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina("Mi Sitio Web", "azul", "Arial", "centro");
cabecera.imprimirPropiedades(); // Imprimir todas las propiedades
cabecera.definirAlineacion("izquierda"); // Cambiar la alineación
cabecera.imprimirPropiedades(); // Imprimir nuevamente para ver los cambios
