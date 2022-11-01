import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

try {
    axios.defaults.headers.common = {
        Authorization: `bearer ${
        localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || undefined) : null
    }`}
} catch (error) { }

export default axios