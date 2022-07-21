@extends("layouts.master")

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card border-dark">
                <div class="card-header text-white colorcard">
                    <span>Agregar Usuario</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nombre-txt" class="form-label">Nombre Completo</label>
                        <input type="text" id="nombre-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="correo-txt" class="form-label">Correo Electronico</label>
                        <input type="email" id="correo-txt" class="form-control border-dark">
                    </div>
                    <div class="mb-3">
                        <label for="anionacimiento-txt" class="form-label">Año de Nacimiento</label>
                        <input type="number" class="form-control border-dark" id="anionacimiento-txt">
                    </div>
                    <div class="mb-3">
                        <label for="nusuario-txt" class="from-label">Nombre de Usuario</label>
                        <input type="text" id="nusuario-txt" class="form-control border-dark">
                    </div>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" class="btn btn-info border-dark text-dark colorbtn">Registrar</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
    <script src="{{asset('js/registro_usuarios.js')}}"></script>
@endsection