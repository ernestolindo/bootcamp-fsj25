function esMayorDeEdad(edad) {
  const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
  return mensaje;
}

console.log(esMayorDeEdad(17));
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(19));
