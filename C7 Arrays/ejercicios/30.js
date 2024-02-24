function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var elementosVistos = new Set();

  for (var i = 0; i < numeros.length; i++) {
    if (elementosVistos.has(numeros[i])) {
      return numeros[i]; // Se encontró un elemento repetido, lo retornamos
    } else {
      elementosVistos.add(numeros[i]); // Agregamos el elemento actual al conjunto
    }
  }

  return null; // No se encontró ningún elemento repetido

  // En este código:

  // Creamos un nuevo conjunto llamado elementosVistos utilizando new Set(). Este conjunto nos permitirá realizar un seguimiento de los elementos que ya hemos visto en el array.
  // Iteramos sobre el array de números utilizando un bucle for.
  // En cada iteración, verificamos si el elemento actual (numeros[i]) ya está presente en el conjunto elementosVistos utilizando el método has(). Si lo está, significa que hemos encontrado un elemento repetido y lo retornamos.
  // Si el elemento actual no está presente en el conjunto, lo agregamos al conjunto utilizando el método add().
  // Si terminamos de iterar sobre todo el array y no encontramos ningún elemento repetido, retornamos null.
}

module.exports = encontrarElementoRepetido;
