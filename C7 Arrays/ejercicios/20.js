function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // return array.every(function (elemento) {
  //   return elemento === array[0];
  // });
  for (nums of array) {
    if (nums === array[0]) {
      return true;
    } else return false;
  }
}

module.exports = todosIguales;
