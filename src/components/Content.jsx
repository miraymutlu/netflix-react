import React from "react";
import Movie from "./contentComponents/Movie";
import data from "../data/films.json"

function Content() {
  
  return (
    <div>
      <Movie data={data} header="New Movies" />
      <Movie data={data} header="Keep Watching" />
      <Movie data={data} header="You May Like" />
    </div>
  );
}

export default Content;
