@extends('layouts.master')

@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card border-dark">
            <div class="card-header colorcard text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <select class="form-select border-dark" id="filtro-cbx">
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
                    <td>Nombre Completo</td>
                    <td>RUT</td>
                    <td>Fecha de Otorgamiento</td>
                    <td>Fecha Inicio Reposo</td>
                    <td>Sexo</td>
                    <td>N° de Dias</td>
                    <td>Tipo de Licencia</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-licencias" class="card-body">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/licenciasService.js')}}"></script>
    <script src="{{asset('js/servicios/tipolicenciaService.js')}}"></script>
    <script src="{{asset('js/ver_licencias.js')}}"></script> 
@endsection