// TABLA DE VERDAD

// valo1       Operador        valor2      resultado
// true        &&              true        true
// true        &&              false       false
// false       &&              true        false
// false       &&              false       false

// true        ||          true            true
// true        ||            false          true
// false       ||             true         true
// false       ||             false        false

// BUCLES

//FOR

//se utiliza cuando conocemos de antemano la cantidad
//exacta de pasos que queremos ejecutar

// for(inicializacion;condicion;incremento/decremento){

// }

// for (var i = 0; i <= 200; i++) {
//   console.log(i);
// }

//WHILE

// var i = 0; //crear iterador siempre
// var edad = 18;
// while (i < 200) {
//   if (i === 18 && edad === 18) {
//     console.log("pasaste por el 18");
//   }
//   i++;
// }

// var i = 0;
// do {
//   //hace el do siempre una vez ejemplo : var i = 201 do lo incrementa
//   //al menos una vez al 202 aunque el while (i<200)
//   console.log(i);

//   i++;
// } while (i < 200);

// var edad = 18;

// for (let i = 0; i < 200; i++) {
//   if (i % 2 === 0) {
//     continue; // la funcionalidad de CONTINUE es que salte esa iteracion
//     console.log(i);
//   } else {
//     console.log(i);
//   }
// }

for (let i = 0; i < 200; i++) {
  if (i == 20) {
    break; // la funcionalidad de BREAK quiebra y para la iteracion
    console.log(i);
  } else {
    console.log(i);
  }
}

var entradasDePersonas = true;
var noHayMasPesonas = true;

while (entradasDePersonas) {
  console.log("entro una persona");
  if (noHayMasPesonas) {
    break;
  }
}
