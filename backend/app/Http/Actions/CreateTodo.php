<?php

namespace App\Http\Actions;

use App\Models\Todo;
use App\Http\Repositories\TodoRepository;

class CreateTodo
{
    public function __construct(private TodoRepository $todoRepository)
    {
    }

    public function run(string $task): Todo
    {
        return $this->todoRepository->create($task);
    }
}
