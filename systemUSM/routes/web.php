<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view("/", "registro_usuarios")->name("registro_usuarios");
Route::view("/ver_usuarios", "ver_usuarios")->name("ver_usuarios");
Route::view("/registro_licencias", "registro_licencias")->name("registro_licencias");
Route::view("/ver_licencias", "ver_licencias")->name("ver_licencias");
Route::view("/registro_cargas", "registro_cargas")->name("registro_cargas");
Route::view("/ver_cargas", "ver_cargas")->name("ver_cargas");
Route::view("/registro_contratos", "registro_contratos")->name("registro_contratos");
Route::view("/ver_contratos", "ver_contratos")->name("ver_contratos");
