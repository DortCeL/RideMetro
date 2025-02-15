<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function getUsers()
    {
        $users = $this->userService->getAllUsers();
        return response()->json($users);
    }

    public function createUser(Request $request)
    {
        // Validate request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:3'
        ]);

        // Hash password
        $hashedPassword = Hash::make($request->password);

        // Create user using UserService
        $user = $this->userService->createUser($request->name, $request->email, $hashedPassword);

        return response()->json([
            'message' => 'User registered successfully!',
            'user' => $user
        ], 201);
    }
}
