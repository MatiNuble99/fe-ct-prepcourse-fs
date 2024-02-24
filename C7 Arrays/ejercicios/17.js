function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var flag = 0;
  for (var i = 0; i < arrayOfNums.length; i++) {
    flag = flag + arrayOfNums[i];
  }
  console.log(flag);
  return flag;
}
agregarNumeros([1, 2, 3, 4, 5, 6]);
module.exports = agregarNumeros;
