import React from "react";

const brands = () => {
  const brand = [
    {
      id: 1,
      image: "/Group 652.png",
    },
    {
      id: 2,
      image: "/Group 631.png",
    },
    {
      id: 3,
      image: "/Microsoft Logo 1.png",
    },
    {
      id: 4,
      image: "/Group 2053.png",
    },
  ];
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-4 justify-self-center items-center w-[600px] gap-[30px]">
        {brand?.map((brand) => (
          <div key={brand?.id} className="brand_list ">
            <img src={brand?.image} alt="brands" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default brands;
