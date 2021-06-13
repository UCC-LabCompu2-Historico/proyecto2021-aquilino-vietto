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
        document.getElementById("main").innerHTML += "<a class='boton-carta' id='" + lista[i] + "' onclick=vuelta('" + i + "','" + lista[i] + "')> <div class='div-carta' name='" + i + "'><img src='imagenes/cerebro.png' alt='Cerebro tarjeta' class='icono-tarjeta' /></div></a>";
    }
}

var contador = true;
var A, B, N1, N2;


function vuelta(name, id) {

    if (contador) {
        A = id;
        N1 = name;
        document.getElementsByName(N1)[0].style.backgroundColor = "red";
        contador = false;
    } else {
        B = id;
        N2 = name;
        document.getElementsByName(N2)[0].style.backgroundColor = "red";
        if (A == B) {
            alert("vamo loco");
            document.getElementById(A).style.pointerEvents = 'none';
            document.getElementsByName(N2)[0].style.pointerEvents = 'none';
        } else {
            document.getElementById("tapar").style.display = "block";
            setTimeout(function() {
                document.getElementsByName(N1)[0].style.backgroundColor = "#ffffff";
                document.getElementsByName(N2)[0].style.backgroundColor = "#ffffff";
                document.getElementById("tapar").style.display = "none";
            }, 400);
        }
        contador = true;
    }

}