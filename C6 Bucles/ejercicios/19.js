function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  //   var suma = 0;
  //     if (n >= 1){
  //         for (var index = 1; index <= n; index++) {
  //             suma = suma + index;

  //         } return suma;
  //     } else return false;
  var acumulador = 0;
  for (var i = 1; i <= n; i++) {
    acumulador = acumulador + i;
  }
  return acumulador;
}

module.exports = sumarHastaN;
