<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

/*
$table->increments('id');
            $table->string('description');
            $table->string('body');
            $table->unsignedInteger('taskid');
            $table->foreign('taskid')->references('id')->on('task')
            ->onDelete('cascade');
            $table->timestamps();



*/


class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $acriteria = DB::table('acriteria')->get();
        return $acriteria;
    }

    /**
     * Display all tasks under a specified user.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function userIndex($userId) {
 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $description = $request -> input('description');
        $body = $request -> input('body');
        $taskid = $request -> input('taskid');

        DB::table('acriteria')->insert(
            ['description' => $description,
             'body' => $body,
             'taskid' => $taskid,
             'created_at' => Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon::now()->toDateTimeString()
            ]
        );

        return $description;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $acriteria = DB::table('acriteria')->where('id', $id)->get();
		
		return $acriteria;
    }

  
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		//
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('acriteria')->where('id','=',$id)->delete();
    }
	
}