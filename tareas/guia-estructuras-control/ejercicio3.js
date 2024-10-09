function getAumentoSalarial(nombre, salario, categoria) {
  let aumento;
  switch (categoria) {
    case "A":
      aumento = 0.15;
      break;
    case "B":
      aumento = 0.3;
      break;
    case "C":
      aumento = 0.1;
    case "D":
      aumento = 0.2;
  }
  const nuevoSalario = salario + salario * aumento;
  return `El empleado ${nombre}, de categoría ${categoria} ha obtenido un aumento de ${
    aumento * 100
  }%, de manera tal que su salario sube de $${salario} a $${nuevoSalario}.`;
}

const nombre = "Ernesto Lindo";
const salario = 498;
const categoria = "C";

console.log(getAumentoSalarial(nombre, salario, categoria));
