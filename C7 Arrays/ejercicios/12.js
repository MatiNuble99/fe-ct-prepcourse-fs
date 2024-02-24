function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  console.log(array);
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length === 0) {
      return undefined;
    }
    if (typeof array[i] === "string") {
      nuevoArray.push(array[i].toUpperCase());
    } else {
      nuevoArray.push(array[i]);
    }
  }
  console.log(nuevoArray);
  return nuevoArray;
}

convertirStringAMayusculas(["hello", "world"]);
module.exports = convertirStringAMayusculas;
