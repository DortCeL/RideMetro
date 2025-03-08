<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class StationService
{
    public function getAllStations()
    {
        return DB::select("
            SELECT 
                station_id, 
                station_name, 
                state 
            FROM stations
        ");
    }

    public function getStationById($id)
    {
        return DB::select("
            SELECT 
                station_id, 
                station_name, 
                state 
            FROM stations
            WHERE station_id = ?
        ", [$id]);
    }

    public function updateStationState($id, $state)
    {
        return DB::update("UPDATE stations SET state = ? WHERE station_id = ?", [$state, $id]);
    }

    public function getStationsByState($state)
    {
        return DB::select("
            SELECT station_id, station_name 
            FROM stations 
            WHERE state = ?
        ", [$state]);
    }
}