function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var newArray = [];
  var funcion = array.map(function (num) {
    newArray.push(cb(num));
  });
  return newArray;
  // // Crea un nuevo arreglo para almacenar los resultados
  // const newArray = [];

  // // Itera sobre el arreglo original
  // for (let i = 0; i < array.length; i++) {
  //   // Llama al callback con el elemento actual y guarda el resultado en el nuevo arreglo
  //   newArray.push(cb(array[i]));
  // }

  // // Retorna el nuevo arreglo con los resultados
  // return newArray;
}

module.exports = map;
