function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  // if(typeof str1 === 'string' && typeof str2 === 'string' && str1.length == str2.length){
  //     return true
  // }else return false

  // o

  return str1.length === str2.length;
}

module.exports = tienenMismaLongitud;
