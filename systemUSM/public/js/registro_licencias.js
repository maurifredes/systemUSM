const cargarSexos = async()=>{
    let sexos = await getSexos();
    let sexoSelect = document.querySelector("#sexo-select");
    sexos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        sexoSelect.appendChild(option);
    });
};

cargarTipoLicencia = async()=>{
    let tiposLicencias = await getTiposLicencia();
    let tipoLicenciaSelect = document.querySelector("#tipolicencia-select");
    tiposLicencias.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        tipoLicenciaSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarSexos();
    cargarTipoLicencia();
});

document.querySelector("#registrarlicencia-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let rut = document.querySelector("#rut-txt").value;
    let otorgamiento = document.querySelector("#otorgamiento-txt").value;
    let reposo = document.querySelector("#reposo-txt").value;
    let sexo = document.querySelector("#sexo-select").value;
    let dias = document.querySelector("#dias-txt").value;
    let tipolicencia = document.querySelector("#tipolicencia-select").value;
    let errores = [];

    if(nombre === ""){
        errores.push("Debe ingresar un nombre para que se acepte la licencia medica");
    }

    if(rut === ""){
        errores.push("Debe ingresar un rut");
    }

    if(otorgamiento === ""){
        errores.push("Debe ingresar la fecha de otorgamiento de la licencia para que sea valida");
    }

    if(reposo === ""){
        errores.push("Debe ingresar la fecha de reposo para que la licencia sea valida");
    }

    if(isNaN(dias)){
        errores.push("El numero de dias debe ser numerico");
    }

    if(dias === ""){
        errores.push("Debe ingresar el numero de dias de su licencia para que esta sea valida");
    }
    
    if(errores.length == 0){
        let licencia = {};
        licencia.nombre = nombre;
        licencia.rut = rut;
        licencia.otorgamiento = otorgamiento;
        licencia.reposo = reposo;
        licencia.sexo = sexo;
        licencia.dias = dias;
        licencia.tipolicencia = tipolicencia;
        let res = await crearLicencia(licencia);
        await Swal.fire("Licencia Registrada", "Licencia creada exitosamente", "success");
        window.location.href = "ver_licencias";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "error",
            html: errores.join("<br />")
        });
    }
});