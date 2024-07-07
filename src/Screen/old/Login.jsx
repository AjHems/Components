import React, { useState, useEffect } from "react";
import Logo from "../Asset/images/Logo.png";
import SVG from "../Asset/images/svg2.svg";

const Login = () => {
  const [todayTime, setTodayTime] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [todayDay, setTodayDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTodayTime(now.toLocaleTimeString());

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setTodayDay(days[now.getDay()]);

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Constructing the date string with the month in word format
      const dateString = `${
        months[now.getMonth()]
      } ${now.getDate()}, ${now.getFullYear()}`;
      setTodayDate(dateString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-image h-screen text-white">
      <div className="flex flex-wrap justify-around items-center py-3">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-20" />
          <span className="title text-black">Raves</span>
        </div>
        <div className="flex flex-wrap gap-2 text-black text-2xl font-look w-[20%]">
          <div className="">{todayTime}</div>|<div>{todayDate}</div>
          <div>{todayDay}</div>
        </div>
      </div>
      <div
        style={{ background: "rgba(255, 255, 255, 0.2)" }}
        className="w-[80%] h-[70vh] mx-auto px-10 rounded-lg p-46 top-40 left-40 fixed flex justify-around items-center gap-5 shadow-lg"
      >
        <div className="w-[50%] text-white text-3xl">
          <div className="my-1">
            <p style={{ fontSize: "40px" }} className="title">
              Welcome to Academic Plan
            </p>
            <p style={{ fontSize: "40px" }} className="title">
              Let's Plan Our Curriculum Structure
            </p>
          </div>
          <img src={SVG} alt="" srcset="" />
        </div>
        <div className="w-[50%] h-[55vh] bg-white rounded-md p-10 shadow-2xl">
          <h1 className=" text-center text-2xl font-bold text-black">Login</h1>
          <hr className=" border-2 my-2" />
          <div className="my-5">
            <label className="font-bold">Email ID</label>
            <br />
            <input
              type="text"
              name=""
              id=""
              className=" border-2 border-gray-400 rounded w-[100%] h-10 p-5 mt-2"
              placeholder="Enter Your Email ID"
            />
          </div>
          <div className="my-5">
            <label className="font-bold">Password</label>
            <br />
            <input
              type="password"
              name=""
              id=""
              className=" border-2 border-gray-400 rounded w-[100%] h-10 p-5 mt-2"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="text-gray-400 flex justify-end">
            <p>Forgot Password ?</p>
          </div>
          <div className=" border my-5 text-center bg-blue-500 text-white font-bold p-2 rounded-md cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
