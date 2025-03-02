import api, { setAuthToken } from "./api";
import Cookies from "js-cookie";

// Register User
export const register = async (userData) => {
	const response = await api.post("/register", userData);
	setAuthToken(response.data.token);
	return response.data;
};

// Login User
export const login = async (credentials) => {
	const response = await api.post("/login", credentials);
	setAuthToken(response.data.token);
	return response.data;
};

// Logout User
export const logout = () => {
	setAuthToken(null);
};

// Get Authenticated User
export const getUser = async () => {
	try {
		const token = Cookies.get("token"); // Get token from cookies
		console.log(`token is ${token}`);

		if (!token) {
			return null; // If there's no token, return null (no user)
		}

		// Now use the token to fetch user data
		const response = await api.get("/profile", {
			headers: {
				Authorization: `Bearer ${token}`, // Send token as Authorization header
			},
		});

		return response.data; // Return the user data from the API
	} catch (error) {
		console.error("Error fetching user:", error);
		return null; // In case of an error, return null
	}
};
