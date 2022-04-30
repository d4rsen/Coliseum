import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/constants'

const CharacterImg = () => {
    const player = useSelector(state => state.player)
    return (
        <div className="character__card">
            <div className="character__nickName">
                {player && player.nickName}
            </div>
            <img
                src={
                    player.playerClass === 'warrior'
                        ? warriorLink
                        : player.playerClass === 'assassin'
                            ? assassinLink
                            : mageLink
                }
                alt=""
                className="character__img"
            />
        </div>
    )
}

export default CharacterImg
