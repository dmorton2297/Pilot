<?php

use App\Task;
use Illuminate\Http\Request;

/**
 * Display All Tasks
 */
Route::get('/task', 'TaskController@index');

/**
 * Get a specified task
 */
Route::get('/task/{id}', 'TaskController@show');

/**
 * Add A New Task
 */
Route::post('/task', 'TaskController@store');

/**
 * Edit An Existing Task
 */
Route::put('/task/{id}', 'TaskController@update');

/**
 * Delete An Existing Task
 */
Route::delete('/task/{id}', 'TaskController@destroy');