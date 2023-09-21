document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".pelicula").forEach(pelicula =>{
  
            pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?pelicula.classList.remove("filtro")
              :pelicula.classList.add("filtro")
        })
  
    }
  
  
  })