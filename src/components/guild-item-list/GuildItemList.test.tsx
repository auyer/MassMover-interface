import React from "react";
import ReactDOM from "react-dom";
import GuildItemList from "./GuildItemList";

// TODO : Improve test coveragew
function GuildItemTest(): JSX.Element {
  return <GuildItemList />;
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GuildItemTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
