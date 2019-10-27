import React from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../loader/Loader.js";
import ServerPannel from "../server-pannel/ServerPannel.js";
// import DiscordLogin from "../discord-login/DiscordLogin.js";

function Main(props) {
  return (
    <Switch>
      {/* <Route exact path="/" component={DiscordLogin} /> */}
      <Route exact path="/server/" component={Loader} />
      <Route path="/server/:id" component={ServerPannel} />
    </Switch>
  );
}

export default Main;
