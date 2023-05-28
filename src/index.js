import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  fontSize: "20px",
  color: "Blue",
  border: "1px solid black"
};

customStyle.fontSize = "50px";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
