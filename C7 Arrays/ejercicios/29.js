function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) return null;

  for (var i = 0; i < numeros.length - 1; i++) {
    // Se compara cada número con el siguiente esperado
    if (numeros[i] + 1 !== numeros[i + 1]) {
      // Si el número actual no es seguido por el siguiente esperado, se retorna el siguiente esperado
      return numeros[i] + 1;
    }
  }

  // Si se recorrió todo el array y no se encontró ningún número faltante, se retorna null
  return null;
}

module.exports = encontrarNumeroFaltante;
