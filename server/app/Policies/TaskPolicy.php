<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    //Check if user is the creator
	
	public function remove(User $user, Task $task)
	{
		return $user->id == $task->creatorid;
	}
}
