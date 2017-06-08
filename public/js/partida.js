/**
 * Created by Diego on 07/06/2017.
 */

$(document).ready(function (){


    $('.guardar').click(function(){

            guardarPartida()

    });

});


function guardarPartida() {
    fin =$('#divCuadroResult').val();

    var acabada = 0;
    if(fin != null){
         acabada = 1;
    }

    var id = $('#headerPlay').attr('name');
    var tablero = "[0,1,-1]";
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
