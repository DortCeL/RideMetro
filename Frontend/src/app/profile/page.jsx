"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/sections/Header";

export default function ProfilePage() {
	const auth = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (!auth.loading && !auth.user) {
			router.push("/login");
		}
	}, [auth.loading, auth.user, router]);

	if (auth.loading) return <p>Loading...</p>;

	if (!auth.user) return null; // Prevents flickering before redirect

	return (
		<>
			<Header />
			<div className='flex flex-col items-center min-h-screen bg-gray-100 py-10'>
				{/* Cover Photo */}
				<div className='w-full max-w-3xl h-48 bg-gray-300 rounded-lg overflow-hidden'>
					<img
						src='https://source.unsplash.com/random/800x300'
						alt='Cover Photo'
						className='w-full h-full object-cover'
						loading='lazy'
					/>
				</div>

				{/* Profile Photo & Info */}
				<div className='relative w-full max-w-3xl -mt-12 flex flex-col items-center'>
					<div className='w-32 h-32 bg-gray-400 rounded-full overflow-hidden border-4 border-white shadow-lg'>
						<img
							src='https://source.unsplash.com/random/200x200'
							alt='Profile Photo'
							className='w-full h-full object-cover'
							loading='lazy'
						/>
					</div>

					<h2 className='text-2xl font-bold mt-2'>{auth.user.name}</h2>
					<p className='text-gray-600'>{auth.user.email}</p>
					<p className='text-gray-600'>Age: {auth.user.age}</p>
					<p className='text-gray-600'>Balance: ${auth.user.balance}</p>

					{/* Logout Button */}
					<button
						onClick={() => auth.logout()}
						className='mt-4 px-4 py-2 border-black border-dotted border-2 text-black rounded-lg shadow hover:bg-blue-700 transition'
					>
						Logout
					</button>
				</div>
			</div>
		</>
	);
}
