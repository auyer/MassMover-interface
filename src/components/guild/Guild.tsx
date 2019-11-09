import React from "react";

export interface IGuild {
  id: string;
  // The name of the guild. (2–100 characters)
  name: string;
  // The guild's icon. (base64 encoded)
  icon: string;
  // The number of members in the guild.
  memberCount: number;
}

const Guild: React.FunctionComponent<IGuild> = props => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h3>{props.name}</h3>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Guild;
