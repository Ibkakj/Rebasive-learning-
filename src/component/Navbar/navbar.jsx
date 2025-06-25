import React from "react";

const navbar = () => {
  return (
    <div className="flex flex-1 justify-between">
      <img src="/Group 33968.png" alt="logo" className="w-[150px] h-[38px]" />
      <button className="w-[150px] p-2 border-[2px] rounded-full items-center">
        Join Waitlist
      </button>
    </div>
  );
};

export default navbar;
