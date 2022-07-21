@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card border-dark">
                <div class="card-header colorcard text-white">
                    <span>Filtre Aquí</span>
                </div>
                <div class="card-body">
                    <select class="form-select border-dark" id="filtrocarga-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table border-dark table-hover table-bordered table-striped table-responsive">
                <thead class="colorcard text-white">
                    <tr>
                        <td>Nombre de la Carga</td>
                        <td>Rut de la Carga</td>
                        <td>Fecha de nacimiento de la Carga</td>
                        <td>Tipo de Carga</td>
                        <td>Sexo de la Carga</td>
                        <td>Inicio del Beneficio</td>
                        <td>Persona a la que le pertenece esta Carga</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-carga" class="card-body">

                </tbody>
            </table>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/cargasService.js')}}"></script>
    <script src="{{asset('js/ver_cargas.js')}}"></script>
@endsection