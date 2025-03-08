<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:3',
            'age' => 'required|integer'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'age' => $request->age
        ]);

        // token$ = JWTAuth::fromUser($user);
        $token = $user->createToken($request->name);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token->plainTextToken
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // check if email matches a user
        $user = User::where('email', $request->email)->first();

        // check if user doesnt exist or password doesnt match
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message'=> 'The provided credentials are incorrect.'
            ], 401);
        }

        // if user found and pass is correct
        $token = $user->createToken($user->name);

        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token->plainTextToken
        ], 200);


        // if (!$token = JWTAuth::attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }

        // return response()->json(['token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'User logged out!',
        ], 200);
    }

    public function user(Request $request)
    {
        return $request->user();
    }

}

