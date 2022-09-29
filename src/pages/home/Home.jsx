import React from "react";
import Wrapper from "../../component/wrapper";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";
import Background from "../../common/assets/jumbotron/jumbotron.png";
const Home = () => {
  const servicesData = [
    {
      id: 1,
      picture: require("../../common/assets/services/Mascot_design.png"),
      name: "Mascot Design",
      desc: "Creating mascot illustrations for you, your brand, and your company. It represent uniqueness, authentic of your soul and character.",
    },
    {
      id: 2,
      picture: require("../../common/assets/services/T-Shirt_design.png"),
      name: "T-shirt Design",
      desc: "Visualize your idea into a t-shirt design in cartoon and anime characters. Let your merch speak louder with beautifully illustrated.",
    },
    {
      id: 3,
      picture: require("../../common/assets/services/KAWAII_design.png"),
      name: "Kawaii Chibi illustration",
      desc: "Cute Chibi Illustration becoming the new trend. Express your idea and visualize them into the Cute Chibi illustration",
    },
    {
      id: 4,
      picture: require("../../common/assets/services/children_book.png"),
      name: "Storybook illustration",
      desc: "Story transform values in centuries. Visualizing the story to transform values is a must in this rapid information era.",
    },
  ];
  const faqList = [
    {
      title: "HOW MANY REVISIONS DO YOU OFFER IN YOUR DESIGN PROCESS?",
      content: `I offer a premium custom design service and I guarantee full satisfaction. Revisions will be the necessary in order to achieve the objective set.
    
                My design process is sequential so we’ll do the work in stages – briefing, conceptualisation, sketch and final design – and we’ll make all the revisions you need (within reason) but when one stage is approved we can’t turn back again. If it happens I may charge a fee.
                
                `,
    },
    {
      title: "WILL YOU REFUND MY MONEY IF I DON'T LIKE YOUR WORK?",
      content: `If I can’t deliver perfection then I will charge just for the work you approved so until you approve the preliminary sketch, you are elegible for a full refund.`,
    },
    {
      title: "WHO OWNS THE COPYRIGHT OF MY DESIGNS?",
      content: `Copyright of the final work is yours upon receipt of final payment. By default I reserve the right to claim the authorship of the artwork, meaning that once the designs are public I can list it in my social networks and portfolio.
    
          Any unapproved sketch created during your order, that of course is different enough to the final design, belongs to me.
          
          `,
    },
    {
      title: "CAN YOU KEEP MY DESIGN PROJECT CONFIDENTIAL?",
      content: `My portfolio is my only marketing tool so otherwise stated, I keep the right to display the outcome of any design order in the SOSFactory portfolio, blog or social profiles in order to promote my work.
    
          If you need a Non-Disclosure Agreement signed by me, please let me know upfront as it may chance the price of the service.`,
    },
    {
      title: "CAN I MAKE MODIFICATIONS TO MY DESIGN?",
      content: `Art is very personal and requires expert skills, it’s also about style, if you make changes it could lose all consistency.
    
            If after your project is finished you want make any change I suggest you contact me to discuss your new needs, I will do everything on my hand to achieve your new goals at the minimum cost.`,
    },
    {
      title: "WHICH PAYMENT METHODS CAN I USE TO ORDER MY COMPANY BRANDING?",
      content: `The most common and quick payment is PayPal, altough I also accept bank transfer or any other secure payment method like Western Union.`,
    },
    {
      title:
        "I CAN'T AFFORD YOUR SERVICES... CAN YOU OFFER ME MORE AFFORDABLE SOLUTIONS?",
      content: `Yes, from time to time I like to create mascot and logos just for fun,  a way to monetise this hobby is selling it as royalty stock design.
    
            Otherwise stated you can use this design for commercial purposes as long as you don’t sell it, license it or redistribute it.`,
    },
  ];
  const imageSrc = [
    { id: 1, src: require("../../common/assets/projects/1.png") },
    { id: 2, src: require("../../common/assets/projects/2.png") },
    { id: 3, src: require("../../common/assets/projects/3.png") },
    { id: 4, src: require("../../common/assets/projects/4.png") },
    { id: 5, src: require("../../common/assets/projects/5.png") },
    { id: 6, src: require("../../common/assets/projects/6.png") },
    { id: 7, src: require("../../common/assets/projects/7.png") },
    { id: 8, src: require("../../common/assets/projects/8.png") },
    { id: 9, src: require("../../common/assets/projects/9.jpg") },
    { id: 10, src: require("../../common/assets/projects/10.jpg") },
    { id: 11, src: require("../../common/assets/projects/11.jpg") },
    { id: 12, src: require("../../common/assets/projects/12.png") },
    { id: 13, src: require("../../common/assets/projects/13.png") },
    { id: 14, src: require("../../common/assets/projects/14.jpg") },
    { id: 15, src: require("../../common/assets/projects/15.png") },
    { id: 16, src: require("../../common/assets/projects/16.jpg") },
  ];

  const logoSrc = [
    {
      id: 1,
      src: require("../../common/assets/projects/hasbro-logo.png"),
    },
    {
      id: 2,
      src: require("../../common/assets/projects/nestle-logo.png"),
    },
    {
      id: 3,
      src: require("../../common/assets/projects/salesforce-logo.png"),
    },
    {
      id: 4,
      src: require("../../common/assets/projects/toyota-logo.png"),
    },
    {
      id: 5,
      src: require("../../common/assets/projects/mccormick-logo.png"),
    },
    {
      id: 6,
      src: require("../../common/assets/projects/maersk-logo.png"),
    },
  ];
  const trackRecord = [
    { title: "CUSTOMERS", number: 378 },
    { title: "ORDERS", number: 804 },
    { title: "REFUNDS", number: 12 },
    { title: "%REFUND", number: 2 },
  ];
  return (
    <Wrapper>
      {/* Jumbotron */}
      <section className="container flex lg:flex-row flex-col h-auto w-[100%] bg-[#8BBCCC]">
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
          }}
          className="lg:w-[100vw] lg:h-[125vh] lg:bg-[length:100vw_125vh] bg-[length:100vw_50vh] w-[100vw] h-[50vh]"
        >
          <h1 className="text-[#bdb9a5] font-bold mt-24 text-4xl text-center invisible">
            Hi, We're Arkhan Studio
          </h1>
          <div className="flex flex-row justify-center space-x-10 mt-10 invisible">
            <button className="hover:bg-[#bdb9a5] text-[#bdb9a5] p-2 bg-transparent hover:text-violet-800 border-[#bdb9a5] border-2 transform transition duration-500">
              <p className="font-semibold">PORTFOLIO</p>
            </button>{" "}
            <button className="hover:bg-[#bdb9a5] text-[#bdb9a5] p-2 bg-transparent hover:text-violet-800 border-[#bdb9a5] border-2 transform transition duration-500">
              <p className="font-semibold">SERVICES</p>
            </button>
          </div>
        </div>
      </section>
      {/* Design Services */}
      <section className="container space-y-4 p-8 bg-[#8BBCCC]">
        <p className="mx-auto text-center p-4 text-black text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
          DESIGN SERVICES I PROVIDE
        </p>
        <p className="text-center nunito text-black">
          A selection of my preferred projects I have created during the last 15
          years.
        </p>
        <div className="flex lg:flex-row flex-col gap-4 nunito text-black">
          {servicesData.map((item) => (
            <div className={`px-4 pb-4 space-y-6 flex flex-col items-center`}>
              <img
                className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
                style={{
                  transition: "all 1s",
                }}
                src={item.picture}
                alt=""
              />
              <div className="space-y-2 flex flex-col nunito">
                <h1 className="font-bold text-base text-center">{item.name}</h1>
                <p className="text-sm text-center">{item.desc}</p>
                <button className="mx-auto bg-transparent text-black p-2 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500">
                  <p className="font-semibold">MORE</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Graphic Design Projects */}
      <section className="bg-[#8BBCCC] container space-y-4 p-8 relative flex flex-col text-black">
        {" "}
        <p className="mx-auto text-center p-4 text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
          PORTFOLIO
        </p>
        <p className="text-center nunito">
          Here are some of our masterpieces that clients love it so much!
        </p>
        <div className="grid lg:grid-cols-6 grid-cols-2">
          {logoSrc.map((item) => (
            <img src={item.src} alt="" />
          ))}
        </div>
        <div className="flex md:grid md:grid-cols-2 flex-col gap-y-12 lg:gap-y-2 gap-x-2 nunito">
          {trackRecord.map((item) => (
            <div className="bg-[#4C6793] text-4xl text-center p-10 font-semibold rounded-lg space-y-4">
              <h1>{item.number}</h1>
              <hr className="h-1 mx-auto w-[60px] bg-black " />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 nunito">
          <h1 className="text-center text-2xl mt-20">
            NOT ENOUGH PORTFOLIO SAMPLES?
          </h1>
          <p className="text-center text-lg">
            Enjoy some case studios, rationalisation behind my choices or work
            in progress images.
          </p>
        </div>
        <button className="mx-auto rounded-lg bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
          <p className="font-semibold">VISIT MY PORTOFOLIO</p>
        </button>
      </section>

      <section className="bg-[#8BBCCC] container space-y-4 p-8 relative flex flex-col">
        {" "}
        <p className="mx-auto text-center p-4 text-lg md:text-2xl lg:text-4xl font-bold rounded-lg">
          PORTFOLIO
        </p>
            <p className="text-center p-4 text-lg font-bold">We’re illustration studio consist of 10+ passionate and talented people working in the illustration industry since 2008 started by Kudjo, our band leader.
We help small and big companies to achieve their goal using visuals. We believe that nowadays good visual is good business. We also help my fellow illustrator and designer through my blog and social media.
</p>
      </section>

      {/* FAQ */}
      <section className="container space-y-10 p-8 bg-[#8BBCCC]">
        <p className="mx-auto text-center p-8 text-white bg-black text-lg md:text-2xl lg:text-4xl font-semibold rounded-lg inter">
          FREQUENTLY ASKED QUESTIONS
        </p>
        {/* disclosure */}
        <div className="flex lg:flex-row-reverse flex-col-reverse mt-11 gap-y-10 justify-evenly">
          <section className="w-full lg:px-4 lg:w-[37rem] space-y-4 nunito">
            {faqList.map((item) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white shadow-md px-4 py-2 text-left text-base lg:text-lg font-semibold focus:outline-none">
                      <span className="lg:w-3/4 w-4/5">{item.title}</span>
                      <AiFillCaretDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-4 w-4 text-black`}
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
          <div className="w-full md:w-96 md:max-w-full nunito">
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
                    className="mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500 rounded-lg"
                  >
                    <p className="font-semibold">CONTACT US</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
