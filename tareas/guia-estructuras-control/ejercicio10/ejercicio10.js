function solicitarEdadesTurnoMorning() {
  // Crear un array vacío para almacenar los datos
  let datosMorning = [];

  // Bucle para solicitar 5 datos
  for (let i = 0; i < 5; i++) {
    let datoMorning = parseInt(
      prompt("Ingresa la edad del estudiante " + (i + 1) + " de 5:")
    );

    // Si el usuario no cancela y la entrada es válida, agregamos el dato al array
    if (datoMorning !== null && !isNaN(datoMorning)) {
      datosMorning.push(datoMorning);
    } else {
      alert("Debes ingresar todos los datos correctamente.");
      return; // Detenemos la ejecución si cancela o ingresa un valor no numérico
    }
  }

  // Calcular promedio
  const suma = datosMorning.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
  }, 0);

  const promedio = parseFloat((suma / datosMorning.length).toFixed(1));

  // Mostrar el promedio de edades de los estudiantes del turno mañana
  document.getElementById("displayMorning").innerText = promedio + " años.";
}

function solicitarEdadesTurnoTarde() {
  // Crear un array vacío para almacenar los datos
  let datosTarde = [];

  // Bucle para solicitar 6 datos
  for (let i = 0; i < 6; i++) {
    let datoTarde = parseInt(
      prompt("Ingresa la edad del estudiante " + (i + 1) + " de 6:")
    );

    // Si el usuario no cancela y la entrada es válida, agregamos el dato al array
    if (datoTarde !== null && !isNaN(datoTarde)) {
      datosTarde.push(datoTarde);
    } else {
      alert("Debes ingresar todos los datos correctamente.");
      return; // Detenemos la ejecución si cancela o ingresa un valor no numérico
    }
  }

  // Calcular promedio
  const suma = datosTarde.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
  }, 0);

  const promedio = parseFloat((suma / datosTarde.length).toFixed(1));

  // Mostrar el promedio de edades de los estudiantes del turno tarde
  document.getElementById("displayTarde").innerText = promedio + " años.";
}

function solicitarEdadesTurnoNoche() {
  // Crear un array vacío para almacenar los datos
  let datosNoche = [];

  // Bucle para solicitar 11 datos
  for (let i = 0; i < 11; i++) {
    let datoNoche = parseInt(
      prompt("Ingresa la edad del estudiante " + (i + 1) + " de 11:")
    );

    // Si el usuario no cancela y la entrada es válida, agregamos el dato al array
    if (datoNoche !== null && !isNaN(datoNoche)) {
      datosNoche.push(datoNoche);
    } else {
      alert("Debes ingresar todos los datos correctamente.");
      return; // Detenemos la ejecución si cancela o ingresa un valor no numérico
    }
  }

  // Calcular promedio
  const suma = datosNoche.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
  }, 0);

  const promedio = parseFloat((suma / datosNoche.length).toFixed(1));

  // Mostrar el promedio de edades de los estudiantes del turno noche
  document.getElementById("displayNoche").innerText = promedio + " años.";
}

function calcTurnoMayor() {
  const promMorning = document.getElementById("displayMorning").innerText;
  const promTarde = document.getElementById("displayTarde").innerText;
  const promNoche = document.getElementById("displayNoche").innerText;
  const promMayor = document.getElementById("promMayor");
  if (promMorning === "" || promTarde === "" || promNoche === "") {
    promMayor.innerText = "Ingrese todos los datos y vuelva a intentarlo.";
    return;
  }
  if (promMorning > promTarde && promMorning > promNoche) {
    promMayor.innerText = "Turno mañana";
  } else if (promTarde > promMorning && promTarde > promNoche) {
    promMayor.innerText = "Turno tarde";
  } else if (promNoche > promMorning && promNoche > promTarde) {
    promMayor.innerText = "Turno noche";
  } else {
    promMayor.innerText = "Hay un empate en los promedios";
  }
}
