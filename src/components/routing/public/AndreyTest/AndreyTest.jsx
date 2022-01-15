import React from 'react'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import Player from '../../../common/Player/Player'

import style from './AndreyTest.module.css'
import './button.css'

const AndreyTest = () => {
    return (
        <div className={style.mail__gym}>
            <Player/>
            <AttackDefendWithCyberButtons/>
            <Player/>
        </div>
    )
}

export default AndreyTest
