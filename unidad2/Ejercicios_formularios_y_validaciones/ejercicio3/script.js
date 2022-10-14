const $Form = document.getElementById("ej3");
const $DNI = document.getElementById("dni");
const $Nombre = document.getElementById("nombre");
const $Apellidos = document.getElementById("apellidos");
const $Nacimiento = document.getElementById("nacimiento")
const $Email = document.getElementById("email");
const $Web = document.getElementById("web");
const $Contrasena = document.getElementById("contraseña");

function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const nombre = $Nombre.value;
  const apellidos = $Apellidos.value;
  const nacimiento = $Nacimiento.value;
  const email = $Email.value;
  const web = $Web.value;
  const contraseña = $Contrasena.value;

  if (dni == false || compruebaDNI(dni) == false) {
    alert("el dni no es valido");
  } else if (nombre == false || compruebaNombre(nombre) == false) {
    alert("el nombre no es valido");
  } else if (apellidos == false || compruebaApellidos(apellidos) == false) {
    alert("el apellido no es valido");
  } else if (email == false || compruebaemail(email) == false) {
    alert("el email no es valido");
  } else if (web == false || compruebaweb(web) == false){
    alert("la web no es valida");
  } else if (contraseña == false || compruebacontrasena(contraseña) == false){
    alert("la contraseña es incorrecta");
  } else {
    let registrarUsuario = {
      dni: dni,
      nombre: nombre,
      apellidos: apellidos,
      nacimiento: nacimiento,
      email: email,
      web: web,
      contraseña: contraseña
    };
    let nuevoUsuario = JSON.stringify(registrarUsuario);
    console.log(nuevoUsuario);
  }
   
}

function compruebaDNI(dni) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
  return validacion.test(dni);
}


function compruebaNombre(nombre) {
  const validacion =
    /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(nombre);
}

function compruebaApellidos(apellido) {
  const validacion =
    /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(apellido);
}

function compruebaemail(email) {
  const validacion = /^([a-zA-Z]+)[@]([a-z]+)[.][a-z]{3}$/;
  return validacion.test(email);
}

function compruebaweb(web) {
    const validacion = /^(https:)[/][/](www.[a-z]+[.][a-z]{3})$/;
    return validacion.test(web);
}

function compruebacontrasena(contraseña){
    const validacion = /^[a-zA-Z0-9]{8,10}$/;
    return validacion.test(contraseña);
}

$Form.addEventListener("submit", handleSubmit);
