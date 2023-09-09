<?php

namespace App\Http\Actions;

use App\Http\Repositories\TodoRepository;
use Illuminate\Database\Eloquent\Collection;

class DeleteTodo
{
    public function __construct(private TodoRepository $todoRepository)
    {
    }

    public function run(int $id): void
    {
        $this->todoRepository->delete($id);
    }
}
