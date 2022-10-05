import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";

const Career = () => {
  return (
    <Wrapper>
      <section className="container p-16 flex flex-row justify-between bg-[#512995] text-white">
        <Sidebar />
        <section className="w-[70%]">
          <h1 className="font-bold text-4xl">My Freelance Career</h1>
          <p className="mt-6">
            It all started in 2008 when joining a creative community that
            focuses on creating visual businesses in Indonesia. My first task at
            that time becomes a painter and illustrator assistant. Back in 2012,
            I join my mentor’s illustration studio to learn the business process
            in that industry. My position was the main illustrator who work on
            comics and children book illustration and practice deeper about
            cartoon and digital painting. Finally in 2015 with the help of my
            mentor I build Arkhan Studio with the main service in mascot, merch,
            cartoon, comics, children book illustration.
          </p>
        </section>
      </section>
    </Wrapper>
  );
};

export default Career;
