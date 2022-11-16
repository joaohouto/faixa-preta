import axios from "axios";

const api = axios.create({
	baseURL: "https://faixapreta.fly.dev",
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
		"Access-Control-Allow-Origin": "*",
	},
});

export default api;
