import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card";
import products from "../json/food.json";
import index from "../api/algolia";

const Main = () => {
  const { type } = useParams();
  const [foods, setFoods] = useState([]);
  const handleChange = (value) => {
    index
      .search(value)
      .then(({ hits }) => {
        setFoods(hits);
        console.log(hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!type) {
      setFoods(products);
    } else {
      index
        .search(type)
        .then(({ hits }) => {
          setFoods(hits);
          console.log(hits);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [type]);

  return (
    <>
      <header className="w-full sm:p-20 p-5">
        <div className="items flex items-center justify-center sm:space-x-20 space-x-5 sm:text-2xl text-sm font-semibold uppercase">
          <Link
            to="/main/breakfast"
            className="item flex items-center justify-center"
          >
            <i className="fi fi-ss-hamburger-soda sm:text-6xl text-2xl mr-3"></i>
            <div className="name">breakfast</div>
          </Link>
          <Link
            to="/main/lunch"
            className="item flex items-center justify-center"
          >
            <i className="fi fi-sr-pizza-slice sm:text-6xl text-2xl mr-3"></i>
            <div className="name">lunch</div>
          </Link>
          <Link
            to="/main/dinner"
            className="item flex items-center justify-center"
          >
            <i className="fi fi-sr-restaurant sm:text-6xl text-2xl mr-3"></i>
            <div className="name">dinner</div>
          </Link>
        </div>
        <div className="search-input w-full sm:mt-20 my-5 sm:h-[70px] h-[50px] px-7 bg-gray-50 rounded-full ">
          <input
            type="text"
            name="name"
            className="w-full outline-none h-full bg-gray-50"
            placeholder="search food, restaurent, area, etc"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </header>
      <section className="w-full bg-gray-50 py-10 ">
        <div className="cards flex items-center flex-wrap justify-center">
          {foods.map((e) => {
            return <Card food={e} key={e.objectID} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
