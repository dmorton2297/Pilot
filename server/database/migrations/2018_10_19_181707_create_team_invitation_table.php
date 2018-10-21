<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamInvitationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_invitation', function (Blueprint $table) {
            $table->increments('id');
			$table->unsignedInteger('senderid');
			$table->unsignedInteger('recipientid');
            $table->unsignedInteger('teamid');
			
			$table->foreign('senderid')->references('id')->on('users')
            ->onDelete('cascade');
			$table->foreign('recipientid')->references('id')->on('users')
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
        Schema::dropIfExists('team_invitation');
    }
}
