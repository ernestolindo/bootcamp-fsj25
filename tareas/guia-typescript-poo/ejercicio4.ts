class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numCuenta: number;
  constructor(nombre: string, cantidad: number = 0, tipoCuenta: string, numCuenta: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numCuenta = numCuenta;
  }
  public depositar(suma: number): void {
    if (suma < 5) {
      console.log("Lo sentimos, el valor a depositar debe ser mayor a $5.00");
    }
    this.cantidad += suma;
    console.log(
      `Su deposito de ${suma} se ha efectuado exitosamente. Saldo actualizado: ${this.cantidad}.`
    );
  }
  public retirar(valor: number): void {
    if (this.cantidad < 5) {
      console.log(
        `Lo sentimos, para hacer un retiro su cuenta debe poseer un saldo superior a $5.00. 
        Saldo actual: ${this.cantidad}`
      );
    }
    this.cantidad -= valor;
    console.log(
      `Su retiro de ${valor} se ha efectuado exitosamente. Saldo actualizado: ${this.cantidad}.`
    );
  }
  public mostrarDatos(): void {
    console.log(
      `${this.nombre} - Tipo de cuenta: ${this.tipoCuenta} - Numero de cuenta: ${this.numCuenta} `
    );
  }
}

const miCuenta = new Cuenta("Ernesto Lindo", 23, "Cuenta de ahorros", 12341);
miCuenta.mostrarDatos();
miCuenta.depositar(10);
miCuenta.retirar(10);
