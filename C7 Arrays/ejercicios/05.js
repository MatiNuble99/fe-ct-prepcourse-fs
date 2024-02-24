function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  console.log(array);
  return array;
}
agregarItemAlComienzoDelArray([10, 2], 4);
module.exports = agregarItemAlComienzoDelArray;
