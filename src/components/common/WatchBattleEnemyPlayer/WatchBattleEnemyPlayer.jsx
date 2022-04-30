import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/constants'
import CharacterStats from '../CharacterStats/CharacterStats'
import WatchBattlePlayerItems from '../WatchBattlePlayer/WatchBattlePlayerItems'

const WatchBattleEnemyPlayer = () => {
    const player2 = useSelector(state => state.watchBattle?.player2)
    return (
        <div className="character">
            <WatchBattlePlayerItems/>
            <div className="character__card">
                <div className="character__nickName">
                    {player2 && player2.nickName}
                </div>
                <img
                    src={
                        player2.playerClass === 'warrior'
                            ? warriorLink
                            : player2.playerClass === 'assassin'
                                ? assassinLink
                                : mageLink
                    }
                    alt=""
                    className="character__img"
                />
            </div>
            <div className="character__hp-mp-ap">
                <div className="character__progressbar">
                    <div style={{height: player2.hp * 3}} className="character__hp">
                        {player2.hp}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player2.ap * 3}} className="character__ap">
                        {player2.ap}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player2.mp * 3}} className="character__mp">
                        {player2.mp}
                    </div>
                </div>
            </div>
            <CharacterStats/>
        </div>
    )
}

export default WatchBattleEnemyPlayer
