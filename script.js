function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    html.classList.toggle('light');

    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/profile.jpg"); // Define a imagem de perfil para o modo claro
        html.style.background = "linear-gradient(to bottom, #ffffff, #f0f0f0)"; // Define o background para o modo claro
    } else {
        img.setAttribute("src", "./assets/profile.jpg"); // Define a imagem de perfil para o modo escuro
        html.style.background = "linear-gradient(to bottom, #2c3e50, #1b2936)"; // Define o background para o modo escuro
    }
}

function expandMenu(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Adicione ou remova a classe 'expanded' no elemento pai do link clicado
    event.target.parentElement.classList.toggle('expanded');
}