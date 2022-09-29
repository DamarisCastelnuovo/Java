const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const direccion = document.querySelector("#formDireccion")
const mail = document.querySelector("#formEmail")
const boton = document.querySelector(".btn")

boton.addEventListener("click", (e)=>{
    e.preventDefault()
    let btnEnviar = document.createElement("div");
    btnEnviar.innerHTML = `<h4 class="form_env"> Muchas gracias ${nombre.value} por su compra, sus productos se enviaran a: ${direccion.value}. Recibirá nuestras mejores ofertas y novedades en ${mail.value}. </h4>`;
    document.body.appendChild(btnEnviar);
})


  const datos = {
    nombre: "Damaris",
    Casa: 20,
    
  }
  const datosUsu = JSON.stringify(datos)
  localStorage.setItem("Usuario", datosUsu)
  // console.log(cursoStr)