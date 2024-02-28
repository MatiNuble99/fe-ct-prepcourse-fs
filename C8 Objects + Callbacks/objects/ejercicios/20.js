function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  let sumaLikes = 0; // Variable para almacenar la suma total de likes

  // Iterar sobre cada post del usuario
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    // Acceder al valor de la propiedad "likes" del post actual y sumarlo
    sumaLikes += objetoUsuario.posts[i].likes;
  }

  return sumaLikes; // Retornar la suma total de likes
}

module.exports = sumarLikesDeUsuario;
