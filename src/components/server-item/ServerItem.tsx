import React from "react";
import "./ServerItem.css";

export interface SimpleGuild {
  id: string;
  // The name of the guild. (2–100 characters)
  name: string;
  // The guild's icon. (base64 encoded)
  icon: string;
  // The number of members in the guild.
  memberCount: number;
}

interface Props {
  guild: SimpleGuild;
  // setSelectedGuild: React.Dispatch<React.SetStateAction<String>>;
}

const ServerItem: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <button className="button">
        {props.guild.icon.length > 0 ? (
          <img src={`data:image/png;base64,${props.guild.icon}`} alt="Icon" />
        ) : null}

        <span>{props.guild.name} </span>
      </button>
    </div>
  );
};

export default ServerItem;
