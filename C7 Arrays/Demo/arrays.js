[]; //asi se representa un array

var arreglo1 = [1, 23323.4, 34454.4, 56, 7, 8];
// index        0,  1     , 2       ,3 ,  4,5
// index = la posicion en la que se encuentra cada uno de los elementos
// empieze en 0
var arreglo2 = [];
//lo que esta dentro de un arreglo vacio cuent como undefined

var arreglo3 = [1, "234", true, , , , , 234, "string"];

var arreglo4 = [
  "numero1",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, , [1, 3, 4, "roto"], "string"],
];

//console.log(arreglo1[0])//muestra el elemento segun posicion del index
// console.log(arreglo4[1][2]);//para ir dentro de otros arrays
// for (var i = 0; i < arreglo4.length; i++) {
//   console.log(arreglo4[i]);
// }
//SE UTILIZA UN BUCLE FOR para investigar que hay dentro del array
//array.length = empieza desde 1 entonces le suma 1 elemento al array
//por eso en el bucle for se indica que termine antes : i

for (var i = 0; i < arreglo4.length; i++) {
  if (Array.isArray(arreglo4[i])) {
    for (var j = 0; j < arreglo4[i].length; j++) {
      console.log(arreglo4[i][j]);
    }
  }
}
