let eleccion = 0;
console.log(eleccion);

while (eleccion < 1 || eleccion > 5) {
  eleccion = parseInt(prompt("elige un numero del plato del 1 al 5"));
}

let entrante = 0;
let bebida = 0;
let postre = 0;

while (entrante <= 0) {
  entrante = parseInt(prompt("elige cuantos entrantes vas a querer"));
}

while (bebida <= 0) {
  bebida = parseInt(prompt("elige cuantos bebidas vas a querer"));
}

while (postre <= 0) {
  postre = parseInt(prompt("elige cuantos postres vas a querer"));
}

let vip = "";
while (vip != "si" && vip != "no") {
  vip = prompt("¿Es el cliente vip?");
}

let plato;
let platofinal;
let entranteiva
let bebidaiva 
let postreiva
let complementos
let total

switch (vip) {
  case "si":
        plato= 6 * 0.5;
        platofinal = (plato * 0.10) + plato;
        entrante = entrante * 0.5;
        bebida = bebida * 0.5;
        postre = postre * 0.5;
        entranteiva = (entrante * 0.10) + entrante;
        bebidaiva =(bebida * 0.21) + bebida;
        postreiva = (postre * 0.10) + postre;
        complementos = entranteiva + bebidaiva + postreiva;
        total = platofinal + complementos;

       alert("Nº plato " + eleccion + " entrantes:" + entrante + " bebidas:" +bebida + " postres:" + postre + " total =" + total)
    break;
  case "no":
        plato = 6;
        platofinal = (plato * 0.10) + plato;
        entranteiva = (entrante * 0.10) + entrante;
        bebidaiva =(bebida * 0.21) + bebida;
        postreiva = (postre * 0.10) + postre;
        complementos = entranteiva + bebidaiva + postreiva;
        total = platofinal + complementos;

        alert("Nº plato " + eleccion + " entrantes:" + entrante + " bebidas:" +bebida + " postres:" + postre + " total =" + total)

    break;
}
