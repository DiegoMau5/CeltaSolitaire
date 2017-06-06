@extends('layouts.app')

@section('content')
    <h1>Bienvenido {{Auth::User()->name}}</h1>
    @if (Auth::User()->enable == 1)
       <h1>PLAY</h1>

    @else
        <h3> {{Auth::User()->name}} NO ESTA DADO DE ALTA EN EL JUEGO </h3>
    @endif
@endsection