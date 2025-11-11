import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div >
    <div className="navbar bg-white/10 backdrop-blur-sm  fixed px-5 sm:px-10 z-10">
  <div className="navbar">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><Link to={'/'}  className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000 ">Home</Link></li>
      <li><Link to={'/features'}  className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000">Features</Link></li>
      <li><Link to={'/about'} className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000">About</Link></li>
      </ul>
    </div>
    <div className="flex justify-center sm:justify-start w-full">
    <Link to={'/'} className=" text-xl text-emerald-700 font-bold ">ChefNote</Link>
    </div>
  </div>
  <div className="navbar hidden sm:flex justify-end">
    <ul className="flex gap-8 px-1 text-sm font-medium text-gray-500">
      <li><Link to={'/'}  className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000 ">Home</Link></li>
      <li><Link to={'/features'}  className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000">Features</Link></li>
      <li><Link to={'/about'} className="hover:before:content-['•'] hover:before:px-1 hover:text-green-600 transition-all duration-1000">About</Link></li>
    </ul>
  </div>
 
</div>
    
    </div>
  );
};
