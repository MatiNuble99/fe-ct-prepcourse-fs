function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código: 
    if (typeof valor === 'string') {
        console.log("Este es un String:", valor);
        return "Este es un String:" + valor;
    } else if (typeof valor === 'number') {
        console.log("Este es el Numero:", valor);
        return "Este es el Numero: " + valor;
    } else if (typeof valor === 'boolean'){
        console.log("Este es un booleano:", valor);
        return "Este es un booleano:" + valor;
    }
  }

module.exports = esTipoDato;