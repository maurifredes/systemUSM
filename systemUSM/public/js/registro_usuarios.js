document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let anionacimiento = document.querySelector("#anionacimiento-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let nusuario = document.querySelector("#nusuario-txt").value.trim();

    let errores = [];
    if(correo === ""){
        errores.push("Debe ingresar un correo para que se le registre en el sistema");
    }else{
        let usuarios = await getUsuarios();
        let usuarioEncontrado = usuarios.find(c=>c.correo.toLowerCase() === correo.toLowerCase());
        if(usuarioEncontrado != undefined){
            errores.push("El Correo ya existe dentro del sistema");
        }
    }

    if(nusuario === ""){
        errores.push("Debe ingresar un usuario valido para registrarse");
    }else{
        let usuarios = await getUsuarios();
        let usuarioEncontrado = usuarios.find(c=>c.nusuario.toLowerCase() === nusuario.toLowerCase());
        if(usuarioEncontrado != undefined){
            errores.push("El Usuario ya existe en el sistema");
        }
    }

    if(isNaN(anionacimiento)){
        errores.push("El año debe ser númerico");
    }else if( +anionacimiento < 1900){
        errores.push("El año es incorrecto");
    }

    if(errores.length== 0){
        let usuario = {};
        usuario.nombre = nombre;
        usuario.anionacimiento = anionacimiento;
        usuario.correo = correo;
        usuario.nusuario = nusuario;
        let res = await crearUsuarios(usuario);
        await Swal.fire("Usuario Registrado", "Usuario Registrado en el sistema Exitosamente", "success");
        window.location.href = "ver_usuarios";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "error",
            html: errores.join("<br />")
        })
    }
});