import React from "react";

const Headline = (props) => {
  console.log("headline", props);
  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>{props.page} page</h1>
      <h2>
        Get started by editing{"　"}
        {props.code}
        {props.children}
      </h2>
    </div>
  );
};

export default Headline;
