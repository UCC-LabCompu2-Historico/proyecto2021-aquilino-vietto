/**
 * Almacena el nombre del usuario en el local storage
 * @method almacenar
 */
function almacenar() {

    var Nombre = document.getElementById('name').value;
    var Nivel;
    if (Validar(Nombre)) {
        for (var i = 0; i < 3; i++) {
            if (document.getElementsByName("dificultad")[i].checked) {
                Nivel = document.getElementsByName("dificultad")[i].value;
            }
        }
        localStorage.setItem('nombreActual', Nombre);
        localStorage.setItem('nivel', Nivel);
        location.href = "jugar.html";
    } else {
        alert("Tu nombre no es valido.");
        document.getElementById('name').value = "";
    }
}


/**
 * Verifica el nombre de usuario
 * @method Validar
 * @param {string} Nombre - Almacena el nombre ingresado por el usuario.
 * @return true si el nombre es valido
 * @return false si el nombre es invalido
 */
function Validar(Nombre) {
    return /^[A-Z]+$/i.test(Nombre);
}