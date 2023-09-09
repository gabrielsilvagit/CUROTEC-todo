<?php

namespace App\Http\Controllers;

use App\Http\Actions\UpdateTodo;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UpdateTodoController extends BaseController
{
    public function __invoke(UpdateTodo $updateTodo, int $id, Request $request): JsonResponse
    {
        return response()->json(new Collection($updateTodo->run($id, $request->get('task'))));
    }
}
