import React from "react";
import "./GuildItemList.css";
import GuildItem, { SimpleGuild } from "../guild-item/GuildItem";

interface IGuildListProps {
  guilds: SimpleGuild[];
  setSelectedGuild: Function;
}

const GuildItemList: React.FunctionComponent<IGuildListProps> = props => {
  return (
    <ul className="server-list">
      {props.guilds.map((guild: SimpleGuild) => (
        <li
          key={guild.id}
          onClick={() => {
            props.setSelectedGuild.bind(guild.id);
          }}
        >
          <GuildItem guild={guild} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(GuildItemList);
