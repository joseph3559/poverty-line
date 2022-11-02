import React from "react";
import { Link } from "react-router-dom";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import OurPartners from "./OurPartners";
import PartnersList from "./PartnersList";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <OurPartners />
      <PartnersList />
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Are You Looking For Candidates!
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Post a Job Today and hire the right Candidates
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center mt-16">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Pink-600">100%</p>
            <p className="text-black mt-2">Job Placement</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Pink-600">24/7</p>
            <p className="text-black mt-2">Support</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Pink-600">100K</p>
            <p className="text-black mt-2">Employed</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-20">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">We Support</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Manual job search not only is arduous but time-consuming. Make
                your hunt simple and easy with our user-friendly job search
                tool. It is just perfect for you..
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl bg-gray-50 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Find Jobs</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Got a skill? Don’t waste it in waiting for some great
                opportunity to come in front of you. Get to know some highly
                paid jobs and apply them. You are just one step away from taking
                your career to the next level..
              </p>
              <Link to="/Jobs">
              <button className="bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Find Now
              </button>
              </Link>
              
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Community</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
            
                We are a team of 148,000 people – people with purpose who thrive
                in our unique culture and make a real and lasting difference to
                the planet, our society and their careers
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
