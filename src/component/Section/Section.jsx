import React from "react";

const Section = () => {
  return (
    <div className=" flex  h-[900px] w-auto max-w-[1024px] m-auto justify-center">
      <div className="flex flex-col justify-between p-[50px] ">
        <img src="/Transactions.png" className="w-[300px] h-[400px]" />
        <img src="/Homepage.png" className="w-[300px] h-[350px]" />
      </div>
      <div>
        <img src="/Clay-Dark.png" className="w-[400px] h-[800px] mt-[-100px]" />
      </div>
      <div className="flex  flex-col justify-between p-[50px] gap-x-[30px]">
        <img src="/Receipt Card.png" className="w-[300px] h-[400px]" />
        <img src="/Send Money.png" className="w-[300px] h-[350px]" />
      </div>
    </div>
  );
};

export default Section;
