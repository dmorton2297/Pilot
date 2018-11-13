<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class TeamAssignmentController extends Controller
{
    //Displays all members of a team
    public function index($teamid) {
		$users = DB::table('teamassignment')->where('teamid', $teamid)->get();
        return $users;
    }
    
    public function add($userid,$teamid) {
		DB::table('teamassignment')->insert(
		['userid' => $userid,
         'teamid' => $teamid,
        'created_at' => Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon::now()->toDateTimeString()
		]
        );

        DB::table('teamrole')->insert(
        [
            'role' => 'Member',
            'teamid' => $teamid,
            'userid' => $userid,
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]
        );
    }
    
    //Removes user from team
	public function kick($userid,$teamid) {
		DB::table('teamassignment')->where('userid', $userid)->where('teamid',$teamid)->delete();
    }
    
    public function getTeamMembers($teamId) {
        $result = DB::table('teamassignment') 
		-> join('users', 'teamassignment.userid', '=', 'users.id')
        -> join('team', 'teamassignment.teamid', '=', 'team.id')
        -> join('teamrole', 'teamassignment.userid', '=', 'teamrole.userid')
		-> select('users.id', 'users.email', 'users.name as memberName', 'teamassignment.teamid as teamId', 'team.name as teamName', 'teamrole.role')
		-> where('teamassignment.teamid', $teamId)
		-> get();

		return $result;
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
        //
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
