<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RouteSeeder extends Seeder
{
    public function run()
    {
        $stations = [
            ['station_name' => 'Uttara North'],
            ['station_name' => 'Uttara Center'],
            ['station_name' => 'Uttara South'],
            ['station_name' => 'Pallabi'],
            ['station_name' => 'Mirpur 11'],
            ['station_name' => 'Mirpur 10'],
            ['station_name' => 'Kazipara'],
            ['station_name' => 'Shewrapara'],
            ['station_name' => 'Agargaon'],
            ['station_name' => 'Bijoy Sarani'],
            ['station_name' => 'Farmgate'],
            ['station_name' => 'Karwan Bazar'],
            ['station_name' => 'Shahbag'],
            ['station_name' => 'Dhaka University'],
            ['station_name' => 'Bangladesh Secretariat'],
            ['station_name' => 'Motijheel'],
        ];

        // First, insert the stations into the stations table
        DB::table('stations')->insert($stations);

        $stationIds = DB::table('stations')->pluck('station_id')->toArray(); // Get all station IDs

        // Create combinations of stations and set prices for routes
        $routes = [];

        foreach ($stationIds as $source) {
            foreach ($stationIds as $destination) {
                if ($source !== $destination) { // Skip if source and destination are the same
                    $routes[] = [
                        'source' => $source,
                        'destination' => $destination,
                        'price' => rand(30, 100), // Random price between 30 and 100 for example
                    ];
                }
            }
        }

        // Insert the routes into the routes table
        DB::table('routes')->insert($routes);
    }

}
