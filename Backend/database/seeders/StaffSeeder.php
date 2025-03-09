<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StaffSeeder extends Seeder
{
    public function run()
    {
        $cities = [
            'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Barisal', 
            'Sylhet', 'Rangpur', 'Mymensingh', 'Comilla', 'Narayanganj',
            'Gazipur', 'Bogra', 'Cox’s Bazar', 'Jessore', 'Dinajpur', 
            'Pabna', 'Faridpur', 'Kushtia', 'Tangail', 'Feni'
        ];

        $designations = ['Manager', 'Supervisor', 'Technician', 'Engineer', 'Operator', 'Clerk', 'Security'];
        $genders = ['Male', 'Female', 'Other'];

        for ($i = 0; $i < 25; $i++) {
            $name = fake()->name();
            $age = rand(22, 55);
            $designation = $designations[array_rand($designations)];
            $salary = rand(20000, 80000);
            $city = $cities[array_rand($cities)];
            $gender = $genders[array_rand($genders)];
            $station_id = rand(1, 16);

            DB::statement("
                INSERT INTO staff (name, age, designation, salary, city, gender, station_id, created_at, updated_at)
                VALUES ('$name', $age, '$designation', $salary, '$city', '$gender', $station_id, NOW(), NOW())
            ");
        }
    }
}
