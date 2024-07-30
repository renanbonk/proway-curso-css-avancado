function toggleMenu() {
    const asideMenu = document.getElementById("menu");
    asideMenu.classList.toggle("show");
}

const botaoHumburguer = document.querySelector(".hamburguer");
botaoHumburguer.onclick = toggleMenu;
