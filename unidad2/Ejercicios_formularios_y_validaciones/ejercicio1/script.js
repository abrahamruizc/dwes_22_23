const $Form = document.getElementById("ej1");
const $DNI = document.getElementById("dni");
const $Nombre = document.getElementById("nombre");
const $Apellidos = document.getElementById("apellidos");
const $Telefono = document.getElementById("telefono");
const $Escribe = document.getElementById("escribe");
const $Hora = document.getElementById("hora");

let contador = 0;

function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const nombre = $Nombre.value;
  const apellidos = $Apellidos.value;
  const telefono = $Telefono.value;
  const escribe = $Escribe.value;
  const hora = $Hora.value;

  if (dni == false || compruebaDNI(dni) == false) {
    contador++;
    alert("el dni no es valido");
  } else if (nombre == false || compruebaNombre(nombre) == false) {
    contador++;
    alert("el nombre no es valido");
  } else if (apellidos == false || compruebaApellidos(apellidos) == false) {
    contador++;
    alert("el apellido no es valido");
  } else if (telefono == false || compruebaTelefono(telefono) == false) {
    contador++;
    alert("el telefono no es valido");
  } else {
    let registrarUsuario = {
      dni: dni,
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      escribe: escribe,
      hora: hora,
    };
    let nuevoUsuario = JSON.stringify(registrarUsuario);
    console.log(nuevoUsuario);
    
  }

    setCookie("fallos", toString(contador), 1);
    document.getElementById("cookies").value =  contador;
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

function compruebaTelefono(telefono) {
  const validacion = /^[+][3][4]+\s[0-9]{9}$/;
  return validacion.test(telefono);
}
$Form.addEventListener("submit", handleSubmit);
