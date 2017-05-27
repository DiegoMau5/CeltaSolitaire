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



Route::get('user', 'UsuarioController@index');
Route::get('user/{id}', 'UsuarioController@show');
Route::post('user', 'UsuarioController@store');
Route::put('user/{id}', 'UsuarioController@update');
Route::delete('user/{id}', 'UsuarioController@destroy');

//rutas para partida

Route::get('partida', 'PartidaController@index');
Route::get('partida/{id}', 'PartidaController@show');
Route::post('partida', 'PartidaController@store');
Route::put('partida/{id}', 'PartidaController@update');
Route::delete('partida/{id}', 'PartidaController@destroy');