

function chequeoJug() {
    let jugador = document.getElementById("nombreJugador").value;
    let msj = "Por favor ingrese su alias"
    if (jugador === "") {
        alert(msj);
        return;
    }
    return;
}

document.getElementById("buttonStartGame").addEventListener("click", chequeoJug);
