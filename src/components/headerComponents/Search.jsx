import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="p-2">
      <span className="text-white cursor-pointer object-contain">
        <SearchIcon/>
        <input
          type="text"
          placeholder=" Movies,series,.."
          className="text-xs bg-neutral-800 h-10 w-24 xs:w-28 sm:w-32 md:w-80 rounded-md"
        />
      </span>
    </div>
  );
}

export default Search;
