const getTiposCargas = async ()=>{
    let resultado = await axios.get("api/tiposCargas/get");
    return resultado.data;
};

const getCargas = async (filtro ="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/cargas/get");
    }else{
        resp = await axios.get(`api/cargas/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearCarga = async (carga)=>{
    let resp = await axios.post("api/cargas/post", carga, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarCarga = async(id)=>{
    try{
        let resp = await axios.post("api/cargas/delete", {id}, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};