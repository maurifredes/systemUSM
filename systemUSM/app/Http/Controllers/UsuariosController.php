<?php

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function getUsuarios(){
        $usuarios = Usuario::all();
        return $usuarios;
    }

    public function crearUsuarios(Request $request){
        $input = $request->all();
        $usuario = new Usuario();
        $usuario->nombre = $input["nombre"];
        $usuario->anionacimiento = $input["anionacimiento"];
        $usuario->correo = $input["correo"];
        $usuario->nusuario = $input["nusuario"];

        $usuario->save();
        return $usuario;
    }

    public function eliminarUsuarios(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return "ok";
    }
}
