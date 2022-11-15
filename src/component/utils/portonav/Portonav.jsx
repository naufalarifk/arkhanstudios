import React from "react";
import { Link, useLocation } from "react-router-dom";

function Portonav() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  return (
    <div className="flex flex-row gap-2 lg:gap-5 mx-4 lg:mx-auto">
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
  );
}

export default Portonav;
