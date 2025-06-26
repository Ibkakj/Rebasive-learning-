import React from "react";
import Navbar from "../component/Navbar/navbar";
import Header from "../component/Header/Header";
import Section from "../component/Section/Section";
import Brands from "../component/Brands/brands";
import Howitwork from "../component/Howitwork/How";

const homepage = () => {
  return (
    <div className="py-[50px] px-[80px] bg-[#F5F5F5]">
      <div>
        <Navbar />
      </div>

      <div className="pt-[40px]">
        <Header />
      </div>

      <div className="bg-zinc-800 relative mt-[-70px] rounded-[35px]  ">
        <Section />
      </div>

      <div className="brand flex items-center  w-[auto] h-[200px]">
        <Brands />
      </div>

      <div className=" flex max-w-[1024px] m-auto justify-center">
        <Howitwork />
      </div>
    </div>
  );
};

export default homepage;
