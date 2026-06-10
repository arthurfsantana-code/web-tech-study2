//Variaveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message")
const button = document.getElementById("Verifica-nota");

function resultadoNotaClick(event) {
    event.preventDefault();

    //Validação
    if (inputNota.value.trim() === "") {
        message.style.display = "block";
        return false;
    }
    //Lógica 
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
    inputNota.value = "";
}


button.addEventListener("click", () => {
    resultadoNotaClick(event)
})