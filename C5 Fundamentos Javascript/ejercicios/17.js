function esPar(num){
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  const resultado = num % 2;
    if (resultado == 0){
        return true;
    } else{
        return false;
    }
}

module.exports = esPar;
