import React from 'react';
import './ServerList.css';
import ServerItem from '../server-item/ServerItem.js';

class ServerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: [{"id": 1, "name":"Server1"},{"id": 2, "name":"Server2"}, {"id": 3, "name":"Server3"}],
            selectedServer : ""
        };
    }
    render() {
        return (
            <div className="sidenav">
                <ul className="server-list">
                    {this.state.servers.map( (server) => (
                        <li key={server.id}> <ServerItem server={server}/> </li>
                    ))}
                </ul>
            </div>
        );
  }
}

export default ServerList;
  