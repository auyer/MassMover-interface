import React from "react";
import "./DiscordLogin.css";
import discordLogo from "./discordWhite.svg";

function DiscordLogin(): JSX.Element {
  return (
    <div className="container">
      <a href="/api/discord/login" target="_blank" rel="noopener noreferrer">
        Login through <img src={discordLogo} alt="Discord logo" />
      </a>
    </div>
  );
}
export default DiscordLogin;
