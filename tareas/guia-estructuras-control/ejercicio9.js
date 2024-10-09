function convertirYMedirTemperatura(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  if (fahrenheit >= 14 && fahrenheit < 32) return "Temperatura baja";
  if (fahrenheit < 68) return "Temperatura adecuada";
  if (fahrenheit < 96) return "Temperatura alta";

  return "Temperatura desconocida";
}

console.log(convertirYMedirTemperatura(0));
console.log(convertirYMedirTemperatura(-1));
