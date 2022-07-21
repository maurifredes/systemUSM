@extends("layouts.master")

@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card border-dark">
            <div class="card-body">
                <input id="buscar" type="text" class="form-control border-dark" placeholder="Escriba algo para filtrar" />
            </div>
        </div>
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table id="tabla" class="table table-hover table-bordered table-striped table-responsive">
            <thead class="colorcard text-white border-dark">
                <tr>
                    <td>Nombre Completo</td>
                    <td>Año de Nacimiento</td>
                    <td>Correo Electronico</td>
                    <td>Nombre de Usuario</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody class="card-body border-dark" id="tbody-usuarios">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
    <script src="{{asset('js/ver_usuarios.js')}}"></script>
@endsection