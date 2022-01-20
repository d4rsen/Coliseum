import React from 'react'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import Player from '../../../common/Player/Player'

import style from './AndreyTest.module.css'
import './button.css'

const AndreyTest = ({socket}) => {
    return (
        <div className={style.main__gym}>
            <Player type={'player'}/>
            <AttackDefendWithCyberButtons socket={socket}/>
            <Player type={'enemy'}/>
        </div>
    )
}

export default AndreyTest
