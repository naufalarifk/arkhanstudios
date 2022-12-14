import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";

const Clients = () => {
  return (
    <Wrapper>
      <section className="container p-0 px-8 lg:p-16 flex flex-col lg:flex-row space-y-8 justify-between bg-[#512995] text-white h-[100vh]">
        <Sidebar />
        <section className="w-full lg:w-[70%]">
          <h1 className="font-bold text-3xl lg:text-4xl">Career</h1>
          <p className="mt-6">
            It all started in 2008 when joining a creative community that
            focuses on creating visual businesses in Indonesia. My first task at
            that time becomes a painter and illustrator assistant. Back in 2012,
            I join my mentor’s illustration studio to learn the business process
            in that industry. My position was the main illustrator who work on
            comics and children’s book illustrations and practice deeper about
            cartoons and digital painting. Finally in 2015 with the help of my
            mentor, I build Arkhan Studio with the main service in mascots,
            merch, cartoons, comics, and children’s book illustrations.
          </p>
        </section>
      </section>
    </Wrapper>
  );
};

export default Clients;
