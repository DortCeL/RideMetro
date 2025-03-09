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
        DB::statement("
            INSERT INTO complaints (user_id, station_id, complain_msg, status, created_at, updated_at) VALUES
            (1, 3, 'The station was too crowded during peak hours.', 'pending', NOW(), NOW()),
            (2, 1, 'Ticket vending machine was not working at Uttara North.', 'resolved', NOW(), NOW()),
            (2, 5, 'Security check took too long at Mirpur 10 station.', 'pending', NOW(), NOW()),
            (1, 2, 'Insufficient seating in waiting areas.', 'resolved', NOW(), NOW()),
            (3, 4, 'No proper announcements for train arrivals at Agargaon.', 'pending', NOW(), NOW()),
            (2, 3, 'The escalator was out of service.', 'pending', NOW(), NOW()),
            (3, 1, 'Long queues at ticket counters.', 'resolved', NOW(), NOW()),
            (4, 6, 'Lack of clean drinking water facilities.', 'pending', NOW(), NOW()),
            (5, 5, 'Overpriced food at the station cafeteria.', 'resolved', NOW(), NOW()),
            (1, 2, 'Wi-Fi service is not working properly.', 'pending', NOW(), NOW())
        ");
    }

    
}
