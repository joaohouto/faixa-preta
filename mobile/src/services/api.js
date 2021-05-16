import axios from "axios";

const api = axios.create({
	baseURL: "https://faixa-preta.herokuapp.com",
});

export default api;
