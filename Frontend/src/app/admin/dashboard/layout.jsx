"use client";

import React from "react";
import { AdminHeader } from "@/sections/Admin/AdminHeader";
import { AdminSidebar } from "@/sections/Admin/AdminSidebar";

export default function DashboardLayout({ children }) {
	return (
		<>
			<AdminHeader />
			<div className='flex flex-row min-h-screen'>
				{/* Sidebar */}
				<AdminSidebar />

				{/* Main Content */}
				<div className='flex-1 p-4 bg-gray-100'>{children}</div>
			</div>
		</>
	);
}
