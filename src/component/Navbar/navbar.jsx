import React from "react";

const navbar = () => {
  return (
    <div className="flex flex-1 justify-between">
      <img
        src="/Group 33968.png"
        alt="logo"
        className="nav_bar_img w-[150px] h-[38px]"
      />
      <button className="nav_btn px-10 py-2 border-[2px] rounded-full items-center">
        Join Waitlist
      </button>
    </div>
  );
};

export default navbar;
