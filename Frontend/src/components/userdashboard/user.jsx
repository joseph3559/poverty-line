import React from "react";
import { Link } from "react-router-dom";
import UserApplications from "./UserApplications";
// import axios from '../../api/axios'
// import { useEffect, useState } from "react";

export default function UserDashboard() {
  // const [jobs, setJobs] = useState([])



  return (
    <div className="flex bg-slate-200 ">
      <div className="flex flex-col h-screen p-3 shadow w-60 ">
        <div className="space-y-9 bg-white h-screen rounded-lg">
          <div className="flex justify-center mt-2">
            <span className="text-3xl font-bold">Dashboard</span>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke="green"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-2xl">Home</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/Jobs"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke="green"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-2xl">Jobs</span>
                </a>
              </li>
              {/* <li className="rounded-sm">
                <a
                  href="Applications"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke="green"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <Link to="/apply">
                  <span className="text-2xl">Applications</span>
                  </Link>
                </a>
              </li> */}
              <li className="rounded-sm">
                <a
                  href="inbox"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="green"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  <Link to="/chat">
                    <span className="text-2xl">Inbox</span>
                  </Link>
                </a>
              </li>
              <li className="rounded-sm object-bottom">
                <a
                  href="/logout"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke="green"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <Link to="/view">
                    <span className="text-2xl ">Profile</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 px-5">
        <div className="w-full px-4 py-4 bg-white rounded-lg shadow mb-4 flex justify-start">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            strokeWidth={2}
            stroke="green"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <h3 className="text-2xl font-medium ml-2 ">My Applications</h3>
        </div>
       <UserApplications/>
  

        {/* <div className="grid gap-4 grid-cols-2 ">
          <div className="w-full px-20 py-20 bg-white rounded-lg shadow transform motion-safe:hover:scale-100 text-center">
            <div className="text-5xl font-medium text-black-500 truncate ">
              Active Jobs
            </div>
            <div className="mt-1 text-4xl font-semibold text-green-600">15</div>
          </div>
          <div className="w-full px-20 py-20  bg-white rounded-lg shadow transform motion-safe:hover:scale-100 text-center">
            <div className="text-5xl font-medium text-black-500 truncate ">
              Completed Jobs
            </div>
            <div className="mt-1 text-4xl font-semibold text-green-600">75</div>
          </div>
          <div className="w-full px-20 py-20  bg-white rounded-lg shadow transform motion-safe:hover:scale-100 text-center">
            <div className="text-5xl font-medium text-black-500 truncate">
              Canceled
            </div>
            <div className="mt-1 text-4xl font-semibold text-red-600">7</div>
          </div>
          <div className="w-full  px-20 py-20  bg-white rounded-lg shadow transform motion-safe:hover:scale-100 text-center">
            <div className="text-5xl font-medium text-black-500 truncate">
              Unsuccessful
            </div>
            <div className="mt-1 text-4xl font-semibold text-red-600">2</div>
          </div>
        </div> */}
        
        <div className="  w-full px-8 py-8 bg-white rounded-lg shadow mx-auto mt-4 flex justify-between ">
          <div>
            <h1 className="text-2xl font-medium text-black-500 truncate">
              Get Your Dream Job
            </h1>
            <span>
              Our Partners Are Ranked as the Leading Employers in the Region
            </span>
          </div>
          <div className="flex justify-end shadow-2xl ">
            <Link to="/Jobs">
              <button className="bg-green-600 text-3xl text-black py-1.5 px-2.5 flex rounded-full">
                View Jobs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-10 h-18"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
