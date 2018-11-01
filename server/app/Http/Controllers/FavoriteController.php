<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $fav = DB::table('favorite')->get();
        return $fav;
    }

    public function indexUser($userid, $favoriteid) 
    {
        $fav = DB::table('favorite')->where('userid', '=', $userid)->get();
        return $fav;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userid = $request -> input('userid');
        $favoriteid = $request -> input('favoriteid');

        DB::table('favorite')->insert(
            ['userid' => $userid,
             'favoriteid' => $favoriteid
            ]
        );

        return $userid;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fav = DB::table('favorite')->where('id', $id)->get();
		return $fav;
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
       
        DB::table('favorite')
			->where('id', $id)
			->update(
			['userid' => $userid,
             'favoriteid' => $favoriteid
			]);
			
		return $userid;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($userid, $favoriteid)
    {
        DB::table('favorite')
            ->where('userid','=',$userid)
            ->where('favoriteid', '=', $favoriteid)
            ->delete();
    }
}
