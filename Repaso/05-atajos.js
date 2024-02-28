let objeto = {};
// ===
let objet = new Object();

/**
 *new Array(); []
 *new String(); "" '' 
 new Number(); 12
 new Boolean(); true false
 */

function Usuario() {
  this.name = "chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);
