<?php

namespace App\Http\Repositories;

use App\Models\Todo;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Date;

abstract class TodoRepository
{
    abstract function getById(int $id): Todo;

    abstract function list(): Collection;

    abstract function create(string $task): Todo;

    abstract function changeTodoStatus(int $id, string | null $completedAt): Todo;

    abstract function update(int $id, string $task): Todo;

    abstract function delete(int $id): void;
}
