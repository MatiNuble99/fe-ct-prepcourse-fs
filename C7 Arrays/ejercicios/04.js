function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([10, 10, 16, 12], 10);
//[10, 10, 16, 12], 10
//mi array = [ese]
module.exports = agregarItemAlFinalDelArray;
