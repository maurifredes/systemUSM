@extends('layouts.master')

@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card border-dark">
            <div class="card-header colorcard text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <select class="form-select border-dark" id="filtrocontratos-cbx">
                    <option value="todos">Todos</option>
                </select>
            </div>
        </div>
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table id="tabla" class="table border-dark table-hover table-bordered table-striped table-responsive">
            <thead class="colorcard text-white">
                <tr>
                    <td>Nombre Contratado</td>
                    <td>Rut del Contratado</td>
                    <td>Tipo de Contrato</td>
                    <td>Fecha de Inicio</td>
                    <td>Fecha de Termino</td>
                    <td>Sueldo</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-contratos" class="card-body">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/contratosService.js')}}"></script>
    <script src="{{asset('js/servicios/tipocontratoService.js')}}"></script>
    <script src="{{asset('js/ver_contratos.js')}}"></script>
@endsection