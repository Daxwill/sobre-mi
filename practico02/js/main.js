const arrayJugadas = ["piedra", "papel", "tijera"];
const msjsFinales = [`<p>Empate</p>`, `<p>Esta jugada la ganó la Compu</p>`, `<p>Ganaste esta jugada!</p>`];
let victoriasJug = 0;
let victoriasPc = 0;
let intentos = 0;

// obtiene la mano aleatoria de la compu
function obtenerJugadaComputadora() {
    return arrayJugadas[Math.floor(Math.random() * 3)];
}
// muestra imagenes para seleccionar a inciar el juego
function mostrarElecciones() {
    document.getElementById("gameSelection").style.display = "flex";
}

// oculta los botones de eleccion
function ocultarElecciones() {
    document.getElementById("gameSelection").style.display = "none";
}

// asegura el ingreso de un nombre
function chequeoJug() {
    let jugador = obtenerNombre();
    let msj = "Por favor ingrese su alias";
    if (jugador === "") {
        alert(msj);
    } else {
        mostrarElecciones();
    }
}

// funcion para almacenar nombre del jugador
function obtenerNombre() {
    let nombre = document.getElementById("nombreJugador").value;
    return nombre;
}

// las siguientes 3 funciones son las que responden a la jugada del usuario, segun el boton que clickee.
function jugarPapel() {
    let pc = obtenerJugadaComputadora();
    let nombJugador = obtenerNombre();
    const jugada = "papel";
    if (pc === jugada) {
        document.getElementById("resultados").innerHTML = msjsFinales[0];
        intentos++;
    } else if (pc === arrayJugadas[0]) {
        document.getElementById("resultados").innerHTML = msjsFinales[2];
        victoriasJug++;
        intentos++;
    } else {
        document.getElementById("resultados").innerHTML = msjsFinales[1];
        victoriasPc++;
        intentos++;
    }
    chequeoVictorias();
}

function jugarPiedra() {
    let pc = obtenerJugadaComputadora();
    let jugada = "piedra";
    if (pc === jugada) {
        document.getElementById("resultados").innerHTML = msjsFinales[0];
        intentos++;
    } else if (pc === arrayJugadas[2]) {
        document.getElementById("resultados").innerHTML = msjsFinales[2];
        victoriasJug++;
        intentos++;
    } else {
        document.getElementById("resultados").innerHTML = msjsFinales[1];
        victoriasPc++;
        intentos++;
    }
    chequeoVictorias();
}

function jugarTijera() {
    let pc = obtenerJugadaComputadora();
    let jugada = "tijera";
    if (pc === jugada) {
        document.getElementById("resultados").innerHTML = msjsFinales[0];
        intentos++;
    } else if (pc === arrayJugadas[1]) {
        document.getElementById("resultados").innerHTML = msjsFinales[2];
        victoriasJug++;
        intentos++;
    } else {
        document.getElementById("resultados").innerHTML = msjsFinales[1];
        victoriasPc++;
        intentos++;
    }
    chequeoVictorias();
}

// chequea cantidad de jugadas o si alguien ya gano
function chequeoVictorias() {
    let nombre = obtenerNombre();
    if (intentos === 5) {
        ocultarElecciones();
        if (victoriasJug > victoriasPc) {
            document.getElementById("resultados").innerHTML = `Felictaciones ${nombre}! Ganaste!`;
            botonReinicio()
        } else if (victoriasPc > victoriasJug) {
            document.getElementById("resultados").innerHTML = `A seguir participando ${nombre}! Te ganó la compu!`;
            botonReinicio()
        } else {
            document.getElementById("resultados").innerHTML = `Al menos no perdiste. Empataste!`;
            botonReinicio()
        }
    } else if (victoriasJug === 3) {
        ocultarElecciones();
        document.getElementById("resultados").innerHTML = `Felicitaciones ${nombre}! Ganaste!`;
        botonReinicio()
    } else if (victoriasPc === 3) {
        document.getElementById("resultados").innerHTML = `A seguir participando ${nombre}! Te ganó la compu!`;
        botonReinicio()
    }

}

// agrega un boton para reiniciar
function botonReinicio() {
    const botonR = document.createElement("button");
    botonR.innerText = "Reiniciar Juego";
    botonR.setAttribute("id", "botonReinicio");
    const botonI = document.getElementById("buttonStartGame");
    document.getElementById("botonera").replaceChild(botonR, botonI);
    document.getElementById("botonReinicio").addEventListener("click", reiniciar);
}

// funcion de reinicio
function reiniciar() {
    window.location.reload();
}

document.getElementById("buttonStartGame").addEventListener("click", chequeoJug);
document.getElementById("piedra").addEventListener("click", jugarPiedra);
document.getElementById("tijera").addEventListener("click", jugarTijera);
document.getElementById("papel").addEventListener("click", jugarPapel);





