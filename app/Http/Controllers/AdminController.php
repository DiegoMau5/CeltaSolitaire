<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
//use App\Http\Controllers\Controller;



use App\User;
use Validator;
use Auth;

class AdminController extends Controller
{
    // Funcion para comprobar administrador

    private function isAdmin(){
        if (Auth::User()->admin == 1) return true;
        else return false;
    }

//Funcion para redirigir al administrdor

    public function admin() {

        if ($this->isAdmin()){
            return view('admin.index');
        } else{
            return redirect()->route('home');

        }
    }

    public function showProfile(){
        if ($this->isAdmin()){
            return view('admin.profileUser');
        } else{
            return redirect()->route('home');

        }
    }
}
