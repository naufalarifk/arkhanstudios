import React, { useState, useEffect, Fragment } from "react";
import {
  BsDribbble,
  BsInstagram,
  BsBehance,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, Transition } from "@headlessui/react";




function Header() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("#000000");
  const [webLogo, setWebLogo] = useState("/images/logo2-dark.png");
  const [textColor, setTextColor] = useState("text-white");
  const [hoverTextColor, setHoverTextColor] = useState("black");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setHoverTextColor("white")
      : setHoverTextColor("black");
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("#000000");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10
      ? setTextColor("text-white")
      : setTextColor("text-white");
    window.scrollY > 10
      ? setWebLogo("/images/logo-mobile-01.png")
      : setWebLogo("/images/logo2-dark.png");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <header className="sticky container top-0 z-10">
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
          className="px-4 lg:px-6"
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img src={webLogo} className="mr-3 h-20" alt="SosFactory Logo" />
            </Link>
            {/* Mobile */}
            <div className="lg:hidden block">
              <Menu>
                <Menu.Button>
                  <GiHamburgerMenu className="text-white" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="flex flex-col px-8 py-2 bg-black text-white font-semibold gap-y-2 border-t border-gray-400 right-0 top-20 absolute ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-blue-500"}`}
                          to="/mascot-design"
                        >
                          Portfolio
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-blue-500"}`}
                          to="/blogs"
                        >
                          Blog
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-blue-500"}`}
                          to="/about"
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${active && "bg-blue-500"}`}
                          to="/contact"
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      <div
                        className={`items-center flex lg:order-2 mt-2 gap-3 ${textColor}`}
                      >
                        <BsInstagram />
                        <BsDribbble />
                        <BsBehance />
                        <BsFacebook />
                        <BsYoutube />
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* WEB */}
            <div
              className={`items-center hidden lg:flex lg:order-2 gap-3 ${textColor}`}
            >
              <BsInstagram />
              <BsDribbble />
              <BsBehance />
              <BsFacebook />
              <BsYoutube />
            </div>
            <ul className="hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
              <li>
                <Link
                  to="/mascot-design"
                  className={`${
                    splitLocation[1] === "mascot-design" ||
                    splitLocation[1] === "tee-design" ||
                    splitLocation[1] === "kawai-design"
                      ? "text-white"
                      : "text-gray-400"
                  } block py-2 font-semibold pr-4 pl-3`}
                  aria-current="page"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`${
                    splitLocation[1] === "blogs"
                      ? "text-white"
                      : "text-gray-400"
                  } block py-2 font-semibold pr-4 pl-3`}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    splitLocation[1] === "about"
                      ? "text-white"
                      : "text-gray-400"
                  } block py-2 font-semibold pr-4 pl-3`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    splitLocation[1] === "contact"
                      ? "text-white"
                      : "text-gray-400"
                  } block py-2 font-semibold pr-4 pl-3`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
