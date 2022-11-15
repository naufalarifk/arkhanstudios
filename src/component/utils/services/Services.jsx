import React from "react";
import Man from "../../../common/assets/home/Man1.png";
import { BiCheckCircle } from "react-icons/bi";
import { CgArrowLongRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import Arrow from "../../../common/assets/Arrow.png";
function Services() {
  const servicesData = [
    {
      id: 1,
      picture: require("../../../common/assets/services/Mascot_design.png"),
      name: "Custom Made Illustration",
      desc: "Don’t you have time to waste reviewing dozens of portfolios and hundred of proposals in marketplace sites?. Invest a fair budget in a taylor made logo designed by only one designer.",
    },
    {
      id: 2,
      picture: require("../../../common/assets/services/T-Shirt_design.png"),
      name: "Make a Difference",
      desc: "Kawaii chibi illustration is a new trend in illustration world influenced by Japanese culture. We push the team to know deeper about what we are doing and deliver into illustration.",
    },
    {
      id: 3,
      picture: require("../../../common/assets/services/KAWAII_design.png"),
      name: "Mock-up for Visualization",
      desc: "We offer a wide range of mockups to help you visualise how your new brand identity will behave in the real world such as apparel, t-shirt, stationary, and any other application",
    },
    {
      id: 4,
      picture: require("../../../common/assets/services/children_book.png"),
      name: "Visualize Your Story",
      desc: "Hard to partnered with trusted illustrator for your storybook, storybiard, and script or scenario? Stop overthinking and hire us for your next story. We love to visualize your imagination",
    },
  ];
  return (
    <section className="bg-[#512995] px-12 lg:px-24 py-12 space-y-12">
      <div className="text-white w-full lg:w-1/2 mx-auto">
        <h1 className="text-center font-bold text-4xl">
          Pro Team & Mannered Way of Working
        </h1>
        <p className="text-center text-gray-300">
          We deliver the quality, we know your time is limited. Let&apos;s talk
          about the idea and our team will do the rest
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 nunito text-white">
        {servicesData.map((item) => (
          <div className={`px-4 pb-4 space-y-6 flex flex-col lg:flex-row items-center`}>
            <img
              className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
              style={{
                transition: "all 1s",
              }}
              src={item.picture}
              alt=""
            />
            <div className="space-y-2 flex flex-col text-center lg:text-left nunito">
              <h1 className="font-bold text-base">{item.name}</h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <div className="space-y-4 w-full lg:w-1/2 text-white">
          <h1 className="font-bold text-2xl text-center mt-4 lg:mt-0 lg:text-left lg:text-4xl">Get to Know About Mascot</h1>
          <p className="lg:text-left text-center">
            A mascot is any human, animal, or object thought to represent a
            group with a common public identity, such as a school, professional
            sports team, society, military unit, or brand name. Mascots are also
            used as fictional, representative spokespeople for consumer
            products. In sports, mascots are also used for merchandising. Team
            mascots are often related to their respective team nicknames. This
            is especially true when the team's nickname is something that is a
            living animal and/or can be made to have humanlike characteristics.
          </p>
          <button className="bg-[#7F56D9] text-white px-4 py-2 lg:w-auto w-full">
            BOOK A SERVICE
          </button>
        </div>
        <img className="w-[362px]" src={Man} alt="" />
      </div>
      <div className="px-12 text-white space-y-8">
        <h1 className="font-bold text-4xl text-center">How We Work</h1>
        <p className="text-center">
          We deliver the quality, we know your time is limited. Let&apos;s talk
          about the idea and our team will do the rest
        </p>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
          <div className="">
            <div className="flex flex-row justify-between space-x-4 items-center">
              <BiCheckCircle className="text-white mx-auto lg:ml-0" size={22} />
              <img src={Arrow} alt="" className="w-[132px] h-[18px] hidden lg:block" />
            </div>
            <p className="w-full text-center mt-2 lg:w-4/5">
              You send 50% down payment & we work in the brief of the project.
            </p>
          </div>{" "}
          <div className="">
            <div className="flex flex-row justify-between space-x-4 items-center">
              <BiCheckCircle className="text-white mx-auto lg:ml-0" size={22} />
              <img src={Arrow} alt="" className="w-[132px] h-[18px] hidden lg:block" />
            </div>
            <p className="w-full text-center mt-2 lg:w-4/5">
              I provide sketches based on the brief of the project.
            </p>
          </div>{" "}
          <div className="">
            <div className="flex flex-row justify-between space-x-4 items-center">
              <BiCheckCircle className="text-white mx-auto lg:ml-0" size={22} />
              <img src={Arrow} alt="" className="w-[132px] h-[18px] hidden lg:block" />
            </div>
            <p className="w-full text-center mt-2 lg:w-4/5">
              You review the sketches and I make all corrections needed.
            </p>
          </div>{" "}
          <div className="">
            <div className="flex flex-row justify-between space-x-4 items-center">
              <BiCheckCircle className="text-white mx-auto lg:ml-0" size={22} />
              <img src={Arrow} alt="" className="w-[132px] h-[18px] hidden lg:block" />
            </div>
            <p className="w-full text-center mt-2 lg:w-4/5">
            You approve the sketch and I create the final design.
            </p>
          </div>{" "}
          <div className="">
            <div className="flex flex-row justify-between space-x-4 items-center">
              <BiCheckCircle className="text-white mx-auto lg:ml-0" size={22} />
            </div>
            <p className="w-full text-center mt-2 lg:w-4/5">
              You approve the sketch and I create the final design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
