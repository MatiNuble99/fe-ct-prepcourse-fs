var arreglo4 = [
  "numero1",
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["1", true, [1, , 2, 3, 4]],
];

for (var i = 0; i < arreglo4.length; i++) {
  if (Array.isArray(arreglo4[i])) {
    for (var j = 0; j < arreglo4[i].length; j++) {
      console.log(arreglo4[i][j]);
    }
  }
}
