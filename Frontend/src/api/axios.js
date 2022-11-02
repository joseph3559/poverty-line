import axios from 'axios';
// import { json } from 'react-router-dom';

axios.defaults.baseURL = 'https://powerful-dusk-77185.herokuapp.com';

try {
    axios.defaults.headers.common = {
        Authorization: `bearer ${
        localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || undefined) : null
    }`}
} catch (error) { }

export default axios