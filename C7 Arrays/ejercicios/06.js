function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  // console.log(array)
  // var nuevoArray = [];
  // for (var i = array.length - 1; i >= 0; i--) {
  //   console.log(array[i])
  //   nuevoArray.push(array[i]);
  // }
  // return nuevoArray;
  console.log(array.reverse());
  return array.reverse();
}
invertirArray([9, 8, 7, 6, 5, 4, 3, 2, 1]);
module.exports = invertirArray;
