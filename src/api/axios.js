import axios from 'axios';

// gets api url from .env file
const BASE_URL = process.env.REACT_APP_API_URL;

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});  