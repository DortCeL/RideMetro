"use client";

import { useState } from "react";
import Image from "next/image";
import loginImage from "@/assets/loginpageimage.jpg";
import Link from "next/link";

function Page() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		age: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8000/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				alert("Account created successfully!");
			} else {
				alert(data.message || "Registration failed");
			}
		} catch (error) {
			console.error("Error registering:", error);
			alert("Something went wrong");
		}
	};

	return (
		<div className='flex h-screen'>
			{/* Left Section */}
			<div className='w-1/2 relative hidden md:block'>
				<Image
					src={loginImage}
					alt='Login Image'
					layout='fill'
					objectFit='cover'
				/>
			</div>

			{/* Right Section */}
			<div className='md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 p-8'>
				<h1 className='text-5xl font-extrabold mb-8 tracking-tighter'>
					RideMetro
				</h1>

				<form className='w-3/4' onSubmit={handleSubmit}>
					<div className='mb-6'>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your full name'
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							E-mail
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your email address'
							required
						/>
					</div>

					<div className='mb-6'>
						<label
							htmlFor='age'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Age
						</label>
						<input
							type='number'
							id='age'
							name='age'
							value={formData.age}
							onChange={handleChange}
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your age'
							required
						/>
					</div>

					<div className='mb-6'>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your password'
							required
						/>
					</div>

					<button type='submit' className='btn btn-primary w-1/2 block mx-auto'>
						Create Account
					</button>

					<div className='flex flex-row justify-center items-center gap-2'>
						<p className='inline-flex'>Already have an account?</p>
						<Link
							href='/login'
							className='text-blue-800 my-5 underline inline-flex text-center'
						>
							Log In
						</Link>
					</div>

					<Link href='/' className='text-green-700 underline block text-center'>
						Go back to Home
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Page;
