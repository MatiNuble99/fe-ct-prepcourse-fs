function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var añoActual = new Date().getFullYear(); //new Date = fecha de hoy y getFullYear = año (saca el año de la fecha de hoy)
  var añoUsuario = fechaNacimiento.getFullYear(); //da el año de la fecha del argumento
  var añosResta = añoActual - añoUsuario;
  if (añosResta > 17) {
    return true;
  } else return false;
}
/**Calculos Auxiliars
 * 2024 - 1999 = 25
 * tengo que crear varaible para el año actua
 * otra variable para el año de la fecha ingresada
 * restar esas variables
 */
module.exports = esMayorDeEdad;
