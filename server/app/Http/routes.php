<?php

use App\Task;
use Illuminate\Http\Request;

/**
 * Display All Tasks
 */
Route::get('/task', 'TaskController@index');

/**
 * Add A New Task
 */
Route::post('/task', 'TaskController@store');

/**
 * Delete An Existing Task
 */
Route::delete('/task/{id}', function ($id) {
    //
});