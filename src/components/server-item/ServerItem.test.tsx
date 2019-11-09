import React from "react";
import ReactDOM from "react-dom";
import ServerItem from "./ServerItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ServerItem RouteProps server={{ name: "serverName" }} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
