import React from "react";
export const FieldSetLayout = (props) => {
  return (
    <div
      className={`border-2 border-black border-solid  relative rounded-lg mt-4 ${props.className}`}
    >
      <h1 className=" text-sm text-primary font-bold -mt-2.5 absolute bg-white mb-0.5 left-3">
        <span className="mx-0.5">{props.title ?? "Academic Details"} </span>
        <span className="text-[#db484f] text-sm">{props.subtitle1}</span>
      </h1>
      <div className="mx-2 mt-2.5 mb-2">{props.children}</div>
    </div>
  );
};
