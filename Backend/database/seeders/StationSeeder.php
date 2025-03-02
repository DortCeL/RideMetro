<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('stations')->insert([
            ['station_name' => 'Uttara North', 'state' => 'open'],
            ['station_name' => 'Uttara Center', 'state' => 'open'],
            ['station_name' => 'Uttara South', 'state' => 'open'],
            ['station_name' => 'Pallabi', 'state' => 'open'],
            ['station_name' => 'Mirpur 11', 'state' => 'open'],
            ['station_name' => 'Mirpur 10', 'state' => 'open'],
            ['station_name' => 'Kazipara', 'state' => 'open'],
            ['station_name' => 'Shewrapara', 'state' => 'open'],
            ['station_name' => 'Agargaon', 'state' => 'open'],
            ['station_name' => 'Bijoy Sarani', 'state' => 'closed'], 
            ['station_name' => 'Farmgate', 'state' => 'closed'], 
            ['station_name' => 'Karwan Bazar', 'state' => 'closed'], 
            ['station_name' => 'Shahbag', 'state' => 'closed'], 
            ['station_name' => 'Dhaka University', 'state' => 'closed'], 
            ['station_name' => 'Bangladesh Secretariat', 'state' => 'closed'], 
            ['station_name' => 'Motijheel', 'state' => 'closed'], 
        ]);
    }
}
