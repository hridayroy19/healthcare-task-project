import { FiArrowUpRight } from "react-icons/fi";

const Appoinment = () => {
  return (
    <div className=" px-5 mt-10">
      <section className="relative bg-[url(https://i.ibb.co/tXVJbXy/Rectangle-32.png)] bg-opacity-75 rounded-2xl bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[65vh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-start mb-14 font-semibold text-black">
              Get Your <br />
              First Appointment <br />
              at 50% Off!
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button className="flex items-center gap-2 w-full rounded bg-[#f7d620] px-12 py-3 text-sm font-medium text-black shadow hover:bg-orange-500 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">

                Appointments <span><FiArrowUpRight /> </span>
              </button>

              <button className="flex border text-white opacity-95 items-center gap-2  w-full rounded  px-12 py-3 text-sm font-medium  shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More <span><FiArrowUpRight /> </span>
              </button>
            </div>
          </div>
       

        </div>
      
      </section>
      <div className=" absolute ">
        <img src="https://i.ibb.co/kS9TMQ8/logo-dark.png" className=" xl:-mt-[380px] xl:ml-[975px]  lg:-mt-[240px]  md:ml-[475px] md:-mt-[390px] lg:ml-[675px] -mt-[480px] ml-[175px] text-black" alt="" />
        </div>
    </div>
  );
};

export default Appoinment;
