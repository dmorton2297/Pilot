<?php

use Illuminate\Http\Request;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('savetask', 'TaskController@store');
Route::get('getusertasks/{userId}', 'TaskController@userIndex');
Route::get('gettask/{id}', 'TaskController@show');
Route::post('changestatus', 'TaskController@changeStatus');
Route::post('saveuser', 'UserController@store');
Route::post('modifytask/{id}', 'TaskController@update');
Route::get('deletetask/{id}', 'TaskController@destroy');
Route::get('getSelectedReqs/{id}', 'TaskController@showReqs');
Route::post('savereq', 'FunctionalRequirementController@store');
Route::get('getfuncreqs/{id}', 'FunctionalRequirementController@teamIndex');
Route::get('getuserid/{username}', 'UserController@getUserId');
Route::get('getcriterian/{id}', 'TaskController@showCriterian');



