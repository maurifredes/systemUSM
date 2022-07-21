const cargarTiposCargas = async()=>{
    let resultado = await axios.get("api/tiposCargas/get");
    let cargas = resultado.data;
    let cargasSelect = document.querySelector("#tipoCarga-select");
    cargas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        cargasSelect.appendChild(option);
    });
}

const cargarSexos = async()=>{
    let sexos = await getSexos();
    let sexoSelect = document.querySelector("#sexo-select");
    sexos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        sexoSelect.appendChild(option);
    });
};
document.addEventListener("DOMContentLoaded", ()=>{
    cargarSexos();
    cargarTiposCargas();
});

document.querySelector("#registrarcarga-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let rut = document.querySelector("#rut-txt").value.trim();
    let nacimientoCarga = document.querySelector("#nacimientoCarga-txt").value.trim();
    let tipoCarga = document.querySelector("#tipoCarga-select").value.trim();
    let sexo = document.querySelector("#sexo-select").value.trim();
    let fechaBeneficio = document.querySelector("#fechaBeneficio-txt").value.trim();
    let nombreCarga = document.querySelector("#nombreCarga-txt").value.trim();
    let errores = [];
    
    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }else{
        let cargas = await getCargas();
        let cargaEncontrada = cargas.find(c=>c.nombre.toLowerCase() === nombre.toLowerCase());
        if(cargaEncontrada != undefined){
            errores.push("El nombre de la carga familiar ya existe");
        }
    }

    if(isNaN(rut)){
        errores.push("El rut debe ser numerico");
    }

    if(rut === ""){
        errores.push("Debe ingresar un rut");
    }

    if(nacimientoCarga === ""){
        errores.push("Debe ingresar fecha de nacimiento de la carga familiar");
    }

    if(isNaN(nacimientoCarga)){
        errores.push("La fecha de nacimiento de la carga familiar debe ser numerica");
    }

    if(fechaBeneficio === ""){
        errores.push("Debe ingresar la fecha del Beneficio para que este sea valido");
    }

    if(isNaN(fechaBeneficio)){
        errores.push("La fecha del beneficio por carga familiar debe ser numerica");
    }

    if(nombreCarga === ""){
        errores.push("Debe ingresar el nombre de la persona a la que se quiere asociar la carga");
    }

    if(errores.length == 0){
        let carga = {};
        carga.nombre = nombre;
        carga.rut = rut;
        carga.nacimiento_carga = nacimientoCarga;
        carga.tipocarga = tipoCarga;
        carga.sexo = sexo;
        carga.fecha_beneficio = fechaBeneficio;
        carga.nombre_carga = nombreCarga;
        let res = await crearCarga(carga);
        await Swal.fire("Carga Registrada", "Carga registrada en el sistema exitosamente", "success");
        window.location.href = "ver_cargas";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "error",
            html: errores.join("<br />")
        });
    }
});