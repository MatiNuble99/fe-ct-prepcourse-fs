function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  console.log(array);
  return array;
}

agregarItemAlFinalDelArray([10, 10, 16, 12], 10);
//[10, 10, 16, 12], 10
//mi array = [ese]
module.exports = agregarItemAlFinalDelArray;
