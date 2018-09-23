<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message', function (Blueprint $table) {
            $table->increments('id');
            $table->string('message');
            $table->unsignedInteger('sender');
            $table->unsignedInteger('receiver');
            $table->unsignedInteger('team');

            $table->foreign('sender')->references('id')->on('users')
            ->onDelete('cascade');
            $table->foreign('receiver')->references('id')->on('users')
            ->onDelete('cascade');
            $table->foreign('team')->references('id')->on('team')
            ->onDelete('cascade');

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
        Schema::dropIfExists('message');
    }
}