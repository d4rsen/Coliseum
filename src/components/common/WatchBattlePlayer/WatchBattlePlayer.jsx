import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/constants'
import CharacterStats from '../CharacterStats/CharacterStats'
import WatchBattlePlayerItems from './WatchBattlePlayerItems'

const WatchBattlePlayer = () => {
    const player1 = useSelector((state) => state.watchBattle?.player1)

    return (
        <div className="character">
            <WatchBattlePlayerItems/>
            <div className="character__card">
                <div className="character__nickName">
                    {player1 && player1.nickName}
                </div>
                <img
                    src={
                        player1.playerClass === 'warrior'
                            ? warriorLink
                            : player1.playerClass === 'assassin'
                                ? assassinLink
                                : mageLink
                    }
                    alt=""
                    className="character__img"
                />
            </div>
            <div className="character__hp-mp-ap">
                <div className="character__progressbar">
                    <div style={{height: player1.hp * 3}} className="character__hp">
                        {player1.hp}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player1.ap * 3}} className="character__ap">
                        {player1.ap}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player1.mp * 3}} className="character__mp">
                        {player1.mp}
                    </div>
                </div>
            </div>
            <CharacterStats/>
        </div>
    )
}

export default WatchBattlePlayer
