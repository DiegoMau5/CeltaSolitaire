<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Partida extends Model
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

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
