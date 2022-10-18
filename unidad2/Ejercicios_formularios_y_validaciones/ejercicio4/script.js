if (typeof Storage !== "undefined") {
    alert("LocalStorage compatible");
} else {
    alert("LocalStorage no es compatible");
}

const $Form = document.getElementById("ej4");
const $Fecha = document.getElementById("fechacrea");
const $Cocinero = document.getElementById("cocinero");
const $Destinatario = document.getElementById("destinatario");
const $Gramos = document.getElementById("gramos")
const $Composicion = document.getElementById("composicion");
const $Cuenta = document.getElementById("cuenta");

function handleSubmit(e) {
  e.preventDefault();
  const fecha = $Fecha.value;
  const cocinero = $Cocinero.value;
  const destinatario = $Destinatario.value;
  const gramos = $Gramos.value;
  const composicion = $Composicion.value;
  const cuenta = $Cuenta.value;

  if (cocinero == false || compruebacocinero(cocinero) == false) {
    alert("el cocinero no es valido");
  } else if (destinatario == false || compruebadestinatario(destinatario) == false) {
    alert("el destinatario no es valido");
  }  else if (composicion == false || compruebacomposicion(composicion) == false){
    alert("la composicion no es valida");
  } else if (cuenta == false || compruebacuenta(cuenta) == false){
    alert("la cuenta es incorrecta");
  } else {
    let registrarUsuario = {
      fecha: fecha,
      cocinero: cocinero,
      destinatario: destinatario,
      gramos: gramos,
      composicion: composicion,
      cuenta: cuenta
    };
    let nuevoUsuario = JSON.stringify(registrarUsuario);
    console.log(nuevoUsuario);

    localStorage.setItem("fecha", registrarUsuario.fecha);
    localStorage.setItem("cocinero", registrarUsuario.cocinero);
    localStorage.setItem("destinatario", registrarUsuario.destinatario);
    localStorage.setItem("gramos", registrarUsuario.gramos);
    localStorage.setItem("composicion", registrarUsuario.composicion);
    localStorage.setItem("cuenta", registrarUsuario.cuenta);
  }
   
}

function recargar(){
$Fecha.value = localStorage.getItem("fecha");
$Cocinero.value = localStorage.getItem("cocinero");
$Destinatario.value = localStorage.getItem("destinatario");
$Gramos.value = localStorage.getItem("gramos");
$Composicion.value = localStorage.getItem("composicion");
$Cuenta.value = localStorage.getItem("cuenta");
}


function compruebacocinero(cocinero) {
  const validacion =
  /^[A-Z]{2}[\W][0-9]{4}$/;
  return validacion.test(cocinero);
}

function compruebadestinatario(destinatario) {
  const validacion =
  /^[A-Z]{2,3}(_alburquerque:)[0-9]{4}$/;
  return validacion.test(destinatario);
}


function compruebacomposicion(composicion) {
    let ver;
    const validacion = /^[0-9]+(g)([A-Z]{1,2}[0-9]+)+$/;
    return validacion.test(composicion);
}

function compruebacuenta(cuenta){
    const validacion = /^[a-zA-Z0-9]{8,10}$/;
    return validacion.test(cuenta);
}

$Form.addEventListener("submit", handleSubmit);
