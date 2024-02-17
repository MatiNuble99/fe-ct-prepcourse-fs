function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
    const resultado = num % 2;
    if (resultado !== 0){ // el simbolo ! cambia el valor en vez de igual seria distinto
        return true;
    } else{
        return false;
    }
}


module.exports = esImpar;