import React from "react";
import Logo from "./headerComponents/Logo";
import Search from "./headerComponents/Search";
import Profile from "./headerComponents/Profile";

const Header = () => {
  return (
    <nav className="top-0 absolute flex justify-between w-full p-5">
        <Logo />
        <Search />
        <Profile />
    </nav>
  );
};

export default Header;
