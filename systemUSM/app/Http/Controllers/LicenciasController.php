<?php

namespace App\Http\Controllers;
use App\Models\Licencia;
use Illuminate\Http\Request;

class LicenciasController extends Controller
{
    public function getSexos(){
        $sexos = ["M", "F"];

        return $sexos;
    }

    public function getTipoLicencia(){
        $tipoLicencia = ["Enfermedad o Accidente Común", "Prorroga Medicina Preventiva", "Licencia Maternal PRE y POST Natal", "Enfermedad Grave Niño Menor de 1 Año", "Accidente del trabajo o del trayecto", "Enfermedad Profesional", "Patologia del Embarazo"];

        return $tipoLicencia;
    }

    public function getLicencias(){
        $licencias = Licencia::all();
        return $licencias;
    }

    public function filtrarLicencias(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $licencias = Licencia::where("tipolicencia", $filtro)->get();
        return $licencias;
    }

    public function crearLicencia(Request $request){
        $input = $request->all();
        $licencia = new Licencia();
        $licencia->nombre = $input["nombre"];
        $licencia->rut = $input["rut"];
        $licencia->otorgamiento = $input["otorgamiento"];
        $licencia->reposo = $input["reposo"];
        $licencia->sexo = $input["sexo"];
        $licencia->dias = $input["dias"];
        $licencia->tipolicencia = $input["tipolicencia"];

        $licencia->save();
        return $licencia;
    }

    public function eliminarLicencia(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $licencia = Licencia::findOrFail($id);
        $licencia->delete();
        return "ok";
    }
}
