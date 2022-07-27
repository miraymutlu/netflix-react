import React from "react";
import Logo from "./headerComponents/Logo"
import Search from "./headerComponents/Search"
import Profile from "./headerComponents/Profile"

const Header = () => {
  return (
    <div>
      <nav class="bg-black top-0 absolute w-full">
        <div class="px-5 py-0 flex items-center justify-between">
          <Logo />
          <Search />
          <Profile />
        </div>
      </nav>
    </div>
  );
};

export default Header;
