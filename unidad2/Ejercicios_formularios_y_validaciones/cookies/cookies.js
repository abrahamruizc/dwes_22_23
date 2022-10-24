if (navigator.cookieEnabled == true) {
  alert("hay cookies");
} else {
  alert("no hay cookies");
}

function verCookies() {
  alert("Cookies actuales:\n" + document.cookie);
}

function crearModifCookie() {
  let nombre = prompt("introducza el nombre de la cookie");
  let valor = prompt("introduzca su valor");
  let expiracion = parseInt(
    prompt("introduzca el numero de dias para que expire")
  );
  setCookie(nombre, valor, expiracion);
  verCookies();
}

function comprobar() {
  let nombre = prompt("introduzca el nombre de la cookie a consultar");
  alert(getCookie(nombre));
}

function setCookie(nombre, valor, expiracion) {
  let d = new Date();
  d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
  let expira = "expires=" + d.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expira;
}

function borrarCookie() {
  let nombre = prompt("introduce el nombre de la cookie a borrar");
  deleteCookie(nombre);
  verCookies();
}

function getCookie(cnombre) {
  let nombre = cnombre + "=";
  let array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cnombre) == 0) {
      return c.substring(nombre.length, c.length);
    }
  }
  return "";
}

function deleteCookie(nombre) {
  setCookie(nombre, "", 0);
}


// function valorindex(){
//   let cname = prompt("¿Que quieres consultar?")
//   let cookieSeparator = document.cookie.split(";")
//   let nombreValor = ""
//   for (let index = 0; index < cookieSeparator.length; index++) {
//       let separadorAUX = cookieSeparator[index].split("=")
//       for (let index = 0; index < separadorAUX.length; index++) {
//           if (separadorAUX[index].trim() === cname) {
//               nombreValor = separadorAUX[index + 1]
//               break;
//           }
//       }
//   }
// }

