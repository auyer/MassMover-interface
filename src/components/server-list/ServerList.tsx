import React from "react";
import "./ServerList.css";
import ServerItem from "../server-item/ServerItem";
import { Link } from "react-router-dom";

export interface IAppProps {}

export interface Server {
  id: number;
  name: string;
}

export interface IAppState {
  servers: Server[];
  selectedServer: string;
}

class ServerList extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      servers: [
        { id: 1, name: "Server1" },
        { id: 2, name: "Server2" },
        { id: 3, name: "Server3" }
      ],
      selectedServer: ""
    };
  }

  public render() {
    return (
      <div className="sidenav">
        <ul className="server-list">
          {this.state.servers.map(server => (
            <li key={server.id}>
              <Link to={`/server/${server.id}`}>
                <ServerItem server={server} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ServerList;
