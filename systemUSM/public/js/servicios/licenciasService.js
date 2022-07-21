const getLicencias = async (filtro ="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/licencias/get");
    }else{
        resp = await axios.get(`api/licencias/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearLicencia = async (licencia)=>{
    let resp = await axios.post("api/licencias/post", licencia, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarLicencia = async(id)=>{
    try{
        let resp = await axios.post("api/licencias/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
