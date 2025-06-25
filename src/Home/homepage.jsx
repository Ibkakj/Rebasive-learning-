import React from "react";
import Navbar from "../component/Navbar/navbar";
import Header from "../component/Header/Header";
import Section from "../component/Section/Section";

const homepage = () => {
  return (
    <div className="py-[50px] px-[80px] bg-[#F5F5F5]">
      <div>
        <Navbar />
      </div>

      <div className="pt-[40px]">
        <Header />
      </div>

      <div className="relative mt-[-70px] ">
        <Section />
      </div>
    </div>
  );
};

export default homepage;
