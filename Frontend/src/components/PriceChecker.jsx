"use client";
import { useState } from "react";

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
	const [price, setPrice] = useState(null);

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

	const calculatePrice = () => {
		if (from && to && from !== to) {
			const basePrice = 20; // Base price
			const randomFactor = Math.random() * 10;
			setPrice((basePrice + randomFactor).toFixed(0));
		} else {
			setPrice("Invalid selection");
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

					{/* <select
						className='w-full p-3 border rounded-full focus:outline-none'
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					>
						<option value=''>Select a location</option>
						{locations.map((location) => (
							<option key={location} value={location}>
								{location}
							</option>
						))}
					</select> */}
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
					onClick={calculatePrice}
				>
					Check Price
				</button>
				{price && (
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
				)}
			</div>
		</div>
	);
};
