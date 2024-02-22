//EJECUTAR EN TERMINAL PARA ENTENDER
// function suma() {
//   console.log(5 + 5);
//   console.log(10 + 3);
//   return 53;
// }

// function resta() {
//   console.log(5 + 5);
//   console.log(10 + 3);
//   return 10 - 3;
// }

// console.log("1", suma); //suma indica la funcion retorna el console.log
// console.log("2", resta);

// var resultado = suma();
// console.log("3", resultado);

function suma(a, b, c, d, e, f) {
  // a hasta f son argumentos
  var numero1 = a;
  var numero2 = b;
  var suma = d + e;

  console.log("1", numero1, a);
  console.log("2", numero2, b);
  console.log("3", suma, d, e);
  return f;
}

suma(5, 3, 5, 4, 5, 6); //aca se llaman parametros 5 siendo a 3 siendo b y asi siguiente
//si pongo mas parametros que argumentos no pasa nada. esos parametros se pierden

var resultado = suma(5, 3, 5, 4, 5, 6);

console.log(resultado); //en la terminal mostraria el return de la funcion

function saludar(nombre) {
  return "hola", nombre;
}
