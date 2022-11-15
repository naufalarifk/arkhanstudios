import React from "react";
import Header from "./header";
import Background from "../../common/assets/jumbotron/jumbotron.png";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
function Wrapper({ children }) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  return (
    <>
      <Header />
      <section className="flex lg:flex-row flex-col h-auto w-[100%] bg-[#512995]">
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `cover`,
          }}
          className="lg:w-[100vw] lg:h-[900px] lg:bg-[length:100vw_125vh] bg-[length:100vw_50vh] w-[100vw] h-[50vh] flex flex-col px-8 md:px-32"
        >
          {splitLocation[1] === "" ? (
            <h1 className="text-white font-bold mt-16 lg:mt-36 text-lg lg:text-8xl">
              We Are
              <br /> Arkhan
              <br /> Studio
            </h1>
          ) : splitLocation[1] === "mascot-design" ||
            splitLocation[1] === "tee-design" ||
            splitLocation[1] === "kawai-design" ||
            splitLocation[1] === "other-design" ||
            splitLocation[1] === "storybook" ? (
            <h1 className="text-white font-bold mt-16 lg:mt-56 text-lg lg:text-7xl">
              We Believe Good <br /> Visual is A Good <br /> Business
            </h1>
          ) : splitLocation[1] === "blogs" ? (
            <h1 className="text-white font-bold mt-16 lg:mt-36 text-lg lg:text-7xl">
              Stay Updated! <br /> We Share <br /> Something Nice <br /> About
              Art!
            </h1>
          ) : splitLocation[1] === "about" ? (
            <h1 className="text-white font-bold mt-16 lg:mt-36 text-lg lg:text-7xl">
              Get to know <br /> More About <br /> Arkhan Studio
            </h1>
          ) : splitLocation[1] === `contact` ? (
            <h1 className="text-white font-bold mt-16 lg:mt-36 text-lg lg:text-7xl">
              Let&apos;s Share and <br /> Discuss About <br /> Your Idea{" "}
            </h1>
          ) : null}
          <p className="text-[#E4E4E7] mt-6 md:text-base text-xs">
            One Stop Professional Illustration <br /> Service for Mascot,
            Cartoon, T-Shirt, <br /> and Storybook.{" "}
          </p>
          <div className="flex flex-row space-x-2 lg:space-x-4 mt-5 lg:mt-10">
            <button className="text-white bg-[#7f56d9] text-xs px-4 lg:text-base lg:px-10 py-2">
              <p className="font-semibold">BOOK A SERVICE</p>
            </button>
            <button className="text-white text-xs lg:text-base px-4 lg:px-10 py-2 bg-transparent border-2">
              <p className="font-semibold">ABOUT US</p>
            </button>
          </div>
        </div>
      </section>
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
