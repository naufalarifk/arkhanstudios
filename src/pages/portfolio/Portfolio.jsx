import React from "react";
import Wrapper from "../../component/wrapper";

const Portfolio = () => {
  return (
    <Wrapper>
      <section className="container flex lg:flex-row flex-col h-auto w-[100%] bg-[#512995]">
        <div className="mx-auto mt-12">
          <p className="mx-auto text-center p-4 text-white text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
            Cartoon Logo Design for Fun Brands
          </p>
          <p className="mx-auto text-center p-4 text-white">
            Developing the art of creating cartoon logos for more than 15 years.
          </p>
          <div className="flex flex-row">
            <button className="mx-auto bg-transparent text-white p-2 w-1/4 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500">
              <p className="font-semibold text-lg">LOGO DESIGN</p>
            </button>
            <button className="mx-auto bg-transparent text-white p-2 w-1/4 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500">
              <p className="font-semibold text-lg">MASCOT DESIGN</p>
            </button>
            <button className="mx-auto bg-transparent text-white p-2 w-1/4 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500">
              <p className="font-semibold text-lg">WEB & APPS</p>
            </button>
          </div>
        </div>
        
      </section>
    </Wrapper>
  );
};

export default Portfolio;
