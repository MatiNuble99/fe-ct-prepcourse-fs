// function foo(arreglo){
//     var my_var = 0

//     for (var index = 0; index <arreglo.length; index++) {
//         if(arreglo[index] %3===0){
//             my_var+=arreglo[index]
//         }

//     }
//     return my_var
// }

// var resultado=foo([3,5,6,8,9])
// console.log(resultado)
// var arr=[1,2,3,4,5]
// console.log(arr.splice(1,2))

// var datos = [
//   { id: 1, nombre: "Juan" },
//   { id: 2, nombre: "Ana" },
//   { id: 3, nombre: "Pedro" },
// ];
// var result = datos
//   .filter(function (objeto) {
//     return objeto.id !== 2;
//   })
//   .reduce(function (acum, objeto) {
//     return acum + objeto.nombre;
//   });
//   console.log(result)

// var x = 5;
// do {
//   x--;
// } while (x >2);
// console.log(x)

// var num = 5;

// while (num > 0) {
//   console.log(num);
//   num--;
// }

// var resultado;

// switch (2) {
//   case 1:
//     resultado = "uno";
//     break;
//   case 2:
//     resultado = "dos";
//     break;
//   default:
//     resultado = "otro";
// }
// console.log(resultado);

// function foo(arreglo) {
//   var myVar = 0;
//   for (let index = 0; index < arreglo.length; index++) {
//     if (arreglo[index] % 3 === 0) {
//       myVar += arreglo[index];
//     }
//     return myVar;
//   }
// }
// console.log(foo([3, 5, 6, 8, 9]));
// var resultado = foo([3, 5, 6, 8, 9]);
// console.log(resultado);

// for (var i = 0; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

function foo(objeto) {
  var nuevoObjeto = {};
  for (var clave in objeto) {
    nuevoObjeto[clave] = objeto[clave] * 2;
  }
  return nuevoObjeto;
}

var resultado = foo({ a: 1, b: 2, c: 3 });
console.log(resultado);

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

function foo(obj1, obj2) {
  var resultado = {};
  for (var clave in obj1) {
    resultado[clave] = obj1[clave];
  }

  for (var clave in obj2) {
    resultado[clave] = obj2[clave];
  }

  return resultado;
}
var resultado = foo({ a: 1, b: 2 });
console.log(resultado);

function foo(str) {
  return str.substring(1, str.length - 1);
}

var resultado = foo("JavaScript");
