import React from "react";

const footer = () => {
  return (
    <footer className=" text-white py-10 mt-10 max-w-[1024px] m-auto justify-center">
      <div className="flex justify-between flex-wrap">
        {/* Left Section */}
        <div className="w-[350px]">
          <h2 className="text-[28px]/[157%]">
            All rights reserved
            <br />© Rebasive Technologies
          </h2>
          <p className="text-gray-400 text-[15px]/[157%]">
            At Rebasive, we are offering you a seamless
            <br /> banking experience that can be done anywhere,
            <br /> anytime. Ready to bank with us? Don’t miss out
            <br />
            on all the exciting offers
          </p>
        </div>

        {/* Address */}
        <div className="w-[400px]">
          <div className="flex justify-between">
            <div>
              <h3 className="text-[28px]/[157%]">Address</h3>
              <p className="text-gray-400 text-[15px]/[157%]">
                1151 Walker Road STE 100 Dover, <br /> DE 19904 Delaware United
                States
              </p>
            </div>
            {/* Support */}
            <div className="flex flex-col items-start">
              <h3 className="text-[28px]/[157%]">Support</h3>
              <ul className="space-y-2 text-gray-400 text-[15px]/[157%]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Help Desk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Waitlist Form */}
          <div>
            <div className="flex border-[1px] border-white w-auto  p-2 rounded-4xl mt-8">
              <input
                type="text"
                placeholder="Enter email"
                className="outline-none w-[290px] pl-[30px] placeholder:text-gray-100"
              />
              <button className="items-center bg-gray-500 py-2 rounded-3xl text-slate-50 w-[200px] cursor-pointer">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Social and Form */}
        <div className="w-[200px] ml-[50px]">
          <h3 className="text-[28px]/[157%]">Social networks</h3>
          <ul className="space-y-2 text-gray-400 mb-6 text-[15px]/[157%]">
            <li>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
