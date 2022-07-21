const cargarTiposCargas = async ()=>{
    let filtrocargaCbx = document.querySelector("#filtrocarga-cbx");
    let cargas = await getTiposCargas();
    cargas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtrocargaCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let id = this.idCarga;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"question", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarCarga(id)){
            let cargas = await getCargas();
            cargarTabla(cargas);
            Swal.fire("Carga Familiar Eliminada", "Carga Familiar eliminada exitosamente", "info"); 
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (cargas)=>{
    let tbody = document.querySelector("#tbody-carga");
    tbody.innerHTML = "";
    for(let i=0; i < cargas.length; ++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = cargas[i].nombre;
        let tdRut = document.createElement("td");
        tdRut.innerText = cargas[i].rut;
        let tdNacimiento = document.createElement("td");
        tdNacimiento.innerText = cargas[i].nacimiento_carga;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = cargas[i].tipocarga;
        let tdSexo = document.createElement("td");
        tdSexo.innerText = cargas[i].sexo;
        let tdBeneficio = document.createElement("td");
        tdBeneficio.innerText = cargas[i].fecha_beneficio;
        let tdPertenece = document.createElement("td");
        tdPertenece.innerText = cargas[i].nombre_carga;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idCarga = cargas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdRut);
        tr.appendChild(tdNacimiento);
        tr.appendChild(tdTipo);
        tr.appendChild(tdSexo);
        tr.appendChild(tdBeneficio);
        tr.appendChild(tdPertenece);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtrocarga-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtrocarga-cbx").value;
    let cargas = await getCargas(filtro);
    cargarTabla(cargas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarTiposCargas();
    let cargas = await getCargas();
    cargarTabla(cargas);
});