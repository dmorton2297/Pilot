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
Route::get('getteamtasks/{teamId}', 'TaskController@teamIndex');
Route::get('gettask/{id}', 'TaskController@show');
Route::post('changestatus', 'TaskController@changeStatus');
Route::post('saveuser', 'UserController@store');
Route::post('modifytask/{id}', 'TaskController@update');
Route::get('deletetask/{id}', 'TaskController@destroy');
Route::get('getSelectedReqs/{id}', 'TaskController@showReqs');
Route::post('savereq', 'FunctionalRequirementController@store');
Route::get('getfuncreqs/{id}', 'FunctionalRequirementController@teamIndex');
Route::get('delfuncreq/{id}', 'FunctionalRequirementController@destroy');
Route::post('modifyfuncreq/{id}', 'FunctionalRequirementController@update');
Route::get('funcreq/{id}', 'FunctionalRequirementController@show');
Route::get('getuserid/{username}', 'UserController@getUserId');
Route::get('getcriterian/{id}', 'TaskController@showCriterian');
Route::post('createteam', 'TeamController@store');
Route::get('getteam/{id}', 'TeamController@show');
Route::get('findteam/{name}', 'TeamController@nameIndex');
Route::get('getusersteams/{userId}', 'TeamController@userIndex');
Route::post('modifyteam/{id}', 'TeamController@update');
Route::post('savecriteria', 'CriteriaController@store');
Route::get('addteammember/{userid}/{teamid}', 'TeamAssignmentController@add');
Route::get('teammembers/{teamid}', 'TeamAssignmentController@index');
Route::get('teamremove/{userid}/{teamid}', 'TeamAssignmentController@kick');
Route::post('newmessage', 'MessageController@store');
Route::get('getmessages/{id}', 'MessageController@getMessages');
Route::get('getallusers', 'UserController@index');
Route::get('teaminvites/{userid}', 'TeamInvitationController@index');
Route::get('deleteinvite/{id}', 'TeamInvitationController@remove');
Route::post('inviteuser', 'TeamInvitationController@invite');
Route::get('allsentinvites/{id}', 'TeamInvitationController@detailedUserIndex');
Route::get('allrecievedinvites/{id}', 'TeamInvitationController@getUserInvitations');
Route::get('getteammembers/{teamId}', 'TeamAssignmentController@getTeamMembers');
Route::get('getjoinedteams/{userId}', 'TeamController@joinedTeams');
Route::get('getuser/{id}', 'UserController@userWithId');
Route::get('deletemessage/{id}', 'MessageController@delete');
Route::post('setrole', 'TeamController@setRole');
Route::post('getrole', 'TeamController@getRole');
Route::post('createsprint', 'SprintController@store');
Route::get('getsprinttasks/{userId}', 'TaskController@sprintTasksForUser');
Route::get('getteamsprinttasks/{sprintId}', 'TaskController@sprintTasksForTeam');
Route::post('updatetime', 'TaskController@updateTime');
Route::get('gettimespent/{id}', 'TaskController@getTimeSpentForTask');
Route::get('deleteteam/{id}', 'TeamController@destroy');
Route::get('getusersprints/{userId}', 'SprintController@userIndex');

Route::post('addFavorite', 'FavoriteController@store');
Route::get('removeFavorite/{userid}/{favoriteid}', 'FavoriteController@destroy');
Route::get('getallfav', 'FavoriteController@index');
Route::get('getuserfavorites/{userid}', 'FavoriteController@indexUser');


// Statistics routes
Route::get('getStatusDistributionForUser/{userId}', 'StatisticsController@getStatusDistributionForUser');
Route::post('addFavorite', 'FavoriteController@store');
Route::get('removeFavorite/{userid}/{favoriteid}', 'FavoriteController@destroy');
Route::get('getallfav', 'FavoriteController@index');
Route::get('checkfavorite/{userid}', 'FavoriteController@indexUser');


