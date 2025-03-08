"use client";

import Image from "next/image";
import loginImage from "@/assets/loginpageimage.jpg";
import Link from "next/link";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
	const auth = useContext(AuthContext);
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await auth?.login(email, password);
			router.push("/profile");
		} catch (error) {
			alert("Login failed!");
		}
	};

	return (
		<div className='flex h-screen'>
			{/* Left Section */}
			<div className='w-1/2 relative hidden md:block'>
				<Image
					src={loginImage} // Replace with your image path
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

				<form className='w-3/4'>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							E-mail
						</label>
						<input
							type='text'
							id='email'
							name='email'
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your email address'
							onChange={(e) => setEmail(e.target.value)}
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
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button
						onClick={handleLogin}
						className='btn btn-primary w-1/2 block mx-auto'
					>
						Login
					</button>
					<div className='flex flex-row justify-center items-center gap-2'>
						<p className='inline-flex'> {"don't have an account?"} </p>
						<Link
							href={"/signup"}
							className='my-5 text-blue-800 underline inline-flex text-center'
						>
							Sign Up
						</Link>
					</div>
					<Link
						href={"/"}
						className='my-5 text-green-700 underline block text-center'
					>
						Go back to Home
					</Link>
				</form>
			</div>
		</div>
	);
}
