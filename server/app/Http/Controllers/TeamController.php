<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TeamController extends Controller
{
	//Displays all members of a team
    public function index($teamid) {
		$tasks = DB::table('teamassignment')->where('teamid', $teamid)->get();
        return $tasks;
	}
	
	//Adds user to team
	public function add($userid,$teamid) {
		DB::table('teamassignment')->insert(
		['userid' => $userid,
		 'teamid' => $teamid
		]
		)
	}
	
	//Removes user from team
	public function kick($userid,$teamid) {
		DB::table('teamassignment')->where('userid', $userid)->where('teamid',$teamid)->delete();
	}
}
