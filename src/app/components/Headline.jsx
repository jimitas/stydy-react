import React from "react";

const Headline = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-8xl" style={{ textTransform: "capitalize" }}>
        {props.page} page
      </h1>
      <h2 className="text-3xl">
        アイテムの数は
        {props.children}
        個です。
      </h2>
      <button onClick={props.handleReduce} className="bg-blue-700 hover:bg-blue-600 text-white rounded px-4 py-2">減らす</button>
    </div>
  );
};

export default Headline;
