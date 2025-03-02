"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { getUser, logout as handleLogout } from "../lib/auth";
import { addScaleCorrector } from "framer-motion";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const userData = await getUser();
			console.log(`userData found from lib/auth is : `, userData);
			setUser(userData);
			setLoading(false);
		};

		fetchUser();
	}, [user]);

	const logout = () => {
		handleLogout();
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, setUser, logout, loading }}>
			{loading ? <p>Loading...</p> : children}
		</AuthContext.Provider>
	);
};
