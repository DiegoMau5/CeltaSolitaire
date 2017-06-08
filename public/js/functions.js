

$(document).ready(function (){
    adminControl();

    $('#saveUser').click(function(){

        var idUser= $('#saveUser').attr('name');

        guardarUsuario(idUser);

    });

    showPerfilUsuario();
    showScore();
    filtroTablaPuntuacion();



});

function adminControl() {
    $.getJSON(
        'http://localhost/laravel/CeltaSolitaire/public/api/users',
        function(data) {
            $.each(data.usuarios, function (i, user) {

                if (user.enable == 0) {
                    $('#peticiones').append('' +
                        '<div class="row">' +
                        '<div id="username" class="col-xs-3">' + user.user_name + '</div>' +
                        '<div id="email" class="col-xs-3">' + user.email + '</div>' +
                        '<div class="col-xs-1"><button id="ok" class="btn btn-success" onclick="enableUser(' + user.id + ');">' + 'Accept' + '</button></div>' +
                        '<div class="col-xs-1"><button id="ko" class="btn btn-danger" onclick="deleteUser(' + user.id + ');">' + 'Cancel' + '</button></div>' +
                        '</div>' +
                        '<hr>');
                } else {
                    $('#listaUsuarios').append('' +
                        '<div class="row">' +
                        '<div id="username" class="col-xs-3">' + user.user_name + '</div>' +
                        '<div id="email" class="col-xs-3">' + user.email + '</div>' +
                        '<div class="col-xs-1"><a id="perfilUsuario" class="btn btn-info" href="http://localhost/laravel/CeltaSolitaire/public/profile?id='+ user.id +'">' + 'Perfil' + '</a></div>' +

                        '<div class="col-xs-1"><button id="ok" class="btn btn-warning"  onclick="disenableUser(' + user.id + ');">' + 'Disable' + '</button></div>' +
                        '<div class="col-xs-1"><button id="ko" class="btn btn-danger" onclick="deleteUser(' + user.id + ');">' + 'Delete' + '</button></div>' +
                        '</div>' +
                        '<hr>');
                }
            });
        }
    );

}

function showPerfilUsuario() {

   var id = window.location.search.substr(4);
 $.getJSON(
     'http://localhost/laravel/CeltaSolitaire/public/api/users/'+id,
     function (data) {
         datos = data.usuario;
         var nombre = datos.name;
         var apellido = datos.apellido;
         var user_name = datos.user_name;
         var email = datos.email;
         var telefono = datos.telefono;

         $('#userNameh3').append(user_name);
         $('#perfilName').append(nombre);
         $('#perfilApellido').append(apellido);
         $('#perfilEmail').append(email);
         $('#perfilTelefono').append(telefono);

         $('#botonSaveProfile').append('' +
         '<input type="button" id="SaveProfile" class=" btn btn-success" value="save" onclick="guardarUsuarioAdmin(' + id + ');"> </input>')


     }




 );


}

function enableUser(id) {
    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/users/' + id,
        type: 'PUT',
        data: {

            'enable': 1
        },
        success: function () {
            $('#alert_success').show();
        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}
function disenableUser(id) {
    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/users/' + id,
        type: 'PUT',
        data: {

            'enable': 0
        },
        success: function () {
            $('#alert_success').show();
        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}

function deleteUser(id) {
    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/users/' + id,
        type: 'DELETE',
        success: function () {
            $('#alert_success').show();
        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}

function guardarUsuario(id) {

    var datosJSON={

        'user_name':$('#inputusername').val(),
        'password':$('#inputpassword').val(),
        'name':$('#inputname').val(),
        'apellido': $('#inputapellido').val(),
        'email': $('#inputemail').val(),
        'telefono':$('#inputtelefono').val()
    }

    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/users/' + id,
        type: 'PUT',
        dataType: 'json',
        data: {

            format: 'json'
        },
        data: datosJSON,
        success: function () {
            $('#alert_success_profile_user').show();


        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}

function guardarUsuarioAdmin(id) {



    var datosJSON={

        'user_name':$('#inputusernameAdmin').val(),
        'password':$('#inputpasswordAdmin').val(),
        'name':$('#inputnameAdmin').val(),
        'apellido': $('#inputapellidoAdmin').val(),
        'email': $('#inputemailAdmin').val(),
        'telefono':$('#inputtelefonoAdmin').val()
    }



    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/users/' + id,
        type: 'PUT',
        dataType: 'json',
        data: {

            format: 'json'
        },
        data: datosJSON,
        success: function () {
            $('#alert_success_profile_admin').show();


        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}

function filtroTablaPuntuacion() {
    var activeSystemClass = $('.list-group-item.active');

    //something is entered in search form
    $('#system-search').keyup( function() {
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();

            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
}

function showScore(){

    var idUsuarioAdmin = window.location.search.substr(4);
    var idUser= $('#score').attr('name');

    $.getJSON(

        'http://localhost/laravel/CeltaSolitaire/public/api/partidasUser/'+idUser,
        function (data) {
            $.each(data.partida.partidas_user, function (i, partida){

                if(partida.acabada == 1){
                    $('#tablePuntuacion').append('' +
                    '<tr>'+
                        '<td>' + partida.score + '</td>' +
                        '<td>' + partida.created_at + '</td>' +
                        '<td><button id="ko" class="btn btn-danger" onclick="deletePartida(' + partida.id + ');">' + 'Delete' + '</button></td>' +
                    '</tr>');
                }
            });
        }

    );

    $.getJSON(

        'http://localhost/laravel/CeltaSolitaire/public/api/partidasUser/'+idUsuarioAdmin,
        function (data) {
            $.each(data.partida.partidas_user, function (i, partida){

                if(partida.acabada == 1){
                    $('#tablePuntuacionUsuarioAdmin').append('' +
                        '<tr>'+
                        '<td>' + partida.score + '</td>' +
                        '<td>' + partida.created_at + '</td>' +
                        '<td><button id="ko" class="btn btn-danger" onclick="deletePartida(' + partida.id + ');">' + 'Delete' + '</button></td>' +
                        '</tr>');
                }
            });
        }

    );

}

function deletePartida(id) {
    $.ajax({
        url: 'http://localhost/laravel/CeltaSolitaire/public/api/partidas/' + id,
        type: 'DELETE',
        success: function () {

        },
        error: function () {
            alert('Está mal');
        },
        complete: function () {
            window.location.reload(true);
        }
    });
}





