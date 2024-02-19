function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
    // Convertir el número a cadena y obtener la longitud
    let numStr = num.toString();
    let longitud = numStr.length;
  
    // Verificar si la longitud es igual a 3
    if (longitud === 3) {
      return true;
    } else {
      return false;
    }
}

module.exports = tieneTresDigitos;
