import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Items from "./Items";

function YouMayLike() {
  return (
    <div className="w-full my-10 bg-black text-white hover:mb-40">
      <h className="text-2xl font-medium ml-10">You May Like</h>
      <div className="relative flex my-3 mb-10">
        <ArrowBackIosNewIcon className="absolute top-16 cursor-pointer"/>
        <span className="w-120 h-40 ml-5 mr-5 bg-white flex justify-between">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </span>
        <ArrowForwardIosIcon className="absolute top-16 right-0 cursor-pointer"/>
      </div>
    </div>
  );
}

export default YouMayLike;
