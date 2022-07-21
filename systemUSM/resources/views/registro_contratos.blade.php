@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card border-dark">
            <div class="card-header colorcard text-white">
                <span>Agregar Contrato</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Ingrese el Nombre del Contratado</label>
                    <input type="text" id="nombre-txt" class="form-control border-dark">
                </div>
                <div class="mb-3">
                    <label for="rut-txt" class="form-label">Ingrese Rut del Contratado</label>
                    <input type="number" id="rut-txt" class="form-control border-dark">
                </div>
                <div class="mb-3">
                    <label for="tipoContrato-select" class="form-label">Tipo de Contrato</label>
                    <select id="tipoContrato-select" class="form-select border-dark">

                    </select>
                </div>
                <div class="mb-3">
                    <label for="fechaInicio-txt" class="form-label">Ingrese la fecha de inicio del Contrato</label>
                    <input type="number" id="fechaInicio-txt" class="form-control border-dark">
                </div>
                <div class="mb-3">
                    <label for="fechaTermino-txt" class="form-label">Ingrese la fecha de Termino del Contrato (En caso de tratarse de un contrato a Plazo Fijo)</label>
                    <input type="number" id="fechaTermino-txt" class="form-control border-dark">
                </div>
                <div class="mb-3">
                    <label for="sueldo-txt" class="form-label">Ingrese el Sueldo del Contratado</label>
                    <input type="number" id="sueldo-txt" class="form-control border-dark">
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrarcontrato-btn" class="btn btn-info colorbtn border-dark">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/contratosService.js')}}"></script>
    <script src="{{asset('js/servicios/tipocontratoService.js')}}"></script>
    <script src="{{asset('js/registro_contratos.js')}}"></script>
@endsection