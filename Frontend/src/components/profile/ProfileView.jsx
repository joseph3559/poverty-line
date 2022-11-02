import React from 'react'
import axios from '../../api/axios'
import {useState, useEffect} from 'react'
import Joe from '../../assets/joe.png'
import { BsGenderAmbiguous, BsCalendarDate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';


const ProfileView = () => {
  const[user_profiles, setUserProfiles] = useState([])

  useEffect(() => {
    axios.get('/user_profiles').then((response) => setUserProfiles(response.data));
  }, [])

  return (
    <>
      {
      user_profiles.map((user_profile) => (
    <div className='bg-white mb-4'>
      <div className='bg-green-50 max-w-[1240px] mx-auto mt-20 p-4 my-4 rounded-lg border-dashed shadow-md shadow-green-600'>
      <img className='border-4 shadow-md shadow-green-600 p-1 rounded-full w-40 mx-auto mt-[-3rem] bg-transparent' src={user_profile.image} alt="/" />

           <div className='my-4 absolute p-4  flex flex-col py-8 md:min-w-[760px] md:left-1/2 transform md:-translate-x-1/2 bg-green-50
              border border-green-600 rounded-xl text-center shadow-md shadow-green-300'>
                  <h1 className='font-bold text-3xl uppercase	'>{user_profile.firstname} {user_profile.middlename} {user_profile.lastname}</h1>
                  <div className='flex justify-between flex-wrap px-4'>
                      <p className='flex px-4 py-2 text-slate-500 gap-1'><BsGenderAmbiguous className='h-6 text-xl tex-black font-bold' />{user_profile.gender}</p>
                      <p className='flex px-4 py-2 text-slate-500 gap-1'><AiOutlineMail className='h-6 text-Pink-600' />{user_profile.email}</p>
                      <p className='flex px-4 py-2 text-slate-500 gap-1'><BsCalendarDate className='h-6 text-Pink-600' />{user_profile.age}</p>
                      <p className='flex px-4 py-2 text-slate-500 gap-1'>ID NO.<span>{user_profile.national_id}</span> </p>
                  </div>
              </div>        

        <div className='bg-green-50 rounded-3xl mt-44 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Career Summary</h1>
            <p>
              {user_profile.career_summary}
            </p>          
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Experience</h1>
          <div className='flex flex-row'>
            <div className='border-r-4 w-2/3 border-green-200 shadow-green-600 m-auto'>
              <h3 className="font-semibold">Date Started    : <span className="italic text-slate-500">{user_profile.experience_start_date}</span></h3>
              <h3 className="font-semibold">Date Completed : <span className="italic text-slate-500">{user_profile.experience_end_date}</span></h3>
            </div>
            <div className='p-4'>
            <li className=' marker:text-green-600 list-disc '>
            {user_profile.experience}
            </li>
            </div>
          </div>                  
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300 '>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Education</h1>
          <div className='flex flex-row'>
            <div className='border-r-4 w-2/3 border-green-200 shadow-green-600 m-auto'>
              <h3 className="font-semibold">Date Started    : <span className="italic text-slate-500">{user_profile.education_start_date}</span></h3>
              <h3 className="font-semibold">Date Completed : <span className="italic text-slate-500">{user_profile.education_end_date}</span></h3>
            </div>
            <div className='p-4'>
            <li className=' marker:text-green-600 list-disc '>
            {user_profile.education}
            </li> 
            
            </div>
          </div>          
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Skills & Hobbies</h1>
          <div class="flex flex-wrap gap-4">
            <div className='p-3 bg-green-50 font-semibold rounded-xl shadow-md shadow-green-300 border-green-300'>
              <p>{user_profile.skills_and_hobbies}</p>
            </div>
          </div>
        </div>
        <div className='bg-green-50 rounded-3xl mt-10 p-4 shadow-md shadow-green-300'>
          <h1 className='text-center font-bold text-3xl mb-3 underline'>Languages </h1> 
          <div class="flex flex-wrap gap-4">
            <div className='p-3 flex gap-1 bg-green-50 font-semibold rounded-xl shadow-md shadow-green-300 border-green-300'>
              <p>{user_profile.languages}</p>
            </div>
          </div>         
        </div>
       
      </div>
    </div>
      ))
}
    </>
  )
}

export default ProfileView