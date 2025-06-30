import React from "react";
import Navbar from "../component/Navbar/navbar";
import Header from "../component/Header/Header";
import Section from "../component/Section/Section";
import Brands from "../component/Brands/brands";
import Howitwork from "../component/Howitwork/How";
import Segment from "../component/Segment/Segment";
import Footer from "../component/Footer/footer";

const homepage = () => {
  return (
    <div className="body pt-[50px]  bg-[#F5F5F5]">
      <div className="nav_bar px-[80px]">
        <Navbar />
      </div>
      <div className="header_section px-[80px]">
        <div className="pt-[40px]  ">
          <Header />
        </div>

        <div className=" bg-zinc-800 relative mt-[-70px] rounded-[35px]">
          <Section />
        </div>
      </div>

      <div className="brand flex items-center  w-[auto] h-[200px]">
        <Brands />
      </div>

      <div className=" flex max-w-[1024px] m-auto justify-center">
        <Howitwork />
      </div>

      <div className="rebasive_seg px-[80px]">
        <Segment />
      </div>

      <div className="flex items-center justify-center bg-black mt-18">
        <Footer />
      </div>
    </div>
  );
};

export default homepage;
