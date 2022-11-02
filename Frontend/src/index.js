import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import JobCard from './components/job/JobCard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <JobCard/>
    {/* <App /> */}
  </BrowserRouter>
);

