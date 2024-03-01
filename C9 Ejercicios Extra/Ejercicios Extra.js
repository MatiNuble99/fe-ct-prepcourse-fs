/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var newArray = [];

  // Iterar sobre las claves del objeto
  for (var prop in objeto) {
    // Verificar si la clave realmente pertenece al objeto (y no a su prototipo)
    if (objeto.hasOwnProperty(prop)) {
      // Agregar un nuevo arreglo con la clave y el valor al resultado
      newArray.push([prop, objeto[prop]]);
    }
  }

  return newArray;
}

let objeto = { D: 1, B: 2, C: 3 };
console.log(deObjetoAarray(objeto));
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  console.log(string.split("").sort());

  var contador = {};

  // Recorrer el string
  for (var i = 0; i < string.length; i++) {
    var letra = string[i];

    // Verificar si la letra ya está en el contador
    if (contador[letra] === undefined) {
      contador[letra] = 1; // Si no está, inicializar el contador en 1
    } else {
      contador[letra]++; // Si está, incrementar el contador
    }
  }

  // Ordenar el objeto alfabéticamente
  var contadorOrdenado = {};
  Object.keys(contador)
    .sort()
    .forEach(function (key) {
      contadorOrdenado[key] = contador[key];
    });

  return contadorOrdenado;
}

// let string = "adsjfdsfsfjsdjfhacabcsbajda"
// console.log(numberOfCharacters(string))

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var mayusculas = "";
  var minusculas = "";

  // Iterar sobre cada carácter del string
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);

    // Verificar si el carácter es una letra mayúscula o minúscula
    if (char === char.toUpperCase()) {
      // Si es mayúscula, agregarla al string de mayúsculas
      mayusculas += char;
    } else {
      // Si es minúscula, agregarla al string de minúsculas
      minusculas += char;
    }
  }

  // Retornar la concatenación de mayúsculas y minúsculas
  return mayusculas + minusculas;
}

let string = "soyHENRY";
console.log(capToFront(string));
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  console.log(frase)
  console.log(frase.length)
  let nuevaFrase=""
  for (let index = 0; index < frase.length; index++) {
console.log(frase[index])
let acumulador =0
acumulador = frase[index]+acumulador
    if(frase[index]=== " ")
  }
  
}
let frase = "The Henry Challenge is close!";
console.log(asAmirror(frase));
function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
