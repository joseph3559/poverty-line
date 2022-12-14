import { Routes, Route} from 'react-router-dom'
import Job from "./Links/Job";
import Home from "./Links/Home"
import Profile from "./Links/Profile";
import SignIn from "./Links/SignIn";
import SignedUp from "./Links/SignedUp";
import About from "./Links/About";
import ProfileView from './Links/ProfileView'
import React from "react";
import Message from "./Links/Message";
import ApplyJob from './Links/ApplyJob';
import User from './Links/User';
import Createjob from './Links/Createjob'
import Navbar from './components/Navbar'
import Admin from './Links/Admin';
import AdminLogin from './components/admin/AdminLogin'
import UsersData from './components/admin/UsersData';
import UpdateUser from './components/admin/UpdateUser';
import UsersProfiles from './components/admin/UsersProfiles'
import Applications from './components/admin/Applications'




function App() {
  return (
    <>
      <Navbar />
      {/* <ProfileView /> */}
      <Routes>
        <Route path="/job" element={<Job />} />
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProfileView />} />
        <Route path="/User" element={<User />} />
        <Route path="/about" element={<About />}/>
        <Route path="/chat" element={<Message />} />
        <Route path="/signed" element={<SignedUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Profile />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/post" element={<Createjob />} />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/adminlogin" element={ <AdminLogin /> } />
        <Route path="/usersdata" element={ <UsersData /> } />
        <Route path="/updateuser" element={ <UpdateUser /> } />
        <Route path="/usersprofiles" element={ <UsersProfiles /> } />
        <Route path="/applications" element={<Applications/>} />
      </Routes>
    </>      
  );
}

export default App;