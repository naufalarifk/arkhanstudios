import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Portonav() {
    const {pathname} = useLocation();
    const splitLocation = pathname.split("/");
    return (
    <div className="flex flex-row gap-5 mx-auto">
    <Link
      to="/mascot-design"
      className={`mx-auto ${
        splitLocation[1] === "mascot-design"
          ? "bg-[#5C2E7E] border-[#5C2E7E]"
          : "bg-transparent"
      } text-white p-4 hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500`}
    >
      <p className="font-semibold text-lg text-center">MASCOT DESIGN</p>
    </Link>
    <Link
      to="/tee-design"
      className={`mx-auto ${
        splitLocation[1] === "tee-design"
          ? "bg-[#5C2E7E] border-[#5C2E7E]"
          : "bg-transparent"
      } bg-transparent text-white p-4 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500`}
    >
      <p className="font-semibold text-lg text-center">
        T-SHIRT DESIGN
      </p>
    </Link>
    <Link
      to="/kawai-design"
      className={`mx-auto ${
        splitLocation[1] === "kawai-chibi"
          ? "bg-[#5C2E7E] border-[#5C2E7E]"
          : "bg-transparent"
      } bg-transparent text-white p-4 hover:bg-transparent hover:bg-[#5C2E7E] hover:text-white border-black hover:border-[#5C2E7E] border-2 transform transition duration-500`}
    >
      <p className="font-semibold text-lg text-center">
        KAWAII CHIBI
      </p>
    </Link>
  </div>
  )
}

export default Portonav