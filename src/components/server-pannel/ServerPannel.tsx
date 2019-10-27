import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface RouteProps extends RouteComponentProps<any>, React.Props<any> {}

const ServerPannel: React.FunctionComponent<RouteProps> = props => {
  return (
    <div>
      <h1>{props.match.params.id}</h1>
    </div>
  );
};

export default ServerPannel;
