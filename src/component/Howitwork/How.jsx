import React from "react";

const How = () => {
  return (
    <div className="mt-9">
      <div className="how-it-works flex flex-col text-center">
        <h2 className="text-[50px]">How it works</h2>
        <p className="text-[24px] text-gray-600 mt-4">
          The next generation of money app
        </p>
      </div>
      <div className="mt-[130px]">
        <div className="left flex gap-[200px] justify-center">
          <img
            src="/9 22.png"
            className=" absolute w-[117px] mt-[-100px] mr-[-900px] justify-center"
          />
          <div className="image-left">
            <img
              src="/Group 33920.png"
              className="upper_image absolute ml-[100px] mt-[-80px]"
            />
            <img
              src="/Receipt Card.png"
              className="border-green-300 border-[7px] rounded-4xl "
            />
          </div>
          <div className="left_text">
            <h2 className="text-[35px]/[60px] font-[800]">
              Spend money like a <br /> local global with <br /> real FX rates
            </h2>
            <p className="text-[18px]/[156%] font-[31]">
              Send and receive instant and secure borderless <br /> payment from
              your fingertips, with no extra fees
            </p>
          </div>
        </div>

        <div className="right mt-[100px]  flex flex-row-reverse gap-[200px] justify-center">
          <div className="image-left">
            <img
              src="/Group 33894.png"
              className="upper_image absolute ml-[-190px] mt-[-80px] w-[300px]"
            />
            <img src="/map.png" className="w-[280px]" />
          </div>
          <div className="right_text ">
            <h2 className="text-[35px]/[60px] font-[800]">
              Track and manage
              <br /> your spendings in
              <br /> real-time.
            </h2>
            <p className="text-[18px]/[156%] font-[31]">
              Get valuable insights on your spending, set
              <br />
              goals, and increase your savings.
            </p>
          </div>
        </div>

        <div className="left flex gap-[200px] justify-center mt-[100px]">
          <div className="image-left">
            <img
              src="/Group 33895.png"
              className="upper_image absolute ml-[140px] mt-[-80px] w-[350px]"
            />
            <img src="/Cards.png" className="w-[280px] " />
          </div>
          <div className="left_text">
            <h2 className="text-[35px]/[60px] font-[800]">
              Spend in local <br /> currency with your <br /> card.
            </h2>
            <p className="text-[18px]/[156%] font-[31]">
              Avoid long bank queus and start spending money as <br />
              soon as you arrive there. Enjoy the best exchange rates
              <br /> on oyur Rebasive Card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
