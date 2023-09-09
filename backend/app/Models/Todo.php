<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'todos';

    protected $fillable = [
        'task',
        'completed_at'
    ];

    protected $casts = [
        'completed_at' => 'datetime',
    ];
}
