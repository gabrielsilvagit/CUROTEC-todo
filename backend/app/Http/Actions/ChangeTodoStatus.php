<?php

namespace App\Http\Actions;

use App\Models\Todo;
use App\Http\Repositories\TodoRepository;
use Exception;
use Illuminate\Support\Carbon;

class ChangeTodoStatus
{
    public function __construct(private TodoRepository $todoRepository)
    {
    }

    public function run(int $id): Todo
    {
        $todo = $this->todoRepository->getById($id);

        if (!$todo) {
            throw new Exception('Todo not found');
        }

        if(!$todo->completed_at) {
            return $this->todoRepository->changeTodoStatus($id, Carbon::now()->toString());
        }

        return $this->todoRepository->changeTodoStatus($id, null);
    }
}
