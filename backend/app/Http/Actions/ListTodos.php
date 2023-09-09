<?php

namespace App\Http\Actions;

use App\Http\Repositories\TodoRepository;
use Illuminate\Database\Eloquent\Collection;

class ListTodos
{
    public function __construct(private TodoRepository $todoRepository)
    {
    }

    public function run(): Collection
    {
        return $this->todoRepository->list();
    }
}
