import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-7xl space-y-6 bg-[#512995] text-white">
    <section className="flex flex-row justify-between w-4/5 mx-auto">
      <h1 className="font-bold text-2xl">Contact Us to Start <br/> Visualize Your Idea</h1>
      <form className="flex flex-row space-x-2 my-2">
          <input type='text' placeholder="enter your email here" className="border-2 border-[#7f56d9] focus:border-[#7f56d9] px-2 py-1 input-middle" />
          <button className="bg-[#7f56d9] px-3 py-1 text-white">Contact Us</button>
      </form>
    </section>
    <hr className="w-4/5 mx-auto"/>
    <section  className="flex flex-row justify-around w-4/5 mx-auto">
  <div className="w-1/2 space-y-4">
      <h1 className="font-bold">About <br/> Arkhan Studio</h1>
      <p className="">We are illustration company who have NFT Art, mascot and cartoon character, t-shirt and merch, and anime illustration services. We also do graphic and presentation design for life.</p>
      <ul className="flex flex-row gap-x-3">
      </ul>
  </div>
  <div className="flex flex-row justify-evenly w-1/2">
  <ul>
      <p className="font-bold">Company</p>
      <li>About</li>
      <li>Works</li>
      <li>Service</li>
      <li>Blog</li>
  </ul>
  <ul>
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