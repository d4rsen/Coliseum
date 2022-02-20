import React from 'react'
import { useSelector } from 'react-redux'
import CharacterImg from '../CharacterImg/CharacterImg'
import CharacterItems from '../CharacterItems/CharacterItems'
import CharacterStats from '../CharacterStats/CharacterStats'
import './Character.scss'

const Character = () => {
    const player = useSelector(state => state.player)

    return (
        <div className="character">
            <CharacterItems/>
            <CharacterImg/>
            <div className="character__hp-mp-ap">
                <div className="character__progressbar">
                    <div style={{height: player.hp * 3}} className="character__hp">
                        {player.hp}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player.ap * 3}} className="character__ap">
                        {player.ap}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: player.mp * 3}} className="character__mp">
                        {player.mp}
                    </div>
                </div>
            </div>
            <CharacterStats/>
        </div>
    )
}

export default Character