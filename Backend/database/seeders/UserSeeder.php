<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::statement("INSERT INTO users (name, email, password) VALUES
            ('Alice Johnson', 'alice@example.com', '" . Hash::make('12345') . "'),
            ('Bob Smith', 'bob@example.com', '" . Hash::make('12345') . "'),
            ('Charlie Brown', 'charlie@example.com', '" . Hash::make('12345') . "')
        ");
    }
}

