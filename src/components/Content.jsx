import React from "react";
import Movie from "./contentComponents/Movie";
import data from "../data/films.json"

function Content() {
  
  return (
    <div>
      <Movie data={data.filter(movie => movie.category === "new")} header="New Movies" />
      <Movie data={data.filter(movie => movie.category === "keep_watching")} header="Keep Watching" />
      <Movie data={data.filter(movie => movie.category === "you_may_like")} header="You May Like" />
    </div>
  );
}

export default Content;
