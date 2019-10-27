import React from "react";
import "./ServerItem.css";

interface Props {
  server: {
    name: string;
  };
}

const ServerItem: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <button className="button">
        <span>{props.server.name} </span>
      </button>
    </div>
  );
};

export default ServerItem;
