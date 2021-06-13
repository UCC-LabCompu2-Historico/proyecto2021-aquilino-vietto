window.onload = function() {

    setInterval(reloj, 100);

}

var x = 0,
    z = 0;

function reloj() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");

    z = x / 2;
    ctx.fillStyle = "#66CBFB";
    ctx.fillRect(0, 0, z, 160);
    console.log(z);
    x++;

    if (z == 300) {
        perdiste();
    }

}


function perdiste() {
    document.getElementById("perdiste").style.display = "block";
}