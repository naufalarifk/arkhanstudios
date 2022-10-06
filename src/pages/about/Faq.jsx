import React from "react";
import Sidebar from "../../component/utils/sidebar/Sidebar";
import Wrapper from "../../component/wrapper";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
    const faqList = [
        {
          title: "Please talk to me",
          content: `Let me know who you are and how can I help you.
          `,
        },
        {
          title: "Looking for a cheap design?",
          content: `Creating custom graphics is time-consuming and requires a lot of work, so I charge accordingly.
          `,
        },
        {
          title: "Looking for quick designs?",
          content: `Booking your order a couple of weeks upfront will result in a better price.
          `,
        },
        {
          title: "50% payment in advance is required.",
          content: `Working for free is the last thing I would like to do in my free time, a down payment helps me to discriminate serious job offers from the rest.`,
        },
        {
          title: "About confidentiality.",
          content: `My portfolio is my marketing tool, otherwise stated I reserve the right to publish any work made by order. Please, contact me to discuss your needs.`,
        },
        {
          title: "Please have a look to my portfolio.",
          content: `Please have a look to my portfolio before requesting a quote and make sure that I’m the right designer for your project.`,
        },
      ];
  return (
    <Wrapper>
      <section className="container p-0 px-8 lg:p-16 flex flex-col lg:flex-row justify-between bg-[#512995] text-white">
        <Sidebar/>
        <section className="w-full lg:w-[70%]">
          <h1 className="font-bold text-4xl">Frequently Asked Question</h1>
          <div className="mt-6">
          <section className="w-full lg:w-[37rem] space-y-4 nunito text-black">
            {faqList.map((item) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white shadow-md px-4 py-2 text-left text-base lg:text-lg font-semibold focus:outline-none">
                      <span className="lg:w-3/4 w-4/5">{item.title}</span>
                      <AiFillCaretDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-4 w-4 text-white`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 leading-loose bg-white shadow-md rounded-lg">
                        {item.content}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </section>
        </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Faq;
