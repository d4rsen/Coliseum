import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_punchFromPlayerToEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../../redux/actions/playerActions'
import AttackDefendButtons from '../../../common/AttackDefendButtons/AttackDefendButtons'
import PlayerProgressBarHpApMp from '../../../common/PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import './button.css'

const GymPage = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battleHandler = (e) => {
        e.preventDefault()
        dispatch(ACTION_punchFromEnemyPlayerToPlayer(enemyPlayer.total_stats.dmg))
        dispatch(ACTION_punchFromPlayerToEnemyPlayer(player.total_stats.dmg))
    }
    return (<div className="container mt-3 d-flex flex-row">
        <div className="container">
            {/*<img src={player.armor_set[0].img} alt={player.armor_set[0].item_name}/>*/}
            {/*<img src={player.armor_set[1].img} alt={player.armor_set[1].item_name}/>*/}
            {/*<img src={player.armor_set[2].img} alt={player.armor_set[2].item_name}/>*/}
            {/*<img src={player.accessories_set[0].img} alt={player.accessories_set[0].item_name}/>*/}
            {/*<img src={player.accessories_set[1].img} alt={player.accessories_set[1].item_name}/>*/}
            {/*<img src={player.accessories_set[2].img} alt={player.accessories_set[2].item_name}/>*/}
            {/*<img src={player.weapon[0].img} alt={player.weapon[0].item_name}/>*/}
            {/*<img src={player.avatar} alt={player.nickName}/>*/}

            <div className="justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img style={{width: '255px', height: '255px'}} className="m-1 border border-primary border-2"
                         src={playerAvatar}/>
                    <img style={{width: '110px', height: '110px'}}
                         src="https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png"
                         className="m-1 border border-primary"/>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
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
                    <li className="list-group-item">Урон {player.total_stats.dmg}</li>
                    <li className="list-group-item">Защита {player.total_stats.def}</li>
                    <li className="list-group-item">Класс {player.playerClass}</li>
                    <li className="list-group-item">
                        Уклонение {player.total_stats.evs}
                    </li>
                </ul>
            </div>
        </div>


        {/* BUTTONS */}
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <AttackDefendButtons/>
            <button onClick={battleHandler} className="cybr-btn m-2">
                БОЙ<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">БОЙ</span>
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
                         src={playerAvatar}/>
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

            <PlayerProgressBarHpApMp stat={enemyPlayer.hp} bgColor="bg-danger"/>
            <PlayerProgressBarHpApMp stat={enemyPlayer.ap} bgColor="bg-success"/>
            <PlayerProgressBarHpApMp stat={enemyPlayer.mp} bgColor="bg-info"/>


            <div className="mb-5">
                <ul className="list-group">
                    <li className="list-group-item">Игрок {enemyPlayer.nickName}</li>
                    <li className="list-group-item">Уровень {enemyPlayer.lvl}</li>
                    <li className="list-group-item">Опыт {enemyPlayer.exp}</li>
                    <li className="list-group-item">Урон {enemyPlayer.total_stats.dmg}</li>
                    <li className="list-group-item">Защита {enemyPlayer.total_stats.def}</li>
                    <li className="list-group-item">Класс {enemyPlayer.playerClass}</li>
                    <li className="list-group-item">
                        Уклонение {enemyPlayer.total_stats.evs}
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}

export default GymPage