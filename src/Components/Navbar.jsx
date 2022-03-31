import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header sm:h-[100px] h-[75px] w-full overflow-hidden">
      <nav className="w-full h-full flex justify-between items-center sm:px-20 px-5 py-5">
        <div className="logo">
          <Link to="/" className="text-3xl font-bold">
            UEATS
          </Link>
        </div>
        <div className="links flex items-center">
          <Link to={"/"} className="mr-3">
            Home
          </Link>
          <Link
            to={"/main"}
            className="search py-3 px-4 rounded-full bg-gray-100"
          >
            <div className="w-full">
              <i class="fi fi-rr-search"></i>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
