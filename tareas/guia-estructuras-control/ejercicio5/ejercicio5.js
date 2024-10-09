function calcDescuentoCoche(coche) {
  let descuento;
  switch (coche) {
    case "FORD FIESTA":
      descuento = 0.05;
      break;
    case "FORD FOCUS":
      descuento = 0.1;
      break;
    case "FORD ESCAPE":
      descuento = 0.2;
      break;
  }
  const info = document.getElementById("info");
  return (info.innerHTML = `Se ha seleccionado un ${coche}; se aplicará un descuento de ${
    descuento * 100
  }%.`);
}
