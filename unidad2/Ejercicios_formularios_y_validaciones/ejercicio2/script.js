const $Form = document.getElementById("ej2");
const $Nombre = document.getElementById("nombre");
const $Apellidos = document.getElementById("apellidos");
const $Email = document.getElementById("email");
const $Web = document.getElementById("web");

function handleSubmit(e) {
  e.preventDefault();
  
  const nombre = $Nombre.value;
  const apellidos = $Apellidos.value;
  const email = $Email.value;
  const web = $Web.value;

  if (nombre == false || compruebaNombre(nombre) == false) {
    alert("el nombre no es valido");
  } else if (apellidos == false || compruebaApellidos(apellidos) == false) {
    alert("el apellido no es valido");
  } else if (email == false || compruebaemail(email) == false) {
    alert("el email no es valido");
  } else if (web == false || compruebaweb(web) == false){
    alert("la web no es valida");
  } else {
    let registrarUsuario = {
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      web: web
    };
    let nuevoUsuario = JSON.stringify(registrarUsuario);
    console.log(nuevoUsuario);
  }
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

$Form.addEventListener("submit", handleSubmit);
