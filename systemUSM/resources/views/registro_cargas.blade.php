@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 mb-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card border-dark">
                <div class="card-header colorcard text-white">
                    <span>Agregar Carga Familiar</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nombre-txt" class="form-label">Ingrese Nombre de la Carga</label>
                        <input type="text" id="nombre-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="rut-txt" class="form-label">Ingrese Rut de la Carga</label>
                        <input type="number" id="rut-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="nacimientoCarga-txt" class="form-label">Ingrese fecha de nacimiento de la Carga</label>
                        <input type="number" id="nacimientoCarga-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="tipoCarga-select" class="form-label">Tipo de Carga</label>
                        <select id="tipoCarga-select" class="form-select border-dark">

                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="sexo-select" class="form-label">Seleccione sexo de la Carga</label>
                        <select id="sexo-select" class="form-select border-dark">

                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="fechaBeneficio-txt" class="form-label">Ingrese la fecha de inicio del Beneficio</label>
                        <input type="number" id="fechaBeneficio-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="nombreCarga-txt" class="form-label">Ingrese nombre de la persona que esta asociada a la Carga</label>
                        <input type="text" id="nombreCarga-txt" class="form-control border-dark">
                    </div>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrarcarga-btn" class="btn btn-info colorbtn border-dark">Registrar</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/sexosService.js')}}"></script>
    <script src="{{asset('js/servicios/cargasService.js')}}"></script>
    <script src="{{asset('js/registro_cargas.js')}}"></script>
@endsection