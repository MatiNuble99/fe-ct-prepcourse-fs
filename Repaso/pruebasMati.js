//https://www.youtube.com/watch?v=QoC4RxNIs5M&t=
/*EJERCICIO 5
Crear algoritmo que devuelva numero
menor y mayor de un array.
*/

let arreglo = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0]; //asigno valor al numero inicial del array
  let mayor = arr[0]; //igual al menor
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);

/**EJERCICIO 6
 * cear algoritmo que devuelva cantidad
 * de numeros positivos de un array
 *
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let cantidad = 0;
  for (elemento of arr) {
    if (elemento > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let resultaado = cuantosPositivos(array);
console.log(resultado);

/**EJERCICIO 7
 * crea algoritmo que devuelva
 * el precio del producto
 * mas impuesto
 */
function precioCompleto(precio, impuesto) {
  return precio + precio * impuesto;
}

let resultado = precioCompleto(19.9, 0.15);
console.log(resultadoS);

/**EJERCICIO 8
 * crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let arreglo2 = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Chanchito",
  },
];
//los arrays de pares son arrays de arrays
let pares = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }],
];

function toPairs(arr) {
  let pairs = [];
  for (idx in arr) { //for in para que me devuelva el indice (idx) del arreglo
    let elemento = arr[idx]; //asigno variable(elemento) diga lo que hay en el elemento del array
    pairs[idx] = [elemento.id, elemento]; //le asigno valor al idx del nuevo array
    // el nuevo valor va a ser el id del elemento = 1 2 3 luego el elemento = objeto
  }
}

let resultado8 = toPairs(arreglo2);
console.log(resultado8);
