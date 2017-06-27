@extends('layouts.app')

<!-- Definimos Sección -->

@section('dropdown-menu')
    <li>
        <a href="{{ route('home') }}"> Home </a>

    </li>
    @if (Auth::User()->admin == 1)
        <li>
            <a href="{{ route('play') }}"> Juego </a>

        </li>
    @endif
@endsection

@section('content')
    <br><br>

    <div class="container">
        <div class="row">
            <div id="alert_success" class="alert alert-success alert-dismissible" role="alert" style="display: none;">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>
        </div>
    </div>

   <div class="container">
       <h1>Bienvenido {{Auth::User()->name}}!¿Qué desea hacer?</h1>
   </div>
    <!--Aqui se mostrara tabla de usuarios-->

    <!--Peticiones-->

    <!--Mejores Puntuaciones-->

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Peticiones de Usuario</h4>
                <div id="peticiones" class="container">
                    <div class="row">
                        <div class="col-xs-3">Username</div>
                        <div class="col-xs-3">Email</div>
                    </div>
                    <hr>

                </div>

            </div>
            <div class="col-md-12">
                <h4>Lista Usuarios</h4>
                <div id="listaUsuarios" class="container">
                    <div class="row">
                        <div class="col-xs-3">Username</div>
                        <div class="col-xs-3">Email</div>
                    </div>
                    <hr>

                </div>
            </div>
            <div class="col-md-12">
                <h4>Puntuaciones</h4>

                <button id="allScore" class="btn btn-default"> All Scores </button>
                <button id="fiveScore" class="btn btn-default"> Top Five</button>
                <button id="desplegable" class="btn btn-default"> <> </button>
                <table class="paginated table table-hover table-responsive" id="tableScore">
                    <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Score</th>
                        <th scope="col">Date Match</th>

                    </tr>
                    </thead>
                    <tbody id="myTable">


                    </tbody>
                </table>

            </div>
        </div>

    </div>





@endsection
