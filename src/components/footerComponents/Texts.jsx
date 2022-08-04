import React from "react";

function Texts(props) {
  return (
    <div>
      <div className="bg-black text-gray-600 font-bold h-24">
        <ul className="mx-10 flex flex-wrap cursor-pointer">
          {props.data?.map(x=>(<li key={x.id} className="basis-1/4">{x.text}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default Texts;
