function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var newArray = numeros.filter(function (elementos) {
    return elementos % 2 === 0;
  });
  return newArray.length;
}

module.exports = contarParesConContinue;
