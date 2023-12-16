import Image from "next/image";
import React from "react";

const Cards = ({ logo, heading, text }) => {
  return (
    <section className="flex flex-col p-4 border-2 rounded-md m-6 md:m-4 sm:m-6 bg-gradient-to-tl from-purple-50 to-blue-50 drop-shadow-2xl md:w-96">
      <Image width={40} height={40} src={logo} className="mx-1 my-2" 
      alt="logo"
      />
      <div className="m-1 text-2xl font-semibold">{heading}</div>
      <div className="m-1 text-md">{text}</div>
    </section>
  );
};

export default Cards;
