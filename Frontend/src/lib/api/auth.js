export const API_BASE_URL = "http://127.0.0.1:8000/api"; // Change if needed

export const registerUser = async (userData) => {
	const res = await fetch(`${API_BASE_URL}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userData),
	});

	if (!res.ok) throw new Error("Registration failed!");
	return res.json();
};

export const loginUser = async (credentials) => {
	const res = await fetch(`${API_BASE_URL}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(credentials),
	});

	if (!res.ok) throw new Error("Invalid credentials!");
	return res.json();
};

export const logoutUser = async (token) => {
	const res = await fetch(`${API_BASE_URL}/logout`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) throw new Error("Logout failed!");
	return res.json();
};

export const getCurrentUser = async (token) => {
	const res = await fetch(`${API_BASE_URL}/user`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) throw new Error("Failed to fetch user!");
	return res.json();
};
