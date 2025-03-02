"use client";
import { useEffect, useState } from "react";
import {
	fetchUsers,
	fetchSortedUsers,
	fetchUsersByAgeRange,
	fetchUsersWithMinBalance,
	searchUsers,
} from "@/services/userService";

import { TicketDashboard } from "./TicketDashboard";

export default function UserTable() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [minAge, setMinAge] = useState("");
	const [maxAge, setMaxAge] = useState("");
	const [minBalance, setMinBalance] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	// Fetch users on mount
	useEffect(() => {
		fetchUsers()
			.then(setUsers)
			.catch((err) => setError("Failed to fetch users"))
			.finally(() => setLoading(false));
	}, []);

	// Handle sorting by balance
	const handleSort = async (orderBy) => {
		const sortedUsers = await fetchSortedUsers(orderBy, "DESC");
		setUsers(sortedUsers);
	};

	// Handle filtering by age range
	const handleAgeFilter = async () => {
		if (minAge && maxAge) {
			const filteredUsers = await fetchUsersByAgeRange(
				parseInt(minAge),
				parseInt(maxAge)
			);

			console.log(filteredUsers);
			setUsers(filteredUsers);
		} else {
			setError("Please provide both minimum and maximum age");
		}
	};

	// Handle filtering by minimum balance
	const handleBalanceFilter = async () => {
		if (minBalance) {
			const filteredUsers = await fetchUsersWithMinBalance(
				parseInt(minBalance)
			);
			setUsers(filteredUsers);
		} else {
			setError("Please provide a minimum balance");
		}
	};

	// Handle searching users
	const handleSearch = async () => {
		if (searchQuery) {
			const searchedUsers = await searchUsers(searchQuery);
			setUsers(searchedUsers);
		} else {
			setError("Please provide a search query");
		}
	};

	return (
		<div className='mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Users</h1>

			{/* Error handling */}
			{error && <p className='text-red-500'>{error}</p>}

			{/* Sort and Filter buttons */}
			<div className='mb-4 space-x-4'>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded'
					onClick={() => handleSort("balance")}
				>
					Sort by Balance
				</button>

				{/* Age Filter */}
				<input
					type='number'
					placeholder='Min Age'
					value={minAge}
					onChange={(e) => setMinAge(e.target.value)}
					className='px-4 py-2 border rounded'
				/>
				<input
					type='number'
					placeholder='Max Age'
					value={maxAge}
					onChange={(e) => setMaxAge(e.target.value)}
					className='px-4 py-2 border rounded'
				/>
				<button
					className='bg-green-500 text-white px-4 py-2 rounded'
					onClick={handleAgeFilter}
				>
					Filter by Age
				</button>

				{/* Balance Filter */}
				<input
					type='number'
					placeholder='Min Balance'
					value={minBalance}
					onChange={(e) => setMinBalance(e.target.value)}
					className='px-4 py-2 border rounded'
				/>
				<button
					className='bg-yellow-500 text-white px-4 py-2 rounded'
					onClick={handleBalanceFilter}
				>
					Filter by Balance
				</button>

				{/* Search */}
				<input
					type='text'
					placeholder='Search'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className='px-4 py-2 border rounded'
				/>
				<button
					className='bg-purple-500 text-white px-4 py-2 rounded'
					onClick={handleSearch}
				>
					Search Users
				</button>
			</div>

			{/* Table */}
			{loading ? (
				<p className='text-blue-500'>Loading...</p>
			) : users.length === 0 ? (
				<p className='text-gray-500'>No users found.</p>
			) : (
				<table className='w-full border-collapse border border-gray-300'>
					<thead>
						<tr className='bg-gray-100'>
							<th className='border p-2'>ID</th>
							<th className='border p-2'>Name</th>
							<th className='border p-2'>Email</th>
							<th className='border p-2'>Age</th>
							<th className='border p-2'>Balance</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id} className='text-center'>
								<td className='border p-2'>{user.id}</td>
								<td className='border p-2'>{user.name}</td>
								<td className='border p-2'>{user.email}</td>
								<td className='border p-2'>{user.age}</td>
								<td className='border p-2'>৳ {user.balance}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			<TicketDashboard />
		</div>
	);
}
