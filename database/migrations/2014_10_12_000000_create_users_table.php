<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_name')->unique();
            $table->string('password', 60);
            $table->string('name')->default('');
            $table->string('apellido')->default('');
            $table->string('email')->unique()->default('');
            $table->string('telefono', 9)->default('');
            $table->boolean('admin')->default('0');
            $table->boolean('enable')->default('0');
            $table->rememberToken();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('users');
    }
}
