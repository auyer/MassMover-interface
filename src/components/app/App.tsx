import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DiscordLogin from "../discord-login/DiscordLogin";
import ServerList from "../server-list/ServerList";
import Main from "../main/Main";
import { BrowserRouter as Router } from "react-router-dom";

export interface IAppProps {}

export interface IAppState {
  authenticated: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      authenticated: true
    };
  }

  public render() {
    if (this.state.authenticated) {
      return (
        <div className="App">
          <header className="App-header">
            <Router>
              <ServerList />
              <Main />
            </Router>
          </header>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DiscordLogin />
        </header>
      </div>
    );
  }
}

export default App;
