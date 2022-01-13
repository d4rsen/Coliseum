import React from 'react'
import { useSelector } from 'react-redux'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'

const EnemyPlayer = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    return (
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
    )
}

export default EnemyPlayer