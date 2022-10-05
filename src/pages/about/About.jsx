import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";

const About = () => {
  return (
    <Wrapper>
      <section className="container p-16 flex flex-col lg:flex-row justify-between bg-[#512995] text-white">
        <Sidebar/>
        <section className="lg:w-[70%] w-full">
          <h1 className="font-bold text-4xl">Who Is Arkhan Studios</h1>
          <p className="mt-8">
            We’re illustration studio consist of 10+ passionate and talented
            people working in the illustration industry since 2008 started by
            Kudjo, our band leader. We help small and big companies to achieve
            their goal using visuals. We believe that nowadays good visual is
            good business. We also help my fellow illustrator and designer
            through my blog and social media.
          </p>
        </section>
      </section>
    </Wrapper>
  );
};

export default About;
