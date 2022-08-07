//Abrir http (metodo,url)
//CRUD 
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE

  
  const listaUsers = () =>
  fetch('http://localhost:3000/perfil').then((response) => response.json());


  const crearUser = (nombre, mail) => {
    return fetch("http://localhost:3000/perfil" , {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({nombre,mail, id: uuid.v4()}),
      success: window.location.href = "../pages/registroexitoso.html" 
    });
  };

  const eliminarUser = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
      method:"DELETE",
    });
  };

 

 export const userServices = {
    listaUsers,
    crearUser,
    eliminarUser,
    
};