const getSexos = async ()=>{
    let resultado = await axios.get("api/sexos/get");
    return resultado.data;
};