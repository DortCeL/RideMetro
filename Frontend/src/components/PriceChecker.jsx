"use client";
import { useState, useEffect } from "react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const PriceChecker = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [price, setPrice] = useState("");

	const locations = [
		"Uttara North",
		"Uttara Center",
		"Uttara South",
		"Pallabi",
		"Mirpur-11",
		"Mirpur-10",
		"Kazipara",
		"Shewrapara",
		"Agargaon",
		"Bijoy Sarani",
		"Farmgate",
		"Karwan Bazar",
		"Shahbagh",
		"Dhaka University",
		"Bangladesh Secretariat",
		"Motijheel",
		"Kamalapur",
	];

	const calculatePrice = async (source, destination) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/tickets/price?source=${source}&destination=${destination}`
			);

			const text = await response.text(); // Get raw response
			console.log("Raw response:", text); // Log raw response

			const data = JSON.parse(text); // Parse JSON manually
			console.log("Parsed JSON:", data); // Log parsed JSON

			if (!response.ok) {
				throw new Error(data.error || "Failed to fetch price");
			}

			setPrice(text);
		} catch (error) {
			console.error("Error fetching price:", error.message);
		}
	};

	return (
		<div className='bg-transparent border-1 border-slate-400 shadow-xl rounded-lg p-8 w-full max-w-md'>
			<h1 className='text-2xl font-bold text-gray-800 text-center mb-6'>
				Check ticket prices
			</h1>
			<div className='space-y-4'>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>From:</label>

					<Select
						value={from}
						onValueChange={(value) => setFrom(value)} // Use the value directly
					>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Select a location' />
						</SelectTrigger>
						<SelectContent>
							{locations.map((location) => (
								<SelectItem key={location} value={location}>
									{location}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>To:</label>
					<Select
						value={to}
						onValueChange={(value) => setTo(value)} // Use the value directly
					>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Select a location' />
						</SelectTrigger>
						<SelectContent>
							{locations.map((location) => (
								<SelectItem key={location} value={location}>
									{location}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<button
					className='w-full bg-black text-white py-3 rounded-lg font-semibold transition duration-300'
					onClick={() => calculatePrice(from, to)} // Pass source & destination
				>
					Check Price
				</button>

				{
					<div className='mt-4 text-center text-lg font-medium'>
						{price === "Invalid selection" ? (
							<p className='text-red-500'>
								Please select two different locations.
							</p>
						) : (
							<p>
								Ticket Price: <span className='text-green-500'>৳ {price}</span>
							</p>
						)}
					</div>
				}
			</div>
		</div>
	);
};
