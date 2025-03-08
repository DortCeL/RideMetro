"use client";

import { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8000/api";

const fetchData = async (endpoint, setData) => {
	try {
		const response = await fetch(`${API_BASE_URL}${endpoint}`);
		if (!response.ok) throw new Error("Failed to fetch");
		const data = await response.json();
		setData(data);
	} catch (error) {
		console.error(error);
		setData([]);
	}
};

export const StaffDashboard = () => {
	const [staff, setStaff] = useState([]);

	// Fetch staff when button is clicked
	const loadStaff = () => {
		fetchData("/staff", setStaff);
	};

	// Fetch staff on component mount
	useEffect(() => {
		loadStaff();
	}, []);

	const [staffCountPerStation, setStaffCountPerStation] = useState([]);
	const [avgSalaryPerStation, setAvgSalaryPerStation] = useState([]);
	const [highestPaidPerStation, setHighestPaidPerStation] = useState([]);
	const [genderDistribution, setGenderDistribution] = useState([]);
	const [stationsHighSalary, setStationsHighSalary] = useState([]);
	const [ageExtremes, setAgeExtremes] = useState([]);
	const [highestPaidAtBusiest, setHighestPaidAtBusiest] = useState(null);

	const [staffAboveAge, setStaffAboveAge] = useState([]);
	const [maleStaffPerStation, setMaleStaffPerStation] = useState([]);
	const [femaleStaffPerStation, setFemaleStaffPerStation] = useState([]);
	const [otherGenderStaffPerStation, setOtherGenderStaffPerStation] = useState(
		[]
	);
	const [staffFromCity, setStaffFromCity] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [maleCountPerStation, setMaleCountPerStation] = useState([]);
	const [femaleCountPerStation, setFemaleCountPerStation] = useState([]);

	return (
		<div className='p-6 space-y-6'>
			<h1 className='text-2xl font-bold'>Staff Dashboard</h1>

			{/* Staff List */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold my-5 text-red-600'>
					All Staff Members
				</h2>
				<ul>
					{staff.length > 0 ? (
						staff.map((s) => (
							<li key={s.id} className='border-b py-2'>
								<strong>{s.name}</strong> ({s.age} yrs) - {s.designation} at{" "}
								<strong>{s.station_name}</strong> - ${s.salary}
							</li>
						))
					) : (
						<p>No staff data available.</p>
					)}
				</ul>
			</div>

			{/* Search Staff by Name */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Search Staff by Name</h2>
				<input
					type='text'
					placeholder='Enter name'
					className='border p-2 w-full'
					onChange={(e) =>
						fetchData(`/staff/search?name=${e.target.value}`, setSearchResults)
					}
				/>
				<ul>
					{searchResults.map((s) => (
						<li key={s.id}>
							{s.name} - {s.station_name}
						</li>
					))}
				</ul>
			</div>

			{/* Total Staff Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Total Staff Per Station</h2>
				<button
					onClick={() =>
						fetchData("/staff/count-per-station", setStaffCountPerStation)
					}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{staffCountPerStation.map((station) => (
						<li key={station.station_id}>
							{station.station_name}: {station.total_staff}
						</li>
					))}
				</ul>
			</div>

			{/* Average Salary Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Average Salary Per Station</h2>
				<button
					onClick={() =>
						fetchData(
							"/staff/average-salary-per-station",
							setAvgSalaryPerStation
						)
					}
					className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{avgSalaryPerStation.map((station) => (
						<li key={station.station_id}>
							{station.station_name}: ${station.average_salary}
						</li>
					))}
				</ul>
			</div>

			{/* Highest Paid Staff Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Highest Paid Staff Per Station
				</h2>
				<button
					onClick={() =>
						fetchData(
							"/staff/highest-paid-per-station",
							setHighestPaidPerStation
						)
					}
					className='mt-2 px-4 py-2 bg-yellow-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{highestPaidPerStation.map((staff) => (
						<li key={staff.id}>
							{staff.name} - {staff.station_name} - ${staff.salary}
						</li>
					))}
				</ul>
			</div>

			{/* Gender Distribution Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Gender Distribution Per Station
				</h2>
				<button
					onClick={() =>
						fetchData("/staff/gender-distribution", setGenderDistribution)
					}
					className='mt-2 px-4 py-2 bg-purple-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{genderDistribution.map((data, index) => (
						<li key={index}>
							{data.station_name} - {data.gender}: {data.total_staff}
						</li>
					))}
				</ul>
			</div>

			{/* Stations Where All Staff Earn Above a Certain Salary */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Stations With All Staff Earning Above $50k
				</h2>
				<button
					onClick={() =>
						fetchData("/staff/stations-with-high-salary", setStationsHighSalary)
					}
					className='mt-2 px-4 py-2 bg-red-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{stationsHighSalary.map((station) => (
						<li key={station.station_id}>{station.station_name}</li>
					))}
				</ul>
			</div>

			{/* Youngest and Oldest Staff Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Youngest & Oldest Staff Per Station
				</h2>
				<button
					onClick={() =>
						fetchData("/staff/age-extremes-per-station", setAgeExtremes)
					}
					className='mt-2 px-4 py-2 bg-orange-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{ageExtremes.map((station) => (
						<li key={station.station_name}>
							{station.station_name} - Youngest: {station.youngest_age}, Oldest:{" "}
							{station.oldest_age}
						</li>
					))}
				</ul>
			</div>

			{/* Highest Paid Staff at the Busiest Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Highest Paid Staff at Busiest Station
				</h2>
				<button
					onClick={() =>
						fetchData("/staff/highest-paid-at-busiest-station", (data) =>
							setHighestPaidAtBusiest(data[0] || null)
						)
					}
					className='mt-2 px-4 py-2 bg-indigo-500 text-white rounded'
				>
					Load Data
				</button>
				{highestPaidAtBusiest && (
					<p>
						{highestPaidAtBusiest.name} - {highestPaidAtBusiest.station_name} -
						${highestPaidAtBusiest.salary}
					</p>
				)}
			</div>

			{/* Staff Above a Certain Age */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Staff Above Age 30</h2>
				<button
					onClick={() => fetchData("/staff/above-age?age=30", setStaffAboveAge)}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{staffAboveAge.map((s) => (
						<li key={s.id}>
							{s.name} ({s.age} yrs) - {s.designation}
						</li>
					))}
				</ul>
			</div>

			{/* Male Staff Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Male Staff Per Station</h2>
				<button
					onClick={() =>
						fetchData("/staff/male-per-station", setMaleStaffPerStation)
					}
					className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{maleStaffPerStation.map((station) => (
						<li key={station.station_name}>
							{station.station_name}: {station.total_male_staff}
						</li>
					))}
				</ul>
			</div>

			{/* Female Staff Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Female Staff Per Station</h2>
				<button
					onClick={() =>
						fetchData("/staff/female-per-station", setFemaleStaffPerStation)
					}
					className='mt-2 px-4 py-2 bg-pink-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{femaleStaffPerStation.map((station) => (
						<li key={station.station_name}>
							{station.station_name}: {station.total_female_staff}
						</li>
					))}
				</ul>
			</div>

			{/* Male Staff Count Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Male Staff Count Per Station</h2>
				<button
					onClick={() =>
						fetchData("/staff/count-male-per-station", setMaleCountPerStation)
					}
					className='mt-2 px-4 py-2 bg-indigo-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{maleCountPerStation.map((station) => (
						<li key={station.station_name}>
							{station.station_name}: {station.male_staff_count}
						</li>
					))}
				</ul>
			</div>

			{/* Female Staff Count Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>
					Female Staff Count Per Station
				</h2>
				<button
					onClick={() =>
						fetchData(
							"/staff/count-female-per-station",
							setFemaleCountPerStation
						)
					}
					className='mt-2 px-4 py-2 bg-purple-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{femaleCountPerStation.map((station) => (
						<li key={station.station_name}>
							{station.station_name}: {station.female_staff_count}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
