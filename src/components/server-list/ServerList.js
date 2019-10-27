import React from "react";
import "./ServerList.css";
import ServerItem from "../server-item/ServerItem.js";
import { Link } from "react-router-dom";

class ServerList extends React.Component {
  constructor(props) {
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
  render() {
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
