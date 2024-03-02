function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var arrayTablaSeis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var multiplicar = arrayTablaSeis.map(function (elemento) {
    return elemento * 6;
  });

  return multiplicar;
}

//   var tabla = [];
//   for (var i = 0; i <= 10; i++) {
//     tabla.push(i * 6);

//   }
//   return tabla;
// }

tablaDelSeis();
//[0,1,2,3,4,5,6,7,.....60]
module.exports = tablaDelSeis;
