"use client";

import React, { useEffect, useState } from "react";
import { AdminHeader } from "@/sections/Admin/AdminHeader";
import { AdminSidebar } from "@/sections/Admin/AdminSidebar";
import { UsersList } from "@/sections/Admin/UsersList";

export default function Page() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch("http://localhost:8000/api/users");
				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}
				const data = await response.json();
				setUsers(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return (
		<>
			<AdminHeader />
			<div className='flex flex-row'>
				{/* Sidebar */}
				<AdminSidebar />

				{/* Main Content */}
				<div className='flex-1 flex flex-col'>
					{/* Content Area */}
					<div className='flex-1 p-6 bg-gray-100'>
						<UsersList users={users} loading={loading} error={error} />
					</div>
				</div>
			</div>
		</>
	);
}
