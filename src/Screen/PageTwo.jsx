import React, { useEffect, useState } from "react";
import Logo from "../Asset/images/Logo.png";
import SVG from "../Asset/images/frontImg.jpg";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";

const PageTwo = () => {
  const [todayDay, setTodayDay] = useState();
  const [hour, setHour] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHour(now.getHours());
      setMins(now.getMinutes());
      setSec(now.getSeconds());

      setTodayDay(
        now.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" pageTwoBg h-[100vh]">
      <div className="flex absolute inset-x-[25%] top-10">
        <div className="flex items-center gap-5  ">
          <img
            className="w-[20%] animate-fade-right animate-once animate-ease-in-out"
            src={Logo}
            alt=""
            srcset=""
          />
          <h1 className="title animate-fade-right animate-once animate-delay-400 animate-ease-in-out">
            Raves
          </h1>
        </div>
        <div className="flex items-center gap-2 text-black w-[130%]">
          <div className="number ">
            {hour}{" "}
            <span className="animate-pulse animate-infinite animate-delay-500 animate-ease-in-out font-extrabold">
              :
            </span>{" "}
            {mins}{" "}
            <span className="animate-pulse animate-infinite animate-delay-500 animate-ease-in-out font-extrabold">
              :
            </span>{" "}
            {sec} {hour >= 12 ? "pm" : "am"}
          </div>
          <div className="number">{todayDay}</div>
        </div>
      </div>
      <div
        style={{ background: "rgba(255, 255, 255, 0.5)" }}
        className="w-[80%] h-[70vh] mx-auto px-10 rounded-lg p-46 top-40 left-40 fixed flex justify-around items-center gap-5 shadow-lg"
      >
        <div className="w-[50%] text-white text-3xl">
          <div className="my-1 relative">
            <div className="absolute inset-0 bg-indigo-400 opacity-80 rounded-2xl"></div>
            <img className="rounded-2xl" src={SVG} alt="" srcset="" />
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <div>
                Welcome to Raves
                <br />
                Let's Plan Our Curriculum Structure
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className="text-3xl">
            <span>Hi&#44;</span> will you sign in now
          </h1>
          <section className="flex gap-1 mt-1">
            <hr className="border-2 border-indigo-400 w-8 rounded-full" />
            <hr className="border-2 border-black w-1 rounded-full" />
          </section>
          <div className="relative my-5">
            <label htmlFor="">
              Email Address <span className=" text-red-600 font-bold">*</span>
            </label>
            <div className="flex items-center my-2">
              <span className="absolute inset-y-auto pl-3 flex items-center">
                <MdAttachEmail className="h-8 w-8 text-indigo-400" />
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
                <RiLockPasswordFill className="h-8 w-8 text-indigo-400" />
              </span>
              <input
                className="w-full pl-12 pr-12 h-12 rounded-lg"
                type="password"
                placeholder="* * * * * * * *"
              />
              <span className="absolute inset-y-auto right-0 pr-3 flex items-center">
                <BsFillEyeFill className="h-8 w-8 text-indigo-400" />
              </span>
            </div>
          </div>
          <div className="flex justify-end cursor-pointer">
            <span>Forgot Password ?</span>
          </div>
          <div className="relative my-5">
            <div className="my-2 text-center bg-indigo-400 rounded-lg">
              <button className="w-full pl-12 pr-12 h-12 text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;

// h-[55vh] bg-white rounded-md p-10 shadow-2xl
