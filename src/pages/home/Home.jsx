import React, { useEffect, useState } from "react";
import Wrapper from "../../component/wrapper";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import NumberCount from "../../component/utils/numbercount/NumberCount";
import { Api } from "../../api";
import Man from "../../common/assets/home/Man1.png";
import GrainBg from "../../common/assets/Rectangle.png";
import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
    {
      id: 1,
      name: "row_one",
      images: [
        {
          src_one: require("../../common/assets/projects/15.png"),
          src_two: require("../../common/assets/projects/16.jpg"),
          src_three: require("../../common/assets/projects/7.png"),
          src_four: require("../../common/assets/projects/8.png"),
        },
      ],
    },
    {
      id: 2,
      name: "row_one",
      images: [
        {
          src_one: require("../../common/assets/projects/15.png"),
          src_two: require("../../common/assets/projects/16.jpg"),
          src_three: require("../../common/assets/projects/7.png"),
          src_four: require("../../common/assets/projects/8.png"),
        },
      ],
    },
    {
      id: 3,
      name: "row_one",
      images: [
        {
          src_one: require("../../common/assets/projects/15.png"),
          src_two: require("../../common/assets/projects/16.jpg"),
          src_three: require("../../common/assets/projects/7.png"),
          src_four: require("../../common/assets/projects/8.png"),
        },
      ],
    },
    {
      id: 4,
      name: "row_one",
      images: [
        {
          src_one: require("../../common/assets/projects/15.png"),
          src_two: require("../../common/assets/projects/16.jpg"),
          src_three: require("../../common/assets/projects/7.png"),
          src_four: require("../../common/assets/projects/8.png"),
        },
      ],
    },
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

  const getHomePortofolio = async () => {
    try {
      let res = await Api.get(
        process.env.REACT_APP_API + "/api/home-portofolios?populate=*"
      );
      setItems(res.data.data[0].attributes.homePortofolio.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHomePortofolio();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {/* Design Services */}
      <section
        style={{
          backgroundImage: `url(${GrainBg})`,
          backgroundRepeat: "no-repeat",
        }}
        className="container space-y-4 p-8 bg-[#512995]"
      >
        <p className="mx-auto text-center p-4 text-white text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
          DESIGN SERVICES I PROVIDE
        </p>
        <p className="text-center nunito text-white">
          A selection of my preferred projects I have created during the last 15
          years.
        </p>
        <div className="flex lg:flex-row flex-col gap-4 nunito text-white">
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
                <button className="mx-auto bg-transparent text-white p-2 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500">
                  <p className="font-semibold text-xs">MORE</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Graphic Design Projects */}
      <section className="bg-[#512995] container p-8 relative flex flex-col text-white">
        <p className="mx-auto text-center my-2 p-4 text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
          See Some of Our Masterpieces
        </p>
        <p className="text-center nunito text-gray-300 my-6">
          Here are some of our masterpieces that clients love it so much!
        </p>
        <div className="gap-0 grid lg:grid-cols-4 grid-cols-2">
          {items.map((item) => (
            <img src={item.attributes.url} alt="" />
          ))}
        </div>
        <div className="space-y-4 nunito">
          <h1 className="text-center text-2xl mt-20">
            NOT ENOUGH PORTFOLIO SAMPLES?
          </h1>
          <p className="text-center text-lg">
            Enjoy some of cas studies, the logic behind the art we produce
          </p>
        </div>
        <button className="mx-auto bg-[#7f56d9] text-white p-2 my-10">
          <p className="font-semibold">VISIT MY PORTOFOLIO</p>
        </button>
        <NumberCount trackRecord={trackRecord} />
      </section>
      <section className="flex md:flex-col lg:flex-row items-center justify-evenly p-24 bg-[#512995] text-white">
        <img className="w-[300px] h-[300px]" src={Man} alt="" />
        <div className="lg:w-[50%] space-y-8 w-full">
          <h1 className="text-3xl font-bold text-center w-1/2 lg:text-left">
            Get To Know More About Us
          </h1>
          <p className="lg:text-left text-center">
            We’re illustration studio consist of 10+ passionate and talented
            people working in the illustration industry since 2008 started by
            Kudjo, our band leader. We help small and big companies to achieve
            their goal using visuals. We believe that nowadays good visual is
            good business. We also help my fellow illustrator and designer
            through my blog and social media.
          </p>
          <button className="flex flex-row items-center space-x-2">
          <p>Know More</p> <BsArrowRight />
          </button>
        </div>
      </section>
      {/* FAQ */}
      <section className="container p-8 bg-[#512995]">
        <p className="mx-auto text-center p-4 text-white text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-center mb-16 text-gray-300">Everything you need to know about the service and products.</p>
        {/* disclosure */}
        <div className="flex lg:flex-row-reverse flex-col-reverse mt-11 gap-y-10 justify-evenly">
          <section className="w-full lg:px-4 lg:w-[37rem] space-y-4 nunito">
            {faqList.map((item) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between bg-transparent px-4 py-2 text-left text-base lg:text-lg font-semibold focus:outline-none">
                      <span className="lg:w-3/4 text-white w-4/5">{item.title}</span>
                      <AiFillCaretDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-4 w-4 text-white`}
                      />
                    </Disclosure.Button>
                    <hr className=""/>
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
          </section>
        </div>
      </section>
      <section className="w-full md:w-96 md:max-w-full nunito hidden">
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
                className="mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-white border-black border-2 transform transition duration-500 rounded-lg"
              >
                <p className="font-semibold">CONTACT US</p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
