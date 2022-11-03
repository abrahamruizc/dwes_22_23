const $Form = document.getElementById("ej4");
const $DNI = document.getElementById("dni");
const $Nombre = document.getElementById("nombre");
const $Fecha = document.getElementById("fecha");
const $hora = document.getElementById("hora");
const $Email = document.getElementById("email");
const $Telefono = document.getElementById("telefono");


function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const nombre = $Nombre.value;
  const fecha = $Fecha.value;
  const hora = $hora.value;
  const email = $Email.value;
  const telefono = $Telefono;
  

  if (dni == false || compruebaDNI(dni) == false) {
    alert("el dni no es valido");
  } else if (nombre == false || compruebaNombre(nombre) == false) {
    alert("el nombre no es valido");
  } else {
    let registrarUsuario = {
      dni: dni,
      nombre: nombre,
        fecha: fecha,
        hora: hora
    };
    let nuevoUsuario = JSON.stringify(registrarUsuario);
    console.log(nuevoUsuario);

    localStorage.setItem("dni", registrarUsuario.dni);
    localStorage.setItem("nombre", registrarUsuario.nombre);
    localStorage.setItem("fecha", registrarUsuario.fecha);
    localStorage.setItem("hora", registrarUsuario.hora);
    localStorage.setItem("fecha", registrarUsuario.fecha);
    localStorage.setItem("hora", registrarUsuario.hora);
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


$Form.addEventListener("submit", handleSubmit);