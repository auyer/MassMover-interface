import React from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../loader/Loader";
import ServerPannel from "../server-pannel/ServerPannel";
// import DiscordLogin from "../discord-login/DiscordLogin";

function Main(): JSX.Element {
  return (
    <Switch>
      {/* <Route exact path="/" component={DiscordLogin} /> */}
      <Route exact path="/server/" component={Loader} />
      <Route path="/server/:id" component={ServerPannel} />
    </Switch>
  );
}

export default Main;
