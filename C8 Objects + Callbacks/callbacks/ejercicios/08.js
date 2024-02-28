const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  // Itera sobre el array dado
  for (let i = 0; i < array.length; i++) {
    // Llama al callback para evaluar si el elemento actual es el buscado
    if (callback(array[i])) {
      // Si el callback retorna true, devuelve el elemento
      return array[i];
    }
  }
  // Si no se encuentra el elemento, devuelve el mensaje
  return "No se encontró el elemento";
};

module.exports = buscarElemento;
