"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

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
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h2 className='text-2xl'>Welcome, {auth.user.name}!</h2>
			<p>Email: {auth.user.email}</p>
			<button onClick={() => auth.logout()}>Logout</button>
		</div>
	);
}
