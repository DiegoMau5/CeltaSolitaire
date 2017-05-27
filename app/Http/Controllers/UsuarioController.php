<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;


use Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException; // import model for ErrorExceptions
use Illuminate\Database\QueryException as QueryException; // import model for QueryException

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = \App\User::get();
        if (count($usuario)==0 || $usuario == null) {
            return response()->json([
                "msg"=>"tabla usuarios vacia",
                "code"=>"404"
            ],404);
        }else {
            return response()->json([
                "msg"=>"success",
                "code"=>"200",
                "usuarios" => $usuario
            ],200);
        }

    }


    public function store(Request $request) //
    {
        try {

            $usuario = new \App\User(); //Created a new Usuario
            if ($request->input('user_name')!=null && $request->input('password')!=null) {

                $usuario->user_name = $request->input('user_name');
                $usuario->password = $request->input('password');
                $usuario->name = $request->input('name');
                $usuario->apellidos = $request->input('apellido');
                $usuario->email = $request->input('email');
                $usuario->password = $request->input('telefono');
                $usuario->password = $request->input('admin');
                $usuario->password = $request->input('enable');
                $usuario->save();


                return response() -> json([
                    "msg"=>"Succes",
                    "Code"=>"201",
                    "id"=> $usuario->toArray()
                ],201);

            }else {
                return response() -> json([
                    "msg"=>"El campo usuario y la contraseña son necesarios",
                    "Code"=>"422"

                ],422);
            }

        } catch (QueryException $e) {
            return response()->json([
                "code"=>"400",
                "msg"=>"el usuario ya existe"
            ],400);
        }

    }

    public function show($id)
    {
        try {
            $usuario = \App\User::findOrFail($id); // find the user by id

            return response()->json([
                "msg"=>"success",
                "code"=>"200",
                "usuario" =>$usuario->toArray()
            ]);

        } catch (ModelNotFoundException $e) {

            return response()->json([
                "msg"=>"Usuario no encontrado",
                "code"=>"404"
            ],404);
        }


    }

    public function update($id, Request $request)
    {
        try {

            $usuario = \App\User::findOrFail($id); // find the user by id

            //update user's attributes and save the user

            $usuario->user_name = $request->input('user_name');
            $usuario->password = $request->input('password');
            $usuario->name = $request->input('name');
            $usuario->apellidos = $request->input('apellido');
            $usuario->email = $request->input('email');
            $usuario->password = $request->input('telefono');
            $usuario->password = $request->input('admin');
            $usuario->password = $request->input('enable');
            $usuario->save();

            return response() -> json([
                "msg"=>"Succes",
                "code"=>"200",
                "id"=> $usuario->toArray()
            ],200);

        }catch (ModelNotFoundException $e) {

            return response()->json([
                "msg"=>"Usuario no encontrado",
                "code"=>"404"
            ],404);

        } catch (QueryException $e) {
            return response()->json([
                "code"=>"400",
                "msg"=>"el usuario ya existe"
            ],400);
        }


    }

    public function destroy($id)
    {
        try {
            $usuario = \App\User::findOrFail($id);
            $usuario->delete();

            return response() -> json([
                "msg"=>"Succes",
                "code"=>"200"
            ],200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                "msg"=>"Usuario no encontrado",
                "code"=>"404"
            ],404);
        }


    }
}
