"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Profile() {
	const { user, logout, loading } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			console.log(user);
			router.push("/login");
		}
	}, [loading, user]);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h2>Welcome, {user?.name}!</h2>
			<p>Email: {user?.email}</p>
			<button
				onClick={() => {
					logout();
					router.push("/login");
				}}
			>
				Logout
			</button>
		</div>
	);
}
