function encontrarElemento(num, array) {
  // Busca el número pasado por argumento dentro del array.
  // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  console.log(array);
  console.log(num);
  for (var i = 0; i < array.length; i++) {
    if (num === array[i]) {
      return i;
    }
  }
  return -1;
}

module.exports = encontrarElemento;

encontrarElemento(2, [1, 2, 3]);
//for(var i= 0; i<array.length; i++){
//array.foreach(num === array[i])
//return array(i)
//} else return -1
