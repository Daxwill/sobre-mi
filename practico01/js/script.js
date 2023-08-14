function calcular() {
    //Ingreso de datos
    var n1 = document.getElementById("n1").value;
    //n1 = parseFloat(n1);
    var n2 = document.getElementById("n2").value;
    //n2 = parseFloat(n2);

    // Validacion de numeros
    var msjError1 = "Ingrese un numero valido."
    if (isNaN(n1)) {
        alert(msjError1);
        return;
    } else if (isNaN(n2)) {
        alert(msjError1);
        return;
    }

    //Chequeo decimal
    var esDecimal;
    if (n1 % 1 == 0) {
        esDecimal = false;
        n1 = parseInt(n1);
    } else {
        esDecimal = true;
        n1 = parseFloat(n1);
    }

    if (n2 % 1 == 0) {
        esDecimal = false;
        n2 = parseInt(n2);
    } else {
        esDecimal = true;
        n2 = parseFloat(n2);
    }

    // Validacion de operaciones
    var msjError2 = "Eliga una operacion valida."
    var operador = document.getElementById("operaciones").value;
    if (operador === "null") {
        alert(msjError2);
        return;
    }

    // Manejo de errores
    var msjError3 = "No es valido dividir entre 0"
    if (operador === "div" && n2 === 0) {
        alert(msjError3)
        return;
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


    /* 
    manejo de respuestas
    Limitar decimales
    Limitar max y min de respuestas
    */
    var msjResultado;
    if (esDecimal) {
        resultado = resultado.toFixed(3);
    }
    if (resultado >= Math.pow(10, 8)) {
        msjResultado = "El resultado es demasiado grande"
        alert(msjResultado);
        return;
    } else if (resultado < -100000000) {
        msjResultado = "El resultado es demasiado pequeño"
        alert(msjResultado);
        return;
    }

    // Devolucion de respuesta
    var msjResultado = `El resultado es ${resultado}.`;
    return document.getElementById("resultado").innerHTML = msjResultado;
}

// funcion para refrescar la pagina 
function recargar() {
    location.reload();
}

// llamado a la funciones
document.getElementById("botonCalc").addEventListener("click", calcular);
document.getElementById("botonReset").addEventListener("click", recargar);
