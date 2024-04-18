import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#19376D]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#967E76]">Olá, eu sou</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#D8C4B6]">
          Leonardo Almeida
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#F5EFE7]">
          um desenvolvedor Full Stack
        </h2>
        <p className="text-[#F5EFE7] py-4 max-w-[700px]">
          Além de um desenvolvedor Full stack, sou um entusiasta em machine learning e data science.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D8C4B6]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
