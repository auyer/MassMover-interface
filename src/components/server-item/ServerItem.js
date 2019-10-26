import React from 'react';
import './ServerItem.css';

function ServerItem(props) {
    return (
    <div>
        <button className="button"><span>{props.server.name} </span></button>
    </div>
    );
}

export default ServerItem;
  