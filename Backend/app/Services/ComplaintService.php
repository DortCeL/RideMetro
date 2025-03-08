<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class ComplaintService
{
    public function getAllComplaints()
    {
        return DB::select("
            SELECT c.complaint_id, c.complain_msg, c.status, c.created_at, c.updated_at,
                   u.name AS user_name, u.email AS user_email, u.age AS user_age,
                   s.station_name, s.state AS station_state
            FROM complaints c
            JOIN users u ON c.user_id = u.id
            JOIN stations s ON c.station_id = s.station_id
        ");
    }

    public function searchComplaints($searchTerm)
    {
        return DB::select("
            SELECT c.complaint_id, c.complain_msg, s.station_name
            FROM complaints c
            JOIN stations s ON c.station_id = s.station_id
            WHERE c.complain_msg LIKE ?
        ", ['%' . $searchTerm . '%']);
    }

    public function getUserComplaints()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name AS user_name, 
                users.email, 
                complaints.complaint_id, 
                complaints.complain_msg, 
                complaints.status, 
                complaints.created_at 
            FROM complaints 
            INNER JOIN users ON complaints.user_id = users.id
        ");
    }

    public function getStationComplaints()
    {
        return DB::select("
            SELECT 
                stations.station_id, 
                stations.station_name, 
                stations.state, 
                complaints.complaint_id, 
                complaints.complain_msg, 
                complaints.status, 
                complaints.created_at 
            FROM complaints 
            INNER JOIN stations ON complaints.station_id = stations.station_id
        ");
    }

    public function getUserComplaintCounts()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name AS user_name, 
                users.email, 
                COUNT(complaints.complaint_id) AS total_complaints 
            FROM users 
            LEFT JOIN complaints ON users.id = complaints.user_id 
            GROUP BY users.id, users.name, users.email
        ");
    }

    public function getStationComplaintCounts()
    {
        return DB::select("
            SELECT 
                stations.station_id, 
                stations.station_name, 
                stations.state, 
                COUNT(complaints.complaint_id) AS total_complaints 
            FROM stations 
            LEFT JOIN complaints ON stations.station_id = complaints.station_id 
            GROUP BY stations.station_id, stations.station_name, stations.state
        ");
    }

    public function getResolvedComplaints()
    {
        return DB::select("
            SELECT 
                complaints.complaint_id, 
                complaints.complain_msg, 
                complaints.status, 
                complaints.created_at, 
                stations.station_id, 
                stations.station_name, 
                stations.state 
            FROM complaints 
            INNER JOIN stations ON complaints.station_id = stations.station_id 
            WHERE complaints.status = 'resolved'
        ");
    }

    public function getPendingComplaints()
    {
        return DB::select("
            SELECT 
                complaints.complaint_id, 
                complaints.complain_msg, 
                complaints.status, 
                complaints.created_at, 
                stations.station_id, 
                stations.station_name, 
                stations.state 
            FROM complaints 
            INNER JOIN stations ON complaints.station_id = stations.station_id 
            WHERE complaints.status = 'pending'
        ");
    }

    public function getStationComplaintStatusCounts()
    {
        return DB::select("
            SELECT 
                stations.station_id, 
                stations.station_name, 
                stations.state, 
                SUM(CASE WHEN complaints.status = 'resolved' THEN 1 ELSE 0 END) AS resolved_count, 
                SUM(CASE WHEN complaints.status = 'pending' THEN 1 ELSE 0 END) AS pending_count 
            FROM stations 
            LEFT JOIN complaints ON stations.station_id = complaints.station_id 
            GROUP BY stations.station_id, stations.station_name, stations.state
        ");
    }

    public function toggleComplaintStatus($complaintId)
    {
        $complaint = DB::select("SELECT status FROM complaints WHERE complaint_id = ?", [$complaintId]);

        if (empty($complaint)) {
            return ['message' => 'Complaint not found', 'status' => 404];
        }

        $newStatus = ($complaint[0]->status === 'pending') ? 'resolved' : 'pending';

        DB::update("UPDATE complaints SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE complaint_id = ?", [$newStatus, $complaintId]);

        return ['message' => "Complaint status updated to $newStatus"];
    }

    public function createComplaint($userId, $stationId, $complainMsg)
    {
        DB::insert("
            INSERT INTO complaints (user_id, station_id, complain_msg)
            VALUES (?, ?, ?)
        ", [$userId, $stationId, $complainMsg]);

        return ['message' => 'Complaint created successfully'];
    }
}