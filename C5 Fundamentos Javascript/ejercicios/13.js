function sonIguales(x, y) { //esto es una instancia de objetos
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  const num = Number;
    this.x = num; //this. se utiliza para asignar valor al argumento
    this.y = num;
    if (x == y){
        return true;
    } else {
        return false;
    }
}

module.exports = sonIguales;