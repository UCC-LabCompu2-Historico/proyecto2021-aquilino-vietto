document.getElementById('botonjugar').onclick = function() {
    var Nombre = document.getElementById('name').value;
    if (Validar(Nombre)) {
        localStorage.setItem('nombreActual', Nombre);
        location.href = "jugar.html";
    } else {
        alert("Tu nombre no es valido.");
        document.getElementById('name').value = "";
    }
}

function Validar(Nombre) {
    if (/^[A-Z]+$/i.test(Nombre)) {
        return true;
    } else {
        return false;
    }
}