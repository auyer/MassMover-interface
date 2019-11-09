import React from "react";
import { Switch, Route } from "react-router-dom";
import DiscordLogin from "../discord-login/DiscordLogin";
import GuildPannel from "../../containers/guild-pannel/GuildPannel";

export interface IMainProps {
  authenticated: boolean;
  logo: string;
}

const Main: React.FunctionComponent<IMainProps> = props => {
  // function Main(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/login" component={DiscordLogin} />
      {props.authenticated ? (
        <div>
          <Route exact path="/server/" component={GuildPannel} />
        </div>
      ) : (
        <img src={props.logo} className="App-logo" alt="logo" />
      )}
    </Switch>
  );
};

export default Main;
