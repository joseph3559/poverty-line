import React from 'react'
import Laptop from '../assets/cyber-bg.png'
import {Link } from 'react-router-dom'

import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          LET'S GR🔥W TOGETHER.
        </h1>
        <p>
        Poverty~Line helps growing businesses find and work with top-notch talent and agencies. 
        It's simple to get started: Just sign up, post your project, then review proposals 
        to find the right independent contractor or agency for you.
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-semibold py-4'>
            Fast, flexible Jobs for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl text-red-600 font-bold md:pl-4 pl-2'
            strings={['Hustler', 'POOR', 'NEEDY']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
                <div className='flex '>
                  <Link to="/adminlogin">
                  <button className='bg-green-600 w-[200px] rounded-full font-medium my-6  py-3 text-black'>Find Talent</button>
                  </Link>
                  <Link to="/signin">
                  <button className='bg-slate-200 w-[200px] rounded-full font-medium my-6 ml-2 py-3 text-black'>Find Job</button>
                  </Link>
                </div>
              </div>
            <img className='w-[500px] mx-auto my-4 ' src={Laptop} alt="/" />
        </div>
    </div>
  )
}

export default Hero