/**
 * Escribe las tarjetas en el html.
 * @method agregar
 */
function agregar() {
    var lista = [],
        c;
    for (var i = 0; i < 30; i++) {
        do {
            c = 0;
            var ok = 1;
            var generador = Math.floor((Math.random() * 15) + 1);
            for (var j = 0; j < 30; j++) {
                if (generador === lista[j]) {
                    c++;
                }
            }
            if (c > 1) {
                ok = 0
            }
        } while (ok === 0)
        lista[i] = generador;
        document.getElementsByTagName("main")[0].innerHTML += "<a class='boton-carta' id='" + lista[i] + "' name='" + i + "' onclick=juego('" + i + "','" + lista[i] + "')> <div class='div-carta' name='" + i + "'><img src='imagenes/cerebro.png' alt='Cerebro tarjeta' class='icono-tarjeta' /><img src='imagenes/" + lista[i] + ".jpg' alt='Imagen oculta' class='imagen-oculta' /></div></a>";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Inicia un reloj
 * @method intervalo2
 */
window.onload = function intervalo2() {

    setInterval(reloj_2, 500);

}
var a = 4;
/**
 * Modifica el html para la cuenta regresiva al iniciar el juego.
 * @method reloj_2
 */
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

/**
 * Verifica si la pareja de tarjetas coincide y realiza la animacion de volteo de cartas
 * @method juego
 * @param {int} name - Almacena el name del div de la tarjeta.
 * @param {int} id - Almacena el id del "a" de la tarjeta.
 */
function juego(name, id) {

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
        if (A === B) {
            Z++;
            if (Z === 2) {
                comprobar(true);
            }
        } else {
            document.getElementById("tapar").style.display = "block";
            /**
             * Detiene el juego un instante
             * @method coolDown
             */
            setTimeout(function coolDown() {
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


var nivel = localStorage.getItem('nivel');
var N;
switch (nivel) {
    case "facil":
        N = 5;
        break;
    case "medio":
        N = 4;
        break;
    case "dificil":
        N = 3;
        break;
}

/**
 * Inicia un reloj, oculta el fondo rosa y cambia el color del fondo del canvas.
 * @method intevalo
 */
setTimeout(function intervalo() {

    setInterval(reloj, 100);
    document.getElementById("comienzo").style.display = "none";
    document.getElementsByTagName("canvas")[0].style.transition = "background-color " + (30 * N - 10) + "s linear";
    document.getElementsByTagName("canvas")[0].style.backgroundColor = "red";

}, 2300);

var x = 0,
    z = 0;
/**
 * Animacion canvas y control y calculo de tiempo de juego.
 * @method reloj
 */
function reloj() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    z = x / N;
    ctx.fillStyle = "#66CBFB";
    ctx.fillRect(0, 0, z, 160);
    x++;

    if (z === 300 && Z !== 15) {
        comprobar(false);
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
var puntos;
var nombreRecord = localStorage.getItem('nombre');
var puntosRecord = localStorage.getItem('puntos');
var nombreActual = localStorage.getItem('nombreActual');

/**
 * Calculo de puntos, escritura en html de puntos y record si existe
 * @method comprobar
 * @param {boolean} resultado - Almacena true o false segun gane o pierda respectivamente.
 */
function comprobar(resultado) {

    puntos = (300 - z) * 25 / N;
    puntos = Math.round(puntos);
    if (resultado) {
        if (puntos > puntosRecord) {
            document.getElementById("record").style.display = "block";
            document.getElementsByTagName("p")[2].innerHTML += nombreActual + " - " + puntos + "pts";
            document.getElementsByTagName("h3")[1].innerHTML += puntos + "pts";
            localStorage.setItem('nombre', nombreActual);
            localStorage.setItem('puntos', puntos);
        } else {
            document.getElementById("ganaste").style.display = "block";
            document.getElementsByTagName("p")[0].innerHTML += nombreRecord + " - " + puntosRecord + "pts";
            document.getElementsByTagName("h3")[0].innerHTML += puntos + "pts";
        }
    } else {
        if (puntosRecord != null) {
            document.getElementsByTagName("p")[1].innerHTML = "Récord: " + nombreRecord + " - " + puntosRecord + "pts";
        }
        document.getElementById("perdiste").style.display = "block";
    }
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Reinicia el juego recargando la pagina (cuando es llamada por onclick)
 * @method refrescar
 */
function refrescar() {
    window.location.reload();
}
/**
 * Regresa al index (cuando es llamada por onclick)
 * @method salir
 */
function salir() {
    window.location.href = "index.html";
}