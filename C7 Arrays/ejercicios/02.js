function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    const element = array[i];
    console.log(array[array.length - 1]);
    return array[array.length - 1];
  }
}

module.exports = devolverUltimoElemento;

devolverUltimoElemento([2, 3, 5, "casas"]);
