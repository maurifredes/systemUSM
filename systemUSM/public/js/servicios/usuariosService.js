const getUsuarios = async ()=>{
    let resp = await axios.get("api/usuarios/get");
    return resp.data;
};

const crearUsuarios = async (usuario)=>{
    let resp = await axios.post("api/usuarios/post", usuario, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarUsuarios = async(id)=>{
    try{
        let resp = await axios.post("api/usuarios/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
}

document.querySelector("#buscar").onkeyup = function(){
    $TableFilter("#tabla", this.value);
}

$TableFilter = function(id, value){
    var rows = document.querySelectorAll(id + ' tbody tr');
    
    for(var i = 0; i < rows.length; i++){
        var showRow = false;
        
        var row = rows[i];
        row.style.display = 'none';
        
        for(var x = 0; x < row.childElementCount; x++){
            if(row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
                showRow = true;
                break;
            }
        }
        
        if(showRow){
            row.style.display = null;
        }
    }
}
