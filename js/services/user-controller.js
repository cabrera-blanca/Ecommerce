import {userServices} from "../services/user-services.js";

const crearLinea = (nombre,mail,id) => {
    
    const linea = document.createElement("tr");
    const content = `<td class="td" data-td>${nombre}</td>
        <td>${mail}</td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a
                >
            </li>
            <li>
                <button
                class="simple-button simple-button--delete"
                type="button" id="${id}"
                >
                Eliminar
                </button>
            </li>
            </ul>
        </td>`;
        
    linea.innerHTML = content;
    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        const id = btn.id
        userServices.eliminarUser(id).then((response) =>{
            console.log(response);
        })
        .catch((error) => console.log(error))
    });

    return linea

}


const table = document.querySelector("[data-table]");

userServices.listaUsers().then((data) => {
    console.log(data);
    Object.values(data).forEach((perfil) => {
        const nuevaLinea = crearLinea(perfil.nombre, perfil.mail,perfil.id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => console.log( error));
