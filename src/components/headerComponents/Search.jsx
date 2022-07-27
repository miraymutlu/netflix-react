import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div>
      <span className="text-white cursor-pointer mr-60">
        <SearchIcon className="mr-3" />
        <input
          type="text"
          placeholder=" Movies,series,.."
          className="bg-neutral-800 h-10 w-80 rounded-md"
        />
      </span>
    </div>
  );
}

export default Search;
