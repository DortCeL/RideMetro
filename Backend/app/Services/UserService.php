<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class UserService
{
    // Get all users
    public function getAllUsers()
    {
        return DB::select("SELECT id, name, email, age, balance FROM users ORDER BY created_at DESC");
    }

    // Create a new user
    public function createUser($name, $email, $password, $age, $balance = 0)
    {
        DB::insert(
            "INSERT INTO users (name, email, password, age, balance) VALUES (?, ?, ?, ?, ?)", 
            [$name, $email, $password, $age, $balance]
        );

        return [
            'name' => $name,
            'email' => $email,
            'age' => $age,
            'balance' => $balance
        ];
    }

    // Get users within a specific age range
    public function getUsersByAgeRange($minAge, $maxAge)
    {
        return DB::select("SELECT * FROM users WHERE age BETWEEN ? AND ?", [$minAge, $maxAge]);
    }

    // Get users with a minimum balance
    public function getUsersWithMinBalance($minBalance)
    {
        return DB::select("SELECT * FROM users WHERE balance >= ?", [$minBalance]);
    }

    // Search users by name or email
    public function searchUsers($keyword)
    {
        return DB::select("SELECT * FROM users WHERE name LIKE ? OR email LIKE ?", ["%$keyword%", "%$keyword%"]);
    }

    // Sort users dynamically
    public function getSortedUsers($orderBy = 'balance', $orderDirection = 'DESC')
    {
        return DB::select("SELECT * FROM users ORDER BY $orderBy $orderDirection");
    }
}
