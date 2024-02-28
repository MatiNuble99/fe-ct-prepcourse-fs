function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:

  // Verificamos si el objeto tiene la propiedad "numeroMisterioso"
  if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
    // Multiplicamos el número por 5 y lo retornamos
    return objetoMisterioso.numeroMisterioso * 5;
  } else {
    console.log("El objeto no tiene la propiedad 'numeroMisterioso'.");
    return null; // Otra opción podría ser lanzar un error en vez de devolver null
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
