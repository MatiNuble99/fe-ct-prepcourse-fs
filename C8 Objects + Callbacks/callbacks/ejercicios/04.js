function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retornar nada.
  // Tu código:
  //   var newArray = [];
  //   var flag = 0;
  //   for (let index = 0; index < arrayOfNumbers.length; index++) {
  //     flag = flag + arrayOfNumbers[index];
  //     newArray.push(flag);
  //     console.log(flag);
  //   }

  // Suma todos los números del arreglo.
  const suma = arrayOfNumbers.reduce(function (acum, numero) {
    return (acum = acum + numero);
  });

  // Pasa el resultado de la suma como argumento al callback.
  cb(suma);
}

module.exports = sumarArray;
