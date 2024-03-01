function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  let stringsUnidas = str1 + str2 + str3;
  let stringAleatoria = "";
  for (let i = 0; i < stringsUnidas.length; i++) {
    let indice = Math.floor(Math.random() * stringsUnidas.length);
    stringAleatoria += stringsUnidas.charAt(indice);
    if (stringsUnidas[i] === "") {
      continue;
    }
  }
  return stringAleatoria;
}

module.exports = combine;
