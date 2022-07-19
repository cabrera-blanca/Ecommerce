import { userServices } from "./user-services.js";

var form = document.querySelector("[data-form]")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nombre = document.querySelector("[data-nombre]").value
    const mail = document.querySelector("[data-mail]").value
    console.log(form)
    console.log(nombre, ".." , mail)
    userServices.crearUser(nombre,mail).catch((Error) => console.log(Error))
})

