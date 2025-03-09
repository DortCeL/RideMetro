<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function getUsers()
    {
        return response()->json($this->userService->getAllUsers());
    }

    public function createUser(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:3',
            'age' => 'required|integer',
            'balance' => 'numeric'
        ]);

        $hashedPassword = Hash::make($validatedData['password']);

        $user = $this->userService->createUser(
            $validatedData['name'],
            $validatedData['email'],
            $hashedPassword,
            $validatedData['age'],
            $validatedData['balance'] ?? 0
        );

        return response()->json(['message' => 'User registered successfully!', 'user' => $user], 201);
    }

    public function getUsersByAgeRange(Request $request)
    {
        return response()->json($this->userService->getUsersByAgeRange(
            $request->query('min_age'),
            $request->query('max_age')
        ));
    }

    public function getUsersWithMinBalance(Request $request)
    {
        return response()->json($this->userService->getUsersWithMinBalance($request->query('min_balance')));
    }

    public function searchUsers(Request $request)
    {
        return response()->json($this->userService->searchUsers($request->query('keyword')));
    }

    public function getSortedUsers(Request $request)
    {
        return response()->json($this->userService->getSortedUsers(
            $request->query('orderBy'),
            $request->query('orderDirection')
        ));
    }
}
