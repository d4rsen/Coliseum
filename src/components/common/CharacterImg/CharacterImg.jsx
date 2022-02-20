import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/variables'

const CharacterImg = () => {
    const player = useSelector(state => state.player)
    return (
        <div className="character__card">
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
