<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleAssignmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roleassignment', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('roleid');
            $table->unsignedInteger('userid');
            $table->unsignedInteger('teamid');

            $table->foreign('roleid')->references('id')->on('role')
            ->onDelete('cascade');
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
        Schema::dropIfExists('roleassignment');
    }
}
