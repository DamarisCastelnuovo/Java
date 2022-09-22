const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const direccion = document.querySelector("#formDireccion")
const mail = document.querySelector("#formEmail")

formulario.addEventListener("submit", validarFormulario)

function validarFormulario (e){
    e.preventDefault();
    let btnEnviar = document.createElement("div")
    btnEnviar.innerHTML = `<h4 class="btnText">Su nombre y apellido es: ${nombre.value} y le enviaremos la información al correo: ${mail.value}. Le enviaremos el pedido a la dirección: ${direccion.value}. Muchas gracias!`
    document.body.appendChild(btnEnviar);
}