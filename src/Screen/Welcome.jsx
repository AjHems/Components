import React from "react";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <section className="flex justify-between items-center w-4/5 bg-white rounded-lg border-2 border-gray-300 shadow-lg">
        <div className="flex-1 text-center">
          <h1 className=" font-extrabold text-3xl">Sign In</h1>
          <div className="relative my-5">
            <label htmlFor="">
              Email Address <span className=" text-red-600 font-bold">*</span>
            </label>
            <div className="flex items-center my-2">
              <span className="absolute inset-y-auto pl-3 flex items-center">
                {/* <MdAttachEmail className="h-8 w-8 text-indigo-400" /> */}X
              </span>
              <input
                className=" w-full pl-12 h-12 rounded-lg"
                type="email"
                placeholder="abc@rvsgroup.com"
              />
            </div>
          </div>
          <div className="relative my-5">
            <label htmlFor="">
              Password <span className=" text-red-600 font-bold">*</span>
            </label>
            <div className="flex items-center my-2 relative">
              <span className="absolute inset-y-auto pl-3 flex items-center">
                {/* <RiLockPasswordFill className="h-8 w-8 text-indigo-400" /> */}
                x
              </span>
              <input
                className="w-full pl-12 pr-12 h-12 rounded-lg"
                type="password"
                placeholder="* * * * * * * *"
              />
              <span className="absolute inset-y-auto right-0 pr-3 flex items-center">
                {/* <BsFillEyeFill className="h-8 w-8 text-indigo-400" /> */}x
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-black rounded-r-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="rounded-full border-2 border-gray-300"
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
