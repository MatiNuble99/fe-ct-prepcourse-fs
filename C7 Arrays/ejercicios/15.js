function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  console.log(array);
  if (array.length === 0) return 0;
  var max = Math.max(...array);
  console.log(array.indexOf(max));
  return array.indexOf(max);
}
encontrarIndiceMayor([1, 2, 3, 4, 5]);
module.exports = encontrarIndiceMayor;
