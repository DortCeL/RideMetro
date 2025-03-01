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

export const TicketDashboard = () => {
	const [userTickets, setUserTickets] = useState([]);
	const [usersTicketCount, setUsersTicketCount] = useState([]);
	const [usersWithTickets, setUsersWithTickets] = useState([]);
	const [topSpender, setTopSpender] = useState(null);
	const [usersWithoutTickets, setUsersWithoutTickets] = useState([]);
	const [popularDestination, setPopularDestination] = useState(null);

	return (
		<div className='p-6 space-y-6'>
			<h1 className='text-2xl font-bold'>Ticket Dashboard</h1>

			{/* Users Ticket Count */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Users Ticket Count</h2>
				<button
					onClick={() => fetchData("/users-ticket-count", setUsersTicketCount)}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{usersTicketCount.map((user) => (
						<li key={user.user_id}>
							{user.name} - {user.total_tickets} tickets
						</li>
					))}
				</ul>
			</div>

			{/* Users with Tickets */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Users With Tickets</h2>
				<button
					onClick={() => fetchData("/users-with-tickets", setUsersWithTickets)}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{usersWithTickets.map((ticket) => (
						<li key={ticket.ticket_id}>
							{ticket.name} - {ticket.destination} on {ticket.travel_date}
						</li>
					))}
				</ul>
			</div>

			{/* Top Spender */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Top Spender</h2>
				<button
					onClick={() =>
						fetchData("/top-spender", (data) => setTopSpender(data[0] || null))
					}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				{topSpender && (
					<p>
						{topSpender.name} spent ${topSpender.total_spent}
					</p>
				)}
			</div>

			{/* Users Without Tickets */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Users Without Tickets</h2>
				<button
					onClick={() =>
						fetchData("/users-without-tickets", setUsersWithoutTickets)
					}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				<ul>
					{usersWithoutTickets.map((user) => (
						<li key={user.user_id}>{user.name}</li>
					))}
				</ul>
			</div>

			{/* Popular Destination */}
			<div className='border p-4 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold'>Most Popular Destination</h2>
				<button
					onClick={() =>
						fetchData("/popular-destination", (data) =>
							setPopularDestination(data[0] || null)
						)
					}
					className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load Data
				</button>
				{popularDestination && (
					<p>
						{popularDestination.destination} -{" "}
						{popularDestination.total_tickets} tickets sold
					</p>
				)}
			</div>
		</div>
	);
};
