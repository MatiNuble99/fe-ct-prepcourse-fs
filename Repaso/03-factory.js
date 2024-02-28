let user = {
  email: "matiasnuble@holamundo.com",
  name: "Matias",
  activo: true,
  recuperarClave: function () {
    console.log("recuperando clave");
  },
};

let user1 = {
  id: 2,
  email: "chanchito@holamundo.com",
  name: "Chanchito",
  activo: false,
  recuperarClave: function () {
    console.log("recuperando clave");
  },
};

function crearUsuario(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("recuperando clave");
    },
  };
}

let user2 = crearUsuario("Matias", "matias@holamundo.io");
let user3 = crearUsuario("Giuly", "giuly@holamundo.io");
