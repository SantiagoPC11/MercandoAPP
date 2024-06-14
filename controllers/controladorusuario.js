let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method: "GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(Usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.src=Usuario.nombres

        let nombreUsuario=document.createElement("h4")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=Usuario.nombres

        let CorreoUsuario=document.createElement("h4")
        CorreoUsuario.classList.add("text-center")
        CorreoUsuario.textContent=Usuario.correo

        let CedulaUsuario=document.createElement("h4")
        CedulaUsuario.classList.add("text-center")
        CedulaUsuario.textContent=Usuario.cedula



        

        
        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(CorreoUsuario)
        tarjeta.appendChild(CedulaUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log (respuesta)
})