function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Si no se recibe una función callback entonces se debe retornar el string original.
  // Tu código:}

  // Verifica si se ha proporcionado una función de callback
  if (typeof callback === "function") {
    // Si se proporciona una función de callback, llama a esa función con el string como argumento
    return callback(string);
  } else {
    // Si no se proporciona una función de callback, simplemente devuelve el string original
    return string;
  }
}

module.exports = cambiarCadena;
