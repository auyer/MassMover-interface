import React from "react";
import "./ServerList.css";
import ServerItem, { SimpleGuild } from "../server-item/ServerItem";

interface IGuildListProps {
  guilds: SimpleGuild[];
  setSelectedGuild: React.Dispatch<React.SetStateAction<String>>;
}

const ServerList: React.FunctionComponent<IGuildListProps> = props => {
  return (
    <ul className="server-list">
      {props.guilds.map((guild: SimpleGuild) => (
        <li key={guild.id} onClick={() => {props.setSelectedGuild.bind(guild.id)}}>
          <ServerItem guild={guild} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(ServerList);
