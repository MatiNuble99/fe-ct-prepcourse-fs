function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var newArray = [];
  var arrayTablaSeis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var multi = arrayTablaSeis.forEach(function (elemento) {
    return elemento * 6;
  });
  return newArray.push(multi);
}
tablaDelSeis();
//[0,1,2,3,4,5,6,7,.....60]
module.exports = tablaDelSeis;
