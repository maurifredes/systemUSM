const getTipoContrato = async ()=>{
    let resultado = await axios.get("api/tipoContrato/get");
    return resultado.data;
};