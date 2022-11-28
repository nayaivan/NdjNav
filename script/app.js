var nombre = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("password");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value!="Brayan") {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (pass.value!="1258") {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(!pass.value=="1258"){
        warnings += `La contraseña no es valida <br>`
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        alert("Usuario Correcto, bienvenido!!!");
        window.location.replace("naytec.html");
    }
})