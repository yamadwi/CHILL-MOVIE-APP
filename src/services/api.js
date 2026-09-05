import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getContents = () => API.get("/contents");

export const getMyList = () => API.get("/my-list");

export const addToMylist = (contentId) =>
    API.post("/my-list", {
        contentId,
    });

export const deleteFromMyList = (id) =>
    API.delete(`/my-list/${id}`);

export default API; 