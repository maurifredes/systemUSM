const getContratos = async (filtro ="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/contratos/get");
    }else{
        resp = await axios.get(`api/contratos/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearContrato = async (contrato)=>{
    let resp = await axios.post("api/contratos/post", contrato, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarContrato = async(id)=>{
    try{
        let resp = await axios.post("api/contratos/delete", {id}, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};