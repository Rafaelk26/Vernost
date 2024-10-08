// /src/api/api.js
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8888",
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' } 
});

