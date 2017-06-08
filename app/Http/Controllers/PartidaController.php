<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

use Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;
use Illuminate\Support\Facades\Auth; // import model for ErrorExceptions


class PartidaController extends Controller
{


    public function index()
    {
        $partida = \App\Partida::get();
        if (count($partida)==0 || $partida == null) {
            return response()->json([
                "msg"=>"tabla partida vacia",
                "code"=>"404"
            ],404);
        }else {
            return response()->json([
                "msg"=>"success",
                "code"=>"200",
                "partida" => $partida
            ],200);
        }

    }




    public function store(Request $request) //
    {


        $partida = new \App\Partida(); //Created a new Partida

        if ($request->input('user_id') != null){
            $partida->user_id = $request->input('user_id');
        }
        if ($request->input('time') != null ){
            $partida->time = $request->input('time');
        }
        if ($request->input('tablero') != null){
            $partida->tablero = $request->input('tablero');
        }

        if ($request->input('score') != null ){
            $partida->score = $request->input('score');
        }

        if ($request->input('acabada') != null){
            $partida->acabada = $request->input('acabada');
        }

        $partida->save();


        return response() -> json([
            "msg"=>"Succes, partida guardada",
            "Code"=>"201",
            "id"=> $partida->toArray()
        ],201);





    }

     public function show($id)
{
    try {
        $partida = \App\Partida::findOrFail($id);

        return response()->json([
            "msg"=>"success",
            "code"=>"200",
            "partida" =>$partida->toArray()
        ]);

    } catch (ModelNotFoundException $e) {

        return response()->json([
            "msg"=>"partida no encontrada",
            "code"=>"404"
        ],404);
    }


}
    public function showPartidaUser($user_id)
    {
        try {
            $partida = \App\User :: with('partidasUser')->find($user_id);
//            $partida = \App\Partida::find($user_id);

            return response()->json([
                "msg"=>"success",
                "code"=>"200",
                "partida" =>$partida->toArray()
            ]);

        } catch (ModelNotFoundException $e) {

            return response()->json([
                "msg"=>"partida no encontrada",
                "code"=>"404"
            ],404);
        }


    }

    public function update($id, Request $request)
    {


        $partida = \App\Partida::findOrFail($id);
        if ($request->input('user_id') != null){
            $partida->user_id = $request->input('user_id');
        }
        if ($request->input('time') != null ){
            $partida->time = $request->input('time');
        }
        if ($request->input('tablero') != null){
            $partida->tablero = $request->input('tablero');
        }

        if ($request->input('score') != null ){
            $partida->score = $request->input('score');
        }

        if ($request->input('acabada') != null){
            $partida->acabada = $request->input('acabada');
        }


        $partida->save();


        return response() -> json([
            "msg"=>"Succes, partida sobrescrita",
            "Code"=>"201",
            "id"=> $partida->toArray()
        ],201);





    }

    public function destroy($id)
    {
        try {
            $Partida = \App\Partida::findOrFail($id);
            $Partida->delete();

            return response() -> json([
                "msg"=>"Succes",
                "code"=>"200"
            ],200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                "msg"=>"Partida no encontrada",
                "code"=>"404"
            ],404);
        }


    }


    public function play(){
       return view('partida.play');

    }
    public function situar(){
        return view('partida.situar');
   }
}

