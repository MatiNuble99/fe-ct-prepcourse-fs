function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // this.x = Number.isInteger;
  //   this.y = Number.isInteger;
  //   if(x>=y){
  //       return x;
  //   } else return y;
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else x <= y || x > y;
  return x;
}

module.exports = obtenerMayor;
