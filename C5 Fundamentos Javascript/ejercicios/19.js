function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  } else if (num === 0) {
    return false;
  }

  // if (num > 0) {
  //   return "Es positivo";
  // }

  // if (num < 0) {
  //   return "Es negativo";
  // }

  // if (num === 0) {
  //   return false;
  // }
}
let num = 0;
console.log(esPositivo(num));
module.exports = esPositivo;
