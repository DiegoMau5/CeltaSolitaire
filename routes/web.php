<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//Rutas para el administrador

Route::get('admin',['middleware' => 'auth' , 'uses' => 'AdminController@admin'])->name('admin');

Route::get('profile',['middleware' => 'auth' , 'uses' => 'AdminController@showProfile']);


//Rutas para el juego

Route::get('play', 'PartidaController@play')->name('play');
Route::get('play/situar', 'PartidaController@situar')->name('situar');