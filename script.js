function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    /* ou usar assim
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } */

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/profile.jpg")
    } else {
        img.setAttribute("src", "./assets/profile.jpg")
    }

}

function expandMenu(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Adicione ou remova a classe 'expanded' no elemento pai do link clicado
    event.target.parentElement.classList.toggle('expanded');
}