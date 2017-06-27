/**
 * Created by Diego on 07/06/2017.
 */

$(document).ready(function (){


    $('.guardar').click(function(){

            guardarPartida();


    });
    mostrarPartida();

});


function guardarPartida() {
    fin =$('#divCuadroResult').val();

    var acabada = 0;
    if(fin != null){
         acabada = 1;
    }

    var id = $('#headerPlay').attr('name');
    var tablero = $('#board').html();
    var datosJSON={
            'score': $('#etiqueta_puntuacion').val(),
            'user_id': id,
            'tablero': tablero,
            'acabada': acabada,
            'time':$('#countDown').val()
    }

    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/partidas',
        type: 'POST',
        dataType: 'json',
        data: {

            format: 'json'
        },
        data: datosJSON,
        success: function () {

            $('#alert_success_play').show();

        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}


function mostrarPartida() {
    var idUser = $('#headerPlay').attr('name');

    $.getJSON(
        'http://localhost/laravel/CeltaSolitaire/public/api/partidasUser/'+idUser,
        function (data) {
            $.each(data.partida.partidas_user,function (i,partida) {
                if (partida.acabada == 0){
                    $('#recuperarJuego').append('' +
                        '<tr>'+
                        '<td>' + partida.created_at + '</td>' +
                        '<td><button id="ko" class="btn btn-danger" onclick="deletePartida(' + partida.id + ');">' + 'Delete' + '</button></td>' +
                        '<td><button id="recuperar" class="btn btn-success" onclick="recuperarPartida(' + partida.id + ');">' + 'Recuperar' + '</button></td>' +
                        '</tr>');
                }
            });
        }

    );

}

function recuperarPartida(idPartida) {

      // $('#board').empty();


    $.getJSON(
        'http://localhost/laravel/CeltaSolitaire/public/api/partidas/'+idPartida,
        function (data) {
            datos = data.partida;

            var puntuacion = datos.score;
            var tiempo = datos.time;
            var tablero = datos.tablero;



             $('#etiqueta_puntuacion').val(puntuacion);
             $('#countDown').val(tiempo);
             $('#board').html(tablero);
        }
    )
}
