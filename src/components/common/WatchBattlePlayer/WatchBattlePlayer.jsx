import React from 'react'
import { useSelector } from 'react-redux'
import EmptyItem from '../EmptyItem/EmptyItem'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import styles from '../PlayerStats/PlayerStats.module.css'
import PlayerWeapon from '../PlayersWeapon/PlayersWeapon'
import style from './enemyPlayer.module.css'

const classAssasin = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assasin_woman.jpg'

const classWarrior = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/warrior_man.jpg'

const classMonk = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/monk_woman.jpg'

const WatchBattlePlayer = ({type}) => {
    const watchBattle = useSelector((state) => state.watchBattle)

    const playerClass = watchBattle ? watchBattle.player1?.playerClass : null
    const armorFull = []

    const stats = watchBattle ? Object.entries(watchBattle.player1.total_stats).slice(6, 10) : null

    return (
        <div className={type !== 'enemy' ? style.player : style.player__enemy}>
            <ul className={style.player__items}>
                {armorFull.map((item, i) => {
                    return (
                        <li key={i}>
                            <EmptyItem img={item.img}/>
                        </li>
                    )
                })}
            </ul>

            <img
                className={style.player__pic}
                src={
                    playerClass && playerClass === 'warrior'
                        ? classWarrior
                        : playerClass === 'monk'
                            ? classMonk
                            : playerClass === 'assassin'
                                ? classAssasin
                                : ''
                }
            />

            <div className={style.player__right}>
                <PlayerWeapon className height={100} width={70}/>
                <div className={style.player__stats}>
                    <ul className={styles.player__stats}>
                        {stats && stats.map((item, i) => {
                            return (
                                <li key={i}>{item[0]}: {item[1]}</li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className={style.player__progress}>
                <PlayerProgressBarHpApMp
                    className={style.header__progress_element}
                    bgColor={'red'}
                    stat={watchBattle && watchBattle.player1?.hp}
                    type={'player'}
                    rotate={180}
                    fontSize={10}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'green'}
                    stat={watchBattle && watchBattle.player1?.ap}
                    type={'player'}
                    rotate={180}
                    fontSize={15}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'aqua'}
                    stat={watchBattle && watchBattle.player1?.mp}
                    rotate={180}
                    type={'player'}
                    fontSize={10}
                />
            </div>
        </div>
    )
}

export default WatchBattlePlayer
