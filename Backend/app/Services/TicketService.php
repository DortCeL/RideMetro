<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class TicketService
{
    public function getUserTickets()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email, 
                tickets.ticket_id, 
                tickets.price, 
                tickets.departure, 
                tickets.destination, 
                tickets.travel_date, 
                tickets.is_expired
            FROM users 
            JOIN tickets ON users.id = tickets.user_id
        ");
    }

    public function getUserTicketCounts()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email, 
                COUNT(tickets.ticket_id) AS total_tickets
            FROM users
            LEFT JOIN tickets ON users.id = tickets.user_id
            GROUP BY users.id, users.name, users.email
        ");
    }

    public function getUsersWithTickets()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email,
                tickets.ticket_id,
                tickets.price,
                tickets.departure,
                tickets.destination,
                tickets.travel_date
            FROM users
            INNER JOIN tickets ON users.id = tickets.user_id
            ORDER BY users.id, tickets.travel_date DESC
        ");
    }

    public function getTopSpender()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email,
                SUM(tickets.price) AS total_spent
            FROM users
            JOIN tickets ON users.id = tickets.user_id
            GROUP BY users.id, users.name, users.email
            ORDER BY total_spent DESC
            LIMIT 1
        ");
    }

    public function getUsersWithoutTickets()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email
            FROM users
            LEFT JOIN tickets ON users.id = tickets.user_id
            WHERE tickets.ticket_id IS NULL
        ");
    }

    public function getPopularDestination()
    {
        return DB::select("
            SELECT 
                destination, 
                COUNT(ticket_id) AS total_tickets
            FROM tickets
            GROUP BY destination
            ORDER BY total_tickets DESC
            LIMIT 1
        ");
    }

    public function getAboveAverageSpenders()
    {
        return DB::select("
            SELECT 
                users.id AS user_id, 
                users.name, 
                users.email, 
                total_spent
            FROM (
                SELECT 
                    users.id, 
                    users.name, 
                    users.email, 
                    SUM(tickets.price) AS total_spent
                FROM users
                JOIN tickets ON users.id = tickets.user_id
                GROUP BY users.id, users.name, users.email
            ) AS user_spending
            WHERE total_spent > (
                SELECT AVG(price) FROM tickets
            )
            ORDER BY total_spent DESC
        ");
    }

    public function getTicketPrice($source, $destination)
{
    $result = DB::select("
        SELECT fare
        FROM routes
        WHERE source = ? AND destination = ?
    ", [$source, $destination]);

    // Return only the fare value, or null if no result is found
    return $result[0]->fare ?? null;
}


}