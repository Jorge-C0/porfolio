let menuVisible = false;
// Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//  Funcio que palica las animaciones de las habilidades

function efectoHabilidades(){
    var skill = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skill.getBoundingClientRect().top;

    if(distancia_skills >= 300){
        let habildades = document.getElementsByClassName("progreso");
        habildades[0].classList.add("python");
        habildades[1].classList.add("git");
        habildades[2].classList.add("odoo");
        habildades[3].classList.add("csharp");
        habildades[4].classList.add("htmlcss");
        habildades[5].classList.add("javascritp");
        habildades[6].classList.add("react");
        habildades[7].classList.add("angular");
        habildades[8].classList.add("comunicacion");
        habildades[9].classList.add("team");
        habildades[10].classList.add("dedicacion");
        habildades[11].classList.add("fix");
        
    }

}

// detecto el scrolling para aplicar la animacion de la barra de habildades
window.onscroll = function(){
    efectoHabilidades();
}