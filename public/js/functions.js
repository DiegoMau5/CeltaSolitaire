

$(document).ready(function (){
    adminControl();

    $('#saveUser').click(function(){

        var idUser= $('#saveUser').attr('name');

        guardarUsuario(idUser);

    });

    showPerfilUsuario();



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

   var id = window.location.search.substr(4,4);
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








