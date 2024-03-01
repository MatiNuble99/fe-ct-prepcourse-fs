function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  let i = 2;
  while (i <= numero) {
    if (numero % i === 0) {
      return false;
    }
    i++;
  }
  return true;
  //si el numero es divisible por otro numero que no sea el mismo
  /**si el numero es divisible por otro numero que no sea el mismo
   * entonces no es primo
   * si solo se puede dividir por si mismo y 1 ES PRIMO
   */
  // if (numero === 2) {
  //   return true;
  // }
  // if (numero === 3) {
  //   return true;
  // }
  // if (numero % 2 === 0) {
  //   return false;
  // } else if (numero % 3 === 0) {
  //   return false;
  // } else return true;
}
//numeros primos = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.)
let numero = 13;
console.log(esNumeroPrimo(numero));
module.exports = esNumeroPrimo;
