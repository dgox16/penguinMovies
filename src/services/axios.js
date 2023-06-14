import axios from "axios";

const instance = axios.create({
	baseURL: "https://apimovies-production.up.railway.app/api",
	withCredentials: true,
});

export default instance;
