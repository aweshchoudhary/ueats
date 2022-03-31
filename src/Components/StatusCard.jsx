import React from "react";

const StatusCard = ({ name }) => {
  return (
    <div className="status-card shrink-0 relative bg-black rounded-xl overflow-hidden my-3 md:h-[300px] h-[150px]">
      <img
        src={`https://source.unsplash.com/random/?${name}`}
        className="w-full h-full object-cover"
        alt="food item"
      />
    </div>
  );
};

export default StatusCard;
