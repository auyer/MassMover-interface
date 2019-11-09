import React from "react";
import ReactDOM from "react-dom";
import GuildItem from "./GuildItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <GuildItem RouteProps server={{ name: "serverName" }} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
