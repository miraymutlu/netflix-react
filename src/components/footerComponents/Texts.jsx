import React from "react";

function Texts(props) {
  return (
    <div>
      <div className="bg-black text-gray-600 font-bold h-24">
        <ul className="mx-10 flex flex-wrap cursor-pointer place-items-center text-xs">
          {props.data?.map(x=>(<li key={x.id} className="mt-2 mr-2  basis-4/7">{x.text}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default Texts;
