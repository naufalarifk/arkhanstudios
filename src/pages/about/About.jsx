import React from "react";
import Wrapper from "../../component/wrapper";
import Man from "../../common/assets/home/Man1.png";
const About = () => {
  const servicesData = [
    {
      id: 1,
      picture: require("../../common/assets/services/Mascot_design.png"),
      name: "Pro Team",
      desc: "We're a team of 20+ experienced visual artists who have been working for 7+ years in the industry and building all this chaos. Your project is on the right hand with us",
    },
    {
      id: 2,
      picture: require("../../common/assets/services/T-Shirt_design.png"),
      name: "Knowledge",
      desc: "Many illustrators or designers don&apos;t know deeper about the product such as merch, anime, and storybooks. But we have a deeper understanding of what we do, especially creating illustration the sell.",
    },
    {
      id: 3,
      picture: require("../../common/assets/services/KAWAII_design.png"),
      name: "Fast & Reliable",
      desc: "We are committed to providing excellent client service with fast delivery and high-quality work by managing our people and timeline.",
    },
    {
      id: 4,
      picture: require("../../common/assets/services/children_book.png"),
      name: "Responsive Communications",
      desc: "Responsive communication is one of the project’s key successes. So, we will directly contact you to match our understanding of the project as well as report the working process regularly.",
    },
  ];
  return (
    <Wrapper>
      <section className="p-0 px-8 lg:p-16 flex flex-col space-y-8 justify-between bg-[#512995] text-white">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between">
        <div className="space-y-4 w-full lg:w-1/2 text-white">
          <h1 className="font-extrabold text-2xl text-center lg:text-left lg:text-4xl mt-6 lg:mt-0">Who is Arkhan Studio?</h1>
          <p className="lg:text-left text-center">
          We&apos;re illustration studio consist of 10+ passionate and talented people working in the illustration industry since 2008 started by Kudjo, our band leader. We help small and big companies to achieve their goal using visuals. We believe that nowadays good visual is good business. We also help my fellow illustrator and designer through my blog and social media.
          </p>
          <button className="bg-[#7F56D9] text-white px-4 py-2 w-full lg:w-auto">
            BOOK A SERVICE
          </button>
        </div>
        <img className="w-[362px]" src={Man} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 nunito text-white px-8">
        {servicesData.map((item) => (
          <div className={`px-2 pb-4 space-y-6 flex flex-col lg:flex-row items-center`}>
            <img
              className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
              style={{
                transition: "all 1s",
              }}
              src={item.picture}
              alt=""
            />
            <div className="space-y-2 flex flex-col nunito text-center lg:text-left">
              <h1 className="font-bold text-base">{item.name}</h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <div className="space-y-4 w-full lg:w-1/2 text-white">
          <h1 className="font-extrabold text-4xl mt-4 lg:mt-0">How It All Started</h1>
          <p className="text-center lg:text-left">
          It all started in 2008 when joining a creative community that focuses on creating visual businesses in Indonesia. My first task at that time becomes a painter and illustrator assistant. Back in 2012, I join my mento&apos;’s illustration studio to learn the business process in that industry. My position was the main illustrator who work on comics and children&apos;s book illustrations and practice deeper about cartoons and digital painting. Finally in 2015 with the help of my mentor, I build Arkhan Studio with the main service in mascots, merch, cartoons, comics, and children&apos;s book illustrations.
          </p>
          <button className="bg-[#7F56D9] text-white px-4 py-2 w-full lg:w-auto">
            BOOK A SERVICE
          </button>
        </div>
        <img className="w-[362px]" src={Man} alt="" />
      </div>
      </section>
    </Wrapper>
  );
};

export default About;
