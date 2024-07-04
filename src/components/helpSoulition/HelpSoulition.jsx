import { FiArrowUpRight } from "react-icons/fi";

const HelpSoulition = () => {
  return (
    <div className="mt-7  ">
      <div className="text-gray-600 body-font">
        <div className="container mx-auto  flex px-5 lg:flex-row  items-center flex-col py-2">
          <div className="lg:flex-grow lg:w-1/2  lg:pr-24  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <button className=" mb-4  border text-[#343268] border-[#343268] font-medium  rounded-full py-2 px-4">
              Who we are
            </button>
            <h3 className="text-2xl  text-[#343268] font-semibold mb-4">
              We Help To Get <br /> Solutions
            </h3>
            <p className="mb-8">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <div className="flex justify-start">
              <button className=" gap-2 mb-6 flex items-center text-black  rounded-xl bg-[#f7d53e] border-0 py-2 px-6 text-lg">
                Learn more <span><FiArrowUpRight /> </span>
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="lg:max-w-lg lg:w-full md:w-full w-full">
              <img src="https://i.ibb.co/p1GSvyr/Rectangle-24-1.png" alt="" />
            </div>
            <div className="border-2 text-white px-5 py-5 w-full bg-[#343268] max-w-sm h-auto absolute lg:top-[270px] top-36 rounded-3xl  p-4 mx-auto lg:mx-48 lg:-ml-20  md:top-[330px] md:mx-48 md:-ml-20      ">
              <h1 className="text-xl mb-2">Our mission is simple </h1>
              <p className="">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
     
    
    </div>
  );
};

export default HelpSoulition;
