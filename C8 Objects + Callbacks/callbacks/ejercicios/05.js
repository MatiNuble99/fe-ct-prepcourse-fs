function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  var mismoArreglo = array.forEach(function (elemento) {
    cb(elemento);
  });
}

module.exports = forEach;
