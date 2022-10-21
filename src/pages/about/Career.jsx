import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";

const Career = () => {
  return (
    <Wrapper>
      <section className="container p-0 px-8 lg:p-16 flex flex-col lg:flex-row space-y-8 justify-between bg-[#512995] text-white">
        <Sidebar />
        <section className="w-full lg:w-[70%]">
          <h1 className="font-bold text-3xl lg:text-4xl">Why Arkhan Studio</h1>
          <div className="mt-6 space-y-3">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Pro Team</h1>
              <p>
                We’re a team of 20+ experienced visual artists who have been
                working for 7+ years in the industry and building all this
                chaos. Your project is on the right hand with us
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Knowledge</h1>
              <p>
                Many illustrators or designers don’t know deeper about the
                product such as merch, anime, and storybooks. But we have a
                deeper understanding of what we do, especially creating
                illustration the sell.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Fast and Reliable</h1>
              <p>
                We are committed to providing excellent client service with fast
                delivery and high-quality work by managing our people and
                timeline.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">
                Responsive Communication
              </h1>
              <p>
                Responsive communication is one of the project’s key successes.
                So, we will directly contact you to match our understanding of
                the project as well as report the working process regularly.
              </p>
            </div>
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Career;
