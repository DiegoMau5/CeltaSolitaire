<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

// Rutas para Usuario

Route::get('users', 'UsuarioController@index');
Route::get('users/{id}', 'UsuarioController@show');
Route::post('users', 'UsuarioController@store');
Route::put('users/{id}', 'UsuarioController@update');
Route::delete('users/{id}', 'UsuarioController@destroy');

//Rutas para partida

Route::get('partidas', 'PartidaController@index');
Route::get('partidas/{id}', 'PartidaController@show');
Route::get('partidasUser/{user_id}', 'PartidaController@showPartidaUser');
Route::post('partidas', 'PartidaController@store');
Route::put('partidas/{id}', 'PartidaController@update');
Route::delete('partidas/{id}', 'PartidaController@destroy');