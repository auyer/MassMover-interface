import React from "react";
import ReactDOM from "react-dom";
import Guild from "./Guild";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Guild match={{ params: { id: 1 } }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
