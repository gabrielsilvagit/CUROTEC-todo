<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Actions\CreateTodo;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class CreateTodoController extends BaseController
{
    public function __invoke(CreateTodo $createTodo, Request $request): JsonResponse
    {
        return response()->json(new Collection($createTodo->run($request->get('task'))), Response::HTTP_CREATED);
    }
}
