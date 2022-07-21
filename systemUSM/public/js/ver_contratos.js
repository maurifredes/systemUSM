const cargarTipoContrato = async ()=>{
    let filtroContratosCbx = document.querySelector("#filtrocontratos-cbx");
    let contratos = await getTipoContrato();
    contratos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroContratosCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let id = this.idContrato;
    let resp = await Swal.fire({title:"Esta seguro de eliminar este contrato?", text:"Esta operacion es irreversible", icon:"question", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarContrato(id)){
            let contratos = await getContratos();
            cargarTabla(contratos);
            Swal.fire("Contrato Eliminado", "Contrato eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (contratos)=>{
    let tbody = document.querySelector("#tbody-contratos");
    tbody.innerHTML = "";
    for(let i=0; i < contratos.length; ++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = contratos[i].nombre;
        let tdRut = document.createElement("td");
        tdRut.innerText = contratos[i].rut;
        let tdTipoContrato = document.createElement("td");
        tdTipoContrato.innerText = contratos[i].tipocontrato;
        let tdFechaInicio = document.createElement("td");
        tdFechaInicio.innerText = contratos[i].fechainicio;
        let tdFechaTermino = document.createElement("td");
        tdFechaTermino.innerText = contratos[i].fechatermino;
        let tdSueldo = document.createElement("td");
        tdSueldo.innerText = contratos[i].sueldo;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idContrato = contratos[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdRut);
        tr.appendChild(tdTipoContrato);
        tr.appendChild(tdFechaInicio);
        tr.appendChild(tdFechaTermino);
        tr.appendChild(tdSueldo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtrocontratos-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtrocontratos-cbx").value;
    let contratos = await getContratos(filtro);
    cargarTabla(contratos)
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarTipoContrato();
    let contratos = await getContratos();
    cargarTabla(contratos);
});