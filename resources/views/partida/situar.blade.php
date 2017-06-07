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
    @if (Auth::User()->enable == 1)
        <header id="headerPlay">


            <ul class="navPlay">
                <li id="situar"><a href="#">Situar</a></li>
                <li id="jugar">Jugar</li>
                <li><a href="{{ route('play') }}">Tablero</a></li>
                <li><a href="#">Guardar Estado</a></li>
                <li><a href="#">Registar Puntuacion</a></li>

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

        <script src="{{ asset('js/situar.js') }}"></script>

    @else
        <h3> {{Auth::User()->name}} NO ESTA DADO DE ALTA EN EL JUEGO </h3>
    @endif
@endsection