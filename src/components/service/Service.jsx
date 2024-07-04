import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
  return (
    <>
      <div className="bg-[#fffff57e] rounded-xl py-4">
        <div className="container mx-auto  flex px-5 lg:flex-row  items-center flex-col py-2">
          <div className="lg:flex-grow lg:w-1/2  lg:pr-24  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <button className=" mb-4  border text-[#343268] border-[#343268] font-medium  rounded-full py-1 px-4">
              Service
            </button>
            <h3 className="text-2xl text-[#343268] font-semibold mb-4">
              Empowering Health, <br /> Enriching Lives
            </h3>
            <p className="mb-8  ">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness..
            </p>
            <div className="flex justify-start">
              <button className=" gap-2 mb-6 flex items-center text-black  rounded-xl bg-[#f7d53e] border-0 py-2 px-6 text-lg">
                Appointment <span> <FiArrowUpRight /></span>
              </button>
            </div>
          </div>
          {/* flex image */}
          <div className="relative flex lg:justify-end justify-center  items-center">
            <div className="lg:max-w-lg lg:w-full md:w-full w-full">
              <img
                src="https://i.ibb.co/s2trdpG/Rectangle-27-2.png"
                className="rounded-3xl  "
                alt=""
              />
            </div>
            <div className=" text-[#FFFFF5] px-4 py-5 w-full bg-[#0200437c] max-w-[300px] h-auto absolute xl:top-[200px] lg:top-[170px] top-24 xl:-right-4 lg:-right-14  rounded-3xl  p-4 mx-auto lg:mx-48  md:top-[230px] md:mx-48     ">
              <h1 className="text-xl mb-2">Our mission is simple </h1>
              <p className=" text-gray-300">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </div>
          </div>
        </div>

        {/* card section */}
        <div className=" flex lg:flex-row  flex-col justify-center lg:gap-22 md:gap-9 gap-5 md:mt-20 mt-10  items-center  ">
          <div className="relative  flex lg:justify-end justify-center  items-center">
            <div className=" lg:w-full md:w-full w-full">
              <img
                src="https://i.ibb.co/ZNGTCmH/Rectangle-27-1.png"
                className="rounded-3xl  "
                alt=""
              />
            </div>
            <div className="border-2 text-[#FFFFF5] px-4  py-5 w-full bg-[#0200437c] max-w-[300px] h-auto absolute xl:top-[210px] lg:top-[110px]  top-24 xl:-right-4 lg:-right-36  rounded-3xl  p-4 mx-auto lg:mx-48  md:top-[200px] md:mx-48     ">
              <h1 className="text-xl mb-2">Online Doctor Meet </h1>
              <p className="  text-gray-300">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
          </div>

          <div className="relative flex lg:justify-end justify-center  items-center">
            <div className="lg:max-w-lg lg:w-full  md:w-full w-full">
              <img
                src="https://i.ibb.co/GxRCjZN/Rectangle-27.png"
                className="rounded-3xl "
                alt=""
              />
            </div>
            <div className=" text-[#FFFFF5] px-4 py-5 w-full bg-[#0200437c] max-w-[300px] h-auto absolute xl:top-[210px] lg:top-[110px] top-24 xl:-right-4 lg:-right-36  rounded-3xl  p-4 mx-auto lg:mx-48  md:top-[200px] md:mx-48     ">
              <h1 className="text-xl mb-2">Consultancy your health </h1>
              <p className=" text-gray-300">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
