<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Alice Johnson',
                'email' => 'alice@example.com',
                'password' => Hash::make('12345'),
                'age' => 25,
                'balance' => 1500.50,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bob Smith',
                'email' => 'bob@example.com',
                'password' => Hash::make('12345'),
                'age' => 30,
                'balance' => 2500.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Charlie Brown',
                'email' => 'charlie@example.com',
                'password' => Hash::make('12345'),
                'age' => 28,
                'balance' => 800.75,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Diana Prince',
                'email' => 'diana@example.com',
                'password' => Hash::make('password123'),
                'age' => 27,
                'balance' => 5000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Edward Cullen',
                'email' => 'edward@example.com',
                'password' => Hash::make('vampirelove'),
                'age' => 22,
                'balance' => 300.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fiona Gallagher',
                'email' => 'fiona@example.com',
                'password' => Hash::make('shameless'),
                'age' => 35,
                'balance' => 1200.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
