import React from "react";
import Hero from "../Components/Hero";
import HorizontalCard from "../Components/HorizontalCard";
import StatusCard from "../Components/StatusCard";
import category from "../json/category.json";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="flex justify-center w-full">
        <div className="sm:p-10 p-5 flex flex-wrap justify-between">
          <StatusCard name={"samosa"} />
          <StatusCard name={"candy"} />
          <StatusCard name={"snacks"} />
          <StatusCard name={"jelly"} />
        </div>
      </section>
      <section className="collections sm:p-20 p-5 w-full flex justify-center flex-col">
        <div className="heading mb-5">
          <h1 className="text-4xl font-semibold">Our Collections</h1>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
        </div>
        <div className="flex flex-wrap items-center">
          {category.map((e) => {
            return <HorizontalCard name={e.name} type={e.name} key={e.id} />;
          })}
        </div>
      </section>
      <section className="top-countries bg-gray-50 sm:p-20 p-5">
        <div className="heading mb-10">
          <h1 className="text-4xl mb-2">Popular Cities</h1>
          <p>top popular cities restaurents to explore.</p>
        </div>
        <div className="items">
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Mumbai</div>
            <div className="numbare">90000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Banglore</div>
            <div className="numbare">34000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Delhi</div>
            <div className="numbare">66000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Punjab</div>
            <div className="numbare">20000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Hyderabad</div>
            <div className="numbare">10000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Lucknow</div>
            <div className="numbare">30000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Chandigarh</div>
            <div className="numbare">9000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Goa</div>
            <div className="numbare">38000 + Restaurents</div>
          </div>
          <div className="item p-5 my-2 bg-white">
            <div className="text-2xl">Karnataka</div>
            <div className="numbare">6000 + Restaurents</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
