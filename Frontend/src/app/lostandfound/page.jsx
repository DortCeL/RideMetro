// pages/lost-and-found.js
"use client";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import React, { useState } from "react";

const LostAndFound = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			name: "Black Wallet",
			description: "Found near ticket counter, contains ID and some cash.",
			date: "2025-01-20",
		},
		{
			id: 2,
			name: "Red Backpack",
			description: "Found in coach B, contains books and a water bottle.",
			date: "2025-01-18",
		},
		{
			id: 3,
			name: "Silver Bracelet",
			description: "Found on platform 3, engraved with initials J.K.",
			date: "2025-01-15",
		},
	]);

	return (
		<>
			<Header />

			<div className='min-h-screen bg-gray-100 py-10'>
				<div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
					<header className='bg-blue-500 text-white text-center py-6'>
						<h1 className='text-2xl font-bold'>Lost and Found</h1>
						<p className='mt-2'>
							Browse through the items that have been reported as lost or found.
						</p>
					</header>

					<main className='p-6'>
						{items.length > 0 ? (
							<ul className='divide-y divide-gray-200'>
								{items.map((item) => (
									<li
										key={item.id}
										className='py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'
									>
										<div className='text-left'>
											<h2 className='text-lg font-semibold text-gray-800'>
												{item.name}
											</h2>
											<p className='text-sm text-gray-600 mt-1'>
												{item.description}
											</p>
										</div>
										<p className='text-sm text-gray-500 mt-2 sm:mt-0'>
											Reported on: {item.date}
										</p>
									</li>
								))}
							</ul>
						) : (
							<p className='text-center text-gray-600'>
								No items found in the Lost and Found database at the moment.
							</p>
						)}
					</main>

					<footer className='bg-gray-200 text-center py-4 text-sm text-gray-600'>
						<p>&copy; 2025 MRT Corporation. All rights reserved.</p>
					</footer>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LostAndFound;
