<?php

namespace App\Http\Actions;

use App\Models\Todo;
use App\Http\Repositories\TodoRepository;
use Exception;
use Illuminate\Support\Carbon;

class UpdateTodo
{
    public function __construct(private TodoRepository $todoRepository)
    {
    }

    public function run(int $id, string $task): Todo
    {
        $todo = $this->todoRepository->getById($id);

        if (!$todo) {
            throw new Exception('Todo not found');
        }

        return $this->todoRepository->update($id, $task);
    }
}
