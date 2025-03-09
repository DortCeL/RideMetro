"use client";

import { createContext, useState, useEffect } from "react";
import {
	getCurrentUser,
	loginUser,
	logoutUser,
	registerUser,
} from "@/lib/api/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const savedToken = localStorage.getItem("token");
		if (savedToken) {
			setToken(savedToken);
			fetchUser(savedToken);
		} else {
			setLoading(false);
		}
	}, []);

	const fetchUser = async (savedToken) => {
		try {
			const userData = await getCurrentUser(savedToken);
			setUser(userData);
		} catch (error) {
			logout();
		} finally {
			setLoading(false);
		}
	};

	const login = async (email, password) => {
		const data = await loginUser({ email, password });
		setToken(data.token);
		setUser(data.user);
		localStorage.setItem("token", data.token);
	};

	const register = async (name, email, password, age) => {
		const data = await registerUser({ name, email, password, age });
		setToken(data.token);
		setUser(data.user);
		localStorage.setItem("token", data.token);
	};

	const logout = async () => {
		if (token) {
			await logoutUser(token);
		}
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider
			value={{ user, token, loading, login, register, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
