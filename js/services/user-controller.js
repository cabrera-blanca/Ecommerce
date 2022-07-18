import {userServices} from "../services/user-services.js";



const table = document.querySelector("[data-table]");

userServices.listaUsers().then((data) => {
    console.log(data);
    Object.values(data).forEach((perfil) => {
        const nuevaLinea = crearLinea(perfil.nombre, perfil.mail);
        table.appendChild(nuevaLinea);
        
    });
}).catch((error) => console.log( error));

const crearLinea = (nombre,mail) => {
    
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
                type="button"
                >
                Eliminar
                </button>
            </li>
            </ul>
        </td>`;
    linea.innerHTML = content;
    return linea;

    

}
