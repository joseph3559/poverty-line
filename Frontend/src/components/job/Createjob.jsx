import React, { useState } from "react";
import axios from '../../api/axios'
import './createjob.css'
import {Link, Navigate} from 'react-router-dom'

const Createjob = () => {
  const selectedTags = tags => {
		console.log(tags);
  };

  

  return (
		<div className="App">
			<TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
		</div>
	);
};
  const TagsInput = props => {
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      };
    } 

  
  const [validated, setValidated] = useState(false);  
  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "",
    company_name: "",
    job_description: "",
    deadline: "",
    required_skills: "",
    job_link: "",
    job_type: ""
  });

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('/jobs', formData)
      .then((response) => {
        console.log(response)
        setValidated(true);
      })
  }

    return (
      <>
        {validated ? (
        <Navigate to= "/jobs"></Navigate>
        ) : (
          <div className='card'>
          <div className='box'>
            <form className='entry-form'>
              <div className='title'>
                <h1>Job Title</h1>
              <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                name="job_title"
                value={formData?.job_title}
                      onChange={ handleChange }
                      required
              />
               
            </div>
            <div className='title'>
                <h1>Company name</h1>
              <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                name="company_name"
                value={formData?.company_name}
                      onChange={ handleChange }
                      required
              />
               
              </div>
              <div className='des'>
                <h1>Job Description</h1>
              <textarea class="block p-2.5 w-full text-sm text-gray-900 h-36 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                name="job_description"
                value={formData?.job_description}
                      onChange={ handleChange }
                      required
              />
            </div>
  
            <div className='title'>
                  <h1>Job Type</h1>
                <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-password"
                  type="text"
                  name="job_type"
                  value={formData?.job_type}
                      onChange={ handleChange }
                      required
              />
              
            </div>
            
              <div className='skills'>
                <h1>Required Skills</h1>
              <textarea onKeyUp={ event => event.key === "Enter" ? addTags(event) : null } class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                placeholder="Required Skills"
                name="required_skills"
                value={formData?.required_skills}
                      onChange={ handleChange }
                      required
              />
                              
                <ul id="tags">
              {tags.map((tag, index) => (
                <li key={index} className="tag">
                  <span className='tag-title'>{tag}</span>
                  <span className='tag-close-icon'
                    onClick={() => removeTags(index)}
                  >
                    x
                  </span>
                </li>
              ))}
          </ul>
              
                
              </div>
            <div className="flex space-between m-auto gap-2 px-4">
              <Link to='/Jobs'>
              <button onClick={handleSubmit} className='bg-green-600 w-[200px] rounded-full font-med ium my-6  py-3 text-black'>Submit Post</button>
              </Link>
              <Link to='/admin'>
              <button className='bg-slate-200 border-2 border-red-600 hover:text-red-600 w-[200px] rounded-full font-medium my-6  py-3 text-black'>Cancel</button>
              </Link>
          </div>
        </form>
      </div>
    </div>
        )}
      </>
    
  )
}

export default Createjob