const cargarTipoContrato = async()=>{
    let contratos = await getTipoContrato();
    let contratosSelect = document.querySelector("#tipoContrato-select");
    contratos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        contratosSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipoContrato();
});


document.querySelector("#registrarcontrato-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let rut = document.querySelector("#rut-txt").value;
    let tipocontrato = document.querySelector("#tipoContrato-select").value;
    let fechainicio = document.querySelector("#fechaInicio-txt").value;
    let fechatermino = document.querySelector("#fechaTermino-txt").value;
    let sueldo = document.querySelector("#sueldo-txt").value;
    let errores = [];

    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }

    if(rut === ""){
        errores.push("Debe ingresar un rut");
    }

    if(fechainicio === ""){
        errores.push("Debe ingresar una fecha de inicio para hacer valido el contrato");
    }

    if(isNaN(sueldo)){
        errores.push("El sueldo debe ser numerico");
    }else if( +sueldo < 337000){
        errores.push("El sueldo es incorrecto");
    }

    if(sueldo === ""){
        errores.push("Debe ingresar un sueldo para hacer valido el contrato");
    }

    if(errores.length == 0){
        let contrato = {};
        contrato.nombre = nombre;
        contrato.rut = rut;
        contrato.tipocontrato = tipocontrato;
        contrato.fechainicio = fechainicio;
        contrato.fechatermino = fechatermino;
        contrato.sueldo = sueldo;
        let res = await crearContrato(contrato);
        await Swal.fire("Contrato Registrado", "Contrato registrado en el sistema exitosamente", "success");
        window.location.href = "ver_contratos";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "error",
            html: errores.join("<br />")
        });
    }
    
});