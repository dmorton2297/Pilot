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

    public function getStatusDistributionForUserSprint($userId, $sprintId) {
        $notStarted = DB::table('task')
        ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
        ->where('status', 0)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->where('sprintid', $sprintId)
        ->count();

        $started = DB::table('task')
        ->join('sprinttask', 'task.id', 'sprinttask.taskid')
        ->where('status', 1)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->where('sprintid', $sprintId)
        ->count();

        $complete = DB::table('task')
        ->join('sprinttask', 'task.id', 'sprinttask.taskid')
        ->where('status', 2)
        ->where('creatorid', $userId)
        ->where('teamid', 0)
        ->where('sprintid', $sprintId)
        ->count();

        $p1 = '{"name":"notStarted", "value":'.$notStarted.'}';
        $p2 = '{"name":"started", "value":'.$started.'}';
        $p3 = '{"name":"complete", "value":'.$complete.'}';


        return '['.$p1.','.$p2.','.$p3.']';
    }

    public function getStatusDistributionForTeamSprint($teamId, $sprintId) {
        $notStarted = DB::table('task')
        ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
        ->where('status', 0)
        ->where('teamid', $teamId)
        ->where('sprintid', $sprintId)
        ->count();

        $started = DB::table('task')
        ->join('sprinttask', 'task.id', 'sprinttask.taskid')
        ->where('status', 1)
        ->where('teamid', $teamId)
        ->where('sprintid', $sprintId)
        ->count();

        $complete = DB::table('task')
        ->join('sprinttask', 'task.id', 'sprinttask.taskid')
        ->where('status', 2)
        ->where('teamid', $teamId)
        ->where('sprintid', $sprintId)
        ->count();

        $p1 = '{"name":"notStarted", "value":'.$notStarted.'}';
        $p2 = '{"name":"started", "value":'.$started.'}';
        $p3 = '{"name":"complete", "value":'.$complete.'}';


        return '['.$p1.','.$p2.','.$p3.']';
    }

    public function getStatusDistributionForTeamMember($userId, $teamId) {
        $notStarted = DB::table('task')
        ->where('status', 0)
        ->where('assigneduserid', $userId)
        ->where('teamid', $teamId)
        ->count();

        $started = DB::table('task')
        ->where('status', 1)
        ->where('assigneduserid', $userId)
        ->where('teamid', $teamId)
        ->count();

        $complete = DB::table('task')
        ->where('status', 2)
        ->where('assigneduserid', $userId)
        ->where('teamid', $teamId)
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
        $today = new DateTime();

        $counter = 0;
         while ($temp_date <= $end) {            
            $timespent = DB::table('timeticket')
            ->join('sprinttask', 'timeticket.taskid', 'sprinttask.taskid')
            ->where('created', '<=', $temp_date)
            ->where('sprinttask.sprintid', $sprintId)
            ->sum('timespent');
            
            
            $projectedWorkDone = $last - ($velocity * $counter);
            if ($projectedWorkDone < 0) {
                $projectedWorkDone = 0;
            }

            $actual = 0;
            if ($temp_date < $today) {
                $actual = $totalEstimate-$timespent;
            }

            $entry = '{"name":"Estimated", "value":'.$projectedWorkDone.'}';
            $entry2 = '{"name":"Actual", "value":'.($totalEstimate-$timespent).'}';
            $entry3 = '{"name":"'.$temp_date->format('Y-m-d').'", "series": ['.$entry.','.$entry2.']}';
            $last = $projectedWorkDone;
            $today = new DateTime();
            
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
    public function getStatusDistributionForTeam($teamId) {
        $request = '[';

        $users = DB::table('teamassignment')
        ->where('teamid',$teamId)
        ->pluck('userid');

        foreach($users as $user) {
            $userName = DB::table('users')
                        ->where('id', $user)
                        ->value('name');
            $request = $request.'{"name": "'.$userName.'", "series": ';
            $request = $request.$this->getStatusDistributionForTeamMember($user, $teamId);
            $request = $request.'},';
        }


        return substr($request,0,-1).']';
    }

    public function getStatusDistributionForTeamMembersInSprint($teamId, $sprintId) {
        $teamMembers = DB::table('teamassignment')
        ->where('teamid', $teamId)
        ->pluck('userid');
        
        

        $total = '[';
        foreach ($teamMembers as $memberId) {
            $message = '{';
            $name = DB::table('users')
            ->where('users.id', $memberId)
            ->pluck('users.name');
            $message = $message.'"name":"'.$name[0].'", "series": [';

            $series = '';
            $notStarted = DB::table('task')
            ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
            ->join('users', 'users.id', '=', 'task.assigneduserid')
            ->where('users.id', $memberId)
            ->where('task.status', 0)
            ->select(DB::raw('count(*) as notStarted, users.name as name, task.assigneduserid'))
            ->groupBy('task.assigneduserid')
            ->pluck('notStarted');
            
            if (count($notStarted) == 0) {
                $notStarted = 0;
            } else {
                $notStarted = $notStarted[0]; 
            }

            $series = $series.'{"name": "Not Started", "value": "'.$notStarted.'"},';

            $started = DB::table('task')
            ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
            ->join('users', 'users.id', '=', 'task.assigneduserid')
            ->where('users.id', $memberId)
            ->where('task.status', 1)
            ->select(DB::raw('count(*) as started, users.name as name, task.assigneduserid'))
            ->groupBy('task.assigneduserid')
            ->pluck('started');

            if (count($started) == 0) {
                $started = 0;
            } else {
                $started = $started[0]; 
            }

            $series = $series.'{"name": "Started", "value": "'.$started.'"},';

            $completed = DB::table('task')
            ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
            ->join('users', 'users.id', '=', 'task.assigneduserid')
            ->where('users.id', $memberId)
            ->where('task.status', 2)
            ->select(DB::raw('count(*) as completed, users.name as name, task.assigneduserid'))
            ->groupBy('task.assigneduserid')
            ->pluck('completed');

            if (count($completed) == 0) {
                $completed = 0;
            } else {
                $completed = $completed[0]; 
            }

            $series = $series.'{"name": "Completed", "value": "'.$completed.'"}]';

            $message = $message.$series.'},';

            $total = $total.$message;
        }
        
        $total=rtrim($total,", ");
        $total = $total.']';
        return $total;
        

    }

    public function getNumberOfCompletedSprintTasksPerTeamMember($teamId, $sprintId) {
        $teamMembers = DB::table('teamassignment')
        ->where('teamid', $teamId)
        ->pluck('userid');
        
        

        $total = '[';
        foreach ($teamMembers as $memberId) {
            $message = '{';
            $name = DB::table('users')
            ->where('users.id', $memberId)
            ->pluck('users.name');
            $message = $message.'"name":"'.$name[0].'", "value":"'; 

            $completed = DB::table('task')
            ->join('sprinttask', 'task.id', '=', 'sprinttask.taskid')
            ->join('users', 'users.id', '=', 'task.assigneduserid')
            ->where('users.id', $memberId)
            ->where('task.status', 2)
            ->select(DB::raw('count(*) as completed, users.name as name, task.assigneduserid'))
            ->groupBy('task.assigneduserid')
            ->pluck('completed');

            if (count($completed) == 0) {
                $completed = 0;
            } else {
                $completed = $completed[0]; 
            }

            $message = $message.$completed.'"},';

            $total = $total.$message;
        }
        
        $total=rtrim($total,", ");
        $total = $total.']';
        return $total;
    }


    public function getTimeSpentDistributionForSprint($teamId, $sprintid) {
        $teamMembers = DB::table('teamassignment')
        ->where('teamid', $teamId)
        ->pluck('userid');
        $total = '[';

        foreach ($teamMembers as $memberId) {
            $message = '{';
            $name = DB::table('users')
            ->where('users.id', $memberId)
            ->pluck('users.name');
            $message = $message.'"name":"'.$name[0].'", "value":"'; 
            $hours = DB::table('task')
            ->where('assigneduserid', $memberId)
            ->sum('timespent');

            $message = $message.$hours.'"},';
            $total = $total.$message;
        }

        $total=rtrim($total,", ");
        $total = $total.']';
        return $total;
    }
}
