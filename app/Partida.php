<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use Notifiable;


    protected $fillable = [
        'user_id',
        'time',
        'score',
        'acabada',
        'tablero',
        'created_at',
        'updated_at'
    ];


    protected $hidden = [
         
    ];
}
