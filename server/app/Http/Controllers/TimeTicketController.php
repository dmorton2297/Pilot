<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \DateTime;
use Illuminate\Support\Facades\DB;

class TimeTicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        date_default_timezone_set("America/Chicago");
        $taskid= $request -> input('taskid');
        $timespent = $request -> input('timespent');
        $today = new DateTime();
        DB::table('timeticket') -> insert(
            [
                'taskid' => $taskid,
                'timespent' => $timespent,
                'created' => $today
            ]
        );

        return $taskid;

        
    }

    
}
