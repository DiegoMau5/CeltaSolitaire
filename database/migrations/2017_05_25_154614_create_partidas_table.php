<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartidasTable extends Migration
{

    public function up()
    {
        Schema::create('partidas', function(Blueprint $table)
        {

            $table->increments('id');
            $table->integer('user_id')->unsigned();

            $table->integer('time')->nullable();
            $table->integer('score')->nullable();
            $table->boolean('acabada')->default('0');
            $table->string('tablero'); // 0 = ball 1 = gap

            $table->timestamps();


        });

        Schema::table('partidas', function (Blueprint $table){
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade')
                ->onUpdate('cascade');
        });

    }


    public function down()
    {
        Schema::dropIfExists('partidas');
    }
}
