import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/variables'

const EnemyImg = () => {
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    return (
        <div className="character__card">
            <img
                src={
                    enemyPlayer.playerClass === 'warrior'
                        ? warriorLink
                        : enemyPlayer.playerClass === 'assassin'
                            ? assassinLink
                            : mageLink
                }
                alt=""
                className="character__img"
            />
        </div>
    )
}

export default EnemyImg
