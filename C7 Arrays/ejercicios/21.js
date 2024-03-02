function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arrayMeses = array.filter(function (element) {
    return (
      element === "Enero" || element === "Marzo" || element === "Noviembre"
    );
  });

  if (arrayMeses.length !== 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return arrayMeses;
  }

  // var nuevoArray = [];
  // for (var i = 0; i < array.length; i++) {
  //   if (
  //     array[i] === "Enero" ||
  //     array[i] === "Marzo" ||
  //     array[i] === "Noviembre"
  //   ) {
  //     nuevoArray.push(array[i]);
  //   }
  // }
  // if (nuevoArray.length !== 3) {
  //   return "No se encontraron los meses pedidos";
  // } else {
  //   return nuevoArray;
  // }
}

module.exports = mesesDelAño;
