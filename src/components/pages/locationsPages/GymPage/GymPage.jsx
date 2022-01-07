import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ACTION_getEnemyStateFromWS,
    ACTION_unsetAttackBodyPlayer,
    ACTION_unsetAttackHeadPlayer,
    ACTION_unsetAttackLeftHandPlayer,
    ACTION_unsetAttackLegsPlayer,
    ACTION_unsetAttackRightHandPlayer,
    ACTION_unsetDefendBodyPlayer,
    ACTION_unsetDefendHeadPlayer,
    ACTION_unsetDefendLeftHandPlayer,
    ACTION_unsetDefendLegsPlayer,
    ACTION_unsetDefendRightHandPlayer
} from '../../../../redux/actions/battleActions'
import { ACTION_getEnemyPlayer, ACTION_punchFromPlayerToEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../../redux/actions/playerActions'
import AttackDefendButtons from '../../../common/AttackDefendButtons/AttackDefendButtons'
import PlayerProgressBarHpApMp from '../../../common/PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import './button.css'

const GymPage = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const dispatch = useDispatch()
    const [isDisabledAttack, setIsDisabledAttack] = useState(false)
    const [isDisabledDefend, setIsDisabledDefend] = useState(false)
    const [socket, setSocket] = useState(new WebSocket('wss://herokuws.herokuapp.com/'))
    // const [socket, setSocket] = useState(new WebSocket('ws://localhost:8000/'))
    const player = useSelector((state) => state.player)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const battleEnemyPlayer = useSelector(state => state.battleEnemyPlayer)
    const room = useSelector(state => state.room)

    // WEBSOCKET
    useEffect(() => {
        socket.onopen = () => {
            console.log(enemyPlayer)
            socket.send(JSON.stringify({
                id: room.id,
                method: 'connection',
                player,
                battlePlayer,
                // enemyPlayer,
                // battleEnemyPlayer
            }))
        }
    }, [])
    useEffect(() => {
        socket.onmessage = (e) => {
            const WSenemy = JSON.parse(e.data)
            console.log(WSenemy)
            if (WSenemy.player.nickName !== player.nickName) {
                dispatch(ACTION_getEnemyPlayer(WSenemy.player))
                dispatch(ACTION_getEnemyStateFromWS(WSenemy.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(WSenemy.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
                dispatch(ACTION_punchFromPlayerToEnemyPlayer(WSenemy.enemyPlayer.total_stats.dmg, battleEnemyPlayer, battleEnemyPlayer))
            }
        }
    }, [])
    useEffect(() => {
        if (player.hp || enemyPlayer.hp <= 0) {
        }
    })
    // useEffect(() => {
    //     socket.onclose(() => {
    //         dispatch({type: UNSET_ENEMY_PLAYER})
    //     })
    // }, [])

    const battleHandler = (e) => {
        e.preventDefault()
        socket.send(JSON.stringify({
            id: room.id,
            method: 'message',
            player: player,
            battlePlayer: battlePlayer
        }))

    }

    const unsetAll = () => {
        dispatch(ACTION_unsetAttackHeadPlayer())
        dispatch(ACTION_unsetAttackLeftHandPlayer())
        dispatch(ACTION_unsetAttackRightHandPlayer())
        dispatch(ACTION_unsetAttackBodyPlayer())
        dispatch(ACTION_unsetAttackLegsPlayer())
        dispatch(ACTION_unsetDefendHeadPlayer())
        dispatch(ACTION_unsetDefendLeftHandPlayer())
        dispatch(ACTION_unsetDefendRightHandPlayer())
        dispatch(ACTION_unsetDefendBodyPlayer())
        dispatch(ACTION_unsetDefendLegsPlayer())
    }
    const unsetHandler = (e) => {
        e.preventDefault()
        unsetAll()
        setIsDisabledAttack(false)
        setIsDisabledDefend(false)
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
            <AttackDefendButtons
                isDisabledAttack={isDisabledAttack}
                isDisabledDefend={isDisabledDefend}
                setIsDisabledAttack={setIsDisabledAttack}
                setIsDisabledDefend={setIsDisabledDefend}/>

            <button className="cybr-btn" onClick={unsetHandler}>
                Отмена
                <span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Отмена_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            <button
                onClick={battleHandler}
                className="cybr-btn m-2"
                disabled={isDisabledAttack && isDisabledDefend ? false : true}>
                {isDisabledAttack && isDisabledDefend ? 'Бой' : 'Сделайте выбор'}
                <span aria-hidden>_</span>
                <span aria-hidden
                      className="cybr-btn__glitch">{isDisabledAttack && isDisabledDefend ? 'Бой_' : 'Сделайте выбор_'}</span>
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

            <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.hp : null} bgColor="bg-danger"/>
            <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.ap : null} bgColor="bg-success"/>
            <PlayerProgressBarHpApMp stat={enemyPlayer ? enemyPlayer.mp : null} bgColor="bg-info"/>


            <div className="mb-5">
                <ul className="list-group">
                    <li className="list-group-item">Игрок {enemyPlayer ? enemyPlayer.nickName : null}</li>
                    <li className="list-group-item">Уровень {enemyPlayer ? enemyPlayer.lvl : null}</li>
                    <li className="list-group-item">Опыт {enemyPlayer ? enemyPlayer.exp : null}</li>
                    <li className="list-group-item">Урон {enemyPlayer ? enemyPlayer.total_stats.dmg : null}</li>
                    <li className="list-group-item">Защита {enemyPlayer ? enemyPlayer.total_stats.def : null}</li>
                    <li className="list-group-item">Класс {enemyPlayer ? enemyPlayer.playerClass : null}</li>
                    <li className="list-group-item">
                        Уклонение {enemyPlayer ? enemyPlayer.total_stats.evs : null}
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}

export default GymPage