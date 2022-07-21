const getTiposLicencia = async ()=>{
    let resultado = await axios.get("api/tipolicencia/get");
    return resultado.data;
};