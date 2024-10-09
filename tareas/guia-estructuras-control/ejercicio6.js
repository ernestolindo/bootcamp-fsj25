function calcDescuentoViaje(origen, destino) {
  if (origen !== "Ciudad de Palma")
    return "Lo sentimos, no se ha encontrado un descuento aplicable.";

  let descuento;

  if (destino === "La costa del sol") descuento = 0.05;
  if (destino === "Panchimalco") descuento = 0.1;
  if (destino === "Puerto El Triunfo") descuento = 0.15;

  return `Su viaje desde ${origen} hasta ${destino} tiene un descuento de ${
    descuento * 100
  }%.`;
}

console.log(calcDescuentoViaje("San Salvador", "La costa del sol"));
console.log(calcDescuentoViaje("Ciudad de Palma", "La costa del sol"));
