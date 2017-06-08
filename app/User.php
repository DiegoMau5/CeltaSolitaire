<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;


    protected $fillable = ['user_name',
                           'name',
                           'apellido',
                           'email',
                           'telefono',
                           'admin',
                           'enable',
                           'password',
                           'created_at'
    ];


    protected $hidden = [
        'password', 'updated_at', 'remember_token'
    ];

    public function partidasUser(){
        return $this-> hasMany('App\Partida');
    }
}
