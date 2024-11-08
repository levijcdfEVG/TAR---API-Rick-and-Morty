'use strict';

//Crea variables que controlan los botones del html
let boton = document.getElementById("mostrarImagenes");
let botonBorrar = document.getElementById("ocultarImagenes");
let container = document.getElementById("contenedorImagenes");

boton.addEventListener('click', () => {
    let url = 'https://rickandmortyapi.com/api/character';
    
    fetch(url)
        .then(response => response.json())
        
        .then(data => {
            // Clear previous content, if any
            container.innerHTML = "";

            // Loop through characters and create image elements
            data.results.forEach(character => {
                let img = document.createElement('img');
                img.src = character.image;
                img.alt = character.name;
                img.title = `${character.name} - ${character.species}`;
                img.style.margin = '10px'; // Styling (optional)

                container.appendChild(img);
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


botonBorrar.addEventListener('click', () =>{
    container.innerHTML = "";
});