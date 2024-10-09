class Cancion {
  public titulo: string;
  public genero: string;
  private autor: string = "Desconocido";
  constructor(tituloParam: string, generoParam: string) {
    this.titulo = tituloParam;
    this.genero = generoParam;
  }
  public getAutor(): string {
    return this.autor;
  }
  public setAutor(autorParam: string): void {
    this.autor = autorParam;
  }

  public imprimirDatos(): void {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Genero: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
  }
}

const sparks = new Cancion("Sparks", "Alternative rock");
sparks.setAutor("Coldpay");
console.log(sparks.getAutor());
sparks.imprimirDatos();
