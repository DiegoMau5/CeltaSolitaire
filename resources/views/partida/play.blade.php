@extends('layouts.app')



@section('dropdown-menu')
    @if (Auth::User()->admin == 1)
        <li>
            <a href="{{ route('admin') }}"> Panel </a>

        </li>
    @endif
    <li>
        <a href="{{ route('home') }}"> Home </a>

    </li>
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div id="alert_success_play" class="alert alert-success alert-dismissible" role="alert" style="display: none;">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>GOOD!! Game Save</strong>
            </div>
        </div>
    </div>
    @if (Auth::User()->enable == 1)
        <header id="headerPlay" name = {{Auth::User()->id}}>


            <ul class="navPlay">
                <li id="situar"><a href="{{ route('situar') }}">Situar</a></li>
                <li id="jugar">Jugar</li>
                <li class="guardar"><a >Guardar Estado</a></li>
                <li><a class="recuperar">Recuperar Estado</a></li>


            </ul>
            <hr>

        </header>

        <div id="left_menuPlay">
            <h2>Datos del Juego</h2>
            <p>Hueco Central
                <input type="radio" name="opcionHueco" value="Hueco Central" id="hueco_central" checked="" >
            </p>
            <p>Hueco Aleatorio
                <input type="radio" name="opcionHueco" value="Hueco Random" id="hueco_random"  >
            </p>
            <div id="timerPlay">
                <h4>Timer</h4>
                Minutes : Seconds <br>
                <input type="text" id="minutes" class="reloj" value="" maxlength="2"> :
                <input type="text" id="seconds" class="reloj" value="" maxlength="2">
                <br>
                CountDown <br>
                <input type="text" name="countDown" id="countDown" value="" readonly=""> Segundos
            </div>
            <hr>

            <h3>Puntuación
                <input type="text" name="puntuacion" value=0   id="etiqueta_puntuacion" readonly="">
            </h3>


        </div>
        <div id="board"></div>

        <script src="{{ asset('js/jugar.js') }}"></script>
        <script src="{{ asset('js/partida.js') }}"></script>

    @else
        <h3> {{Auth::User()->name}} NO ESTA DADO DE ALTA EN EL JUEGO </h3>
    @endif
@endsection