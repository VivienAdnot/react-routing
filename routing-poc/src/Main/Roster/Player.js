import React from 'react';
import { get } from './PlayerAPI';

const Player = (props) => {
    const player = get(parseInt(props.match.params.number, 10));

    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }

    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>{player.position}</h2>
        </div>
    );
};

export default Player;
