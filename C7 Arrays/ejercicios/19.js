function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // Verificar si no se pasaron argumentos
  if (arguments.length === 0) {
    return 0; // Si no se pasaron argumentos, retornar 0
  } else if (arguments.length === 1) {
    return arguments[0]; // Si se pasó un solo argumento, retornarlo
  } else {
    // Si se pasaron múltiples argumentos, multiplicarlos
    var producto = 1;
    for (var i = 0; i < arguments.length; i++) {
      producto = producto * arguments[i];
    }
    return producto;
  }
}

module.exports = multiplicarArgumentos;
