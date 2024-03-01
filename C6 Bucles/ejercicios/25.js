function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  for (let index = 0; index < string.length; index++) {
    for (let j = string.length - 1; j >= 0; j--) {
      if (string[index] === string[j]) {
        return true;
      } else return false;
    }
  }
}

module.exports = esPalindromo;
