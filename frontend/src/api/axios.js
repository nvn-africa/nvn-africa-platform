import axios from 'axios';

const api = axios.create({
  // Use environment variables for the URL
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  // This helps if you are dealing with cookies/sessions
  withCredentials: true 
});

export default api;