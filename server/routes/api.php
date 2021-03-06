<?php

use Illuminate\Http\Request;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assig  d the "api" middleware group. Enjoy building your API!
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
Route::get('getuserid/{email}', 'UserController@getUserId');
Route::post('getuseridfromname', 'UserController@getUserIdFromName');
Route::get('getcriterian/{id}', 'TaskController@showCriterian');
Route::post('createteam', 'TeamController@store');
Route::get('getteam/{id}', 'TeamController@show');
Route::get('findteam/{name}', 'TeamController@nameIndex');
Route::get('getteamname/{teamid}', 'TeamController@getName');
Route::get('getusersteams/{userId}', 'TeamController@userIndex');
Route::post('modifyteam/{id}', 'TeamController@update');
Route::post('savecriteria', 'CriteriaController@store');
Route::get('addteammember/{userid}/{teamid}', 'TeamAssignmentController@add');
Route::get('teammembers/{teamid}', 'TeamAssignmentController@index');
Route::get('teamremove/{userid}/{teamid}', 'TeamAssignmentController@kick');
Route::get('getmessages/{id}', 'MessageController@getMessages');
Route::post('newmessage', 'MessageController@store');
Route::get('getallusers', 'UserController@index');
Route::get('teams/{userid}', 'TeamInvitationController@index');
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
Route::get('getsprintsforuser/{userId}', 'SprintController@userIndex');
Route::get('getsprintsforteam/{teamId}', 'SprintController@teamIndex');
Route::get('getteamsprinttasks/{sprintId}', 'TaskController@sprintTasksForTeam');
Route::get('getsprint/{id}', 'SprintController@show');
Route::post('updatetime', 'TaskController@updateTime');
Route::post('updateestimate', 'TaskController@updateEstimate');
Route::get('gettimespent/{id}', 'TaskController@getTimeSpentForTask');
Route::get('getestimate/{id}', 'TaskController@getEstimate');
Route::get('deleteteam/{id}', 'TeamController@destroy');
Route::get('getusersprints/{userId}', 'SprintController@userIndex');

Route::post('addFavorite', 'FavoriteController@store');
Route::get('removeFavorite/{userid}/{favoriteid}', 'FavoriteController@destroy');
Route::get('getallfav', 'FavoriteController@index');
Route::get('getuserfavorites/{userid}', 'FavoriteController@indexUser');
Route::post('savetimeticket', 'TimeTicketController@store');
Route::get('savemessage/{messageId}/{save}', 'MessageController@saveMessage');


Route::get('getreqtasks/{id}', 'TaskController@funcReqTasksForUser');
Route::get('getteamreqtasks/{id}', 'TaskController@funcReqTasksForTeam');
Route::get('getfuncreqsforuser/{userid}', 'FunctionalRequirementController@userIndex');
Route::get('getfuncreqsforteam/{id}', 'FunctionalRequirementController@teamIndex');

// Statistics routes
Route::get('getStatusDistributionForUser/{userId}', 'StatisticsController@getStatusDistributionForUser');
Route::post('addFavorite', 'FavoriteController@store');
Route::get('removeFavorite/{userid}/{favoriteid}', 'FavoriteController@destroy');
Route::get('getallfav', 'FavoriteController@index');
Route::get('checkfavorite/{userid}', 'FavoriteController@indexUser');
Route::get('getSprintBurndownData/{sprintId}', 'StatisticsController@getSprintBurndownInfo');
Route::get('gettimespent/{teamid}', 'TaskController@getTimeSpentForTeam');
Route::get('getStatusDistributionForUser/{userId}', 'StatisticsController@getStatusDistributionForUser');
Route::get('getStatusDistributionForUserSprint/{userId}/{sprintId}', 'StatisticsController@getStatusDistributionForUserSprint');
Route::get('getStatusDistributionForTeam/{teamId}', 'StatisticsController@getStatusDistributionForTeam');
Route::get('getStatusDistributionForTeamSprint/{teamId}/{sprintId}', 'StatisticsController@getStatusDistributionForTeamSprint');
Route::get('getUserTimeSpent/{userId}', 'StatisticsController@getTimeSpentForUser');
Route::get('getStatusDistributionForTeamMembersInSprint/{teamId}/{sprintId}', 'StatisticsController@getStatusDistributionForTeamMembersInSprint');
Route::get('getNumberOfCompletedSprintTasksPerTeamMember/{teamId}/{sprintId}', 'StatisticsController@getNumberOfCompletedSprintTasksPerTeamMember');
Route::get('getTimeSpentDistributionForSprint/{teamId}/{sprintId}', 'StatisticsController@getTimeSpentDistributionForSprint');
Route::get('gettasksforsprint/{sprintId}', 'SprintController@getSprintTasks');
Route::post('updateSprint', 'SprintController@update');
Route::get('deleteSprint/{id}', 'SprintController@destroy');


