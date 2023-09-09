<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use App\Http\Repositories\TodoRepository;
use Illuminate\Support\Facades\RateLimiter;
use App\Http\Repositories\EloquentTodoRepository;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public $singletons = [
        TodoRepository::class => EloquentTodoRepository::class,
    ];
}
