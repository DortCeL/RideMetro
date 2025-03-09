<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoutesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // List of metro stations excluding Kamalapur
        $stations = [
            'Uttara North', 'Uttara Center', 'Uttara South', 'Pallabi', 'Mirpur-11',
            'Mirpur-10', 'Kazipara', 'Shewrapara', 'Agargaon', 'Bijoy Sarani',
            'Farmgate', 'Kawran Bazar', 'Shahbag', 'Dhaka University',
            'Bangladesh Secretariat', 'Motijheel'
        ];

        $sql = "INSERT INTO routes (source, destination, fare) VALUES ";

        $values = [];

        // Generate all possible routes using raw SQL
        for ($i = 0; $i < count($stations); $i++) {
            for ($j = $i + 1; $j < count($stations); $j++) {
                // Calculate fare (Tk 5 per station, minimum Tk 20)
                $fare = max(20, ($j - $i) * 5 + 15);

                // Add both directions
                $values[] = "('" . $stations[$i] . "', '" . $stations[$j] . "', $fare)";
                $values[] = "('" . $stations[$j] . "', '" . $stations[$i] . "', $fare)";
            }
        }

        // Execute raw SQL insert
        DB::statement($sql . implode(", ", $values));
    }
}

