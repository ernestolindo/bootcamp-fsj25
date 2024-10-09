function getPromFinal(
  nombre,
  carnet,
  promExamen,
  promTareas,
  promAsistencia,
  promInvestigacion
) {
  const promFinal =
    promExamen * 0.2 +
    promTareas * 0.4 +
    promAsistencia * 0.1 +
    promInvestigacion * 0.3;

  return `El estudiante ${nombre}, con número de carnet ${carnet} ha obtenido un promedio final de ${promFinal}.`;
}

console.log(getPromFinal("Ernesto Lindo", 2288667, 10, 10, 10, 10));
