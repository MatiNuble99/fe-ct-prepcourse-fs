function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
    let producto = 1;
    if (a < b) {
        for (let index = a; index <= b; index++) {
            producto *= index;
        }
    } else {
        for (let index = b; index <= a; index++) {
            producto *= index;
        }
    }
    return producto;
}

module.exports = productoEntreNúmeros;