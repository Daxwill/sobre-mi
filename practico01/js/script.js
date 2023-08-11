function calcular() {
    var n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    var n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);

    // Validacion de numeros
    var msjError1 = "Ingrese un numero valido."
    if (isNaN(n1)) {
        alert(msjError1);
    } else if (isNaN(n2)) {
        alert(msjError1);
    }

    // Validacion de operaciones
    var msjError2 = "Eliga una operacion valida."
    var operador = document.getElementById("operaciones").value;
    if (operador === "null") {
        alert(msjError2);
    }

    // Calculos
    var resultado;
    switch (operador) {
        case "suma":
            resultado = n1 + n2;
            break;
        case "resta":
            resultado = n1 - n2;
            break;
        case "multi":
            resultado = n1 * n2;
            break;
        case "div":
            resultado = n1 / n2;
            break;
    }
    var msjResultado = `El resultado es ${resultado}.`;
    return document.getElementById("resultado").innerHTML = msjResultado;
}

document.getElementById("botonCalc").addEventListener("click", calcular);