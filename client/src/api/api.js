import axios from "axios";

const api = axios.create({
    baseURL: "https://airbnbrepo.onrender.com/api",
});

export default api;