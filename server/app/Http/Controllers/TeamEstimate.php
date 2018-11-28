<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TeamEstimate extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $estimates = DB::table('team_time_estimate')->get();
        return $estimates;
    }
    public function indexID($teamid) 
    {
        $est = DB::table('team_time_estimate')->where('teamid', '=', $teamid)->get();
        if ($est->isEmpty()) return -1;
        return $est;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $teamid = $request -> input('teamid');
        $estimate = $request -> input('estimate');
        DB::table('team_time_estimate')->insert(
            ['teamid' => $teamid,
             'estimate' => $estimate
            ]
        );
        return $teamid;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fav = DB::table('team_time_estimate')->where('id', $id)->get();
		return $fav;
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $teamid)
    {
		$teamid = $request -> input('teamid');
        $estimate = $request -> input('estimate');
       
        DB::table('team_time_estimate')
			->where('teamid', $teamid)
			->update(
			['teamid' => $teamid,
             'estimate' => $estimate
			]);
			
		return $teamid;
    }
}
