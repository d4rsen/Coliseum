import React from 'react'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import Player from '../../../common/Player/Player'

import style from './AndreyTest.module.css'
import './button.css'

const AndreyTest = ({socket}) => {
    return (
        <div className={style.main__gym}>
            <Player/>
            <AttackDefendWithCyberButtons socket={socket}/>
            <Player type={'enemy'}/>
        </div>
    )
}

export default AndreyTest
