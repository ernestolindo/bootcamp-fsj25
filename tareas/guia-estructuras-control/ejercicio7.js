function infoNumeros(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
  let numeros = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
  let negativos = 0;
  let positivos = 0;
  let multiplosDeQuince = 0;
  let sumPares = 0;
  for (n of numeros) {
    if (n < 0) negativos++;
    else positivos++;

    if (n % 15 === 0) multiplosDeQuince++;

    if (n % 2 === 0) sumPares += n;
  }
  return `
  negativos: ${negativos};
  positivos: ${positivos};
  multiplos de quince: ${multiplosDeQuince};
  suma de los pares: ${sumPares};
  `;
}

console.log(infoNumeros(1, 2, -3, 5, 15, 30, 38, -32, 4, 6));
