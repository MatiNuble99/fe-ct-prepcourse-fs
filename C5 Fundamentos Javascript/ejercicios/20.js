function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  // const esVocal = String(letra);
  // if (esVocal === "a" || esVocal === "e" || esVocal === "i" || esVocal === "o" || esVocal === "u") {
  //     return "Es vocal";
  // } else if (esVocal.length !== 1) {
  //     return "Dato incorrecto";
  // } else {
  //     return "Dato incorrecto";
  // }
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else if (letra.length > 1) {
    return "Dato incorrecto";
  } else return "Dato incorrecto";
}

module.exports = esVocal;
