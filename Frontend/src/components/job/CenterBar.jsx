import React from 'react'
<<<<<<< HEAD
import Search from './SearchBar'
import BookData from './Data.json'
import JobCard from './JobCard'
=======
 import Search from './SearchBar'
 import BookData from './Data.json'
import JobCard from './JobCard';
>>>>>>> 7ce17bdc0be33ee990a8c0839b0fccc2662f7be4


const CenterBar = () => {
  return (
<<<<<<< HEAD
    <div className='centerbar'>
      <Search placeholder="Enter book name ..." data={BookData}/>
  
      <JobCard/>
    </div>
    
    
=======

      <div className='centerbar'>
        <Search placeholder="Enter book name ..." data={ BookData } /> 
        <JobCard />  
      </div>
 
>>>>>>> 7ce17bdc0be33ee990a8c0839b0fccc2662f7be4
  )
}

export default CenterBar