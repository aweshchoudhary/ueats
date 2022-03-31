import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ name, type }) => {
  return (
    <Link
      to={`/main/${name}`}
      className="horizontal-card shrink-0 sm:h-[350px]  h-[250px]  rounded-xl overflow-hidden bg-black relative m-1"
    >
      <img
        src={`https://source.unsplash.com/random/?${type}`}
        className="h-full w-full object-cover"
        alt="food item"
      />
      <div
        className="bottom absolute bottom-0 left-0 w-full h-[100px] flex items-center flex-col text-white pl-3"
        style={{
          background: " rgb(10,10,10)",
          background:
            "linear-gradient(0deg, rgba(10,10,10,1) 10%, rgba(0,0,0,0.003221271418723748) 90%)",
        }}
      >
        <h1 className="sm:text-3xl text-xl font-bold capitalize">{name}</h1>
        <p>{Math.floor(Math.random() * 100000 + 1).toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default HorizontalCard;
