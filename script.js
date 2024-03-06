let menuVisible = false;
//funcion que oculta o mouestra el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultoel menu cada vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animaciones 
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("express");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoequipo");
        habilidades[6].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendMessageBtn').addEventListener('click', function() {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        let mailtoLink = 'mailto:brallamdelgado@gmail.com' +
                         '?subject=' + encodeURIComponent(subject) +
                         '&body=' + encodeURIComponent('Nombre: ' + name + '\n' +
                                                      'Teléfono: ' + phone + '\n' +
                                                      'Correo: ' + email + '\n' +
                                                      'Mensaje: ' + message);

        window.location.href = mailtoLink;
    });
});