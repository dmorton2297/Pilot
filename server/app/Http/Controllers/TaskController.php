<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller


class TaskController extends Controller
{
	/**
 * Create a new task.
 *
 * @param  Request  $request
 * @return Response
 */
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
	
       public function __construct()
    {
        $this->middleware('auth');
    }
}
