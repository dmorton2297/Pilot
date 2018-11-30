<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;




class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $tasks = DB::table('task')->get();
        return $tasks;
    }

    /**
     * Display all tasks under a specified user.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function userIndex($userId) 
    {
        $tasks = DB::table('task')->where('creatorid', $userId) -> where('teamid', 0)->get();
        return $tasks;
    }

    public function teamIndex($teamId) {
        $tasks = DB::table('task')->where('teamid', $teamId)->get();
        return $tasks;
    }

    public function sprintTasksForUser($userId) {
        $tasks = DB::table('task') 
        -> join('sprinttask', 'task.id', '=','sprinttask.taskid')
        -> join('sprint', 'sprinttask.sprintid', '=', 'sprint.id')
        -> where ('task.creatorid', $userId)
        -> where ('task.teamid', '0')
        -> select('task.id', 'task.name', 'task.description', 'task.priority', 'task.estimate', 'task.status', 'sprint.id as sprintId', 'sprint.name as sprintName', 'sprint.description as sprintDescription')
        -> get();

        return $tasks;
    }

    public function sprintTasksForTeam($teamId) {
        $tasks = DB::table('task') 
        -> join('sprinttask', 'task.id', '=','sprinttask.taskid')
        -> join('sprint', 'sprinttask.sprintid', '=', 'sprint.id')
        -> where ('task.teamid', $teamId)
        -> select('task.id', 'task.name', 'task.description', 'task.priority', 'task.estimate', 'task.status', 'sprint.id as sprintId', 'sprint.name as sprintName', 'sprint.description as sprintDescription')
        -> get();

        return $tasks;
    }

    public function funcReqTasksForUser($id) {
        return $tasks = DB::table('task') 
        -> join('funcreqs', 'task.funcreq', '=', 'funcreqs.id')
        -> where('task.creatorid', $id)
        ->where('task.teamid', 0)
        -> select('task.id', 'task.name', 'task.description', 'task.priority', 'task.estimate', 'task.status', 'task.funcreq', 'funcreqs.name as funcReqName', 'funcreqs.description as funcReqDescription')

        ->get();
    }

    public function funcReqTasksForTeam($id) {
        return $tasks = DB::table('task') 
        -> join('funcreqs', 'task.funcreq', '=', 'funcreqs.id')
        -> where ('task.teamid', $id)
        -> select('task.id', 'task.name', 'task.description', 'task.priority', 'task.estimate', 'task.status', 'task.funcreq', 'funcreqs.name as funcReqName', 'funcreqs.description as funcReqDescription')
        ->get();
    }


    public function changeStatus(Request $request)
    {
        $taskId = $request -> input('taskId');
        $status = $request -> input('status');

        DB::table('task')->where('id', $taskId)->update(['status' => $status]);

        return 200;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request -> input('name');
        $description = $request -> input('description');
        $priority = $request -> input('priority');
        $status = $request -> input('status');
        $funcreq = json_encode($request -> input('funcreq'));
        $estimate = $request -> input('estimate');
        $timespent = $request -> input('timespent');
        $teamid = $request -> input('teamid');
        $creatorid = $request -> input('creatorid');
        $criterian = json_encode($request -> input('criterian'));
        $assigneduserid = $request -> input ('assigneduserid');

        DB::table('task')->insert(
            ['name' => $name,
             'description' => $description,
             'priority' => $priority,
             'status' => $status,
             'funcreq' => $funcreq,
             'estimate' => $estimate,
             'timespent' => $timespent,
             'teamid' => $teamid,
             'creatorid' => $creatorid,
             'criterian' => $criterian,
             'assigneduserid' => $assigneduserid,
             'created_at' => Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon::now()->toDateTimeString()
            ]
        );

        return $name;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = DB::table('task')->where('id', $id)->get();
		return $task;
    }

    /**
     * Display functional requirements of specified task.
     * 
     * @param int $id
     */
    public function showReqs($id) 
    {
        //$funcreqs = json_decode(DB::table('task')->where('id', $id)->value('funcreq'), true);
        //if ($funcreqs == NULL) return -1;

        return DB::table('funcreqs')
        ->join('task', 'funcreqs.id', '=','task.funcreq')
        ->where('task.id', $id)
        ->select('funcreqs.id as id', 'funcreqs.name as name', 'funcreqs.description as description')
        ->get();

 //       return $funcreqs;
    }


    /**
     * Display acceptance criteria
     * 
     * @param int $id
     */
    public function showCriterian($id)
    {
        $criterian = json_decode(DB::table('task')->where('id', $id)->value('criterian'));
        return $criterian;
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
        $priority = $request -> input('priority');
        $status = $request -> input('status');
        $funcreq = json_encode($request->input('funcreq'));
        $estimate = $request -> input('estimate');
        $timespent = $request -> input('timespent');
        $criterian = json_encode($request -> input('criterian'));
        $assigneduserid = $request -> input('assigneduserid');

        DB::table('task')
			->where('id', $id)
			->update(
			['name' => $name,
             'description' => $description,
             'priority' => $priority,
             'status' => $status,
             'funcreq' => $funcreq,
             'estimate' => $estimate,
             'timespent' => $timespent,
             'criterian' => $criterian,
             'assigneduserid' => $assigneduserid,
             'updated_at' => Carbon::now()->toDateTimeString()
			]);
			
		return $name;
    }

    public function updateTime(Request $request) {
        $taskId = $request -> input('taskId');
        $time = $request -> input('time');

        DB::table('task') 
        -> where('id', $taskId)
        -> update(['timespent' => $time]);

        return $taskId;
    }

    public function updateEstimate(Request $request) {
        $taskId = $request -> input('taskId');
        $estimate = $request -> input('estimate');

        DB::table('task') 
        -> where('id', $taskId)
        -> update(['estimate' => $estimate]);

        return $taskId;
    }

    public function getTimeSpentForTask($id) {
        $timespent = DB::table('task')
        -> where('id', $id)
        -> select ('task.timespent')
        -> get();

        return $timespent;
    }

    public function getEstimate($id) {
        $estimate = DB::table('task')
        -> where('id', $id)
        -> select ('task.estimate')
        -> get();

        return $estimate;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('task')->where('id','=',$id)->delete();
    }
	
}
