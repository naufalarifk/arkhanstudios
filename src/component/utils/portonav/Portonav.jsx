import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import React , { Fragment, useEffect, useRef, useState } from 'react'
import {FaChevronDown} from 'react-icons/fa'

function Portonav() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className="lg:flex hidden flex-row gap-2 lg:gap-5 mx-4 lg:mx-auto">
        <Link
          to="/mascot-design"
          className={`mx-auto ${
            splitLocation[1] === "mascot-design"
              ? "bg-[#7F56D9] border-[#7F56D9] text-white"
              : "text-[#7F56D9] bg-white"
          } p-4 border-[#7F56D9] border-2 transform transition duration-500`}
        >
          <p className="font-semibold text-base text-center">MASCOT DESIGN</p>
        </Link>
        <Link
          to="/tee-design"
          className={`mx-auto ${
            splitLocation[1] === "tee-design"
              ? "bg-[#7F56D9] border-[#7F56D9] text-white"
              : "bg-white text-[#7F56D9]"
          } bg-transparent  p-4 border-[#7F56D9] border-2 transform transition duration-500`}
        >
          <p className="font-semibold text-base text-center">T-SHIRT DESIGN</p>
        </Link>
        <Link
          to="/storybook"
          className={`mx-auto ${
            splitLocation[1] === "storybook"
              ? "bg-[#7F56D9] border-[#7F56D9] text-white"
              : "text-[#7F56D9] bg-white"
          } bg-transparent p-4 border-[#7F56D9] border-2 transform transition duration-500`}
        >
          <p className="font-semibold text-base text-center">STORYBOOK</p>
        </Link>{" "}
        <Link
          to="/kawai-design"
          className={`mx-auto ${
            splitLocation[1] === "kawai-design"
              ? "bg-[#7F56D9] border-[#7F56D9] text-white"
              : "text-[#7F56D9] bg-white"
          } bg-transparent p-4 border-[#7F56D9] border-2 transform transition duration-500`}
        >
          <p className="font-semibold text-base text-center">KAWAII CHIBI</p>
        </Link>{" "}
        <Link
          to="/other-design"
          className={`mx-auto ${
            splitLocation[1] === "other-design"
              ? "bg-[#7F56D9] border-[#7F56D9] text-white"
              : "text-[#7F56D9] bg-white"
          } bg-transparent p-4 border-[#7F56D9] border-2 transform transition duration-500`}
        >
          <p className="font-semibold text-base text-center">OTHERS</p>
        </Link>
      </div>
      <div className="lg:hidden">
      <Menu as="div" className="flex">
        <div className="mx-auto">
          <Menu.Button open className="mx-auto inline-flex items-center gap-x-2 w-full justify-center bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {splitLocation[1].charAt(0).toUpperCase() + splitLocation[1].slice(1).replace(/-/g, " ")}
            <FaChevronDown className={``}/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-9 mt-12 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to='/mascot-design'
                  >
                    Mascot design
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  to='/tee-design'
                  >
                    T-shirt design
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to='/storybook'
                  >
                    Storybook
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to='/kawai-design'
                  >
                    Kawai design
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to='/other-design'
                  >
                    Other design
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      </div>
    </>
  );
}

export default Portonav;