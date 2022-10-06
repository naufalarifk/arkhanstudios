import React, { useState, useEffect } from "react";
import { BsDribbble, BsInstagram, BsBehance, BsFacebook, BsYoutube } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const {pathname} = useLocation();
  const splitLocation = pathname.split("/");
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("#000000");
  const [webLogo, setWebLogo] = useState("/images/logo2-dark.png")
  const [textColor, setTextColor] = useState("text-white")
  const [hoverTextColor, setHoverTextColor] = useState("black")
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHoverTextColor("white") : setHoverTextColor("black");
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("#000000");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10 ? setTextColor("text-white") : setTextColor("text-white");
    window.scrollY > 10 ? setWebLogo("/images/logo-mobile-01.png") : setWebLogo("/images/logo2-dark.png");
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
            <Link to='/' className="flex items-center">
              <img
                src={webLogo}
                className="mr-3 h-20"
                alt="SosFactory Logo"
              />
            </Link>
            <div className={`flex items-center lg:order-2 gap-3 ${textColor}`}>
                <BsInstagram/>
                <BsDribbble/>
                <BsBehance/>
                <BsFacebook/>
                <BsYoutube/>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
                <li>
                  <Link
                    to='/mascot-design'
                    className={`${splitLocation[1] === 'mascot-design' || splitLocation[1] === 'tee-design' || splitLocation[1] === 'kawai-design' ? 'text-white' : 'text-gray-400'} block py-2 font-semibold pr-4 pl-3`}
                    aria-current="page"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blogs'
                    className={`${splitLocation[1] === 'blogs' ? 'text-white' : 'text-gray-400'} block py-2 font-semibold pr-4 pl-3`}
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className={`${splitLocation[1] === 'about' ? 'text-white' : 'text-gray-400'} block py-2 font-semibold pr-4 pl-3`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className={`${splitLocation[1] === 'contact' ? 'text-white' : 'text-gray-400'} block py-2 font-semibold pr-4 pl-3`}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
