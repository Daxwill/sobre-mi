const arrayJugadas = ["piedra", "papel", "tijeras"];

function obtenerJugadaComputadora() {
    return arrayJugadas[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

function jugadaUsuario() {

}
function mostrarElecciones() {
    document.getElementById("gameSelection").style.display = "flex";
}


function chequeoJug() {
    let jugador = document.getElementById("nombreJugador").value;
    let msj = "Por favor ingrese su alias"
    if (jugador === "") {
        alert(msj);
        return;
    } else {
        mostrarElecciones();
        return jugador;
    }
}

document.getElementById("buttonStartGame").addEventListener("click", chequeoJug);

