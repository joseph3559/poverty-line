import React, {useState} from "react";
import picsignup from "../../assets/signup.png"
import { Navigate, Link } from 'react-router-dom'
import axios from '../../api/axios'



export default function Login() {
  const [errors, setErrors] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('/auth/login', formData)
      .then((response) => {
        setAuthenticated(true);
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('username', JSON.stringify(response.data.username))
        localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
        localStorage.setItem('authenticated', JSON.stringify(true))        
      }).catch(error => {
        // Handle error
        setErrors(error.response.data.error);
    });      
  }

  return (
    <>
      {
      authenticated ? (
          <Navigate to="/admin" />          
        ) : (            
        <div className="flex flex-row items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          
        <div className="sm:max-w-md mr-10 ">
        <a href="/">
          <h3 className="text-8xl font-bold text-black-600">Poverty-</h3>

          <h3 className="text-8xl text-end font-bold text-green-600">Line</h3>
        </a>
        <img src={picsignup} alt="/" />
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-lg sm:max-w-sm sm:rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Admin
          </h1>
          
          <div className="please-log-in" style={{color: "red", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5px"}}>
            <p>{errors}</p>
          </div>
        <form className="login-form mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              email
            </label>
            <input
             value={formData?.email}
             onChange={handleChange}
             type="email"
             placeholder="Email"
             id="email"
                      name="email"
                      required
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
                  value={formData?.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  id="password"
                      name="password"
                      required
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="/" className="text-xs text-green-600 hover:underline">
            Forget Password? Please contact your system experts!
          </a>
          <div className="mt-6">
            <button type="submit" onClick={handleSubmit}
            className=" formButton w-full px-4 py-2 tracking-wide text-black
             transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>)}
    </>
    
  );
}