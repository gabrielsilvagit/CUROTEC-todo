<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListTodosController;
use App\Http\Controllers\CreateTodoController;
use App\Http\Controllers\DeleteTodoController;
use App\Http\Controllers\ChangeTodoStatusController;
use App\Http\Controllers\UpdateTodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/todos', ListTodosController::class);
Route::post('/todos', CreateTodoController::class);
Route::patch('/todos/{id}', ChangeTodoStatusController::class);
Route::put('/todos/{id}', UpdateTodoController::class);
Route::delete('/todos/{id}', DeleteTodoController::class);
