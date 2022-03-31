import React from "react";

const Card = ({ food }) => {
  return (
    <div className="main-card p-3 sm:h-[400px] h-[150px] bg-white m-1 flex sm:flex-col items-center">
      <div className="img sm:w-full sm:h-3/4 h-full w-2/5">
        <img
          src={food.img}
          className="w-full h-full object-cover"
          alt={`${food.name}`}
        />
      </div>
      <div className="body pl-4 sm:py-2 sm:h-1/4 sm:w-full w-3/5">
        <div className="heading flex justify-between sm:flex-row flex-col">
          <h1 className="font-semibold sm:text-lg text-sm sm:mb-0 mb-3">
            {food.name.slice(0, 20)}
          </h1>
          <h1>$ {food.price}</h1>
        </div>
        <p className="text-gray-500 sm:text-base text-xs">
          {food.store.slice(0, 50)}
        </p>
      </div>
    </div>
  );
};

export default Card;
