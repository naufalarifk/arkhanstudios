import React from 'react'
import {
  BsDribbble,
  BsInstagram,
  BsBehance,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="space-y-12 bg-[#512995] text-white pt-20">
    <section className="flex flex-col lg:flex-row justify-between w-4/5 mx-auto">
      <h1 className="font-bold text-2xl">Contact Us to Start <br/> Visualize Your Idea</h1>
      <form className="flex flex-row my-2 space-x-2 w-full lg:w-3/5 justify-between">
          <input type='text' placeholder="enter your email here" className="border-2 border-[#7f56d9] focus:border-[#7f56d9] px-2 py-1 input-middle lg:w-full" />
          <button className="bg-[#7f56d9] text-xs px-1 lg:px-3 py-1 text-white lg:w-1/5">Contact Us</button>
      </form>
    </section>
    <hr className="w-4/5 mx-auto"/>
    <section  className="flex flex-col lg:flex-row justify-around w-4/5 mx-auto">
  <div className="w-full lg:w-1/2 space-y-4 mb-12">
      <h1 className="font-bold">About <br/> Arkhan Studio</h1>
      <p className="">We are illustration company who have NFT Art, mascot and cartoon character, t-shirt and merch, and anime illustration services. We also do graphic and presentation design for life.</p>
      <div
              className={`items-center flex lg:order-2 gap-3 text-white`}
            >
              <BsInstagram />
              <BsDribbble />
              <BsBehance />
              <BsFacebook />
              <BsYoutube />
            </div>
  </div>
  <div className="flex flex-row justify-evenly w-full lg:w-1/2">
  <ul className='space-y-2'>
      <p className="font-bold">Company</p>
      <li>About</li>
      <li>Works</li>
      <li>Service</li>
      <li>Blog</li>
  </ul>
  <ul className='space-y-2'>
      <p className="font-bold">Company</p>
      <li>FAQ</li>
      <li>Contact Us</li>
      <li>Book a Service</li>
      <li>Payment</li>
  </ul>
  </div>
    </section>
  </footer>
  )
}

export default Footer