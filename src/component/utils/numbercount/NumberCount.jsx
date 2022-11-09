import React from 'react'
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
function NumberCount({trackRecord}) {
  return (
    <div className="grid grid-cols-1 mt-6 md:grid-cols-4 gap-y-12 lg:gap-y-2 gap-x-6 nunito px-8 lg:px-32 text-white">
    {trackRecord.map((item,idx) => (
      <div key={idx} className="bg-[#8076ca] text-6xl text-center font-semibold p-4  space-y-4">
        <TrackVisibility once>
          {({ isVisible }) => (
            <span className="number count">
              {isVisible ? (
                <CountUp end={item.number} duration={1} />
              ) : null}
            </span>
          )}
        </TrackVisibility>
        <hr className="h-1 mx-auto w-[60px] bg-white " />
        <p className='text-2xl'>{item.title}</p>
      </div>
    ))}
  </div>
  )
}

export default NumberCount