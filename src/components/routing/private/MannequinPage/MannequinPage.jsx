import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_punchFromPlayerToMannequin, SAGA_ACTION_mannequinRegenerate } from '../../../../redux/actions/mannequinActions'
import {
    playerAccessoriesSetSelector,
    playerArmorSetSelector,
    playerTotalStatsSelector,
    playerWeaponSelector
} from '../../../../redux/selectors/playerSelector'
import PlayerProgressBarHpApMp from '../../../common/PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'

import '../GymPage/button.css'

const MannequinPage = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const player = useSelector((state) => state.player)
    const mannequin = useSelector(state => state.mannequin)
    const playerTotalStats = playerTotalStatsSelector(state)
    const playerArmorSet = playerArmorSetSelector(state)
    const playerAccessoriesSet = playerAccessoriesSetSelector(state)
    const playerWeapon = playerWeaponSelector(state)

    const battleHandler = e => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMannequin(player.total_stats.dmg))
        dispatch(SAGA_ACTION_mannequinRegenerate())
    }

    return (
        <div className="container mt-3 d-flex flex-row">
            <div className="container">
                {/*<img src={playerArmorSet[0].img} alt={playerArmorSet[0].item_name}/>*/}
                {/*<img src={playerArmorSet[1].img} alt={playerArmorSet[1].item_name}/>*/}
                {/*<img src={playerArmorSet[2].img} alt={playerArmorSet[2].item_name}/>*/}
                {/*<img src={playerAccessoriesSet[0].img} alt={playerAccessoriesSet[0].item_name}/>*/}
                {/*<img src={playerAccessoriesSet[1].img} alt={playerAccessoriesSet[1].item_name}/>*/}
                {/*<img src={playerAccessoriesSet[2].img} alt={playerAccessoriesSet[2].item_name}/>*/}
                {/*<img src={playerWeapon.img} alt={playerWeapon.item_name}/>*/}
                {/*<img src={player.avatar} alt={player.nickName}/>*/}

                <div className="justify-content-center align-items-center">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img style={{width: '255px', height: '255px'}} className="m-1 border border-primary border-2"
                             src={playerAvatar} alt="..."/>
                        <img style={{width: '110px', height: '110px'}}
                             src="https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png"
                             className="m-1 border border-primary" alt="..."/>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary" alt="..."/>
                    </div>
                </div>

                {/*progressbar*/}

                <PlayerProgressBarHpApMp stat={player.hp} bgColor="bg-danger"/>
                <PlayerProgressBarHpApMp stat={player.ap} bgColor="bg-success"/>
                <PlayerProgressBarHpApMp stat={player.mp} bgColor="bg-info"/>


                <div className="mb-5">
                    <ul className="list-group">
                        <li className="list-group-item">Игрок {player.nickName}</li>
                        <li className="list-group-item">Уровень {player.lvl}</li>
                        <li className="list-group-item">Опыт {player.exp}</li>
                        <li className="list-group-item">Урон {playerTotalStats.dmg}</li>
                        <li className="list-group-item">Защита {playerTotalStats.def}</li>
                        <li className="list-group-item">Класс {player.playerClass}</li>
                        <li className="list-group-item">
                            Уклонение {playerTotalStats.evs}
                        </li>
                    </ul>
                </div>
            </div>


            {/* BUTTONS */}
            <div className="container d-flex flex-column justify-content-center align-items-center">

                <button
                    onClick={battleHandler}
                    className="cybr-btn m-2">
                    Бой
                    <span aria-hidden>_</span>
                    <span aria-hidden
                          className="cybr-btn__glitch">Бой</span>
                    <span aria-hidden className="cybr-btn__tag">theGame</span>
                </button>
            </div>


            <div className="container">
                <div className="justify-content-center align-items-center">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img style={{width: '255px', height: '255px'}} className="m-1 border border-danger border-2"
                             src="https://i.pinimg.com/originals/6a/05/29/6a0529a3b11180942ab7150b9ccbc13c.png"/>
                        <img style={{width: '110px', height: '110px'}}
                             src="https://atlas.wiki.fextralife.com/file/Atlas/bow_weapons_ranged_atlas_mmo_wiki_guide.png"
                             className="m-1 border border-danger"/>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                        <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    </div>
                </div>


                {/*progressbar*/}

                <PlayerProgressBarHpApMp stat={mannequin ? mannequin.hp : null} bgColor="bg-danger"/>


                <div className="mb-5">
                    <ul className="list-group">
                        <li className="list-group-item">{mannequin ? mannequin.nickName : null}</li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default MannequinPage