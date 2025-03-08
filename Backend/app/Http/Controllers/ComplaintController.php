<?php

namespace App\Http\Controllers;

use App\Services\ComplaintService;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    protected $complaintService;

    public function __construct(ComplaintService $complaintService)
    {
        $this->complaintService = $complaintService;
    }

    public function getAllComplaints()
    {
        return response()->json($this->complaintService->getAllComplaints());
    }

    public function searchComplaints(Request $request)
    {
        return response()->json($this->complaintService->searchComplaints($request->query('message')));
    }

    public function getUserComplaints()
    {
        return response()->json($this->complaintService->getUserComplaints());
    }

    public function getStationComplaints()
    {
        return response()->json($this->complaintService->getStationComplaints());
    }

    public function getUserComplaintCounts()
    {
        return response()->json($this->complaintService->getUserComplaintCounts());
    }

    public function getStationComplaintCounts()
    {
        return response()->json($this->complaintService->getStationComplaintCounts());
    }

    public function getResolvedComplaints()
    {
        return response()->json($this->complaintService->getResolvedComplaints());
    }

    public function getPendingComplaints()
    {
        return response()->json($this->complaintService->getPendingComplaints());
    }

    public function getStationComplaintStatusCounts()
    {
        return response()->json($this->complaintService->getStationComplaintStatusCounts());
    }

    public function toggleComplaintStatus($complaintId)
    {
        return response()->json($this->complaintService->toggleComplaintStatus($complaintId));
    }

    public function createComplaint(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'station_id' => 'required|integer|exists:stations,station_id',
            'complain_msg' => 'required|string'
        ]);

        $result = $this->complaintService->createComplaint(
            $validatedData['user_id'],
            $validatedData['station_id'],
            $validatedData['complain_msg']
        );

        return response()->json($result, 201);
    }
}