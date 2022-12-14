import React, { useState, useEffect } from "react";
import Wrapper from "../../component/wrapper";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";

const Contact = () => {
  const [value, setValue] = useState();
  const faqList = [
    {
      title: "How many revisions do you offer in your design process?",
      content: `I offer a premium custom design service and I guarantee full satisfaction. Revisions will be the necessary in order to achieve the objective set.
    
                My design process is sequential so we’ll do the work in stages – briefing, conceptualisation, sketch and final design – and we’ll make all the revisions you need (within reason) but when one stage is approved we can’t turn back again. If it happens I may charge a fee.
                
                `,
    },
    {
      title: "Will you refund my money if I don't like your work?",
      content: `If I can’t deliver perfection then I will charge just for the work you approved so until you approve the preliminary sketch, you are elegible for a full refund.`,
    },
    {
      title: "Who owns the copyright of my designs?",
      content: `Copyright of the final work is yours upon receipt of final payment. By default I reserve the right to claim the authorship of the artwork, meaning that once the designs are public I can list it in my social networks and portfolio.
    
          Any unapproved sketch created during your order, that of course is different enough to the final design, belongs to me.
          
          `,
    },
    {
      title: "Can you keep my design project confidential?",
      content: `My portfolio is my only marketing tool so otherwise stated, I keep the right to display the outcome of any design order in the SOSFactory portfolio, blog or social profiles in order to promote my work.
    
          If you need a Non-Disclosure Agreement signed by me, please let me know upfront as it may chance the price of the service.`,
    },
    {
      title: "Can I make modifications to my design?",
      content: `Art is very personal and requires expert skills, it’s also about style, if you make changes it could lose all consistency.
    
            If after your project is finished you want make any change I suggest you contact me to discuss your new needs, I will do everything on my hand to achieve your new goals at the minimum cost.`,
    },
    {
      title: "Which payment methods can I use to order my company branding?",
      content: `The most common and quick payment is PayPal, altough I also accept bank transfer or any other secure payment method like Western Union.`,
    },
    {
      title:
        "I Can't afford your services... can you offer me more affordable solutions?",
      content: `Yes, from time to time I like to create mascot and logos just for fun,  a way to monetise this hobby is selling it as royalty stock design.
    
            Otherwise stated you can use this design for commercial purposes as long as you don’t sell it, license it or redistribute it.`,
    },
  ];

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Wrapper>
      <section className="p-8 lg:p-24 bg-[#512995] space-y-10">
        <h1 className="text-white font-bold text-4xl text-center">
          Let&apos;s level up your Idea, together
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 gap-x-20">
          <div className="w-full md:w-1/2 md:max-w-full nunito">
            <div className="p-6 ">
              <form method="POST" action="https://herotofu.com/start">
                <label className="block mb-6">
                  <span className="text-white">Name</span>
                  <input
                    type="text"
                    name="name"
                    className="
            block
            w-full
            mt-1
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
          "
                    placeholder="Enter Your Name"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-white">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="
            block
            w-full
            mt-1
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
            "
                    placeholder="Enter Your Email"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-white">Phone Number</span>
                  <div className="bg-white p-2">
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </label>
                <label class="block mb-6">
                  <span class="text-white">Message</span>
                  <textarea
                    name="message"
                    class="
            block
            w-full
            mt-1
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
            "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <label class="block mb-6">
                  <span class="text-white">Services</span>
                </label>
                <ul className="grid grid-cols-2 text-white">
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>Mascot Design</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>T-Shirt and Merch</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>Chibi Kawaii</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>Cartoon and Comic</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>Storybook</label>
                  </li>
                  <li className="space-x-2">
                    <input type="checkbox" />
                    <label>Other</label>
                  </li>
                </ul>
                <div class="my-6">
                  <button
                    type="submit"
                    className="w-full bg-[#7f56d9] text-white p-2"
                  >
                    <p className="font-semibold">Get Started</p>
                  </button>
                </div>
              </form>
              <div className="text-white space-y-4">
                <h1 className="text-6xl font-semibold">Need to Talk?</h1>
                <p>You can reach us anytime via </p>
                <p className="text-[#FF44EC]">arkhanstudio@gmail.com</p>
                <p className="text-[#FF44EC]">+62 856-4040-5925</p>
              </div>
            </div>
          </div>
          <section className="w-full lg:px-4 lg:w-[37rem] space-y-4 nunito">
            {faqList.map((item) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between bg-transparent px-4 py-2 text-left text-base lg:text-lg font-semibold focus:outline-none">
                      <span className="lg:w-3/4 text-white w-4/5">
                        {item.title}
                      </span>
                      <AiFillCaretDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-4 w-4 text-white`}
                      />
                    </Disclosure.Button>
                    <hr className="" />
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 leading-loose bg-transparent">
                        {item.content}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
            <div class="my-6">
              <button
                type="submit"
                className="w-full bg-[#7f56d9] text-white p-2"
              >
                <p className="font-semibold">More Questions? Please, visit my F.A.Q</p>
              </button>
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
