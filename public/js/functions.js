

$(document).ready(function (){
    adminControl()
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
                        '<div class="col-xs-1"><button id="ok" class="btn btn-success">' + 'Accept' + '</button></div>' +
                        '<div class="col-xs-1"><button id="ko" class="btn btn-danger">' + 'Cancel' + '</button></div>' +
                        '</div>' +
                        '<hr>');
                }
            });
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

