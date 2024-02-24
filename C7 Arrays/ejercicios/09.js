function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  // Verificar si el array está vacío
  if (array.length === 0) {
    return undefined; // Si el array está vacío, retornar undefined
  } else if (array.length === 1) {
    return array[0]; // Si el array tiene un solo elemento, retornar ese elemento
  } else {
    // Genera un índice aleatorio dentro del rango válido del array
    var indiceAleatorio = Math.floor(Math.random() * array.length);

    // Retorna el elemento correspondiente al índice aleatorio
    return array[indiceAleatorio];
  }
}
obtenerElementoAleatorio([1]);
module.exports = obtenerElementoAleatorio;
