import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Buttons() {
  return (
    <span>
      <button className="xs:px-1 xs:py-1 sm:px-2 sm:py-2 bg-zinc-200 text-black my-2 rounded-md w-20 place-content-center">
        <PlayArrowIcon />
        <span className="xs:text-xs sm:text-sm md:text-md">Play</span>
      </button>
      <button className="xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-3 md:py-3 xl:py-2 xl:px-2 bg-zinc-400 text-white rounded-md ml-2 w-30 place-content-center">
        <InfoIcon />
        <span className="ml-2 xs:text-xs sm:text-sm md:text-md">More information</span>
      </button>
    </span>
  );
}

export default Buttons;
