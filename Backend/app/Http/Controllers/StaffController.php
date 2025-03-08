<?php

namespace App\Http\Controllers;

use App\Services\StaffService;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    protected $staffService;

    public function __construct(StaffService $staffService)
    {
        $this->staffService = $staffService;
    }

    public function getAllStaff()
    {
        return response()->json($this->staffService->getAllStaff());
    }

    public function getStaffCountPerStation()
    {
        return response()->json($this->staffService->getStaffCountPerStation());
    }

    public function getAverageSalaryPerStation()
    {
        return response()->json($this->staffService->getAverageSalaryPerStation());
    }

    public function getHighestPaidPerStation()
    {
        return response()->json($this->staffService->getHighestPaidPerStation());
    }

    public function getGenderDistribution()
    {
        return response()->json($this->staffService->getGenderDistribution());
    }

    public function getStationsWithHighSalary(Request $request)
    {
        $threshold = $request->query('threshold', 50000);
        return response()->json($this->staffService->getStationsWithHighSalary($threshold));
    }

    public function getAgeExtremesPerStation()
    {
        return response()->json($this->staffService->getAgeExtremesPerStation());
    }

    public function getHighestPaidAtBusiestStation()
    {
        return response()->json($this->staffService->getHighestPaidAtBusiestStation());
    }

    public function getStaffAboveAge(Request $request)
    {
        $age = $request->query('age', 30);
        return response()->json($this->staffService->getStaffAboveAge($age));
    }

    public function getMaleStaffPerStation()
    {
        return response()->json($this->staffService->getStaffByGenderPerStation('Male'));
    }

    public function getFemaleStaffPerStation()
    {
        return response()->json($this->staffService->getStaffByGenderPerStation('Female'));
    }

    public function getOtherGenderStaffPerStation()
    {
        return response()->json($this->staffService->getStaffByGenderPerStation('Other'));
    }

    public function getStaffFromCity(Request $request)
    {
        $city = $request->query('city', '');
        return response()->json($this->staffService->getStaffFromCity($city));
    }

    public function searchStaffByName(Request $request)
    {
        $name = $request->query('name', '');
        return response()->json($this->staffService->searchStaffByName($name));
    }

    public function getMaleStaffCountPerStation()
    {
        return response()->json($this->staffService->getStaffCountByGenderPerStation('Male'));
    }

    public function getFemaleStaffCountPerStation()
    {
        return response()->json($this->staffService->getStaffCountByGenderPerStation('Female'));
    }

    public function getTotalGenderDistribution()
    {
        return response()->json($this->staffService->getTotalGenderDistribution());
    }

    public function getStaffAboveSalary(Request $request)
    {
        $salary = $request->query('salary', 50000);
        return response()->json($this->staffService->getStaffAboveSalary($salary));
    }

    public function getStaffSortedByAge(Request $request)
    {
        $order = $request->query('order', 'ASC');
        return response()->json($this->staffService->getStaffSortedByAge($order));
    }

    public function getStationsWithAllStaffAboveAge(Request $request)
    {
        $age = $request->query('age', 30);
        return response()->json($this->staffService->getStationsWithAllStaffAboveAge($age));
    }

    public function getStationWithHighestAvgSalary()
    {
        return response()->json($this->staffService->getStationWithHighestAvgSalary());
    }

    public function getStaffInSalaryRange(Request $request)
    {
        $minSalary = $request->query('min', 30000);
        $maxSalary = $request->query('max', 70000);
        return response()->json($this->staffService->getStaffInSalaryRange($minSalary, $maxSalary));
    }

    public function getStationWithYoungestAvgAge()
    {
        return response()->json($this->staffService->getStationWithYoungestAvgAge());
    }

    public function getStationWithOldestAvgAge()
    {
        return response()->json($this->staffService->getStationWithOldestAvgAge());
    }

    public function getHighestPaidFemaleStaff()
    {
        return response()->json($this->staffService->getHighestPaidStaffByGender('Female'));
    }

    public function getHighestPaidMaleStaff()
    {
        return response()->json($this->staffService->getHighestPaidStaffByGender('Male'));
    }

    public function getHighestPaidOtherGenderStaff()
    {
        return response()->json($this->staffService->getHighestPaidStaffByGender('Other'));
    }
}