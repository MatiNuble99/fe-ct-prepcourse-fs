function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  // Crear un nuevo arreglo para almacenar los elementos que comienzan con "a"
  const filteredArray = [];

  // Iterar sobre el arreglo dado
  for (let i = 0; i < arrayOfStrings.length; i++) {
    // Verificar si el elemento actual comienza con "a"
    if (arrayOfStrings[i][0] === "a" || arrayOfStrings[i][0] === "A") {
      // Si comienza con "a" o "A", agregarlo al nuevo arreglo
      filteredArray.push(arrayOfStrings[i]);
    }
  }

  // Retornar el nuevo arreglo con los elementos que comienzan con "a"
  return filteredArray;
}

module.exports = filter;
