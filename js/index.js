document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    
    localStorage.setItem("datoGuardado", inputText);
    document.getElementById("inputText").value = '';
});