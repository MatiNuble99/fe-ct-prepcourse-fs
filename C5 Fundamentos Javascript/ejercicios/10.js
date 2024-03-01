function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  const fechaObjeto = new Date(fecha);
  return !isNaN(fechaObjeto.getTime());
}

let fecha = 1999 / 4 / 17;
console.log(esFechaValida(fecha));
console.log(new Date());
console.log(new Date().getFullYear());
module.exports = esFechaValida;
