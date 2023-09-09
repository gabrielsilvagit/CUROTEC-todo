<?php

namespace App\Http\Controllers;

use App\Http\Actions\ChangeTodoStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Routing\Controller as BaseController;

class ChangeTodoStatusController extends BaseController
{
    public function __invoke(ChangeTodoStatus $changeTodoStatus, int $id): JsonResponse
    {
        return response()->json(new Collection($changeTodoStatus->run($id)));
    }
}
