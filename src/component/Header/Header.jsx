import React from "react";
import bgImage from "../../assets/Rectangle 2918.png";

const Header = () => {
  return (
    <div
      className="rebasive_back_g relative bg-cover bg-center h-[650px] rounded-t-3xl mt-[20px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="dummy flex max-w-[1024px] m-auto justify-center">
        <img
          src="/9 17.png"
          className=" dummy_1 w-[117px] absolute mt-[-70px] left-1/2 transform -translate-x-1/2 "
        />
        <img
          src="/9 18.png"
          className="dummy_2 w-[117px] absolute ml-[-490px] mt-[30px]"
        />
        <img
          src="/9 19.png"
          className="dummy_3 w-[117px] absolute top-[70px] mr-[-860px]"
        />
        <img
          src="/9 20.png"
          className="dummy_4 w-[70px] absolute top-60 mr-[-550px]"
        />
        <img
          src="/9 21.png"
          className="dummy_5 w-[109px] absolute top-65 ml-[-640px]"
        />
      </div>
      <div className="text-white text-center">
        <h1 className="header-text text-[90px] font-inter pt-[30px]">
          One app,
          <br />a multi-currency
        </h1>
        <p className="header_reb pt-[30px] text-[24px] font-[31px]">
          wallet and one card... infinte possibilities
        </p>
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <div className="lg:waitlist_join mx-auto flex border-[1px] border-white w-auto  p-2 rounded-4xl">
          <input
            type="text"
            placeholder="Enter email"
            className="outline-none w-auto pl-[30px] placeholder:text-gray-100"
          />
          <button className="items-center bg-[#00C996] p-2 rounded-3xl text-slate-50 w-[150px]">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
