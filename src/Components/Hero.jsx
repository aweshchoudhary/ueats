import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="sm:h-[600px] h-[400px] w-full">
      <div className="slider h-full w-full flex items-center bg-gray-50">
        <div className="slide w-full h-full relative">
          <div className="back-img w-full h-full bg-black">
            <img
              src={
                "https://source.unsplash.com/random/?noodle,sweets,pasta,cookie,biscuit,icecream"
              }
              className="w-full h-full object-cover opacity-75"
              alt="background"
            />
          </div>
          <div
            className="content sm:p-20 p-5 absolute top-1/2 left-0 text-white"
            style={{ transform: "translateY(-50%)" }}
          >
            <h1 className="text-xl font-semibold uppercase mb-3">
              welcome to ueats
            </h1>
            <h1 className="sm:text-5xl text-3xl capitalize font-bold mb-3">
              Get delicious food at your doorstep.
            </h1>
            <p>order millions of tasty and delicious food at your doorstep.</p>
            <Link
              to="/main"
              className="block w-fit sm:py-5 sm:px-16 py-4 px-10 mt-5 bg-black text-white "
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
