// pages/complaints.js
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

export const ComplaintDashboard = () => {
	const [complaints, setComplaints] = useState([]);
	const [complaintCountPerStation, setComplaintCountPerStation] = useState([]);
	const [resolvedComplaints, setResolvedComplaints] = useState([]);
	const [pendingComplaints, setPendingComplaints] = useState([]);
	const [resolvedCountPerStation, setResolvedCountPerStation] = useState([]);
	const [pendingCountPerStation, setPendingCountPerStation] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	// New state variables for additional sections
	const [userComplaints, setUserComplaints] = useState([]);
	const [stationComplaints, setStationComplaints] = useState([]);
	const [userComplaintCounts, setUserComplaintCounts] = useState([]);
	const [stationComplaintCounts, setStationComplaintCounts] = useState([]);

	// Fetch complaints when the page loads
	const loadComplaints = () => {
		fetchData("/complaints", setComplaints);
	};

	// Fetch complaints on component mount
	useEffect(() => {
		loadComplaints();
	}, []);

	// Handle the toggle of complaint status (pending or resolved)
	const toggleStatus = async (complaint_id) => {
		const res = await fetch(
			`http://localhost:8000/api/complaints/toggle-status/${complaint_id}`,
			{
				method: "PUT",
			}
		);

		const data = await res.json();
		if (res.ok) {
			// Update the local state to reflect the change
			setComplaints((prevComplaints) =>
				prevComplaints.map((complaint) =>
					complaint.complaint_id === complaint_id
						? { ...complaint, status: data.message.split(" ")[4] } // Extract new status from message
						: complaint
				)
			);
		} else {
			alert("Error toggling complaint status");
		}
	};

	return (
		<div className='p-6 space-y-6'>
			<h1 className='text-2xl font-bold'>Complaint Dashboard</h1>

			{/* All Complaints */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold my-5 text-red-600'>
					All Complaints
				</h2>
				<ul>
					{complaints.length > 0 ? (
						complaints.map((complaint) => (
							<li key={complaint.complaint_id} className='border-b py-2'>
								<strong>{complaint.complain_msg}</strong> - Status:{" "}
								<strong>{complaint.status}</strong> - Station:{" "}
								<strong>{complaint.station_name}</strong>
								<button
									className='ml-4 px-3 py-1 bg-yellow-500 text-white rounded'
									onClick={() => toggleStatus(complaint.complaint_id)}
								>
									{complaint.status === "pending"
										? "Resolve"
										: "Set to Pending"}
								</button>
							</li>
						))
					) : (
						<p>No complaints available.</p>
					)}
				</ul>
			</div>

			{/* Search Complaints by Message */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Search Complaints by Message</h2>
				<input
					type='text'
					placeholder='Enter message'
					className='border p-2 w-full'
					onChange={(e) =>
						fetchData(
							`/complaints/search?message=${e.target.value}`,
							setSearchResults
						)
					}
				/>
				<ul>
					{searchResults.map((complaint) => (
						<li key={complaint.complaint_id}>
							{complaint.complain_msg} - {complaint.station_name}
						</li>
					))}
				</ul>
			</div>

			{/* Resolved Complaints */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Resolved Complaints</h2>
				<button
					onClick={() =>
						fetchData("/complaints/resolved", setResolvedComplaints)
					}
					className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{resolvedComplaints.map((complaint) => (
						<li key={complaint.complaint_id}>
							{complaint.complain_msg} - {complaint.station_name}
						</li>
					))}
				</ul>
			</div>

			{/* Pending Complaints */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Pending Complaints</h2>
				<button
					onClick={() => fetchData("/complaints/pending", setPendingComplaints)}
					className='mt-2 px-4 py-2 bg-red-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{pendingComplaints.map((complaint) => (
						<li key={complaint.complaint_id}>
							{complaint.complain_msg} - {complaint.station_name}
						</li>
					))}
				</ul>
			</div>

			{/* Resolved Complaint Count Per Station */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Complaint Count per station</h2>
				<button
					onClick={() =>
						fetchData(
							"/complaint-status-count/stations",
							setResolvedCountPerStation
						)
					}
					className='mt-2 px-4 py-2 bg-yellow-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{resolvedCountPerStation.map((station) => (
						<li key={station.station_id}>
							Station : {station.station_name} <br /> Resolved Complaints :
							{"      "}
							{station.resolved_count} <br /> Pending Complaints :{"       "}
							{station.pending_count}
							<br />
							<br />
						</li>
					))}
				</ul>
			</div>

			{/* New Section: User Complaints */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>User Complaints</h2>
				<button
					onClick={() => fetchData("/user-complaints", setUserComplaints)}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load User Complaints
				</button>
				<ul>
					{userComplaints.map((complaint) => (
						<li key={complaint.complaint_id} className='border-b py-2'>
							<strong>User:</strong> {complaint.user_name} ({complaint.email}){" "}
							<br />
							<strong>Complaint:</strong> {complaint.complain_msg} <br />
							<strong>Status:</strong> {complaint.status} <br />
							<strong>Created At:</strong>{" "}
							{new Date(complaint.created_at).toLocaleString()}
						</li>
					))}
				</ul>
			</div>

			{/* New Section: Station Complaints */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Station Complaints</h2>
				<button
					onClick={() => fetchData("/station-complaints", setStationComplaints)}
					className='mt-2 px-4 py-2 bg-green-500 text-white rounded'
				>
					Load Station Complaints
				</button>
				<ul>
					{stationComplaints.map((complaint) => (
						<li key={complaint.complaint_id} className='border-b py-2'>
							<strong>Station:</strong> {complaint.station_name} (
							{complaint.state}) <br />
							<strong>Complaint:</strong> {complaint.complain_msg} <br />
							<strong>Status:</strong> {complaint.status} <br />
							<strong>Created At:</strong>{" "}
							{new Date(complaint.created_at).toLocaleString()}
						</li>
					))}
				</ul>
			</div>

			{/* New Section: Complaint Count by Users */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Complaint Count by Users</h2>
				<button
					onClick={() =>
						fetchData("/complaint-count/users", setUserComplaintCounts)
					}
					className='mt-2 px-4 py-2 bg-purple-500 text-white rounded'
				>
					Load User Complaint Counts
				</button>
				<ul>
					{userComplaintCounts.map((user) => (
						<li key={user.user_id} className='border-b py-2'>
							<strong>User:</strong> {user.user_name} ({user.email}) <br />
							<strong>Total Complaints:</strong> {user.total_complaints}
						</li>
					))}
				</ul>
			</div>

			{/* New Section: Complaint Count by Stations */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Complaint Count by Stations</h2>
				<button
					onClick={() =>
						fetchData("/complaint-count/stations", setStationComplaintCounts)
					}
					className='mt-2 px-4 py-2 bg-indigo-500 text-white rounded'
				>
					Load Station Complaint Counts
				</button>
				<ul>
					{stationComplaintCounts.map((station) => (
						<li key={station.station_id} className='border-b py-2'>
							<strong>Station:</strong> {station.station_name} ({station.state}){" "}
							<br />
							<strong>Total Complaints:</strong> {station.total_complaints}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
