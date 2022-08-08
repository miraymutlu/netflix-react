import React from "react";
import "./items.css"

function Items(props) {
  return (
    <div className="container relative cursor-pointer border-4 border-black xs:h-40 xs:ml-1 sm:h-44 lg:h-32 xl:h-34 2xl:h-44 3xl:h-60">
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