import React from "react";

function Texts(props) {
  return (
    <div>
      <div className="bg-black text-gray-600 font-bold h-24">
        <ul className="mx-10 flex flex-wrap cursor-pointer">
          {props.data?.map(x=>(<li key={x.id} className="basis-1/4">{x.text}</li>))}
          {/* <li className="basis-1/4">FAQ</li>
          <li className="basis-1/4">Help Center</li>
          <li className="basis-1/4">Account</li>
          <li className="basis-1/4">Privacy</li>
          <li className="basis-1/4">Legal Notices</li>
          <li className="basis-1/4">Contact Us</li>
          <li className="basis-1/4">Terms of Use</li>
          <li className="basis-1/4">Redeem Gift Cards</li>
          <li className="basis-1/4">Buy Gift Cards</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Texts;
