function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  for (const key in objetoUsuario) {
    if (key === "email" && objetoUsuario[key] !== null) {
      return true;
    }
  }
  return false;
}

module.exports = tieneEmail;
