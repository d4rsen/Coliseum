import React from 'react';
import {useSelector} from 'react-redux';
import styles from './PlayerStats.module.css';

const PlayerStats = () => {
    const player = useSelector((state) => state.player);

    console.log(player);
    return (
        <ul className={styles.player__stats}>
            <li>str: {player.total_stats.str}</li>
            <li>agl: {player.total_stats.agl}</li>
            <li>int: {player.total_stats.int}</li>
            <li>def: {player.total_stats.def}</li>
            <li>evs: {player.total_stats.evs}</li>
        </ul>
    );
};

export default PlayerStats;
