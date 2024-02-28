var deporte = {
  conBalon: ["Football", "Basketeball", "Voley"],
  sinBalon: ["Boxeo", "Surf", "Run"],
};

var contacto = {
  nombre: "Matias",
  edad: 25,
  estudios: { esProgramador: true },
};

//Dot-Notation

contacto.nombre = "Matias Nuble";
// console.log(contacto.nombre);
contacto.edad = 79;
// console.log(contacto.edad);
var autos = {};
autos.marca = ["Ford", "Audi", "Ferrari"];

delete autos.marca;
// console.log(autos);

var misFunciones = {
  saludar: function () {
    // console.log("Hola");
  },
};
misFunciones.saludar();

//Bracket-Notation

var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };
atuendos["piernas"] = ["Bermudas", "Pantalones"];
// console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno] = ["Frutas", "Vegetales"];
  comidas[propDos] = ["Hamburguesa", "Papas fritas"];
};
diferenciaDeNotaciones("saludable", "noSaludable");
// console.log(comidas);

//hasOwnProperty (true,false) ((Metodo de objeto))
//para validar propiedad del objeto
var libro = { autor: "Borges", genero: "Policial", año: 1998 };
var tienePropiedad = libro.hasOwnProperty("autor");
// console.log(tienePropiedad);
//Object.keys (muestra propieades del objeto)
var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

//FOR IN para recorrer el objeto
var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (var prop in mundo) {
  console.log("Esta es la propiedad:" + " " + prop);
  console.log("Este es el valor:" + " " + mundo[prop]);
}
// console.log(mundo);

//THIS referencia al contexto
var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: function () {
    console.log("Mi perro es un:" + this.raza);
  },
};

mascota.info();
