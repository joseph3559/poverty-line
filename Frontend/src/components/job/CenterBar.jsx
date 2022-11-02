import React from 'react'
 import Search from './SearchBar'
 import BookData from './Data.json'
import JobCard from './JobCard';


const CenterBar = () => {
  return (

      <div className='centerbar'>
        <Search placeholder="Enter book name ..." data={ BookData } /> 
        <JobCard />  
      </div>
 
  )
}

export default CenterBar