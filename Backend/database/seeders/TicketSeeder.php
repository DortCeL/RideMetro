<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketSeeder extends Seeder
{
    public function run()
    {
        DB::table('tickets')->insert([
            // Alice Johnson (user_id: 1) - 3 tickets
            [
                'ticket_id' => 1001,
                'user_id' => 1,
                'price' => 50.00,
                'departure' => 'Station A',
                'destination' => 'Station B',
                'travel_date' => '2025-02-20',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1002,
                'user_id' => 1,
                'price' => 75.50,
                'departure' => 'Station B',
                'destination' => 'Station C',
                'travel_date' => '2025-02-21',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1003,
                'user_id' => 1,
                'price' => 120.00,
                'departure' => 'Station C',
                'destination' => 'Station D',
                'travel_date' => '2025-02-25',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Bob Smith (user_id: 2) - 2 tickets
            [
                'ticket_id' => 1004,
                'user_id' => 2,
                'price' => 30.00,
                'departure' => 'Station A',
                'destination' => 'Station D',
                'travel_date' => '2025-02-18',
                'is_expired' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1005,
                'user_id' => 2,
                'price' => 55.00,
                'departure' => 'Station D',
                'destination' => 'Station F',
                'travel_date' => '2025-02-22',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Charlie Brown (user_id: 3) - 3 tickets
            [
                'ticket_id' => 1006,
                'user_id' => 3,
                'price' => 100.00,
                'departure' => 'Station C',
                'destination' => 'Station E',
                'travel_date' => '2025-02-22',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1007,
                'user_id' => 3,
                'price' => 65.00,
                'departure' => 'Station E',
                'destination' => 'Station A',
                'travel_date' => '2025-02-23',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1008,
                'user_id' => 3,
                'price' => 40.00,
                'departure' => 'Station B',
                'destination' => 'Station C',
                'travel_date' => '2025-02-24',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Diana Prince (user_id: 4) - 2 tickets
            [
                'ticket_id' => 1009,
                'user_id' => 4,
                'price' => 45.75,
                'departure' => 'Station B',
                'destination' => 'Station F',
                'travel_date' => '2025-02-19',
                'is_expired' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1010,
                'user_id' => 4,
                'price' => 90.00,
                'departure' => 'Station A',
                'destination' => 'Station E',
                'travel_date' => '2025-02-26',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Edward Cullen (user_id: 5) - 2 tickets
            [
                'ticket_id' => 1011,
                'user_id' => 5,
                'price' => 65.00,
                'departure' => 'Station E',
                'destination' => 'Station A',
                'travel_date' => '2025-02-23',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'ticket_id' => 1012,
                'user_id' => 5,
                'price' => 80.00,
                'departure' => 'Station C',
                'destination' => 'Station D',
                'travel_date' => '2025-02-27',
                'is_expired' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
