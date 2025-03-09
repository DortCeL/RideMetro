<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class StaffService
{
    public function getAllStaff()
    {
        return DB::select("
            SELECT 
                s.id, 
                s.name, 
                s.age, 
                s.designation, 
                s.salary, 
                s.city, 
                s.gender, 
                st.station_name 
            FROM staff s
            JOIN stations st ON s.station_id = st.station_id
            ORDER BY s.name ASC
        ");
    }

    public function getStaffCountPerStation()
    {
        return DB::select("
            SELECT 
                s.station_id, 
                s.station_name, 
                COUNT(st.id) AS total_staff 
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_id, s.station_name
        ");
    }

    public function getAverageSalaryPerStation()
    {
        return DB::select("
            SELECT 
                s.station_id, 
                s.station_name, 
                COALESCE(AVG(st.salary), 0) AS average_salary 
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_id, s.station_name
        ");
    }

    public function getHighestPaidPerStation()
    {
        return DB::select("
            SELECT st.id, st.name, st.salary, s.station_name 
            FROM staff st
            JOIN stations s ON st.station_id = s.station_id
            WHERE st.salary = (
                SELECT MAX(salary) FROM staff WHERE station_id = st.station_id
            )
        ");
    }

    public function getGenderDistribution()
    {
        return DB::select("
            SELECT 
                s.station_name, 
                st.gender, 
                COUNT(st.id) AS total_staff 
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_name, st.gender
        ");
    }

    public function getStationsWithHighSalary($threshold)
    {
        return DB::select("
            SELECT s.station_id, s.station_name
            FROM stations s
            WHERE NOT EXISTS (
                SELECT 1 FROM staff st WHERE st.station_id = s.station_id AND st.salary < ?
            )
        ", [$threshold]);
    }

    public function getAgeExtremesPerStation()
    {
        return DB::select("
            SELECT s.station_name, 
                   MIN(st.age) AS youngest_age, 
                   MAX(st.age) AS oldest_age
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_name
        ");
    }

    public function getHighestPaidAtBusiestStation()
    {
        return DB::select("
            SELECT st.id, st.name, st.salary, s.station_name 
            FROM staff st
            JOIN stations s ON st.station_id = s.station_id
            WHERE st.station_id = (
                SELECT station_id FROM staff GROUP BY station_id ORDER BY COUNT(id) DESC LIMIT 1
            )
            ORDER BY st.salary DESC 
            LIMIT 1
        ");
    }

    public function getStaffAboveAge($age)
    {
        return DB::select("
            SELECT * FROM staff WHERE age > ?
        ", [$age]);
    }

    public function getStaffByGenderPerStation($gender)
    {
        return DB::select("
            SELECT s.station_name, COUNT(st.id) AS total_staff
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id
            WHERE st.gender = ?
            GROUP BY s.station_name
        ", [$gender]);
    }

    public function getStaffFromCity($city)
    {
        return DB::select("
            SELECT * FROM staff WHERE city = ?
        ", [$city]);
    }

    public function searchStaffByName($name)
    {
        return DB::select("
            SELECT * FROM staff WHERE name LIKE ?
        ", ["%$name%"]);
    }

    public function getStaffCountByGenderPerStation($gender)
    {
        return DB::select("
            SELECT s.station_name, COUNT(st.id) AS staff_count
            FROM stations s
            LEFT JOIN staff st ON s.station_id = st.station_id AND st.gender = ?
            GROUP BY s.station_name
        ", [$gender]);
    }

    public function getTotalGenderDistribution()
    {
        return DB::select("
            SELECT gender, COUNT(id) AS total_count 
            FROM staff 
            GROUP BY gender
        ");
    }

    public function getStaffAboveSalary($salary)
    {
        return DB::select("
            SELECT * FROM staff WHERE salary > ?
        ", [$salary]);
    }

    public function getStaffSortedByAge($order)
    {
        $order = strtoupper($order) === 'DESC' ? 'DESC' : 'ASC';
        return DB::select("
            SELECT * FROM staff ORDER BY age $order
        ");
    }

    public function getStationsWithAllStaffAboveAge($age)
    {
        return DB::select("
            SELECT s.station_id, s.station_name
            FROM stations s
            WHERE NOT EXISTS (
                SELECT 1 FROM staff st WHERE st.station_id = s.station_id AND st.age < ?
            )
        ", [$age]);
    }

    public function getStationWithHighestAvgSalary()
    {
        return DB::select("
            SELECT s.station_id, s.station_name, AVG(st.salary) AS avg_salary
            FROM stations s
            JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_id, s.station_name
            ORDER BY avg_salary DESC
            LIMIT 1
        ");
    }

    public function getStaffInSalaryRange($minSalary, $maxSalary)
    {
        return DB::select("
            SELECT * FROM staff WHERE salary BETWEEN ? AND ?
        ", [$minSalary, $maxSalary]);
    }

    public function getStationWithYoungestAvgAge()
    {
        return DB::select("
            SELECT s.station_id, s.station_name, AVG(st.age) AS avg_age
            FROM stations s
            JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_id, s.station_name
            ORDER BY avg_age ASC
            LIMIT 1
        ");
    }

    public function getStationWithOldestAvgAge()
    {
        return DB::select("
            SELECT s.station_id, s.station_name, AVG(st.age) AS avg_age
            FROM stations s
            JOIN staff st ON s.station_id = st.station_id
            GROUP BY s.station_id, s.station_name
            ORDER BY avg_age DESC
            LIMIT 1
        ");
    }

    public function getHighestPaidStaffByGender($gender)
    {
        return DB::select("
            SELECT * FROM staff 
            WHERE gender = ? 
            ORDER BY salary DESC 
            LIMIT 1
        ", [$gender]);
    }
}