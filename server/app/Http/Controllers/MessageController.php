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
        $receiver = $request -> input('receiver');
        //$id = $request -> input('id');
        $message = $request -> input('message');
        //how to get the team user is on? 
        //pull team assignments, look up team id from user id
        $team = 1;

        $createdAt = Carbon::now()->toDateTimeString();
        $updatedAt = Carbon::now()->toDateTimeString();
        $verifiedAt = Carbon::now()->toDateTimeString();
        $remember = true;

        DB::table('message')->insert(
            [
                'message'=> $message,
                'sender'=> $sender,
                'receiver'=> $receiver,
                'team'=> $team
            ]
            );
    }

    public function getMessages(Request $request) {
        $userID = $request -> input('id');

        DB::table('message')->get
    }
}