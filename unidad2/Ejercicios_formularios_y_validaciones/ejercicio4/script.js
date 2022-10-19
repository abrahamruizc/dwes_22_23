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
  } 
  else {
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
    const validacion = /^[0-9]+(g)([A-Z]{1,2}[0-9]+)+$/;
    let ver= String($Gramos.value);
    let mezcla= String();
    console.log(composicion);
    console.log(ver);
    for (let i= 0; i < composicion.length; i++){

      if (composicion[i] == "g"){
        console.log(composicion[i]);
        break;
      } else{
        console.log(composicion[i]);
        mezcla += composicion[i];
      }
      
    }

    console.log(mezcla);

    if (validacion.test(composicion) && mezcla == ver) {
      return true;
    } else {
      return false;
    }
}

function compruebacuenta(cuenta){
    const validacion = /^[A-Z]{2}[0-9]{2}(-)[0-9]{12}(-)[0-9]{2}$/;
    

    if (validacion.test(cuenta)){

      let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
      let valorLetra1 = abecedario.indexOf(cuenta[0]) +1;
      let valorLetra2 = abecedario.indexOf(cuenta[1]) +1;
      
      //console.log(valorLetra1);
      //console.log(valorLetra2);

      let calculo = valorLetra1 + valorLetra2;
      //console.log(calculo);

      let valorsuma = String(cuenta[2]) + String(cuenta[3]);
      //console.log(valorsuma);
      

      let mitad1 = 0;
      let mitad2 = 0;

      for (let i = 0; i< cuenta.length; i++){
        if (i > 4 && i < 11) {
          //console.log(cuenta[i]);
          mitad1 += parseInt(cuenta[i]);
        } 

        if (i > 10 && i < 17){
          mitad2 += parseInt(cuenta[i]);
        }
        
      }

      let penultimo = parseInt(mitad1 / 6);
      let ultimo= parseInt(mitad2 / 6);

      console.log(mitad1);
      console.log(mitad2);
      console.log(penultimo);
      console.log(ultimo);

      
      if (calculo != parseInt(valorsuma)){
        return false;
      } else if(penultimo != parseInt(cuenta[cuenta.length-2]) || ultimo != parseInt(cuenta[cuenta.length-1])) {
        return false;
      } else {
        return true;
      }

    } else {
      return false;
    }

}

$Form.addEventListener("submit", handleSubmit);
