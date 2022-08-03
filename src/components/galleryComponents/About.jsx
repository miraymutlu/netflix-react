import React from "react";
import Buttons from "./Buttons";

function About() {
  return (
    <div>
      <img
        src="https://frpnet.net/wp-content/uploads/2022/05/love-death-robots-3-sezon-fragmani-3.jpeg"
        alt=" "
        className=" w-full pt-12 relative top-8"
      />
      <div className="about w-2/5 absolute flex flex-col mx-10 my-20 sm:top-20 md:top-40 lg:top-80">
        <div className="font-bold text-white text-3xl">
          Love, Death &amp; Robots
        </div>
        <div className="text-slate-200 text-lg font-normal">
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

export default About;
