import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

// TODO : Improve test coveragew
function MainTest(): JSX.Element {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
