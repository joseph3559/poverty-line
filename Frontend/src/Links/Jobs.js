import React from 'react'
import Subscribe from '../components/Subscribe'
// import Footer from '../components/Footer'
import Header from '../components/job/Header'
import LeftBar from '../components/job/LeftBar'
// import RightBar from '../components/job/RightBar'
import CenterBar from '../components/job/CenterBar'

const Jobs = () => {
  return (
    <div className="keja">
      <Header/>
      <div className='home'>
          <div id='container'>
              <LeftBar/>
              <CenterBar/>
              {/* <RightBar/> */}
          </div>
      </div>
      <Subscribe/>
      {/* <Footer/> */}
    </div>
  )
}

export default Jobs