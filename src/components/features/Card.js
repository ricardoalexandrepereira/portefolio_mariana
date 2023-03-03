import React from "react";
/* import {HiArrowRight} from 'react-icons/hi' */

const Card = ({ title, des, icon, img }) => {
  return (
    <div
      className="w-full relative px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor
    to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
    >
      <img className="absolute top-0 left-0 w-full h-full object-cover opacity-10"  
      src={img} alt="capa" />

      <div className="h-72 overflow-y-hidden">
       <div className="flex flex-col h-full gap-8 translate-y-20 group-hover:translate-y-10 transition-transform duration-500">
       <div>
          <span className="text-5xl text-designColor w-[50px] h-[100px]">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-md md:text-xl font-titleFont font-bold text-gray-300">{title}</h2>
          <p className="base ">{des}</p>
         {/*  <span className="text-2xl text-designColor"><HiArrowRight /></span> */}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Card;
