// Escucha el evento 'keyup' en todo el documento
document.addEventListener("keyup", e => {
    
    // Verifica si el elemento que desencadenó el evento es el elemento con ID "buscador"
    if (e.target.matches("#buscador")) {
        
        // Si la tecla presionada es la tecla "Escape", borra el valor del campo de búsqueda
        if (e.key === "Escape") e.target.value = "";
        
        // Selecciona todos los elementos con la clase "pelicula"
        document.querySelectorAll(".pelicula").forEach(pelicula => {
            
            // Convierte el contenido del elemento "pelicula" y el valor del campo de búsqueda a minúsculas,
            // y verifica si el contenido de la película incluye el valor del campo de búsqueda
            if (pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                // Si es cierto, elimina la clase "filtro" para mostrar la película
                pelicula.classList.remove("filtro");
            } else {
                // Si no es cierto, agrega la clase "filtro" para ocultar la película
                pelicula.classList.add("filtro");
            }
        });
    }
});
