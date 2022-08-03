import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Buttons() {
  return (
    <span>
      <button className="px-2 py-2 bg-zinc-200 text-black mr-2 my-2 rounded-md w-20 place-content-center">
        <PlayArrowIcon />
        <span className="ml-2 font-medium">Play</span>
      </button>
      <button className="px-2 py-2 bg-zinc-400 text-white rounded-md w-30 place-content-center">
        <InfoIcon />
        <span className="ml-2 font-medium">More information</span>
      </button>
    </span>
  );
}

export default Buttons;
