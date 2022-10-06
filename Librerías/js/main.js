const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const direccion = document.querySelector("#formDireccion")
const mail = document.querySelector("#formEmail")
const boton = document.querySelector(".btn")

boton.addEventListener("click", (e)=>{
    e.preventDefault()
    Swal.fire({
    title: `Muchas gracias ${nombre.value}`,
    text: `Recibirá sus productos pronto. Se los enviaremos a la dirección: ${direccion.value}, y le enviaremos novedades al correo: ${mail.value}`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
    })
})

/*
  const datos = {
    nombre: "Damaris",
    Casa: 20,
    
  }
  const datosUsu = JSON.stringify(datos)
  localStorage.setItem("Usuario", datosUsu)
  // console.log(cursoStr)
  */


  