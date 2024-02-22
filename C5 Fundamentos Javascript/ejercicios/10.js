function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var fechaDeHoy = new Date(fecha);
  console.log(fechaDeHoy);

  if (fecha.toString() == "Invalid Date") {
    return false;
  }
  if (fecha instanceof Date) {
    return true;
  } else return false;
}

module.exports = esFechaValida;
