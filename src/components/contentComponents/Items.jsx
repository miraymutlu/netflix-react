import React from "react";
import "./items.css"

function Items(props) {
  return (
    <div className="container relative cursor-pointer border-4 border-black h-20 sm:h-32 lg:h-56">
      <div className= "item">
        <img
          src={props.image.imageURL}
          alt=" "
          className="object-fill"
        />
      </div>
    </div>
  );
}

export default Items;