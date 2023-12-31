import React from "react";

const Headline = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>{props.page} page</h1>
      <p>Get started by editing</p>
      <code>pages/{props.page}.js</code>
    </div>
  );
};

export default Headline;
