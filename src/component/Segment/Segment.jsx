import React from "react";
import backgroundImg from "../../assets/Rectangle 2925.png";

const Segment = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] rounded-3xl mt-25  "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="rebasive_content max-w-[1024px] m-auto justify-center pl-30 pt-15">
        <h1 className="text-white text-[75px]/[80px] font-[800]">
          Want to be a <br /> part of building <br />
          <span className="text-green-400">Rebasive</span>?
        </h1>
        <button className="text-white px-13 py-4 border-1 mt-8">
          Join our team
        </button>
      </div>
    </div>
  );
};

export default Segment;
