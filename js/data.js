document.addEventListener("DOMContentLoaded", function() {
   
    const datoGuardado = localStorage.getItem("datoGuardado");

    if (datoGuardado) {
        document.getElementById("data").textContent = datoGuardado;
    } else {
        document.getElementById("data").textContent = "No hay datos almacenados.";
    }
});