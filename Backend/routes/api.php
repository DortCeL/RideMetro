<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\StationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
// currently logged-in user
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');



// user routes
Route::get('/users', [UserController::class, 'getUsers']);
Route::post('/users', [UserController::class, 'createUser']);
Route::get('/users/age-range', [UserController::class, 'getUsersByAgeRange']);
Route::get('/users/min-balance', [UserController::class, 'getUsersWithMinBalance']);
Route::get('/users/search', [UserController::class, 'searchUsers']);
Route::get('/users/sorted', [UserController::class, 'getSortedUsers']);


// Ticket Routes
Route::prefix('tickets')->group(function () {
    Route::get('/user-tickets', [TicketController::class, 'getUserTickets']);
    Route::get('/user-ticket-counts', [TicketController::class, 'getUserTicketCounts']);
    Route::get('/users-with-tickets', [TicketController::class, 'getUsersWithTickets']);
    Route::get('/top-spender', [TicketController::class, 'getTopSpender']);
    Route::get('/users-without-tickets', [TicketController::class, 'getUsersWithoutTickets']);
    Route::get('/popular-destination', [TicketController::class, 'getPopularDestination']);
    Route::get('/above-average-spenders', [TicketController::class, 'getAboveAverageSpenders']);
    Route::get('/price', [TicketController::class, 'getTicketPrice']);
    
});


// Staff routes
Route::prefix('staff')->group(function () {
    Route::get('/', [StaffController::class, 'getAllStaff']);
    Route::get('/count-per-station', [StaffController::class, 'getStaffCountPerStation']);
    Route::get('/average-salary-per-station', [StaffController::class, 'getAverageSalaryPerStation']);
    Route::get('/highest-paid-per-station', [StaffController::class, 'getHighestPaidPerStation']);
    Route::get('/gender-distribution', [StaffController::class, 'getGenderDistribution']);
    Route::get('/stations-with-high-salary', [StaffController::class, 'getStationsWithHighSalary']);
    Route::get('/age-extremes-per-station', [StaffController::class, 'getAgeExtremesPerStation']);
    Route::get('/highest-paid-at-busiest-station', [StaffController::class, 'getHighestPaidAtBusiestStation']);
    Route::get('/above-age', [StaffController::class, 'getStaffAboveAge']);
    Route::get('/male-per-station', [StaffController::class, 'getMaleStaffPerStation']);
    Route::get('/female-per-station', [StaffController::class, 'getFemaleStaffPerStation']);
    Route::get('/other-gender-per-station', [StaffController::class, 'getOtherGenderStaffPerStation']);
    Route::get('/from-city', [StaffController::class, 'getStaffFromCity']);
    Route::get('/search', [StaffController::class, 'searchStaffByName']);
    Route::get('/count-male-per-station', [StaffController::class, 'getMaleStaffCountPerStation']);
    Route::get('/count-female-per-station', [StaffController::class, 'getFemaleStaffCountPerStation']);
    Route::get('/gender-distribution-total', [StaffController::class, 'getTotalGenderDistribution']);
    Route::get('/above-salary', [StaffController::class, 'getStaffAboveSalary']);
    Route::get('/sorted-by-age', [StaffController::class, 'getStaffSortedByAge']);
    Route::get('/stations-all-above-age', [StaffController::class, 'getStationsWithAllStaffAboveAge']);
    Route::get('/station-highest-avg-salary', [StaffController::class, 'getStationWithHighestAvgSalary']);
    Route::get('/salary-range', [StaffController::class, 'getStaffInSalaryRange']);
    Route::get('/station-youngest-avg-age', [StaffController::class, 'getStationWithYoungestAvgAge']);
    Route::get('/station-oldest-avg-age', [StaffController::class, 'getStationWithOldestAvgAge']);
    Route::get('/highest-paid-female', [StaffController::class, 'getHighestPaidFemaleStaff']);
    Route::get('/highest-paid-male', [StaffController::class, 'getHighestPaidMaleStaff']);
    Route::get('/highest-paid-other-gender', [StaffController::class, 'getHighestPaidOtherGenderStaff']);
});

// Station routes
Route::prefix('stations')->group(function () {
    Route::get('/', [StationController::class, 'getAllStations']);
    Route::get('/{id}', [StationController::class, 'getStationById']);
    Route::put('/{id}', [StationController::class, 'updateStationState']);
    Route::get('/open', [StationController::class, 'getOpenStations']);
    Route::get('/closed', [StationController::class, 'getClosedStations']);
});


// Complaint Routes
Route::prefix('complaints')->group(function () {
    Route::get('/', [ComplaintController::class, 'getAllComplaints']);
    Route::post('/', [ComplaintController::class, 'createComplaint']);
    Route::get('/search', [ComplaintController::class, 'searchComplaints']);
    Route::get('/user-complaints', [ComplaintController::class, 'getUserComplaints']);
    Route::get('/station-complaints', [ComplaintController::class, 'getStationComplaints']);
    Route::get('/count/users', [ComplaintController::class, 'getUserComplaintCounts']);
    Route::get('/count/stations', [ComplaintController::class, 'getStationComplaintCounts']);
    Route::get('/resolved', [ComplaintController::class, 'getResolvedComplaints']);
    Route::get('/pending', [ComplaintController::class, 'getPendingComplaints']);
    Route::get('/status-count/stations', [ComplaintController::class, 'getStationComplaintStatusCounts']);
    Route::put('/toggle-status/{complaint_id}', [ComplaintController::class, 'toggleComplaintStatus']);
});

