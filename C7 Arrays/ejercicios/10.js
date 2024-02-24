function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (var i = 0; i < array.length; i++) {
    // Verificar si el elemento actual es un string con más de 5 caracteres
    if (typeof array[i] === "string" && array[i].length > 5) {
      return array[i]; // Si es así, retornar el string
    }
  }
  // Si ningún elemento cumple con las condiciones, retornar undefined
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
