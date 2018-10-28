<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamInvitationController extends Controller
{
	
	//Displays all invites for a specified user
	public function index($id) 
	{
		$invites = DB::table('teamassignment')->where('id',$id)->get();
		
		return $invites;
	}
	
	//Creates user invitation
    public function invite(Request $request){
		$userid = $request->input('userid');
		$teamid = $request->input('teamid');
		DB::table('teamassignment')->insert([
			'userid' => $userid,
			'teamid' => $teamid
		]
	);
		
	}
	
	//Removes invite from table
	public function remove($id){
		DB::table('teamassignment')->where('id', $id)->delete();
		
	}
	
}
