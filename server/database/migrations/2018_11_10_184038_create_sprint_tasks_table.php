<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSprintTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sprinttask', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('sprintid');
            $table->unsignedInteger('taskid');
            $table->foreign('sprintid')->references('id')->on('sprint')->onDelete('cascade');
            $table->foreign('taskid')->references('id')->on('task')->onDelete('cascade');
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
        Schema::dropIfExists('sprinttask');
    }
}
