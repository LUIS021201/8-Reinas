var contador = 0;

function celdaclick(ana) {
    //Este if valida si la celda tiene imagen de fondo o no
    if ((window.getComputedStyle(ana).backgroundImage) == "none") {
        if (contador != 8) {
            contador++;
            ana.style = "background-image:url(./reina.png); background-repeat:no-repeat; background-size: cover;";
        }

    } else {
        contador--;
        ana.style = "background-image:none;";
    }
    document.getElementById("div_contador").innerHTML = "Reinas Colocadas: " + contador;

}

function simulacion() {
    limpiarResultados();
    if (contador != 8) {
        console.log("No se han colocado las 8 reinas")
        document.getElementById("reinas-incompletas").style = "display:flex;"

        return;
    }


    var celdas = document.getElementById("tablero").getElementsByTagName("td");

    var simulacionCorrecta = true;

    var suma_restas = 0;
    for (let i = 0; i < celdas.length; i++) {
        renglon = Math.floor(i / 8);
        if ((window.getComputedStyle(celdas[i]).backgroundImage) != "none") {
            suma_restas += renglon - (i % 8);
        }
    }
    simulacionCorrecta = suma_restas == 0;

    if (simulacionCorrecta) {
        document.getElementById("ganar").style = "display:flex;";
        return true;

    } else {
        document.getElementById("perder").style = "display:flex;";
        return false
    }

}

function reiniciar() {
    limpiarResultados();

    var celdas = document.getElementById("tablero").getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style = "background-image: none;";


    }
    contador = 0;
    document.getElementById("div_contador").innerHTML = "Reinas Colocadas: " + contador;

}

function solucion1() {
    reiniciar();
    let solucion = [
        [0, 4],
        [1, 1],
        [2, 3],
        [3, 6],
        [4, 2],
        [5, 7],
        [6, 5],
        [7, 0]
    ]
    colocarSolucion(solucion);

}

function solucion2() {
    reiniciar();

    let solucion = [
        [0, 3],
        [1, 5],
        [2, 7],
        [3, 2],
        [4, 0],
        [5, 6],
        [6, 4],
        [7, 1]
    ]
    colocarSolucion(solucion);

}

function colocarSolucion(solucion) {
    var celdas = document.getElementById("tablero");

    solucion.forEach(element => {
        celdas.rows[element[0]].cells[element[1]].style = "background-image:url(./reina.png); background-repeat:no-repeat; background-size: cover;";

    });
    contador = 8;
    document.getElementById("div_contador").innerHTML = "Reinas Colocadas: " + contador;
}


function limpiarResultados() {
    var resultados = document.getElementsByClassName("resultado");
    for (let i = 0; i < resultados.length; i++) {
        resultados[i].style = "display:none;";

    }
}


function getSoluciones() {


    let solucion1 = [
        [0, 3],
        [1, 5],
        [2, 7],
        [3, 2],
        [4, 0],
        [5, 6],
        [6, 4],
        [7, 1]
    ];



    let solucion2 = [
        [0, 4],
        [1, 6],
        [2, 1],
        [3, 5],
        [4, 2],
        [5, 0],
        [6, 7],
        [7, 3]
    ];



    let solucion3 = [
        [0, 5],
        [1, 7],
        [2, 2],
        [3, 6],
        [4, 3],
        [5, 0],
        [6, 4],
        [7, 1]
    ];



    let solucion4 = [
        [0, 6],
        [1, 3],
        [2, 5],
        [3, 0],
        [4, 2],
        [5, 4],
        [6, 7],
        [7, 1]
    ];



    let solucion5 = [
        [0, 6],
        [1, 4],
        [2, 2],
        [3, 0],
        [4, 5],
        [5, 7],
        [6, 1],
        [7, 3]
    ];


    let solucion6 = [
        [0, 4],
        [1, 6],
        [2, 1],
        [3, 5],
        [4, 2],
        [5, 7],
        [6, 0],
        [7, 3]
    ];



    let solucion7 = [
        [0, 5],
        [1, 7],
        [2, 1],
        [3, 3],
        [4, 0],
        [5, 6],
        [6, 4],
        [7, 2]
    ];


    let solucion8 = [
        [0, 3],
        [1, 0],
        [2, 4],
        [3, 7],
        [4, 5],
        [5, 2],
        [6, 6],
        [7, 1]
    ];


    let solucion9 = [
        [0, 4],
        [1, 6],
        [2, 0],
        [3, 3],
        [4, 1],
        [5, 7],
        [6, 5],
        [7, 2]
    ];


    let soluciones = [solucion1, solucion2, solucion3, solucion4, solucion5, solucion6, solucion7, solucion8, solucion9]

    return soluciones;

}


function testSoluciones() {
    let soluciones = getSoluciones();
    for (let i = 0; i < soluciones.length; i++) {
        reiniciar();
        colocarSolucion(soluciones[i])
        if (simulacion()) {
            console.log("Reviso correctamente a la solucion " + parseInt(i + 1));
        } else {
            console.log("El algoritmo no es capaz de revisar todas las posibles soluciones")
        }

    }


}