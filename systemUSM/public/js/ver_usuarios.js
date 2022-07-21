const iniciarEliminacion = async function(){
    let id = this.idUsuario;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"question", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarUsuarios(id)){
            let usuarios = await getUsuarios ();
            cargarTabla(usuarios);
            Swal.fire("Usuario Eliminado", "Usuario eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
}

const cargarTabla = (usuarios)=>{
    let tbody = document.querySelector("#tbody-usuarios");
    tbody.innerHTML = "";
    for(let i=0; i < usuarios.length; ++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = usuarios[i].nombre;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = usuarios[i].anionacimiento;
        let tdCorreo = document.createElement("td");
        tdCorreo.innerText = usuarios[i].correo;
        let tdUsuario = document.createElement("td");
        tdUsuario.innerText = usuarios[i].nusuario;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar Usuario";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idUsuario = usuarios[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdAnio);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdUsuario);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let usuarios = await getUsuarios ();
    cargarTabla(usuarios);
});