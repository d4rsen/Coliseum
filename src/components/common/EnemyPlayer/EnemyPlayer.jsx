import React from 'react'
import { useSelector } from 'react-redux'
import EmptyItem from '../EmptyItem/EmptyItem'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import PlayerStats from '../PlayerStats/PlayerStats'
import PlayerWeapon from '../PlayersWeapon/PlayersWeapon'
import style from './Player.module.css'

const classAssasin =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assassin_woman_cc.png'

const classWarrior =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/warrior_man_cc.png'

const classMonk =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/mong_woman_cc.png'

const emptySwordLink =
    'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

const emptyItemImg =
    'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

const EnemyPlayer = () => {
    // console.log(type)
    const type = 'enemy'
    const enemyPlayer = useSelector((state) => state.enemyPlayer)

    const playerClass = enemyPlayer?.playerClass

    const armorFull = []

    const itemsFill = (function () {
        const armorSetEmpty = new Array(6).fill(emptyItemImg)

        enemyPlayer?.armor_set?.slice(0, 3).forEach((item) => armorFull.push(item))
        // const accessoriesSet = armorFull.push(player.accessories_set)
        enemyPlayer?.accessories_set.forEach(item => armorFull.push(item))
        //  console.log('-------->',accessoriesSet)
        const armorEmptyPush = 6 - armorFull.length

        armorSetEmpty
            .slice(0, armorEmptyPush)
            .forEach((item) => armorFull.push({img: item}))

    }())

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
                    playerClass === 'warrior'
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
                    <PlayerStats/>
                </div>
            </div>
            <div className={style.player__progress}>
                <PlayerProgressBarHpApMp
                    className={style.header__progress_element}
                    bgColor={'red'}
                    // height={100}
                    stat={enemyPlayer?.hp}
                    type={'player'}
                    rotate={180}
                    fontSize={10}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'green'}
                    stat={enemyPlayer?.mp}
                    // height={100}
                    type={'player'}
                    rotate={180}
                    fontSize={15}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'aqua'}
                    stat={enemyPlayer?.hp}
                    // height={100}
                    rotate={180}
                    type={'player'}
                    fontSize={10}
                />
            </div>
        </div>
    )
}

export default EnemyPlayer
