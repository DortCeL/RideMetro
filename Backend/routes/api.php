<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/tasks', [TaskController::class, 'getTasks']);



Route::get('/users', [UserController::class, 'getUsers']);
Route::post('/users', [UserController::class, 'createUser']);
