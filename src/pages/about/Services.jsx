import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";

const Services = () => {
  return (
    <Wrapper>
      <section className="container p-0 px-8 lg:p-16 flex flex-col lg:flex-row space-y-8 justify-between bg-[#512995] text-white">
        <Sidebar />
        <section className="lg:w-[70%] w-full">
          <h1 className="font-bold lg:text-4xl text-3xl">Services We Provide</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-5">
            <div className='lg:w-3/4 w-full space-y-4'>
            <h1 className='text-xl font-semibold'>Mascot Design</h1>
            <p>
              Creating mascot illustrations for you, your brand, and your
              company. It represent uniqueness, authentic of your soul and
              character.
            </p>
            </div>
            <div className='w-full lg:w-3/4 space-y-4'>
            <h1 className='text-xl font-semibold'>T-shirt Design</h1>
            <p>
              Visualize your idea into a t-shirt design in cartoon and anime
              characters. Let your merch speak louder with beautifully
              illustrated.
            </p>
            </div>
            <div className='w-full lg:w-3/4 space-y-4'>
            <h1 className='text-xl font-semibold'>Kawaii Chibi illustration</h1>
            <p>
              Cute Chibi Illustration becoming the new trend. Express your idea
              and visualize them into the Cute Chibi illustration.
            </p>
            </div>
            <div className='w-full lg:w-3/4 space-y-4'>
            <h1 className='text-xl font-semibold'>Storybook illustration</h1>
            <p>
              Story transform values in centuries. Visualizing the story to
              transform values is a must in this rapid information era.
            </p>
            </div>
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Services;
