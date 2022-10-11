function validar(){
    const $Form = document.getElementById("ej1");
    const $DNI = document.getElementById("dni");
    const $Nombre = document.getElementById("nombre");
    const $Apellidos = document.getElementById("apellidos");
    const $Telefono = document.getElementById("telefono");
    const $Escribe = document.getElementById("escribe");
    const $Hora = document.getElementById("hora");


    function Genera (){
        const dni = $DNI.value;
        const nombre = $Nombre.value;
        const apellidos = $Apellidos.value;
        const telefono = $Telefono.value;
        const escribe = $Escribe.value;
        const hora = $Hora.value;
    }
    


    function compruebaDNI (dni) {
        const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
        return validacion.test(dni);
    }

    function compruebaNombre (nombre) {
        const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
        return validacion.test(nombre);
    }

    function compruebaApellidos (apellido) {
        const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
        return validacion.test(apellido);
    }

    function compruebaTelefono (telefono) {
        const validacion = /^[+][3][4]+\s[0-9]{9}$/;
        return validacion.test(telefono);
    }

    function compruebaHora (hora) {}

}