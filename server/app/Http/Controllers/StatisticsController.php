<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use \DateTime;
use \DateInterval;

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

    public function getSprintBurndownInfo($sprintId) {

        $totalEstimate = DB::table('sprinttask')
        ->join('task', 'sprinttask.taskid', '=', 'task.id')
        ->where('sprintid', $sprintId)
        ->sum('estimate');

        $results = DB::table('sprint')
        ->where('id', $sprintId)
        ->get();
        $item = json_decode($results, true)[0];
        $start_date = $item['start_date'];
        $split = explode('T', $start_date);
        $start_date = $split[0];

        $end_date = $item['end_date'];
        $split = explode('T', $end_date);
        $end_date = $split[0];

        $start = new DateTime($start_date);
        $end = new DateTime($end_date);
        $interval = $start->diff($end);
        $totalNumberOfDays = $interval->format('%a');
        $totalNumberOfDays = intval($totalNumberOfDays);
        $velocity = round($totalEstimate / $totalNumberOfDays);

        $data = '[';
        $looping = true;
        $temp_date = $start;
        $last = $totalEstimate;
        $counter = 0;
         while ($temp_date <= $end) {            
            $timespent = DB::table('timeticket')
            ->join('sprinttask', 'timeticket.taskid', 'sprinttask.taskid')
            ->where('created', '<=', $temp_date)
            ->where('sprinttask.sprintid', $sprintId)
            ->sum('timespent');
            
            $projectedWorkDone = $last - ($velocity * $counter);
            $entry = '{"name":"Estimated", "value":'.$projectedWorkDone.'}';
            $entry2 = '{"name":"Actual", "value":'.($totalEstimate-$timespent).'}';
            $entry3 = '{"name":"'.$temp_date->format('Y-m-d').'", "series": ['.$entry.','.$entry2.']}';
            $last = $projectedWorkDone;
            if ($counter == 0) {
                $counter = $counter + 1;
            }

            $data = $data.$entry3;
            $temp_date->add(new DateInterval('P1D'));
            if ($temp_date <= $end) {
                $data = $data.',';
            }

        }

        $data = $data.']';
    
        return $data;
    }
}
