import React, { useState, useEffect } from "react";
import axios from '../../api/axios'
import { Navigate } from "react-router-dom";
import Prof from '../../assets/profile.png'


const ProfileCreation = () => {
  // const [errors, setErrors] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [userID, setUserID] = useState(0)
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    gender: "",
    age: "",
    national_id: "",
    address: "",
    phone: "",
    county: "",
    estate: "",
    career_summary: "",
    experience_date: "",
    experience: "",
    education_date: "",
    education: "",
    skills_and_hobbies: "",
  });

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id") || 0)
    setUserID(user_id)
  })

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('/user_profiles', {...formData, user_id:userID}).then((response) => {
        console.log(response)
        setAuthenticated(true);
      })

  }

  return (
    <>
      {
      authenticated ? (
        <Navigate to="/jobs" />
      ): (
        <div className='bg-white mb-4'>
        <h1 className='text-4xl font-bold text-center my-10'>Profile</h1> 
       
        <div className='bg-green-50 h-auto max-w-[1240px]  rounded-3xl mx-auto'>
      <img className='border-4 shadow-md shadow-green-600 p-1 rounded-full w-40 mx-auto mt-[-1rem] bg-transparent' src={Prof} alt="/" />
  
        <form onSubmit={handleSubmit} className='w-auto max-w-[1100px] m-auto pt-8'>
        <div className="flex flex-row -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="firstname" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="John"
                  name="firstname"
                  value={formData?.firstname}
                    onChange={handleChange}
                />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="middlename" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Midle Name
            </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" 
                  type="text"
                  placeholder="Doe"
                  name="middlename"
                  value={formData?.middlename}
                    onChange={handleChange}
                />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="lastname" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" 
                  type="text"
                  placeholder="Morar"
                  name="lastname"
                  value={formData?.lastname}
                    onChange={handleChange}
                />
          </div>
        </div>
       
        <div className="flex flex-row -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Email
            </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData?.email}
                    onChange={handleChange}
                />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Gender
            </label>
            <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                  
                    name="gender"
                    value={ formData?.gender }
                    onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>I prefer not to say</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Age
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="number"
                  placeholder="Your age"
                  name="age"
                  value={formData?.age}
                    onChange={handleChange}
                />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              ID
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="ID No"
                  name="national_id"
                  value={formData?.national_id}
                    onChange={handleChange}
                />
          </div>
        </div>
  
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="postalAdderess" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Postal Address
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  name="address"
                  value={formData?.address}
                    onChange={handleChange}
                />
              </div>
              
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="postalAdderess" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Phone Number
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="number"
                  name="phone"
                  value={formData?.phone}
                    onChange={handleChange}
                />
          </div>
          
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              County
            </label>
            <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                  type="county"
                  name="county"
                  value={formData?.county}
                    onChange={handleChange}
                  >
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-8 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Estate
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  name="estate"
                  value={formData?.estate}
                    onChange={handleChange}
                />
          </div>
        </div>
  
        <div className="flex flex-row -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Career Summary
            </label>
                <textarea className="block p-2.5 w-full text-sm text-gray-900 h-36 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-password"
                  type="text"
                  name="career_summary"
                  value={formData?.career_summary}
                    onChange={handleChange}
                />
          </div>
        </div>
  
        <div className="flex flex-row gap-2 -mx-3 mb-6">
          <div className='flex-1/4'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Date Started
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="experience_date"
                  value={formData?.experience_date}
                    onChange={handleChange}
                />
          </div>

          <div className='flex-1/4'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Date Completed
            </label>
                <input className="appearance-none block w-2/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="experience_date"
                  value={formData?.experience_date}
                    onChange={handleChange}
                />
          </div>
          
          <div className="w-full flex-3/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Experience
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="experience"
                  value={formData?.experience}
                    onChange={handleChange}
                />
          </div>
        </div>
        
        <div className="flex flex-row gap-2 -mx-3 mb-6">
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Date Started
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="education_date"
                  value={formData?.education_date}
                    onChange={handleChange}
                />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Date Completed
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="education_date"
                  value={formData?.education_date}
                    onChange={handleChange}
                />
          </div>

          <div className="w-full flex-3/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Education
            </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="education"
                  value={formData?.education}
                    onChange={handleChange}
                />
          </div>

          
        </div>
  
        <div className="w-full -mx-3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Hobbies & Skills
            </label>
              <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                name="skills_and_hobbies"
                value={formData?.skills_and_hobbies}
                    onChange={handleChange}
              />
        </div>
        <div className="w-full -mx-3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Languages
            </label>
              <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                name="languages"
                value={formData?.languages}
                    onChange={handleChange}
              />
        </div>
  
  
        <button type="submit" onClick={handleSubmit} className='bg-green-600 w-[200px] rounded-full font-medium my-6 ml-72  py-3 text-black'>SAVE</button>
      </form>
  
      </div>
      </div>
  
    )}
    </>   

  )
}

export default ProfileCreation