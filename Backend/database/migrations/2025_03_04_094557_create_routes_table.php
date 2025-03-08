<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function run()
    {
        // Insert stations directly using raw SQL (assuming stations are already in the database)
        DB::statement("
            INSERT INTO stations (station_name) VALUES
            ('Uttara North'),
            ('Uttara Center'),
            ('Uttara South'),
            ('Pallabi'),
            ('Mirpur 11'),
            ('Mirpur 10'),
            ('Kazipara'),
            ('Shewrapara'),
            ('Agargaon'),
            ('Bijoy Sarani'),
            ('Farmgate'),
            ('Karwan Bazar'),
            ('Shahbag'),
            ('Dhaka University'),
            ('Bangladesh Secretariat'),
            ('Motijheel')
        ");

        // Fetch station IDs
        $stationIds = DB::select("SELECT station_id FROM stations");

        // Prepare an array to hold route data
        $routes = [];

        foreach ($stationIds as $source) {
            foreach ($stationIds as $destination) {
                // Avoid routes where source and destination are the same
                if ($source->station_id !== $destination->station_id) {
                    // Assign a random price between 30 and 100
                    $price = rand(30, 100);

                    // Prepare SQL insert data
                    $routes[] = "({$source->station_id}, {$destination->station_id}, {$price})";
                }
            }
        }

        // Insert the routes into the `routes` table using a raw SQL statement
        DB::statement("
            INSERT INTO routes (source, destination, price) VALUES " . implode(', ', $routes)
        );
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('routes');
    }
};
