<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamAssignmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teamassignment', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('userid');
            $table->unsignedInteger('teamid');

            $table->foreign('userid')->references('id')->on('users')
            ->onDelete('cascade');
            $table->foreign('teamid')->references('id')->on('team')
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
        Schema::dropIfExists('teamassignment');
    }
}
