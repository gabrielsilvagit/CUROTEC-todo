<?php

namespace App\Http\Repositories;

use App\Models\Todo;
use App\Http\Repositories\TodoRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Date;

class EloquentTodoRepository extends TodoRepository
{
    public function getById(int $id): Todo
    {
        return Todo::find($id);
    }

    public function list(): Collection
    {
        return Todo::all();
    }

    public function create(string $task): Todo
    {
        return Todo::create(["task" => $task]);
    }

    public function changeTodoStatus(int $id, string | null $completedAt): Todo
    {
        $todo = Todo::find($id);
        $todo->update(['completed_at' => $completedAt]);
        $todo->refresh();
        return $todo;
    }

    public function update(int $id, string $task): Todo
    {
        $todo = Todo::find($id);
        $todo->update(['task' => $task]);
        $todo->refresh();
        return $todo;
    }

    public function delete(int $id): void
    {
        $todo = Todo::find($id);
        $todo->delete();
    }
}
