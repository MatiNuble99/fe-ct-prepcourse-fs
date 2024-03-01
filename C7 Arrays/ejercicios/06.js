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
  if (array.length > 1) {
    return array.reverse();
  } else return array;
}

let array1 = [1, 2, 3];
let array2 = [1, "hola", true, null, undefined];
let array4 = [];
let array3 = [4];
module.exports = invertirArray;
