function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  if (objetoUsuario.hasOwnProperty("password")) {
    objetoUsuario["password"] = nuevaPassword;
  }
  return objetoUsuario;
}

module.exports = actualizarPassword;
