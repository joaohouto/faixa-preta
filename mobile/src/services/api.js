import axios from "axios";

const api = axios.create({
	baseURL: "https://faixapreta.fly.dev",
});

export default api;
