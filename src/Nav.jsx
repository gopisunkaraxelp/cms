import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="lg:w-[250px] md:w-[150px] sm:w-[100px] ">
      <nav className=" bg-teal-700 w-[100vw] x-50  text-white align-middle align-items-center justify-center  py-1">
        <div className="flex flex-row  px-1 ">
          <img
            src="https://www.media4growth.com/public/uploads/editor/2019-11-21/1574306328.jpg"
            class="h-12 w-20  rounded-full "
          ></img>

          <h2 className="pt-2 text-2xl">
            {" "}
            <span>X</span>
            <span className="text-orange-500">E</span>
            <span className="">L</span>
            <span className="">P</span>
            <span className="">M</span>
            <span className="text-blue-800">O</span>
            <span className="">C</span>
          </h2>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
