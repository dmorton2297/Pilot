<?php

namespace App\Http\Controllers;
use App\Task;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller
use App\Repositories\TaskRepository;


class TaskController extends Controller
{
	//TaskRepository 
	protected $tasks;
	
	  public function __construct(TaskRepository $tasks)
    {
        $this->middleware('auth');
		
		$this->tasks = $tasks;
    }
	
//Create a new task.
	public function store(Request $request)
	{
		$this->validate($request, [
			'name' => 'required|max:255',
		]);
		$request->user()->tasks()->create([
			'name' => $request->name,
		]);
		return redirect('/tasks');

	}
	
//Lists all tasks
	public function index(Request $request)
	{
		 return view('tasks.index', [
            'tasks' => $this->tasks->forUser($request->user()),
        ]);
		
	}
//Display a single task	
	public function get(Request $request)
	{
		return view('tasks.task', [
			'tasks' => $this->tasks->getTask($request->task()),
		]);
	}  
//Delete a task
	public function remove(Request $request, Task $task)
	{
		$this->authorize('remove', $task);
		
		$task->delete();
		
		return redirect('/tasks');
	}
}
