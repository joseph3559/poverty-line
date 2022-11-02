import React, { useState } from "react";
import axios from '../../api/axios'
import {  GrAttachment } from 'react-icons/gr';
import {Link} from 'react-router-dom'


const ApplyJob = () => {
  const [formData, setFormData] = useState({
    cover_letter: "",
    attachment: "",
  });

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('/job_applications', formData)
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div className='bg-white mt-12'>
      <div className='bg-gray-200 h-1/2 max-w-[1000px] mx-auto p-4 my-4 rounded-lg border-dashed shadow-md shadow-green-600'>
        <div className='flex flex-col gap-2 p-4 '>

           <h1 className="text-center font-bold text-2xl">Cover Letter</h1>
           <textarea class="block p-2.5 w-full text-sm text-gray-900 
            h-56 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500
            focus:border-green-600 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
            id="grid-password"
            type="text" 
            name="cover_letter"
            value={formData?.cover_letter}
            onChange={handleChange}
             />
              <h1 className='text-center font-bold text-2xl mt-2 '>Attatchment</h1>
              <form class="flex flex-row justify-center w-full space-x-6 bg-green-50 rounded-3xl p-4 border-dashed border-4 border-green-600">
                <div class="shrink-0">
                <GrAttachment className='h-8 w-8' />
                </div>
                <label class="block">
                  <input type="file" class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-400 file:text-black
                    hover:file:bg-green-300"
                    name="attachment"
                    value={formData?.attachment}
                    onChange={handleChange}
              />
                </label>                
              </form>
              <div className='flex justify-center'>
              <Link to="/jobs">
                <button onClick={handleSubmit} className='bg-green-600 w-[150px] rounded-full font-medium mt-8 ml-2 py-2 text-black'>Submit</button>
              </Link>
              <Link to="/jobs">
                <button className='bg-slate-200 border-2 border-red-600 w-[150px] hover:text-red-600 rounded-full font-medium mt-8 ml-2 py-2 text-black'>Cancel</button>
              </Link>
              </div>

        </div>
      </div>
    </div>
  )
}

export default ApplyJob