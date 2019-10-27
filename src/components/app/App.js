import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DiscordLogin from "../discord-login/DiscordLogin.js";
import ServerList from "../../components/server-list/ServerList";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "../main/Main.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true
    };
  }

  render() {
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
