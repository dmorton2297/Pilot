<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class StatisticsController extends Controller
{
    public function getStatusDistributionForUser($userId) {
        $notStarted = DB::table('task')
        ->where('status', 0)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->count();

        $started = DB::table('task')
        ->where('status', 1)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->count();

        $complete = DB::table('task')
        ->where('status', 2)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->count();

        $p1 = '{"name":"notStarted", "value":'.$notStarted.'}';
        $p2 = '{"name":"started", "value":'.$started.'}';
        $p3 = '{"name":"complete", "value":'.$complete.'}';


        return '['.$p1.','.$p2.','.$p3.']';
    }
}
