
/**
 * Almacena el nombre del usuario en el local storage
 * @method almacenar
 */
document.getElementById('botonjugar').onclick = function almacenar() {
    let Nombre = document.getElementById('name').value;
    if (Validar(Nombre)) {
        localStorage.setItem('nombreActual', Nombre);
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