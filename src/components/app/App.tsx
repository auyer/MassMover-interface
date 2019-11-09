import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Main from "../main/Main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GuildPannel from "../../containers/guild-pannel/GuildPannel";

export interface IAppProps {}

export interface IAppState {
  authenticated: boolean;
  userID: string;
}

const App: React.FunctionComponent<IAppProps> = ({}) => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {!authenticated ? (
            <div className="sidenav">
              <button onClick={e => setAuthenticated(true)}>Login</button>
              <Link to={`/login/`}>
                <button>Login</button>
              </Link>
            </div>
          ) : (
            <GuildPannel />
          )}

          <Main authenticated={authenticated} logo={logo} />
        </Router>
      </header>
    </div>
  );
};

export default App;
