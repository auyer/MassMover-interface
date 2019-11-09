import React from "react";
import ReactDOM from "react-dom";
import ServerList from "./ServerList";

import { BrowserRouter } from "react-router-dom";

// TODO : Improve test coveragew
function ServerListTest(): JSX.Element {
  return (
    <BrowserRouter>
      <ServerList />
    </BrowserRouter>
  );
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ServerListTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
