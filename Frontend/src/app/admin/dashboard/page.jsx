"use client";

import React, { useEffect, useState } from "react";
import { AdminHeader } from "@/sections/Admin/AdminHeader";
import { AdminSidebar } from "@/sections/Admin/AdminSidebar";
import { UsersList } from "@/sections/Admin/UsersList";

export default function Page() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	return (
		<>
			<AdminHeader />
			<div className='flex flex-row'>
				{/* Sidebar */}
				<AdminSidebar />

				{/* Main Content */}
				<div className='flex-1 flex flex-col bg-gray-100'>
					{/* Content Area */}
					<h2 className='text-5xl text-center tracking-tighter py-5'>
						Welcome to Admin Dashboard!{" "}
					</h2>
				</div>
			</div>
		</>
	);
}
