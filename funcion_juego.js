function agregar() {
    var lista = [],
        c;
    for (var i = 0; i < 30; i++) {
        do {
            c = 0;
            ok = 1;
            var generador = Math.floor((Math.random() * 15) + 1);
            for (var j = 0; j < 30; j++) {
                if (generador == lista[j]) {
                    c++;
                }
            }
            if (c > 1) {
                ok = 0
            }
        } while (ok == 0)
        lista[i] = generador;
        document.getElementsByTagName("main")[0].innerHTML += "<a class='boton-carta' id='" + lista[i] + "' name='" + i + "' onclick=vuelta('" + i + "','" + lista[i] + "')> <div class='div-carta' name='" + i + "'><img src='imagenes/cerebro.png' alt='Cerebro tarjeta' class='icono-tarjeta' /><img src='imagenes/" + lista[i] + ".jpg' alt='Imagen oculta' class='imagen-oculta' /></div></a>";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {

    setInterval(reloj_2, 500);

}
var a = 4;

function reloj_2() {
    a = a - 1;
    document.getElementById("contador").innerHTML = a - 1;
    document.getElementById("contador").style.fontSize = 300 / a + "px";


    if (a <= 1) {
        document.getElementById("contador").innerHTML = "¡YA!";
    }

}







/////////////////////////////////////////////////////////////////////////////////////////////////////////
var contador = true;
var A, B, N1, N2, Z = 0;


function vuelta(name, id) {

    if (contador) {
        A = id;
        N1 = name;
        document.getElementsByName(N1)[1].style.transform = "rotateY(180deg)";
        document.getElementsByName(N1)[0].style.pointerEvents = "none";
        contador = false;
    } else {
        B = id;
        N2 = name;
        document.getElementsByName(N2)[1].style.transform = "rotateY(180deg)";
        document.getElementsByName(N2)[0].style.pointerEvents = "none";
        if (A == B) {
            Z++;
            if (Z == 15) {
                comprobar(true);
            }
        } else {
            document.getElementById("tapar").style.display = "block";
            setTimeout(function() {
                document.getElementsByName(N1)[1].style.transform = "rotateY(0deg)";
                document.getElementsByName(N2)[1].style.transform = "rotateY(0deg)";
                document.getElementsByName(N1)[0].style.pointerEvents = "auto";
                document.getElementsByName(N2)[0].style.pointerEvents = "auto";
                document.getElementById("tapar").style.display = "none";
            }, 400);
        }
        contador = true;
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setTimeout(function() {

    setInterval(reloj, 100);
    document.getElementById("comienzo").style.display = "none";

}, 2300);

var x = 0,
    z = 0;

function reloj() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");

    z = x / 3;
    ctx.fillStyle = "#66CBFB";
    ctx.fillRect(0, 0, z, 160);
    x++;

    if (z == 300 && Z != 15) {
        comprobar(false);
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
var puntos;
var nombreRecord = localStorage.getItem('nombre');
var puntosRecord = localStorage.getItem('puntos');
var nombreActual = localStorage.getItem('nombreActual');

function comprobar(resultado) {
    puntos = (300 - z) + Z * 25;
    puntos = Math.round(puntos);
    if (resultado) {
        if (puntos > puntosRecord) {
            document.getElementById("record").style.display = "block";
            document.getElementsByTagName("p")[2].innerHTML += nombreActual + " - " + puntos + "pts";
            document.getElementsByTagName("h3")[2].innerHTML += puntos + "pts";
            guardarRecord();
        } else {
            document.getElementById("ganaste").style.display = "block";
            document.getElementsByTagName("p")[0].innerHTML += nombreRecord + " - " + puntosRecord + "pts";
            document.getElementsByTagName("h3")[0].innerHTML += puntos + "pts";
        }
    } else {
        document.getElementById("perdiste").style.display = "block";
        document.getElementsByTagName("p")[1].innerHTML += nombreRecord + " - " + puntosRecord + "pts";
        document.getElementsByTagName("h3")[1].innerHTML += puntos + "pts";
    }
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function refrescar() {
    window.location.reload();
}

function salir() {
    window.location.href = "index.html";
}

function guardarRecord() {
    localStorage.setItem('nombre', nombreActual);
    localStorage.setItem('puntos', puntos);
}