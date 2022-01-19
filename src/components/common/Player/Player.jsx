import React from 'react'
import { useSelector } from 'react-redux'
import EmptyItem from '../EmptyItem/EmptyItem'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import PlayerStats from '../PlayerStats/PlayerStats'
import PlayerWeapon from '../PlayersWeapon/PlayersWeapon'
import style from './enemyPlayer.module.css'

// const link =
//   'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg';
// const playerAvatar =
//   'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png';
// const sword =
//   'https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png';
// const xz = 'https://pic.xenomorph.ru/2019-03/1553747403_necropolis5.jpg';
// const test =
//   'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assasin-wonam.jpg';

const classAssasin =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assasin-wonam.jpg'

const classWarrior =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/warrior_man.jpg'

const classMonk =
    'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/monk_woman.jpg'

const emptySwordLink =
    'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

const emptyItemImg =
    'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

const Player = ({type}) => {
    // console.log(type)
    const player = useSelector((state) => state.player)

    const playerClass = player.playerClass

    const armorFull = []

    const itemsFill = (function () {
        const armorSetEmpty = new Array(6).fill(emptyItemImg)

        player.armor_set.slice(0, 3).forEach((item) => armorFull.push(item))
        //  const accessoriesSet = armorFull.push(player.accessories_set);
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
                    stat={player?.hp}
                    type={'player'}
                    rotate={180}
                    fontSize={10}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'green'}
                    stat={player?.mp}
                    // height={100}
                    type={'player'}
                    rotate={180}
                    fontSize={15}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'aqua'}
                    stat={player?.ap}
                    // height={100}
                    rotate={180}
                    type={'player'}
                    fontSize={10}
                />
            </div>
        </div>
    )
}

export default Player
