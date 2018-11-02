<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TeamInvitationController extends Controller
{
	
	//Displays all invites for a specified user
	public function index($id) {
		$invites = DB::table('team_invitation')->where('id',$id)->get();
		
		return $invites;
	}

	public function getUserInvitations($id) {
		$result = DB::table('team_invitation') 
		-> join('users', 'team_invitation.senderid', '=', 'users.id')
		-> join('team', 'team_invitation.teamid', '=', 'team.id')
		-> select('team_invitation.id', 'users.email', 'users.name as senderName', 'team_invitation.teamid as teamId', 'team.name as teamName')
		-> where('team_invitation.recipientid', $id)
		-> get();

		return $result;
	}
	
	//Creates user invitation
    public function invite(Request $request){

		$recipientid = $request->input('recipientid');
		$senderid = $request->input('senderid');
		$teamid = $request->input('teamid');

		$invites = DB::table('team_invitation')->where('senderid',$senderid)->where('recipientid', $recipientid)->get();
		if ($invites->count() > 0) {
			return;
		}


		DB::table('team_invitation')->insert([
			'senderid' => $senderid,
			'recipientid' => $recipientid,
			'teamid' => $teamid
		]
		);
		
	}

	public function detailedUserIndex($userId) {
		$result = DB::table('team_invitation') 
		-> join('users', 'team_invitation.recipientid', '=', 'users.id')
		-> select('users.email', 'users.name', 'team_invitation.teamid')
		-> get();

		return $result;
	}
	
	//Removes invite from table
	public function remove($id){
		DB::table('team_invitation')->where('id', $id)->delete();
		
	}
	
}
