<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class ComplaintSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('complaints')->insert([
            [
                'user_id' => 1,
                'complain_msg' => 'The station was too crowded during peak hours.',
                'status' => 'pending',
            ],
            [
                'user_id' => 2,
                'complain_msg' => 'Ticket vending machine was not working at Uttara North.',
                'status' => 'resolved',
            ],
            [
                'user_id' => 3,
                'complain_msg' => 'Security check took too long at Mirpur 10 station.',
                'status' => 'pending',
            ],
            [
                'user_id' => 4,
                'complain_msg' => 'Insufficient seating in waiting areas.',
                'status' => 'resolved',
            ],
            [
                'user_id' => 5,
                'complain_msg' => 'No proper announcements for train arrivals at Agargaon.',
                'status' => 'pending',
            ],
        ]);
    }
}
