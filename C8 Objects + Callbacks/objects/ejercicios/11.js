function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

  // Verificamos si el método existe en el objeto
  if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
    // Invocamos el método
    objeto[metodo]();
  } else {
    console.log(
      "El método especificado no existe en el objeto o no es una función."
    );
  }
}

module.exports = invocarMetodo;
