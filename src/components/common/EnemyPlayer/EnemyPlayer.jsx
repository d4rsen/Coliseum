// import React from 'react'
// import {useSelector} from 'react-redux'
// import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
//
// const EnemyPlayer = () => {
//     const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
//     const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
//     const enemyPlayer = useSelector(state => state.enemyPlayer)
//     return (
//         <div className="container">
//             <div className="justify-content-center align-items-center">
//                 <div className="d-flex flex-row justify-content-center align-items-center">
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                 </div>
//                 <div className="d-flex flex-column justify-content-center align-items-center">
//                     <img style={{width: '255px', height: '255px'}} className="m-1 border border-danger border-2"
//                          src={playerAvatar}/>
//                     <img style={{width: '110px', height: '110px'}}
//                          src="https://atlas.wiki.fextralife.com/file/Atlas/bow_weapons_ranged_atlas_mmo_wiki_guide.png"
//                          className="m-1 border border-danger"/>
//                 </div>
//                 <div className="d-flex flex-row justify-content-center align-items-center">
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                     <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
//                 </div>
//             </div>
//
//
//             {/*progressbar*/}
//
//             <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.hp : null} bgColor="bg-danger"/>
//             <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.ap : null} bgColor="bg-success"/>
//             <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.mp : null} bgColor="bg-info"/>
//
//
//             <div className="mb-5">
//                 <ul className="list-group">
//                     <li className="list-group-item">Игрок {enemyPlayer ? enemyPlayer.nickName : null}</li>
//                     <li className="list-group-item">Уровень {enemyPlayer ? enemyPlayer.lvl : null}</li>
//                     <li className="list-group-item">Опыт {enemyPlayer ? enemyPlayer.exp : null}</li>
//                     <li className="list-group-item">Урон {enemyPlayer ? enemyPlayer.total_stats.dmg : null}</li>
//                     <li className="list-group-item">Защита {enemyPlayer ? enemyPlayer.total_stats.def : null}</li>
//                     <li className="list-group-item">Класс {enemyPlayer ? enemyPlayer.playerClass : null}</li>
//                     <li className="list-group-item">
//                         Уклонение {enemyPlayer ? enemyPlayer.total_stats.evs : null}
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
//
// export default EnemyPlayer

import React from 'react'
import { useSelector } from 'react-redux'
import EmptyItem from '../EmptyItem/EmptyItem'
import style from '../Player/Player.module.css'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import styles from '../PlayerStats/PlayerStats.module.css'
import PlayerWeapon from '../PlayersWeapon/PlayersWeapon'

const link =
    'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
const playerAvatar =
    'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
const sword =
    'https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png'
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

const EnemyPlayer = () => {
    // console.log(type)
    const enemyPlayer = useSelector(state => state.enemyPlayer)

    const playerClass = enemyPlayer ? enemyPlayer.playerClass : null

    const armorFull = []

    const stats = enemyPlayer ? Object.entries(enemyPlayer.total_stats).slice(6, 10) : null

    const itemsFill = (function () {
        const armorSetEmpty = new Array(6).fill(emptyItemImg)

        enemyPlayer && enemyPlayer.armor_set.slice(0, 3).forEach((item) => armorFull.push(item))
        //  const accessoriesSet = armorFull.push(player.accessories_set);
        //  console.log('-------->',accessoriesSet)
        const armorEmptyPush = 6 - armorFull.length

        armorSetEmpty
            .slice(0, armorEmptyPush)
            .forEach((item) => armorFull.push({img: item}))

    }())

    return (
        <div className={style.player}>
            <div className={style.player__progress}>
                <PlayerProgressBarHpApMp
                    className={style.header__progress_element}
                    bgColor={'red'}
                    height={100}
                    stat={enemyPlayer?.hp}
                    type={'player'}
                    rotate={180}
                    fontSize={10}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'green'}
                    stat={enemyPlayer?.mp}
                    height={100}
                    type={'player'}
                    rotate={180}
                    fontSize={15}
                />
                <PlayerProgressBarHpApMp
                    bgColor={'aqua'}
                    stat={enemyPlayer?.hp}
                    height={100}
                    rotate={180}
                    type={'player'}
                    fontSize={10}
                />
            </div>
            <div className={style.player__right}>
                <PlayerWeapon className height={100} width={70}/>
                <div className={style.player__stats}>
                    <ul className={styles.player__stats}>
                        {stats && stats.map((item, i) => {
                            return (<li key={item[0]}>{item[0]},{item[1]}</li>)
                        })}

                        {/* <li>agl: {player.total_stats.agl}</li>
      <li>int: {player.total_stats.int}</li>
      <li>def: {player.total_stats.def}</li>
      <li>evs: {player.total_stats.evs}</li> */}
                    </ul>
                </div>
            </div>
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
            ></img>
            <ul className={style.player__items}>
                {armorFull.map((item, i) => {
                    return (
                        <li key={i}>
                            <EmptyItem img={item.img}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EnemyPlayer
