const cargarTiposLicencia = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let tipolicencia = await getTiposLicencia();
    tipolicencia.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let id = this.idLicencia;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"question", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLicencia(id)){
            let licencias = await getLicencias();
            cargarTabla(licencias);
            Swal.fire("Licencia Eliminada", "Licencia eliminada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (licencias)=>{
    let tbody = document.querySelector("#tbody-licencias");
    tbody.innerHTML = "";
    for(let i=0; i < licencias.length; ++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = licencias[i].nombre;
        let tdRut = document.createElement("td");
        tdRut.innerText = licencias[i].rut;
        let tdOtorgamiento = document.createElement("td");
        tdOtorgamiento.innerText = licencias[i].otorgamiento;
        let tdReposo = document.createElement("td");
        tdReposo.innerText = licencias[i].reposo;
        let tdSexo = document.createElement("td");
        tdSexo.innerText = licencias[i].sexo;
        let tdDias = document.createElement("td");
        tdDias.innerText = licencias[i].dias;
        let tdLicencia = document.createElement("td");
        tdLicencia.innerText = licencias[i].tipolicencia;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idLicencia = licencias[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdRut);
        tr.appendChild(tdOtorgamiento);
        tr.appendChild(tdReposo);
        tr.appendChild(tdSexo);
        tr.appendChild(tdDias);
        tr.appendChild(tdLicencia);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let licencias = await getLicencias(filtro);
    cargarTabla(licencias);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarTiposLicencia();
    let licencias = await getLicencias();
    cargarTabla(licencias);
});