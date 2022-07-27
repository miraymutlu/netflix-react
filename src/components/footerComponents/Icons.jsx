import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Icons() {
  return (
    <div>
      <div className="bg-black text-white w-full flex">
        <div className="ml-10 cursor-pointer my-6">
          <FacebookIcon />
          <InstagramIcon className="ml-5" />
          <TwitterIcon className="ml-5" />
          <YouTubeIcon className="ml-5" />
        </div>
      </div>
    </div>
  );
}

export default Icons;
