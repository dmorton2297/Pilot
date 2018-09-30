<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller


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
	
  
}
