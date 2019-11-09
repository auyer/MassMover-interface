import React from "react";
import ReactDOM from "react-dom";
import DiscordLogin from "./DiscordLogin";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DiscordLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
