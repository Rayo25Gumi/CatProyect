window.onload = function () {
    catFact();
    catImage();
    RightClicado();
    document.addEventListener('keydown', teclaPulsada);
    let boton = document.querySelector("#instruciones")
    boton.addEventListener('click', generarInstruciones)
};

async function catFact() {
    let respuesta = await fetch("https://meowfacts.herokuapp.com/");
    let datos = await respuesta.json();
    let textFact = document.getElementById("tarjeta");

    datos.data.forEach(cat => {
        let p = document.createElement("p");
        p.id = "fact"
        p.innerHTML = cat;
        textFact.appendChild(p);
    });
}

async function catImage() {
    let respuesta = await fetch("https://api.thecatapi.com/v1/images/search");
    let datos = await respuesta.json();
    console.log(datos);

    let img = document.getElementById("catImage")
    img.src = datos[0].url
}

function RightClicado() {
    let audio = new Audio('./attachments/miau.mp3'); 
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        audio.play(); 
    });
}

function teclaPulsada(event) {
    event.preventDefault();
    if (event.key == 'g') {
        let p = document.getElementById("fact")
        p.remove();
        catFact();
        catImage();
    }
}

function generarInstruciones() {
    var button = document.getElementById("instruciones");
    button.disabled = true; 
    console.log("works");
    let contenedorTarjeta = document.querySelector('#container');
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('nota');
    contenedorTarjeta.append(tarjeta);

    let hint = document.createElement('p');
    hint.classList.add('textnota');
    hint.id = 'hint'; 
    hint.innerHTML = `Press "g" for new cat<br>Right click to meow!`;  
    tarjeta.append(hint);
}