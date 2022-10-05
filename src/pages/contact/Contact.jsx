import React from "react";
import Wrapper from "../../component/wrapper";

const Contact = () => {
  return (
    <Wrapper>
      <section className="container p-16 flex flex-row justify-between bg-[#512995] gap-x-20">
        <div className="w-full md:w-1/2 md:max-w-full nunito">
          <div className="p-6 rounded-lg bg-white shadow-xl">
            <form method="POST" action="https://herotofu.com/start">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Enter Your Name"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Enter Your Email"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  className="mx-auto bg-black text-white hover:text-black p-2 hover:bg-transparent border-black border-2 transform transition duration-500 rounded-lg"
                >
                  <p className="font-semibold">CONTACT US</p>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-row text-white p-4 bg-[#663cb0] items-center">
        <img className="h-[200px] w-[300px]" src={require('../../common/assets/faq/professor-thumbs-up3.png')} />
        <p>please, help me to identify serious business inquiries by taking in consideration the following points.</p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
