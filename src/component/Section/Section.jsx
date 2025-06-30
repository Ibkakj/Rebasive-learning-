import React from "react";

const Section = () => {
  return (
    <div className="card_transactions flex h-[900px] w-auto max-w-[1024px] m-auto justify-center">
      <div className=" cards flex flex-col justify-between p-[50px] ">
        <img src="/Transactions.png" className="receipt w-[330px] h-[350px]" />
        <img src="/Homepage.png" className="receipt w-[330px] h-[350px]" />
      </div>
      <div>
        <img
          src="/Clay-Dark.png"
          className=" phone w-[500px] h-[800px] mt-[-100px]"
        />
      </div>
      <div className="cards flex  flex-col justify-between p-[50px] gap-x-[30px]">
        <img src="/Receipt Card.png" className="receipt w-[330px] h-[350px]" />
        <img src="/Send Money.png" className="receipt w-[330px] h-[350px]" />
      </div>
    </div>
  );
};

export default Section;
