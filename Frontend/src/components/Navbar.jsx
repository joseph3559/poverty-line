import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [auth, setAuthenticated] = useState(false)
  const navigate = useNavigate()
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.setItem('token', JSON.stringify(""))
    localStorage.setItem('username', JSON.stringify(""))
    localStorage.setItem('user_id', JSON.stringify(0))
    localStorage.setItem('authenticated', JSON.stringify(false))
    navigate('/')
  }

  useEffect(() => {
    const authenticated = JSON.parse(localStorage.getItem("authenticated") || 0)
    setAuthenticated(authenticated)
  })

  return (
    <div className='flex justify-between items-center h-24  mx-auto px-4 text-black bg-zinc-50 drop-shadow-lg'>
      <Link to="/">
      <h1 className='text-3xl font-bold text-green-600'>PovertyLine.</h1>
      </Link>

      <div className='hidden md:flex basis-3/8 font-bold items-center mx-6'>
      <ul className='hidden md:flex flex-row text-xl md:justify-center'>
        <Link to="/Job">
        <li className='p-4 hover:text-green-600'>Jobs</li>
        </Link>
        <Link to='/About'>
        <li className='p-4 hover:text-green-600'>About</li>
        </Link>         
          { auth ? (
          <Link to="/signin">
            <button onClick={handleLogout} className='text-white border m-auto bg-red-600 w-[110px] ml-2 py-1 px-4 h-[40px] text-center border-green-600 hover:bg-transparent hover:text-green-600 rounded-full'>Logout</button>
          </Link>   
          
          ): (
              (
                <Link to="/signed">
                    <li className='text-black border-2 m-auto w-[115px] h-[40px] py-1 px-4 hover:border-green-600 hover:text-green-600 border-black rounded-full'>Sign Up</li>
                </Link>),
              (
              <Link to="/signin">
                  <li className='text-white border m-auto bg-green-600 w-[110px] ml-2 py-1 px-4 h-[40px] text-center border-green-600 hover:bg-transparent hover:text-green-600 rounded-full'>LogIn</li>
              </Link>
              )
          )}
      </ul>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-screen border-r text-center border-r-gray-900 bg-slate-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-xl font-bold text-green-600 m-4'>PovertyLine.</h1>
        <Link to="/Jobs">
        <li className='p-4 hover:text-green-600 border-b border-gray-300 mt-8'>Jobs</li>
        </Link>
        <Link to='/About'>
        <li className='p-4 hover:text-green-600 border-b border-gray-300'>About Us</li>
        </Link>
        <li className='p-4 hover:text-green-600 border-b border-gray-300'>Notifications</li>  
        { auth ? (<Link to="/signin">
        <li className='text-white border bg-green-600 mt-2  mx-2 py-2 px-4 h-[50px] text-center border-green-600 hover:bg-transparent hover:text-green-600 rounded-full'>LogIn</li>
        </Link>): (
           <Link to='/signed'>
           <li className='text-black border-2 h-[50px] mt-8 py-2 mx-2 px-4 hover:border-green-600 text-center hover:text-green-600 border-black rounded-full' >Sign Up</li>
           </Link>
        )}
        
        
      </ul>
    </div>
  );
};

export default Navbar;