let menu = document.getElementById("botao-menu");
let sidebar = document.querySelector(".sidebar");
let fechar = document.querySelector(".botao-fechar")

fechar.addEventListener("click", () => {
    sidebar.style.display = "none";
})

menu.addEventListener("click", () => {
    sidebar.style.display = "flex";
})