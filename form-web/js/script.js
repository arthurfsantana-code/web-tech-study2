const nome = document.getElementById("nome");
const button = document.getElementById("button");
const lista = document.getElementById("lista");


button.addEventListener("click", (event) => {
   event.preventDefault();
   const input = nome.value;
   const templateHTML = `<li>${input}</li>`;

   

   // incluir itens no HTML
   lista.innerHTML += templateHTML;

   nome.value = "";
});