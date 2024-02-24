function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  console.log(array);
  var cantidad = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      cantidad.push(array[i]);
    }
  }
  console.log(cantidad.length);
  return cantidad.length;
}
contarElementosMayoresA10([10, 20, 30, 40, 50]);
module.exports = contarElementosMayoresA10;
