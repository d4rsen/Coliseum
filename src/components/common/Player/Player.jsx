import React from 'react';
import { useSelector } from 'react-redux';
import EmptyItem from '../EmptyItem/EmptyItem';
import style from './Player.module.css';
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp';
import PlayerStats from '../PlayerStats/PlayerStats';
import PlayerWeapon from '../PlayersWeapon/PlayersWeapon';

const Player = () => {
  const player = useSelector((state) => state.player);
  // const playerStats = player.total_stats
  const playerSet = player.armor_set;

  const link =
    'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg';
  const playerAvatar =
    'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png';
  const sword =
    'https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png';
  const xz = 'https://pic.xenomorph.ru/2019-03/1553747403_necropolis5.jpg';
  const  test =require('./warrior_man3.jpg')

  return (
    <div className={style.player}>
      <div className={style.player__items}>
        <EmptyItem height={80} width={100} />
        <EmptyItem height={80} width={100} />
        <EmptyItem height={80} width={100} />
        <EmptyItem height={80} width={100} />
        <EmptyItem height={80} width={100} />
        <EmptyItem height={80} width={100} />
      </div>

      <img className={style.player__pic} src={test} ></img>

      <div className={style.player__right}>
        <div className={style.player__stats}>
          <PlayerStats />
        </div>

        <PlayerWeapon className height={100} width={70} />

      </div>
      <PlayerProgressBarHpApMp />
    </div>
  );
};

export default Player;
