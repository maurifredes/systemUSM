<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\LicenciasController;
use App\Http\Controllers\CargasController;
use App\Http\Controllers\ContratosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("usuarios/get", [UsuariosController::class, "getUsuarios"]);
Route::get("licencias/get", [LicenciasController::class, "getLicencias"]);
Route::get("tipolicencia/get", [LicenciasController::class, "getTipoLicencia"]);
Route::get("sexos/get", [LicenciasController::class, "getSexos"]);
Route::get("licencias/filtrar", [LicenciasController::class, "filtrarLicencias"]);

Route::post("usuarios/post", [UsuariosController::class, "crearUsuarios"]);
Route::post("licencias/post", [LicenciasController::class, "crearLicencia"]);

Route::post("usuarios/delete", [UsuariosController::class, "eliminarUsuarios"]);
Route::post("licencias/delete", [LicenciasController::class, "eliminarLicencia"]);

Route::get("tiposCargas/get", [CargasController::class, "getTiposCargas"]);
Route::get("cargas/get", [CargasController::class, "getCargas"]);
Route::get("cargas/filtrar", [CargasController::class, "filtrarCargas"]);
Route::post("cargas/post", [CargasController::class, "crearCarga"]);
Route::post("cargas/delete", [CargasController::class, "eliminarCarga"]);

Route::get("tipoContrato/get", [ContratosController::class, "getTipoContrato"]);
Route::get("contratos/get", [ContratosController::class, "getContratos"]);
Route::post("contratos/post", [ContratosController::class, "crearContrato"]);
Route::post("contratos/delete", [ContratosController::class, "eliminarContrato"]);
Route::get("contratos/filtrar", [ContratosController::class, "filtrarContratos"]);