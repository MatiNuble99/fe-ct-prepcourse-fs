const user = { id: 1, name: "matias" };
//al poner const a la variable no podemos cambiar su valor
//es decir no podemos hacer que se olvide que teine un objeto como valor

user.name = "Nicolas";
user.guardar = function () {
  console.log("Guardando Nicolas", user.name);
};

user.guardar();
delete user.name;
delete user.guardar;
