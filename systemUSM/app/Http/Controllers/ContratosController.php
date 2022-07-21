<?php

namespace App\Http\Controllers;
use App\Models\Contrato;
use Illuminate\Http\Request;

class ContratosController extends Controller
{
    public function getTipoContrato(){
        $contratos = ["Plazo Fijo", "Indefinido"];

        return $contratos;
    }

    public function getContratos(){
        $contratos = Contrato::all();
        return $contratos;
    }

    public function filtrarContratos(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $contratos = Contrato::where("tipocontrato", $filtro)->get();
        return $contratos;
    }

    public function crearContrato(Request $request){
        $input = $request->all();
        $contrato = new Contrato();
        $contrato->nombre = $input["nombre"];
        $contrato->rut = $input["rut"];
        $contrato->tipocontrato = $input["tipocontrato"];
        $contrato->fechainicio = $input["fechainicio"];
        $contrato->fechatermino = $input["fechatermino"];
        $contrato->sueldo = $input["sueldo"];

        $contrato->save();
        return $contrato;
    }

    public function eliminarContrato(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $contrato = Contrato::findOrFail($id);
        $contrato->delete();
        return "ok";
    }
}
