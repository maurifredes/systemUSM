<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Licencias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crear_tabla_licencias', function (Blueprint $table) {
            $table->id();
            $table->string("nombre", 150);
            $table->integer("rut");
            $table->integer("otorgamiento");
            $table->integer("reposo");
            $table->string("sexo", 1);
            $table->integer("dias");
            $table->string("tipolicencia", 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crear_tabla_licencias');
    }
}
