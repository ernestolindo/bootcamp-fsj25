class Calculadora {
  public sumar(a: number, b: number): number {
    return a + b;
  }
  public restar(a: number, b: number): number {
    return a - b;
  }
  public multiplicar(a: number, b: number): number {
    return a * b;
  }
  public dividir(a: number, b: number): number {
    return a / b;
  }
  public exponenciar(a: number, b: number): number {
    return a ** b;
  }
  public factorial(n: number): number {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}
const calculadora = new Calculadora();
console.log(calculadora.sumar(10, 2));
console.log(calculadora.restar(10, 2));
console.log(calculadora.multiplicar(10, 2));
console.log(calculadora.dividir(10, 2));
console.log(calculadora.exponenciar(10, 2));
console.log(calculadora.factorial(10));
