import React from 'react'
import Search from './SearchBar'
import Staff from '../../api/axios'
import JobCard from './JobCard';


const CenterBar = () => {
  return (

      <div className='centerbar'>
        <Search placeholder="Enter book name ..." data={ Staff } /> 
        <JobCard />  
      </div>
 
  )
}

export default CenterBar