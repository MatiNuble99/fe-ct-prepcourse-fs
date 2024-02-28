const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  // return Object.keys(objeto).length;

  //

  // var cantidadPropiedades = 0;
  // for (var propiedad in objeto) {
  //   if (objeto.hasOwnProperty(propiedad)) {
  //     cantidadPropiedades++;
  //   }
  // }
  // return cantidadPropiedades;

  //

  var cantidadPropiedades = Reflect.ownKeys(objeto).length;
  return cantidadPropiedades;
};

module.exports = contarPropiedades;
