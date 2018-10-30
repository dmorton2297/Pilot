<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $teams = DB::table('team')->get();
        return $teams;
    }

    public function nameIndex($name)
    {
        $team = DB::table('team')->where('name', $name)->get();
        if ($team->isEmpty()) return 1;
        return 0;
    }

    public function userIndex($userId) {
        $tasks = DB::table('team')->where('creatorId', $userId)->get();
        return $tasks;
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
        $description = $request -> input('description');
        $invitemsg = $request -> input('invitemsg');
        $color = $request -> input('color');
        $creatorId = $request -> input('creatorId');

        $teamId = DB::table('team')->insertGetId(
            ['name' => $name,
             'description' => $description,
             'color' => $color,
             'invitemsg' => $invitemsg,
             'creatorId' => $creatorId,
             'created_at' => Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon::now()->toDateTimeString()
            ]
        );

        DB::table('teamassignment')->insert(
            ['userid' => $creatorId,
             'teamid' => $teamId,
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
            ]
            );

        return $name;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $team = DB::table('team')->where('id', $id)->get();
		return $team;
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
		$name = $request -> input('name');
        $description = $request -> input('description');
        $invitemsg = $request -> input('invitemsg');
        $color = $request -> input('color');

        DB::table('team')
			->where('id', $id)
			->update(
			['name' => $name,
             'description' => $description,
             'invitemsg' => $invitemsg,
             'color' => $color,
             'updated_at' => Carbon::now()->toDateTimeString()
			]);
			
		return $name;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('team')->where('id','=',$id)->delete();
    }
	
}
