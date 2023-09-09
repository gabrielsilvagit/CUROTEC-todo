<?php

namespace App\Http\Controllers;

use App\Http\Actions\DeleteTodo;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class DeleteTodoController extends BaseController
{
    public function __invoke(DeleteTodo $deleteTodo, int $id): JsonResponse
    {
        $deleteTodo->run($id);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
