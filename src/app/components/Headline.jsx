import React from "react";

const Headline = (props) => {
  return (
    <div>
      <h1 className="text-8xl" style={{ textTransform: "capitalize" }}>{props.page} page</h1>
      <h2>
        Get started by editing{"　"}
        {props.code}
        {props.children}
      </h2>
    </div>
  );
};

export default Headline;
