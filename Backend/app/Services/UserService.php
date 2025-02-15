<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class UserService
{
    public function getAllUsers()
    {
        return DB::select("SELECT * FROM users");
    }

    public function createUser($name, $email, $password)
    {
        DB::insert("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [$name, $email, $password]);

        return [
            'name' => $name,
            'email' => $email
        ];
    }
}
