<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FunctionalRequirementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reqs = DB::table('funcreqs')->get();
        return $reqs;
    }

      /**
     * Display all tasks under a specified team.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function teamIndex($teamId) {
        $reqs = DB::table('funcreqs')->where('teamid', $teamId)->get();
        if ($reqs->isEmpty()) return -1;
        return $reqs;
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
        $teamid = $request -> input('teamid');

        DB::table('funcreqs')->insert(
            ['name' => $name,
             'description' => $description,
             'teamid' => $teamid,
             'created_at' => Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon::now()->toDateTimeString()
            ]
        );

        return $name;
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
        $teamid = $request -> input('teamid');

        DB::table('funcreqs')
			->where('id', $id)
			->update(
			['name' => $name,
             'description' => $description,
             'teamid' => $teamid,
             'updated_at' => Carbon::now()->toDateTimeString()
			]);
			
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
        $req = DB::table('funcreqs')->where('id', $id)->get();
		if ($req->isEmpty()) return -1;
		return $req;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('funcreqs')->where('id','=',$id)->delete();
    }
}
