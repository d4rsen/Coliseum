import React from 'react'
import { useSelector } from 'react-redux'
import EmptyItem from '../EmptyItem/EmptyItem'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'

const Player = () => {
    const player = useSelector(state => state.player)
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'

    return (
        <div className="container">
            <div className="justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <EmptyItem pic={link} />
                  <EmptyItem pic={link}/>
                  <EmptyItem pic={link}/>
                    {/* <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"/> */}
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
    )
}

export default Player
