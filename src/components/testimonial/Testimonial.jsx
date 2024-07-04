import { IoMdStar } from "react-icons/io";

const Testimonial = () => {
  return (
    
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h4 className="text-start text-xl border border-black px-4 py-1 w-[130px] rounded-full ">
              Testimonial
            </h4>
            <h3 className="text-2xl font-medium  mt-4">
              What they say about us
            </h3>
            {/* card start */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 md:gap-8">
                {/* one */}
              <div className="rounded-lg bg-[#fffff5d8] p-4 shadow-sm sm:p-8">
                <h3 className=" text-xl mb-3 font-medium">
                  Expertise and Compassion Combined
                </h3>
                <p className="mb-4 text-gray-700">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Sarah D{" "}
                      <span className="text-gray-400 text-sm">
                        {" "}
                        IT Professional
                      </span>
                    </p>
                    <div className="flex justify-start text-2xl gap-0.5 text-[#f7d53e]">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                  </div>
                </div>
              </div>
              {/* tow */}
              <div className="rounded-lg bg-[#fffff5d8] p-4 shadow-sm sm:p-8">
                <h3 className=" text-xl mb-3 font-medium">
                  Expertise and Compassion Combined
                </h3>
                <p className="mb-4 text-gray-700">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Sarah D{" "}
                      <span className="text-gray-400 text-sm">
                        {" "}
                        IT Professional
                      </span>
                    </p>
                    <div className="flex justify-start text-2xl gap-0.5 text-[#f7d53e] ">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[#fffff5d8] p-4 shadow-sm sm:p-8">
                <h3 className=" text-xl mb-3 font-medium">
                  Expertise and Compassion Combined
                </h3>
                <p className="mb-4 text-gray-700">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Sarah D{" "}
                      <span className="text-gray-400 text-sm">
                        {" "}
                        IT Professional
                      </span>
                    </p>
                    <div className="flex justify-start text-2xl gap-0.5 text-[#f7d53e]">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="text-center flex mt-3 gap-1 justify-center text-3xl mb-4">
            <p className=" font-extrabold"> .</p>
            <p className=" font-extrabold  text-orange-300"> .</p>
            <p className=" font-extrabold"> .</p>
          </div>
          </div>
          
        </div>
      
  );
};

export default Testimonial;
