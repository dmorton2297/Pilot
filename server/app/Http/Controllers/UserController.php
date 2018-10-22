<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //selectfrom db a list of users
        $users = DB::table('users')->get();
        return $users;
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
        $name = $request -> input('name');
        $email = $request -> input('email');
        //if email already in database, don't add userProfile to db
       // $test = DB::table('users')->where('email', $email)->get();
        //if ($test) {
         //   return;
       // }
       $test = $this -> getUserId($email);
       if ($test != -1) {
           return;
       }

        $createdAt = Carbon::now()->toDateTimeString();
        $updatedAt = Carbon::now()->toDateTimeString();
        $verifiedAt = Carbon::now()->toDateTimeString();
        $remember = true;

        DB::table('users')->insert(
            [
                'name'=> $name,
                'email'=> $email,
                'email_verified_at' => $verifiedAt,
                'remember_token' => true,
                'created_at' => $createdAt,
                'updated_at' => $updatedAt
            ]
            );



        
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

    public function getUserId($email) {
        $results = DB::select('select id from users where email = :email', ['email' => $email]);
        if (!$results) {
            return -1;
        }
        return $results;
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
