import React from "react";


function Items(props) {
  return (
    <div className="relative cursor-pointer border-4 border-black sm:h-40 md:h-120 lg:h-400">
      <img
        src={props.image.imageURL}
        alt=" "
        className="max-w-full"
      />
    </div>
  );
}

export default Items;