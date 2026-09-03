import axios from "axios";

const API = axios.create({
    baseURL: "https://6a8bd0a063f113bab0b79661.mockapi.io"
});

export const getContents = () => API.get("/contents");

export default API; 