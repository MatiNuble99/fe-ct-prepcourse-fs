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

// let string = "soyHENRY";
// console.log(capToFront(string));

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // Dividir la frase en palabras individuales
  var palabras = frase.split(" ");
  console.log(palabras);
  // Iterar sobre cada palabra y revertirla
  var palabrasInvertidas = palabras.map(function (palabra) {
    return palabra.split("").reverse().join("");
  });
  console.log(palabrasInvertidas);
  // Unir las palabras invertidas en un nuevo string
  var fraseInvertida = palabrasInvertidas.join(" ");

  // Retornar la frase con las palabras invertidas
  return fraseInvertida;
}

let frase = "The Henry Challenge is close!";
console.log(asAmirror(frase));

function capicua(numero) {
  // Si el número que recibes es capicúa debes retr el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeroStr = numero.toString();
  console.log(numeroStr);
  console.log(numeroStr.charAt(i));
  var longitud = numeroStr.length;
  console.log(longitud);

  for (var i = 0; i < longitud; i++) {
    for (var j = longitud - 1; j >= 0; j--)
      if (numeroStr[i] === numeroStr[j]) {
        return "Es capicua";
      } else return "No es capicua";
  }
}
let numero = 2332;
console.log(capicua(numero));
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var arrayLetras = string.toLowerCase().split("");
  var eliminarLetrasDelArray = arrayLetras.filter(function (element) {
    return element !== "a" && element !== "b" && element !== "c";
  });
  var nuevoString = eliminarLetrasDelArray.join("");
  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var newArray = [];
  for (let index = 0; index < arrayOfStrings.length; index++) {
    for (let j = 1; j < arrayOfStrings.length; j++) {
      if (arrayOfStrings[index].length <= arrayOfStrings[j].lenght) {
        return newArray.push(arrayOfStrings[index]);
      } else return newArray.push(arrayOfStrings[j]);
    }
  }
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var newArray = [];
  for (let index = 0; index < array1.length; index++) {
    for (let j = 0; j < array2.length; j++)
      if (array1[index] === array2[j]) {
        newArray.push(array1[index]);
        break;
      }
  }
  return newArray;
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
