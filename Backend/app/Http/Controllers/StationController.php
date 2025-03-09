<?php

namespace App\Http\Controllers;

use App\Services\StationService;
use Illuminate\Http\Request;

class StationController extends Controller
{
    protected $stationService;

    public function __construct(StationService $stationService)
    {
        $this->stationService = $stationService;
    }

    public function getAllStations()
    {
        return response()->json($this->stationService->getAllStations());
    }

    public function getStationById($id)
    {
        return response()->json($this->stationService->getStationById($id));
    }

    public function updateStationState(Request $request, $id)
    {
        $state = $request->input('state');

        if (!in_array($state, ['open', 'closed'])) {
            return response()->json(['error' => 'Invalid state value. Use "open" or "closed".'], 400);
        }

        $result = $this->stationService->updateStationState($id, $state);

        if ($result) {
            return response()->json(['message' => 'Station state updated successfully.']);
        } else {
            return response()->json(['error' => 'Station not found or no change made.'], 404);
        }
    }

    public function getOpenStations()
    {
        return response()->json($this->stationService->getStationsByState('open'));
    }

    public function getClosedStations()
    {
        return response()->json($this->stationService->getStationsByState('closed'));
    }
}