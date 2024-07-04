import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="">
      <div className=" ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <img src="https://i.ibb.co/xFJHShj/logo-dark.png" alt="" />
            
          </a>
          <nav className="md:ml-auto md:mr-auto font-semibold flex text-[#343268] flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900"> Home </a>
            <a className="mr-5 hover:text-gray-900"> Service </a>
            <a className="mr-5 hover:text-gray-900"> Blog </a>
            <a className="mr-5 hover:text-gray-900"> About Us </a>
          </nav>
          <button className="inline-flex border border-[#343268] text-[#343268] items-center bg-gray-100  py-1 px-3 rounded-xl text-base mt-4 md:mt-0">
            Appoiontment <span><FiArrowUpRight />
            </span>
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
