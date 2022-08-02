import React from "react";
import "./items.css"

function Items(props) {
  return (
    <div className="container relative cursor-pointer border-4 border-black md:h-40 lg:h-60 xl:h-68">
      <div className="item">
        <img
          src={props.image.imageURL}
          alt=" "
        />
      </div>
    </div>
  );
}

export default Items;