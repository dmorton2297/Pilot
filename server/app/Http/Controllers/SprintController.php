<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SprintController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function userIndex($userId) {
        $results = DB::table('sprint') 
        -> where('creatorid', $userId)
        -> where('teamid', 0)
        -> get();

        return $results;
    }  

    public function teamIndex($teamId) {
        $results = DB::table('sprint')
        -> where('teamid', $teamId)
        ->get();

        return $results;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request -> input('name');
        $description = $request -> input    ('description');
        $start = $request -> input('start');
        $end = $request -> input('end');
        $tasks = $request -> input('tasks');
        $creatorId = $request -> input('creatorid');
        $teamId = $request -> input('teamid');

        // create the sprint in the database
        $sprintId = DB::table('sprint')->insertGetId(
            [
                'name' => $name,
                'description' => $description,
                'start_date' => $start,
                'end_date' => $end,
                'creatorid' => $creatorId,
                'teamid' => $teamId
            ]
        );

        // loop through each task recieved and add
        // the to the sprint task table
        for ($x = 0; $x < count($tasks); $x++) {
            $tId = $tasks[$x];
            // insert task into sprint task here
            DB::table('sprinttask')->insert(
                [
                    'sprintid' => $sprintId,
                    'taskId' => $tId
                ]
            );
        }
        return $sprintId;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }
}
