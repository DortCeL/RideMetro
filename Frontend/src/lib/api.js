import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:8000/api"; // Laravel API Base URL

const api = axios.create({
	baseURL: API_URL,
});

export const setAuthToken = (token) => {
	if (token) {
		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		Cookies.set("token", token, { expires: 7 }); // Store token in cookies
	} else {
		delete api.defaults.headers.common["Authorization"];
		Cookies.remove("token");
	}
};

export default api;
