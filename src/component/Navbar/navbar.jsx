import React from "react";

const navbar = () => {
  return (
    <div className="flex flex-1 justify-between">
      <img src="/Group 33968.png" alt="logo" className="w-[150px] h-[38px]" />
      <button className="px-10 py-2 border-[2px] rounded-full items-center">
        Join Waitlist
      </button>
    </div>
  );
};

export default navbar;
