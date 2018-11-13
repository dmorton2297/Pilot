<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MessageController extends Controller 
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $sender = $request -> input('sender');
        $receiver = $request -> input('recipient');
        //$id = $request -> input('id');
        $message = $request -> input('message');
        //how to get the team user is on? 
        //pull team assignments, look up team id from user id
        $team = 0;

        $createdAt = Carbon::now()->toDateTimeString();
        $updatedAt = Carbon::now()->toDateTimeString();
        $verifiedAt = Carbon::now()->toDateTimeString();
        $remember = true;

        DB::table('message')->insert(
            [
                'message'=> $message,
                'sender'=> $sender,
                'recipient'=> $receiver,
                'team'=> $team,
                'created_at' => $createdAt,
                'updated_at' => $updatedAt
            ]
            );
    }

    public function getMessages($id) {
        $messages = DB::table('message')
        ->join('users', 'message.sender', '=', 'users.id')
        ->select('message.id','users.name as sender','users.email as senderEmail','message.sender as senderId', 'message.message','message.recipient','message.team', 'message.created_at', 'message.updated_at')
        ->where('recipient', $id)->get();
        return $messages;
    }

    public function delete($id) 
    {
        DB::table('message')->where('id','=',$id)->delete();
    }

    /*public function getUserInvitations($id) {
		$result = DB::table('message') 
		-> join('users', 'message.senderid', '=', 'users.id')
		-> select('message.id', 'users.email', 'users.name as From')
		-> where('message.receiver', $id)
		-> get();

		return $result;
	}*/
}