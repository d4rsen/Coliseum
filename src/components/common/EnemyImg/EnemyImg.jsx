import React from 'react'
import { useSelector } from 'react-redux'
import { assassinLink, mageLink, warriorLink } from '../../../utils/variables'

const EnemyImg = () => {
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    return (
        <div className="character__card">
            <div className="character__nickName character__nickName--enemy">
                {enemyPlayer && enemyPlayer.nickName}
            </div>
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
