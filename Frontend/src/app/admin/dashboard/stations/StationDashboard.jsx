"use client";

import { useState } from "react";

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

export const StationDashboard = () => {
	const [stations, setStations] = useState([]);
	const [openStations, setOpenStations] = useState([]);
	const [closedStations, setClosedStations] = useState([]);

	return (
		<div className='p-6 space-y-6'>
			<h1 className='text-2xl font-bold'>Station Dashboard</h1>

			{/* All Stations */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>All Stations</h2>
				<button
					onClick={() => fetchData("/stations", setStations)}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{stations.map((station) => (
						<li key={station.station_id}>
							{station.station_name} - {station.state}
						</li>
					))}
				</ul>
			</div>

			{/* Open Stations */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold text-green-600'>
					Open Stations ✅
				</h2>
				<button
					onClick={() => fetchData("/stations/open", setOpenStations)}
					className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{openStations.length > 0 ? (
						openStations.map((station) => (
							<li key={station.station_id}>{station.station_name}</li>
						))
					) : (
						<p className='text-gray-500'>No open stations found.</p>
					)}
				</ul>
			</div>

			{/* Closed Stations */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold text-red-600'>
					Closed Stations ❌
				</h2>
				<button
					onClick={() => fetchData("/stations/closed", setClosedStations)}
					className='mt-2 px-4 py-2 bg-red-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{closedStations.length > 0 ? (
						closedStations.map((station) => (
							<li key={station.station_id}>{station.station_name}</li>
						))
					) : (
						<p className='text-gray-500'>No closed stations found.</p>
					)}
				</ul>
			</div>
		</div>
	);
};
