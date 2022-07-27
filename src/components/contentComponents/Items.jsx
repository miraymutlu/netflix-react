import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import NotInterestedIcon from "@mui/icons-material/NotInterested";


function Items() {
  return (
    <div style={{ 'width': 280, 'height': 160 , 'position': 'relative'}} className=" bg-black relative text-black hover:text-white text-xs hover:text-base">
      <img
        src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
        alt=" "
        className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-48"
      />
      <div>
        <div className="cursor-pointer">
          <PlayCircleIcon />
          <CheckCircleOutlineIcon />
          <RecommendIcon />
          <NotInterestedIcon />
        </div>
        <span>
          <p className>
            Going through a tough time, lawyer Jimmy McGill tries to leave his
            dark past behind. But it's hard to let go of old habits when a great
            opportunity arises.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Items;
