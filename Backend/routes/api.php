<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/tasks', [TaskController::class, 'getTasks']);



Route::get('/users', [UserController::class, 'getUsers']);
Route::post('/users', [UserController::class, 'createUser']);

Route::get('/users/age-range', [UserController::class, 'getUsersByAgeRange']);
Route::get('/users/min-balance', [UserController::class, 'getUsersWithMinBalance']);
Route::get('/users/search', [UserController::class, 'searchUsers']);
Route::get('/users/sorted', [UserController::class, 'getSortedUsers']);


Route::get('/user-tickets', function () {
    $results = DB::select("
        SELECT 
            users.id AS user_id, 
            users.name, 
            users.email, 
            tickets.ticket_id,  -- Fixed this (was tickets.id)
            tickets.price, 
            tickets.departure, 
            tickets.destination, 
            tickets.travel_date, 
            tickets.is_expired
        FROM users 
        JOIN tickets ON users.id = tickets.user_id
    ");

    return response()->json($results);
});


Route::get('/users-ticket-count', function () {
    $results = DB::select("
        SELECT 
            users.id AS user_id, 
            users.name, 
            users.email, 
            COUNT(tickets.ticket_id) AS total_tickets
        FROM users
        LEFT JOIN tickets ON users.id = tickets.user_id
        GROUP BY users.id, users.name, users.email
    ");

    return response()->json($results);
});


// only the users that have tickets
Route::get('/users-with-tickets', function () {
    $results = DB::select("
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

    return response()->json($results);
});

Route::get('/top-spender', function () {
    $results = DB::select("
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

    return response()->json($results);
});

Route::get('/users-without-tickets', function () {
    $results = DB::select("
        SELECT 
            users.id AS user_id, 
            users.name, 
            users.email
        FROM users
        LEFT JOIN tickets ON users.id = tickets.user_id
        WHERE tickets.ticket_id IS NULL
    ");

    return response()->json($results);
});



Route::get('/popular-destination', function () {
    $results = DB::select("
        SELECT 
            destination, 
            COUNT(ticket_id) AS total_tickets
        FROM tickets
        GROUP BY destination
        ORDER BY total_tickets DESC
        LIMIT 1
    ");

    return response()->json($results);
});


//! doesnt work
Route::get('/above-average-spenders', function () {
    $results = DB::select("
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

    return response()->json($results);
});

//Station
Route::get('/stations', function () {
    $results = DB::select("
        SELECT 
            station_id, 
            station_name, 
            state 
        FROM stations
    ");

    return response()->json($results);
});
//get_station_byid
Route::get('/stations/{id}', function ($id) {
    $results = DB::select("
        SELECT 
            station_id, 
            station_name, 
            state 
        FROM stations
        WHERE station_id = ?
    ", [$id]);

    return response()->json($results);
});


Route::get('/stations/open', function () {
    $results = DB::select("
        SELECT 
            station_id, 
            station_name 
        FROM stations
        WHERE state = 'open'
    ");

    return response()->json($results);
});
Route::get('/stations/closed', function () {
    $results = DB::select("
        SELECT 
            station_id, 
            station_name 
        FROM stations
        WHERE state = 'closed'
    ");

    return response()->json($results);
});

// Route::get('/stations/sorted', function () {
//     $results = DB::select("
//         SELECT 
//             station_id, 
//             station_name, 
//             state 
//         FROM stations
//         ORDER BY station_name ASC
//     ");

//     return response()->json($results);
// });

//stationput

Route::put('/stations/{id}', function (Request $request, $id) {
    $state = $request->input('state');

    if (!in_array($state, ['open', 'closed'])) {
        return response()->json(['error' => 'Invalid state value. Use "open" or "closed".'], 400);
    }

    $updated = DB::update("UPDATE stations SET state = ? WHERE station_id = ?", [$state, $id]);

    if ($updated) {
        return response()->json(['message' => 'Station state updated successfully.']);
    } else {
        return response()->json(['error' => 'Station not found or no change made.'], 404);
    }
});

//complaint
Route::get('/complaints', function () {
    $results = DB::select("
        SELECT 
            complaints.complaint_id, 
            complaints.user_id, 
            users.name AS user_name, 
            users.email AS user_email, 
            complaints.complain_msg, 
            complaints.status, 
            complaints.created_at
        FROM complaints
        JOIN users ON complaints.user_id = users.id
    ");

    return response()->json($results);
});

Route::get('/complaints/pending', function () {
    $results = DB::select("
        SELECT 
            complaints.complaint_id, 
            complaints.user_id, 
            users.name AS user_name, 
            users.email AS user_email, 
            complaints.complain_msg, 
            complaints.status, 
            complaints.created_at
        FROM complaints
        JOIN users ON complaints.user_id = users.id
        WHERE complaints.status = 'pending'
    ");

    return response()->json($results);
});


Route::get('/complaints/resolved', function () {
    $results = DB::select("
        SELECT 
            complaints.complaint_id, 
            complaints.user_id, 
            users.name AS user_name, 
            users.email AS user_email, 
            complaints.complain_msg, 
            complaints.status, 
            complaints.created_at
        FROM complaints
        JOIN users ON complaints.user_id = users.id
        WHERE complaints.status = 'resolved'
    ");

    return response()->json($results);
});
//user posting complaints
Route::post('/complaints', function (Request $request) {
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'complain_msg' => 'required|string|max:500',
    ]);

    DB::table('complaints')->insert([
        'user_id' => $request->input('user_id'),
        'complain_msg' => $request->input('complain_msg'),
        'status' => 'pending',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['message' => 'Complaint submitted successfully'], 201);
});

//  Admin marks a complaint as resolved (PUT)
Route::put('/complaints/{id}/resolve', function ($id) {
    $complaint = DB::table('complaints')->where('complaint_id', $id)->first();

    if (!$complaint) {
        return response()->json(['message' => 'Complaint not found'], 404);
    }

    DB::table('complaints')
        ->where('complaint_id', $id)
        ->update([
            'status' => 'resolved',
            'updated_at' => now(),
        ]);

    return response()->json(['message' => 'Complaint marked as resolved']);
});




// Login signup
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
