import React from "react";
import "./items.css";
import { useSelector } from "react-redux";

function Items() {
  const movies = useSelector((state) => state.movies.items);
  return (
    <div className="container relative cursor-pointer border-4 border-black h-40 sm:h-32 lg:h-36 xl:h-36 2xl:h-60">
      <div className="item">
        {movies.map((movie) => (
          <div key={movie.items[1].id}>
            <img
              src={movie.items[1].image}
              alt={movie.items[1].title}
              className="movie"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
