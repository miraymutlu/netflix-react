import React from "react";
import Buttons from "./Buttons";

export default function About() {
  return (
    <div className="mt-16">
      <img
        src="https://frpnet.net/wp-content/uploads/2022/05/love-death-robots-3-sezon-fragmani-3.jpeg"
        alt=" "
        className=" w-full pt-12 relative"
      />
      <div className="about xs:w-3/5 w-2/5 absolute flex flex-col mx-10 my-20 xs:top-20 sm:top-22 md:top-24 lg:top-52">
        <div className="font-bold text-white sm:text-md md:text-2xl lg:text-3xl">
          Love, Death &amp; Robots
        </div>
        <div className="text-slate-200 xs:text-xs sm:text-sm md:text-md lg:text-lg font-normal">
          <p className="drop-shadow-2xl">
            A collection of animated short stories that span various genres
            including science fiction, fantasy, horror and comedy.
          </p>
        </div>
        <span>
          <Buttons />
        </span>
      </div>
    </div>
  );
}
