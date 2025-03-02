import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

// Fetch all users
export const fetchUsers = async () => {
	const response = await axios.get(`${API_URL}/users`);
	return response.data;
};

// Create a user
export const createUser = async (userData) => {
	const response = await axios.post(`${API_URL}/users`, userData);
	return response.data;
};

// Fetch sorted users by given field
export const fetchSortedUsers = async (
	orderBy = "balance",
	orderDirection = "DESC"
) => {
	const response = await axios.get(
		`${API_URL}/users/sorted?orderBy=${orderBy}&orderDirection=${orderDirection}`
	);
	return response.data;
};

// Fetch users by age range
export const fetchUsersByAgeRange = async (minAge, maxAge) => {
	const response = await axios.get(
		`${API_URL}/users/age-range?min_age=${minAge}&max_age=${maxAge}`
	);
	return response.data;
};

// Fetch users with a minimum balance
export const fetchUsersWithMinBalance = async (minBalance) => {
	const response = await axios.get(
		`${API_URL}/users/min-balance?min_balance=${minBalance}`
	);
	return response.data;
};

// Search users by a keyword
export const searchUsers = async (searchQuery) => {
	const response = await axios.get(
		`${API_URL}/users/search?keyword=${searchQuery}`
	);
	return response.data;
};
