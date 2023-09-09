<?php

namespace App\Http\Controllers;

use App\Http\Actions\ListTodos;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Routing\Controller as BaseController;

class ListTodosController extends BaseController
{
    public function __invoke(ListTodos $listTodos): JsonResponse
    {
        return response()->json(new Collection($listTodos->run()));
    }
}
