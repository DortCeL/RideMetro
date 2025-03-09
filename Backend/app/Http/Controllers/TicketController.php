<?php

namespace App\Http\Controllers;

use App\Services\TicketService;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    protected $ticketService;

    public function __construct(TicketService $ticketService)
    {
        $this->ticketService = $ticketService;
    }

    public function getUserTickets()
    {
        return response()->json($this->ticketService->getUserTickets());
    }

    public function getUserTicketCounts()
    {
        return response()->json($this->ticketService->getUserTicketCounts());
    }

    public function getUsersWithTickets()
    {
        return response()->json($this->ticketService->getUsersWithTickets());
    }

    public function getTopSpender()
    {
        return response()->json($this->ticketService->getTopSpender());
    }

    public function getUsersWithoutTickets()
    {
        return response()->json($this->ticketService->getUsersWithoutTickets());
    }

    public function getPopularDestination()
    {
        return response()->json($this->ticketService->getPopularDestination());
    }

    public function getAboveAverageSpenders()
    {
        return response()->json($this->ticketService->getAboveAverageSpenders());
    }
    public function getTicketPrice(Request $request)
    {
        $source = $request->query('source');
        $destination = $request->query('destination');

        return response()->json($this->ticketService->getTicketPrice($source, $destination));
    }
}