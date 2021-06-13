/* guardar_localstorage();


function guardar_localstorage() {
    let usuario = {
        nombre: "tayi",
        puntos: "5000",
        coords: {
            lat: 10,
            lng: -10
        }
    };


    localStorage.setItem("nombre", usuario);
    localStorage.setItem("nombre", );

} */

document.getElementById('botonjugar').onclick = function() {
    var Nombre = document.getElementById('name').value;
    if (Validar(Nombre)) {
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